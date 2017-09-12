import config from '../config';

/**
 * fits map bounds to layer bounds. should be replaced with constants for layer bounds
 *
 * @param {object} map the map object that includes layer and its bounds
 * @return {object} method to fit map to layer bounds
 */
export function fitLayerBounds (map) {
  // when needed nested object loads, bounds are zoomed accordingly
  if (map.style.sourceCaches['exposure-loss']['_source']['bounds']) {
    let bounds = map.style.sourceCaches['exposure-loss']['_source']['bounds'];
    let nw = [bounds[0], bounds[1]];
    let se = [bounds[2], bounds[3]];
    return map.fitBounds([nw, se]);
  }
}

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

export function makeFootPrintLayer (disaster) {
  let sourceBase = config.mapLayers[disaster.dmetric].layers.main;
  let source = makeDisasterSource(sourceBase, disaster);
  let sourceLayer = `${config.mapLayers[disaster.dmetric].id}`;
  let styleSpec = {
    id: `${sourceLayer}-${sourceBase}`,
    source: {
      type: config.mapLayers[disaster.dmetric].layers.type,
      url: `mapbox://${config.mapboxAccountName}.${source}`
    },
    'source-layer': sourceLayer
  };
  if (config.mapLayers[disaster.dmetric].geomType) {
    styleSpec.type = config.mapLayers[disaster.dmetric].geomTyp;
  }
  return styleSpec;
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
