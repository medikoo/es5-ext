// Return function that sets true to key property for given object
// setTrue(o)(k) =def o[k]=true

'use strict';

module.exports = function (obj) {
	return function (key) {
		obj[key] = true;
	};
};
