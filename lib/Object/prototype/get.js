// Returns a function that for given key returns object[key] value
//
// get.bind(o)(k) =def o[k]

'use strict';

var assertNotNull = require('../../assert-not-null');

module.exports = function (key) {
	assertNotNull(this);
	return this[key];
};
