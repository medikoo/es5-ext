// Inspired and in some parts copied from:
// http://closure-library.googlecode.com/svn/trunk/closure/goog/string/string_test.html

'use strict';

module.exports = function (t, a) {
	t = t.call;
	a.ok(t('abc', ''), "Empty needle");
	a.ok(t('abcd', 'ab'), "Starts with needle");
	a.ok(t('abcd', 'abcd'), "Needle equals haystack");
	a.ok(!t('abcd', 'cd'), "Doesn't start with needle");
};
