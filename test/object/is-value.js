'use strict';

module.exports = function (t, a) {
	a(t(), true);
	a(t(undefined), true);
	a(t(null), true);
	a(t(NaN), false);
	a(t(0), false);
	a(t(false), false);
	a(t('null'), false);
	a(t(''), false);
	a(t({}), false);
	a(t(Object.prototype), false);
};
