# libraries
from tempfile import mkdtemp
from sdownloader import Landsat8
from gippy import GeoImage
# create disaster scene groups
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
    disaster_scenes = l.download(group[1:], bands=[4,3,2])
    print("downloaded: " + str([s.name for s in disaster_scenes]))
    # make GeoImage from downed bands
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
