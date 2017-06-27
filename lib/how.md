## Config

follow the `_example-config.yml` to setup a config file

```
sensor: {landsat8 or sentinel2}
scenes:
  - loc: {where the disaster happened}
    pre:
     - {sceneID for pre-disaster scene}
     ...
    post:
     - {sceneID for post-disaster image}
   ...
```

edit create a .env file with these two environmental variables

```
# this needs to be have upload priviledges. see: https://www.mapbox.com/help/create-api-access-token/
MAPBOX_KEY='mapbox.api.key'
MAPBOX_USRNAME='mapbox.usrname'
```

## run

bash scene-to-mapbox.sh

this will:
 1. download
 3. conduct contrast enhancement on images
 4. write those images to file
 5. Then add each pre/post image as raster layers in specified mapbox account


