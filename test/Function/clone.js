'use strict';

var same = require('../../lib/Object/plain/same').call;

module.exports = function (t, a) {
	var org, clone, x = {'raz': 'dwa3'}, y = { 'dwa': 'sdfs'};
	org = function () { return x; };
	org.prototype = x;
	org.test = x;

	clone = t(org);

	return {
		"Different object": function (t, a) {
			a.notEqual(clone, org);
		},
		"Same content": function (t, a) {
			a.equal(clone(), org());
		},
		"Same prototype": function (t, a) {
			a.equal(clone.prototype, org.prototype);
		},
		"Same properties": function (t, a) {
			a.ok(same(org, clone));
		}
	};
};