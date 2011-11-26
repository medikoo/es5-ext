'use strict';

module.exports = function (t, a) {
	var x;
	x = t(4);
	a(x.call(78), '0078');

	x = t(4, 3);
	a(x.call(65.12323), '0065.123', "Precision");
	a(x.call(65), '0065.000', "Precision integer");
};
