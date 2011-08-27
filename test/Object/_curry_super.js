'use strict';

module.exports = function (t, a)  {
	var f1 = function (x) { return x + 1; }, f2 = function () { }
	  , f3 = function (_super, x) { return _super(this, x); }
	  , f4 = function () { };

	a(t(f1, f3)(2), 3, "Overriden");
	a(t(f2, f4), f4, "Not overriden");
};
