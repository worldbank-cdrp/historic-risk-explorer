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
    dmetric: 'MMI'
  },
  {
    y: 1930,
    m: 'August',
    t: 'Hurricane',
    dcode: 'HU',
    n: 'Dominican Republic',
    c: 'dom',
    bbox: [[-72.008334, 17.466667], [-68.285416, 19.939025]]
  },
  {
    y: 2001,
    m: 'January',
    t: 'Earthquake',
    dcode: 'EQ',
    n: 'El Salvador',
    c: 'slv'
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
    ]
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
    dmetric: 'Ashfallring'
  },
  {
    y: 1988,
    m: 'December',
    t: 'Earthquake',
    dcode: 'EQ',
    n: 'Armenia',
    c: 'arm',
    bbox: [[43.529896, 38.850496], [46.589228, 41.322855]],
    dmetrics: 'Intensity'
  },
  {
    y: 2015,
    m: 'January',
    t: 'Flood',
    dcode: 'FL',
    n: 'Mozambique',
    c: 'moz'
  },
  {
    y: 2005,
    m: 'October',
    t: 'Earthquake',
    dcode: 'EQ',
    n: 'Pakistan',
    c: 'pak',
    dmetrics: 'Intensity'
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
    ]
  },
  {
    y: 2010,
    m: 'July',
    t: 'Flood',
    dcode: 'FL',
    n: 'Pakistan',
    c: 'pak',
    dmetric: 'water_depth'
  }
];
