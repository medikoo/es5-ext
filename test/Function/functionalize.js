'use strict';

var o = {};

module.exports = function (t, a) {
	var fn
	fn = t(function () { return this; }).bind;
	a(fn(o)(), o, "Bind");
	fn = t(function () { return this; }).call;
	a(fn(a), a, "Call");
	fn = t(function () { return this; }).apply;
	a(fn(a), a, "Apply");
	fn = t(function (a) { return this + a; }).curry;
	a(fn('raz').call('dwa'), 'dwaraz', "Curry");
	fn = t(function (a) { return this + a; }).call.applyArgs;
	a(fn(['raz', 'dwa']), 'razdwa', "Apply args");
};
