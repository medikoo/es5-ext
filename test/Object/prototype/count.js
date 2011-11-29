'use strict';

module.exports = function (t, a) {
	a(t.call({}), 0, "Empty");
	a(t.call({ raz: 1, dwa: null, trzy: undefined, cztery: 0 }), 4, "Some properties");
	a(t.call(Object.defineProperties({}, {
		raz: { value: 'raz' },
		dwa: { value: 'dwa', enumerable: true }
	})), 1, "Some properties hidden");
};
