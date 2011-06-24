'use strict';

module.exports = {
	"Keywords hash has reserved keyword": function (t, a) {
		a.equal(t.keywords['break'], true);
	},
	"Keywords hash has not future reserved word": function (t, a) {
		a.equal(t.keywords['class'], undefined);
	},
	"Keywords hash has not future strict reserved word": function (t, a) {
		a.equal(t.keywords['let'], undefined);
	},
	"Future reserved hash has not reserved keyword": function (t, a) {
		a.equal(t.future['break'], undefined);
	},
	"Future reserved hash has future reserved word": function (t, a) {
		a.equal(t.future['class'], true);
	},
	"Future reserved hash has not future strict reserved word": function (t, a) {
		a.equal(t.future['let'], undefined);
	},
	"Future strict reserved hash has not reserved keyword": function (t, a) {
		a.equal(t.futureStrict['break'], undefined);
	},
	"Future strict reserved hash has not future reserved word": function (t, a) {
		a.equal(t.futureStrict['class'], undefined);
	},
	"Future reserved hash has future strict reserved word": function (t, a) {
		a.equal(t.futureStrict['let'], true);
	},
	"All reserved keywords hash has reserved keyword": function (t, a) {
		a.equal(t.all['break'], true);
	},
	"All reserved keywords hash has future reserved word": function (t, a) {
		a.equal(t.all['class'], true);
	},
	"All reserved keywords hash has future strict reserved word": function (t, a) {
		a.equal(t.all['let'], true);
	}
};
