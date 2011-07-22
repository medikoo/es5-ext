'use strict';

module.exports = function (t, a) {
	var o = { a: 0 };
	t = t({ a: 'A', aa: 'B', ab: 'C', b: 'D',
		c: function () { return ++this.a; } }).call;

	a(t(' %a%aab%abb%b\\%aa%ab%c%c ', o), ' ABbCbD%aaC12 ');
};
