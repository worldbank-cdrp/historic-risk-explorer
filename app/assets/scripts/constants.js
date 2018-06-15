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
    },
    disasterDescription: '<p>A magnitude 8.8 earthquake occurred off the coast of central Chile on Saturday, 27 February 2010 at 03:34 am local time. The earthquake took place along the tectonic plate boundary between the Nazca and South American plates, with its epicenter off the coast of Pelluhue in the Maule Region and a focal depth of 30 km. This was the fifth biggest earthquake to have occurred on Earth since 1900 and the largest to occur in Chile since the M9.2 earthquake of May 22, 1960. The earthquake generated a tsunami that struck the coast of Chile between Viña del Mar in the North and Arauco in the South, causing serious damage to the Talcahuano port and significant loss of lives in Constitución, Pelluhue, Talcahuano, Dichato and the Juan Fernandez Islands. Damage due to ground shaking occurred over a very wide area, affecting 5 regions, where 75% of Chileans live.</p>',
    damageDescription: '<p>Damage to the residential sector was 81,440 houses destroyed (1.45% of Chile’s housing stock), 108,910 houses with significant damage and 179,690 houses with light damage. A reanalysis on the present day building stock exposure resulted in an estimated $6.82 billion damages in the residential sector (~ 3.85% loss ratio), while the Chilean government’s PDNA had estimated damages of $3.94 billion. The substantial increase in the damages are partially a result of an increase of about 34% in the value of the residential exposure since February 2010 (from $132 to $177 billion). In addition, a significant amount of damages in 2010 were covered by the insurance sector as insurance penetration of around 28% applied at the time and 189,450 residential insurance claims had been submitted in addition to 240,660 houses that were approved by the government for earthquake damage compensation. The insured properties would not qualify for government compensation and insured losses reached $8 billion (insured losses were not included in the PDNA).</p>'
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
    },
    disasterDescription: '<p>The 1930 San Zenon Hurricane caused the destruction of Santo Domingo and is the fifth deadliest Atlantic hurricane on record, having caused around 2,000 to 8,000 fatalities in the Dominican Republic. The storm left a path of destruction around 32 km wide. Wind gusts in Santo Domingo were estimated to range from 240 to 320 km/h. This therefore is a scenario of a Category 4 hurricane making landfall directly on a major urban area (Santo Domingo had population of around 50,000 in 1930 but at present it is a city of 1 million inhabitants). Three districts of Santo Domingo were almost completely destroyed, while the hurricane leveled about half of the entire city. However, due to the smaller dimensions of the storm, villagers 120 km away from the landfall location had no knowledge of the storm having taken place.</p>',
    damageDescription: '<p>Our historic analysis estimates that 5% of the country’s housing stock was destroyed, while damages amounted to upwards of 15% of the country’s capital stock at the time. Santo Domingo at present is one of the most modern cities in the Caribbean containing many modern middle-rise and tall reinforced concrete and steel frame structures as opposed to predominantly low-rise unreinforced masonry houses in 1930. Re-analysis on today’s building inventory and capital stock suggests a potential loss of $15 billion or nearly 10% of the country’s capital stock.</p>'
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
    },
    disasterDescription: '<p>Nine years after the end of the Civil War, the moment magnitude 7.7 earthquake that struck El Salvador on January 13, 2001 was a major disaster for the country.   Damage from this event was the El Salvador’s worst natural disaster since  the 1917 earthquake, although the moderate M5.5 earthquake in the vicinity of San Salvador city in October 1986 was also destructive and quite lethal. The tremor occurred offshore on the Cocos-Caribbean subduction zone in the Pacific Ocean and caused the destruction of 109,000 housing units (7% of the housing stock) and the loss of 945 people (585 of which were killed by earthquake-induced landslides in Santa Tecla and Comasagua). An additional 170,000 houses (approx. 11% of the housing stock) were damaged. Worse affected were La Libertad and Usulután departments, but damage occurred in all the departments with effects being lighter in the more remote (from the subduction zone) Chalatenango and Morazán departments. Landslides were widespread around the mountainous regions, hampering initial relief efforts.  Damage to the water supply system was considerable with clean water and sanitation infrastructure lacking in many areas for quite a long time. A food supply crisis also ensued among the poorest households. Extensive deforestation was blamed for the most lethal landslide in Las Colinas of Santa Tecla (a suburb of San Salvador City).</p>',
    damageDescription: '<p>The total damages and losses of this event were assessed by ECLAC using the DaLA methodology at $1.37 billion, or 10.5% of the country’s GDP at the time, of which $396 million was related to buildings (3% of GDP). El Salvador’s population increased by 8.5% in the period 2001-17, while the number of housing units increased by around 25%. A re-analysis of the event today, suggests $527 million in damages to the residential and non-residential building stock (amounting to 2% of the GDP); but also the risk mitigation measures targeting the most vulnerable buildings were implemented.</p>'
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
    footprint: null,
    disasterDescription: '<p>Winston was the most intense tropical cyclone, as well as the strongest that has ever made landfall in the Southern Hemisphere and became the costliest in the South Pacific’s history. The tropical system formed on February 7, 2016 and followed a looping track in the area between Tonga and Fiji. First heading northeast towards Tonga, tracking well to the south of Fiji and then after stalling over Tonga on February 17 (where it caused damage as a category 2 to 3 cyclone), it turned sharp to the west heading directly towards Fiji and made landfall as a category 5 storm on February 20. Upon reaching Fiji, the storm first passed over the outlying small island chain of the Lau Islands. The storm passed directly over Vanua Balavu, where a wind gust of 306 km/h was observed. Koro, Ovalau and Taveuni Islands sustained severe damage before the storm moved towards the main island of Viti Levu. Just before making landfall on the Ra province (northern part of Viti Levu), Winston attained its peak intensity, with ten-minute sustained winds of 280 km/h and minimum pressure of 884 mbar.</p>',
    damageDescription: '<p>The storm destroyed 11,500 and damaged 19,700 housing units (8% and 13.5% of Fiji’s housing stock respectively). The number of homeless was 55,000 (6.2% of the population), while 44 people lost their lives (a strict curfew had been imposed prior to the storm’s arrival). The quality of construction of the houses is highly varied. Around 40% of the houses are built with concrete block or concrete panel walls and are more cyclone resistant, with the remaining 58% being made from various types and quality of wood frame, with outer walls either from corrugated metal sheets (housing of the poor) or wood panels, while about 2% are traditional thatched houses (bure-type).</p><p>Our analysis using the reported numbers of destroyed and partially damaged housing units in each province found the ratio of destroyed housing units at 48% in Ra, nearly 30% and 27% in Bua and Cakaudrove (in Vanua Levu Island), 26% in Lomaiviti, 16% in Tailevu, 10% in Lau and 7.7% in Ba. In the south of Viti Levu Island (where 42% of Fijians live) the ratio of destroyed houses was much less, at 2.6% in Namosi, 2.1% in Naitasiri, 1.1% in Nadroga Navosai, 0.9% in Serua and 0.4% in Rewa (where the capital, Suva, is situated). These ratios correspond well to the assessed wind speeds and to the quality of the housing stock in each of the 13 affected provinces. The lowest ratio of destroyed houses in Rewa province is related to the better quality of construction in the capital region, but also to the fact that the storm’s track was well to the north of Suva.</p><p>We estimated the value of the Fiji’s building capital stock at $6.5 billion. A re-analysis of the storm’s impact showed damage to the residential and non-residential buildings very similar to the PDNA (modelled residential/non-residential loss ratios at 8.2% and 5.47%, vs. 8.7% and 4.19% respectively by the PDNA).</p>'
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
    },
    disasterDescription: '<p>The 1815 Tambora volcanic eruption remains to date the world’s strongest eruption since the Lake Taupo (New Zealand) eruption in 180 AD. During the paroxysmic phase of the eruption that lasted for about a week starting on April 5th, an estimated 40 to 50 cubic kilometers of pyroclastic materials were ejected, weighing about 10 billion tonnes. Pitch darkness was observed as far away as 600 kilometers from the mountain for up to two days. Pyroclastic flows spread at least 20 kilometers from the summit while in some nearby islands tsunami waves reaching heights up to 4 meters high were reported, with tsunami of 2 meters reported in some of the Molucca Islands. The life loss from the tsunami was estimated at 4,600. The eruption left a caldera measuring 6–7 kilometers across and 600–700 meters deep, while Mount Tambora’s height was reduced from about 4,300 m to 2,800 m. The eruption affected most of Indonesia with ashfall, although the gentle southeasterly monsoonal winds blowing at the time meant that the heavier ashfall occurred west of Tambora with loading heavy enough to cause roof damage or collapse in western, central Sumbawa and Lombok (tephra accumulations of 35 to 60 cm) and to a lesser extent in Bali (tephra accumulations of 20 to 35 cm).</p>',
    damageDescription: '<p>Death toll from this event has been estimated most recently at 71,000 in Sumbawa and Lombok alone including loss of life due to starvation in Sumbawa and disease and hunger in Lombok. The population of Sumbawa, Lombok and Bali at the time was under 750,000 but presently it stands at over 9 million. Reanalysis of the event on today’s exposures shows that over $9 billion in damage just from tephra loading on residential roofs could be expected, which suggests that the event could cause $50 billion in total damage for Indonesia (> 5% of GDP). In the event of a re-occurrence, the potential for indirect losses is also significant with widespread tephra fall causing disruptions to aviation, transportation and damage to crops, machinery and other sensitive equipment. Indonesia is now a trillion dollar economy sitting on top of one of the most active volcanic chains in the World.</p>'
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
    },
    disasterDescription: '<p>The 1988 Armenia earthquake was a tremendously damaging event causing the loss of 25,000 lives, 12,000 hospitalized and leaving 514,000 people homeless. The earthquake occurred on a winter morning in the mountainous northern province of Lory, heavily affecting also the neighboring province of Shirak. The city of Gyumri and town of Spitak and villages between these locations were devastated, while Vanadzor city and Artik, Stepanavan towns were damaged. Armenia, 30 years later, has not yet fully recovered from the effects of this disaster. It was not so much the magnitude (M6.9) of this earthquake but the vulnerability of the Soviet-era apartment blocks that were the culprits. Around 350 multi-story apartment buildings of various structural systems from 4 to 9 floors containing around 10,000 housing units collapsed, causing the death of about 20,500 people, while buildings of other structural systems nearby often stood undamaged or moderately damaged. Ground motion amplification was also thought to contribute to the demise of many 9-story buildings that collapsed in Gyumri whilst their counterparts in Vanadzor suffered moderate damage. Such vulnerable multi-story structures continue being occupied today in other parts of Armenia including the capital Yerevan.</p>',
    damageDescription: '<p>Our historic loss analysis showed that around $175 million (in 1988 US dollars) of damage to the residential sector was incurred; and approximately $900 million capital and $500 million productive sector damage and losses also occurred. This lifts significant doubts over the actual economic losses of this event, which remains among the least understood of the last 30 years, mainly because of the political-financial changes in the USSR at the time of the event. The re-analysis on present day’s exposure has shown that damages to the residential sector would be $420 million or 4.3% of the value of the entire housing stock, as opposed to an estimated 7.1% in 1988. The reduction in the residential loss ratio is because of a) significant outmigration from Northern Armenia to other parts of the country and abroad; b) the fact that at present the mix of buildings in the affected area is less vulnerable as many Soviet apartment blocks were replaced with new and less vulnerable construction types and c) the population in the cities of Gyumri and Vanadzor (Armenia’s second and third biggest cities) is now reduced by up to 50% (in the case of Gyumri) compared to 1988.</p>'
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
    },
    disasterDescription: '<p>Located downstream of 9 international river basins, riverine floods are not an unusual occurrence in Mozambique, which ranks third most exposed to meteorological hazards in Africa. The summer planting season in Mozambique gets under way with rains starting in October to November, but in 2014-15, rains were below the seasonal average until mid-December. From mid-December, 2014 onwards, a period of heavy rainfall started culminating in serious and extensive riverine flooding. At the start the heavy rains were in the south affecting Maputo, Matola and Xai Xai. During the second week of January 2015, heavy rains (200-350 mm) fell in the southern parts of Zambezia province in the area between Gurue and Mocuba. As a result, the Licungo River overflowed forcing initially 15 to 20 thousand people to flee their homes. Heavy rainfall since the beginning of January 2015 also caused significant flooding in the northern provinces of Niassa and Nampula. As of January 16, 100,000 people were affected across Central and Northern Mozambique, while 300,000 were without power and the province of Zambezia was cut into two due to the collapse of major bridges across the Licungo River. Mozambique was on red flood alert between January 12th and March 3rd, while heavy rain and flooding continued to affect Cabo Delgado and Nampula provinces between March 4th and 8th.  In Zambezia province, widespread destruction of transportation infrastructure left 70% of the province unreachable by land and nearly 100,000 acres of cropland was destroyed. By the end of the crisis, the displaced population had reached 157,000 (0.57% of the population), the affected population was 327,000, loss of life reached 163, while 12,612 houses were destroyed (0.21% of the housing stock).</p>',
    damageDescription: '<p>Our spatial analysis showed that between 2000 and 2015, the population living within the 2015 flood affected zones had increased by a higher rate compared to the national average (70% vs. 55%), while around 3.3 million (12% of the country’s population) are living within the 2015 flooded areas plus a 1-km buffer zone. Loss re-analysis showed damages of $61 million in the residential buildings sector, very similar to the PDNA estimate at $56 million. The total direct damage of the 2015 flooding was assessed at $370 million (0.23% of the GDP) with damage to roads, bridges and railways comprising nearly half of the losses.</p>'
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
    },
    disasterDescription: '<p>On October 8, 2005, a devastating earthquake occurred in the autonomous Azad Jammu and Kashmir province of Pakistan. The shock occurred at 8:50 am on a Saturday when many schools and other public buildings were occupied. The magnitude 7.6 earthquake had fault rupture of about 100 km in length and about 2,500 km2 in area. Worst affected (in terms of loss of life) were districts in Azad Jammu and Kashmir (AJ-K) province (Muzaffarabad, Bagh and Poonch) and in Khyber Pakhtunkhwa province (Mansehra, Batagram, Kohistan, Abbottabad and Shangla). Muzaffarabad, the capital of the AJ-K province, was very close to the epicenter and around 50% of its buildings including most of the public buildings were destroyed. In total, it was reported that 437,500 and 136,500 houses were destroyed and partially damaged, with around 2.25 million people becoming long-term homeless. Nearly 73,800 people were killed in Pakistan and another 1,200 in India, while the number injured in Pakistan was 128,309, of which 69,412 were seriously injured (an additional 6,266 were injured in India). Six months after the earthquake more than 2,200 injured were still treated in Pakistani hospitals. The exact number of fatalities is not known. It is roughly estimated that around 20,000 to 25,000 could have perished in landslides, mostly in the Khagan, Neelum and Jhelum Valleys. </p>',
    damageDescription: '<p>Buildings in the villages were predominantly unreinforced rubble stone masonry with heavy compacted earth roofs, while in the towns non-seismically resistant reinforced concrete frames with flat slabs and brick or concrete block infill walls were quite common. Further away in Islamabad (150 km from the epicenter) two of the three 10-story apartment buildings in the Margalla complex collapsed killing 72 people, injuring tens more. Losses from this earthquake were estimated to cost $5 billion in Pakistan (approximately 4% of Pakistan’s GDP in 2005). Our re-analysis highlighted the fact that following extensive reconstruction, the areas affected in 2005 have at present a less vulnerable housing stock and at the same time the value of the stock has increased significantly. As a result of these changes, we estimate that a loss ratio of 1.1% would apply for the whole affected area if the 2005 earthquake was going to occur in 2017. In absolute damage cost terms, we estimate the cost of reconstruction and repair of buildings to reach nearly $1.9 billion in 2017 as opposed to $1.55 billion estimated by the post-earthquake PDNA.</p>'
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
    },
    disasterDescription: '<p>The magnitude 7, January 12, 2010 earthquake was the worst natural disaster in the history of Haiti. The earthquake occurred at 16:53 local time on working day (Tuesday). The epicenter was in the south of the capital Port-au-Prince at a focal depth of 13 km on a blind thrust fault associated with the Enriquillo-Plantain Garden fault zone that runs from west to east between Borahona in the Dominican Republic and the area of the Plantain Garden River in southeastern Jamaica, crossing the entire southern peninsula of Haiti. It devastated many communes of the capital, such as Gressier, Pétion Ville, Carrefour, Cité Soleil, Delmas, the commercial district near the port, as well as neighboring Leogane and Grande Goave.</p>',
    damageDescription: '<p>A building by building damage survey that took place between February 2010 and February 2011 in the entire affected region assessed nearly 399,000 buildings and reported that 79,500 (approximately 20%) had either collapsed entirely or partially or were damaged beyond repair, while another 102,000 buildings (approximately 26%) had repairable structural and (or) non-structural damage and 213,000 (approximately 54%) were undamaged or only slightly damaged. In terms of housing units, the PDNA reported 105,400 destroyed and 208,200 damaged housing units. As a result of tens of thousands of collapsed buildings, loss of life in this earthquake was very severe, estimated to be between 80,000 and 100,000 with the lower value being considered as more likely (an official death count was not carried out). An additional 300,000 people were reportedly injured. The homeless population was initially 2.2 million people though after the aftershocks subsided and the acute phase of the crisis passed the number of displaced was reduced, with the long-term homeless being around 500,000 (Haiti’s population at the time was estimated at 9.93 million).</p><p>Following extensive reconstruction and repair of damaged buildings, the present-day housing stock has changed in the greater Port-au-Prince area. A re-analysis on the 2017 exposure estimated a loss of $3.2 and $1.9 billion in the residential and non-residential buildings sector translating to a loss ratio of 15% for the residential and 13.2% for the non-residential buildings. The 2010 PDNA estimated $2.33 billion in damages to the residential sector (including $585 million in contents damage) and $1.97 billion in damages to other buildings (schools, hospitals, other public buildings, etc.) as well as non-building infrastructure (roads, bridges, ports, airports etc.).</p>'
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
    },
    disasterDescription: '<p>Pakistan experienced La Nina attributed extraordinary monsoon rains in mid-July 2010, which continued until September 2010. The monsoon rainfall of 2010 over the whole country was the highest since 1994 and the second highest in the last 50 years. The result was unprecedented floods affecting the entire country, with the exception of the federal capital district, Islamabad. Flooding started in mid-July from the north, in Azad Jammu-Kashmir (AJ-K), Gilgit-Baltistan (G-B) autonomous provinces and continued until the first half of September when the southernmost areas of Sindh province were flooded, with the rains/floods affecting 20.6 million people (12% of Pakistan’s population). Pakistan’s Ministry of Water and Power reported that in sixty years before the 2010 floods (1950-2009) the total extent of land affected by floods was 407,000 km2 and cumulative loss of life had reached 8,887, while during the 2010 floods, 160,000 km2 of land was inundated (20.7% of the country’s land area), with the waters damaging or destroying 17,553 villages and causing the loss of more than 1,780 lives.</p>',
    damageDescription: '<p>Around 6% of the country’s housing stock was inside the flood zone with 913,300 units destroyed and 694,900 units damaged. Most of the flooded houses were low-cost semi-permanent structures of the katcha-type (houses built with naturally occurring materials, such as mud or compacted earth walls, etc.). This was also evident through the cost assessment of the PDNA, which estimated a mean cost of $871 per destroyed house, with the highest costs occurring in AJ-K, G-B provinces where stone masonry houses are more common. The PDNA estimated direct damage to the housing sector at $1,080 million and indirect damage (including contents replacement, temporary housing costs, debris removal and water supply and sanitation works) at $508 million.</p><p>Our spatial analysis found that, between 2000 and 2015, the population within the 2010 flood zones increased at a rate more than double of the national average (88% vs. 37%), indicating increased risk of future losses. Furthermore, in 2015, nearly 8.8% of the country’s population (16.6 million) lived within the flooded areas plus a 1-km buffer zone. The damage re-analysis using the 2012 high-resolution Pakistan housing exposure database developed for the Historic Risk Scenarios project estimated direct damages of $2.44 billion (loss ratio of 1.44%), which is very similar to the actual residential capital stock loss ratio in 2010.</p>'
  }
];
