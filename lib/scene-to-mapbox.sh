#!/usr/bin/env bash

# get environmental variables from .env
source .env
export MAPBOX_ACCESS_TOKEN
#run processing.py
echo "Downloading and processing scenes"
python processing.py _processing-config.yml
# send geotiffs to mapbox
echo "Uploading scenes to mapbox"
TIFDIR="../data/*TIF"
for tif in $TIFDIR
do
if [[ "$tif" == *\.TIF* ]]
then
  FILENAME=$(basename "$tif" .TIF)
  LOCATION=$(basename "$(dirname "$tif")")
  echo "Uploading ${MAPBOX_ACCOUNT}.${LOCATION}-${FILENAME}"
  mapbox upload "${MAPBOX_ACCOUNT}.${LOCATION}-${FILENAME}" "$tif"
fi
done
echo "Files sent to mapbox"
