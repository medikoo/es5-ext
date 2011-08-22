'use strict';

module.exports = function (t, a) {
	t = t.call;
	a.deep(t({ 1: 1, 2: 2, 3: 3 }, function (value, key) {
		return (value + 1) + key;
	}), { 1: '21', 2: '32', 3: '43' });
};
