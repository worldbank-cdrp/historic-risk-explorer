
from dip import mosaic_scene_list, process_scene_list, match_histograms

def process_scenes(sensor, hazard, hazard_path, config):
    """
    :sensor:
        processed scene's sensor
    :hazard:
        scene's related hazard
    """
    pre_images = [ evt for evt in config['sensors'][sensor]['hazards'][hazard]['pre'] ]
    post_images = [ evt for evt in config['sensors'][sensor]['hazards'][hazard]['post'] ]
    process_scene_list(pre_images, hazard_path, sensor)
    process_scene_list(post_images, hazard_path, sensor)
    
    # mosaic where neccessary
    mosaic = config['sensors'][sensor]['hazards'][hazard]['mosaic']
    if mosaic['needed']: 
        source, truth = mosaic_scene_list(mosaic, hazard, hazard_path)
        matched_pre_image = 'matched-' + source.split('/')[-1]
