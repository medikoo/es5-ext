'use strict';

module.exports = {
	"Default": function (t, a) {
		var i, fn = t();
		t(fn(), "0", "First");
		t(fn(), "1", "Second");
		i = 10;
		while (i--) fn();
		t(fn(), "c", "12th");
	},
	"Prefixed": function (t, a) {
		var i, fn = t('pre');
		t(fn(), "pre0", "First");
		t(fn(), "pre1", "Second");
		i = 40;
		while (i--) fn();
		t(fn(), "pre16", "42th");
	},
	"Postfixed": function (t, a) {
		var i, fn = t(null, 'post');
		t(fn(), "0post", "First");
		t(fn(), "1post", "Second");
		i = 40;
		while (i--) fn();
		t(fn(), "16post", "42th");
	},
	"Prefixed & Postfixed": function (t, a) {
		var i, fn = t('pre', 'post');
		t(fn(), "pre0post", "First");
		t(fn(), "pre1post", "Second");
		i = 40;
		while (i--) fn();
		t(fn(), "pre16post", "42th");
	}
};
