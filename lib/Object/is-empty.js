// Whether object doesn't have any own enumerable property

'use strict';

var assertNotNull = require('../assert-not-null');

module.exports = function (obj) {
	var i;
	assertNotNull(obj);
	for (i in obj) {
		if (obj.propertyIsEnumerable(i)) {
			return false;
		}
	}
	return true;
};
