'use strict';

module.exports = function (t, a) {
	var x = { foo: 'bar', bar: 34 };

	t.call(x, 'foo');
	a(x.hasOwnProperty('foo'), false, "Remove named property");
	a(x.bar, 34, "Leave other properties intact");
};
