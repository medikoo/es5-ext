'use strict';

module.exports = function (t, a) {
	var x = [1,2,{},4];
	t = t.call;
	a(t(x), x, "Returns same array");
	a.deep(x, [], "Empties array");
};
