'use strict';

module.exports = function (t, a) {
	var p1, p2;
	p1 = t('raz').call;
	p2 = t('').call;
	a(p1('dwa'), 'razdwa');
	a(p2('dwa'), 'dwa', "Empty prefix");
	a(p1(''), 'raz', "Empty source");
};
