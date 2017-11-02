# libraries
import numpy as np
from sensors import Sensor
import yaml
import sys

# disaster_scenes
config_file = sys.argv[1]
with open(config_file, 'r') as file_stream:
    config = yaml.load(file_stream)

for sensor in config['sensors']:
    hazards = config['sensors'][sensor]['hazards']
    for hazard in hazards:
        # down pre event images
        pre = [ [evt] for config['sensors'][sensor]['hazards'][hazard]['pre']
        pre_sensor = Sensor(sensor, pre)
        pre_sensor.downloader()
        pre_sensor.processor()
        # down post event images
        post = config['sensors'][sensor]['hazards'][hazard]['post']
        post_sensor = Sensor(sensor, post)
        post_sensor.downloader()
        post_sensor.processor()