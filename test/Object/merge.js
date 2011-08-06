'use strict';

module.exports = function (t, a) {
	var o, o1, o2, x;
	t = t.call;
	o = { inherited: true };
	o1 = Object.create(o);
	o1.visible = true;
	o2 = {};

	Object.defineProperty(o1, 'hidden', { value: 'hidden' });

	o2 = t(o2, o1);

	a(o1.visible, o2.visible, "Enumerable");
	a(o1.hidden, o2.hidden, "Not Enumerable");
	a.ok(o2.propertyIsEnumerable('visible'), "Enumerable is enumerable");
	a.ok(o2.propertyIsEnumerable('hidden') === false, "Not enumerable is not enumerable");

	x = {};
	t(x, o1);
	x.visible = 3;
	a(x.visible, 3, "Writable is writable");

	x = {};
	t(x, o1);
	a.throws(function () {
		x.hidden = 3;
	}, "Not writable is not writable");

	x = {};
	t(x, o1);
	delete x.visible;
	a.ok(!x.hasOwnProperty('visible'), "Configurable is configurable");

	x = {};
	t(x, o1);
	a.throws(function () {
		delete x.hidden;
	}, "Not configurable is not configurable");

	a.ok(!o2.hasOwnProperty('inherited'), "Merge only own properties");
};
