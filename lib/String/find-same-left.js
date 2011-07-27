// Returns index at which strings starts to differ (looking from left)

'use strict';

var f      = require('../Function/functionalize')
  , concat = require('../List/concat').call
  , every  = require('../List/every').call
  , sort   = require('../List/sort/length');

module.exports = f(function () {
	var args = concat(arguments, this).sort(sort)
	  , r = args[0].length;

	every(args, function (str) {
		var index = 0;
		every(this, function (char, i) {
			if (char === str[i]) {
				++index;
				return true;
			} else {
				return false;
			}
		});
		return r = (index < r) ? index : r;
	}, this);

	return r;
});
