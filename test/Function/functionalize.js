'use strict';

var o = {};

module.exports = {
	"Bind": function (t, a) {
		var bind = t(function () { return this; }).bind;
		a.equal(bind(o)(), o);
	},
	"Call": function (t, a) {
		var call = t(function () { return this; }).call;
		a.equal(call(a), a);
	},
	"Apply": function (t, a) {
		var apply = t(function () { return this; }).apply;
		a.equal(apply(a), a);
	}
};
