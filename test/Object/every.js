'use strict';

var o = { 1: 1, 2: 2, 3: 3 };

module.exports = {
	"Iterates": function (t, a) {
		var o2 = {};
		t.call(o, function (value, name) {
			o2[name] = value;
			return true;
		});
		a.equal(JSON.stringify(o), JSON.stringify(o2));
	},
	"Succeeds": function (t, a) {
		a.equal(t.call(o, function () {
			return true;
		}), true);
	},
	"Fails": function (t, a) {
		a.equal(t.call(o, function () {
			return false;
		}), false);
	}
};
