'use strict';

var value  = require('./valid-value')
  , assign = require('./assign')

  , reduce = Array.prototype.reduce;

module.exports = function (dest, src/*, …srcn*/) {
	if (arguments.length < 2) value();
	return reduce.call(arguments, assign);
};
