## Config

follow the `_config-example.yml` to setup a config file

```
sensor: {landsat8 or sentinel2}
scenes:
  - loc: {where the disaster happened}
    pre:
     - scene: {sceneID for pre-disaster scene}
     ...
    post:
     - scene: {sceneID for post-disaster image}
     ...
`

## run

bash run.sh

this will:
 1. download
 2. stitch if more than 1 image exists in pre/post field
 3. conduct contrast enhancement on images
 4. write those images to file
 5. Then add each pre/post image as raster layers in specified mapbox account


