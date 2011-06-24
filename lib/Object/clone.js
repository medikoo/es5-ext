// Create duplicate of an object.
// Makes logical sense only for hashes (plain objects).

'use strict';

var f      = require('../Function/functionalize')
  , extend = require('./extend').call;

module.exports = f(function () {
	return extend({}, this);
});
