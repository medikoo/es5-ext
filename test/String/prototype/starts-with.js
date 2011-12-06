// Inspired and in some parts copied from:
// http://closure-library.googlecode.com/svn/trunk/closure/goog/string/string_test.html

'use strict';

module.exports = function (t, a) {
	a.ok(t.call('abc', ''), "Empty needle");
	a.ok(t.call('abcd', 'ab'), "Starts with needle");
	a.ok(t.call('abcd', 'abcd'), "Needle equals haystack");
	a.ok(!t.call('abcd', 'cd'), "Doesn't start with needle");
};
