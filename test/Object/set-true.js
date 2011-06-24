'use strict';

module.exports = function (t, a) {
	var o = {};
	t.call(o, 'b');
	a.equal(o.b, true);
};
