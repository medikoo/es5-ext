// Cache function result

'use strict';

var isArray  = Array.isArray
  , slice    = require('../List/slice/call')
  , isNumber = require('../Number/is-number')

  , resolve;

resolve = function (args) {
	return this.map(function (r, i) {
		return r ? r(args[i]) : args[i];
	}).concat(slice(args, this.length));
};

module.exports = function (fn, length, resolvers) {
	var cache, resolver;
	cache = [];
	if (isArray(length)) {
		resolvers = length;
		length = fn.length;
	} else if ((length != false) && !isNumber(Number(length)))  {
		length = fn.length;
	}

	resolver = resolvers ? resolve.bind(resolvers) : null;

	return function () {
		var limit, i, index, args, current, found;

		args = resolver ? resolver(arguments) : arguments;
		i = 0;
		index = limit = (length === false) ? args.length: length;
		current = cache;

		if (limit === 0) {
			found = current.hasOwnProperty(0);
		} else {
			while (i !== limit) {
				if (!current[index]) {
					current = (current[index] = [[args[i]], []]);
					index = 0;
				} else if (
					(index = (current = current[index])[0].indexOf(args[i])) === -1) {
					index = current[0].push(args[i]) - 1;
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
		return current[index] = fn.apply(this, args);
	};
};
