echo ${1}
echo ${2}
echo ${3}

BANDS_DIR=${1}
SCENE=${2}

# REPROJECT BANDS
for BAND in $(find ${BANDS_DIR}/${SCENE}/*.TIF); do
    BAND=${BAND%.*}
    gdalwarp -t_srs EPSG:3857 ${BAND}.TIF ${BAND}-projected.TIF;
done

# tac reverses order, providing the 3/4/5 stack order needed for true color.
PROJECTED_BANDS=$(find ./ -name '*[0-9]-projected.TIF' | tac)

# COMBINE BANDS
convert -combine ${PROJECTED_BANDS} ${BANDS_DIR}/${SCENE}-RGB.TIF

# THOUGHTLESS CONTRAST ENHANCEMENT
convert -channel B -gamma 0.925 -channel R -gamma 1.00 \
-channel RGB -sigmoidal-contrast 50x20% ${BANDS_DIR}/${SCENE}-RGB.TIF ${BANDS_DIR}/${SCENE}-RGB-corrected.tif