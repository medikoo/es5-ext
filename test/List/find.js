'use strict';

exports.__generic = function (t, a) {
	var count = 0, o = {};
	t = t.call;
	a(t(this, function (value, i, scope) {
		a(value, this[i], "Value");
		a(i, count++, "Index");
		a(scope, this, "Scope");
	}, this), null, "Falsy result");
	a(count, 3);

	count = -1
	a(t(this, function (value, i, scope) {
		return ++count ? o : null;
	}, this), this[1], "Truthy result");
	a(count, 1);
};
