'use strict';

module.exports = require('../../_is-subclassable') ?
		Array.prototype.slice : require('./shim');
