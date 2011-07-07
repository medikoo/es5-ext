// Returns a function that for given key returns object's descriptor
// for given key
//
// pluck.bind(o)(k) =def descriptor of o.k

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function (key) {
	return Object.getOwnPropertyDescriptor(this, key);
});
