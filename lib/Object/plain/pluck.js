// Returns a function that for given key returns object[key] value
//
// pluck.bind(o)(k) =def o[k]

'use strict';

var f = require('../../Function/functionalize');

module.exports = f(function (key) {
	return this[key];
});
