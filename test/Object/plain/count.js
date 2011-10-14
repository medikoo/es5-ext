'use strict';

module.exports = function (t, a) {
	t = t.call
	a(t({}), 0, "Empty");
	a(t({ raz: 1, dwa: null, trzy: undefined, cztery: 0 }), 4, "Some properties");
};
