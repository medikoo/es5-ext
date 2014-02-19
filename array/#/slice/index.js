'use strict';

module.exports = require('../../_is-extensible') ?
		Array.prototype.slice : require('./shim');
