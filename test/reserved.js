'use strict';

var o = require('reserved')

  , t;

Object.keys(t = {
	"Reserved: keywords hash has reserved keyword": function () {
		assert.equal(o.keywords['break'], true, this);
	},
	"Reserved: keywords hash has not future reserved word": function () {
		assert.equal(o.keywords['class'], undefined, this);
	},
	"Reserved: keywords hash has not future strict reserved word": function () {
		assert.equal(o.keywords['let'], undefined, this);
	},
	"Reserved: future reserved hash has not reserved keyword": function () {
		assert.equal(o.future['break'], undefined, this);
	},
	"Reserved: future reserved hash has future reserved word": function () {
		assert.equal(o.future['class'], true, this);
	},
	"Reserved: future reserved hash has not future strict reserved word":
	function () {
		assert.equal(o.future['let'], undefined, this);
	},
	"Reserved: future strict reserved hash has not reserved keyword":
	function () {
		assert.equal(o.futureStrict['break'], undefined, this);
	},
	"Reserved: future strict reserved hash has not future reserved word":
	function () {
		assert.equal(o.futureStrict['class'], undefined, this);
	},
	"Reserved: future reserved hash has future strict reserved word":
	function () {
		assert.equal(o.futureStrict['let'], true, this);
	},
	"Reserved: all reserved keywords hash has reserved keyword": function () {
		assert.equal(o.all['break'], true, this);
	},
	"Reserved: all reserved keywords hash has future reserved word": function () {
		assert.equal(o.all['class'], true, this);
	},
	"Reserved: all reserved keywords hash has future strict reserved word":
	function () {
		assert.equal(o.all['let'], true, this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
