// Analogous to Array.prototype.forEach
//
// Calls a function for each key-value pair found in object
// Additionally you can provide compareFn to iterate object in desired order

'use strict';

var iterate = require('./_iterate');

module.exports = iterate('forEach');
