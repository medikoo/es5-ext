'use strict';

module.exports = {
	"Same": function (t, a) {
		a.equal(t.call({ 1: 1, 2: 2, 3: 3 }, { 1: 1, 2: 2, 3: 3 }), true);
	},
	"Not same #1": function (t, a) {
		a.equal(t.call({ 1: 1, 2: 2, 3: 3 }, { 1: 1, 2: 2, 3: 4 }), false);
	},
	"Not same #2": function (t, a) {
		a.equal(t.call({ 1: 1, 2: 2, 3: 3 }, { 1: 1, 2: 2 }), false);
	},
	"Not same #3": function (t, a) {
		a.equal(t.call({ 1: 1, 2: 2 }, { 1: 1, 2: 2, 3: 4 }), false);
	}
};
