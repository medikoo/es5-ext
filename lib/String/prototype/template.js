'use strict';

var isCallable = require('../../Object/is-callable')
  , value      = require('../../Object/valid-value')

  , compile;

compile = function (str, fmap) {
	var current = '', length = str.length, result = []
	  , sOut, sEscape, sIn, state, i, pushStr;
	pushStr = function (str) {
		var i = result.length - 1;
		if (i === -1) result.push(str);
		else if (typeof result[i] === 'string') result[i] += str;
		else result.push(str);
	};
	sOut = function (char) {
		if (char === '\\') return sEscape;
		if (char === '%') {
			if (current) pushStr(current);
			current = '';
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
			if (!current || !fmap[current]) {
				pushStr('%' + current + '%');
			} else {
				result.push({
					name: current,
					value: fmap[current]
				});
			}
			current = '';
			return sOut;
		}
		current += char;
		return sIn;
	};

	state = sOut;
	for (i = 0; i < length; ++i) state = state(str[i]);
	return result;
};

module.exports = function (fmap) {
	var map = compile(String(value(this)), Object(value(fmap)));
	return function (context) {
		return map.map(function (conf) {
			if (typeof conf === 'string') return conf;
			if (isCallable(conf.value)) return conf.value(context);
			return context[conf.name];
		}).join('');
	};
};
