'use strict';

var diff = require('../array/#/diff')
  , deepCopy = require('../object/copy-deep')

  , allStaticMethods = ['constant', 'identity', 'invoke', 'isArguments', 'isFunction', 'noop', 'pluck', 'validFunction']
  , allInstanceMethods = ['compose', 'copy', 'curry', 'lock', 'not', 'partial', 'spread']
  , fakeFunctionObject = {prototype: {}}

  , assertStaticMethodsRegistered
  , assertStaticMethodsNotRegistered
  , assertInstanceMethodsRegistered
  , assertInstanceMethodsNotRegistered;


assertStaticMethodsRegistered = function(assert, nativeObject, listOfMethods) {
	listOfMethods.forEach(function(methodName) {
		assert.ok(nativeObject.hasOwnProperty(methodName));
	});
};

assertStaticMethodsNotRegistered = function(assert, nativeObject, listOfMethods) {
	listOfMethods.forEach(function(methodName) {
		assert.ok(!nativeObject.hasOwnProperty(methodName));
	});
};

assertInstanceMethodsRegistered = function(assert, nativeObject, listOfMethods) {
	listOfMethods.forEach(function(methodName) {
		assert.ok(nativeObject.prototype.hasOwnProperty(methodName));
	});
};

assertInstanceMethodsNotRegistered = function(assert, nativeObject, listOfMethods) {
	listOfMethods.forEach(function(methodName) {
		assert.ok(!nativeObject.prototype.hasOwnProperty(methodName));
	});
};

exports["Test registering all methods"] = function(t, a) {
	var fakeFunction = deepCopy(fakeFunctionObject);
	t.function(fakeFunction);

	assertStaticMethodsRegistered(a, fakeFunction, allStaticMethods);
	assertInstanceMethodsRegistered(a, fakeFunction, allInstanceMethods);
};


exports["Test registering subset of methods"] = function(t, a) {
	var fakeFunction = deepCopy(fakeFunctionObject)
	  , staticMethods = ['pluck']
	  , instanceMethods = ['spread'];

	t.function(fakeFunction, staticMethods.concat(instanceMethods));

	assertStaticMethodsRegistered(a, fakeFunction, staticMethods);
	assertStaticMethodsNotRegistered(a, fakeFunction, diff.call(allStaticMethods, staticMethods));
	assertInstanceMethodsRegistered(a, fakeFunction, instanceMethods);
	assertInstanceMethodsNotRegistered(a, fakeFunction, diff.call(allInstanceMethods, instanceMethods));
};

exports["Test defining custom descriptor"] = function(t, a) {
	var fakeFunction = deepCopy(fakeFunctionObject)
	  , staticMethod1 = 'pluck'
	  , staticMethod2 = 'noop'
	  , staticMethod3 = 'invoke'

	  , descriptor;

	t.function(fakeFunction, [staticMethod1]);
	descriptor = Object.getOwnPropertyDescriptor(fakeFunction, staticMethod1);

	a.ok(descriptor.writable === false);
	a.ok(descriptor.configurable === false);
	a.ok(descriptor.enumerable === false);


	t.function(fakeFunction, [staticMethod2], {
		writable: true,
		configurable: true,
		enumerable: true
	});
	descriptor = Object.getOwnPropertyDescriptor(fakeFunction, staticMethod2);

	a.ok(descriptor.writable);
	a.ok(descriptor.configurable);
	a.ok(descriptor.enumerable);

	t.function(fakeFunction, [staticMethod3], {
		configurable: true
	});
	descriptor = Object.getOwnPropertyDescriptor(fakeFunction, staticMethod3);

	a.ok(descriptor.writable === false);
	a.ok(descriptor.configurable);
	a.ok(descriptor.enumerable === false);
};

