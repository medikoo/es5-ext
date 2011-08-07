'use strict';

var same = require('../../lib/Object/plain/same').call;

module.exports = function (t, a) {
	var org, clone, x = {'raz': 'dwa3'}, y = { 'dwa': 'sdfs'};
	t = t.call;
	org = function () { return x; };
	org.prototype = x;
	org.test = x;

	clone = t(org);

	a.not(clone, org, "Different object");
	a(clone(), org(), "Same result");
	a(clone.prototype, org.prototype, "Same prototype");
	a.ok(same(org, clone), "Same properties");
};
