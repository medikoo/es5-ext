// Whether object has any own property

'use strict';

var f = require('../../Function/functionalize');

module.exports = f(function () {
	var i;
	for (i in this) {
		if (this.propertyIsEnumerable(i)) {
			return false;
		}
	}
	return true;
});
