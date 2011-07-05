'use strict';

var same = require('../../lib/Object/plain/same').call;

module.exports = function (t, a) {
	var o = { a: 'b' };
	t = t.call;
	a.ok(same(t(o, 'a'), Object.getOwnPropertyDescriptor(o, 'a')));
};
