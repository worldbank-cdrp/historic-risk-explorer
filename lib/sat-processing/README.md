# sat-processing

download, contrast enhance, and upload to mapbox satellite imagery before and after disasters fromm multiple sources

## dependencies

[docker](https://docs.docker.com/engine/installation/)

## configuration

1. create a 'processing-config.yml' file that matches the spec found in _processing-config.yml

  - find sentinel2 and landsat8 imagery with [sat-search](https://github.com/sat-utils/sat-search)
  - find landsat5 imagery on [earthexplorer](https://earthexplorer.usgs.gov/)
  - find open digital globe imagery onn their open data portal [https://www.digitalglobe.com/opendata]

2. create a .env file with these two environmental variables

```
MAPBOX_ACCESS_TOKEN='mapbox.api.key'
MAPBOX_ACCOUNT='mapbox.usrname'
```

note - the `MAPBOX_ACCESS_TOKEN` needs to be have upload privileges. see: https://www.mapbox.com/help/create-api-access-token/

## run

./process-scenes.sh

this will:
 1. build a docker image
 2. run the container to:
  1. download imagery specified in config file
  2. conduct contrast enhancement on images on each band
   - specifically, it will autoscale bands their min and max values, then conduct a standard deviation stretch
     - see [gippy documentation](https://gippy.readthedocs.io/en/latest/) for more info
  3. mosaic images if specified in the config file
   - histogram match images being mosaiced (if specified in the config)
  4. upload imagery to map box


