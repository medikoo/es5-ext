'use strict';

module.exports = {
	__generic: function (t, a) {
		var count = 0, first, last, x, icount = this.length;
		t = t.call;
		t(this, function (item, index, col) {
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
		a(x, this, "Collection as third argument");
	},
	"": function (t, a) {
		var x = {}, y, count;

		var start = [
			1,2,3,4,5
		], result, first, last;
		t = t.call;

		result = t(start, function(element, index, arr){
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

		result = t([1,2,3,4,5,6,7,8], function(element, index, arr){
			if(element % 2 == 0)	{
				return element;
			}
		});
		a(result.length, 4, "Array has 4 elements");
		a(result[0], 8, "First element is eq 8");
		a(result[3], 2, "First element is eq 2")

		result = t([1], function(element, index, arr){
			return element + 4;
		});
		a(result[0], 5, "Array element is eq 5");
//		t([1], function () { y = this; }, x);
//		a(y, x, "Scope");
//		y = 0;
//		t([3,4,4], function (a, i) { y += i; });
//		a(y, 3, "Indexes");
//
//		x = [1,3];
//		x[5] = 'x';
//		y = 0, count = 0;
//		t(x, function (a, i) { ++count; y += i; });
//		a(y, 6, "Misssing Indexes");
//		a(count, 3, "Misssing Indexes, count");
	}
};
