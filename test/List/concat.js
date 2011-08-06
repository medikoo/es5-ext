'use strict';

exports.__generic = function (t, a) {
	t = t.call;
	a(t(this, 4, 5).length, 5, "As context");
	a(t(this, 4, this, 5).length, Array.isArray(this) ? 8 : 6, "As argument");
};
