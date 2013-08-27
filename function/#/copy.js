'use strict';

var extend         = require('../../object/extend-properties')
  , validFunction  = require('../valid-function')

  , re = new RegExp('^\\s*function[\\0-\'\\)-\\uffff]*' +
		'\\(([\\0-\\(\\*-\\uffff]*)\\)\\s*\\{([\\0-\\uffff]*)\\}\\s*$');

module.exports = function () {
	return extend(Function.apply(null,
		String(validFunction(this)).match(re).slice(1)), this);
};
