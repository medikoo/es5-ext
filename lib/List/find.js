// Find element in list

'use strict';

var f    = require('../Function/functionalize')
  , some = require('./some/call');

module.exports = f(function (query, scope) {
	var r;
	return some(this, function (value) {
		if (query.apply(this, arguments)) {
			r = value;
			return true;
		}
		return false;
	}, scope) ? r : null;
});
