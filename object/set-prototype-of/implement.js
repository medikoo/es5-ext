"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Object, "setPrototypeOf", {
		value: require("./implementation"),
		configurable: true,
		enumerable: false,
		writable: true
	});
}
