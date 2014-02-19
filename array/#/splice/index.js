'use strict';

module.exports = require('../../_is-extensible') ?
		Array.prototype.splice : require('./shim');
