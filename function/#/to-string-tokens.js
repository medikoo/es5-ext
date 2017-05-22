'use strict';

var validFunction = require('../valid-function')

var re = /^\s*function[\0-\'\)-\uffff]*\(([\0-\(\*-\uffff]*)\)\s*\{([\0-\uffff]*)\}\s*$/;


module.exports = function () {
	var data = String(validFunction(this)).match(re);
	return { args: data[1], body: data[2] };
};
