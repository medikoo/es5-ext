'use strict';

module.exports = function (t, a) {
	a(t.call({ 1: 1, 2: 2, 3: 3 }, { 1: 1, 2: 2, 3: 3 }), true, "Same");
	a(t.call({ 1: 1, 2: 2, 3: 3 }, { 1: 1, 2: 2, 3: 4 }), false,
		"Different property value");
	a(t.call({ 1: 1, 2: 2, 3: 3 }, { 1: 1, 2: 2 }), false, "Property only in source");
	a(t.call({ 1: 1, 2: 2 }, { 1: 1, 2: 2, 3: 4 }), false, "Property only in target");
};
