'use strict';

module.exports = {
	__generic: function (t, a) {
		var x = t(this);
		a.ok(x instanceof Array, "Got Array");
		a(x.length, this.length, "Length");
		x.forEach(function (el, i) {
			a(el, this[i], "Content #" + i);
		}, this);
	},
	"": function (t, a) {
		var o = [1, 2, 3], r;
		a(t("12345", 2, 3).length, 5, "Extra arguments does not affect result");
		a.deep(t(function (x) { return arguments; }(3)), [3],
			"List with one numeric value");
		a(t(o), o, "On array returns same array");

		r = t({'0': 'raz', '1': 'dwa', length: 2 });
		a.ok(r instanceof Array, "Dummy");
		a.deep(r, ['raz', 'dwa'], "Dummy content");
	}
};
