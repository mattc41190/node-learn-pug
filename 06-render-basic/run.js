const pug = require('pug')
const path = require('path')
const {readFileSync, writeFileSync} = require('fs')

const text = pug.render(readFileSync(path.join(__dirname, 'src', 'index.pug')), {sport: 'baseball'})
writeFileSync(path.join(__dirname, 'dist', 'index.html'), text)
