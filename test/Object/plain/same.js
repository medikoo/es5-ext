'use strict';

module.exports = {
	"Same": function (t, a) {
		t = t.call;
		a.equal(t({ 1: 1, 2: 2, 3: 3 }, { 1: 1, 2: 2, 3: 3 }), true);
	},
	"Different property value": function (t, a) {
		t = t.call;
		a.equal(t({ 1: 1, 2: 2, 3: 3 }, { 1: 1, 2: 2, 3: 4 }), false);
	},
	"Property only in source": function (t, a) {
		t = t.call;
		a.equal(t({ 1: 1, 2: 2, 3: 3 }, { 1: 1, 2: 2 }), false);
	},
	"Property only in target": function (t, a) {
		t = t.call;
		a.equal(t({ 1: 1, 2: 2 }, { 1: 1, 2: 2, 3: 4 }), false);
	}
};
