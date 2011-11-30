// Returns a function that for given key returns object[key] value
//
// get.bind(o)(k) =def o[k]

'use strict';

module.exports = function (key) {
	return this[key];
};
