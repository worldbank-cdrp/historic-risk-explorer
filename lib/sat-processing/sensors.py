"""
# code: sensors.py
# purpose: execute sensor specific downloading and processing
"""

# libraries
from tempfile import mkdtemp
from sdownloader import Landsat8, Sentinel2
from landsat5 import Landsat5
from dg import DG
from subprocess import Popen
from tempfile import mkdtemp
import os


class Sensor:
    """
    sensor class downloads and processes imagery for the sensor it is told to
    """

    # init the class
    def __init__(self, name, scenes, hazard, folder):
        self.name = str(name)
        self.scenes = scenes
        self.hazard = hazard
        self.folder = folder

    def downloader(self, relTime):
        """
        Returns object with band GeoTIFFs and scene name for provided scenes.
        Will call sensor specific methods from txt file provided.
        """
        if self.name.lower() == 'sentinel2':
            downloads = Sentinel2(download_dir=self.folder)
            # we're interested in false color images, though this could be expanded upon.
            bands_to_down = [2, 3, 4]
        elif self.name.lower() == 'landsat8':
            downloads = Landsat8(download_dir=self.folder)
            bands_to_down = [2, 3, 4]
        elif self.name.lower() == 'landsat5':
            downloads = Landsat5(download_dir=self.folder)
            bands_to_down = [3, 2, 1]
        elif self.name.lower() == 'dg':
            downloads = DG(download_dir=self.folder)
            bands_to_down = []
        else:
            print("sensor not specified")
            # add an error
        if self.name != 'dg':
            self.disaster_data = [downloads.download(self.scenes, bands=bands_to_down)]
        else:
            self.disaster_data = [downloads.download(self.scenes, relTime)]