// Return function that sets value to key property for given object
//
// set.call(o)(k, v) =def o[k]=v

'use strict';

var f = require('../../Function/functionalize');

module.exports = f(function (key, value) {
	return (this[key] = value);
});
