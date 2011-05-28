// Global object

'use strict';

var indirectEval = eval;

module.exports = indirectEval('this');
