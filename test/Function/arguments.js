'use strict';

var toArray = require('../../lib/Object/prototype/to-array');

module.exports = function (t, a) {
	var x = {}, args = t(1, x, 'raz');
	a(Array.isArray(args), false, "Not array");
	a.deep(toArray.call(args), [1, x, 'raz'], "Matches content");
};
