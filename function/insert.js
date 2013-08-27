'use strict';

var value = require('../object/valid-value');

module.exports = function (name, val) {
	return function (obj) { value(obj)[name] = val; };
};
