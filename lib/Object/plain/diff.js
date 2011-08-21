// Returns differences between two plain objects

'use strict';

var keys         = Object.keys
	, f            = require('../../Function/functionalize')
  , diff         = require('../../List/diff').call
  , intersection = require('../../List/intersection').call
  , forEach      = require('./for-each').call
  , link         = require('./link').bind;


module.exports = f(function (target) {
	var ok = keys(this), nk = keys(target), od = {}, nd = {};
	intersection(ok, nk).forEach(function (key) {
		if (this[key] !== target[key]) {
			od[key] = this[key]; nd[key] = target[key];
		}
	}, this);
	diff(ok, nk).forEach(link(od, this));
	diff(nk, ok).forEach(link(nd, target));
	return { n: nd, o: od };
});
