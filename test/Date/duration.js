'use strict';

var clone = require('../../lib/Date/clone').call;

module.exports = function (t, a) {
	var d1 = new Date(Date.UTC(2001, 1, 2, 1, 1, 1, 1)), d, d2;
	d1.duration = t;

	return {
		"Milliseconds": function (t, a) {
			// 11 milliseconds
			d2 = clone(d1);
			d2.setMilliseconds(d2.getMilliseconds() + 11);
			d = d1.duration(d2);

			a(d.getMilliseconds(), 11, "Milliseconds");
			a(d.valueOf(), d.getMilliseconds(), "Value");
			a(d.getSeconds(), 0, "Seconds");
			a(d.getMinutes(), 0, "Minutes");
			a(d.getHours(), 0, "Hours");
			a(d.getDays(), 0, "Days");
			a(d.getMonths(), 0, "Months");
			a(d.getYears(), 0, "Years");

			a(d.time.getMilliseconds(), 11, "Time milliseconds");
			a(d.time.getSeconds(), 0, "Time seconds");
			a(d.time.getMinutes(), 0, "Time minutes");
			a(d.time.getHours(), 0, "Time hours");
			a(d.time.getDays(), 0, "Time days");
			a(d.time.getMonths(), 0, "Time months");
			a(d.time.getYears(), 0, "Time years");

			a(d.toString(), '.011', 'String presentation');
			a(d.toString(1), '11ms', 'String presentation #2');
			a(d.toString(' %L.%nL.%S.%nS.%M.%nM.%H.%nH.%d.%nd.%m.%nm.%y '),
				' 011.11.00.0.00.0.00.0.00.0.00.0.0 ', 'String presentation (custom)');
		},
		"Seconds": function (t, a) {
			// 7 seconds 123 milliseconds
			d2 = clone(d1);
			d2.setMilliseconds(d2.getMilliseconds() + 123);
			d2.setSeconds(d2.getSeconds() + 7);
			d = d1.duration(d2);

			a(d.getMilliseconds(), 7*1000 + 123, "Milliseconds");
			a(d.valueOf(), d.getMilliseconds(), "Value");
			a(d.getSeconds(), 7, "Seconds");
			a(d.getMinutes(), 0, "Minutes");
			a(d.getHours(), 0, "Hours");
			a(d.getDays(), 0, "Days");
			a(d.getMonths(), 0, "Months");
			a(d.getYears(), 0, "Years");

			a(d.time.getMilliseconds(), 123, "Time milliseconds");
			a(d.time.getSeconds(), 7, "Time seconds");
			a(d.time.getMinutes(), 0, "Time minutes");
			a(d.time.getHours(), 0, "Time hours");
			a(d.time.getDays(), 0, "Time days");
			a(d.time.getMonths(), 0, "Time months");
			a(d.time.getYears(), 0, "Time years");

			a(d.toString(), '7.123', 'String presentation');
			a(d.toString(1), '7s 123ms', 'String presentation #2');
			a(d.toString(' %L.%nL.%S.%nS.%M.%nM.%H.%nH.%d.%nd.%m.%nm.%y '),
				' 123.' + (7*1000 + 123) + '.07.7.00.0.00.0.00.0.00.0.0 ',
				'String presentation (custom)');
		},
		"Minutes": function (t, a) {
			// 7 minutes 12 seconds 123 milliseconds
			d2 = clone(d1);
			d2.setMilliseconds(d2.getMilliseconds() + 123);
			d2.setSeconds(d2.getSeconds() + 12);
			d2.setMinutes(d2.getMinutes() + 7);
			d = d1.duration(d2);

			a(d.getMilliseconds(), 7*60*1000 + 12*1000 + 123, "Milliseconds");
			a(d.valueOf(), d.getMilliseconds(), "Value");
			a(d.getSeconds(), 7*60 + 12, "Seconds");
			a(d.getMinutes(), 7, "Minutes");
			a(d.getHours(), 0, "Hours");
			a(d.getDays(), 0, "Days");
			a(d.getMonths(), 0, "Months");
			a(d.getYears(), 0, "Years");

			a(d.time.getMilliseconds(), 123, "Time milliseconds");
			a(d.time.getSeconds(), 12, "Time seconds");
			a(d.time.getMinutes(), 7, "Time minutes");
			a(d.time.getHours(), 0, "Time hours");
			a(d.time.getDays(), 0, "Time days");
			a(d.time.getMonths(), 0, "Time months");
			a(d.time.getYears(), 0, "Time years");

			a(d.toString(), '07:12.123', 'String presentation');
			a(d.toString(1), '7m 12s 123ms', 'String presentation #2');
			a(d.toString(' %L.%nL.%S.%nS.%M.%nM.%H.%nH.%d.%nd.%m.%nm.%y '),
				' 123.' + (7*60*1000 + 12*1000 + 123) + '.12.' + (7*60 + 12)
				+ '.07.7.00.0.00.0.00.0.0 ', 'String presentation (custom)');
		},
		"Hours": function (t, a) {
			// 4 hours 7 minutes 12 seconds 123 milliseconds
			d2 = clone(d1);
			d2.setMilliseconds(d2.getMilliseconds() + 123);
			d2.setSeconds(d2.getSeconds() + 12);
			d2.setMinutes(d2.getMinutes() + 7);
			d2.setHours(d2.getHours() + 4);
			d = d1.duration(d2);

			a(d.getMilliseconds(), 4*60*60*1000 + 7*60*1000 + 12*1000 + 123, "Milliseconds");
			a(d.valueOf(), d.getMilliseconds(), "Value");
			a(d.getSeconds(), 4*60*60 + 7*60 + 12, "Seconds");
			a(d.getMinutes(), 4*60 + 7, "Minutes");
			a(d.getHours(), 4, "Hours");
			a(d.getDays(), 0, "Days");
			a(d.getMonths(), 0, "Months");
			a(d.getYears(), 0, "Years");

			a(d.time.getMilliseconds(), 123, "Time milliseconds");
			a(d.time.getSeconds(), 12, "Time seconds");
			a(d.time.getMinutes(), 7, "Time minutes");
			a(d.time.getHours(), 4, "Time hours");
			a(d.time.getDays(), 0, "Time days");
			a(d.time.getMonths(), 0, "Time months");
			a(d.time.getYears(), 0, "Time years");

			a(d.toString(), '04:07:12.123', 'String presentation');
			a(d.toString(1), '4h 7m 12s 123ms', 'String presentation #2');
			a(d.toString(' %L.%nL.%S.%nS.%M.%nM.%H.%nH.%d.%nd.%m.%nm.%y '),
				' 123.' + (4*60*60*1000 + 7*60*1000 + 12*1000 + 123) + '.12.'
				+ (4*60*60 + 7*60 + 12) + '.07.' + (4*60 + 7) + '.04.4.00.0.00.0.0 ',
				'String presentation (custom)');
		},
		"Days": function (t, a) {
			// 2 days 14 hours 7 minutes 12 seconds 123 milliseconds
			d2 = clone(d1);
			d2.setMilliseconds(d2.getMilliseconds() + 123);
			d2.setSeconds(d2.getSeconds() + 12);
			d2.setMinutes(d2.getMinutes() + 7);
			d2.setHours(d2.getHours() + 14);
			d2.setDate(d2.getDate() + 2);
			d = d1.duration(d2);

			a(d.getMilliseconds(), 2*24*60*60*1000 + 14*60*60*1000 + 7*60*1000
				+ 12*1000 + 123, "Milliseconds");
			a(d.valueOf(), d.getMilliseconds(), "Value");
			a(d.getSeconds(), 2*24*60*60 + 14*60*60 + 7*60 + 12, "Seconds");
			a(d.getMinutes(), 2*24*60 + 14*60 + 7, "Minutes");
			a(d.getHours(), 2*24 + 14, "Hours");
			a(d.getDays(), 2, "Days");
			a(d.getMonths(), 0, "Months");
			a(d.getYears(), 0, "Years");

			a(d.time.getMilliseconds(), 123, "Time milliseconds");
			a(d.time.getSeconds(), 12, "Time seconds");
			a(d.time.getMinutes(), 7, "Time minutes");
			a(d.time.getHours(), 14, "Time hours");
			a(d.time.getDays(), 2, "Time days");
			a(d.time.getMonths(), 0, "Time months");
			a(d.time.getYears(), 0, "Time years");

			a(d.toString(), '2d 14:07:12.123', 'String presentation');
			a(d.toString(1), '2d 14h 7m 12s 123ms', 'String presentation #2');
			a(d.toString(' %L.%nL.%S.%nS.%M.%nM.%H.%nH.%d.%nd.%m.%nm.%y '),
				' 123.' + (2*24*60*60*1000 + 14*60*60*1000 + 7*60*1000 + 12*1000 + 123)
				+ '.12.' + (2*24*60*60 + 14*60*60 + 7*60 + 12) + '.07.'
				+ (2*24*60 + 14*60 + 7) + '.14.' + (2*24 + 14) + '.02.2.00.0.0 ',
				'String presentation (custom)');
		},
		"Large duration": function (t, a) {
			// Few years, few months
			var days = 365*2 + 28 + 31;
			d2 = new Date(Date.UTC(2003, 3, 2, 1, 1, 1, 1));
			d = d1.duration(d2);

			a(d.getMilliseconds(), days*24*60*60*1000, "Milliseconds");
			a(d.valueOf(), d.getMilliseconds(), "Value");
			a(d.getSeconds(), days*24*60*60, "Seconds");
			a(d.getMinutes(), days*24*60, "Minutes");
			a(d.getHours(), days*24, "Hours");
			a(d.getDays(), days, "Days");
			a(d.getMonths(), 26, "Months");
			a(d.getYears(), 2, "Years");

			a(d.time.getMilliseconds(), 0, "Time milliseconds");
			a(d.time.getSeconds(), 0, "Time seconds");
			a(d.time.getMinutes(), 0, "Time minutes");
			a(d.time.getHours(), 0, "Time hours");
			a(d.time.getDays(), 0, "Time days");
			a(d.time.getMonths(), 2, "Time months");
			a(d.time.getYears(), 2, "Time years");

			a(d.toString(), '2y 2m 0d 00:00:00.000', 'String presentation');
			a(d.toString(1), '2y 2m 0d 0h 0m 0s 0ms', 'String presentation #2');
			a(d.toString(' %L.%nL.%S.%nS.%M.%nM.%H.%nH.%d.%nd.%m.%nm.%y '),
				' 000.' + (days*24*60*60*1000) + '.00.' + (days*24*60*60) + '.00.'
				+ (days*24*60) + '.00.' + (days*24) + '.00.' + days + '.02.' + 26
				+ '.2 ', 'String presentation (custom)');
		}
	};
};
