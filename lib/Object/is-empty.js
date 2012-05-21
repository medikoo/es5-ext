// Whether object doesn't have any own enumerable property

'use strict';

var valid = require('../valid-value');

module.exports = function (obj) {
	var i;
	valid(obj);
	for (i in obj) {
		if (obj.propertyIsEnumerable(i)) {
			return false;
		}
	}
	return true;
};
