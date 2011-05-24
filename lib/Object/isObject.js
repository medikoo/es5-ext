// Whether object is instance of Object but not Function

'use strict';

module.exports = function (obj) {
	return !!(obj && (typeof obj === "object"));
};
