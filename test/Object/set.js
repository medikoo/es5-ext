'use strict';

module.exports = function (t, a) {
	var o = {};
	t.call(o, 'b', 2);
	a.equal(o.b, 2);
};
