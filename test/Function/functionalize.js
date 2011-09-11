'use strict';

var o = {};

module.exports = function (t, a) {
	var bind, call, apply, curry;
	bind = t(function () { return this; }).bind;
	a(bind(o)(), o, "Bind");
	call = t(function () { return this; }).call;
	a(call(a), a, "Call");
	apply = t(function () { return this; }).apply;
	a(apply(a), a, "Apply");
	curry = t(function (a) { return this + a; }).curry;
	a(curry('raz').call('dwa'), 'dwaraz', "Curry");
};
