"""
# code: sensors.py
# purpose: execute sensor specific downloading and processing
"""

# libraries
from tempfile import mkdtemp
from sdownloader import Landsat8, Sentinel2
from gippy import GeoImage
import os

class Sensor:
    """
    sensor class downloads and processes imagery for the sensor it is told to
    """

    # init the class
    def __init__(self, name):
        self.name = str(name)
        self.disaster_scenes = ''
    def downloader(self, scenes):
        """
        Returns object with band GeoTIFFs and scene name for provided scenes.
        Will call sensor specific methods from txt file provided.
        """
        temp_folder = mkdtemp()
        if self.name.lower() == 'sentinal':
            downloads = Sentinel2(download_dir=temp_folder)
            # we're interested in false color images, though this could be expanded upon.
            bands_to_down = [8, 4, 3]
        elif self.name.lower() == 'landsat':
            downloads = Landsat8(download_dir=temp_folder)
            bands_to_down = [5, 4, 3]
        else:
            print("sensor not specified")
        for scene in scenes:
            temp_folder = mkdtemp()
            print("downloading " + scene)
            # downloads scenes from a list of scenes provided, here pre-post disaster images
            disaster_scenes = downloads.download(scene[1:], bands=bands_to_down)
            print(scene + " downloaded")
        self.disaster_scenes = disaster_scenes
    def processor(self):
        """
        Given disaster scenes...
        - Generates GeoImgs w/sensor specified bands
        - Then contrast enhances these imgs
        - Last, writes them to ../data folder
        """
        band_names = ['nir', 'red', 'green']
        for index, item in enumerate(self.disaster_scenes.scenes):
            files = self.disaster_scenes[index].files[0:3]
            scene = self.disaster_scenes[index].name
            scene_GeoImage = GeoImage.open(
                filenames=files,
                bandnames=(band_names),
                nodata=0
            )
            print("GeoImage generated for: " + scene)
            print("Enhancing contrast for: " + scene)
            for bandnum, band in enumerate(scene_GeoImage.bandnames()):
                color = scene_GeoImage.bandnames()[bandnum]
                if color == 'green':
                    scene_GeoImage[color] = scene_GeoImage[color].autoscale(0, 255, percent=5.0)
                else:
                    scene_GeoImage[color] = scene_GeoImage[color].autoscale(0, 255, percent=10.0)
            GeoTIFF_folder = '../data'
            GeoTIFF_path = os.path.join(GeoTIFF_folder, scene + '.TIF')
            scene_GeoImage.autoscale(0, 255).save(GeoTIFF_path, dtype='byte')
            print(scene + ' written to: ' + GeoTIFF_path)

