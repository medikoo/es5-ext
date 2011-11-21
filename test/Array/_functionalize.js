'use strict';

module.exports = function (t, a) {
	var x, y, z;

	x = function (a, b) {
		return [this, a, b];
	};

	y = t(x, 'test');
	a.deep(y(z = [], 'raz', 54), [z, 'raz', 54], "Signature");
	a.throws(function () {
		y();
	}, "No Scope");
};
