// Return function that sets key property of given object to given value
//
// setValue.call(o, v)(k) =def o[k]=v

'use strict';

var f = require('../../Function/functionalize');

module.exports = f(function (value, key) {
	this[key] = value;
});
