"use strict";

var assert  = require("chai").assert
  , shuffle = require("../../array/shuffle");

describe("array/shuffle", function () {
	var array = [1, 2, 3];

	// Adopt from lodash.shuffle
	// https://github.com/lodash/lodash/blob/master/test/shuffle.js
	it("should throw TypeError for non array input", function () {
		try {
			shuffle();
		} catch (e) {
			assert.strictEqual(e.name, "TypeError");
			assert.strictEqual(e.message, "input must be an Array, got undefined!");
		}

		try {
			shuffle({});
		} catch (e) {
			assert.strictEqual(e.name, "TypeError");
			assert.strictEqual(e.message, "input must be an Array, got object!");
		}

		try {
			shuffle(1);
		} catch (e) {
			assert.strictEqual(e.name, "TypeError");
			assert.strictEqual(e.message, "input must be an Array, got number!");
		}
	});

	it("should return a new array", function () { assert.notStrictEqual(shuffle(array), array); });

	it("should contain the same elements after a collection is shuffled", function () {
		assert.deepStrictEqual(shuffle(array).sort(), array);
	});

	// Adopt from fast-shuffle
	// https://github.com/philihp/fast-shuffle/blob/master/src/__tests__/index.test.js
	it("does not mutate the source", function () {
		var d1 = ["A", "B", "C", "D", "E", "F", "G", "H"];
		shuffle(d1);

		assert.deepStrictEqual(d1, ["A", "B", "C", "D", "E", "F", "G", "H"]);
	});

	it("does a shallow clone", function () {
		var d1 = [
			{ name: "Alice", money: 10 }, { name: "Betty", money: 20 }, { name: "Cindy", money: 15 }
		];
		var d2 = shuffle(d1);

		assert.include(d2, d1[0]);
		assert.include(d2, d1[1]);
		assert.include(d2, d1[2]);
	});

	it("works with massive noise", function () {
		var d1 = new Array(500).fill().map(function (_, i) { return i; });
		var d2 = shuffle(d1);

		assert.deepStrictEqual(d1.sort(), d2.sort());
	});
});
