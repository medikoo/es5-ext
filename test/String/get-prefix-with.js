'use strict';

module.exports = function (t, a) {
	var p1, p2;
	p1 = t('raz');
	p2 = t('');
	a(p1.call('dwa'), 'razdwa');
	a(p2.call('dwa'), 'dwa', "Empty prefix");
	a(p1.call(''), 'raz', "Empty source");
};
