var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// ../../../node_modules/@emotion/memoize/dist/memoize.browser.cjs.js
var require_memoize_browser_cjs = __commonJS({
  "../../../node_modules/@emotion/memoize/dist/memoize.browser.cjs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function memoize(fn) {
      var cache = {};
      return function(arg) {
        if (cache[arg] === void 0)
          cache[arg] = fn(arg);
        return cache[arg];
      };
    }
    exports.default = memoize;
  }
});

// ../../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js
var require_is_prop_valid_browser_cjs = __commonJS({
  "../../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    var memoize = _interopDefault(require_memoize_browser_cjs());
    var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    var index = memoize(
      function(prop) {
        return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
      }
      /* Z+1 */
    );
    exports.default = index;
  }
});

// ../../../node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
import { createContext } from "react";
var MotionConfigContext = createContext({
  transformPagePoint: (p) => p,
  isStatic: false,
  reducedMotion: "never"
});

// ../../../node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
import { createContext as createContext2, useContext } from "react";
var MotionContext = createContext2({});
function useVisualElementContext() {
  return useContext(MotionContext).visualElement;
}

// ../../../node_modules/framer-motion/dist/es/context/PresenceContext.mjs
import { createContext as createContext3 } from "react";
var PresenceContext = createContext3(null);

// ../../../node_modules/framer-motion/dist/es/utils/is-browser.mjs
var isBrowser = typeof document !== "undefined";

// ../../../node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
import { useLayoutEffect, useEffect } from "react";
var useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

// ../../../node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
import { createContext as createContext4 } from "react";
var LayoutGroupContext = createContext4({});

// ../../../node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
import { createContext as createContext5 } from "react";
var SwitchLayoutGroupContext = createContext5({});

// ../../../node_modules/framer-motion/dist/es/motion/index.mjs
import * as React from "react";
import { forwardRef, useContext as useContext4 } from "react";

// ../../../node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
import { useContext as useContext2, useRef, useEffect as useEffect2 } from "react";

// ../../../node_modules/framer-motion/dist/es/context/LazyContext.mjs
import { createContext as createContext6 } from "react";
var LazyContext = createContext6({ strict: false });

// ../../../node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function useVisualElement(Component2, visualState, props, createVisualElement) {
  const parent = useVisualElementContext();
  const lazyContext = useContext2(LazyContext);
  const presenceContext = useContext2(PresenceContext);
  const reducedMotionConfig = useContext2(MotionConfigContext).reducedMotion;
  const visualElementRef = useRef();
  createVisualElement = createVisualElement || lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component2, {
      visualState,
      parent,
      props,
      presenceId: presenceContext ? presenceContext.id : void 0,
      blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
      reducedMotionConfig
    });
  }
  const visualElement = visualElementRef.current;
  useIsomorphicLayoutEffect(() => {
    visualElement && visualElement.render();
  });
  const useAnimateChangesEffect = window.HandoffAppearAnimations ? useIsomorphicLayoutEffect : useEffect2;
  useAnimateChangesEffect(() => {
    if (visualElement && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
  });
  return visualElement;
}

// ../../../node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
import { useCallback } from "react";

// ../../../node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
  return typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}

// ../../../node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function useMotionRef(visualState, visualElement, externalRef) {
  return useCallback(
    (instance) => {
      instance && visualState.mount && visualState.mount(instance);
      if (visualElement) {
        instance ? visualElement.mount(instance) : visualElement.unmount();
      }
      if (externalRef) {
        if (typeof externalRef === "function") {
          externalRef(instance);
        } else if (isRefObject(externalRef)) {
          externalRef.current = instance;
        }
      }
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [visualElement]
  );
}

// ../../../node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
import { useContext as useContext3, useMemo } from "react";

// ../../../node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs
function isVariantLabel(v) {
  return typeof v === "string" || Array.isArray(v);
}

// ../../../node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function isAnimationControls(v) {
  return typeof v === "object" && typeof v.start === "function";
}

// ../../../node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
var variantProps = [
  "initial",
  "animate",
  "exit",
  "whileHover",
  "whileDrag",
  "whileTap",
  "whileFocus",
  "whileInView"
];
function isControllingVariants(props) {
  return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
}
function isVariantNode(props) {
  return Boolean(isControllingVariants(props) || props.variants);
}

// ../../../node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
  if (isControllingVariants(props)) {
    const { initial, animate: animate3 } = props;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate3) ? animate3 : void 0
    };
  }
  return props.inherit !== false ? context : {};
}

// ../../../node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function useCreateMotionContext(props) {
  const { initial, animate: animate3 } = getCurrentTreeVariants(props, useContext3(MotionContext));
  return useMemo(() => ({ initial, animate: animate3 }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate3)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}

// ../../../node_modules/framer-motion/dist/es/motion/features/definitions.mjs
var createDefinition = (propNames) => ({
  isEnabled: (props) => propNames.some((name) => !!props[name])
});
var featureDefinitions = {
  measureLayout: createDefinition(["layout", "layoutId", "drag"]),
  animation: createDefinition([
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView"
  ]),
  exit: createDefinition(["exit"]),
  drag: createDefinition(["drag", "dragControls"]),
  focus: createDefinition(["whileFocus"]),
  hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: createDefinition([
    "onPan",
    "onPanStart",
    "onPanSessionStart",
    "onPanEnd"
  ]),
  inView: createDefinition([
    "whileInView",
    "onViewportEnter",
    "onViewportLeave"
  ])
};

// ../../../node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function loadFeatures(features) {
  for (const key in features) {
    if (key === "projectionNodeConstructor") {
      featureDefinitions.projectionNodeConstructor = features[key];
    } else {
      featureDefinitions[key].Component = features[key];
    }
  }
}

// ../../../node_modules/framer-motion/dist/es/utils/use-constant.mjs
import { useRef as useRef2 } from "react";
function useConstant(init) {
  const ref = useRef2(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// ../../../node_modules/framer-motion/dist/es/projection/node/state.mjs
var globalProjectionState = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: true,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: false
};

// ../../../node_modules/framer-motion/dist/es/projection/node/id.mjs
var id = 1;
function useProjectionId() {
  return useConstant(() => {
    if (globalProjectionState.hasEverUpdated) {
      return id++;
    }
  });
}

// ../../../node_modules/framer-motion/dist/es/motion/utils/VisualElementHandler.mjs
import React__default from "react";
var VisualElementHandler = class extends React__default.Component {
  /**
   * Update visual element props as soon as we know this update is going to be commited.
   */
  getSnapshotBeforeUpdate() {
    const { visualElement, props } = this.props;
    if (visualElement)
      visualElement.setProps(props);
    return null;
  }
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
};

// ../../../node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
var motionComponentSymbol = Symbol.for("motionComponentSymbol");

// ../../../node_modules/framer-motion/dist/es/motion/index.mjs
function createMotionComponent({ preloadedFeatures, createVisualElement, projectionNodeConstructor, useRender, useVisualState: useVisualState2, Component: Component2 }) {
  preloadedFeatures && loadFeatures(preloadedFeatures);
  function MotionComponent(props, externalRef) {
    const configAndProps = {
      ...useContext4(MotionConfigContext),
      ...props,
      layoutId: useLayoutId(props)
    };
    const { isStatic } = configAndProps;
    let features = null;
    const context = useCreateMotionContext(props);
    const projectionId = isStatic ? void 0 : useProjectionId();
    const visualState = useVisualState2(props, isStatic);
    if (!isStatic && isBrowser) {
      context.visualElement = useVisualElement(Component2, visualState, configAndProps, createVisualElement);
      const lazyStrictMode = useContext4(LazyContext).strict;
      const initialLayoutGroupConfig = useContext4(SwitchLayoutGroupContext);
      if (context.visualElement) {
        features = context.visualElement.loadFeatures(
          // Note: Pass the full new combined props to correctly re-render dynamic feature components.
          configAndProps,
          lazyStrictMode,
          preloadedFeatures,
          projectionId,
          projectionNodeConstructor || featureDefinitions.projectionNodeConstructor,
          initialLayoutGroupConfig
        );
      }
    }
    return React.createElement(
      VisualElementHandler,
      { visualElement: context.visualElement, props: configAndProps },
      features,
      React.createElement(MotionContext.Provider, { value: context }, useRender(Component2, props, projectionId, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement))
    );
  }
  const ForwardRefComponent = forwardRef(MotionComponent);
  ForwardRefComponent[motionComponentSymbol] = Component2;
  return ForwardRefComponent;
}
function useLayoutId({ layoutId }) {
  const layoutGroupId = useContext4(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}

// ../../../node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs
var scaleCorrectors = {};
function addScaleCorrector(correctors) {
  Object.assign(scaleCorrectors, correctors);
}

// ../../../node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs
var isMotionValue = (value) => !!(value === null || value === void 0 ? void 0 : value.getVelocity);

// ../../../node_modules/framer-motion/dist/es/render/html/utils/transform.mjs
var transformPropOrder = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
var transformProps = new Set(transformPropOrder);

// ../../../node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
var sortTransformProps = (a, b) => transformPropOrder.indexOf(a) - transformPropOrder.indexOf(b);
function buildTransform({ transform: transform2, transformKeys: transformKeys2 }, { enableHardwareAcceleration = true, allowTransformNone = true }, transformIsDefault, transformTemplate) {
  let transformString = "";
  transformKeys2.sort(sortTransformProps);
  for (const key of transformKeys2) {
    transformString += `${translateAlias[key] || key}(${transform2[key]}) `;
  }
  if (enableHardwareAcceleration && !transform2.z) {
    transformString += "translateZ(0)";
  }
  transformString = transformString.trim();
  if (transformTemplate) {
    transformString = transformTemplate(transform2, transformIsDefault ? "" : transformString);
  } else if (allowTransformNone && transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}

// ../../../node_modules/framer-motion/dist/es/utils/clamp.mjs
var clamp = (min, max, v) => Math.min(Math.max(v, min), max);

// ../../../node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var validMotionProps = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "viewport"
]);
function isValidMotionProp(key) {
  return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || validMotionProps.has(key);
}

// ../../../node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
var shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
  if (!isValidProp)
    return;
  shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
try {
  loadExternalIsValidProp(require_is_prop_valid_browser_cjs().default);
} catch (_a) {
}
function filterProps(props, isDom, forwardMotionProps) {
  const filteredProps = {};
  for (const key in props) {
    if (key === "values" && typeof props.values === "object")
      continue;
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || // If trying to use native HTML drag events, forward drag listeners
    props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}

// ../../../node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
var isKeyframesTarget = (v) => {
  return Array.isArray(v);
};

// ../../../node_modules/framer-motion/dist/es/utils/resolve-value.mjs
var isCustomValue = (v) => {
  return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = (v) => {
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

// ../../../node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
function resolveMotionValue(value) {
  const unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}

// ../../../node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
import { useContext as useContext5 } from "react";

// ../../../node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs
function resolveVariantFromProps(props, definition, custom, currentValues = {}, currentVelocity = {}) {
  if (typeof definition === "function") {
    definition = definition(custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  if (typeof definition === "string") {
    definition = props.variants && props.variants[definition];
  }
  if (typeof definition === "function") {
    definition = definition(custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  return definition;
}

// ../../../node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function makeState({ scrapeMotionValuesFromProps: scrapeMotionValuesFromProps3, createRenderState, onMount }, props, context, presenceContext) {
  const state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
    renderState: createRenderState()
  };
  if (onMount) {
    state.mount = (instance) => onMount(props, instance, state);
  }
  return state;
}
var makeUseVisualState = (config) => (props, isStatic) => {
  const context = useContext5(MotionContext);
  const presenceContext = useContext5(PresenceContext);
  const make = () => makeState(config, props, context, presenceContext);
  return isStatic ? make() : useConstant(make);
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  const values = {};
  const motionValues = scrapeMotionValues(props, {});
  for (const key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  let { initial, animate: animate3 } = props;
  const isControllingVariants$1 = isControllingVariants(props);
  const isVariantNode$1 = isVariantNode(props);
  if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
    if (initial === void 0)
      initial = context.initial;
    if (animate3 === void 0)
      animate3 = context.animate;
  }
  let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
  isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
  const variantToSet = isInitialAnimationBlocked ? animate3 : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    list.forEach((definition) => {
      const resolved = resolveVariantFromProps(props, definition);
      if (!resolved)
        return;
      const { transitionEnd, transition, ...target } = resolved;
      for (const key in target) {
        let valueTarget = target[key];
        if (Array.isArray(valueTarget)) {
          const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
          valueTarget = valueTarget[index];
        }
        if (valueTarget !== null) {
          values[key] = valueTarget;
        }
      }
      for (const key in transitionEnd)
        values[key] = transitionEnd[key];
    });
  }
  return values;
}

// ../../../node_modules/framer-motion/dist/es/render/utils/types.mjs
var AnimationType;
(function(AnimationType2) {
  AnimationType2["Animate"] = "animate";
  AnimationType2["Hover"] = "whileHover";
  AnimationType2["Tap"] = "whileTap";
  AnimationType2["Drag"] = "whileDrag";
  AnimationType2["Focus"] = "whileFocus";
  AnimationType2["InView"] = "whileInView";
  AnimationType2["Exit"] = "exit";
})(AnimationType || (AnimationType = {}));

// ../../../node_modules/framer-motion/dist/es/events/use-dom-event.mjs
import { useEffect as useEffect3 } from "react";
function addDomEvent(target, eventName, handler, options = { passive: true }) {
  target.addEventListener(eventName, handler, options);
  return () => target.removeEventListener(eventName, handler);
}
function useDomEvent(ref, eventName, handler, options) {
  useEffect3(() => {
    const element = ref.current;
    if (handler && element) {
      return addDomEvent(element, eventName, handler, options);
    }
  }, [ref, eventName, handler, options]);
}

// ../../../node_modules/framer-motion/dist/es/events/utils/is-primary-pointer.mjs
var isPrimaryPointer = (event) => {
  if (event.pointerType === "mouse") {
    return typeof event.button !== "number" || event.button <= 0;
  } else {
    return event.isPrimary !== false;
  }
};

// ../../../node_modules/framer-motion/dist/es/events/event-info.mjs
function extractEventInfo(event, pointType = "page") {
  return {
    point: {
      x: event[pointType + "X"],
      y: event[pointType + "Y"]
    }
  };
}
var addPointerInfo = (handler) => {
  return (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
};

// ../../../node_modules/framer-motion/dist/es/events/use-pointer-event.mjs
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, eventName, addPointerInfo(handler), options);
}
function usePointerEvent(ref, eventName, handler, options) {
  return useDomEvent(ref, eventName, handler && addPointerInfo(handler), options);
}

// ../../../node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs
function createLock(name) {
  let lock = null;
  return () => {
    const openLock = () => {
      lock = null;
    };
    if (lock === null) {
      lock = name;
      return openLock;
    }
    return false;
  };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag2) {
  let lock = false;
  if (drag2 === "y") {
    lock = globalVerticalLock();
  } else if (drag2 === "x") {
    lock = globalHorizontalLock();
  } else {
    const openHorizontal = globalHorizontalLock();
    const openVertical = globalVerticalLock();
    if (openHorizontal && openVertical) {
      lock = () => {
        openHorizontal();
        openVertical();
      };
    } else {
      if (openHorizontal)
        openHorizontal();
      if (openVertical)
        openVertical();
    }
  }
  return lock;
}
function isDragActive() {
  const openGestureLock = getGlobalLock(true);
  if (!openGestureLock)
    return true;
  openGestureLock();
  return false;
}

// ../../../node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs
import { useEffect as useEffect4 } from "react";
function useUnmountEffect(callback) {
  return useEffect4(() => () => callback(), []);
}

// ../../../node_modules/framer-motion/dist/es/utils/pipe.mjs
var combineFunctions = (a, b) => (v) => b(a(v));
var pipe = (...transformers) => transformers.reduce(combineFunctions);

// ../../../node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
import { useContext as useContext6, useId, useEffect as useEffect5 } from "react";
function usePresence() {
  const context = useContext6(PresenceContext);
  if (context === null)
    return [true, null];
  const { isPresent: isPresent2, onExitComplete, register } = context;
  const id4 = useId();
  useEffect5(() => register(id4), []);
  const safeToRemove = () => onExitComplete && onExitComplete(id4);
  return !isPresent2 && onExitComplete ? [false, safeToRemove] : [true];
}
function useIsPresent() {
  return isPresent(useContext6(PresenceContext));
}
function isPresent(context) {
  return context === null ? true : context.isPresent;
}

// ../../../node_modules/framer-motion/dist/es/frameloop/data.mjs
var frameData = {
  delta: 0,
  timestamp: 0
};

// ../../../node_modules/framer-motion/dist/es/frameloop/on-next-frame.mjs
var defaultTimestep = 1 / 60 * 1e3;
var getCurrentTime = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
var onNextFrame = typeof window !== "undefined" ? (callback) => window.requestAnimationFrame(callback) : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);

// ../../../node_modules/framer-motion/dist/es/frameloop/create-render-step.mjs
function createRenderStep(runNextFrame2) {
  let toRun = [];
  let toRunNextFrame = [];
  let numToRun = 0;
  let isProcessing2 = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  const step = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing2;
      const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      if (buffer.indexOf(callback) === -1) {
        buffer.push(callback);
        if (addToCurrentFrame && isProcessing2)
          numToRun = toRun.length;
      }
      return callback;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (callback) => {
      const index = toRunNextFrame.indexOf(callback);
      if (index !== -1)
        toRunNextFrame.splice(index, 1);
      toKeepAlive.delete(callback);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (frameData2) => {
      if (isProcessing2) {
        flushNextFrame = true;
        return;
      }
      isProcessing2 = true;
      [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
      toRunNextFrame.length = 0;
      numToRun = toRun.length;
      if (numToRun) {
        for (let i = 0; i < numToRun; i++) {
          const callback = toRun[i];
          callback(frameData2);
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame2();
          }
        }
      }
      isProcessing2 = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData2);
      }
    }
  };
  return step;
}

// ../../../node_modules/framer-motion/dist/es/frameloop/index.mjs
var maxElapsed = 40;
var useDefaultElapsed = true;
var runNextFrame = false;
var isProcessing = false;
var stepsOrder = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
];
var steps = stepsOrder.reduce((acc, key) => {
  acc[key] = createRenderStep(() => runNextFrame = true);
  return acc;
}, {});
var sync = stepsOrder.reduce((acc, key) => {
  const step = steps[key];
  acc[key] = (process2, keepAlive = false, immediate = false) => {
    if (!runNextFrame)
      startLoop();
    return step.schedule(process2, keepAlive, immediate);
  };
  return acc;
}, {});
var cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = steps[key].cancel;
  return acc;
}, {});
var flushSync = stepsOrder.reduce((acc, key) => {
  acc[key] = () => steps[key].process(frameData);
  return acc;
}, {});
var processStep = (stepId) => steps[stepId].process(frameData);
var processFrame = (timestamp) => {
  runNextFrame = false;
  frameData.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frameData.timestamp, maxElapsed), 1);
  frameData.timestamp = timestamp;
  isProcessing = true;
  stepsOrder.forEach(processStep);
  isProcessing = false;
  if (runNextFrame) {
    useDefaultElapsed = false;
    onNextFrame(processFrame);
  }
};
var startLoop = () => {
  runNextFrame = true;
  useDefaultElapsed = true;
  if (!isProcessing)
    onNextFrame(processFrame);
};

// ../../../node_modules/framer-motion/dist/es/utils/array.mjs
function addUniqueItem(arr, item) {
  if (arr.indexOf(item) === -1)
    arr.push(item);
}
function removeItem(arr, item) {
  const index = arr.indexOf(item);
  if (index > -1)
    arr.splice(index, 1);
}
function moveItem([...arr], fromIndex, toIndex) {
  const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
  if (startIndex >= 0 && startIndex < arr.length) {
    const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
    const [item] = arr.splice(fromIndex, 1);
    arr.splice(endIndex, 0, item);
  }
  return arr;
}

// ../../../node_modules/framer-motion/dist/es/utils/subscription-manager.mjs
var SubscriptionManager = class {
  constructor() {
    this.subscriptions = [];
  }
  add(handler) {
    addUniqueItem(this.subscriptions, handler);
    return () => removeItem(this.subscriptions, handler);
  }
  notify(a, b, c) {
    const numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions)
      return;
    if (numSubscriptions === 1) {
      this.subscriptions[0](a, b, c);
    } else {
      for (let i = 0; i < numSubscriptions; i++) {
        const handler = this.subscriptions[i];
        handler && handler(a, b, c);
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};

// ../../../node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}

// ../../../node_modules/framer-motion/dist/es/value/index.mjs
var isFloat = (value) => {
  return !isNaN(parseFloat(value));
};
var MotionValue = class {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(init, options = {}) {
    this.version = "9.0.1";
    this.timeDelta = 0;
    this.lastUpdated = 0;
    this.canTrackVelocity = false;
    this.events = {};
    this.updateAndNotify = (v, render = true) => {
      this.prev = this.current;
      this.current = v;
      const { delta, timestamp } = frameData;
      if (this.lastUpdated !== timestamp) {
        this.timeDelta = delta;
        this.lastUpdated = timestamp;
        sync.postRender(this.scheduleVelocityCheck);
      }
      if (this.prev !== this.current && this.events.change) {
        this.events.change.notify(this.current);
      }
      if (this.events.velocityChange) {
        this.events.velocityChange.notify(this.getVelocity());
      }
      if (render && this.events.renderRequest) {
        this.events.renderRequest.notify(this.current);
      }
    };
    this.scheduleVelocityCheck = () => sync.postRender(this.velocityCheck);
    this.velocityCheck = ({ timestamp }) => {
      if (timestamp !== this.lastUpdated) {
        this.prev = this.current;
        if (this.events.velocityChange) {
          this.events.velocityChange.notify(this.getVelocity());
        }
      }
    };
    this.hasAnimated = false;
    this.prev = this.current = init;
    this.canTrackVelocity = isFloat(this.current);
    this.owner = options.owner;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(subscription) {
    return this.on("change", subscription);
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    const unsubscribe = this.events[eventName].add(callback);
    if (eventName === "change") {
      return () => {
        unsubscribe();
        sync.read(() => {
          if (!this.events.change.getSize()) {
            this.stop();
          }
        });
      };
    }
    return unsubscribe;
  }
  clearListeners() {
    for (const eventManagers in this.events) {
      this.events[eventManagers].clear();
    }
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(passiveEffect, stopPassiveEffect) {
    this.passiveEffect = passiveEffect;
    this.stopPassiveEffect = stopPassiveEffect;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(v, render = true) {
    if (!render || !this.passiveEffect) {
      this.updateAndNotify(v, render);
    } else {
      this.passiveEffect(v, this.updateAndNotify);
    }
  }
  setWithVelocity(prev, current, delta) {
    this.set(current);
    this.prev = prev;
    this.timeDelta = delta;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(v) {
    this.updateAndNotify(v);
    this.prev = v;
    this.stop();
    if (this.stopPassiveEffect)
      this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    return this.canTrackVelocity ? (
      // These casts could be avoided if parseFloat would be typed better
      velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
    ) : 0;
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(startAnimation) {
    this.stop();
    return new Promise((resolve) => {
      this.hasAnimated = true;
      this.animation = startAnimation(resolve) || null;
      if (this.events.animationStart) {
        this.events.animationStart.notify();
      }
    }).then(() => {
      if (this.events.animationComplete) {
        this.events.animationComplete.notify();
      }
      this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    if (this.animation) {
      this.animation.stop();
      if (this.events.animationCancel) {
        this.events.animationCancel.notify();
      }
    }
    this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    this.animation = null;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners();
    this.stop();
    if (this.stopPassiveEffect) {
      this.stopPassiveEffect();
    }
  }
};
function motionValue(init, options) {
  return new MotionValue(init, options);
}

// ../../../node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs
var isNumericalString = (v) => /^\-?\d*\.?\d+$/.test(v);

// ../../../node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs
var isZeroValueString = (v) => /^0[^.\s]+$/.test(v);

// ../../../node_modules/framer-motion/dist/es/value/types/utils.mjs
var sanitize = (v) => Math.round(v * 1e5) / 1e5;
var floatRegex = /(-)?([\d]*\.?[\d])+/g;
var colorRegex = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString(v) {
  return typeof v === "string";
}

// ../../../node_modules/framer-motion/dist/es/value/types/numbers/index.mjs
var number = {
  test: (v) => typeof v === "number",
  parse: parseFloat,
  transform: (v) => v
};
var alpha = {
  ...number,
  transform: (v) => clamp(0, 1, v)
};
var scale = {
  ...number,
  default: 1
};

// ../../../node_modules/framer-motion/dist/es/value/types/color/utils.mjs
var isColorString = (type, testProp) => (v) => {
  return Boolean(isString(v) && singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => (v) => {
  if (!isString(v))
    return v;
  const [a, b, c, alpha2] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a),
    [bName]: parseFloat(b),
    [cName]: parseFloat(c),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};

// ../../../node_modules/framer-motion/dist/es/value/types/color/rgba.mjs
var clampRgbUnit = (v) => clamp(0, 255, v);
var rgbUnit = {
  ...number,
  transform: (v) => Math.round(clampRgbUnit(v))
};
var rgba = {
  test: isColorString("rgb", "red"),
  parse: splitColor("red", "green", "blue"),
  transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

// ../../../node_modules/framer-motion/dist/es/value/types/color/hex.mjs
function parseHex(v) {
  let r = "";
  let g = "";
  let b = "";
  let a = "";
  if (v.length > 5) {
    r = v.substring(1, 3);
    g = v.substring(3, 5);
    b = v.substring(5, 7);
    a = v.substring(7, 9);
  } else {
    r = v.substring(1, 2);
    g = v.substring(2, 3);
    b = v.substring(3, 4);
    a = v.substring(4, 5);
    r += r;
    g += g;
    b += b;
    a += a;
  }
  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
var hex = {
  test: isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};

// ../../../node_modules/framer-motion/dist/es/value/types/numbers/units.mjs
var createUnitType = (unit) => ({
  test: (v) => isString(v) && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: (v) => `${v}${unit}`
});
var degrees = createUnitType("deg");
var percent = createUnitType("%");
var px = createUnitType("px");
var vh = createUnitType("vh");
var vw = createUnitType("vw");
var progressPercentage = {
  ...percent,
  parse: (v) => percent.parse(v) / 100,
  transform: (v) => percent.transform(v * 100)
};

// ../../../node_modules/framer-motion/dist/es/value/types/color/hsla.mjs
var hsla = {
  test: isColorString("hsl", "hue"),
  parse: splitColor("hue", "saturation", "lightness"),
  transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};

// ../../../node_modules/framer-motion/dist/es/value/types/color/index.mjs
var color = {
  test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
  parse: (v) => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: (v) => {
    return isString(v) ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  }
};

// ../../../node_modules/framer-motion/dist/es/value/types/complex/index.mjs
var colorToken = "${c}";
var numberToken = "${n}";
function test(v) {
  var _a, _b;
  return isNaN(v) && isString(v) && (((_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) || 0) + (((_b = v.match(colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) > 0;
}
function analyseComplexValue(v) {
  if (typeof v === "number")
    v = `${v}`;
  const values = [];
  let numColors = 0;
  let numNumbers = 0;
  const colors = v.match(colorRegex);
  if (colors) {
    numColors = colors.length;
    v = v.replace(colorRegex, colorToken);
    values.push(...colors.map(color.parse));
  }
  const numbers = v.match(floatRegex);
  if (numbers) {
    numNumbers = numbers.length;
    v = v.replace(floatRegex, numberToken);
    values.push(...numbers.map(number.parse));
  }
  return { values, numColors, numNumbers, tokenised: v };
}
function parse(v) {
  return analyseComplexValue(v).values;
}
function createTransformer(source) {
  const { values, numColors, tokenised } = analyseComplexValue(source);
  const numValues = values.length;
  return (v) => {
    let output = tokenised;
    for (let i = 0; i < numValues; i++) {
      output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? color.transform(v[i]) : sanitize(v[i]));
    }
    return output;
  };
}
var convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
  const parsed = parse(v);
  const transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}
var complex = { test, parse, createTransformer, getAnimatableNone };

// ../../../node_modules/framer-motion/dist/es/value/types/complex/filter.mjs
var maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
  const [name, value] = v.slice(0, -1).split("(");
  if (name === "drop-shadow")
    return v;
  const [number2] = value.match(floatRegex) || [];
  if (!number2)
    return v;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number2 !== value)
    defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /([a-z-]*)\(.*?\)/g;
var filter = {
  ...complex,
  getAnimatableNone: (v) => {
    const functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(" ") : v;
  }
};

// ../../../node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs
var int = {
  ...number,
  transform: Math.round
};

// ../../../node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs
var numberValueTypes = {
  // Border props
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  // Positioning props
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  size: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  // Spacing props
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  // Transform props
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px,
  // Misc
  zIndex: int,
  // SVG
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};

// ../../../node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs
var defaultValueTypes = {
  ...numberValueTypes,
  // Color props
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  // Border props
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter,
  WebkitFilter: filter
};
var getDefaultValueType = (key) => defaultValueTypes[key];

// ../../../node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
function getAnimatableNone2(key, value) {
  var _a;
  let defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter)
    defaultValueType = complex;
  return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
}

// ../../../node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs
var testValueType = (v) => (type) => type.test(v);

// ../../../node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs
var auto = {
  test: (v) => v === "auto",
  parse: (v) => v
};

// ../../../node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs
var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
var findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));

// ../../../node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs
var valueTypes = [...dimensionValueTypes, color, complex];
var findValueType = (v) => valueTypes.find(testValueType(v));

// ../../../node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs
function getCurrent(visualElement) {
  const current = {};
  visualElement.values.forEach((value, key) => current[key] = value.get());
  return current;
}
function getVelocity(visualElement) {
  const velocity = {};
  visualElement.values.forEach((value, key) => velocity[key] = value.getVelocity());
  return velocity;
}
function resolveVariant(visualElement, definition, custom) {
  const props = visualElement.getProps();
  return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, getCurrent(visualElement), getVelocity(visualElement));
}

// ../../../node_modules/framer-motion/dist/es/render/utils/setters.mjs
function setMotionValue(visualElement, key, value) {
  if (visualElement.hasValue(key)) {
    visualElement.getValue(key).set(value);
  } else {
    visualElement.addValue(key, motionValue(value));
  }
}
function setTarget(visualElement, definition) {
  const resolved = resolveVariant(visualElement, definition);
  let { transitionEnd = {}, transition = {}, ...target } = resolved ? visualElement.makeTargetAnimatable(resolved, false) : {};
  target = { ...target, ...transitionEnd };
  for (const key in target) {
    const value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement, key, value);
  }
}
function setVariants(visualElement, variantLabels) {
  const reversedLabels = [...variantLabels].reverse();
  reversedLabels.forEach((key) => {
    var _a;
    const variant = visualElement.getVariant(key);
    variant && setTarget(visualElement, variant);
    (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach((child) => {
      setVariants(child, variantLabels);
    });
  });
}
function setValues(visualElement, definition) {
  if (Array.isArray(definition)) {
    return setVariants(visualElement, definition);
  } else if (typeof definition === "string") {
    return setVariants(visualElement, [definition]);
  } else {
    setTarget(visualElement, definition);
  }
}
function checkTargetForNewValues(visualElement, target, origin) {
  var _a, _b;
  const newValueKeys = Object.keys(target).filter((key) => !visualElement.hasValue(key));
  const numNewValues = newValueKeys.length;
  if (!numNewValues)
    return;
  for (let i = 0; i < numNewValues; i++) {
    const key = newValueKeys[i];
    const targetValue = target[key];
    let value = null;
    if (Array.isArray(targetValue)) {
      value = targetValue[0];
    }
    if (value === null) {
      value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
    }
    if (value === void 0 || value === null)
      continue;
    if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
      value = parseFloat(value);
    } else if (!findValueType(value) && complex.test(targetValue)) {
      value = getAnimatableNone2(key, targetValue);
    }
    visualElement.addValue(key, motionValue(value, { owner: visualElement }));
    if (origin[key] === void 0) {
      origin[key] = value;
    }
    if (value !== null)
      visualElement.setBaseTarget(key, value);
  }
}
function getOriginFromTransition(key, transition) {
  if (!transition)
    return;
  const valueTransition = transition[key] || transition["default"] || transition;
  return valueTransition.from;
}
function getOrigin(target, transition, visualElement) {
  var _a;
  const origin = {};
  for (const key in target) {
    const transitionOrigin = getOriginFromTransition(key, transition);
    origin[key] = transitionOrigin !== void 0 ? transitionOrigin : (_a = visualElement.getValue(key)) === null || _a === void 0 ? void 0 : _a.get();
  }
  return origin;
}

// ../../../node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
var camelToDash = (str) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

// ../../../node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs
var optimizedAppearDataId = "framerAppearId";
var optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);

// ../../../node_modules/framer-motion/dist/es/easing/modifiers/mirror.mjs
var mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

// ../../../node_modules/framer-motion/dist/es/easing/modifiers/reverse.mjs
var reverseEasing = (easing) => (p) => 1 - easing(1 - p);

// ../../../node_modules/framer-motion/dist/es/easing/ease.mjs
var easeIn = (p) => p * p;
var easeOut = reverseEasing(easeIn);
var easeInOut = mirrorEasing(easeIn);

// ../../../node_modules/framer-motion/dist/es/utils/mix.mjs
var mix = (from, to, progress3) => -progress3 * from + progress3 * to + from;

// ../../../node_modules/framer-motion/dist/es/utils/noop.mjs
var noop = (any) => any;

// ../../../node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs
var calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - x;
    if (currentX > 0) {
      upperBound = currentT;
    } else {
      lowerBound = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return noop;
  const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
  return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

// ../../../node_modules/framer-motion/dist/es/easing/circ.mjs
var circIn = (p) => 1 - Math.sin(Math.acos(p));
var circOut = reverseEasing(circIn);
var circInOut = mirrorEasing(circOut);

// ../../../node_modules/framer-motion/dist/es/easing/back.mjs
var backOut = cubicBezier(0.33, 1.53, 0.69, 0.99);
var backIn = reverseEasing(backOut);
var backInOut = mirrorEasing(backIn);

// ../../../node_modules/framer-motion/dist/es/easing/anticipate.mjs
var anticipate = (p) => (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));

// ../../../node_modules/hey-listen/dist/hey-listen.es.js
var warning = function() {
};
var invariant = function() {
};
if (false) {
  warning = function(check, message) {
    if (!check && typeof console !== "undefined") {
      console.warn(message);
    }
  };
  invariant = function(check, message) {
    if (!check) {
      throw new Error(message);
    }
  };
}

// ../../../node_modules/framer-motion/dist/es/animation/legacy-popmotion/find-spring.mjs
var safeMin = 1e-3;
var minDuration = 0.01;
var maxDuration = 10;
var minDamping = 0.05;
var maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1 }) {
  let envelope;
  let derivative;
  warning(duration <= maxDuration * 1e3, "Spring duration must be 10 seconds or less");
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
  duration = clamp(minDuration, maxDuration, duration / 1e3);
  if (dampingRatio < 1) {
    envelope = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const a = exponentialDecay - velocity;
      const b = calcAngularFreq(undampedFreq2, dampingRatio);
      const c = Math.exp(-delta);
      return safeMin - a / b * c;
    };
    derivative = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const d = delta * velocity + velocity;
      const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
      const f = Math.exp(-delta);
      const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f) / g;
    };
  } else {
    envelope = (undampedFreq2) => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = (undampedFreq2 - velocity) * duration + 1;
      return -safeMin + a * b;
    };
    derivative = (undampedFreq2) => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = (velocity - undampedFreq2) * (duration * duration);
      return a * b;
    };
  }
  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = duration * 1e3;
  if (isNaN(undampedFreq)) {
    return {
      stiffness: 100,
      damping: 10,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

// ../../../node_modules/framer-motion/dist/es/animation/legacy-popmotion/spring.mjs
var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys2) {
  return keys2.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
  let springOptions = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: false,
    ...options
  };
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    const derived = findSpring(options);
    springOptions = {
      ...springOptions,
      ...derived,
      velocity: 0,
      mass: 1
    };
    springOptions.isResolvedFromDuration = true;
  }
  return springOptions;
}
var velocitySampleDuration = 5;
function spring({ keyframes: keyframes2, restDelta, restSpeed, ...options }) {
  let origin = keyframes2[0];
  let target = keyframes2[keyframes2.length - 1];
  const state = { done: false, value: origin };
  const { stiffness, damping, mass, velocity, duration, isResolvedFromDuration } = getSpringOptions(options);
  let resolveSpring = zero;
  let initialVelocity = velocity ? -(velocity / 1e3) : 0;
  const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
  function createSpring() {
    const initialDelta = target - origin;
    const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1e3;
    const isGranularScale = Math.abs(initialDelta) < 5;
    restSpeed || (restSpeed = isGranularScale ? 0.01 : 2);
    restDelta || (restDelta = isGranularScale ? 5e-3 : 0.5);
    if (dampingRatio < 1) {
      const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
      resolveSpring = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
      };
    } else if (dampingRatio === 1) {
      resolveSpring = (t) => target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
    } else {
      const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
      resolveSpring = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        const freqForT = Math.min(dampedAngularFreq * t, 300);
        return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
      };
    }
  }
  createSpring();
  return {
    next: (t) => {
      const current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        let currentVelocity = initialVelocity;
        if (t !== 0) {
          if (dampingRatio < 1) {
            const prevT = Math.max(0, t - velocitySampleDuration);
            currentVelocity = velocityPerSecond(current - resolveSpring(prevT), t - prevT);
          } else {
            currentVelocity = 0;
          }
        }
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t >= duration;
      }
      state.value = state.done ? target : current;
      return state;
    },
    flipTarget: () => {
      initialVelocity = -initialVelocity;
      [origin, target] = [target, origin];
      createSpring();
    }
  };
}
spring.needsInterpolation = (a, b) => typeof a === "string" || typeof b === "string";
var zero = (_t) => 0;

// ../../../node_modules/framer-motion/dist/es/utils/delay.mjs
function delay(callback, timeout) {
  const start = performance.now();
  const checkElapsed = ({ timestamp }) => {
    const elapsed = timestamp - start;
    if (elapsed >= timeout) {
      cancelSync.read(checkElapsed);
      callback(elapsed - timeout);
    }
  };
  sync.read(checkElapsed, true);
  return () => cancelSync.read(checkElapsed);
}

// ../../../node_modules/framer-motion/dist/es/value/use-will-change/is.mjs
function isWillChangeMotionValue(value) {
  return Boolean(isMotionValue(value) && value.add);
}

// ../../../node_modules/framer-motion/dist/es/utils/time-conversion.mjs
var secondsToMilliseconds = (seconds) => seconds * 1e3;

// ../../../node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs
var instantAnimationState = {
  current: false
};

// ../../../node_modules/framer-motion/dist/es/utils/hsla-to-rgba.mjs
function hueToRgb(p, q, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p + (q - p) * 6 * t;
  if (t < 1 / 2)
    return q;
  if (t < 2 / 3)
    return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}

// ../../../node_modules/framer-motion/dist/es/utils/mix-color.mjs
var mixLinearColor = (from, to, v) => {
  const fromExpo = from * from;
  return Math.sqrt(Math.max(0, v * (to * to - fromExpo) + fromExpo));
};
var colorTypes = [hex, rgba, hsla];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color2) {
  const type = getColorType(color2);
  invariant(Boolean(type), `'${color2}' is not an animatable color. Use the equivalent color code instead.`);
  let model = type.parse(color2);
  if (type === hsla) {
    model = hslaToRgba(model);
  }
  return model;
}
var mixColor = (from, to) => {
  const fromRGBA = asRGBA(from);
  const toRGBA = asRGBA(to);
  const blended = { ...fromRGBA };
  return (v) => {
    blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
    blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
    blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
    blended.alpha = mix(fromRGBA.alpha, toRGBA.alpha, v);
    return rgba.transform(blended);
  };
};

// ../../../node_modules/framer-motion/dist/es/utils/mix-complex.mjs
function getMixer(origin, target) {
  if (typeof origin === "number") {
    return (v) => mix(origin, target, v);
  } else if (color.test(origin)) {
    return mixColor(origin, target);
  } else {
    return mixComplex(origin, target);
  }
}
var mixArray = (from, to) => {
  const output = [...from];
  const numValues = output.length;
  const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
  return (v) => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](v);
    }
    return output;
  };
};
var mixObject = (origin, target) => {
  const output = { ...origin, ...target };
  const blendValue = {};
  for (const key in output) {
    if (origin[key] !== void 0 && target[key] !== void 0) {
      blendValue[key] = getMixer(origin[key], target[key]);
    }
  }
  return (v) => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v);
    }
    return output;
  };
};
var mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyseComplexValue(origin);
  const targetStats = analyseComplexValue(target);
  const canInterpolate = originStats.numColors === targetStats.numColors && originStats.numNumbers >= targetStats.numNumbers;
  if (canInterpolate) {
    return pipe(mixArray(originStats.values, targetStats.values), template);
  } else {
    warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
    return (p) => `${p > 0 ? target : origin}`;
  }
};

// ../../../node_modules/framer-motion/dist/es/utils/progress.mjs
var progress = (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

// ../../../node_modules/framer-motion/dist/es/utils/interpolate.mjs
var mixNumber = (from, to) => (p) => mix(from, to, p);
function detectMixerFactory(v) {
  if (typeof v === "number") {
    return mixNumber;
  } else if (typeof v === "string") {
    if (color.test(v)) {
      return mixColor;
    } else {
      return mixComplex;
    }
  } else if (Array.isArray(v)) {
    return mixArray;
  } else if (typeof v === "object") {
    return mixObject;
  }
  return mixNumber;
}
function createMixers(output, ease, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || detectMixerFactory(output[0]);
  const numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);
    if (ease) {
      const easingFunction = Array.isArray(ease) ? ease[i] : ease;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
  const inputLength = input.length;
  invariant(inputLength === output.length, "Both input and output ranges must be the same length");
  invariant(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.");
  if (input[0] > input[inputLength - 1]) {
    input = [...input].reverse();
    output = [...output].reverse();
  }
  const mixers = createMixers(output, ease, mixer);
  const numMixers = mixers.length;
  const interpolator = (v) => {
    let i = 0;
    if (numMixers > 1) {
      for (; i < input.length - 2; i++) {
        if (v < input[i + 1])
          break;
      }
    }
    const progressInRange = progress(input[i], input[i + 1], v);
    return mixers[i](progressInRange);
  };
  return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}

// ../../../node_modules/framer-motion/dist/es/animation/utils/easing.mjs
var easingLookup = {
  linear: noop,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate
};
var easingDefinitionToFunction = (definition) => {
  if (Array.isArray(definition)) {
    invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
    const [x1, y1, x2, y2] = definition;
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    invariant(easingLookup[definition] !== void 0, `Invalid easing type '${definition}'`);
    return easingLookup[definition];
  }
  return definition;
};
var isEasingArray = (ease) => {
  return Array.isArray(ease) && typeof ease[0] !== "number";
};

// ../../../node_modules/framer-motion/dist/es/animation/legacy-popmotion/keyframes.mjs
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function defaultOffset(values) {
  const numValues = values.length;
  return values.map((_value, i) => i !== 0 ? i / (numValues - 1) : 0);
}
function convertOffsetToTimes(offset, duration) {
  return offset.map((o) => o * duration);
}
function keyframes({ keyframes: keyframeValues, ease = easeInOut, times, duration = 300 }) {
  keyframeValues = [...keyframeValues];
  const easingFunctions = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
  const state = {
    done: false,
    value: keyframeValues[0]
  };
  const absoluteTimes = convertOffsetToTimes(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues),
    duration
  );
  function createInterpolator() {
    return interpolate(absoluteTimes, keyframeValues, {
      ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
    });
  }
  let interpolator = createInterpolator();
  return {
    next: (t) => {
      state.value = interpolator(t);
      state.done = t >= duration;
      return state;
    },
    flipTarget: () => {
      keyframeValues.reverse();
      interpolator = createInterpolator();
    }
  };
}

// ../../../node_modules/framer-motion/dist/es/animation/legacy-popmotion/decay.mjs
function decay({
  /**
   * The decay animation dynamically calculates an end of the animation
   * based on the initial keyframe, so we only need to define a single keyframe
   * as default.
   */
  keyframes: keyframes2 = [0],
  velocity = 0,
  power = 0.8,
  timeConstant = 350,
  restDelta = 0.5,
  modifyTarget
}) {
  const origin = keyframes2[0];
  const state = { done: false, value: origin };
  let amplitude = power * velocity;
  const ideal = origin + amplitude;
  const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  if (target !== ideal)
    amplitude = target - origin;
  return {
    next: (t) => {
      const delta = -amplitude * Math.exp(-t / timeConstant);
      state.done = !(delta > restDelta || delta < -restDelta);
      state.value = state.done ? target : target + delta;
      return state;
    },
    flipTarget: () => {
    }
  };
}

// ../../../node_modules/framer-motion/dist/es/animation/legacy-popmotion/index.mjs
var types = {
  decay,
  keyframes,
  tween: keyframes,
  spring
};
function loopElapsed(elapsed, duration, delay2 = 0) {
  return elapsed - duration - delay2;
}
function reverseElapsed(elapsed, duration = 0, delay2 = 0, isForwardPlayback = true) {
  return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay2) : duration - (elapsed - duration) + delay2;
}
function hasRepeatDelayElapsed(elapsed, duration, delay2, isForwardPlayback) {
  return isForwardPlayback ? elapsed >= duration + delay2 : elapsed <= -delay2;
}
var framesync = (update) => {
  const passTimestamp = ({ delta }) => update(delta);
  return {
    start: () => sync.update(passTimestamp, true),
    stop: () => cancelSync.update(passTimestamp)
  };
};
function animate({ duration, driver = framesync, elapsed = 0, repeat: repeatMax = 0, repeatType = "loop", repeatDelay = 0, keyframes: keyframes$1, autoplay = true, onPlay, onStop, onComplete, onRepeat, onUpdate, type = "keyframes", ...options }) {
  var _a, _b;
  const initialElapsed = elapsed;
  let driverControls;
  let repeatCount = 0;
  let computedDuration = duration;
  let isComplete = false;
  let isForwardPlayback = true;
  let interpolateFromNumber;
  const animator = types[keyframes$1.length > 2 ? "keyframes" : type] || keyframes;
  const origin = keyframes$1[0];
  const target = keyframes$1[keyframes$1.length - 1];
  let state = { done: false, value: origin };
  if ((_b = (_a = animator).needsInterpolation) === null || _b === void 0 ? void 0 : _b.call(_a, origin, target)) {
    interpolateFromNumber = interpolate([0, 100], [origin, target], {
      clamp: false
    });
    keyframes$1 = [0, 100];
  }
  const animation = animator({
    ...options,
    duration,
    keyframes: keyframes$1
  });
  function repeat() {
    repeatCount++;
    if (repeatType === "reverse") {
      isForwardPlayback = repeatCount % 2 === 0;
      elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
    } else {
      elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
      if (repeatType === "mirror")
        animation.flipTarget();
    }
    isComplete = false;
    onRepeat && onRepeat();
  }
  function complete() {
    driverControls && driverControls.stop();
    onComplete && onComplete();
  }
  function update(delta) {
    if (!isForwardPlayback)
      delta = -delta;
    elapsed += delta;
    if (!isComplete) {
      state = animation.next(Math.max(0, elapsed));
      if (interpolateFromNumber)
        state.value = interpolateFromNumber(state.value);
      isComplete = isForwardPlayback ? state.done : elapsed <= 0;
    }
    onUpdate && onUpdate(state.value);
    if (isComplete) {
      if (repeatCount === 0) {
        computedDuration = computedDuration !== void 0 ? computedDuration : elapsed;
      }
      if (repeatCount < repeatMax) {
        hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
      } else {
        complete();
      }
    }
  }
  function play() {
    onPlay && onPlay();
    driverControls = driver(update);
    driverControls.start();
  }
  autoplay && play();
  return {
    stop: () => {
      onStop && onStop();
      driverControls && driverControls.stop();
    },
    /**
     * Set the current time of the animation. This is purposefully
     * mirroring the WAAPI animation API to make them interchanagable.
     * Going forward this file should be ported more towards
     * https://github.com/motiondivision/motionone/blob/main/packages/animation/src/Animation.ts
     * Which behaviourally adheres to WAAPI as far as possible.
     *
     * WARNING: This is not safe to use for most animations. We currently
     * only use it for handoff from WAAPI within Framer.
     *
     * This animation function consumes time every frame rather than being sampled for time.
     * So the sample() method performs some headless frames to ensure
     * repeats are handled correctly. Ideally in the future we will replace
     * that method with this, once repeat calculations are pure.
     */
    set currentTime(t) {
      elapsed = initialElapsed;
      update(t);
    },
    /**
     * animate() can't yet be sampled for time, instead it
     * consumes time. So to sample it we have to run a low
     * temporal-resolution version.
     */
    sample: (t) => {
      elapsed = initialElapsed;
      const sampleResolution = duration && typeof duration === "number" ? Math.max(duration * 0.5, 50) : 50;
      let sampleElapsed = 0;
      update(0);
      while (sampleElapsed <= t) {
        const remaining = t - sampleElapsed;
        update(Math.min(remaining, sampleResolution));
        sampleElapsed += sampleResolution;
      }
      return state;
    }
  };
}

// ../../../node_modules/framer-motion/dist/es/animation/waapi/easing.mjs
function isWaapiSupportedEasing(easing) {
  return !easing || // Default easing
  Array.isArray(easing) || // Bezier curve
  typeof easing === "string" && supportedWaapiEasing[easing];
}
var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
var supportedWaapiEasing = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: cubicBezierAsString([0, 0.65, 0.55, 1]),
  circOut: cubicBezierAsString([0.55, 0, 1, 0.45]),
  backIn: cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
  backOut: cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
};
function mapEasingToNativeEasing(easing) {
  if (!easing)
    return void 0;
  return Array.isArray(easing) ? cubicBezierAsString(easing) : supportedWaapiEasing[easing];
}

// ../../../node_modules/framer-motion/dist/es/animation/waapi/index.mjs
function animateStyle(element, valueName, keyframes2, { delay: delay2 = 0, duration, repeat = 0, repeatType = "loop", ease, times } = {}) {
  return element.animate({ [valueName]: keyframes2, offset: times }, {
    delay: delay2,
    duration,
    easing: mapEasingToNativeEasing(ease),
    fill: "both",
    iterations: repeat + 1,
    direction: repeatType === "reverse" ? "alternate" : "normal"
  });
}

// ../../../node_modules/framer-motion/dist/es/animation/waapi/supports.mjs
var featureTests = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
};
var results = {};
var supports = {};
for (const key in featureTests) {
  supports[key] = () => {
    if (results[key] === void 0)
      results[key] = featureTests[key]();
    return results[key];
  };
}

// ../../../node_modules/framer-motion/dist/es/animation/waapi/utils/get-final-keyframe.mjs
function getFinalKeyframe(keyframes2, { repeat, repeatType = "loop" }) {
  const index = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : keyframes2.length - 1;
  return keyframes2[index];
}

// ../../../node_modules/framer-motion/dist/es/animation/waapi/create-accelerated-animation.mjs
var acceleratedValues = /* @__PURE__ */ new Set(["opacity"]);
var sampleDelta = 10;
function createAcceleratedAnimation(value, valueName, { onUpdate, onComplete, ...options }) {
  const canAccelerateAnimation = supports.waapi() && acceleratedValues.has(valueName) && !options.repeatDelay && options.repeatType !== "mirror" && options.damping !== 0;
  if (!canAccelerateAnimation)
    return false;
  let { keyframes: keyframes2, duration = 300, elapsed = 0, ease } = options;
  if (options.type === "spring" || !isWaapiSupportedEasing(options.ease)) {
    if (options.repeat === Infinity)
      return;
    const sampleAnimation = animate({ ...options, elapsed: 0 });
    let state = { done: false, value: keyframes2[0] };
    const pregeneratedKeyframes = [];
    let t = 0;
    while (!state.done && t < 2e4) {
      state = sampleAnimation.sample(t);
      pregeneratedKeyframes.push(state.value);
      t += sampleDelta;
    }
    keyframes2 = pregeneratedKeyframes;
    duration = t - sampleDelta;
    ease = "linear";
  }
  const animation = animateStyle(value.owner.current, valueName, keyframes2, {
    ...options,
    delay: -elapsed,
    duration,
    /**
     * This function is currently not called if ease is provided
     * as a function so the cast is safe.
     *
     * However it would be possible for a future refinement to port
     * in easing pregeneration from Motion One for browsers that
     * support the upcoming `linear()` easing function.
     */
    ease
  });
  animation.onfinish = () => {
    value.set(getFinalKeyframe(keyframes2, options));
    sync.update(() => animation.cancel());
    onComplete && onComplete();
  };
  return {
    get currentTime() {
      return animation.currentTime || 0;
    },
    set currentTime(t) {
      animation.currentTime = t;
    },
    stop: () => {
      const { currentTime } = animation;
      if (currentTime) {
        const sampleAnimation = animate({ ...options, autoplay: false });
        value.setWithVelocity(sampleAnimation.sample(currentTime - sampleDelta).value, sampleAnimation.sample(currentTime).value, sampleDelta);
      }
      sync.update(() => animation.cancel());
    }
  };
}

// ../../../node_modules/framer-motion/dist/es/animation/create-instant-animation.mjs
function createInstantAnimation({ keyframes: keyframes2, elapsed, onUpdate, onComplete }) {
  const setValue = () => {
    onUpdate && onUpdate(keyframes2[keyframes2.length - 1]);
    onComplete && onComplete();
  };
  return elapsed ? { stop: delay(setValue, -elapsed) } : setValue();
}

// ../../../node_modules/framer-motion/dist/es/animation/legacy-popmotion/inertia.mjs
function inertia({ keyframes: keyframes2, velocity = 0, min, max, power = 0.8, timeConstant = 750, bounceStiffness = 500, bounceDamping = 10, restDelta = 1, modifyTarget, driver, onUpdate, onComplete, onStop }) {
  const origin = keyframes2[0];
  let currentAnimation;
  function isOutOfBounds(v) {
    return min !== void 0 && v < min || max !== void 0 && v > max;
  }
  function findNearestBoundary(v) {
    if (min === void 0)
      return max;
    if (max === void 0)
      return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  }
  function startAnimation(options) {
    currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
    currentAnimation = animate({
      keyframes: [0, 1],
      velocity: 0,
      ...options,
      driver,
      onUpdate: (v) => {
        var _a;
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
        (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
      },
      onComplete,
      onStop
    });
  }
  function startSpring(options) {
    startAnimation({
      type: "spring",
      stiffness: bounceStiffness,
      damping: bounceDamping,
      restDelta,
      ...options
    });
  }
  if (isOutOfBounds(origin)) {
    startSpring({
      velocity,
      keyframes: [origin, findNearestBoundary(origin)]
    });
  } else {
    let target = power * velocity + origin;
    if (typeof modifyTarget !== "undefined")
      target = modifyTarget(target);
    const boundary = findNearestBoundary(target);
    const heading = boundary === min ? -1 : 1;
    let prev;
    let current;
    const checkBoundary = (v) => {
      prev = current;
      current = v;
      velocity = velocityPerSecond(v - prev, frameData.delta);
      if (heading === 1 && v > boundary || heading === -1 && v < boundary) {
        startSpring({ keyframes: [v, boundary], velocity });
      }
    };
    startAnimation({
      type: "decay",
      keyframes: [origin, 0],
      velocity,
      timeConstant,
      power,
      restDelta,
      modifyTarget,
      onUpdate: isOutOfBounds(target) ? checkBoundary : void 0
    });
  }
  return {
    stop: () => currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop()
  };
}

// ../../../node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = () => ({
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
});
var criticallyDampedSpring = (target) => ({
  type: "spring",
  stiffness: 550,
  damping: target === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
});
var linearTween = () => ({
  type: "keyframes",
  ease: "linear",
  duration: 0.3
});
var keyframesTransition = {
  type: "keyframes",
  duration: 0.8
};
var defaultTransitions = {
  x: underDampedSpring,
  y: underDampedSpring,
  z: underDampedSpring,
  rotate: underDampedSpring,
  rotateX: underDampedSpring,
  rotateY: underDampedSpring,
  rotateZ: underDampedSpring,
  scaleX: criticallyDampedSpring,
  scaleY: criticallyDampedSpring,
  scale: criticallyDampedSpring,
  opacity: linearTween,
  backgroundColor: linearTween,
  color: linearTween,
  default: criticallyDampedSpring
};
var getDefaultTransition = (valueKey, { keyframes: keyframes2 }) => {
  if (keyframes2.length > 2) {
    return keyframesTransition;
  } else {
    const factory = defaultTransitions[valueKey] || defaultTransitions.default;
    return factory(keyframes2[1]);
  }
};

// ../../../node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs
var isAnimatable = (key, value) => {
  if (key === "zIndex")
    return false;
  if (typeof value === "number" || Array.isArray(value))
    return true;
  if (typeof value === "string" && // It's animatable if we have a string
  complex.test(value) && // And it contains numbers and/or colors
  !value.startsWith("url(")) {
    return true;
  }
  return false;
};

// ../../../node_modules/framer-motion/dist/es/animation/utils/transitions.mjs
function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...transition }) {
  return !!Object.keys(transition).length;
}
function isZero(value) {
  return value === 0 || typeof value === "string" && parseFloat(value) === 0 && value.indexOf(" ") === -1;
}
function getZeroUnit(potentialUnitType) {
  return typeof potentialUnitType === "number" ? 0 : getAnimatableNone2("", potentialUnitType);
}
function getValueTransition(transition, key) {
  return transition[key] || transition["default"] || transition;
}

// ../../../node_modules/framer-motion/dist/es/animation/utils/keyframes.mjs
function getKeyframes(value, valueName, target, transition) {
  const isTargetAnimatable = isAnimatable(valueName, target);
  let origin = transition.from !== void 0 ? transition.from : value.get();
  if (origin === "none" && isTargetAnimatable && typeof target === "string") {
    origin = getAnimatableNone2(valueName, target);
  } else if (isZero(origin) && typeof target === "string") {
    origin = getZeroUnit(target);
  } else if (!Array.isArray(target) && isZero(target) && typeof origin === "string") {
    target = getZeroUnit(origin);
  }
  if (Array.isArray(target)) {
    if (target[0] === null) {
      target[0] = origin;
    }
    return target;
  } else {
    return [origin, target];
  }
}

// ../../../node_modules/framer-motion/dist/es/animation/index.mjs
var createMotionValueAnimation = (valueName, value, target, transition = {}) => {
  return (onComplete) => {
    const valueTransition = getValueTransition(transition, valueName) || {};
    const delay2 = valueTransition.delay || transition.delay || 0;
    let { elapsed = 0 } = transition;
    elapsed = elapsed - secondsToMilliseconds(delay2);
    const keyframes2 = getKeyframes(value, valueName, target, valueTransition);
    const originKeyframe = keyframes2[0];
    const targetKeyframe = keyframes2[keyframes2.length - 1];
    const isOriginAnimatable = isAnimatable(valueName, originKeyframe);
    const isTargetAnimatable = isAnimatable(valueName, targetKeyframe);
    warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${valueName} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
    let options = {
      keyframes: keyframes2,
      velocity: value.getVelocity(),
      ...valueTransition,
      elapsed,
      onUpdate: (v) => {
        value.set(v);
        valueTransition.onUpdate && valueTransition.onUpdate(v);
      },
      onComplete: () => {
        onComplete();
        valueTransition.onComplete && valueTransition.onComplete();
      }
    };
    if (!isOriginAnimatable || !isTargetAnimatable || instantAnimationState.current || valueTransition.type === false) {
      return createInstantAnimation(options);
    } else if (valueTransition.type === "inertia") {
      return inertia(options);
    }
    if (!isTransitionDefined(valueTransition)) {
      options = {
        ...options,
        ...getDefaultTransition(valueName, options)
      };
    }
    if (options.duration) {
      options.duration = secondsToMilliseconds(options.duration);
    }
    if (options.repeatDelay) {
      options.repeatDelay = secondsToMilliseconds(options.repeatDelay);
    }
    const visualElement = value.owner;
    const element = visualElement && visualElement.current;
    if (visualElement && element instanceof HTMLElement && !(visualElement === null || visualElement === void 0 ? void 0 : visualElement.getProps().onUpdate)) {
      const acceleratedAnimation = createAcceleratedAnimation(value, valueName, options);
      if (acceleratedAnimation)
        return acceleratedAnimation;
    }
    return animate(options);
  };
};

// ../../../node_modules/framer-motion/dist/es/render/utils/animation.mjs
function animateVisualElement(visualElement, definition, options = {}) {
  visualElement.notify("AnimationStart", definition);
  let animation;
  if (Array.isArray(definition)) {
    const animations2 = definition.map((variant) => animateVariant(visualElement, variant, options));
    animation = Promise.all(animations2);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement, definition, options);
  } else {
    const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
    animation = animateTarget(visualElement, resolvedDefinition, options);
  }
  return animation.then(() => visualElement.notify("AnimationComplete", definition));
}
function animateVariant(visualElement, variant, options = {}) {
  var _a;
  const resolved = resolveVariant(visualElement, variant, options.custom);
  let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }
  const getAnimation = resolved ? () => animateTarget(visualElement, resolved, options) : () => Promise.resolve();
  const getChildAnimations = ((_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.size) ? (forwardDelay = 0) => {
    const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
    return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : () => Promise.resolve();
  const { when } = transition;
  if (when) {
    const [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
    return first().then(last);
  } else {
    return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
  }
}
function animateTarget(visualElement, definition, { delay: delay2 = 0, transitionOverride, type } = {}) {
  var _a;
  let { transition = visualElement.getDefaultTransition(), transitionEnd, ...target } = visualElement.makeTargetAnimatable(definition);
  const willChange = visualElement.getValue("willChange");
  if (transitionOverride)
    transition = transitionOverride;
  const animations2 = [];
  const animationTypeState = type && ((_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.getState()[type]);
  for (const key in target) {
    const value = visualElement.getValue(key);
    const valueTarget = target[key];
    if (!value || valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    const valueTransition = { delay: delay2, elapsed: 0, ...transition };
    if (window.HandoffAppearAnimations && !value.hasAnimated) {
      const appearId = visualElement.getProps()[optimizedAppearDataAttribute];
      if (appearId) {
        valueTransition.elapsed = window.HandoffAppearAnimations(appearId, key, value, sync);
      }
    }
    let animation = value.start(createMotionValueAnimation(key, value, valueTarget, visualElement.shouldReduceMotion && transformProps.has(key) ? { type: false } : valueTransition));
    if (isWillChangeMotionValue(willChange)) {
      willChange.add(key);
      animation = animation.then(() => willChange.remove(key));
    }
    animations2.push(animation);
  }
  return Promise.all(animations2).then(() => {
    transitionEnd && setTarget(visualElement, transitionEnd);
  });
}
function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
  const animations2 = [];
  const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
  const generateStaggerDuration = staggerDirection === 1 ? (i = 0) => i * staggerChildren : (i = 0) => maxStaggerDuration - i * staggerChildren;
  Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach((child, i) => {
    child.notify("AnimationStart", variant);
    animations2.push(animateVariant(child, variant, {
      ...options,
      delay: delayChildren + generateStaggerDuration(i)
    }).then(() => child.notify("AnimationComplete", variant)));
  });
  return Promise.all(animations2);
}
function stopAnimation(visualElement) {
  visualElement.values.forEach((value) => value.stop());
}
function sortByTreeOrder(a, b) {
  return a.sortNodePosition(b);
}
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
  const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}

// ../../../node_modules/framer-motion/dist/es/motion/features/animations.mjs
import { useEffect as useEffect6, useContext as useContext7 } from "react";

// ../../../node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
  if (!Array.isArray(prev))
    return false;
  const prevLength = prev.length;
  if (prevLength !== next.length)
    return false;
  for (let i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i])
      return false;
  }
  return true;
}

// ../../../node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
var variantPriorityOrder = [
  AnimationType.Animate,
  AnimationType.InView,
  AnimationType.Focus,
  AnimationType.Hover,
  AnimationType.Tap,
  AnimationType.Drag,
  AnimationType.Exit
];
var reversePriorityOrder = [...variantPriorityOrder].reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
  return (animations2) => Promise.all(animations2.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
  let animate3 = animateList(visualElement);
  const state = createState();
  let isInitialRender = true;
  const buildResolvedTypeValues = (acc, definition) => {
    const resolved = resolveVariant(visualElement, definition);
    if (resolved) {
      const { transition, transitionEnd, ...target } = resolved;
      acc = { ...acc, ...target, ...transitionEnd };
    }
    return acc;
  };
  function setAnimateFunction(makeAnimator) {
    animate3 = makeAnimator(visualElement);
  }
  function animateChanges(options, changedActiveType) {
    const props = visualElement.getProps();
    const context = visualElement.getVariantContext(true) || {};
    const animations2 = [];
    const removedKeys = /* @__PURE__ */ new Set();
    let encounteredKeys = {};
    let removedVariantIndex = Infinity;
    for (let i = 0; i < numAnimationTypes; i++) {
      const type = reversePriorityOrder[i];
      const typeState = state[type];
      const prop = props[type] !== void 0 ? props[type] : context[type];
      const propIsVariant = isVariantLabel(prop);
      const activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false)
        removedVariantIndex = i;
      let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) {
        isInherited = false;
      }
      typeState.protectedKeys = { ...encounteredKeys };
      if (
        // If it isn't active and hasn't *just* been set as inactive
        !typeState.isActive && activeDelta === null || // If we didn't and don't have any defined prop for this animation type
        !prop && !typeState.prevProp || // Or if the prop doesn't define an animation
        isAnimationControls(prop) || typeof prop === "boolean"
      ) {
        continue;
      }
      const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      let shouldAnimateType = variantDidChange || // If we're making this variant active, we want to always make it active
      type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || // If we removed a higher-priority variant (i is in reverse order)
      i > removedVariantIndex && propIsVariant;
      const definitionList = Array.isArray(prop) ? prop : [prop];
      let resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
      if (activeDelta === false)
        resolvedValues = {};
      const { prevResolvedValues = {} } = typeState;
      const allKeys = {
        ...prevResolvedValues,
        ...resolvedValues
      };
      const markToAnimate = (key) => {
        shouldAnimateType = true;
        removedKeys.delete(key);
        typeState.needsAnimating[key] = true;
      };
      for (const key in allKeys) {
        const next = resolvedValues[key];
        const prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key))
          continue;
        if (next !== prev) {
          if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
            if (!shallowCompare(next, prev) || variantDidChange) {
              markToAnimate(key);
            } else {
              typeState.protectedKeys[key] = true;
            }
          } else if (next !== void 0) {
            markToAnimate(key);
          } else {
            removedKeys.add(key);
          }
        } else if (next !== void 0 && removedKeys.has(key)) {
          markToAnimate(key);
        } else {
          typeState.protectedKeys[key] = true;
        }
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      if (typeState.isActive) {
        encounteredKeys = { ...encounteredKeys, ...resolvedValues };
      }
      if (isInitialRender && visualElement.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      if (shouldAnimateType && !isInherited) {
        animations2.push(...definitionList.map((animation) => ({
          animation,
          options: { type, ...options }
        })));
      }
    }
    if (removedKeys.size) {
      const fallbackAnimation = {};
      removedKeys.forEach((key) => {
        const fallbackTarget = visualElement.getBaseTarget(key);
        if (fallbackTarget !== void 0) {
          fallbackAnimation[key] = fallbackTarget;
        }
      });
      animations2.push({ animation: fallbackAnimation });
    }
    let shouldAnimate = Boolean(animations2.length);
    if (isInitialRender && props.initial === false && !visualElement.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    return shouldAnimate ? animate3(animations2) : Promise.resolve();
  }
  function setActive(type, isActive, options) {
    var _a;
    if (state[type].isActive === isActive)
      return Promise.resolve();
    (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach((child) => {
      var _a2;
      return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
    });
    state[type].isActive = isActive;
    const animations2 = animateChanges(options, type);
    for (const key in state) {
      state[key].protectedKeys = {};
    }
    return animations2;
  }
  return {
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: () => state
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (Array.isArray(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState(isActive = false) {
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  return {
    [AnimationType.Animate]: createTypeState(true),
    [AnimationType.InView]: createTypeState(),
    [AnimationType.Hover]: createTypeState(),
    [AnimationType.Tap]: createTypeState(),
    [AnimationType.Drag]: createTypeState(),
    [AnimationType.Focus]: createTypeState(),
    [AnimationType.Exit]: createTypeState()
  };
}

// ../../../node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.mjs
var makeRenderlessComponent = (hook) => (props) => {
  hook(props);
  return null;
};

// ../../../node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
  animation: makeRenderlessComponent(({ visualElement, animate: animate3 }) => {
    visualElement.animationState || (visualElement.animationState = createAnimationState(visualElement));
    if (isAnimationControls(animate3)) {
      useEffect6(() => animate3.subscribe(visualElement), [animate3]);
    }
  }),
  exit: makeRenderlessComponent((props) => {
    const { custom, visualElement } = props;
    const [isPresent2, safeToRemove] = usePresence();
    const presenceContext = useContext7(PresenceContext);
    useEffect6(() => {
      visualElement.isPresent = isPresent2;
      const animation = visualElement.animationState && visualElement.animationState.setActive(AnimationType.Exit, !isPresent2, {
        custom: presenceContext && presenceContext.custom || custom
      });
      if (animation && !isPresent2) {
        animation.then(safeToRemove);
      }
    }, [isPresent2]);
  })
};

// ../../../node_modules/framer-motion/dist/es/utils/distance.mjs
var distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
  const xDelta = distance(a.x, b.x);
  const yDelta = distance(a.y, b.y);
  return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}

// ../../../node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear(value, target = 0, maxDistance = 0.01) {
  return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
  delta.origin = origin;
  delta.originPoint = mix(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  if (isNear(delta.scale, 1, 1e-4) || isNaN(delta.scale))
    delta.scale = 1;
  delta.translate = mix(target.min, target.max, delta.origin) - delta.originPoint;
  if (isNear(delta.translate) || isNaN(delta.translate))
    delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin === null || origin === void 0 ? void 0 : origin.originX);
  calcAxisDelta(delta.y, source.y, target.y, origin === null || origin === void 0 ? void 0 : origin.originY);
}
function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
  calcRelativeAxis(target.x, relative.x, parent.x);
  calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout, parent) {
  target.min = layout.min - parent.min;
  target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent) {
  calcRelativeAxisPosition(target.x, layout.x, parent.x);
  calcRelativeAxisPosition(target.y, layout.y, parent.y);
}

// ../../../node_modules/framer-motion/dist/es/projection/geometry/models.mjs
var createAxisDelta = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
});
var createDelta = () => ({
  x: createAxisDelta(),
  y: createAxisDelta()
});
var createAxis = () => ({ min: 0, max: 0 });
var createBox = () => ({
  x: createAxis(),
  y: createAxis()
});

// ../../../node_modules/framer-motion/dist/es/render/VisualElement.mjs
import { createElement as createElement2 } from "react";

// ../../../node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs
var prefersReducedMotion = { current: null };
var hasReducedMotionListener = { current: false };

// ../../../node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs
function initPrefersReducedMotion() {
  hasReducedMotionListener.current = true;
  if (!isBrowser)
    return;
  if (window.matchMedia) {
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
    const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
    motionMediaQuery.addListener(setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}

// ../../../node_modules/framer-motion/dist/es/render/utils/motion-values.mjs
function updateMotionValuesFromProps(element, next, prev) {
  const { willChange } = next;
  for (const key in next) {
    const nextValue = next[key];
    const prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element.addValue(key, nextValue);
      if (isWillChangeMotionValue(willChange)) {
        willChange.add(key);
      }
      if (false) {
        warnOnce(nextValue.version === "9.0.1", `Attempting to mix Framer Motion versions ${nextValue.version} with 9.0.1 may not work as expected.`);
      }
    } else if (isMotionValue(prevValue)) {
      element.addValue(key, motionValue(nextValue, { owner: element }));
      if (isWillChangeMotionValue(willChange)) {
        willChange.remove(key);
      }
    } else if (prevValue !== nextValue) {
      if (element.hasValue(key)) {
        const existingValue = element.getValue(key);
        !existingValue.hasAnimated && existingValue.set(nextValue);
      } else {
        const latestValue = element.getStaticValue(key);
        element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element }));
      }
    }
  }
  for (const key in prev) {
    if (next[key] === void 0)
      element.removeValue(key);
  }
  return next;
}

// ../../../node_modules/framer-motion/dist/es/render/VisualElement.mjs
var featureNames = Object.keys(featureDefinitions);
var numFeatures = featureNames.length;
var propEventHandlers = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
var VisualElement = class {
  constructor({ parent, props, reducedMotionConfig, visualState }, options = {}) {
    this.current = null;
    this.children = /* @__PURE__ */ new Set();
    this.isVariantNode = false;
    this.isControllingVariants = false;
    this.shouldReduceMotion = null;
    this.values = /* @__PURE__ */ new Map();
    this.isPresent = true;
    this.valueSubscriptions = /* @__PURE__ */ new Map();
    this.prevMotionValues = {};
    this.events = {};
    this.propEventSubscriptions = {};
    this.notifyUpdate = () => this.notify("Update", this.latestValues);
    this.render = () => {
      if (!this.current)
        return;
      this.triggerBuild();
      this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
    };
    this.scheduleRender = () => sync.render(this.render, false, true);
    const { latestValues, renderState } = visualState;
    this.latestValues = latestValues;
    this.baseTarget = { ...latestValues };
    this.initialValues = props.initial ? { ...latestValues } : {};
    this.renderState = renderState;
    this.parent = parent;
    this.props = props;
    this.depth = parent ? parent.depth + 1 : 0;
    this.reducedMotionConfig = reducedMotionConfig;
    this.options = options;
    this.isControllingVariants = isControllingVariants(props);
    this.isVariantNode = isVariantNode(props);
    if (this.isVariantNode) {
      this.variantChildren = /* @__PURE__ */ new Set();
    }
    this.manuallyAnimateOnMount = Boolean(parent && parent.current);
    const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {});
    for (const key in initialMotionValues) {
      const value = initialMotionValues[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key], false);
        if (isWillChangeMotionValue(willChange)) {
          willChange.add(key);
        }
      }
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(_props, _prevProps) {
    return {};
  }
  mount(instance) {
    var _a;
    this.current = instance;
    if (this.projection) {
      this.projection.mount(instance);
    }
    if (this.parent && this.isVariantNode && !this.isControllingVariants) {
      this.removeFromVariantTree = (_a = this.parent) === null || _a === void 0 ? void 0 : _a.addVariantChild(this);
    }
    this.values.forEach((value, key) => this.bindToMotionValue(key, value));
    if (!hasReducedMotionListener.current) {
      initPrefersReducedMotion();
    }
    this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : prefersReducedMotion.current;
    if (false) {
      warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
    }
    if (this.parent)
      this.parent.children.add(this);
    this.setProps(this.props);
  }
  unmount() {
    var _a, _b, _c;
    (_a = this.projection) === null || _a === void 0 ? void 0 : _a.unmount();
    cancelSync.update(this.notifyUpdate);
    cancelSync.render(this.render);
    this.valueSubscriptions.forEach((remove) => remove());
    (_b = this.removeFromVariantTree) === null || _b === void 0 ? void 0 : _b.call(this);
    (_c = this.parent) === null || _c === void 0 ? void 0 : _c.children.delete(this);
    for (const key in this.events) {
      this.events[key].clear();
    }
    this.current = null;
  }
  bindToMotionValue(key, value) {
    const valueIsTransform = transformProps.has(key);
    const removeOnChange = value.on("change", (latestValue) => {
      this.latestValues[key] = latestValue;
      this.props.onUpdate && sync.update(this.notifyUpdate, false, true);
      if (valueIsTransform && this.projection) {
        this.projection.isTransformDirty = true;
      }
    });
    const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(key, () => {
      removeOnChange();
      removeOnRenderRequest();
    });
  }
  sortNodePosition(other) {
    if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type)
      return 0;
    return this.sortInstanceNodePosition(this.current, other.current);
  }
  loadFeatures({ children, ...renderedProps }, isStrict, preloadedFeatures, projectionId, ProjectionNodeConstructor, initialLayoutGroupConfig) {
    const features = [];
    if (false) {
      invariant(false, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
    }
    for (let i = 0; i < numFeatures; i++) {
      const name = featureNames[i];
      const { isEnabled, Component: Component2 } = featureDefinitions[name];
      if (isEnabled(renderedProps) && Component2) {
        features.push(createElement2(Component2, {
          key: name,
          ...renderedProps,
          visualElement: this
        }));
      }
    }
    if (!this.projection && ProjectionNodeConstructor) {
      this.projection = new ProjectionNodeConstructor(projectionId, this.latestValues, this.parent && this.parent.projection);
      const { layoutId, layout, drag: drag2, dragConstraints, layoutScroll, layoutRoot } = renderedProps;
      this.projection.setOptions({
        layoutId,
        layout,
        alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof layout === "string" ? layout : "both",
        initialPromotionConfig: initialLayoutGroupConfig,
        layoutScroll,
        layoutRoot
      });
    }
    return features;
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
  }
  getStaticValue(key) {
    return this.latestValues[key];
  }
  setStaticValue(key, value) {
    this.latestValues[key] = value;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(target, canMutate = true) {
    return this.makeTargetAnimatableFromInstance(target, this.props, canMutate);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  setProps(props) {
    if (props.transformTemplate || this.props.transformTemplate) {
      this.scheduleRender();
    }
    const prevProps = this.props;
    this.props = props;
    for (let i = 0; i < propEventHandlers.length; i++) {
      const key = propEventHandlers[i];
      if (this.propEventSubscriptions[key]) {
        this.propEventSubscriptions[key]();
        delete this.propEventSubscriptions[key];
      }
      const listener = props["on" + key];
      if (listener) {
        this.propEventSubscriptions[key] = this.on(key, listener);
      }
    }
    this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, prevProps), this.prevMotionValues);
    if (this.handleChildMotionValue) {
      this.handleChildMotionValue();
    }
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(name) {
    var _a;
    return (_a = this.props.variants) === null || _a === void 0 ? void 0 : _a[name];
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    var _a;
    return this.isVariantNode ? this : (_a = this.parent) === null || _a === void 0 ? void 0 : _a.getClosestVariantNode();
  }
  getVariantContext(startAtParent = false) {
    var _a, _b;
    if (startAtParent)
      return (_a = this.parent) === null || _a === void 0 ? void 0 : _a.getVariantContext();
    if (!this.isControllingVariants) {
      const context2 = ((_b = this.parent) === null || _b === void 0 ? void 0 : _b.getVariantContext()) || {};
      if (this.props.initial !== void 0) {
        context2.initial = this.props.initial;
      }
      return context2;
    }
    const context = {};
    for (let i = 0; i < numVariantProps; i++) {
      const name = variantProps2[i];
      const prop = this.props[name];
      if (isVariantLabel(prop) || prop === false) {
        context[name] = prop;
      }
    }
    return context;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(child) {
    var _a;
    const closestVariantNode = this.getClosestVariantNode();
    if (closestVariantNode) {
      (_a = closestVariantNode.variantChildren) === null || _a === void 0 ? void 0 : _a.add(child);
      return () => closestVariantNode.variantChildren.delete(child);
    }
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(key, value) {
    if (value !== this.values.get(key)) {
      this.removeValue(key);
      this.bindToMotionValue(key, value);
    }
    this.values.set(key, value);
    this.latestValues[key] = value.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(key) {
    var _a;
    this.values.delete(key);
    (_a = this.valueSubscriptions.get(key)) === null || _a === void 0 ? void 0 : _a();
    this.valueSubscriptions.delete(key);
    delete this.latestValues[key];
    this.removeValueFromRenderState(key, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(key) {
    return this.values.has(key);
  }
  getValue(key, defaultValue) {
    if (this.props.values && this.props.values[key]) {
      return this.props.values[key];
    }
    let value = this.values.get(key);
    if (value === void 0 && defaultValue !== void 0) {
      value = motionValue(defaultValue, { owner: this });
      this.addValue(key, value);
    }
    return value;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(key) {
    return this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : this.readValueFromInstance(this.current, key, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(key, value) {
    this.baseTarget[key] = value;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(key) {
    var _a;
    const { initial } = this.props;
    const valueFromInitial = typeof initial === "string" || typeof initial === "object" ? (_a = resolveVariantFromProps(this.props, initial)) === null || _a === void 0 ? void 0 : _a[key] : void 0;
    if (initial && valueFromInitial !== void 0) {
      return valueFromInitial;
    }
    const target = this.getBaseTargetFromProps(this.props, key);
    if (target !== void 0 && !isMotionValue(target))
      return target;
    return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    return this.events[eventName].add(callback);
  }
  notify(eventName, ...args) {
    var _a;
    (_a = this.events[eventName]) === null || _a === void 0 ? void 0 : _a.notify(...args);
  }
};
var variantProps2 = ["initial", ...variantPriorityOrder];
var numVariantProps = variantProps2.length;

// ../../../node_modules/framer-motion/dist/es/animation/animate.mjs
function animate2(from, to, transition = {}) {
  const value = isMotionValue(from) ? from : motionValue(from);
  value.start(createMotionValueAnimation("", value, to, transition));
  return {
    stop: () => value.stop(),
    isAnimating: () => value.isAnimating()
  };
}

// ../../../node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
var compareByDepth = (a, b) => a.depth - b.depth;

// ../../../node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
var FlatTree = class {
  constructor() {
    this.children = [];
    this.isDirty = false;
  }
  add(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  }
  remove(child) {
    removeItem(this.children, child);
    this.isDirty = true;
  }
  forEach(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  }
};

// ../../../node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs
function createMotionProxy(createConfig) {
  function custom(Component2, customMotionComponentConfig = {}) {
    return createMotionComponent(createConfig(Component2, customMotionComponentConfig));
  }
  if (typeof Proxy === "undefined") {
    return custom;
  }
  const componentCache = /* @__PURE__ */ new Map();
  return new Proxy(custom, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (_target, key) => {
      if (!componentCache.has(key)) {
        componentCache.set(key, custom(key));
      }
      return componentCache.get(key);
    }
  });
}

// ../../../node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var lowercaseSVGElements = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];

// ../../../node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component2) {
  if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component2 !== "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    Component2.includes("-")
  ) {
    return false;
  } else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    lowercaseSVGElements.indexOf(Component2) > -1 || /**
     * If it contains a capital letter, it's an SVG component
     */
    /[A-Z]/.test(Component2)
  ) {
    return true;
  }
  return false;
}

// ../../../node_modules/framer-motion/dist/es/render/dom/use-render.mjs
import { useMemo as useMemo4, createElement as createElement3 } from "react";

// ../../../node_modules/framer-motion/dist/es/render/html/use-props.mjs
import { useMemo as useMemo2 } from "react";

// ../../../node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
function isForcedMotionValue(key, { layout, layoutId }) {
  return transformProps.has(key) || key.startsWith("origin") || (layout || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}

// ../../../node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs
function isCSSVariable(key) {
  return key.startsWith("--");
}

// ../../../node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs
var getValueAsType = (value, type) => {
  return type && typeof value === "number" ? type.transform(value) : value;
};

// ../../../node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state, latestValues, options, transformTemplate) {
  const { style, vars, transform: transform2, transformKeys: transformKeys2, transformOrigin } = state;
  transformKeys2.length = 0;
  let hasTransform2 = false;
  let hasTransformOrigin = false;
  let transformIsNone = true;
  for (const key in latestValues) {
    const value = latestValues[key];
    if (isCSSVariable(key)) {
      vars[key] = value;
      continue;
    }
    const valueType = numberValueTypes[key];
    const valueAsType = getValueAsType(value, valueType);
    if (transformProps.has(key)) {
      hasTransform2 = true;
      transform2[key] = valueAsType;
      transformKeys2.push(key);
      if (!transformIsNone)
        continue;
      if (value !== (valueType.default || 0))
        transformIsNone = false;
    } else if (key.startsWith("origin")) {
      hasTransformOrigin = true;
      transformOrigin[key] = valueAsType;
    } else {
      style[key] = valueAsType;
    }
  }
  if (!latestValues.transform) {
    if (hasTransform2 || transformTemplate) {
      style.transform = buildTransform(state, options, transformIsNone, transformTemplate);
    } else if (style.transform) {
      style.transform = "none";
    }
  }
  if (hasTransformOrigin) {
    const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
    style.transformOrigin = `${originX} ${originY} ${originZ}`;
  }
}

// ../../../node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformKeys: [],
  transformOrigin: {},
  vars: {}
});

// ../../../node_modules/framer-motion/dist/es/render/html/use-props.mjs
function copyRawValuesOnly(target, source, props) {
  for (const key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues({ transformTemplate }, visualState, isStatic) {
  return useMemo2(() => {
    const state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, { enableHardwareAcceleration: !isStatic }, transformTemplate);
    return Object.assign({}, state.vars, state.style);
  }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
  const styleProp = props.style || {};
  const style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
  return props.transformValues ? props.transformValues(style) : style;
}
function useHTMLProps(props, visualState, isStatic) {
  const htmlProps = {};
  const style = useStyle(props, visualState, isStatic);
  if (props.drag && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
  }
  if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) {
    htmlProps.tabIndex = 0;
  }
  htmlProps.style = style;
  return htmlProps;
}

// ../../../node_modules/framer-motion/dist/es/render/svg/use-props.mjs
import { useMemo as useMemo3 } from "react";

// ../../../node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs
function calcOrigin(origin, offset, size) {
  return typeof origin === "string" ? origin : px.transform(offset + size * origin);
}
function calcSVGTransformOrigin(dimensions, originX, originY) {
  const pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
  const pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
  return `${pxOriginX} ${pxOriginY}`;
}

// ../../../node_modules/framer-motion/dist/es/render/svg/utils/path.mjs
var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
  attrs.pathLength = 1;
  const keys2 = useDashCase ? dashKeys : camelKeys;
  attrs[keys2.offset] = px.transform(-offset);
  const pathLength = px.transform(length);
  const pathSpacing = px.transform(spacing);
  attrs[keys2.array] = `${pathLength} ${pathSpacing}`;
}

// ../../../node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
function buildSVGAttrs(state, {
  attrX,
  attrY,
  originX,
  originY,
  pathLength,
  pathSpacing = 1,
  pathOffset = 0,
  // This is object creation, which we try to avoid per-frame.
  ...latest
}, options, isSVGTag2, transformTemplate) {
  buildHTMLStyles(state, latest, options, transformTemplate);
  if (isSVGTag2) {
    if (state.style.viewBox) {
      state.attrs.viewBox = state.style.viewBox;
    }
    return;
  }
  state.attrs = state.style;
  state.style = {};
  const { attrs, style, dimensions } = state;
  if (attrs.transform) {
    if (dimensions)
      style.transform = attrs.transform;
    delete attrs.transform;
  }
  if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
    style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
  }
  if (attrX !== void 0)
    attrs.x = attrX;
  if (attrY !== void 0)
    attrs.y = attrY;
  if (pathLength !== void 0) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}

// ../../../node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var createSvgRenderState = () => ({
  ...createHtmlRenderState(),
  attrs: {}
});

// ../../../node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs
var isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";

// ../../../node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function useSVGProps(props, visualState, _isStatic, Component2) {
  const visualProps = useMemo3(() => {
    const state = createSvgRenderState();
    buildSVGAttrs(state, visualState, { enableHardwareAcceleration: false }, isSVGTag(Component2), props.transformTemplate);
    return {
      ...state.attrs,
      style: { ...state.style }
    };
  }, [visualState]);
  if (props.style) {
    const rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = { ...rawStyles, ...visualProps.style };
  }
  return visualProps;
}

// ../../../node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function createUseRender(forwardMotionProps = false) {
  const useRender = (Component2, props, projectionId, ref, { latestValues }, isStatic) => {
    const useVisualProps = isSVGComponent(Component2) ? useSVGProps : useHTMLProps;
    const visualProps = useVisualProps(props, latestValues, isStatic, Component2);
    const filteredProps = filterProps(props, typeof Component2 === "string", forwardMotionProps);
    const elementProps = {
      ...filteredProps,
      ...visualProps,
      ref
    };
    const { children } = props;
    const renderedChildren = useMemo4(() => isMotionValue(children) ? children.get() : children, [children]);
    if (projectionId) {
      elementProps["data-projection-id"] = projectionId;
    }
    return createElement3(Component2, {
      ...elementProps,
      children: renderedChildren
    });
  };
  return useRender;
}

// ../../../node_modules/framer-motion/dist/es/render/html/utils/render.mjs
function renderHTML(element, { style, vars }, styleProp, projection) {
  Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
  for (const key in vars) {
    element.style.setProperty(key, vars[key]);
  }
}

// ../../../node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
var camelCaseAttributes = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);

// ../../../node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
  renderHTML(element, renderState, void 0, projection);
  for (const key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}

// ../../../node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps(props, prevProps) {
  const { style } = props;
  const newValues = {};
  for (const key in style) {
    if (isMotionValue(style[key]) || prevProps.style && isMotionValue(prevProps.style[key]) || isForcedMotionValue(key, props)) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}

// ../../../node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps2(props, prevProps) {
  const newValues = scrapeMotionValuesFromProps(props, prevProps);
  for (const key in props) {
    if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
      const targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}

// ../../../node_modules/framer-motion/dist/es/render/svg/config-motion.mjs
var svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
    createRenderState: createSvgRenderState,
    onMount: (props, instance, { renderState, latestValues }) => {
      try {
        renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
      } catch (e) {
        renderState.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      buildSVGAttrs(renderState, latestValues, { enableHardwareAcceleration: false }, isSVGTag(instance.tagName), props.transformTemplate);
      renderSVG(instance, renderState);
    }
  })
};

// ../../../node_modules/framer-motion/dist/es/render/html/config-motion.mjs
var htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState: createHtmlRenderState
  })
};

// ../../../node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs
function createDomMotionConfig(Component2, { forwardMotionProps = false }, preloadedFeatures, createVisualElement, projectionNodeConstructor) {
  const baseConfig = isSVGComponent(Component2) ? svgMotionConfig : htmlMotionConfig;
  return {
    ...baseConfig,
    preloadedFeatures,
    useRender: createUseRender(forwardMotionProps),
    createVisualElement,
    projectionNodeConstructor,
    Component: Component2
  };
}

// ../../../node_modules/framer-motion/dist/es/gestures/use-focus-gesture.mjs
import { useRef as useRef3, useCallback as useCallback2 } from "react";
function useFocusGesture({ whileFocus, visualElement }) {
  const isFocusActive = useRef3(false);
  const { animationState } = visualElement;
  const onFocus = useCallback2(() => {
    let isFocusVisible = false;
    try {
      isFocusVisible = visualElement.current.matches(":focus-visible");
    } catch (e) {
      isFocusVisible = true;
    }
    if (!isFocusVisible || !animationState)
      return;
    animationState.setActive(AnimationType.Focus, true);
    isFocusActive.current = true;
  }, [animationState]);
  const onBlur = useCallback2(() => {
    if (!isFocusActive.current || !animationState)
      return;
    animationState.setActive(AnimationType.Focus, false);
    isFocusActive.current = false;
  }, [animationState]);
  useDomEvent(visualElement, "focus", whileFocus ? onFocus : void 0);
  useDomEvent(visualElement, "blur", whileFocus ? onBlur : void 0);
}

// ../../../node_modules/framer-motion/dist/es/gestures/use-hover-gesture.mjs
import { useMemo as useMemo5 } from "react";
function createHoverEvent(visualElement, isActive, applyVariants, callback) {
  return (event, info) => {
    if (event.type === "touch" || isDragActive())
      return;
    if (applyVariants && visualElement.animationState) {
      visualElement.animationState.setActive(AnimationType.Hover, isActive);
    }
    callback && callback(event, info);
  };
}
function useHoverGesture({ onHoverStart, onHoverEnd, whileHover, visualElement }) {
  usePointerEvent(visualElement, "pointerenter", useMemo5(() => {
    return onHoverStart || whileHover ? createHoverEvent(visualElement, true, Boolean(whileHover), onHoverStart) : void 0;
  }, [onHoverStart, Boolean(whileHover), visualElement]), { passive: !onHoverStart });
  usePointerEvent(visualElement, "pointerleave", useMemo5(() => {
    return onHoverEnd || whileHover ? createHoverEvent(visualElement, false, Boolean(whileHover), onHoverEnd) : void 0;
  }, [onHoverStart, Boolean(whileHover), visualElement]), { passive: !onHoverEnd });
}

// ../../../node_modules/framer-motion/dist/es/gestures/use-tap-gesture.mjs
import { useRef as useRef4, useCallback as useCallback3 } from "react";

// ../../../node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs
var isNodeOrChild = (parent, child) => {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};

// ../../../node_modules/framer-motion/dist/es/gestures/use-tap-gesture.mjs
function fireSyntheticPointerEvent(name, handler) {
  if (!handler)
    return;
  const syntheticPointerEvent = new PointerEvent("pointer" + name);
  handler(syntheticPointerEvent, extractEventInfo(syntheticPointerEvent));
}
function useTapGesture({ onTap, onTapStart, onTapCancel, whileTap, visualElement, ...props }) {
  const hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
  const isPressing = useRef4(false);
  const cancelPointerEndListeners = useRef4(null);
  const eventOptions = {
    passive: !(onTapStart || onTap || onTapCancel || props["onPointerDown"])
  };
  function removePointerEndListener() {
    cancelPointerEndListeners.current && cancelPointerEndListeners.current();
    cancelPointerEndListeners.current = null;
  }
  function checkPointerEnd() {
    removePointerEndListener();
    isPressing.current = false;
    const latestProps = visualElement.getProps();
    if (latestProps.whileTap && visualElement.animationState) {
      visualElement.animationState.setActive(AnimationType.Tap, false);
    }
    return !isDragActive();
  }
  function onPointerUp(event, info) {
    var _a, _b, _c, _d;
    if (!checkPointerEnd())
      return;
    !isNodeOrChild(visualElement.current, event.target) ? (_b = (_a = visualElement.getProps()).onTapCancel) === null || _b === void 0 ? void 0 : _b.call(_a, event, info) : (_d = (_c = visualElement.getProps()).onTap) === null || _d === void 0 ? void 0 : _d.call(_c, event, info);
  }
  function onPointerCancel(event, info) {
    var _a, _b;
    if (!checkPointerEnd())
      return;
    (_b = (_a = visualElement.getProps()).onTapCancel) === null || _b === void 0 ? void 0 : _b.call(_a, event, info);
  }
  function onPointerStart(event, info) {
    var _a;
    const latestProps = visualElement.getProps();
    if (latestProps.whileTap && visualElement.animationState) {
      visualElement.animationState.setActive(AnimationType.Tap, true);
    }
    (_a = latestProps.onTapStart) === null || _a === void 0 ? void 0 : _a.call(latestProps, event, info);
  }
  const callbackDependencies = [
    Boolean(onTapStart),
    Boolean(onTap),
    Boolean(whileTap),
    visualElement
  ];
  const startPress = useCallback3((event, info) => {
    removePointerEndListener();
    if (isPressing.current)
      return;
    isPressing.current = true;
    cancelPointerEndListeners.current = pipe(addPointerEvent(window, "pointerup", onPointerUp, eventOptions), addPointerEvent(window, "pointercancel", onPointerCancel, eventOptions));
    onPointerStart(event, info);
  }, callbackDependencies);
  usePointerEvent(visualElement, "pointerdown", hasPressListeners ? startPress : void 0, eventOptions);
  const startAccessiblePress = useCallback3(() => {
    const stopKeydownListener = addDomEvent(visualElement.current, "keydown", (event) => {
      if (event.key !== "Enter" || isPressing.current)
        return;
      isPressing.current = true;
      cancelPointerEndListeners.current = addDomEvent(visualElement.current, "keyup", () => {
        if (event.key !== "Enter" || !checkPointerEnd())
          return;
        fireSyntheticPointerEvent("up", visualElement.getProps().onTap);
      }, eventOptions);
      fireSyntheticPointerEvent("down", onPointerStart);
    });
    const stopBlurListener = addDomEvent(visualElement.current, "blur", () => {
      stopKeydownListener();
      stopBlurListener();
      if (isPressing.current) {
        fireSyntheticPointerEvent("cancel", onPointerCancel);
      }
    });
  }, callbackDependencies);
  useDomEvent(visualElement, "focus", hasPressListeners ? startAccessiblePress : void 0);
  useUnmountEffect(removePointerEndListener);
}

// ../../../node_modules/framer-motion/dist/es/motion/features/viewport/use-viewport.mjs
import { useRef as useRef5, useEffect as useEffect7 } from "react";

// ../../../node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
var observerCallbacks = /* @__PURE__ */ new WeakMap();
var observers = /* @__PURE__ */ new WeakMap();
var fireObserverCallback = (entry) => {
  const callback = observerCallbacks.get(entry.target);
  callback && callback(entry);
};
var fireAllObserverCallbacks = (entries) => {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
  const lookupRoot = root || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  const rootObservers = observers.get(lookupRoot);
  const key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  const rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return () => {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}

// ../../../node_modules/framer-motion/dist/es/motion/features/viewport/use-viewport.mjs
function useViewport({ visualElement, whileInView, onViewportEnter, onViewportLeave, viewport = {} }) {
  const state = useRef5({
    hasEnteredView: false,
    isInView: false
  });
  let shouldObserve = Boolean(whileInView || onViewportEnter || onViewportLeave);
  if (viewport.once && state.current.hasEnteredView)
    shouldObserve = false;
  const useObserver = typeof IntersectionObserver === "undefined" ? useMissingIntersectionObserver : useIntersectionObserver;
  useObserver(shouldObserve, state.current, visualElement, viewport);
}
var thresholdNames = {
  some: 0,
  all: 1
};
function useIntersectionObserver(shouldObserve, state, visualElement, { root, margin: rootMargin, amount = "some", once }) {
  useEffect7(() => {
    if (!shouldObserve || !visualElement.current)
      return;
    const options = {
      root: root === null || root === void 0 ? void 0 : root.current,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    const intersectionCallback = (entry) => {
      const { isIntersecting } = entry;
      if (state.isInView === isIntersecting)
        return;
      state.isInView = isIntersecting;
      if (once && !isIntersecting && state.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        state.hasEnteredView = true;
      }
      if (visualElement.animationState) {
        visualElement.animationState.setActive(AnimationType.InView, isIntersecting);
      }
      const props = visualElement.getProps();
      const callback = isIntersecting ? props.onViewportEnter : props.onViewportLeave;
      callback && callback(entry);
    };
    return observeIntersection(visualElement.current, options, intersectionCallback);
  }, [shouldObserve, root, rootMargin, amount]);
}
function useMissingIntersectionObserver(shouldObserve, state, visualElement, { fallback = true }) {
  useEffect7(() => {
    if (!shouldObserve || !fallback)
      return;
    if (false) {
      warnOnce(false, "IntersectionObserver not available on this device. whileInView animations will trigger on mount.");
    }
    requestAnimationFrame(() => {
      state.hasEnteredView = true;
      const { onViewportEnter } = visualElement.getProps();
      onViewportEnter && onViewportEnter(null);
      if (visualElement.animationState) {
        visualElement.animationState.setActive(AnimationType.InView, true);
      }
    });
  }, [shouldObserve]);
}

// ../../../node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
  inView: makeRenderlessComponent(useViewport),
  tap: makeRenderlessComponent(useTapGesture),
  focus: makeRenderlessComponent(useFocusGesture),
  hover: makeRenderlessComponent(useHoverGesture)
};

// ../../../node_modules/framer-motion/dist/es/gestures/drag/use-drag.mjs
import { useEffect as useEffect8 } from "react";

// ../../../node_modules/framer-motion/dist/es/gestures/PanSession.mjs
var PanSession = class {
  constructor(event, handlers, { transformPagePoint } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.handlers = {};
    this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance2D(info2.offset, { x: 0, y: 0 }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      const { point: point3 } = info2;
      const { timestamp: timestamp2 } = frameData;
      this.history.push({ ...point3, timestamp: timestamp2 });
      const { onStart, onMove } = this.handlers;
      if (!isPanStarted) {
        onStart && onStart(this.lastMoveEvent, info2);
        this.startEvent = this.lastMoveEvent;
      }
      onMove && onMove(this.lastMoveEvent, info2);
    };
    this.handlePointerMove = (event2, info2) => {
      this.lastMoveEvent = event2;
      this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
      sync.update(this.updatePoint, true);
    };
    this.handlePointerUp = (event2, info2) => {
      this.end();
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd, onSessionEnd } = this.handlers;
      const panInfo = getPanInfo(event2.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info2, this.transformPagePoint), this.history);
      if (this.startEvent && onEnd) {
        onEnd(event2, panInfo);
      }
      onSessionEnd && onSessionEnd(event2, panInfo);
    };
    if (!isPrimaryPointer(event))
      return;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    const info = extractEventInfo(event);
    const initialInfo = transformPoint(info, this.transformPagePoint);
    const { point: point2 } = initialInfo;
    const { timestamp } = frameData;
    this.history = [{ ...point2, timestamp }];
    const { onSessionStart } = handlers;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(handlers) {
    this.handlers = handlers;
  }
  end() {
    this.removeListeners && this.removeListeners();
    cancelSync.update(this.updatePoint);
  }
};
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
  return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo({ point: point2 }, history) {
  return {
    point: point2,
    delta: subtractPoint(point2, lastDevicePoint(history)),
    offset: subtractPoint(point2, startDevicePoint(history)),
    velocity: getVelocity2(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity2(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  const time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1e3;
  if (time === 0) {
    return { x: 0, y: 0 };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}

// ../../../node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function applyConstraints(point2, { min, max }, elastic) {
  if (min !== void 0 && point2 < min) {
    point2 = elastic ? mix(min, point2, elastic.min) : Math.max(point2, min);
  } else if (max !== void 0 && point2 > max) {
    point2 = elastic ? mix(max, point2, elastic.max) : Math.min(point2, max);
  }
  return point2;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  let min = constraintsAxis.min - layoutAxis.min;
  let max = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    [min, max] = [max, min];
  }
  return { min, max };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin2(source, target) {
  let origin = 0.5;
  const sourceLength = calcLength(source);
  const targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clamp(0, 1, origin);
}
function rebaseAxisConstraints(layout, constraints) {
  const relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic(dragElastic = defaultElastic) {
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}

// ../../../node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}

// ../../../node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
function convertBoundingBoxToBox({ top, left, right, bottom }) {
  return {
    x: { min: left, max: right },
    y: { min: top, max: bottom }
  };
}
function convertBoxToBoundingBox({ x, y }) {
  return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
function transformBoxPoints(point2, transformPoint2) {
  if (!transformPoint2)
    return point2;
  const topLeft = transformPoint2({ x: point2.left, y: point2.top });
  const bottomRight = transformPoint2({ x: point2.right, y: point2.bottom });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}

// ../../../node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale2) {
  return scale2 === void 0 || scale2 === 1;
}
function hasScale({ scale: scale2, scaleX, scaleY }) {
  return !isIdentityScale(scale2) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
  return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY;
}
function has2DTranslate(values) {
  return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
  return value && value !== "0%";
}

// ../../../node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
function scalePoint(point2, scale2, originPoint) {
  const distanceFromOrigin = point2 - originPoint;
  const scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point2, translate, scale2, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point2 = scalePoint(point2, boxScale, originPoint);
  }
  return scalePoint(point2, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate = 0, scale2 = 1, originPoint, boxScale) {
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, { x, y }) {
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
  var _a, _b;
  const treeLength = treePath.length;
  if (!treeLength)
    return;
  treeScale.x = treeScale.y = 1;
  let node;
  let delta;
  for (let i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta = node.projectionDelta;
    if (((_b = (_a = node.instance) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.display) === "contents")
      continue;
    if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
      transformBox(box, {
        x: -node.scroll.offset.x,
        y: -node.scroll.offset.y
      });
    }
    if (delta) {
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues);
    }
  }
  treeScale.x = snapToDefault(treeScale.x);
  treeScale.y = snapToDefault(treeScale.y);
}
function snapToDefault(scale2) {
  if (Number.isInteger(scale2))
    return scale2;
  return scale2 > 1.0000000000001 || scale2 < 0.999999999999 ? scale2 : 1;
}
function translateAxis(axis, distance2) {
  axis.min = axis.min + distance2;
  axis.max = axis.max + distance2;
}
function transformAxis(axis, transforms, [key, scaleKey, originKey]) {
  const axisOrigin = transforms[originKey] !== void 0 ? transforms[originKey] : 0.5;
  const originPoint = mix(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
function transformBox(box, transform2) {
  transformAxis(box.x, transform2, xKeys);
  transformAxis(box.y, transform2, yKeys);
}

// ../../../node_modules/framer-motion/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint2) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}
function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
  const viewportBox = measureViewportBox(element, transformPagePoint);
  const { scroll: scroll2 } = rootProjectionNode2;
  if (scroll2) {
    translateAxis(viewportBox.x, scroll2.offset.x);
    translateAxis(viewportBox.y, scroll2.offset.y);
  }
  return viewportBox;
}

// ../../../node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var elementDragControls = /* @__PURE__ */ new WeakMap();
var VisualElementDragControls = class {
  constructor(visualElement) {
    this.openGlobalLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = { x: 0, y: 0 };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.visualElement = visualElement;
  }
  start(originEvent, { snapToCursor = false } = {}) {
    if (this.visualElement.isPresent === false)
      return;
    const onSessionStart = (event) => {
      this.stopAnimation();
      if (snapToCursor) {
        this.snapToCursor(extractEventInfo(event, "page").point);
      }
    };
    const onStart = (event, info) => {
      var _a;
      const { drag: drag2, dragPropagation, onDragStart } = this.getProps();
      if (drag2 && !dragPropagation) {
        if (this.openGlobalLock)
          this.openGlobalLock();
        this.openGlobalLock = getGlobalLock(drag2);
        if (!this.openGlobalLock)
          return;
      }
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      if (this.visualElement.projection) {
        this.visualElement.projection.isAnimationBlocked = true;
        this.visualElement.projection.target = void 0;
      }
      eachAxis((axis) => {
        var _a2, _b;
        let current = this.getAxisMotionValue(axis).get() || 0;
        if (percent.test(current)) {
          const measuredAxis = (_b = (_a2 = this.visualElement.projection) === null || _a2 === void 0 ? void 0 : _a2.layout) === null || _b === void 0 ? void 0 : _b.layoutBox[axis];
          if (measuredAxis) {
            const length = calcLength(measuredAxis);
            current = length * (parseFloat(current) / 100);
          }
        }
        this.originPoint[axis] = current;
      });
      onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(event, info);
      (_a = this.visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Drag, true);
    };
    const onMove = (event, info) => {
      const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
      if (!dragPropagation && !this.openGlobalLock)
        return;
      const { offset } = info;
      if (dragDirectionLock && this.currentDirection === null) {
        this.currentDirection = getCurrentDirection(offset);
        if (this.currentDirection !== null) {
          onDirectionLock === null || onDirectionLock === void 0 ? void 0 : onDirectionLock(this.currentDirection);
        }
        return;
      }
      this.updateAxis("x", info.point, offset);
      this.updateAxis("y", info.point, offset);
      this.visualElement.render();
      onDrag === null || onDrag === void 0 ? void 0 : onDrag(event, info);
    };
    const onSessionEnd = (event, info) => this.stop(event, info);
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd
    }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  }
  stop(event, info) {
    const isDragging = this.isDragging;
    this.cancel();
    if (!isDragging)
      return;
    const { velocity } = info;
    this.startAnimation(velocity);
    const { onDragEnd } = this.getProps();
    onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(event, info);
  }
  cancel() {
    var _a, _b;
    this.isDragging = false;
    if (this.visualElement.projection) {
      this.visualElement.projection.isAnimationBlocked = false;
    }
    (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
    this.panSession = void 0;
    const { dragPropagation } = this.getProps();
    if (!dragPropagation && this.openGlobalLock) {
      this.openGlobalLock();
      this.openGlobalLock = null;
    }
    (_b = this.visualElement.animationState) === null || _b === void 0 ? void 0 : _b.setActive(AnimationType.Drag, false);
  }
  updateAxis(axis, _point, offset) {
    const { drag: drag2 } = this.getProps();
    if (!offset || !shouldDrag(axis, drag2, this.currentDirection))
      return;
    const axisValue = this.getAxisMotionValue(axis);
    let next = this.originPoint[axis] + offset[axis];
    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }
    axisValue.set(next);
  }
  resolveConstraints() {
    const { dragConstraints, dragElastic } = this.getProps();
    const { layout } = this.visualElement.projection || {};
    const prevConstraints = this.constraints;
    if (dragConstraints && isRefObject(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout) {
        this.constraints = calcRelativeConstraints(layout.layoutBox, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && layout && this.constraints && !this.hasMutatedConstraints) {
      eachAxis((axis) => {
        if (this.getAxisMotionValue(axis)) {
          this.constraints[axis] = rebaseAxisConstraints(layout.layoutBox[axis], this.constraints[axis]);
        }
      });
    }
  }
  resolveRefConstraints() {
    const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
    if (!constraints || !isRefObject(constraints))
      return false;
    const constraintsElement = constraints.current;
    invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection } = this.visualElement;
    if (!projection || !projection.layout)
      return false;
    const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
    if (onMeasureDragConstraints) {
      const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  }
  startAnimation(velocity) {
    const { drag: drag2, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
    const constraints = this.constraints || {};
    const momentumAnimations = eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, this.currentDirection)) {
        return;
      }
      let transition = (constraints === null || constraints === void 0 ? void 0 : constraints[axis]) || {};
      if (dragSnapToOrigin)
        transition = { min: 0, max: 0 };
      const bounceStiffness = dragElastic ? 200 : 1e6;
      const bounceDamping = dragElastic ? 40 : 1e7;
      const inertia2 = {
        type: "inertia",
        velocity: dragMomentum ? velocity[axis] : 0,
        bounceStiffness,
        bounceDamping,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...dragTransition,
        ...transition
      };
      return this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  }
  startAxisValueAnimation(axis, transition) {
    const axisValue = this.getAxisMotionValue(axis);
    return axisValue.start(createMotionValueAnimation(axis, axisValue, 0, transition));
  }
  stopAnimation() {
    eachAxis((axis) => this.getAxisMotionValue(axis).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(axis) {
    var _a;
    const dragKey = "_drag" + axis.toUpperCase();
    const externalMotionValue = this.visualElement.getProps()[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, ((_a = this.visualElement.getProps().initial) === null || _a === void 0 ? void 0 : _a[axis]) || 0);
  }
  snapToCursor(point2) {
    eachAxis((axis) => {
      const { drag: drag2 } = this.getProps();
      if (!shouldDrag(axis, drag2, this.currentDirection))
        return;
      const { projection } = this.visualElement;
      const axisValue = this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        const { min, max } = projection.layout.layoutBox[axis];
        axisValue.set(point2[axis] - mix(min, max, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    var _a;
    if (!this.visualElement.current)
      return;
    const { drag: drag2, dragConstraints } = this.getProps();
    const { projection } = this.visualElement;
    if (!isRefObject(dragConstraints) || !projection || !this.constraints)
      return;
    this.stopAnimation();
    const boxProgress = { x: 0, y: 0 };
    eachAxis((axis) => {
      const axisValue = this.getAxisMotionValue(axis);
      if (axisValue) {
        const latest = axisValue.get();
        boxProgress[axis] = calcOrigin2({ min: latest, max: latest }, this.constraints[axis]);
      }
    });
    const { transformTemplate } = this.visualElement.getProps();
    this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
    projection.updateLayout();
    this.resolveConstraints();
    eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, null))
        return;
      const axisValue = this.getAxisMotionValue(axis);
      const { min, max } = this.constraints[axis];
      axisValue.set(mix(min, max, boxProgress[axis]));
    });
  }
  addListeners() {
    var _a;
    if (!this.visualElement.current)
      return;
    elementDragControls.set(this.visualElement, this);
    const element = this.visualElement.current;
    const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
      const { drag: drag2, dragListener = true } = this.getProps();
      drag2 && dragListener && this.start(event);
    });
    const measureDragConstraints = () => {
      const { dragConstraints } = this.getProps();
      if (isRefObject(dragConstraints)) {
        this.constraints = this.resolveRefConstraints();
      }
    };
    const { projection } = this.visualElement;
    const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (projection && !projection.layout) {
      (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
      projection.updateLayout();
    }
    measureDragConstraints();
    const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
    const stopLayoutUpdateListener = projection.addEventListener("didUpdate", ({ delta, hasLayoutChanged }) => {
      if (this.isDragging && hasLayoutChanged) {
        eachAxis((axis) => {
          const motionValue2 = this.getAxisMotionValue(axis);
          if (!motionValue2)
            return;
          this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });
        this.visualElement.render();
      }
    });
    return () => {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
      stopLayoutUpdateListener === null || stopLayoutUpdateListener === void 0 ? void 0 : stopLayoutUpdateListener();
    };
  }
  getProps() {
    const props = this.visualElement.getProps();
    const { drag: drag2 = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true } = props;
    return {
      ...props,
      drag: drag2,
      dragDirectionLock,
      dragPropagation,
      dragConstraints,
      dragElastic,
      dragMomentum
    };
  }
};
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold = 10) {
  let direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}

// ../../../node_modules/framer-motion/dist/es/gestures/drag/use-drag.mjs
function useDrag(props) {
  const { dragControls: groupDragControls, visualElement } = props;
  const dragControls = useConstant(() => new VisualElementDragControls(visualElement));
  useEffect8(() => groupDragControls && groupDragControls.subscribe(dragControls), [dragControls, groupDragControls]);
  useEffect8(() => dragControls.addListeners(), [dragControls]);
}

// ../../../node_modules/framer-motion/dist/es/gestures/use-pan-gesture.mjs
import { useRef as useRef6, useContext as useContext8, useEffect as useEffect9 } from "react";
function usePanGesture({ onPan, onPanStart, onPanEnd, onPanSessionStart, visualElement }) {
  const hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
  const panSession = useRef6(null);
  const { transformPagePoint } = useContext8(MotionConfigContext);
  const handlers = {
    onSessionStart: onPanSessionStart,
    onStart: onPanStart,
    onMove: onPan,
    onEnd: (event, info) => {
      panSession.current = null;
      onPanEnd && onPanEnd(event, info);
    }
  };
  useEffect9(() => {
    if (panSession.current !== null) {
      panSession.current.updateHandlers(handlers);
    }
  });
  function onPointerDown(event) {
    panSession.current = new PanSession(event, handlers, {
      transformPagePoint
    });
  }
  usePointerEvent(visualElement, "pointerdown", hasPanEvents && onPointerDown);
  useUnmountEffect(() => panSession.current && panSession.current.end());
}

// ../../../node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
  pan: makeRenderlessComponent(usePanGesture),
  drag: makeRenderlessComponent(useDrag)
};

// ../../../node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs
function isCSSVariable2(value) {
  return typeof value === "string" && value.startsWith("var(--");
}
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
  const match = cssVariableRegex.exec(current);
  if (!match)
    return [,];
  const [, token, fallback] = match;
  return [token, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
  invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
  const [token, fallback] = parseCSSVariable(current);
  if (!token)
    return;
  const resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    return resolved.trim();
  } else if (isCSSVariable2(fallback)) {
    return getVariableValue(fallback, element, depth + 1);
  } else {
    return fallback;
  }
}
function resolveCSSVariables(visualElement, { ...target }, transitionEnd) {
  const element = visualElement.current;
  if (!(element instanceof Element))
    return { target, transitionEnd };
  if (transitionEnd) {
    transitionEnd = { ...transitionEnd };
  }
  visualElement.values.forEach((value) => {
    const current = value.get();
    if (!isCSSVariable2(current))
      return;
    const resolved = getVariableValue(current, element);
    if (resolved)
      value.set(resolved);
  });
  for (const key in target) {
    const current = target[key];
    if (!isCSSVariable2(current))
      continue;
    const resolved = getVariableValue(current, element);
    if (!resolved)
      continue;
    target[key] = resolved;
    if (transitionEnd && transitionEnd[key] === void 0) {
      transitionEnd[key] = current;
    }
  }
  return { target, transitionEnd };
}

// ../../../node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs
var positionalKeys = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]);
var isPositionalKey = (key) => positionalKeys.has(key);
var hasPositionalKey = (target) => {
  return Object.keys(target).some(isPositionalKey);
};
var isNumOrPxType = (v) => v === number || v === px;
var BoundingBoxDimension;
(function(BoundingBoxDimension2) {
  BoundingBoxDimension2["width"] = "width";
  BoundingBoxDimension2["height"] = "height";
  BoundingBoxDimension2["left"] = "left";
  BoundingBoxDimension2["right"] = "right";
  BoundingBoxDimension2["top"] = "top";
  BoundingBoxDimension2["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
var getTranslateFromMatrix = (pos2, pos3) => (_bbox, { transform: transform2 }) => {
  if (transform2 === "none" || !transform2)
    return 0;
  const matrix3d = transform2.match(/^matrix3d\((.+)\)$/);
  if (matrix3d) {
    return getPosFromMatrix(matrix3d[1], pos3);
  } else {
    const matrix = transform2.match(/^matrix\((.+)\)$/);
    if (matrix) {
      return getPosFromMatrix(matrix[1], pos2);
    } else {
      return 0;
    }
  }
};
var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
  const removedTransforms = [];
  nonTranslationalTransformKeys.forEach((key) => {
    const value = visualElement.getValue(key);
    if (value !== void 0) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  if (removedTransforms.length)
    visualElement.render();
  return removedTransforms;
}
var positionalValues = {
  // Dimensions
  width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
  height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
  top: (_bbox, { top }) => parseFloat(top),
  left: (_bbox, { left }) => parseFloat(left),
  bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
  right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
  // Transform
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
var convertChangedValueTypes = (target, visualElement, changedKeys) => {
  const originBbox = visualElement.measureViewportBox();
  const element = visualElement.current;
  const elementComputedStyle = getComputedStyle(element);
  const { display } = elementComputedStyle;
  const origin = {};
  if (display === "none") {
    visualElement.setStaticValue("display", target.display || "block");
  }
  changedKeys.forEach((key) => {
    origin[key] = positionalValues[key](originBbox, elementComputedStyle);
  });
  visualElement.render();
  const targetBbox = visualElement.measureViewportBox();
  changedKeys.forEach((key) => {
    const value = visualElement.getValue(key);
    value && value.jump(origin[key]);
    target[key] = positionalValues[key](targetBbox, elementComputedStyle);
  });
  return target;
};
var checkAndConvertChangedValueTypes = (visualElement, target, origin = {}, transitionEnd = {}) => {
  target = { ...target };
  transitionEnd = { ...transitionEnd };
  const targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
  let removedTransformValues = [];
  let hasAttemptedToRemoveTransformValues = false;
  const changedValueTypeKeys = [];
  targetPositionalKeys.forEach((key) => {
    const value = visualElement.getValue(key);
    if (!visualElement.hasValue(key))
      return;
    let from = origin[key];
    let fromType = findDimensionValueType(from);
    const to = target[key];
    let toType;
    if (isKeyframesTarget(to)) {
      const numKeyframes = to.length;
      const fromIndex = to[0] === null ? 1 : 0;
      from = to[fromIndex];
      fromType = findDimensionValueType(from);
      for (let i = fromIndex; i < numKeyframes; i++) {
        if (!toType) {
          toType = findDimensionValueType(to[i]);
          invariant(toType === fromType || isNumOrPxType(fromType) && isNumOrPxType(toType), "Keyframes must be of the same dimension as the current value");
        } else {
          invariant(findDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
        }
      }
    } else {
      toType = findDimensionValueType(to);
    }
    if (fromType !== toType) {
      if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
        const current = value.get();
        if (typeof current === "string") {
          value.set(parseFloat(current));
        }
        if (typeof to === "string") {
          target[key] = parseFloat(to);
        } else if (Array.isArray(to) && toType === px) {
          target[key] = to.map(parseFloat);
        }
      } else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from === 0 || to === 0)) {
        if (from === 0) {
          value.set(toType.transform(from));
        } else {
          target[key] = fromType.transform(to);
        }
      } else {
        if (!hasAttemptedToRemoveTransformValues) {
          removedTransformValues = removeNonTranslationalTransform(visualElement);
          hasAttemptedToRemoveTransformValues = true;
        }
        changedValueTypeKeys.push(key);
        transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key];
        value.jump(to);
      }
    }
  });
  if (changedValueTypeKeys.length) {
    const scrollY = changedValueTypeKeys.indexOf("height") >= 0 ? window.pageYOffset : null;
    const convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
    if (removedTransformValues.length) {
      removedTransformValues.forEach(([key, value]) => {
        visualElement.getValue(key).set(value);
      });
    }
    visualElement.render();
    if (isBrowser && scrollY !== null) {
      window.scrollTo({ top: scrollY });
    }
    return { target: convertedTarget, transitionEnd };
  } else {
    return { target, transitionEnd };
  }
};
function unitConversion(visualElement, target, origin, transitionEnd) {
  return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd) : { target, transitionEnd };
}

// ../../../node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs
var parseDomVariant = (visualElement, target, origin, transitionEnd) => {
  const resolved = resolveCSSVariables(visualElement, target, transitionEnd);
  target = resolved.target;
  transitionEnd = resolved.transitionEnd;
  return unitConversion(visualElement, target, origin, transitionEnd);
};

// ../../../node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs
var DOMVisualElement = class extends VisualElement {
  sortInstanceNodePosition(a, b) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(props, key) {
    var _a;
    return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
  }
  removeValueFromRenderState(key, { vars, style }) {
    delete vars[key];
    delete style[key];
  }
  makeTargetAnimatableFromInstance({ transition, transitionEnd, ...target }, { transformValues }, isMounted) {
    let origin = getOrigin(target, transition || {}, this);
    if (transformValues) {
      if (transitionEnd)
        transitionEnd = transformValues(transitionEnd);
      if (target)
        target = transformValues(target);
      if (origin)
        origin = transformValues(origin);
    }
    if (isMounted) {
      checkTargetForNewValues(this, target, origin);
      const parsed = parseDomVariant(this, target, origin, transitionEnd);
      transitionEnd = parsed.transitionEnd;
      target = parsed.target;
    }
    return {
      transition,
      transitionEnd,
      ...target
    };
  }
};

// ../../../node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs
function getComputedStyle2(element) {
  return window.getComputedStyle(element);
}
var HTMLVisualElement = class extends DOMVisualElement {
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    } else {
      const computedStyle = getComputedStyle2(instance);
      const value = (isCSSVariable(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
      return typeof value === "string" ? value.trim() : value;
    }
  }
  measureInstanceViewportBox(instance, { transformPagePoint }) {
    return measureViewportBox(instance, transformPagePoint);
  }
  build(renderState, latestValues, options, props) {
    buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
  }
  scrapeMotionValuesFromProps(props, prevProps) {
    return scrapeMotionValuesFromProps(props, prevProps);
  }
  handleChildMotionValue() {
    if (this.childSubscription) {
      this.childSubscription();
      delete this.childSubscription;
    }
    const { children } = this.props;
    if (isMotionValue(children)) {
      this.childSubscription = children.on("change", (latest) => {
        if (this.current)
          this.current.textContent = `${latest}`;
      });
    }
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderHTML(instance, renderState, styleProp, projection);
  }
};

// ../../../node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs
var SVGVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.isSVGTag = false;
  }
  getBaseTargetFromProps(props, key) {
    return props[key];
  }
  readValueFromInstance(instance, key) {
    var _a;
    if (transformProps.has(key)) {
      return ((_a = getDefaultValueType(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
    }
    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return instance.getAttribute(key);
  }
  measureInstanceViewportBox() {
    return createBox();
  }
  scrapeMotionValuesFromProps(props, prevProps) {
    return scrapeMotionValuesFromProps2(props, prevProps);
  }
  build(renderState, latestValues, options, props) {
    buildSVGAttrs(renderState, latestValues, options, this.isSVGTag, props.transformTemplate);
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderSVG(instance, renderState, styleProp, projection);
  }
  mount(instance) {
    this.isSVGTag = isSVGTag(instance.tagName);
    super.mount(instance);
  }
};

// ../../../node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var createDomVisualElement = (Component2, options) => {
  return isSVGComponent(Component2) ? new SVGVisualElement(options, { enableHardwareAcceleration: false }) : new HTMLVisualElement(options, { enableHardwareAcceleration: true });
};

// ../../../node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
import React__default2, { useContext as useContext9 } from "react";

// ../../../node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min)
    return 0;
  return pixels / (axis.max - axis.min) * 100;
}
var correctBorderRadius = {
  correct: (latest, node) => {
    if (!node.target)
      return latest;
    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    const x = pixelsToPercent(latest, node.target.x);
    const y = pixelsToPercent(latest, node.target.y);
    return `${x}% ${y}%`;
  }
};

// ../../../node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs
var varToken = "_$css";
var correctBoxShadow = {
  correct: (latest, { treeScale, projectionDelta }) => {
    const original = latest;
    const containsCSSVariables = latest.includes("var(");
    const cssVariables = [];
    if (containsCSSVariables) {
      latest = latest.replace(cssVariableRegex, (match) => {
        cssVariables.push(match);
        return varToken;
      });
    }
    const shadow = complex.parse(latest);
    if (shadow.length > 5)
      return original;
    const template = complex.createTransformer(latest);
    const offset = typeof shadow[0] !== "number" ? 1 : 0;
    const xScale = projectionDelta.x.scale * treeScale.x;
    const yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    const averageScale = mix(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset] === "number")
      shadow[2 + offset] /= averageScale;
    if (typeof shadow[3 + offset] === "number")
      shadow[3 + offset] /= averageScale;
    let output = template(shadow);
    if (containsCSSVariables) {
      let i = 0;
      output = output.replace(varToken, () => {
        const cssVariable = cssVariables[i];
        i++;
        return cssVariable;
      });
    }
    return output;
  }
};

// ../../../node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var MeasureLayoutWithContext = class extends React__default2.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
    const { projection } = visualElement;
    addScaleCorrector(defaultScaleCorrectors);
    if (projection) {
      if (layoutGroup.group)
        layoutGroup.group.add(projection);
      if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
        switchLayoutGroup.register(projection);
      }
      projection.root.didUpdate();
      projection.addEventListener("animationComplete", () => {
        this.safeToRemove();
      });
      projection.setOptions({
        ...projection.options,
        onExitComplete: () => this.safeToRemove()
      });
    }
    globalProjectionState.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(prevProps) {
    const { layoutDependency, visualElement, drag: drag2, isPresent: isPresent2 } = this.props;
    const projection = visualElement.projection;
    if (!projection)
      return null;
    projection.isPresent = isPresent2;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent2) {
      if (isPresent2) {
        projection.promote();
      } else if (!projection.relegate()) {
        sync.postRender(() => {
          var _a;
          if (!((_a = projection.getStack()) === null || _a === void 0 ? void 0 : _a.members.length)) {
            this.safeToRemove();
          }
        });
      }
    }
    return null;
  }
  componentDidUpdate() {
    const { projection } = this.props.visualElement;
    if (projection) {
      projection.root.didUpdate();
      if (!projection.currentAnimation && projection.isLead()) {
        this.safeToRemove();
      }
    }
  }
  componentWillUnmount() {
    const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
    const { projection } = visualElement;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group)
        layoutGroup.group.remove(projection);
      if (promoteContext === null || promoteContext === void 0 ? void 0 : promoteContext.deregister)
        promoteContext.deregister(projection);
    }
  }
  safeToRemove() {
    const { safeToRemove } = this.props;
    safeToRemove === null || safeToRemove === void 0 ? void 0 : safeToRemove();
  }
  render() {
    return null;
  }
};
function MeasureLayout(props) {
  const [isPresent2, safeToRemove] = usePresence();
  const layoutGroup = useContext9(LayoutGroupContext);
  return React__default2.createElement(MeasureLayoutWithContext, { ...props, layoutGroup, switchLayoutGroup: useContext9(SwitchLayoutGroupContext), isPresent: isPresent2, safeToRemove });
}
var defaultScaleCorrectors = {
  borderRadius: {
    ...correctBorderRadius,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};

// ../../../node_modules/framer-motion/dist/es/motion/features/layout/index.mjs
var layoutFeatures = {
  measureLayout: MeasureLayout
};

// ../../../node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs
var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders.length;
var asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
var isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress3, shouldCrossfadeOpacity, isOnlyMember) {
  if (shouldCrossfadeOpacity) {
    target.opacity = mix(
      0,
      // TODO Reinstate this if only child
      lead.opacity !== void 0 ? lead.opacity : 1,
      easeCrossfadeIn(progress3)
    );
    target.opacityExit = mix(follow.opacity !== void 0 ? follow.opacity : 1, 0, easeCrossfadeOut(progress3));
  } else if (isOnlyMember) {
    target.opacity = mix(follow.opacity !== void 0 ? follow.opacity : 1, lead.opacity !== void 0 ? lead.opacity : 1, progress3);
  }
  for (let i = 0; i < numBorders; i++) {
    const borderLabel = `border${borders[i]}Radius`;
    let followRadius = getRadius(follow, borderLabel);
    let leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0)
      continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mix(asNumber(followRadius), asNumber(leadRadius), progress3), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  if (follow.rotate || lead.rotate) {
    target.rotate = mix(follow.rotate || 0, lead.rotate || 0, progress3);
  }
}
function getRadius(values, radiusName) {
  return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
}
var easeCrossfadeIn = compress(0, 0.5, circOut);
var easeCrossfadeOut = compress(0.5, 0.95, noop);
function compress(min, max, easing) {
  return (p) => {
    if (p < min)
      return 0;
    if (p > max)
      return 1;
    return easing(progress(min, max, p));
  };
}

// ../../../node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}

// ../../../node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs
function removePointDelta(point2, translate, scale2, originPoint, boxScale) {
  point2 -= translate;
  point2 = scalePoint(point2, 1 / scale2, originPoint);
  if (boxScale !== void 0) {
    point2 = scalePoint(point2, 1 / boxScale, originPoint);
  }
  return point2;
}
function removeAxisDelta(axis, translate = 0, scale2 = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    const relativeProgress = mix(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number")
    return;
  let originPoint = mix(originAxis.min, originAxis.max, origin);
  if (axis === originAxis)
    originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
var xKeys2 = ["x", "scaleX", "originX"];
var yKeys2 = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys2, originBox === null || originBox === void 0 ? void 0 : originBox.x, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.x);
  removeAxisTransforms(box.y, transforms, yKeys2, originBox === null || originBox === void 0 ? void 0 : originBox.y, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.y);
}

// ../../../node_modules/framer-motion/dist/es/projection/geometry/utils.mjs
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function boxEquals(a, b) {
  return a.x.min === b.x.min && a.x.max === b.x.max && a.y.min === b.y.min && a.y.max === b.y.max;
}
function aspectRatio(box) {
  return calcLength(box.x) / calcLength(box.y);
}

// ../../../node_modules/framer-motion/dist/es/projection/shared/stack.mjs
var NodeStack = class {
  constructor() {
    this.members = [];
  }
  add(node) {
    addUniqueItem(this.members, node);
    node.scheduleRender();
  }
  remove(node) {
    removeItem(this.members, node);
    if (node === this.prevLead) {
      this.prevLead = void 0;
    }
    if (node === this.lead) {
      const prevLead = this.members[this.members.length - 1];
      if (prevLead) {
        this.promote(prevLead);
      }
    }
  }
  relegate(node) {
    const indexOfNode = this.members.findIndex((member) => node === member);
    if (indexOfNode === 0)
      return false;
    let prevLead;
    for (let i = indexOfNode; i >= 0; i--) {
      const member = this.members[i];
      if (member.isPresent !== false) {
        prevLead = member;
        break;
      }
    }
    if (prevLead) {
      this.promote(prevLead);
      return true;
    } else {
      return false;
    }
  }
  promote(node, preserveFollowOpacity) {
    var _a;
    const prevLead = this.lead;
    if (node === prevLead)
      return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();
    if (prevLead) {
      prevLead.instance && prevLead.scheduleRender();
      node.scheduleRender();
      node.resumeFrom = prevLead;
      if (preserveFollowOpacity) {
        node.resumeFrom.preserveOpacity = true;
      }
      if (prevLead.snapshot) {
        node.snapshot = prevLead.snapshot;
        node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
      }
      if ((_a = node.root) === null || _a === void 0 ? void 0 : _a.isUpdating) {
        node.isLayoutDirty = true;
      }
      const { crossfade } = node.options;
      if (crossfade === false) {
        prevLead.hide();
      }
    }
  }
  exitAnimationComplete() {
    this.members.forEach((node) => {
      var _a, _b, _c, _d, _e;
      (_b = (_a = node.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
      (_e = (_c = node.resumingFrom) === null || _c === void 0 ? void 0 : (_d = _c.options).onExitComplete) === null || _e === void 0 ? void 0 : _e.call(_d);
    });
  }
  scheduleRender() {
    this.members.forEach((node) => {
      node.instance && node.scheduleRender(false);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    if (this.lead && this.lead.snapshot) {
      this.lead.snapshot = void 0;
    }
  }
};

// ../../../node_modules/framer-motion/dist/es/projection/styles/transform.mjs
function buildProjectionTransform(delta, treeScale, latestTransform) {
  let transform2 = "";
  const xTranslate = delta.x.translate / treeScale.x;
  const yTranslate = delta.y.translate / treeScale.y;
  if (xTranslate || yTranslate) {
    transform2 = `translate3d(${xTranslate}px, ${yTranslate}px, 0) `;
  }
  if (treeScale.x !== 1 || treeScale.y !== 1) {
    transform2 += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
  }
  if (latestTransform) {
    const { rotate, rotateX, rotateY } = latestTransform;
    if (rotate)
      transform2 += `rotate(${rotate}deg) `;
    if (rotateX)
      transform2 += `rotateX(${rotateX}deg) `;
    if (rotateY)
      transform2 += `rotateY(${rotateY}deg) `;
  }
  const elementScaleX = delta.x.scale * treeScale.x;
  const elementScaleY = delta.y.scale * treeScale.y;
  if (elementScaleX !== 1 || elementScaleY !== 1) {
    transform2 += `scale(${elementScaleX}, ${elementScaleY})`;
  }
  return transform2 || "none";
}

// ../../../node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
var transformAxes = ["", "X", "Y", "Z"];
var animationTarget = 1e3;
var id2 = 0;
function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
  return class ProjectionNode {
    constructor(elementId, latestValues = {}, parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent()) {
      this.id = id2++;
      this.animationId = 0;
      this.children = /* @__PURE__ */ new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.isTransformDirty = false;
      this.isProjectionDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.treeScale = { x: 1, y: 1 };
      this.eventHandlers = /* @__PURE__ */ new Map();
      this.potentialNodes = /* @__PURE__ */ new Map();
      this.checkUpdateFailed = () => {
        if (this.isUpdating) {
          this.isUpdating = false;
          this.clearAllSnapshots();
        }
      };
      this.updateProjection = () => {
        this.nodes.forEach(propagateDirtyNodes);
        this.nodes.forEach(resolveTargetDelta);
        this.nodes.forEach(calcProjection);
      };
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = /* @__PURE__ */ new Map();
      this.elementId = elementId;
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? [...parent.path, parent] : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      elementId && this.root.registerPotentialNode(elementId, this);
      for (let i = 0; i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }
      if (this.root === this)
        this.nodes = new FlatTree();
    }
    addEventListener(name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager());
      }
      return this.eventHandlers.get(name).add(handler);
    }
    notifyListeners(name, ...args) {
      const subscriptionManager = this.eventHandlers.get(name);
      subscriptionManager === null || subscriptionManager === void 0 ? void 0 : subscriptionManager.notify(...args);
    }
    hasListeners(name) {
      return this.eventHandlers.has(name);
    }
    registerPotentialNode(elementId, node) {
      this.potentialNodes.set(elementId, node);
    }
    /**
     * Lifecycles
     */
    mount(instance, isLayoutDirty = false) {
      var _a;
      if (this.instance)
        return;
      this.isSVG = instance instanceof SVGElement && instance.tagName !== "svg";
      this.instance = instance;
      const { layoutId, layout, visualElement } = this.options;
      if (visualElement && !visualElement.current) {
        visualElement.mount(instance);
      }
      this.root.nodes.add(this);
      (_a = this.parent) === null || _a === void 0 ? void 0 : _a.children.add(this);
      this.elementId && this.root.potentialNodes.delete(this.elementId);
      if (isLayoutDirty && (layout || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        let cancelDelay;
        const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
        attachResizeListener(instance, () => {
          this.root.updateBlockedByResize = true;
          cancelDelay && cancelDelay();
          cancelDelay = delay(resizeUnblockUpdate, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      if (this.options.animate !== false && visualElement && (layoutId || layout)) {
        this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeTargetChanged, layout: newLayout }) => {
          var _a2, _b, _c, _d, _e;
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0;
            this.relativeTarget = void 0;
            return;
          }
          const layoutTransition = (_b = (_a2 = this.options.transition) !== null && _a2 !== void 0 ? _a2 : visualElement.getDefaultTransition()) !== null && _b !== void 0 ? _b : defaultLayoutTransition;
          const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
          const targetChanged = !this.targetLayout || !boxEquals(this.targetLayout, newLayout) || hasRelativeTargetChanged;
          const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
          if (this.options.layoutRoot || ((_c = this.resumeFrom) === null || _c === void 0 ? void 0 : _c.instance) || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !this.currentAnimation)) {
            if (this.resumeFrom) {
              this.resumingFrom = this.resumeFrom;
              this.resumingFrom.resumingFrom = void 0;
            }
            this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
            const animationOptions = {
              ...getValueTransition(layoutTransition, "layout"),
              onPlay: onLayoutAnimationStart,
              onComplete: onLayoutAnimationComplete
            };
            if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
              animationOptions.delay = 0;
              animationOptions.type = false;
            }
            this.startAnimation(animationOptions);
          } else {
            if (!hasLayoutChanged && this.animationProgress === 0) {
              finishAnimation(this);
            }
            this.isLead() && ((_e = (_d = this.options).onExitComplete) === null || _e === void 0 ? void 0 : _e.call(_d));
          }
          this.targetLayout = newLayout;
        });
      }
    }
    unmount() {
      var _a, _b;
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.remove(this);
      (_b = this.parent) === null || _b === void 0 ? void 0 : _b.children.delete(this);
      this.instance = void 0;
      cancelSync.preRender(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      var _a;
      return this.isAnimationBlocked || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isTreeAnimationBlocked()) || false;
    }
    // Note: currently only running on root node
    startUpdate() {
      var _a;
      if (this.isUpdateBlocked())
        return;
      this.isUpdating = true;
      (_a = this.nodes) === null || _a === void 0 ? void 0 : _a.forEach(resetRotation);
      this.animationId++;
    }
    getTransformTemplate() {
      var _a;
      return (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.getProps().transformTemplate;
    }
    willUpdate(shouldNotifyListeners = true) {
      var _a, _b, _c;
      if (this.root.isUpdateBlocked()) {
        (_b = (_a = this.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
        return;
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty)
        return;
      this.isLayoutDirty = true;
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        node.shouldResetTransform = true;
        node.updateScroll("snapshot");
        if (node.options.layoutRoot) {
          node.willUpdate(false);
        }
      }
      const { layoutId, layout } = this.options;
      if (layoutId === void 0 && !layout)
        return;
      this.prevTransformTemplateValue = (_c = this.getTransformTemplate()) === null || _c === void 0 ? void 0 : _c(this.latestValues, "");
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    }
    // Note: Currently only running on root node
    didUpdate() {
      const updateWasBlocked = this.isUpdateBlocked();
      if (updateWasBlocked) {
        this.unblockUpdate();
        this.clearAllSnapshots();
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (!this.isUpdating)
        return;
      this.isUpdating = false;
      if (this.potentialNodes.size) {
        this.potentialNodes.forEach(mountNodeEarly);
        this.potentialNodes.clear();
      }
      this.nodes.forEach(resetTransformStyle);
      this.nodes.forEach(updateLayout);
      this.nodes.forEach(notifyLayoutUpdate);
      this.clearAllSnapshots();
      flushSync.update();
      flushSync.preRender();
      flushSync.render();
    }
    clearAllSnapshots() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach(removeLeadSnapshots);
    }
    scheduleUpdateProjection() {
      sync.preRender(this.updateProjection, false, true);
    }
    scheduleCheckAfterUnmount() {
      sync.postRender(() => {
        if (this.isLayoutDirty) {
          this.root.didUpdate();
        } else {
          this.root.checkUpdateFailed();
        }
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      if (this.snapshot || !this.instance)
        return;
      this.snapshot = this.measure();
    }
    updateLayout() {
      var _a;
      if (!this.instance)
        return;
      this.updateScroll();
      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          node.updateScroll();
        }
      }
      const prevLayout = this.layout;
      this.layout = this.measure(false);
      this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.layoutBox);
      (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.notify("LayoutMeasure", this.layout.layoutBox, prevLayout === null || prevLayout === void 0 ? void 0 : prevLayout.layoutBox);
    }
    updateScroll(phase = "measure") {
      let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) {
        needsMeasurement = false;
      }
      if (needsMeasurement) {
        this.scroll = {
          animationId: this.root.animationId,
          phase,
          isRoot: checkIsScrollRoot(this.instance),
          offset: measureScroll(this.instance)
        };
      }
    }
    resetTransform() {
      var _a;
      if (!resetTransform)
        return;
      const isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
      const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      const transformTemplateValue = (_a = this.getTransformTemplate()) === null || _a === void 0 ? void 0 : _a(this.latestValues, "");
      const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    }
    measure(removeTransform = true) {
      const pageBox = this.measurePageBox();
      let layoutBox = this.removeElementScroll(pageBox);
      if (removeTransform) {
        layoutBox = this.removeTransform(layoutBox);
      }
      roundBox(layoutBox);
      return {
        animationId: this.root.animationId,
        measuredBox: pageBox,
        layoutBox,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement } = this.options;
      if (!visualElement)
        return createBox();
      const box = visualElement.measureViewportBox();
      const { scroll: scroll2 } = this.root;
      if (scroll2) {
        translateAxis(box.x, scroll2.offset.x);
        translateAxis(box.y, scroll2.offset.y);
      }
      return box;
    }
    removeElementScroll(box) {
      const boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        const { scroll: scroll2, options } = node;
        if (node !== this.root && scroll2 && options.layoutScroll) {
          if (scroll2.isRoot) {
            copyBoxInto(boxWithoutScroll, box);
            const { scroll: rootScroll } = this.root;
            if (rootScroll) {
              translateAxis(boxWithoutScroll.x, -rootScroll.offset.x);
              translateAxis(boxWithoutScroll.y, -rootScroll.offset.y);
            }
          }
          translateAxis(boxWithoutScroll.x, scroll2.offset.x);
          translateAxis(boxWithoutScroll.y, scroll2.offset.y);
        }
      }
      return boxWithoutScroll;
    }
    applyTransform(box, transformOnly = false) {
      const withTransforms = createBox();
      copyBoxInto(withTransforms, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          transformBox(withTransforms, {
            x: -node.scroll.offset.x,
            y: -node.scroll.offset.y
          });
        }
        if (!hasTransform(node.latestValues))
          continue;
        transformBox(withTransforms, node.latestValues);
      }
      if (hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues);
      }
      return withTransforms;
    }
    removeTransform(box) {
      var _a;
      const boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!node.instance)
          continue;
        if (!hasTransform(node.latestValues))
          continue;
        hasScale(node.latestValues) && node.updateSnapshot();
        const sourceBox = createBox();
        const nodeBox = node.measurePageBox();
        copyBoxInto(sourceBox, nodeBox);
        removeBoxTransforms(boxWithoutTransform, node.latestValues, (_a = node.snapshot) === null || _a === void 0 ? void 0 : _a.layoutBox, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    }
    /**
     *
     */
    setTargetDelta(delta) {
      this.targetDelta = delta;
      this.isProjectionDirty = true;
      this.root.scheduleUpdateProjection();
    }
    setOptions(options) {
      this.options = {
        ...this.options,
        ...options,
        crossfade: options.crossfade !== void 0 ? options.crossfade : true
      };
    }
    clearMeasurements() {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = false;
    }
    /**
     * Frame calculations
     */
    resolveTargetDelta() {
      var _a;
      const lead = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
      this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
      if (!this.isProjectionDirty && !this.attemptToResolveRelativeTarget)
        return;
      const { layout, layoutId } = this.options;
      if (!this.layout || !(layout || layoutId))
        return;
      if (!this.targetDelta && !this.relativeTarget) {
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && relativeParent.layout) {
          this.relativeParent = relativeParent;
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
      if (!this.relativeTarget && !this.targetDelta)
        return;
      if (!this.target) {
        this.target = createBox();
        this.targetWithTransforms = createBox();
      }
      if (this.relativeTarget && this.relativeTargetOrigin && ((_a = this.relativeParent) === null || _a === void 0 ? void 0 : _a.target)) {
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.target = this.applyTransform(this.layout.layoutBox);
        } else {
          copyBoxInto(this.target, this.layout.layoutBox);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.layoutBox);
      }
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target) {
          this.relativeParent = relativeParent;
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.target, relativeParent.target);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) {
        return void 0;
      }
      if ((this.parent.relativeTarget || this.parent.targetDelta || this.parent.options.layoutRoot) && this.parent.layout) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    }
    calcProjection() {
      var _a;
      const { isProjectionDirty, isTransformDirty } = this;
      this.isProjectionDirty = this.isTransformDirty = false;
      const lead = this.getLead();
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      let canSkip = true;
      if (isProjectionDirty)
        canSkip = false;
      if (isShared && isTransformDirty)
        canSkip = false;
      if (canSkip)
        return;
      const { layout, layoutId } = this.options;
      this.isTreeAnimating = Boolean(((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isTreeAnimating) || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = void 0;
      }
      if (!this.layout || !(layout || layoutId))
        return;
      copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
      const { target } = lead;
      if (!target)
        return;
      if (!this.projectionDelta) {
        this.projectionDelta = createDelta();
        this.projectionDeltaWithTransform = createDelta();
      }
      const prevTreeScaleX = this.treeScale.x;
      const prevTreeScaleY = this.treeScale.y;
      const prevProjectionTransform = this.projectionTransform;
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale);
      if (this.projectionTransform !== prevProjectionTransform || this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(notifyAll2 = true) {
      var _a, _b, _c;
      (_b = (_a = this.options).scheduleRender) === null || _b === void 0 ? void 0 : _b.call(_a);
      notifyAll2 && ((_c = this.getStack()) === null || _c === void 0 ? void 0 : _c.scheduleRender());
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = void 0;
      }
    }
    setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
      var _a, _b;
      const snapshot = this.snapshot;
      const snapshotLatestValues = (snapshot === null || snapshot === void 0 ? void 0 : snapshot.latestValues) || {};
      const mixedValues = { ...this.latestValues };
      const targetDelta = createDelta();
      if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
        this.relativeTarget = this.relativeTargetOrigin = void 0;
      }
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      const relativeLayout = createBox();
      const isSharedLayoutAnimation = (snapshot === null || snapshot === void 0 ? void 0 : snapshot.source) !== ((_a = this.layout) === null || _a === void 0 ? void 0 : _a.source);
      const isOnlyMember = (((_b = this.getStack()) === null || _b === void 0 ? void 0 : _b.members.length) || 0) <= 1;
      const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      this.mixTargetDelta = (latest) => {
        var _a2;
        const progress3 = latest / 1e3;
        mixAxisDelta(targetDelta.x, delta.x, progress3);
        mixAxisDelta(targetDelta.y, delta.y, progress3);
        this.setTargetDelta(targetDelta);
        if (this.relativeTarget && this.relativeTargetOrigin && this.layout && ((_a2 = this.relativeParent) === null || _a2 === void 0 ? void 0 : _a2.layout)) {
          calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
          mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress3);
        }
        if (isSharedLayoutAnimation) {
          this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress3, shouldCrossfadeOpacity, isOnlyMember);
        }
        this.root.scheduleUpdateProjection();
        this.scheduleRender();
        this.animationProgress = progress3;
      };
      this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(options) {
      var _a, _b;
      this.notifyListeners("animationStart");
      (_a = this.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
      if (this.resumingFrom) {
        (_b = this.resumingFrom.currentAnimation) === null || _b === void 0 ? void 0 : _b.stop();
      }
      if (this.pendingAnimation) {
        cancelSync.update(this.pendingAnimation);
        this.pendingAnimation = void 0;
      }
      this.pendingAnimation = sync.update(() => {
        globalProjectionState.hasAnimatedSinceResize = true;
        this.currentAnimation = animate2(0, animationTarget, {
          ...options,
          onUpdate: (latest) => {
            var _a2;
            this.mixTargetDelta(latest);
            (_a2 = options.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(options, latest);
          },
          onComplete: () => {
            var _a2;
            (_a2 = options.onComplete) === null || _a2 === void 0 ? void 0 : _a2.call(options);
            this.completeAnimation();
          }
        });
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = this.currentAnimation;
        }
        this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      var _a;
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = void 0;
        this.resumingFrom.preserveOpacity = void 0;
      }
      (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
      this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      var _a;
      if (this.currentAnimation) {
        (_a = this.mixTargetDelta) === null || _a === void 0 ? void 0 : _a.call(this, animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    }
    applyTransformsToTarget() {
      const lead = this.getLead();
      let { targetWithTransforms, target, layout, latestValues } = lead;
      if (!targetWithTransforms || !target || !layout)
        return;
      if (this !== lead && this.layout && layout && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout.layoutBox)) {
        target = this.target || createBox();
        const xLength = calcLength(this.layout.layoutBox.x);
        target.x.min = lead.target.x.min;
        target.x.max = target.x.min + xLength;
        const yLength = calcLength(this.layout.layoutBox.y);
        target.y.min = lead.target.y.min;
        target.y.max = target.y.min + yLength;
      }
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    }
    registerSharedNode(layoutId, node) {
      var _a, _b, _c;
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }
      const stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      node.promote({
        transition: (_a = node.options.initialPromotionConfig) === null || _a === void 0 ? void 0 : _a.transition,
        preserveFollowOpacity: (_c = (_b = node.options.initialPromotionConfig) === null || _b === void 0 ? void 0 : _b.shouldPreserveFollowOpacity) === null || _c === void 0 ? void 0 : _c.call(_b, node)
      });
    }
    isLead() {
      const stack = this.getStack();
      return stack ? stack.lead === this : true;
    }
    getLead() {
      var _a;
      const { layoutId } = this.options;
      return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
    }
    getPrevLead() {
      var _a;
      const { layoutId } = this.options;
      return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : void 0;
    }
    getStack() {
      const { layoutId } = this.options;
      if (layoutId)
        return this.root.sharedNodes.get(layoutId);
    }
    promote({ needsReset, transition, preserveFollowOpacity } = {}) {
      const stack = this.getStack();
      if (stack)
        stack.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = void 0;
        this.needsReset = true;
      }
      if (transition)
        this.setOptions({ transition });
    }
    relegate() {
      const stack = this.getStack();
      if (stack) {
        return stack.relegate(this);
      } else {
        return false;
      }
    }
    resetRotation() {
      const { visualElement } = this.options;
      if (!visualElement)
        return;
      let hasRotate = false;
      const { latestValues } = visualElement;
      if (latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ) {
        hasRotate = true;
      }
      if (!hasRotate)
        return;
      const resetValues = {};
      for (let i = 0; i < transformAxes.length; i++) {
        const key = "rotate" + transformAxes[i];
        if (latestValues[key]) {
          resetValues[key] = latestValues[key];
          visualElement.setStaticValue(key, 0);
        }
      }
      visualElement === null || visualElement === void 0 ? void 0 : visualElement.render();
      for (const key in resetValues) {
        visualElement.setStaticValue(key, resetValues[key]);
      }
      visualElement.scheduleRender();
    }
    getProjectionStyles(styleProp = {}) {
      var _a, _b;
      const styles = {};
      if (!this.instance || this.isSVG)
        return styles;
      if (!this.isVisible) {
        return { visibility: "hidden" };
      } else {
        styles.visibility = "";
      }
      const transformTemplate = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false;
        styles.opacity = "";
        styles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
        styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return styles;
      }
      const lead = this.getLead();
      if (!this.projectionDelta || !this.layout || !lead.target) {
        const emptyStyles = {};
        if (this.options.layoutId) {
          emptyStyles.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
          emptyStyles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }
        return emptyStyles;
      }
      const valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate) {
        styles.transform = transformTemplate(valuesToRender, styles.transform);
      }
      const { x, y } = this.projectionDelta;
      styles.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
      if (lead.animationValues) {
        styles.opacity = lead === this ? (_b = (_a = valuesToRender.opacity) !== null && _a !== void 0 ? _a : this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        styles.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
      }
      for (const key in scaleCorrectors) {
        if (valuesToRender[key] === void 0)
          continue;
        const { correct, applyTo } = scaleCorrectors[key];
        const corrected = styles.transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
        if (applyTo) {
          const num = applyTo.length;
          for (let i = 0; i < num; i++) {
            styles[applyTo[i]] = corrected;
          }
        } else {
          styles[key] = corrected;
        }
      }
      if (this.options.layoutId) {
        styles.pointerEvents = lead === this ? resolveMotionValue(styleProp.pointerEvents) || "" : "none";
      }
      return styles;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((node) => {
        var _a;
        return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
      });
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    }
  };
}
function updateLayout(node) {
  node.updateLayout();
}
function notifyLayoutUpdate(node) {
  var _a, _b, _c;
  const snapshot = ((_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) || node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    const { layoutBox: layout, measuredBox: measuredLayout } = node.layout;
    const { animationType } = node.options;
    const isShared = snapshot.source !== node.layout.source;
    if (animationType === "size") {
      eachAxis((axis) => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(axisSnapshot);
        axisSnapshot.min = layout[axis].min;
        axisSnapshot.max = axisSnapshot.min + length;
      });
    } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout)) {
      eachAxis((axis) => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(layout[axis]);
        axisSnapshot.max = axisSnapshot.min + length;
      });
    }
    const layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout, snapshot.layoutBox);
    const visualDelta = createDelta();
    if (isShared) {
      calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
    } else {
      calcBoxDelta(visualDelta, layout, snapshot.layoutBox);
    }
    const hasLayoutChanged = !isDeltaZero(layoutDelta);
    let hasRelativeTargetChanged = false;
    if (!node.resumeFrom) {
      const relativeParent = node.getClosestProjectingParent();
      if (relativeParent && !relativeParent.resumeFrom) {
        const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
        if (parentSnapshot && parentLayout) {
          const relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
          const relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout, parentLayout.layoutBox);
          if (!boxEquals(relativeSnapshot, relativeLayout)) {
            hasRelativeTargetChanged = true;
          }
          if (relativeParent.options.layoutRoot) {
            node.relativeTarget = relativeLayout;
            node.relativeTargetOrigin = relativeSnapshot;
            node.relativeParent = relativeParent;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeTargetChanged
    });
  } else if (node.isLead()) {
    (_c = (_b = node.options).onExitComplete) === null || _c === void 0 ? void 0 : _c.call(_b);
  }
  node.options.transition = void 0;
}
function propagateDirtyNodes(node) {
  node.isProjectionDirty || (node.isProjectionDirty = Boolean(node.parent && node.parent.isProjectionDirty));
  node.isTransformDirty || (node.isTransformDirty = Boolean(node.parent && node.parent.isTransformDirty));
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function resetTransformStyle(node) {
  const { visualElement } = node.options;
  if (visualElement === null || visualElement === void 0 ? void 0 : visualElement.getProps().onBeforeLayoutMeasure) {
    visualElement.notify("BeforeLayoutMeasure");
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = void 0;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetRotation(node) {
  node.resetRotation();
}
function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
  output.translate = mix(delta.translate, 0, p);
  output.scale = mix(delta.scale, 1, p);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
  output.min = mix(from.min, to.min, p);
  output.max = mix(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
  mixAxis(output.x, from.x, to.x, p);
  mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
  return node.animationValues && node.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function mountNodeEarly(node, elementId) {
  let searchNode = node.root;
  for (let i = node.path.length - 1; i >= 0; i--) {
    if (Boolean(node.path[i].instance)) {
      searchNode = node.path[i];
      break;
    }
  }
  const searchElement = searchNode && searchNode !== node.root ? searchNode.instance : document;
  const element = searchElement.querySelector(`[data-projection-id="${elementId}"]`);
  if (element)
    node.mount(element, true);
}
function roundAxis(axis) {
  axis.min = Math.round(axis.min);
  axis.max = Math.round(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout) {
  return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout), 0.2);
}

// ../../../node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
var DocumentProjectionNode = createProjectionNode({
  attachResizeListener: (ref, notify2) => addDomEvent(ref, "resize", notify2),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => true
});

// ../../../node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
var rootProjectionNode = {
  current: void 0
};
var HTMLProjectionNode = createProjectionNode({
  measureScroll: (instance) => ({
    x: instance.scrollLeft,
    y: instance.scrollTop
  }),
  defaultParent: () => {
    if (!rootProjectionNode.current) {
      const documentNode = new DocumentProjectionNode(0, {});
      documentNode.mount(window);
      documentNode.setOptions({ layoutScroll: true });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: (instance, value) => {
    instance.style.transform = value !== void 0 ? value : "none";
  },
  checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed")
});

// ../../../node_modules/framer-motion/dist/es/render/dom/motion.mjs
var featureBundle = {
  ...animations,
  ...gestureAnimations,
  ...drag,
  ...layoutFeatures
};
var motion = /* @__PURE__ */ createMotionProxy((Component2, config) => createDomMotionConfig(Component2, config, featureBundle, createDomVisualElement, HTMLProjectionNode));
function createDomMotionComponent(key) {
  return createMotionComponent(createDomMotionConfig(key, { forwardMotionProps: false }, featureBundle, createDomVisualElement, HTMLProjectionNode));
}

// ../../../node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs
var m = createMotionProxy(createDomMotionConfig);

// ../../../node_modules/framer-motion/dist/es/utils/use-force-update.mjs
import { useState, useCallback as useCallback4 } from "react";

// ../../../node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs
import { useRef as useRef7 } from "react";
function useIsMounted() {
  const isMounted = useRef7(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}

// ../../../node_modules/framer-motion/dist/es/utils/use-force-update.mjs
function useForceUpdate() {
  const isMounted = useIsMounted();
  const [forcedRenderCount, setForcedRenderCount] = useState(0);
  const forceRender = useCallback4(() => {
    isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
  }, [forcedRenderCount]);
  const deferredForceRender = useCallback4(() => sync.postRender(forceRender), [forceRender]);
  return [deferredForceRender, forcedRenderCount];
}

// ../../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
import * as React4 from "react";
import { useContext as useContext10, useRef as useRef9, cloneElement as cloneElement2, Children, isValidElement } from "react";

// ../../../node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
import * as React3 from "react";
import { useId as useId3, useMemo as useMemo6 } from "react";

// ../../../node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
import * as React2 from "react";
import { useId as useId2, useRef as useRef8, useInsertionEffect } from "react";
var PopChildMeasure = class extends React2.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (element && prevProps.isPresent && !this.props.isPresent) {
      const size = this.props.sizeRef.current;
      size.height = element.offsetHeight || 0;
      size.width = element.offsetWidth || 0;
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
};
function PopChild({ children, isPresent: isPresent2 }) {
  const id4 = useId2();
  const ref = useRef8(null);
  const size = useRef8({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  useInsertionEffect(() => {
    const { width, height, top, left } = size.current;
    if (isPresent2 || !ref.current || !width || !height)
      return;
    ref.current.dataset.motionPopId = id4;
    const style = document.createElement("style");
    document.head.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id4}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
    }
    return () => {
      document.head.removeChild(style);
    };
  }, [isPresent2]);
  return React2.createElement(PopChildMeasure, { isPresent: isPresent2, childRef: ref, sizeRef: size }, React2.cloneElement(children, { ref }));
}

// ../../../node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var PresenceChild = ({ children, initial, isPresent: isPresent2, onExitComplete, custom, presenceAffectsLayout, mode }) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id4 = useId3();
  const context = useMemo6(
    () => ({
      id: id4,
      initial,
      isPresent: isPresent2,
      custom,
      onExitComplete: (childId) => {
        presenceChildren.set(childId, true);
        for (const isComplete of presenceChildren.values()) {
          if (!isComplete)
            return;
        }
        onExitComplete && onExitComplete();
      },
      register: (childId) => {
        presenceChildren.set(childId, false);
        return () => presenceChildren.delete(childId);
      }
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout ? void 0 : [isPresent2]
  );
  useMemo6(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent2]);
  React3.useEffect(() => {
    !isPresent2 && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent2]);
  if (mode === "popLayout") {
    children = React3.createElement(PopChild, { isPresent: isPresent2 }, children);
  }
  return React3.createElement(PresenceContext.Provider, { value: context }, children);
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}

// ../../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var getChildKey = (child) => child.key || "";
function updateChildLookup(children, allChildren) {
  children.forEach((child) => {
    const key = getChildKey(child);
    allChildren.set(key, child);
  });
}
function onlyElements(children) {
  const filtered = [];
  Children.forEach(children, (child) => {
    if (isValidElement(child))
      filtered.push(child);
  });
  return filtered;
}
var AnimatePresence = ({ children, custom, initial = true, onExitComplete, exitBeforeEnter, presenceAffectsLayout = true, mode = "sync" }) => {
  if (exitBeforeEnter) {
    mode = "wait";
    if (false) {
      warnOnce(false, "Replace exitBeforeEnter with mode='wait'");
    }
  }
  let [forceRender] = useForceUpdate();
  const forceRenderLayoutGroup = useContext10(LayoutGroupContext).forceRender;
  if (forceRenderLayoutGroup)
    forceRender = forceRenderLayoutGroup;
  const isMounted = useIsMounted();
  const filteredChildren = onlyElements(children);
  let childrenToRender = filteredChildren;
  const exiting = /* @__PURE__ */ new Set();
  const presentChildren = useRef9(childrenToRender);
  const allChildren = useRef9(/* @__PURE__ */ new Map()).current;
  const isInitialRender = useRef9(true);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    updateChildLookup(filteredChildren, allChildren);
    presentChildren.current = childrenToRender;
  });
  useUnmountEffect(() => {
    isInitialRender.current = true;
    allChildren.clear();
    exiting.clear();
  });
  if (isInitialRender.current) {
    return React4.createElement(React4.Fragment, null, childrenToRender.map((child) => React4.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? void 0 : false, presenceAffectsLayout, mode }, child)));
  }
  childrenToRender = [...childrenToRender];
  const presentKeys = presentChildren.current.map(getChildKey);
  const targetKeys = filteredChildren.map(getChildKey);
  const numPresent = presentKeys.length;
  for (let i = 0; i < numPresent; i++) {
    const key = presentKeys[i];
    if (targetKeys.indexOf(key) === -1) {
      exiting.add(key);
    }
  }
  if (mode === "wait" && exiting.size) {
    childrenToRender = [];
  }
  exiting.forEach((key) => {
    if (targetKeys.indexOf(key) !== -1)
      return;
    const child = allChildren.get(key);
    if (!child)
      return;
    const insertionIndex = presentKeys.indexOf(key);
    const onExit = () => {
      allChildren.delete(key);
      exiting.delete(key);
      const removeIndex = presentChildren.current.findIndex((presentChild) => presentChild.key === key);
      presentChildren.current.splice(removeIndex, 1);
      if (!exiting.size) {
        presentChildren.current = filteredChildren;
        if (isMounted.current === false)
          return;
        forceRender();
        onExitComplete && onExitComplete();
      }
    };
    childrenToRender.splice(insertionIndex, 0, React4.createElement(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom, presenceAffectsLayout, mode }, child));
  });
  childrenToRender = childrenToRender.map((child) => {
    const key = child.key;
    return exiting.has(key) ? child : React4.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, presenceAffectsLayout, mode }, child);
  });
  if (false) {
    console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  }
  return React4.createElement(React4.Fragment, null, exiting.size ? childrenToRender : childrenToRender.map((child) => cloneElement2(child)));
};

// ../../../node_modules/framer-motion/dist/es/context/DeprecatedLayoutGroupContext.mjs
import { createContext as createContext7 } from "react";
var DeprecatedLayoutGroupContext = createContext7(null);

// ../../../node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs
import * as React5 from "react";
import { useContext as useContext11, useRef as useRef10, useMemo as useMemo7 } from "react";

// ../../../node_modules/framer-motion/dist/es/projection/node/group.mjs
var notify = (node) => !node.isLayoutDirty && node.willUpdate(false);
function nodeGroup() {
  const nodes = /* @__PURE__ */ new Set();
  const subscriptions = /* @__PURE__ */ new WeakMap();
  const dirtyAll = () => nodes.forEach(notify);
  return {
    add: (node) => {
      nodes.add(node);
      subscriptions.set(node, node.addEventListener("willUpdate", dirtyAll));
    },
    remove: (node) => {
      var _a;
      nodes.delete(node);
      (_a = subscriptions.get(node)) === null || _a === void 0 ? void 0 : _a();
      subscriptions.delete(node);
      dirtyAll();
    },
    dirty: dirtyAll
  };
}

// ../../../node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs
var shouldInheritGroup = (inherit) => inherit === true;
var shouldInheritId = (inherit) => shouldInheritGroup(inherit === true) || inherit === "id";
var LayoutGroup = ({ children, id: id4, inheritId, inherit = true }) => {
  if (inheritId !== void 0)
    inherit = inheritId;
  const layoutGroupContext = useContext11(LayoutGroupContext);
  const deprecatedLayoutGroupContext = useContext11(DeprecatedLayoutGroupContext);
  const [forceRender, key] = useForceUpdate();
  const context = useRef10(null);
  const upstreamId = layoutGroupContext.id || deprecatedLayoutGroupContext;
  if (context.current === null) {
    if (shouldInheritId(inherit) && upstreamId) {
      id4 = id4 ? upstreamId + "-" + id4 : upstreamId;
    }
    context.current = {
      id: id4,
      group: shouldInheritGroup(inherit) ? layoutGroupContext.group || nodeGroup() : nodeGroup()
    };
  }
  const memoizedContext = useMemo7(() => ({ ...context.current, forceRender }), [key]);
  return React5.createElement(LayoutGroupContext.Provider, { value: memoizedContext }, children);
};

// ../../../node_modules/framer-motion/dist/es/components/AnimateSharedLayout.mjs
import * as React6 from "react";
var id3 = 0;
var AnimateSharedLayout = ({ children }) => {
  React6.useEffect(() => {
    warning(false, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations");
  }, []);
  return React6.createElement(LayoutGroup, { id: useConstant(() => `asl-${id3++}`) }, children);
};

// ../../../node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs
import * as React7 from "react";
import { useContext as useContext12, useMemo as useMemo8 } from "react";
function MotionConfig({ children, isValidProp, ...config }) {
  isValidProp && loadExternalIsValidProp(isValidProp);
  config = { ...useContext12(MotionConfigContext), ...config };
  config.isStatic = useConstant(() => config.isStatic);
  const context = useMemo8(() => config, [JSON.stringify(config.transition), config.transformPagePoint, config.reducedMotion]);
  return React7.createElement(MotionConfigContext.Provider, { value: context }, children);
}

// ../../../node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs
import * as React8 from "react";
import { useState as useState2, useRef as useRef11, useEffect as useEffect12 } from "react";
function LazyMotion({ children, features, strict = false }) {
  const [, setIsLoaded] = useState2(!isLazyBundle(features));
  const loadedRenderer = useRef11(void 0);
  if (!isLazyBundle(features)) {
    const { renderer, ...loadedFeatures } = features;
    loadedRenderer.current = renderer;
    loadFeatures(loadedFeatures);
  }
  useEffect12(() => {
    if (isLazyBundle(features)) {
      features().then(({ renderer, ...loadedFeatures }) => {
        loadFeatures(loadedFeatures);
        loadedRenderer.current = renderer;
        setIsLoaded(true);
      });
    }
  }, []);
  return React8.createElement(LazyContext.Provider, { value: { renderer: loadedRenderer.current, strict } }, children);
}
function isLazyBundle(features) {
  return typeof features === "function";
}

// ../../../node_modules/framer-motion/dist/es/value/use-motion-value.mjs
import { useContext as useContext13, useState as useState3, useEffect as useEffect13 } from "react";
function useMotionValue(initial) {
  const value = useConstant(() => motionValue(initial));
  const { isStatic } = useContext13(MotionConfigContext);
  if (isStatic) {
    const [, setLatest] = useState3(initial);
    useEffect13(() => value.on("change", setLatest), []);
  }
  return value;
}

// ../../../node_modules/framer-motion/dist/es/utils/transform.mjs
var isCustomValueType = (v) => {
  return typeof v === "object" && v.mix;
};
var getMixer2 = (v) => isCustomValueType(v) ? v.mix : void 0;
function transform(...args) {
  const useImmediate = !Array.isArray(args[0]);
  const argOffset = useImmediate ? 0 : -1;
  const inputValue = args[0 + argOffset];
  const inputRange = args[1 + argOffset];
  const outputRange = args[2 + argOffset];
  const options = args[3 + argOffset];
  const interpolator = interpolate(inputRange, outputRange, {
    mixer: getMixer2(outputRange[0]),
    ...options
  });
  return useImmediate ? interpolator(inputValue) : interpolator;
}

// ../../../node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function useCombineMotionValues(values, combineValues) {
  const value = useMotionValue(combineValues());
  const updateValue = () => value.set(combineValues());
  updateValue();
  useIsomorphicLayoutEffect(() => {
    const scheduleUpdate = () => sync.update(updateValue, false, true);
    const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
    return () => {
      subscriptions.forEach((unsubscribe) => unsubscribe());
      cancelSync.update(updateValue);
    };
  });
  return value;
}

// ../../../node_modules/framer-motion/dist/es/value/use-transform.mjs
function useTransform(input, inputRangeOrTransformer, outputRange, options) {
  const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRange, options);
  return Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], ([latest]) => transformer(latest));
}
function useListTransform(values, transformer) {
  const latest = useConstant(() => []);
  return useCombineMotionValues(values, () => {
    latest.length = 0;
    const numValues = values.length;
    for (let i = 0; i < numValues; i++) {
      latest[i] = values[i].get();
    }
    return transformer(latest);
  });
}

// ../../../node_modules/framer-motion/dist/es/components/Reorder/Group.mjs
import * as React9 from "react";
import { forwardRef as forwardRef2, useRef as useRef12, useEffect as useEffect14 } from "react";

// ../../../node_modules/framer-motion/dist/es/context/ReorderContext.mjs
import { createContext as createContext8 } from "react";
var ReorderContext = createContext8(null);

// ../../../node_modules/framer-motion/dist/es/components/Reorder/utils/check-reorder.mjs
function checkReorder(order, value, offset, velocity) {
  if (!velocity)
    return order;
  const index = order.findIndex((item2) => item2.value === value);
  if (index === -1)
    return order;
  const nextOffset = velocity > 0 ? 1 : -1;
  const nextItem = order[index + nextOffset];
  if (!nextItem)
    return order;
  const item = order[index];
  const nextLayout = nextItem.layout;
  const nextItemCenter = mix(nextLayout.min, nextLayout.max, 0.5);
  if (nextOffset === 1 && item.layout.max + offset > nextItemCenter || nextOffset === -1 && item.layout.min + offset < nextItemCenter) {
    return moveItem(order, index, index + nextOffset);
  }
  return order;
}

// ../../../node_modules/framer-motion/dist/es/components/Reorder/Group.mjs
function ReorderGroup({ children, as = "ul", axis = "y", onReorder, values, ...props }, externalRef) {
  const Component2 = useConstant(() => motion(as));
  const order = [];
  const isReordering = useRef12(false);
  invariant(Boolean(values), "Reorder.Group must be provided a values prop");
  const context = {
    axis,
    registerItem: (value, layout) => {
      if (layout && order.findIndex((entry) => value === entry.value) === -1) {
        order.push({ value, layout: layout[axis] });
        order.sort(compareMin);
      }
    },
    updateOrder: (id4, offset, velocity) => {
      if (isReordering.current)
        return;
      const newOrder = checkReorder(order, id4, offset, velocity);
      if (order !== newOrder) {
        isReordering.current = true;
        onReorder(newOrder.map(getValue).filter((value) => values.indexOf(value) !== -1));
      }
    }
  };
  useEffect14(() => {
    isReordering.current = false;
  });
  return React9.createElement(
    Component2,
    { ...props, ref: externalRef },
    React9.createElement(ReorderContext.Provider, { value: context }, children)
  );
}
var Group = forwardRef2(ReorderGroup);
function getValue(item) {
  return item.value;
}
function compareMin(a, b) {
  return a.layout.min - b.layout.min;
}

// ../../../node_modules/framer-motion/dist/es/components/Reorder/Item.mjs
import * as React10 from "react";
import { forwardRef as forwardRef3, useContext as useContext14, useRef as useRef13, useEffect as useEffect15 } from "react";
function useDefaultMotionValue(value, defaultValue = 0) {
  return isMotionValue(value) ? value : useMotionValue(defaultValue);
}
function ReorderItem({ children, style = {}, value, as = "li", onDrag, layout = true, ...props }, externalRef) {
  const Component2 = useConstant(() => motion(as));
  const context = useContext14(ReorderContext);
  const point2 = {
    x: useDefaultMotionValue(style.x),
    y: useDefaultMotionValue(style.y)
  };
  const zIndex = useTransform([point2.x, point2.y], ([latestX, latestY]) => latestX || latestY ? 1 : "unset");
  const measuredLayout = useRef13(null);
  invariant(Boolean(context), "Reorder.Item must be a child of Reorder.Group");
  const { axis, registerItem, updateOrder } = context;
  useEffect15(() => {
    registerItem(value, measuredLayout.current);
  }, [context]);
  return React10.createElement(Component2, { drag: axis, ...props, dragSnapToOrigin: true, style: { ...style, x: point2.x, y: point2.y, zIndex }, layout, onDrag: (event, gesturePoint) => {
    const { velocity } = gesturePoint;
    velocity[axis] && updateOrder(value, point2[axis].get(), velocity[axis]);
    onDrag && onDrag(event, gesturePoint);
  }, onLayoutMeasure: (measured) => {
    measuredLayout.current = measured;
  }, ref: externalRef }, children);
}
var Item = forwardRef3(ReorderItem);

// ../../../node_modules/framer-motion/dist/es/components/Reorder/index.mjs
var Reorder = {
  Group,
  Item
};

// ../../../node_modules/framer-motion/dist/es/render/dom/features-animation.mjs
var domAnimation = {
  renderer: createDomVisualElement,
  ...animations,
  ...gestureAnimations
};

// ../../../node_modules/framer-motion/dist/es/render/dom/features-max.mjs
var domMax = {
  ...domAnimation,
  ...drag,
  ...layoutFeatures,
  projectionNodeConstructor: HTMLProjectionNode
};

// ../../../node_modules/framer-motion/dist/es/value/use-motion-template.mjs
function useMotionTemplate(fragments, ...values) {
  const numFragments = fragments.length;
  function buildValue() {
    let output = ``;
    for (let i = 0; i < numFragments; i++) {
      output += fragments[i];
      const value = values[i];
      if (value) {
        output += isMotionValue(value) ? value.get() : value;
      }
    }
    return output;
  }
  return useCombineMotionValues(values.filter(isMotionValue), buildValue);
}

// ../../../node_modules/framer-motion/dist/es/value/use-spring.mjs
import { useContext as useContext15, useRef as useRef14, useInsertionEffect as useInsertionEffect2 } from "react";
function useSpring(source, config = {}) {
  const { isStatic } = useContext15(MotionConfigContext);
  const activeSpringAnimation = useRef14(null);
  const value = useMotionValue(isMotionValue(source) ? source.get() : source);
  const stopAnimation2 = () => {
    if (activeSpringAnimation.current) {
      activeSpringAnimation.current.stop();
    }
  };
  useInsertionEffect2(() => {
    return value.attach((v, set) => {
      if (isStatic)
        return set(v);
      stopAnimation2();
      activeSpringAnimation.current = animate({
        keyframes: [value.get(), v],
        velocity: value.getVelocity(),
        type: "spring",
        ...config,
        onUpdate: set
      });
      return value.get();
    }, stopAnimation2);
  }, [JSON.stringify(config)]);
  useIsomorphicLayoutEffect(() => {
    if (isMotionValue(source)) {
      return source.on("change", (v) => value.set(parseFloat(v)));
    }
  }, [value]);
  return value;
}

// ../../../node_modules/framer-motion/dist/es/value/use-velocity.mjs
import { useEffect as useEffect16 } from "react";
function useVelocity(value) {
  const velocity = useMotionValue(value.getVelocity());
  useEffect16(() => {
    return value.on("velocityChange", (newVelocity) => {
      velocity.set(newVelocity);
    });
  }, [value]);
  return velocity;
}

// ../../../node_modules/@motionone/utils/dist/clamp.es.js
var clamp2 = (min, max, v) => Math.min(Math.max(v, min), max);

// ../../../node_modules/@motionone/utils/dist/is-number.es.js
var isNumber = (value) => typeof value === "number";

// ../../../node_modules/@motionone/utils/dist/is-easing-list.es.js
var isEasingList = (easing) => Array.isArray(easing) && !isNumber(easing[0]);

// ../../../node_modules/@motionone/utils/dist/wrap.es.js
var wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

// ../../../node_modules/@motionone/utils/dist/easing.es.js
function getEasingForSegment(easing, i) {
  return isEasingList(easing) ? easing[wrap(0, easing.length, i)] : easing;
}

// ../../../node_modules/@motionone/utils/dist/mix.es.js
var mix2 = (min, max, progress3) => -progress3 * min + progress3 * max + min;

// ../../../node_modules/@motionone/utils/dist/noop.es.js
var noopReturn = (v) => v;

// ../../../node_modules/@motionone/utils/dist/progress.es.js
var progress2 = (min, max, value) => max - min === 0 ? 1 : (value - min) / (max - min);

// ../../../node_modules/@motionone/utils/dist/offset.es.js
function fillOffset(offset, remaining) {
  const min = offset[offset.length - 1];
  for (let i = 1; i <= remaining; i++) {
    const offsetProgress = progress2(0, remaining, i);
    offset.push(mix2(min, 1, offsetProgress));
  }
}
function defaultOffset2(length) {
  const offset = [0];
  fillOffset(offset, length - 1);
  return offset;
}

// ../../../node_modules/@motionone/utils/dist/interpolate.es.js
function interpolate2(output, input = defaultOffset2(output.length), easing = noopReturn) {
  const length = output.length;
  const remainder = length - input.length;
  remainder > 0 && fillOffset(input, remainder);
  return (t) => {
    let i = 0;
    for (; i < length - 2; i++) {
      if (t < input[i + 1])
        break;
    }
    let progressInRange = clamp2(0, 1, progress2(input[i], input[i + 1], t));
    const segmentEasing = getEasingForSegment(easing, i);
    progressInRange = segmentEasing(progressInRange);
    return mix2(output[i], output[i + 1], progressInRange);
  };
}

// ../../../node_modules/@motionone/utils/dist/is-function.es.js
var isFunction = (value) => typeof value === "function";

// ../../../node_modules/@motionone/utils/dist/is-string.es.js
var isString2 = (value) => typeof value === "string";

// ../../../node_modules/@motionone/utils/dist/velocity.es.js
function velocityPerSecond2(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}

// ../../../node_modules/@motionone/dom/dist/utils/resolve-elements.es.js
function resolveElements(elements, selectorCache) {
  var _a;
  if (typeof elements === "string") {
    if (selectorCache) {
      (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : selectorCache[elements] = document.querySelectorAll(elements);
      elements = selectorCache[elements];
    } else {
      elements = document.querySelectorAll(elements);
    }
  } else if (elements instanceof Element) {
    elements = [elements];
  }
  return Array.from(elements || []);
}

// ../../../node_modules/tslib/tslib.es6.js
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}

// ../../../node_modules/@motionone/dom/dist/gestures/in-view.es.js
var thresholds = {
  any: 0,
  all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "any" } = {}) {
  if (typeof IntersectionObserver === "undefined") {
    return () => {
    };
  }
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */ new WeakMap();
  const onIntersectionChange = (entries) => {
    entries.forEach((entry) => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd))
        return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry);
        if (isFunction(newOnEnd)) {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer2.unobserve(entry.target);
        }
      } else if (onEnd) {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer2 = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach((element) => observer2.observe(element));
  return () => observer2.disconnect();
}

// ../../../node_modules/@motionone/dom/dist/gestures/resize/handle-element.es.js
var resizeHandlers = /* @__PURE__ */ new WeakMap();
var observer;
function getElementSize(target, borderBoxSize) {
  if (borderBoxSize) {
    const { inlineSize, blockSize } = borderBoxSize[0];
    return { width: inlineSize, height: blockSize };
  } else if (target instanceof SVGElement && "getBBox" in target) {
    return target.getBBox();
  } else {
    return {
      width: target.offsetWidth,
      height: target.offsetHeight
    };
  }
}
function notifyTarget({ target, contentRect, borderBoxSize }) {
  var _a;
  (_a = resizeHandlers.get(target)) === null || _a === void 0 ? void 0 : _a.forEach((handler) => {
    handler({
      target,
      contentSize: contentRect,
      get size() {
        return getElementSize(target, borderBoxSize);
      }
    });
  });
}
function notifyAll(entries) {
  entries.forEach(notifyTarget);
}
function createResizeObserver() {
  if (typeof ResizeObserver === "undefined")
    return;
  observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
  if (!observer)
    createResizeObserver();
  const elements = resolveElements(target);
  elements.forEach((element) => {
    let elementHandlers = resizeHandlers.get(element);
    if (!elementHandlers) {
      elementHandlers = /* @__PURE__ */ new Set();
      resizeHandlers.set(element, elementHandlers);
    }
    elementHandlers.add(handler);
    observer === null || observer === void 0 ? void 0 : observer.observe(element);
  });
  return () => {
    elements.forEach((element) => {
      const elementHandlers = resizeHandlers.get(element);
      elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.delete(handler);
      if (!(elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.size)) {
        observer === null || observer === void 0 ? void 0 : observer.unobserve(element);
      }
    });
  };
}

// ../../../node_modules/@motionone/dom/dist/gestures/resize/handle-window.es.js
var windowCallbacks = /* @__PURE__ */ new Set();
var windowResizeHandler;
function createWindowResizeHandler() {
  windowResizeHandler = () => {
    const size = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    const info = {
      target: window,
      size,
      contentSize: size
    };
    windowCallbacks.forEach((callback) => callback(info));
  };
  window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
  windowCallbacks.add(callback);
  if (!windowResizeHandler)
    createWindowResizeHandler();
  return () => {
    windowCallbacks.delete(callback);
    if (!windowCallbacks.size && windowResizeHandler) {
      windowResizeHandler = void 0;
    }
  };
}

// ../../../node_modules/@motionone/dom/dist/gestures/resize/index.es.js
function resize(a, b) {
  return isFunction(a) ? resizeWindow(a) : resizeElement(a, b);
}

// ../../../node_modules/@motionone/dom/dist/gestures/scroll/info.es.js
var maxElapsed2 = 50;
var createAxisInfo = () => ({
  current: 0,
  offset: [],
  progress: 0,
  scrollLength: 0,
  targetOffset: 0,
  targetLength: 0,
  containerLength: 0,
  velocity: 0
});
var createScrollInfo = () => ({
  time: 0,
  x: createAxisInfo(),
  y: createAxisInfo()
});
var keys = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
};
function updateAxisInfo(element, axisName, info, time) {
  const axis = info[axisName];
  const { length, position } = keys[axisName];
  const prev = axis.current;
  const prevTime = info.time;
  axis.current = element["scroll" + position];
  axis.scrollLength = element["scroll" + length] - element["client" + length];
  axis.offset.length = 0;
  axis.offset[0] = 0;
  axis.offset[1] = axis.scrollLength;
  axis.progress = progress2(0, axis.scrollLength, axis.current);
  const elapsed = time - prevTime;
  axis.velocity = elapsed > maxElapsed2 ? 0 : velocityPerSecond2(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
  updateAxisInfo(element, "x", info, time);
  updateAxisInfo(element, "y", info, time);
  info.time = time;
}

// ../../../node_modules/@motionone/dom/dist/gestures/scroll/offsets/inset.es.js
function calcInset(element, container) {
  let inset = { x: 0, y: 0 };
  let current = element;
  while (current && current !== container) {
    if (current instanceof HTMLElement) {
      inset.x += current.offsetLeft;
      inset.y += current.offsetTop;
      current = current.offsetParent;
    } else if (current instanceof SVGGraphicsElement && "getBBox" in current) {
      const { top, left } = current.getBBox();
      inset.x += left;
      inset.y += top;
      while (current && current.tagName !== "svg") {
        current = current.parentNode;
      }
    }
  }
  return inset;
}

// ../../../node_modules/@motionone/dom/dist/gestures/scroll/offsets/presets.es.js
var ScrollOffset = {
  Enter: [
    [0, 1],
    [1, 1]
  ],
  Exit: [
    [0, 0],
    [1, 0]
  ],
  Any: [
    [1, 0],
    [0, 1]
  ],
  All: [
    [0, 0],
    [1, 1]
  ]
};

// ../../../node_modules/@motionone/dom/dist/gestures/scroll/offsets/edge.es.js
var namedEdges = {
  start: 0,
  center: 0.5,
  end: 1
};
function resolveEdge(edge, length, inset = 0) {
  let delta = 0;
  if (namedEdges[edge] !== void 0) {
    edge = namedEdges[edge];
  }
  if (isString2(edge)) {
    const asNumber2 = parseFloat(edge);
    if (edge.endsWith("px")) {
      delta = asNumber2;
    } else if (edge.endsWith("%")) {
      edge = asNumber2 / 100;
    } else if (edge.endsWith("vw")) {
      delta = asNumber2 / 100 * document.documentElement.clientWidth;
    } else if (edge.endsWith("vh")) {
      delta = asNumber2 / 100 * document.documentElement.clientHeight;
    } else {
      edge = asNumber2;
    }
  }
  if (isNumber(edge)) {
    delta = length * edge;
  }
  return inset + delta;
}

// ../../../node_modules/@motionone/dom/dist/gestures/scroll/offsets/offset.es.js
var defaultOffset3 = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
  let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset3;
  let targetPoint = 0;
  let containerPoint = 0;
  if (isNumber(offset)) {
    offsetDefinition = [offset, offset];
  } else if (isString2(offset)) {
    offset = offset.trim();
    if (offset.includes(" ")) {
      offsetDefinition = offset.split(" ");
    } else {
      offsetDefinition = [offset, namedEdges[offset] ? offset : `0`];
    }
  }
  targetPoint = resolveEdge(offsetDefinition[0], targetLength, targetInset);
  containerPoint = resolveEdge(offsetDefinition[1], containerLength);
  return targetPoint - containerPoint;
}

// ../../../node_modules/@motionone/dom/dist/gestures/scroll/offsets/index.es.js
var point = { x: 0, y: 0 };
function resolveOffsets(container, info, options) {
  let { offset: offsetDefinition = ScrollOffset.All } = options;
  const { target = container, axis = "y" } = options;
  const lengthLabel = axis === "y" ? "height" : "width";
  const inset = target !== container ? calcInset(target, container) : point;
  const targetSize = target === container ? { width: container.scrollWidth, height: container.scrollHeight } : { width: target.clientWidth, height: target.clientHeight };
  const containerSize = {
    width: container.clientWidth,
    height: container.clientHeight
  };
  info[axis].offset.length = 0;
  let hasChanged = !info[axis].interpolate;
  const numOffsets = offsetDefinition.length;
  for (let i = 0; i < numOffsets; i++) {
    const offset = resolveOffset(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
    if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
      hasChanged = true;
    }
    info[axis].offset[i] = offset;
  }
  if (hasChanged) {
    info[axis].interpolate = interpolate2(defaultOffset2(numOffsets), info[axis].offset);
    info[axis].interpolatorOffsets = [...info[axis].offset];
  }
  info[axis].progress = info[axis].interpolate(info[axis].current);
}

// ../../../node_modules/@motionone/dom/dist/gestures/scroll/on-scroll-handler.es.js
function measure(container, target = container, info) {
  info.x.targetOffset = 0;
  info.y.targetOffset = 0;
  if (target !== container) {
    let node = target;
    while (node && node != container) {
      info.x.targetOffset += node.offsetLeft;
      info.y.targetOffset += node.offsetTop;
      node = node.offsetParent;
    }
  }
  info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
  info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
  info.x.containerLength = container.clientWidth;
  info.y.containerLength = container.clientHeight;
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
  const axis = options.axis || "y";
  return {
    measure: () => measure(element, options.target, info),
    update: (time) => {
      updateScrollInfo(element, info, time);
      if (options.offset || options.target) {
        resolveOffsets(element, info, options);
      }
    },
    notify: isFunction(onScroll) ? () => onScroll(info) : scrubAnimation(onScroll, info[axis])
  };
}
function scrubAnimation(controls, axisInfo) {
  controls.pause();
  controls.forEachNative((animation, { easing }) => {
    var _a, _b;
    if (animation.updateDuration) {
      if (!easing)
        animation.easing = noopReturn;
      animation.updateDuration(1);
    } else {
      const timingOptions = { duration: 1e3 };
      if (!easing)
        timingOptions.easing = "linear";
      (_b = (_a = animation.effect) === null || _a === void 0 ? void 0 : _a.updateTiming) === null || _b === void 0 ? void 0 : _b.call(_a, timingOptions);
    }
  });
  return () => {
    controls.currentTime = axisInfo.progress;
  };
}

// ../../../node_modules/@motionone/dom/dist/gestures/scroll/index.es.js
var scrollListeners = /* @__PURE__ */ new WeakMap();
var resizeListeners = /* @__PURE__ */ new WeakMap();
var onScrollHandlers = /* @__PURE__ */ new WeakMap();
var getEventTarget = (element) => element === document.documentElement ? window : element;
function scroll(onScroll, _a = {}) {
  var { container = document.documentElement } = _a, options = __rest(_a, ["container"]);
  let containerHandlers = onScrollHandlers.get(container);
  if (!containerHandlers) {
    containerHandlers = /* @__PURE__ */ new Set();
    onScrollHandlers.set(container, containerHandlers);
  }
  const info = createScrollInfo();
  const containerHandler = createOnScrollHandler(container, onScroll, info, options);
  containerHandlers.add(containerHandler);
  if (!scrollListeners.has(container)) {
    const listener2 = () => {
      const time = performance.now();
      for (const handler of containerHandlers)
        handler.measure();
      for (const handler of containerHandlers)
        handler.update(time);
      for (const handler of containerHandlers)
        handler.notify();
    };
    scrollListeners.set(container, listener2);
    const target = getEventTarget(container);
    window.addEventListener("resize", listener2, { passive: true });
    if (container !== document.documentElement) {
      resizeListeners.set(container, resize(container, listener2));
    }
    target.addEventListener("scroll", listener2, { passive: true });
  }
  const listener = scrollListeners.get(container);
  const onLoadProcesss = requestAnimationFrame(listener);
  return () => {
    var _a2;
    if (typeof onScroll !== "function")
      onScroll.stop();
    cancelAnimationFrame(onLoadProcesss);
    const containerHandlers2 = onScrollHandlers.get(container);
    if (!containerHandlers2)
      return;
    containerHandlers2.delete(containerHandler);
    if (containerHandlers2.size)
      return;
    const listener2 = scrollListeners.get(container);
    scrollListeners.delete(container);
    if (listener2) {
      getEventTarget(container).removeEventListener("scroll", listener2);
      (_a2 = resizeListeners.get(container)) === null || _a2 === void 0 ? void 0 : _a2();
      window.removeEventListener("resize", listener2);
    }
  };
}

// ../../../node_modules/framer-motion/dist/es/value/use-scroll.mjs
import { useEffect as useEffect17 } from "react";
function refWarning(name, ref) {
  warning(Boolean(!ref || ref.current), `You have defined a ${name} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`);
}
var createScrollMotionValues = () => ({
  scrollX: motionValue(0),
  scrollY: motionValue(0),
  scrollXProgress: motionValue(0),
  scrollYProgress: motionValue(0)
});
function useScroll({ container, target, layoutEffect = true, ...options } = {}) {
  const values = useConstant(createScrollMotionValues);
  const useLifecycleEffect = layoutEffect ? useIsomorphicLayoutEffect : useEffect17;
  useLifecycleEffect(() => {
    refWarning("target", target);
    refWarning("container", container);
    return scroll(({ x, y }) => {
      values.scrollX.set(x.current);
      values.scrollXProgress.set(x.progress);
      values.scrollY.set(y.current);
      values.scrollYProgress.set(y.progress);
    }, {
      ...options,
      container: (container === null || container === void 0 ? void 0 : container.current) || void 0,
      target: (target === null || target === void 0 ? void 0 : target.current) || void 0
    });
  }, []);
  return values;
}

// ../../../node_modules/framer-motion/dist/es/value/scroll/use-element-scroll.mjs
function useElementScroll(ref) {
  if (false) {
    warnOnce(false, "useElementScroll is deprecated. Convert to useScroll({ container: ref }).");
  }
  return useScroll({ container: ref });
}

// ../../../node_modules/framer-motion/dist/es/value/scroll/use-viewport-scroll.mjs
function useViewportScroll() {
  if (false) {
    warnOnce(false, "useViewportScroll is deprecated. Convert to useScroll().");
  }
  return useScroll();
}

// ../../../node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs
import { useRef as useRef15, useContext as useContext16, useEffect as useEffect18 } from "react";
function useAnimationFrame(callback) {
  const initialTimestamp = useRef15(0);
  const { isStatic } = useContext16(MotionConfigContext);
  useEffect18(() => {
    if (isStatic)
      return;
    const provideTimeSinceStart = ({ timestamp, delta }) => {
      if (!initialTimestamp.current)
        initialTimestamp.current = timestamp;
      callback(timestamp - initialTimestamp.current, delta);
    };
    sync.update(provideTimeSinceStart, true);
    return () => cancelSync.update(provideTimeSinceStart);
  }, [callback]);
}

// ../../../node_modules/framer-motion/dist/es/value/use-time.mjs
function useTime() {
  const time = useMotionValue(0);
  useAnimationFrame((t) => time.set(t));
  return time;
}

// ../../../node_modules/framer-motion/dist/es/value/use-will-change/index.mjs
var WillChangeMotionValue = class extends MotionValue {
  constructor() {
    super(...arguments);
    this.members = [];
    this.transforms = /* @__PURE__ */ new Set();
  }
  add(name) {
    let memberName;
    if (transformProps.has(name)) {
      this.transforms.add(name);
      memberName = "transform";
    } else if (!name.startsWith("origin") && !isCSSVariable(name) && name !== "willChange") {
      memberName = camelToDash(name);
    }
    if (memberName) {
      addUniqueItem(this.members, memberName);
      this.update();
    }
  }
  remove(name) {
    if (transformProps.has(name)) {
      this.transforms.delete(name);
      if (!this.transforms.size) {
        removeItem(this.members, "transform");
      }
    } else {
      removeItem(this.members, camelToDash(name));
    }
    this.update();
  }
  update() {
    this.set(this.members.length ? this.members.join(", ") : "auto");
  }
};
function useWillChange() {
  return useConstant(() => new WillChangeMotionValue("auto"));
}

// ../../../node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs
import { useInsertionEffect as useInsertionEffect3 } from "react";
function useMotionValueEvent(value, event, callback) {
  useInsertionEffect3(() => value.on(event, callback), [value, event, callback]);
}

// ../../../node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
import { useState as useState4 } from "react";
function useReducedMotion() {
  !hasReducedMotionListener.current && initPrefersReducedMotion();
  const [shouldReduceMotion] = useState4(prefersReducedMotion.current);
  if (false) {
    warnOnce(shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
  }
  return shouldReduceMotion;
}

// ../../../node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion-config.mjs
import { useContext as useContext17 } from "react";
function useReducedMotionConfig() {
  const reducedMotionPreference = useReducedMotion();
  const { reducedMotion } = useContext17(MotionConfigContext);
  if (reducedMotion === "never") {
    return false;
  } else if (reducedMotion === "always") {
    return true;
  } else {
    return reducedMotionPreference;
  }
}

// ../../../node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs
function animationControls() {
  let hasMounted = false;
  const subscribers = /* @__PURE__ */ new Set();
  const controls = {
    subscribe(visualElement) {
      subscribers.add(visualElement);
      return () => void subscribers.delete(visualElement);
    },
    start(definition, transitionOverride) {
      invariant(hasMounted, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
      const animations2 = [];
      subscribers.forEach((visualElement) => {
        animations2.push(animateVisualElement(visualElement, definition, {
          transitionOverride
        }));
      });
      return Promise.all(animations2);
    },
    set(definition) {
      invariant(hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
      return subscribers.forEach((visualElement) => {
        setValues(visualElement, definition);
      });
    },
    stop() {
      subscribers.forEach((visualElement) => {
        stopAnimation(visualElement);
      });
    },
    mount() {
      hasMounted = true;
      return () => {
        hasMounted = false;
        controls.stop();
      };
    }
  };
  return controls;
}

// ../../../node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs
function useAnimationControls() {
  const controls = useConstant(animationControls);
  useIsomorphicLayoutEffect(controls.mount, []);
  return controls;
}
var useAnimation = useAnimationControls;

// ../../../node_modules/framer-motion/dist/es/utils/wrap.mjs
var wrap2 = (min, max, v) => {
  const rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

// ../../../node_modules/framer-motion/dist/es/utils/use-cycle.mjs
import { useRef as useRef16, useState as useState5, useCallback as useCallback5 } from "react";
function useCycle(...items) {
  const index = useRef16(0);
  const [item, setItem] = useState5(items[index.current]);
  const runCycle = useCallback5(
    (next) => {
      index.current = typeof next !== "number" ? wrap2(0, items.length, index.current + 1) : next;
      setItem(items[index.current]);
    },
    // The array will change on each call, but by putting items.length at
    // the front of this array, we guarantee the dependency comparison will match up
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items.length, ...items]
  );
  return [item, runCycle];
}

// ../../../node_modules/framer-motion/dist/es/utils/use-in-view.mjs
import { useState as useState6, useEffect as useEffect19 } from "react";
function useInView(ref, { root, margin, amount, once = false } = {}) {
  const [isInView, setInView] = useState6(false);
  useEffect19(() => {
    if (!ref.current || once && isInView)
      return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount: amount === "some" ? "any" : amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once]);
  return isInView;
}

// ../../../node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs
var DragControls = class {
  constructor() {
    this.componentControls = /* @__PURE__ */ new Set();
  }
  /**
   * Subscribe a component's internal `VisualElementDragControls` to the user-facing API.
   *
   * @internal
   */
  subscribe(controls) {
    this.componentControls.add(controls);
    return () => this.componentControls.delete(controls);
  }
  /**
   * Start a drag gesture on every `motion` component that has this set of drag controls
   * passed into it via the `dragControls` prop.
   *
   * ```jsx
   * dragControls.start(e, {
   *   snapToCursor: true
   * })
   * ```
   *
   * @param event - PointerEvent
   * @param options - Options
   *
   * @public
   */
  start(event, options) {
    this.componentControls.forEach((controls) => {
      controls.start(event.nativeEvent || event, options);
    });
  }
};
var createDragControls = () => new DragControls();
function useDragControls() {
  return useConstant(createDragControls);
}

// ../../../node_modules/framer-motion/dist/es/motion/utils/is-motion-component.mjs
function isMotionComponent(component) {
  return component !== null && typeof component === "object" && motionComponentSymbol in component;
}

// ../../../node_modules/framer-motion/dist/es/motion/utils/unwrap-motion-component.mjs
function unwrapMotionComponent(component) {
  if (isMotionComponent(component)) {
    return component[motionComponentSymbol];
  }
  return void 0;
}

// ../../../node_modules/framer-motion/dist/es/projection/use-instant-layout-transition.mjs
function useInstantLayoutTransition() {
  return startTransition;
}
function startTransition(callback) {
  if (!rootProjectionNode.current)
    return;
  rootProjectionNode.current.isUpdating = false;
  rootProjectionNode.current.blockUpdate();
  callback && callback();
}

// ../../../node_modules/framer-motion/dist/es/utils/use-instant-transition.mjs
import { useEffect as useEffect20 } from "react";
function useInstantTransition() {
  const [forceUpdate, forcedRenderCount] = useForceUpdate();
  const startInstantLayoutTransition = useInstantLayoutTransition();
  useEffect20(() => {
    sync.postRender(() => sync.postRender(() => instantAnimationState.current = false));
  }, [forcedRenderCount]);
  return (callback) => {
    startInstantLayoutTransition(() => {
      instantAnimationState.current = true;
      forceUpdate();
      callback();
    });
  };
}

// ../../../node_modules/framer-motion/dist/es/projection/use-reset-projection.mjs
import * as React11 from "react";
function useResetProjection() {
  const reset = React11.useCallback(() => {
    const root = rootProjectionNode.current;
    if (!root)
      return;
    root.resetTree();
  }, []);
  return reset;
}

// ../../../node_modules/framer-motion/dist/es/animation/optimized-appear/store-id.mjs
var appearStoreId = (id4, value) => `${id4}: ${value}`;

// ../../../node_modules/framer-motion/dist/es/animation/optimized-appear/store.mjs
var appearAnimationStore = /* @__PURE__ */ new Map();

// ../../../node_modules/framer-motion/dist/es/animation/optimized-appear/handoff.mjs
function handoffOptimizedAppearAnimation(id4, name, value, sync2) {
  const storeId = appearStoreId(id4, transformProps.has(name) ? "transform" : name);
  const appearAnimation = appearAnimationStore.get(storeId);
  if (!appearAnimation)
    return 0;
  const { animation, startTime } = appearAnimation;
  const cancelOptimisedAnimation = () => {
    appearAnimationStore.delete(storeId);
    try {
      animation.cancel();
    } catch (e) {
    }
  };
  if (startTime !== null) {
    const sampledTime = performance.now();
    sync2.update(() => {
      if (value.animation) {
        value.animation.currentTime = performance.now() - sampledTime;
      }
    });
    sync2.render(cancelOptimisedAnimation);
    return sampledTime - startTime || 0;
  } else {
    cancelOptimisedAnimation();
    return 0;
  }
}

// ../../../node_modules/framer-motion/dist/es/animation/optimized-appear/start.mjs
function startOptimizedAppearAnimation(element, name, keyframes2, options, onReady) {
  const id4 = element.dataset[optimizedAppearDataId];
  if (!id4)
    return;
  window.HandoffAppearAnimations = handoffOptimizedAppearAnimation;
  const storeId = appearStoreId(id4, name);
  const readyAnimation = animateStyle(
    element,
    name,
    [keyframes2[0], keyframes2[0]],
    /**
     * 10 secs is basically just a super-safe duration to give Chrome
     * long enough to get the animation ready.
     */
    { duration: 1e4, ease: "linear" }
  );
  appearAnimationStore.set(storeId, {
    animation: readyAnimation,
    startTime: null
  });
  const startAnimation = () => {
    readyAnimation.cancel();
    const appearAnimation = animateStyle(element, name, keyframes2, options);
    if (document.timeline) {
      appearAnimation.startTime = document.timeline.currentTime;
    }
    appearAnimationStore.set(storeId, {
      animation: appearAnimation,
      startTime: performance.now()
    });
    if (onReady)
      onReady(appearAnimation);
  };
  if (readyAnimation.ready) {
    readyAnimation.ready.then(startAnimation).catch(noop);
  } else {
    startAnimation();
  }
}

// ../../../node_modules/framer-motion/dist/es/animation/hooks/use-animated-state.mjs
import { useState as useState7, useEffect as useEffect21 } from "react";
var createObject = () => ({});
var StateVisualElement = class extends VisualElement {
  build() {
  }
  measureInstanceViewportBox() {
    return createBox();
  }
  resetTransform() {
  }
  restoreTransform() {
  }
  removeValueFromRenderState() {
  }
  renderInstance() {
  }
  scrapeMotionValuesFromProps() {
    return createObject();
  }
  getBaseTargetFromProps() {
    return void 0;
  }
  readValueFromInstance(_state, key, options) {
    return options.initialState[key] || 0;
  }
  sortInstanceNodePosition() {
    return 0;
  }
  makeTargetAnimatableFromInstance({ transition, transitionEnd, ...target }) {
    const origin = getOrigin(target, transition || {}, this);
    checkTargetForNewValues(this, target, origin);
    return { transition, transitionEnd, ...target };
  }
};
var useVisualState = makeUseVisualState({
  scrapeMotionValuesFromProps: createObject,
  createRenderState: createObject
});
function useAnimatedState(initialState) {
  const [animationState, setAnimationState] = useState7(initialState);
  const visualState = useVisualState({}, false);
  const element = useConstant(() => {
    return new StateVisualElement({ props: {}, visualState }, { initialState });
  });
  useEffect21(() => {
    element.mount({});
    return () => element.unmount();
  }, [element]);
  useEffect21(() => {
    element.setProps({
      onUpdate: (v) => {
        setAnimationState({ ...v });
      }
    });
  }, [setAnimationState, element]);
  const startAnimation = useConstant(() => (animationDefinition) => {
    return animateVisualElement(element, animationDefinition);
  });
  return [animationState, startAnimation];
}

// ../../../node_modules/framer-motion/dist/es/value/use-inverted-scale.mjs
var maxScale = 1e5;
var invertScale = (scale2) => scale2 > 1e-3 ? 1 / scale2 : maxScale;
var hasWarned = false;
function useInvertedScale(scale2) {
  let parentScaleX = useMotionValue(1);
  let parentScaleY = useMotionValue(1);
  const visualElement = useVisualElementContext();
  invariant(!!(scale2 || visualElement), "If no scale values are provided, useInvertedScale must be used within a child of another motion component.");
  warning(hasWarned, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead.");
  hasWarned = true;
  if (scale2) {
    parentScaleX = scale2.scaleX || parentScaleX;
    parentScaleY = scale2.scaleY || parentScaleY;
  } else if (visualElement) {
    parentScaleX = visualElement.getValue("scaleX", 1);
    parentScaleY = visualElement.getValue("scaleY", 1);
  }
  const scaleX = useTransform(parentScaleX, invertScale);
  const scaleY = useTransform(parentScaleY, invertScale);
  return { scaleX, scaleY };
}

export {
  __commonJS,
  __toESM,
  __privateGet,
  __privateAdd,
  __privateSet,
  MotionConfigContext,
  MotionContext,
  useVisualElementContext,
  PresenceContext,
  isBrowser,
  useIsomorphicLayoutEffect,
  LayoutGroupContext,
  SwitchLayoutGroupContext,
  createMotionComponent,
  addScaleCorrector,
  isMotionValue,
  buildTransform,
  clamp,
  isValidMotionProp,
  filterProps,
  resolveMotionValue,
  makeUseVisualState,
  AnimationType,
  useDomEvent,
  addPointerInfo,
  addPointerEvent,
  isDragActive,
  useUnmountEffect,
  pipe,
  usePresence,
  useIsPresent,
  frameData,
  sync,
  MotionValue,
  motionValue,
  checkTargetForNewValues,
  optimizedAppearDataAttribute,
  warning,
  invariant,
  easeIn,
  easeOut,
  easeInOut,
  mix,
  cubicBezier,
  circIn,
  circOut,
  circInOut,
  backOut,
  backIn,
  backInOut,
  anticipate,
  spring,
  delay,
  animateVisualElement,
  animations,
  distance,
  distance2D,
  calcLength,
  createBox,
  VisualElement,
  animate2 as animate,
  FlatTree,
  motion,
  createDomMotionComponent,
  m,
  useForceUpdate,
  AnimatePresence,
  DeprecatedLayoutGroupContext,
  LayoutGroup,
  AnimateSharedLayout,
  MotionConfig,
  LazyMotion,
  useMotionValue,
  transform,
  useTransform,
  Reorder,
  domAnimation,
  domMax,
  useMotionTemplate,
  useSpring,
  useVelocity,
  scroll,
  useScroll,
  useElementScroll,
  useViewportScroll,
  useAnimationFrame,
  useTime,
  useWillChange,
  useMotionValueEvent,
  useReducedMotion,
  useReducedMotionConfig,
  animationControls,
  useAnimationControls,
  useAnimation,
  wrap2 as wrap,
  useCycle,
  useInView,
  DragControls,
  useDragControls,
  isMotionComponent,
  unwrapMotionComponent,
  useInstantLayoutTransition,
  useInstantTransition,
  useResetProjection,
  startOptimizedAppearAnimation,
  useAnimatedState,
  useInvertedScale
};
//# sourceMappingURL=chunk-TQBXZW3J.js.map
