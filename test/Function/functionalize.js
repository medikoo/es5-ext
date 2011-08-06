'use strict';

var o = {};

module.exports = function (t, a) {
	var bind = t(function () { return this; }).bind;
	a(bind(o)(), o, "Bind");
	var call = t(function () { return this; }).call;
	a(call(a), a, "Call");
	var apply = t(function () { return this; }).apply;
	a(apply(a), a, "Apply");
};
