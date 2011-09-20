'use strict';

module.exports = function (t, a) {
	t = t.call;
	a(t({}), 0, "Empty");
	a(t({'': undefined, 'null': false, raz: { foo: 'bar', bar: 'foo' },
		toString: Object.prototype.toString }), 4, "With properties");
};
