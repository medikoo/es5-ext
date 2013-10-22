'use strict';

if (require('../../_is-subclassable')) {
	module.exports = Array.prototype.concat;
} else {
	module.exports = require('./shim');
}
