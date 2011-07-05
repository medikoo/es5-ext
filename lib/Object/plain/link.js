// Returns a function that for given key assigns chosen object property value to
// same property of other object
// 
// link.call(a, b)(k) =def a[k]=b[k]

'use strict';

var f = require('../../Function/functionalize');

module.exports = f(function (b, k) {
	return (this[k] = b[k]);
});
