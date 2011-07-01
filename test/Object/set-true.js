'use strict';

module.exports = function (t, a) {
	var o = {};
	t = t.call;
	t(o, 'b');
	a.equal(o.b, true);
};
