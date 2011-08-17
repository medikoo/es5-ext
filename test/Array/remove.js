'use strict';

module.exports = function (t, a) {
	var y = {}, z = {}, x = [9, z, 5, y, 'foo'];
	t = t.call;
	t(x, y);
	a.deep(x, [9, z, 5, 'foo']);
	t(x, {});
	a.deep(x, [9, z, 5, 'foo'], "Not existing");
	t(x, 5);
	a.deep(x, [9, z, 'foo'], "Primitive");
};
