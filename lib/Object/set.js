// Return function that sets value to key property for given object
//
// set.call(o)(k, v) =def o[k]=v

'use strict';

var assertNotNull = require('../assert-not-null');

module.exports = function (obj, key, value) {
	assertNotNull(obj);
	return (obj[key] = value);
};
