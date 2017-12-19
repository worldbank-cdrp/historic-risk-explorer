From the project's root, execute `./lib/worldbank/process-all-data.sh` with Mapbox credentials in the environment to process the Worldbank rasters and vectors, and to upload the finished tilesets for visualization in production.

Requires:

- GDAL and OGR
- tippecanoe
- Mapbox CLI
- Postgres server
- PostGIS extension
