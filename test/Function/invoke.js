'use strict';

var k  = require('../../function/k')

  , o = { b: k('c') };

module.exports = function (t, a) {
	a(t('b')(o), 'c');
};
