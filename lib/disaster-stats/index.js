'use strict'

var tileReduce = require('tile-reduce');

tileReduce({
  source: [[
    name: process.argv[2],
    zoom: 15,
    mbtiles: //,
    raw: true
  }]
})
.on('reduce', (feature) => {
  console.log(feature);  
})
.on('end', () => {})
