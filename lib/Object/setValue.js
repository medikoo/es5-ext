// Return function that sets key property of given object to given value
// setValue(o, v)(k) =def o[k]=v

'use strict';

module.exports = function (obj, value) {
	return function (key) {
		obj[key] = value;
	};
};
