export default {
  // --- MAPBOX ACCT --- //
  // account specifics
  mapboxAccountName: 'wbg-cdrp',
  mapboxApiKey: 'pk.eyJ1Ijoid2JnLWNkcnAiLCJhIjoiY2l1Z3pxZDVwMDBxcDMzcDJjYmRpYnBicSJ9.hjlLP5TEVhqbTwzhFA1rZw',
  // --- MAP STYLES --- //
  // map styles
  'disaster-cover': 'mapbox://styles/wbg-cdrp/cj7c8ii6d002w2rlgcwwsvbie',
  'disaster-data': 'mapbox://styles/wbg-cdrp/cj7akjiy096j92rqru4rqg8j2',
  // glob padding
  boundsPadding: 15,
  // ------------------ //
  // --- MAP LAYERS --- //

  /* mapLayers spec
   *
   * mapLayers: {
   *  // layer group - generalized group of layers that exist for multiple DISASTERS
   *  'exposure-loss': {
   *     // id - base id used to generate id and source-layer in map
   *     id: 'exposure-loss',
   *     // layers - object with spec for given layer group
   *     layers: {
   *       // main - base tileset id for layers in layer group
   *       //   c = country, dcode = distaster code, y = year
   *       main: 'c_dcode_y_grid',
   *       // ids - layer group specifc identifiers found in specific tileset ids
   *       ids: ['1km', '5km', '25km']
   *     }
   *   }
   * }
   *
   */
  mapLayers: {
    // TODO: simplify overlay layers into their own obj
    'exposure-loss': {
      id: 'exposure-loss',
      layers: {
        main: 'c_dcode_y_',
        ids: {
          'admin': 'admin',
          '1km': 'grid1km',
          '5km': 'grid5km',
          '25km': 'grid25km'
        },
        zooms: {
          'grid1km': {
            minZoom: 9,
            maxZoom: 0
          },
          'grid5km': {
            minZoom: 6,
            maxZoom: 9
          },
          'grid25km': {
            maxZoom: 6
          }
        },
        geomType: 'fill',
        type: 'vector'
      }
    },
    'annualized-loss': {
      id: 'annualized-loss',
      layers: {
        main: 'c_dcode_y_',
        ids: {
          'admin': 'admin',
          '1km': 'grid1km',
          '5km': 'grid5km',
          '25km': 'grid25km'
        },
        zooms: {
          'grid1km': {
            minZoom: 9,
            maxZoom: 0
          },
          'grid5km': {
            minZoom: 6,
            maxZoom: 9
          },
          'grid25km': {
            maxZoom: 6
          }
        },
        geomType: 'fill',
        type: 'vector'
      }
    },
    'loss-ratio': {
      id: 'loss-ratio',
      layers: {
        main: 'c_dcode_y_',
        ids: {
          'admin': 'admin',
          '1km': 'grid1km',
          '5km': 'grid5km',
          '25km': 'grid25km'
        },
        zooms: {
          'grid1km': {
            minZoom: 9,
            maxZoom: 0
          },
          'grid5km': {
            minZoom: 6,
            maxZoom: 9
          },
          'grid25km': {
            maxZoom: 6
          }
        },
        geomType: 'fill',
        type: 'vector'
      }
    },
    PGA: {
      id: 'PGA',
      layers: {
        main: 'PGA'
      }
    },
    Intensity: {
      id: 'Intensity',
      layers: {
        main: 'c_dcode_y_Intensity',
        type: 'raster'
      }
    },
    MMI: {
      id: 'MMI',
      layers: {
        main: 'MMI'
      }
    },
    PSA: {
      id: 'PSA',
      layers: {
        main: 'PSA_num',
        ids: ['00', '03', '10', '30']
      }
    },
    water_depth: {
      id: 'water_depth',
      layers: {
        main: 'water_depth'
      }
    },
    Ashfallring: {
      id: 'Ashfallring',
      layers: {
        main: 'Ashfallring_mm'
      }
    }
  },
  // ----------------- //
  // --- MAP CONTROL TEXT --- //

  /* control spec
   *
   * control: {
   *   layer group - generalized group of layers that exist for multiple DISASTERS
   *   'exposure-loss' : {
   *     // textIds - text to match button triggering matching layer id's rendering
   *     textIds: {
   *      '1km': 'Sub National',
   *      '2km': 'National',
   *      '25km': 'Regional
   *     }
   *   }
   *   ....
   * }
   *
   */
  control: {
    'exposure-loss': {
      admin: 'National',
      grid: 'Sub National'
    }
  },
  // ------------------------ //
  // --- LEGEND --- //

  /* legend spec
   *
   * legend: {
   *   layer group - generalized group of layers that exist for multiple DISASTERS
   *   'exposure-loss': {
   *     // title - legend title for layer group
   *     title: 'Building Stock Exposure',
   *     // idUnits units for specif id in layer group
   *     idUnits: {
   *       '1km': '?',
   *       '2km': '?',
   *       '25km': '?'
   *     }
   *   },
   *   ....
   * }
   */
  legend: {
    'exposure-loss': {
      title: 'Building Stock Exposure',
      idUnits: 'some unit'
    },
    'annualized-loss': {
      title: 'Annualized Loss',
      idUnits: 'some unit'
    },
    'loss-ratio': {
      title: 'Loss Ratio',
      idUnits: 'some unit'
    }
  }
  // ------------- //
};
