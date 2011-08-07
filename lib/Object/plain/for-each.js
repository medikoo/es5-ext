// Analogous to Array.prototype.forEach
//
// Calls a function for each key-value pair found in object

'use strict';

var f     = require('../../Function/functionalize')
  , s     = require('../../Function/s').call
  , pluck = require('./pluck').bind;

module.exports = f(function (callback, scope) {
	Object.keys(this).forEach(s(callback, pluck(this)), scope);
});
