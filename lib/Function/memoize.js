// Memoizes a given function

'use strict';

var isArray        = Array.isArray
  , map            = Array.prototype.map
  , slice          = Array.prototype.slice
  , apply          = Function.prototype.apply
  , assertCallable = require('../Object/assert-callable')

  , resolve, substituteNaN, altNaN;

resolve = function (args) {
	return this.map(function (r, i) {
		return r ? r(args[i]) : args[i];
	}).concat(slice.call(args, this.length));
};

altNaN = {};
substituteNaN = function (item) {
	return ((item !== item) && isNaN(item)) ? altNaN : item;
};

module.exports = function (fn, length, resolvers) {
	var cache, resolver;
	assertCallable(fn);

	cache = [];
	if (isArray(length)) {
		resolvers = length;
		length = fn.length;
	} else if ((length == null) || isNaN(Number(length)) || (length < 0))  {
		length = fn.length;
	}

	resolver = resolvers ? resolve.bind(resolvers) : null;

	return function () {
		var limit, i, index, arg, args, current, found;

		args = resolver ? resolver(arguments) : arguments;

		i = 0;
		index = limit = (length === false) ? args.length: length;
		current = cache;

		if (limit === 0) {
			found = current.hasOwnProperty(0);
		} else {
			while (i !== limit) {
				arg = substituteNaN(args[i]);
				if (!current[index]) {
					current = (current[index] = [[arg], []]);
					index = 0;
				} else if (
					(index = (current = current[index])[0].indexOf(arg)) === -1) {
					index = current[0].push(arg) - 1;
					found = false;
				} else {
					found = current[1].hasOwnProperty(index);
				}
				current = current[1];
				++i;
			}
		}
		if (found) {
			return current[index];
		}
		return current[index] = apply.call(fn, this, args);
	};
};
