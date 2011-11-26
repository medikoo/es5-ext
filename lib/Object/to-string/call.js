// call binded to Object.prototype.toString

'use strict';

module.exports = Function.prototype.call.bind(Object.prototype.toString);
