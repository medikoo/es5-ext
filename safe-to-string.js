'use strict';

module.exports = function (value) {
	try {
		return String(value);
	} catch (e) {
		return "<non-stringifiable value>";
	}
};
