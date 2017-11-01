## Config

create a '_processing-config.yml' file that matches the below

```
sensor: {landsat8 or sentinel2}
scenes:
  - loc: {where the disaster happened}
    pre:
     - {sceneID for pre-disaster scene}
     ...
    post:
     - {sceneID for post-disaster scene}
   ...
```

create a .env file with these two environmental variables

```
# this needs to be have upload priviledges. see: https://www.mapbox.com/help/create-api-access-token/
MAPBOX_ACCESS_TOKEN='mapbox.api.key'
MAPBOX_ACCOUNT='mapbox.usrname'
```

## run

bash scene-to-mapbox.sh

this will:
 1. download
 2. conduct contrast enhancement on images
 3. write those images to the '../data' folder
 4. Then add each image as raster layers in specified mapbox account


