'use strict';

var o = { 1: 1, 2: 2, 3: 3 };

module.exports = {
	"Iterates": function (t, a) {
		var o2 = {};
		t = t.call;
		t(o, function (value, name) {
			o2[name] = value;
			return true;
		});
		a.equal(JSON.stringify(o), JSON.stringify(o2));
	},
	"Succeeds": function (t, a) {
		t = t.call;
		a.equal(t(o, function () {
			return true;
		}), true);
	},
	"Fails": function (t, a) {
		t = t.call;
		a.equal(t(o, function () {
			return false;
		}), false);
	}
};
