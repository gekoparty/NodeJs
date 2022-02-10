const sayHi = require('./5-utils');
//const names = require('./4-names');
const {john, peter} = require('./4-names')
//console.log(names)
require('./7-mind-grenade')

const data = require('./6-alternative');
console.log(data)

sayHi("geir")
sayHi(peter)
sayHi(john)

//or
//sayHi(names.john);