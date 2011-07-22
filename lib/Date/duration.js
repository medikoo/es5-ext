'use strict';

var f              = require('../Function/functionalize')

  , merge          = require('../Object/plain/merge').call
  , bindMethods    = require('../Object/bind-methods').call
  , pad2           = require('../Number/pad').call(2).call
  , pad3           = require('../Number/pad').call(3).call
  , format         = require('../String/format')

  , c              = require('./clone').call
  , monthDaysCount = require('./month-days-count').call
  , dfloor         = require('./day/floor').call
  , mfloor         = require('./month/floor').call
  , yfloor         = require('./year/floor').call

, methods, timeMethods;


methods = {
	getMilliseconds: function () {
		return this.valueOf();
	},
	getSeconds: function () {
		return Math.floor(this/1000);
	},
	getMinutes: function () {
		return Math.floor(this/(1000*60));
	},
	getHours: function () {
		return Math.floor(this/(1000*60*60));
	},
	getDays: function () {
		return Math.floor(this/(1000*60*60*24));
	},
	getMonths: function () {
		return (this.to.getFullYear() - this.from.getFullYear())*12
			+ this.to.getMonth() - this.from.getMonth()
			- ((this.from - mfloor(c(this.from)))
				> (this.to - mfloor(c(this.to))));
	},
	getYears: function () {
		return this.to.getFullYear() - this.from.getFullYear()
			- ((this.from - yfloor(c(this.from)))
				> (this.to - yfloor(c(this.to))));
	}
};

timeMethods = {
	getMilliseconds: function () {
		return this%1000;
	},
	getSeconds: function () {
		return this.getSeconds()%60;;
	},
	getMinutes: function () {
		return this.getMinutes()%60;
	},
	getHours: function () {
		return this.getHours()%24;
	},
	getDays: function () {
		var x = c(this.to);
		x.setMonth(x.getMonth() - 1);
		x = monthDaysCount(x);
		return (x - this.from.getDate() + this.to.getDate())%x
			- ((this.from - dfloor(c(this.from)))
				> (this.to - dfloor(c(this.to))));
	},
	getMonths: function () {
		return (12 - this.from.getMonth() + this.to.getMonth())%12
			- ((this.from - mfloor(c(this.from)))
				> (this.to - mfloor(c(this.to))));
	},
	getYears: function () {
		return this.getYears();
	}
};

format = format({
	y: function () {
		return String(this.getYears());
	},
	m: function () {
		return pad2(this.time.getMonths());
	},
	d: function () {
		return pad2(this.time.getDays());
	},
	H: function () {
		return pad2(this.time.getHours());
	},
	M: function () {
		return pad2(this.time.getMinutes());
	},
	S: function () {
		return pad2(this.time.getSeconds());
	},
	L: function () {
		return pad3(this.time.getMilliseconds());
	},
	nm: function () {
		return String(this.getMonths());
	},
	nd: function () {
		return String(this.getDays());
	},
	nH: function () {
		return String(this.getHours());
	},
	nM: function () {
		return String(this.getMinutes());
	},
	nS: function () {
		return String(this.getSeconds());
	},
	nL: function () {
		return String(this.getMilliseconds());
	}
}).call;

var toString = function (pattern) {
	var s, r;
	if (!pattern) {
		s = "." +  pad3(this.time.getMilliseconds());
		if (this.getSeconds()) {
			if (this.getMinutes()) {
				s = pad2(this.time.getMinutes()) + ":" + pad2(this.time.getSeconds())
					+ s;
				if (this.getHours()) {
					s = pad2(this.time.getHours()) + ":" + s;
					if (this.getDays()) {
						s = this.time.getDays() + "d " + s;
						if (this.getMonths()) {
							s = this.time.getMonths() + "m " + s;
							if (this.getYears()) {
								s = this.time.getYears() + "y " + s;
							}
						}
					}
				}
			} else {
				s = this.time.getSeconds() + s;
			}
		}
	} else if (pattern === 1) {
		s = this.time.getMilliseconds() + "ms";
		if (this.getSeconds()) {
			s = this.time.getSeconds() + "s " + s;
			if (this.getMinutes()) {
				s = this.time.getMinutes() + "m " + s;
				if (this.getHours()) {
					s = this.time.getHours() + "h " + s;
					if (this.getDays()) {
						s = this.time.getDays() + "d " + s;
						if (this.getMonths()) {
							s = this.time.getMonths() + "m " + s;
							if (this.getYears()) {
								s = this.time.getYears() + "y " + s;
							}
						}
					}
				}
			}
		}
	} else {
		return format(pattern, this);
	}
	return s;
};

module.exports = f(function (to) {
	var duration = new Number(to - this);
	duration.from = this;
	duration.to = to;

	merge(duration, methods);
	bindMethods(duration.time = {}, duration, timeMethods);
	duration.toString = toString;

	return duration;
});
