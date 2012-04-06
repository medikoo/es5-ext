// Memoizes function results.
// Works with input arguments of any type.
//
// Additionaly cache can be cleared, globally with `fn.clearAllCache()` or for
// particular arguments with `fn.clearCache(args..)`
//
// Implementation details:
// Results are saved internally within array matrix:
// cache[0] -> Result of calling function with no arguments
// cache[1] -> Matrix that keeps results for one argument function calls
// cache[1][0] -> Array of different arguments with which
//                function have been called
// cache[1][1] -> Array of results that matches cache[1][0] arguments array
// cache[2] -> Matrix that keeps results for two argument function calls
// cache[2][0] -> Array of different first (of two) arguments with which
//                function have been called
// cache[2][1] -> Matrixes that keeps results for two arguments function calls
//                Each matrix matches first argument found in cache[2][0]
// cache[2][1][x][0] -> Array of different second arguments with which
//                      function have been called.
// cache[2][1][x][1] -> Array of results that matches cache[2][1][x][0]
//                      arguments array
// ...and so on

'use strict';

var isArray        = Array.isArray
  , map            = Array.prototype.map
  , slice          = Array.prototype.slice
  , apply          = Function.prototype.apply
  , assertCallable = require('../Object/assert-callable')

  , resolve, normalize, altNaN;

resolve = function (args) {
	return this.map(function (r, i) {
		return r ? r(args[i]) : args[i];
	}).concat(slice.call(args, this.length));
};

altNaN = {};
normalize = function (item) {
	return (item !== item) ? altNaN : item; //jslint: skip
};

module.exports = function (fn, length, resolvers) {
	var cache, resolver, find, aset, rset, index, found, mfn;
	assertCallable(fn);

	cache = [];
	if (isArray(length)) {
		resolvers = length;
		length = fn.length;
	} else if ((length == null) ||
		((length !== false) && isNaN(length = (length >>> 0)))) {
		length = fn.length;
	}

	resolver = resolvers ? resolve.bind(resolvers) : null;

	find =  function (args) {
		var limit, i, arg;

		i = 0;
		aset = found = false;
		index = limit = (length === false) ? args.length : length;
		rset = cache;

		if (limit === 0) {
			found = rset.hasOwnProperty(0);
		} else {
			while (i !== limit) {
				arg = normalize(args[i]);
				if (!rset[index]) {
					rset = (rset[index] = [[arg], []]);
					index = 0;
				} else if ((index =
						(rset = rset[index])[0].indexOf(arg)) === -1) {
					index = rset[0].push(arg) - 1;
					found = false;
				} else {
					found = rset[1].hasOwnProperty(index);
				}
				aset = rset[0];
				rset = rset[1];
				++i;
			}
		}
	};

	mfn = function () {
		var args = resolver ? resolver(arguments) : arguments;
		find(arguments);
		return (found ? rset[index] :
			(rset[index] = apply.call(fn, this, args)));
	};

	mfn.clearCache = function () {
		find(resolver ? resolver(arguments) : arguments);
		if (found) {
			if (aset) {
				aset.splice(index, 1);
				rset.splice(index, 1);
			} else {
				delete rset[index];
			}
		}
	};

	mfn.clearAllCache = function () {
		cache = [];
	};

	return mfn;
};
