'use strict';

exports.__generic = function (t, a) {
	t = t.call;
	a.deep(t(this, [{}, {}]), this);
};

exports[''] = function (t, a) {
	t = t.call;
	a(t('abc', ''), 'abc', "Empty");
	a.deep(t(['a', 2, 'c'], ['a', 2, 'c'], ['a', 2, 'c', 'c', 'd']), [], "Whole same");
	a(t('abcd', 'abc', 'ab'), 'cd', "Same start");
	a(t('abcd', 'bc', 'cd'),'abcd', "Same part contained");
	a(t('abcd', 'xyz'), 'abcd', "Not matched");
};
