// Whether object has any own property

'use strict';

module.exports = function () {
	var i;
	for (i in this) {
		if (this.propertyIsEnumerable(i)) {
			return false;
		}
	}
	return true;
};
