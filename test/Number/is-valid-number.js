'use strict';

module.exports = function (t, a) {
	a(t(0), true, "Number");
	a(t(NaN), false, "NaN");
	a(t('raz'), false, "Anything else");
};
