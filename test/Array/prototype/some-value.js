'use strict';

exports.__generic = function (t, a) {
	var count = 0, o = {};
	a(t.call(this, function (value, i, scope) {
		a(value, this[i], "Value");
		a(i, count++, "Index");
		a(scope, this, "Scope");
	}, this), null, "Falsy result");
	a(count, 3);

	count = -1
	a(t.call(this, function (value, i, scope) {
		return ++count ? o : null;
	}, this), o, "Truthy result");
	a(count, 1);
};
