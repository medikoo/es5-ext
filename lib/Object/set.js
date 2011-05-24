// Return function that sets value to key property for given object
// set(o)(k, v) =def o[k]=v

'use strict';

module.exports = function (obj) {
	return function (key, value) {
		return obj[key] = value;
	};
};
