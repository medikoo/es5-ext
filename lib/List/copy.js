// Return copy of list

'use strict';

var copy = require('./prototype/copy');

module.exports = function (list) {
	return copy.call(list);
};
