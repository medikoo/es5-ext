// Return function that sets value to key property for given object
//
// set.call(o)(k, v) =def o[k]=v

'use strict';

var valid = require('../valid-value');

module.exports = function (obj, key, value) {
	return valid(obj) && (obj[key] = value);
};
