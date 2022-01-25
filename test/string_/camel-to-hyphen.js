"use strict";

var assert = require("chai").assert;

var camelToHyphen = require("../../string_/camel-to-hyphen");

describe("string_/camel-to-hyphen", function () {
	it("should convert camel notation to hyphen", function () {
		assert.equal(camelToHyphen.call("razDwaTRzy4yFoo45My"), "raz-dwa-t-rzy4y-foo45-my");
		assert.equal(camelToHyphen.call("razDwaTRzy4yFoo45My-"), "raz-dwa-t-rzy4y-foo45-my-");
		assert.equal(camelToHyphen.call("razDwaTRzy4yFoo45My--"), "raz-dwa-t-rzy4y-foo45-my--");
	});
});
