'use strict';

module.exports = {
	__generic: function (t, a) {
		var count = 0, first, last, x, icount = this.length;
		t.call(this, function (item, index, col) {
			++count;
			if (!first) {
				first = item;
			}
			last = item;
			x = col;
			a(index, --icount, "Index");
		});
		a(count, this.length, "Iterated");
		a(first, this[this.length - 1], "First is last");
		a(last, this[0], "Last is first");
		a.deep(x, Object(this), "Collection as third argument");
	},
	"": function (t, a) {
		var x = {}, y, count;

		var start = [
			1,2,3,4,5
		], result, first, last;

		result = t.call(start, function(element, index, arr){
			if(!first)	{
				first = element;
			}
			last = element;
			return element;
		});
		a(Array.isArray(result), true, "Result is Array");
		a(first, 5, "First is last");
		a(last, 1, "Last is first");
		a(result.length, 5, "Array has proper length");

		result = t.call([1], function(element, index, arr){
			return element + 4;
		});
		a(result[0], 5, "Array element is eq 5");

		start = new Array(10);
		start[3] = 666;

		result = t.call(start, function(element, index, arr){
			return element/6;
		});

		a(Array.isArray(result), true, "Result is Array");
		a(result.length, 10, "Array has correct length");
		a(result[6], 111, "Array element has correct value");
		a(result[0], undefined, "Empty array element is undefined");
	}
};
