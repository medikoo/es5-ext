// Functional version of ./prototype/copy.js

'use strict';

var copy = require('./prototype/copy');

module.exports = function (list) {
	return copy.call(list);
};
