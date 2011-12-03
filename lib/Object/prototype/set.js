// Return function that sets value to key property for given object
//
// set.call(o)(k, v) =def o[k]=v

'use strict';

module.exports = function (key, value) {
	return (this[key] = value);
};
