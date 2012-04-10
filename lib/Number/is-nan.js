// ES6 (Harmony)
// Whether value is NaN.
// Differs from global isNaN that it doesn't do type coercion
// http://wiki.ecmascript.org/doku.php?id=harmony:number.isnan

'use strict';

module.exports = function (value) {
	return (value !== value);
};
