// Analogous to Array.prototype.every.
//
// Returns true if every key-value pair in this object satisfies the provided
// testing function.

'use strict';

module.exports = require('./_iterate')('every');
