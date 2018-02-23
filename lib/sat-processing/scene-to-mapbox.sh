#!/bin/sh
# ignore some shellchecks
# shellcheck disable=SC2044,SC1091,SC2148

echo "Downloading and processing scenes"
python processing-downloading.py processing-config.yml download
python processing-downloading.py processing-config.yml process

# =========================== > Output for pak-2010 <===========================
# The output files are 4, we need to mosaic the images the pre and post. # #Merge
# gdalwarp -dstnodata 0 -of GTiff no-null-corrected-post-LT05_L1TP_151037_20100812_20161014_01_T1.tif no-null-corrected-post-LT05_L1TP_151038_20100812_20161014_01_T1.tif landsat5-hazards-pak-2010-post.tif
# gdalwarp -dstnodata 0 -of GTiff no-null-corrected-pre-LT05_L1TP_151037_20100524_20161016_01_T1.tif no-null-corrected-pre-LT05_L1TP_151038_20100524_20161016_01_T1.tif landsat5-hazards-pak-2010-pre.tif
# #Upload
# mapbox-upload wbg-cdrp.landsat5-hazards-pak-2010-post landsat5-hazards-pak-2010-post.tif
# mapbox-upload wbg-cdrp.landsat5-hazards-pak-2010-pre landsat5-hazards-pak-2010-pre.tif

# ===========================> Output for moz-2015 <=========================
# The data is not as we expected we need to make manual cleaning
# gdal_translate -of GTiff -a_nodata 0 LC81670722014347LGN00_B4.TIF landsat8-hazards-moz-2015-pre.tif
# gdal_translate -of GTiff -a_nodata 0 LC81670722015046LGN00_B4.TIF landsat8-hazards-moz-2015-post.tif
# #conver to 8 bits, ther is not scale >1 
# gdal_translate -ot Byte -scale -b 1 -b 1 -b 1 landsat8-hazards-moz-2015-pre.tif landsat8-hazards-moz-2015-pre-8bits.tif
# gdal_translate -ot Byte -scale -b 1 -b 1 -b 1 landsat8-hazards-moz-2015-post.tif landsat8-hazards-moz-2015-post-8bits.tif
# #Upload
# mapbox-upload wbg-cdrp.landsat8-hazards-moz-2015-pre landsat8-hazards-moz-2015-pre-8bits.tif
# mapbox-upload wbg-cdrp.landsat8-hazards-moz-2015-post landsat8-hazards-moz-2015-post-8bits.tif

# ===========================> Output for hit-2010 <=========================
# The pre image  is 17 GB(it cannot upload to mapbox), we need to reduce the size, so as JPEG, The post file is not complete 
# gdal_translate -co COMPRESS=JPEG -co TILED=YES dg-pre-hti-2010.tif dg-pre-hti-2010._JPEG.tif



