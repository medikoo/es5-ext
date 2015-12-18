'use strict';

module.exports = function () {
	var dummyRegExp = /a/;
	return 'sticky' in dummyRegExp;
};
