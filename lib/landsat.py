# libraries
from tempfile import mkdtemp
from sdownloader import Landsat8
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
    scenes = l.download(group[1:], bands=[4,3,2])
    print("downloaded: " + [s.name for s in scenes])
