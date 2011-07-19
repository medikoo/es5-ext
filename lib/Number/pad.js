'use strict';

var f   = require('../Function/functionalize')
  , pad = require('../String/pad').bind('0');

module.exports = f(function (precision) {
	var fn = pad(this).call;
	return f(function () {
		return fn(precision ? this.toFixed(precision) : String(this));
	});
});
