'use strict';

module.exports = function (t) {
	var x = {};
	return {
		"One array": function (a) {
			a.deep(t.call([]), {}, "Empty");
			a.deep(t.call([['raz', 'dwa'], ['dwa', x]]), { raz: 'dwa', dwa: x },
				"Props");
		},
		"Two arrays": function (a) {
			a.deep(t.call([], ['raz']), {}, "Empty");
			a.deep(t.call(['raz', 'dwa', 'trzy'], ['dwa', x]),
				{ raz: 'dwa', dwa: x, trzy: undefined }, "Props");
		},
		"Custom": function (a) {
			var args = [], obj, y = {}, arr;
			a.deep(t.call([], function () {}), {}, "Empty");
			arr = ['raz', 'dwa', 'trzy'];
			a.deep(obj = t.call(arr, function (obj, value, index) {
				args.push(arguments, this);
				obj[value + index] = index;
			}, y), { raz0: 0, dwa1: 1, trzy2: 2 }, "Props");
			a.deep(args[0], [obj, 'raz', 0, arr], "Args");
			a(args[1], y, "Context");
		}
	};
};
