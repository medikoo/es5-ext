// Whether object is instance of Object but is not instance of Function

'use strict';

module.exports = function (obj) {
	return !!(obj && (typeof obj === "object"));
};
