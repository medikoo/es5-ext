'use strict';

module.exports = function (t, a) {
	var o, o1, o2;
	t = t.call;
	o = { inherited: true };
	o1 = Object.create(o);
	o1.visible = true;
	o2 = {};

	Object.defineProperty(o1, 'hidden', { value: 'hidden' });

	o2 = t(o2, o1);

	return {
		"Enumerable": function (t, a) {
			a.equal(o1.visible, o2.visible);
		},
		"Not Enumerable": function (t, a) {
			a.equal(o1.hidden, o2.hidden);
		},
		"Enumerable is enumerable": function (t, a) {
			a.ok(o2.propertyIsEnumerable('visible'));
		},
		"Not enumerable is not enumerable": function (t, a) {
			a.ok(o2.propertyIsEnumerable('hidden') === false);
		},
		"Writable is writable": function (t, a) {
			var x = {};
			t = t.call;
			t(x, o1);
			x.visible = 3;

			a.equal(x.visible, 3);
		},
		"Not writable is not writable": function (t, a) {
			var x = {};
			t = t.call;
			t(x, o1);
			a.throws(function () {
				x.hidden = 3;
			});
		},
		"Configurable is configurable": function (t, a) {
			var x = {};
			t = t.call;
			t(x, o1);
			delete x.visible;

			a.ok(!x.hasOwnProperty('visible'));
		},
		"Not configurable is not configurable": function (t, a) {
			var x = {};
			t = t.call;
			t(x, o1);

			a.throws(function () {
				delete x.hidden;
			});
		},
		"Merge only own properties": function (t, a) {
			a.ok(!o2.hasOwnProperty('inherited'));
		}
	};
};
