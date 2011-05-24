'use strict';

var global = ('indirect', eval)('this');

global.assert = require('assert');
require.paths.push(__dirname + '/../lib');

// move on expresso
exports['ignore'] = function () {};