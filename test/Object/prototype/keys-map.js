'use strict';

module.exports = function (t, a) {
	a.deep(t.call({ 1: 1, 2: 2, 3: 3 }, function (key, value) {
		return 'x' + (key + value);
	}), { x11: 1, x22: 2, x33: 3 });
};
