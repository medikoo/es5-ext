'use strict';

module.exports = function (t, a) {
	var x = {}, y = {}
	  , o = { 'foo': 'bar', 'raz': x, 'trzy': 'cztery', 'five': '6' };

	a(t.call(o, 'bar'), 'foo', "First property");
	a(t.call(o, 6), null, "Primitive that's not there");
	a(t.call(o, x), 'raz', "Object");
	a(t.call(o, y), null, "Object that's not there");
	a(t.call(o, '6'), 'five', "Last property");
};
