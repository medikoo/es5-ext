'use strict';

module.exports = require('../../_is-extensible') ?
		Array.prototype.concat : require('./shim');
