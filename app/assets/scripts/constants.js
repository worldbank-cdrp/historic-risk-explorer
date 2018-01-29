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
      Historic: '3,943',
      Modelled: '6,819'
    },
    exposure: {
      Historic: '132,226',
      Modelled: '177,402'
    },
    lossratio: {
      Historic: '2.98',
      Modelled: '3.84'
    },
    image: 'chile-earthquake-2010.jpg',
    maxValues: {
      exp:
      { admin: 86960417859.1402,
        grid1km: 964881085.45,
        grid20km: 40015044502.3,
        grid5km: 5661434989 },
      aloss:
      { admin: 3370824851.94523,
        grid1km: 162309243.02798,
        grid20km: 1136731450.4604,
        grid5km: 370736831.982591 },
      lr:
      { admin: 0.109539265818004,
        grid1km: 0.668105445642129,
        grid20km: 0.597670175844118,
        grid5km: 0.648989912014646 }
    },
    footprint: {
      name: 'CHile_EQ_2010_MMI',
      bbox: [
        [-77.2327000, -30.6239000],
        [-64.2077000, -30.6239000],
        [-64.2077000, -41.1739000],
        [-77.2327000, -41.1739000]
      ]
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
    capstockNonRes: null,
    magnitude: 'Category 4-5',
    deaths: '2,000 to 8,000',
    homeless: '80,000',
    housesDestroyed: '15,000',
    annloss: {
      Historic: '18',
      Modelled: '14,995'
    },
    exposure: {
      Historic: '110',
      Modelled: '153,099'
    },
    lossratio: {
      Historic: '15.98',
      Modelled: '9.79'
    },
    staticXYZ: [-70.146875, 18.702846, 7],
    maxValues: {
      exp:
      { admin: 46313680973.67,
        grid1km: 1820506075,
        grid20km: 41456625318.1,
        grid5km: 13636281761.61 },
      aloss:
      { admin: 7784435335.71893,
        grid1km: 309028273.4,
        grid20km: 7077252168.6039,
        grid5km: 2314739107.279 },
      lr:
      { admin: 0.173089774787602,
        grid1km: 0.222531131869642,
        grid20km: 0.184671226810559,
        grid5km: 0.22253113033212 }
    },
    footprint: {
      name: 'DR_Stack_Final2_Dissolve2',
      bbox: [
        [-72.0083338, 19.9333336],
        [-68.3183338, 19.9333336],
        [-68.3183338, 17.4683336],
        [-72.0083338, 17.4683336]
      ]
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
      Historic: '250',
      Modelled: '461'
    },
    exposure: {
      Historic: '14,567',
      Modelled: '27,370'
    },
    lossratio: {
      Historic: '1.72',
      Modelled: '1.69'
    },
    image: 'elsalvador-earthquake-2001.jpg',
    maxValues: {
      exp:
      { admin: 13766630762.65,
        grid1km: 315694918.7,
        grid20km: 9718132616.87,
        grid5km: 3132643573.48 },
      aloss:
      { admin: 206932278.628317,
        grid1km: 12416454.42,
        grid20km: 100060573.279086,
        grid5km: 34009592.130761 },
      lr:
      { admin: 0.117221064835307,
        grid1km: 0.498408234523868,
        grid20km: 0.178380376467591,
        grid5km: 0.407363206593802 }
    },
    footprint: {
      name: 'ElSalvador_EQ_2001_Isoseismal_2001J',
      bbox: [
        [-90.1248627, 14.4505510],
        [-87.7098627, 14.4505510],
        [-87.7098627, 13.1555510],
        [-90.1248627, 13.1555510]
      ]
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
      Historic: '356',
      Modelled: '336'
    },
    exposure: {
      Historic: '4,094',
      Modelled: '4,094'
    },
    lossratio: {
      Historic: '8.70',
      Modelled: '8.20'
    },
    image: 'fiji-cyclone-2016.jpg',
    maxValues: {
      exp:
      { admin: 2573763814.2332,
        grid1km: 75698880.369,
        grid20km: 1649674565.0231,
        grid5km: 634380793.257 },
      aloss:
      { admin: 191592171.45366,
        grid1km: 8520607.285,
        grid20km: 56714052.213,
        grid5km: 19247847.172 },
      lr:
      { admin: 0.246678590836786,
        grid1km: 0.902641348133092,
        grid20km: 0.902641348133092,
        grid5km: 0.902641348133092 }
    },
    footprint: null
  },
  {
    y: 1815,
    m: 'April',
    t: 'Volcano',
    dcode: 'VO',
    n: 'Tambora',
    c: 'idn',
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
      Modelled: '9,708'
    },
    exposure: {
      Historic: '171.5',
      Modelled: '915,846'
    },
    lossratio: {
      Historic: null,
      Modelled: '1.06'
    },
    staticXYZ: [117.98527197489355, -8.272296169056332, 7],
    maxValues: {
      exp:
      { admin: 193343377860.545,
        grid1km: 478344671.2,
        grid20km: 20321889699.79,
        grid5km: 2743997105.82 },
      aloss:
      { admin: 5837476257.46952,
        grid1km: 73404219.72,
        grid20km: 798777806.707417,
        grid5km: 252093205.4201 },
      lr:
      { admin: 0.428407939418624,
        grid1km: 1.02536694042473,
        grid20km: 1.02535377439102,
        grid5km: 1.02535485953714 }
    },
    footprint: {
      name: 'Tambora_VO_1815_Ashfallring_mm',
      bbox: [
        [102.4219282, 4.6427577],
        [129.9419282, 4.6427577],
        [129.9419282, -15.0572423],
        [102.4219282, -15.0572423]
      ]
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
      Historic: '150',
      Modelled: '419'
    },
    exposure: {
      Historic: '2,123',
      Modelled: '9,791'
    },
    lossratio: {
      Historic: '7.06',
      Modelled: '4.28'
    },
    image: 'armenia-earthquake-1988.jpg',
    maxValues: {
      exp:
      { admin: 3064163511.4639,
        grid1km: 51641713.691,
        grid20km: 1969066192.96635,
        grid5km: 496925240.82479 },
      aloss:
      { admin: 246630777.832264,
        grid1km: 12351549.9648016,
        grid20km: 145676631.637437,
        grid5km: 64028114.2160292 },
      lr:
      { admin: 0.328061318264958,
        grid1km: 0.997556641827419,
        grid20km: 0.961671002629395,
        grid5km: 0.997556641827419 }
    },
    footprint: {
      name: 'Armenia_EQ_1988_Intensity',
      bbox: [
        [43.4489729, 41.3030206],
        [46.6339729, 41.3030206],
        [46.6339729, 38.8280206],
        [43.4489729, 38.8280206]
      ]
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
      Historic: '56',
      Modelled: '61'
    },
    exposure: {
      Historic: '9,750',
      Modelled: '9,750'
    },
    lossratio: {
      Historic: '0.57',
      Modelled: '0.63'
    },
    staticXYZ: [34.37072753905, -16.70792094935, 7],
    maxValues: {
      exp:
      { admin: 0,
        grid1km: 0,
        grid20km: 0,
        grid5km: 0 },
      aloss:
      { admin: 0,
        grid1km: 0,
        grid20km: 0,
        grid5km: 0 },
      lr:
      { admin: 0,
        grid1km: 0,
        grid20km: 0,
        grid5km: 0 }
    },
    footprint: {
      name: 'MoMa_FL_2015_floodedArea',
      bbox: [
        [32.6627094, -15.1987911],
        [38.3577094, -15.1987911],
        [38.3577094, -19.8787911],
        [32.6627094, -19.8787911]
      ]
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
    dmetric: 'Intensity',
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
      Historic: '1,031',
      Modelled: '1,889'
    },
    exposure: {
      Historic: '84,061',
      Modelled: '169,039'
    },
    lossratio: {
      Historic: '1.23',
      Modelled: '1.12'
    },
    image: 'pakistan-earthquake-2005.png',
    maxValues: {
      exp:
      { admin: 100942919042.801,
        grid1km: 153691650,
        grid20km: 14636588772.1024,
        grid5km: 2017983415.09 },
      aloss:
      { admin: 1126481958.53168,
        grid1km: 25590906,
        grid20km: 245630433.481585,
        grid5km: 95178547.77014 },
      lr:
      { admin: 0.221059254938626,
        grid1km: 0.999436996523037,
        grid20km: 0.997086047917852,
        grid5km: 0.999076347170775 }
    },
    footprint: {
      name: 'PAK_EQ_2005_Intensity',
      bbox: [
        [67.0085000, 37.5895000],
        [78.1985000, 37.5895000],
        [78.1985000, 23.5165000],
        [67.0085000, 23.5165000]
      ]
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
    deaths: 'ca. 80,000',
    homeless: '700,000 to 2,200,000',
    housesDestroyed: '105,369',
    annloss: {
      Historic: '2,333',
      Modelled: '3,184'
    },
    exposure: {
      Historic: '16,082',
      Modelled: '21,174'
    },
    lossratio: {
      Historic: '14.51',
      Modelled: '15.04'
    },
    image: 'Haiti-2010.jpg',
    maxValues: {
      exp:
      { admin: 16754791640.16,
        grid1km: 552727859.47,
        grid20km: 6999803240.09,
        grid5km: 2581613350.56 },
      aloss:
      { admin: 4369380440.52409,
        grid1km: 157258331.608,
        grid20km: 2095545171.32992,
        grid5km: 903152245.16319 },
      lr:
      { admin: 0.260783931806768,
        grid1km: 0.41364755161866,
        grid20km: 0.382552751236611,
        grid5km: 0.413647508403853 }
    },
    footprint: {
      name: 'Haiti_EQ_2010_MMI',
      bbox: [
        [-76.0300000, 22.0000000],
        [-69.0300000, 22.0000000],
        [-69.0300000, 15.0000000],
        [-76.0300000, 15.0000000]
      ]
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
    pop: '170,920,000',
    houses: '26,832,025',
    capstock: '119,849',
    magnitude: null,
    deaths: '1,985',
    homeless: 'ca. 8,000,000',
    housesDestroyed: '913,307',
    annloss: {
      Historic: '119,849',
      Modelled: '169,039'
    },
    exposure: {
      Historic: '1,513',
      Modelled: '2,436'
    },
    lossratio: {
      Historic: '1.26',
      Modelled: '1.44'
    },
    pre: '-pre-pak-2010',
    post: '-post-pak-2010',
    sliderBbox: [[69.700513, 34.140129], [30.76625, 72.482998]],
    sliderCenter: [71.11724975524088, 32.460008863242194],
    sliderZoom: [8],
    image: 'pakistan-flood-2010.jpg',
    maxValues: {
      exp:
      { admin: 100942919042.801,
        grid1km: 153691650,
        grid20km: 14636588772.1024,
        grid5km: 2017983415.09 },
      aloss:
      { admin: 1871554097.50986,
        grid1km: 17653329.38,
        grid20km: 81787841.6749922,
        grid5km: 36500287.935166 },
      lr:
      { admin: 0.0185407170236111,
        grid1km: 0.850773217509035,
        grid20km: 0.604092354726748,
        grid5km: 0.681781972107596 }
    },
    footprint: {
      name: 'PAK_FL_2010_water_depth',
      bbox: [
        [67.2065592, 33.3256958],
        [74.0257258, 33.3256958],
        [74.0257258, 25.3806958],
        [67.2065592, 25.3806958]
      ]
    }
  }
];
