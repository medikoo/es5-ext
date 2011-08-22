'use strict';

module.exports = function (t, a) {
	t = t.call;
	a(t('raz', 'dwa'), 'dwaraz');
	a(t('', 'raz'), 'raz', "Empty source");
	a(t('dwa', ''), 'dwa', "Empty prefix");
};
