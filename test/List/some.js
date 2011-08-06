'use strict';

exports.__generic = function (t, a) {
	var count = 0;
	t = t.call;
	t(this, function () {
		if (++count === 2) {
			return true;
		} else {
			return false;
		}
	});
	a(count, 2);
};
