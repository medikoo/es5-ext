'use strict';

module.exports = function (t, a) {
	var o = {};
	t.call(o, 2, 'b');
	a.equal(o.b, 2);
};
