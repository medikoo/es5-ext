// Returns value for first index

'use strict';

var firstIndex = require('./first-index');

module.exports = function () {
	var i;
	if ((i = firstIndex.call(this)) !== null) {
		return this[i];
	}
	return undefined;
};
