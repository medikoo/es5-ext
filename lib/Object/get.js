// Returns a function that for given key returns object[key] value
//
// get.bind(o)(k) =def o[k]

'use strict';

var valid = require('../valid-value');

module.exports = function (obj, key) {
	return valid(obj) && obj[key];
};
