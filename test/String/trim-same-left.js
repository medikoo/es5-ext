'use strict';

module.exports = {
	"Empty string": function (t, a) {
		a.equal(t('abc', ''), 'abc');
	},
	"Whole same": function (t, a) {
		a.equal(t('abc', 'abc'), '');
	},
	"Same start": function (t, a) {
		a.equal(t('abcd', 'ab'), 'cd');
	},
	"Same part contained": function (t, a) {
		a.equal(t('abcd', 'bc'), 'abcd');
	},
	"Not matched": function (t, a) {
		a.equal(t('abcd', 'xyz'), 'abcd');
	}
};

