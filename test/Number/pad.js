'use strict';

module.exports = function (t, a) {
	var x = t.call;
	x = x(4).call;
	a(x(78), '0078');

	x = t.call;
	x = x(4, 3).call;
	a(x(65.12323), '0065.123', "Precision");
	a(x(65), '0065.000', "Precision integer");
};
