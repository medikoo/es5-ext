'use strict';

module.exports = function (t, a) {
	t = t('forEach');
	var o = { raz: 1, dwa: 2, trzy: 3 }
	  , o2 = {}, o3 = {}, arr, i = -1;

	t.call(o, function (value, name, self, index) {
		o2[name] = value;
		a(index, ++i, "Index");
		a(self, o, "Self");
		a(this, o3, "Scope");
	}, o3);
	a.deep(o2, o);

	arr = [], o2 = {}, i = -1;
	t.call(o, function (value, name, self, index) {
		arr.push(value);
		o2[name] = value;
		a(index, ++i, "Index");
		a(self, o, "Self");
		a(this, o3, "Scope");
	}, o3, function (a, b) {
		return b - a;
	});
	a.deep(o2, o, "Sort by Values: Content");
	a.deep(arr, [3, 2, 1], "Sort by Values: Order");

	arr = [], o2 = {}, i = -1;
	t.call(o, function (value, name, self, index) {
		arr.push(value);
		o2[name] = value;
		a(index, ++i, "Index");
		a(self, o, "Self");
		a(this, o3, "Scope");
	}, o3, function (a, b) {
		return a.localeCompare(b);
	}, true);
	a.deep(o2, o, "Sort by Keys: Content");
	a.deep(arr, [2, 1, 3], "Sort by Keys: Order");
};
