'use strict';

exports.__generic = function (t, a) {
	a.equal(t.call(this, 1, 3).length, 2);
};
