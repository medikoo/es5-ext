'use strict';

module.exports = function (t, a)  {
	var x = {}
	  , f1 = function (x) { return x + 1; }
	  , f2 = function () { }
	  , f3 = function (_super, x) { return _super(this, x); }
	  , f4 = function () { }
	  , f5 = function (_proto, x) { return _proto; }
	  , f6 = function (_proto, _super, x) { return _proto.foo = _super(this, x); }
	  , f7 = function (_super, _proto, x) { return _proto.bar = _super(this, x); };

	a(t(f1, f3, x)(2), 3, "Overriden");
	a(t(f2, f4, x), f4, "Not overriden");
	t(f1, f6, x)(2);
	a(x.foo, 3, "Proto & Super");
	t(f1, f7, x)(2);
	a(x.bar, 3, "Super & Proto");
};
