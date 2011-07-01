'use strict';

module.exports = function (t, a) {
	var o = {};
	t = t.call;
	t(o, 2, 'b');
	a.equal(o.b, 2);
};
