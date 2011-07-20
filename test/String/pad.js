'use strict';

module.exports = function (t, a) {
	t = t.call('x', 5).call;

	a(t('yy'), 'xxxyy');
	a(t(''), 'xxxxx', "Empty string");

	a(t('yyyyy'), 'yyyyy', 'Equal length');
	a(t('yyyyyyy'), 'yyyyyyy', 'Longer');
};
