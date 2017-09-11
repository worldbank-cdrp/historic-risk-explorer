# ignore some shellchecks
# shellcheck disable=SC2044,SC1091,SC2148
# get environmental variables from .env
source .env
export MAPBOX_ACCESS_TOKEN
# run processing.py
echo "Downloading and processing scenes"
python processing.py _processing-config.yml
# send geotiffs to mapbox
echo "Uploading scenes to mapbox"
for f in $(find ../data/*TIF)
do
  FILENAME=$(basename "$f" .TIF)
  LOCATION=$(basename "$(dirname "$f")")
  echo "Uploading ${MAPBOX_ACCOUNT}.${LOCATION}-${FILENAME}"
  mapbox upload "${MAPBOX_ACCOUNT}.${LOCATION}-${FILENAME}" "$f"
done
echo "Files sent to mapbox"
