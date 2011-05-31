'use strict';

var indirectEval = eval;
var global = indirectEval('this');

global.assert = require('assert');
require.paths.push(__dirname + '/../lib');

// move on expresso
exports.ignore = function () {};
