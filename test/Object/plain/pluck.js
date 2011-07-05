'use strict';

module.exports = function (t, a) {
	t = t.call;
	a.equal(t({ a: 'b' }, 'a'), 'b');
};
