'use strict';

module.exports = function (t, a) {
	a.equal(t.call({ a: 'b' }, 'a'), 'b');
};
