
"""
# code: landsat5.py
# purpose: use gsutil to download landsat5 scenes
"""

# libs 
from homura import download

# storage base url
GOOGLE_STORAGE = 'https://storage.googleapis.com/gcp-public-data-landsat/'


class Landsat5:
    """
    Landsat5 class that will download scenes to download_dir for specified bands
    """
    
    def __init__(self, download_dir):
        self.download_dir = download_dir

    def download(self, scenes, bands):
        """
        Downloads landsat 5 from Google Storage
        :scenes: 
            list of scenes to down
        :bands:
            bands to download
        """
        
        scene_urls = [ build_band_urls(scene, bands) for scene in scenes ]
        # for bands in scene_urls:
		#     for band in bands:
        #         download(band, self.download_dir)
        
        
        

    
def build_band_urls(scene, bands):
    """
    parses scene id and appends desired bands to build url for bands
    :scene:
        landsat 5 scene
    :bands:
        desired bands
    """
    return [band_url(scene, band) for band in bands]

def band_url(scene, band):
    """
    builds single band url
    :scene:
        landsat 5 scene
    :band:
        image band
    """

    img = scene + '_B' + str(band) + '.TIF'
    url_components = scene.split('_')
    sensor, level, path, row = url_components[0], url_components[5], url_components[2][:3], url_components[2][3:]
    
    return GOOGLE_STORAGE + sensor + '/' + level + '/' + path + '/' + row + '/' + scene + '/' + img
