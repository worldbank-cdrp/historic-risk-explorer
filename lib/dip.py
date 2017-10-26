# dip == digital image procesing #

from gippy import GeoImage
from subprocess import Popen, PIPE
import json
import os

def process_scene_list(scene_list, hazard_path, sensor):
    for image in scene_list:

        print ('Processing: ' + image)

        # make gippy GeoImage w/image bands
        image_path = os.path.join(hazard_path, image)
        out_image = 'corrected-' + image
        out_image_path = os.path.join(hazard_path, out_image)
        bands = get_bands(image_path, sensor)
        band_names = ['blue', 'green', 'red']
        geo_image = GeoImage.open(filenames=bands, bandnames=band_names, nodata=0)

        # for each band rescale values to raw min/max and apply standard deviation to new distribution
        extrema = get_band_extrema(bands, band_names)
        for i, x in enumerate(band_names):
            band_name = band_names[i] 
            band_extrema = extrema[i]
            band_min = band_extrema['min'] ; band_max = band_extrema['max']
            geo_image[band_name] = geo_image[band_name].autoscale(band_min, band_max, percent=10.0)
        geo_image.save(out_image_path, dtype='byte')

        # generate new image with null values represented as 0 (making them transparent)
        remove_nulls(out_image_path)
        
        # get rid of original corrected image
        os.remove(out_image_path + '.tif')

def match_histograms(source, truth, match):
    """
    :source:
        source image we want to match histograms of
    :truth:
        truth image we match source image histogram to
    :match:
        output name for matched image
    """
    rio_hist_command = 'rio hist -c RGB -b 1,2,3 ' + source + ' ' + truth  + ' ' +  match
    # match histograms per rgb values
    rio_hist_exec = Popen([rio_hist_command], shell=True)
    rio_hist_exec.communicate()

def mosaic_images(image_list, mosaic):
    """
    :image_list:
        list of images being mosaiced together
    :mosaic:
        path to mosaic being created
    """
    merge_command = 'gdal_merge.py -n 0 -a_nodata 0 -of GTiff -o ' + mosaic + ' ' + ' '.join([img for img in image_list])
    merge_exec = Popen(merge_command, shell=True);
    merge_exec.communicate()

def jp2_to_gtiff (band):
    """
    :band:
        jp2 format band being converted to geotiff.
    """

    band_name = band.split('.')[0]
    out_band = band_name + '.tif'
    translate_command = 'gdal_translate -of GTiff -ot Byte -scale 0 65525 0 255 ' + band + ' ' + out_band
    translate_command = command.split(' ')
    translate = Popen(translate_command)
    translate.communicate()
    return out_band

def get_bands(image_path, sensor):
    """
    :image_path:
        path to images needing ordering
    """
    bands = [ os.path.join(image_path, b) for b in os.listdir(image_path) if b.endswith('.TIF') ]
    sensor_bands = {
        'landsat5' : {'blue': 'B1', 'green': 'B2', 'red': 'B3'},
        'landsat8' : {'blue': 'B2', 'green': 'B3', 'red': 'B4'},
        'sentinel2' : {'blue': 'B02', 'green': 'B03', 'red': 'B05'}
    }
    blue = next(b for b in bands if sensor_bands[sensor]['blue'] in b)
    green = next(b for b in bands if sensor_bands[sensor]['green'] in b)
    red = next(b for b in bands if sensor_bands[sensor]['red'] in b)
    return [red, green, blue]

def get_band_extrema(bands, band_names):
    extrema = []
    for i, x in enumerate(bands):
        stats_command = ["gdalinfo","-mm", "-stats", "-json", bands[i]]
        stats_command = Popen(stats_command, stdout=PIPE, stderr=PIPE)
        stats = json.loads("\n".join(chunk for chunk in stats_command.communicate()))
        minimum = stats['bands'][0]['computedMin']
        maximum = stats['bands'][0]['computedMax']
        extrema.append({'min': minimum, 'max': maximum})
    return extrema

def remove_nulls(hazard_path, image):
    """
    :hazard_path:
        path holding all images for hazard; where no_null_image will be written
    :image:
        image nulls are being removed from
    """
    no_null_image = 'no-null-' + image
    no_null_image = os.path.join(hazard_path, no_mask_image)
    overwrite_command = ['gdal_translate', '-of', 'GTiff', '-a_nodata', '0', image + '.tif', no_null_image + '.tif']
    overwrite_command = Popen(overwrite_command, stdout=PIPE, stderr=PIPE)
    overwrite_command.communicate()


def mosaic_scene_list(mosaic, hazard, hazard_path):
    """
    :mosaic:
        object with instructions on images to mosaic/image correct
    :hazard:
        name of hazard for which current imagery is being processed
    :hazard path:
        path to dir with all imagery for a given hazard
    """

    # use this list to for later color matching of pre/post images
    mosaiced_pre_post_images = []
    for rel_time in ['pre-color-match', 'post-color-match']:
        if rel_time in mosaic.keys():
            # # use rio match to match the source file histogram to truth file's
            source_truth = ['no-mask-' + image for image in mosaic[rel_time]]
            print('Histogram Matching: matching histogram of ' + ' to histogram of '.join([image for image in mosaic[rel_time]]))
            match = 'matched-' + source_truth[0] + '.tif'
            match = os.path.join(hazard_path, match)
            source, truth = [os.path.join(hazard_path, image + '.tif') for image in source_truth]
            # match_histograms(source, truth, match)

            # # mosaic these the two images
            print('Mosaicing: stitching together ' + ' and '.join([image for image in mosaic[rel_time]]))
            mosaic_out_path = os.path.join(hazard_path, rel_time.split('-')[0] + '-' + hazard + '.tif')
            # mosaic_images([source, truth], mosaic_out_path)
            mosaiced_pre_post_images.append(mosaic_out_path)
        else:
            # otherwise, just generate a non-matched images
            rel_time = rel_time.split('-')[0]
            try:
                images_to_mosaic = mosaic[rel_time]
                print('Mosaicing: stitching together ' + ' and '.join([image for image in mosaic[rel_time]]))
                mosaic_out_path = os.path.join(hazard_path, rel_time + '-' + hazard + '.tif')
                images_to_mosaic = [os.path.join(hazard_path, 'no-mask-' + image + '.tif') for image in images_to_mosaic]
                # mosaic_images(images_to_mosaic, mosaic_out_path)
                mosaiced_pre_post_images.append(mosaic_out_path)
            except:
                print("Error: The relative time provided in config's mosaic object is not specified as 'pre' or 'post'. Please your config file")
            return mosaiced_pre_post_images