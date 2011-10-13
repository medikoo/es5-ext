// Analogous to Array.prototype.every.
//
// Returns true if every key-value pair in this object satisfies the provided
// testing function.

'use strict';

var f       = require('../../Function/functionalize')
  , iterate = require('./_iterate');

module.exports = f(iterate('every'));
