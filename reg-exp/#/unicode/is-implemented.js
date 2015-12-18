'use strict';

module.exports = function () {
	var dummyRegExp = /a/;
	return 'unicode' in dummyRegExp;
};
