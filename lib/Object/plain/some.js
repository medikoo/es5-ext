// Analogous to Array.prototype.some
//
// Returns true if any key-value pair satisfies the provided
// testing function.

'use strict';

var f       = require('../../Function/functionalize')
  , iterate = require('./_iterate');

module.exports = f(iterate('some'));
