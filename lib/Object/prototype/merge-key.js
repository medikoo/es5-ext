// Returns a function that for given key assigns chosen object property value to
// same property of other object
//
// mergeKey.call(a, b, k) =def a[k]=b[k]

'use strict';

module.exports = function (obj, key) {
	return (this[key] = obj[key]);
};
