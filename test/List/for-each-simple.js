'use strict';

exports.__generic = function (t, a) {
	var count = 0;
	t = t.call;
	t(this, function (x, y, z) {
		a(x, this[count++])
		a(y, undefined, 'index');
		a(z, undefined, 'scope');
	}, this);
	a(count, 3);
};
