'use strict';

module.exports = function (name, value) {
	return function (obj) {
		obj[name] = value;
	};
};
