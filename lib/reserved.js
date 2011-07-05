// List of EcmaScript 5th edition reserved keywords

'use strict';

var setTrue = require('./Object/plain/set-true').bind
  , elevate = require('./Object/plain/elevate').call;

// 7.6.1.1 Keywords
['break', 'case', 'catch', 'continue', 'debugger', 'default', 'delete', 'do',
	'else', 'finally', 'for', 'function', 'if', 'in', 'instanceof', 'new',
	'return', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
	'with']
	.forEach(setTrue(exports.keywords = {}));
Object.freeze(exports.keywords);

// 7.6.1.2 Future Reserved Words
['class', 'const', 'enum', 'exports', 'extends', 'import', 'super']
	.forEach(setTrue(exports.future = {}));
Object.freeze(exports.future);

// Future Reserved Words (only in strict mode)
['implements', 'interface', 'let', 'package', 'private', 'protected', 'public',
	'static', 'yield']
	.forEach(setTrue(exports.futureStrict = {}));
Object.freeze(exports.futureStrict);

Object.freeze(exports.all = elevate(exports));
