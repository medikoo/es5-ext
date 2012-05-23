'use strict';

var bind       = Function.prototype.bind
  , valid      = require('../valid-value')
  , isCallable = require('./is-callable')
  , forEach    = require('./for-each');

module.exports = function (obj, scope, source) {
	valid(obj);
	scope = scope || obj;
	source = source || obj;
	forEach(source, function (value, key) {
		if (isCallable(value)) {
			obj[key] = bind.call(value, scope);
		}
	}, obj);
	return obj;
};
