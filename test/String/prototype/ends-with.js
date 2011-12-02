// In some parts copied from:
// http://closure-library.googlecode.com/svn/trunk/closure/goog/string/string_test.html

'use strict';

module.exports = function (t, a) {
	a.ok(t.call('abc', ''), "Empty needle");
	a.ok(t.call('abcd', 'cd'), "Ends with needle");
	a.ok(t.call('abcd', 'abcd'), "Needle equals haystack");
	a.ok(!t.call('abcd', 'ab'), "Doesn't end with needle");
	a.ok(!t.call('abc', 'defg'), "Length trick");
};
