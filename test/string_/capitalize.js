"use strict";

var assert = require("chai").assert;

var capitalize = require("../../string_/capitalize");

describe("string_/capitalize", function () {
	it("should capitalize lowercase word", function () {
		assert.equal(capitalize.call("raz"), "Raz");
		assert.equal(capitalize.call("raZ"), "RaZ");
	});
	it("should return as-is capitalized word", function () {
		assert.equal(capitalize.call("Raz"), "Raz");
		assert.equal(capitalize.call("RAZ"), "RAZ");
	});
	it("should return emptry string as is", function () { assert.equal(capitalize.call(""), ""); });
	it("should capitalize single letter", function () { assert.equal(capitalize.call("a"), "A"); });
	it("should capitalize sentence", function () {
		assert.equal(capitalize.call("this is a Test"), "This is a Test");
	});
});
