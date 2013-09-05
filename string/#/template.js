'use strict';

var d          = require('../../object/descriptor')
  , isCallable = require('../../object/is-callable')
  , value      = require('../../object/valid-value')

  , compile;

compile = function (str, fmap) {
	var current = '', name, length = str.length, result = []
	  , sOut, sEscape, sIn, state, i;
	sOut = function (char) {
		if (char === '\\') return sEscape;
		if (char === '%') {
			name = '';
			return sIn;
		}
		current += char;
		return sOut;
	};
	sEscape = function (char) {
		if ((char !== '\\') && (char !== '%')) current += '\\';
		current += char;
		return sOut;
	};
	sIn = function (char) {
		if (char === '%') {
			if (fmap && (fmap[name] != null) && !isCallable(fmap[name])) {
				current += fmap[name];
			} else {
				result.push(current, name);
				current = '';
			}
			return sOut;
		}
		name += char;
		return sIn;
	};

	state = sOut;
	for (i = 0; i < length; ++i) state = state(str[i]);
	if (state === sEscape) result.push(current + '\\');
	else if (state === sIn) result.push(current + '%' + name);
	else result.push(current);
	return result;
};

module.exports = exports = function (/* conf */) {
	var conf = arguments[0], map = compile(String(value(this)), conf);
	return function (context) {
		value(context);
		var result = map.map(function (str, i) {
			if (i % 2) {
				if (conf && isCallable(conf[str])) return conf[str](context);
				return context[str];
			}
			return str;
		});
		return result.join('');
	};
};

Object.defineProperty(exports, 'compile', d(compile));
