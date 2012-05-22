// Find all indexes of given value

'use strict';

var indexOf = require('./e-index-of');

module.exports = function (value, fromIndex) {
	var r = [], i;
	while ((i = indexOf.call(this, value, fromIndex)) !== -1) {
		r.push(i);
		fromIndex = i + 1;
	}
	return r;
};
