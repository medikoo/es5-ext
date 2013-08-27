'use strict';

var value = require('../object/valid-value');

module.exports = function (name) {
	return function (obj) { delete value(obj)[name]; };
};
