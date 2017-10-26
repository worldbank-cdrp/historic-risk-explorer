# libraries
import yaml
import sys
import os
from download import download_scenes
from process import process_scenes

# parse processing config file
config_file = sys.argv[1]
with open(config_file, 'r') as file_stream:
    config = yaml.load(file_stream)



# initial download & processing
for sensor in config['sensors']:
    hazards = config['sensors'][sensor]['hazards']
    for hazard in hazards:
        # make scene bands' output folder
        hazard_path = os.path.join(os.getcwd(), hazard)
        if os.path.isdir(hazard_path) is not True: os.makedirs(hazard_path)
        # download, then process imagery
        download_scenes(sensor, hazard, hazard_path, config)
        process_scenes(sensor, hazard, hazard_path, config)
