'use strict';

var o = { foo: 'bar' };

module.exports = function (t, a) {
	a.equal(t('foo')(o), o.foo);
};
