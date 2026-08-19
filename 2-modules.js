// MODULES

// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names'); // IMPORT
// console.log(names);

const data = require('./6-alternative-flavor') // IMPORT
// console.log(data)

require('./7-add-function') // IMPORT

const sayHi = require('./5-utils'); //IMPORT

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);