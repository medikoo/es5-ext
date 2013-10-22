'use strict';

module.exports = require('../../_is-subclassable') ?
		Array.prototype.map : require('./shim');
