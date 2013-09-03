'use strict';

var noop       = require('../function/noop')
  , isCallable = require('./is-callable')
  , callable   = require('./valid-callable')
  , validValue = require('./valid-value')
  , copy       = require('./copy')
  , map        = require('./map')
  , isString   = require('../string/is-string')
  , contains   = require('../string/#/contains')

  , bind = Function.prototype.bind
  , defineProperty = Object.defineProperty
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , d;

d = module.exports = function (dscr, value) {
	var c, e, w;
	if (arguments.length < 2) {
		value = dscr;
		dscr = null;
	}
	if (dscr == null) {
		c = w = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
		w = contains.call(dscr, 'w');
	}

	return { value: value, configurable: c, enumerable: e, writable: w };
};

d.gs = function (dscr, get, set) {
	var c, e;
	if (isCallable(dscr)) {
		set = (get == null) ? undefined : callable(get);
		get = dscr;
		dscr = null;
	} else {
		get = (get == null) ? undefined : callable(get);
		set = (set == null) ? undefined : callable(set);
	}
	if (dscr == null) {
		c = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
	}

	return { get: get, set: set, configurable: c, enumerable: e };
};

d.binder = function self(name, dv/*, bindTo*/) {
	var value, dgs, bindTo;
	if (!isString(name)) {
		bindTo = dv;
		return map(name, function (dv, name) { return self(name, dv, bindTo); });
	}
	bindTo = arguments[2];
	value = validValue(dv) && callable(dv.value);
	dgs = copy(dv);
	delete dgs.writable;
	delete dgs.value;
	dgs.get = function () {
		if (hasOwnProperty.call(this, name)) return value;
		dv.value = bind.call(value, (bindTo == null) ? this : this[bindTo]);
		defineProperty(this, name, dv);
		return this[name];
	};
	return dgs;
};

d.lazy = function self(name, dv) {
	var value, dgs;
	if (!isString(name)) {
		return map(name, function (dv, name) { return self(name, dv); });
	}
	value = validValue(dv) && callable(dv.value);
	dgs = copy(dv);
	delete dgs.writable;
	delete dgs.value;
	dgs.get = function () {
		if (hasOwnProperty.call(this, name)) return value;
		dv.value = value.call(this);
		defineProperty(this, name, dv);
		return this[name];
	};
	return dgs;
};

d.once = function self(name, dv) {
	var value, dgs;
	if (!isString(name)) {
		return map(name, function (dv, name) { return self(name, dv); });
	}
	value = validValue(dv) && callable(dv.value);
	dgs = copy(dv);
	delete dgs.writable;
	delete dgs.value;
	dgs.get = function () {
		if (hasOwnProperty.call(this, name)) return value;
		dv.value = noop;
		defineProperty(this, name, dv);
		return value;
	};
	return dgs;
};
