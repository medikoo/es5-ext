'use strict';

module.exports = function (t, a) {
	t = t.call;
	var o = t({ a: { aa: 1, ab: 2 }, b: { ba: 3, bb: 4 } });
	a([o.aa, o.ab, o.ba, o.bb].toString(), [1,2,3,4].toString());
};
