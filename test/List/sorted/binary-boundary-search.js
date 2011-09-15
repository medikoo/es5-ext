'use strict';

var compare  = require('../../../lib/Number/compare').bind
  , get      = require('../../../lib/Object/plain/get').bind
  , sequence = require('../../../lib/Function/sequence').bind;

module.exports = function (t, a) {
	var arr, fn, search;
	arr = [2,5,8,34,67,98,345,678];
	fn = sequence(get(arr));

	// lowest, equal doesn't match
	search = t();
	a(search(fn(compare(1)), arr.length), 0, "All higher");
	a(search(fn(compare(679)), arr.length), arr.length, "All lower");
	a(search(fn(compare(4)), arr.length), 1, "Mid");
	a(search(fn(compare(5)), arr.length), 2, "Match");
	a(search(fn(compare(6)), arr.length), 2, "Above");

	// lowest, equal match
	search = t(true);
	a(search(fn(compare(1)), arr.length), 0, "All higher");
	a(search(fn(compare(679)), arr.length), arr.length, "All lower");
	a(search(fn(compare(4)), arr.length), 1, "Mid");
	a(search(fn(compare(5)), arr.length), 1, "Match");
	a(search(fn(compare(6)), arr.length), 2, "Above");

	// highest, equal doesn't match
	search = t(false, true);
	a(search(fn(compare(1)), arr.length), -1, "All higher");
	a(search(fn(compare(679)), arr.length), arr.length - 1, "All lower");
	a(search(fn(compare(4)), arr.length), 0, "Mid");
	a(search(fn(compare(5)), arr.length), 0, "Match");
	a(search(fn(compare(6)), arr.length), 1, "Above");

	// highest, equal match
	search = t(true, true);
	a(search(fn(compare(1)), arr.length), -1, "All higher");
	a(search(fn(compare(679)), arr.length), arr.length - 1, "All lower");
	a(search(fn(compare(4)), arr.length), 0, "Mid");
	a(search(fn(compare(5)), arr.length), 1, "Match");
	a(search(fn(compare(6)), arr.length), 1, "Above");
};
