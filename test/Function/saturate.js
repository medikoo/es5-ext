'use strict';

module.exports = function (t, a) {
	a(t(function (a, b, c) {
		return arguments.length;
	})(1,2,3), 0);
};
