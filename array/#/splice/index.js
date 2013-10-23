'use strict';

module.exports = require('../../_is-subclassable') ?
		Array.prototype.splice : require('./shim');
