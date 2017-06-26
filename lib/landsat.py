# libraries
from tempfile import mkdtemp
from sdownloader import Landsat8
from gippy import GeoImage
import numpy as np
#cdisaster_scenes = l.download( create disaster scene groups
landsat_file = open('landsat.txt', 'r')
disaster_groups = [
    line.strip('\n').split(',')
    for line in landsat_file.readlines()
]
# process each pre-post file grouping
for group in disaster_groups:
    temp_folder = mkdtemp()
    l = Landsat8(download_dir = temp_folder)
    # download provided scenes to temp
    disaster_scenes = l.download(group[1:], bands=[5,4,3,])
    print("downloaded: " + str([s.name for s in disaster_scenes]))
    #ndsat8(download_dir = temp_folder) make GeoImage from downed bands
    for idx,itm in enumerate(disaster_scenes.scenes):
        disaster_files = disaster_scenes[idx].files
        # bands are in order of r,g,b
        bands = disaster_files[0:3]
        scene_geoimg = GeoImage.open(
            filenames=bands,
            bandnames=(['red', 'green', 'blue']),
            nodata=0
        )
        print("Geoimg generated")
        # contrast enhancement:
            # clip last 5% of green , and 10% of nir/blue dn values, then rescale them
        print("Histogram Equalization for bands")
        for bandnum, band in enumerate(scene_geoimg.bandnames()):
            color = scene_geoimg.bandnames()[bandnum]
            if color == 'green':
                scene_geoimg[color] = scene_geoimg[color].autoscale(0,255,percent=5.0)
            else:
                scene_geoimg[color] = scene_geoimg[color].autoscale(0,255,percent=10.0)
