'use strict';

module.exports = function (t, a) {
	var o = {};
	a(t.call(o, {}), false, "Different objects");
	a(t.call(o, o), true, "Same objects");
};
