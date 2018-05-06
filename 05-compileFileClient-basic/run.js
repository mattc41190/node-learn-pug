const pug = require('pug')
const path = require('path')
const {writeFileSync} = require('fs')

const makeDrinkView = pug.compileFileClient(path.join(__dirname, 'src', 'drink-view.pug'))

// NOTE: the `template` function returned by makeDrinkView will return a string.
writeFileSync(path.join(__dirname, 'dist', 'makeDrinkView.js'), makeDrinkView )
