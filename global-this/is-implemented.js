"use strict";

module.exports = function () {
	if (typeof globalThis !== "object") return false;
	return globalThis.Array === Array;
};
