'use strict';

module.exports = function (t, a) {
	a(t.call({ a: 'b' }, 'a'), 'b');
};
