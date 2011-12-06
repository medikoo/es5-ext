'use strict';

module.exports = function (t, a) {
	t = t('x', 5);

	a(t.call('yy'), 'yyxxx');
	a(t.call(''), 'xxxxx', "Empty string");

	a(t.call('yyyyy'), 'yyyyy', 'Equal length');
	a(t.call('yyyyyyy'), 'yyyyyyy', 'Longer');
};
