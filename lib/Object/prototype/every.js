// Analogous to Array.prototype.every.
//
// Returns true if every key-value pair in this object satisfies the provided
// testing function.

'use strict';

var iterate = require('./_iterate');

module.exports = iterate('every');
