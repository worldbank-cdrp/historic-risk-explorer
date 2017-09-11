import config from '../config';

/*
 * fits map bounds to layer bounds. should be replaced with constants for layer bounds
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

/*
 * makes exposure grid layer for provided disaster and grid size
 * @param {object} config, config file with data needed for map making
 * @param {object} disaster, disaster object with data needed fro map making
 * @return {object} mapboxgl style object for exposure layer
 */
export function makeExposureGrid (disaster, gridSize) {
  // make source specific to disaster
  let source = config.exposureGrids[gridSize]
    .replace('c', disaster.c.toUpperCase())
    .replace('dcode', disaster.dcode)
    .replace('y', disaster.y);
  return {
    id: `${config.exposure}-${gridSize}`,
    type: 'fill',
    source: {
      type: 'vector',
      url: `mapbox://${config.mapboxAccountName}.${source}`
    },
    'source-layer': config.exposure
  };
}
