'use strict';

var isEmpty = require('../../../lib/Object/prototype/is-empty');

module.exports = function (t, a) {
	var x = {};
	a(t.call(x), x, "Empty: Returns same object");
	a(isEmpty.call(x), true, "Empty: Not changed");
	x.foo = 'raz', x.bar = 'dwa';
	a(t.call(x), x, "Same object");
	a(isEmpty.call(x), true, "Emptied");
};
