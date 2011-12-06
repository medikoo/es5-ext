'use strict';

module.exports = {
	"Left": function (t, a) {
		t = t('x', 5);

		a(t.call('yy'), 'xxxyy');
		a(t.call(''), 'xxxxx', "Empty string");

		a(t.call('yyyyy'), 'yyyyy', 'Equal length');
		a(t.call('yyyyyyy'), 'yyyyyyy', 'Longer');
	},
	"Right": function (t, a) {
		t = t('x', -5);

		a(t.call('yy'), 'yyxxx');
		a(t.call(''), 'xxxxx', "Empty string");

		a(t.call('yyyyy'), 'yyyyy', 'Equal length');
		a(t.call('yyyyyyy'), 'yyyyyyy', 'Longer');
	}
};
