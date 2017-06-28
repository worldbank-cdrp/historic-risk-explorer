# libraries
#import numpy as np
from sensors import Sensor
import yaml
import sys
import os
# disaster_scenes
config_file = sys.argv[1]
with open(config_file,'r') as file_stream:
    try:
        config = yaml.load(file_stream)
    except yaml.YAMLError as exception:
        raise exception
disaster_scenes = [[scene['pre'], scene['post']] for scene in config['scenes']]
sensor_name = config['sensor']
# create Sensor instance. then download and process data
sensor = Sensor(sensor_name, disaster_scenes)
sensor.downloader()
sensor.processor()
