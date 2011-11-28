'use strict';

var call = Function.prototype.call;

module.exports = function (t, a) {
	var x = { foo: 3 }, y = { foo: 1 }, z = { foo: 11 }, o = [x, y, z];
	t = call.bind(t('foo'));
	o.sort(t);
	a.deep(o, [y, x, z]);
};
