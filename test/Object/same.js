'use strict';

module.exports = {
	"Same": function (t, a) {
		var o1, o2;
		t = t.call;
		o1 = { 1: 1, 2: 2 };
		Object.defineProperty(o1, 3, { value: 3, enumerable: true });
		o2 = { 1: 1, 2: 2 };
		Object.defineProperty(o2, 3, { value: 3, enumerable: true });

		a.equal(t(o2, o1), true);
	},
	"Different not enumerable property value": function (t, a) {
		var o1, o2;
		t = t.call;
		o1 = { 1: 1, 2: 2 };
		Object.defineProperty(o1, 3, { value: 3 });
		o2 = { 1: 1, 2: 2 };
		Object.defineProperty(o2, 3, { value: 4 });

		a.equal(t(o2, o1), false);
	},
	"Different property configuration": function (t, a) {
		var o1, o2;
		t = t.call;
		o1 = { 1: 1, 2: 2 };
		Object.defineProperty(o1, 3, { value: 3 });
		o2 = { 1: 1, 2: 2 };
		Object.defineProperty(o2, 3, { value: 3, configurable: true });

		a.equal(t(o2, o1), false);
	},
	"Not enumerable property only in source": function (t, a) {
		var o1, o2;
		t = t.call;
		o1 = { 1: 1, 2: 2 };
		Object.defineProperty(o1, 3, { value: 3 });
		o2 = { 1: 1, 2: 2 };

		a.equal(t(o1, o2), false);
	},
	"Not enumerable property only in target": function (t, a) {
		var o1, o2;
		t = t.call;
		o1 = { 1: 1, 2: 2 };

		o2 = { 1: 1, 2: 2 };
		Object.defineProperty(o2, 3, { value: 3 });

		a.equal(t(o1, o2), false);
	},
	"Same length, different properties": function (t, a) {
		var o1, o2;
		t = t.call;
		o1 = { 1: 1, 2: 2 };

		o2 = { 1: 1, 2: 2 };
		Object.defineProperty(o1, 3, { value: 3 });
		Object.defineProperty(o2, 4, { value: 4 });

		a.equal(t(o1, o2), false);
	},
	"Property only in source": function (t, a) {
		t = t.call;
		a.equal(t({ 1: 1, 2: 2, 3: 3 }, { 1: 1, 2: 2 }), false);
	},
	"Property only in target": function (t, a) {
		t = t.call;
		a.equal(t({ 1: 1, 2: 2 }, { 1: 1, 2: 2, 3: 4 }), false);
	}
};
