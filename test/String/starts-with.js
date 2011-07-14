// Inspired and in some parts copied from:
// http://closure-library.googlecode.com/svn/trunk/closure/goog/string/string_test.html

'use strict';

module.exports = {
	"Empty needle": function (t, a) {
		a.ok(t('abc', ''));
	},
	"Starts with needle": function (t, a) {
		a.ok(t('abcd', 'ab'));
	},
	"Needle equals haystack": function (t, a) {
		a.ok(t('abcd', 'abcd'));
	},
	"Doesn't start with needle": function (t, a) {
		a.ok(!t('abcd', 'cd'));
	}
};
