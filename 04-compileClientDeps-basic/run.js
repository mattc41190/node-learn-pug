const pug = require('pug')
const path = require('path')
const {readFileSync, writeFileSync} = require('fs')

const makeFoodView = pug.compileClientWithDependenciesTracked(readFileSync(path.join(__dirname, 'src', 'food-view.pug')), {filename: 'food-view'})

// NOTE: the `template` function returned by makeFoodView will return a string.
writeFileSync(path.join(__dirname, 'dist', 'makeFoodView.js'), makeFoodView.body)
