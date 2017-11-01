#!/usr/bin/env bash

set -e

echo "Confirming necessary environment variables"
: "${MAPBOX_ACCOUNT:?}"
: "${MAPBOX_ACCESS_TOKEN:?}"

echo "Set up database"
dropdb historic-risk-explorer
createdb historic-risk-explorer
psql --quiet -d historic-risk-explorer -c "CREATE EXTENSION postgis"

echo "Make necessary directories"
mkdir -p ./data/worldbank/geotiff
mkdir -p ./data/worldbank/gridded
mkdir -p ./data/worldbank/admin
mkdir -p ./data/worldbank/tiles
mkdir -p ./data/worldbank/tmp

echo "Create grids (the smallest grid may take a while)"
for size in 1 5 25
do
	echo "Create ${size}km grid"
	./lib/worldbank/create-grid.js $size
	ogr2ogr \
		--config PG_USE_COPY YES \
		-overwrite \
		-nln "grid${size}km" \
		-f "PostgreSQL" \
		PG:'dbname=historic-risk-explorer' \
		"./data/other/grid${size}km.geojson"
done

# echo "Get admin boundaries"
# # `rm` with `--force` option will be silent if no files are found
# rm -f ./data/other/ne_10m_admin_1_states_provinces.*
# curl \
# 	--output ./data/other/ne_10m_admin_1_states_provinces.zip \
# 	http://naciscdn.org/naturalearth/10m/cultural/ne_10m_admin_1_states_provinces.zip
# unzip -o -d ./data/other ./data/other/ne_10m_admin_1_states_provinces.zip
# # Could've just loaded the SHP directly into PostGIS,
# # but we'll need the GeoJSON later, for creating MBTiles
# ogr2ogr \
# 	-f GeoJSON \
# 	./data/other/ne_10m_admin_1_states_provinces.geojson \
# 	./data/other/ne_10m_admin_1_states_provinces.shp
# # COPY is much faster than INSERT, so speed up using that clause
ogr2ogr \
	--config PG_USE_COPY YES \
	-overwrite \
	-nlt PROMOTE_TO_MULTI \
	-nln admin_boundaries \
	-f "PostgreSQL" \
	PG:'dbname=historic-risk-explorer' \
	'./data/other/ne_10m_admin_1_states_provinces.geojson'

echo "For each disaster, create the aggregate vector layers"
find \
	"./data/worldbank/Dissolved Files" \
	"./data/worldbank/Dissolved Files/Point Format" \
	-maxdepth 1 \
	-name "*.shp" |
while read -r f; do
	bn="$(basename "$f")"
	disaster_code="${bn:0:11}"
	country="${bn:0:3}"

	# Also, ignore the non-point versions of the point files
	case "$country" in
		"ARM") country_iso="AM" ;;
		"CHL") country_iso="CL" ;;
		"DOM") country_iso="DO"; if [[ "$f" != *"Point Format"* ]]; then continue; fi; ;;
		"FJI") country_iso="FJ"; if [[ "$f" != *"Point Format"* ]]; then continue; fi; ;;
		"HTI") country_iso="HT"; if [[ "$f" != *"Point Format"* ]]; then continue; fi; ;;
		"IDN") country_iso="ID" ;;
		"MOZ") country_iso="MZ" ;;
		"PAK") country_iso="PK" ;;
		"SLV") country_iso="SV"; if [[ "$f" != *"Point Format"* ]]; then continue; fi; ;;
	esac	

	echo "Processing ${disaster_code}"
	rm -f ./data/worldbank/tmp/exposure_loss.geojson
	ogr2ogr \
		-f GeoJSON \
		./data/worldbank/tmp/exposure_loss.geojson \
		"$f"
	ogr2ogr \
		--config PG_USE_COPY YES \
		-overwrite \
		-nln exposure_loss \
		-f "PostgreSQL" \
		PG:'dbname=historic-risk-explorer' \
		'./data/worldbank/tmp/exposure_loss.geojson'

	echo "Create subnational-aggregated data from the point-based exposure-loss files"
	# Need to do special string escaping to get embedded
	# Is there a chance of SQL injection through a wonky filename? Sure.
	# Is this a likely or easy vector of attack? Nope.
	psql -d "historic-risk-explorer" -c "
		CREATE TABLE exposure_loss_aggregate AS
			SELECT
				A.wkb_geometry AS wkb_geometry,
				A.name AS name,
				A.adm1_code AS code,
				SUM(B.EXP) AS EXP,
				SUM(B.ALOSS) AS ALOSS,
				SUM(B.ALOSS)/NULLIF(SUM(B.EXP), 0) AS LR
			FROM admin_boundaries AS A
			JOIN exposure_loss AS B
			ON ST_Contains(A.wkb_geometry, B.wkb_geometry)
			WHERE A.iso_a2 = '""${country_iso}""'
			GROUP BY
				A.wkb_geometry,
				A.name,
				A.adm1_code;
		"
	rm -f "./data/worldbank/admin/${disaster_code}_admin.geojson"
	ogr2ogr \
		-f GeoJSON \
		"./data/worldbank/admin/${disaster_code}_admin.geojson" \
		PG:'dbname=historic-risk-explorer' \
		-sql 'SELECT * FROM exposure_loss_aggregate'
	psql --quiet -d "historic-risk-explorer" -c "DROP TABLE exposure_loss_aggregate"

	echo "Create vector grids from the point-based exposure-loss files"
	for size in 1 5 25
	do
		echo "Intersect the exposure-loss data with the ${size}km grid"
		psql -d "historic-risk-explorer" -c "
			CREATE TABLE exposure_loss_aggregate AS
				SELECT
					A.wkb_geometry AS wkb_geometry,
					SUM(B.EXP) AS EXP,
					SUM(B.ALOSS) AS ALOSS,
					SUM(B.ALOSS)/NULLIF(SUM(B.EXP), 0) AS LR
				FROM grid AS A
				JOIN exposure_loss AS B
				ON ST_Contains(A.wkb_geometry, B.wkb_geometry)
				GROUP BY A.wkb_geometry;
			"
		rm -f "./data/worldbank/gridded/${disaster_code}_grid${size}km.geojson"
		ogr2ogr \
			-f GeoJSON \
			"./data/worldbank/gridded/${disaster_code}_grid${size}km.geojson" \
			PG:'dbname=historic-risk-explorer' \
			-sql 'SELECT * FROM exposure_loss_aggregate'

		echo "Clean up temporary files and tables"
		rm ./data/other/grid.geojson
		psql --quiet -d "historic-risk-explorer" -c "DROP TABLE exposure_loss_aggregate"
	done
	rm ./data/worldbank/tmp/exposure_loss.geojson
done

echo "Convert and upload all exposure-loss vector data as vector tiles"
find \
	"./data/worldbank/gridded" \
	"./data/worldbank/admin" \
	-name "*.geojson" |
while read -r f; do
	echo "Processing $(basename "$f" ".geojson") vector tiles"
	tippecanoe \
		--layer "exposure-loss" \
		--minimum-zoom 4 --maximum-zoom 13 \
		--detect-shared-borders \
		--simplification 10 \
		--force --output "./data/worldbank/tiles/$(basename "$f" ".geojson").mbtiles" \
		"$f"
	mapbox upload \
		"${MAPBOX_ACCOUNT}.$(basename "$f" ".geojson")" \
		"./data/worldbank/tiles/$(basename "$f" ".geojson").mbtiles"
done

echo "Upload the boundaries themselves"
tippecanoe \
	--layer "admin-boundaries" \
	--minimum-zoom 4 --maximum-zoom 13 \
	--detect-shared-borders \
	--simplification 10 \
	--force --output "./data/worldbank/tiles/admin-boundaries.mbtiles" \
	./data/other/ne_10m_admin_1_states_provinces.geojson
mapbox upload \
	"${MAPBOX_ACCOUNT}.admin-boundaries" \
	"./data/worldbank/tiles/admin-boundaries.mbtiles"

echo "Convert all vector hazard data to 8-bit GeoTIFFs"
gdal_rasterize \
	-ot Byte \
	-tr 0.005 0.005 \
	-a MEAN_DR_Sc \
	-a_nodata 0 \
	-l DR_Stack_Final2_Dissolve2 \
	"./data/worldbank/DevSeed - GDBs/Hazard Map/DR_Stack_Final2_Dissolve2.shp" \
	./data/worldbank/geotiff/DR_Stack_Final2_Dissolve2.tif
gdal_rasterize \
	-ot Byte \
	-tr 0.005 0.005 \
	-a Intensit_1 \
	-a_nodata 0 \
	-l ElSalvador_EQ_2001_Isoseismal_2001J \
	"./data/worldbank/DevSeed - GDBs/Hazard Map/ElSalvador_EQ_2001_Isoseismal_2001J.shp" \
	./data/worldbank/geotiff/ElSalvador_EQ_2001_Isoseismal_2001J.tif
# There is no continuous information, so just use `OBJECTID` as value
gdal_rasterize \
	-ot Byte \
	-tr 0.005 0.005 \
	-a OBJECTID \
	-a_nodata 0 \
	-l MoMa_FL_2015_floodedArea \
	"./data/worldbank/DevSeed - GDBs/Hazard Map/MoMa_FL_2015_floodedArea.shp" \
	./data/worldbank/geotiff/MoMa_FL_2015_floodedArea.tif
gdal_rasterize \
	-ot Byte \
	-tr 0.005 0.005 \
	-a id \
	-a_nodata 0 \
	-l Tambora_VO_1815_Ashfallring_mm \
	"./data/worldbank/DevSeed - GDBs/Hazard Map/Tambora_VO_1815_Ashfallring_mm.shp" \
	./data/worldbank/geotiff/Tambora_VO_1815_Ashfallring_mm.tif

echo "Convert all remaining hazard GeoTIFFs to 8-bit"
find "./data/worldbank/DevSeed - GDBs/Hazard Map" -name "*.tif" |
while read -r f; do
	gdal_translate \
		-of GTiff \
		-ot Byte \
		-a_nodata 0 \
		"$f" \
		"./data/worldbank/geotiff/$(basename "$f")"
done

echo "Upload hazard rasters"
find "./data/worldbank/geotiff" -name "*.tif" |
while read -r f; do
	bn=$(basename "$f" ".tif")
	echo "Uploading ${bn} hazard raster"
	mapbox upload "${MAPBOX_ACCOUNT}.${bn}" "$f"
done
