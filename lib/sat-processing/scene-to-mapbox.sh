#!/bin/sh
# ignore some shellchecks
# shellcheck disable=SC2044,SC1091,SC2148

cd /processing
echo "Downloading and processing scenes"
python processing-downloading.py processing-config.yml download
python processing-downloading.py processing-config.yml process

# send geotiffs to mapbox
echo "Uploading scenes to mapbox"

# get hazard names
HAZARDS=$(for sensor in $(cat ./processing-config.yml | shyaml keys sensors); do cat ./processing-config.yml | shyaml keys sensors.$sensor.hazards; done)

# output folder where images are held
ls -alF ./moz-2015

for HAZARD in $HAZARDS;
do
  for PREFIX in pre post;
  do
    FILENAME=$PREFIX-$HAZARD
    FILEPATH=./$HAZARD/$FILENAME.tif
    echo "Uploading ${MAPBOX_ACCOUNT}.${FILENAME}"
    mapbox upload "${MAPBOX_ACCOUNT}.${FILENAME}" "$FILEPATH"
  done;
done
echo "Files sent to mapbox"
