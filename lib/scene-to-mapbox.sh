# ignore some shellchecks
# shellcheck disable=SC2044,SC1091,SC2148

echo "Downloading and processing landsat and sentinel scenes"
python processing.py processing-config.yml

echo "Downloading and processing dg scenes"


# send geotiffs to mapbox
# echo "Uploading scenes to mapbox"
# for f in $(find ./output/*TIF)
# do
#   FILENAME=$(basename "$f" .TIF)
#   LOCATION=$(basename "$(dirname "$f")")
#   echo "Uploading ${MAPBOX_ACCOUNT}.${LOCATION}-${FILENAME}"
#   mapbox upload "${MAPBOX_ACCOUNT}.${LOCATION}-${FILENAME}" "$f"
# done
# echo "Files sent to mapbox"
