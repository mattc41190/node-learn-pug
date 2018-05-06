const pug = require('pug')
const path = require('path')
const {readFileSync, writeFileSync} = require('fs')

const source = readFileSync(path.join(__dirname, 'src', 'index.pug'), 'utf8')

const makeAnimalView = pug.compile(source)

// makeAnimalView may be called as many times as you want!
// Simply provide `.html` files and animals.
// By doing this you may easily write your own server side renderer.
writeFileSync(path.join(__dirname, 'dist', 'index.html'), 
  makeAnimalView({animal: 'Zebra'})
)


