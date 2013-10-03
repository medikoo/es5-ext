'use strict';

var assign = require('../object/assign')

  , captureStackTrace = Error.captureStackTrace
  , CustomError;

CustomError = module.exports = function CustomError(message, code/*, ext*/) {
	var ext = arguments[2];
	if (ext != null) assign(this, ext);
	this.message = String(message);
	if (code != null) this.code = String(code);
	if (captureStackTrace) captureStackTrace(this, CustomError);
};

CustomError.prototype = Object.create(Error.prototype, {
	constructor: { configurable: true, enumerable: false, value: CustomError,
		writable: true },
	name: { configurable: true, enumerable: false, value: 'CustomError',
		writable: true }
});
