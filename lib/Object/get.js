// Returns a function that for given key returns objects[key] value
// get(o)(k) =def o[k]

'use strict';

module.exports = function (obj) {
	return function (key) {
		return obj[key];
	};
};
