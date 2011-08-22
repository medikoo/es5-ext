'use strict';

var isEmpty = require('../../../lib/Object/plain/is-empty').call;

module.exports = function (t, a) {
	var x = {};
	t = t.call;
	a(t(x), x, "Empty: Returns same object");
	a(isEmpty(x), true, "Empty: Not changed");
	x.foo = 'raz', x.bar = 'dwa';
	a(t(x), x, "Same object");
	a(isEmpty(x), true, "Emptied");
};
