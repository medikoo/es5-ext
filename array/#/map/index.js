'use strict';

module.exports = require('../../_is-extensible') ?
		Array.prototype.map : require('./shim');
