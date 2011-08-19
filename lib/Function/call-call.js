// Return f.call binded to f
// callBind(f)(args…) =def  f.call(args)

'use strict';

var call  = Function.prototype.call;

module.exports = call.bind(call);
