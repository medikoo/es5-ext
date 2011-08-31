// Whether object is date
//
// Borrowed from underscore: http://documentcloud.github.com/underscore/#isDate

'use strict';

module.exports = function (x) {
	return !!(x && x.getTimezoneOffset && x.setUTCFullYear);
};


