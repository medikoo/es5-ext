'use strict';

module.exports = {
	"Arguments object are not same type as plain object": function (t, a) {
		t = t.call;
		a.ok(!t(arguments, {}));
	},
	"Arguments are same type as other Arguments object": function (t, a) {
		t = t.call;
		a.ok(t(arguments, (function () { return arguments; }())));
	},
	"Inheritance of user objects is obeyed": function (t, a) {
		t = t.call;
		a.ok(t({}, Object.create({})));
	},
	"Inheritance of user objects is obeyed, but only in one direction": function (t, a) {
		t = t.call;
		a.ok(!t(Object.create({}), {}));
	},
	"Different primitives": function (t, a) {
		t = t.call;
		a.ok(!t(1, ""));
	},
	"Same primitives": function (t, a) {
		t = t.call;
		a.ok(t("a", ""));
	},
	"Two nulls": function (t, a) {
		t = t.call;
		a.ok(t(null, null));
	},
	"Null and object": function (t, a) {
		t = t.call;
		a.ok(!t({}, null));
	}
};
