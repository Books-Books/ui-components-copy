import React__default, { forwardRef, Fragment as Fragment$2, useState, useEffect, createRef, Children, isValidElement, createElement, useRef, cloneElement } from 'react';
import { Chart } from 'react-google-charts';

var css = {"BtnSec":"_BtnSec-module__BtnSec__2eAZu"};

const BtnSec = forwardRef(function BtnSec(props, ref) {
  const {
    classes,
    className,
    disabled = false,
    fullWidth,
    nameIcon,
    positionIcon,
    indicator,
    label,
    onChange,
    onClick,
    onFocus,
    selected,
    selectionFollowsFocus,
    value,
    addClass,
    ...other
  } = props;

  const handleClick = event => {
    if (!selected && onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  const handleFocus = event => {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  return /*#__PURE__*/React__default.createElement("li", {
    role: "presentation"
  }, /*#__PURE__*/React__default.createElement("a", Object.assign({
    href: `#section-${label}`,
    role: "tab",
    className: `${css.BtnSec} ${addClass}`,
    "aria-selected": selected,
    onClick: handleClick,
    onFocus: handleFocus
  }, other), /*#__PURE__*/React__default.createElement("span", {
    class: "sr-only"
  }, "Secci\xF3n ", label), /*#__PURE__*/React__default.createElement("span", {
    "aria-hidden": "true"
  }, label)));
});

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment$1=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment$1,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var has = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = has;

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var base = {"ColorBase":"_Base-module__ColorBase__3AGk-"};

var css$1 = {"Icon":"_Icon-module__Icon__3qt0u"};

const Icon = ({
  nameIcon,
  addClass,
  ...args
}) => {
  return /*#__PURE__*/React__default.createElement("i", Object.assign({
    "aria-hidden": "true",
    className: `${css$1.Icon} ${addClass}`
  }, args), nameIcon);
};
Icon.propTypes = {
  addClass: propTypes.string
};
Icon.defaultProps = {
  addClass: ''
};

var css$2 = {"ButtonBase":"_Button-module__ButtonBase__bJEh3"};

const Button = ({
  styled,
  label,
  hasAriaLabel,
  icon,
  addClass,
  disabled,
  children,
  ...args
}) => {
  return /*#__PURE__*/React__default.createElement("button", Object.assign({
    className: `${base.ColorBase} ${css$2.ButtonBase} ${addClass}`,
    styled: styled,
    disabled: disabled,
    type: "button",
    "aria-label": hasAriaLabel ? `${label}` : ''
  }, args), children, icon && /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: icon
  }), !hasAriaLabel ? /*#__PURE__*/React__default.createElement("span", null, label) : /*#__PURE__*/React__default.createElement(Fragment$2, null));
};
Button.propTypes = {
  styled: propTypes.oneOf(['primary', 'secondary', 'primary-outline', 'secondary-outline', 'primary-icon', 'secondary-icon', 'primary-icon-outline', 'secondary-icon-outline']),
  icon: propTypes.string,
  label: propTypes.string,
  onClick: propTypes.func,
  addClass: propTypes.string
};
Button.defaultProps = {
  styled: 'primary',
  addClass: '',
  onClick: undefined,
  hasAriaLabel: true
};

var css$3 = {};

const DarkThemeToggle = (addClass = {}) => {
  const [pressed, setPressed] = useState(false);

  function enableDarkMode() {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    setPressed(true);
  }

  function enableLightMode() {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    setPressed(false);
  }

  const togglePressed = () => {
    document.body.classList.contains('light-theme') ? enableDarkMode() : enableLightMode();
  };

  return /*#__PURE__*/React__default.createElement("button", {
    className: `${css$3['toggle-button']} ${addClass}`,
    "aria-pressed": pressed,
    onClick: togglePressed,
    type: "button"
  }, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    focusable: "false",
    className: "svg-icon"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z"
  })), "Modo Nocturno");
};

var css$4 = {"c-collapsible-container-header":"_DropableItem-module__c-collapsible-container-header__1CW18","c-collapsible-container-body":"_DropableItem-module__c-collapsible-container-body__2ygtY","active":"_DropableItem-module__active__1xv7i","show":"_DropableItem-module__show__2moa5"};

function AccordionItem({
  item,
  index,
  stateIcon,
  addClass,
  ...props
}) {
  const [Expanded, SetExpanded] = useState(false);
  const [active, setActive] = useState('');

  const toggleAccordion = () => {
    Expanded ? SetExpanded(false) : SetExpanded(true);

    if (active === '') {
      setActive(css$4['active']);
    } else {
      setActive('');
    }
  };

  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("button", Object.assign({
    className: `${css$4['c-collapsible-container-header']} ${addClass}`,
    "aria-expanded": Expanded,
    onClick: toggleAccordion
  }, props), /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: item.dataIcon
  }), /*#__PURE__*/React__default.createElement("p", null, " ", item.title), /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: stateIcon
  })), /*#__PURE__*/React__default.createElement("div", {
    className: `${css$4['c-collapsible-container-body']} ${active}`,
    id: `body${index}`
  }, /*#__PURE__*/React__default.createElement("p", null, item.text)));
}
AccordionItem.propTypes = {
  item: propTypes.object,
  stateIcon: propTypes.string,
  index: propTypes.number,
  addClass: propTypes.string
};
AccordionItem.defaultProps = {
  stateIcon: 'expand_more',
  addClass: ''
};

var css$5 = {"dropdownContainer":"_Dropdown-module__dropdownContainer__fH-Dn","DropdownCont":"_Dropdown-module__DropdownCont__D5DjI","dropdownArrow":"_Dropdown-module__dropdownArrow__2SmiC","navItem":"_Dropdown-module__navItem__2UAjf","dropdownMenu":"_Dropdown-module__dropdownMenu__jT9p5","dropdownMenu-item":"_Dropdown-module__dropdownMenu-item__2SR1I","navLink":"_Dropdown-module__navLink__362sV","dropdownItem":"_Dropdown-module__dropdownItem__1JWTx"};

const Dropdown = ({
  icon: _icon = '',
  children,
  hasAriaLabel: _hasAriaLabel = false,
  label,
  addClass,
  svgHide,
  ulClass,
  isExpanded: _isExpanded = false,
  fnMenuExpanded
}) => {
  let [Expanded, SetExpanded] = useState(false);

  const toggleMenu = () => {
    Expanded ? SetExpanded(false) : SetExpanded(true);
  };

  const closeMenu = e => {
    if (e.relatedTarget === null) {
      SetExpanded(false);
      typeof fnMenuExpanded === 'function' && fnMenuExpanded(false);
    }
  };

  const closeMenuOnEsc = e => {
    if ((e.keyCode || e.which) === 27) SetExpanded(false);
  };

  useEffect(() => {
    SetExpanded(_isExpanded);
  }, [_isExpanded]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: css$5['dropdownContainer']
  }, /*#__PURE__*/React__default.createElement(Button, {
    hasAriaLabel: _hasAriaLabel,
    "aria-expanded": Expanded,
    className: `${css$5.DropdownCont} ${addClass} `,
    onClick: toggleMenu,
    onBlur: closeMenu,
    onKeyDown: closeMenuOnEsc
  }, _icon, label, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 24 24",
    focusable: "false",
    "aria-hidden": "true",
    className: css$5['dropdownArrow'],
    hide: svgHide
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M7 10l5 5 5-5z"
  }))), /*#__PURE__*/React__default.createElement("ul", {
    role: "list",
    className: `${css$5.dropdownMenu} ${ulClass}`,
    onBlur: closeMenu
  }, children));
};
Dropdown.defaultProps = {
  icon: 'lock',
  addClass: '',
  label: 'Dropdown',
  arrItems: [{
    label: 'primer item',
    key: 1,
    link: 'el_link',
    icon: 'palette'
  }, {
    label: 'segundo item',
    key: 2,
    link: 'el_link'
  }]
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString_1(prefix) + id;
}

var uniqueId_1 = uniqueId;

var css$6 = {"InputAction":"_InputAction-module__InputAction__xB2Ha","LabelStyled":"_InputAction-module__LabelStyled__1X4kF","TextFileName":"_InputAction-module__TextFileName__OaT0I"};

const InputAction = ({
  type,
  styled,
  label,
  addClass,
  ...args
}) => {
  const id = uniqueId_1('ui-');

  const uploadIcon = /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    focusable: "false",
    className: "svg-icon"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"
  }));
  const colorIcon = /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    className: "svg-icon"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0H20V20H0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M10 2c-4.41 0-8 3.59-8 8s3.59 8 8 8c1.1 0 2-.9 2-2 0-.49-.18-.96-.51-1.34a.445.445 0 01-.1-.26c0-.22.18-.4.4-.4h1.42c2.65 0 4.8-2.15 4.8-4.8C18 5.23 14.41 2 10 2zm-4.5 8.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm2.5-3a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm4 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm2.5 3a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
  }));
  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("label", Object.assign({
    className: `${base.ColorBase} ${css$6.LabelStyled} ${addClass}`,
    htmlFor: id,
    styled: styled
  }, args), /*#__PURE__*/React__default.createElement("input", {
    className: css$6.InputAction,
    type: type,
    id: id
  }), type === 'color' ? colorIcon : uploadIcon, label !== '' ? /*#__PURE__*/React__default.createElement("span", null, label) : /*#__PURE__*/React__default.createElement(Fragment$2, null)));
};
InputAction.propTypes = {
  styled: propTypes.oneOf(['primary', 'secondary', 'primary-outline', 'secondary-outline', 'primary-icon', 'secondary-icon', 'primary-icon-outline', 'secondary-icon-outline']),
  type: propTypes.oneOf(['file', 'color']),
  icon: propTypes.string,
  label: propTypes.string,
  onClick: propTypes.func,
  addClass: propTypes.string
};
InputAction.defaultProps = {
  styled: 'primary',
  type: 'file',
  addClass: '',
  onClick: undefined
};

var css$7 = {"InputStyled":"_InputControl-module__InputStyled__1isCe","InputCont":"_InputControl-module__InputCont__1YikN","CheckCont":"_InputControl-module__CheckCont__WN9au","CheckBg":"_InputControl-module__CheckBg__3z4b_","CheckLabel":"_InputControl-module__CheckLabel__10bHL","CheckTrack":"_InputControl-module__CheckTrack__2QBZ5","input-error":"_InputControl-module__input-error__8exJT","input-succes":"_InputControl-module__input-succes__3GadY"};

const InputControl = ({
  type,
  label,
  stateInput,
  name,
  addClass,
  ...args
}) => {
  const [check, setCheck] = useState(false);
  const [getStateIcon, setStateIcon] = useState('');

  const id = uniqueId_1('ui-');

  useEffect(() => {
    function validateIcon(element) {
      if (stateInput) {
        if (stateInput === 'Error') {
          setStateIcon('close');
          element.classList.add(css$7['input-error']);
        } else if (stateInput === 'Succes') {
          setStateIcon('check');
          element.classList.add(css$7['input-succes']);
        } else {
          setStateIcon('check');
        }
      } else {
        setStateIcon('check');
      }
    }

    function initInputIcon() {
      const $contentIcon = document.querySelector(`#${id}Icon`);
      validateIcon($contentIcon);
    }

    initInputIcon();
  });
  return /*#__PURE__*/React__default.createElement("label", Object.assign({
    htmlFor: id,
    className: `${css$7.InputCont} ${addClass}`,
    inputMode: type
  }, args), /*#__PURE__*/React__default.createElement("div", {
    className: css$7.CheckCont,
    inputMode: type
  }, /*#__PURE__*/React__default.createElement("input", {
    className: css$7.InputStyled,
    "data-state": stateInput,
    inputMode: type,
    defaultChecked: check,
    type: type === 'toggle' ? 'checkbox' : type,
    id: id,
    name: name
  }), type === 'toggle' && /*#__PURE__*/React__default.createElement("div", {
    className: css$7.CheckTrack
  }), /*#__PURE__*/React__default.createElement("div", {
    className: css$7.CheckBg,
    inputMode: type,
    onClick: () => setCheck(!check),
    id: `${id}Icon`
  }, type !== 'toggle' && /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: getStateIcon,
    id: `${id}ContentIcon`
  }))), /*#__PURE__*/React__default.createElement("span", {
    className: css$7.CheckLabel
  }, label));
};
InputControl.propTypes = {
  type: propTypes.oneOf(['radio', 'checkbox', 'toggle']),
  stateInput: propTypes.string,
  icon: propTypes.object,
  label: propTypes.string.isRequired,
  onClick: propTypes.func,
  name: propTypes.string,
  addClass: propTypes.string
};
InputControl.defaultProps = {
  label: 'select',
  type: 'radio',
  addClass: '',
  onClick: undefined
};

var css$8 = {"InputCont":"_InputField-module__InputCont__17byX","LabelStyle":"_InputField-module__LabelStyle__2zmtW","InputStyled":"_InputField-module__InputStyled__3_8sU","input-error":"_InputField-module__input-error__23iPI","input-succes":"_InputField-module__input-succes__1r2gj","deactive-border":"_InputField-module__deactive-border__2sE6F"};

const InputField = ({
  type,
  label,
  dataIcon,
  styledInput,
  addClass,
  ...args
}) => {
  const id = uniqueId_1('ui-');

  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState('');
  const [getStateInput, setStateInput] = useState('');
  useEffect(() => {
    function addClass(element, nameClass) {
      element.classList.add(css$8[nameClass]);
    }

    function validateInput(content, input, label) {
      if (getStateInput) {
        if (getStateInput === 'Error') {
          addClass(content, 'deactive-border');
          addClass(input, 'input-error');
          addClass(label, 'label-error');
        }

        if (getStateInput === 'Succes') {
          addClass(content, 'deactive-border');
          addClass(input, 'input-succes');
          addClass(label, 'label-succes');
        }
      } else {
        console.log('default');
      }
    }

    function initInput() {
      setStateInput(styledInput);
      const $content = document.querySelector(`#contentLabel${id}`);
      const $input = document.querySelector(`#${id}`);
      const $label = document.querySelector(`#label-${id}`);
      validateInput($content, $input, $label);
    }

    initInput();
  });

  function handleChange({
    target
  }) {
    setValue(target.value);
  }

  function handleFocus() {
    setIsFocus(!isFocus);
  }

  function handleBlur() {
    setIsFocus(!isFocus);
  }

  return /*#__PURE__*/React__default.createElement("label", Object.assign({
    inputMode: type,
    className: `${css$8.InputCont} ${addClass}`,
    "data-status": isFocus || value !== '' ? 'active' : false,
    id: `contentLabel${id}`,
    "state-input": styledInput
  }, args), dataIcon.state ? /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: dataIcon.nameIcon,
    "state-input": styledInput
  }) : /*#__PURE__*/React__default.createElement(Fragment$2, null), /*#__PURE__*/React__default.createElement("input", {
    className: css$8.InputStyled,
    type: type,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    id: id
  }), type !== 'date' && /*#__PURE__*/React__default.createElement("span", {
    className: css$8.LabelStyle,
    htmlFor: id,
    inputMode: type,
    id: `label-${id}`,
    "state-input": styledInput
  }, label));
};
InputField.propTypes = {
  type: propTypes.oneOf(['text', 'email', 'password', 'date', 'number']),
  label: propTypes.string.isRequired,
  dataIcon: propTypes.object,
  styledInput: propTypes.string,
  addClass: propTypes.string
};
InputField.defaultProps = {
  label: 'Label',
  type: 'text',
  dataIcon: {
    state: false
  },
  addClass: ''
};

var css$9 = {"LinkCont":"_Link-module__LinkCont__2lFDP"};

const Link = ({
  label,
  href,
  icon,
  addClass,
  target
}) => {
  return /*#__PURE__*/React__default.createElement("a", {
    className: `${css$9.LinkCont} ${addClass}`,
    href: href,
    target: target
  }, icon && /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: icon
  }), label);
};
Link.propTypes = {
  label: propTypes.string,
  href: propTypes.string,
  icon: propTypes.string,
  target: propTypes.string,
  addClass: propTypes.string
};
Link.defaultProps = {
  target: '_self',
  addClass: ''
};

var css$a = {"c-aud-btn":"_Multimedia-module__c-aud-btn__a9LbG","c-aud-btn-content":"_Multimedia-module__c-aud-btn-content__2E_hC","c-aud-secundary":"_Multimedia-module__c-aud-secundary__2uPDm"};

function Multimedia({
  url,
  label = 'Reproducir',
  addClass,
  isPrimary = true
}) {
  const playButton = /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    className: "svg-icon",
    focusable: "false"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M8 5v14l11-7z"
  }));
  const pauseButton = /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "48px",
    viewBox: "0 0 24 24",
    width: "48px",
    fill: "#000000",
    "aria-hidden": "true",
    className: "svg-icon",
    focusable: "false"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
  }));
  const [getStateBtnAudio, setStateBtnAudio] = useState(false);
  const [getIcon, setIcon] = useState(playButton);
  const refAudio = createRef();

  function validateStateBtn(element) {
    if (getStateBtnAudio) {
      setStateBtnAudio(false);
      element.pause();
      setIcon(playButton);
      label = 'Reproducir';
    } else {
      setStateBtnAudio(true);
      element.play();
      setIcon(pauseButton);
      label = 'Pausar';
    }
  }

  function handlePlayPause() {
    const $audio = refAudio.current;
    validateStateBtn($audio);
  }

  function handleFinish(e) {
    setStateBtnAudio(false);
    setIcon(playButton);
  }

  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("div", {
    className: `${addClass}`
  }, /*#__PURE__*/React__default.createElement("audio", {
    src: url,
    ref: refAudio,
    onEnded: handleFinish
  }), /*#__PURE__*/React__default.createElement("button", {
    id: "btnAudio",
    onClick: handlePlayPause,
    className: `${css$a['c-aud-btn']} ${isPrimary ? '' : css$a['c-aud-secundary']}`,
    "aria-label": getStateBtnAudio ? 'Pausar' : 'Reproducir'
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$a['c-aud-btn-content'],
    "data-label": label ? 'string' : ''
  }, getIcon))));
}
Multimedia.propTypes = {
  url: propTypes.string.isRequired,
  label: propTypes.string,
  addClass: propTypes.string
};
Multimedia.defaultProps = {
  addClass: ''
};

var css$b = {"Panel":"_Panel-module__Panel__qaB0F","fadeIn":"_Panel-module__fadeIn__23_l4"};

const TabPanel = props => {
  const {
    children,
    value,
    index,
    addClass,
    roleDescription = 'slide',
    ...other
  } = props;
  return /*#__PURE__*/React__default.createElement("div", Object.assign({
    className: `${css$b.Panel} ${addClass}`,
    role: "group",
    hidden: value !== index,
    id: `simple-tabpanel-${index}`,
    "aria-roledescription": roleDescription,
    "aria-labelledby": `simple-tab-${index}`,
    tabIndex: "0"
  }, other), value === index && /*#__PURE__*/React__default.createElement("div", null, children));
};

const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
const speechRecognitionList = new SpeechGrammarList();
const recognition = new SpeechRecognition();
const RecognitionVoice = ({
  setdata,
  validate,
  children: childrenProp,
  disabled: _disabled = '',
  styledButton: _styledButton = 'secondary-icon',
  onRecord
}) => {
  const micOnIcon = /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    className: "svg-icon",
    focusable: "false"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15a.998.998 0 00-.98-.85c-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08a6.993 6.993 0 005.91-5.78c.1-.6-.39-1.14-1-1.14z"
  }));
  const micOffIcon = /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    className: "svg-icon",
    focusable: "false"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M15 10.6V5c0-1.66-1.34-3-3-3-1.54 0-2.79 1.16-2.96 2.65L15 10.6zm3.08.4c-.41 0-.77.3-.83.71-.05.32-.12.64-.22.93l1.27 1.27c.3-.6.52-1.25.63-1.94a.857.857 0 00-.85-.97zM3.71 3.56a.996.996 0 000 1.41L9 10.27v.43c0 1.19.6 2.32 1.63 2.91.75.43 1.41.44 2.02.31l1.66 1.66c-.71.33-1.5.52-2.31.52-2.54 0-4.88-1.77-5.25-4.39a.839.839 0 00-.83-.71c-.52 0-.92.46-.85.97.46 2.96 2.96 5.3 5.93 5.75V20c0 .55.45 1 1 1s1-.45 1-1v-2.28a7.13 7.13 0 002.55-.9l3.49 3.49a.996.996 0 101.41-1.41L5.12 3.56a.996.996 0 00-1.41 0z"
  }));
  const [action, setAction] = useState('record');
  const [diagnostic, setDiagnostic] = useState('');
  let GRAMMAR = `#JSGF V1.0; grammar ; public <command> = ${validate || ''} ;`;
  let transcript;

  recognition.onresult = function ({
    results
  }) {
    transcript = results;
  };

  recognition.onnomatch = function (event) {
    setDiagnostic("I didn't recognise that color.");
  };

  recognition.onerror = function (event) {
    setDiagnostic('Error occurred in recognition: ' + event.error);
  };

  const runSpeechRecognition = () => {
    speechRecognitionList.addFromString(GRAMMAR, 1);
    recognition.grammars = speechRecognitionList;
    recognition.continuous = true;
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    if (action === 'record') {
      recognition.start();
      onRecord && onRecord(true);
      setAction('listening');
    } else {
      onRecord && onRecord(false);
      stopRecording();
    }
  };

  const stopRecording = () => {
    if (transcript) {
      let strText = '';
      transcript = Array.from(transcript);
      transcript.forEach(element => {
        strText += element[0].transcript;
      });
      console.log('DESDE UI', strText);
      setdata && setdata(strText);
    }

    recognition.stop();
    setAction('record');
  };

  useEffect(() => {
    GRAMMAR = `#JSGF V1.0; grammar ; public <command> = ${validate || ''} ;`;
  }, [validate]);
  const children = Children.map(childrenProp, child => {
    if (!isValidElement(child)) {
      return null;
    }

    return React__default.cloneElement(child, {
      children: diagnostic
    });
  });
  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement(Button, {
    type: "button",
    onClick: runSpeechRecognition,
    label: action === 'record' ? 'Realizar grabación' : 'Detener grabación',
    disabled: _disabled,
    styled: _styledButton,
    hasAriaLabel: true
  }, action === 'record' ? micOnIcon : micOffIcon), children && children);
};

var css$c = {"section":"_Section-module__section__Nahni","fadeInDown":"_Section-module__fadeInDown__BDs2n"};

const Section = ({
  children,
  value,
  index,
  label,
  addClass,
  ...other
}) => {
  return /*#__PURE__*/React__default.createElement("section", Object.assign({
    className: `${css$c.section} ${addClass}`,
    role: "tabpanel",
    hidden: value !== index,
    id: `simple-tabpanel-${index}`,
    "aria-labelledby": `simple-tab-${label}`
  }, other), /*#__PURE__*/React__default.createElement("h2", {
    class: "sr-only",
    id: `simple-tab-${label}`
  }, "Secci\xF3n ", label), children);
};

var css$d = {"SelectStyle":"_Select-module__SelectStyle__2NS2Z","SelectContainer":"_Select-module__SelectContainer__3AjWz","SelectAfter":"_Select-module__SelectAfter__2vUqP","SelectWrapper":"_Select-module__SelectWrapper__2BQM5","SelectLabel":"_Select-module__SelectLabel__1YqCo"};

const Select = ({
  placeholder,
  stateInput,
  options,
  addClass,
  isLabelVisible: _isLabelVisible = 'true',
  label,
  ...args
}) => {
  const name = uniqueId_1('ui-name-');

  return /*#__PURE__*/React__default.createElement("label", Object.assign({
    className: `${css$d.SelectWrapper} ${addClass}`,
    "data-state": stateInput
  }, args), /*#__PURE__*/React__default.createElement("span", {
    className: `${css$d['SelectLabel']} ${_isLabelVisible ? '' : 'sr-only'}`
  }, label), /*#__PURE__*/React__default.createElement("div", {
    className: css$d['SelectContainer'],
    "data-state": stateInput
  }, /*#__PURE__*/React__default.createElement("select", {
    defaultValue: "",
    name: name,
    className: css$d.SelectStyle,
    "data-state": stateInput
  }, /*#__PURE__*/React__default.createElement("option", {
    disabled: true,
    value: ""
  }, placeholder), options.map((elem, i) => /*#__PURE__*/React__default.createElement("option", {
    key: i,
    value: i + 1
  }, elem))), /*#__PURE__*/React__default.createElement("div", {
    className: css$d.SelectAfter,
    "data-state": stateInput
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "arrow_drop_down"
  }))));
};
Select.propTypes = {
  placeholder: propTypes.string.isRequired,
  stateInput: propTypes.string,
  options: propTypes.array,
  addClass: propTypes.string
};
Select.defaultProps = {
  placeholder: 'Choose option',
  options: ['Option 1', 'option 2'],
  addClass: '',
  isLabelVisible: false,
  label: 'Selecciona la opción'
};

var css$e = {"TabsBtn":"_Tab-module__TabsBtn__2P1fM","TabsBtnContent":"_Tab-module__TabsBtnContent__293oo","TabsBtnContentLabel":"_Tab-module__TabsBtnContentLabel__h75tA","TabsBtnIndicator":"_Tab-module__TabsBtnIndicator__247Rk","TabsBtnIndicatorContent":"_Tab-module__TabsBtnIndicatorContent__21fWb"};

const Tab = forwardRef(function Tab(props, ref) {
  const {
    classes,
    className,
    disabled = false,
    fullWidth,
    nameIcon,
    positionIcon,
    indicator,
    label,
    onChange,
    onClick,
    onFocus,
    selected,
    selectionFollowsFocus,
    value,
    addClass,
    ...other
  } = props;

  const handleClick = event => {
    if (!selected && onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  const handleFocus = event => {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  return /*#__PURE__*/createElement("button", Object.assign({
    ref: ref,
    role: "tab",
    className: `${css$e.TabsBtn} ${addClass}`,
    "aria-selected": selected,
    disabled: disabled,
    onClick: handleClick,
    onFocus: handleFocus,
    tabIndex: selected ? 0 : -1
  }, other), /*#__PURE__*/createElement("span", {
    className: css$e.TabsBtnContent,
    "position-icon": positionIcon
  }, /*#__PURE__*/createElement(Icon, {
    "aria-hidden": "true",
    nameIcon: nameIcon
  }), ' ', /*#__PURE__*/createElement("span", {
    className: css$e.TabsBtnContentLabel
  }, label), ' '), /*#__PURE__*/createElement("span", {
    className: css$e.TabsBtnIndicator
  }, /*#__PURE__*/createElement("span", {
    className: css$e.TabsBtnIndicatorContent
  })));
});
Tab.propTypes = {
  addClass: propTypes.string
};
Tab.defaultProps = {
  addClass: ''
};

var css$f = {"Typography":"_Text-module__Typography__2s-q8"};

const Text = ({
  type,
  children,
  addClass,
  ...args
}) => {
  const DefaultValue = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle: 'h6',
    caption: 'span',
    p: 'p',
    span: 'span'
  };
  const Component = DefaultValue[type];
  return /*#__PURE__*/React__default.createElement(Component, Object.assign({
    className: `${css$f.Typography} ${addClass}`,
    type: type
  }, args), children);
};
Text.propTypes = {
  type: propTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle', 'caption', 'p', 'span']),
  children: propTypes.node,
  addClass: propTypes.string
};
Text.defaultProps = {
  addClass: ''
};

var css$g = {"TextareaCont":"_Textarea-module__TextareaCont__2hUyD","TextareaItem":"_Textarea-module__TextareaItem__1haMe","CountCont":"_Textarea-module__CountCont__34S0r"};

const Textarea = ({
  id,
  placeholder,
  label,
  isLabelVisible: _isLabelVisible = false,
  rows,
  maxWords,
  addClass
}) => {
  const [Count, SetCount] = useState(0);
  const [MaxLength, SetMaxLength] = useState(10000);

  function HandleChange({
    target
  }) {
    const rgxWords = /\b[^\s\s.\-:;]*/;
    const countWords = target.value === '' ? 0 : target.value.split(rgxWords, Number(maxWords) + 1).length - 1;

    if (countWords === Number(maxWords)) {
      SetMaxLength(target.value.length);
    }

    SetCount(countWords);
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: `${css$g.TextareaCont} ${addClass}`
  }, /*#__PURE__*/React__default.createElement("label", {
    for: id
  }, /*#__PURE__*/React__default.createElement("span", {
    className: _isLabelVisible ? '' : 'sr-only'
  }, label), /*#__PURE__*/React__default.createElement("textarea", {
    className: css$g.TextareaItem,
    rows: rows,
    placeholder: placeholder,
    onKeyPress: HandleChange,
    maxLength: MaxLength,
    id: id
  })), maxWords && /*#__PURE__*/React__default.createElement("span", {
    className: css$g.CountCont
  }, " ", `${Count} / ${maxWords}`, " "));
};
Textarea.propTypes = {
  placeholder: propTypes.string,
  rows: propTypes.string,
  maxWords: propTypes.string,
  addClass: propTypes.string
};
Textarea.defaultProps = {
  placeholder: 'Escribe algo...',
  rows: '10',
  addClass: ''
};

var css$h = {"toggletip-container":"_Toggletip-module__toggletip-container__3Z4HX","toggletip-icon":"_Toggletip-module__toggletip-icon__hQ4M-","toggletip-content":"_Toggletip-module__toggletip-content__2SzZ3"};

const Toggletip = ({
  content
}) => {
  const [toggletipContent, SetToggletipContent] = useState('');

  const changeToggletipContent = () => {
    toggletipContent == '' ? SetToggletipContent(
    /*#__PURE__*/
    React__default.createElement("div", {
      className: css$h['toggletip-content']
    }, content)) : SetToggletipContent('');
  };

  const emptyToggletipContent = () => {
    SetToggletipContent('');
  };

  const emptyToggletipContentOnEsc = e => {
    if ((e.keyCode || e.which) === 27) SetToggletipContent('');
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: css$h['toggletip-container']
  }, /*#__PURE__*/React__default.createElement(Button, {
    hasAriaLabel: "false",
    styled: "primary-icon",
    label: "",
    onClick: changeToggletipContent,
    onBlur: emptyToggletipContent,
    onKeyDown: emptyToggletipContentOnEsc
  }, /*#__PURE__*/React__default.createElement("span", {
    className: css$h['toggletip-icon'],
    "aria-hidden": "true"
  }, "i"), /*#__PURE__*/React__default.createElement("span", {
    class: "sr-only"
  }, "M\xE1s informaci\xF3n")), /*#__PURE__*/React__default.createElement("div", {
    role: "status"
  }, toggletipContent));
};

var css$i = {"TooltipCont":"_Tooltip-module__TooltipCont__2fDQR","TooltipItem":"_Tooltip-module__TooltipItem__3KPt0"};

const Tooltip = ({
  children,
  addClass,
  id,
  content
}) => {
  return /*#__PURE__*/React__default.createElement("div", {
    className: `${css$i.TooltipCont} ${addClass}`
  }, children, /*#__PURE__*/React__default.createElement("div", {
    role: "tooltip",
    className: css$i.TooltipItem,
    id: id
  }, content));
};

var css$j = {"c-vid":"_Video-module__c-vid__2uck7","c-vid-controls":"_Video-module__c-vid-controls__2yF4K","c-vid-controls-text":"_Video-module__c-vid-controls-text__2W8d_","progress-content":"_Video-module__progress-content__29s-a","progress":"_Video-module__progress__2vrVD","progress-bar":"_Video-module__progress-bar__5SxVn","c-vid-controls-volumn":"_Video-module__c-vid-controls-volumn__3e9Q1","c-vid-controls-volumn-item":"_Video-module__c-vid-controls-volumn-item__2YNZg"};

function Video({
  url,
  width,
  addClass
}) {
  const playIcon = /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    className: "svg-icon",
    focusable: "false"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M8 5v14l11-7z"
  }));
  const pauseIcon = /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "48px",
    viewBox: "0 0 24 24",
    width: "48px",
    fill: "#000000",
    "aria-hidden": "true",
    className: "svg-icon",
    focusable: "false"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
  }));
  const fullscreenIcon = /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 24 24",
    focusable: "false",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0H24V24H0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M21 11L21 3 13 3 16.29 6.29 6.29 16.29 3 13 3 21 11 21 7.71 17.71 17.71 7.71z"
  }));
  const closeFullScreenIcon = /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 24 24",
    focusable: "false",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0H24V24H0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M22 3.41L16.71 8.7 20 12h-8V4l3.29 3.29L20.59 2 22 3.41zM3.41 22l5.29-5.29L12 20v-8H4l3.29 3.29L2 20.59 3.41 22z"
  }));
  const [getDurationVideo, setDurationVideo] = useState('00:00');
  const [getCurrentTiem, setCurrentTime] = useState('00:00');
  const [getstateVideoPlay, setStateVideoPlay] = useState({
    state: false,
    icon: playIcon,
    label: 'Reproducir video'
  });
  const [getStateScreen, setStateScreen] = useState({
    state: false,
    icon: fullscreenIcon,
    label: 'Ver en pantalla completa'
  });
  const [getValueVolum, setValueVolumn] = useState(25);
  const refCont = createRef();
  const refVideo = createRef();
  const refProgress = createRef();
  const refProgressBar = createRef();
  const refVolumn = createRef();

  function handlePlay() {
    const $video = refVideo.current;

    if (getstateVideoPlay.state) {
      $video.pause();
      setStateVideoPlay({
        state: false,
        icon: playIcon,
        label: 'Reproducir video'
      });
    } else {
      $video.play();
      setStateVideoPlay({
        state: true,
        icon: pauseIcon,
        label: 'Pausar video'
      });
    }
  }

  function hanldeFullScrenn() {
    const isInFullScreen = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null;
    const docElm = refCont.current;

    if (!isInFullScreen) {
      setStateScreen({
        state: true,
        icon: closeFullScreenIcon,
        label: 'Salir de pantalla completa'
      });

      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
      }
    } else {
      setStateScreen({
        state: false,
        icon: fullscreenIcon,
        label: 'Ver en pantalla completa'
      });

      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }

  function handleBarProgress() {
    const video = refVideo.current;
    const progressElem = refProgressBar.current;
    const porcent = video.currentTime / video.duration * 100;
    progressElem.style.flexBasis = `${porcent}%`;
  }

  function handleTimeProcess() {
    const dataVideo = refVideo.current;
    initialValores(dataVideo);

    function initialValores(element) {
      const durationVideo = hourToString(element.duration);
      const travelVideo = hourToString(element.currentTime);
      setCurrentTime(travelVideo);
      setDurationVideo(durationVideo);
    }

    function hourToString(timeSeconds) {
      const secundsNumber = parseInt(timeSeconds, 10);
      const hours = Math.floor(secundsNumber / 3600);
      const minutes = Math.floor((secundsNumber - hours * 3600) / 60);
      const seconds = secundsNumber - hours * 3600 - minutes * 60;
      const valisateHours = validateIsNan(validateDigits(hours));
      const validateMinutes = validateIsNan(validateDigits(minutes));
      const validateSeconds = validateIsNan(validateDigits(seconds));
      return `${valisateHours}:${validateMinutes}:${validateSeconds}`;
    }

    function validateDigits(value) {
      if (value < 10) {
        return value = '0' + value;
      } else {
        return value;
      }
    }

    function validateIsNan(elem) {
      return isNaN(elem) ? '00' : elem;
    }
  }

  function handleProcessControl(e) {
    const progress = refProgress.current;
    const video = refVideo.current;
    const positionClick = e.nativeEvent.offsetX;
    const scrubTime = positionClick / progress.offsetWidth * video.duration;
    video.currentTime = scrubTime;
  }

  function handleVolumn(e) {
    const video = refVideo.current;
    const value = e.target.value;
    const volume = value / 100;
    setValueVolumn(value);
    video.volume = volume;
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: `${css$j['c-vid']} ${addClass}`,
    ref: refCont,
    style: {
      maxWidth: width,
      minWidth: '320px'
    }
  }, /*#__PURE__*/React__default.createElement("video", {
    ref: refVideo,
    onTimeUpdate: () => {
      handleBarProgress();
      handleTimeProcess();
    }
  }, /*#__PURE__*/React__default.createElement("source", {
    src: url
  })), /*#__PURE__*/React__default.createElement("div", {
    className: css$j['progress-content']
  }, /*#__PURE__*/React__default.createElement("div", {
    ref: refProgress,
    className: css$j.progress,
    onClick: handleProcessControl
  }, /*#__PURE__*/React__default.createElement("div", {
    ref: refProgressBar,
    className: css$j['progress-bar'],
    onChange: handleBarProgress
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: css$j['c-vid-controls']
  }, /*#__PURE__*/React__default.createElement("button", {
    "aria-label": getstateVideoPlay.label,
    onClick: handlePlay
  }, getstateVideoPlay.icon), /*#__PURE__*/React__default.createElement("p", {
    className: css$j['c-vid-controls-text']
  }, /*#__PURE__*/React__default.createElement("span", null, getCurrentTiem), " / ", /*#__PURE__*/React__default.createElement("span", null, getDurationVideo)), /*#__PURE__*/React__default.createElement("div", {
    className: css$j['c-vid-controls-volumn']
  }, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    focusable: "false"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
  })), /*#__PURE__*/React__default.createElement("label", {
    for: "volumeControl"
  }, /*#__PURE__*/React__default.createElement("span", {
    class: "sr-only"
  }, "Controlar volumen"), /*#__PURE__*/React__default.createElement("input", {
    className: css$j['c-vid-controls-volumn-item'],
    ref: refVolumn,
    id: "volumeControl",
    type: "range",
    min: "0",
    max: "100",
    step: "5",
    value: getValueVolum,
    onChange: handleVolumn,
    "aria-valuetext": `${getValueVolum}%`
  }))), /*#__PURE__*/React__default.createElement("button", {
    "aria-label": getStateScreen.label,
    onClick: hanldeFullScrenn
  }, getStateScreen.icon)));
}
Video.propTypes = {
  url: propTypes.string.isRequired,
  width: propTypes.string,
  addClass: propTypes.string
};
Video.defaultProps = {
  addClass: ''
};

var css$k = {"c-side":"_AsideNav-module__c-side__3jq03","c-side-nav":"_AsideNav-module__c-side-nav__ORlc2","c-side-nav-item":"_AsideNav-module__c-side-nav-item__2VUuV","c-overlay":"_AsideNav-module__c-overlay__1ZsvR","position-left":"_AsideNav-module__position-left__2dAro","aside--active--left":"_AsideNav-module__aside--active--left__3yTuc","position-right":"_AsideNav-module__position-right__2GOdp","aside--active--right":"_AsideNav-module__aside--active--right__28cLO","overlay--active":"_AsideNav-module__overlay--active__IKRE0"};

const AsideNav = ({
  children,
  dataButton,
  content,
  location
}) => {
  const [getStateAside, setStateAside] = useState(false);
  const [getLocationAside, setLocationAside] = useState('');
  const refModal = createRef();
  const refOverlay = createRef();
  useEffect(() => {
    const $aside = refModal.current;

    function locationAside() {
      if (location === 'right') {
        setLocationAside('aside--active--right');
        $aside.classList.add(css$k['position-right']);
      } else {
        setLocationAside('aside--active--left');
        $aside.classList.add(css$k['position-left']);
      }
    }

    locationAside();
  });

  function stateAside(elementModal, elementOverlay) {
    if (getStateAside) {
      elementModal.classList.remove(css$k[getLocationAside]);
      elementOverlay.classList.remove(css$k['overlay--active']);
      setStateAside(false);
    } else {
      elementModal.classList.add(css$k[getLocationAside]);
      elementOverlay.classList.add(css$k['overlay--active']);
      setStateAside(true);
    }
  }

  function handleAside() {
    const $aside = refModal.current;
    const $overlay = refOverlay.current;
    stateAside($aside, $overlay);
  }

  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("div", {
    ref: refOverlay,
    className: `${css$k['c-overlay']} ui-overlay`,
    id: "overlay"
  }), /*#__PURE__*/React__default.createElement("div", {
    ref: refModal,
    className: `${css$k['c-side']} ui-aside`,
    id: "aside"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "close",
    onClick: handleAside,
    style: {
      cursor: 'pointer'
    }
  }), children || /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("h2", null, content.title), /*#__PURE__*/React__default.createElement("ul", {
    className: `${css$k['c-side-nav']} ui-aside-nav`
  }, content.list.map((item, index) => /*#__PURE__*/React__default.createElement("li", {
    className: `${css$k['c-side-nav-item']} ui-aside-nav-item`,
    key: index
  }, item))))), /*#__PURE__*/React__default.createElement(Button, {
    label: dataButton.label,
    styled: dataButton.styled,
    onClick: handleAside
  }));
};
AsideNav.propTypes = {
  children: propTypes.element,
  dataButton: propTypes.object,
  content: propTypes.object,
  location: propTypes.string
};
AsideNav.defaultProps = {
  dataButton: {
    label: 'Side nav',
    styled: 'primary'
  },
  content: {
    title: 'Aside Nav',
    list: ['Options']
  },
  location: 'left'
};

var css$l = {"AsideSection":"_AsideSection-module__AsideSection__37BVW"};

const AsideSection = forwardRef(function Tabs(props, ref) {
  const {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    action,
    children: childrenProp,
    classes,
    className,
    component: Component = 'div',
    onChange,
    orientation = 'horizontal',
    selectionFollowsFocus,
    TabScrollButtonProps,
    value,
    labelName = 'Lista de secciones',
    ...other
  } = props;
  const valueToIndex = new Map();
  const tabsRef = React__default.useRef(null);
  const tabListRef = React__default.useRef(null);
  let childIndex = 0;
  const children = React__default.Children.map(childrenProp, child => {
    if (!React__default.isValidElement(child)) {
      return null;
    }

    const childValue = child.props.value === undefined ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    const selected = childValue === value;
    childIndex += 1;
    return React__default.cloneElement(child, {
      selected,
      selectionFollowsFocus,
      onChange,
      value: childValue,
      ...(childIndex === 1 && value === false && !child.props.tabIndex ? {
        tabIndex: 0
      } : {})
    });
  });

  const handleKeyDown = event => {
    const {
      target
    } = event;
    const role = target.getAttribute('role');

    if (role !== 'tab') {
      return;
    }

    let newFocusTarget = null;
    const previousItemKey = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';
    const nextItemKey = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';

    switch (event.key) {
      case previousItemKey:
        newFocusTarget = target.previousElementSibling || tabListRef.current.lastChild;
        break;

      case nextItemKey:
        newFocusTarget = target.nextElementSibling || tabListRef.current.firstChild;
        break;

      case 'Home':
        newFocusTarget = tabListRef.current.firstChild;
        break;

      case 'End':
        newFocusTarget = tabListRef.current.lastChild;
        break;
    }

    if (newFocusTarget !== null) {
      newFocusTarget.focus();
      event.preventDefault();
    }
  };

  return /*#__PURE__*/React__default.createElement(Component, Object.assign({
    className: "ui-Tabs-cont",
    ref: ref
  }, other), /*#__PURE__*/React__default.createElement("div", {
    ref: tabsRef
  }, /*#__PURE__*/React__default.createElement("h2", {
    class: "sr-only",
    id: "section-list"
  }, labelName), /*#__PURE__*/React__default.createElement("ul", {
    className: css$l.AsideSection,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-orientation": orientation === 'vertical' ? 'vertical' : null,
    onKeyDown: handleKeyDown,
    ref: tabListRef,
    role: "tablist",
    "aria-labelledby": "section-list"
  }, children)));
});

var css$m = {"u-text":"_Card-module__u-text__16nIh","c-card":"_Card-module__c-card__1iLqk","c-card-image":"_Card-module__c-card-image__2zNmo","c-card-container":"_Card-module__c-card-container__1Z4zT"};

const Card = ({
  width,
  image,
  content,
  supportingText,
  buttons
}) => {
  return /*#__PURE__*/React__default.createElement("div", {
    className: `${css$m['c-card']} ui-card`,
    style: {
      width: width
    }
  }, image.state ? /*#__PURE__*/React__default.createElement("figure", {
    className: `${css$m['c-card-image']} ui-card-img`
  }, /*#__PURE__*/React__default.createElement("img", {
    src: image.url,
    alt: image.alt
  })) : /*#__PURE__*/React__default.createElement(Fragment$2, null), /*#__PURE__*/React__default.createElement("div", {
    className: `${css$m['c-card-container']} ui-card-container`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "c-card-container-title"
  }, /*#__PURE__*/React__default.createElement("h3", null, content.title), /*#__PURE__*/React__default.createElement("p", {
    className: `${css$m['u-text']} ui-text`
  }, content.text)), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("p", {
    className: `${css$m['u-text']} ui-text-two`
  }, supportingText)), buttons.state ? /*#__PURE__*/React__default.createElement("div", {
    className: "c-card-container-buttons"
  }, /*#__PURE__*/React__default.createElement(Button, {
    label: buttons.first.label,
    styled: buttons.first.theme,
    icon: buttons.first.icon
  }), /*#__PURE__*/React__default.createElement(Button, {
    label: buttons.secundary.label,
    styled: buttons.secundary.theme,
    icon: buttons.secundary.icon
  })) : /*#__PURE__*/React__default.createElement(Fragment$2, null)));
};
Card.propTypes = {
  width: propTypes.string,
  image: propTypes.object,
  content: propTypes.object,
  supportingText: propTypes.string,
  buttons: propTypes.object
};
Card.defaultProps = {
  width: '100%',
  image: {
    state: false
  },
  content: {
    title: 'Card Title',
    text: 'Secondary Text'
  },
  buttons: {
    state: false
  }
};

var css$n = {"draggable-video-container":"_DraggableVideo-module__draggable-video-container__1ZTow","draggable-video-button":"_DraggableVideo-module__draggable-video-button__EoBr8"};

const DraggableVideo = ({
  url,
  width
}) => {
  const dragButton = useRef();
  useEffect(() => {
    dragButton.current.onmousedown = function (event) {
      const currentParent = dragButton.current.parentElement;
      const parent = event.target.parentElement;
      let shiftX = event.clientX - currentParent.getBoundingClientRect().left;
      let shiftY = event.clientY - currentParent.getBoundingClientRect().top;
      currentParent.style.position = 'absolute';
      currentParent.style.zIndex = 5;
      document.body.append(currentParent);
      moveAt(parent.pageX, parent.pageY);

      function moveAt(pageX, pageY) {
        currentParent.style.left = pageX - shiftX + 'px';
        currentParent.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      document.addEventListener('mousemove', onMouseMove);

      currentParent.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        dragButton.current.onmouseup = null;
      };
    };

    dragButton.current.parentElement.ondragstart = function () {
      return false;
    };
  }, [dragButton.current]);
  return /*#__PURE__*/React__default.createElement("span", {
    className: `${css$n['draggable-video-container']}`,
    draggable: true
  }, /*#__PURE__*/React__default.createElement("button", {
    className: `${css$n['draggable-video-button']}`,
    ref: dragButton
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "open_with"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "sr-only"
  }, "Mover en la pantalla")), /*#__PURE__*/React__default.createElement(Video, {
    url: url,
    width: width
  }));
};

var css$o = {"c-collapsible":"_Dropable-module__c-collapsible__3W_Aj"};

const Accordion = ({
  content,
  width,
  backgroundColor,
  color
}) => {
  const [getStateList, setStateList] = useState(null);
  const [getStateIcon, setStateIcon] = useState('');
  const style = {
    backgroundColor: backgroundColor,
    color: color
  };

  return /*#__PURE__*/React__default.createElement("ul", {
    className: `${css$o['c-collapsible']} ui-collapsible`,
    style: {
      width: width
    }
  }, content.map((item, index) => /*#__PURE__*/React__default.createElement("li", {
    className: `${css$o['c-collapsible-container']} ui-collapsible-container`,
    key: index,
    style: style
  }, /*#__PURE__*/React__default.createElement(AccordionItem, {
    item: item,
    index: index,
    stateIcon: getStateIcon === `body${index}` ? 'expand_less' : 'expand_more',
    addClass: "prb"
  }))));
};
Accordion.propTypes = {
  content: propTypes.array,
  backgroundColor: propTypes.string,
  color: propTypes.string,
  width: propTypes.string
};
Accordion.defaultProps = {
  content: [{
    title: 'Location',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, tenetur pariatur a exercitationem ab cumque est necessitatibus fuga tempore ipsum vitae dolores impedit quae!',
    dataIcon: 'close'
  }]
};

function Graphics({
  width,
  height,
  chartType,
  data,
  options,
  props
}) {
  return /*#__PURE__*/React__default.createElement(Chart, Object.assign({
    width: width,
    height: height,
    chartType: chartType,
    loader: /*#__PURE__*/React__default.createElement("div", null, "Cargando..."),
    data: data,
    options: options
  }, props, {
    legendToggle: true
  }));
}
Graphics.propTypes = {
  width: propTypes.string.isRequired,
  height: propTypes.string.isRequired,
  chartType: propTypes.string.isRequired,
  data: propTypes.array.isRequired,
  options: propTypes.object.isRequired
};

var css$p = {"c-modal":"_Modal-module__c-modal__6eOcM","c-modal-overlay":"_Modal-module__c-modal-overlay__1q2aa","c-modal__close-button":"_Modal-module__c-modal__close-button___SM4G","overlay--active":"_Modal-module__overlay--active__20Zpv","modal--active":"_Modal-module__modal--active__2MLWh"};

const Modal = ({
  children,
  dataButton,
  title,
  text
}) => {
  const [getModal, setModal] = useState(false);
  const refModal = createRef();
  const refOverlay = createRef();
  const modalIcon = /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    className: "svg-icon",
    focusable: "false"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"
  }));

  function stateModal(elementModal, elementOverlay) {
    if (getModal) {
      elementModal.classList.remove(css$p['modal--active']);
      elementOverlay.classList.remove(css$p['overlay--active']);
      setModal(false);
    } else {
      elementModal.classList.add(css$p['modal--active']);
      elementOverlay.classList.add(css$p['overlay--active']);
      setModal(true);
    }
  }

  function closeModal(elementModal, elementOverlay) {
    elementModal.classList.remove(css$p['modal--active']);
    elementOverlay.classList.remove(css$p['overlay--active']);
    setModal(false);
  }

  function handleModal() {
    const $modal = refModal.current;
    const $overlay = refOverlay.current;
    stateModal($modal, $overlay);
  }

  function closeModalOnEsc(e) {
    if ((e.keyCode || e.which) === 27) {
      const $modal = refModal.current;
      const $overlay = refOverlay.current;
      closeModal($modal, $overlay);
    }
  }

  useEffect(() => {
    if (setModal) {
      document.addEventListener('keydown', closeModalOnEsc);
    } else {
      document.removeEventListener('keydown', closeModalOnEsc, false);
    }
  }, [getModal]);
  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement(Button, {
    label: dataButton.label,
    styled: dataButton.styled,
    onClick: handleModal,
    icon: modalIcon,
    hasAriaLabel: dataButton.hasAriaLabel
  }), /*#__PURE__*/React__default.createElement("div", {
    ref: refOverlay,
    className: `${css$p['c-modal-overlay']} ui-modal-overlay`,
    id: "overlay",
    onClick: handleModal
  }), /*#__PURE__*/React__default.createElement("div", {
    role: "dialog",
    ref: refModal,
    className: `${css$p['c-modal']} ui-modal`,
    id: "modal"
  }, children || /*#__PURE__*/React__default.createElement("div", {
    className: "ui-modal-content"
  }, /*#__PURE__*/React__default.createElement("h3", null, " ", title, " "), /*#__PURE__*/React__default.createElement("p", null, " ", text, " ")), /*#__PURE__*/React__default.createElement("button", {
    className: `${css$p['c-modal__close-button']}`,
    onClick: handleModal,
    style: {
      cursor: 'pointer'
    },
    onKeyDown: closeModalOnEsc
  }, /*#__PURE__*/React__default.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"), /*#__PURE__*/React__default.createElement("span", {
    className: "sr-only"
  }, "Cerrar modal"))));
};
Modal.propTypes = {
  title: propTypes.string,
  text: propTypes.string,
  children: propTypes.element,
  dataButton: propTypes.object
};
Modal.defaultProps = {
  dataButton: {
    label: 'modal',
    stylde: 'primary'
  },
  title: 'Titulo',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, tenetur pariatur a exercitationem ab cumque est necessitatibus fuga tempore ipsum vitae dolores impedit quae!'
};

var cssNavbar = {"menuContainer":"_NavBar-module__menuContainer__1O8g7","ulMenu":"_NavBar-module__ulMenu__3GtQQ","styleBtn":"_NavBar-module__styleBtn__8TzwT","styleUlMenu":"_NavBar-module__styleUlMenu__1J1dN","styleUlAcc":"_NavBar-module__styleUlAcc__2luFu","styleUlHelp":"_NavBar-module__styleUlHelp__3J7fz","styleLi":"_NavBar-module__styleLi__2FQig","stylelinks":"_NavBar-module__stylelinks__1-rcw","styleLink":"_NavBar-module__styleLink__uX2AO","styleNumber":"_NavBar-module__styleNumber__6Gdkr","styleSubLi":"_NavBar-module__styleSubLi__1t9Uz","styleBtns":"_NavBar-module__styleBtns__pyjf0","segundoMenu":"_NavBar-module__segundoMenu__3okIe","positionUlRelative":"_NavBar-module__positionUlRelative__MrthX","spanText":"_NavBar-module__spanText__o6aML","iconRight":"_NavBar-module__iconRight__pORcv"};

function NavBar({
  contentOva,
  hrefInicio = '#'
}) {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [dropdownAcc, setDropdownAcc] = useState(false);
  const [dropdownHelp, setDropdownHelp] = useState(false);
  const svgMenu = /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 24 24"
  }, ' ', /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), ' ', /*#__PURE__*/React__default.createElement("path", {
    d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
  }), ' ');
  const svgInicio = /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
  }));
  const svgAccesibility = /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
  }));
  const svgHelp = /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
  }));
  const content = [{
    name: 'primero',
    url: '#'
  }, {
    name: 'segundo',
    url: '#'
  }, {
    name: 'tercero',
    url: '#'
  }, {
    name: 'cuarto',
    url: '#'
  }, {
    name: 'quinto',
    url: '#'
  }].map((enlaces, i) => {
    if (i < 9) {
      return /*#__PURE__*/React__default.createElement("li", {
        className: cssNavbar['styleLi']
      }, /*#__PURE__*/React__default.createElement("a", {
        href: enlaces.url,
        className: cssNavbar['stylelinks']
      }, /*#__PURE__*/React__default.createElement("span", {
        className: cssNavbar['styleNumber']
      }, `0${i + 1}.`, " "), enlaces.name));
    } else {
      return /*#__PURE__*/React__default.createElement("li", {
        className: cssNavbar['styleLi']
      }, /*#__PURE__*/React__default.createElement("a", {
        href: enlaces.url,
        className: cssNavbar['stylelinks']
      }, /*#__PURE__*/React__default.createElement("span", {
        className: cssNavbar['styleNumber']
      }, `${i + 1}.`, " "), enlaces.name));
    }
  });

  const handleClickDropdown = (state, setState) => {
    setDropdownMenu(false);
    setDropdownAcc(false);
    setDropdownHelp(false);
    setState(!state);
  };

  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("nav", {
    className: cssNavbar['menuContainer'],
    "aria-label": "menu principal"
  }, /*#__PURE__*/React__default.createElement("ul", {
    role: "list",
    className: cssNavbar['ulMenu']
  }, /*#__PURE__*/React__default.createElement("li", {
    onClick: () => {
      handleClickDropdown(dropdownMenu, setDropdownMenu);
    }
  }, /*#__PURE__*/React__default.createElement(Dropdown, {
    label: "Menu",
    svgHide: "true",
    icon: svgMenu,
    addClass: cssNavbar['styleBtn'],
    ulClass: cssNavbar['styleUlMenu'],
    isExpanded: dropdownMenu,
    fnMenuExpanded: setDropdownMenu
  }, content)), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement(Link, {
    label: "Inicio",
    icon: svgInicio,
    addClass: cssNavbar['styleLink'],
    href: hrefInicio
  })), /*#__PURE__*/React__default.createElement("li", {
    onClick: () => {
      handleClickDropdown(dropdownAcc, setDropdownAcc);
    }
  }, /*#__PURE__*/React__default.createElement(Dropdown, {
    label: "Accesibilidad",
    svgHide: "true",
    icon: svgAccesibility,
    addClass: cssNavbar['styleBtn'],
    ulClass: cssNavbar['styleUlAcc'],
    isExpanded: dropdownAcc,
    fnMenuExpanded: setDropdownAcc
  }, /*#__PURE__*/React__default.createElement("li", {
    className: cssNavbar['styleLi']
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    "aria-hidden": "true",
    className: "Icon_Icon__1siX0 "
  }, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    focusable: "false"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55A3.999 3.999 0 0021 18h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9a2.5 2.5 0 005 0 2.5 2.5 0 00-5 0z"
  }))), /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Asistencia"), /*#__PURE__*/React__default.createElement("span", {
    "aria-hidden": "true",
    className: `${'Icon_Icon__1siX0'} ${cssNavbar.iconRight}`
  }, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    focusable: "false"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
  })))), /*#__PURE__*/React__default.createElement("ul", {
    className: `${cssNavbar.segundoMenu} ${cssNavbar.positionUlRelative}`
  }, /*#__PURE__*/React__default.createElement("li", {
    className: `${cssNavbar.styleSubLi}`
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "disableHelp",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Deshabilitar ayuda"))), /*#__PURE__*/React__default.createElement("li", {
    className: `${cssNavbar.styleSubLi}`
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "ActivateInterpreter",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Activar int\xE9rprete"))), /*#__PURE__*/React__default.createElement("li", {
    className: `${cssNavbar.styleSubLi}`
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "activateAudio",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Activar audio"))))), /*#__PURE__*/React__default.createElement("li", {
    className: cssNavbar['styleLi']
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "Icon_Icon__1siX0 "
  }, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M7 16c.55 0 1 .45 1 1 0 1.1-.9 2-2 2-.17 0-.33-.02-.5-.05.31-.55.5-1.21.5-1.95 0-.55.45-1 1-1M18.67 3c-.26 0-.51.1-.71.29L9 12.25 11.75 15l8.96-8.96a.996.996 0 000-1.41l-1.34-1.34c-.2-.2-.45-.29-.7-.29zM7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3z"
  }))), /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Contraste"), /*#__PURE__*/React__default.createElement("span", {
    className: `${'Icon_Icon__1siX0'} ${cssNavbar.iconRight}`
  }, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
  })))), /*#__PURE__*/React__default.createElement("ul", {
    className: `${cssNavbar.segundoMenu} ${cssNavbar.positionUlRelative}`
  }, /*#__PURE__*/React__default.createElement("li", {
    className: `${cssNavbar.styleSubLi}`
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "noTheme",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Sin tema"))), /*#__PURE__*/React__default.createElement("li", {
    className: `${cssNavbar.styleSubLi}`
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "noTheme",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Alto contraste"))), /*#__PURE__*/React__default.createElement("li", {
    className: `${cssNavbar.styleSubLi}`
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "noTheme",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Invertir colores"))), /*#__PURE__*/React__default.createElement("li", {
    className: `${cssNavbar.styleSubLi}`
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "noTheme",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Amarillo sobre negro"))), /*#__PURE__*/React__default.createElement("li", {
    className: `${cssNavbar.styleSubLi}`
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "noTheme",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Blanco sobre rojo"))), /*#__PURE__*/React__default.createElement("li", {
    className: `${cssNavbar.styleSubLi}`
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "noTheme",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Verde sobre azul"))), /*#__PURE__*/React__default.createElement("li", {
    className: `${cssNavbar.styleSubLi}`
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "noTheme",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Amarillo sobre azul"))), /*#__PURE__*/React__default.createElement("li", {
    className: `${cssNavbar.styleSubLi}`
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "noTheme",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Blaco sobre negro"))))), /*#__PURE__*/React__default.createElement("li", {
    className: cssNavbar['styleLi']
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "Icon_Icon__1siX0 "
  }, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"
  }))), /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Tama\xF1o de letra"), /*#__PURE__*/React__default.createElement("span", {
    className: `${'Icon_Icon__1siX0'} ${cssNavbar.iconRight}`
  }, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
  })))), /*#__PURE__*/React__default.createElement("ul", {
    className: `${cssNavbar.segundoMenu} ${cssNavbar.positionUlRelative}`
  }, /*#__PURE__*/React__default.createElement("li", {
    className: `${cssNavbar.styleSubLi}`
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "fontZise1",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Tama\xF1o de letra 1"))), /*#__PURE__*/React__default.createElement("li", {
    className: `${cssNavbar.styleSubLi}`
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "fontZise2",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Tama\xF1o de letra 2"))), /*#__PURE__*/React__default.createElement("li", {
    className: `${cssNavbar.styleSubLi}`
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "fontZise3",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Tama\xF1o de letra 3"))))), /*#__PURE__*/React__default.createElement("li", {
    className: cssNavbar['styleLi']
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "nightMode",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "Icon_Icon__1siX0 "
  }, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z"
  }))), /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Modo Nocturno"))))), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("li", {
    onClick: () => {
      handleClickDropdown(dropdownHelp, setDropdownHelp);
    }
  }, /*#__PURE__*/React__default.createElement(Dropdown, {
    label: "Ayuda",
    svgHide: "true",
    icon: svgHelp,
    addClass: cssNavbar['styleBtn'],
    ulClass: cssNavbar['styleUlAcc'],
    isExpanded: dropdownHelp,
    fnMenuExpanded: setDropdownHelp
  }, /*#__PURE__*/React__default.createElement("li", {
    className: cssNavbar['styleLi']
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "Icon_Icon__1siX0 "
  }, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"
  }))), /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Bibliografia"))), /*#__PURE__*/React__default.createElement("li", {
    className: cssNavbar['styleLi']
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "Icon_Icon__1siX0 "
  }, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"
  }))), /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Cr\xE9ditos"))), /*#__PURE__*/React__default.createElement("li", {
    className: cssNavbar['styleLi']
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "Icon_Icon__1siX0 "
  }, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0zm0 0h24v24H0V0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M20 7v10H4V7h16m0-2H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2zm0 3h2v2h-2zM8 8h2v2H8zm0 3h2v2H8zm-3 0h2v2H5zm0-3h2v2H5zm3 6h8v2H8zm6-3h2v2h-2zm0-3h2v2h-2zm3 3h2v2h-2zm0-3h2v2h-2z"
  }))), /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Atajos de teclado"))), /*#__PURE__*/React__default.createElement("li", {
    className: cssNavbar['styleLi']
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "Icon_Icon__1siX0 "
  }, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
  }))), /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Tour"))), /*#__PURE__*/React__default.createElement("li", {
    className: cssNavbar['styleLi']
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "Icon_Icon__1siX0 "
  }, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
  }))), /*#__PURE__*/React__default.createElement("span", {
    className: `${cssNavbar.spanText}`
  }, "Especificaciones t\xE9cnicas")))))))));
}

var css$q = {"table":"_Table-module__table__3LoBn","table-content":"_Table-module__table-content__1W60s","table-content-item":"_Table-module__table-content-item__27m22","body-content":"_Table-module__body-content__2OoWj"};

function Table({
  headLabels,
  bodyContent
}) {
  const rowContent = item => {
    return item.campoType === 'icon' ? /*#__PURE__*/React__default.createElement(Icon, {
      nameIcon: item.label
    }) : item.campoType === 'input' ? /*#__PURE__*/React__default.createElement(InputControl, {
      type: item.type,
      label: item.label,
      name: item.name
    }) : /*#__PURE__*/React__default.createElement("span", null, item.label);
  };

  return /*#__PURE__*/React__default.createElement("table", {
    className: `${css$q.table} ui-table`
  }, /*#__PURE__*/React__default.createElement("thead", null, /*#__PURE__*/React__default.createElement("tr", {
    className: `${css$q['table-content']} ui-table-content`
  }, headLabels.map((item, index) => /*#__PURE__*/React__default.createElement("th", {
    key: index,
    className: `${css$q['table-content-item']} ui-table-content-item`,
    scope: "col"
  }, item)))), /*#__PURE__*/React__default.createElement("tbody", null, bodyContent.map((content, index) => /*#__PURE__*/React__default.createElement("tr", {
    key: `content${index}`,
    className: `${css$q['table-content']} ${css$q['body-content']} ui-body-content`
  }, content.map((item, i) => /*#__PURE__*/React__default.createElement(Fragment, null, item.isRowHeader ? /*#__PURE__*/React__default.createElement("th", {
    key: `item${i}`,
    className: `${css$q['table-content-item']} ui-body-content-item`,
    scope: "row"
  }, rowContent(item)) : /*#__PURE__*/React__default.createElement("td", {
    key: `item${i}`,
    className: `${css$q['table-content-item']} ui-body-content-item`
  }, rowContent(item))))))));
}
Table.propTypes = {
  headLabels: propTypes.array,
  bodycontent: propTypes.array
};
Table.defaultProps = {
  headLabels: ['head1', 'head2'],
  bodyContent: [['Cell a1', 'Cell a2'], ['Cell b2', 'Cell b2']]
};

var css$r = {"c-scroll":"_TableGrid-module__c-scroll__2NOnb","c-gridTable":"_TableGrid-module__c-gridTable__37ybX","c-gridTable-head":"_TableGrid-module__c-gridTable-head__2mWnf","c-gridTable-body":"_TableGrid-module__c-gridTable-body__2IfP0","c-gridTable-body-item":"_TableGrid-module__c-gridTable-body-item__153aW","c-gridTable-head-item":"_TableGrid-module__c-gridTable-head-item__CzEks"};

function TableGrid({
  headContent,
  bodyContent,
  gridColumn
}) {
  console.log(bodyContent);
  return /*#__PURE__*/React__default.createElement("div", {
    className: `${css$r['c-scroll']} ui-scroll`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${css$r['c-gridTable']} ui-gridTable`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${css$r['c-gridTable-head']} ui-gridTable-head`,
    style: gridColumn
  }, headContent.map((item, index) => /*#__PURE__*/React__default.createElement("div", {
    className: `${css$r['c-gridTable-head-item']} ui-gridTable-head-item`,
    key: `head-${index}`
  }, item.type === 'icon' ? /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: item.label,
    addClass: item.addClass
  }) : /*#__PURE__*/React__default.createElement("span", null, item.label)))), /*#__PURE__*/React__default.createElement("div", {
    className: `${css$r['c-gridTable-body']} ui-gridTable-body`,
    style: gridColumn
  }, bodyContent.map(data => data.map((buttom, index) => /*#__PURE__*/React__default.createElement("div", {
    className: `${css$r['c-gridTable-body-item']} ui-gridTable-body-item`,
    key: `body-${index}`
  }, buttom))))));
}
TableGrid.propTypes = {
  headContent: propTypes.array,
  bodyContent: propTypes.array
};
TableGrid.defaultProps = {
  headContent: [],
  bodyContent: []
};

var css$s = {"TabsBar":"_Tabs-module__TabsBar__3ZvuE","TabsCont":"_Tabs-module__TabsCont__1Zp4v","TabsScroll":"_Tabs-module__TabsScroll__3KvVr","TabsArea":"_Tabs-module__TabsArea__2je_1","TabsContent":"_Tabs-module__TabsContent__3EyBN"};

const Tabs = forwardRef(function Tabs(props, ref) {
  const {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    action,
    children: childrenProp,
    classes,
    className,
    component: Component = 'div',
    onChange,
    orientation = 'horizontal',
    selectionFollowsFocus,
    TabScrollButtonProps,
    value,
    ...other
  } = props;
  const valueToIndex = new Map();
  const tabsRef = useRef(null);
  const tabListRef = useRef(null);
  let childIndex = 0;
  const children = Children.map(childrenProp, child => {
    if (!isValidElement(child)) {
      return null;
    }

    const childValue = child.props.value === undefined ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    const selected = childValue === value;
    childIndex += 1;
    return cloneElement(child, {
      selected,
      selectionFollowsFocus,
      onChange,
      value: childValue,
      ...(childIndex === 1 && value === false && !child.props.tabIndex ? {
        tabIndex: 0
      } : {})
    });
  });
  console.log('🚀 ~ file: index.js ~ line 47 ~ children ~ childrenProp', childrenProp);

  const handleKeyDown = event => {
    const {
      target
    } = event;
    const role = target.getAttribute('role');

    if (role !== 'tab') {
      return;
    }

    let newFocusTarget = null;
    const previousItemKey = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';
    const nextItemKey = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';

    switch (event.key) {
      case previousItemKey:
        newFocusTarget = target.previousElementSibling || tabListRef.current.lastChild;
        break;

      case nextItemKey:
        newFocusTarget = target.nextElementSibling || tabListRef.current.firstChild;
        break;

      case 'Home':
        newFocusTarget = tabListRef.current.firstChild;
        break;

      case 'End':
        newFocusTarget = tabListRef.current.lastChild;
        break;
    }

    if (newFocusTarget !== null) {
      newFocusTarget.focus();
      event.preventDefault();
    }
  };

  return /*#__PURE__*/createElement(Component, Object.assign({
    className: `${css$s.TabsCont} ui-Tabs-cont`,
    ref: ref
  }, other), /*#__PURE__*/createElement("div", {
    ref: tabsRef
  }, /*#__PURE__*/createElement("div", {
    className: `${css$s.TabsArea} ui-tabs-area`,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-orientation": orientation === 'vertical' ? 'vertical' : null,
    onKeyDown: handleKeyDown,
    ref: tabListRef,
    role: "tablist"
  }, children)));
});

var css$t = {"carrousel":"_Carrousel-module__carrousel__1rlBL","carrouselInner":"_Carrousel-module__carrouselInner__1YPPV","carrouselItem":"_Carrousel-module__carrouselItem__3pMEX","carrouselButtonContainer":"_Carrousel-module__carrouselButtonContainer__DZmRD","carrouselControlPrev":"_Carrousel-module__carrouselControlPrev__1_yGr","carrouselControlNext":"_Carrousel-module__carrouselControlNext__YRcDS","carrouselControlNextIcon":"_Carrousel-module__carrouselControlNextIcon__1tZ89"};

const Carrousel = ({
  children: childrenProp
}, {
  roleDescription: _roleDescription = 'Slider',
  type: _type = 'Slide'
}) => {
  const [Value, SetValue] = useState(0);
  const refCont = createRef();
  const refPrev = createRef();
  const refNext = createRef();
  let childIndex = 0;
  const backButton = /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    focusable: "false",
    className: "svg-icon"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
  }));
  const nextButton = /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    focusable: "false",
    className: "svg-icon"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
  }));

  function handleClick({
    target
  }) {
    const dataValue = target.dataset.slide;
    const contChild = [...refCont.current.children];
    let getValue = Value;

    if (dataValue === 'prev') {
      getValue--;

      if (getValue < 0) {
        getValue = 0;
      }

      SetValue(getValue);
    } else if (dataValue === 'next') {
      getValue++;

      if (getValue >= contChild.length - 1) {
        getValue = contChild.length - 1;
      }

      SetValue(getValue);
    }

    if (getValue === 0) {
      refPrev.current.setAttribute('disabled', 'true');
    } else if (getValue === contChild.length - 1) {
      refNext.current.setAttribute('disabled', 'true');
    } else {
      refPrev.current.removeAttribute('disabled');
      refNext.current.removeAttribute('disabled');
    }
  }

  const children = React__default.Children.map(childrenProp, child => {
    if (!React__default.isValidElement(child)) {
      return null;
    }

    const childValue = child.props.value === undefined ? childIndex : child.props.value;
    childIndex += 1;
    return React__default.cloneElement(child, {
      index: childValue,
      value: Value
    });
  });
  return /*#__PURE__*/React__default.createElement("div", {
    id: "carouselExampleControls",
    className: `${css$t.carrousel} ${css$t.slide} iu-slider`,
    "data-ride": "carousel"
  }, /*#__PURE__*/React__default.createElement("div", {
    ref: refCont,
    className: `${css$t.carrouselInner} ui-carrusel-inner`,
    role: "group",
    "aria-roledescription": _roleDescription
  }, children), /*#__PURE__*/React__default.createElement("div", {
    className: `${css$t.carrouselButtonContainer}`
  }, /*#__PURE__*/React__default.createElement("button", {
    className: `${css$t.carrouselControlPrev} ui-carrusel-control-prev`,
    "data-slide": "prev",
    onClick: handleClick,
    ref: refPrev,
    disabled: true,
    "aria-label": `${_type} anterior`
  }, backButton), /*#__PURE__*/React__default.createElement("button", {
    className: `${css$t.carrouselControlNext} ui-carrusel-control-next`,
    "data-slide": "next",
    onClick: handleClick,
    ref: refNext,
    "aria-label": `${_type} siguiente`
  }, nextButton)), /*#__PURE__*/React__default.createElement("div", {
    className: "sr-only",
    "aria-live": "polite",
    "aria-atomic": "true"
  }, _type, " ", Value + 1, " de ", children.length));
};

var css$u = {"Section":"_PanelSection-module__Section__2biAj"};

const PanelSection = ({
  children: childrenProp,
  tabs,
  ...others
}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let childIndex = 0;
  const children = React__default.Children.map(childrenProp, child => {
    if (!React__default.isValidElement(child)) {
      return null;
    }

    const childValue = child.props.value === undefined ? childIndex : child.props.value;
    childIndex += 1;
    return React__default.cloneElement(child, {
      index: childValue,
      value: value
    });
  });
  return /*#__PURE__*/React__default.createElement("div", Object.assign({
    className: css$u.Section
  }, others), /*#__PURE__*/React__default.createElement(AsideSection, {
    value: value,
    onChange: handleChange
  }, tabs && tabs.map(elem => /*#__PURE__*/React__default.createElement(BtnSec, {
    label: elem.label,
    key: elem.id
  }))), children);
};

const PanelTabs = props => {
  const {
    tabs,
    panels,
    ...others
  } = props;
  const [value, setValue] = React__default.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return /*#__PURE__*/React__default.createElement("div", others, /*#__PURE__*/React__default.createElement(Tabs, {
    value: value,
    onChange: handleChange
  }, tabs.map(elem => /*#__PURE__*/React__default.createElement(Tab, {
    label: elem.label,
    key: elem.id,
    nameIcon: elem.nameIcon,
    positionIcon: elem.positionIcon
  }))), panels.map((elem, index) => /*#__PURE__*/React__default.createElement(TabPanel, {
    value: value,
    index: index,
    key: elem.id
  }, elem.text)));
};
PanelTabs.defaultProps = {
  tabs: [{
    label: 'item 1',
    id: '1',
    nameIcon: 'lock',
    positionIcon: 'left'
  }, {
    label: 'item 2',
    id: '2',
    nameIcon: 'android',
    positionIcon: 'right'
  }],
  panels: [{
    text: 'este es el primer texto',
    id: '1'
  }, {
    text: 'este es el segundo texto',
    id: '2'
  }]
};

var css$v = {"col":"_Col-module__col__1QLy6"};

const Col = props => {
  return /*#__PURE__*/React__default.createElement("div", Object.assign({
    className: css$v.col
  }, props));
};

var css$w = {"row":"_Row-module__row__7DQjb"};

const Row = props => {
  return /*#__PURE__*/React__default.createElement("div", Object.assign({
    className: css$w.row
  }, props));
};

export { Accordion, AccordionItem, AsideNav, AsideSection, BtnSec, Button, Card, Carrousel, Col, DarkThemeToggle, DraggableVideo, Dropdown, Graphics, Icon, InputAction, InputControl, InputField, Link, Modal, Multimedia, NavBar, PanelSection, PanelTabs, RecognitionVoice, Row, Section, Select, Tab, TabPanel, Table, TableGrid, Tabs, Text, Textarea, Toggletip, Tooltip, Video };
//# sourceMappingURL=index.modern.js.map
