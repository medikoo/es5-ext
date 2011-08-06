'use strict';

module.exports = function (t, a) {
	t = t.call;
	a(t('a', 0), '', "Empty");
	a(t('a', 1), 'a', "1");
	a(t('\t', 5), '\t\t\t\t\t', "Whitespace");
	a(t('raz', 3), 'razrazraz', "Many chars");
};
