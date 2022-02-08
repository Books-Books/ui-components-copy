function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactGoogleCharts = require('react-google-charts');

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
var BtnSec = React.forwardRef(function BtnSec(props, ref) {
  var label = props.label,
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

  return /*#__PURE__*/React__default.createElement("li", {
    role: "presentation"
  }, /*#__PURE__*/React__default.createElement("a", _extends({
    href: "#section-" + label,
    role: "tab",
    className: css.BtnSec + " " + addClass,
    "aria-selected": selected,
    onClick: handleClick,
    onFocus: handleFocus
  }, other), /*#__PURE__*/React__default.createElement("span", {
    "class": "sr-only"
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

var base = {"ColorBase":"_3AGk-"};

var css$1 = {"Icon":"_3qt0u"};

var _excluded$1 = ["nameIcon", "addClass"];
var Icon = function Icon(_ref) {
  var nameIcon = _ref.nameIcon,
      addClass = _ref.addClass,
      args = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  return /*#__PURE__*/React__default.createElement("i", _extends({
    "aria-hidden": "true",
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

var _excluded$2 = ["styled", "label", "hasAriaLabel", "icon", "addClass", "disabled", "children"];
var Button = function Button(_ref) {
  var styled = _ref.styled,
      label = _ref.label,
      hasAriaLabel = _ref.hasAriaLabel,
      icon = _ref.icon,
      addClass = _ref.addClass,
      disabled = _ref.disabled,
      children = _ref.children,
      args = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  return /*#__PURE__*/React__default.createElement("button", _extends({
    className: base.ColorBase + " " + css$2.ButtonBase + " " + addClass,
    styled: styled,
    disabled: disabled,
    type: "button",
    "aria-label": hasAriaLabel ? "" + label : ''
  }, args), children, icon && /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: icon
  }), !hasAriaLabel ? /*#__PURE__*/React__default.createElement("span", null, label) : /*#__PURE__*/React__default.createElement(React.Fragment, null));
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

var css$3 = {"c-collapsible-container-header":"_1CW18","c-collapsible-container-body":"_2ygtY","active":"_1xv7i","show":"_2moa5"};

var _excluded$3 = ["item", "index", "stateIcon", "addClass"];
function AccordionItem(_ref) {
  var item = _ref.item,
      index = _ref.index,
      stateIcon = _ref.stateIcon,
      addClass = _ref.addClass,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  var _useState = React.useState(false),
      Expanded = _useState[0],
      SetExpanded = _useState[1];

  var _useState2 = React.useState(''),
      active = _useState2[0],
      setActive = _useState2[1];

  var toggleAccordion = function toggleAccordion() {
    Expanded ? SetExpanded(false) : SetExpanded(true);

    if (active === '') {
      setActive(css$3['active']);
    } else {
      setActive('');
    }
  };

  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("button", _extends({
    className: css$3['c-collapsible-container-header'] + " " + addClass,
    "aria-expanded": Expanded,
    onClick: toggleAccordion
  }, props), /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: item.dataIcon
  }), /*#__PURE__*/React__default.createElement("p", null, " ", item.title), /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: stateIcon
  })), /*#__PURE__*/React__default.createElement("div", {
    className: css$3['c-collapsible-container-body'] + " " + active,
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

var css$4 = {"dropdownContainer":"_fH-Dn","DropdownCont":"_D5DjI","dropdownArrow":"_2SmiC","navItem":"_2UAjf","dropdownMenu":"_jT9p5","dropdownMenu-item":"_2SR1I","navLink":"_362sV","dropdownItem":"_1JWTx"};

var Dropdown = function Dropdown(_ref) {
  var _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? '' : _ref$icon,
      children = _ref.children,
      _ref$hasAriaLabel = _ref.hasAriaLabel,
      hasAriaLabel = _ref$hasAriaLabel === void 0 ? false : _ref$hasAriaLabel,
      label = _ref.label,
      addClass = _ref.addClass,
      svgHide = _ref.svgHide,
      ulClass = _ref.ulClass,
      _ref$isExpanded = _ref.isExpanded,
      isExpanded = _ref$isExpanded === void 0 ? false : _ref$isExpanded,
      fnMenuExpanded = _ref.fnMenuExpanded;

  var _useState = React.useState(false),
      Expanded = _useState[0],
      SetExpanded = _useState[1];

  var toggleMenu = function toggleMenu() {
    Expanded ? SetExpanded(false) : SetExpanded(true);
  };

  var closeMenu = function closeMenu(e) {
    if (e.relatedTarget === null) {
      SetExpanded(false);
      typeof fnMenuExpanded === 'function' && fnMenuExpanded(false);
    }
  };

  var closeMenuOnEsc = function closeMenuOnEsc(e) {
    if ((e.keyCode || e.which) === 27) SetExpanded(false);
  };

  React.useEffect(function () {
    SetExpanded(isExpanded);
  }, [isExpanded]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: css$4['dropdownContainer']
  }, /*#__PURE__*/React__default.createElement(Button, {
    hasAriaLabel: hasAriaLabel,
    "aria-expanded": Expanded,
    className: css$4.DropdownCont + " " + addClass + " ",
    onClick: toggleMenu,
    onBlur: closeMenu,
    onKeyDown: closeMenuOnEsc
  }, icon, label, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 24 24",
    focusable: "false",
    "aria-hidden": "true",
    className: css$4['dropdownArrow'],
    hide: svgHide
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M7 10l5 5 5-5z"
  }))), /*#__PURE__*/React__default.createElement("ul", {
    role: "list",
    className: css$4.dropdownMenu + " " + ulClass,
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

var css$5 = {"InputAction":"_xB2Ha","LabelStyled":"_1X4kF","TextFileName":"_OaT0I"};

var _excluded$4 = ["type", "styled", "label", "addClass"];
var InputAction = function InputAction(_ref) {
  var type = _ref.type,
      styled = _ref.styled,
      label = _ref.label,
      addClass = _ref.addClass,
      args = _objectWithoutPropertiesLoose(_ref, _excluded$4);

  var id = uniqueId_1('ui-');

  var uploadIcon = /*#__PURE__*/React__default.createElement("svg", {
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
  var colorIcon = /*#__PURE__*/React__default.createElement("svg", {
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
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("label", _extends({
    className: base.ColorBase + " " + css$5.LabelStyled + " " + addClass,
    htmlFor: id,
    styled: styled
  }, args), /*#__PURE__*/React__default.createElement("input", {
    className: css$5.InputAction,
    type: type,
    id: id
  }), type === 'color' ? colorIcon : uploadIcon, label !== '' ? /*#__PURE__*/React__default.createElement("span", null, label) : /*#__PURE__*/React__default.createElement(React.Fragment, null)));
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

var css$6 = {"InputStyled":"_1isCe","InputCont":"_1YikN","CheckCont":"_WN9au","CheckBg":"_3z4b_","CheckLabel":"_10bHL","CheckTrack":"_2QBZ5","input-error":"_8exJT","input-succes":"_3GadY"};

var _excluded$5 = ["type", "label", "stateInput", "name", "addClass"];
var InputControl = function InputControl(_ref) {
  var type = _ref.type,
      label = _ref.label,
      stateInput = _ref.stateInput,
      name = _ref.name,
      addClass = _ref.addClass,
      args = _objectWithoutPropertiesLoose(_ref, _excluded$5);

  var _useState = React.useState(false),
      check = _useState[0],
      setCheck = _useState[1];

  var _useState2 = React.useState(''),
      getStateIcon = _useState2[0],
      setStateIcon = _useState2[1];

  var id = uniqueId_1('ui-');

  React.useEffect(function () {
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
  }))), /*#__PURE__*/React__default.createElement("span", {
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

  var _useState = React.useState(false),
      isFocus = _useState[0],
      setIsFocus = _useState[1];

  var _useState2 = React.useState(''),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = React.useState(''),
      getStateInput = _useState3[0],
      setStateInput = _useState3[1];

  React.useEffect(function () {
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
  }) : /*#__PURE__*/React__default.createElement(React.Fragment, null), /*#__PURE__*/React__default.createElement("input", {
    className: css$7.InputStyled,
    type: type,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    id: id
  }), type !== 'date' && /*#__PURE__*/React__default.createElement("span", {
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
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Reproducir' : _ref$label,
      addClass = _ref.addClass,
      _ref$isPrimary = _ref.isPrimary,
      isPrimary = _ref$isPrimary === void 0 ? true : _ref$isPrimary;
  var playButton = /*#__PURE__*/React__default.createElement("svg", {
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
  var pauseButton = /*#__PURE__*/React__default.createElement("svg", {
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

  var _useState = React.useState(false),
      getStateBtnAudio = _useState[0],
      setStateBtnAudio = _useState[1];

  var _useState2 = React.useState(playButton),
      getIcon = _useState2[0],
      setIcon = _useState2[1];

  var refAudio = React.createRef();

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
    var $audio = refAudio.current;
    validateStateBtn($audio);
  }

  function handleFinish(e) {
    setStateBtnAudio(false);
    setIcon(playButton);
  }

  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "" + addClass
  }, /*#__PURE__*/React__default.createElement("audio", {
    src: url,
    ref: refAudio,
    onEnded: handleFinish
  }), /*#__PURE__*/React__default.createElement("button", {
    id: "btnAudio",
    onClick: handlePlayPause,
    className: css$9['c-aud-btn'] + " " + (isPrimary ? '' : css$9['c-aud-secundary']),
    "aria-label": getStateBtnAudio ? 'Pausar' : 'Reproducir'
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$9['c-aud-btn-content'],
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

var css$a = {"Panel":"_qaB0F","fadeIn":"_23_l4"};

var _excluded$7 = ["children", "value", "index", "addClass", "roleDescription"];
var TabPanel = function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      addClass = props.addClass,
      _props$roleDescriptio = props.roleDescription,
      roleDescription = _props$roleDescriptio === void 0 ? 'slide' : _props$roleDescriptio,
      other = _objectWithoutPropertiesLoose(props, _excluded$7);

  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: css$a.Panel + " " + addClass,
    role: "group",
    hidden: value !== index,
    id: "simple-tabpanel-" + index,
    "aria-roledescription": roleDescription,
    "aria-labelledby": "simple-tab-" + index,
    tabIndex: "0"
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
      disabled = _ref$disabled === void 0 ? '' : _ref$disabled,
      _ref$styledButton = _ref.styledButton,
      styledButton = _ref$styledButton === void 0 ? 'secondary-icon' : _ref$styledButton,
      onRecord = _ref.onRecord;
  var micOnIcon = /*#__PURE__*/React__default.createElement("svg", {
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
  var micOffIcon = /*#__PURE__*/React__default.createElement("svg", {
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

  var _useState = React.useState('record'),
      action = _useState[0],
      setAction = _useState[1];

  var _useState2 = React.useState(''),
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
      console.log('DESDE UI', strText);
      setdata && setdata(strText);
    }

    recognition.stop();
    setAction('record');
  };

  React.useEffect(function () {
    GRAMMAR = "#JSGF V1.0; grammar ; public <command> = " + (validate || '') + " ;";
  }, [validate]);
  var children = React.Children.map(childrenProp, function (child) {
    if (!React.isValidElement(child)) {
      return null;
    }

    return React__default.cloneElement(child, {
      children: diagnostic
    });
  });
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement(Button, {
    type: "button",
    onClick: runSpeechRecognition,
    label: action === 'record' ? 'Realizar grabación' : 'Detener grabación',
    disabled: disabled,
    styled: styledButton,
    hasAriaLabel: true
  }, action === 'record' ? micOnIcon : micOffIcon), children && children);
};

var css$b = {"section":"_Nahni","fadeInDown":"_BDs2n"};

var _excluded$8 = ["children", "value", "index", "label", "addClass"];

var Section = function Section(_ref) {
  var children = _ref.children,
      value = _ref.value,
      index = _ref.index,
      label = _ref.label,
      addClass = _ref.addClass,
      other = _objectWithoutPropertiesLoose(_ref, _excluded$8);

  return /*#__PURE__*/React__default.createElement("section", _extends({
    className: css$b.section + " " + addClass,
    role: "tabpanel",
    hidden: value !== index,
    id: "simple-tabpanel-" + index,
    "aria-labelledby": "simple-tab-" + label
  }, other), /*#__PURE__*/React__default.createElement("h2", {
    "class": "sr-only",
    id: "simple-tab-" + label
  }, "Secci\xF3n ", label), children);
};

var css$c = {"SelectStyle":"_2NS2Z","SelectContainer":"_3AjWz","SelectAfter":"_2vUqP","SelectWrapper":"_2BQM5","SelectLabel":"_1YqCo"};

var _excluded$9 = ["placeholder", "stateInput", "options", "addClass", "isLabelVisible", "label"];
var Select = function Select(_ref) {
  var placeholder = _ref.placeholder,
      stateInput = _ref.stateInput,
      options = _ref.options,
      addClass = _ref.addClass,
      _ref$isLabelVisible = _ref.isLabelVisible,
      isLabelVisible = _ref$isLabelVisible === void 0 ? 'true' : _ref$isLabelVisible,
      label = _ref.label,
      args = _objectWithoutPropertiesLoose(_ref, _excluded$9);

  var name = uniqueId_1('ui-name-');

  return /*#__PURE__*/React__default.createElement("label", _extends({
    className: css$c.SelectWrapper + " " + addClass,
    "data-state": stateInput
  }, args), /*#__PURE__*/React__default.createElement("span", {
    className: css$c['SelectLabel'] + " " + (isLabelVisible ? '' : 'sr-only')
  }, label), /*#__PURE__*/React__default.createElement("div", {
    className: css$c['SelectContainer'],
    "data-state": stateInput
  }, /*#__PURE__*/React__default.createElement("select", {
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

var css$d = {"TabsBtn":"_2P1fM","TabsBtnContent":"_293oo","TabsBtnContentLabel":"_h75tA","TabsBtnIndicator":"_247Rk","TabsBtnIndicatorContent":"_21fWb"};

var _excluded$a = ["classes", "className", "disabled", "fullWidth", "nameIcon", "positionIcon", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "value", "addClass"];
var Tab = React.forwardRef(function Tab(props, ref) {
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

  return /*#__PURE__*/React.createElement("button", _extends({
    ref: ref,
    role: "tab",
    className: css$d.TabsBtn + " " + addClass,
    "aria-selected": selected,
    disabled: disabled,
    onClick: handleClick,
    onFocus: handleFocus,
    tabIndex: selected ? 0 : -1
  }, other), /*#__PURE__*/React.createElement("span", {
    className: css$d.TabsBtnContent,
    "position-icon": positionIcon
  }, /*#__PURE__*/React.createElement(Icon, {
    "aria-hidden": "true",
    nameIcon: nameIcon
  }), ' ', /*#__PURE__*/React.createElement("span", {
    className: css$d.TabsBtnContentLabel
  }, label), ' '), /*#__PURE__*/React.createElement("span", {
    className: css$d.TabsBtnIndicator
  }, /*#__PURE__*/React.createElement("span", {
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
  var id = _ref.id,
      placeholder = _ref.placeholder,
      label = _ref.label,
      _ref$isLabelVisible = _ref.isLabelVisible,
      isLabelVisible = _ref$isLabelVisible === void 0 ? false : _ref$isLabelVisible,
      rows = _ref.rows,
      maxWords = _ref.maxWords,
      addClass = _ref.addClass;

  var _useState = React.useState(0),
      Count = _useState[0],
      SetCount = _useState[1];

  var _useState2 = React.useState(10000),
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
  }, /*#__PURE__*/React__default.createElement("label", {
    "for": id
  }, /*#__PURE__*/React__default.createElement("span", {
    className: isLabelVisible ? '' : 'sr-only'
  }, label), /*#__PURE__*/React__default.createElement("textarea", {
    className: css$f.TextareaItem,
    rows: rows,
    placeholder: placeholder,
    onKeyPress: HandleChange,
    maxLength: MaxLength,
    id: id
  })), maxWords && /*#__PURE__*/React__default.createElement("span", {
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

var css$g = {"toggletip-container":"_3Z4HX","toggletip-icon":"_hQ4M-","toggletip-content":"_2SzZ3"};

var Toggletip = function Toggletip(_ref) {
  var content = _ref.content;

  var _useState = React.useState(''),
      toggletipContent = _useState[0],
      SetToggletipContent = _useState[1];

  var changeToggletipContent = function changeToggletipContent() {
    toggletipContent == '' ? SetToggletipContent(
    /*#__PURE__*/
    React__default.createElement("div", {
      className: css$g['toggletip-content']
    }, content)) : SetToggletipContent('');
  };

  var emptyToggletipContent = function emptyToggletipContent() {
    SetToggletipContent('');
  };

  var emptyToggletipContentOnEsc = function emptyToggletipContentOnEsc(e) {
    if ((e.keyCode || e.which) === 27) SetToggletipContent('');
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: css$g['toggletip-container']
  }, /*#__PURE__*/React__default.createElement(Button, {
    hasAriaLabel: "false",
    styled: "primary-icon",
    label: "",
    onClick: changeToggletipContent,
    onBlur: emptyToggletipContent,
    onKeyDown: emptyToggletipContentOnEsc
  }, /*#__PURE__*/React__default.createElement("span", {
    className: css$g['toggletip-icon'],
    "aria-hidden": "true"
  }, "i"), /*#__PURE__*/React__default.createElement("span", {
    "class": "sr-only"
  }, "M\xE1s informaci\xF3n")), /*#__PURE__*/React__default.createElement("div", {
    role: "status"
  }, toggletipContent));
};

var css$h = {"TooltipCont":"_2fDQR","TooltipItem":"_3KPt0"};

var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
      addClass = _ref.addClass,
      id = _ref.id,
      content = _ref.content;
  return /*#__PURE__*/React__default.createElement("div", {
    className: css$h.TooltipCont + " " + addClass
  }, children, /*#__PURE__*/React__default.createElement("div", {
    role: "tooltip",
    className: css$h.TooltipItem,
    id: id
  }, content));
};

var css$i = {"c-vid":"_2uck7","c-vid-controls":"_2yF4K","c-vid-controls-text":"_2W8d_","progress-content":"_29s-a","progress":"_2vrVD","progress-bar":"_5SxVn","c-vid-controls-volumn":"_3e9Q1","c-vid-controls-volumn-item":"_2YNZg"};

function Video(_ref) {
  var url = _ref.url,
      width = _ref.width,
      addClass = _ref.addClass;
  var playIcon = /*#__PURE__*/React__default.createElement("svg", {
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
  var pauseIcon = /*#__PURE__*/React__default.createElement("svg", {
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
  var fullscreenIcon = /*#__PURE__*/React__default.createElement("svg", {
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
  var closeFullScreenIcon = /*#__PURE__*/React__default.createElement("svg", {
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

  var _useState = React.useState('00:00'),
      getDurationVideo = _useState[0],
      setDurationVideo = _useState[1];

  var _useState2 = React.useState('00:00'),
      getCurrentTiem = _useState2[0],
      setCurrentTime = _useState2[1];

  var _useState3 = React.useState({
    state: false,
    icon: playIcon,
    label: 'Reproducir video'
  }),
      getstateVideoPlay = _useState3[0],
      setStateVideoPlay = _useState3[1];

  var _useState4 = React.useState({
    state: false,
    icon: fullscreenIcon,
    label: 'Ver en pantalla completa'
  }),
      getStateScreen = _useState4[0],
      setStateScreen = _useState4[1];

  var _useState5 = React.useState(25),
      getValueVolum = _useState5[0],
      setValueVolumn = _useState5[1];

  var refCont = React.createRef();
  var refVideo = React.createRef();
  var refProgress = React.createRef();
  var refProgressBar = React.createRef();
  var refVolumn = React.createRef();

  function handlePlay() {
    var $video = refVideo.current;

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
    var isInFullScreen = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null;
    var docElm = refCont.current;

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
    var volume = value / 100;
    setValueVolumn(value);
    video.volume = volume;
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: css$i['c-vid'] + " " + addClass,
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
    className: css$i['progress-content']
  }, /*#__PURE__*/React__default.createElement("div", {
    ref: refProgress,
    className: css$i.progress,
    onClick: handleProcessControl
  }, /*#__PURE__*/React__default.createElement("div", {
    ref: refProgressBar,
    className: css$i['progress-bar'],
    onChange: handleBarProgress
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: css$i['c-vid-controls']
  }, /*#__PURE__*/React__default.createElement("button", {
    "aria-label": getstateVideoPlay.label,
    onClick: handlePlay
  }, getstateVideoPlay.icon), /*#__PURE__*/React__default.createElement("p", {
    className: css$i['c-vid-controls-text']
  }, /*#__PURE__*/React__default.createElement("span", null, getCurrentTiem), " / ", /*#__PURE__*/React__default.createElement("span", null, getDurationVideo)), /*#__PURE__*/React__default.createElement("div", {
    className: css$i['c-vid-controls-volumn']
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
    "for": "volumeControl"
  }, /*#__PURE__*/React__default.createElement("span", {
    "class": "sr-only"
  }, "Controlar volumen"), /*#__PURE__*/React__default.createElement("input", {
    className: css$i['c-vid-controls-volumn-item'],
    ref: refVolumn,
    id: "volumeControl",
    type: "range",
    min: "0",
    max: "100",
    step: "5",
    value: getValueVolum,
    onChange: handleVolumn,
    "aria-valuetext": getValueVolum + "%"
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

var css$j = {"c-side":"_3jq03","c-side-nav":"_ORlc2","c-side-nav-item":"_2VUuV","c-overlay":"_1ZsvR","position-left":"_2dAro","aside--active--left":"_3yTuc","position-right":"_2GOdp","aside--active--right":"_28cLO","overlay--active":"_IKRE0"};

var AsideNav = function AsideNav(_ref) {
  var children = _ref.children,
      dataButton = _ref.dataButton,
      content = _ref.content,
      location = _ref.location;

  var _useState = React.useState(false),
      getStateAside = _useState[0],
      setStateAside = _useState[1];

  var _useState2 = React.useState(''),
      getLocationAside = _useState2[0],
      setLocationAside = _useState2[1];

  var refModal = React.createRef();
  var refOverlay = React.createRef();
  React.useEffect(function () {
    var $aside = refModal.current;

    function locationAside() {
      if (location === 'right') {
        setLocationAside('aside--active--right');
        $aside.classList.add(css$j['position-right']);
      } else {
        setLocationAside('aside--active--left');
        $aside.classList.add(css$j['position-left']);
      }
    }

    locationAside();
  });

  function stateAside(elementModal, elementOverlay) {
    if (getStateAside) {
      elementModal.classList.remove(css$j[getLocationAside]);
      elementOverlay.classList.remove(css$j['overlay--active']);
      setStateAside(false);
    } else {
      elementModal.classList.add(css$j[getLocationAside]);
      elementOverlay.classList.add(css$j['overlay--active']);
      setStateAside(true);
    }
  }

  function handleAside() {
    var $aside = refModal.current;
    var $overlay = refOverlay.current;
    stateAside($aside, $overlay);
  }

  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    ref: refOverlay,
    className: css$j['c-overlay'] + " ui-overlay",
    id: "overlay"
  }), /*#__PURE__*/React__default.createElement("div", {
    ref: refModal,
    className: css$j['c-side'] + " ui-aside",
    id: "aside"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "close",
    onClick: handleAside,
    style: {
      cursor: 'pointer'
    }
  }), children || /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("h2", null, content.title), /*#__PURE__*/React__default.createElement("ul", {
    className: css$j['c-side-nav'] + " ui-aside-nav"
  }, content.list.map(function (item, index) {
    return /*#__PURE__*/React__default.createElement("li", {
      className: css$j['c-side-nav-item'] + " ui-aside-nav-item",
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

var css$k = {"AsideSection":"_37BVW"};

var _excluded$c = ["aria-label", "aria-labelledby", "action", "children", "classes", "className", "component", "onChange", "orientation", "selectionFollowsFocus", "TabScrollButtonProps", "value", "labelName"];
var AsideSection = React.forwardRef(function Tabs(props, ref) {
  var _React$createElement;

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
      _props$labelName = props.labelName,
      labelName = _props$labelName === void 0 ? 'Lista de secciones' : _props$labelName,
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
  }, /*#__PURE__*/React__default.createElement("h2", {
    "class": "sr-only",
    id: "section-list"
  }, labelName), /*#__PURE__*/React__default.createElement("ul", (_React$createElement = {
    className: css$k.AsideSection,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-orientation": orientation === 'vertical' ? 'vertical' : null,
    onKeyDown: handleKeyDown,
    ref: tabListRef,
    role: "tablist"
  }, _React$createElement["aria-labelledby"] = "section-list", _React$createElement), children)));
});

var css$l = {"u-text":"_16nIh","c-card":"_1iLqk","c-card-image":"_2zNmo","c-card-container":"_1Z4zT"};

var Card = function Card(_ref) {
  var width = _ref.width,
      image = _ref.image,
      content = _ref.content,
      supportingText = _ref.supportingText,
      buttons = _ref.buttons;
  return /*#__PURE__*/React__default.createElement("div", {
    className: css$l['c-card'] + " ui-card",
    style: {
      width: width
    }
  }, image.state ? /*#__PURE__*/React__default.createElement("figure", {
    className: css$l['c-card-image'] + " ui-card-img"
  }, /*#__PURE__*/React__default.createElement("img", {
    src: image.url,
    alt: image.alt
  })) : /*#__PURE__*/React__default.createElement(React.Fragment, null), /*#__PURE__*/React__default.createElement("div", {
    className: css$l['c-card-container'] + " ui-card-container"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "c-card-container-title"
  }, /*#__PURE__*/React__default.createElement("h3", null, content.title), /*#__PURE__*/React__default.createElement("p", {
    className: css$l['u-text'] + " ui-text"
  }, content.text)), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("p", {
    className: css$l['u-text'] + " ui-text-two"
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
  })) : /*#__PURE__*/React__default.createElement(React.Fragment, null)));
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

var css$m = {"c-collapsible":"_3W_Aj"};

var Accordion = function Accordion(_ref) {
  var content = _ref.content,
      width = _ref.width,
      backgroundColor = _ref.backgroundColor,
      color = _ref.color;

  var _useState = React.useState(null);

  var _useState2 = React.useState(''),
      getStateIcon = _useState2[0];

  var style = {
    backgroundColor: backgroundColor,
    color: color
  };

  return /*#__PURE__*/React__default.createElement("ul", {
    className: css$m['c-collapsible'] + " ui-collapsible",
    style: {
      width: width
    }
  }, content.map(function (item, index) {
    return /*#__PURE__*/React__default.createElement("li", {
      className: css$m['c-collapsible-container'] + " ui-collapsible-container",
      key: index,
      style: style
    }, /*#__PURE__*/React__default.createElement(AccordionItem, {
      item: item,
      index: index,
      stateIcon: getStateIcon === "body" + index ? 'expand_less' : 'expand_more',
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
  return /*#__PURE__*/React__default.createElement(reactGoogleCharts.Chart, _extends({
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

var css$n = {"c-modal":"_6eOcM","c-modal-overlay":"_1q2aa","c-modal__close-button":"__SM4G","overlay--active":"_20Zpv","modal--active":"_2MLWh"};

var Modal = function Modal(_ref) {
  var children = _ref.children,
      dataButton = _ref.dataButton,
      title = _ref.title,
      text = _ref.text;

  var _useState = React.useState(false),
      getModal = _useState[0],
      setModal = _useState[1];

  var refModal = React.createRef();
  var refOverlay = React.createRef();
  var modalIcon = /*#__PURE__*/React__default.createElement("svg", {
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
      elementModal.classList.remove(css$n['modal--active']);
      elementOverlay.classList.remove(css$n['overlay--active']);
      setModal(false);
    } else {
      elementModal.classList.add(css$n['modal--active']);
      elementOverlay.classList.add(css$n['overlay--active']);
      setModal(true);
    }
  }

  function closeModal(elementModal, elementOverlay) {
    elementModal.classList.remove(css$n['modal--active']);
    elementOverlay.classList.remove(css$n['overlay--active']);
    setModal(false);
  }

  function handleModal() {
    var $modal = refModal.current;
    var $overlay = refOverlay.current;
    stateModal($modal, $overlay);
  }

  function closeModalOnEsc(e) {
    if ((e.keyCode || e.which) === 27) {
      var $modal = refModal.current;
      var $overlay = refOverlay.current;
      closeModal($modal, $overlay);
    }
  }

  React.useEffect(function () {
    if (setModal) {
      document.addEventListener('keydown', closeModalOnEsc);
    } else {
      document.removeEventListener('keydown', closeModalOnEsc, false);
    }
  }, [getModal]);
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement(Button, {
    label: dataButton.label,
    styled: dataButton.styled,
    onClick: handleModal,
    icon: modalIcon,
    hasAriaLabel: dataButton.hasAriaLabel
  }), /*#__PURE__*/React__default.createElement("div", {
    ref: refOverlay,
    className: css$n['c-modal-overlay'] + " ui-modal-overlay",
    id: "overlay",
    onClick: handleModal
  }), /*#__PURE__*/React__default.createElement("div", {
    role: "dialog",
    ref: refModal,
    className: css$n['c-modal'] + " ui-modal",
    id: "modal"
  }, children || /*#__PURE__*/React__default.createElement("div", {
    className: "ui-modal-content"
  }, /*#__PURE__*/React__default.createElement("h3", null, " ", title, " "), /*#__PURE__*/React__default.createElement("p", null, " ", text, " ")), /*#__PURE__*/React__default.createElement("button", {
    className: "" + css$n['c-modal__close-button'],
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

var cssNavbar = {"menuContainer":"_1O8g7","ulMenu":"_3GtQQ","styleBtn":"_8TzwT","styleUlMenu":"_1J1dN","styleUlAcc":"_2luFu","styleUlHelp":"_3J7fz","styleLi":"_2FQig","stylelinks":"_1-rcw","styleLink":"_uX2AO","styleNumber":"_6Gdkr","styleSubLi":"_1t9Uz","styleBtns":"_pyjf0","segundoMenu":"_3okIe","positionUlRelative":"_MrthX","spanText":"_o6aML","iconRight":"_pORcv"};

function NavBar(_ref) {
  var _ref$hrefInicio = _ref.hrefInicio,
      hrefInicio = _ref$hrefInicio === void 0 ? '#' : _ref$hrefInicio;

  var _useState = React.useState(false),
      dropdownMenu = _useState[0],
      setDropdownMenu = _useState[1];

  var _useState2 = React.useState(false),
      dropdownAcc = _useState2[0],
      setDropdownAcc = _useState2[1];

  var _useState3 = React.useState(false),
      dropdownHelp = _useState3[0],
      setDropdownHelp = _useState3[1];

  var svgMenu = /*#__PURE__*/React__default.createElement("svg", {
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
  var svgInicio = /*#__PURE__*/React__default.createElement("svg", {
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
  var svgAccesibility = /*#__PURE__*/React__default.createElement("svg", {
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
  var svgHelp = /*#__PURE__*/React__default.createElement("svg", {
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
  var content = [{
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
  }].map(function (enlaces, i) {
    if (i < 9) {
      return /*#__PURE__*/React__default.createElement("li", {
        className: cssNavbar['styleLi']
      }, /*#__PURE__*/React__default.createElement("a", {
        href: enlaces.url,
        className: cssNavbar['stylelinks']
      }, /*#__PURE__*/React__default.createElement("span", {
        className: cssNavbar['styleNumber']
      }, "0" + (i + 1) + ".", " "), enlaces.name));
    } else {
      return /*#__PURE__*/React__default.createElement("li", {
        className: cssNavbar['styleLi']
      }, /*#__PURE__*/React__default.createElement("a", {
        href: enlaces.url,
        className: cssNavbar['stylelinks']
      }, /*#__PURE__*/React__default.createElement("span", {
        className: cssNavbar['styleNumber']
      }, i + 1 + ".", " "), enlaces.name));
    }
  });

  var handleClickDropdown = function handleClickDropdown(state, setState) {
    setDropdownMenu(false);
    setDropdownAcc(false);
    setDropdownHelp(false);
    setState(!state);
  };

  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("nav", {
    className: cssNavbar['menuContainer'],
    "aria-label": "menu principal"
  }, /*#__PURE__*/React__default.createElement("ul", {
    role: "list",
    className: cssNavbar['ulMenu']
  }, /*#__PURE__*/React__default.createElement("li", {
    onClick: function onClick() {
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
    onClick: function onClick() {
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
    className: "" + cssNavbar.spanText
  }, "Asistencia"), /*#__PURE__*/React__default.createElement("span", {
    "aria-hidden": "true",
    className: 'Icon_Icon__1siX0' + " " + cssNavbar.iconRight
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
    className: cssNavbar.segundoMenu + " " + cssNavbar.positionUlRelative
  }, /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "disableHelp",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Deshabilitar ayuda"))), /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "ActivateInterpreter",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Activar int\xE9rprete"))), /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "activateAudio",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
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
    className: "" + cssNavbar.spanText
  }, "Contraste"), /*#__PURE__*/React__default.createElement("span", {
    className: 'Icon_Icon__1siX0' + " " + cssNavbar.iconRight
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
    className: cssNavbar.segundoMenu + " " + cssNavbar.positionUlRelative
  }, /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "noTheme",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Sin tema"))), /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "noTheme",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Alto contraste"))), /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "noTheme",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Invertir colores"))), /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "noTheme",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Amarillo sobre negro"))), /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "noTheme",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Blanco sobre rojo"))), /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "noTheme",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Verde sobre azul"))), /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "noTheme",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Amarillo sobre azul"))), /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "noTheme",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
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
    className: "" + cssNavbar.spanText
  }, "Tama\xF1o de letra"), /*#__PURE__*/React__default.createElement("span", {
    className: 'Icon_Icon__1siX0' + " " + cssNavbar.iconRight
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
    className: cssNavbar.segundoMenu + " " + cssNavbar.positionUlRelative
  }, /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "fontZise1",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Tama\xF1o de letra 1"))), /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "fontZise2",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Tama\xF1o de letra 2"))), /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    name: "fontZise3",
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
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
    className: "" + cssNavbar.spanText
  }, "Modo Nocturno"))))), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("li", {
    onClick: function onClick() {
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
    className: "" + cssNavbar.spanText
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
    className: "" + cssNavbar.spanText
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
    className: "" + cssNavbar.spanText
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
    className: "" + cssNavbar.spanText
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
    className: "" + cssNavbar.spanText
  }, "Especificaciones t\xE9cnicas")))))))));
}

var css$o = {"table":"_3LoBn","table-content":"_1W60s","table-content-item":"_27m22","body-content":"_2OoWj"};

function Table(_ref) {
  var headLabels = _ref.headLabels,
      bodyContent = _ref.bodyContent;

  var rowContent = function rowContent(item) {
    return item.campoType === 'icon' ? /*#__PURE__*/React__default.createElement(Icon, {
      nameIcon: item.label
    }) : item.campoType === 'input' ? /*#__PURE__*/React__default.createElement(InputControl, {
      type: item.type,
      label: item.label,
      name: item.name
    }) : /*#__PURE__*/React__default.createElement("span", null, item.label);
  };

  return /*#__PURE__*/React__default.createElement("table", {
    className: css$o.table + " ui-table"
  }, /*#__PURE__*/React__default.createElement("thead", null, /*#__PURE__*/React__default.createElement("tr", {
    className: css$o['table-content'] + " ui-table-content"
  }, headLabels.map(function (item, index) {
    return /*#__PURE__*/React__default.createElement("th", {
      key: index,
      className: css$o['table-content-item'] + " ui-table-content-item",
      scope: "col"
    }, item);
  }))), /*#__PURE__*/React__default.createElement("tbody", null, bodyContent.map(function (content, index) {
    return /*#__PURE__*/React__default.createElement("tr", {
      key: "content" + index,
      className: css$o['table-content'] + " " + css$o['body-content'] + " ui-body-content"
    }, content.map(function (item, i) {
      return /*#__PURE__*/React__default.createElement(Fragment, null, item.isRowHeader ? /*#__PURE__*/React__default.createElement("th", {
        key: "item" + i,
        className: css$o['table-content-item'] + " ui-body-content-item",
        scope: "row"
      }, rowContent(item)) : /*#__PURE__*/React__default.createElement("td", {
        key: "item" + i,
        className: css$o['table-content-item'] + " ui-body-content-item"
      }, rowContent(item)));
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

var css$p = {"c-scroll":"_2NOnb","c-gridTable":"_37ybX","c-gridTable-head":"_2mWnf","c-gridTable-body":"_2IfP0","c-gridTable-body-item":"_153aW","c-gridTable-head-item":"_CzEks"};

function TableGrid(_ref) {
  var headContent = _ref.headContent,
      bodyContent = _ref.bodyContent,
      gridColumn = _ref.gridColumn;
  console.log(bodyContent);
  return /*#__PURE__*/React__default.createElement("div", {
    className: css$p['c-scroll'] + " ui-scroll"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$p['c-gridTable'] + " ui-gridTable"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$p['c-gridTable-head'] + " ui-gridTable-head",
    style: gridColumn
  }, headContent.map(function (item, index) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: css$p['c-gridTable-head-item'] + " ui-gridTable-head-item",
      key: "head-" + index
    }, item.type === 'icon' ? /*#__PURE__*/React__default.createElement(Icon, {
      nameIcon: item.label,
      addClass: item.addClass
    }) : /*#__PURE__*/React__default.createElement("span", null, item.label));
  })), /*#__PURE__*/React__default.createElement("div", {
    className: css$p['c-gridTable-body'] + " ui-gridTable-body",
    style: gridColumn
  }, bodyContent.map(function (data) {
    return data.map(function (buttom, index) {
      return /*#__PURE__*/React__default.createElement("div", {
        className: css$p['c-gridTable-body-item'] + " ui-gridTable-body-item",
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

var css$q = {"TabsBar":"_3ZvuE","TabsCont":"_1Zp4v","TabsScroll":"_3KvVr","TabsArea":"_2je_1","TabsContent":"_3EyBN"};

var _excluded$d = ["aria-label", "aria-labelledby", "action", "children", "classes", "className", "component", "onChange", "orientation", "selectionFollowsFocus", "TabScrollButtonProps", "value"];
var Tabs = React.forwardRef(function Tabs(props, ref) {
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
  var tabsRef = React.useRef(null);
  var tabListRef = React.useRef(null);
  var childIndex = 0;
  var children = React.Children.map(childrenProp, function (child) {
    if (!React.isValidElement(child)) {
      return null;
    }

    var childValue = child.props.value === undefined ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    var selected = childValue === value;
    childIndex += 1;
    return React.cloneElement(child, _extends({
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

  return /*#__PURE__*/React.createElement(Component, _extends({
    className: css$q.TabsCont + " ui-Tabs-cont",
    ref: ref
  }, other), /*#__PURE__*/React.createElement("div", {
    ref: tabsRef
  }, /*#__PURE__*/React.createElement("div", {
    className: css$q.TabsArea + " ui-tabs-area",
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-orientation": orientation === 'vertical' ? 'vertical' : null,
    onKeyDown: handleKeyDown,
    ref: tabListRef,
    role: "tablist"
  }, children)));
});

var css$r = {"carrousel":"_1rlBL","carrouselInner":"_1YPPV","carrouselItem":"_3pMEX","carrouselButtonContainer":"_DZmRD","carrouselControlPrev":"_1_yGr","carrouselControlNext":"_YRcDS","carrouselControlNextIcon":"_1tZ89"};

var Carrousel = function Carrousel(_ref, _ref2) {
  var childrenProp = _ref.children;
  var _ref2$roleDescription = _ref2.roleDescription,
      roleDescription = _ref2$roleDescription === void 0 ? 'Slider' : _ref2$roleDescription,
      _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? 'Slide' : _ref2$type;

  var _useState = React.useState(0),
      Value = _useState[0],
      SetValue = _useState[1];

  var refCont = React.createRef();
  var refPrev = React.createRef();
  var refNext = React.createRef();
  var childIndex = 0;
  var backButton = /*#__PURE__*/React__default.createElement("svg", {
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
  var nextButton = /*#__PURE__*/React__default.createElement("svg", {
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

  function handleClick(_ref3) {
    var target = _ref3.target;
    var dataValue = target.dataset.slide;
    var contChild = [].concat(refCont.current.children);
    var getValue = Value;

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
    className: css$r.carrousel + " " + css$r.slide + " iu-slider",
    "data-ride": "carousel"
  }, /*#__PURE__*/React__default.createElement("div", {
    ref: refCont,
    className: css$r.carrouselInner + " ui-carrusel-inner",
    role: "group",
    "aria-roledescription": roleDescription
  }, children), /*#__PURE__*/React__default.createElement("div", {
    className: "" + css$r.carrouselButtonContainer
  }, /*#__PURE__*/React__default.createElement("button", {
    className: css$r.carrouselControlPrev + " ui-carrusel-control-prev",
    "data-slide": "prev",
    onClick: handleClick,
    ref: refPrev,
    disabled: true,
    "aria-label": type + " anterior"
  }, backButton), /*#__PURE__*/React__default.createElement("button", {
    className: css$r.carrouselControlNext + " ui-carrusel-control-next",
    "data-slide": "next",
    onClick: handleClick,
    ref: refNext,
    "aria-label": type + " siguiente"
  }, nextButton)), /*#__PURE__*/React__default.createElement("div", {
    className: "sr-only",
    "aria-live": "polite",
    "aria-atomic": "true"
  }, type, " ", Value + 1, " de ", children.length));
};

var css$s = {"Section":"_2biAj"};

var _excluded$e = ["children", "tabs"];

var PanelSection = function PanelSection(_ref) {
  var childrenProp = _ref.children,
      tabs = _ref.tabs,
      others = _objectWithoutPropertiesLoose(_ref, _excluded$e);

  var _useState = React.useState(0),
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
    className: css$s.Section
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

var css$t = {"col":"_1QLy6"};

var Col = function Col(props) {
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: css$t.col
  }, props));
};

var css$u = {"row":"_7DQjb"};

var Row = function Row(props) {
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: css$u.row
  }, props));
};

exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
exports.AsideNav = AsideNav;
exports.AsideSection = AsideSection;
exports.BtnSec = BtnSec;
exports.Button = Button;
exports.Card = Card;
exports.Carrousel = Carrousel;
exports.Col = Col;
exports.Dropdown = Dropdown;
exports.Graphics = Graphics;
exports.Icon = Icon;
exports.InputAction = InputAction;
exports.InputControl = InputControl;
exports.InputField = InputField;
exports.Link = Link;
exports.Modal = Modal;
exports.Multimedia = Multimedia;
exports.NavBar = NavBar;
exports.PanelSection = PanelSection;
exports.PanelTabs = PanelTabs;
exports.RecognitionVoice = RecognitionVoice;
exports.Row = Row;
exports.Section = Section;
exports.Select = Select;
exports.Tab = Tab;
exports.TabPanel = TabPanel;
exports.Table = Table;
exports.TableGrid = TableGrid;
exports.Tabs = Tabs;
exports.Text = Text;
exports.Textarea = Textarea;
exports.Toggletip = Toggletip;
exports.Tooltip = Tooltip;
exports.Video = Video;
//# sourceMappingURL=index.js.map
