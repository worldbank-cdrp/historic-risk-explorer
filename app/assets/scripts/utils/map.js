import config from '../config';

/**
 * makes exposure grid layer for provided disaster and grid size
 *
 * @param {object} config config file with data needed for map making
 * @param {object} disaster disaster object with data needed fro map making
 * @return {object} mapboxgl style object for exposure layer
 */
export function makeExposureLayer (disaster, layerIdBase) {
  // make source and source layer needed to generate id, source.url, and source-layer
  const sourceBase = `${config.mapLayers['exposure-loss'].layers.main}${layerIdBase}`;
  let source = makeDisasterSource(sourceBase, disaster);
  let sourceLayer = `${config.mapLayers['exposure-loss'].id}`;
  // use source, sourceLayer, geomType, and type to make base styleSpec
  let styleSpec = {
    id: `${sourceLayer}-${layerIdBase}`,
    type: config.mapLayers['exposure-loss'].layers.geomType,
    source: {
      type: config.mapLayers['exposure-loss'].layers.type,
      url: `mapbox://${config.mapboxAccountName}.${source}`
    },
    'source-layer': sourceLayer
  };
  // add layer specific zoom
  let zoom = config.mapLayers['exposure-loss'].layers.zooms[layerIdBase];
  if (zoom) {
    if (zoom.maxZoom) {
      styleSpec.maxzoom = zoom.maxZoom;
    }
    if (zoom.minZoom) {
      styleSpec.minzoom = zoom.minZoom;
    }
  }
  return styleSpec;
}

export function getVisibleExposureLayers (layerId, layers, id) {
  let visibleLayers;
  // only add layer if the selected layer is not currently visible and no other
  // exposure layers are visible.
  if (id === 'admin') {
    visibleLayers = layers.find((l) => {
      return l.id.match('-grid') && l.layout.visibility === 'visible';
    });
  } else {
    visibleLayers = layers.find((l) => {
      return l.id.match('-admin') && l.layout.visibility === 'visible';
    });
  }
  return visibleLayers;
}

// TOFIX: remove disaster parameter
export function makeFootPrintLayer (disaster, id) {
  return {
    id: id,
    type: 'raster',
    source: id,
    paint: {
      'raster-opacity': 0.06
    }
  };
}

/**
 * @param {object} disaster disaster object
 * @param {string} relTime string, pre or post, to load correct layer fromm config
 * @return {object} mapbox-gl source object
 */
export function makeSliderSource (disaster, relTime) {
  return {
    type: 'raster',
    url: `mapbox://${config.mapboxAccountName}.${disaster[relTime]}`
  };
}

export function makeSliderLayer (id) {
  return {
    id: id,
    type: 'raster',
    source: id,
    paint: {}
  };
}

export function makeFootPrintSource (disaster) {
  // TOFIX: currently this is set to work for only armenia, once data has consistent
  // nomenclature in mapbox, will switch back to using config
  // let sourceBase = config.mapLayers[disaster.dmetric].layers.main;
  // let source = makeDisasterSource(sourceBase, disaster);
  return {
    type: 'raster',
    url: `mapbox://${config.mapboxAccountName}.Armenia_EQ_1988_Intensity`
  };
}

function makeDisasterSource (sourceBase, disaster) {
  return sourceBase
    .replace('c', disaster.c.toUpperCase())
    .replace('y', disaster.y)
    .replace('dcode', disaster.dcode);
}

/**
 *
 * returns title and metric units for currently rendered tileset
 *
 * @param {string} metric name of current metric
 * @return {object} titleMetrics an object with title and metrics
 */
export function makeLegendTitle (metric) {
  return config.legend[metric];
}
