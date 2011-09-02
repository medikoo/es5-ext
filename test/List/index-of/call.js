'use strict';

exports.__generic = function (t, a) {
	a(t(this, this[1]), 1, "Found");
	a(t(this, {}), -1, "Not found");
};
