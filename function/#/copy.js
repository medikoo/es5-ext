'use strict';

var mixin         = require('../../object/mixin')
  , validFunction = require('../valid-function')

  , re = new RegExp('^\\s*function[\\0-\'\\)-\\uffff]*' +
		'\\(([\\0-\\(\\*-\\uffff]*)\\)\\s*\\{([\\0-\\uffff]*)\\}\\s*$');

module.exports = function () {
	var fn = Function.apply(null, String(validFunction(this)).match(re).slice(1));
	try { mixin(fn, this); } catch (ignore) {}
	return fn;
};
