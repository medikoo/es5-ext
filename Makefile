SHELL = bash

install:
	npm install

lint:
	find lib -name "*.js" -print0 | xargs -0 ./node_modules/jslint/bin/jslint.js -bitwise -es5 -newcap -node -nomen -onevar -regexp -undef -strict

lint-tests:
	find test -name "*.js" -print0 | xargs -0 ./node_modules/jslint/bin/jslint.js -bitwise -es5 -newcap -node -nomen -onevar -regexp -undef -strict

test:
	npm test

test-cov:
	./node_modules/expresso/bin/expresso -c -q test/setup.js test/index.js

.PHONY: install lint lint-tests test test-cov
