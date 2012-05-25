// In some parts copied from:
// http://closure-library.googlecode.com/svn/trunk/closure/goog/
// string/string_test.html

'use strict';

module.exports = function (t, a) {
	a(t.call('abc', ''), true, "Empty needle");
	a(t.call('abcd', 'cd'), true, "Ends with needle");
	a(t.call('abcd', 'abcd'), true, "Needle equals haystack");
	a(!t.call('abcd', 'ab'), true, "Doesn't end with needle");
	a(!t.call('abc', 'defg'), true, "Length trick");
	a(t.call('razdwa', 'dw', 2), false, "");
};
