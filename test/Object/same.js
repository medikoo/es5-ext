'use strict';

module.exports = function (t, a) {
	var o1, o2;
	t = t.call;
	o1 = { 1: 1, 2: 2 };
	Object.defineProperty(o1, 3, { value: 3, enumerable: true });
	o2 = { 1: 1, 2: 2 };
	Object.defineProperty(o2, 3, { value: 3, enumerable: true });

	a(t(o2, o1), true, "Same");

	o1 = { 1: 1, 2: 2 };
	Object.defineProperty(o1, 3, { value: 3 });
	o2 = { 1: 1, 2: 2 };
	Object.defineProperty(o2, 3, { value: 4 });

	a(t(o2, o1), false, "Different not enumerable property value");

	o1 = { 1: 1, 2: 2 };
	Object.defineProperty(o1, 3, { value: 3 });
	o2 = { 1: 1, 2: 2 };
	Object.defineProperty(o2, 3, { value: 3, configurable: true });

	a(t(o2, o1), false, "Different property configuration");

	o1 = { 1: 1, 2: 2 };
	Object.defineProperty(o1, 3, { value: 3 });
	o2 = { 1: 1, 2: 2 };

	a(t(o1, o2), false, "Not enumerable property only in source");

	o1 = { 1: 1, 2: 2 };
	o2 = { 1: 1, 2: 2 };
	Object.defineProperty(o2, 3, { value: 3 });

	a(t(o1, o2), false, "Not enumerable property only in target");

	o1 = { 1: 1, 2: 2 };
	o2 = { 1: 1, 2: 2 };
	Object.defineProperty(o1, 3, { value: 3 });
	Object.defineProperty(o2, 4, { value: 4 });

	a(t(o1, o2), false, "Same length, different properties");
	a(t({ 1: 1, 2: 2, 3: 3 }, { 1: 1, 2: 2 }), false, "Property only in source");
	a(t({ 1: 1, 2: 2 }, { 1: 1, 2: 2, 3: 4 }), false, "Property only in target");
};
