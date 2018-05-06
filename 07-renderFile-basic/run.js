const pug = require('pug')
const path = require('path')
const {writeFileSync} = require('fs')

const text = pug.renderFile(path.join(__dirname, 'src', 'index.pug'), {show: 'Cheers'})
writeFileSync(path.join(__dirname, 'dist', 'index.html'), text)