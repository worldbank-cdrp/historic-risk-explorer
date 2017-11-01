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
    profile: 'Risk Profile - Chile - 2010 EQ Scenario vFinal',
    pop: '16,953,000',
    houses: '5,669,900',
    capstockRes: '132,227',
    capstockNonRes: null,
    magnitude: 'Mw 8.8',
    deaths: '550',
    homeless: '1,150,000',
    housesDestroyed: '81,444',
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
    profile: 'Risk Profile - Dominican Republic - 1930 TC Scenario vFinal',
    pop: '1,256,000',
    houses: '300,000',
    capstockRes: null,
    capstockNonRes: '110',
    magnitude: 'Category 4-5',
    deaths: '2,000 to 8,000',
    homeless: '80,000',
    housesDestroyed: '15,000',
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
    profile: 'Risk Profile - El Salvador - 2001 EQ Scenario vFinal',
    pop: '5,812,000',
    houses: '1,562,366',
    capstockRes: '14,567',
    capstockNonRes: '6,457',
    magnitude: 'Mw 7.7',
    deaths: '944',
    homeless: '1,329,000',
    housesDestroyed: '108,949',
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
    profile: 'Risk Profile - Fiji - 2016 TC Scenario vFinal',
    pop: '896,500',
    houses: '178,231',
    capstockRes: '4,094',
    capstockNonRes: '2,411',
    magnitude: 'Category 5',
    deaths: '46',
    homeless: '55,000',
    housesDestroyed: '11,500',
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
    profile: 'Risk Profile - Indonesia - 1815 VO Scenario vFinal',
    pop: '17,000,000',
    houses: '2,250,000',
    capstockRes: '2,456',
    capstockNonRes: null,
    magnitude: 'VEI-7',
    deaths: '100,000',
    homeless: '200,000',
    housesDestroyed: '25,000',
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
    profile: 'Risk Profile - Armenia - 1988 EQ Scenario vFinal',
    pop: '3,777,500',
    houses: '868,391',
    capstockRes: '2,123',
    capstockNonRes: null,
    magnitude: 'Ms6.8',
    deaths: '25,000',
    homeless: '517,000',
    housesDestroyed: '61,000',
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
    profile: 'Risk Profile - Mozambique - 2015 FL Scenario vFinal',
    pop: '27,660,000',
    houses: '6,110,007',
    capstockRes: '9,750',
    capstockNonRes: '12,083',
    magnitude: 'n/a',
    deaths: '215',
    homeless: '157000',
    housesDestroyed: '12,612',
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
    profile: 'Risk Profile - Pakistan - 2005 EQ Scenario vFinal',
    pop: '15,416,700',
    houses: '23,113,493',
    capstockRes: '84,061',
    capstockNonRes: null,
    magnitude: 'Mw 7.6',
    deaths: '73,786',
    homeless: '1,250,000 - 3,500,000',
    housesDestroyed: '437,536',
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
    profile: 'Risk Profile - Haiti - 2010 EQ Scenario vFinal',
    pop: '9,926,000',
    houses: '2,281,839',
    capstock: '24,079',
    magnitude: 'Mw 7.0',
    deaths: '',
    homeless: '',
    housesDestroyed: '',
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
    profile: 'Risk Profile - Pakistan - 2010 EQ Scenario vFinal',
    pop: null,
    houses: null,
    capstock: null,
    magnitude: null,
    deaths: '',
    homeless: '',
    housesDestroyed: '',
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
    },
    pre: '-pre-pak-2010',
    post: '-post-pak-2010',
    sliderBbox: [[69.700513, 34.140129], [30.76625, 72.482998]],
    sliderCenter: [71.11724975524088, 32.460008863242194],
    sliderZoom: [8]
  }
];
