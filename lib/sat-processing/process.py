
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
    if sensor != 'dg':
        process_scene_list(pre_images, hazard_path, sensor)
        process_scene_list(post_images, hazard_path, sensor)
    # mosaic where neccessary
    try:
        mosaic = config['sensors'][sensor]['hazards'][hazard]['mosaic']
        mosaic_scene_list(mosaic, hazard, hazard_path)
    except:
        print('nothing to mosaic')
