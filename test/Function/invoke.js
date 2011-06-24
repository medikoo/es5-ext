'use strict';

var k  = require('../../lib/Function/k')

  , o;

o = { b: k('c')};

module.exports = function (t, a) {
	a.equal(t('b')(o), 'c');
};
