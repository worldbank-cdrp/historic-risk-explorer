#!/usr/bin/env node

const fs = require('fs')
const Readable = require('stream').Readable
const Decimal = require('decimal.js')
const polygon = require('turf-polygon')

const sizeInKilometers = process.argv[2]

const bounds = [
  {
    country: 'arm',
    xMin: 43,
    yMin: 38,
    xMax: 47,
    yMax: 42
  },
  {
    country: 'chl',
    xMin: -110,
    yMin: -45,
    xMax: -69,
    yMax: -26
  },
  {
    country: 'dom-hti',
    xMin: -75,
    yMin: 17,
    xMax: -68,
    yMax: 21
  },
  {
    country: 'fji-west',
    xMin: -180,
    yMin: -22,
    xMax: -176,
    yMax: -12
  },
  {
    country: 'fji-east',
    xMin: 174,
    yMin: -22,
    xMax: 180,
    yMax: -12
  },
  {
    country: 'idn',
    xMin: 95,
    yMin: -11,
    xMax: 141,
    yMax: 6
  },
  {
    country: 'pak',
    xMin: 60,
    yMin: 23,
    xMax: 78,
    yMax: 38
  },
  {
    country: 'slv',
    xMin: -91,
    yMin: 13,
    xMax: -87,
    yMax: 15
  }
]

// `1/60/2` is 30 seconds of a degree, or one kilometer at the equator
const sizeInDegrees = Decimal(1).dividedBy(60).dividedBy(2).times(sizeInKilometers)

bounds.forEach(b => {
  console.log(`Creating ${sizeInKilometers}km grid for area of ${b.country}`)

  const rs = Readable()
  const ws = fs.createWriteStream(`./data/other/grid${sizeInKilometers}km-${b.country}.geojson`)
  ws.write('{ "type": "FeatureCollection", "features": [\n')
  rs.pipe(ws)

  var xMin = Decimal(b.xMin)
  var yMin = Decimal(b.yMin)
  var xMax = Decimal(b.xMax)
  var yMax = Decimal(b.yMax)

  var first = true
  var currentX = xMin
  var currentY = yMin.minus(sizeInDegrees)

  rs._read = () => {
    currentY = currentY.plus(sizeInDegrees)
    if (currentY.greaterThan(yMax)) {
      currentY = yMin
      currentX = currentX.plus(sizeInDegrees)
    }

    if (currentX.greaterThan(xMax)) {
      rs.push(']}')
      rs.push(null)
    } else {
      // Write a new square feature to the file
      const cellPoly = polygon([[
        [Number(currentX.toDP(5)), Number(currentY.toDP(5))],
        [Number(currentX.toDP(5)), Number(currentY.plus(sizeInDegrees).toDP(5))],
        [Number(currentX.plus(sizeInDegrees).toDP(5)), Number(currentY.plus(sizeInDegrees).toDP(5))],
        [Number(currentX.plus(sizeInDegrees).toDP(5)), Number(currentY.toDP(5))],
        [Number(currentX.toDP(5)), Number(currentY.toDP(5))]
      ]])
      if (first) {
        first = false
        rs.push(`${JSON.stringify(cellPoly)}\n`)
      } else {
        rs.push(`, ${JSON.stringify(cellPoly)}\n`)
      }
    }
  }
})
