'use strict';

module.exports = function (t, a) {
	t = t.call;
	a(t('abc', ''), 'abc', "Empty string");
	a(t('abc', 'abc'), '', "Whole same");
	a(t('abcd', 'ab'), 'cd', "Same start");
	a(t('abcd', 'bc'), 'abcd', "Same part contained");
	a(t('abcd', 'xyz'), 'abcd', "Not matched");
};

