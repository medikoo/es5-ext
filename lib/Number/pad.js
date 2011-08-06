// Pad given number with zeros. Returns string

'use strict';

var f   = require('../Function/functionalize')
  , pad = require('../String/pad').bind('0');

module.exports = f(function (precision) {
	var fn = pad(this + (precision ? (1 + precision) : 0)).call;
	return f(function () {
		return fn(precision ? this.toFixed(precision) : String(this));
	});
});
