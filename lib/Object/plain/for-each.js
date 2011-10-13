// Analogous to Array.prototype.forEach
//
// Calls a function for each key-value pair found in object
// Additionally you can provide compareFn to iterate object in desired order

'use strict';

var f       = require('../../Function/functionalize')
  , iterate = require('./_iterate');

module.exports = f(iterate('forEach'));
