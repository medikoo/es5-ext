'use strict';

exports.__generic = function (t, a) {
	var count = 0;
	t.call(this, function () {
		if (++count === 2) {
			return true;
		} else {
			return false;
		}
	});
	a.equal(count, 2);
};
