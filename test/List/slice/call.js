'use strict';

module.exports = function (t, a) {
	a(t([1,2,3,4,5], 1, 3).length, 2);
};
