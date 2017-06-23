# libraries
from tempfile import mkdtemp
from sdownloader import Landsat8
import sys
# tmpfolder and set it as our downloads folder
temp_folder = mkdtemp()
l = Landsat8(download_dir = temp_folder)
# download provided scenes
scenes = l.download(['LC81670712014347LGN00'], bands=[4,3,2])
# show me it happened
[s.name for s in scenes]
