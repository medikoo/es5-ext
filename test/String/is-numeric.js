'use strict';

module.exports = function (t, a) {
	t = t.call;
	a(t('raz'), false, "Not number");
	a(t('123x'), false, "Nearly number");
	a(t('123'), true, "Number");
	a(t('13.23'), true, "Float");
	a(t('0'), true, "Zero");
	a(t('1e23'), true, "Exponential");
};
