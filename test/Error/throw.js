'use strict';

module.exports = function (t, a) {
	var e = new Error();
	t = t.call;
	try {
		t(e);
	} catch (e2) {
		a(e2, e);
	}
};
