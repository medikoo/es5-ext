'use strict';

module.exports = function (t, a) {
	t = t.call;
	a.ok(!t(arguments, {}), "Arguments object are not same type as plain object");
	a.ok(t(arguments, (function () { return arguments; }())),
		"Arguments are same type as other Arguments object");
	a.ok(t({}, Object.create({})), "Inheritance of user objects is obeyed");
	a.ok(!t(Object.create({}), {}),
		"Inheritance of user objects is obeyed, but only in one direction");
	a.ok(!t(1, ""), "Different primitives");
	a.ok(t("a", ""), "Same primitives");
	a.ok(t(null, null), "Two nulls");
	a.ok(!t({}, null), "Null and object");
};
