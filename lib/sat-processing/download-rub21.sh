
pre="pre"
# mkdir $pre
# mkdir pre/

# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003B16A00/3021000.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003B16A00/3021001.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003B16A00/3021002.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003B16A00/3021003.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003B16A00/3021010.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003B16A00/3021012.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003B16A00/3021020.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003B16A00/3021021.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003B16A00/3021022.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003B16A00/3021023.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003B16A00/3021030.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003B16A00/3021032.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003B16A00/3021200.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003B16A00/3021201.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003B16A00/3021210.tif

#Name of files
declare -a arrTifs
for file in $pre/*.tif
do
    arrTifs=("${arrTifs[@]}" "$file")
done

# Merge all Tif Files in On

gdalwarp -dstnodata 0 -of GTiff  "${arrTifs[@]}" mosaic.tif



# mkdir post & cd post/


# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3002331.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3002333.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3003220.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3003221.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3003222.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3003223.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3020111.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3020113.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3020131.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3020133.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3020311.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3020313.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3020331.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3021000.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3021001.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3021002.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3021003.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3021020.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3021021.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3021022.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3021023.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3021200.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3021201.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3021202.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3021203.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3021220.tif
# wget http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/1030010003BA7100/3021221.tif

