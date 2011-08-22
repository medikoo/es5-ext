'use strict';

var dirname    = require('path').dirname
  , indexTest  = require('tad/lib/utils/index-test')

  , dir = dirname(dirname(dirname(__dirname))) + '/lib/Object/descriptors';

module.exports = {
	"": indexTest(indexTest.readDir(dir)(function (o) {
		delete o.v;
		return o;
	}), "index"),
	"v function is main object": function (t, a) {
		a(t, require(dir + '/v'))
	}
};
