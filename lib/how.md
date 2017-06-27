## Config

follow the `_config-example.yml` to setup a config file

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

## run

bash run.sh

this will:
 1. download
 3. conduct contrast enhancement on images
 4. write those images to file
 5. Then add each pre/post image as raster layers in specified mapbox account


