'use strict';

exports.__generic = function (t, a) {
	a(t(this, 1, 3).length, 2);
};
