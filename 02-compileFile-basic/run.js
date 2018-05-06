const pug = require('pug')
const path = require('path')
const {writeFileSync} = require('fs')

const makeBandView = pug.compileFile(path.join(__dirname, 'src', 'index.pug'))

// makeBandView may be called as many times as you want!
// Simply provide `.html` files and bands.
// By doing this you may easily write your own server side renderer.
writeFileSync(path.join(__dirname, 'dist', 'index.html'), 
  makeBandView({band: 'Billy Joel'})
)


