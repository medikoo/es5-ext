// Whether object has any own property

'use strict';

var assertNotNull = require('../../assert-not-null');

module.exports = function () {
	var i;
	assertNotNull(this);
	for (i in this) {
		if (this.propertyIsEnumerable(i)) {
			return false;
		}
	}
	return true;
};
