/*
 * DISASTERS spec
 * [
 *  // 2010 Chile earthquake
 *  {
 *    // year
 *    y: 1988,
 *    // disaster type
 *    t: 'earthquake',
 *    // disaster code. used for link hash & drawing layers
 *    dcode: 'EQ',
 *    // country name
 *    n: 'Armenia',
 *    // country code. used in conjunction with dcode for same purposes
 *    c: 'arm',
 *    // bbox to set AnalysisMap's zoom
 *    bbox: [[43.529896, 38.850496], [46.589228, 41.322855]],
 *    // disaster specific metrics. used to draw these layers
 *    dmetrics: ['PGA', 'Intensity']
 *  }
 * ]
 *
 */

export const DISASTERS = [
  {
    y: 2010,
    m: 'February',
    t: 'Earthquake',
    dcode: 'EQ',
    n: 'Chile',
    c: 'chl',
    bbox: [[-73.94645, -41.173], [-69.992715, -30.618278]],
    dmetric: 'MMI',
    pop: '16,953,000',
    houses: '5,669,900',
    capstock: '132,227',
    magnitude: 'Mw 8.8',
    annloss: {
      Historic: null,
      Modelled: null
    },
    exposure: {
      Historic: null,
      Modelled: null
    },
    lossratio: {
      Historic: '2.98',
      Modelled: '3.84'
    }
  },
  {
    y: 1930,
    m: 'August',
    t: 'Hurricane',
    dcode: 'HU',
    n: 'Dominican Republic',
    c: 'dom',
    bbox: [[-72.008334, 17.466667], [-68.285416, 19.939025]],
    pop: '1,256,000',
    houses: '300,000',
    capstock: '110',
    magnitude: 'Category 4-5',
    annloss: {
      Historic: null,
      Modelled: null
    },
    exposure: {
      Historic: null,
      Modelled: null
    },
    lossratio: {
      Historic: '15.98',
      Modelled: '9.79'
    }
  },
  {
    y: 2001,
    m: 'January',
    t: 'Earthquake',
    dcode: 'EQ',
    n: 'El Salvador',
    c: 'slv',
    bbox: [[-90.10, 12.8666984737], [-87.6475524902, 14.4306903608]],
    pop: '5,812,000',
    houses: '1,562,366',
    capstock: '21,024',
    magnitude: 'Mw 7.7',
    annloss: {
      Historic: null,
      Modelled: null
    },
    exposure: {
      Historic: null,
      Modelled: null
    },
    lossratio: {
      Historic: '1.66',
      Modelled: '1.33'
    }
  },
  {
    y: 2016,
    m: 'February',
    t: 'Cyclone',
    dcode: 'HU',
    n: 'Fiji',
    c: 'fji',
    bbox: [
      [176.82925416074016, -18.902845971458092],
      [180.63157704385975, -16.029183627613975]
    ],
    pop: '896,500',
    houses: '178,231',
    capstock: '6,505',
    magnitude: 'Category 5',
    annloss: {
      Historic: null,
      Modelled: null
    },
    exposure: {
      Historic: null,
      Modelled: null
    },
    lossratio: {
      Historic: '7.03',
      Modelled: '7.19'
    }
  },
  {
    y: 1815,
    m: 'April',
    t: 'Volcano',
    dcode: 'VO',
    n: 'Tambora',
    c: 'tb',
    bbox: [
      [117.62120269711221, -8.516058128670451],
      [118.34934125267489, -8.028534209442213]
    ],
    dmetric: 'Ashfallring',
    pop: '17,000,000',
    houses: '2,250,000',
    capstock: '1,456',
    magnitude: 'VEI-7',
    annloss: {
      Historic: null,
      Modelled: null
    },
    exposure: {
      Historic: null,
      Modelled: null
    },
    lossratio: {
      Historic: null,
      Modelled: '1.06'
    }
  },
  {
    y: 1988,
    m: 'December',
    t: 'Earthquake',
    dcode: 'EQ',
    n: 'Armenia',
    c: 'arm',
    bbox: [[43.529896, 38.850496], [46.589228, 41.322855]],
    dmetric: 'Intensity',
    pop: '3,777,500',
    houses: '868,391',
    capstock: '2,123',
    magnitude: 'Ms6.8',
    annloss: {
      Historic: null,
      Modelled: null
    },
    exposure: {
      Historic: null,
      Modelled: null
    },
    lossratio: {
      Historic: '7.06',
      Modelled: '4.28'
    }
  },
  {
    y: 2015,
    m: 'January',
    t: 'Flood',
    dcode: 'FL',
    n: 'Mozambique',
    c: 'moz',
    bbox: [[29.7784423828, -19.6684529744], [38.9630126953, -13.7473889243]],
    pop: '27,660,000',
    houses: '6,110,007',
    capstock: '21,833',
    magnitude: 'n/a',
    annloss: {
      Historic: null,
      Modelled: '0.41'
    },
    exposure: {
      Historic: null,
      Modelled: null
    },
    lossratio: {
      Historic: '0.30',
      Modelled: '0.41'
    }
  },
  {
    y: 2005,
    m: 'October',
    t: 'Earthquake',
    dcode: 'EQ',
    n: 'Pakistan',
    c: 'pak',
    bbox: [[62.4682617187, 23.3825982842], [72.1362304687, 30.0500765217]],
    dmetrics: 'Intensity',
    pop: '15,416,700',
    houses: '23,113,493',
    capstock: '84,061',
    magnitude: 'Mw 7.6',
    annloss: {
      Historic: null,
      Modelled: null
    },
    exposure: {
      Historic: null,
      Modelled: null
    },
    lossratio: {
      Historic: '1.23',
      Modelled: '1.12'
    }
  },
  {
    y: 2010,
    m: 'December',
    t: 'Earthquake',
    dcode: 'EQ',
    n: 'Haiti',
    c: 'hti',
    bbox: [
      [-75.21053054610026, 17.502132206942065],
      [-70.72207095106857, 20.202465628505138]
    ],
    pop: '9,926,000',
    houses: '2,281,839',
    capstock: '24,079',
    magnitude: 'Mw 7.0',
    annloss: {
      Historic: null,
      Modelled: null
    },
    exposure: {
      Historic: null,
      Modelled: null
    },
    lossratio: {
      // TODO: ask/understand which the reported loss ratios is correct
      Historic: '13.74',
      Modelled: '14.43'
    }
  },
  {
    y: 2010,
    m: 'July',
    t: 'Flood',
    dcode: 'FL',
    n: 'Pakistan',
    c: 'pak',
    bbox: [[68.6810302734, 26.819168595], [75.3607177734, 33.7745813637]],
    dmetric: 'water_depth',
    pop: null,
    houses: null,
    capstock: null,
    magnitude: null,
    annloss: {
      Historic: null,
      Modelled: null
    },
    exposure: {
      Historic: null,
      Modelled: null
    },
    lossratio: {
      Historic: null,
      Modelled: null
    }
  }
];
