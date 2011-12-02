'use strict';

module.exports = function (t, a) {
	a(t.call('raz'), false, "Not number");
	a(t.call('123x'), false, "Nearly number");
	a(t.call('123'), true, "Number");
	a(t.call('13.23'), true, "Float");
	a(t.call('0'), true, "Zero");
	a(t.call('1e23'), true, "Exponential");
};
