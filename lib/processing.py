# libraries
from sensors import Sensor
from subprocess import call
import yaml
import sys


def download_process_scene(sensor, hazard, time, output_dir, config):
    """
    :sensor:
        sensor to download imagery from
    :hazard:
        hazard in config to download imagery for
    :time:
        time of image capture relative to disaster (pre/post). used find specific image in the config
    :output_dir:
        where the image will be saved to
    """

    images = [ evt for evt in config['sensors'][sensor]['hazards'][hazard][time] ]

    images_sensor = Sensor(sensor, images)
    images_sensor.downloader()
    if len(images) > 1:
        print('sdf')
    elif sensor == 'dg':
        print('sdfd')
    else:
        print(images)
        images_sensor.processor(images[0], output_dir)

# disaster_scenes
config_file = sys.argv[1]
with open(config_file, 'r') as file_stream:
    config = yaml.load(file_stream)

for sensor in config['sensors']:
    hazards = config['sensors'][sensor]['hazards']
    for hazard in hazards:
        # download_process_scene(sensor, hazard, 'pre', './output', config)
        download_process_scene(sensor, hazard, 'post', './output', config)
    