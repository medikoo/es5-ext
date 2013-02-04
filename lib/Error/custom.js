'use strict';

var d = require('../Object/descriptor')

  , captureStackTrace = Error.captureStackTrace
  , CustomError;

CustomError = module.exports = function CustomError(message, code, errno) {
	this.message = String(message);
	if (code != null) this.code = String(code);
	if (!isNaN(errno)) this.errno = Number(errno);
	if (captureStackTrace) captureStackTrace(this, CustomError);
};

CustomError.prototype = Object.create(Error.prototype, {
	constructor: d(CustomError),
	name: d('CustomError')
});
