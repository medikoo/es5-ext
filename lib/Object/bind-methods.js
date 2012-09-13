'use strict';

var bind       = Function.prototype.bind
  , isCallable = require('./is-callable')
  , forEach    = require('./for-each')
  , value      = require('./valid-value');

module.exports = function (obj/*, scope, source*/) {
	var scope, source;
	value(obj);
	scope = arguments[1] || obj;
	source = arguments[2] || obj;
	forEach(source, function (value, key) {
		if (isCallable(value)) {
			obj[key] = bind.call(value, scope);
		}
	}, obj);
	return obj;
};
