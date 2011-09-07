'use strict';

var o = { foo: 'bar' };

module.exports = function (t, a) {
	var o = { foo: 'bar' }, x = {};
	t('foo', x)(o);
	a(o.foo, x);
};
