// Return value for first found object property

'use strict';

var f = require('../../Function/functionalize');

module.exports = f(function () {
	var i;
	for (i in this) {
		if (this.propertyIsEnumerable(i)) {
			return this[i];
		}
	}
	return null;
});
