'use strict';

var o = { 1: 1, 2: 2, 3: 3 };
Object.defineProperty(o, 4, { value: 4 });

module.exports = function (t, a) {
	var o2 = {};
	t = t.call;
	t(o, function (value, name) {
		Object.defineProperty(o2, name, value);
		return true;
	});
	a(JSON.stringify(o2), JSON.stringify(o), "Iterates");
	a(o2[4], o[4], "Iterates hidden");
	a(t(o, function () {
		return true;
	}), true, "Succeeds");
	a.equal(t(o, function () {
		return false;
	}), false, "Fails");
};
