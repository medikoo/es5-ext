'use strict';

var o = { call: Function.prototype.call, apply: Function.prototype.apply };

module.exports = {
	"Function is function": function (t, a) {
		a.equal(t(function () {}), true);
	},
	"Plain object is not function": function (t, a) {
		a.equal(t(o), false);
	}
};
