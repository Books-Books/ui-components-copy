import React__default, { forwardRef, Fragment as Fragment$1, useState, useEffect, createRef, Children, isValidElement, createElement, useRef, cloneElement } from 'react';
import { Chart } from 'react-google-charts';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var css = {"BtnSec":"_2eAZu"};

var _excluded = ["classes", "className", "disabled", "fullWidth", "nameIcon", "positionIcon", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "value", "addClass"];
var BtnSec = forwardRef(function BtnSec(props, ref) {
  var _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      label = props.label,
      onChange = props.onChange,
      onClick = props.onClick,
      onFocus = props.onFocus,
      selected = props.selected,
      selectionFollowsFocus = props.selectionFollowsFocus,
      value = props.value,
      addClass = props.addClass,
      other = _objectWithoutPropertiesLoose(props, _excluded);

  var handleClick = function handleClick(event) {
    if (!selected && onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleFocus = function handleFocus(event) {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  return /*#__PURE__*/React__default.createElement("button", _extends({
    ref: ref,
    role: "tab",
    className: css.BtnSec + " " + addClass,
    "aria-selected": selected,
    disabled: disabled,
    onClick: handleClick,
    onFocus: handleFocus,
    tabIndex: selected ? 0 : -1
  }, other), /*#__PURE__*/React__default.createElement("span", null, label));
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
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
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
	Fragment: Fragment,
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

var base = {"ColorBase":"_3AGk-"};

var css$1 = {"Icon":"_3qt0u"};

var _excluded$1 = ["nameIcon", "addClass"];
var Icon = function Icon(_ref) {
  var nameIcon = _ref.nameIcon,
      addClass = _ref.addClass,
      args = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  return /*#__PURE__*/React__default.createElement("i", _extends({
    className: css$1.Icon + " " + addClass
  }, args), nameIcon);
};
Icon.propTypes = {
  addClass: propTypes.string
};
Icon.defaultProps = {
  addClass: ''
};

var css$2 = {"ButtonBase":"_bJEh3"};

var _excluded$2 = ["styled", "label", "icon", "addClass", "disabled"];
var Button = function Button(_ref) {
  var styled = _ref.styled,
      label = _ref.label,
      icon = _ref.icon,
      addClass = _ref.addClass,
      disabled = _ref.disabled,
      args = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  return /*#__PURE__*/React__default.createElement("button", _extends({
    className: base.ColorBase + " " + css$2.ButtonBase + " " + addClass,
    styled: styled,
    disabled: disabled
  }, args), icon && /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: icon
  }), label !== '' ? /*#__PURE__*/React__default.createElement("span", null, label) : /*#__PURE__*/React__default.createElement(Fragment$1, null));
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
  onClick: undefined
};

var css$3 = {"c-collapsible-container-header":"_1CW18","c-collapsible-container-body":"_2ygtY"};

var _excluded$3 = ["item", "index", "stateIcon", "addClass"];
function AccordionItem(_ref) {
  var item = _ref.item,
      index = _ref.index,
      stateIcon = _ref.stateIcon,
      addClass = _ref.addClass,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  return /*#__PURE__*/React__default.createElement(Fragment$1, null, /*#__PURE__*/React__default.createElement("div", _extends({
    className: css$3['c-collapsible-container-header'] + " " + addClass
  }, props), /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: item.dataIcon
  }), /*#__PURE__*/React__default.createElement("p", null, " ", item.title), /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: stateIcon
  })), /*#__PURE__*/React__default.createElement("div", {
    className: css$3['c-collapsible-container-body'],
    id: "body" + index
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

var css$4 = {"DropdownCont":"_D5DjI","navItem":"_2UAjf","navLink":"_362sV","dropdownMenu":"_jT9p5","dropdownMenu-item":"_2SR1I","dropdownItem":"_1JWTx"};

var Dropdown = function Dropdown(_ref) {
  var icon = _ref.icon,
      childsElem = _ref.children,
      label = _ref.label,
      addClass = _ref.addClass;

  var _useState = useState(false),
      Expanded = _useState[0],
      SetExpanded = _useState[1];

  function HandleChange() {
    SetExpanded(!Expanded);
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: css$4.DropdownCont + " " + addClass + " ",
    onMouseOver: HandleChange,
    onMouseOut: HandleChange,
    tabIndex: "1"
  }, icon && /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: icon
  }), /*#__PURE__*/React__default.createElement("ul", null, /*#__PURE__*/React__default.createElement("li", {
    className: css$4.navItem
  }, /*#__PURE__*/React__default.createElement("span", {
    className: css$4.navLink,
    id: "navbarDropdown",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": Expanded
  }, label), /*#__PURE__*/React__default.createElement("div", {
    className: css$4.dropdownMenu,
    "aria-labelledby": "navbarDropdown"
  }, React__default.Children.map(childsElem, function (elem, idx) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: css$4['dropdownMenu-item'],
      key: idx
    }, elem);
  })))), /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: Expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
  }));
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

var css$5 = {"InputAction":"_xB2Ha","LabelStyled":"_1X4kF","TextFileName":"_OaT0I"};

var _excluded$4 = ["type", "styled", "label", "icon", "addClass"];
var InputAction = function InputAction(_ref) {
  var type = _ref.type,
      styled = _ref.styled,
      label = _ref.label,
      icon = _ref.icon,
      addClass = _ref.addClass,
      args = _objectWithoutPropertiesLoose(_ref, _excluded$4);

  var _useState = useState(''),
      Value = _useState[0],
      SetValue = _useState[1];

  var id = uniqueId_1('ui-');

  function handleChage(_ref2) {
    var target = _ref2.target;

    switch (type) {
      case 'file':
        SetValue(target.files[0].name);
        break;

      case 'color':
        SetValue(target.value);
        break;
    }
  }

  return /*#__PURE__*/React__default.createElement(Fragment$1, null, /*#__PURE__*/React__default.createElement("label", _extends({
    className: base.ColorBase + " " + css$5.LabelStyled + " " + addClass,
    htmlFor: id,
    styled: styled
  }, args), /*#__PURE__*/React__default.createElement("input", {
    className: css$5.InputAction,
    type: type,
    id: id,
    onInput: handleChage
  }), /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: icon
  }), label !== '' ? /*#__PURE__*/React__default.createElement("span", null, label) : /*#__PURE__*/React__default.createElement(Fragment$1, null)), Value !== '' && /*#__PURE__*/React__default.createElement("p", {
    className: css$5.TextFileName,
    style: type === 'color' ? {
      backgroundColor: Value
    } : {}
  }, Value));
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

var css$6 = {"InputStyled":"_1isCe","InputCont":"_1YikN","CheckCont":"_WN9au","CheckLabel":"_10bHL","CheckBg":"_3z4b_","CheckTrack":"_2QBZ5","input-error":"_8exJT","input-succes":"_3GadY"};

var _excluded$5 = ["type", "label", "stateInput", "name", "addClass"];
var InputControl = function InputControl(_ref) {
  var type = _ref.type,
      label = _ref.label,
      stateInput = _ref.stateInput,
      name = _ref.name,
      addClass = _ref.addClass,
      args = _objectWithoutPropertiesLoose(_ref, _excluded$5);

  var _useState = useState(false),
      check = _useState[0],
      setCheck = _useState[1];

  var _useState2 = useState(''),
      getStateIcon = _useState2[0],
      setStateIcon = _useState2[1];

  var id = uniqueId_1('ui-');

  useEffect(function () {
    function validateIcon(element) {
      if (stateInput) {
        if (stateInput === 'Error') {
          setStateIcon('close');
          element.classList.add(css$6['input-error']);
        } else if (stateInput === 'Succes') {
          setStateIcon('check');
          element.classList.add(css$6['input-succes']);
        } else {
          setStateIcon('check');
        }
      } else {
        setStateIcon('check');
      }
    }

    function initInputIcon() {
      var $contentIcon = document.querySelector("#" + id + "Icon");
      validateIcon($contentIcon);
    }

    initInputIcon();
  });
  return /*#__PURE__*/React__default.createElement("label", _extends({
    htmlFor: id,
    className: css$6.InputCont + " " + addClass,
    inputMode: type
  }, args), /*#__PURE__*/React__default.createElement("div", {
    className: css$6.CheckCont,
    inputMode: type
  }, /*#__PURE__*/React__default.createElement("input", {
    className: css$6.InputStyled,
    "data-state": stateInput,
    inputMode: type,
    defaultChecked: check,
    type: type === 'toggle' ? 'checkbox' : type,
    id: id,
    name: name
  }), type === 'toggle' && /*#__PURE__*/React__default.createElement("div", {
    className: css$6.CheckTrack
  }), /*#__PURE__*/React__default.createElement("div", {
    className: css$6.CheckBg,
    inputMode: type,
    onClick: function onClick() {
      return setCheck(!check);
    },
    id: id + "Icon"
  }, type !== 'toggle' && /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: getStateIcon,
    id: id + "ContentIcon"
  }))), /*#__PURE__*/React__default.createElement("label", {
    className: css$6.CheckLabel
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

var css$7 = {"InputCont":"_17byX","LabelStyle":"_2zmtW","InputStyled":"_3_8sU","input-error":"_23iPI","input-succes":"_1r2gj","deactive-border":"_2sE6F"};

var _excluded$6 = ["type", "label", "dataIcon", "styledInput", "addClass"];
var InputField = function InputField(_ref) {
  var type = _ref.type,
      label = _ref.label,
      dataIcon = _ref.dataIcon,
      styledInput = _ref.styledInput,
      addClass = _ref.addClass,
      args = _objectWithoutPropertiesLoose(_ref, _excluded$6);

  var id = uniqueId_1('ui-');

  var _useState = useState(false),
      isFocus = _useState[0],
      setIsFocus = _useState[1];

  var _useState2 = useState(''),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = useState(''),
      getStateInput = _useState3[0],
      setStateInput = _useState3[1];

  useEffect(function () {
    function addClass(element, nameClass) {
      element.classList.add(css$7[nameClass]);
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
      var $content = document.querySelector("#contentLabel" + id);
      var $input = document.querySelector("#" + id);
      var $label = document.querySelector("#label-" + id);
      validateInput($content, $input, $label);
    }

    initInput();
  });

  function handleChange(_ref2) {
    var target = _ref2.target;
    setValue(target.value);
  }

  function handleFocus() {
    setIsFocus(!isFocus);
  }

  function handleBlur() {
    setIsFocus(!isFocus);
  }

  return /*#__PURE__*/React__default.createElement("label", _extends({
    inputMode: type,
    className: css$7.InputCont + " " + addClass,
    "data-status": isFocus || value !== '' ? 'active' : false,
    id: "contentLabel" + id,
    "state-input": styledInput
  }, args), dataIcon.state ? /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: dataIcon.nameIcon,
    "state-input": styledInput
  }) : /*#__PURE__*/React__default.createElement(Fragment$1, null), /*#__PURE__*/React__default.createElement("input", {
    className: css$7.InputStyled,
    type: type,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    id: id
  }), type !== 'date' && /*#__PURE__*/React__default.createElement("label", {
    className: css$7.LabelStyle,
    htmlFor: id,
    inputMode: type,
    id: "label-" + id,
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

var css$8 = {"LinkCont":"_2lFDP"};

var Link = function Link(_ref) {
  var label = _ref.label,
      href = _ref.href,
      icon = _ref.icon,
      addClass = _ref.addClass,
      target = _ref.target;
  return /*#__PURE__*/React__default.createElement("a", {
    className: css$8.LinkCont + " " + addClass,
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

var css$9 = {"c-aud-btn":"_a9LbG","c-aud-btn-content":"_2E_hC","c-aud-secundary":"_2uPDm"};

function Multimedia(_ref) {
  var url = _ref.url,
      label = _ref.label,
      addClass = _ref.addClass,
      _ref$isPrimary = _ref.isPrimary,
      isPrimary = _ref$isPrimary === void 0 ? true : _ref$isPrimary;

  var _useState = useState(false),
      getStateBtnAudio = _useState[0],
      setStateBtnAudio = _useState[1];

  var _useState2 = useState('play_arrow'),
      getIcon = _useState2[0],
      setIcon = _useState2[1];

  var refAudio = createRef();

  function validateStateBtn(element) {
    if (getStateBtnAudio) {
      setStateBtnAudio(false);
      element.pause();
      setIcon('play_arrow');
    } else {
      setStateBtnAudio(true);
      element.play();
      setIcon('pause');
    }
  }

  function handlePlayPause() {
    var $audio = refAudio.current;
    validateStateBtn($audio);
  }

  function handleFinish(e) {
    setStateBtnAudio(false);
    setIcon('play_arrow');
  }

  return /*#__PURE__*/React__default.createElement(Fragment$1, null, /*#__PURE__*/React__default.createElement("div", {
    className: "" + addClass
  }, /*#__PURE__*/React__default.createElement("audio", {
    src: url,
    ref: refAudio,
    onEnded: handleFinish
  }), /*#__PURE__*/React__default.createElement("button", {
    id: "btnAudio",
    onClick: handlePlayPause,
    className: css$9['c-aud-btn'] + " " + (isPrimary ? '' : css$9['c-aud-secundary']),
    "data-label": label ? 'string' : ''
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$9['c-aud-btn-content'],
    "data-label": label ? 'string' : ''
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: getIcon
  }), label))));
}
Multimedia.propTypes = {
  url: propTypes.string.isRequired,
  label: propTypes.string,
  addClass: propTypes.string
};
Multimedia.defaultProps = {
  addClass: ''
};

var css$a = {"Panel":"_qaB0F","fadeIn":"_23_l4"};

var _excluded$7 = ["children", "value", "index", "addClass"];
var TabPanel = function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      addClass = props.addClass,
      other = _objectWithoutPropertiesLoose(props, _excluded$7);

  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: css$a.Panel + " " + addClass,
    role: "tabpanel",
    hidden: value !== index,
    id: "simple-tabpanel-" + index,
    "aria-labelledby": "simple-tab-" + index
  }, other), value === index && /*#__PURE__*/React__default.createElement("div", null, children));
};

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var speechRecognitionList = new SpeechGrammarList();
var recognition = new SpeechRecognition();
var RecognitionVoice = function RecognitionVoice(_ref) {
  var setdata = _ref.setdata,
      validate = _ref.validate,
      childrenProp = _ref.children,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? "" : _ref$disabled,
      _ref$styledButton = _ref.styledButton,
      styledButton = _ref$styledButton === void 0 ? 'secondary-icon' : _ref$styledButton,
      onRecord = _ref.onRecord;

  var _useState = useState('record'),
      action = _useState[0],
      setAction = _useState[1];

  var _useState2 = useState(''),
      diagnostic = _useState2[0],
      setDiagnostic = _useState2[1];

  var GRAMMAR = "#JSGF V1.0; grammar ; public <command> = " + (validate || '') + " ;";
  var transcript;

  recognition.onresult = function (_ref2) {
    var results = _ref2.results;
    transcript = results;
  };

  recognition.onnomatch = function (event) {
    setDiagnostic("I didn't recognise that color.");
  };

  recognition.onerror = function (event) {
    setDiagnostic('Error occurred in recognition: ' + event.error);
  };

  var runSpeechRecognition = function runSpeechRecognition() {
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

  var stopRecording = function stopRecording() {
    if (transcript) {
      var strText = '';
      transcript = Array.from(transcript);
      transcript.forEach(function (element) {
        strText += element[0].transcript;
      });
      console.log("DESDE UI", strText);
      setdata && setdata(strText);
    }

    recognition.stop();
    setAction('record');
  };

  useEffect(function () {
    GRAMMAR = "#JSGF V1.0; grammar ; public <command> = " + (validate || '') + " ;";
  }, [validate]);
  var children = Children.map(childrenProp, function (child) {
    if (!isValidElement(child)) {
      return null;
    }

    return React__default.cloneElement(child, {
      children: diagnostic
    });
  });
  return /*#__PURE__*/React__default.createElement(Fragment$1, null, /*#__PURE__*/React__default.createElement(Button, {
    type: "button",
    onClick: runSpeechRecognition,
    icon: action === 'record' ? 'mic' : 'mic_off',
    label: "",
    disabled: disabled,
    styled: styledButton
  }), children && children);
};

var css$b = {"section":"_Nahni","fadeInDown":"_BDs2n"};

var _excluded$8 = ["children", "value", "index", "addClass"];

var Section = function Section(_ref) {
  var children = _ref.children,
      value = _ref.value,
      index = _ref.index,
      addClass = _ref.addClass,
      other = _objectWithoutPropertiesLoose(_ref, _excluded$8);

  return /*#__PURE__*/React__default.createElement("section", _extends({
    className: css$b.section + " " + addClass,
    role: "tabpanel",
    hidden: value !== index,
    id: "simple-tabpanel-" + index,
    "aria-labelledby": "simple-tab-" + index
  }, other), value === index && /*#__PURE__*/React__default.createElement("article", null, children));
};

var css$c = {"SelectStyle":"_2NS2Z","SelectAfter":"_2vUqP","SelectWrapper":"_2BQM5"};

var _excluded$9 = ["placeholder", "stateInput", "options", "addClass"];
var Select = function Select(_ref) {
  var placeholder = _ref.placeholder,
      stateInput = _ref.stateInput,
      options = _ref.options,
      addClass = _ref.addClass,
      args = _objectWithoutPropertiesLoose(_ref, _excluded$9);

  var name = uniqueId_1('ui-name-');

  return /*#__PURE__*/React__default.createElement("label", _extends({
    className: css$c.SelectWrapper + " " + addClass,
    "data-state": stateInput
  }, args), /*#__PURE__*/React__default.createElement("select", {
    defaultValue: "",
    name: name,
    className: css$c.SelectStyle,
    "data-state": stateInput
  }, /*#__PURE__*/React__default.createElement("option", {
    disabled: true,
    value: ""
  }, placeholder), options.map(function (elem, i) {
    return /*#__PURE__*/React__default.createElement("option", {
      key: i,
      value: i + 1
    }, elem);
  })), /*#__PURE__*/React__default.createElement("div", {
    className: css$c.SelectAfter,
    "data-state": stateInput
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "arrow_drop_down"
  })));
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
  addClass: ''
};

var css$d = {"TabsBtn":"_2P1fM","TabsBtnContent":"_293oo","TabsBtnContentLabel":"_h75tA","TabsBtnIndicator":"_247Rk","TabsBtnIndicatorContent":"_21fWb"};

var _excluded$a = ["classes", "className", "disabled", "fullWidth", "nameIcon", "positionIcon", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "value", "addClass"];
var Tab = forwardRef(function Tab(props, ref) {
  var _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      nameIcon = props.nameIcon,
      positionIcon = props.positionIcon,
      label = props.label,
      onChange = props.onChange,
      onClick = props.onClick,
      onFocus = props.onFocus,
      selected = props.selected,
      selectionFollowsFocus = props.selectionFollowsFocus,
      value = props.value,
      addClass = props.addClass,
      other = _objectWithoutPropertiesLoose(props, _excluded$a);

  var handleClick = function handleClick(event) {
    if (!selected && onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleFocus = function handleFocus(event) {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  return /*#__PURE__*/createElement("button", _extends({
    ref: ref,
    role: "tab",
    className: css$d.TabsBtn + " " + addClass,
    "aria-selected": selected,
    disabled: disabled,
    onClick: handleClick,
    onFocus: handleFocus,
    tabIndex: selected ? 0 : -1
  }, other), /*#__PURE__*/createElement("span", {
    className: css$d.TabsBtnContent,
    "position-icon": positionIcon
  }, /*#__PURE__*/createElement(Icon, {
    "aria-hidden": "true",
    nameIcon: nameIcon
  }), ' ', /*#__PURE__*/createElement("span", {
    className: css$d.TabsBtnContentLabel
  }, label), ' '), /*#__PURE__*/createElement("span", {
    className: css$d.TabsBtnIndicator
  }, /*#__PURE__*/createElement("span", {
    className: css$d.TabsBtnIndicatorContent
  })));
});
Tab.propTypes = {
  addClass: propTypes.string
};
Tab.defaultProps = {
  addClass: ''
};

var css$e = {"Typography":"_2s-q8"};

var _excluded$b = ["type", "children", "addClass"];
var Text = function Text(_ref) {
  var type = _ref.type,
      children = _ref.children,
      addClass = _ref.addClass,
      args = _objectWithoutPropertiesLoose(_ref, _excluded$b);

  var DefaultValue = {
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
  var Component = DefaultValue[type];
  return /*#__PURE__*/React__default.createElement(Component, _extends({
    className: css$e.Typography + " " + addClass,
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

var css$f = {"TextareaCont":"_2hUyD","TextareaItem":"_1haMe","CountCont":"_34S0r"};

var Textarea = function Textarea(_ref) {
  var placeholder = _ref.placeholder,
      rows = _ref.rows,
      maxWords = _ref.maxWords,
      addClass = _ref.addClass;

  var _useState = useState(0),
      Count = _useState[0],
      SetCount = _useState[1];

  var _useState2 = useState(10000),
      MaxLength = _useState2[0],
      SetMaxLength = _useState2[1];

  function HandleChange(_ref2) {
    var target = _ref2.target;
    var rgxWords = /\b[^\s\s.\-:;]*/;
    var countWords = target.value === '' ? 0 : target.value.split(rgxWords, Number(maxWords) + 1).length - 1;

    if (countWords === Number(maxWords)) {
      SetMaxLength(target.value.length);
    }

    SetCount(countWords);
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: css$f.TextareaCont + " " + addClass
  }, /*#__PURE__*/React__default.createElement("textarea", {
    className: css$f.TextareaItem,
    rows: rows,
    placeholder: placeholder,
    onKeyPress: HandleChange,
    maxLength: MaxLength
  }), maxWords && /*#__PURE__*/React__default.createElement("span", {
    className: css$f.CountCont
  }, " ", Count + " / " + maxWords, " "));
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

var css$g = {"TooltipCont":"_2fDQR","TooltipItem":"_3KPt0"};

var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
      label = _ref.label,
      addClass = _ref.addClass;
  return /*#__PURE__*/React__default.createElement("div", {
    className: css$g.TooltipCont + " " + addClass
  }, children, /*#__PURE__*/React__default.createElement("div", {
    className: css$g.TooltipItem
  }, label));
};
Tooltip.propTypes = {
  addClass: propTypes.string
};
Tooltip.defaultProps = {
  addClass: ''
};

var css$h = {"c-vid":"_2uck7","c-vid-controls":"_2yF4K","c-vid-controls-text":"_2W8d_","progress-content":"_29s-a","progress":"_2vrVD","progress-bar":"_5SxVn","c-vid-controls-volumn":"_3e9Q1","c-vid-controls-volumn-item":"_2YNZg"};

function Video(_ref) {
  var url = _ref.url,
      width = _ref.width,
      addClass = _ref.addClass;

  var _useState = useState('00:00'),
      getDurationVideo = _useState[0],
      setDurationVideo = _useState[1];

  var _useState2 = useState('00:00'),
      getCurrentTiem = _useState2[0],
      setCurrentTime = _useState2[1];

  var _useState3 = useState({
    state: false,
    icon: 'play_arrow'
  }),
      getstateVideoPlay = _useState3[0],
      setStateVideoPlay = _useState3[1];

  var _useState4 = useState({
    state: false,
    icon: 'open_in_full'
  }),
      getStateScreen = _useState4[0],
      setStateScreen = _useState4[1];

  var _useState5 = useState(0.23),
      getValueVolum = _useState5[0],
      setValueVolumn = _useState5[1];

  var refCont = createRef();
  var refVideo = createRef();
  var refProgress = createRef();
  var refProgressBar = createRef();
  var refVolumn = createRef();

  function handlePlay() {
    var $video = refVideo.current;

    if (getstateVideoPlay.state) {
      $video.pause();
      setStateVideoPlay({
        state: false,
        icon: 'play_arrow'
      });
    } else {
      $video.play();
      setStateVideoPlay({
        state: true,
        icon: 'pause'
      });
    }
  }

  function hanldeFullScrenn() {
    var isInFullScreen = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null;
    var docElm = refCont.current;

    if (!isInFullScreen) {
      setStateScreen({
        state: true,
        icon: 'close_fullscreen'
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
        icon: 'open_in_full'
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
    var video = refVideo.current;
    var progressElem = refProgressBar.current;
    var porcent = video.currentTime / video.duration * 100;
    progressElem.style.flexBasis = porcent + "%";
  }

  function handleTimeProcess() {
    var dataVideo = refVideo.current;
    initialValores(dataVideo);

    function initialValores(element) {
      var durationVideo = hourToString(element.duration);
      var travelVideo = hourToString(element.currentTime);
      setCurrentTime(travelVideo);
      setDurationVideo(durationVideo);
    }

    function hourToString(timeSeconds) {
      var secundsNumber = parseInt(timeSeconds, 10);
      var hours = Math.floor(secundsNumber / 3600);
      var minutes = Math.floor((secundsNumber - hours * 3600) / 60);
      var seconds = secundsNumber - hours * 3600 - minutes * 60;
      var valisateHours = validateIsNan(validateDigits(hours));
      var validateMinutes = validateIsNan(validateDigits(minutes));
      var validateSeconds = validateIsNan(validateDigits(seconds));
      return valisateHours + ":" + validateMinutes + ":" + validateSeconds;
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
    var progress = refProgress.current;
    var video = refVideo.current;
    var positionClick = e.nativeEvent.offsetX;
    var scrubTime = positionClick / progress.offsetWidth * video.duration;
    video.currentTime = scrubTime;
  }

  function handleVolumn(e) {
    var video = refVideo.current;
    var value = e.target.value;
    setValueVolumn(value);
    video.volume = getValueVolum;
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: css$h['c-vid'] + " " + addClass,
    ref: refCont,
    style: {
      maxWidth: width,
      minWidth: '320px'
    }
  }, /*#__PURE__*/React__default.createElement("video", {
    ref: refVideo,
    onTimeUpdate: function onTimeUpdate() {
      handleBarProgress();
      handleTimeProcess();
    }
  }, /*#__PURE__*/React__default.createElement("source", {
    src: url
  })), /*#__PURE__*/React__default.createElement("div", {
    className: css$h['progress-content']
  }, /*#__PURE__*/React__default.createElement("div", {
    ref: refProgress,
    className: css$h.progress,
    onClick: handleProcessControl
  }, /*#__PURE__*/React__default.createElement("div", {
    ref: refProgressBar,
    className: css$h['progress-bar'],
    onChange: handleBarProgress
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: css$h['c-vid-controls']
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: getstateVideoPlay.icon,
    onClick: handlePlay
  }), /*#__PURE__*/React__default.createElement("p", {
    className: css$h['c-vid-controls-text']
  }, /*#__PURE__*/React__default.createElement("span", null, getCurrentTiem), " / ", /*#__PURE__*/React__default.createElement("span", null, getDurationVideo)), /*#__PURE__*/React__default.createElement("div", {
    className: css$h['c-vid-controls-volumn']
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "volume_up"
  }), /*#__PURE__*/React__default.createElement("input", {
    className: css$h['c-vid-controls-volumn-item'],
    ref: refVolumn,
    type: "range",
    min: "0",
    max: "1",
    step: "any",
    value: getValueVolum,
    onChange: handleVolumn
  })), /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: getStateScreen.icon,
    onClick: hanldeFullScrenn
  })));
}
Video.propTypes = {
  url: propTypes.string.isRequired,
  width: propTypes.string,
  addClass: propTypes.string
};
Video.defaultProps = {
  addClass: ''
};

var css$i = {"c-side":"_3jq03","c-side-nav":"_ORlc2","c-side-nav-item":"_2VUuV","c-overlay":"_1ZsvR","position-left":"_2dAro","aside--active--left":"_3yTuc","position-right":"_2GOdp","aside--active--right":"_28cLO","overlay--active":"_IKRE0"};

var AsideNav = function AsideNav(_ref) {
  var children = _ref.children,
      dataButton = _ref.dataButton,
      content = _ref.content,
      location = _ref.location;

  var _useState = useState(false),
      getStateAside = _useState[0],
      setStateAside = _useState[1];

  var _useState2 = useState(''),
      getLocationAside = _useState2[0],
      setLocationAside = _useState2[1];

  var refModal = createRef();
  var refOverlay = createRef();
  useEffect(function () {
    var $aside = refModal.current;

    function locationAside() {
      if (location === 'right') {
        setLocationAside('aside--active--right');
        $aside.classList.add(css$i['position-right']);
      } else {
        setLocationAside('aside--active--left');
        $aside.classList.add(css$i['position-left']);
      }
    }

    locationAside();
  });

  function stateAside(elementModal, elementOverlay) {
    if (getStateAside) {
      elementModal.classList.remove(css$i[getLocationAside]);
      elementOverlay.classList.remove(css$i['overlay--active']);
      setStateAside(false);
    } else {
      elementModal.classList.add(css$i[getLocationAside]);
      elementOverlay.classList.add(css$i['overlay--active']);
      setStateAside(true);
    }
  }

  function handleAside() {
    var $aside = refModal.current;
    var $overlay = refOverlay.current;
    stateAside($aside, $overlay);
  }

  return /*#__PURE__*/React__default.createElement(Fragment$1, null, /*#__PURE__*/React__default.createElement("div", {
    ref: refOverlay,
    className: css$i['c-overlay'] + " ui-overlay",
    id: "overlay"
  }), /*#__PURE__*/React__default.createElement("div", {
    ref: refModal,
    className: css$i['c-side'] + " ui-aside",
    id: "aside"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "close",
    onClick: handleAside,
    style: {
      cursor: 'pointer'
    }
  }), children || /*#__PURE__*/React__default.createElement(Fragment$1, null, /*#__PURE__*/React__default.createElement("h2", null, content.title), /*#__PURE__*/React__default.createElement("ul", {
    className: css$i['c-side-nav'] + " ui-aside-nav"
  }, content.list.map(function (item, index) {
    return /*#__PURE__*/React__default.createElement("li", {
      className: css$i['c-side-nav-item'] + " ui-aside-nav-item",
      key: index
    }, item);
  })))), /*#__PURE__*/React__default.createElement(Button, {
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

var css$j = {"AsideSection":"_37BVW"};

var _excluded$c = ["aria-label", "aria-labelledby", "action", "children", "classes", "className", "component", "onChange", "orientation", "selectionFollowsFocus", "TabScrollButtonProps", "value"];
var AsideSection = forwardRef(function Tabs(props, ref) {
  var ariaLabel = props['aria-label'],
      ariaLabelledBy = props['aria-labelledby'],
      childrenProp = props.children,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      onChange = props.onChange,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      selectionFollowsFocus = props.selectionFollowsFocus,
      value = props.value,
      other = _objectWithoutPropertiesLoose(props, _excluded$c);

  var valueToIndex = new Map();
  var tabsRef = React__default.useRef(null);
  var tabListRef = React__default.useRef(null);
  var childIndex = 0;
  var children = React__default.Children.map(childrenProp, function (child) {
    if (!React__default.isValidElement(child)) {
      return null;
    }

    var childValue = child.props.value === undefined ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    var selected = childValue === value;
    childIndex += 1;
    return React__default.cloneElement(child, _extends({
      selected: selected,
      selectionFollowsFocus: selectionFollowsFocus,
      onChange: onChange,
      value: childValue
    }, childIndex === 1 && value === false && !child.props.tabIndex ? {
      tabIndex: 0
    } : {}));
  });

  var handleKeyDown = function handleKeyDown(event) {
    var target = event.target;
    var role = target.getAttribute('role');

    if (role !== 'tab') {
      return;
    }

    var newFocusTarget = null;
    var previousItemKey = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';
    var nextItemKey = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';

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

  return /*#__PURE__*/React__default.createElement(Component, _extends({
    className: "ui-Tabs-cont",
    ref: ref
  }, other), /*#__PURE__*/React__default.createElement("div", {
    ref: tabsRef
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$j.AsideSection,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-orientation": orientation === 'vertical' ? 'vertical' : null,
    onKeyDown: handleKeyDown,
    ref: tabListRef,
    role: "tablist"
  }, children)));
});

var css$k = {"u-text":"_16nIh","c-card":"_1iLqk","c-card-image":"_2zNmo","c-card-container":"_1Z4zT"};

var Card = function Card(_ref) {
  var width = _ref.width,
      image = _ref.image,
      content = _ref.content,
      supportingText = _ref.supportingText,
      buttons = _ref.buttons;
  return /*#__PURE__*/React__default.createElement("div", {
    className: css$k['c-card'] + " ui-card",
    style: {
      width: width
    }
  }, image.state ? /*#__PURE__*/React__default.createElement("figure", {
    className: css$k['c-card-image'] + " ui-card-img"
  }, /*#__PURE__*/React__default.createElement("img", {
    src: image.url,
    alt: image.alt
  })) : /*#__PURE__*/React__default.createElement(Fragment$1, null), /*#__PURE__*/React__default.createElement("div", {
    className: css$k['c-card-container'] + " ui-card-container"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "c-card-container-title"
  }, /*#__PURE__*/React__default.createElement("h3", null, content.title), /*#__PURE__*/React__default.createElement("p", {
    className: css$k['u-text'] + " ui-text"
  }, content.text)), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("p", {
    className: css$k['u-text'] + " ui-text-two"
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
  })) : /*#__PURE__*/React__default.createElement(Fragment$1, null)));
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

var css$l = {"c-collapsible":"_3W_Aj","block":"_1-o0m","show":"_26Izt"};

var Accordion = function Accordion(_ref) {
  var content = _ref.content,
      width = _ref.width,
      backgroundColor = _ref.backgroundColor,
      color = _ref.color;

  var _useState = useState(null),
      getStateList = _useState[0],
      setStateList = _useState[1];

  var _useState2 = useState(''),
      getStateIcon = _useState2[0],
      setStateIcon = _useState2[1];

  var style = {
    backgroundColor: backgroundColor,
    color: color
  };

  function addAndRemoveClass(element, addClass) {
    if (addClass) {
      element.classList.add(css$l.block);
    } else {
      element.classList.remove(css$l.block);
    }
  }

  function classInElement(element) {
    element.classList.forEach(function (item) {
      if (item === css$l.block) {
        addAndRemoveClass(element, false);
        setStateIcon('expand_less');
      } else {
        addAndRemoveClass(element, true);
      }
    });
  }

  function stateList(element) {
    if (getStateList) {
      if (getStateList === element) {
        classInElement(element);
      } else {
        addAndRemoveClass(getStateList, false);
        addAndRemoveClass(element, true);
        setStateList(element);
      }
    } else {
      addAndRemoveClass(element, true);
      setStateList(element);
    }
  }

  function handleToggleBody(element) {
    var $bodyElement = document.querySelector("#" + element);
    setStateIcon(element);
    stateList($bodyElement);
  }

  return /*#__PURE__*/React__default.createElement("ul", {
    className: css$l['c-collapsible'] + " ui-collapsible",
    style: {
      width: width
    }
  }, content.map(function (item, index) {
    return /*#__PURE__*/React__default.createElement("li", {
      className: css$l['c-collapsible-container'] + " ui-collapsible-container",
      key: index,
      style: style
    }, /*#__PURE__*/React__default.createElement(AccordionItem, {
      item: item,
      index: index,
      stateIcon: getStateIcon === "body" + index ? 'expand_less' : 'expand_more',
      onClick: function onClick() {
        return handleToggleBody("body" + index);
      },
      addClass: "prb"
    }));
  }));
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

function Graphics(_ref) {
  var width = _ref.width,
      height = _ref.height,
      chartType = _ref.chartType,
      data = _ref.data,
      options = _ref.options,
      props = _ref.props;
  return /*#__PURE__*/React__default.createElement(Chart, _extends({
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

var css$m = {"c-modal":"_6eOcM","c-modal-overlay":"_1q2aa","overlay--active":"_20Zpv","modal--active":"_2MLWh"};

var Modal = function Modal(_ref) {
  var children = _ref.children,
      dataButton = _ref.dataButton,
      title = _ref.title,
      text = _ref.text;

  var _useState = useState(false),
      getModal = _useState[0],
      setModal = _useState[1];

  var refModal = createRef();
  var refOverlay = createRef();

  function stateModal(elementModal, elementOverlay) {
    if (getModal) {
      elementModal.classList.remove(css$m['modal--active']);
      elementOverlay.classList.remove(css$m['overlay--active']);
      setModal(false);
    } else {
      elementModal.classList.add(css$m['modal--active']);
      elementOverlay.classList.add(css$m['overlay--active']);
      setModal(true);
    }
  }

  function handleModal() {
    var $modal = refModal.current;
    var $overlay = refOverlay.current;
    stateModal($modal, $overlay);
  }

  return /*#__PURE__*/React__default.createElement(Fragment$1, null, /*#__PURE__*/React__default.createElement("div", {
    ref: refOverlay,
    className: css$m['c-modal-overlay'] + " ui-modal-overlay",
    id: "overlay"
  }), /*#__PURE__*/React__default.createElement("div", {
    ref: refModal,
    className: css$m['c-modal'] + " ui-modal",
    id: "modal"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "close",
    onClick: handleModal,
    style: {
      cursor: 'pointer'
    }
  }), children || /*#__PURE__*/React__default.createElement("div", {
    className: "ui-modal-content"
  }, /*#__PURE__*/React__default.createElement("h3", null, " ", title, " "), /*#__PURE__*/React__default.createElement("p", null, " ", text, " "))), /*#__PURE__*/React__default.createElement(Button, {
    label: dataButton.label,
    styled: dataButton.styled,
    onClick: handleModal
  }));
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

var css$n = {"table":"_3LoBn","table-content":"_1W60s","table-content-item":"_27m22","body-content":"_2OoWj"};

function Table(_ref) {
  var headLabels = _ref.headLabels,
      bodyContent = _ref.bodyContent;
  return /*#__PURE__*/React__default.createElement("table", {
    className: css$n.table + " ui-table"
  }, /*#__PURE__*/React__default.createElement("thead", null, /*#__PURE__*/React__default.createElement("tr", {
    className: css$n['table-content'] + " ui-table-content"
  }, headLabels.map(function (item, index) {
    return /*#__PURE__*/React__default.createElement("th", {
      key: index,
      className: css$n['table-content-item'] + " ui-table-content-item"
    }, item);
  }))), /*#__PURE__*/React__default.createElement("tbody", null, bodyContent.map(function (content, index) {
    return /*#__PURE__*/React__default.createElement("tr", {
      key: "content" + index,
      className: css$n['table-content'] + " " + css$n['body-content'] + " ui-body-content"
    }, content.map(function (item, i) {
      return /*#__PURE__*/React__default.createElement("td", {
        key: "item" + i,
        className: css$n['table-content-item'] + " ui-body-content-item"
      }, item.campoType === 'icon' ? /*#__PURE__*/React__default.createElement(Icon, {
        nameIcon: item.label
      }) : item.campoType === 'input' ? /*#__PURE__*/React__default.createElement(InputControl, {
        type: item.type,
        label: item.label,
        name: item.name
      }) : /*#__PURE__*/React__default.createElement("span", null, item.label));
    }));
  })));
}
Table.propTypes = {
  headLabels: propTypes.array,
  bodycontent: propTypes.array
};
Table.defaultProps = {
  headLabels: ['head1', 'head2'],
  bodyContent: [['Cell a1', 'Cell a2'], ['Cell b2', 'Cell b2']]
};

var css$o = {"c-scroll":"_2NOnb","c-gridTable":"_37ybX","c-gridTable-head":"_2mWnf","c-gridTable-body":"_2IfP0","c-gridTable-body-item":"_153aW","c-gridTable-head-item":"_CzEks"};

function TableGrid(_ref) {
  var headContent = _ref.headContent,
      bodyContent = _ref.bodyContent,
      gridColumn = _ref.gridColumn;
  console.log(bodyContent);
  return /*#__PURE__*/React__default.createElement("div", {
    className: css$o['c-scroll'] + " ui-scroll"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$o['c-gridTable'] + " ui-gridTable"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$o['c-gridTable-head'] + " ui-gridTable-head",
    style: gridColumn
  }, headContent.map(function (item, index) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: css$o['c-gridTable-head-item'] + " ui-gridTable-head-item",
      key: "head-" + index
    }, item.type === 'icon' ? /*#__PURE__*/React__default.createElement(Icon, {
      nameIcon: item.label,
      addClass: item.addClass
    }) : /*#__PURE__*/React__default.createElement("span", null, item.label));
  })), /*#__PURE__*/React__default.createElement("div", {
    className: css$o['c-gridTable-body'] + " ui-gridTable-body",
    style: gridColumn
  }, bodyContent.map(function (data) {
    return data.map(function (buttom, index) {
      return /*#__PURE__*/React__default.createElement("div", {
        className: css$o['c-gridTable-body-item'] + " ui-gridTable-body-item",
        key: "body-" + index
      }, buttom);
    });
  }))));
}
TableGrid.propTypes = {
  headContent: propTypes.array,
  bodyContent: propTypes.array
};
TableGrid.defaultProps = {
  headContent: [],
  bodyContent: []
};

var css$p = {"TabsBar":"_3ZvuE","TabsCont":"_1Zp4v","TabsScroll":"_3KvVr","TabsArea":"_2je_1","TabsContent":"_3EyBN"};

var _excluded$d = ["aria-label", "aria-labelledby", "action", "children", "classes", "className", "component", "onChange", "orientation", "selectionFollowsFocus", "TabScrollButtonProps", "value"];
var Tabs = forwardRef(function Tabs(props, ref) {
  var ariaLabel = props['aria-label'],
      ariaLabelledBy = props['aria-labelledby'],
      childrenProp = props.children,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      onChange = props.onChange,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      selectionFollowsFocus = props.selectionFollowsFocus,
      value = props.value,
      other = _objectWithoutPropertiesLoose(props, _excluded$d);

  var valueToIndex = new Map();
  var tabsRef = useRef(null);
  var tabListRef = useRef(null);
  var childIndex = 0;
  var children = Children.map(childrenProp, function (child) {
    if (!isValidElement(child)) {
      return null;
    }

    var childValue = child.props.value === undefined ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    var selected = childValue === value;
    childIndex += 1;
    return cloneElement(child, _extends({
      selected: selected,
      selectionFollowsFocus: selectionFollowsFocus,
      onChange: onChange,
      value: childValue
    }, childIndex === 1 && value === false && !child.props.tabIndex ? {
      tabIndex: 0
    } : {}));
  });
  console.log('🚀 ~ file: index.js ~ line 47 ~ children ~ childrenProp', childrenProp);

  var handleKeyDown = function handleKeyDown(event) {
    var target = event.target;
    var role = target.getAttribute('role');

    if (role !== 'tab') {
      return;
    }

    var newFocusTarget = null;
    var previousItemKey = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';
    var nextItemKey = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';

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

  return /*#__PURE__*/createElement(Component, _extends({
    className: css$p.TabsCont + " ui-Tabs-cont",
    ref: ref
  }, other), /*#__PURE__*/createElement("div", {
    ref: tabsRef
  }, /*#__PURE__*/createElement("div", {
    className: css$p.TabsArea + " ui-tabs-area",
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-orientation": orientation === 'vertical' ? 'vertical' : null,
    onKeyDown: handleKeyDown,
    ref: tabListRef,
    role: "tablist"
  }, children)));
});

var css$q = {"carrousel":"_1rlBL","carrouselInner":"_1YPPV","carrouselItem":"_3pMEX","carrouselControlPrev":"_1_yGr","carrouselControlNext":"_YRcDS","carrouselControlNextIcon":"_1tZ89"};

var Carrousel = function Carrousel(_ref) {
  var childrenProp = _ref.children;

  var _useState = useState(0),
      Value = _useState[0],
      SetValue = _useState[1];

  var refCont = createRef();
  var refPrev = createRef();
  var refNext = createRef();
  var childIndex = 0;

  function handleClick(_ref2) {
    var target = _ref2.target;
    var dataValue = target.dataset.slide;
    var contChild = [].concat(refCont.current.children);
    var getValue = Value;

    if (dataValue === 'prev') {
      getValue--;

      if (getValue < 0) {
        getValue = 0;
      }

      SetValue(getValue);
    } else {
      getValue++;

      if (getValue >= contChild.length - 1) {
        getValue = contChild.length - 1;
      }

      SetValue(getValue);
    }

    if (getValue === 0) {
      refPrev.current.setAttribute('hidden', 'true');
    } else if (getValue === contChild.length - 1) {
      refNext.current.setAttribute('hidden', 'true');
    } else {
      refPrev.current.removeAttribute('hidden');
      refNext.current.removeAttribute('hidden');
    }
  }

  var children = React__default.Children.map(childrenProp, function (child) {
    if (!React__default.isValidElement(child)) {
      return null;
    }

    var childValue = child.props.value === undefined ? childIndex : child.props.value;
    childIndex += 1;
    return React__default.cloneElement(child, {
      index: childValue,
      value: Value
    });
  });
  return /*#__PURE__*/React__default.createElement("div", {
    id: "carouselExampleControls",
    className: css$q.carrousel + " " + css$q.slide + " iu-slider",
    "data-ride": "carousel"
  }, /*#__PURE__*/React__default.createElement("div", {
    ref: refCont,
    className: css$q.carrouselInner + " ui-carrusel-inner"
  }, children), /*#__PURE__*/React__default.createElement("button", {
    className: css$q.carrouselControlPrev + " ui-carrusel-control-prev",
    "data-slide": "prev",
    onClick: handleClick,
    ref: refPrev,
    hidden: true
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "keyboard_arrow_left"
  })), /*#__PURE__*/React__default.createElement("button", {
    className: css$q.carrouselControlNext + " ui-carrusel-control-next",
    "data-slide": "next",
    onClick: handleClick,
    ref: refNext
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "keyboard_arrow_right"
  })));
};

var css$r = {"Section":"_2biAj"};

var _excluded$e = ["children", "tabs"];

var PanelSection = function PanelSection(_ref) {
  var childrenProp = _ref.children,
      tabs = _ref.tabs,
      others = _objectWithoutPropertiesLoose(_ref, _excluded$e);

  var _useState = useState(0),
      value = _useState[0],
      setValue = _useState[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  var childIndex = 0;
  var children = React__default.Children.map(childrenProp, function (child) {
    if (!React__default.isValidElement(child)) {
      return null;
    }

    var childValue = child.props.value === undefined ? childIndex : child.props.value;
    childIndex += 1;
    return React__default.cloneElement(child, {
      index: childValue,
      value: value
    });
  });
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: css$r.Section
  }, others), /*#__PURE__*/React__default.createElement(AsideSection, {
    value: value,
    onChange: handleChange
  }, tabs && tabs.map(function (elem) {
    return /*#__PURE__*/React__default.createElement(BtnSec, {
      label: elem.label,
      key: elem.id
    });
  })), children);
};

var _excluded$f = ["tabs", "panels"];
var PanelTabs = function PanelTabs(props) {
  var tabs = props.tabs,
      panels = props.panels,
      others = _objectWithoutPropertiesLoose(props, _excluded$f);

  var _React$useState = React__default.useState(0),
      value = _React$useState[0],
      setValue = _React$useState[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return /*#__PURE__*/React__default.createElement("div", others, /*#__PURE__*/React__default.createElement(Tabs, {
    value: value,
    onChange: handleChange
  }, tabs.map(function (elem) {
    return /*#__PURE__*/React__default.createElement(Tab, {
      label: elem.label,
      key: elem.id,
      nameIcon: elem.nameIcon,
      positionIcon: elem.positionIcon
    });
  })), panels.map(function (elem, index) {
    return /*#__PURE__*/React__default.createElement(TabPanel, {
      value: value,
      index: index,
      key: elem.id
    }, elem.text);
  }));
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

var css$s = {"col":"_1QLy6"};

var Col = function Col(props) {
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: css$s.col
  }, props));
};

var css$t = {"row":"_7DQjb"};

var Row = function Row(props) {
  return /*#__PURE__*/React__default.createElement("section", _extends({
    className: css$t.row
  }, props));
};

export { Accordion, AccordionItem, AsideNav, AsideSection, BtnSec, Button, Card, Carrousel, Col, Dropdown, Graphics, Icon, InputAction, InputControl, InputField, Link, Modal, Multimedia, PanelSection, PanelTabs, RecognitionVoice, Row, Section, Select, Tab, TabPanel, Table, TableGrid, Tabs, Text, Textarea, Tooltip, Video };
//# sourceMappingURL=index.modern.js.map
