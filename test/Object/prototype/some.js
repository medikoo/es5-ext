'use strict';

var o = { 1: 1, 2: 2, 3: 3 };

module.exports = function (t, a) {
	var o2 = {}, i = 0;
	t.call(o, function (value, name) {
		o2[name] = value;
		return false;
	});
	a(JSON.stringify(o2), JSON.stringify(o), "Iterates");


	a(t.call(o, function () {
		++i;
		return true;
	}), true, "Succeeds");
	a(i, 1, "Stops iteration after condition is met");

	a(t.call(o, function () {
		return false;
	}), false, "Fails");

};
