'use strict';

exports.__generic = function (t, a) {
	var count = 0;
	t = t(this, function (x, y, z) {
		a(x, this[count], "Item");
		a(y, count++, "Index");
		a(z, this, "Source");
	}, this);
	a(count, 0);
	t();
	a(count, 3);
};
