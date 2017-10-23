"""
# code: sensors.py
# purpose: execute sensor specific downloading and processing
"""

# libraries
from tempfile import mkdtemp
from sdownloader import Landsat8, Sentinel2
from landsat5 import Landsat5
from subprocess import Popen
from tempfile import mkdtemp
import os


class Sensor:
    """
    sensor class downloads and processes imagery for the sensor it is told to
    """

    # init the class
    def __init__(self, name, disaster_scenes):
        self.name = str(name)
        self.scenes = disaster_scenes
        self.temp_folder = mkdtemp(dir=os.getcwd())

    def downloader(self):
        """
        Returns object with band GeoTIFFs and scene name for provided scenes.
        Will call sensor specific methods from txt file provided.
        """
        if self.name.lower() == 'sentinel2':
            downloads = Sentinel2(download_dir=self.temp_folder)
            # we're interested in false color images, though this could be expanded upon.
            bands_to_down = [8, 4, 3]
        elif self.name.lower() == 'landsat8':
            downloads = Landsat8(download_dir=self.temp_folder)
            bands_to_down = [5, 4, 3]
        elif self.name.lower() == 'landsat5':
           downloads = Landsat5(download_dir=self.temp_folder)
           bands_to_down = [5, 4, 3]
        else:
            print("sensor not specified")
            # add an error
        if len(self.scenes) > 1:
            for scene in self.scenes:
                disaster_data = [ downloads.download([evt], bands=bands_to_down) for evt in scene ]
        else:
            disaster_data = [ downloads.download(self.scenes, bands=bands_to_down) ]
        self.disaster_data = disaster_data

    def processor(self, scene, outfolder):
    #    Popen(['sh', './process.sh', self.temp_folder, scene, outfolder])
    def mulit_image_processor(self, self.tempfolder, outfolder):
        print ('ttp')
    #    Popen(['sh', './process.sh', self.temp_folder, outfolder])