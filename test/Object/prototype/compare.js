'use strict';

module.exports = function (t, a) {
	var d = new Date;

	a.ok(t.call(12, 3) > 0, "Numbers");
	a.ok(t.call(2, 13) < 0, "Numbers #2");
	a.ok(t.call("aaa", "aa") > 0, "Strings");
	a.ok(t.call("aa", "ab") < 0, "Strings #2");
	a(t.call("aa", "aa"), 0, "Strings same");
	a(t.call(d, new Date(d.getTime())), 0, "Same date");
	a.ok(t.call(d, new Date(d.getTime() + 1)) < 0, "Different date");
};
