"""
# code: dg.py
# purpose: download dg scenes
"""

# libs 
from homura import download
import os

# storage base url
DG_BASE = 'http://opendata.digitalglobe.com/haiti-earthquake/pre-event/2010-01-09/'
relTimes = {'pre': '1030010003B16A00', 'post': '1030010003BA7100' }


class DG:
    """
    Landsat5 class that will download scenes to download_dir for specified bands
    """
    
    def __init__(self, download_dir):
        self.download_dir = download_dir

    def download(self, scenes, relTime):
        """
        Downloads landsat 5 from Google Storage
        :scenes: 
            list of scenes to down
        :bands:
            bands to download
        :relTime:
            relative time for disaster. used to build base url
        """
        scene_urls = [ build_scene_urls(scene, relTimes[relTime]) for scene in scenes ]
        image_path = os.path.join(self.download_dir, relTimes[relTime])
        for scene in scene_urls:
            download(scene, image_path)

def build_scene_urls(scene, relTime):
    return DG_BASE + relTime + '/' + scene + '.tif'