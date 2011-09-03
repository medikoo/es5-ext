// Whether object is error

'use strict';

var toString = require('../Object/to-string/call')

  , id = toString(new Error())
  , exceptionRe = /^\[object [a-zA-z0-9]*Exception\]$/;

module.exports = function (x) {
	var xid;
	if (!x) {
		return false;
	}
	return (x instanceof Error) || ((xid = toString(x)) === id) ||
		xid.match(exceptionRe) || false;
};
