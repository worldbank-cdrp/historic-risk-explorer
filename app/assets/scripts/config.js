export default {
  // account specifics
  mapboxAccountName: 'wbg-cdrp',
  mapboxApiKey: 'pk.eyJ1Ijoid2JnLWNkcnAiLCJhIjoiY2l1Z3pxZDVwMDBxcDMzcDJjYmRpYnBicSJ9.hjlLP5TEVhqbTwzhFA1rZw',
  // map styles
  'disaster-cover': 'mapbox://styles/wbg-cdrp/cj7c8ii6d002w2rlgcwwsvbie',
  'disaster-data': 'mapbox://styles/wbg-cdrp/cj7akjiy096j92rqru4rqg8j2',
  // map layers
  exposure: 'exposure-loss',
  // source-ids
  exposureGrids: {
    one: 'c_dcode_y_grid1km',
    five: 'c_dcode_y_grid5km',
    twentyFive: 'c_dcode_y_grid25km'
  },
  exposureResolution: {
    one: 'Sub National',
    five: 'National',
    twentyFive: 'Regional'
  },
  // map colors
  mainFill: 'rgba(248,99,78,0.63)',
  mainLine: 'rgba(248,99,78,1)',
  // glob padding
  boundsPadding: 15
};
