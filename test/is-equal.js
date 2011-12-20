'use strict';

module.exports = function (t, a) {
	var o = {};
	a(t(o, {}), false, "Different objects");
	a(t(o, o), true, "Same objects");
	a(t('1', '1'), true, "Same primitive");
	a(t('1', 1), false, "Different primitive types");
};
