# libraries
from tempfile import mkdtemp
from sdownloader import Landsat8
from gippy import GeoImage
import numpy as np
import os
# disaster_scenes
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
        disaster_scene = disaster_scenes[idx].name
        # bands are in order of r,g,b
        bands = disaster_files[0:3]
        scene_geoimg = GeoImage.open(
            filenames=bands,
            bandnames=(['red', 'green', 'blue']),
            nodata=0
        )
        print("GeoImage generated for: " + disaster_scene)
        # contrast enhancement:
            # clip last 5% of green , and 10% of nir/blue dn values, then rescale them
        print("Enhance Contrast for: " + disaster_scene)
        for bandnum, band in enumerate(scene_geoimg.bandnames()):
            color = scene_geoimg.bandnames()[bandnum]
            if color == 'green':
                scene_geoimg[color] = scene_geoimg[color].autoscale(0,255,percent=5.0)
            else:
                scene_geoimg[color] = scene_geoimg[color].autoscale(0,255,percent=10.0)
        # write contast enhanced GeoTIFF to dir
        GeoTIFF_folder = "../data/"
        GeoTIFF_path = os.path.join(GeoTIFF_folder, disaster_scene + '.TIF')
        scene_geoimg.autoscale(0,255).save(GeoTIFF_path, dtype='byte')
        print(disaster_scene + " written to: " + GeoTIFF_path)

