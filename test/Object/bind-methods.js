'use strict';

var noop = require('../../lib/Function/noop')

  , fn   = function () { return this; };

module.exports = {
	"": function (t, a) {
		var x = {}
		  , o = t.call({ a: fn, b: null, c: fn, d: 'raz', e: x, f: fn });

		return {
			"Bind method": function (t, a) {
				var f = o.a;
				a.equal(f(), o);
			},
			"Do not change null": function (t, a) {
				a.equal(o.b, null);
			},
			"Bind other method": function (t, a) {
				var f = o.c;
				a.equal(f(), o);
			},
			"Do not change primitive": function (t, a) {
				a.equal(o.d, 'raz');
			},
			"Do not change objects": function (t, a) {
				a.equal(o.e, x);
			},
			"Bind all methods": function (t, a) {
				var f = o.f;
				a.equal(f(), o);
			}
		};
	},
	"Custom scope": function (t, a) {
		var scope = {}
		  , f = t.call({a: fn}, scope).a;
		a.equal(f(), scope);
	},
	"Custom source": function (t, a) {
		var o = t.call({ a: noop, c: fn }, null, { a: fn, b: fn});
		return {
			"Overwrite": function (t, a) {
				var f = o.a;
				a.equal(f(), o);
			},
			"Add from source": function (t, a) {
				var f = o.b;
				a.equal(f(), o);
			},
			"Do not bind own methods not found in source": function (t, a) {
				var f = o.c;
				a.notEqual(f(), o);
			}
		};
	}
};
