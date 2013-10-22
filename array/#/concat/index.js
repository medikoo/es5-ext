'use strict';

module.exports = require('../../_is-subclassable') ?
		Array.prototype.concat : require('./shim');
