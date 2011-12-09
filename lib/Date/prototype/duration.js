'use strict';

var merge          = require('../../Object/prototype/merge')
  , bindMethods    = require('../../Object/prototype/bind-methods')
  , getPad         = require('../../Number/get-pad')
  , format         = require('../../String/get-format')
  , isDate         = require('../is-date')

  , monthDaysCount = require('./month-days-count')
  , c              = require('./copy')
  , dfloor         = require('./floor-day')
  , mfloor         = require('./floor-month')
  , yfloor         = require('./floor-year')

  , methods, timeMethods, pad2, pad3;

pad2 = getPad(2)
pad3 = getPad(3);

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
			- ((this.from - mfloor.call(c.call(this.from)))
				> (this.to - mfloor.call(c.call(this.to))));
	},
	getYears: function () {
		return this.to.getFullYear() - this.from.getFullYear()
			- ((this.from - yfloor.call(c.call(this.from)))
				> (this.to - yfloor.call(c.call(this.to))));
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
		var x = c.call(this.to);
		x.setMonth(x.getMonth() - 1);
		x = monthDaysCount.call(x);
		return (x - this.from.getDate() + this.to.getDate())%x
			- ((this.from - dfloor.call(c.call(this.from)))
				> (this.to - dfloor.call(c.call(this.to))));
	},
	getMonths: function () {
		return (12 - this.from.getMonth() + this.to.getMonth())%12
			- ((this.from - mfloor.call(c.call(this.from)))
				> (this.to - mfloor.call(c.call(this.to))));
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
		return pad2.call(this.time.getMonths());
	},
	d: function () {
		return pad2.call(this.time.getDays());
	},
	H: function () {
		return pad2.call(this.time.getHours());
	},
	M: function () {
		return pad2.call(this.time.getMinutes());
	},
	S: function () {
		return pad2.call(this.time.getSeconds());
	},
	L: function () {
		return pad3.call(this.time.getMilliseconds());
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
});

var toString = function (pattern) {
	var s, r;
	if (!pattern) {
		s = "." +  pad3.call(this.time.getMilliseconds());
		if (this.getSeconds()) {
			if (this.getMinutes()) {
				s = pad2.call(this.time.getMinutes()) + ":" + pad2.call(this.time.getSeconds())
					+ s;
				if (this.getHours()) {
					s = pad2.call(this.time.getHours()) + ":" + s;
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
		return format.call(pattern, this);
	}
	return s;
};

module.exports = function (to) {
	var duration;
	if (!isDate(this)) {
		throw new TypeError("this is not a Date object");
	}
	if (!isDate(to)) {
		throw new TypeError("to is not a Date object");
	}
	duration = new Number(to - this);
	duration.from = this;
	duration.to = to;

	merge.call(duration, methods);
	bindMethods.call(duration.time = {}, duration, timeMethods);
	duration.toString = toString;

	return duration;
};
