'use strict';

module.exports = function (t, a) {
	a(t.keywords['break'], true, "Keywords hash has reserved keyword");
	a(t.keywords['class'], undefined,
		"Keywords hash has not future reserved word");
	a(t.keywords['let'], undefined,
		"Keywords hash has not future strict reserved word");
	a(t.future['break'], undefined,
		"Future reserved hash has not reserved keyword");
	a(t.future['class'], true, "Future reserved hash has future reserved word");
	a(t.future['let'], undefined,
		"Future reserved hash has not future strict reserved word");
	a(t.futureStrict['break'], undefined,
		"Future strict reserved hash has not reserved keyword");
	a(t.futureStrict['class'], undefined,
		"Future strict reserved hash has not future reserved word");
	a(t.futureStrict['let'], true,
		"Future reserved hash has future strict reserved word");
	a(t.all['break'], true, "All reserved keywords hash has reserved keyword");
	a(t.all['class'], true,
		"All reserved keywords hash has future reserved word");
	a(t.all['let'], true,
		"All reserved keywords hash has future strict reserved word");
};
