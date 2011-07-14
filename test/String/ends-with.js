// In some parts copied from:
// http://closure-library.googlecode.com/svn/trunk/closure/goog/string/string_test.html

'use strict';

module.exports = {
	"Empty needle": function (t, a) {
		a.ok(t('abc', ''));
	},
	"Ends with needle": function (t, a) {
		a.ok(t('abcd', 'cd'));
	},
	"Needle equals haystack": function (t, a) {
		a.ok(t('abcd', 'abcd'));
	},
	"Doesn't end with needle": function (t, a) {
		a.ok(!t('abcd', 'ab'));
	}
};
