// Return f.call binded to f
// callCall(f, args…) =def  f.call(args)

'use strict';

var call  = Function.prototype.call;

module.exports = call.bind(call);
