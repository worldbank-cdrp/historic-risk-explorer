# ignore some shellchecks
# shellcheck disable=SC2044,SC1091,SC2148

cd ${1}

echo "Downloading and processing landsat and sentinel scenes"
python processing-downloading.py processing-config.yml download
python processing-downloading.py processing-config.yml process


echo "Downloading and processing dg scenes"


# send geotiffs to mapbox
echo "Uploading scenes to mapbox"

# get hazard names
HAZARDS=$(for sensor in $(cat processing-config.yml | shyaml keys sensors); do cat processing-config.yml | shyaml keys sensors.$sensor.hazards; done)

# output folder where images are held
OUTPUT='./output'

for HAZARD in $HAZARDS;
do
  for PREFIX in pre post;
  do
    FILENAME=$OUTPUT/$PREFIX-$HAZARD.tif
    # echo "Uploading ${MAPBOX_ACCOUNT}.${LOCATION}-${FILENAME}"
    # mapbox upload "${MAPBOX_ACCOUNT}.${LOCATION}-${FILENAME}" "$f"
  done;
done
echo "Files sent to mapbox"
