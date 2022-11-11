//console.log("hola mundo desde node.js");;

const parrotSay = require('parrotsay-api')

parrotSay('Satoshi campeon mundial')
  .then(console.log)
  .catch(console.error)
  
  