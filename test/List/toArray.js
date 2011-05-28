'use strict';

var fn = require('List/toArray').call

  , a, al, t;

a = [1,2,3,4,5,6];
al = fn(function () {
	return arguments;
}.apply(null, a));

Object.keys(t = {
	"List.toArray: turn array-like to an array": function () {
		assert.ok(al instanceof Array, this);
	},
	"List.toArray: array matches array-like input": function () {
		assert.equal(al.toString(), a.toString(), this);
	},
	"List.toArray: extra arguments cannot affect result": function () {
		assert.equal(fn(function () {
			return arguments;
		}.apply(this, a), 1, 4).toString(), a.toString(), this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
