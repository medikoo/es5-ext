'use strict';

exports.__generic = function (t, a) {
	t = t.call;
	a(t(this), this[this.length - 1]);
};
