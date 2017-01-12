// Stack grow safe implementation

'use strict';

var ensureValue = require('../../object/valid-value')
  , isArray     = Array.isArray;

module.exports = function () {
	var input = ensureValue(this), remaining, l, i, result = [];
	main: //jslint: ignore
	while (input) {
		l = input.length;
		for (i = 0; i < l; ++i) {
			if (isArray(input[i])) {
				if (i < (l - 1)) {
					if (!remaining) remaining = [];
					remaining.unshift(input.slice(i + 1));
				}
				input = input[i];
				continue main;
			}
			result.push(input[i]);
		}
		input = remaining ? remaining.shift() : null;
	}
	return result;
};
