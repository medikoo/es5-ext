'use strict';

exports.__generic = function (t, a) {
	t = t.call;
	a(t(this, [{}, {}]), 0);
};

exports[''] = function (t, a) {
	t = t.call;
	a(t('abc', ''), 0, "Empty");
	a(t(['a', 2, 'c'], ['a', 2, 'c'], ['a', 2, 'c', 'c', 'd']), 3, "Whole same");
	a(t('abcd', 'abc', 'ab'), 2, "Same start");
	a(t('abcd', 'bc', 'cd'), 0, "Same part contained");
	a(t('abcd', 'xyz'), 0, "Not matched");
};
