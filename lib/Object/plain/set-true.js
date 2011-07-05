// Return function that sets true to key property for given object
//
// setTrue.call(o)(k) =def o[k]=true

'use strict';

var f = require('../../Function/functionalize');

module.exports = f(function (key) {
	this[key] = true;
});
