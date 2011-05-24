'use strict';

var f = require('Array/toArray')

  , a, al, t;

a = [1,2,3,4,5,6];
al = f((function () {
	return arguments;
}).apply(this, a));

Object.keys(t = {
	"Array.toArray: turn array-like to an array": function () {
		assert.ok(al instanceof Array, this);
	},
	"Array.toArray: array matches array-like input": function () {
		assert.equal(al.toString(), a.toString(), this);
	},
	"Array.toArray: extra arguments cannot affect result": function () {
		assert.equal(f((function () {
			return arguments;
		}).apply(this, a), 1, 4).toString(), a.toString(), this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
