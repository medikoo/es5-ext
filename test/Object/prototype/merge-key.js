'use strict';

module.exports = function (t, a) {
	var o = {};
	t.call(o, {a: 2}, 'a');
	a(o.a, 2);
};
