#!/usr/bin/env node

const fs = require('fs')
const Readable = require('stream').Readable
const Decimal = require('decimal.js')
const polygon = require('turf-polygon')

const sizeInKilometers = process.argv[2]

const rs = Readable()
const ws = fs.createWriteStream(`./data/other/grid${sizeInKilometers}km.geojson`)
ws.write('{ "type": "FeatureCollection", "features": [\n')
rs.pipe(ws)

// Fiji wraps around the date line
const xMin = Decimal(-180)
const xMax = Decimal(180)
// Armenia and Chile are the northern- and southern-most disaster areas
const yMin = Decimal(-58)
const yMax = Decimal(42)
// `1/60/2` is 30 seconds of a degree, or one kilometer at the equator
const sizeInDegrees = Decimal(1).dividedBy(60).dividedBy(2).times(sizeInKilometers)

var first = true
var currentX = xMin
var currentY = yMin
rs._read = () => {
  currentY = currentY.plus(sizeInDegrees)
  if (currentY > yMax) {
    currentY = yMin
    currentX = currentX.plus(sizeInDegrees)
  }
  if (currentX > xMax) {
    rs.push(']}')
    rs.push(null)
  } else {
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
