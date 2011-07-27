'use strict';

module.exports = function (t, a) {
	t = t.call;
	a(t('abc', ''), 0, "Empty string");
	a(t('abc', 'abc', 'abcd'), 3, "Whole same");
	a(t('abcd', 'abc', 'ab'), 2, "Same start");
	a(t('abcd', 'bc', 'cd'), 0, "Same part contained");
	a(t('abcd', 'xyz'), 0, "Not matched");
};
