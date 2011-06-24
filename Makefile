SHELL = bash

install:
	npm install

# lint:
# 	find lib -name "*.js" -print0 | xargs -0 ./node_modules/jslint/bin/jslint.js -module -node false -predef exports,module,require -white

# lint-tests:
# 	find test -name "*.js" -print0 | xargs -0 ./node_modules/jslint/bin/jslint.js -module -node false -predef __dirname,exports,module,require -white -nomen -plusplus

# test:
# 	./node_modules/tad/bin/test.js lib

# test-cov:
# 	./node_modules/tad/bin/expresso.js -c -q lib

.PHONY: install lint lint-tests test test-cov
