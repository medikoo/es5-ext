// Same as 'some', however returns first 'truthy' value instead of just 'true'

'use strict';

var f    = require('../Function/functionalize')
  , some = require('./some/call')

module.exports = f(function (cb, context) {
	var r;
	return some(this, function () {
		return (r = cb.apply(this, arguments));
	}, context) ? r : null;
});
