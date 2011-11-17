'use strict';

var map     = Array.prototype.map
  , i       = require('../../lib/Function/i');

module.exports = {
	__generic: function (t, a) {
		a.deep(t(this), map.call(this, i));
	},
	"": function (t, a) {
		var x = {}, y = [1, x, 'raz'], r;

		a.deep(r = t(y), y, "Matches content");
		a.not(r, y, "Not same object");
	}
};
