import React__default, { Fragment as Fragment$2, forwardRef, useState, useEffect, createRef, createElement, useRef, Children, isValidElement, cloneElement } from 'react';
import Draggable from 'react-draggable';
import { Chart } from 'react-google-charts';
import { v4 } from 'uuid';

var AudioBar = function AudioBar(_ref) {
  var id = _ref.id,
      audio = _ref.audio,
      formato = _ref.formato;
  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("div", {
    key: id
  }, /*#__PURE__*/React__default.createElement("audio", {
    controls: true,
    oncontextmenu: "return false;",
    controlslist: "nodownload"
  }, /*#__PURE__*/React__default.createElement("source", {
    src: audio,
    type: formato
  }), /*#__PURE__*/React__default.createElement("track", {
    src: "",
    kind: "captions",
    srclang: "es",
    label: "audio..."
  }))));
};

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

var _excluded = ["classes", "className", "disabled", "fullWidth", "nameIcon", "positionIcon", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "value", "addClass", "setValue", "url"];
var BtnSec = forwardRef(function BtnSec(props, ref) {
  var label = props.label,
      onChange = props.onChange,
      onClick = props.onClick,
      onFocus = props.onFocus,
      selected = props.selected,
      selectionFollowsFocus = props.selectionFollowsFocus,
      value = props.value,
      addClass = props.addClass,
      setValue = props.setValue,
      url = props.url,
      other = _objectWithoutPropertiesLoose(props, _excluded);

  var handleClick = function handleClick(event) {
    if (!selected && onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }

    if (setValue) {
      setValue(value + 1);
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
    href: url,
    role: "tab",
    className: css.BtnSec + " " + addClass,
    "aria-selected": selected,
    onClick: handleClick,
    onFocus: handleFocus,
    value: value + 1
  }, other), /*#__PURE__*/React__default.createElement("span", {
    className: "sr-only"
  }, "Secci\xF3n ", label)));
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

  return /*#__PURE__*/React__default.createElement("span", _extends({
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

var ContrastFilters = function ContrastFilters() {
  return /*#__PURE__*/React__default.createElement("span", {
    id: "hc_extension_svg_filters"
  }, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    height: "0"
  }, /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("filter", {
    id: "hc_extension_off",
    x: "0",
    y: "0",
    width: "99999",
    height: "99999"
  }, /*#__PURE__*/React__default.createElement("feComponentTransfer", null, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "table",
    tableValues: "0 1"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "table",
    tableValues: "0 1"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "table",
    tableValues: "0 1"
  }))), /*#__PURE__*/React__default.createElement("filter", {
    id: "hc_extension_highcontrast",
    x: "0",
    y: "0",
    width: "99999",
    height: "99999"
  }, /*#__PURE__*/React__default.createElement("feComponentTransfer", null, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "gamma",
    exponent: "3.0"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "gamma",
    exponent: "3.0"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "gamma",
    exponent: "3.0"
  }))), /*#__PURE__*/React__default.createElement("filter", {
    id: "hc_extension_highcontrast_back",
    x: "0",
    y: "0",
    width: "99999",
    height: "99999"
  }, /*#__PURE__*/React__default.createElement("feComponentTransfer", null, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "gamma",
    exponent: "0.33"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "gamma",
    exponent: "0.33"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "gamma",
    exponent: "0.33"
  }))), /*#__PURE__*/React__default.createElement("filter", {
    id: "hc_extension_grayscale",
    x: "0",
    y: "0",
    width: "99999",
    height: "99999"
  }, /*#__PURE__*/React__default.createElement("feColorMatrix", {
    type: "matrix",
    values: "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"
  }), /*#__PURE__*/React__default.createElement("feComponentTransfer", null, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "gamma",
    exponent: "3"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "gamma",
    exponent: "3"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "gamma",
    exponent: "3"
  }))), /*#__PURE__*/React__default.createElement("filter", {
    id: "hc_extension_grayscale_back",
    x: "0",
    y: "0",
    width: "99999",
    height: "99999"
  }, /*#__PURE__*/React__default.createElement("feComponentTransfer", null, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "gamma",
    exponent: "0.33"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "gamma",
    exponent: "0.33"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "gamma",
    exponent: "0.33"
  }))), /*#__PURE__*/React__default.createElement("filter", {
    id: "hc_extension_invert",
    x: "0",
    y: "0",
    width: "99999",
    height: "99999"
  }, /*#__PURE__*/React__default.createElement("feComponentTransfer", null, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "gamma",
    amplitude: "-1",
    exponent: "3",
    offset: "1"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "gamma",
    amplitude: "-1",
    exponent: "3",
    offset: "1"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "gamma",
    amplitude: "-1",
    exponent: "3",
    offset: "1"
  }))), /*#__PURE__*/React__default.createElement("filter", {
    id: "hc_extension_invert_back",
    x: "0",
    y: "0",
    width: "99999",
    height: "99999"
  }, /*#__PURE__*/React__default.createElement("feComponentTransfer", null, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "table",
    tableValues: "1 0"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "table",
    tableValues: "1 0"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "table",
    tableValues: "1 0"
  })), /*#__PURE__*/React__default.createElement("feComponentTransfer", null, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "gamma",
    exponent: "1.7"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "gamma",
    exponent: "1.7"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "gamma",
    exponent: "1.7"
  }))), /*#__PURE__*/React__default.createElement("filter", {
    id: "hc_extension_yellow_on_black",
    x: "0",
    y: "0",
    width: "99999",
    height: "99999"
  }, /*#__PURE__*/React__default.createElement("feComponentTransfer", null, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "gamma",
    amplitude: "-1",
    exponent: "3",
    offset: "1"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "gamma",
    amplitude: "-1",
    exponent: "3",
    offset: "1"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "gamma",
    amplitude: "-1",
    exponent: "3",
    offset: "1"
  })), /*#__PURE__*/React__default.createElement("feColorMatrix", {
    type: "matrix",
    values: "0.3 0.5 0.2 0 0 0.3 0.5 0.2 0 0 0 0 0 0 0 0 0 0 1 0"
  })), /*#__PURE__*/React__default.createElement("filter", {
    id: "hc_extension_yellow_on_black_back",
    x: "0",
    y: "0",
    width: "99999",
    height: "99999"
  }, /*#__PURE__*/React__default.createElement("feComponentTransfer", null, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "table",
    tableValues: "1 0"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "table",
    tableValues: "1 0"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "table",
    tableValues: "1 0"
  })), /*#__PURE__*/React__default.createElement("feComponentTransfer", null, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "gamma",
    exponent: "0.33"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "gamma",
    exponent: "0.33"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "gamma",
    exponent: "0.33"
  }))), /*#__PURE__*/React__default.createElement("filter", {
    id: "hc_extension_red_on_white",
    x: "0",
    y: "0",
    width: "99999",
    height: "99999",
    filterUnits: "objectBoundingBox",
    primitiveUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/React__default.createElement("feColorMatrix", {
    type: "matrix",
    values: "                        .33 .33 .33 0 0                        .33 .33 .33 0 0                        .33 .33 .33 0 0                        0 0 0 1 0",
    "in": "SourceGraphic",
    result: "colormatrix"
  }), /*#__PURE__*/React__default.createElement("feComponentTransfer", {
    "in": "colormatrix",
    result: "componentTransfer"
  }, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "table",
    tableValues: "0.97 0.52"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "table",
    tableValues: "1 0.03"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "table",
    tableValues: "0.98 0.06"
  }), /*#__PURE__*/React__default.createElement("feFuncA", {
    type: "table",
    tableValues: "0 1"
  })), /*#__PURE__*/React__default.createElement("feBlend", {
    mode: "normal",
    "in": "componentTransfer",
    in2: "SourceGraphic",
    result: "blend"
  })), /*#__PURE__*/React__default.createElement("filter", {
    id: "hc_extension_red_on_white_back",
    x: "0",
    y: "0",
    width: "99999",
    height: "99999"
  }, /*#__PURE__*/React__default.createElement("feComponentTransfer", null, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "table",
    tableValues: "1 0"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "table",
    tableValues: "0 0"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "table",
    tableValues: "0 0"
  })), /*#__PURE__*/React__default.createElement("feComponentTransfer", null, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "gamma",
    amplitude: "-1",
    exponent: "5",
    offset: "1"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "gamma",
    amplitude: "-1",
    exponent: "5",
    offset: "1"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "gamma",
    amplitude: "-1",
    exponent: "5",
    offset: "1"
  }))), /*#__PURE__*/React__default.createElement("filter", {
    id: "hc_extension_green_on_blue",
    x: "0",
    y: "0",
    width: "99999",
    height: "99999",
    filterUnits: "objectBoundingBox",
    primitiveUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/React__default.createElement("feColorMatrix", {
    type: "matrix",
    values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
    "in": "SourceGraphic",
    result: "colormatrix"
  }), /*#__PURE__*/React__default.createElement("feComponentTransfer", {
    "in": "colormatrix",
    result: "componentTransfer"
  }, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "table",
    tableValues: "0.09 0"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "table",
    tableValues: "1 0.16"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "table",
    tableValues: "0 1"
  }), /*#__PURE__*/React__default.createElement("feFuncA", {
    type: "table",
    tableValues: "0 1"
  })), /*#__PURE__*/React__default.createElement("feBlend", {
    mode: "normal",
    "in": "componentTransfer",
    in2: "SourceGraphic",
    result: "blend"
  })), /*#__PURE__*/React__default.createElement("filter", {
    id: "hc_extension_green_on_blue_back",
    x: "0",
    y: "0",
    width: "99999",
    height: "99999"
  }, /*#__PURE__*/React__default.createElement("feComponentTransfer", null, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "table",
    tableValues: "1 0"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "table",
    tableValues: "0 0"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "table",
    tableValues: "0 0"
  })), /*#__PURE__*/React__default.createElement("feComponentTransfer", null, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "gamma",
    amplitude: "-1",
    exponent: "5",
    offset: "1"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "gamma",
    amplitude: "-1",
    exponent: "5",
    offset: "1"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "gamma",
    amplitude: "-1",
    exponent: "5",
    offset: "1"
  }))), /*#__PURE__*/React__default.createElement("filter", {
    id: "hc_extension_yellow_on_blue",
    x: "0",
    y: "0",
    width: "99999",
    height: "99999",
    filterUnits: "objectBoundingBox",
    primitiveUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/React__default.createElement("feColorMatrix", {
    type: "matrix",
    values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
    "in": "SourceGraphic",
    result: "colormatrix"
  }), /*#__PURE__*/React__default.createElement("feComponentTransfer", {
    "in": "colormatrix",
    result: "componentTransfer"
  }, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "table",
    tableValues: "1 0"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "table",
    tableValues: "0.99 0.16"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "table",
    tableValues: "0 1"
  }), /*#__PURE__*/React__default.createElement("feFuncA", {
    type: "table",
    tableValues: "0 1"
  })), /*#__PURE__*/React__default.createElement("feBlend", {
    mode: "normal",
    "in": "componentTransfer",
    in2: "SourceGraphic",
    result: "blend"
  })), /*#__PURE__*/React__default.createElement("filter", {
    id: "hc_extension_yellow_on_blue_back",
    x: "0",
    y: "0",
    width: "99999",
    height: "99999"
  }, /*#__PURE__*/React__default.createElement("feComponentTransfer", null, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "table",
    tableValues: "1 0"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "table",
    tableValues: "0 0"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "table",
    tableValues: "0 0"
  })), /*#__PURE__*/React__default.createElement("feComponentTransfer", null, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "gamma",
    amplitude: "-1",
    exponent: "5",
    offset: "1"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "gamma",
    amplitude: "-1",
    exponent: "5",
    offset: "1"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "gamma",
    amplitude: "-1",
    exponent: "5",
    offset: "1"
  }))), /*#__PURE__*/React__default.createElement("filter", {
    id: "hc_extension_white_on_black",
    x: "0",
    y: "0",
    width: "99999",
    height: "99999",
    filterUnits: "objectBoundingBox",
    primitiveUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/React__default.createElement("feColorMatrix", {
    type: "matrix",
    values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
    "in": "SourceGraphic",
    result: "colormatrix"
  }), /*#__PURE__*/React__default.createElement("feComponentTransfer", {
    "in": "colormatrix",
    result: "componentTransfer"
  }, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "table",
    tableValues: "1 0"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "table",
    tableValues: "1 0"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "table",
    tableValues: "0.98 0"
  }), /*#__PURE__*/React__default.createElement("feFuncA", {
    type: "table",
    tableValues: "0 1"
  })), /*#__PURE__*/React__default.createElement("feBlend", {
    mode: "normal",
    "in": "componentTransfer",
    in2: "SourceGraphic",
    result: "blend"
  })), /*#__PURE__*/React__default.createElement("filter", {
    id: "hc_extension_white_on_black_back",
    x: "0",
    y: "0",
    width: "99999",
    height: "99999"
  }, /*#__PURE__*/React__default.createElement("feComponentTransfer", null, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "table",
    tableValues: "1 0"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "table",
    tableValues: "0 0"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "table",
    tableValues: "0 0"
  })), /*#__PURE__*/React__default.createElement("feComponentTransfer", null, /*#__PURE__*/React__default.createElement("feFuncR", {
    type: "gamma",
    amplitude: "-1",
    exponent: "5",
    offset: "1"
  }), /*#__PURE__*/React__default.createElement("feFuncG", {
    type: "gamma",
    amplitude: "-1",
    exponent: "5",
    offset: "1"
  }), /*#__PURE__*/React__default.createElement("feFuncB", {
    type: "gamma",
    amplitude: "-1",
    exponent: "5",
    offset: "1"
  }))))));
};

var css$3 = {"spanText":"_4KFeG"};

var DarkThemeToggle = function DarkThemeToggle(_ref) {
  var addClass = _ref.addClass;

  var _useState = useState(false),
      pressed = _useState[0],
      setPressed = _useState[1];

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

  var togglePressed = function togglePressed() {
    document.body.classList.contains('light-theme') ? enableDarkMode() : enableLightMode();
  };

  return /*#__PURE__*/React__default.createElement("button", {
    className: css$3['toggle-button'] + " " + addClass,
    "aria-pressed": pressed,
    onClick: togglePressed,
    type: "button"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "mode_night"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: css$3.spanText
  }, "Modo Nocturno"));
};

var css$4 = {"c-collapsible-container-header":"_1CW18","c-collapsible-container-body":"_2ygtY","active":"_1xv7i","show":"_2moa5"};

var _excluded$3 = ["item", "index", "stateIcon", "addClass"];
function AccordionItem(_ref) {
  var item = _ref.item,
      index = _ref.index,
      stateIcon = _ref.stateIcon,
      addClass = _ref.addClass,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  var _useState = useState(false),
      Expanded = _useState[0],
      SetExpanded = _useState[1];

  var _useState2 = useState(''),
      active = _useState2[0],
      setActive = _useState2[1];

  var toggleAccordion = function toggleAccordion() {
    Expanded ? SetExpanded(false) : SetExpanded(true);

    if (active === '') {
      setActive(css$4['active']);
    } else {
      setActive('');
    }
  };

  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("button", _extends({
    className: css$4['c-collapsible-container-header'] + " " + addClass,
    "aria-expanded": Expanded,
    onClick: toggleAccordion
  }, props), /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: item.dataIcon
  }), /*#__PURE__*/React__default.createElement("p", null, " ", item.title), /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: stateIcon
  })), /*#__PURE__*/React__default.createElement("div", {
    className: css$4['c-collapsible-container-body'] + " " + active,
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

var css$5 = {"dropdownContainer":"_fH-Dn","DropdownCont":"_D5DjI","dropdownArrow":"_2SmiC","navItem":"_2UAjf","dropdownMenu":"_jT9p5","dropdownMenu-item":"_2SR1I","navLink":"_362sV","dropdownItem":"_1JWTx"};

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

  var _useState = useState(false),
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

  useEffect(function () {
    SetExpanded(isExpanded);
  }, [isExpanded]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: css$5['dropdownContainer']
  }, /*#__PURE__*/React__default.createElement(Button, {
    hasAriaLabel: hasAriaLabel,
    "aria-expanded": Expanded,
    className: css$5.DropdownCont + " " + addClass + " ",
    onClick: toggleMenu,
    onBlur: closeMenu,
    onKeyDown: closeMenuOnEsc
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: icon
  }), label, /*#__PURE__*/React__default.createElement("svg", {
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
    className: css$5.dropdownMenu + " " + ulClass,
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

var css$6 = {"Typography":"_2s-q8"};

var _excluded$4 = ["type", "children", "addClass"];
var Text = function Text(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'p' : _ref$type,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? 'hola' : _ref$children,
      addClass = _ref.addClass,
      args = _objectWithoutPropertiesLoose(_ref, _excluded$4);

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
    className: css$6.Typography + " " + addClass,
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

var css$7 = {"containerImg":"_1HoJe","styleTitle":"_ItKKc","styleText":"_3nIWV","containerText":"_3T4gJ"};

var Image = function Image(_ref) {
  var _ref$url = _ref.url,
      url = _ref$url === void 0 ? 'prueba3' : _ref$url,
      _ref$alt = _ref.alt,
      alt = _ref$alt === void 0 ? 'Imagen de prueba.' : _ref$alt,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Imagen 1.' : _ref$title,
      typeImg = _ref.typeImg,
      _ref$dataStyle = _ref.dataStyle,
      dataStyle = _ref$dataStyle === void 0 ? '2' : _ref$dataStyle,
      addClass = _ref.addClass,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 350 : _ref$width;

  var _useState = useState(false),
      error = _useState[0],
      setError = _useState[1];

  var onError = function onError(value) {
    setError(value);
  };

  var imgToSee = !error ? "" + url + typeImg : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAAFxIAABcSAWef0lIAAAUZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0ODgsIDIwMjAvMDcvMTAtMjI6MDY6NTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wMi0xMFQxNTozMzo1NC0wNTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDItMTBUMTU6MzQ6MTMtMDU6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDItMTBUMTU6MzQ6MTMtMDU6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iQWRvYmUgUkdCICgxOTk4KSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MDZmNzg5Yy1mOTcyLTQ1ODItYmNlNC02MDJhOTUyZDMwNmYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDA2Zjc4OWMtZjk3Mi00NTgyLWJjZTQtNjAyYTk1MmQzMDZmIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDA2Zjc4OWMtZjk3Mi00NTgyLWJjZTQtNjAyYTk1MmQzMDZmIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MDZmNzg5Yy1mOTcyLTQ1ODItYmNlNC02MDJhOTUyZDMwNmYiIHN0RXZ0OndoZW49IjIwMjItMDItMTBUMTU6MzM6NTQtMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChNYWNpbnRvc2gpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtD5YlQAACnHSURBVHic7d15lFzVfeDx3733varqvVut3hcZO4n3eM029sTjmDmZJcnYGRMnk/Vk8cx4ZhIvIKml1oYQIBBCPiwyAgOWjUAGzC5EMGBAxxgDYosBISQhCUmgtVd1V7337p0/qhvL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";
  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("figure", {
    className: addClass
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$7.containerImg,
    "data-style": dataStyle,
    style: {
      maxWidth: width + "px"
    }
  }, /*#__PURE__*/React__default.createElement("img", {
    src: imgToSee,
    onError: onError,
    alt: alt,
    "data-style-img": dataStyle
  })), /*#__PURE__*/React__default.createElement("figcaption", null, /*#__PURE__*/React__default.createElement("div", {
    className: css$7.containerText
  }, /*#__PURE__*/React__default.createElement(Text, {
    type: "p",
    children: /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("b", null, title), " ", /*#__PURE__*/React__default.createElement("span", null, alt))
  })))));
};
Image.defaultProps = {
  typeImg: '.png'
};

var css$8 = {"styleInit":"_13bif","imgUpRight":"_3rrlz","imgDownRight":"_1izl-","container":"_nFI4s","styleTitle":"_1qmO0","styleSubTitle":"_1aPYB","styleBtn":"_4kk0R"};

var Inicio = function Inicio(_ref) {
  var imgUp = _ref.imgUp,
      imgDown = _ref.imgDown,
      altUp = _ref.altUp,
      altDown = _ref.altDown,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Nombre del Ova' : _ref$title,
      _ref$subTitle = _ref.subTitle,
      subTitle = _ref$subTitle === void 0 ? 'Nombre del curso' : _ref$subTitle,
      addClass = _ref.addClass,
      handleBtnClick = _ref.handleBtnClick;
  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("section", {
    className: css$8.styleInit + " " + addClass
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$8.imgUpRight
  }, /*#__PURE__*/React__default.createElement("img", {
    src: imgUp,
    alt: altUp
  })), /*#__PURE__*/React__default.createElement("article", {
    className: css$8.container
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$8.styleTitle
  }, /*#__PURE__*/React__default.createElement("h1", null, title)), /*#__PURE__*/React__default.createElement("div", {
    className: css$8.styleSubTitle
  }, /*#__PURE__*/React__default.createElement("p", null, /*#__PURE__*/React__default.createElement("strong", null, subTitle))), /*#__PURE__*/React__default.createElement(Button, {
    label: "Iniciar",
    hasAriaLabel: false,
    addClass: css$8.styleBtn,
    onClick: handleBtnClick
  })), /*#__PURE__*/React__default.createElement("div", {
    className: css$8.imgDownRight
  }, /*#__PURE__*/React__default.createElement("img", {
    src: imgDown,
    alt: altDown
  }))));
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

var css$9 = {"InputAction":"_xB2Ha","LabelStyled":"_1X4kF","TextFileName":"_OaT0I"};

var _excluded$5 = ["type", "styled", "label", "addClass"];
var InputAction = function InputAction(_ref) {
  var type = _ref.type,
      styled = _ref.styled,
      label = _ref.label,
      addClass = _ref.addClass,
      args = _objectWithoutPropertiesLoose(_ref, _excluded$5);

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
  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("label", _extends({
    className: base.ColorBase + " " + css$9.LabelStyled + " " + addClass,
    htmlFor: id,
    styled: styled
  }, args), /*#__PURE__*/React__default.createElement("input", {
    className: css$9.InputAction,
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

var css$a = {"InputStyled":"_1isCe","InputCont":"_1YikN","CheckCont":"_WN9au","CheckBg":"_3z4b_","CheckLabel":"_10bHL","CheckTrack":"_2QBZ5","input-error":"_8exJT"};

var _excluded$6 = ["type", "label", "stateInput", "name", "addClass"];
var InputControl = function InputControl(_ref) {
  var type = _ref.type,
      label = _ref.label,
      stateInput = _ref.stateInput,
      name = _ref.name,
      addClass = _ref.addClass,
      args = _objectWithoutPropertiesLoose(_ref, _excluded$6);

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
          element.classList.add(css$a['input-error']);
        } else if (stateInput === 'Succes') {
          setStateIcon('check');
          element.classList.add(css$a['input-succes']);
        } else {
          setStateIcon('check');
        }
      } else {
        setStateIcon('');
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
    className: css$a.InputCont + " " + addClass,
    inputMode: type
  }, args), /*#__PURE__*/React__default.createElement("div", {
    className: css$a.CheckCont,
    inputMode: type
  }, /*#__PURE__*/React__default.createElement("input", {
    className: css$a.InputStyled,
    "data-state": stateInput,
    inputMode: type,
    defaultChecked: check,
    type: type === 'toggle' ? 'checkbox' : type,
    id: id,
    name: name
  }), type === 'toggle' && /*#__PURE__*/React__default.createElement("div", {
    className: css$a.CheckTrack
  }), /*#__PURE__*/React__default.createElement("div", {
    className: css$a.CheckBg,
    inputMode: type,
    onClick: function onClick() {
      return setCheck(!check);
    },
    id: id + "Icon"
  }, type !== 'toggle' && /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: getStateIcon,
    id: id + "ContentIcon"
  }))), /*#__PURE__*/React__default.createElement("span", {
    className: css$a.CheckLabel
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

var css$b = {"InputCont":"_17byX","LabelStyle":"_2zmtW","InputStyled":"_3_8sU","input-error":"_23iPI","input-succes":"_1r2gj","deactive-border":"_2sE6F"};

var _excluded$7 = ["type", "label", "dataIcon", "styledInput", "addClass"];
var InputField = function InputField(_ref) {
  var type = _ref.type,
      label = _ref.label,
      dataIcon = _ref.dataIcon,
      styledInput = _ref.styledInput,
      addClass = _ref.addClass,
      args = _objectWithoutPropertiesLoose(_ref, _excluded$7);

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
      element.classList.add(css$b[nameClass]);
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
    className: css$b.InputCont + " " + addClass,
    "data-status": isFocus || value !== '' ? 'active' : false,
    id: "contentLabel" + id,
    "state-input": styledInput
  }, args), dataIcon.state ? /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: dataIcon.nameIcon,
    "state-input": styledInput
  }) : /*#__PURE__*/React__default.createElement(Fragment$2, null), /*#__PURE__*/React__default.createElement("input", {
    className: css$b.InputStyled,
    type: type,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    id: id
  }), type !== 'date' && /*#__PURE__*/React__default.createElement("span", {
    className: css$b.LabelStyle,
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

var css$c = {"LinkCont":"_2lFDP"};

var Link = function Link(_ref) {
  var label = _ref.label,
      href = _ref.href,
      icon = _ref.icon,
      addClass = _ref.addClass,
      target = _ref.target;
  return /*#__PURE__*/React__default.createElement("a", {
    className: css$c.LinkCont + " " + addClass,
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

var cssLogo = {"imgLogo":"_2oas0"};

function Logo(_ref) {
  var src = _ref.src,
      addClass = _ref.addClass;
  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("div", {
    className: "" + addClass
  }, /*#__PURE__*/React__default.createElement("img", {
    src: src,
    className: cssLogo['imgLogo']
  })));
}
Logo.propTypes = {
  typeLogo: propTypes.string.isRequired
};
Logo.defaultProps = {
  typeLogo: 'logoPage'
};

var css$d = {"c-modal":"_6eOcM","c-modal-overlay":"_1q2aa","c-modal__close-button":"__SM4G","overlay--active":"_20Zpv","modal--active":"_2MLWh","c-modal__content":"_2PG4F","has-modal":"_2XpJ5"};

var createKeyboardTrap = function createKeyboardTrap(e, id) {
  var modal = document.getElementById("modal" + id);
  var focusableElements = Array.from(modal.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable]'));
  var firstFocusableElement = focusableElements[0];
  var lastFocusableElement = focusableElements[focusableElements.length - 1];
  console.log(focusableElements);
  console.log(firstFocusableElement);
  console.log(lastFocusableElement);

  function trapTabKey(e) {
    if (e.keyCode === 9 && document.activeElement === lastFocusableElement) {
      e.preventDefault();
      firstFocusableElement.focus();
      console.log('Ultimo');
    } else if (e.shiftKey && e.keyCode === 9 && document.activeElement === firstFocusableElement) {
      e.preventDefault();
      lastFocusableElement.focus();
      console.log('Primero');
    }
  }

  document.addEventListener('keydown', function (e) {
    return trapTabKey(e);
  });
};
var openModal = function openModal(id) {
  var modal = document.getElementById("modal" + id);
  var modalOverlay = document.getElementById("modalOverlay" + id);
  modal.hidden = false;
  modal.focus();
  modal.classList.add(css$d['modal--active']);
  modalOverlay.classList.add(css$d['overlay--active']);
  document.body.classList.add(css$d['has-modal']);
};

var css$e = {"modal-button-image":"_JfSL7"};

var ModalButton = function ModalButton(_ref) {
  var _ref$hasImage = _ref.hasImage,
      hasImage = _ref$hasImage === void 0 ? false : _ref$hasImage,
      label = _ref.label,
      id = _ref.id,
      url = _ref.url,
      alt = _ref.alt,
      typeImage = _ref.typeImage,
      dataStyle = _ref.dataStyle,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 350 : _ref$width,
      addClass = _ref.addClass,
      title = _ref.title;

  var handleClick = function handleClick(e, id) {
    openModal(id);
    createKeyboardTrap(e, id);
  };

  return /*#__PURE__*/React__default.createElement(Fragment$2, null, hasImage ? /*#__PURE__*/React__default.createElement("button", {
    className: css$e['modal-button-image'] + " " + addClass,
    "aria-labelledby": "modalDescription" + id,
    "aria-description": "Abrir modal",
    onClick: function onClick(e) {
      return handleClick(e, id);
    },
    id: "openModal" + id
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "sr-only",
    id: "modalDescription" + id
  }, label), /*#__PURE__*/React__default.createElement(Image, {
    url: url,
    alt: alt,
    title: title,
    typeImage: typeImage,
    dataStyle: dataStyle,
    width: width
  })) : /*#__PURE__*/React__default.createElement(Button, {
    id: "openModal" + id,
    "aria-description": "Abrir modal",
    hasAriaLabel: false,
    label: label,
    onClick: function onClick(e) {
      return handleClick(e, id);
    },
    addClass: addClass
  }));
};

var css$f = {"c-aud-btn":"_a9LbG","c-aud-btn-content":"_2E_hC","c-aud-secundary":"_2uPDm"};

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

  var _useState = useState(false),
      getStateBtnAudio = _useState[0],
      setStateBtnAudio = _useState[1];

  var _useState2 = useState(playButton),
      getIcon = _useState2[0],
      setIcon = _useState2[1];

  var refAudio = createRef();

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

  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("div", {
    className: "" + addClass
  }, /*#__PURE__*/React__default.createElement("audio", {
    src: url,
    ref: refAudio,
    onEnded: handleFinish
  }), /*#__PURE__*/React__default.createElement("button", {
    id: "btnAudio",
    onClick: handlePlayPause,
    className: css$f['c-aud-btn'] + " " + (isPrimary ? '' : css$f['c-aud-secundary']),
    "aria-label": getStateBtnAudio ? 'Pausar' : 'Reproducir'
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$f['c-aud-btn-content'],
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

var css$g = {"Panel":"_qaB0F","fadeIn":"_23_l4"};

var _excluded$8 = ["children", "value", "index", "addClass", "roleDescription"];
var TabPanel = function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      addClass = props.addClass,
      _props$roleDescriptio = props.roleDescription,
      roleDescription = _props$roleDescriptio === void 0 ? 'slide' : _props$roleDescriptio,
      other = _objectWithoutPropertiesLoose(props, _excluded$8);

  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: css$g.Panel + " " + addClass,
    role: "group",
    hidden: value !== index,
    id: "simple-tabpanel-" + index,
    "aria-roledescription": roleDescription,
    "aria-labelledby": "simple-tab-" + index,
    tabIndex: "0"
  }, other), value === index && /*#__PURE__*/React__default.createElement("div", null, children));
};

var css$h = {"section":"_Nahni","fadeInDown":"_BDs2n"};

var _excluded$9 = ["children", "value", "index", "label", "addClass"];

var Section = function Section(_ref) {
  var children = _ref.children,
      value = _ref.value,
      index = _ref.index,
      label = _ref.label,
      addClass = _ref.addClass,
      other = _objectWithoutPropertiesLoose(_ref, _excluded$9);

  return /*#__PURE__*/React__default.createElement("section", _extends({
    className: css$h.section + " " + addClass,
    role: "tabpanel",
    hidden: value !== index,
    id: "simple-tabpanel-" + index,
    "aria-labelledby": "simple-tab-" + label
  }, other), /*#__PURE__*/React__default.createElement("h2", {
    className: "sr-only",
    id: "simple-tab-" + label
  }, "Secci\xF3n ", label), children);
};

var css$i = {"SelectStyle":"_2NS2Z","SelectContainer":"_3AjWz","SelectAfter":"_2vUqP","SelectWrapper":"_2BQM5","SelectLabel":"_1YqCo"};

var _excluded$a = ["placeholder", "stateInput", "options", "addClass", "isLabelVisible", "label"];
var Select = function Select(_ref) {
  var placeholder = _ref.placeholder,
      stateInput = _ref.stateInput,
      options = _ref.options,
      addClass = _ref.addClass,
      _ref$isLabelVisible = _ref.isLabelVisible,
      isLabelVisible = _ref$isLabelVisible === void 0 ? 'true' : _ref$isLabelVisible,
      label = _ref.label,
      args = _objectWithoutPropertiesLoose(_ref, _excluded$a);

  var name = uniqueId_1('ui-name-');

  return /*#__PURE__*/React__default.createElement("label", _extends({
    className: css$i.SelectWrapper + " " + addClass,
    "data-state": stateInput
  }, args), /*#__PURE__*/React__default.createElement("span", {
    className: css$i['SelectLabel'] + " " + (isLabelVisible ? '' : 'sr-only')
  }, label), /*#__PURE__*/React__default.createElement("div", {
    className: css$i['SelectContainer'],
    "data-state": stateInput
  }, /*#__PURE__*/React__default.createElement("select", {
    defaultValue: "",
    name: name,
    className: css$i.SelectStyle,
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
    className: css$i.SelectAfter,
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

var css$j = {"TabsBtn":"_2P1fM","TabsBtnContent":"_293oo","TabsBtnContentLabel":"_h75tA","TabsBtnIndicator":"_247Rk","TabsBtnIndicatorContent":"_21fWb"};

var _excluded$b = ["classes", "className", "disabled", "fullWidth", "nameIcon", "positionIcon", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "value", "addClass"];
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
      other = _objectWithoutPropertiesLoose(props, _excluded$b);

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
    className: css$j.TabsBtn + " " + addClass,
    "aria-selected": selected,
    disabled: disabled,
    onClick: handleClick,
    onFocus: handleFocus,
    tabIndex: selected ? 0 : -1
  }, other), /*#__PURE__*/createElement("span", {
    className: css$j.TabsBtnContent,
    "position-icon": positionIcon
  }, /*#__PURE__*/createElement(Icon, {
    "aria-hidden": "true",
    nameIcon: nameIcon
  }), ' ', /*#__PURE__*/createElement("span", {
    className: css$j.TabsBtnContentLabel
  }, label), ' '), /*#__PURE__*/createElement("span", {
    className: css$j.TabsBtnIndicator
  }, /*#__PURE__*/createElement("span", {
    className: css$j.TabsBtnIndicatorContent
  })));
});
Tab.propTypes = {
  addClass: propTypes.string
};
Tab.defaultProps = {
  addClass: ''
};

var css$k = {"TextareaCont":"_2hUyD","TextareaItem":"_1haMe","CountCont":"_34S0r"};

var Textarea = function Textarea(_ref) {
  var id = _ref.id,
      placeholder = _ref.placeholder,
      label = _ref.label,
      _ref$isLabelVisible = _ref.isLabelVisible,
      isLabelVisible = _ref$isLabelVisible === void 0 ? false : _ref$isLabelVisible,
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
    className: css$k.TextareaCont + " " + addClass
  }, /*#__PURE__*/React__default.createElement("label", {
    "for": id
  }, /*#__PURE__*/React__default.createElement("span", {
    className: isLabelVisible ? '' : 'sr-only'
  }, label), /*#__PURE__*/React__default.createElement("textarea", {
    className: css$k.TextareaItem,
    rows: rows,
    placeholder: placeholder,
    onKeyPress: HandleChange,
    maxLength: MaxLength,
    id: id
  })), maxWords && /*#__PURE__*/React__default.createElement("span", {
    className: css$k.CountCont
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

var css$l = {"container":"_2sl0w","containerNumber":"_2kFEu","number":"_KxZbK","title":"_1-HyA"};

var TitleSlide = function TitleSlide(_ref) {
  var _ref$number = _ref.number,
      number = _ref$number === void 0 ? '01.' : _ref$number,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Título del slide' : _ref$title;
  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("h1", {
    className: css$l.container
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$l.containerNumber
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$l.number
  }, /*#__PURE__*/React__default.createElement("span", null, number))), /*#__PURE__*/React__default.createElement("div", {
    className: css$l.title
  }, /*#__PURE__*/React__default.createElement("span", null, title))));
};

var css$m = {"toggletip-container":"_3Z4HX","toggletip-icon":"_hQ4M-","toggletip-content":"_2SzZ3"};

var Toggletip = function Toggletip(_ref) {
  var content = _ref.content;

  var _useState = useState(''),
      toggletipContent = _useState[0],
      SetToggletipContent = _useState[1];

  var changeToggletipContent = function changeToggletipContent() {
    toggletipContent == '' ? SetToggletipContent(
    /*#__PURE__*/
    React__default.createElement("div", {
      className: css$m['toggletip-content']
    }, content)) : SetToggletipContent('');
  };

  var emptyToggletipContent = function emptyToggletipContent() {
    SetToggletipContent('');
  };

  var emptyToggletipContentOnEsc = function emptyToggletipContentOnEsc(e) {
    if ((e.keyCode || e.which) === 27) SetToggletipContent('');
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: css$m['toggletip-container']
  }, /*#__PURE__*/React__default.createElement(Button, {
    hasAriaLabel: "false",
    styled: "primary-icon",
    label: "",
    onClick: changeToggletipContent,
    onBlur: emptyToggletipContent,
    onKeyDown: emptyToggletipContentOnEsc
  }, /*#__PURE__*/React__default.createElement("span", {
    className: css$m['toggletip-icon'],
    "aria-hidden": "true"
  }, "i"), /*#__PURE__*/React__default.createElement("span", {
    className: "sr-only"
  }, "M\xE1s informaci\xF3n")), /*#__PURE__*/React__default.createElement("div", {
    role: "status"
  }, toggletipContent));
};

var css$n = {"TooltipCont":"_2fDQR","TooltipItem":"_3KPt0"};

var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
      addClass = _ref.addClass,
      id = _ref.id,
      content = _ref.content;
  return /*#__PURE__*/React__default.createElement("div", {
    className: css$n.TooltipCont + " " + addClass
  }, children, /*#__PURE__*/React__default.createElement("div", {
    role: "tooltip",
    className: css$n.TooltipItem,
    id: id
  }, content));
};

var css$o = {"tour-help":"_1Rwnk","tour-number":"_1kC6K"};

var TourHelpLayer = function TourHelpLayer(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '200' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '100' : _ref$height,
      _ref$top = _ref.top,
      top = _ref$top === void 0 ? '100' : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === void 0 ? '4' : _ref$left,
      _ref$number = _ref.number,
      number = _ref$number === void 0 ? '1' : _ref$number;
  var position = {
    width: width + "px",
    height: height + "px",
    top: top + "px",
    left: left + "px"
  };
  return /*#__PURE__*/React__default.createElement("div", {
    style: position,
    className: css$o['tour-help']
  }, /*#__PURE__*/React__default.createElement("span", {
    className: css$o['tour-number']
  }, number));
};

var css$p = {"tour-modal":"_N_LRS","tour-progress":"_2_Rir","tour-progress-bar":"_2OnWP","tour-button-container":"_3Fkrw"};

var TourModal = function TourModal(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === void 0 ? '100' : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === void 0 ? '300' : _ref$left,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? 'Este es el botón de menú' : _ref$description,
      _ref$modalNumber = _ref.modalNumber,
      modalNumber = _ref$modalNumber === void 0 ? 4 : _ref$modalNumber,
      _ref$totalModals = _ref.totalModals,
      totalModals = _ref$totalModals === void 0 ? 7 : _ref$totalModals,
      nextTour = _ref.nextTour,
      backTour = _ref.backTour,
      endTour = _ref.endTour;
  var size = {
    top: top + "px",
    left: left + "px"
  };
  return /*#__PURE__*/React__default.createElement("div", {
    className: css$p['tour-modal'],
    role: "dialog",
    style: size
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sr-only"
  }, "Parte ", modalNumber, " de ", totalModals), /*#__PURE__*/React__default.createElement("div", {
    "aria-hidden": "true",
    className: css$p['tour-progress']
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$p['tour-progress-bar'],
    style: {
      transform: "scaleX(" + modalNumber / totalModals + ")"
    }
  })), /*#__PURE__*/React__default.createElement("p", {
    className: css$p['tour-description']
  }, description), /*#__PURE__*/React__default.createElement("div", {
    className: css$p['tour-button-container']
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    onClick: endTour
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "close"
  }), /*#__PURE__*/React__default.createElement("span", {
    "class": "sr-only"
  }, "Salir")), /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    disabled: modalNumber == 1 ? true : false,
    onClick: backTour
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "arrow_left"
  }), /*#__PURE__*/React__default.createElement("span", {
    "class": "sr-only"
  }, "Anterior")), /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    disabled: modalNumber == totalModals ? true : false,
    onClick: nextTour
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "arrow_right"
  }), /*#__PURE__*/React__default.createElement("span", {
    "class": "sr-only"
  }, "Siguiente"))));
};

var css$q = {"tour-overlay":"_DglW5"};

var TourOverlay = function TourOverlay(endTour, endTourOnEsc) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: css$q['tour-overlay'],
    onClick: endTour,
    onKeyDown: endTourOnEsc
  });
};

var cssUser = {"colorTextUser":"_aG4HF"};

function UserLogin(_ref) {
  var addClass = _ref.addClass,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Estudiante 01' : _ref$label;
  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("div", {
    className: cssUser.colorTextUser + " " + addClass
  }, /*#__PURE__*/React__default.createElement("h3", null, label)));
}

var css$r = {"c-vid-container":"_Wubjm","c-vid":"_2uck7","c-vid-controls":"_2yF4K","c-vid-controls-text":"_2W8d_","progress":"_2vrVD","progress-bar":"_5SxVn","c-vid-controls-volumn":"_3e9Q1","c-vid-controls-volumn-item":"_2YNZg"};

function Video(_ref) {
  var url = _ref.url,
      width = _ref.width,
      title = _ref.title,
      content = _ref.content,
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
  var subtitlesIcon = /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z"
  }));

  var _useState = useState('00:00'),
      setDurationVideo = _useState[1];

  var _useState2 = useState('00:00'),
      getCurrentTiem = _useState2[0],
      setCurrentTime = _useState2[1];

  var _useState3 = useState({
    state: false,
    icon: playIcon,
    label: 'Reproducir video'
  }),
      getstateVideoPlay = _useState3[0],
      setStateVideoPlay = _useState3[1];

  var _useState4 = useState({
    state: false,
    icon: fullscreenIcon,
    label: 'Ver en pantalla completa'
  }),
      getStateScreen = _useState4[0],
      setStateScreen = _useState4[1];

  var _useState5 = useState(25),
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

  return /*#__PURE__*/React__default.createElement("figure", {
    className: "" + css$r['c-vid-container']
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$r['c-vid'] + " " + addClass,
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
    className: css$r['c-vid-controls']
  }, /*#__PURE__*/React__default.createElement("button", {
    "aria-label": getstateVideoPlay.label,
    onClick: handlePlay
  }, getstateVideoPlay.icon), /*#__PURE__*/React__default.createElement("div", {
    className: css$r['c-vid-controls-volumn']
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
    className: "sr-only"
  }, "Controlar volumen"), /*#__PURE__*/React__default.createElement("input", {
    className: css$r['c-vid-controls-volumn-item'],
    ref: refVolumn,
    id: "volumeControl",
    type: "range",
    min: "0",
    max: "100",
    step: "5",
    value: getValueVolum,
    onChange: handleVolumn,
    "aria-valuetext": getValueVolum + "%"
  }))), /*#__PURE__*/React__default.createElement("p", {
    className: css$r['c-vid-controls-text']
  }, /*#__PURE__*/React__default.createElement("span", null, getCurrentTiem)), /*#__PURE__*/React__default.createElement("div", {
    className: css$r['progress-content']
  }, /*#__PURE__*/React__default.createElement("div", {
    ref: refProgress,
    className: css$r.progress,
    onClick: handleProcessControl
  }, /*#__PURE__*/React__default.createElement("div", {
    ref: refProgressBar,
    className: css$r['progress-bar'],
    onChange: handleBarProgress
  }))), /*#__PURE__*/React__default.createElement("button", {
    "aria-label": "Subt\xEDtulos"
  }, subtitlesIcon), /*#__PURE__*/React__default.createElement("button", {
    "aria-label": getStateScreen.label,
    onClick: hanldeFullScrenn
  }, getStateScreen.icon))), /*#__PURE__*/React__default.createElement("figcaption", null, /*#__PURE__*/React__default.createElement(Text, {
    type: "p"
  }, /*#__PURE__*/React__default.createElement("strong", null, title, ":"), " ", content)));
}
Video.propTypes = {
  url: propTypes.string.isRequired,
  width: propTypes.string,
  addClass: propTypes.string
};
Video.defaultProps = {
  addClass: ''
};

var css$s = {"c-side":"_3jq03","c-side-nav":"_ORlc2","c-side-nav-item":"_2VUuV","c-overlay":"_1ZsvR","position-left":"_2dAro","aside--active--left":"_3yTuc","position-right":"_2GOdp","aside--active--right":"_28cLO","overlay--active":"_IKRE0"};

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
        $aside.classList.add(css$s['position-right']);
      } else {
        setLocationAside('aside--active--left');
        $aside.classList.add(css$s['position-left']);
      }
    }

    locationAside();
  });

  function stateAside(elementModal, elementOverlay) {
    if (getStateAside) {
      elementModal.classList.remove(css$s[getLocationAside]);
      elementOverlay.classList.remove(css$s['overlay--active']);
      setStateAside(false);
    } else {
      elementModal.classList.add(css$s[getLocationAside]);
      elementOverlay.classList.add(css$s['overlay--active']);
      setStateAside(true);
    }
  }

  function handleAside() {
    var $aside = refModal.current;
    var $overlay = refOverlay.current;
    stateAside($aside, $overlay);
  }

  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("div", {
    ref: refOverlay,
    className: css$s['c-overlay'] + " ui-overlay",
    id: "overlay"
  }), /*#__PURE__*/React__default.createElement("div", {
    ref: refModal,
    className: css$s['c-side'] + " ui-aside",
    id: "aside"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "close",
    onClick: handleAside,
    style: {
      cursor: 'pointer'
    }
  }), children || /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("h2", null, content.title), /*#__PURE__*/React__default.createElement("ul", {
    className: css$s['c-side-nav'] + " ui-aside-nav"
  }, content.list.map(function (item, index) {
    return /*#__PURE__*/React__default.createElement("li", {
      className: css$s['c-side-nav-item'] + " ui-aside-nav-item",
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

var css$t = {"AsideSection":"_37BVW"};

var _excluded$c = ["aria-label", "aria-labelledby", "action", "children", "classes", "className", "component", "onChange", "orientation", "selectionFollowsFocus", "TabScrollButtonProps", "value", "labelName"];
var AsideSection = forwardRef(function Tabs(props, ref) {
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
    className: "sr-only",
    id: "section-list"
  }, labelName), /*#__PURE__*/React__default.createElement("ul", (_React$createElement = {
    className: css$t.AsideSection,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-orientation": orientation === 'vertical' ? 'vertical' : null,
    onKeyDown: handleKeyDown,
    ref: tabListRef,
    role: "tablist"
  }, _React$createElement["aria-labelledby"] = "section-list", _React$createElement), children)));
});

var css$u = {"u-text":"_16nIh","c-card":"_1iLqk","c-card-image":"_2zNmo","c-card-container":"_1Z4zT"};

var Card = function Card(_ref) {
  var width = _ref.width,
      image = _ref.image,
      content = _ref.content,
      supportingText = _ref.supportingText,
      buttons = _ref.buttons;
  return /*#__PURE__*/React__default.createElement("div", {
    className: css$u['c-card'] + " ui-card",
    style: {
      width: width
    }
  }, image.state ? /*#__PURE__*/React__default.createElement("figure", {
    className: css$u['c-card-image'] + " ui-card-img"
  }, /*#__PURE__*/React__default.createElement("img", {
    src: image.url,
    alt: image.alt
  })) : /*#__PURE__*/React__default.createElement(Fragment$2, null), /*#__PURE__*/React__default.createElement("div", {
    className: css$u['c-card-container'] + " ui-card-container"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "c-card-container-title"
  }, /*#__PURE__*/React__default.createElement("h3", null, content.title), /*#__PURE__*/React__default.createElement("p", {
    className: css$u['u-text'] + " ui-text"
  }, content.text)), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("p", {
    className: css$u['u-text'] + " ui-text-two"
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

var css$v = {"draggable-video-container":"_1ZTow","draggable-video-button":"_EoBr8"};

var DraggableVideo = function DraggableVideo(_ref) {
  var url = _ref.url,
      width = _ref.width;

  var _useState = useState({
    activeDrags: 0
  }),
      position = _useState[0],
      setPosition = _useState[1];

  var dragHandlers = {
    onStart: function onStart() {
      setPosition({
        activeDrags: ++position.activeDrags
      });
    },
    onStop: function onStop() {
      setPosition({
        activeDrags: --position.activeDrags
      });
    }
  };
  return /*#__PURE__*/React__default.createElement(Draggable, _extends({
    handle: "strong"
  }, dragHandlers), /*#__PURE__*/React__default.createElement("div", {
    className: css$v['draggable-video-container'] + " box no-cursor"
  }, /*#__PURE__*/React__default.createElement("strong", {
    role: "presentation",
    className: "cursor"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "" + css$v['draggable-video-button']
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "open_with"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "sr-only"
  }, "Mover en la pantalla"))), /*#__PURE__*/React__default.createElement(Video, {
    url: url,
    width: width
  })));
};

var css$w = {"c-collapsible":"_3W_Aj"};

var Accordion = function Accordion(_ref) {
  var content = _ref.content,
      width = _ref.width,
      backgroundColor = _ref.backgroundColor,
      color = _ref.color;

  var _useState = useState(null);

  var _useState2 = useState(''),
      getStateIcon = _useState2[0];

  var style = {
    backgroundColor: backgroundColor,
    color: color
  };

  return /*#__PURE__*/React__default.createElement("ul", {
    className: css$w['c-collapsible'] + " ui-collapsible",
    style: {
      width: width
    }
  }, content.map(function (item, index) {
    return /*#__PURE__*/React__default.createElement("li", {
      className: css$w['c-collapsible-container'] + " ui-collapsible-container",
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

var closeModal = function closeModal(id) {
  var modal = document.getElementById("modal" + id);
  var buttonModal = document.getElementById("openModal" + id);
  var modalOverlay = document.getElementById("modalOverlay" + id);
  modal.hidden = true;
  buttonModal.focus();
  modal.classList.remove(css$d['modal--active']);
  modalOverlay.classList.remove(css$d['overlay--active']);
  document.body.classList.remove(css$d['has-modal']);
};

var closeModalOnEsc = function closeModalOnEsc(e, id) {
  if ((e.keyCode || e.which) === 27) {
    closeModal(id);
  }
};

var Modal = function Modal(_ref) {
  var children = _ref.children,
      id = _ref.id;
  document.body.addEventListener('keydown', function (e) {
    closeModalOnEsc(e, id);
  });
  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("div", {
    className: css$d['c-modal-overlay'] + " ui-modal-overlay",
    id: "modalOverlay" + id,
    onClick: function onClick() {
      closeModal(id);
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    role: "dialog",
    className: css$d['c-modal'] + " ui-modal",
    id: "modal" + id,
    hidden: true,
    onKeyDown: closeModalOnEsc(id),
    tabIndex: "-1"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$d['c-modal__content']
  }, children), /*#__PURE__*/React__default.createElement("button", {
    className: "" + css$d['c-modal__close-button'],
    onClick: function onClick() {
      closeModal(id);
    },
    id: "closeModal" + id
  }, /*#__PURE__*/React__default.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"), /*#__PURE__*/React__default.createElement("span", {
    className: "sr-only"
  }, "Cerrar modal"))));
};

var cssNavbar = {"menuContainer":"_1O8g7","menuResponsive":"_2t5N4","ulMenu":"_3GtQQ","styleBtn":"_8TzwT","styleUlMenu":"_1J1dN","styleUlAcc":"_2luFu","styleUlHelp":"_3J7fz","styleLi":"_2FQig","stylelinks":"_1-rcw","styleLink":"_uX2AO","styleNumber":"_6Gdkr","styleSubLi":"_1t9Uz","styleBtns":"_pyjf0","segundoMenu":"_3okIe","positionUlRelative":"_MrthX","spanText":"_o6aML","iconRight":"_pORcv","ulMenuAct":"_1MnK5"};

function NavBar(_ref) {
  var contentOva = _ref.contentOva,
      _ref$hrefInicio = _ref.hrefInicio,
      hrefInicio = _ref$hrefInicio === void 0 ? '#' : _ref$hrefInicio;

  var _useState = useState(false),
      dropdownMenu = _useState[0],
      setDropdownMenu = _useState[1];

  var _useState2 = useState(false),
      dropdownAcc = _useState2[0],
      setDropdownAcc = _useState2[1];

  var _useState3 = useState(false),
      dropdownHelp = _useState3[0],
      setDropdownHelp = _useState3[1];

  var _useState4 = useState(''),
      activeTheme = _useState4[0],
      setActiveTheme = _useState4[1];

  var _useState5 = useState(false),
      menuResponsive = _useState5[0],
      setMenuResponsive = _useState5[1];

  var content = (contentOva || [{
    name: 'primero',
    link: /*#__PURE__*/React__default.createElement("a", {
      href: "#"
    }, /*#__PURE__*/React__default.createElement("strong", null, "01 ."), /*#__PURE__*/React__default.createElement("span", null, "Primero"))
  }, {
    name: 'segundo',
    link: /*#__PURE__*/React__default.createElement("a", {
      href: "#"
    }, /*#__PURE__*/React__default.createElement("strong", null, "02 ."), /*#__PURE__*/React__default.createElement("span", null, "segundo"))
  }]).map(function (enlaces, i) {
    return /*#__PURE__*/React__default.createElement("li", {
      key: v4(),
      className: cssNavbar['styleLi']
    }, enlaces.link);
  });

  var handleClickDropdown = function handleClickDropdown(state, setState) {
    setDropdownMenu(false);
    setDropdownAcc(false);
    setDropdownHelp(false);
    setState(!state);
  };

  var changeTheme = function changeTheme(type) {
    var html = document.querySelector('html');

    switch (type) {
      case '':
        html.className = '';
        break;

      case 'highContrast':
        html.className = 'high-contrast';
        break;

      case 'grayScale':
        html.className = 'grayscale';
        break;

      case 'invertColors':
        html.className = 'invert-colors';
        break;

      case 'yellowOverBlack':
        html.className = 'yellow-on-black';
        break;

      case 'whiteOverRed':
        html.className = 'red-on-white';
        break;

      case 'greenOverBlue':
        html.className = 'green-on-blue';
        break;

      case 'yellowOverBlue':
        html.className = 'yellow-on-blue';
        break;

      case 'whiteOverBlack':
        html.className = 'white-on-black';
        break;

      default:
        html.className = '';
        break;
    }

    setActiveTheme(type);
  };

  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("nav", {
    className: cssNavbar['menuContainer'],
    "aria-label": "menu principal"
  }, /*#__PURE__*/React__default.createElement(Button, {
    icon: "menu",
    className: "" + cssNavbar.menuResponsive,
    onClick: function onClick() {
      !menuResponsive ? setMenuResponsive(true) : setMenuResponsive(false);
    }
  }), /*#__PURE__*/React__default.createElement("ul", {
    role: "list",
    className: cssNavbar['ulMenu'] + " " + (menuResponsive === true && cssNavbar.ulMenuAct)
  }, /*#__PURE__*/React__default.createElement("li", {
    onClick: function onClick() {
      handleClickDropdown(dropdownMenu, setDropdownMenu);
    }
  }, /*#__PURE__*/React__default.createElement(Dropdown, {
    label: "Menu",
    svgHide: "true",
    icon: "menu",
    addClass: cssNavbar['styleBtn'],
    ulClass: cssNavbar['styleUlMenu'],
    isExpanded: dropdownMenu,
    fnMenuExpanded: setDropdownMenu
  }, content)), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement(Link, {
    label: "Inicio",
    icon: "home",
    addClass: cssNavbar['styleLink'],
    href: hrefInicio
  })), /*#__PURE__*/React__default.createElement("li", {
    onClick: function onClick() {
      handleClickDropdown(dropdownAcc, setDropdownAcc);
    }
  }, /*#__PURE__*/React__default.createElement(Dropdown, {
    label: "Accesibilidad",
    svgHide: "true",
    icon: "accessibility_new",
    addClass: cssNavbar['styleBtn'],
    ulClass: cssNavbar['styleUlAcc'],
    isExpanded: dropdownAcc,
    fnMenuExpanded: setDropdownAcc
  }, /*#__PURE__*/React__default.createElement("li", {
    className: cssNavbar['styleLi']
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "hearing"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Asistencia"), /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "chevron_right"
  })), /*#__PURE__*/React__default.createElement("ul", {
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
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "brush"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Contraste"), /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "chevron_right"
  })), /*#__PURE__*/React__default.createElement("ul", {
    className: cssNavbar.segundoMenu + " " + cssNavbar.positionUlRelative
  }, /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns'],
    "aria-pressed": activeTheme == '' ? true : false,
    onClick: function onClick() {
      changeTheme('');
    }
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Sin tema"))), /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns'],
    onClick: function onClick() {
      changeTheme('grayScale');
    },
    "aria-pressed": activeTheme == 'grayScale' ? true : false
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Escala de grises"))), /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns'],
    "aria-pressed": activeTheme == 'highContrast' ? true : false,
    onClick: function onClick() {
      changeTheme('highContrast');
    }
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Alto contraste"))), /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns'],
    "aria-pressed": activeTheme == 'invertColors' ? true : false,
    onClick: function onClick() {
      changeTheme('invertColors');
    }
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Invertir colores"))), /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns'],
    "aria-pressed": activeTheme == 'yellowOverBlack' ? true : false,
    onClick: function onClick() {
      changeTheme('yellowOverBlack');
    }
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Amarillo sobre negro"))), /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns'],
    "aria-pressed": activeTheme == 'whiteOverRed' ? true : false,
    onClick: function onClick() {
      changeTheme('whiteOverRed');
    }
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Blanco sobre rojo"))), /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns'],
    "aria-pressed": activeTheme == 'greenOverBlue' ? true : false,
    onClick: function onClick() {
      changeTheme('greenOverBlue');
    }
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Verde sobre azul"))), /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns'],
    "aria-pressed": activeTheme == 'yellowOverBlue' ? true : false,
    onClick: function onClick() {
      changeTheme('yellowOverBlue');
    }
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Amarillo sobre azul"))), /*#__PURE__*/React__default.createElement("li", {
    className: "" + cssNavbar.styleSubLi
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns'],
    "aria-pressed": activeTheme == 'whiteOverBlack' ? true : false,
    onClick: function onClick() {
      changeTheme('whiteOverBlack');
    }
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Blanco sobre negro"))))), /*#__PURE__*/React__default.createElement("li", {
    className: cssNavbar['styleLi']
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "format_size"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Tama\xF1o de letra"), /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "chevron_right"
  })), /*#__PURE__*/React__default.createElement("ul", {
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
  }, /*#__PURE__*/React__default.createElement(DarkThemeToggle, {
    addClass: cssNavbar['styleBtns']
  })))), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("li", {
    onClick: function onClick() {
      handleClickDropdown(dropdownHelp, setDropdownHelp);
    }
  }, /*#__PURE__*/React__default.createElement(Dropdown, {
    label: "Ayuda",
    svgHide: "true",
    icon: "help",
    addClass: cssNavbar['styleBtn'],
    ulClass: cssNavbar['styleUlHelp'],
    isExpanded: dropdownHelp,
    fnMenuExpanded: setDropdownHelp
  }, /*#__PURE__*/React__default.createElement("li", {
    className: cssNavbar['styleLi']
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "description"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Bibliografia"))), /*#__PURE__*/React__default.createElement("li", {
    className: cssNavbar['styleLi']
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "credit_card"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Cr\xE9ditos"))), /*#__PURE__*/React__default.createElement("li", {
    className: cssNavbar['styleLi']
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "keyboard"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Atajos de teclado"))), /*#__PURE__*/React__default.createElement("li", {
    className: cssNavbar['styleLi']
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "info"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Tour"))), /*#__PURE__*/React__default.createElement("li", {
    className: cssNavbar['styleLi']
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: cssNavbar['styleBtns']
  }, /*#__PURE__*/React__default.createElement(Icon, {
    nameIcon: "settings"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "" + cssNavbar.spanText
  }, "Especificaciones t\xE9cnicas")))))))), /*#__PURE__*/React__default.createElement(ContrastFilters, null));
}

var css$x = {"styleUl":"_16Ktm","active":"_3yufd","styleBtn":"_7n72D"};

var Pagination = function Pagination(_ref) {
  var _ref$pagOva = _ref.pagOva,
      pagOva = _ref$pagOva === void 0 ? [{
    url: '#1'
  }, {
    url: '#2'
  }, {
    url: '#3'
  }, {
    url: '#4'
  }, {
    url: '#5'
  }, {
    url: '#6'
  }] : _ref$pagOva;

  var _useState = useState(0),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

  var nextPage = function nextPage() {

    var next = pagOva.length > currentPage + 1 ? currentPage + 1 : currentPage;
    setCurrentPage(next);
  };

  var prevPage = function prevPage() {

    var prev = currentPage > 0 ? currentPage - 1 : currentPage;
    setCurrentPage(prev);
  };

  var page = pagOva.map(function (item, i) {
    return /*#__PURE__*/React__default.createElement("li", {
      key: v4(),
      className: "" + (currentPage === i && css$x.active),
      onClick: function onClick() {
        setCurrentPage(i);
      }
    }, item.link ? item.link : /*#__PURE__*/React__default.createElement("a", null, i + 1));
  });
  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("footer", null, /*#__PURE__*/React__default.createElement("ul", {
    className: css$x.styleUl
  }, /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement(Button, {
    className: css$x.styleBtn,
    onClick: prevPage,
    icon: "chevron_left"
  })), page, /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement(Button, {
    className: css$x.styleBtn,
    onClick: nextPage,
    icon: "chevron_right"
  })))));
};

var css$y = {"Section":"_2biAj","direccion":"_2vXBH","direccion-content":"_2qKp9","styleBtn":"_3kPBa","styleBtnSec":"_3kaag","active":"_3C_KA"};

var _excluded$d = ["children", "tabs", "FunctValue"];

var PanelSection = function PanelSection(_ref) {
  var childrenProp = _ref.children,
      tabs = _ref.tabs,
      FunctValue = _ref.FunctValue,
      others = _objectWithoutPropertiesLoose(_ref, _excluded$d);

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
    className: css$y.Section
  }, others), /*#__PURE__*/React__default.createElement("div", {
    className: css$y.direccion
  }, /*#__PURE__*/React__default.createElement("span", null, (tabs === null || tabs === void 0 ? void 0 : tabs.length) && value + 1 + "/" + tabs.length), /*#__PURE__*/React__default.createElement("div", {
    className: css$y["direccion-content"]
  }, tabs && /*#__PURE__*/React__default.createElement(Button, {
    className: css$y.styleBtn + " " + (value > 0 && css$y.active),
    onClick: function onClick() {
      setValue(function (value) {
        return value - 1;
      });
    },
    icon: "chevron_left"
  }), /*#__PURE__*/React__default.createElement(AsideSection, {
    value: value,
    onChange: handleChange
  }, tabs && tabs.map(function (elem, i) {
    return /*#__PURE__*/React__default.createElement(BtnSec, {
      href: elem.url,
      label: elem.label,
      key: elem.id,
      setValue: FunctValue,
      addClass: css$y.styleBtnSec
    });
  })), tabs && /*#__PURE__*/React__default.createElement(Button, {
    className: css$y.styleBtn + " " + (value + 1 < tabs.length && css$y.active),
    onClick: function onClick() {
      setValue(function (value) {
        return value + 1;
      });
    },
    icon: "chevron_right"
  }))), children);
};

var css$z = {"direccion":"_3mwMs"};

var PaginationInternal = function PaginationInternal(_ref) {
  var _ref$pagOva = _ref.pagOva,
      pagOva = _ref$pagOva === void 0 ? [{
    id: 1,
    label: '',
    url: '#'
  }, {
    id: 2,
    label: '',
    url: '#'
  }, {
    id: 3,
    label: '',
    url: '#'
  }, {
    id: 4,
    label: '',
    url: '#'
  }, {
    id: 5,
    label: '',
    url: '#'
  }] : _ref$pagOva;

  var _useState = useState(1),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

  var length = pagOva.length;
  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("div", {
    className: css$z.direccion
  }, /*#__PURE__*/React__default.createElement("span", null, currentPage, "/", length), /*#__PURE__*/React__default.createElement(PanelSection, {
    tabs: pagOva,
    FunctValue: setCurrentPage
  })));
};

var css$A = {"table":"_3LoBn","table-content":"_1W60s","table-content-item":"_27m22","body-content":"_2OoWj"};

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
    className: css$A.table + " ui-table"
  }, /*#__PURE__*/React__default.createElement("thead", null, /*#__PURE__*/React__default.createElement("tr", {
    className: css$A['table-content'] + " ui-table-content"
  }, headLabels.map(function (item, index) {
    return /*#__PURE__*/React__default.createElement("th", {
      key: index,
      className: css$A['table-content-item'] + " ui-table-content-item",
      scope: "col"
    }, item);
  }))), /*#__PURE__*/React__default.createElement("tbody", null, bodyContent.map(function (content, index) {
    return /*#__PURE__*/React__default.createElement("tr", {
      key: "content" + index,
      className: css$A['table-content'] + " " + css$A['body-content'] + " ui-body-content"
    }, content.map(function (item, i) {
      return /*#__PURE__*/React__default.createElement(Fragment, null, item.isRowHeader ? /*#__PURE__*/React__default.createElement("th", {
        key: "item" + i,
        className: css$A['table-content-item'] + " ui-body-content-item",
        scope: "row"
      }, rowContent(item)) : /*#__PURE__*/React__default.createElement("td", {
        key: "item" + i,
        className: css$A['table-content-item'] + " ui-body-content-item"
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

var css$B = {"c-scroll":"_2NOnb","c-gridTable":"_37ybX","c-gridTable-head":"_2mWnf","c-gridTable-body":"_2IfP0","c-gridTable-body-item":"_153aW","c-gridTable-head-item":"_CzEks"};

function TableGrid(_ref) {
  var headContent = _ref.headContent,
      bodyContent = _ref.bodyContent,
      gridColumn = _ref.gridColumn;
  console.log(bodyContent);
  return /*#__PURE__*/React__default.createElement("div", {
    className: css$B['c-scroll'] + " ui-scroll"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$B['c-gridTable'] + " ui-gridTable"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$B['c-gridTable-head'] + " ui-gridTable-head",
    style: gridColumn
  }, headContent.map(function (item, index) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: css$B['c-gridTable-head-item'] + " ui-gridTable-head-item",
      key: "head-" + index
    }, item.type === 'icon' ? /*#__PURE__*/React__default.createElement(Icon, {
      nameIcon: item.label,
      addClass: item.addClass
    }) : /*#__PURE__*/React__default.createElement("span", null, item.label));
  })), /*#__PURE__*/React__default.createElement("div", {
    className: css$B['c-gridTable-body'] + " ui-gridTable-body",
    style: gridColumn
  }, bodyContent.map(function (data) {
    return data.map(function (buttom, index) {
      return /*#__PURE__*/React__default.createElement("div", {
        className: css$B['c-gridTable-body-item'] + " ui-gridTable-body-item",
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

var css$C = {"TabsBar":"_3ZvuE","TabsCont":"_1Zp4v","TabsScroll":"_3KvVr","TabsArea":"_2je_1","TabsContent":"_3EyBN"};

var _excluded$e = ["aria-label", "aria-labelledby", "action", "children", "classes", "className", "component", "onChange", "orientation", "selectionFollowsFocus", "TabScrollButtonProps", "value"];
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
      other = _objectWithoutPropertiesLoose(props, _excluded$e);

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
    className: css$C.TabsCont + " ui-Tabs-cont",
    ref: ref
  }, other), /*#__PURE__*/createElement("div", {
    ref: tabsRef
  }, /*#__PURE__*/createElement("div", {
    className: css$C.TabsArea + " ui-tabs-area",
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-orientation": orientation === 'vertical' ? 'vertical' : null,
    onKeyDown: handleKeyDown,
    ref: tabListRef,
    role: "tablist"
  }, children)));
});

var css$D = {"carrousel":"_1rlBL","carrouselInner":"_1YPPV","carrouselItem":"_3pMEX","carrouselButtonContainer":"_DZmRD","carrouselControlPrev":"_1_yGr","carrouselControlNext":"_YRcDS","carrouselControlNextIcon":"_1tZ89"};

var Carrousel = function Carrousel(_ref, _ref2) {
  var childrenProp = _ref.children;
  var _ref2$roleDescription = _ref2.roleDescription,
      roleDescription = _ref2$roleDescription === void 0 ? 'Slider' : _ref2$roleDescription,
      _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? 'Slide' : _ref2$type;

  var _useState = useState(0),
      Value = _useState[0],
      SetValue = _useState[1];

  var refCont = createRef();
  var refPrev = createRef();
  var refNext = createRef();
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
    className: css$D.carrousel + " " + css$D.slide + " iu-slider",
    "data-ride": "carousel"
  }, /*#__PURE__*/React__default.createElement("div", {
    ref: refCont,
    className: css$D.carrouselInner + " ui-carrusel-inner",
    role: "group",
    "aria-roledescription": roleDescription
  }, children), /*#__PURE__*/React__default.createElement("div", {
    className: "" + css$D.carrouselButtonContainer
  }, /*#__PURE__*/React__default.createElement("button", {
    className: css$D.carrouselControlPrev + " ui-carrusel-control-prev",
    "data-slide": "prev",
    onClick: handleClick,
    ref: refPrev,
    disabled: true,
    "aria-label": type + " anterior"
  }, backButton), /*#__PURE__*/React__default.createElement("button", {
    className: css$D.carrouselControlNext + " ui-carrusel-control-next",
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

var cssHeader = {"container":"_IFjB0"};

function Header(_ref) {
  var paths = _ref.paths;
  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement("header", {
    className: cssHeader.container
  }, /*#__PURE__*/React__default.createElement(Logo, null), /*#__PURE__*/React__default.createElement(NavBar, {
    contentOva: paths
  }), /*#__PURE__*/React__default.createElement(UserLogin, null)));
}

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

var TourWindow = function TourWindow() {
  var endTour = function endTour() {
    console.log('Tour terminado');
  };

  var endTourOnEsc = function endTourOnEsc(e) {
    if ((e.keyCode || e.which) === 27) {
      console.log('Tour terminado con Esc');
    }
  };

  var backTour = function backTour() {
    console.log('Tour anterior');
  };

  var nextTour = function nextTour() {
    console.log('Siguiente tour');
  };

  return /*#__PURE__*/React__default.createElement(Fragment$2, null, /*#__PURE__*/React__default.createElement(TourOverlay, {
    endTour: endTour,
    endTourOnEsc: endTourOnEsc
  }), /*#__PURE__*/React__default.createElement(TourHelpLayer, null), /*#__PURE__*/React__default.createElement(TourModal, {
    endTour: endTour,
    backTour: backTour,
    nextTour: nextTour
  }));
};

var css$E = {"col":"_1QLy6"};

var _excluded$g = ["addClass"];
var Col = function Col(_ref) {
  var _ref$addClass = _ref.addClass,
      addClass = _ref$addClass === void 0 ? '' : _ref$addClass,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$g);

  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: css$E['col'] + " " + addClass
  }, props));
};

var css$F = {"row":"_7DQjb"};

var _excluded$h = ["addClass"];
var Row = function Row(_ref) {
  var _ref$addClass = _ref.addClass,
      addClass = _ref$addClass === void 0 ? '' : _ref$addClass,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$h);

  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: css$F['row'] + " " + addClass
  }, props));
};

export { Accordion, AccordionItem, AsideNav, AsideSection, AudioBar, BtnSec, Button, Card, Carrousel, Col, ContrastFilters, DarkThemeToggle, DraggableVideo, Dropdown, Graphics, Header, Icon, Image, Inicio, InputAction, InputControl, InputField, Link, Logo, Modal, ModalButton, Multimedia, NavBar, Pagination, PaginationInternal, PanelSection, PanelTabs, Row, Section, Select, Tab, TabPanel, Table, TableGrid, Tabs, Text, Textarea, TitleSlide, Toggletip, Tooltip, TourHelpLayer, TourModal, TourOverlay, TourWindow, UserLogin, Video };
//# sourceMappingURL=index.modern.js.map
