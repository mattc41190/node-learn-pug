const pug = require('pug')
const path = require('path')
const {readFileSync, writeFileSync} = require('fs')

const makeGameView = pug.compileClient(readFileSync(path.join(__dirname, 'src', 'game-view.pug')))

// NOTE: the `template` function returned by makeGameView will return a string.
writeFileSync(path.join(__dirname, 'dist', 'makeGameView.js'), makeGameView )
