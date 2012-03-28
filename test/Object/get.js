'use strict';

module.exports = function (t, a) {
	a(t({ a: 'b' }, 'a'), 'b');
};
