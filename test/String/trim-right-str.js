'use strict';

module.exports = function (t, a) {
	t = t.call;
	a(t('dwaraz', 'raz'), 'dwa');
	a(t('raz', 'raz'), '', "Trim string same as target");
	a(t('raz', 'foo'), 'raz', "Not matched");
};
