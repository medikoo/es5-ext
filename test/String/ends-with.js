// In some parts copied from:
// http://closure-library.googlecode.com/svn/trunk/closure/goog/string/string_test.html

'use strict';

module.exports = function (t, a) {
	t = t.call;
	a.ok(t('abc', ''), "Empty needle");
	a.ok(t('abcd', 'cd'), "Ends with needle");
	a.ok(t('abcd', 'abcd'), "Needle equals haystack");
	a.ok(!t('abcd', 'ab'), "Doesn't end with needle");
};
