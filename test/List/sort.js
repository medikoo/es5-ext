'use strict';

var getArgs = require('../../lib/Function/get-args');

module.exports = {
	__generic: function (t, a) {
		var r;
		t = t.call;
		a.not(r = t(this), this, "Not same");
		a(r.length, this.length, "Same length");
	},
	'': function (t, a) {
		var o = ['a', 'z', 'c', 'b'], r;
		t = t.call;
		r = t(o);
		a.not(o, r, "Not same objects");
		a.deep(r, ['a', 'b', 'c', 'z'], "Sorted with default function");

		o = getArgs(1, 11, 138, 23, 5);
		a.deep(t(o, function (a, b) {
			return a - b;
		}), [1, 5, 11, 23, 138], "Custom compare function. Arguments");
	}
};
