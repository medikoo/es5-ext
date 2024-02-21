/* eslint no-eval: "off" */

"use strict";

module.exports = function (t, a) {
	a.deep(t.call(function (a, b) { return this[a] + this[b]; }), {
		args: "a, b",
		body: " return this[a] + this[b]; "
	});
	a.deep(t.call(function () {}), { args: "", body: "" });
	// eslint-disable-next-line no-unused-vars
	a.deep(t.call(function (raz) {}), { args: "raz", body: "" });
	a.deep(t.call(function () { return {}; }), { args: "", body: " return {}; " });

	try {
		eval("((foo = bar) => {})");
	} catch (e) {
		// Non ES2015 env
		return;
	}

	a.deep(t.call(eval("(() => {})")), { args: "", body: "" });
	a.deep(t.call(eval("((elo) => foo)")), { args: "elo", body: "foo" });
	a.deep(t.call(eval("(elo => foo)")), { args: "elo", body: "foo" });
	a.deep(t.call(eval("((elo, bar) => foo())")), { args: "elo, bar", body: "foo()" });
	a.deep(t.call(eval("foo=>bar")), { args: "foo", body: "bar" });
	a.deep(t.call(eval("(foo = { marko: (elo) => { someFunct(); } }) => { body(); }")), {
		args: "foo = { marko: (elo) => { someFunct(); } }",
		body: " body(); "
	});
};
