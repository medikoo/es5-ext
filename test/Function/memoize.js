'use strict';

var toArray = require('../../lib/Object/prototype/to-array');

module.exports = function (t, a) {
	return {
		"0": function () {
			var i = 0, fn = function () { ++i; return 3; };

			fn = t(fn);
			a(fn(), 3, "First");
			a(fn(1), 3, "Second");
			a(fn(5), 3, "Third");
			a(i, 1, "Called once");
		},
		"1": function () {
			var i = 0, fn = function (x) { ++i; return x; };

			fn = t(fn);
			return {
				"No arg": function () {
					i = 0;
					a(fn(), undefined, "First");
					a(fn(), undefined, "Second");
					a(fn(), undefined, "Third");
					a(i, 1, "Called once");
				},
				"Arg": function () {
					var x = {};
					i = 0;
					a(fn(x, 8), x, "First");
					a(fn(x, 4), x, "Second");
					a(fn(x, 2), x, "Third");
					a(i, 1, "Called once");
				},
				"Other Arg": function () {
					var x = {};
					i = 0;
					a(fn(x, 2), x, "First");
					a(fn(x, 9), x, "Second");
					a(fn(x, 3), x, "Third");
					a(i, 1, "Called once");
				}
			}
		},
		"3": function () {
			var i = 0, fn = function (x, y, z) { ++i; return [x, y, z]; }, r;

			fn = t(fn);
			return {
				"No args": function () {
					i = 0;
					a.deep(r = fn(), [undefined, undefined, undefined], "First");
					a(fn(), r, "Second");
					a(fn(), r, "Third");
					a(i, 1, "Called once");
				},
				"Some Args": function () {
					var x = {};
					i = 0;
					a.deep(r = fn(x, 8), [x, 8, undefined], "First");
					a(fn(x, 8), r, "Second");
					a(fn(x, 8), r, "Third");
					a(i, 1, "Called once");
					return {
						"Other": function () {
							a.deep(r = fn(x, 5), [x, 5, undefined], "Second");
							a(fn(x, 5), r, "Third");
							a(i, 2, "Called once");
						}
					};
				},
				"Full stuff": function () {
					var x = {};
					i = 0;
					a.deep(r = fn(x, 8, 23, 98), [x, 8, 23], "First");
					a(fn(x, 8, 23, 43), r, "Second");
					a(fn(x, 8, 23, 9), r, "Third");
					a(i, 1, "Called once");
					return {
						"Other": function () {
							a.deep(r = fn(x, 23, 8, 13), [x, 23, 8], "Second");
							a(fn(x, 23, 8, 22), r, "Third");
							a(i, 2, "Called once");
						}
					};
				}
			}
		},
		"Dynamic": function () {
			var i = 0, fn = function () { ++i; return arguments; }, r;

			fn = t(fn, false);
			return {
				"No args": function () {
					i = 0;
					a.deep(toArray.call(r = fn()), [], "First");
					a(fn(), r, "Second");
					a(fn(), r, "Third");
					a(i, 1, "Called once");
				},
				"Some Args": function () {
					var x = {};
					i = 0;
					a.deep(toArray.call(r = fn(x, 8)), [x, 8], "First");
					a(fn(x, 8), r, "Second");
					a(fn(x, 8), r, "Third");
					a(i, 1, "Called once");
				},
				"Many args": function () {
					var x = {};
					i = 0;
					a.deep(toArray.call(r = fn(x, 8, 23, 98)), [x, 8, 23, 98], "First");
					a(fn(x, 8, 23, 98), r, "Second");
					a(fn(x, 8, 23, 98), r, "Third");
					a(i, 1, "Called once");
				}
			}
		},
		"Resolvers": function () {
			var i = 0, fn = function () { ++i; return arguments; }, r;

			fn = t(fn, 3, [Boolean, String]);
			return {
				"No args": function () {
					i = 0;
					a.deep(toArray.call(r = fn()), [false, 'undefined'], "First");
					a(fn(), r, "Second");
					a(fn(), r, "Third");
					a(i, 1, "Called once");
				},
				"Some Args": function () {
					var x = {};
					i = 0;
					a.deep(toArray.call(r = fn(0, 34, x, 45)), [false, '34', x, 45], "First");
					a(fn(0, 34, x, 22), r, "Second");
					a(fn(0, 34, x, false), r, "Third");
					a(i, 1, "Called once");
					return {
						"Other": function () {
							a.deep(toArray.call(r = fn(1, 34, x, 34)),
								[true, '34', x, 34], "Second");
							a(fn(1, 34, x, 89), r, "Third");
							a(i, 2, "Called once");
						}
					};
				}
			};
		}
	};
};

