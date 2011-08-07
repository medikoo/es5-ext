// Curries function 'a' with 'b'.call function
// This is sugar for implementing super calls
//
// Without sugar:
// parent.method: function (x, y) {
//   ...
// };
// child.method: function (x, y) {
//   parent.method.call(this, x, y);
//   ...
// };
//
// When using inherit:
// parent.method: function (x, y) {
//   ...
// };
// child.method: inherit(function (_super, x, y) {
//   _super(this, x, y);
//   ...
// }, parent.method);
//
// For extending all methods on given object see ../Object/extend.js

'use strict';

var callBind = require('./call-bind')
  , curry    = require('./curry').call;

module.exports = function (a, b) {
	return curry(a, callBind(b));
};
