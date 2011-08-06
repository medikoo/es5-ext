// Returns index at which strings starts to differ (looking from left)

'use strict';

var f          = require('../Function/functionalize')
  , toArray    = require('./to-array').call
  , every      = require('./every').call
  , sortMethod = require('./sort/length');

module.exports = f(function () {
	var args, r;
	args = toArray(arguments);
	args.push(this);
	args.sort(sortMethod);
	r = args[0].length;

	every(args, function (list) {
		var index = 0;
		every(this, function (item, i) {
			if (item === list[i]) {
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
