'use strict';

var o = { 1: 1, 2: 2, 3: 3 };

module.exports = function (t, a) {
	var o2 = {};
	t.call(o, function (value, name) {
		o2[name] = value;
		return true;
	});
	a(JSON.stringify(o2), JSON.stringify(o), "Iterates");

	a(t.call(o, function () {
		return true;
	}), true, "Succeeds");

	a(t.call(o, function () {
		return false;
	}), false, "Fails");

};
