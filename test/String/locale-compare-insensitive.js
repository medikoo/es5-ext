'use strict';

module.exports = function (t, a) {
	t = t.call;
	a(t("AA", "aa"), 0, "Same");
	a.ok(t("Amber", "zebra") < 0, "Less");
	a.ok(t("Zebra", "amber") > 0, "Greater");
};
