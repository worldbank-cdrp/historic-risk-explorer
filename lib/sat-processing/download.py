
from sensors import Sensor

def download_scene_list(scene_list, sensor, hazard, hazard_path, relTime=''):
    for image in scene_list:
        image = str(image)
        image_sensor = Sensor(sensor, [image], hazard, hazard_path)
        print('Downloading: ' + image)
        if sensor != 'dg':
            image_sensor.downloader()
        else:
            image_sensor.downloader(relTime)

def download_scenes(sensor, hazard, hazard_path, config):
    """
    :sensor:
        sensor to download imagery from
    :hazard:
        hazard in config to download imagery for
    """

    # get list of post-pre disaster images and download them.
    # each scene is downloaded to its own folder (named after the scene)

    pre_images = [ evt for evt in config['sensors'][sensor]['hazards'][hazard]['pre'] ]
    post_images = [ evt for evt in config['sensors'][sensor]['hazards'][hazard]['post'] ]

    if sensor != 'dg':
        download_scene_list(pre_images, sensor, hazard, hazard_path)
        download_scene_list(post_images, sensor, hazard, hazard_path)
    else:
        print (pre_images)
        print (post_images)
        download_scene_list(pre_images, sensor, hazard, hazard_path, 'pre')
        download_scene_list(post_images, sensor, hazard, hazard_path, 'post')