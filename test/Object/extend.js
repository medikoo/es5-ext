'use strict';

var fn = require('Object/extend').call

  , a, b, o, t;

a = { a: function (x) { return x + 1; }, b: function () { }, d: {} };
b = { a: function (parent, x) { return parent(this, x); }, c: function () { }
	  , d: {} };
o = fn(a, b);

Object.keys(t = {
	"Object.extend: inheritance": function () {
		assert.equal(o.a(2), 3, this);
	},
	"Object.extend: ancestor methods": function () {
		assert.equal(o.b, a.b, this);
	},
	"Object.extend: descendant methods": function () {
		assert.equal(o.c, b.c, this);
	},
	"Object.extend: non function property override": function () {
		assert.equal(o.d, b.d, this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
