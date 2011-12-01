// List of EcmaScript 5th edition reserved keywords

'use strict';

var freeze  = Object.freeze
  , setTrue = require('./Object/get-set')(true)
  , flatten = require('./Object/prototype/flatten');

// 7.6.1.1 Keywords
['break', 'case', 'catch', 'continue', 'debugger', 'default', 'delete', 'do',
	'else', 'finally', 'for', 'function', 'if', 'in', 'instanceof', 'new',
	'return', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
	'with']
	.forEach(setTrue, exports.keywords = {}); freeze(exports.keywords);

// 7.6.1.2 Future Reserved Words
['class', 'const', 'enum', 'exports', 'extends', 'import', 'super']
	.forEach(setTrue, exports.future = {}); freeze(exports.future);

// Future Reserved Words (only in strict mode)
['implements', 'interface', 'let', 'package', 'private', 'protected', 'public',
	'static', 'yield']
	.forEach(setTrue, exports.futureStrict = {}); freeze(exports.futureStrict);

freeze(exports.all = flatten.call(exports));
