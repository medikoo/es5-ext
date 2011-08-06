'use strict';

exports.__generic = function (t, a) {
	var count = 0;
	t = t.call;
	t(this, function () {
		++count;
	});
	a(count, 3);
};
