// Bind f's bind and call methods to f

'use strict';

var bind = require('./bind')
  , call = require('./call');

module.exports = function (f) {
	f.bind = bind(f); f.call = call(f);
	return f;
};
