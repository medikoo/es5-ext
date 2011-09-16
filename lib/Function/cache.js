// Cache function result

'use strict';

var isArray = Array.isArray
  , slice   = require('../List/slice/call')
  , i       = require('./i')

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
	} else if (length == null) {
		length = fn.length;
	}

	resolver = resolvers ? resolve.bind(resolvers) : i;

	return function () {
		var limit, i, index, args, current;

		args = resolver(arguments);
		i = 0;
		index = limit = (length === true) ? args.length: length;
		current = cache;

		if (limit === 0) {
			if (!current[0]) {
				current[0] = [];
			}
			current = current[0];
		} else {
			while (i !== limit) {
				if (!current[index]) {
					current = (current[index] = [[args[i]], []]);
					index = 0;
				} else if (
					(index = (current = current[index])[0].indexOf(args[i])) === -1) {
					index = current[0].push(args[i]) - 1;
				}
				current = current[1];
				++i;
			}
		}
		if (index !== current.length) {
			return current[index];
		}
		return current[index] = fn.apply(this, args);
	};
};
