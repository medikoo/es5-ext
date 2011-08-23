'use strict';

module.exports = function (t, a) {
	var x = { foo: 3 }, y = { foo: 1 }, z = { foo: 11 }, o = [x, y, z];
	o.sort(t('foo'));
	a.deep(o, [y, x, z]);
};
