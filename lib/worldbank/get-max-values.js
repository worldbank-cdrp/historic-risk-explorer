#!/usr/bin/env node

// In order to create color ramps on the front-end, need to know
// the maximum value of each variable for each tileset

const fs = require('fs')
const path = require('path')

const vars = ['exp', 'aloss', 'lr']

const adminDir = './data/worldbank/admin'
const adminFiles = fs.readdirSync(adminDir).map(f => path.join(adminDir, f))
const gridDir = './data/worldbank/gridded'
const gridFiles = fs.readdirSync(gridDir).map(f => path.join(gridDir, f))

const maxes = {}

adminFiles.concat(gridFiles).forEach(file => {
  console.log(file)
  // Suffix indicates whether the file is `admin`, `grid5km`, etc
  const [_, disaster, suffix] = path.basename(file).match('^(.+)_(.+?).geojson$')
  if (!Object.keys(maxes).includes(disaster)) { maxes[disaster] = {} }

  const data = JSON.parse(fs.readFileSync(file, 'utf-8'))
  const properties = data.features.map(f => f.properties)

  vars.forEach(v => {
    if (!Object.keys(maxes[disaster]).includes(v)) { maxes[disaster][v] = {} }
    const max = properties.map(p => p[v]).reduce((max, thisOne) => Math.max(max, thisOne), 0)
    maxes[disaster][v][suffix] = max
  })
})

console.log(maxes)
