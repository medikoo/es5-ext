// Whether string represents number

'use strict';

module.exports = function () {
	return !isNaN(String(this));
};
