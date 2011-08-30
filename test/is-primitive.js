'use strict';

module.exports = function (t, a) {
	a(t(undefined), true, "Undefined");
	a(t(null), true, "Null");
	a(t("str"), true, "String");
	a(t(12), true, "Number");
	a(t(false), true, "Boolean");

	a(t(function () {}), false, "Function");
	a(t({}), false, "Object");
};
