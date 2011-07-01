'use strict';

exports.__generic = function (t, a) {
	t = t.call;
	a.equal(t(this, 1, 3).length, 2);
};
