'use strict';

exports.__generic = function (t, a) {
	var count = 0;
	t.call(this, function () {
		++count;
		return true;
	});
	a.equal(count, 3);
};
