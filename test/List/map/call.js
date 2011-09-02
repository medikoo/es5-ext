'use strict';

exports.__generic = function (t, a) {
	var count = 0;
	t(this, function () {
		++count;
	});
	a(count, 3);
};
