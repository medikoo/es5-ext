'use strict';

module.exports = require('../../_is-subclassable') ?
		Array.prototype.filter : require('./shim');
