import {
  AnimatePresence,
  AnimationType,
  DeprecatedLayoutGroupContext,
  DragControls,
  FlatTree,
  LayoutGroup,
  LazyMotion,
  MotionConfig,
  MotionConfigContext,
  MotionContext,
  MotionValue,
  PresenceContext,
  Reorder,
  SwitchLayoutGroupContext,
  VisualElement,
  __commonJS,
  __privateAdd,
  __privateGet,
  __privateSet,
  __toESM,
  addPointerEvent,
  addPointerInfo,
  addScaleCorrector,
  animate,
  animateVisualElement,
  animationControls,
  animations,
  anticipate,
  backIn,
  backInOut,
  backOut,
  buildTransform,
  calcLength,
  checkTargetForNewValues,
  circIn,
  circInOut,
  circOut,
  clamp,
  createBox,
  createDomMotionComponent,
  createMotionComponent,
  cubicBezier,
  delay,
  distance,
  distance2D,
  domAnimation,
  domMax,
  easeIn,
  easeInOut,
  easeOut,
  filterProps,
  frameData,
  invariant,
  isBrowser,
  isDragActive,
  isMotionComponent,
  isMotionValue,
  isValidMotionProp,
  m,
  makeUseVisualState,
  mix,
  motion,
  motionValue,
  optimizedAppearDataAttribute,
  pipe,
  resolveMotionValue,
  scroll,
  spring,
  startOptimizedAppearAnimation,
  sync,
  transform,
  unwrapMotionComponent,
  useAnimatedState,
  useAnimation,
  useAnimationControls,
  useAnimationFrame,
  useCycle,
  useDomEvent,
  useDragControls,
  useElementScroll,
  useForceUpdate,
  useInView,
  useInstantLayoutTransition,
  useInstantTransition,
  useInvertedScale,
  useIsPresent,
  useIsomorphicLayoutEffect,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  usePresence,
  useReducedMotion,
  useReducedMotionConfig,
  useResetProjection,
  useScroll,
  useSpring,
  useTime,
  useTransform,
  useUnmountEffect,
  useVelocity,
  useViewportScroll,
  useVisualElementContext,
  useWillChange,
  warning,
  wrap
} from "./chunk-TQBXZW3J.js";

// ../../../node_modules/hsluv/hsluv.js
var require_hsluv = __commonJS({
  "../../../node_modules/hsluv/hsluv.js"(exports, module) {
    var hsluv = hsluv || {};
    hsluv.Geometry = function() {
    };
    hsluv.Geometry.intersectLineLine = function(a, b) {
      var x = (a.intercept - b.intercept) / (b.slope - a.slope);
      var y = a.slope * x + a.intercept;
      return { x, y };
    };
    hsluv.Geometry.distanceFromOrigin = function(point) {
      return Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2));
    };
    hsluv.Geometry.distanceLineFromOrigin = function(line) {
      return Math.abs(line.intercept) / Math.sqrt(Math.pow(line.slope, 2) + 1);
    };
    hsluv.Geometry.perpendicularThroughPoint = function(line, point) {
      var slope = -1 / line.slope;
      var intercept = point.y - slope * point.x;
      return { slope, intercept };
    };
    hsluv.Geometry.angleFromOrigin = function(point) {
      return Math.atan2(point.y, point.x);
    };
    hsluv.Geometry.normalizeAngle = function(angle) {
      var m2 = 2 * Math.PI;
      return (angle % m2 + m2) % m2;
    };
    hsluv.Geometry.lengthOfRayUntilIntersect = function(theta, line) {
      return line.intercept / (Math.sin(theta) - line.slope * Math.cos(theta));
    };
    hsluv.Hsluv = function() {
    };
    hsluv.Hsluv.getBounds = function(L) {
      var result = [];
      var sub1 = Math.pow(L + 16, 3) / 1560896;
      var sub2 = sub1 > hsluv.Hsluv.epsilon ? sub1 : L / hsluv.Hsluv.kappa;
      var _g = 0;
      while (_g < 3) {
        var c = _g++;
        var m1 = hsluv.Hsluv.m[c][0];
        var m2 = hsluv.Hsluv.m[c][1];
        var m3 = hsluv.Hsluv.m[c][2];
        var _g1 = 0;
        while (_g1 < 2) {
          var t = _g1++;
          var top1 = (284517 * m1 - 94839 * m3) * sub2;
          var top2 = (838422 * m3 + 769860 * m2 + 731718 * m1) * L * sub2 - 769860 * t * L;
          var bottom = (632260 * m3 - 126452 * m2) * sub2 + 126452 * t;
          result.push({ slope: top1 / bottom, intercept: top2 / bottom });
        }
      }
      return result;
    };
    hsluv.Hsluv.maxSafeChromaForL = function(L) {
      var bounds = hsluv.Hsluv.getBounds(L);
      var min = Infinity;
      var _g = 0;
      while (_g < bounds.length) {
        var bound = bounds[_g];
        ++_g;
        var length = hsluv.Geometry.distanceLineFromOrigin(bound);
        min = Math.min(min, length);
      }
      return min;
    };
    hsluv.Hsluv.maxChromaForLH = function(L, H) {
      var hrad = H / 360 * Math.PI * 2;
      var bounds = hsluv.Hsluv.getBounds(L);
      var min = Infinity;
      var _g = 0;
      while (_g < bounds.length) {
        var bound = bounds[_g];
        ++_g;
        var length = hsluv.Geometry.lengthOfRayUntilIntersect(hrad, bound);
        if (length >= 0) {
          min = Math.min(min, length);
        }
      }
      return min;
    };
    hsluv.Hsluv.dotProduct = function(a, b) {
      var sum = 0;
      var _g1 = 0;
      var _g = a.length;
      while (_g1 < _g) {
        var i = _g1++;
        sum += a[i] * b[i];
      }
      return sum;
    };
    hsluv.Hsluv.fromLinear = function(c) {
      if (c <= 31308e-7) {
        return 12.92 * c;
      } else {
        return 1.055 * Math.pow(c, 0.4166666666666667) - 0.055;
      }
    };
    hsluv.Hsluv.toLinear = function(c) {
      if (c > 0.04045) {
        return Math.pow((c + 0.055) / 1.055, 2.4);
      } else {
        return c / 12.92;
      }
    };
    hsluv.Hsluv.xyzToRgb = function(tuple) {
      return [hsluv.Hsluv.fromLinear(hsluv.Hsluv.dotProduct(hsluv.Hsluv.m[0], tuple)), hsluv.Hsluv.fromLinear(hsluv.Hsluv.dotProduct(hsluv.Hsluv.m[1], tuple)), hsluv.Hsluv.fromLinear(hsluv.Hsluv.dotProduct(hsluv.Hsluv.m[2], tuple))];
    };
    hsluv.Hsluv.rgbToXyz = function(tuple) {
      var rgbl = [hsluv.Hsluv.toLinear(tuple[0]), hsluv.Hsluv.toLinear(tuple[1]), hsluv.Hsluv.toLinear(tuple[2])];
      return [hsluv.Hsluv.dotProduct(hsluv.Hsluv.minv[0], rgbl), hsluv.Hsluv.dotProduct(hsluv.Hsluv.minv[1], rgbl), hsluv.Hsluv.dotProduct(hsluv.Hsluv.minv[2], rgbl)];
    };
    hsluv.Hsluv.yToL = function(Y) {
      if (Y <= hsluv.Hsluv.epsilon) {
        return Y / hsluv.Hsluv.refY * hsluv.Hsluv.kappa;
      } else {
        return 116 * Math.pow(Y / hsluv.Hsluv.refY, 0.3333333333333333) - 16;
      }
    };
    hsluv.Hsluv.lToY = function(L) {
      if (L <= 8) {
        return hsluv.Hsluv.refY * L / hsluv.Hsluv.kappa;
      } else {
        return hsluv.Hsluv.refY * Math.pow((L + 16) / 116, 3);
      }
    };
    hsluv.Hsluv.xyzToLuv = function(tuple) {
      var X = tuple[0];
      var Y = tuple[1];
      var Z = tuple[2];
      var divider = X + 15 * Y + 3 * Z;
      var varU = 4 * X;
      var varV = 9 * Y;
      if (divider != 0) {
        varU /= divider;
        varV /= divider;
      } else {
        varU = NaN;
        varV = NaN;
      }
      var L = hsluv.Hsluv.yToL(Y);
      if (L == 0) {
        return [0, 0, 0];
      }
      var U = 13 * L * (varU - hsluv.Hsluv.refU);
      var V = 13 * L * (varV - hsluv.Hsluv.refV);
      return [L, U, V];
    };
    hsluv.Hsluv.luvToXyz = function(tuple) {
      var L = tuple[0];
      var U = tuple[1];
      var V = tuple[2];
      if (L == 0) {
        return [0, 0, 0];
      }
      var varU = U / (13 * L) + hsluv.Hsluv.refU;
      var varV = V / (13 * L) + hsluv.Hsluv.refV;
      var Y = hsluv.Hsluv.lToY(L);
      var X = 0 - 9 * Y * varU / ((varU - 4) * varV - varU * varV);
      var Z = (9 * Y - 15 * varV * Y - varV * X) / (3 * varV);
      return [X, Y, Z];
    };
    hsluv.Hsluv.luvToLch = function(tuple) {
      var L = tuple[0];
      var U = tuple[1];
      var V = tuple[2];
      var C = Math.sqrt(U * U + V * V);
      var H;
      if (C < 1e-8) {
        H = 0;
      } else {
        var Hrad = Math.atan2(V, U);
        H = Hrad * 180 / Math.PI;
        if (H < 0) {
          H = 360 + H;
        }
      }
      return [L, C, H];
    };
    hsluv.Hsluv.lchToLuv = function(tuple) {
      var L = tuple[0];
      var C = tuple[1];
      var H = tuple[2];
      var Hrad = H / 360 * 2 * Math.PI;
      var U = Math.cos(Hrad) * C;
      var V = Math.sin(Hrad) * C;
      return [L, U, V];
    };
    hsluv.Hsluv.hsluvToLch = function(tuple) {
      var H = tuple[0];
      var S = tuple[1];
      var L = tuple[2];
      if (L > 99.9999999) {
        return [100, 0, H];
      }
      if (L < 1e-8) {
        return [0, 0, H];
      }
      var max = hsluv.Hsluv.maxChromaForLH(L, H);
      var C = max / 100 * S;
      return [L, C, H];
    };
    hsluv.Hsluv.lchToHsluv = function(tuple) {
      var L = tuple[0];
      var C = tuple[1];
      var H = tuple[2];
      if (L > 99.9999999) {
        return [H, 0, 100];
      }
      if (L < 1e-8) {
        return [H, 0, 0];
      }
      var max = hsluv.Hsluv.maxChromaForLH(L, H);
      var S = C / max * 100;
      return [H, S, L];
    };
    hsluv.Hsluv.hpluvToLch = function(tuple) {
      var H = tuple[0];
      var S = tuple[1];
      var L = tuple[2];
      if (L > 99.9999999) {
        return [100, 0, H];
      }
      if (L < 1e-8) {
        return [0, 0, H];
      }
      var max = hsluv.Hsluv.maxSafeChromaForL(L);
      var C = max / 100 * S;
      return [L, C, H];
    };
    hsluv.Hsluv.lchToHpluv = function(tuple) {
      var L = tuple[0];
      var C = tuple[1];
      var H = tuple[2];
      if (L > 99.9999999) {
        return [H, 0, 100];
      }
      if (L < 1e-8) {
        return [H, 0, 0];
      }
      var max = hsluv.Hsluv.maxSafeChromaForL(L);
      var S = C / max * 100;
      return [H, S, L];
    };
    hsluv.Hsluv.rgbToHex = function(tuple) {
      var h = "#";
      var _g = 0;
      while (_g < 3) {
        var i = _g++;
        var chan = tuple[i];
        var c = Math.round(chan * 255);
        var digit2 = c % 16;
        var digit1 = (c - digit2) / 16 | 0;
        h += hsluv.Hsluv.hexChars.charAt(digit1) + hsluv.Hsluv.hexChars.charAt(digit2);
      }
      return h;
    };
    hsluv.Hsluv.hexToRgb = function(hex2) {
      hex2 = hex2.toLowerCase();
      var ret = [];
      var _g = 0;
      while (_g < 3) {
        var i = _g++;
        var digit1 = hsluv.Hsluv.hexChars.indexOf(hex2.charAt(i * 2 + 1));
        var digit2 = hsluv.Hsluv.hexChars.indexOf(hex2.charAt(i * 2 + 2));
        var n = digit1 * 16 + digit2;
        ret.push(n / 255);
      }
      return ret;
    };
    hsluv.Hsluv.lchToRgb = function(tuple) {
      return hsluv.Hsluv.xyzToRgb(hsluv.Hsluv.luvToXyz(hsluv.Hsluv.lchToLuv(tuple)));
    };
    hsluv.Hsluv.rgbToLch = function(tuple) {
      return hsluv.Hsluv.luvToLch(hsluv.Hsluv.xyzToLuv(hsluv.Hsluv.rgbToXyz(tuple)));
    };
    hsluv.Hsluv.hsluvToRgb = function(tuple) {
      return hsluv.Hsluv.lchToRgb(hsluv.Hsluv.hsluvToLch(tuple));
    };
    hsluv.Hsluv.rgbToHsluv = function(tuple) {
      return hsluv.Hsluv.lchToHsluv(hsluv.Hsluv.rgbToLch(tuple));
    };
    hsluv.Hsluv.hpluvToRgb = function(tuple) {
      return hsluv.Hsluv.lchToRgb(hsluv.Hsluv.hpluvToLch(tuple));
    };
    hsluv.Hsluv.rgbToHpluv = function(tuple) {
      return hsluv.Hsluv.lchToHpluv(hsluv.Hsluv.rgbToLch(tuple));
    };
    hsluv.Hsluv.hsluvToHex = function(tuple) {
      return hsluv.Hsluv.rgbToHex(hsluv.Hsluv.hsluvToRgb(tuple));
    };
    hsluv.Hsluv.hpluvToHex = function(tuple) {
      return hsluv.Hsluv.rgbToHex(hsluv.Hsluv.hpluvToRgb(tuple));
    };
    hsluv.Hsluv.hexToHsluv = function(s) {
      return hsluv.Hsluv.rgbToHsluv(hsluv.Hsluv.hexToRgb(s));
    };
    hsluv.Hsluv.hexToHpluv = function(s) {
      return hsluv.Hsluv.rgbToHpluv(hsluv.Hsluv.hexToRgb(s));
    };
    hsluv.Hsluv.m = [[3.240969941904521, -1.537383177570093, -0.498610760293], [-0.96924363628087, 1.87596750150772, 0.041555057407175], [0.055630079696993, -0.20397695888897, 1.056971514242878]];
    hsluv.Hsluv.minv = [[0.41239079926595, 0.35758433938387, 0.18048078840183], [0.21263900587151, 0.71516867876775, 0.072192315360733], [0.019330818715591, 0.11919477979462, 0.95053215224966]];
    hsluv.Hsluv.refY = 1;
    hsluv.Hsluv.refU = 0.19783000664283;
    hsluv.Hsluv.refV = 0.46831999493879;
    hsluv.Hsluv.kappa = 903.2962962;
    hsluv.Hsluv.epsilon = 0.0088564516;
    hsluv.Hsluv.hexChars = "0123456789abcdef";
    var root = {
      "hsluvToRgb": hsluv.Hsluv.hsluvToRgb,
      "rgbToHsluv": hsluv.Hsluv.rgbToHsluv,
      "hpluvToRgb": hsluv.Hsluv.hpluvToRgb,
      "rgbToHpluv": hsluv.Hsluv.rgbToHpluv,
      "hsluvToHex": hsluv.Hsluv.hsluvToHex,
      "hexToHsluv": hsluv.Hsluv.hexToHsluv,
      "hpluvToHex": hsluv.Hsluv.hpluvToHex,
      "hexToHpluv": hsluv.Hsluv.hexToHpluv,
      "lchToHpluv": hsluv.Hsluv.lchToHpluv,
      "hpluvToLch": hsluv.Hsluv.hpluvToLch,
      "lchToHsluv": hsluv.Hsluv.lchToHsluv,
      "hsluvToLch": hsluv.Hsluv.hsluvToLch,
      "lchToLuv": hsluv.Hsluv.lchToLuv,
      "luvToLch": hsluv.Hsluv.luvToLch,
      "xyzToLuv": hsluv.Hsluv.xyzToLuv,
      "luvToXyz": hsluv.Hsluv.luvToXyz,
      "xyzToRgb": hsluv.Hsluv.xyzToRgb,
      "rgbToXyz": hsluv.Hsluv.rgbToXyz,
      "lchToRgb": hsluv.Hsluv.lchToRgb,
      "rgbToLch": hsluv.Hsluv.rgbToLch
    };
    module.exports = root;
  }
});

// ../../../node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "../../../node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix2 = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__)
        prefix2 = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix2 ? prefix2 + event : event;
      if (!emitter._events[evt])
        emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn)
        emitter._events[evt].push(listener);
      else
        emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0)
        emitter._events = new Events();
      else
        delete emitter._events[evt];
    }
    function EventEmitter2() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      var names = [], events2, name;
      if (this._eventsCount === 0)
        return names;
      for (name in events2 = this._events) {
        if (has.call(events2, name))
          names.push(prefix2 ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events2));
      }
      return names;
    };
    EventEmitter2.prototype.listeners = function listeners(event) {
      var evt = prefix2 ? prefix2 + event : event, handlers = this._events[evt];
      if (!handlers)
        return [];
      if (handlers.fn)
        return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter2.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix2 ? prefix2 + event : event, listeners = this._events[evt];
      if (!listeners)
        return 0;
      if (listeners.fn)
        return 1;
      return listeners.length;
    };
    EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix2 ? prefix2 + event : event;
      if (!this._events[evt])
        return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once)
          this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once)
            this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args)
                for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter2.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter2.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix2 ? prefix2 + event : event;
      if (!this._events[evt])
        return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events2 = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events2.push(listeners[i]);
          }
        }
        if (events2.length)
          this._events[evt] = events2.length === 1 ? events2[0] : events2;
        else
          clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix2 ? prefix2 + event : event;
        if (this._events[evt])
          clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
    EventEmitter2.prefixed = prefix2;
    EventEmitter2.EventEmitter = EventEmitter2;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter2;
    }
  }
});

// ../../../node_modules/process/browser.js
var require_browser = __commonJS({
  "../../../node_modules/process/browser.js"(exports, module) {
    var process13 = module.exports = {};
    var cachedSetTimeout;
    var cachedClearTimeout;
    function defaultSetTimout() {
      throw new Error("setTimeout has not been defined");
    }
    function defaultClearTimeout() {
      throw new Error("clearTimeout has not been defined");
    }
    (function() {
      try {
        if (typeof setTimeout === "function") {
          cachedSetTimeout = setTimeout;
        } else {
          cachedSetTimeout = defaultSetTimout;
        }
      } catch (e) {
        cachedSetTimeout = defaultSetTimout;
      }
      try {
        if (typeof clearTimeout === "function") {
          cachedClearTimeout = clearTimeout;
        } else {
          cachedClearTimeout = defaultClearTimeout;
        }
      } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
      }
    })();
    function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
        return setTimeout(fun, 0);
      }
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
      }
      try {
        return cachedSetTimeout(fun, 0);
      } catch (e) {
        try {
          return cachedSetTimeout.call(null, fun, 0);
        } catch (e2) {
          return cachedSetTimeout.call(this, fun, 0);
        }
      }
    }
    function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
        return clearTimeout(marker);
      }
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
      }
      try {
        return cachedClearTimeout(marker);
      } catch (e) {
        try {
          return cachedClearTimeout.call(null, marker);
        } catch (e2) {
          return cachedClearTimeout.call(this, marker);
        }
      }
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;
    function cleanUpNextTick() {
      if (!draining || !currentQueue) {
        return;
      }
      draining = false;
      if (currentQueue.length) {
        queue = currentQueue.concat(queue);
      } else {
        queueIndex = -1;
      }
      if (queue.length) {
        drainQueue();
      }
    }
    function drainQueue() {
      if (draining) {
        return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;
      var len = queue.length;
      while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
          if (currentQueue) {
            currentQueue[queueIndex].run();
          }
        }
        queueIndex = -1;
        len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
    }
    process13.nextTick = function(fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
          args[i - 1] = arguments[i];
        }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
      }
    };
    function Item(fun, array) {
      this.fun = fun;
      this.array = array;
    }
    Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    process13.title = "browser";
    process13.browser = true;
    process13.env = {};
    process13.argv = [];
    process13.version = "";
    process13.versions = {};
    function noop() {
    }
    process13.on = noop;
    process13.addListener = noop;
    process13.once = noop;
    process13.off = noop;
    process13.removeListener = noop;
    process13.removeAllListeners = noop;
    process13.emit = noop;
    process13.prependListener = noop;
    process13.prependOnceListener = noop;
    process13.listeners = function(name) {
      return [];
    };
    process13.binding = function(name) {
      throw new Error("process.binding is not supported");
    };
    process13.cwd = function() {
      return "/";
    };
    process13.chdir = function(dir) {
      throw new Error("process.chdir is not supported");
    };
    process13.umask = function() {
      return 0;
    };
  }
});

// ../../../node_modules/react-is/cjs/react-is.production.min.js
var require_react_is_production_min = __commonJS({
  "../../../node_modules/react-is/cjs/react-is.production.min.js"(exports) {
    "use strict";
    var b = "function" === typeof Symbol && Symbol.for;
    var c = b ? Symbol.for("react.element") : 60103;
    var d = b ? Symbol.for("react.portal") : 60106;
    var e = b ? Symbol.for("react.fragment") : 60107;
    var f = b ? Symbol.for("react.strict_mode") : 60108;
    var g = b ? Symbol.for("react.profiler") : 60114;
    var h = b ? Symbol.for("react.provider") : 60109;
    var k = b ? Symbol.for("react.context") : 60110;
    var l = b ? Symbol.for("react.async_mode") : 60111;
    var m2 = b ? Symbol.for("react.concurrent_mode") : 60111;
    var n = b ? Symbol.for("react.forward_ref") : 60112;
    var p = b ? Symbol.for("react.suspense") : 60113;
    var q = b ? Symbol.for("react.suspense_list") : 60120;
    var r = b ? Symbol.for("react.memo") : 60115;
    var t = b ? Symbol.for("react.lazy") : 60116;
    var v = b ? Symbol.for("react.block") : 60121;
    var w = b ? Symbol.for("react.fundamental") : 60117;
    var x = b ? Symbol.for("react.responder") : 60118;
    var y = b ? Symbol.for("react.scope") : 60119;
    function z(a) {
      if ("object" === typeof a && null !== a) {
        var u = a.$$typeof;
        switch (u) {
          case c:
            switch (a = a.type, a) {
              case l:
              case m2:
              case e:
              case g:
              case f:
              case p:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case n:
                  case t:
                  case r:
                  case h:
                    return a;
                  default:
                    return u;
                }
            }
          case d:
            return u;
        }
      }
    }
    function A(a) {
      return z(a) === m2;
    }
    exports.AsyncMode = l;
    exports.ConcurrentMode = m2;
    exports.ContextConsumer = k;
    exports.ContextProvider = h;
    exports.Element = c;
    exports.ForwardRef = n;
    exports.Fragment = e;
    exports.Lazy = t;
    exports.Memo = r;
    exports.Portal = d;
    exports.Profiler = g;
    exports.StrictMode = f;
    exports.Suspense = p;
    exports.isAsyncMode = function(a) {
      return A(a) || z(a) === l;
    };
    exports.isConcurrentMode = A;
    exports.isContextConsumer = function(a) {
      return z(a) === k;
    };
    exports.isContextProvider = function(a) {
      return z(a) === h;
    };
    exports.isElement = function(a) {
      return "object" === typeof a && null !== a && a.$$typeof === c;
    };
    exports.isForwardRef = function(a) {
      return z(a) === n;
    };
    exports.isFragment = function(a) {
      return z(a) === e;
    };
    exports.isLazy = function(a) {
      return z(a) === t;
    };
    exports.isMemo = function(a) {
      return z(a) === r;
    };
    exports.isPortal = function(a) {
      return z(a) === d;
    };
    exports.isProfiler = function(a) {
      return z(a) === g;
    };
    exports.isStrictMode = function(a) {
      return z(a) === f;
    };
    exports.isSuspense = function(a) {
      return z(a) === p;
    };
    exports.isValidElementType = function(a) {
      return "string" === typeof a || "function" === typeof a || a === e || a === m2 || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
    };
    exports.typeOf = z;
  }
});

// ../../../node_modules/react-is/index.js
var require_react_is = __commonJS({
  "../../../node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_is_production_min();
    } else {
      module.exports = null;
    }
  }
});

// ../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
    "use strict";
    var reactIs = require_react_is();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys3 = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys3 = keys3.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys3.length; ++i) {
          var key7 = keys3[i];
          if (!KNOWN_STATICS[key7] && !(blacklist && blacklist[key7]) && !(sourceStatics && sourceStatics[key7]) && !(targetStatics && targetStatics[key7])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key7);
            try {
              defineProperty(targetComponent, key7, descriptor);
            } catch (e) {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics;
  }
});

// ../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js
var require_fontfaceobserver_standalone = __commonJS({
  "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(exports, module) {
    (function() {
      function l(a, b) {
        document.addEventListener ? a.addEventListener("scroll", b, false) : a.attachEvent("scroll", b);
      }
      function m2(a) {
        document.body ? a() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function c() {
          document.removeEventListener("DOMContentLoaded", c);
          a();
        }) : document.attachEvent("onreadystatechange", function k() {
          if ("interactive" == document.readyState || "complete" == document.readyState)
            document.detachEvent("onreadystatechange", k), a();
        });
      }
      ;
      function t(a) {
        this.a = document.createElement("div");
        this.a.setAttribute("aria-hidden", "true");
        this.a.appendChild(document.createTextNode(a));
        this.b = document.createElement("span");
        this.c = document.createElement("span");
        this.h = document.createElement("span");
        this.f = document.createElement("span");
        this.g = -1;
        this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
        this.b.appendChild(this.h);
        this.c.appendChild(this.f);
        this.a.appendChild(this.b);
        this.a.appendChild(this.c);
      }
      function u(a, b) {
        a.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + b + ";";
      }
      function z(a) {
        var b = a.a.offsetWidth, c = b + 100;
        a.f.style.width = c + "px";
        a.c.scrollLeft = c;
        a.b.scrollLeft = a.b.scrollWidth + 100;
        return a.g !== b ? (a.g = b, true) : false;
      }
      function A(a, b) {
        function c() {
          var a2 = k;
          z(a2) && a2.a.parentNode && b(a2.g);
        }
        var k = a;
        l(a.b, c);
        l(a.c, c);
        z(a);
      }
      ;
      function B(a, b) {
        var c = b || {};
        this.family = a;
        this.style = c.style || "normal";
        this.weight = c.weight || "normal";
        this.stretch = c.stretch || "normal";
      }
      var C = null, D = null, E = null, F = null;
      function G() {
        if (null === D)
          if (J() && /Apple/.test(window.navigator.vendor)) {
            var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
            D = !!a && 603 > parseInt(a[1], 10);
          } else
            D = false;
        return D;
      }
      function J() {
        null === F && (F = !!document.fonts);
        return F;
      }
      function K() {
        if (null === E) {
          var a = document.createElement("div");
          try {
            a.style.font = "condensed 100px sans-serif";
          } catch (b) {
          }
          E = "" !== a.style.font;
        }
        return E;
      }
      function L(a, b) {
        return [a.style, a.weight, K() ? a.stretch : "", "100px", b].join(" ");
      }
      B.prototype.load = function(a, b) {
        var c = this, k = a || "BESbswy", r = 0, n = b || 3e3, H = (/* @__PURE__ */ new Date()).getTime();
        return new Promise(function(a2, b2) {
          if (J() && !G()) {
            var M = new Promise(function(a3, b3) {
              function e() {
                (/* @__PURE__ */ new Date()).getTime() - H >= n ? b3(Error("" + n + "ms timeout exceeded")) : document.fonts.load(L(c, '"' + c.family + '"'), k).then(function(c2) {
                  1 <= c2.length ? a3() : setTimeout(e, 25);
                }, b3);
              }
              e();
            }), N = new Promise(function(a3, c2) {
              r = setTimeout(function() {
                c2(Error("" + n + "ms timeout exceeded"));
              }, n);
            });
            Promise.race([N, M]).then(
              function() {
                clearTimeout(r);
                a2(c);
              },
              b2
            );
          } else
            m2(function() {
              function v() {
                var b3;
                if (b3 = -1 != f && -1 != g || -1 != f && -1 != h || -1 != g && -1 != h)
                  (b3 = f != g && f != h && g != h) || (null === C && (b3 = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), C = !!b3 && (536 > parseInt(b3[1], 10) || 536 === parseInt(b3[1], 10) && 11 >= parseInt(b3[2], 10))), b3 = C && (f == w && g == w && h == w || f == x && g == x && h == x || f == y && g == y && h == y)), b3 = !b3;
                b3 && (d.parentNode && d.parentNode.removeChild(d), clearTimeout(r), a2(c));
              }
              function I() {
                if ((/* @__PURE__ */ new Date()).getTime() - H >= n)
                  d.parentNode && d.parentNode.removeChild(d), b2(Error("" + n + "ms timeout exceeded"));
                else {
                  var a3 = document.hidden;
                  if (true === a3 || void 0 === a3)
                    f = e.a.offsetWidth, g = p.a.offsetWidth, h = q.a.offsetWidth, v();
                  r = setTimeout(I, 50);
                }
              }
              var e = new t(k), p = new t(k), q = new t(k), f = -1, g = -1, h = -1, w = -1, x = -1, y = -1, d = document.createElement("div");
              d.dir = "ltr";
              u(e, L(c, "sans-serif"));
              u(p, L(c, "serif"));
              u(q, L(c, "monospace"));
              d.appendChild(e.a);
              d.appendChild(p.a);
              d.appendChild(q.a);
              document.body.appendChild(d);
              w = e.a.offsetWidth;
              x = p.a.offsetWidth;
              y = q.a.offsetWidth;
              I();
              A(e, function(a3) {
                f = a3;
                v();
              });
              u(
                e,
                L(c, '"' + c.family + '",sans-serif')
              );
              A(p, function(a3) {
                g = a3;
                v();
              });
              u(p, L(c, '"' + c.family + '",serif'));
              A(q, function(a3) {
                h = a3;
                v();
              });
              u(q, L(c, '"' + c.family + '",monospace'));
            });
        });
      };
      "object" === typeof module ? module.exports = B : (window.FontFaceObserver = B, window.FontFaceObserver.prototype.load = B.prototype.load);
    })();
  }
});

// ../../router/build/computeRelativePath.js
function computeRelativePath(from, to) {
  if (!from.startsWith("/") || !to.startsWith("/")) {
    throw new Error("from/to paths are expected to be absolute");
  }
  const [fromDir] = getDirAndFile(from);
  const [toDir, toFile] = getDirAndFile(to);
  let relativePath = relative(fromDir, toDir);
  if (relativePath === "")
    relativePath = ".";
  if (!relativePath.startsWith(".") && !relativePath.startsWith("/")) {
    relativePath = "./" + relativePath;
  }
  return relativePath + "/" + toFile;
}
function getDirAndFile(path) {
  const index = path.lastIndexOf("/");
  return [path.substring(0, index + 1), path.substring(index + 1)];
}
var CHAR_DOT = 46;
var CHAR_FORWARD_SLASH = 47;
var StringPrototypeCharCodeAt = (str, index) => str.charCodeAt(index);
var StringPrototypeLastIndexOf = (str, searchString) => str.lastIndexOf(searchString);
var StringPrototypeSlice = (str, start, end) => str.slice(start, end);
function relative(from, to) {
  if (from === to)
    return "";
  from = "/" + normalizeString(from);
  to = "/" + normalizeString(to);
  if (from === to)
    return "";
  const fromStart = 1;
  const fromEnd = from.length;
  const fromLen = fromEnd - fromStart;
  const toStart = 1;
  const toLen = to.length - toStart;
  const length = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i = 0;
  for (; i < length; i++) {
    const fromCode = StringPrototypeCharCodeAt(from, fromStart + i);
    if (fromCode !== StringPrototypeCharCodeAt(to, toStart + i))
      break;
    else if (fromCode === CHAR_FORWARD_SLASH)
      lastCommonSep = i;
  }
  if (i === length) {
    if (toLen > length) {
      if (StringPrototypeCharCodeAt(to, toStart + i) === CHAR_FORWARD_SLASH) {
        return StringPrototypeSlice(to, toStart + i + 1);
      }
      if (i === 0) {
        return StringPrototypeSlice(to, toStart + i);
      }
    } else if (fromLen > length) {
      if (StringPrototypeCharCodeAt(from, fromStart + i) === CHAR_FORWARD_SLASH) {
        lastCommonSep = i;
      } else if (i === 0) {
        lastCommonSep = 0;
      }
    }
  }
  let out = "";
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || StringPrototypeCharCodeAt(from, i) === CHAR_FORWARD_SLASH) {
      out += out.length === 0 ? ".." : "/..";
    }
  }
  return `${out}${StringPrototypeSlice(to, toStart + lastCommonSep)}`;
}
var allowAboveRoot = false;
var separator = "/";
var isPathSeparator = (code) => code === CHAR_FORWARD_SLASH;
function normalizeString(path) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let code = 0;
  for (let i = 0; i <= path.length; ++i) {
    if (i < path.length)
      code = StringPrototypeCharCodeAt(path, i);
    else if (isPathSeparator(code))
      break;
    else
      code = CHAR_FORWARD_SLASH;
    if (isPathSeparator(code)) {
      if (lastSlash === i - 1 || dots === 1) {
      } else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || StringPrototypeCharCodeAt(res, res.length - 1) !== CHAR_DOT || StringPrototypeCharCodeAt(res, res.length - 2) !== CHAR_DOT) {
          if (res.length > 2) {
            const lastSlashIndex = StringPrototypeLastIndexOf(res, separator);
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = StringPrototypeSlice(res, 0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - StringPrototypeLastIndexOf(res, separator);
            }
            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length !== 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? `${separator}..` : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += `${separator}${StringPrototypeSlice(path, lastSlash + 1, i)}`;
        else
          res = StringPrototypeSlice(path, lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === CHAR_DOT && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}

// ../../router/build/ErrorBoundary.js
import { Component } from "react";

// ../../router/build/renderPage.js
import React2 from "react";

// ../../router/build/utils.js
import React from "react";
function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isString(value) {
  return typeof value === "string";
}
var preloadKey = "preload";
function isLazyComponentType(componentType) {
  return typeof componentType === "object" && preloadKey in componentType;
}
function lazy(factory) {
  const LazyComponent = React.lazy(factory);
  let factoryPromise;
  let LoadedComponent;
  const Component15 = React.forwardRef(function LazyWithPreload(props, ref) {
    return React.createElement(LoadedComponent !== null && LoadedComponent !== void 0 ? LoadedComponent : LazyComponent, Object.assign(ref ? { ref } : {}, props));
  });
  Component15.preload = () => {
    if (!factoryPromise) {
      factoryPromise = factory().then((module) => {
        LoadedComponent = module.default;
        return LoadedComponent;
      });
    }
    return factoryPromise;
  };
  return Component15;
}
function getRouteElementId(route, hash2) {
  if (hash2 && route) {
    if (route.elements && hash2 in route.elements) {
      return route.elements[hash2];
    } else {
      return hash2;
    }
  }
  return void 0;
}

// ../../router/build/renderPage.js
function renderPage(Page4, defaultPageStyle = {}) {
  const element = React2.isValidElement(Page4) ? React2.cloneElement(Page4, { style: defaultPageStyle }) : React2.createElement(Page4, { style: defaultPageStyle });
  if (isLazyComponentType(element.type)) {
    return React2.createElement(React2.Suspense, { fallback: null }, element);
  }
  return element;
}

// ../../router/build/ErrorBoundary.js
var NotFoundError = class extends Error {
};
var ErrorBoundary = class extends Component {
  constructor(props) {
    super(props);
    this.state = { error: void 0, forceUpdateKey: props.forceUpdateKey };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  /** Resets the error when forceUpdateKey gets bumped. */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.forceUpdateKey !== prevState.forceUpdateKey) {
      const newState = {
        forceUpdateKey: nextProps.forceUpdateKey
      };
      if (prevState.error) {
        newState.error = void 0;
      }
      return newState;
    }
    return null;
  }
  render() {
    if (this.state.error === void 0) {
      return this.props.children;
    }
    if (!(this.state.error instanceof NotFoundError)) {
      throw this.state.error;
    }
    const { notFoundPage, defaultPageStyle } = this.props;
    if (!notFoundPage) {
      throw this.state.error;
    }
    return renderPage(notFoundPage, defaultPageStyle);
  }
};

// ../../router/build/history.js
import React3 from "react";

// ../../router/build/pathVariables.js
var pathVariablesRegExpRaw = ":([a-zA-Z][a-zA-Z0-9_]*)";
var pathVariablesRegExp = new RegExp(pathVariablesRegExpRaw, "g");

// ../../router/build/history.js
function pushRouteState(routeId, route, { currentRoutePath, hash: hash2, pathVariables } = {}) {
  const { path } = route;
  if (path) {
    try {
      const newPath = getPathForRoute(route, { currentRoutePath, hash: hash2, pathVariables });
      window.history.pushState({ routeId, hash: hash2, pathVariables }, "", newPath);
    } catch {
    }
  }
}
function useReplaceInitialState({ disabled, routeId, initialPathVariables }) {
  React3.useEffect(() => {
    if (disabled)
      return;
    window.history.replaceState({ routeId, pathVariables: initialPathVariables }, "");
  }, []);
}
function usePopStateHandler(setCurrentRouteId) {
  const popStateHandler = React3.useCallback(({ state }) => {
    if (!isObject(state))
      return;
    const { routeId, pathVariables } = state;
    if (!isString(routeId))
      return;
    setCurrentRouteId(routeId, isObject(pathVariables) ? pathVariables : void 0);
  }, [setCurrentRouteId]);
  React3.useEffect(() => {
    window.addEventListener("popstate", popStateHandler);
    return () => window.removeEventListener("popstate", popStateHandler);
  }, [popStateHandler]);
}
function getHashForRoute(hash2, route, hashVariables) {
  const resolvedHash = getRouteElementId(route, hash2);
  if (!resolvedHash)
    return void 0;
  const variables = Object.assign({}, route === null || route === void 0 ? void 0 : route.elements, hashVariables);
  return resolvedHash.replace(pathVariablesRegExp, (m2, p1) => {
    var _a;
    return String((_a = variables[p1]) !== null && _a !== void 0 ? _a : m2);
  });
}
function getPathForRoute(route, { currentRoutePath, hash: hash2, pathVariables, hashVariables, relative: relative2 = true }) {
  var _a;
  const currentPath = currentRoutePath !== null && currentRoutePath !== void 0 ? currentRoutePath : "/";
  const targetPath = (_a = route === null || route === void 0 ? void 0 : route.path) !== null && _a !== void 0 ? _a : "/";
  let path = targetPath;
  if (pathVariables) {
    path = path.replace(pathVariablesRegExp, (m2, p1) => {
      var _a2;
      return String((_a2 = pathVariables[p1]) !== null && _a2 !== void 0 ? _a2 : m2);
    });
  }
  if (relative2) {
    path = computeRelativePath(currentPath, path);
  }
  const resolvedHash = getHashForRoute(hash2, route, hashVariables);
  return resolvedHash ? `${path}#${resolvedHash}` : path;
}

// ../../router/build/inferInitialRouteFromPath.js
var memoPathRoutes;
var memoPaths;
var lastRoutes;
function getRouteInfoMemo(routes) {
  if (lastRoutes !== routes) {
    memoPathRoutes = {};
    for (const [routeId, { path }] of Object.entries(routes)) {
      if (path)
        memoPathRoutes[path] = { path, depth: pathDepth(path), routeId };
    }
    memoPaths = Object.values(memoPathRoutes);
    memoPaths.sort(({ depth: depth1 }, { depth: depth2 }) => depth2 - depth1);
    lastRoutes = routes;
  }
  return [memoPathRoutes, memoPaths];
}
function inferInitialRouteFromPath(routes, decodedLocationPath, fallback = true) {
  const [pathRoutes, paths] = getRouteInfoMemo(routes);
  const exactMatch = pathRoutes[decodedLocationPath];
  if (exactMatch) {
    const match = matchPath(decodedLocationPath, exactMatch.path);
    if (match.isMatch)
      return { routeId: exactMatch.routeId, pathVariables: match.pathVariables };
  }
  for (const { path, routeId } of paths) {
    const match = matchPath(decodedLocationPath, path);
    if (match.isMatch)
      return { routeId, pathVariables: match.pathVariables };
  }
  if (!fallback)
    throw new Error("No exact match found for path");
  const rootPath = pathRoutes["/"];
  if (rootPath)
    return { routeId: rootPath.routeId };
  const firstRoute = Object.keys(routes)[0];
  if (!firstRoute)
    throw new Error("Router should not have undefined routes");
  return { routeId: firstRoute };
}
function pathDepth(path) {
  const pathWithTrimmedSlashes = path.replace(/(?:^\/|\/$)/g, "");
  if (pathWithTrimmedSlashes === "")
    return 0;
  return pathWithTrimmedSlashes.split("/").length;
}
function matchPath(path, routePath) {
  const pathVariablesKeys = [];
  const safeRoutePath = escapeStringRegExp(routePath);
  const routePathRegExpString = safeRoutePath.replace(pathVariablesRegExp, (_, name) => {
    pathVariablesKeys.push(name);
    return "([^/]+)";
  });
  const routePathRegExp = new RegExp(routePathRegExpString + "$");
  const matches = path.match(routePathRegExp);
  if (!matches)
    return { isMatch: false };
  if (matches.length === 1)
    return { isMatch: true };
  const pathVariables = {};
  const pathVariablesValues = matches.slice(1);
  for (let i = 0; i < pathVariablesKeys.length; ++i) {
    const key7 = pathVariablesKeys[i];
    if (key7 === void 0)
      continue;
    const value = pathVariablesValues[i];
    const existingValue = pathVariables[key7];
    if (existingValue) {
      if (existingValue !== value) {
        return { isMatch: false };
      } else {
        continue;
      }
    }
    if (value === void 0) {
      throw new Error("Path variable values cannot be undefined");
    }
    pathVariables[key7] = value;
  }
  return { isMatch: true, pathVariables };
}
function escapeStringRegExp(string) {
  return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}

// ../../router/build/isRoute.js
var key = "page";
function isRoute(route) {
  return isObject(route) && key in route && route.page !== void 0;
}

// ../../router/build/Router.js
import React7 from "react";

// ../../router/build/isSamePage.js
function isSamePage(a, b) {
  if (a.routeId !== b.routeId)
    return false;
  if (a.pathVariables === b.pathVariables)
    return true;
  const aPathVariables = a.pathVariables || {};
  const bPathVariables = b.pathVariables || {};
  return aPathVariables.length === bPathVariables.length && Object.keys(aPathVariables).every((key7) => aPathVariables[key7] === bPathVariables[key7]);
}

// ../../router/build/RouterContext.js
import React5 from "react";

// ../../router/build/useGetRouteCallback.js
import React4 from "react";
function useGetRouteCallback(routes) {
  return React4.useCallback((routeId) => routes[routeId], [routes]);
}

// ../../router/build/RouterContext.js
var RouterContext = React5.createContext({});
function RouterAPIProvider({ api, children }) {
  return React5.createElement(RouterContext.Provider, { value: api }, children);
}
function useRouter() {
  return React5.useContext(RouterContext);
}
function RoutesProvider({ routes, children }) {
  const getRoute = useGetRouteCallback(routes);
  return React5.createElement(RouterContext.Provider, { value: { getRoute } }, children);
}

// ../../router/build/useForceUpdate.js
import React6 from "react";
function useForceUpdate2() {
  const [_, setForcedRenderCount] = React6.useState(0);
  return [_, React6.useCallback(() => setForcedRenderCount((v) => v + 1), [])];
}

// ../../router/build/Router.js
function Router({ defaultPageStyle, disableHistory, initialPathVariables, initialRoute, notFoundPage, routes }) {
  useReplaceInitialState({
    disabled: disableHistory,
    routeId: initialRoute,
    initialPathVariables
  });
  const currentRouteRef = React7.useRef(initialRoute);
  const currentPathVariablesRef = React7.useRef(initialPathVariables);
  const nextElementRef = React7.useRef();
  const nextSmoothScrollRef = React7.useRef();
  const [dep, forceUpdate] = useForceUpdate2();
  const setCurrentRouteId = React7.useCallback((routeId, pathVariables) => {
    currentRouteRef.current = routeId;
    currentPathVariablesRef.current = pathVariables;
    forceUpdate();
  }, [forceUpdate]);
  React7.useLayoutEffect(() => {
    if (!nextElementRef.current)
      return;
    const element = document.getElementById(nextElementRef.current);
    if (!element)
      return;
    scrollElementIntoView(element, nextSmoothScrollRef.current);
  }, [dep]);
  usePopStateHandler(setCurrentRouteId);
  const navigate = React7.useCallback((routeId, hash2, pathVariables, smoothScroll) => {
    var _a, _b;
    const newRoute = routes[routeId];
    if (pathVariables) {
      const inUse = /* @__PURE__ */ new Set();
      const path = (_a = newRoute === null || newRoute === void 0 ? void 0 : newRoute.path) !== null && _a !== void 0 ? _a : "/";
      for (const match of path.matchAll(pathVariablesRegExp)) {
        const usedVariable = match[1];
        if (usedVariable === void 0) {
          throw new Error("A matching path variable should not be undefined");
        }
        inUse.add(usedVariable);
      }
      pathVariables = Object.fromEntries(Object.entries(pathVariables).filter(([key7]) => inUse.has(key7)));
    }
    const routeElementId = getRouteElementId(newRoute, hash2);
    if (isSamePage({ routeId: currentRouteRef.current, pathVariables: currentPathVariablesRef.current }, { routeId, pathVariables })) {
      if (((_b = window.history.state) === null || _b === void 0 ? void 0 : _b.hash) !== hash2) {
        if (!disableHistory) {
          const route = routes[routeId];
          if (route) {
            pushRouteState(routeId, route, {
              currentRoutePath: route.path,
              pathVariables,
              hash: hash2
            });
          }
        }
      }
      nextElementRef.current = void 0;
      nextSmoothScrollRef.current = void 0;
      if (routeElementId) {
        const element = document.getElementById(routeElementId);
        if (!element)
          return;
        scrollElementIntoView(element, smoothScroll);
      } else {
        window.scrollTo(0, 0);
      }
      return;
    }
    if (!newRoute)
      return;
    if (!disableHistory) {
      const currentRoute = routes[currentRouteRef.current];
      pushRouteState(routeId, newRoute, {
        currentRoutePath: currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.path,
        hash: hash2,
        pathVariables
      });
    }
    if (routeElementId) {
      nextElementRef.current = routeElementId;
      nextSmoothScrollRef.current = smoothScroll;
    } else {
      window.scrollTo(0, 0);
      nextElementRef.current = void 0;
      nextSmoothScrollRef.current = void 0;
    }
    setCurrentRouteId(routeId, pathVariables);
  }, [routes, disableHistory, setCurrentRouteId]);
  const getRoute = useGetRouteCallback(routes);
  const currentRouteId = currentRouteRef.current;
  const currentPathVariables = currentPathVariablesRef.current;
  const api = React7.useMemo(() => ({ navigate, getRoute, currentRouteId, currentPathVariables, routes }), [navigate, getRoute, currentRouteId, currentPathVariables, routes]);
  const current = routes[currentRouteRef.current];
  if (!current) {
    throw new Error(`Router cannot find route for ${currentRouteRef.current}`);
  }
  return React7.createElement(
    RouterAPIProvider,
    { api },
    React7.createElement(ErrorBoundary, { notFoundPage, defaultPageStyle, forceUpdateKey: dep }, renderPage(current.page, defaultPageStyle))
  );
}
function scrollElementIntoView(element, smoothScroll) {
  const scrollIntoViewOptions = smoothScroll ? { behavior: "smooth", block: "start", inline: "nearest" } : void 0;
  element.scrollIntoView(scrollIntoViewOptions);
}

// ../../router/build/useCurrentRoute.js
import React8, { useContext } from "react";
var CurrentRouteContext = React8.createContext(void 0);
function useCurrentRoute() {
  var _a;
  const router = useRouter();
  const override = useContext(CurrentRouteContext);
  const id = override !== null && override !== void 0 ? override : router.currentRouteId;
  if (!id)
    return void 0;
  const route = (_a = router.getRoute) === null || _a === void 0 ? void 0 : _a.call(router, id);
  if (!route)
    return void 0;
  return {
    ...route,
    id,
    pathVariables: override ? void 0 : router.currentPathVariables
  };
}
function useCurrentRouteId() {
  var _a;
  return (_a = useCurrentRoute()) === null || _a === void 0 ? void 0 : _a.id;
}

// ../../router/build/useCurrentPathVariables.js
function useCurrentPathVariables() {
  var _a;
  return (_a = useCurrentRoute()) === null || _a === void 0 ? void 0 : _a.pathVariables;
}

// ../../router/build/useRoute.js
function useRoute(routeId) {
  var _a;
  const routerAPI = useRouter();
  if (!routeId)
    return void 0;
  return (_a = routerAPI.getRoute) === null || _a === void 0 ? void 0 : _a.call(routerAPI, routeId);
}

// ../../router/build/useRouteAnchor.js
import React10 from "react";

// ../../router/build/useRoutePreloader.js
import React9 from "react";
function useRoutePreloader(routeIds, enabled = true) {
  const { getRoute } = useRouter();
  React9.useEffect(() => {
    if (!getRoute || !enabled)
      return;
    for (const routeId of routeIds) {
      const route = getRoute(routeId);
      if (route === null || route === void 0 ? void 0 : route.page)
        preloadComponent(route.page);
    }
  }, [routeIds, getRoute, enabled]);
}
function preloadComponent(component) {
  if (component && !React9.isValidElement(component) && isLazyComponentType(component)) {
    void component.preload();
  }
}

// ../../router/build/useRouteAnchor.js
function useRouteAnchor(routeId, { elementId, hash: linkHash } = {}) {
  const { navigate } = useRouter();
  const route = useRoute(routeId);
  const currentRouteId = useCurrentRouteId();
  const currentRoute = useRoute(currentRouteId !== null && currentRouteId !== void 0 ? currentRouteId : "");
  useRoutePreloader([routeId], true);
  const hash2 = linkHash !== null && linkHash !== void 0 ? linkHash : elementId;
  const href = React10.useMemo(() => getPathForRoute(route, { currentRoutePath: currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.path, hash: hash2 }), [currentRoute, hash2, route]);
  const navigateToRoute = React10.useCallback(() => navigate === null || navigate === void 0 ? void 0 : navigate(routeId, hash2), [hash2, navigate, routeId]);
  const onClick = React10.useCallback((event) => {
    event.preventDefault();
    navigateToRoute();
  }, [navigateToRoute]);
  return { onClick, href };
}

// ../../router/build/useRouteElementId.js
import React11 from "react";
function useRouteElementId(id, targetRouteId) {
  var _a;
  const currentRoute = useCurrentRoute();
  const route = (_a = useRoute(targetRouteId)) !== null && _a !== void 0 ? _a : currentRoute;
  return React11.useMemo(() => getRouteElementId(route, id), [id, route]);
}

// ../../router/build/useRouteHandler.js
import React12 from "react";
function useRouteHandler(routeId, preload = false, elementId) {
  const { navigate } = useRouter();
  useRoutePreloader([routeId], preload);
  const handler = React12.useCallback(() => navigate === null || navigate === void 0 ? void 0 : navigate(routeId, elementId), [navigate, elementId, routeId]);
  return handler;
}

// ../../library/src/utils/warnOnce.ts
var warningMessages = /* @__PURE__ */ new Set();
function warnOnce(keyMessage, ...rest) {
  if (warningMessages.has(keyMessage))
    return;
  warningMessages.add(keyMessage);
  console.warn(keyMessage, ...rest);
}

// ../../library/src/utils/deprecation.ts
function deprecationWarning(removedItem, removalVersion, replacement) {
  const replacementText = replacement ? `, use ${replacement} instead` : "";
  const warningText = `Deprecation warning: ${removedItem} will be removed in version ${removalVersion}${replacementText}.`;
  warnOnce(warningText);
}

// ../../library/src/animation/Animatable/Observers.ts
var Observers = class {
  constructor() {
    this.observers = /* @__PURE__ */ new Set();
    this.transactions = {};
  }
  add(observer) {
    this.observers.add(observer);
    let isCalled = false;
    return () => {
      if (isCalled) {
        return;
      }
      isCalled = true;
      this.remove(observer);
    };
  }
  remove(observer) {
    this.observers.delete(observer);
  }
  notify(change, transaction) {
    if (transaction) {
      const accumulatedChange = this.transactions[transaction] || change;
      accumulatedChange.value = change.value;
      this.transactions[transaction] = accumulatedChange;
    } else {
      this.callObservers(change);
    }
  }
  finishTransaction(transaction) {
    const accumulatedChange = this.transactions[transaction];
    delete this.transactions[transaction];
    return this.callObservers(accumulatedChange, transaction);
  }
  callObservers(change, transaction) {
    const finishObservers = [];
    new Set(this.observers).forEach((observer) => {
      if (typeof observer === "function") {
        observer(change, transaction);
      } else {
        observer.update(change, transaction);
        finishObservers.push(observer.finish);
      }
    });
    return finishObservers;
  }
};

// ../../library/src/animation/Animatable/Animatable.ts
var Animatable = /* @__PURE__ */ (() => {
  function Animatable2(value) {
    deprecationWarning("Animatable()", "2.0.0", "the new animation API (https://www.framer.com/api/animation/)");
    return isAnimatable(value) ? value : new AnimatableValue(value);
  }
  Animatable2.transaction = (update) => {
    const transactionId = Math.random();
    const updatedValues = /* @__PURE__ */ new Set();
    const updater = (animatable, value) => {
      animatable.set(value, transactionId);
      updatedValues.add(animatable);
    };
    update(updater, transactionId);
    const finishObservers = [];
    updatedValues.forEach((value) => {
      finishObservers.push(...value.finishTransaction(transactionId));
    });
    finishObservers.forEach((finish) => {
      finish(transactionId);
    });
  };
  Animatable2.getNumber = (value, defaultValue = 0) => {
    return Animatable2.get(value, defaultValue);
  };
  Animatable2.get = (value, defaultValue) => {
    if (value === void 0 || value === null) {
      return defaultValue;
    }
    if (isAnimatable(value)) {
      return value.get();
    }
    return value;
  };
  Animatable2.objectToValues = (object) => {
    if (!object) {
      return object;
    }
    const result = {};
    for (const key7 in object) {
      const value = object[key7];
      if (isAnimatable(value)) {
        result[key7] = value.get();
      } else {
        result[key7] = value;
      }
    }
    return result;
  };
  return Animatable2;
})();
var onUpdateKey = "onUpdate";
var finishTransactionKey = "finishTransaction";
function isAnimatable(value) {
  return value !== null && typeof value === "object" && onUpdateKey in value && value[onUpdateKey] instanceof Function && finishTransactionKey in value && value[finishTransactionKey] instanceof Function;
}
function animatableInterpolation(value, currentInterpolation) {
  return {
    interpolate(from, to) {
      const fromValue = from.get();
      const toValue = to.get();
      const result = Animatable(fromValue);
      return (progress2) => {
        const v = currentInterpolation.interpolate(fromValue, toValue)(progress2);
        result.set(v);
        return result;
      };
    },
    difference(from, to) {
      const v = from.get();
      return currentInterpolation.difference(v, to.get());
    }
  };
}
var AnimatableValue = class {
  constructor(value) {
    this.value = value;
    this.observers = new Observers();
  }
  static interpolationFor(value, currentInterpolation) {
    if (isAnimatable(value)) {
      return animatableInterpolation(value, currentInterpolation);
    }
  }
  get() {
    return this.value;
  }
  set(value, transaction) {
    const oldValue = this.value;
    if (isAnimatable(value)) {
      value = value.get();
    }
    this.value = value;
    const change = {
      value,
      oldValue
    };
    this.observers.notify(change, transaction);
  }
  finishTransaction(transaction) {
    return this.observers.finishTransaction(transaction);
  }
  onUpdate(handler) {
    return this.observers.add(handler);
  }
};

// ../../library/src/render/utils/isMotionValue.ts
var isMotionValue2 = (v) => v instanceof MotionValue;

// ../../library/src/render/utils/roundedNumber.ts
function roundedNumber(value, decimals) {
  const d = Math.round(Math.abs(decimals));
  const multiplier = Math.pow(10, d);
  return Math.round(value * multiplier) / multiplier;
}
function roundedNumberString(value, decimals) {
  const result = value.toFixed(decimals);
  if (decimals === 0) {
    return result;
  }
  return result.replace(/\.?0+$/, "");
}
function roundWithOffset(value, offset) {
  if (offset === 0) {
    return Math.round(value);
  }
  offset -= offset | 0;
  if (offset < 0) {
    offset = 1 - offset;
  }
  return Math.round(value - offset) + offset;
}

// ../../library/src/render/types/Point.ts
function Point(x, y) {
  return { x, y };
}
((Point3) => {
  Point3.add = (...args) => {
    return args.reduce(
      (previousValue, currentValue) => {
        return { x: previousValue.x + currentValue.x, y: previousValue.y + currentValue.y };
      },
      { x: 0, y: 0 }
    );
  };
  Point3.subtract = (a, b) => {
    return { x: a.x - b.x, y: a.y - b.y };
  };
  Point3.multiply = (a, b) => {
    return { x: a.x * b, y: a.y * b };
  };
  Point3.divide = (a, b) => {
    return { x: a.x / b, y: a.y / b };
  };
  Point3.absolute = (point) => {
    return {
      x: Math.abs(point.x),
      y: Math.abs(point.y)
    };
  };
  Point3.reverse = (point) => {
    return {
      x: point.x * -1,
      y: point.y * -1
    };
  };
  Point3.pixelAligned = (point, offset = { x: 0, y: 0 }) => {
    return {
      x: roundWithOffset(point.x, offset.x),
      y: roundWithOffset(point.y, offset.y)
    };
  };
  Point3.distance = (a, b) => {
    const deltaX = Math.abs(a.x - b.x);
    const deltaY = Math.abs(a.y - b.y);
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  };
  Point3.angle = (a, b) => {
    return Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI - 90;
  };
  Point3.isEqual = (a, b) => {
    return a.x === b.x && a.y === b.y;
  };
  Point3.rotationNormalizer = () => {
    let lastValue;
    return (value) => {
      if (typeof lastValue !== "number") {
        lastValue = value;
      }
      const diff = lastValue - value;
      const maxDiff = Math.abs(diff) + 180;
      const nTimes = Math.floor(maxDiff / 360);
      if (diff < 180) {
        value -= nTimes * 360;
      }
      if (diff > 180) {
        value += nTimes * 360;
      }
      lastValue = value;
      return value;
    };
  };
  function center(a, b) {
    return {
      x: (a.x + b.x) / 2,
      y: (a.y + b.y) / 2
    };
  }
  Point3.center = center;
})(Point || (Point = {}));

// ../../library/src/animation/Animators/BezierAnimator.ts
var BezierDefaults = {
  curve: "ease" /* Ease */,
  duration: 1
};
function controlPointsForCurve(curve) {
  switch (curve) {
    case "linear" /* Linear */:
      return [0, 0, 1, 1];
    case "ease" /* Ease */:
      return [0.25, 0.1, 0.25, 1];
    case "ease-in" /* EaseIn */:
      return [0.42, 0, 1, 1];
    case "ease-out" /* EaseOut */:
      return [0, 0, 0.58, 1];
    case "ease-in-out" /* EaseInOut */:
      return [0.42, 0, 0.58, 1];
  }
}
var BezierAnimator = class {
  constructor(options, interpolation) {
    this.interpolation = interpolation;
    this.progress = 0;
    this.next = (delta) => {
      const { duration } = this.options;
      this.progress += delta / duration;
      const value = this.unitBezier.solve(this.progress, this.solveEpsilon(duration));
      this.current = this.interpolator(value);
      return this.current;
    };
    this.options = { ...BezierDefaults, ...options };
    let controlPoints;
    if (typeof this.options.curve === "string") {
      controlPoints = controlPointsForCurve(this.options.curve);
    } else {
      controlPoints = this.options.curve;
    }
    const [p1x, p1y, p2x, p2y] = controlPoints;
    this.unitBezier = new UnitBezier(Point(p1x, p1y), Point(p2x, p2y));
  }
  setFrom(value) {
    this.current = value;
    this.updateInterpolator();
  }
  setTo(value) {
    this.destination = value;
    this.updateInterpolator();
  }
  isReady() {
    return this.interpolator !== void 0;
  }
  updateInterpolator() {
    if (this.current === void 0 || this.destination === void 0) {
      return;
    }
    this.interpolator = this.interpolation.interpolate(this.current, this.destination);
  }
  isFinished() {
    return this.progress >= 1;
  }
  solveEpsilon(duration) {
    return 1 / (200 * duration);
  }
};
var UnitBezier = class {
  constructor(point1, point2) {
    this.c = Point.multiply(point1, 3);
    this.b = Point.subtract(Point.multiply(Point.subtract(point2, point1), 3), this.c);
    this.a = Point.subtract(Point.subtract(Point(1, 1), this.c), this.b);
  }
  solve(x, epsilon2) {
    return this.sampleY(this.solveForT(x, epsilon2));
  }
  sampleX(t) {
    return ((this.a.x * t + this.b.x) * t + this.c.x) * t;
  }
  sampleY(t) {
    return ((this.a.y * t + this.b.y) * t + this.c.y) * t;
  }
  sampleDerivativeX(t) {
    return (3 * this.a.x * t + 2 * this.b.x) * t + this.c.x;
  }
  solveForT(x, epsilon2) {
    let t0, t1, t2, x2, d2, i;
    t2 = x;
    for (i = 0; i < 8; ++i) {
      x2 = this.sampleX(t2) - x;
      if (Math.abs(x2) < epsilon2)
        return t2;
      d2 = this.sampleDerivativeX(t2);
      if (Math.abs(d2) < epsilon2)
        break;
      t2 = t2 - x2 / d2;
    }
    t0 = 0;
    t1 = 1;
    t2 = x;
    if (t2 < t0)
      return t0;
    if (t2 > t1)
      return t1;
    while (t0 < t1) {
      x2 = this.sampleX(t2);
      if (Math.abs(x2 - x) < epsilon2)
        return t2;
      if (x > x2)
        t0 = t2;
      else
        t1 = t2;
      t2 = (t1 - t0) * 0.5 + t0;
    }
    return t2;
  }
};

// ../../library/src/animation/Animators/Integrator.ts
var Integrator = class {
  constructor(accelerationFunction) {
    this.accelerationForState = accelerationFunction;
  }
  integrateState(state, dt) {
    const a = this.evaluateState(state);
    const b = this.evaluateStateWithDerivative(state, dt * 0.5, a);
    const c = this.evaluateStateWithDerivative(state, dt * 0.5, b);
    const d = this.evaluateStateWithDerivative(state, dt, c);
    const dxdt = 1 / 6 * (a.dx + 2 * (b.dx + c.dx) + d.dx);
    const dvdt = 1 / 6 * (a.dv + 2 * (b.dv + c.dv) + d.dv);
    state.x = state.x + dxdt * dt;
    state.v = state.v + dvdt * dt;
    return state;
  }
  evaluateState(initialState2) {
    const dv = this.accelerationForState(initialState2);
    return { dx: initialState2.v, dv };
  }
  evaluateStateWithDerivative(initialState2, dt, derivative) {
    const state = {
      x: initialState2.x + derivative.dx * dt,
      v: initialState2.v + derivative.dv * dt
    };
    const output = {
      dx: state.v,
      dv: this.accelerationForState(state)
    };
    return output;
  }
};

// ../../library/src/animation/Animators/FrictionAnimator.ts
var FrictionAnimator = class {
  constructor(options) {
    this.options = {
      velocity: 0,
      friction: 2,
      tolerance: 1 / 10
    };
    Object.assign(this.options, options);
    this.state = {
      x: 0,
      v: this.options.velocity
    };
    this.integrator = new Integrator((state) => -(this.options.friction * state.v));
  }
  setFrom(value) {
    this.state.x = value;
  }
  setTo(value) {
  }
  setVelocity(velocity) {
    this.state.v = velocity;
  }
  getState() {
    return this.state;
  }
  isReady() {
    return true;
  }
  next(delta) {
    this.state = this.integrator.integrateState(this.state, delta);
    return this.state.x;
  }
  isFinished() {
    return Math.abs(this.state.v) < this.options.tolerance;
  }
};

// ../../library/src/interpolation/Interpolation.ts
function isInterpolatable(value) {
  return typeof value === "function" && value.interpolationFor && typeof value.interpolationFor === "function";
}
var Interpolation = {
  /**
   * @param from -
   * @param to -
   * @internal
   */
  handleUndefined: (from, to) => {
    if (from === void 0) {
      from = to;
    }
    if (to === void 0) {
      to = from;
    }
    return [from, to];
  }
};

// ../../library/src/interpolation/NumberInterpolation.ts
var NumberInterpolation = {
  interpolate(from, to) {
    ;
    [from, to] = Interpolation.handleUndefined(from, to);
    const a1 = +from;
    const b1 = to - a1;
    return (progress2) => {
      const value = a1 + b1 * progress2;
      return value;
    };
  },
  difference(from, to) {
    return to - from;
  }
};

// ../../library/src/animation/Animators/SpringCurveValueConverter.ts
var epsilon = 1e-3;
var minDuration = 0.01;
var maxDuration = 10;
var minDamping = Number.MIN_VALUE;
var maxDamping = 1;
function approximateRoot(func, derivative, initialGuess, times = 12) {
  let result = initialGuess;
  for (let i = 1, end = times, asc = 1 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
    result = result - func(result) / derivative(result);
  }
  return result;
}
function angularFrequency(undampedFrequency, dampingRatio) {
  return undampedFrequency * Math.sqrt(1 - Math.pow(dampingRatio, 2));
}
var SpringCurveValueConverter = {
  computeDampingRatio: (tension, friction, mass = 1) => {
    return friction / (2 * Math.sqrt(mass * tension));
  },
  // Tries to compute the duration of a spring,
  // but can't for certain velocities and if dampingRatio >= 1
  // In those cases it will return null
  computeDuration: (tension, friction, velocity = 0, mass = 1) => {
    let duration;
    const dampingRatio = SpringCurveValueConverter.computeDampingRatio(tension, friction);
    const undampedFrequency = Math.sqrt(tension / mass);
    if (dampingRatio < 1) {
      const a = Math.sqrt(1 - Math.pow(dampingRatio, 2));
      const b = velocity / (a * undampedFrequency);
      const c = dampingRatio / a;
      const d = -((b - c) / epsilon);
      if (d <= 0) {
        return null;
      }
      duration = Math.log(d) / (dampingRatio * undampedFrequency);
    } else {
      return null;
    }
    return duration;
  },
  computeDerivedCurveOptions: (dampingRatio, duration, velocity = 0, mass = 1) => {
    let derivative, envelope;
    dampingRatio = Math.max(Math.min(dampingRatio, maxDamping), minDamping);
    duration = Math.max(Math.min(duration, maxDuration), minDuration);
    if (dampingRatio < 1) {
      envelope = function(envelopeUndampedFrequency) {
        const exponentialDecay = envelopeUndampedFrequency * dampingRatio;
        const currentDisplacement = exponentialDecay * duration;
        const a = exponentialDecay - velocity;
        const b = angularFrequency(envelopeUndampedFrequency, dampingRatio);
        const c = Math.exp(-currentDisplacement);
        return epsilon - a / b * c;
      };
      derivative = function(derivativeUndampedFrequency) {
        const exponentialDecay = derivativeUndampedFrequency * dampingRatio;
        const currentDisplacement = exponentialDecay * duration;
        const d = currentDisplacement * velocity + velocity;
        const e = Math.pow(dampingRatio, 2) * Math.pow(derivativeUndampedFrequency, 2) * duration;
        const f = Math.exp(-currentDisplacement);
        const g = angularFrequency(Math.pow(derivativeUndampedFrequency, 2), dampingRatio);
        const factor = -envelope(derivativeUndampedFrequency) + epsilon > 0 ? -1 : 1;
        return factor * ((d - e) * f) / g;
      };
    } else {
      envelope = function(envelopeUndampedFrequency) {
        const a = Math.exp(-envelopeUndampedFrequency * duration);
        const b = (envelopeUndampedFrequency - velocity) * duration + 1;
        return -epsilon + a * b;
      };
      derivative = function(derivativeUndampedFrequency) {
        const a = Math.exp(-derivativeUndampedFrequency * duration);
        const b = (velocity - derivativeUndampedFrequency) * Math.pow(duration, 2);
        return a * b;
      };
    }
    const result = {
      tension: 100,
      friction: 10,
      velocity
    };
    const initialGuess = 5 / duration;
    const undampedFrequency = approximateRoot(envelope, derivative, initialGuess);
    if (!isNaN(undampedFrequency)) {
      result.tension = Math.pow(undampedFrequency, 2) * mass;
      result.friction = dampingRatio * 2 * Math.sqrt(mass * result.tension);
    }
    return result;
  }
};

// ../../library/src/animation/Animators/SpringAnimator.ts
var SpringTensionFrictionDefaults = {
  tension: 500,
  friction: 10,
  tolerance: 1 / 1e4,
  velocity: 0
};
var SpringDampingDurationDefaults = {
  dampingRatio: 1,
  duration: 1,
  velocity: 0,
  mass: 1
};
function isDampingDurationSpringOptions(options) {
  if (!options) {
    return false;
  }
  return typeof options.dampingRatio === "number" || typeof options.duration === "number" || typeof options.mass === "number";
}
var SpringAnimator = class {
  constructor(options, interpolation) {
    this.interpolation = interpolation;
    let _opt;
    if (isDampingDurationSpringOptions(options)) {
      const toPass = { ...SpringDampingDurationDefaults, ...options };
      _opt = SpringCurveValueConverter.computeDerivedCurveOptions(
        toPass.dampingRatio,
        toPass.duration,
        toPass.velocity,
        toPass.mass
      );
    } else {
      _opt = options;
    }
    this.options = { ...SpringTensionFrictionDefaults, ..._opt };
    this.state = {
      x: 0,
      v: this.options.velocity
    };
    this.integrator = new Integrator((state) => -this.options.tension * state.x - this.options.friction * state.v);
  }
  isReady() {
    return this.interpolator !== void 0 && this.difference !== void 0;
  }
  next(delta) {
    this.state = this.integrator.integrateState(this.state, delta);
    const value = this.interpolator(this.progress());
    return value;
  }
  isFinished() {
    const positionNearZero = Math.abs(this.state.x) < this.options.tolerance;
    const velocityNearZero = Math.abs(this.state.v) < this.options.tolerance;
    return positionNearZero && velocityNearZero;
  }
  setFrom(value) {
    this.current = value;
    this.updateInterpolator();
  }
  setVelocity(velocity) {
    this.state.v = velocity;
  }
  progress() {
    return 1 - this.state.x / this.difference;
  }
  // The spring always settles to 0, so we create an interpolation to the destination
  // And calculate the progress based on the current state and the span of the interpolation
  // This lets us integrate over state.x, even though Value is generic
  setTo(value) {
    this.destination = value;
    this.difference = this.interpolation.difference(this.destination, this.current);
    this.state.x = this.difference;
    this.updateInterpolator();
  }
  /** @internal */
  getState() {
    return this.state;
  }
  updateInterpolator() {
    if (this.current === void 0 || this.destination === void 0) {
      return;
    }
    this.interpolator = this.interpolation.interpolate(this.current, this.destination);
  }
};

// ../../library/src/animation/Animators/InertialScrollAnimator.ts
var Defaults = {
  velocity: 0,
  min: 0,
  max: 0,
  momentum: {
    friction: 2,
    tolerance: 10
  },
  bounce: {
    tension: 500,
    friction: 10,
    tolerance: 1
  }
};
var InertialScrollAnimator = class {
  constructor(options) {
    this.options = Object.assign({ ...Defaults }, options);
    this.frictionAnimator = new FrictionAnimator({
      friction: this.options.momentum.friction,
      tolerance: this.options.momentum.tolerance,
      velocity: this.options.velocity
    });
    this.springAnimator = new SpringAnimator(
      {
        tension: this.options.bounce.tension,
        friction: this.options.bounce.friction,
        tolerance: this.options.bounce.tolerance,
        velocity: this.options.velocity
      },
      NumberInterpolation
    );
    this.useSpring = false;
  }
  isReady() {
    return true;
  }
  next(delta) {
    this.current = this.currentAnimator.next(delta);
    if (!this.useSpring) {
      this.tryTransitionToSpring();
    }
    return this.current;
  }
  get currentAnimator() {
    if (this.useSpring) {
      return this.springAnimator;
    }
    return this.frictionAnimator;
  }
  isFinished() {
    return this.currentAnimator.isFinished();
  }
  get state() {
    return this.currentAnimator.getState();
  }
  setFrom(value) {
    this.setState({ x: value, v: this.state.v });
  }
  setState(state) {
    this.frictionAnimator.setFrom(state.x);
    this.frictionAnimator.setVelocity(state.v);
    if (this.isValidState()) {
      return this.tryTransitionToSpring();
    } else {
      let bound = 0;
      if (this.state.x <= this.options.min) {
        bound = this.options.min;
      }
      if (this.state.x >= this.options.max) {
        bound = this.options.max;
      }
      return this.transitionToSpring(bound);
    }
  }
  setTo(destination) {
    this.frictionAnimator.setTo(destination);
    this.springAnimator.setTo(destination);
  }
  setLimits(min, max) {
    this.options.min = min;
    this.options.max = max;
  }
  // If the position is outside the min and max bounds, and traveling
  // further away, then transition from friction to spring animation
  tryTransitionToSpring() {
    const belowMinWithVelocity = this.state.x < this.options.min && this.state.v <= 0;
    const aboveMaxWithVelocity = this.state.x > this.options.max && this.state.v >= 0;
    if (belowMinWithVelocity || aboveMaxWithVelocity) {
      let bound;
      if (belowMinWithVelocity) {
        bound = this.options.min;
      } else {
        bound = this.options.max;
      }
      this.transitionToSpring(bound);
    } else {
      this.useSpring = false;
    }
  }
  transitionToSpring(bound) {
    this.springAnimator.setFrom(this.state.x);
    this.springAnimator.setVelocity(this.state.v);
    this.springAnimator.setTo(bound);
    this.useSpring = true;
  }
  // If the position is outside the min and max bounds, but traveling
  // back towards the bounds, check if the velocity is sufficient to
  // carry the position back within bounds. If it is, let friction do the
  // work. If not, the state is invalid, so use the spring.
  isValidState() {
    const belowMinTravelingBack = this.state.x < this.options.min && this.state.v > 0;
    const aboveMaxTravelingBack = this.state.x > this.options.max && this.state.v < 0;
    if (belowMinTravelingBack || aboveMaxTravelingBack) {
      let bound;
      if (belowMinTravelingBack) {
        bound = this.options.min;
      } else {
        bound = this.options.max;
      }
      const friction = this.frictionAnimator.options.friction;
      const solution = 1 - friction * (bound - this.state.x) / this.state.v;
      return solution > 0;
    }
    return true;
  }
  // The math behind _isValidState:
  //
  // 1. Integrate the friction animator's acceleration to find velocity
  //
  //         a = - k * v
  //     dv/dt = - k * v
  // Int(dv/v) = - k * Int(dt)
  //      ln v = - k * t + C
  //
  // => Solve for C at t = 0
  //
  // ln v(0) = - k * 0 + C
  // ln v(0) = C
  //
  // => Plug C back into v(t)
  //
  //     ln v = - k * t + ln v(0)
  // e^(ln v) = e^(- k * t) + e^(ln v(0))
  //        v = v(0) * e^(- k * t)
  //
  // 2. Integrate velocity to find position
  //
  // Int(v) = v(0) * Int(e^(- k * t))
  //      x = - v(0) * e^(-k * t) / k + C
  //
  // => Solve for C at t = 0
  //
  //            x(0) = - v(0) * e^(-k * 0) / k + C
  //            x(0) = - v(0) / k + C
  // x(0) + v(0) / k = C
  //
  // => Plug C back into x(t)
  //
  // x = - v(0) * e^(-k * t) / k + x(0) + v(0) / k
  //
  // 3. Check if a (real) solution exists for t for position x
  //
  //                                x = - v(0) * e^(-k * t) / k + x(0) + v(0) / k
  //                         x - x(0) = - v(0) * e^(-k * t) / k + v(0) / k
  //                   k * (x - x(0)) = - v(0) * e^(-k * t) + v(0)
  //            k * (x - x(0)) - v(0) = - v(0) * e^(-k * t)
  // (k * (x - x(0)) - v(0)) / - v(0) = e^(-k * t)
  //       1 - (k * (x - x(0)) / v(0) = e^(-k * t)
  //   ln(1 - (k * (x - x(0)) / v(0)) = -k * t
  //
  // Therefore, a real solution exists if 1 - (k * (x - x(0)) / v(0) > 0
};

// ../../library/src/render/types/Color/converters.ts
var import_hsluv = __toESM(require_hsluv(), 1);

// ../../library/src/render/types/Color/CSSNames.ts
var cssNames = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};

// ../../library/src/render/types/Color/types.ts
var ColorFormat = /* @__PURE__ */ ((ColorFormat2) => {
  ColorFormat2["RGB"] = "rgb";
  ColorFormat2["HSL"] = "hsl";
  ColorFormat2["HSV"] = "hsv";
  ColorFormat2["HEX"] = "hex";
  ColorFormat2["NAME"] = "name";
  return ColorFormat2;
})(ColorFormat || {});
var ColorMixModelType = /* @__PURE__ */ ((ColorMixModelType2) => {
  ColorMixModelType2["RGB"] = "rgb";
  ColorMixModelType2["RGBA"] = "rgba";
  ColorMixModelType2["HSL"] = "hsl";
  ColorMixModelType2["HSLA"] = "hsla";
  ColorMixModelType2["HUSL"] = "husl";
  return ColorMixModelType2;
})(ColorMixModelType || {});

// ../../library/src/render/types/Color/Utils.ts
function modulate(value, rangeA, rangeB, limit = false) {
  const [fromLow, fromHigh] = rangeA;
  const [toLow, toHigh] = rangeB;
  const fromDelta = fromHigh - fromLow;
  if (fromDelta === 0)
    return (toHigh + toLow) / 2;
  const toDelta = toHigh - toLow;
  if (toDelta === 0)
    return toLow;
  const result = toLow + (value - fromLow) / fromDelta * toDelta;
  if (limit === true) {
    if (toLow < toHigh) {
      if (result < toLow) {
        return toLow;
      }
      if (result > toHigh) {
        return toHigh;
      }
    } else {
      if (result > toLow) {
        return toLow;
      }
      if (result < toHigh) {
        return toHigh;
      }
    }
  }
  return result;
}
function isNumeric(value) {
  return !isNaN(value) && isFinite(value);
}
function percentToFraction(val) {
  const digits = numberFromString(val);
  if (digits !== void 0) {
    if (val.includes("%")) {
      return digits / 100;
    }
    return digits;
  }
  return 0;
}
function numberFromString(input) {
  const match = input.match(/\d?\.?\d+/);
  return match ? Number(match[0]) : void 0;
}

// ../../library/src/render/types/Color/converters.ts
var { hsluvToRgb, rgbToHsluv: rgbToHsluvExternal } = import_hsluv.default;
function rgbToHsluv(r, g, b) {
  const [h, s, l] = rgbToHsluvExternal([r / 255, g / 255, b / 255]);
  return { h, s, l };
}
function rgbaFromHusl(h, s, l, a = 1) {
  const rgb = hsluvToRgb([h, s, l]);
  return {
    r: rgb[0] * 255,
    g: rgb[1] * 255,
    b: rgb[2] * 255,
    a
  };
}
function hsvToStr(h, s, v, a) {
  const _h = Math.round(h);
  const _s = Math.round(s * 100);
  const _v = Math.round(v * 100);
  return a === void 0 || a === 1 ? "hsv(" + _h + ", " + _s + "%, " + _v + "%)" : "hsva(" + _h + ", " + _s + "%, " + _v + "%, " + a + ")";
}
function rgbToRgb(r, g, b) {
  return {
    r: isNumeric(r) ? bound01(r, 255) * 255 : 0,
    g: isNumeric(g) ? bound01(g, 255) * 255 : 0,
    b: isNumeric(b) ? bound01(b, 255) * 255 : 0
  };
}
function rgbToHex(r, g, b, allow3Char) {
  const hex2 = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16))
  ];
  if (allow3Char && hex2[0].charAt(0) === hex2[0].charAt(1) && hex2[1].charAt(0) === hex2[1].charAt(1) && hex2[2].charAt(0) === hex2[2].charAt(1)) {
    return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0);
  }
  return hex2.join("");
}
function rgbToHsl(r, g, b) {
  let l;
  let s;
  const _r = bound01(r, 255);
  const _g = bound01(g, 255);
  const _b = bound01(b, 255);
  const max = Math.max(_r, _g, _b);
  const min = Math.min(_r, _g, _b);
  let h = s = l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case _r:
        h = (_g - _b) / d + (_g < _b ? 6 : 0);
        break;
      case _g:
        h = (_b - _r) / d + 2;
        break;
      case _b:
        h = (_r - _g) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h: h * 360, s, l };
}
function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
function hslToRgb(h, s, l) {
  let r;
  let g;
  let b;
  h = bound01(h, 360);
  s = bound01(s * 100, 100);
  l = bound01(l * 100, 100);
  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h;
  const s = max === 0 ? 0 : d / max;
  const v = max;
  if (max === min) {
    h = 0;
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h, s, v };
}
function hsvToRgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s * 100, 100);
  v = bound01(v * 100, 100);
  const i = Math.floor(h);
  const f = h - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  const mod = i % 6;
  const r = [v, q, p, p, t, v][mod];
  const g = [t, v, v, q, p, p][mod];
  const b = [p, p, t, v, v, q][mod];
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function bound01(n, max) {
  let _max;
  let _n;
  if (typeof max === "string")
    _max = parseFloat(max);
  else
    _max = max;
  if (typeof n === "string") {
    if (isOnePointZero(n)) {
      n = "100%";
    }
    const processPercent = isPercentage(n);
    _n = Math.min(_max, Math.max(0, parseFloat(n)));
    if (processPercent) {
      _n = Math.floor(_n * _max) / 100;
    }
  } else {
    _n = n;
  }
  if (Math.abs(_n - _max) < 1e-6) {
    return 1;
  }
  return _n % _max / _max;
}
function isOnePointZero(n) {
  return typeof n === "string" && n.includes(".") && parseFloat(n) === 1;
}
function isPercentage(n) {
  return typeof n === "string" && n.includes("%");
}
function pad2(char) {
  if (char.length === 1) {
    return "0" + char;
  } else {
    return "" + char;
  }
}
var matchers = function() {
  const cssInteger = "[-\\+]?\\d+%?";
  const cssNumber = "[-\\+]?\\d*\\.\\d+%?";
  const cssUnit = "(?:" + cssNumber + ")|(?:" + cssInteger + ")";
  const permissiveMatch3 = "[\\s|\\(]+(" + cssUnit + ")[,|\\s]+(" + cssUnit + ")[,|\\s]+(" + cssUnit + ")\\s*\\)?";
  const permissiveMatch4 = "[\\s|\\(]+(" + cssUnit + ")[,|\\s]+(" + cssUnit + ")[,|\\s]+(" + cssUnit + ")[,|\\s]+(" + cssUnit + ")\\s*\\)?";
  return {
    rgb: new RegExp("rgb" + permissiveMatch3),
    rgba: new RegExp("rgba" + permissiveMatch4),
    hsl: new RegExp("hsl" + permissiveMatch3),
    hsla: new RegExp("hsla" + permissiveMatch4),
    hsv: new RegExp("hsv" + permissiveMatch3),
    hsva: new RegExp("hsva" + permissiveMatch4),
    hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
}();
function stringToObject(inputColor) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
  if (inputColor.includes("gradient("))
    return false;
  if (inputColor.includes("var("))
    return false;
  const trimLeft = /^[\s,#]+/;
  const trimRight = /\s+$/;
  let color2 = inputColor.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
  let named = false;
  if (cssNames[color2]) {
    color2 = cssNames[color2];
    named = true;
  }
  if (color2 === "transparent") {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name" /* NAME */
    };
  }
  let match;
  if (match = matchers.rgb.exec(color2)) {
    return {
      r: parseInt((_a = match[1]) != null ? _a : ""),
      g: parseInt((_b = match[2]) != null ? _b : ""),
      b: parseInt((_c = match[3]) != null ? _c : ""),
      a: 1,
      format: "rgb" /* RGB */
    };
  }
  if (match = matchers.rgba.exec(color2)) {
    return {
      r: parseInt((_d = match[1]) != null ? _d : ""),
      g: parseInt((_e = match[2]) != null ? _e : ""),
      b: parseInt((_f = match[3]) != null ? _f : ""),
      a: parseFloat((_g = match[4]) != null ? _g : ""),
      format: "rgb" /* RGB */
    };
  }
  if (match = matchers.hsl.exec(color2)) {
    return {
      h: parseInt((_h = match[1]) != null ? _h : ""),
      s: percentToFraction((_i = match[2]) != null ? _i : ""),
      l: percentToFraction((_j = match[3]) != null ? _j : ""),
      a: 1,
      format: "hsl" /* HSL */
    };
  }
  if (match = matchers.hsla.exec(color2)) {
    return {
      h: parseInt((_k = match[1]) != null ? _k : ""),
      s: percentToFraction((_l = match[2]) != null ? _l : ""),
      l: percentToFraction((_m = match[3]) != null ? _m : ""),
      a: parseFloat((_n = match[4]) != null ? _n : ""),
      format: "hsl" /* HSL */
    };
  }
  if (match = matchers.hsv.exec(color2)) {
    return {
      h: parseInt((_o = match[1]) != null ? _o : ""),
      s: percentToFraction((_p = match[2]) != null ? _p : ""),
      v: percentToFraction((_q = match[3]) != null ? _q : ""),
      a: 1,
      format: "hsv" /* HSV */
    };
  }
  if (match = matchers.hsva.exec(color2)) {
    return {
      h: parseInt((_r = match[1]) != null ? _r : ""),
      s: percentToFraction((_s = match[2]) != null ? _s : ""),
      v: percentToFraction((_t = match[3]) != null ? _t : ""),
      a: parseFloat((_u = match[4]) != null ? _u : ""),
      format: "hsv" /* HSV */
    };
  }
  if (match = matchers.hex8.exec(color2)) {
    return {
      r: parseIntFromHex((_v = match[1]) != null ? _v : ""),
      g: parseIntFromHex((_w = match[2]) != null ? _w : ""),
      b: parseIntFromHex((_x = match[3]) != null ? _x : ""),
      a: convertHexToDecimal((_y = match[4]) != null ? _y : ""),
      format: named ? "name" /* NAME */ : "hex" /* HEX */
    };
  }
  if (match = matchers.hex6.exec(color2)) {
    return {
      r: parseIntFromHex((_z = match[1]) != null ? _z : ""),
      g: parseIntFromHex((_A = match[2]) != null ? _A : ""),
      b: parseIntFromHex((_B = match[3]) != null ? _B : ""),
      a: 1,
      format: named ? "name" /* NAME */ : "hex" /* HEX */
    };
  }
  if (match = matchers.hex4.exec(color2)) {
    return {
      r: parseIntFromHex(`${match[1]}${match[1]}`),
      g: parseIntFromHex(`${match[2]}${match[2]}`),
      b: parseIntFromHex(`${match[3]}${match[3]}`),
      a: convertHexToDecimal(match[4] + "" + match[4]),
      format: named ? "name" /* NAME */ : "hex" /* HEX */
    };
  }
  if (match = matchers.hex3.exec(color2)) {
    return {
      r: parseIntFromHex(`${match[1]}${match[1]}`),
      g: parseIntFromHex(`${match[2]}${match[2]}`),
      b: parseIntFromHex(`${match[3]}${match[3]}`),
      a: 1,
      format: named ? "name" /* NAME */ : "hex" /* HEX */
    };
  } else {
    return false;
  }
}
function parseIntFromHex(hex2) {
  return parseInt(hex2, 16);
}
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}

// ../../library/src/render/types/Color/Color.ts
var cache = /* @__PURE__ */ new Map();
var Color = /* @__PURE__ */ (() => {
  function Color2(color2, r, g, b) {
    if (typeof color2 === "string") {
      let c = cache.get(color2);
      if (c)
        return c;
      c = createColor(color2);
      if (c === void 0)
        return { ...Color2("black"), isValid: false };
      cache.set(color2, c);
      return c;
    }
    const created = createColor(color2, r, g, b);
    return created !== void 0 ? created : { ...Color2("black"), isValid: false };
  }
  function createColor(color2, r, g, b) {
    if (color2 === "")
      return void 0;
    const colorData = getCompleteColorStrategy(color2, r, g, b);
    if (colorData) {
      const newColor = {
        r: colorData.r,
        g: colorData.g,
        b: colorData.b,
        a: colorData.a,
        h: colorData.h,
        s: colorData.s,
        l: colorData.l,
        initialValue: typeof color2 === "string" && colorData.format !== "hsv" /* HSV */ ? color2 : void 0,
        roundA: Math.round(100 * colorData.a) / 100,
        format: colorData.format,
        mix: Color2.mix,
        toValue: () => Color2.toRgbString(newColor)
      };
      return newColor;
    } else {
      return void 0;
    }
  }
  const ColorMixModel = {
    isRGB(colorModel) {
      return colorModel === "rgb" /* RGB */ || colorModel === "rgba" /* RGBA */;
    },
    isHSL(colorModel) {
      return colorModel === "hsl" /* HSL */ || colorModel === "hsla" /* HSLA */;
    }
  };
  Color2.inspect = (color2, initialValue) => {
    if (color2.format === "hsl" /* HSL */) {
      return `<${color2.constructor.name} h:${color2.h} s:${color2.s} l:${color2.l} a:${color2.a}>`;
    } else if (color2.format === "hex" /* HEX */ || color2.format === "name" /* NAME */) {
      return `<${color2.constructor.name} "${initialValue}">`;
    } else {
      return `<${color2.constructor.name} r:${color2.r} g:${color2.g} b:${color2.b} a:${color2.a}>`;
    }
  };
  Color2.isColor = (color2) => {
    if (typeof color2 === "string") {
      return Color2.isColorString(color2);
    } else {
      return Color2.isColorObject(color2);
    }
  };
  Color2.isColorString = (colorString) => {
    if (typeof colorString === "string") {
      return stringToObject(colorString) !== false;
    }
    return false;
  };
  Color2.isColorObject = (color2) => {
    return color2 && typeof color2 !== "string" && typeof color2.r === "number" && typeof color2.g === "number" && typeof color2.b === "number" && typeof color2.h === "number" && typeof color2.s === "number" && typeof color2.l === "number" && typeof color2.a === "number" && typeof color2.roundA === "number" && typeof color2.format === "string";
  };
  Color2.toString = (color2) => {
    return Color2.toRgbString(color2);
  };
  Color2.toHex = (color2, allow3Char = false) => {
    return rgbToHex(color2.r, color2.g, color2.b, allow3Char);
  };
  Color2.toHexString = (color2, allow3Char = false) => {
    return `#${Color2.toHex(color2, allow3Char)}`;
  };
  Color2.toRgbString = (color2) => {
    return color2.a === 1 ? "rgb(" + Math.round(color2.r) + ", " + Math.round(color2.g) + ", " + Math.round(color2.b) + ")" : "rgba(" + Math.round(color2.r) + ", " + Math.round(color2.g) + ", " + Math.round(color2.b) + ", " + color2.roundA + ")";
  };
  Color2.toHusl = (color2) => {
    return {
      ...rgbToHsluv(color2.r, color2.g, color2.b),
      a: color2.roundA
    };
  };
  Color2.toHslString = (color2) => {
    const hsl = Color2.toHsl(color2);
    const h = Math.round(hsl.h);
    const s = Math.round(hsl.s * 100);
    const l = Math.round(hsl.l * 100);
    return color2.a === 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + color2.roundA + ")";
  };
  Color2.toHsv = (color2) => {
    const hsv = rgbToHsv(color2.r, color2.g, color2.b);
    return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: color2.a };
  };
  Color2.toHsvString = (color2) => {
    const hsv = rgbToHsv(color2.r, color2.g, color2.b);
    const h = Math.round(hsv.h * 360);
    const s = Math.round(hsv.s * 100);
    const v = Math.round(hsv.v * 100);
    return color2.a === 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + color2.roundA + ")";
  };
  Color2.toName = (color2) => {
    if (color2.a === 0) {
      return "transparent";
    }
    if (color2.a < 1) {
      return false;
    }
    const hex2 = rgbToHex(color2.r, color2.g, color2.b, true);
    for (const key7 of Object.keys(cssNames)) {
      const value = cssNames[key7];
      if (value === hex2) {
        return key7;
      }
    }
    return false;
  };
  Color2.toHsl = (color2) => {
    return {
      h: Math.round(color2.h),
      s: color2.s,
      l: color2.l,
      a: color2.a
    };
  };
  Color2.toRgb = (color2) => {
    return {
      r: Math.round(color2.r),
      g: Math.round(color2.g),
      b: Math.round(color2.b),
      a: color2.a
    };
  };
  Color2.brighten = (color2, amount = 10) => {
    const rgb = Color2.toRgb(color2);
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return Color2(rgb);
  };
  Color2.lighten = (color2, amount = 10) => {
    const hsl = Color2.toHsl(color2);
    hsl.l += amount / 100;
    hsl.l = Math.min(1, Math.max(0, hsl.l));
    return Color2(hsl);
  };
  Color2.darken = (color2, amount = 10) => {
    const hsl = Color2.toHsl(color2);
    hsl.l -= amount / 100;
    hsl.l = Math.min(1, Math.max(0, hsl.l));
    return Color2(hsl);
  };
  Color2.saturate = (color2, amount = 10) => {
    const hsl = Color2.toHsl(color2);
    hsl.s += amount / 100;
    hsl.s = Math.min(1, Math.max(0, hsl.s));
    return Color2(hsl);
  };
  Color2.desaturate = (color2, amount = 10) => {
    const hsl = Color2.toHsl(color2);
    hsl.s -= amount / 100;
    hsl.s = Math.min(1, Math.max(0, hsl.s));
    return Color2(hsl);
  };
  Color2.grayscale = (color2) => {
    return Color2.desaturate(color2, 100);
  };
  Color2.hueRotate = (color2, angle) => {
    const hsl = Color2.toHsl(color2);
    hsl.h += angle;
    hsl.h = hsl.h > 360 ? hsl.h - 360 : hsl.h;
    return Color2(hsl);
  };
  Color2.alpha = (color2, a = 1) => {
    return Color2({
      r: color2.r,
      g: color2.g,
      b: color2.b,
      a
    });
  };
  Color2.transparent = (color2) => {
    return Color2.alpha(color2, 0);
  };
  Color2.multiplyAlpha = (color2, alphaValue = 1) => {
    return Color2({
      r: color2.r,
      g: color2.g,
      b: color2.b,
      a: color2.a * alphaValue
    });
  };
  Color2.interpolate = (colorA, colorB, model = "rgb" /* RGB */) => {
    if (!Color2.isColorObject(colorA) || !Color2.isColorObject(colorB)) {
      throw new TypeError("Both arguments for Color.interpolate must be Color objects");
    }
    return (progress2) => {
      const color2 = Color2.mixAsColor(colorA, colorB, progress2, false, model);
      return color2;
    };
  };
  Color2.mix = (from, toColor, { model = "rgb" /* RGB */ } = {}) => {
    const fromColor = typeof from === "string" ? Color2(from) : from;
    const mixer = Color2.interpolate(fromColor, toColor, model);
    return (p) => Color2.toRgbString(mixer(p));
  };
  Color2.mixAsColor = (colorA, colorB, fraction2 = 0.5, limit = false, model = "rgb" /* RGB */) => {
    let result = null;
    if (ColorMixModel.isRGB(model)) {
      result = Color2({
        r: modulate(fraction2, [0, 1], [colorA.r, colorB.r], limit),
        g: modulate(fraction2, [0, 1], [colorA.g, colorB.g], limit),
        b: modulate(fraction2, [0, 1], [colorA.b, colorB.b], limit),
        a: modulate(fraction2, [0, 1], [colorA.a, colorB.a], limit)
      });
    } else {
      let hslA, hslB;
      if (ColorMixModel.isHSL(model)) {
        hslA = Color2.toHsl(colorA);
        hslB = Color2.toHsl(colorB);
      } else {
        hslA = Color2.toHusl(colorA);
        hslB = Color2.toHusl(colorB);
      }
      if (hslA.s === 0) {
        hslA.h = hslB.h;
      } else if (hslB.s === 0) {
        hslB.h = hslA.h;
      }
      const fromH = hslA.h;
      const toH = hslB.h;
      let deltaH = toH - fromH;
      if (deltaH > 180) {
        deltaH = toH - 360 - fromH;
      } else if (deltaH < -180) {
        deltaH = toH + 360 - fromH;
      }
      const tween = {
        h: modulate(fraction2, [0, 1], [fromH, fromH + deltaH], limit),
        s: modulate(fraction2, [0, 1], [hslA.s, hslB.s], limit),
        l: modulate(fraction2, [0, 1], [hslA.l, hslB.l], limit),
        a: modulate(fraction2, [0, 1], [colorA.a, colorB.a], limit)
      };
      if (ColorMixModel.isHSL(model)) {
        result = Color2(tween);
      } else {
        result = Color2(rgbaFromHusl(tween.h, tween.s, tween.l, tween.a));
      }
    }
    return result;
  };
  Color2.random = (alphaValue = 1) => {
    function gen() {
      return Math.floor(Math.random() * 255);
    }
    return Color2("rgba(" + gen() + ", " + gen() + ", " + gen() + ", " + alphaValue + ")");
  };
  Color2.grey = (amount = 0.5, alphaValue = 1) => {
    amount = Math.floor(amount * 255);
    return Color2("rgba(" + amount + ", " + amount + ", " + amount + ", " + alphaValue + ")");
  };
  Color2.gray = Color2.grey;
  Color2.rgbToHsl = (r, g, b) => {
    return rgbToHsl(r, g, b);
  };
  Color2.isValidColorProperty = (name, value) => {
    const isColorKey = name.toLowerCase().slice(-5) === "color" || name === "fill" || name === "stroke";
    if (isColorKey && typeof value === "string" && Color2.isColorString(value)) {
      return true;
    }
    return false;
  };
  Color2.difference = (colorA, colorB) => {
    const _r = (colorA.r + colorB.r) / 2;
    const deltaR = colorA.r - colorB.r;
    const deltaG = colorA.g - colorB.g;
    const deltaB = colorA.b - colorB.b;
    const deltaR2 = Math.pow(deltaR, 2);
    const deltaG2 = Math.pow(deltaG, 2);
    const deltaB2 = Math.pow(deltaB, 2);
    return Math.sqrt(2 * deltaR2 + 4 * deltaG2 + 3 * deltaB2 + _r * (deltaR2 - deltaB2) / 256);
  };
  Color2.equal = (colorA, colorB, tolerance = 0.1) => {
    if (Math.abs(colorA.r - colorB.r) >= tolerance) {
      return false;
    }
    if (Math.abs(colorA.g - colorB.g) >= tolerance) {
      return false;
    }
    if (Math.abs(colorA.b - colorB.b) >= tolerance) {
      return false;
    }
    if (Math.abs(colorA.a - colorB.a) * 256 >= tolerance) {
      return false;
    }
    return true;
  };
  return Color2;
})();
function getCompleteColorStrategy(colorOrR, g, b, a = 1) {
  let completeColor;
  if (typeof colorOrR === "number" && !Number.isNaN(colorOrR) && typeof g === "number" && !Number.isNaN(g) && typeof b === "number" && !Number.isNaN(b)) {
    const _r = colorOrR;
    const _g = g;
    const _b = b;
    const _a = a;
    completeColor = getCompleteColorFromRGB({ r: _r, g: _g, b: _b, a: _a });
  } else if (typeof colorOrR === "string") {
    completeColor = getCompleteColorFromString(colorOrR);
  } else if (typeof colorOrR === "object") {
    if (colorOrR.hasOwnProperty("r") && colorOrR.hasOwnProperty("g") && colorOrR.hasOwnProperty("b")) {
      completeColor = getCompleteColorFromRGB(colorOrR);
    } else {
      completeColor = getCompleteColorFromHSL(colorOrR);
    }
  }
  return completeColor;
}
function getCompleteColorFromString(color2) {
  const result = stringToObject(color2);
  if (result) {
    if (result.format === "hsl" /* HSL */) {
      return getCompleteColorFromHSL(result);
    } else if (result.format === "hsv" /* HSV */) {
      return getCompleteColorFromHSV(result);
    } else {
      return getCompleteColorFromRGB(result);
    }
  }
}
function getCompleteColorFromHSV(color2) {
  const rgb = hsvToRgb(color2.h, color2.s, color2.v);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  return {
    ...hsl,
    ...rgb,
    format: "rgb" /* RGB */,
    a: color2.a !== void 0 ? correctAlpha(color2.a) : 1
  };
}
function getCompleteColorFromRGB(color2) {
  const rgb = rgbToRgb(color2.r, color2.g, color2.b);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  return {
    ...hsl,
    ...rgb,
    format: "rgb" /* RGB */,
    a: color2.a !== void 0 ? correctAlpha(color2.a) : 1
  };
}
function getCompleteColorFromHSL(color2) {
  let h;
  let s;
  let l;
  let rgb = { r: 0, g: 0, b: 0 };
  let hsl = { h: 0, s: 0, l: 0 };
  h = isNumeric(color2.h) ? color2.h : 0;
  h = (h + 360) % 360;
  s = isNumeric(color2.s) ? color2.s : 1;
  if (typeof color2.s === "string") {
    s = numberFromString(color2.s);
  }
  l = isNumeric(color2.l) ? color2.l : 0.5;
  if (typeof color2.l === "string") {
    l = numberFromString(color2.l);
  }
  rgb = hslToRgb(h, s, l);
  hsl = {
    h,
    s,
    l
  };
  return {
    ...rgb,
    ...hsl,
    a: color2.a === void 0 ? 1 : color2.a,
    format: "hsl" /* HSL */
  };
}
function correctAlpha(alphaValue) {
  alphaValue = parseFloat(alphaValue);
  if (alphaValue < 0) {
    alphaValue = 0;
  }
  if (isNaN(alphaValue) || alphaValue > 1) {
    alphaValue = 1;
  }
  return alphaValue;
}

// ../../library/src/interpolation/ColorInterpolation.ts
var ColorInterpolation = (type = "husl" /* HUSL */) => {
  return {
    interpolate(from, to) {
      ;
      [from, to] = Interpolation.handleUndefined(from, to);
      return Color.interpolate(Color(from), Color(to), type);
    },
    difference(from, to) {
      return Color.difference(Color(from), Color(to));
    }
  };
};

// ../../library/src/interpolation/NoInterpolation.ts
var NoInterpolation = {
  interpolate(from, to) {
    ;
    [from, to] = Interpolation.handleUndefined(from, to);
    return (progress2) => {
      return progress2 < 0.5 ? from : to;
    };
  },
  difference(from, to) {
    return from === to ? 0 : 1;
  }
};

// ../../library/src/interpolation/ObjectInterpolation.ts
var ObjectInterpolation = (valueInterpolation) => {
  return {
    interpolate(from, to) {
      ;
      [from, to] = Interpolation.handleUndefined(from, to);
      const result = Object.assign({}, from);
      const interpolations = {};
      const keys3 = /* @__PURE__ */ new Set();
      for (const key7 in from) {
        interpolations[key7] = valueInterpolation.interpolate(from[key7], to[key7]);
        keys3.add(key7);
      }
      for (const key7 in to) {
        if (!keys3.has(key7)) {
          interpolations[key7] = valueInterpolation.interpolate(from[key7], to[key7]);
          keys3.add(key7);
        }
      }
      return (progress2) => {
        for (const key7 in interpolations) {
          result[key7] = interpolations[key7](progress2);
        }
        return result;
      };
    },
    difference(from, to) {
      let sum = 0;
      for (const key7 in from) {
        const difference = valueInterpolation.difference(from[key7], to[key7]);
        sum += Math.pow(difference, 2);
      }
      return Math.sqrt(sum);
    }
  };
};

// ../../library/src/interpolation/ValueInterpolation.ts
var DefaultInterpolationOptions = {
  colorModel: "husl" /* HUSL */
};
var ValueInterpolation = class {
  /**
   * @internal
   */
  constructor(options = DefaultInterpolationOptions) {
    /**
     * @internal
     */
    this.interpolate = (from, to) => {
      ;
      [from, to] = Interpolation.handleUndefined(from, to);
      return this.interPolationForValue(from).interpolate(from, to);
    };
    /**
     * @internal
     */
    this.difference = (from, to) => {
      const interpolation = this.interPolationForValue(from);
      return interpolation.difference(from, to);
    };
    this.options = { ...DefaultInterpolationOptions, ...options };
  }
  /**
   * @internal
   */
  interPolationForValue(value) {
    const type = typeof value;
    if (type === "number") {
      return NumberInterpolation;
    } else if (type === "boolean" || type === "function") {
      return NoInterpolation;
    } else if (Color.isColor(value)) {
      return ColorInterpolation(this.options.colorModel);
    } else if (type === "object") {
      if (value === null) {
        return NoInterpolation;
      }
      const constructor = value.constructor;
      if (constructor && isInterpolatable(constructor)) {
        const interpolation = constructor.interpolationFor(value, this);
        if (interpolation && interpolation !== this && interpolation.constructor !== ValueInterpolation) {
          return interpolation;
        }
      }
      return ObjectInterpolation(this);
    }
    console.warn(`No interpolation defined for ${value}`);
    return NoInterpolation;
  }
};
var AnyInterpolation = /* @__PURE__ */ new ValueInterpolation();

// ../../library/src/animation/Animators/PrecalculatedAnimator.ts
var Defaults2 = {
  delta: 1 / 60,
  maxValues: 1e4
};
var PrecalculatedAnimator = class {
  constructor(options) {
    this.currentTime = 0;
    this.options = { ...Defaults2, ...options };
    this.animator = options.animator;
  }
  preCalculate() {
    if (!this.animator.isReady()) {
      return;
    }
    const { delta } = this.options;
    this.values = [];
    while (!this.animator.isFinished() && this.values.length < this.options.maxValues) {
      let value = this.animator.next(this.options.delta);
      if (typeof value === "object" && value) {
        const object = value;
        const copy = { ...object };
        value = copy;
      }
      this.values.push(value);
    }
    this.totalTime = this.values.length * delta;
  }
  indexForTime(time2) {
    return Math.max(
      0,
      Math.min(this.values.length - 1, Math.round(this.values.length * (time2 / this.totalTime)) - 1)
    );
  }
  valueForTime(time2) {
    const index = this.indexForTime(time2);
    const value = this.values[index];
    return value;
  }
  setFrom(value) {
    this.animator.setFrom(value);
    this.preCalculate();
  }
  setTo(end) {
    this.animator.setTo(end);
    this.preCalculate();
  }
  isReady() {
    return this.values !== void 0 && this.values.length > 0 && this.totalTime > 0;
  }
  next(delta) {
    this.currentTime += delta;
    return this.valueForTime(this.currentTime);
  }
  isFinished() {
    return this.totalTime === 0 || this.currentTime >= this.totalTime;
  }
  get endValue() {
    this.preCalculate();
    const value = this.valueForTime(this.totalTime);
    return this.values.length > 0 ? value : this.animator.next(0);
  }
};

// ../../library/src/utils/safeWindow.ts
var mockWindow = {
  addEventListener: () => {
  },
  removeEventListener: () => {
  },
  dispatchEvent: () => false,
  ResizeObserver: void 0,
  onpointerdown: false,
  onpointermove: false,
  onpointerup: false,
  ontouchstart: false,
  ontouchmove: false,
  ontouchend: false,
  onmousedown: false,
  onmousemove: false,
  onmouseup: false,
  devicePixelRatio: 1,
  scrollX: 0,
  scrollY: 0,
  location: {
    href: ""
  },
  setTimeout: () => 0,
  clearTimeout: () => {
  },
  setInterval: () => 0,
  clearInterval: () => {
  },
  requestAnimationFrame: () => 0,
  cancelAnimationFrame: () => {
  },
  getSelection: () => null,
  matchMedia: (query) => {
    return {
      matches: false,
      media: query,
      onchange: () => {
      },
      addEventListener: () => {
      },
      removeEventListener: () => {
      },
      addListener: () => {
      },
      removeListener: () => {
      },
      dispatchEvent: () => false
    };
  },
  innerHeight: 0,
  SVGSVGElement: {}
};
var safeWindow = typeof window === "undefined" ? mockWindow : window;

// ../../library/src/core/Time.ts
var _raf = (f) => {
  setTimeout(f, 1 / 60);
};
var __raf = safeWindow["requestAnimationFrame"] || _raf;
var raf = (f) => __raf(f);

// ../../library/src/core/EventEmitter.ts
var import_eventemitter3 = __toESM(require_eventemitter3(), 1);
var { EventEmitter: EventEmitter3 } = import_eventemitter3.default;
var EventEmitter = class {
  constructor() {
    this._emitter = new EventEmitter3();
  }
  eventNames() {
    return this._emitter.eventNames();
  }
  eventListeners() {
    const listeners = {};
    for (const eventName of this._emitter.eventNames()) {
      listeners[eventName] = this._emitter.listeners(eventName);
    }
    return listeners;
  }
  on(eventName, fn) {
    this.addEventListener(eventName, fn, false, false, this);
  }
  off(eventName, fn) {
    this.removeEventListeners(eventName, fn);
  }
  once(eventName, fn) {
    this.addEventListener(eventName, fn, true, false, this);
  }
  unique(eventName, fn) {
    this.addEventListener(eventName, fn, false, true, this);
  }
  addEventListener(eventName, fn, once, unique, context) {
    if (unique) {
      for (const name of this._emitter.eventNames()) {
        if (fn === this._emitter.listeners(name)) {
          return;
        }
      }
    }
    if (once === true) {
      this._emitter.once(eventName, fn, context);
    } else {
      this._emitter.addListener(eventName, fn, context);
    }
  }
  removeEventListeners(eventName, fn) {
    if (eventName) {
      this._emitter.removeListener(eventName, fn);
    } else {
      this.removeAllEventListeners();
    }
  }
  removeAllEventListeners() {
    this._emitter.removeAllListeners();
  }
  countEventListeners(eventName, handler) {
    if (eventName) {
      return this._emitter.listeners(eventName).length;
    } else {
      let count = 0;
      for (const name of this._emitter.eventNames()) {
        count += this._emitter.listeners(name).length;
      }
      return count;
    }
  }
  emit(eventName, ...args) {
    this._emitter.emit(eventName, ...args);
  }
};

// ../../library/src/core/Loop.ts
var LoopTimeStep = 1 / 60;
var Loop = class extends EventEmitter {
  /**
   * @internal
   */
  constructor(start = false) {
    super();
    this._started = false;
    this._frame = 0;
    this._frameTasks = [];
    /**
     * @internal
     */
    this.tick = () => {
      if (!this._started)
        return;
      raf(this.tick);
      this.emit("update", this._frame, LoopTimeStep);
      this.emit("render", this._frame, LoopTimeStep);
      this._processFrameTasks();
      this._frame++;
    };
    if (start) {
      this.start();
    }
  }
  /**
   * To add a task to be done at the end of a frame.
   * Tasks added from a task will be ignored. These will run after loop events have been processed.
   * @internal
   */
  addFrameTask(task) {
    this._frameTasks.push(task);
  }
  _processFrameTasks() {
    var _a;
    const postEventTasks = this._frameTasks;
    const length = postEventTasks.length;
    if (length === 0)
      return;
    for (let i = 0; i < length; i++) {
      (_a = postEventTasks[i]) == null ? void 0 : _a.call(postEventTasks);
    }
    postEventTasks.length = 0;
  }
  /**
   * @internal
   */
  static set TimeStep(value) {
    LoopTimeStep = value;
  }
  /**
   * @internal
   */
  static get TimeStep() {
    return LoopTimeStep;
  }
  /**
   * @internal
   */
  start() {
    if (this._started)
      return this;
    this._frame = 0;
    this._started = true;
    raf(this.tick);
    return this;
  }
  /**
   * @internal
   * @deprecated Don’t use `stop` as you could be stopping the MainLoop for others.
   */
  stop() {
    this._started = false;
    return this;
  }
  /**
   * @internal
   */
  get frame() {
    return this._frame;
  }
  /**
   * @internal
   */
  get time() {
    return this._frame * LoopTimeStep;
  }
};
var MainLoop = new Loop();

// ../../library/src/render/types/RenderEnvironment.ts
var RenderTarget = /* @__PURE__ */ ((RenderTarget2) => {
  RenderTarget2["canvas"] = "CANVAS";
  RenderTarget2["export"] = "EXPORT";
  RenderTarget2["thumbnail"] = "THUMBNAIL";
  RenderTarget2["preview"] = "PREVIEW";
  return RenderTarget2;
})(RenderTarget || {});
var RenderEnvironment = {
  imageBaseURL: "",
  target: "PREVIEW" /* preview */,
  zoom: 1
};
function executeInRenderEnvironment(customEnvironment, task) {
  const previousEnvironment = Object.assign({}, RenderEnvironment);
  Object.assign(RenderEnvironment, customEnvironment);
  const result = task();
  Object.assign(RenderEnvironment, previousEnvironment);
  return result;
}
function setGlobalRenderEnvironment(environment2) {
  Object.assign(RenderEnvironment, environment2);
}
function useRenderEnvironment(target, imageBaseURL, zoom) {
  let willChangeElements = false;
  if (RenderEnvironment.imageBaseURL !== imageBaseURL) {
    RenderEnvironment.imageBaseURL = imageBaseURL;
    willChangeElements = true;
  }
  if (RenderEnvironment.target !== target) {
    RenderEnvironment.target = target;
    willChangeElements = true;
  }
  if (RenderEnvironment.zoom !== zoom) {
    RenderEnvironment.zoom = zoom;
  }
  return { willChangeElements };
}
((RenderTarget2) => {
  function current() {
    return RenderEnvironment.target;
  }
  RenderTarget2.current = current;
  function hasRestrictions() {
    const target = RenderEnvironment.target;
    if (target === "CANVAS" /* canvas */)
      return true;
    if (target === "EXPORT" /* export */)
      return true;
    return false;
  }
  RenderTarget2.hasRestrictions = hasRestrictions;
})(RenderTarget || (RenderTarget = {}));

// ../../library/src/animation/Drivers/AnimationDriver.ts
var AnimationDriver = class {
  constructor(animator, updateCallback, finishedCallback) {
    this.animator = animator;
    this.updateCallback = updateCallback;
    this.finishedCallback = finishedCallback;
    this.update = (frame2, elapsed) => {
      if (this.animator.isFinished()) {
        this.finish();
      } else {
        const value = this.animator.next(elapsed);
        this.updateCallback(value);
      }
    };
    if (!this.animator.isReady()) {
      console.warn("AnimationDriver initialized with animator that isn't ready");
    }
  }
  finish() {
    if (this.finishedCallback) {
      this.finishedCallback(this.animator.isFinished());
    }
  }
  isFinished() {
    return this.animator.isFinished();
  }
};

// ../../library/src/animation/Drivers/MainLoopDriver.ts
var MainLoopAnimationDriver = class extends AnimationDriver {
  play() {
    if (RenderEnvironment.target !== "PREVIEW" /* preview */) {
      this.finishedCallback && this.finishedCallback(false);
      return;
    }
    MainLoop.on("update", this.update);
  }
  cancel() {
    MainLoop.off("update", this.update);
  }
  finish() {
    MainLoop.off("update", this.update);
    super.finish();
  }
};

// ../../library/src/animation/FramerAnimation.ts
var DefaultDeprecatedAnimationOptions = {
  precalculate: false,
  colorModel: "husl" /* HUSL */
};
var FramerAnimation = class {
  /**
   * @internal
   */
  constructor(target, from, to, animatorClass, options, driverClass = MainLoopAnimationDriver) {
    /**
     * @internal
     */
    this.playStateSource = "idle";
    /**
     * @internal
     */
    this.readyPromise = Promise.resolve();
    this.resetFinishedPromise();
    const deprecatedAnimationOptions = { ...DefaultDeprecatedAnimationOptions };
    const animatorOptions = {};
    if (options) {
      Object.assign(deprecatedAnimationOptions, options);
      Object.assign(animatorOptions, options);
    }
    let interpolation;
    if (deprecatedAnimationOptions.customInterpolation) {
      interpolation = deprecatedAnimationOptions.customInterpolation;
    } else {
      interpolation = new ValueInterpolation(options);
    }
    let animator;
    if (!animatorClass) {
      animator = new BezierAnimator({}, interpolation);
    } else {
      animator = new animatorClass(animatorOptions, interpolation);
    }
    if (deprecatedAnimationOptions.precalculate) {
      animator = new PrecalculatedAnimator({ animator });
    }
    animator.setFrom(from);
    animator.setTo(to);
    const updateCallback = (value) => {
      FramerAnimation.driverCallbackHandler(target, value);
    };
    const finishedCallback = (isFinished) => {
      if (isFinished) {
        FramerAnimation.driverCallbackHandler(target, to);
        if (this.playStateSource === "running") {
          this.playStateValue = "finished";
        }
      }
    };
    this.driver = new driverClass(animator, updateCallback, finishedCallback);
  }
  /**
   * @internal
   */
  static driverCallbackHandler(target, value) {
    if (isAnimatable(target) || isMotionValue2(target)) {
      target.set(value);
    } else {
      const targetObject = target;
      Animatable.transaction((update) => {
        for (const key7 in targetObject) {
          const targetValue = targetObject[key7];
          if (isAnimatable(targetValue)) {
            update(targetValue, value[key7]);
          } else {
            targetObject[key7] = value[key7];
          }
        }
      });
    }
  }
  /**
   * @internal
   */
  get playStateValue() {
    return this.playStateSource;
  }
  /**
   * @internal
   */
  set playStateValue(value) {
    if (value !== this.playStateSource) {
      const oldValue = value;
      this.playStateSource = value;
      switch (value) {
        case "idle":
          if (oldValue === "running") {
            this.oncancel && this.oncancel();
          }
          this.readyResolve && this.readyResolve();
          this.resetReadyPromise();
          break;
        case "finished":
          if (oldValue === "idle") {
            console.warn("Bad state transition");
            break;
          }
          this.onfinish && this.onfinish();
          this.finishedResolve && this.finishedResolve();
          break;
        case "running":
          this.resetReadyPromise();
          break;
      }
      if (oldValue === "finished") {
        this.resetFinishedPromise();
      }
      if (value === "finished") {
        this.playStateValue = "idle";
      }
    }
  }
  /**
   * @internal
   */
  get playState() {
    return this.playStateValue;
  }
  /**
   * @internal
   */
  resetReadyPromise() {
    this.readyResolve = null;
    this.readyPromise = new Promise((resolve, reject) => {
      this.readyResolve = resolve;
    });
  }
  /**
       * Wait for the animation to be ready to play.
       * @remarks
       * ```jsx
       * const animation = animate.ease(value, 100)
       * animation.ready().then(() => {
       *    // Animation is ready
       * })
  
       * // async/await syntax
       * const animation = animate.ease(value, 100)
       * await animation.ready()
       * // Animation is ready
       * ```
       * @returns Promise that is resolved when the animation is ready to play
       * @public
       */
  get ready() {
    return this.readyPromise;
  }
  /**
   * @internal
   */
  resetFinishedPromise() {
    this.finishedResolve = null;
    this.finishedReject = null;
    this.finishedPromise = new Promise((resolve, reject) => {
      this.finishedResolve = resolve;
      this.finishedReject = reject;
    });
    this.finishedPromise.catch((reason) => {
    });
  }
  /**
   * Wait for the animation to be finished.
   * @remarks
   * ```jsx
   * // async/await syntax
   * const animation = animate.ease(value, 100)
   * await animation.finished()
   * // Animation is finished
   *
   *
   * const animation = animate.ease(value, 100)
   * animation.ready().then(() => {
   *    // Animation is finished
   * })
   * ```
   * @returns Promise that is resolved when the animation is ready to play
   * @public
   */
  get finished() {
    return this.finishedPromise;
  }
  /**
   * @internal
   */
  play() {
    this.playStateValue = "running";
    this.driver.play();
  }
  /**
   * Cancels the animation if it is still running.
   * @remarks
   * ```jsx
   * const animation = animate.ease(value, 100, {duration: 3})
   * setTimeout(() => animation.cancel(), 500)
   * ```
   * @public
   */
  cancel() {
    if (this.playStateValue !== "running") {
      return;
    }
    this.driver.cancel();
    if (this.playState !== "idle") {
      const reason = "AbortError";
      this.finishedReject && this.finishedReject(reason);
    }
    this.playStateValue = "idle";
  }
  /**
   * @internal
   */
  finish() {
    if (this.playStateSource === "running") {
      this.playStateValue = "finished";
      this.driver.finish();
    }
  }
  /**
   * @internal
   */
  isFinished() {
    return this.playStateValue === "finished";
  }
};

// ../../library/src/animation/animate.ts
function deprecatedAnimate(from, to, animator, options) {
  deprecationWarning("animate()", "2.0.0", "the new animation API (https://www.framer.com/api/animation/)");
  const target = from;
  let fromValue;
  if (isAnimatable(from) || isMotionValue2(from)) {
    fromValue = from.get();
  } else {
    fromValue = Animatable.objectToValues(from);
  }
  const animation = new FramerAnimation(target, fromValue, to, animator, options);
  animation.play();
  return animation;
}
var animate2 = /* @__PURE__ */ (() => {
  function animate4(from, to, animatorOrTransition, options) {
    return isAnimatable(from) ? deprecatedAnimate(from, to, animatorOrTransition, options) : animate(from, to, animatorOrTransition);
  }
  animate4.spring = (from, to, options) => {
    return animate4(from, to, SpringAnimator, options);
  };
  animate4.bezier = (from, to, options) => {
    return animate4(from, to, BezierAnimator, options);
  };
  animate4.linear = (from, to, options) => {
    return animate4.bezier(from, to, { ...options, curve: "linear" /* Linear */ });
  };
  animate4.ease = (from, to, options) => {
    return animate4.bezier(from, to, { ...options, curve: "ease" /* Ease */ });
  };
  animate4.easeIn = (from, to, options) => {
    return animate4.bezier(from, to, { ...options, curve: "ease-in" /* EaseIn */ });
  };
  animate4.easeOut = (from, to, options) => {
    return animate4.bezier(from, to, { ...options, curve: "ease-out" /* EaseOut */ });
  };
  animate4.easeInOut = (from, to, options) => {
    return animate4.bezier(from, to, { ...options, curve: "ease-in-out" /* EaseInOut */ });
  };
  return animate4;
})();

// ../../library/src/animation/Motion/MotionSetup.tsx
import React13 from "react";

// ../../library/src/animation/Motion/autoValueHandlers.ts
var correctBorderScale = (axis) => ({
  correct: (latest, { delta, treeScale }) => {
    if (typeof latest === "string")
      latest = parseFloat(latest);
    if (latest === 0)
      return "0px";
    let corrected = latest;
    if (delta && treeScale) {
      corrected = Math.round(latest / delta[axis].scale / treeScale[axis]);
      corrected = Math.max(corrected, 1);
    }
    return corrected + "px";
  }
});

// ../../library/src/animation/Motion/MotionSetup.tsx
addScaleCorrector({
  borderTopWidth: correctBorderScale("y"),
  borderLeftWidth: correctBorderScale("x"),
  borderRightWidth: correctBorderScale("x"),
  borderBottomWidth: correctBorderScale("y")
});
function MotionSetup({ children }) {
  return /* @__PURE__ */ React13.createElement(React13.Fragment, null, children);
}

// ../../library/src/animation/Motion/startAnimation.ts
function startAnimation(_key, value, target, transition = {}) {
  warnOnce(
    `"startAnimation" is unsupported. Use "animate" instead: https://www.framer.com/api/motion/utilities/#animate`
  );
  return new Promise((resolve) => {
    animate(value, target, {
      ...transition,
      onComplete: () => resolve()
    });
  });
}

// ../../library/src/components/AnimateLayout/LayoutIdContext.tsx
import React14, { useCallback, useContext as useContext2, useMemo, useRef } from "react";

// ../../library/src/utils/assert.ts
function assert(condition, ...msg2) {
  var _a, _b;
  if (condition)
    return;
  const e = Error("Assertion Error" + (msg2.length > 0 ? ": " + msg2.join(" ") : ""));
  if (e.stack) {
    try {
      const lines = e.stack.split("\n");
      if ((_a = lines[1]) == null ? void 0 : _a.includes("assert")) {
        lines.splice(1, 1);
        e.stack = lines.join("\n");
      } else if ((_b = lines[0]) == null ? void 0 : _b.includes("assert")) {
        lines.splice(0, 1);
        e.stack = lines.join("\n");
      }
    } catch {
    }
  }
  throw e;
}
function assertNever(x, error) {
  throw error || new Error(x ? `Unexpected value: ${x}` : "Application entered invalid state");
}

// ../../library/src/components/AnimateLayout/LayoutIdContext.tsx
var LayoutIdContext = React14.createContext({
  getLayoutId: (args) => null,
  persistLayoutIdCache: () => {
  },
  top: false,
  enabled: true
});
function LayoutIdProvider({ children }) {
  const context = useContext2(LayoutIdContext);
  if (context.top)
    return /* @__PURE__ */ React14.createElement(React14.Fragment, null, children);
  const cache3 = useRef({
    // When we provide a layoutId for a node based on it's first
    // duplicatedFrom id, we save it's layoutId mapped to it's actual id.
    // Future screen's nodes will check this cache first, to see if they've
    // previously been assigned a layoutId, or if any of there other
    // duplicatedFrom ids matched a node that was previously assigned a
    // layoutId.
    byId: {},
    byName: {},
    // When we navigate from screens that were duplicated from a future
    // screen, to that future screen, we want to do a reverse lookup on the
    // last duplicatedFrom id, rather than the id. We need to keep them
    // separate so they don't overlap.
    byLastId: {},
    byPossibleId: {},
    byLastName: {},
    byLayoutId: {},
    // When we don't have a cached layoutId for all duplicatedFrom ids, we
    // need to increment and save it so that we don't create clashing
    // layoutIds. We also need to reset name counts between screens, so we
    // record those separately.
    count: {
      byId: {},
      byName: {}
    }
  });
  const screen = useRef({
    byId: {},
    byName: {},
    byLastId: {},
    byPossibleId: {},
    byLastName: {},
    byLayoutId: {}
  });
  const usedIds = useRef(/* @__PURE__ */ new Set()).current;
  const getLayoutId = useCallback(({ id, name, duplicatedFrom }) => {
    if (!id)
      return null;
    const cacheKey = name ? "byName" : "byId";
    const previousId = cache3.current[cacheKey][id];
    if (previousId)
      return previousId;
    const nodeIdentifier = name || id;
    if (!duplicatedFrom && !usedIds.has(nodeIdentifier) && (!cache3.current.byLayoutId[nodeIdentifier] || cache3.current.byLayoutId[nodeIdentifier] === nodeIdentifier)) {
      if (cache3.current.count[cacheKey][nodeIdentifier] === void 0) {
        cache3.current.count[cacheKey][nodeIdentifier] = 0;
        cache3.current.byLayoutId[nodeIdentifier] = nodeIdentifier;
        screen.current[cacheKey][id] = nodeIdentifier;
      }
      usedIds.add(nodeIdentifier);
      return nodeIdentifier;
    }
    let possibleMatch = void 0;
    if (duplicatedFrom == null ? void 0 : duplicatedFrom.length) {
      for (let index = duplicatedFrom.length - 1; index >= 0; index--) {
        const duplicatedId = duplicatedFrom[index];
        assert(!!duplicatedId, `duplicatedId must be defined`);
        const match = cache3.current[cacheKey][duplicatedId];
        const byLastIdMatch = cache3.current.byLastId[duplicatedId];
        if (byLastIdMatch && !possibleMatch) {
          const matchedLayoutId = cache3.current.byLayoutId[byLastIdMatch];
          const shouldUseNamedLastIdMatch = !matchedLayoutId || matchedLayoutId === name;
          if (byLastIdMatch && !usedIds.has(byLastIdMatch) && (name ? shouldUseNamedLastIdMatch : true)) {
            possibleMatch = [byLastIdMatch, duplicatedId];
          }
        }
        const previousLayoutId = cache3.current.byLayoutId[match];
        const shouldUseNamedMatch = !previousLayoutId || previousLayoutId === name;
        if (match && !usedIds.has(match) && (name ? shouldUseNamedMatch : true)) {
          screen.current[cacheKey][id] = match;
          screen.current.byLastId[duplicatedId] = match;
          usedIds.add(match);
          return match;
        }
      }
    }
    const last = cache3.current.byLastId[id];
    if (last && !usedIds.has(last)) {
      usedIds.add(last);
      screen.current.byId[id] = last;
      return last;
    }
    if (possibleMatch) {
      const [match, duplicatedId] = possibleMatch;
      screen.current[cacheKey][id] = match;
      screen.current.byLastId[duplicatedId] = match;
      usedIds.add(match);
      return match;
    }
    const possible = cache3.current.byPossibleId[id];
    if (possible && !usedIds.has(possible)) {
      usedIds.add(possible);
      screen.current.byId[id] = possible;
      return possible;
    }
    const rootDuplicatedId = duplicatedFrom == null ? void 0 : duplicatedFrom[0];
    const identifier = name || rootDuplicatedId || id;
    const value = cache3.current.count[cacheKey][identifier] + 1 || 0;
    const { layoutId, value: nextValue } = nextLayoutId(identifier, value, usedIds);
    cache3.current.count[cacheKey][identifier] = nextValue;
    screen.current[cacheKey][id] = layoutId;
    if (duplicatedFrom == null ? void 0 : duplicatedFrom.length) {
      if (!name) {
        const lastId = duplicatedFrom[duplicatedFrom.length - 1];
        if (lastId) {
          screen.current.byLastId[lastId] = layoutId;
        }
        if (duplicatedFrom.length > 1) {
          for (let index = 0; index < duplicatedFrom.length - 1; index++) {
            const possibleId = duplicatedFrom[index];
            if (possibleId === void 0)
              continue;
            if (!screen.current.byPossibleId[possibleId]) {
              screen.current.byPossibleId[possibleId] = layoutId;
            }
          }
        }
      }
    }
    screen.current.byLayoutId[layoutId] = nodeIdentifier;
    usedIds.add(layoutId);
    return layoutId;
  }, []);
  const persistLayoutIdCache = useCallback(() => {
    cache3.current = {
      byId: {
        ...cache3.current.byId,
        ...screen.current.byId
      },
      byLastId: {
        ...cache3.current.byLastId,
        ...screen.current.byLastId
      },
      byPossibleId: {
        ...cache3.current.byPossibleId,
        ...screen.current.byPossibleId
      },
      byName: {
        ...cache3.current.byName,
        ...screen.current.byName
      },
      byLastName: { ...cache3.current.byLastName, ...screen.current.byLastName },
      byLayoutId: { ...cache3.current.byLayoutId, ...screen.current.byLayoutId },
      // Unlike the count.byId, we need to reset the count.byName because
      // named layers might not have duplicatedFrom ids (e.g. imported
      // from Figma). When we can use duplicatedFrom ids to check if an id
      // was assigned on a previous screen, we don't increment the count,
      // which means that the count only increments for new items, and
      // only increments on a new screen if the node is new. Since named
      // layers need to always match in some way between screens, we reset
      // the count so that the second named layer on a second screen is
      // always name-1 if it doesn't have any duplicatedFrom ids.
      count: {
        ...cache3.current.count,
        byName: {}
      }
    };
    screen.current = {
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {}
    };
    usedIds.clear();
  }, []);
  const contextValue = useRef({
    getLayoutId,
    persistLayoutIdCache,
    top: true,
    enabled: true
  }).current;
  return /* @__PURE__ */ React14.createElement(LayoutIdContext.Provider, { value: contextValue }, children);
}
function nextLayoutId(identifier, initialValue, usedIds) {
  let value = initialValue;
  let layoutId = value ? `${identifier}-${value}` : identifier;
  while (usedIds.has(layoutId)) {
    value++;
    layoutId = `${identifier}-${value}`;
  }
  return { layoutId, value };
}
function AutomaticLayoutIds({ enabled = true, ...props }) {
  const context = useContext2(LayoutIdContext);
  const contextValue = useMemo(() => {
    return {
      ...context,
      enabled
    };
  }, [enabled]);
  return /* @__PURE__ */ React14.createElement(LayoutIdContext.Provider, { ...props, value: contextValue });
}

// ../../library/src/components/Device/Device.tsx
import React16, { Component as Component2 } from "react";

// ../../library/src/components/utils/useConstant.ts
import { useRef as useRef2 } from "react";
function useConstant(init) {
  const ref = useRef2(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// ../../library/src/components/Device/ErrorPlaceholder.tsx
import React15 from "react";
var baseStyle = {
  background: void 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  lineHeight: "1.4em",
  textOverflow: "ellipsis",
  overflow: "hidden",
  minHeight: 0,
  width: "100%",
  height: "100%"
};
var errorStyle = {
  ...baseStyle,
  border: "1px solid rgba(149, 149, 149, 0.15)",
  borderRadius: 6,
  fontSize: "12px",
  backgroundColor: "rgba(149, 149, 149, 0.1)",
  color: "#a5a5a5"
};
var textStyle = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  flexShrink: 0,
  padding: `0 10px`
};
var titleStyle = {
  ...textStyle,
  // TODO: Use Fresco tokens for this.
  fontWeight: 500
};
var messageStyle = {
  ...textStyle,
  whiteSpace: "pre",
  maxHeight: "calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))",
  WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
};
function ErrorPlaceholder(props) {
  const { error, file } = props;
  const title = file ? `Error in ${stripSlash(file)}` : "Error";
  const message = error instanceof Error ? error.message : "" + error;
  return /* @__PURE__ */ React15.createElement("div", { style: errorStyle }, /* @__PURE__ */ React15.createElement("div", { className: "text", style: titleStyle }, title), message && /* @__PURE__ */ React15.createElement("div", { className: "text", style: messageStyle }, message));
}
function stripSlash(title) {
  if (title.startsWith("./")) {
    return title.replace("./", "");
  }
  return title;
}

// ../../library/src/components/Device/Device.tsx
function getScaleData(deviceOptions, containerSize) {
  const { componentWidth, componentHeight } = getComponentSize(deviceOptions);
  const scaleX = containerSize.width / componentWidth;
  const scaleY = containerSize.height / componentHeight;
  const scale2 = Math.min(scaleX, scaleY, 1);
  let screenScalePixelFix = 1;
  if (scale2 < 1) {
    const actualScreenWidth = deviceOptions.screenWidth * scale2;
    const desiredScreenWidth = actualScreenWidth + 1;
    const screenScaleX = desiredScreenWidth / actualScreenWidth;
    const actualScreenHeight = deviceOptions.screenHeight * scale2;
    const desiredScreenHeight = actualScreenHeight + 1;
    const screenScaleY = desiredScreenHeight / actualScreenHeight;
    const screenScale = Math.max(screenScaleX, screenScaleY);
    screenScalePixelFix = screenScale;
  }
  return {
    scale: scale2,
    screenScalePixelFix,
    scaledComponentWidth: componentWidth * scale2,
    scaledComponentHeight: componentHeight * scale2,
    scaledDeviceWidth: deviceOptions.deviceWidth * scale2,
    scaledDeviceHeight: deviceOptions.deviceHeight * scale2
  };
}
function getColorsFromTheme(theme, type) {
  if (type === "none")
    return {};
  if (!theme)
    return {};
  const isDarkTheme = theme === "dark";
  return {
    shadowColor: isDarkTheme ? "rgba(0, 0, 0, 0.55)" : "rgba(0, 0, 0, 0.15)",
    bezelColor: isDarkTheme ? "#222" : "#fff",
    bezelShadeColor: isDarkTheme ? "#000" : "rgba(0, 0, 0, 0.2)",
    screenColor: isDarkTheme ? "#333" : "#eee"
  };
}
var ErrorBoundary2 = class extends Component2 {
  constructor() {
    super(...arguments);
    this.state = {};
  }
  componentDidCatch(error, info) {
    let stack = info.componentStack.split("\n").filter((line) => line.length !== 0);
    let currentIndex = 0;
    for (const line of stack) {
      if (line.startsWith(`    in ${this.constructor.name}`)) {
        break;
      }
      currentIndex++;
    }
    stack = stack.slice(0, currentIndex);
    this.setState({
      lastError: {
        error,
        componentStack: stack
      }
    });
  }
  componentDidUpdate(_, prevState) {
    if (this.state.lastError === void 0)
      return;
    if (prevState.lastError === this.state.lastError)
      this.setState({ lastError: void 0 });
  }
  render() {
    if (this.state.lastError) {
      return /* @__PURE__ */ React16.createElement(ErrorPlaceholder, { error: this.state.lastError.error.message, file: "Prototype" });
    }
    return this.props.children;
  }
};
function Device({
  canResize = false,
  children,
  ResizeObserver: ResizeObserver2 = safeWindow.ResizeObserver,
  ...options
}) {
  var _a;
  const optionsRef = React16.useRef(void 0);
  if (optionsRef.current === void 0)
    optionsRef.current = options;
  const deviceAppearance = (_a = options.deviceOptions) == null ? void 0 : _a.appearance.type;
  const scaleDataRef = React16.useRef();
  const containerRef = React16.useRef(null);
  const deviceRef = React16.useRef(null);
  const screenRef = React16.useRef(null);
  const updateImperativeScale = ({ scale: scale2, screenScalePixelFix }) => {
    if (!scaleDataRef.current || !deviceRef.current || !screenRef.current)
      return;
    deviceRef.current.style.transform = `scale(${scale2})`;
    screenRef.current.style.transform = `scale(${screenScalePixelFix})`;
  };
  if (scaleDataRef.current === void 0 && options.deviceOptions && options.scaleTo && options.scaleTo !== "dynamic") {
    const scale2 = scaleDataRef.current = getScaleData(options.deviceOptions, options.scaleTo);
    updateImperativeScale(scale2);
  }
  const invertScale = React16.useCallback(
    (point) => {
      if (!scaleDataRef.current)
        return point;
      const { scale: scale2 = 1 } = scaleDataRef.current;
      return { x: point.x / scale2, y: point.y / scale2 };
    },
    [scaleDataRef]
  );
  const updateScale = React16.useCallback(() => {
    var _a2;
    const { deviceOptions, scaleTo, onScaleChange } = (_a2 = optionsRef.current) != null ? _a2 : {};
    if (!deviceOptions || !scaleTo || scaleTo !== "dynamic" || !containerRef.current)
      return;
    if (containerRef.current.offsetWidth === 0 || containerRef.current.offsetHeight === 0)
      return;
    const scaleData = scaleDataRef.current = getScaleData(deviceOptions, {
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight
    });
    onScaleChange == null ? void 0 : onScaleChange(scaleData);
    updateImperativeScale(scaleData);
  }, []);
  const observer = useConstant(() => {
    if (!ResizeObserver2) {
      return;
    }
    return new ResizeObserver2(() => updateScale());
  });
  React16.useLayoutEffect(() => {
    optionsRef.current = {
      deviceOptions: options.deviceOptions,
      onScaleChange: options.onScaleChange,
      overrideTheme: options.overrideTheme,
      scaleTo: options.scaleTo
    };
  }, [options.deviceOptions, options.onScaleChange, options.overrideTheme, options.scaleTo]);
  React16.useLayoutEffect(() => {
    updateScale();
  }, [updateScale]);
  React16.useEffect(() => {
    if (!observer || !containerRef.current)
      return;
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [observer]);
  const { containerStyle, handStyle, deviceStyle, deviceImageStyle, screenStyle } = getDeviceStyle(options);
  const resizeStyles = canResize ? {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  } : {};
  return /* @__PURE__ */ React16.createElement("div", { style: { ...containerStyle, ...resizeStyles }, ref: containerRef }, /* @__PURE__ */ React16.createElement("div", { style: { ...deviceStyle }, ref: deviceRef }, handStyle && /* @__PURE__ */ React16.createElement("div", { style: handStyle }), deviceAppearance === "external-clay" && deviceImageStyle && /* @__PURE__ */ React16.createElement("div", { style: deviceImageStyle }), /* @__PURE__ */ React16.createElement(
    "div",
    {
      style: {
        ...screenStyle,
        pointerEvents: void 0,
        backgroundColor: children ? "white" : screenStyle.backgroundColor
      },
      ref: screenRef
    },
    /* @__PURE__ */ React16.createElement(MotionConfig, { transformPagePoint: invertScale }, /* @__PURE__ */ React16.createElement(ErrorBoundary2, null, children))
  ), deviceAppearance === "realistic" && deviceImageStyle && /* @__PURE__ */ React16.createElement("div", { style: deviceImageStyle })));
}
var DEVICE_PADDING = 45;
var HAND_IMG_WIDTH = 2400;
var HAND_IMG_HEIGHT = 3740;
var HAND_IMG_GAP_WIDTH = 859;
var HAND_IMG_GAP_LEFT = 772;
var HAND_IMG_GAP_BOTTOM = 992 - 5;
var noDeviceSize = { componentWidth: 500, componentHeight: 500 };
function getComponentSize(options) {
  if (!options)
    return noDeviceSize;
  const { deviceWidth, deviceHeight, noPadding } = options;
  const padding = noPadding ? 0 : DEVICE_PADDING * 2;
  return {
    componentWidth: deviceWidth + padding,
    componentHeight: deviceHeight + padding
  };
}
function getDeviceStyle({ scaleTo, deviceOptions, overrideTheme } = {}) {
  var _a, _b, _c;
  const noDeviceStyle = { containerStyle: {}, deviceStyle: {}, screenStyle: {} };
  if (!deviceOptions)
    return noDeviceStyle;
  const { componentWidth, componentHeight } = getComponentSize(deviceOptions);
  const overriddenColors = getColorsFromTheme(overrideTheme, deviceOptions.appearance.type);
  const {
    deviceWidth,
    deviceHeight,
    appearance,
    screenWidth,
    screenHeight,
    screenMaxHeight,
    screenOffsetTop,
    screenOffsetLeft,
    screenRadius,
    screenMaskImage,
    screenColor,
    shadow,
    background,
    hand
  } = deviceOptions;
  const boxShadows = [];
  if (appearance.type === "clay" && shadow) {
    boxShadows.push(shadow);
  }
  let bezelStyle = void 0;
  if (appearance.type === "clay") {
    bezelStyle = {
      borderRadius: appearance.bezelRadius,
      backgroundColor: overriddenColors.bezelColor || appearance.bezelColor
    };
    if (overriddenColors.bezelShadeColor || appearance.bezelShadeColor) {
      boxShadows.push(`inset 0 0 15px ${overriddenColors.bezelShadeColor || appearance.bezelShadeColor}`);
    }
  }
  const handOffsetLeft = (_a = hand == null ? void 0 : hand.offsetLeft) != null ? _a : 0;
  const handOffsetRight = (_b = hand == null ? void 0 : hand.offsetRight) != null ? _b : 0;
  const handOffsetBottom = (_c = hand == null ? void 0 : hand.offsetBottom) != null ? _c : 0;
  const handScale = (deviceWidth - handOffsetLeft - handOffsetRight) / HAND_IMG_GAP_WIDTH;
  return {
    containerStyle: {
      width: scaleTo ? "100%" : componentWidth,
      height: scaleTo ? "100%" : componentHeight,
      flex: "1 1 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      background
    },
    handStyle: hand && {
      width: HAND_IMG_WIDTH * handScale,
      height: HAND_IMG_HEIGHT * handScale,
      position: "absolute",
      pointerEvents: "none",
      backgroundImage: `url("${hand.imageUrl}")`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      left: -HAND_IMG_GAP_LEFT * handScale + handOffsetLeft,
      bottom: -HAND_IMG_GAP_BOTTOM * handScale + handOffsetBottom
    },
    deviceStyle: {
      width: deviceWidth,
      height: deviceHeight,
      flexShrink: 0,
      position: "absolute",
      boxShadow: boxShadows.join(","),
      ...bezelStyle
    },
    deviceImageStyle: appearance.type === "realistic" || appearance.type === "external-clay" ? {
      width: appearance.imageWidth,
      height: appearance.imageHeight,
      position: "absolute",
      pointerEvents: "none",
      overflow: "hidden",
      backgroundImage: `url("${appearance.imageUrl}")`,
      backgroundPosition: "top left",
      backgroundRepeat: "no-repeat",
      backgroundSize: `${appearance.imageWidth}px ${appearance.imageHeight}px`,
      // Rotate 90 degrees counter-clockwise around (0,0), then move the
      // result down into the viewport (rightmost transform is applied first).
      transformOrigin: "top left",
      transform: appearance.rotateImage ? `translateY(${appearance.imageWidth}px) rotate(-90deg)` : void 0
    } : void 0,
    screenStyle: {
      width: screenWidth,
      height: screenHeight,
      maxHeight: screenMaxHeight,
      position: "absolute",
      top: screenOffsetTop,
      left: screenOffsetLeft,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      borderRadius: screenRadius,
      backgroundColor: overriddenColors.screenColor || screenColor,
      ...screenMaskImage && {
        maskImage: screenMaskImage,
        WebkitMaskImage: screenMaskImage,
        maskSize: "contain",
        WebkitMaskSize: "contain"
      }
    }
  };
}

// ../../library/src/components/Device/DeviceCodeComponent.tsx
import React19 from "react";

// ../../library/src/render/types/NewConstraints.tsx
import React17 from "react";

// ../../library/src/render/utils/isFiniteNumber.ts
function isFiniteNumber(value) {
  return typeof value === "number" && isFinite(value);
}
function finiteNumber(value) {
  return isFiniteNumber(value) ? value : void 0;
}

// ../../library/src/utils/type-guards.ts
function isEmpty(obj) {
  return !obj || !Object.keys(obj).length && obj.constructor === Object;
}
function isReactElement(test2) {
  return typeof test2 !== "string" && typeof test2 !== "number";
}
function isReactChild(test2) {
  return test2 !== null && typeof test2 !== "undefined" && typeof test2 !== "boolean" && !isEmpty(test2);
}

// ../../library/src/render/types/Rect.ts
var Rect;
((Rect2) => {
  function equals(rect, other) {
    if (rect === other)
      return true;
    if (!rect || !other)
      return false;
    return rect.x === other.x && rect.y === other.y && rect.width === other.width && rect.height === other.height;
  }
  Rect2.equals = equals;
  Rect2.atOrigin = (size2) => {
    return { ...size2, x: 0, y: 0 };
  };
  Rect2.fromTwoPoints = (a, b) => {
    return {
      x: Math.min(a.x, b.x),
      y: Math.min(a.y, b.y),
      width: Math.abs(a.x - b.x),
      height: Math.abs(a.y - b.y)
    };
  };
  Rect2.fromRect = (rect) => {
    return {
      x: rect.left,
      y: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  };
  Rect2.multiply = (rect, n) => {
    return {
      x: rect.x * n,
      y: rect.y * n,
      width: rect.width * n,
      height: rect.height * n
    };
  };
  Rect2.divide = (rect, n) => {
    return (0, Rect2.multiply)(rect, 1 / n);
  };
  Rect2.offset = (rect, delta) => {
    const xOffset = typeof delta.x === "number" ? delta.x : 0;
    const yOffset = typeof delta.y === "number" ? delta.y : 0;
    return {
      ...rect,
      x: rect.x + xOffset,
      y: rect.y + yOffset
    };
  };
  function inflate(rect, value) {
    if (value === 0)
      return rect;
    const doubleValue = 2 * value;
    return {
      x: rect.x - value,
      y: rect.y - value,
      width: rect.width + doubleValue,
      height: rect.height + doubleValue
    };
  }
  Rect2.inflate = inflate;
  Rect2.pixelAligned = (rect) => {
    const x = Math.round(rect.x);
    const y = Math.round(rect.y);
    const rectMaxX = Math.round(rect.x + rect.width);
    const rectMaxY = Math.round(rect.y + rect.height);
    const width = Math.max(rectMaxX - x, 0);
    const height = Math.max(rectMaxY - y, 0);
    return { x, y, width, height };
  };
  Rect2.halfPixelAligned = (rect) => {
    const x = Math.round(rect.x * 2) / 2;
    const y = Math.round(rect.y * 2) / 2;
    const rectMaxX = Math.round((rect.x + rect.width) * 2) / 2;
    const rectMaxY = Math.round((rect.y + rect.height) * 2) / 2;
    const width = Math.max(rectMaxX - x, 1);
    const height = Math.max(rectMaxY - y, 1);
    return { x, y, width, height };
  };
  Rect2.round = (rect, decimals = 0) => {
    const x = roundedNumber(rect.x, decimals);
    const y = roundedNumber(rect.y, decimals);
    const width = roundedNumber(rect.width, decimals);
    const height = roundedNumber(rect.height, decimals);
    return { x, y, width, height };
  };
  Rect2.roundToOutside = (rect) => {
    const x = Math.floor(rect.x);
    const y = Math.floor(rect.y);
    const rectMaxX = Math.ceil(rect.x + rect.width);
    const rectMaxY = Math.ceil(rect.y + rect.height);
    const width = Math.max(rectMaxX - x, 0);
    const height = Math.max(rectMaxY - y, 0);
    return { x, y, width, height };
  };
  Rect2.minX = (rect) => {
    return rect.x;
  };
  Rect2.maxX = (rect) => {
    return rect.x + rect.width;
  };
  Rect2.minY = (rect) => {
    return rect.y;
  };
  Rect2.maxY = (rect) => {
    return rect.y + rect.height;
  };
  Rect2.positions = (rect) => {
    return {
      minX: rect.x,
      midX: rect.x + rect.width / 2,
      maxX: (0, Rect2.maxX)(rect),
      minY: rect.y,
      midY: rect.y + rect.height / 2,
      maxY: (0, Rect2.maxY)(rect)
    };
  };
  Rect2.center = (rect) => {
    return {
      x: rect.x + rect.width / 2,
      y: rect.y + rect.height / 2
    };
  };
  Rect2.fromPoints = (ps) => {
    const xValues = ps.map((point) => point.x);
    const yValues = ps.map((point) => point.y);
    const x = Math.min(...xValues);
    const y = Math.min(...yValues);
    const width = Math.max(...xValues) - x;
    const height = Math.max(...yValues) - y;
    return { x, y, width, height };
  };
  Rect2.merge = (...rect) => {
    const min = {
      x: Math.min(...rect.map(Rect2.minX)),
      y: Math.min(...rect.map(Rect2.minY))
    };
    const max = {
      x: Math.max(...rect.map(Rect2.maxX)),
      y: Math.max(...rect.map(Rect2.maxY))
    };
    return (0, Rect2.fromTwoPoints)(min, max);
  };
  Rect2.intersection = (rect1, rect2) => {
    const x = Math.max(rect1.x, rect2.x);
    const x2 = Math.min(rect1.x + rect1.width, rect2.x + rect2.width);
    const y = Math.max(rect1.y, rect2.y);
    const y2 = Math.min(rect1.y + rect1.height, rect2.y + rect2.height);
    return { x, y, width: x2 - x, height: y2 - y };
  };
  Rect2.points = (rect) => {
    return [
      { x: (0, Rect2.minX)(rect), y: (0, Rect2.minY)(rect) },
      { x: (0, Rect2.minX)(rect), y: (0, Rect2.maxY)(rect) },
      { x: (0, Rect2.maxX)(rect), y: (0, Rect2.minY)(rect) },
      { x: (0, Rect2.maxX)(rect), y: (0, Rect2.maxY)(rect) }
    ];
  };
  Rect2.transform = (rect, matrix) => {
    const { x: x1, y: y1 } = matrix.transformPoint({ x: rect.x, y: rect.y });
    const { x: x2, y: y2 } = matrix.transformPoint({ x: rect.x + rect.width, y: rect.y });
    const { x: x3, y: y3 } = matrix.transformPoint({ x: rect.x + rect.width, y: rect.y + rect.height });
    const { x: x4, y: y4 } = matrix.transformPoint({ x: rect.x, y: rect.y + rect.height });
    const x = Math.min(x1, x2, x3, x4);
    const width = Math.max(x1, x2, x3, x4) - x;
    const y = Math.min(y1, y2, y3, y4);
    const height = Math.max(y1, y2, y3, y4) - y;
    return { x, y, width, height };
  };
  Rect2.containsPoint = (rect, point) => {
    if (point.x < (0, Rect2.minX)(rect)) {
      return false;
    }
    if (point.x > (0, Rect2.maxX)(rect)) {
      return false;
    }
    if (point.y < (0, Rect2.minY)(rect)) {
      return false;
    }
    if (point.y > (0, Rect2.maxY)(rect)) {
      return false;
    }
    if (isNaN(rect.x)) {
      return false;
    }
    if (isNaN(rect.y)) {
      return false;
    }
    return true;
  };
  Rect2.containsRect = (rectA, rectB) => {
    for (const point of (0, Rect2.points)(rectB)) {
      if (!(0, Rect2.containsPoint)(rectA, point)) {
        return false;
      }
    }
    return true;
  };
  Rect2.toCSS = (rect) => {
    return {
      display: "block",
      transform: `translate(${rect.x}px, ${rect.y}px)`,
      width: `${rect.width}px`,
      height: `${rect.height}px`
    };
  };
  Rect2.inset = (rect, n) => {
    return {
      x: rect.x + n,
      y: rect.y + n,
      width: Math.max(0, rect.width - 2 * n),
      height: Math.max(0, rect.height - 2 * n)
    };
  };
  Rect2.intersects = (rectA, rectB) => {
    return !(rectB.x >= (0, Rect2.maxX)(rectA) || (0, Rect2.maxX)(rectB) <= rectA.x || rectB.y >= (0, Rect2.maxY)(rectA) || (0, Rect2.maxY)(rectB) <= rectA.y);
  };
  Rect2.overlapHorizontally = (rectA, rectB) => {
    const aMax = Rect2.maxX(rectA);
    const bMax = Rect2.maxX(rectB);
    return aMax > rectB.x && bMax > rectA.x;
  };
  Rect2.overlapVertically = (rectA, rectB) => {
    const aMax = Rect2.maxY(rectA);
    const bMax = Rect2.maxY(rectB);
    return aMax > rectB.y && bMax > rectA.y;
  };
  Rect2.doesNotIntersect = (rect, rects) => {
    return rects.find((comparingRect) => {
      return Rect2.intersects(comparingRect, rect);
    }) === void 0;
  };
  Rect2.isEqual = (rectA, rectB) => {
    if (rectA && rectB) {
      const { x, y, width, height } = rectA;
      return rectB.x === x && rectB.y === y && rectB.width === width && rectB.height === height;
    } else {
      return rectA === rectB;
    }
  };
  Rect2.cornerPoints = (rect) => {
    const rectMinX = rect.x;
    const rectMaxX = rect.x + rect.width;
    const rectMinY = rect.y;
    const rectMaxY = rect.y + rect.height;
    const corner1 = { x: rectMinX, y: rectMinY };
    const corner2 = { x: rectMaxX, y: rectMinY };
    const corner3 = { x: rectMaxX, y: rectMaxY };
    const corner4 = { x: rectMinX, y: rectMaxY };
    return [corner1, corner2, corner3, corner4];
  };
  Rect2.midPoints = (rect) => {
    const rectMinX = rect.x;
    const rectMidX = rect.x + rect.width / 2;
    const rectMaxX = rect.x + rect.width;
    const rectMinY = rect.y;
    const rectMidY = rect.y + rect.height / 2;
    const rectMaxY = rect.y + rect.height;
    const corner1 = { x: rectMidX, y: rectMinY };
    const corner2 = { x: rectMaxX, y: rectMidY };
    const corner3 = { x: rectMidX, y: rectMaxY };
    const corner4 = { x: rectMinX, y: rectMidY };
    return [corner1, corner2, corner3, corner4];
  };
  Rect2.pointDistance = (rect, point) => {
    let x = 0;
    let y = 0;
    if (point.x < rect.x) {
      x = rect.x - point.x;
    } else if (point.x > Rect2.maxX(rect)) {
      x = point.x - Rect2.maxX(rect);
    }
    if (point.y < rect.y) {
      y = rect.y - point.y;
    } else if (point.y > Rect2.maxY(rect)) {
      y = point.y - Rect2.maxY(rect);
    }
    return Point.distance({ x, y }, { x: 0, y: 0 });
  };
  const fromAnyDefaults = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  Rect2.fromAny = (rect, defaults = fromAnyDefaults) => {
    return {
      x: rect.x || defaults.x,
      y: rect.y || defaults.y,
      width: rect.width || defaults.width,
      height: rect.height || defaults.height
    };
  };
})(Rect || (Rect = {}));

// ../../library/src/render/types/Constraints.ts
var constraintDefaults = {
  left: null,
  right: null,
  top: null,
  bottom: null,
  centerX: "50%",
  centerY: "50%",
  aspectRatio: null,
  parentSize: null,
  width: 100,
  height: 100
};
var DimensionType = /* @__PURE__ */ ((DimensionType2) => {
  DimensionType2[DimensionType2["FixedNumber"] = 0] = "FixedNumber";
  DimensionType2[DimensionType2["Percentage"] = 1] = "Percentage";
  DimensionType2[DimensionType2["Auto"] = 2] = "Auto";
  DimensionType2[DimensionType2["FractionOfFreeSpace"] = 3] = "FractionOfFreeSpace";
  DimensionType2[DimensionType2["Viewport"] = 4] = "Viewport";
  return DimensionType2;
})(DimensionType || {});
function isConstraintSupportingChild(child) {
  if (!isReactChild(child) || !isReactElement(child)) {
    return false;
  }
  return true;
}
var ConstraintMask;
((ConstraintMask2) => {
  ConstraintMask2.quickfix = (constraints) => {
    if (constraints.widthType === 2 /* Auto */ || constraints.heightType === 2 /* Auto */) {
      constraints.aspectRatio = null;
    }
    if (isFiniteNumber(constraints.aspectRatio)) {
      if (constraints.left && constraints.right) {
        constraints.widthType = 0 /* FixedNumber */;
      }
      if (constraints.top && constraints.bottom) {
        constraints.heightType = 0 /* FixedNumber */;
      }
      if (constraints.left && constraints.right && constraints.top && constraints.bottom) {
        constraints.bottom = false;
      }
      if (constraints.widthType !== 0 /* FixedNumber */ && constraints.heightType !== 0 /* FixedNumber */) {
        constraints.heightType = 0 /* FixedNumber */;
      }
    }
    if (constraints.left && constraints.right) {
      if (constraints.fixedSize || constraints.widthType === 2 /* Auto */ || isFiniteNumber(constraints.maxWidth)) {
        constraints.right = false;
      }
      constraints.widthType = 0 /* FixedNumber */;
    }
    if (constraints.top && constraints.bottom) {
      if (constraints.fixedSize || constraints.heightType === 2 /* Auto */ || isFiniteNumber(constraints.maxHeight)) {
        constraints.bottom = false;
      }
      constraints.heightType = 0 /* FixedNumber */;
    }
    return constraints;
  };
})(ConstraintMask || (ConstraintMask = {}));
function valueToDimensionType(value) {
  if (typeof value === "string") {
    const trimmedValue = value.trim();
    if (trimmedValue === "auto")
      return 2 /* Auto */;
    if (trimmedValue.endsWith("fr"))
      return 3 /* FractionOfFreeSpace */;
    if (trimmedValue.endsWith("%"))
      return 1 /* Percentage */;
    if (trimmedValue.endsWith("vw") || trimmedValue.endsWith("vh"))
      return 4 /* Viewport */;
  }
  return 0 /* FixedNumber */;
}
var ConstraintValues;
((ConstraintValues2) => {
  ConstraintValues2.fromProperties = (props) => {
    const { left, right, top, bottom, width, height, centerX, centerY, aspectRatio, autoSize } = props;
    const constraints = ConstraintMask.quickfix({
      left: isFiniteNumber(left) || isAnimatable(left),
      right: isFiniteNumber(right) || isAnimatable(right),
      top: isFiniteNumber(top) || isAnimatable(top),
      bottom: isFiniteNumber(bottom) || isAnimatable(bottom),
      widthType: valueToDimensionType(width),
      heightType: valueToDimensionType(height),
      aspectRatio: aspectRatio || null,
      fixedSize: autoSize === true
    });
    let widthValue = null;
    let heightValue = null;
    let widthType = 0 /* FixedNumber */;
    let heightType = 0 /* FixedNumber */;
    if (constraints.widthType !== 0 /* FixedNumber */ && typeof width === "string") {
      const parsedWidth = parseFloat(width);
      if (width.endsWith("fr")) {
        widthType = 3 /* FractionOfFreeSpace */;
        widthValue = parsedWidth;
      } else if (width === "auto") {
        widthType = 2 /* Auto */;
      } else {
        widthType = 1 /* Percentage */;
        widthValue = parsedWidth / 100;
      }
    } else if (width !== void 0 && typeof width !== "string") {
      widthValue = Animatable.getNumber(width);
    }
    if (constraints.heightType !== 0 /* FixedNumber */ && typeof height === "string") {
      const parsedHeight = parseFloat(height);
      if (height.endsWith("fr")) {
        heightType = 3 /* FractionOfFreeSpace */;
        heightValue = parsedHeight;
      } else if (height === "auto") {
        heightType = 2 /* Auto */;
      } else {
        heightType = 1 /* Percentage */;
        heightValue = parseFloat(height) / 100;
      }
    } else if (height !== void 0 && typeof height !== "string") {
      heightValue = Animatable.getNumber(height);
    }
    let centerAnchorX = 0.5;
    let centerAnchorY = 0.5;
    if (centerX) {
      centerAnchorX = parseFloat(centerX) / 100;
    }
    if (centerY) {
      centerAnchorY = parseFloat(centerY) / 100;
    }
    return {
      left: constraints.left ? Animatable.getNumber(left) : null,
      right: constraints.right ? Animatable.getNumber(right) : null,
      top: constraints.top ? Animatable.getNumber(top) : null,
      bottom: constraints.bottom ? Animatable.getNumber(bottom) : null,
      widthType,
      heightType,
      width: widthValue,
      height: heightValue,
      aspectRatio: constraints.aspectRatio || null,
      centerAnchorX,
      centerAnchorY
    };
  };
  ConstraintValues2.toSize = (values, parentSize, autoSize, freeSpace) => {
    let width = null;
    let height = null;
    const parentWidth = parentSize ? Animatable.getNumber(parentSize.width) : null;
    const parentHeight = parentSize ? Animatable.getNumber(parentSize.height) : null;
    const hOpposingPinsOffset = pinnedOffset(values.left, values.right);
    if (parentWidth && isFiniteNumber(hOpposingPinsOffset)) {
      width = parentWidth - hOpposingPinsOffset;
    } else if (autoSize && values.widthType === 2 /* Auto */) {
      width = autoSize.width;
    } else if (isFiniteNumber(values.width)) {
      switch (values.widthType) {
        case 0 /* FixedNumber */:
          width = values.width;
          break;
        case 3 /* FractionOfFreeSpace */:
          width = freeSpace ? freeSpace.freeSpaceInParent.width / freeSpace.freeSpaceUnitDivisor.width * values.width : null;
          break;
        case 1 /* Percentage */:
        case 4 /* Viewport */:
          if (parentWidth) {
            width = parentWidth * values.width;
          }
          break;
        case 2 /* Auto */:
          break;
        default:
          assertNever(values.widthType);
      }
    }
    const vOpposingPinsOffset = pinnedOffset(values.top, values.bottom);
    if (parentHeight && isFiniteNumber(vOpposingPinsOffset)) {
      height = parentHeight - vOpposingPinsOffset;
    } else if (autoSize && values.heightType === 2 /* Auto */) {
      height = autoSize.height;
    } else if (isFiniteNumber(values.height)) {
      switch (values.heightType) {
        case 0 /* FixedNumber */:
          height = values.height;
          break;
        case 3 /* FractionOfFreeSpace */:
          height = freeSpace ? freeSpace.freeSpaceInParent.height / freeSpace.freeSpaceUnitDivisor.height * values.height : null;
          break;
        case 1 /* Percentage */:
        case 4 /* Viewport */:
          if (parentHeight) {
            height = parentHeight * values.height;
          }
          break;
        case 2 /* Auto */:
          break;
        default:
          assertNever(values.heightType);
      }
    }
    return sizeAfterApplyingDefaultsAndAspectRatio(width, height, values, {
      height: parentHeight != null ? parentHeight : 0,
      width: parentWidth != null ? parentWidth : 0
    });
  };
  ConstraintValues2.toRect = (values, parentSizeInfo = null, autoSize = null, pixelAlign = false, freeSpace = null) => {
    var _a, _b;
    let x = values.left || 0;
    let y = values.top || 0;
    const parentSizeForSizing = (_a = parentSizeInfo == null ? void 0 : parentSizeInfo.sizing) != null ? _a : null;
    const parentSizeForPositioning = (_b = parentSizeInfo == null ? void 0 : parentSizeInfo.positioning) != null ? _b : null;
    const { width, height } = ConstraintValues2.toSize(values, parentSizeForSizing, autoSize, freeSpace);
    const positioningParentWidth = parentSizeForPositioning ? Animatable.getNumber(parentSizeForPositioning.width) : null;
    const positioningParentHeight = parentSizeForPositioning ? Animatable.getNumber(parentSizeForPositioning.height) : null;
    if (values.left !== null) {
      x = values.left;
    } else if (positioningParentWidth && values.right !== null) {
      x = positioningParentWidth - values.right - width;
    } else if (positioningParentWidth) {
      x = values.centerAnchorX * positioningParentWidth - width / 2;
    }
    if (values.top !== null) {
      y = values.top;
    } else if (positioningParentHeight && values.bottom !== null) {
      y = positioningParentHeight - values.bottom - height;
    } else if (positioningParentHeight) {
      y = values.centerAnchorY * positioningParentHeight - height / 2;
    }
    const f = { x, y, width, height };
    if (pixelAlign) {
      return Rect.pixelAligned(f);
    }
    return f;
  };
})(ConstraintValues || (ConstraintValues = {}));
var defaultWidth = 200;
var defaultHeight = 200;
function getConstraintValue(constraint, value, parentSize) {
  if (typeof value === "string") {
    if (value.endsWith("%") && parentSize) {
      switch (constraint) {
        case "maxWidth":
        case "minWidth":
          return parseFloat(value) / 100 * parentSize.width;
        case "maxHeight":
        case "minHeight":
          return parseFloat(value) / 100 * parentSize.height;
        default:
          break;
      }
    }
    return parseFloat(value);
  }
  return value;
}
function constrainHeight(height, values, parentSize) {
  if (values.minHeight) {
    height = Math.max(getConstraintValue("minHeight", values.minHeight, parentSize), height);
  }
  if (values.maxHeight) {
    height = Math.min(getConstraintValue("maxHeight", values.maxHeight, parentSize), height);
  }
  return height;
}
function constrainWidth(width, values, parentSize) {
  if (values.minWidth) {
    width = Math.max(getConstraintValue("minWidth", values.minWidth, parentSize), width);
  }
  if (values.maxWidth) {
    width = Math.min(getConstraintValue("maxWidth", values.maxWidth, parentSize), width);
  }
  return width;
}
function sizeAfterApplyingDefaultsAndAspectRatio(width, height, values, parentSize) {
  let w = constrainWidth(isFiniteNumber(width) ? width : defaultWidth, values, parentSize);
  let h = constrainHeight(isFiniteNumber(height) ? height : defaultHeight, values, parentSize);
  if (isFiniteNumber(values.aspectRatio) && values.aspectRatio > 0) {
    if (isFiniteNumber(values.left) && isFiniteNumber(values.right)) {
      h = w / values.aspectRatio;
    } else if (isFiniteNumber(values.top) && isFiniteNumber(values.bottom)) {
      w = h * values.aspectRatio;
    } else if (values.widthType !== 0 /* FixedNumber */) {
      h = w / values.aspectRatio;
    } else {
      w = h * values.aspectRatio;
    }
  }
  return {
    width: w,
    height: h
  };
}
function pinnedOffset(start, end) {
  if (!isFiniteNumber(start) || !isFiniteNumber(end))
    return null;
  return start + end;
}
function getMergedConstraintsProps(props, constraints) {
  const result = {};
  if (props.constraints) {
    result.constraints = { ...props.constraints, ...constraints };
  } else {
    Object.assign(result, constraints);
  }
  return result;
}

// ../../library/src/render/types/NewConstraints.tsx
function containsInvalidStringValues(props) {
  if (typeof props.right === "string")
    return true;
  if (typeof props.bottom === "string")
    return true;
  if (typeof props.left === "string" && (!props.center || props.center === "y")) {
    return true;
  }
  if (typeof props.top === "string" && (!props.center || props.center === "x")) {
    return true;
  }
  return false;
}
function constraintsEnabled(props) {
  if (!props._constraints)
    return false;
  if (containsInvalidStringValues(props))
    return false;
  return props._constraints.enabled;
}
function sizeFromFiniteNumberProps(props) {
  const { size: size2 } = props;
  let { width, height } = props;
  if (isFiniteNumber(size2)) {
    if (width === void 0) {
      width = size2;
    }
    if (height === void 0) {
      height = size2;
    }
  }
  if (isFiniteNumber(width) && isFiniteNumber(height)) {
    return {
      width,
      height
    };
  }
  return null;
}
function rectFromFiniteNumberProps(props) {
  const size2 = sizeFromFiniteNumberProps(props);
  if (size2 === null) {
    return null;
  }
  const { left, top } = props;
  if (isFiniteNumber(left) && isFiniteNumber(top)) {
    return {
      x: left,
      y: top,
      ...size2
    };
  }
  return null;
}
function calculateRect(props, parentSize, pixelAlign = true) {
  if (props.positionFixed || props.positionAbsolute)
    return null;
  const parentSizeDisabled = parentSize === 1 /* Disabled */ || parentSize === 2 /* DisabledForCurrentLevel */;
  if (!constraintsEnabled(props) || parentSizeDisabled) {
    return rectFromFiniteNumberProps(props);
  }
  const constraintValues = getConstraintValues(props);
  const enabledParentSize = deprecatedParentSize(parentSize);
  const parentSizeInfo = enabledParentSize ? { sizing: enabledParentSize, positioning: enabledParentSize } : null;
  return ConstraintValues.toRect(constraintValues, parentSizeInfo, null, pixelAlign, null);
}
function getConstraintValues(props) {
  const { left, right, top, bottom, center, _constraints, size: size2 } = props;
  let { width, height } = props;
  if (width === void 0) {
    width = size2;
  }
  if (height === void 0) {
    height = size2;
  }
  const { aspectRatio, autoSize } = _constraints;
  const constraintMask = ConstraintMask.quickfix({
    left: isFiniteNumber(left),
    right: isFiniteNumber(right),
    top: isFiniteNumber(top),
    bottom: isFiniteNumber(bottom),
    widthType: valueToDimensionType(width),
    heightType: valueToDimensionType(height),
    aspectRatio: aspectRatio || null,
    fixedSize: autoSize === true
  });
  let widthValue = null;
  let heightValue = null;
  let widthType = 0 /* FixedNumber */;
  let heightType = 0 /* FixedNumber */;
  if (constraintMask.widthType !== 0 /* FixedNumber */ && typeof width === "string") {
    const parsedWidth = parseFloat(width);
    if (width.endsWith("fr")) {
      widthType = 3 /* FractionOfFreeSpace */;
      widthValue = parsedWidth;
    } else if (width === "auto") {
      widthType = 2 /* Auto */;
    } else {
      widthType = 1 /* Percentage */;
      widthValue = parsedWidth / 100;
    }
  } else if (width !== void 0 && typeof width !== "string") {
    widthValue = width;
  }
  if (constraintMask.heightType !== 0 /* FixedNumber */ && typeof height === "string") {
    const parsedHeight = parseFloat(height);
    if (height.endsWith("fr")) {
      heightType = 3 /* FractionOfFreeSpace */;
      heightValue = parsedHeight;
    } else if (height === "auto") {
      heightType = 2 /* Auto */;
    } else {
      heightType = 1 /* Percentage */;
      heightValue = parseFloat(height) / 100;
    }
  } else if (height !== void 0 && typeof height !== "string") {
    heightValue = height;
  }
  let centerAnchorX = 0.5;
  let centerAnchorY = 0.5;
  if (center === true || center === "x") {
    constraintMask.left = false;
    if (typeof left === "string") {
      centerAnchorX = parseFloat(left) / 100;
    }
  }
  if (center === true || center === "y") {
    constraintMask.top = false;
    if (typeof top === "string") {
      centerAnchorY = parseFloat(top) / 100;
    }
  }
  return {
    // Because we check isFiniteNumber when creating the masks,
    // We know that left, right, top and bottom are numbers if the mask is true for the corresponding value
    // We need to cast this because typescript does not understand that
    left: constraintMask.left ? left : null,
    right: constraintMask.right ? right : null,
    top: constraintMask.top ? top : null,
    bottom: constraintMask.bottom ? bottom : null,
    widthType,
    heightType,
    width: widthValue,
    height: heightValue,
    aspectRatio: constraintMask.aspectRatio || null,
    centerAnchorX,
    centerAnchorY,
    minHeight: props.minHeight,
    maxHeight: props.maxHeight,
    minWidth: props.minWidth,
    maxWidth: props.maxWidth
  };
}
var ParentSizeState = /* @__PURE__ */ ((ParentSizeState2) => {
  ParentSizeState2[ParentSizeState2["Unknown"] = 0] = "Unknown";
  ParentSizeState2[ParentSizeState2["Disabled"] = 1] = "Disabled";
  ParentSizeState2[ParentSizeState2["DisabledForCurrentLevel"] = 2] = "DisabledForCurrentLevel";
  return ParentSizeState2;
})(ParentSizeState || {});
var ConstraintsContext = React17.createContext({
  parentSize: 0 /* Unknown */
});
function deprecatedParentSize(parentSize) {
  if (parentSize === 0 /* Unknown */ || parentSize === 1 /* Disabled */ || parentSize === 2 /* DisabledForCurrentLevel */) {
    return null;
  }
  return parentSize;
}
function useParentSize() {
  return React17.useContext(ConstraintsContext).parentSize;
}
function isSize(o) {
  return typeof o === "object";
}
var ProvideParentSize = (props) => {
  const currentParentSize = useParentSize();
  const { parentSize, children } = props;
  const value = React17.useMemo(
    () => ({ parentSize }),
    // We are generating the memoKeys in runtime and react doesn't like it,
    // but it should be safe to ignore.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [getParentWidth(parentSize), getParentHeight(parentSize)]
  );
  if (currentParentSize === 1 /* Disabled */) {
    return children ? /* @__PURE__ */ React17.createElement(React17.Fragment, null, children) : null;
  }
  return /* @__PURE__ */ React17.createElement(ConstraintsContext.Provider, { value }, children);
};
function getParentWidth(parentSize) {
  return isSize(parentSize) ? parentSize.width : parentSize;
}
function getParentHeight(parentSize) {
  return isSize(parentSize) ? parentSize.height : parentSize;
}
var ConsumeParentSize = ConstraintsContext.Consumer;
function useProvideParentSize(node, parentSize) {
  return /* @__PURE__ */ React17.createElement(ProvideParentSize, { parentSize }, node);
}
function useConstraints(props) {
  const parentSize = useParentSize();
  const calculatedRect = calculateRect(props, parentSize, true);
  return calculatedRect;
}

// ../../library/src/render/types/PropertyControls.ts
var ControlType = /* @__PURE__ */ ((ControlType2) => {
  ControlType2["Boolean"] = "boolean";
  ControlType2["Number"] = "number";
  ControlType2["String"] = "string";
  ControlType2["RichText"] = "richtext";
  ControlType2["FusedNumber"] = "fusednumber";
  ControlType2["Enum"] = "enum";
  ControlType2["SegmentedEnum"] = "segmentedenum";
  ControlType2["Color"] = "color";
  ControlType2["Image"] = "image";
  ControlType2["ResponsiveImage"] = "responsiveimage";
  ControlType2["File"] = "file";
  ControlType2["ComponentInstance"] = "componentinstance";
  ControlType2["Array"] = "array";
  ControlType2["EventHandler"] = "eventhandler";
  ControlType2["Transition"] = "transition";
  ControlType2["Link"] = "link";
  ControlType2["Date"] = "date";
  ControlType2["Object"] = "object";
  return ControlType2;
})(ControlType || {});

// ../../library/src/modules/isFlexboxGapSupported.ts
var isFlexboxGapSupportedCached;
function isFlexboxGapSupported() {
  if (isFlexboxGapSupportedCached !== void 0) {
    return isFlexboxGapSupportedCached;
  }
  const flex = document.createElement("div");
  Object.assign(flex.style, {
    position: "absolute",
    // avoid layout shift
    display: "flex",
    flexDirection: "column",
    rowGap: "1px"
  });
  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));
  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  if (flex.parentNode) {
    flex.parentNode.removeChild(flex);
  }
  isFlexboxGapSupportedCached = isSupported;
  return isSupported;
}

// ../../library/src/modules/workaroundFlexboxGapNotSupported.ts
var flexboxGapNotSupportedClass = "flexbox-gap-not-supported";
var initialized = false;
function installFlexboxGapWorkaroundIfNeeded() {
  if (initialized)
    return;
  initialized = true;
  if (isFlexboxGapSupported())
    return;
  document.body.classList.add(flexboxGapNotSupportedClass);
}

// ../../library/src/render/utils/injectDeprecatedRichTextRules.ts
var richTextStylesRule = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`;
var richTextParagraphSpacingStylesRule = `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`;
var richTextBackgroundMaskStylesRule = `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`;
var richTextLinkStylesRule = `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`;
var richTextLinkHoverStylesRule = `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`;
var richTextLinkCurrentStylesRule = `
a[data-framer-page-link-current],
a[data-framer-page-link-current] span:not([data-text-fill]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`;
var richTextLinkCurrentHoverStylesRule = `
a[data-framer-page-link-current]:hover,
a[data-framer-page-link-current]:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`;
var richTextBoldStylesRule = `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`;
var richTextItalicStylesRule = `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`;
var richTextImageRule = `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`;
var richTextBlockElementResetRule = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`;
var richTextStylesPresetResetRule = `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
}
`;
var richTextStylesList = `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`;
var richTextStylesListItem = `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`;
var richTextStylesNumberedListMarker = `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`;
var richTextStylesBulletedListMarker = `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "\u2022";
}
`;
var deprecatedRichTextCSSRules = [
  `[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
  richTextStylesPresetResetRule,
  richTextBlockElementResetRule,
  richTextStylesRule,
  richTextParagraphSpacingStylesRule,
  richTextBackgroundMaskStylesRule,
  richTextLinkStylesRule,
  richTextLinkHoverStylesRule,
  richTextLinkCurrentStylesRule,
  richTextLinkCurrentHoverStylesRule,
  richTextBoldStylesRule,
  richTextItalicStylesRule,
  richTextImageRule,
  richTextStylesList,
  richTextStylesListItem,
  richTextStylesNumberedListMarker,
  richTextStylesBulletedListMarker
];

// ../../library/src/render/utils/injectRichTextRules.ts
var richTextCSSRules = [
  /* css */
  `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
  /* css */
  `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
            font-style: var(--framer-font-style, normal);
            font-weight: var(--framer-font-weight, 400);
            color: var(--framer-text-color, #000);
            font-size: var(--framer-font-size, 16px);
            letter-spacing: var(--framer-letter-spacing, 0);
            text-transform: var(--framer-text-transform, none);
            text-decoration: var(--framer-text-decoration, none);
            line-height: var(--framer-line-height, 1.2em);
            text-align: var(--framer-text-alignment, start);
        }
    `,
  /* css */
  `
        strong.framer-text {
            font-weight: bolder;
        }
    `,
  /* css */
  `
        em.framer-text {
            font-style: italic;
        }
    `,
  /* css */
  `
        code.framer-text {
            padding: 2px;
            border-radius: 4px;
            background-color: rgba(0, 0, 0, .08);
        }
    `,
  /* css */
  `
    code.framer-text,
    code.framer-text .framer-text:not([data-text-fill]) {
            font-family: "Courier New", monospace;
        }
    `,
  /* css */
  `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-paragraph-spacing, 0);
        }
    `,
  // background-clip: text clips to the physical dimensions of text as appose
  // to the rendered dimensions. normal text will bleed out side these
  // constraints but since this is just a clipping mask over the area the text
  // takes up we have cases where the text will get clipped. That is why we
  // need to expand the area that the gradient applies to to allow users to
  // use low line-heights. This will result in gradients not aligning
  // perfectly to the edges of the text. but this is a acceptable trade off at
  // this point. For now we increase the area of the clipping mask on the
  // bottom (for descenders) and the right for italic or wide fonts.
  /* css */
  `
        .framer-text[data-text-fill] {
            display: inline-block;
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-line-height, 1.3em)) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-line-height, 1.3em)) / -2));
        }
    `,
  /* Cursor Inherit to overwrite the user agent stylesheet on Richtext links */
  /* css */
  `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-text-color, var(--framer-text-color, #000));
            font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
            text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
            text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
            cursor: var(--framer-custom-cursors, pointer);
        }
    `,
  /* css */
  `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `,
  /* css */
  `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `,
  /* css */
  `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
        }
    `,
  /* css */
  `
        .framer-image.framer-text {
            display: block;
            max-width: 100%;
            height: auto;
        }
    `,
  /* css */
  `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
        }
    `,
  /* css */
  `
        ul.framer-text,
        ol.framer-text {
            display: table;
            width: 100%;
        }
    `,
  /* css */
  `
        li.framer-text {
            display: table-row;
            counter-increment: list-item;
            list-style: none;
        }
    `,
  /* css */
  `
        ol.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-right: 0.75ch;
            content: counter(list-item) ".";
            white-space: nowrap;
        }
    `,
  /* css */
  `
        ul.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-right: 0.75ch;
            content: "\u2022";
        }
    `,
  /* css */
  `
        .framer-text-module[style*="aspect-ratio"] > :first-child {
            width: 100%;
        }
    `,
  /* css */
  `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] {
                position: relative;
            }
        }
    `,
  /* css */
  `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"]::before {
                content: "";
                display: block;
                padding-bottom: calc(100% / var(--aspect-ratio));
            }
        }
    `,
  /* css */
  `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] > :first-child {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
            }
        }
    `
];

// ../../library/src/render/utils/setDocumentStyles.ts
var defaultCache = /* @__PURE__ */ new Set();
var defaultSheet;
function injectCSSRule(cssRule, sheet, cache3 = defaultCache) {
  if (!cssRule || cache3.has(cssRule) || typeof document === "undefined")
    return;
  cache3.add(cssRule);
  if (!sheet) {
    if (!defaultSheet) {
      const styleElement = document.createElement("style");
      styleElement.setAttribute("type", "text/css");
      styleElement.setAttribute("data-framer-css", "true");
      if (!document.head) {
        console.warn("not injecting CSS: the document is missing a <head> element");
        return;
      }
      document.head.appendChild(styleElement);
      if (styleElement.sheet) {
        defaultSheet = styleElement.sheet;
      } else {
        console.warn("not injecting CSS: injected <style> element does not have a sheet", styleElement);
        return;
      }
    }
    sheet = defaultSheet;
  }
  try {
    sheet.insertRule(cssRule, sheet.cssRules.length);
  } catch {
  }
}

// ../../library/src/render/utils/injectComponentCSSRules.ts
var componentCSSRules = [`[data-framer-component-type] { position: absolute; }`];
var textAlignmentRule = `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`;
var textBlockSpanRule = `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`;
var textInlineSpanRule = `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`;
var renderTextStylesRule = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    text-decoration: var(--text-decoration);
    line-height: var(--line-height);
}`;
var textStylesRule = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration);
    --line-height: var(--framer-line-height);
}`;
var linkStylesRule = `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration));
}`;
var linkHoverStylesRule = `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`;
var linkCurrentStylesRule = `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`;
var textCSSRules = [
  `[data-framer-component-type="Text"] { cursor: inherit; }`,
  `[data-framer-component-text-autosized] * { white-space: pre; }`,
  textAlignmentRule,
  textBlockSpanRule,
  textInlineSpanRule,
  renderTextStylesRule,
  textStylesRule,
  linkStylesRule,
  linkHoverStylesRule,
  linkCurrentStylesRule
];
var stackPositionRule = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`;
var nativeStackGapRules = [
  `[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`,
  `.${flexboxGapNotSupportedClass} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`
];
var stackGapRule = `
.${flexboxGapNotSupportedClass} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`;
var stackDirectionRuleVertical = `
.${flexboxGapNotSupportedClass}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${flexboxGapNotSupportedClass}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`;
var stackDirectionRuleHorizontal = `
.${flexboxGapNotSupportedClass}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${flexboxGapNotSupportedClass}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`;
var stackCSSRules = [
  stackPositionRule,
  stackGapRule,
  ...nativeStackGapRules,
  stackDirectionRuleVertical,
  stackDirectionRuleHorizontal
];
var navigationCSSRules = [
  `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`
];
var scrollCSSRules = [
  `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
  `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`
];
var nativeScrollCSSRules = [
  `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
  `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
  `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: scroll; overflow-y: scroll; }`,
  `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: scroll; }`,
  `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: scroll; overflow-y: hidden; }`,
  `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
  `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
  `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`
];
var deviceComponentCSSRules = [
  `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`
];
var pageContentWrapperWrapperCSSRules = [
  `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`
];
var presenceCSS = [
  `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`
];
var cursorCSS = [
  `[data-framer-cursor="pointer"] { cursor: pointer; }`,
  `[data-framer-cursor="grab"] { cursor: grab; }`,
  `[data-framer-cursor="grab"]:active { cursor: grabbing; }`
];
var frameCSS = [
  // Non-sites prototyping projects render with FrameWithMotion and Stacks. In
  // that context this rule ensures pointer events work in a specific way
  // designed for prototypes that we don't care about anymore in sites. We
  // can't remove it for legacy reasons, but sites will never render any
  // elements that are impacted by this rule. However, users can still use the
  // <Frame> api in code, at which point this rule will kick in. We don't
  // encourage the use of this API anymore, and bugs that come from this will
  // be the user's concern.
  `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
  // This is fully deprecated, and will never exist in code that is generated
  // after 24/01/2023. There will be existing code-generated that depends on
  // this rule existing, so we can't remove it.
  `[data-framer-generated] * { pointer-events: unset }`
];
var resetCSS = [
  `[data-reset="button"] {
        border-width: 0;
        padding: 0;
}`
];
var frameCSSRules = (isPreview) => {
  return isPreview ? frameCSS : [];
};
var svgCSSRules = [`.svgContainer svg { display: block; }`];
var combineCSSRules = (isPreview) => [
  ...componentCSSRules,
  ...textCSSRules,
  ...richTextCSSRules,
  ...deprecatedRichTextCSSRules,
  ...stackCSSRules,
  ...navigationCSSRules,
  ...scrollCSSRules,
  ...nativeScrollCSSRules,
  ...pageContentWrapperWrapperCSSRules,
  ...deviceComponentCSSRules,
  ...presenceCSS,
  ...cursorCSS,
  ...frameCSSRules(isPreview),
  ...svgCSSRules,
  ...resetCSS
];
var combinedCSSRules = combineCSSRules(false);
var combinedCSSRulesForPreview = combineCSSRules(true);
var didInject = false;
function injectComponentCSSRules() {
  if (didInject)
    return;
  didInject = true;
  const styles = RenderTarget.current() === "PREVIEW" /* preview */ ? combinedCSSRulesForPreview : combinedCSSRules;
  for (const rule of styles) {
    injectCSSRule(rule, void 0, void 0);
  }
}

// ../../library/src/utils/addPropertyControls.ts
function addPropertyControls(component, propertyControls) {
  Object.assign(component, { propertyControls });
}
function getPropertyControls(component) {
  return component.propertyControls;
}

// ../../library/src/components/Device/presets.ts
var defaultPresetId = "iphone-12-pro";
var presetsBase = {
  iPhonePro: {
    // Screen mask takes care of the rounded screen corners for iPhones Pro,
    // and actually using a radius here produces visual artifacts in Chrome.
    screenRadius: (
      /* 38 */
      0
    ),
    clayBezelLeft: 21,
    clayBezelRight: 21,
    clayBezelTop: 21,
    clayBezelBottom: 21,
    clayBezelRadius: 38 + 21
  },
  iPhone8: {
    screenRadius: 0,
    clayBezelLeft: 24,
    clayBezelRight: 24,
    clayBezelTop: 96,
    clayBezelBottom: 96,
    clayBezelRadius: 38 * 1.5
  },
  iPadPro: {
    screenRadius: 25,
    clayBezelLeft: 38,
    clayBezelRight: 38,
    clayBezelTop: 38,
    clayBezelBottom: 38,
    clayBezelRadius: 25 + 38
  },
  desktop: {
    clayBezelLeft: 20,
    clayBezelRight: 20,
    clayBezelTop: 20,
    clayBezelBottom: 20,
    clayBezelRadius: 20
  }
};
var devicePresets = [
  {
    id: "iphone-12",
    title: "iPhone 12",
    screenRadius: 0,
    clayBezelLeft: 22,
    clayBezelRight: 22,
    clayBezelTop: 22,
    clayBezelBottom: 22,
    clayBezelRadius: 66,
    screenWidth: 390,
    screenHeight: 844,
    externalClay: {
      width: 500,
      height: 974,
      screenOffsetTop: 65,
      screenOffsetLeft: 55
    },
    screenMask: '<g style="transform: scale(0.5);"><path d="M171.2 0c2.3 0 4 .5 5.4 1.3 1.6 1 2.8 2.2 3.7 3.8.8 1.6 1.2 2.3 1.2 4.9 0 12 2.2 19 6.2 26.5s9.8 13.3 17.3 17.4c7.5 4 15.8 6.1 30.6 6.1h311.5c14.3 0 22.5-2.2 29.9-6.1 7.5-4 13.3-10 17.3-17.4 4-7.5 6.2-14.5 6.2-26.5 0-2.6.4-3.2 1.1-4.9.8-1.6 2-2.9 3.4-3.8 1.4-.8 3.2-1.3 5.4-1.3h54.2c40.1 0 54.7 4.2 69.4 12a81.8 81.8 0 0134 34c7.8 14.7 12 29.3 12 69.4v1457.2c0 40.1-4.2 54.7-12 69.4a81.8 81.8 0 01-34 34c-14.7 7.8-29.3 12-69.4 12H115.4c-40.1 0-54.7-4.2-69.4-12a81.8 81.8 0 01-34-34c-7.8-14.7-12-29.3-12-69.4V115.4C0 75.3 4.2 60.7 12 46a81.8 81.8 0 0134-34C60.7 4.2 75.3 0 115.4 0h55.4z" fill="#000" fill-rule="evenodd"/></g>',
    realisticImage: {
      width: 490,
      height: 944,
      screenOffsetLeft: 50,
      screenOffsetTop: 50,
      availableColors: [
        { id: "black", title: "Black", colorValue: "#2E2C36" },
        { id: "white", title: "White", colorValue: "#F7F3F0" },
        { id: "blue", title: "Blue", colorValue: "#14496D" },
        { id: "green", title: "Green", colorValue: "#DAF0D9" },
        { id: "red", title: "Red", colorValue: "#DB4141" }
      ],
      handOffset: { left: 29, right: 29, bottom: 29 }
    }
  },
  {
    id: "iphone-12-mini",
    title: "iPhone 12 Mini",
    screenRadius: 0,
    clayBezelLeft: 22,
    clayBezelRight: 22,
    clayBezelTop: 22,
    clayBezelBottom: 22,
    clayBezelRadius: 66,
    screenWidth: 360,
    screenHeight: 780,
    externalClay: {
      width: 450,
      height: 890,
      screenOffsetTop: 55,
      screenOffsetLeft: 45
    },
    screenMask: '<g style="transform: scale(0.5);"><path d="M142 18c0 19 14 47 43 48h349c31 0 44-29 44-48 0-12 4-18 14-18h18c38 0 52 4 66 11 14 8 25 19 33 33v1c7 14 11 28 11 65v1340c0 38-4 52-11 66-8 14-19 25-33 33h-1c-14 7-28 11-65 11H110c-38 0-52-4-66-11-14-8-25-19-33-33v-1c-7-13-11-27-11-64V110c0-38 4-52 11-66 8-14 19-25 33-33h1C58 4 72 0 109 0h16c11 0 17 6 17 18z" fill="#000" fill-rule="evenodd"/></g>',
    realisticImage: {
      width: 460,
      height: 880,
      screenOffsetLeft: 50,
      screenOffsetTop: 50,
      availableColors: [
        { id: "black", title: "Black", colorValue: "#2E2C36" },
        { id: "white", title: "White", colorValue: "#F7F3F0" },
        { id: "blue", title: "Blue", colorValue: "#14496D" },
        { id: "green", title: "Green", colorValue: "#DAF0D9" },
        { id: "red", title: "Red", colorValue: "#DB4141" }
      ],
      handOffset: { left: 31.5, right: 30.5, bottom: 30 }
    }
  },
  {
    id: "iphone-12-pro",
    title: "iPhone 12 Pro",
    screenRadius: 0,
    clayBezelLeft: 22,
    clayBezelRight: 22,
    clayBezelTop: 22,
    clayBezelBottom: 22,
    clayBezelRadius: 66,
    screenWidth: 390,
    screenHeight: 844,
    externalClay: {
      width: 494,
      height: 968,
      screenOffsetTop: 62,
      screenOffsetLeft: 52
    },
    screenMask: '<g style="transform: scale(0.5);"><path d="M171.2 0c2.3 0 4 .5 5.4 1.3 1.6 1 2.8 2.2 3.7 3.8.8 1.6 1.2 2.3 1.2 4.9 0 12 2.2 19 6.2 26.5s9.8 13.3 17.3 17.4c7.5 4 15.8 6.1 30.6 6.1h311.5c14.3 0 22.5-2.2 29.9-6.1 7.5-4 13.3-10 17.3-17.4 4-7.5 6.2-14.5 6.2-26.5 0-2.6.4-3.2 1.1-4.9.8-1.6 2-2.9 3.4-3.8 1.4-.8 3.2-1.3 5.4-1.3h54.2c40.1 0 54.7 4.2 69.4 12a81.8 81.8 0 0134 34c7.8 14.7 12 29.3 12 69.4v1457.2c0 40.1-4.2 54.7-12 69.4a81.8 81.8 0 01-34 34c-14.7 7.8-29.3 12-69.4 12H115.4c-40.1 0-54.7-4.2-69.4-12a81.8 81.8 0 01-34-34c-7.8-14.7-12-29.3-12-69.4V115.4C0 75.3 4.2 60.7 12 46a81.8 81.8 0 0134-34C60.7 4.2 75.3 0 115.4 0h55.4z" fill="#000" fill-rule="evenodd"/></g>',
    realisticImage: {
      width: 490,
      height: 944,
      screenOffsetLeft: 50,
      screenOffsetTop: 50,
      availableColors: [
        { id: "graphite", title: "Graphite", colorValue: "#585753" },
        { id: "silver", title: "Silver", colorValue: "#E5E6E1" },
        { id: "pacific-blue", title: "Pacific Blue", colorValue: "#415D6C" },
        { id: "gold", title: "Gold", colorValue: "#FCECD5" }
      ],
      handOffset: { left: 29, right: 29, bottom: 29 }
    }
  },
  {
    id: "iphone-12-pro-max",
    title: "iPhone 12 Pro Max",
    screenRadius: 50,
    // to prevent leaking pixel in the corners, see https://github.com/framer/company/issues/20429
    clayBezelLeft: 22,
    clayBezelRight: 22,
    clayBezelTop: 22,
    clayBezelBottom: 22,
    clayBezelRadius: 66,
    screenWidth: 428,
    screenHeight: 926,
    externalClay: {
      width: 532,
      height: 1050,
      screenOffsetTop: 62,
      screenOffsetLeft: 52
    },
    screenMask: '<path d="M102 0c6 0 7 3 7 9 0 10 7 23 24 23h164c13 0 22-12 22-23 0-6 1-9 7-9h34c24 0 32 2 41 7s15 11 20 20 7 17 7 41v790c0 24-2 32-7 41s-11 15-20 20-17 7-41 7H68c-24 0-32-2-41-7s-15-11-20-20-7-17-7-41V68c0-24 2-32 7-41S18 12 27 7s17-7 41-7h34z" fill="#000" fill-rule="evenodd"/>',
    realisticImage: {
      width: 528,
      height: 1026,
      screenOffsetLeft: 50,
      screenOffsetTop: 50,
      availableColors: [
        { id: "graphite", title: "Graphite", colorValue: "#585753" },
        { id: "silver", title: "Silver", colorValue: "#E5E6E1" },
        { id: "pacific-blue", title: "Pacific Blue", colorValue: "#415D6C" },
        { id: "gold", title: "Gold", colorValue: "#FCECD5" }
      ],
      handOffset: { left: 28.5, right: 28, bottom: 29 }
    }
  },
  {
    id: "iphone-11",
    title: "iPhone 11",
    // Screen mask takes care of the rounded screen corners for iPhones Pro,
    // and actually using a radius here produces visual artifacts in Chrome.
    screenRadius: (
      /* 38 */
      0
    ),
    clayBezelLeft: 35.5,
    clayBezelRight: 35.5,
    clayBezelTop: 35.5,
    clayBezelBottom: 35.5,
    clayBezelRadius: 77,
    screenWidth: 414,
    screenHeight: 896,
    externalClay: {
      width: 524,
      height: 1026,
      screenOffsetTop: 65,
      screenOffsetLeft: 55
    },
    screenMask: '<path d="M85.5 0C89.1 0 92 3 92 6.5c.3 6 1.5 10 3.4 13.5 2.2 4.1 5.5 7.4 9.6 9.6 4.2 2.2 8.9 3.4 17 3.4h170c8.1 0 12.8-1.2 17-3.4 4.1-2.2 7.4-5.5 9.6-9.6A31 31 0 00322 6.5c0-3.6 3-6.5 6.5-6.5h32.3c18.5 0 25.2 2 32 5.5 6.7 3.7 12 9 15.7 15.7 3.6 6.8 5.5 13.5 5.5 32v789.6c0 18.5-2 25.2-5.5 32-3.7 6.7-9 12-15.7 15.7-6.8 3.6-13.5 5.5-32 5.5H53.2c-18.5 0-25.2-2-32-5.5-6.7-3.7-12-9-15.7-15.7C2 868 0 861.3 0 842.8V53.2c0-18.5 2-25.2 5.5-32 3.7-6.7 9-12 15.7-15.7C28 2 34.7 0 53.2 0h32.3z" fill="#000" fill-rule="nonzero"/>',
    realisticImage: {
      width: 514,
      height: 996,
      screenOffsetLeft: 50,
      screenOffsetTop: 50,
      availableColors: [
        { id: "black", title: "Black", colorValue: "#202120" },
        { id: "white", title: "White", colorValue: "#F9F6EF" },
        { id: "purple", title: "Purple", colorValue: "#D1CDDB" },
        { id: "green", title: "Green", colorValue: "#ADE0CD" },
        { id: "red", title: "Red", colorValue: "#B90D2E" },
        { id: "yellow", title: "Yellow", colorValue: "#FFE680" }
      ],
      handOffset: { left: 14.5, right: 14.5, bottom: 14.5 }
    }
  },
  {
    id: "iphone-11-pro",
    title: "iPhone 11 Pro",
    ...presetsBase.iPhonePro,
    screenWidth: 375,
    screenHeight: 812,
    externalClay: {
      width: 485,
      height: 942,
      screenOffsetTop: 65,
      screenOffsetLeft: 55
    },
    screenMask: '<path d="M292 8.668V9c0 9.266-7.07 21-23.332 21h-162C90.402 30 83.332 18.266 83.332 9v-.332c0-4.285 0-8.668-7.664-8.668H43.332C16.312 0 0 16.313 0 43.332v725.336C0 795.688 16.313 812 43.332 812h288.336c27.02 0 43.332-16.313 43.332-43.332V43.332C375 16.312 358.687 0 331.668 0h-32C292 0 292 4.383 292 8.668zm0 0"/>',
    realisticImage: {
      width: 475,
      height: 912,
      screenOffsetLeft: 50,
      screenOffsetTop: 50,
      availableColors: [
        { id: "space-grey", title: "Space Grey", colorValue: "#52514F" },
        { id: "silver", title: "Silver", colorValue: "#EBEBE3" },
        { id: "gold", title: "Gold", colorValue: "#FBD7BD" },
        { id: "midnight-green", title: "Midnight Green", colorValue: "#4F5850" }
      ],
      handOffset: { left: 24.5, right: 24.5, bottom: 23.5 }
    }
  },
  {
    id: "iphone-11-pro-max",
    title: "iPhone 11 Pro Max",
    ...presetsBase.iPhonePro,
    screenWidth: 414,
    screenHeight: 896,
    externalClay: {
      width: 524,
      height: 1026,
      screenOffsetTop: 65,
      screenOffsetLeft: 55
    },
    screenMask: '<path d="M96 0c3.313 0 5.91 2.688 6 6 .18 6.645 1.191 10.148 2.938 13.41 1.917 3.586 4.73 6.402 8.316 8.317 3.586 1.918 7.441 2.941 15.445 2.941h156.602c8.004 0 11.86-1.023 15.445-2.941 3.586-1.915 6.399-4.73 8.317-8.317 1.746-3.265 2.746-6.758 2.937-13.41.094-3.313 2.688-6 6-6h46.004c17.387 0 23.687 1.809 30.043 5.21 6.355 3.4 11.344 8.388 14.742 14.743C412.191 26.31 414 32.61 414 49.996v796.008c0 17.387-1.809 23.687-5.21 30.043-3.4 6.355-8.388 11.344-14.743 14.742-6.356 3.402-12.656 5.211-30.043 5.211H49.996c-17.387 0-23.687-1.809-30.043-5.21-6.355-3.4-11.344-8.388-14.742-14.743C1.809 869.69 0 863.39 0 846.004V49.996C0 32.61 1.809 26.31 5.21 19.953c3.4-6.355 8.388-11.344 14.743-14.742C26.31 1.809 32.61 0 49.996 0zm0 0"/>',
    realisticImage: {
      width: 514,
      height: 996,
      screenOffsetLeft: 50,
      screenOffsetTop: 50,
      availableColors: [
        { id: "space-grey", title: "Space Grey", colorValue: "#52514F" },
        { id: "silver", title: "Silver", colorValue: "#EBEBE3" },
        { id: "gold", title: "Gold", colorValue: "#FBD7BD" },
        { id: "midnight-green", title: "Midnight Green", colorValue: "#4F5850" }
      ],
      handOffset: { left: 23.5, right: 24.5, bottom: 24 }
    }
  },
  {
    id: "iphone-8",
    title: "iPhone 8",
    ...presetsBase.iPhone8,
    screenWidth: 375,
    screenHeight: 667,
    externalClay: {
      width: 491,
      height: 971,
      screenOffsetLeft: 58,
      screenOffsetTop: 152
    },
    realisticImage: {
      width: 475,
      height: 927,
      screenOffsetLeft: 50,
      screenOffsetTop: 130,
      availableColors: [
        { id: "space-grey", title: "Space Grey", colorValue: "#28282A" },
        { id: "silver", title: "Silver", colorValue: "#DFE1E2" },
        { id: "gold", title: "Gold", colorValue: "#F6E6DB" }
      ],
      handOffset: { left: 22, right: 22, bottom: 18.5 }
    }
  },
  {
    id: "iphone-8-plus",
    title: "iPhone 8 Plus",
    ...presetsBase.iPhone8,
    screenWidth: 414,
    screenHeight: 736,
    externalClay: {
      width: 530,
      height: 1064,
      screenOffsetLeft: 58,
      screenOffsetTop: 164
    },
    realisticImage: {
      width: 514,
      height: 996,
      screenOffsetLeft: 50,
      screenOffsetTop: 130,
      availableColors: [
        { id: "space-grey", title: "Space Grey", colorValue: "#28282A" },
        { id: "silver", title: "Silver", colorValue: "#DFE1E2" },
        { id: "gold", title: "Gold", colorValue: "#F6E6DB" }
      ],
      handOffset: { left: 21, right: 20.5, bottom: 19 }
    }
  },
  {
    id: "iphone-se",
    title: "iPhone SE",
    screenWidth: 320,
    screenHeight: 568,
    screenRadius: 0,
    clayBezelLeft: 20,
    clayBezelRight: 20,
    clayBezelTop: 112,
    clayBezelBottom: 112,
    clayBezelRadius: 38 * 1.5,
    externalClay: {
      width: 436,
      height: 872,
      screenOffsetLeft: 58,
      screenOffsetTop: 152
    },
    realisticImage: {
      width: 420,
      height: 828,
      screenOffsetLeft: 50,
      screenOffsetTop: 130,
      availableColors: [
        { id: "space-grey", title: "Space Grey", colorValue: "#C3C4C8" },
        { id: "silver", title: "Silver", colorValue: "#E1E2E4" },
        { id: "gold", title: "Gold", colorValue: "#EFD8BD" },
        { id: "rose-gold", title: "Rose Gold", colorValue: "#F7CFCA" }
      ],
      handOffset: { left: 22, right: 22, bottom: 26.5 }
    }
  },
  {
    id: "samsung-galaxy-s7",
    title: "Samsung Galaxy S7",
    screenRadius: 0,
    clayBezelLeft: 22,
    clayBezelRight: 22,
    clayBezelTop: 22,
    clayBezelBottom: 22,
    clayBezelRadius: 66,
    screenWidth: 360,
    screenHeight: 640,
    externalClay: {
      width: 454,
      height: 880,
      screenOffsetTop: 120,
      screenOffsetLeft: 47
    },
    realisticImage: {
      width: 440,
      height: 860,
      screenOffsetLeft: 40,
      screenOffsetTop: 110,
      availableColors: [
        { id: "black", title: "Black", colorValue: "#2E2C36" },
        { id: "white", title: "White", colorValue: "#F7F3F0" },
        { id: "silver", title: "Silver", colorValue: "#E5E6E1" },
        { id: "gold", title: "Gold", colorValue: "#FCECD5" }
      ],
      handOffset: { left: 26, right: 25.5, bottom: 32 }
    }
  },
  // deprecated
  {
    id: "samsung-note-10",
    title: "Samsung Note 10",
    screenWidth: 360,
    screenHeight: 760,
    screenRadius: 10,
    clayBezelLeft: 7,
    clayBezelRight: 7,
    clayBezelTop: 15,
    clayBezelBottom: 15,
    clayBezelRadius: 15
  },
  {
    id: "pixel-5",
    title: "Google Pixel 5",
    screenRadius: 31,
    clayBezelLeft: 22,
    clayBezelRight: 22,
    clayBezelTop: 22,
    clayBezelBottom: 22,
    clayBezelRadius: 66,
    screenWidth: 360,
    screenHeight: 780,
    externalClay: {
      width: 460,
      height: 900,
      screenOffsetTop: 60,
      screenOffsetLeft: 50
    },
    realisticImage: {
      width: 920 / 2,
      height: 1760 / 2,
      screenOffsetLeft: 100 / 2,
      screenOffsetTop: 100 / 2,
      availableColors: [
        { id: "just-black", title: "Just Black", colorValue: "#2E2C36" },
        { id: "sorta-sage", title: "Sorta Sage", colorValue: "#B7C9C0" }
      ],
      handOffset: {
        left: 31.5,
        right: 31,
        bottom: 31
        /* 1t */
      }
    }
  },
  {
    id: "pixel-4",
    title: "Google Pixel 4",
    screenWidth: 360,
    screenHeight: 760,
    screenRadius: 34,
    clayBezelLeft: 10,
    clayBezelRight: 10,
    clayBezelTop: 50,
    clayBezelBottom: 25,
    clayBezelRadius: 50,
    externalClay: {
      width: 460,
      height: 938,
      screenOffsetLeft: 50,
      screenOffsetTop: 89
    },
    realisticImage: {
      width: 460,
      height: 920,
      screenOffsetLeft: 50,
      screenOffsetTop: 80,
      availableColors: [
        { id: "clearly-white", title: "Clearly White", colorValue: "#EAEDF2" },
        { id: "just-black", title: "Just Black", colorValue: "#1A1A1A" },
        { id: "oh-so-orange", title: "Oh So Orange", colorValue: "#FF7A68" }
      ],
      handOffset: {
        left: 35.5,
        right: 35.5,
        bottom: 57
        /* 1t */
      }
    }
  },
  // Desktop ------------------------------------------------------------------------------------------------------------------------
  {
    id: "macbook-air",
    title: "MacBook Air",
    screenWidth: 1440,
    screenHeight: 900,
    disableRotation: true,
    externalClay: {
      width: 1890,
      height: 1125,
      screenOffsetLeft: 225,
      screenOffsetTop: 98
    },
    realisticImage: {
      width: 3848 / 2,
      height: 2240 / 2,
      screenOffsetLeft: 484 / 2,
      screenOffsetTop: 196 / 2,
      availableColors: [
        { id: "silver", title: "Silver", colorValue: "#E5E6E1" },
        { id: "space-grey", title: "Space Grey", colorValue: "#B1B5B7" },
        { id: "gold", title: "Gold", colorValue: "#FCECD5" }
      ]
    }
  },
  {
    id: "macbook-pro-13",
    title: `MacBook Pro 13"`,
    screenWidth: 1440,
    screenHeight: 900,
    disableRotation: true,
    externalClay: {
      width: 1914,
      height: 1169,
      screenOffsetLeft: 236,
      screenOffsetTop: 109
    },
    realisticImage: {
      width: 3916 / 2,
      height: 2330 / 2,
      screenOffsetLeft: 518 / 2,
      screenOffsetTop: 218 / 2,
      availableColors: [
        { id: "silver", title: "Silver", colorValue: "#E5E6E1" },
        { id: "space-grey", title: "Space Grey", colorValue: "#B1B5B7" }
      ]
    }
  },
  {
    id: "macbook-pro-16",
    title: `MacBook Pro 16"`,
    screenWidth: 1536,
    screenHeight: 960,
    disableRotation: true,
    externalClay: {
      width: 1984,
      height: 1179,
      screenOffsetLeft: 225,
      screenOffsetTop: 78
    },
    realisticImage: {
      width: 4032 / 2,
      height: 2348 / 2,
      screenOffsetLeft: 480 / 2,
      screenOffsetTop: 148 / 2,
      availableColors: [
        { id: "silver", title: "Silver", colorValue: "#E5E6E1" },
        { id: "space-grey", title: "Space Grey", colorValue: "#B1B5B7" }
      ]
    }
  },
  {
    id: "imac-21-5",
    title: `iMac 21.5"`,
    screenWidth: 2048,
    screenHeight: 1152,
    disableRotation: true,
    externalClay: {
      width: 2288,
      height: 1892,
      screenOffsetLeft: 120,
      screenOffsetTop: 120
    },
    realisticImage: {
      width: 4562 / 2,
      height: 3796 / 2,
      screenOffsetLeft: 232 / 2,
      screenOffsetTop: 244 / 2
    }
  },
  {
    id: "imac-27",
    title: `iMac 27"`,
    screenWidth: 2560,
    screenHeight: 1440,
    disableRotation: true,
    externalClay: {
      width: 2848,
      height: 2351,
      screenOffsetLeft: 144,
      screenOffsetTop: 151
    },
    realisticImage: {
      width: 5676 / 2,
      height: 4720 / 2,
      screenOffsetLeft: 278 / 2,
      screenOffsetTop: 292 / 2,
      availableColors: [
        { id: "silver", title: "Silver", colorValue: "#E5E6E1" },
        { id: "pro", title: "Pro", colorValue: "#5F5E63" }
      ]
    }
  },
  {
    id: "pro-display-xdr",
    title: `Pro Display XDR`,
    screenWidth: 3008,
    screenHeight: 1692,
    disableRotation: true,
    externalClay: {
      width: 3148,
      height: 2325,
      screenOffsetLeft: 70,
      screenOffsetTop: 60
    },
    realisticImage: {
      width: 6276 / 2,
      height: 4695 / 2,
      screenOffsetLeft: 130 / 2,
      screenOffsetTop: 130 / 2
    }
  },
  {
    id: "dell-xps",
    title: `Dell XPS`,
    screenWidth: 1920,
    screenHeight: 1080,
    disableRotation: true,
    externalClay: {
      width: 2624,
      height: 1381,
      screenOffsetLeft: 352,
      screenOffsetTop: 57
    },
    realisticImage: {
      width: 5412 / 2,
      height: 2746 / 2,
      screenOffsetLeft: 786 / 2,
      screenOffsetTop: 108 / 2
    }
  },
  {
    id: "surface-book",
    title: `Microsoft Surface Book`,
    screenWidth: 1500,
    screenHeight: 1e3,
    disableRotation: true,
    externalClay: {
      width: 2089,
      height: 1234,
      screenOffsetLeft: 296,
      screenOffsetTop: 93
    },
    realisticImage: {
      width: 4200 / 2,
      height: 2508 / 2,
      screenOffsetLeft: 600 / 2,
      screenOffsetTop: 210 / 2
    }
  },
  // Tablets ------------------------------------------------------------------------------------------------------------------------
  {
    id: "ipad",
    title: "iPad",
    screenRadius: 0,
    screenWidth: 810,
    screenHeight: 1080,
    clayBezelLeft: 30,
    clayBezelRight: 30,
    clayBezelTop: 95,
    clayBezelBottom: 95,
    clayBezelRadius: 0,
    externalClay: {
      width: 966,
      height: 1378,
      screenOffsetLeft: 78,
      screenOffsetTop: 149
    },
    realisticImage: {
      width: 1920 / 2,
      height: 2720 / 2,
      screenOffsetLeft: 75,
      screenOffsetTop: 140,
      availableColors: [
        { id: "space-grey", title: "Space Grey", colorValue: "#C3C4C8" },
        { id: "silver", title: "Silver", colorValue: "#E1E2E4" },
        { id: "gold", title: "Gold", colorValue: "#EFD8BD" }
      ]
    }
  },
  {
    id: "ipad-mini",
    title: "iPad Mini",
    screenRadius: 0,
    clayBezelLeft: 49,
    clayBezelRight: 49,
    clayBezelTop: 49,
    clayBezelBottom: 49,
    clayBezelRadius: 49,
    screenWidth: 768,
    screenHeight: 1024,
    externalClay: {
      width: 924,
      height: 1384,
      screenOffsetLeft: 78,
      screenOffsetTop: 180
    },
    realisticImage: {
      width: 1856 / 2,
      height: 2728 / 2,
      screenOffsetLeft: 160 / 2,
      screenOffsetTop: 340 / 2,
      availableColors: [
        { id: "space-grey", title: "Space Grey", colorValue: "#C3C4C8" },
        { id: "silver", title: "Silver", colorValue: "#E1E2E4" },
        { id: "gold", title: "Gold", colorValue: "#EFD8BD" }
      ]
    }
  },
  {
    id: "ipad-air",
    title: "iPad Air",
    screenRadius: 18,
    clayBezelLeft: 49,
    clayBezelRight: 49,
    clayBezelTop: 49,
    clayBezelBottom: 49,
    clayBezelRadius: 49,
    screenWidth: 820,
    screenHeight: 1180,
    externalClay: {
      width: 994,
      height: 1374,
      screenOffsetLeft: 87,
      screenOffsetTop: 97
    },
    realisticImage: {
      width: 1960 / 2,
      height: 2680 / 2,
      screenOffsetLeft: 160 / 2,
      screenOffsetTop: 160 / 2,
      availableColors: [
        { id: "space-grey", title: "Space Grey", colorValue: "#C3C4C8" },
        { id: "silver", title: "Silver", colorValue: "#E1E2E4" },
        { id: "rose-gold", title: "Rose Gold", colorValue: "#ECCBC4" },
        { id: "blue", title: "Blue", colorValue: "#CBDAE6" },
        { id: "green", title: "Green", colorValue: "#DAF0D9" }
      ]
    }
  },
  {
    id: "ipad-pro-11",
    title: "iPad Pro 11\u2033",
    screenRadius: 17,
    clayBezelLeft: 49,
    clayBezelRight: 49,
    clayBezelTop: 49,
    clayBezelBottom: 49,
    clayBezelRadius: 49,
    screenWidth: 834,
    screenHeight: 1194,
    externalClay: {
      width: 990,
      height: 1370,
      screenOffsetLeft: 78,
      screenOffsetTop: 88
    },
    realisticImage: {
      width: 1968 / 2,
      height: 2688 / 2,
      screenOffsetLeft: 75,
      screenOffsetTop: 75,
      availableColors: [
        { id: "space-grey", title: "Space Grey", colorValue: "#C3C4C8" },
        { id: "silver", title: "Silver", colorValue: "#E1E2E4" }
      ]
    }
  },
  {
    id: "ipad-pro-12-9",
    title: "iPad Pro 12.9\u2033",
    ...presetsBase.iPadPro,
    screenRadius: 17,
    screenWidth: 1024,
    screenHeight: 1366,
    externalClay: {
      width: 1180,
      height: 1542,
      screenOffsetLeft: 78,
      screenOffsetTop: 88
    },
    realisticImage: {
      width: 2348 / 2,
      height: 3032 / 2,
      screenOffsetLeft: 75,
      screenOffsetTop: 75,
      availableColors: [
        { id: "space-grey", title: "Space Grey", colorValue: "#C3C4C8" },
        { id: "silver", title: "Silver", colorValue: "#E1E2E4" }
      ]
    }
  },
  {
    id: "surface-3",
    title: "Microsoft Surface 3",
    screenRadius: 0,
    clayBezelLeft: 49,
    clayBezelRight: 49,
    clayBezelTop: 49,
    clayBezelBottom: 49,
    clayBezelRadius: 49,
    screenWidth: 960,
    screenHeight: 640,
    externalClay: {
      width: 1184,
      height: 864,
      screenOffsetLeft: 112,
      screenOffsetTop: 112
    },
    realisticImage: {
      width: 2280 / 2,
      height: 1580 / 2,
      screenOffsetLeft: 180 / 2,
      screenOffsetTop: 150 / 2
    }
  },
  {
    id: "surface-pro-4",
    title: "Microsoft Surface Pro 4",
    screenRadius: 0,
    clayBezelLeft: 49,
    clayBezelRight: 49,
    clayBezelTop: 49,
    clayBezelBottom: 49,
    clayBezelRadius: 49,
    screenWidth: 1368,
    screenHeight: 912,
    externalClay: {
      width: 1592,
      height: 1136,
      screenOffsetLeft: 112,
      screenOffsetTop: 112
    },
    realisticImage: {
      width: 3176 / 2,
      height: 2224 / 2,
      screenOffsetLeft: 220 / 2,
      screenOffsetTop: 200 / 2
    }
  },
  // Watches ------------------------------------------------------------------------------------------------------------------------
  {
    id: "apple-watch-44",
    title: `Apple Watch 44mm`,
    screenRadius: 33,
    screenWidth: 184,
    screenHeight: 224,
    disableRotation: true,
    externalClay: {
      width: 298,
      height: 502,
      screenOffsetLeft: 57,
      screenOffsetTop: 129
    },
    realisticImage: {
      width: 548 / 2,
      height: 908 / 2,
      screenOffsetLeft: 90 / 2,
      screenOffsetTop: 230 / 2,
      availableColors: [
        { id: "black", title: "Black", colorValue: "#2E2C36" },
        { id: "white", title: "White", colorValue: "#F7F3F0" },
        { id: "yellow", title: "Yellow", colorValue: "#FDDC6C" },
        { id: "orange", title: "Orange", colorValue: "#F35C56" }
      ]
    }
  },
  {
    id: "apple-watch-40",
    title: `Apple Watch 40mm`,
    screenRadius: 27,
    screenWidth: 162,
    screenHeight: 197,
    disableRotation: true,
    externalClay: {
      width: 280,
      height: 463,
      screenOffsetLeft: 59,
      screenOffsetTop: 124
    },
    realisticImage: {
      width: 504 / 2,
      height: 854 / 2,
      screenOffsetLeft: 90 / 2,
      screenOffsetTop: 230 / 2,
      availableColors: [
        { id: "black", title: "Black", colorValue: "#2E2C36" },
        { id: "white", title: "White", colorValue: "#F7F3F0" },
        { id: "yellow", title: "Yellow", colorValue: "#FDDC6C" },
        { id: "orange", title: "Orange", colorValue: "#F35C56" }
      ]
    }
  },
  // TVs ------------------------------------------------------------------------------------------------------------------------
  {
    id: "tv-full-hd",
    title: `Full HD`,
    screenRadius: 0,
    screenWidth: 1920,
    screenHeight: 1080,
    externalClay: {
      width: 1968,
      height: 1168,
      screenOffsetLeft: 24,
      screenOffsetTop: 12
    },
    realisticImage: {
      width: 4040 / 2,
      height: 2360 / 2,
      screenOffsetLeft: 100 / 2,
      screenOffsetTop: 100 / 2
    }
  },
  {
    id: "tv-4k",
    title: `4K`,
    screenRadius: 0,
    screenWidth: 3840,
    screenHeight: 2160,
    externalClay: {
      width: 3908,
      height: 2308,
      screenOffsetLeft: 34,
      screenOffsetTop: 24
    },
    realisticImage: {
      width: 7960 / 2,
      height: 4600 / 2,
      screenOffsetLeft: 140 / 2,
      screenOffsetTop: 140 / 2
    }
  },
  // Old devices ------------------------------------------------------------------------------------------------------------------------
  // deprecated
  {
    id: "720p",
    title: "720p",
    ...presetsBase.desktop,
    screenWidth: 720,
    screenHeight: 1280
  },
  // deprecated
  {
    id: "900p",
    title: "900p",
    ...presetsBase.desktop,
    screenWidth: 900,
    screenHeight: 1440
  },
  // deprecated
  {
    id: "1080p",
    title: "1080p",
    ...presetsBase.desktop,
    screenWidth: 1080,
    screenHeight: 1920
  },
  // deprecated
  {
    id: "1440p",
    title: "1440p",
    ...presetsBase.desktop,
    screenWidth: 1440,
    screenHeight: 2560
  },
  // deprecated
  {
    id: "4k",
    title: "4K",
    ...presetsBase.desktop,
    screenWidth: 2160,
    screenHeight: 3840
  }
];
var deviceCodeComponentPresetIds = [
  "iphone-12",
  "iphone-12-mini",
  "iphone-12-pro",
  "iphone-11",
  "iphone-11-pro",
  "iphone-11-pro-max",
  "iphone-8",
  "iphone-8-plus",
  "iphone-se",
  "samsung-note-10",
  "pixel-4",
  "ipad",
  "ipad-pro-11",
  "ipad-pro-12-9",
  "720p",
  "900p",
  "1080p",
  "1440p",
  "4k"
];
var devicePresetsMap = devicePresets.reduce((map, preset) => {
  map[preset.id] = preset;
  return map;
}, {});
function getDevicePreset(presetId) {
  var _a;
  return (_a = devicePresetsMap[presetId]) != null ? _a : devicePresetsMap[defaultPresetId];
}

// ../../library/src/components/Device/DeviceCodeComponentProps.ts
var defaultDeviceProps = {
  preset: defaultPresetId,
  customWidth: 375,
  customHeight: 800,
  customBezel: 20,
  isMixedBezel: false,
  bezelTop: 20,
  bezelRight: 20,
  bezelBottom: 20,
  bezelLeft: 20,
  customBezelRadius: 20,
  customScreenRadius: 0,
  orientation: "portrait",
  skin: "clay",
  theme: "dark",
  shadow: true,
  backgroundColor: void 0
};
function convertPropsToDeviceOptions(props, { forceOldClay = false } = {}) {
  var _a, _b, _c, _d, _e, _f, _g;
  if (props.preset === "no-device") {
    return;
  }
  let preset;
  if (props.preset === "custom") {
    preset = {
      screenWidth: props.customWidth,
      screenHeight: props.customHeight,
      screenRadius: props.customScreenRadius,
      clayBezelTop: props.isMixedBezel ? props.bezelTop : props.customBezel,
      clayBezelRight: props.isMixedBezel ? props.bezelRight : props.customBezel,
      clayBezelBottom: props.isMixedBezel ? props.bezelBottom : props.customBezel,
      clayBezelLeft: props.isMixedBezel ? props.bezelLeft : props.customBezel,
      clayBezelRadius: props.customBezelRadius
    };
  } else {
    preset = getDevicePreset(props.preset);
  }
  const colors = getColorsFromTheme(props.theme);
  const shadowColor = colors.shadowColor;
  const shadow = props.shadow ? `0 10px 30px ${shadowColor}` : void 0;
  const rotate = !preset.disableRotation && (props.orientation === "landscape" || props.rotated);
  let deviceWidth;
  let deviceHeight;
  let screenOffsetTop;
  let screenOffsetLeft;
  let colorId = props.colorId;
  let appearance;
  if ((props.skin === void 0 || props.skin === "realistic") && preset.realisticImage && props.preset) {
    deviceWidth = preset.realisticImage.width;
    deviceHeight = preset.realisticImage.height;
    screenOffsetTop = preset.realisticImage.screenOffsetTop;
    screenOffsetLeft = preset.realisticImage.screenOffsetLeft;
    colorId = colorId != null ? colorId : colorIdForTheme(props.theme, preset.realisticImage.availableColors);
    appearance = {
      type: "realistic",
      imageUrl: colorId ? `https://preview.framercdn.com/images/devices/${props.preset}-${colorId}.png` : `https://preview.framercdn.com/images/devices/${props.preset}.png`,
      imageWidth: preset.realisticImage.width,
      imageHeight: preset.realisticImage.height,
      rotateImage: rotate
    };
  } else {
    deviceWidth = preset.screenWidth + ((_a = preset.clayBezelLeft) != null ? _a : 0) + ((_b = preset.clayBezelRight) != null ? _b : 0);
    deviceHeight = preset.screenHeight + ((_c = preset.clayBezelTop) != null ? _c : 0) + ((_d = preset.clayBezelBottom) != null ? _d : 0);
    screenOffsetTop = (_e = preset.clayBezelTop) != null ? _e : 0;
    screenOffsetLeft = (_f = preset.clayBezelLeft) != null ? _f : 0;
    if (preset.externalClay && !forceOldClay) {
      deviceWidth = preset.externalClay.width;
      deviceHeight = preset.externalClay.height;
      screenOffsetTop = preset.externalClay.screenOffsetTop;
      screenOffsetLeft = preset.externalClay.screenOffsetLeft;
      appearance = {
        type: "external-clay",
        imageUrl: `https://preview.framercdn.com/images/devices/${props.preset}-${props.theme}.svg`,
        imageWidth: preset.externalClay.width,
        imageHeight: preset.externalClay.height,
        rotateImage: rotate
      };
    } else {
      appearance = {
        type: "clay",
        bezelRadius: preset.clayBezelRadius !== void 0 ? `${preset.clayBezelRadius}px` : void 0,
        bezelColor: colors.bezelColor,
        bezelShadeColor: colors.bezelShadeColor
      };
    }
  }
  let screenWidth = preset.screenWidth;
  let screenHeight = preset.screenHeight;
  if (rotate) {
    const screenOffsetRight = deviceWidth - screenWidth - screenOffsetLeft;
    [deviceWidth, deviceHeight] = [deviceHeight, deviceWidth];
    [screenWidth, screenHeight] = [screenHeight, screenWidth];
    [screenOffsetTop, screenOffsetLeft] = [screenOffsetRight, screenOffsetTop];
  }
  const handOffset = (_g = preset.realisticImage) == null ? void 0 : _g.handOffset;
  return {
    deviceWidth,
    deviceHeight,
    appearance,
    screenWidth,
    screenHeight,
    screenOffsetTop,
    screenOffsetLeft,
    screenRadius: preset.screenRadius !== void 0 ? `${preset.screenRadius}px` : void 0,
    screenMaskImage: appearance.type !== "realistic" && preset.screenMask ? makeScreenMaskImage({
      mask: preset.screenMask,
      // width/height of the mask = screen width/height pre-rotation
      width: preset.screenWidth,
      height: preset.screenHeight,
      rotate
    }) : void 0,
    screenColor: colors.screenColor,
    shadow,
    hand: props.hand !== void 0 && supportsHand(props) ? {
      imageUrl: `https://preview.framercdn.com/images/hands/${props.hand}.png`,
      offsetLeft: handOffset == null ? void 0 : handOffset.left,
      offsetRight: handOffset == null ? void 0 : handOffset.right,
      offsetBottom: handOffset == null ? void 0 : handOffset.bottom
    } : void 0,
    background: props.backgroundColor,
    theme: props.theme,
    colorId
  };
}
function makeScreenMaskImage({
  mask,
  width,
  height,
  rotate = false
}) {
  const transform2 = rotate ? (
    // Rotate 90 degrees counter-clockwise around (0,0), then move the
    // result down into the viewport (rightmost transform is applied first).
    `transform="translate(0 ${width}) rotate(-90)"`
  ) : "";
  const encoded = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewport="0 0 ${width} ${height}" preserveAspectRatio="none"><g x="0" y="0" ${transform2}>${mask}</g></svg>`
  );
  return `url("data:image/svg+xml;utf8,${encoded}")`;
}
var lightColors = /* @__PURE__ */ new Set(["white", "silver", "clearly-white", "sorta-sage"]);
var darkColors = /* @__PURE__ */ new Set(["black", "space-grey", "graphite", "just-black", "pro"]);
function colorIdForTheme(theme, availableColors) {
  var _a;
  if (!availableColors)
    return;
  const colors = theme === "light" ? lightColors : darkColors;
  for (const color2 of availableColors) {
    if (colors.has(color2.id)) {
      return color2.id;
    }
  }
  return (_a = availableColors[0]) == null ? void 0 : _a.id;
}
function supportsHand({ preset: presetId, skin, orientation = "portrait" }) {
  var _a;
  if (!presetId || presetId === "custom" || presetId === "no-device" || orientation === "landscape")
    return false;
  const preset = getDevicePreset(presetId);
  return skin !== "clay" && ((_a = preset.realisticImage) == null ? void 0 : _a.handOffset) !== void 0;
}

// ../../library/src/components/Device/usePrototypingMetaTags.ts
import React18 from "react";
function applyMetaTag(name, props) {
  var _a;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    (_a = document.getElementsByTagName("head")[0]) == null ? void 0 : _a.appendChild(tag);
    tag.setAttribute("name", name);
  }
  for (const [k, v] of Object.entries(props)) {
    tag.setAttribute(k, v);
  }
}
function usePrototypingMetaTags() {
  React18.useEffect(() => {
    applyMetaTag("mobile-web-app-capable", { content: "yes" });
    applyMetaTag("apple-mobile-web-app-capable", { content: "yes" });
    applyMetaTag("apple-mobile-web-app-status-bar-style", {
      content: "black-translucent"
    });
    applyMetaTag("viewport", {
      content: "viewport-fit=cover, user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"
    });
  }, []);
}

// ../../library/src/components/Device/DeviceCodeComponent.tsx
function DeviceCodeComponentInner({ children, ...props }) {
  usePrototypingMetaTags();
  const deviceOptions = convertPropsToDeviceOptions(props, { forceOldClay: true });
  if (!deviceOptions) {
    injectComponentCSSRules();
    return /* @__PURE__ */ React19.createElement(
      "div",
      {
        "data-framer-component-type": "DeviceComponent",
        className: "no-device",
        style: { width: "100%", height: "100%" }
      },
      /* @__PURE__ */ React19.createElement(ProvideParentSize, { parentSize: 1 /* Disabled */ }, children)
    );
  }
  const child = Array.isArray(children) ? children[0] : children;
  const resizedChild = child && React19.isValidElement(child) ? React19.cloneElement(child, {
    width: deviceOptions.screenWidth,
    height: deviceOptions.screenHeight
  }) : null;
  return /* @__PURE__ */ React19.createElement(Device, { scaleTo: "dynamic", deviceOptions }, resizedChild);
}
var DeviceCodeComponent = /* @__PURE__ */ (() => {
  const { componentWidth: defaultWidth2, componentHeight: defaultHeight2 } = getComponentSize(
    convertPropsToDeviceOptions(defaultDeviceProps, { forceOldClay: true })
  );
  DeviceCodeComponentInner.defaultProps = {
    width: defaultWidth2,
    height: defaultHeight2,
    ...defaultDeviceProps
  };
  const deviceCodeComponentPresets = devicePresets.filter((preset) => deviceCodeComponentPresetIds.includes(preset.id));
  addPropertyControls(DeviceCodeComponentInner, {
    children: {
      title: "Content",
      type: "componentinstance" /* ComponentInstance */
    },
    preset: {
      type: "enum" /* Enum */,
      options: ["no-device", "custom"].concat(deviceCodeComponentPresets.map((preset) => preset.id)),
      optionTitles: ["No Device", "Custom"].concat(deviceCodeComponentPresets.map((preset) => preset.title))
    },
    customWidth: {
      title: "Width",
      type: "number" /* Number */,
      min: 0,
      displayStepper: true,
      hidden: (props) => props.preset !== "custom"
    },
    customHeight: {
      title: "Height",
      type: "number" /* Number */,
      min: 0,
      displayStepper: true,
      hidden: (props) => props.preset !== "custom"
    },
    customBezel: {
      title: "Bezel",
      type: "fusednumber" /* FusedNumber */,
      min: 0,
      toggleKey: "isMixedBezel",
      toggleTitles: ["a", "b"],
      valueKeys: ["bezelTop", "bezelRight", "bezelBottom", "bezelLeft"],
      valueLabels: ["T", "R", "B", "L"],
      hidden: (props) => props.preset !== "custom"
    },
    customBezelRadius: {
      title: "Bezel Radius",
      type: "number" /* Number */,
      min: 0,
      displayStepper: true,
      hidden: (props) => props.preset !== "custom"
    },
    customScreenRadius: {
      title: "Screen Radius",
      type: "number" /* Number */,
      min: 0,
      displayStepper: true,
      hidden: (props) => props.preset !== "custom"
    },
    orientation: {
      type: "enum" /* Enum */,
      displaySegmentedControl: true,
      options: ["portrait", "landscape"],
      optionTitles: ["Portrait", "Landscape"],
      optionIcons: ["orientation-portrait", "orientation-landscape"],
      hidden: (props) => !!props.preset && !supportsOrientation(props.preset)
    },
    skin: {
      title: "Device",
      type: "enum" /* Enum */,
      displaySegmentedControl: true,
      options: ["realistic", "clay"],
      optionTitles: ["Realistic", "Clay"],
      defaultValue: "clay",
      hidden: (props) => !!props.preset && !supportsRealisticSkin(props.preset)
    },
    theme: {
      type: "enum" /* Enum */,
      displaySegmentedControl: true,
      options: ["light", "dark"],
      optionTitles: ["Light", "Dark"],
      hidden: (props) => !!props.preset && !supportsThemes(props.preset, props.skin)
    },
    shadow: {
      type: "boolean" /* Boolean */,
      enabledTitle: "On",
      disabledTitle: "Off",
      hidden: ({ skin, preset }) => preset !== "custom" && skin === "realistic" || preset === "no-device"
    },
    hand: {
      type: "enum" /* Enum */,
      options: [void 0, "hand-1", "hand-2"],
      optionTitles: ["None", "Model 1", "Model 2"],
      hidden: (props) => !supportsHand(props)
    },
    backgroundColor: {
      type: "color" /* Color */,
      title: "Background",
      optional: true,
      hidden: ({ preset }) => preset === "no-device"
    }
  });
  return DeviceCodeComponentInner;
})();
function supportsOrientation(presetId) {
  if (presetId === "no-device")
    return false;
  if (presetId === "custom")
    return true;
  const preset = getDevicePreset(presetId);
  return !preset.disableRotation;
}
function supportsRealisticSkin(presetId) {
  if (presetId === "custom" || presetId === "no-device")
    return false;
  const preset = getDevicePreset(presetId);
  return !!preset.realisticImage;
}
function supportsThemes(presetId, skin) {
  if (presetId === "no-device")
    return false;
  if (presetId === "custom" || skin !== "realistic")
    return true;
  const preset = getDevicePreset(presetId);
  const realisticImage = preset.realisticImage;
  if (realisticImage === void 0) {
    return true;
  }
  if (colorIdForTheme("dark", realisticImage.availableColors) !== void 0) {
    return true;
  }
  return false;
}

// ../../library/src/components/EmptyState.tsx
import React28 from "react";

// ../../library/src/render/presentation/Frame/FrameWithMotion.tsx
var import_process3 = __toESM(require_browser(), 1);
import React27, { forwardRef, useContext as useContext5, useRef as useRef4 } from "react";

// ../../library/src/utils/isPropValid.ts
function memoize(fn) {
  const cache3 = /* @__PURE__ */ Object.create(null);
  return (arg) => {
    if (cache3[arg] === void 0)
      cache3[arg] = fn(arg);
    return cache3[arg];
  };
}
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize(
  (prop) => reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91
  /* Z+1 */
);

// ../../library/src/render/style/BackgroundImageComponent.tsx
import React20 from "react";

// ../../library/src/useIsomorphicLayoutEffect.ts
import { useEffect, useLayoutEffect } from "react";
var useIsomorphicLayoutEffect2 = typeof document !== "undefined" ? useLayoutEffect : useEffect;

// ../../library/src/utils/runtimeInjection.ts
var mockWithWarning = (message) => {
  return () => {
    warnOnce(message);
  };
};
var implementation = {
  // We need a default implementation for useImageSource and useImageElement as it is used for rendering image backgrounds which would break otherwise.
  // The default value is used for HTML export and when using the library without Framer.
  useImageSource(image) {
    var _a;
    return (_a = image.src) != null ? _a : "";
  },
  useImageElement(image, rect, nodeId) {
    const element = new Image();
    element.src = runtime.useImageSource(image, rect, nodeId);
    if (image.srcSet)
      element.srcset = image.srcSet;
    return element;
  }
};
var isRuntimeInjected = false;
var runtimeProxy = {
  get(target, key7, reciever) {
    if (Reflect.has(target, key7)) {
      return Reflect.get(target, key7, reciever);
    }
    if (isRuntimeInjected) {
      return mockWithWarning(`${String(key7)} is not available in this version of Framer.`);
    } else {
      return mockWithWarning(`${String(key7)} is only available inside of Framer. https://www.framer.com/`);
    }
  }
};
var runtime = new Proxy(implementation, runtimeProxy);
function _injectRuntime(injectedRuntime) {
  Object.assign(implementation, injectedRuntime);
  isRuntimeInjected = true;
}

// ../../library/src/utils/utils.ts
function isFunction(value) {
  return value instanceof Function;
}
function isString2(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return typeof value === "number";
}
function isArray(value) {
  return value instanceof Array;
}
function isObject2(value) {
  return typeof value === "object";
}
function isUndefined(value) {
  return typeof value === "undefined";
}

// ../../library/src/render/utils/imageRendering.ts
function minZoomForPixelatedImageRendering(image, containerSize, devicePixelRatio3 = 1) {
  var _a, _b, _c, _d;
  let { width: frameWidth, height: frameHeight } = containerSize;
  const imageWidth = (_b = (_a = image.pixelWidth) != null ? _a : image.intrinsicWidth) != null ? _b : 0;
  const imageHeight = (_d = (_c = image.pixelHeight) != null ? _c : image.intrinsicHeight) != null ? _d : 0;
  if (frameWidth < 1 || frameHeight < 1 || imageWidth < 1 || imageHeight < 1) {
    return void 0;
  }
  frameWidth *= devicePixelRatio3;
  frameHeight *= devicePixelRatio3;
  const frameAspectRatio = frameWidth / frameHeight;
  const imageAspectRatio = imageWidth / imageHeight;
  switch (image.fit) {
    case "fill":
      if (imageAspectRatio > frameAspectRatio) {
        return imageHeight / frameHeight;
      } else {
        return imageWidth / frameWidth;
      }
    case "fit":
    case "stretch":
      return Math.max(imageWidth / frameWidth, imageHeight / frameHeight);
  }
}
function imageRenderingForZoom(zoom, minPixelatedZoom) {
  if (minPixelatedZoom && Math.max(1, zoom) > minPixelatedZoom) {
    return "pixelated";
  }
  return "auto";
}

// ../../library/src/render/style/BackgroundImageComponent.tsx
var wrapperStyle = {
  position: "absolute",
  pointerEvents: "none",
  userSelect: "none",
  borderRadius: "inherit",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var placeholderStyle = {
  backgroundSize: "16px 16px",
  backgroundImage: "repeating-linear-gradient(45deg, rgba(180, 180, 180, 0.8) 0, rgba(180, 180, 180, 0.8) 1px, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.2) 50%)",
  border: "1px solid #c4c4c4"
};
function cssObjectFit(imageFit) {
  switch (imageFit) {
    case "fit":
      return "contain";
    case "stretch":
      return "fill";
    default:
      return "cover";
  }
}
function cssImageRendering(image, containerSize) {
  if (!containerSize)
    return "auto";
  const devicePixelRatio3 = RenderTarget.current() === "CANVAS" /* canvas */ ? safeWindow.devicePixelRatio : 1;
  const minPixelatedZoom = minZoomForPixelatedImageRendering(image, containerSize, devicePixelRatio3);
  if (RenderTarget.current() === "CANVAS" /* canvas */) {
    return imageRenderingForZoom(1, minPixelatedZoom);
  } else {
    return imageRenderingForZoom(RenderEnvironment.zoom, minPixelatedZoom);
  }
}
function getImageStyle(image, containerSize) {
  return {
    pointerEvents: "none",
    userSelect: "none",
    display: "block",
    width: "100%",
    height: "100%",
    borderRadius: "inherit",
    objectPosition: "center",
    objectFit: cssObjectFit(image.fit),
    imageRendering: cssImageRendering(image, containerSize)
  };
}
function InnerImage({ image, containerSize, nodeId, alt }) {
  const wrapperRef = React20.useRef(null);
  const isStaticRendering = RenderTarget.current() !== "CANVAS" /* canvas */;
  const source = runtime.useImageSource(image, containerSize, nodeId);
  const imageStyle = getImageStyle(image, containerSize);
  if (!isStaticRendering) {
    const imageElement = runtime.useImageElement(image, containerSize, nodeId);
    useIsomorphicLayoutEffect2(() => {
      const wrapper = wrapperRef.current;
      if (wrapper === null)
        return;
      wrapper.appendChild(imageElement);
      return () => {
        wrapper.removeChild(imageElement);
      };
    }, [imageElement]);
    Object.assign(imageElement.style, imageStyle);
  }
  return /* @__PURE__ */ React20.createElement("div", { ref: wrapperRef, style: { display: "contents", borderRadius: "inherit", pointerEvents: "none" } }, isStaticRendering ? /* @__PURE__ */ React20.createElement(
    "img",
    {
      src: source,
      alt: alt != null ? alt : image.alt,
      srcSet: image.srcSet,
      sizes: image.sizes,
      style: imageStyle,
      loading: image.loading
    }
  ) : null);
}
function BackgroundImageComponent({ layoutId, image, ...props }) {
  if (layoutId) {
    layoutId = layoutId + "-background";
  }
  const hasImage = isString2(image.src);
  const hasPlaceholder = !hasImage;
  return /* @__PURE__ */ React20.createElement(
    motion.div,
    {
      layoutId,
      style: hasPlaceholder ? { ...wrapperStyle, ...placeholderStyle } : wrapperStyle,
      "data-framer-background-image-wrapper": true
    },
    hasImage && /* @__PURE__ */ React20.createElement(InnerImage, { image, ...props })
  );
}

// ../../library/src/render/types/BackgroundImage.ts
var key2 = "src";
var BackgroundImage;
((BackgroundImage2) => {
  BackgroundImage2.isImageObject = function(image) {
    if (!image || typeof image === "string")
      return false;
    return key2 in image;
  };
})(BackgroundImage || (BackgroundImage = {}));

// ../../library/src/render/style/backgroundImageFromProps.ts
function applyForwardOverrides(background, props) {
  const { _forwardedOverrideId, _forwardedOverrides, id } = props;
  const forwardedOverrideId = _forwardedOverrideId != null ? _forwardedOverrideId : id;
  const src = _forwardedOverrides && forwardedOverrideId ? _forwardedOverrides[forwardedOverrideId] : void 0;
  if (src && typeof src === "string") {
    background = { ...background, src };
  }
  return background;
}
function backgroundImageFromProps(props) {
  const { background, image } = props;
  if (image !== void 0 && background && !BackgroundImage.isImageObject(background)) {
    return;
  }
  let backgroundImage = null;
  if (isString2(image)) {
    backgroundImage = { alt: "", src: image };
  } else {
    backgroundImage = Animatable.get(background, null);
  }
  if (!BackgroundImage.isImageObject(backgroundImage)) {
    return;
  }
  return applyForwardOverrides(backgroundImage, props);
}

// ../../library/src/render/style/BorderComponent.tsx
import React21 from "react";
function collectBorderStyleForProps(props, style, collapseEqualBorders = true) {
  const { borderWidth, borderStyle, borderColor } = props;
  if (!borderWidth) {
    return;
  }
  let borderTop;
  let borderBottom;
  let borderLeft;
  let borderRight;
  if (typeof borderWidth === "number") {
    borderTop = borderBottom = borderLeft = borderRight = borderWidth;
  } else {
    borderTop = borderWidth.top || 0;
    borderBottom = borderWidth.bottom || 0;
    borderLeft = borderWidth.left || 0;
    borderRight = borderWidth.right || 0;
  }
  if (borderTop === 0 && borderBottom === 0 && borderLeft === 0 && borderRight === 0) {
    return;
  }
  if (collapseEqualBorders && borderTop === borderBottom && borderTop === borderLeft && borderTop === borderRight) {
    style.border = `${borderTop}px ${borderStyle} ${borderColor}`;
    return;
  }
  style.borderStyle = props.borderStyle;
  style.borderColor = props.borderColor;
  style.borderTopWidth = `${borderTop}px`;
  style.borderBottomWidth = `${borderBottom}px`;
  style.borderLeftWidth = `${borderLeft}px`;
  style.borderRightWidth = `${borderRight}px`;
}
function Border(props) {
  const layoutId = props.layoutId ? `${props.layoutId}-border` : void 0;
  if (!props.borderWidth) {
    return null;
  }
  const style = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: "inherit",
    pointerEvents: "none"
  };
  if (props.border) {
    ;
    style.border = props.border;
    return /* @__PURE__ */ React21.createElement(motion.div, { style });
  }
  collectBorderStyleForProps(props, style, false);
  return /* @__PURE__ */ React21.createElement(motion.div, { "data-frame-border": true, style, layoutId });
}

// ../../library/src/utils/environment.ts
var import_process = __toESM(require_browser(), 1);

// ../../library/src/utils/safeNavigator.ts
var safeNavigator = typeof navigator !== "undefined" ? navigator : void 0;

// ../../library/src/utils/environment.ts
var isBrowser2 = () => typeof document === "object";
var isWebKit = () => {
  var _a;
  return ((_a = safeNavigator) == null ? void 0 : _a.userAgent.includes("AppleWebKit/")) && !isChrome() && !isEdge();
};
var webkitVersion = () => {
  let version2 = -1;
  const regexp = /AppleWebKit\/([\d.]+)/;
  const result = safeNavigator && regexp.exec(safeNavigator.userAgent);
  if (result && result[1]) {
    version2 = parseFloat(result[1]);
  }
  return version2;
};
var safariVersion = () => {
  let version2 = -1;
  const regexp = /Version\/([\d.]+)/;
  const result = safeNavigator && regexp.exec(safeNavigator.userAgent);
  if (result && result[1]) {
    version2 = parseFloat(result[1]);
  }
  return version2;
};
var isChrome = () => safeNavigator && /Chrome/.test(safeNavigator.userAgent) && /Google Inc/.test(safeNavigator.vendor) && !isEdge();
var isSafari = () => safeNavigator && /Safari/.test(safeNavigator.userAgent) && /Apple Computer/.test(safeNavigator.vendor);
var isFirefox = () => safeNavigator && /Firefox\/\d+\.\d+$/.test(safeNavigator.userAgent);
var isFramerX = () => safeNavigator && /FramerX/.test(safeNavigator.userAgent);
var isEdge = () => safeNavigator && /Edg\//.test(safeNavigator.userAgent);
var isAndroid = () => safeNavigator && /(android)/i.test(safeNavigator.userAgent);
var isIOS = () => safeNavigator && /(iPhone|iPod|iPad)/i.test(safeNavigator.platform);
var isMacOS = () => safeNavigator && /Mac/.test(safeNavigator.platform);
var isWindows = () => safeNavigator && /Win/.test(safeNavigator.platform);
var isTouch = () => safeWindow.ontouchstart === null && safeWindow.ontouchmove === null && safeWindow.ontouchend === null;
var isDesktop = () => deviceType() === "desktop";
var isPhone = () => deviceType() === "phone";
var isTablet = () => deviceType() === "tablet";
var isMobile = () => isPhone() || isTablet();
var isFileUrl = (url) => url.startsWith("file://");
var isDataUrl = (url) => url.startsWith("data:");
var isTest = () => import_process.default.env.NODE_ENV === "test";
var isRelativeUrl = (url) => !/^([a-zA-Z]{1,8}:\/\/).*$/.test(url);
var isLocalServerUrl = (url) => /[a-zA-Z]{1,8}:\/\/127\.0\.0\.1/.test(url) || /[a-zA-Z]{1,8}:\/\/localhost/.test(url);
var isLocalUrl = (url) => {
  if (isFileUrl(url))
    return true;
  if (isLocalServerUrl(url))
    return true;
  return false;
};
var isLocalAssetUrl = (url, baseUrl) => {
  if (baseUrl === null)
    baseUrl = safeWindow.location.href;
  if (isDataUrl(url))
    return false;
  if (isLocalUrl(url))
    return true;
  if (isRelativeUrl(url) && isLocalUrl(baseUrl))
    return true;
  return false;
};
var devicePixelRatio2 = () => safeWindow.devicePixelRatio;
var isJP2Supported = function() {
  if (isFirefox())
    return false;
  return isWebKit();
};
var isWebPSupported = () => isChrome();
var deviceType = () => {
  if (safeNavigator && /(tablet)|(iPad)|(Nexus 9)/i.test(safeNavigator.userAgent))
    return "tablet";
  if (safeNavigator && /(mobi)/i.test(safeNavigator.userAgent))
    return "phone";
  return "desktop";
};
var deviceOS = () => {
  if (isMacOS())
    return "macos";
  if (isIOS())
    return "ios";
  if (isAndroid())
    return "android";
  if (isWindows())
    return "windows";
};
var deviceFont = (os) => {
  if (!os) {
    os = deviceOS();
  }
  const fonts = {
    apple: "-apple-system, BlinkMacSystemFont, SF Pro Text, SF UI Text, Helvetica Neue",
    google: "Roboto, Helvetica Neue",
    microsoft: "Segoe UI, Helvetica Neue"
  };
  if (os === "macos")
    return fonts.apple;
  if (os === "ios")
    return fonts.apple;
  if (os === "android")
    return fonts.google;
  if (os === "windows")
    return fonts.microsoft;
  return fonts.apple;
};
var environment = {
  isWebKit,
  webkitVersion,
  isChrome,
  isSafari,
  isFirefox,
  isFramerX,
  isEdge,
  isAndroid,
  isIOS,
  isMacOS,
  isWindows,
  isTouch,
  isDesktop,
  isPhone,
  isTablet,
  isMobile,
  isFileUrl,
  isDataUrl,
  isRelativeUrl,
  isLocalServerUrl,
  isLocalUrl,
  isLocalAssetUrl,
  devicePixelRatio: devicePixelRatio2,
  isJP2Supported,
  isWebPSupported,
  deviceType,
  deviceOS,
  deviceFont,
  safariVersion
};

// ../../library/src/render/utils/layoutHintDataPropsForCenter.ts
var isChrome2 = isChrome();
function layoutHintDataPropsForCenter(center) {
  const props = {};
  if (!isChrome2 || RenderTarget.current() !== "CANVAS" /* canvas */) {
    return props;
  }
  if (center === true || center === "x") {
    props["data-framer-layout-hint-center-x"] = true;
  }
  if (center === true || center === "y") {
    props["data-framer-layout-hint-center-y"] = true;
  }
  return props;
}

// ../../library/src/render/utils/nodeIdFromString.ts
function nodeIdFromString(str) {
  return str.replace(/^id_/, "").replace(/\\/g, "");
}

// ../../library/src/render/utils/processOverrideForwarding.ts
import React22 from "react";
function processOverrideForwarding(props, children) {
  if (!children) {
    children = props.children;
    if (!children)
      return { props, children };
  }
  let _forwardedOverrides = props._forwardedOverrides;
  const extractions = props._overrideForwardingDescription;
  if (extractions) {
    _forwardedOverrides = void 0;
    for (const key7 in extractions) {
      const propName = extractions[key7];
      const value = props[propName];
      if (value !== void 0) {
        if (!_forwardedOverrides) {
          _forwardedOverrides = {};
          props = { ...props };
        }
        _forwardedOverrides[key7] = props[propName];
        delete props[propName];
      }
    }
  }
  if (!_forwardedOverrides)
    return { props, children };
  children = React22.Children.map(children, (child) => {
    if (!React22.isValidElement(child))
      return child;
    return React22.cloneElement(child, { _forwardedOverrides });
  });
  return { props, children };
}

// ../../../node_modules/style-value-types/dist/es/utils.mjs
var clamp2 = (min, max) => (v) => Math.max(Math.min(v, max), min);
var sanitize = (v) => v % 1 ? Number(v.toFixed(5)) : v;
var floatRegex = /(-)?([\d]*\.?[\d])+/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString3(v) {
  return typeof v === "string";
}

// ../../../node_modules/style-value-types/dist/es/numbers/index.mjs
var number = {
  test: (v) => typeof v === "number",
  parse: parseFloat,
  transform: (v) => v
};
var alpha = Object.assign(Object.assign({}, number), { transform: clamp2(0, 1) });
var scale = Object.assign(Object.assign({}, number), { default: 1 });

// ../../../node_modules/style-value-types/dist/es/numbers/units.mjs
var createUnitType = (unit) => ({
  test: (v) => isString3(v) && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: (v) => `${v}${unit}`
});
var degrees = createUnitType("deg");
var percent = createUnitType("%");
var px = createUnitType("px");
var vh = createUnitType("vh");
var vw = createUnitType("vw");
var progressPercentage = Object.assign(Object.assign({}, percent), { parse: (v) => percent.parse(v) / 100, transform: (v) => percent.transform(v * 100) });

// ../../../node_modules/style-value-types/dist/es/color/utils.mjs
var isColorString = (type, testProp) => (v) => {
  return Boolean(isString3(v) && singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => (v) => {
  if (!isString3(v))
    return v;
  const [a, b, c, alpha2] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a),
    [bName]: parseFloat(b),
    [cName]: parseFloat(c),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};

// ../../../node_modules/style-value-types/dist/es/color/hsla.mjs
var hsla = {
  test: isColorString("hsl", "hue"),
  parse: splitColor("hue", "saturation", "lightness"),
  transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};

// ../../../node_modules/style-value-types/dist/es/color/rgba.mjs
var clampRgbUnit = clamp2(0, 255);
var rgbUnit = Object.assign(Object.assign({}, number), { transform: (v) => Math.round(clampRgbUnit(v)) });
var rgba = {
  test: isColorString("rgb", "red"),
  parse: splitColor("red", "green", "blue"),
  transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

// ../../../node_modules/style-value-types/dist/es/color/hex.mjs
function parseHex(v) {
  let r = "";
  let g = "";
  let b = "";
  let a = "";
  if (v.length > 5) {
    r = v.substr(1, 2);
    g = v.substr(3, 2);
    b = v.substr(5, 2);
    a = v.substr(7, 2);
  } else {
    r = v.substr(1, 1);
    g = v.substr(2, 1);
    b = v.substr(3, 1);
    a = v.substr(4, 1);
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

// ../../../node_modules/style-value-types/dist/es/color/index.mjs
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
    return isString3(v) ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  }
};

// ../../../node_modules/style-value-types/dist/es/complex/index.mjs
var colorToken = "${c}";
var numberToken = "${n}";
function test(v) {
  var _a, _b, _c, _d;
  return isNaN(v) && isString3(v) && ((_b = (_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match(colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0;
}
function analyse(v) {
  if (typeof v === "number")
    v = `${v}`;
  const values = [];
  let numColors = 0;
  const colors = v.match(colorRegex);
  if (colors) {
    numColors = colors.length;
    v = v.replace(colorRegex, colorToken);
    values.push(...colors.map(color.parse));
  }
  const numbers = v.match(floatRegex);
  if (numbers) {
    v = v.replace(floatRegex, numberToken);
    values.push(...numbers.map(number.parse));
  }
  return { values, numColors, tokenised: v };
}
function parse(v) {
  return analyse(v).values;
}
function createTransformer(v) {
  const { values, numColors, tokenised } = analyse(v);
  const numValues = values.length;
  return (v2) => {
    let output = tokenised;
    for (let i = 0; i < numValues; i++) {
      output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? color.transform(v2[i]) : sanitize(v2[i]));
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

// ../../library/src/render/utils/transformCustomValues.ts
var isCustomValue = (v) => {
  return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var isColorProp = (key7) => key7 === "background" || key7.endsWith("color") || key7.endsWith("Color");
var resolveSingleCustomValue = (key7, v) => {
  if (v && typeof v === "object") {
    invariant(
      isCustomValue(v),
      "Motion styles must be numbers, strings, or an instance with a `toValue` and `mix` methods."
    );
    return v.toValue();
  } else if (isColorProp(key7) && typeof v === "string" && Color.isColor(v)) {
    return Color(v).toValue();
  }
  return v;
};
var resolveCustomValues = (key7, v) => {
  if (Array.isArray(v)) {
    const numValues = v.length;
    const resolved = [];
    for (let i = 0; i < numValues; i++) {
      resolved.push(resolveSingleCustomValue(key7, v[i]));
    }
    return resolved;
  } else {
    return resolveSingleCustomValue(key7, v);
  }
};
var customValueHandlers = {
  size: {
    set: (inputValues, outputValues, value) => {
      if (inputValues.height === void 0) {
        outputValues.height = value;
      }
      if (inputValues.width === void 0) {
        outputValues.width = value;
      }
    },
    type: px
  },
  radius: {
    set: (inputValues, outputValues, value) => {
      outputValues.borderRadius = value;
    },
    type: px
  },
  shadow: {
    set: (inputValues, outputValues, value) => {
      outputValues.boxShadow = value;
    },
    type: complex
  }
};
var transformValues = (values) => {
  const transformedValues = {};
  for (const key7 in values) {
    const resolved = resolveCustomValues(key7, values[key7]);
    const valueHandler = customValueHandlers[key7];
    if (valueHandler) {
      const isDefaultType = valueHandler.type && typeof values[key7] === "number";
      const value = isDefaultType ? valueHandler.type.transform(values[key7]) : values[key7];
      valueHandler.set(values, transformedValues, value);
    } else {
      transformedValues[key7] = resolved;
    }
  }
  return transformedValues;
};

// ../../library/src/render/utils/transformTemplate.ts
function transformTemplate(center) {
  return (_, generated) => {
    if (center === true) {
      return `translate(-50%, -50%) ${generated}`;
    } else {
      if (center === "x") {
        return `translateX(-50%) ${generated}`;
      } else if (center === "y") {
        return `translateY(-50%) ${generated}`;
      }
    }
    return generated || "none";
  };
}

// ../../library/src/render/utils/useLayoutId.ts
import { useContext as useContext3, useMemo as useMemo2 } from "react";
function useLayoutId(props, { specificLayoutId, postfix } = {}) {
  const { name, layoutIdKey, duplicatedFrom, __fromCodeComponentNode = false, drag } = props;
  const { getLayoutId, enabled } = useContext3(LayoutIdContext);
  return useMemo2(() => {
    if (!enabled)
      return props.layoutId;
    const existingLayoutId = specificLayoutId || props.layoutId;
    if (!existingLayoutId) {
      if (drag || !layoutIdKey || __fromCodeComponentNode)
        return void 0;
    }
    const layoutIdCandidate = existingLayoutId || getLayoutId({ id: layoutIdKey, name, duplicatedFrom });
    if (!layoutIdCandidate)
      return void 0;
    return postfix ? `${layoutIdCandidate}-${postfix}` : layoutIdCandidate;
  }, [enabled]);
}

// ../../library/src/render/utils/useMeasureLayout.ts
import { useContext as useContext4 } from "react";

// ../../library/src/render/presentation/ComponentContainerContext.tsx
import React23 from "react";
var ComponentContainerContext = React23.createContext(false);

// ../../../node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js
var resizeObservers = [];

// ../../../node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js
var hasActiveObservations = function() {
  return resizeObservers.some(function(ro) {
    return ro.activeTargets.length > 0;
  });
};

// ../../../node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js
var hasSkippedObservations = function() {
  return resizeObservers.some(function(ro) {
    return ro.skippedTargets.length > 0;
  });
};

// ../../../node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js
var msg = "ResizeObserver loop completed with undelivered notifications.";
var deliverResizeLoopError = function() {
  var event;
  if (typeof ErrorEvent === "function") {
    event = new ErrorEvent("error", {
      message: msg
    });
  } else {
    event = document.createEvent("Event");
    event.initEvent("error", false, false);
    event.message = msg;
  }
  window.dispatchEvent(event);
};

// ../../../node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js
var ResizeObserverBoxOptions;
(function(ResizeObserverBoxOptions2) {
  ResizeObserverBoxOptions2["BORDER_BOX"] = "border-box";
  ResizeObserverBoxOptions2["CONTENT_BOX"] = "content-box";
  ResizeObserverBoxOptions2["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));

// ../../../node_modules/@juggle/resize-observer/lib/utils/freeze.js
var freeze = function(obj) {
  return Object.freeze(obj);
};

// ../../../node_modules/@juggle/resize-observer/lib/ResizeObserverSize.js
var ResizeObserverSize = function() {
  function ResizeObserverSize2(inlineSize, blockSize) {
    this.inlineSize = inlineSize;
    this.blockSize = blockSize;
    freeze(this);
  }
  return ResizeObserverSize2;
}();

// ../../../node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js
var DOMRectReadOnly = function() {
  function DOMRectReadOnly2(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.top = this.y;
    this.left = this.x;
    this.bottom = this.top + this.height;
    this.right = this.left + this.width;
    return freeze(this);
  }
  DOMRectReadOnly2.prototype.toJSON = function() {
    var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
    return { x, y, top, right, bottom, left, width, height };
  };
  DOMRectReadOnly2.fromRect = function(rectangle) {
    return new DOMRectReadOnly2(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  };
  return DOMRectReadOnly2;
}();

// ../../../node_modules/@juggle/resize-observer/lib/utils/element.js
var isSVG = function(target) {
  return target instanceof SVGElement && "getBBox" in target;
};
var isHidden = function(target) {
  if (isSVG(target)) {
    var _a = target.getBBox(), width = _a.width, height = _a.height;
    return !width && !height;
  }
  var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
  return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function(obj) {
  var _a, _b;
  if (obj instanceof Element) {
    return true;
  }
  var scope = (_b = (_a = obj) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView;
  return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function(target) {
  switch (target.tagName) {
    case "INPUT":
      if (target.type !== "image") {
        break;
      }
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return true;
  }
  return false;
};

// ../../../node_modules/@juggle/resize-observer/lib/utils/global.js
var global = typeof window !== "undefined" ? window : {};

// ../../../node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js
var cache2 = /* @__PURE__ */ new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = /msie|trident/i.test(global.navigator && global.navigator.userAgent);
var parseDimension = function(pixel) {
  return parseFloat(pixel || "0");
};
var size = function(inlineSize, blockSize, switchSizes) {
  if (inlineSize === void 0) {
    inlineSize = 0;
  }
  if (blockSize === void 0) {
    blockSize = 0;
  }
  if (switchSizes === void 0) {
    switchSizes = false;
  }
  return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var zeroBoxes = freeze({
  devicePixelContentBoxSize: size(),
  borderBoxSize: size(),
  contentBoxSize: size(),
  contentRect: new DOMRectReadOnly(0, 0, 0, 0)
});
var calculateBoxSizes = function(target, forceRecalculation) {
  if (forceRecalculation === void 0) {
    forceRecalculation = false;
  }
  if (cache2.has(target) && !forceRecalculation) {
    return cache2.get(target);
  }
  if (isHidden(target)) {
    cache2.set(target, zeroBoxes);
    return zeroBoxes;
  }
  var cs = getComputedStyle(target);
  var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
  var removePadding = !IE && cs.boxSizing === "border-box";
  var switchSizes = verticalRegexp.test(cs.writingMode || "");
  var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || "");
  var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || "");
  var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
  var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
  var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
  var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
  var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
  var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
  var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
  var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
  var horizontalPadding = paddingLeft + paddingRight;
  var verticalPadding = paddingTop + paddingBottom;
  var horizontalBorderArea = borderLeft + borderRight;
  var verticalBorderArea = borderTop + borderBottom;
  var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
  var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
  var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
  var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
  var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
  var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
  var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
  var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
  var boxes = freeze({
    devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
    borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
    contentBoxSize: size(contentWidth, contentHeight, switchSizes),
    contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
  });
  cache2.set(target, boxes);
  return boxes;
};
var calculateBoxSize = function(target, observedBox, forceRecalculation) {
  var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
  switch (observedBox) {
    case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
      return devicePixelContentBoxSize;
    case ResizeObserverBoxOptions.BORDER_BOX:
      return borderBoxSize;
    default:
      return contentBoxSize;
  }
};

// ../../../node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js
var ResizeObserverEntry = function() {
  function ResizeObserverEntry2(target) {
    var boxes = calculateBoxSizes(target);
    this.target = target;
    this.contentRect = boxes.contentRect;
    this.borderBoxSize = freeze([boxes.borderBoxSize]);
    this.contentBoxSize = freeze([boxes.contentBoxSize]);
    this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
  }
  return ResizeObserverEntry2;
}();

// ../../../node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js
var calculateDepthForNode = function(node) {
  if (isHidden(node)) {
    return Infinity;
  }
  var depth = 0;
  var parent = node.parentNode;
  while (parent) {
    depth += 1;
    parent = parent.parentNode;
  }
  return depth;
};

// ../../../node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js
var broadcastActiveObservations = function() {
  var shallowestDepth = Infinity;
  var callbacks2 = [];
  resizeObservers.forEach(function processObserver(ro) {
    if (ro.activeTargets.length === 0) {
      return;
    }
    var entries = [];
    ro.activeTargets.forEach(function processTarget(ot) {
      var entry = new ResizeObserverEntry(ot.target);
      var targetDepth = calculateDepthForNode(ot.target);
      entries.push(entry);
      ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
      if (targetDepth < shallowestDepth) {
        shallowestDepth = targetDepth;
      }
    });
    callbacks2.push(function resizeObserverCallback() {
      ro.callback.call(ro.observer, entries, ro.observer);
    });
    ro.activeTargets.splice(0, ro.activeTargets.length);
  });
  for (var _i = 0, callbacks_1 = callbacks2; _i < callbacks_1.length; _i++) {
    var callback = callbacks_1[_i];
    callback();
  }
  return shallowestDepth;
};

// ../../../node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js
var gatherActiveObservationsAtDepth = function(depth) {
  resizeObservers.forEach(function processObserver(ro) {
    ro.activeTargets.splice(0, ro.activeTargets.length);
    ro.skippedTargets.splice(0, ro.skippedTargets.length);
    ro.observationTargets.forEach(function processTarget(ot) {
      if (ot.isActive()) {
        if (calculateDepthForNode(ot.target) > depth) {
          ro.activeTargets.push(ot);
        } else {
          ro.skippedTargets.push(ot);
        }
      }
    });
  });
};

// ../../../node_modules/@juggle/resize-observer/lib/utils/process.js
var process3 = function() {
  var depth = 0;
  gatherActiveObservationsAtDepth(depth);
  while (hasActiveObservations()) {
    depth = broadcastActiveObservations();
    gatherActiveObservationsAtDepth(depth);
  }
  if (hasSkippedObservations()) {
    deliverResizeLoopError();
  }
  return depth > 0;
};

// ../../../node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js
var trigger;
var callbacks = [];
var notify = function() {
  return callbacks.splice(0).forEach(function(cb2) {
    return cb2();
  });
};
var queueMicroTask = function(callback) {
  if (!trigger) {
    var toggle_1 = 0;
    var el_1 = document.createTextNode("");
    var config = { characterData: true };
    new MutationObserver(function() {
      return notify();
    }).observe(el_1, config);
    trigger = function() {
      el_1.textContent = "" + (toggle_1 ? toggle_1-- : toggle_1++);
    };
  }
  callbacks.push(callback);
  trigger();
};

// ../../../node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js
var queueResizeObserver = function(cb2) {
  queueMicroTask(function ResizeObserver2() {
    requestAnimationFrame(cb2);
  });
};

// ../../../node_modules/@juggle/resize-observer/lib/utils/scheduler.js
var watching = 0;
var isWatching = function() {
  return !!watching;
};
var CATCH_PERIOD = 250;
var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
var events = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
];
var time = function(timeout) {
  if (timeout === void 0) {
    timeout = 0;
  }
  return Date.now() + timeout;
};
var scheduled = false;
var Scheduler = function() {
  function Scheduler2() {
    var _this = this;
    this.stopped = true;
    this.listener = function() {
      return _this.schedule();
    };
  }
  Scheduler2.prototype.run = function(timeout) {
    var _this = this;
    if (timeout === void 0) {
      timeout = CATCH_PERIOD;
    }
    if (scheduled) {
      return;
    }
    scheduled = true;
    var until = time(timeout);
    queueResizeObserver(function() {
      var elementsHaveResized = false;
      try {
        elementsHaveResized = process3();
      } finally {
        scheduled = false;
        timeout = until - time();
        if (!isWatching()) {
          return;
        }
        if (elementsHaveResized) {
          _this.run(1e3);
        } else if (timeout > 0) {
          _this.run(timeout);
        } else {
          _this.start();
        }
      }
    });
  };
  Scheduler2.prototype.schedule = function() {
    this.stop();
    this.run();
  };
  Scheduler2.prototype.observe = function() {
    var _this = this;
    var cb2 = function() {
      return _this.observer && _this.observer.observe(document.body, observerConfig);
    };
    document.body ? cb2() : global.addEventListener("DOMContentLoaded", cb2);
  };
  Scheduler2.prototype.start = function() {
    var _this = this;
    if (this.stopped) {
      this.stopped = false;
      this.observer = new MutationObserver(this.listener);
      this.observe();
      events.forEach(function(name) {
        return global.addEventListener(name, _this.listener, true);
      });
    }
  };
  Scheduler2.prototype.stop = function() {
    var _this = this;
    if (!this.stopped) {
      this.observer && this.observer.disconnect();
      events.forEach(function(name) {
        return global.removeEventListener(name, _this.listener, true);
      });
      this.stopped = true;
    }
  };
  return Scheduler2;
}();
var scheduler = new Scheduler();
var updateCount = function(n) {
  !watching && n > 0 && scheduler.start();
  watching += n;
  !watching && scheduler.stop();
};

// ../../../node_modules/@juggle/resize-observer/lib/ResizeObservation.js
var skipNotifyOnElement = function(target) {
  return !isSVG(target) && !isReplacedElement(target) && getComputedStyle(target).display === "inline";
};
var ResizeObservation = function() {
  function ResizeObservation2(target, observedBox) {
    this.target = target;
    this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
    this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  ResizeObservation2.prototype.isActive = function() {
    var size2 = calculateBoxSize(this.target, this.observedBox, true);
    if (skipNotifyOnElement(this.target)) {
      this.lastReportedSize = size2;
    }
    if (this.lastReportedSize.inlineSize !== size2.inlineSize || this.lastReportedSize.blockSize !== size2.blockSize) {
      return true;
    }
    return false;
  };
  return ResizeObservation2;
}();

// ../../../node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js
var ResizeObserverDetail = function() {
  function ResizeObserverDetail2(resizeObserver, callback) {
    this.activeTargets = [];
    this.skippedTargets = [];
    this.observationTargets = [];
    this.observer = resizeObserver;
    this.callback = callback;
  }
  return ResizeObserverDetail2;
}();

// ../../../node_modules/@juggle/resize-observer/lib/ResizeObserverController.js
var observerMap = /* @__PURE__ */ new WeakMap();
var getObservationIndex = function(observationTargets, target) {
  for (var i = 0; i < observationTargets.length; i += 1) {
    if (observationTargets[i].target === target) {
      return i;
    }
  }
  return -1;
};
var ResizeObserverController = function() {
  function ResizeObserverController2() {
  }
  ResizeObserverController2.connect = function(resizeObserver, callback) {
    var detail = new ResizeObserverDetail(resizeObserver, callback);
    observerMap.set(resizeObserver, detail);
  };
  ResizeObserverController2.observe = function(resizeObserver, target, options) {
    var detail = observerMap.get(resizeObserver);
    var firstObservation = detail.observationTargets.length === 0;
    if (getObservationIndex(detail.observationTargets, target) < 0) {
      firstObservation && resizeObservers.push(detail);
      detail.observationTargets.push(new ResizeObservation(target, options && options.box));
      updateCount(1);
      scheduler.schedule();
    }
  };
  ResizeObserverController2.unobserve = function(resizeObserver, target) {
    var detail = observerMap.get(resizeObserver);
    var index = getObservationIndex(detail.observationTargets, target);
    var lastObservation = detail.observationTargets.length === 1;
    if (index >= 0) {
      lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
      detail.observationTargets.splice(index, 1);
      updateCount(-1);
    }
  };
  ResizeObserverController2.disconnect = function(resizeObserver) {
    var _this = this;
    var detail = observerMap.get(resizeObserver);
    detail.observationTargets.slice().forEach(function(ot) {
      return _this.unobserve(resizeObserver, ot.target);
    });
    detail.activeTargets.splice(0, detail.activeTargets.length);
  };
  return ResizeObserverController2;
}();

// ../../../node_modules/@juggle/resize-observer/lib/ResizeObserver.js
var ResizeObserver = function() {
  function ResizeObserver2(callback) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (typeof callback !== "function") {
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    }
    ResizeObserverController.connect(this, callback);
  }
  ResizeObserver2.prototype.observe = function(target, options) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (!isElement(target)) {
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    }
    ResizeObserverController.observe(this, target, options);
  };
  ResizeObserver2.prototype.unobserve = function(target) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (!isElement(target)) {
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    }
    ResizeObserverController.unobserve(this, target);
  };
  ResizeObserver2.prototype.disconnect = function() {
    ResizeObserverController.disconnect(this);
  };
  ResizeObserver2.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  };
  return ResizeObserver2;
}();

// ../../library/src/components/hoc/withMeasuredSize.tsx
import React25, { useEffect as useEffect2 } from "react";

// ../../library/src/modules/useForceUpdate.ts
import React24 from "react";
function useForceUpdate3() {
  const [_, setForcedRenderCount] = React24.useState(0);
  return React24.useCallback(() => setForcedRenderCount((v) => v + 1), []);
}

// ../../library/src/components/hoc/withMeasuredSize.tsx
var DEFAULT_SIZE = 200;
var _sharedResizeObserver, _callbacks;
var SharedObserver = class {
  constructor() {
    __privateAdd(this, _sharedResizeObserver, void 0);
    __privateAdd(this, _callbacks, /* @__PURE__ */ new WeakMap());
    var _a;
    const ResizeObserver2 = (_a = safeWindow.ResizeObserver) != null ? _a : ResizeObserver;
    __privateSet(this, _sharedResizeObserver, new ResizeObserver2(this.updateResizedElements.bind(this)));
  }
  updateResizedElements(entries) {
    for (const entry of entries) {
      const callbackForElement = __privateGet(this, _callbacks).get(entry.target);
      if (callbackForElement)
        callbackForElement(entry.contentRect);
    }
  }
  observeElementWithCallback(element, callback) {
    __privateGet(this, _sharedResizeObserver).observe(element);
    __privateGet(this, _callbacks).set(element, callback);
  }
  unobserve(element) {
    __privateGet(this, _sharedResizeObserver).unobserve(element);
    __privateGet(this, _callbacks).delete(element);
  }
};
_sharedResizeObserver = new WeakMap();
_callbacks = new WeakMap();
var sharedResizeObserver = isBrowser2() ? new SharedObserver() : void 0;
function useRerenderOnResize(ref) {
  const update = useForceUpdate3();
  useEffect2(() => {
    const element = ref == null ? void 0 : ref.current;
    if (!element)
      return;
    sharedResizeObserver == null ? void 0 : sharedResizeObserver.observeElementWithCallback(ref.current, update);
    return () => {
      sharedResizeObserver == null ? void 0 : sharedResizeObserver.unobserve(element);
    };
  }, [ref, update]);
}
function useMeasuredSize(ref) {
  const forceUpdate = useForceUpdate3();
  const size2 = React25.useRef(null);
  function updateSize(newSize) {
    if (newSize.width === 0 && newSize.height === 0)
      return;
    if (!size2.current || newSize.height !== size2.current.height || newSize.width !== size2.current.width) {
      size2.current = { width: newSize.width, height: newSize.height };
      forceUpdate();
    }
  }
  useIsomorphicLayoutEffect2(() => {
    if (!ref.current)
      return;
    const { offsetWidth, offsetHeight } = ref.current;
    updateSize({
      width: offsetWidth,
      height: offsetHeight
    });
    sharedResizeObserver.observeElementWithCallback(ref.current, updateSize);
    return () => {
      if (!ref.current)
        return;
      sharedResizeObserver.unobserve(ref.current);
    };
  }, []);
  return size2.current;
}
var SIZE_COMPATIBILITY_WRAPPER_ATTRIBUTE = "data-framer-size-compatibility-wrapper";
var withMeasuredSize = (Component15) => (props) => {
  var _a, _b, _c, _d;
  const ref = React25.useRef(null);
  const size2 = useMeasuredSize(ref);
  const dataProps = { [SIZE_COMPATIBILITY_WRAPPER_ATTRIBUTE]: true };
  const shouldRender = Boolean(size2);
  const fallbackWidth = (_a = props.width) != null ? _a : DEFAULT_SIZE;
  const fallbackHeight = (_b = props.height) != null ? _b : DEFAULT_SIZE;
  return /* @__PURE__ */ React25.createElement("div", { style: { width: "100%", height: "100%", pointerEvents: "none" }, ref, ...dataProps }, shouldRender && /* @__PURE__ */ React25.createElement(
    Component15,
    {
      ...props,
      width: (_c = size2 == null ? void 0 : size2.width) != null ? _c : fallbackWidth,
      height: (_d = size2 == null ? void 0 : size2.height) != null ? _d : fallbackHeight
    }
  ));
};

// ../../library/src/render/utils/getMeasurableCodeComponentChildren.ts
function getMeasurableCodeComponentChildren(element) {
  const childrenCollection = element.firstElementChild && element.firstElementChild.hasAttribute(SIZE_COMPATIBILITY_WRAPPER_ATTRIBUTE) ? element.firstElementChild.children : element.children;
  return [...childrenCollection].filter(isMeasurable).map(unwrapInlinedDisplayContents);
}
function isMeasurable(element) {
  if (element instanceof HTMLBaseElement || element instanceof HTMLHeadElement || element instanceof HTMLLinkElement || element instanceof HTMLMetaElement || element instanceof HTMLScriptElement || element instanceof HTMLStyleElement || element instanceof HTMLTitleElement) {
    return false;
  }
  return element instanceof HTMLElement || element instanceof SVGElement;
}
function unwrapInlinedDisplayContents(element) {
  if (!(element instanceof HTMLElement))
    return element;
  if (element.children.length === 0)
    return element;
  if (element.style.display !== "contents")
    return element;
  const firstMeasurableChild = [...element.children].find(isMeasurable);
  if (firstMeasurableChild) {
    return unwrapInlinedDisplayContents(firstMeasurableChild);
  }
  return element;
}

// ../../library/src/render/utils/useMeasureLayout.ts
function useMeasureLayout(props, ref, getChildren = () => [], options = {}) {
  const { id, visible, _needsMeasure } = props;
  const { skipHook = false } = options;
  const inCodeComponent = Boolean(useContext4(ComponentContainerContext));
  const onCanvas = RenderTarget.current() === "CANVAS" /* canvas */;
  useIsomorphicLayoutEffect2(() => {
    if (!onCanvas || inCodeComponent || skipHook) {
      return;
    }
    if (!(ref.current && id && visible && _needsMeasure)) {
      return;
    }
    runtime.queueMeasureRequest(nodeIdFromString(id), ref.current, getChildren(ref.current));
  });
}
function measureClosestComponentContainer(element) {
  const container = element.closest("[data-framer-component-container]");
  if (!container)
    return;
  runtime.queueMeasureRequest(
    nodeIdFromString(container.id),
    container,
    getMeasurableCodeComponentChildren(container)
  );
}

// ../../library/src/render/presentation/Layer.tsx
import { Component as Component3 } from "react";

// ../../library/src/render/utils/isEqual.ts
function hasProp(o, prop) {
  return Object.prototype.hasOwnProperty.call(o, prop);
}
function withEquals(o) {
  if (!hasProp(o, "equals"))
    return false;
  return typeof o.equals === "function";
}
function equal(a, b, deep) {
  const isArray2 = Array.isArray;
  const keyList = Object.keys;
  if (a === b)
    return true;
  if (a && b && typeof a === "object" && typeof b === "object") {
    const arrA = isArray2(a);
    const arrB = isArray2(b);
    let i, length;
    if (arrA && arrB) {
      length = a.length;
      if (length !== b.length)
        return false;
      for (i = length; i-- !== 0; ) {
        if (!deep && a[i] !== b[i])
          return false;
        if (deep && !equal(a[i], b[i], true))
          return false;
      }
      return true;
    }
    if (arrA !== arrB)
      return false;
    const dateA = a instanceof Date;
    const dateB = b instanceof Date;
    if (dateA !== dateB)
      return false;
    if (dateA && dateB)
      return a.getTime() === b.getTime();
    const regexpA = a instanceof RegExp;
    const regexpB = b instanceof RegExp;
    if (regexpA !== regexpB)
      return false;
    if (regexpA && regexpB)
      return a.toString() === b.toString();
    if (a instanceof Set && b instanceof Set) {
      if (a.size !== b.size)
        return false;
      for (const aItem of a)
        if (!b.has(aItem))
          return false;
      return true;
    }
    if (withEquals(a) && withEquals(b)) {
      return a.equals(b);
    }
    const keys3 = keyList(a);
    length = keys3.length;
    if (length !== keyList(b).length)
      return false;
    for (const key7 of keys3) {
      if (!hasProp(b, key7))
        return false;
      if (key7 === "_owner" && hasProp(a, "$$typeof") && a.$$typeof) {
        continue;
      }
      if (!deep && a[key7] !== b[key7])
        return false;
      if (deep && !equal(a[key7], b[key7], true))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
}
function isEqual(a, b, deep = true) {
  try {
    return equal(a, b, deep);
  } catch (error) {
    if (error instanceof Error && error.message.match(/stack|recursion/i)) {
      console.warn("Warning: isEqual does not handle circular references.", error.name, error.message);
      return false;
    }
    throw error;
  }
}

// ../../library/src/render/utils/setLayerBacked.ts
var smallValue = "0.000001px";
var translateZ = ` translateZ(${smallValue})`;
var useTranslateZHack = isFramerX() || isSafari() || isTest();
function forceLayerBackingWithMotionStyle(motionStyle) {
  motionStyle.willChange = "transform";
  const onCanvas = RenderTarget.current() === "CANVAS" /* canvas */;
  if (useTranslateZHack && onCanvas) {
    motionStyle.translateZ = smallValue;
  }
}
function forceLayerBackingWithCSSProperties(cssProperties) {
  cssProperties.willChange = "transform";
  setTranslateZHack(cssProperties, true);
}
function setTranslateZHack(style, enabled) {
  const onCanvas = RenderTarget.current() === "CANVAS" /* canvas */;
  if (!useTranslateZHack || !onCanvas) {
    return;
  }
  const transform2 = style.transform || "";
  if (enabled) {
    const hasTranslateZ = transform2.includes(translateZ);
    if (!hasTranslateZ) {
      style.transform = transform2 + translateZ;
    }
  } else {
    style.transform = transform2.replace(translateZ, "");
  }
}

// ../../library/src/render/utils/useWebkitFixes.ts
import { useEffect as useEffect3, useRef as useRef3 } from "react";
function resetSetStyle(element, key7, toValue, microtask = true) {
  if (!element) {
    return;
  }
  const value = toValue ? toValue : element.style[key7];
  const reset = () => {
    element.style[key7] = value;
  };
  element.style[key7] = null;
  if (microtask) {
    void Promise.resolve().then(reset);
  } else {
    setTimeout(reset, 0);
  }
}

// ../../library/src/render/presentation/Layer.tsx
var Layer = class extends Component3 {
  constructor() {
    super(...arguments);
    this.layerElement = null;
    this.setLayerElement = (element) => {
      this.layerElement = element;
    };
  }
  static applyWillChange(props, style, usingMotionStyle) {
    if (props.willChangeTransform) {
      if (usingMotionStyle) {
        forceLayerBackingWithMotionStyle(style);
      } else {
        forceLayerBackingWithCSSProperties(style);
      }
    }
  }
  /** @internal */
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps._needsMeasure || this.state !== nextState || !isEqual(this.props, nextProps);
  }
  /** @internal */
  componentDidUpdate(prevProps) {
    if (this.props["clip"] && this.props["radius"] === 0 && prevProps["radius"] !== 0) {
      resetSetStyle(this.layerElement, "overflow", "hidden", false);
    }
  }
};
Layer.defaultProps = {};

// ../../library/src/utils/memoize.ts
function manageCache(cache3, maxEntries) {
  const size2 = cache3.size;
  if (size2 < maxEntries)
    return;
  let i = Math.round(Math.random());
  for (const key7 of cache3.keys()) {
    if ((++i & 1) === 1)
      continue;
    cache3.delete(key7);
  }
}
function memoize2(maxEntries, cache3, key7, create) {
  const r = cache3.get(key7);
  if (r)
    return r;
  manageCache(cache3, maxEntries);
  const g = create(key7);
  cache3.set(key7, g);
  return g;
}

// ../../library/src/utils/string.ts
var hash = (value) => {
  let hasher = 0, i, chr;
  if (value.length === 0)
    return hasher;
  for (i = 0; i < value.length; i++) {
    chr = value.charCodeAt(i);
    hasher = (hasher << 5) - hasher + chr;
    hasher |= 0;
  }
  return hasher;
};

// ../../library/src/render/types/Color/ConvertColor.ts
var ConvertColor = {
  hueRotate: (color2, angle) => {
    return Color.toHslString(Color.hueRotate(Color(color2), angle));
  },
  setAlpha: (color2, alpha2) => {
    return Color.toRgbString(Color.alpha(Color(color2), alpha2));
  },
  getAlpha: (color2) => {
    const obj = stringToObject(color2);
    return obj ? obj.a : 1;
  },
  multiplyAlpha: (color2, alpha2) => {
    return Color.toRgbString(Color.multiplyAlpha(Color(color2), alpha2));
  },
  toHex: (color2) => {
    return Color.toHexString(Color(color2)).toUpperCase();
  },
  toRgb: (color2) => {
    return Color.toRgb(Color(color2));
  },
  toRgbString: (color2) => {
    return Color.toRgbString(Color(color2));
  },
  toHSV: (color2) => {
    return Color.toHsv(Color(color2));
  },
  toHSL: (color2) => {
    return Color.toHsl(Color(color2));
  },
  toHslString: (color2) => {
    return Color.toHslString(Color(color2));
  },
  toHsvString: (color2) => {
    return Color.toHsvString(Color(color2));
  },
  hsvToHSLString: (hsv) => {
    return Color.toHslString(Color(hsvToStr(hsv.h, hsv.s, hsv.v, hsv.a)));
  },
  hsvToString: (hsv) => {
    return hsvToStr(hsv.h, hsv.s, hsv.v);
  },
  rgbaToString: (color2) => {
    return Color.toRgbString(Color(color2));
  },
  hslToString: (hsl) => {
    return Color.toRgbString(Color(hsl));
  },
  toColorPickerSquare: (h) => {
    return Color.toRgbString(Color({ h, s: 1, l: 0.5, a: 1 }));
  },
  isValid: (color2) => {
    return Color(color2).isValid !== false;
  },
  equals: (a, b) => {
    if (typeof a === "string") {
      a = Color(a);
    }
    if (typeof b === "string") {
      b = Color(b);
    }
    return Color.equal(a, b);
  },
  toHexOrRgbaString: (input) => {
    const color2 = Color(input);
    return color2.a !== 1 ? Color.toRgbString(color2) : Color.toHexString(color2);
  }
};

// ../../library/src/render/utils/gradientColorStops.ts
var CSSVariableRegExp = /var\(.+\)/;
var colorCache = /* @__PURE__ */ new Map();
function cachedMultiplyAlpha(s, a) {
  const key7 = [s, a];
  if (CSSVariableRegExp.test(s)) {
    return s;
  }
  return memoize2(1e3, colorCache, key7, () => ConvertColor.multiplyAlpha(s, a));
}
function gradientColorStops(gradient, alpha2 = 1) {
  let stops;
  if ("stops" in gradient) {
    stops = gradient.stops;
  } else {
    stops = [
      { value: gradient.start, position: 0 },
      { value: gradient.end, position: 1 }
    ];
  }
  if (alpha2 === 1) {
    return stops;
  } else {
    return stops.map((stop) => ({ ...stop, value: cachedMultiplyAlpha(stop.value, alpha2) }));
  }
}
function gradientColorStopsHash(gradient, alpha2) {
  let result = 0;
  gradientColorStops(gradient, alpha2).forEach((stop) => {
    result ^= hash(stop.value) ^ stop.position;
  });
  return result;
}

// ../../library/src/render/types/MultiStopGradient.ts
var multiStopGradientKeys = ["stops"];
function isMultiStopGradient(value) {
  return value && multiStopGradientKeys.every((key7) => key7 in value);
}

// ../../library/src/render/types/SimpleGradient.ts
var simpleGradientKeys = ["start", "end"];
function isSimpleGradient(value) {
  return value && simpleGradientKeys.every((key7) => key7 in value);
}

// ../../library/src/render/types/LinearGradient.ts
var linearGradientKeys = ["angle", "alpha"];
var LinearGradient = {
  /**
   * @param value -
   */
  isLinearGradient: (value) => {
    return value && linearGradientKeys.every((key7) => key7 in value) && (isSimpleGradient(value) || isMultiStopGradient(value));
  },
  /** @internal */
  hash: (linearGradient) => {
    return linearGradient.angle ^ gradientColorStopsHash(linearGradient, linearGradient.alpha);
  },
  /** @internal */
  toCSS: (linearGradient, overrideAngle) => {
    const stops = gradientColorStops(linearGradient, linearGradient.alpha);
    const angle = overrideAngle !== void 0 ? overrideAngle : linearGradient.angle;
    const cssStops = stops.map((stop) => `${stop.value} ${stop.position * 100}%`);
    return `linear-gradient(${angle}deg, ${cssStops.join(", ")})`;
  }
};

// ../../library/src/render/types/RadialGradient.ts
var radialGradientKeys = [
  "widthFactor",
  "heightFactor",
  "centerAnchorX",
  "centerAnchorY",
  "alpha"
];
var RadialGradient = {
  /**
   * @param value -
   * @public
   */
  isRadialGradient: (value) => {
    return value && radialGradientKeys.every((key7) => key7 in value) && (isSimpleGradient(value) || isMultiStopGradient(value));
  },
  /** @internal */
  hash: (radialGradient) => {
    return radialGradient.centerAnchorX ^ radialGradient.centerAnchorY ^ radialGradient.widthFactor ^ radialGradient.heightFactor ^ gradientColorStopsHash(radialGradient, radialGradient.alpha);
  },
  /** @internal */
  toCSS: (radialGradient) => {
    const { alpha: alpha2, widthFactor, heightFactor, centerAnchorX, centerAnchorY } = radialGradient;
    const stops = gradientColorStops(radialGradient, alpha2);
    const cssStops = stops.map((stop) => `${stop.value} ${stop.position * 100}%`);
    return `radial-gradient(${widthFactor * 100}% ${heightFactor * 100}% at ${centerAnchorX * 100}% ${centerAnchorY * 100}%, ${cssStops.join(", ")})`;
  }
};

// ../../library/src/render/traits/Background.ts
function collectBackgroundFromProps({ background, backgroundColor }, style) {
  if (backgroundColor) {
    if (typeof backgroundColor === "string" || isMotionValue2(backgroundColor)) {
      style.backgroundColor = backgroundColor;
    } else if (Color.isColorObject(background)) {
      style.backgroundColor = background.initialValue || Color.toRgbString(background);
    }
  } else if (background) {
    background = Animatable.get(background, null);
    if (typeof background === "string" || isMotionValue2(background)) {
      style.background = background;
    } else if (LinearGradient.isLinearGradient(background)) {
      style.background = LinearGradient.toCSS(background);
    } else if (RadialGradient.isRadialGradient(background)) {
      style.background = RadialGradient.toCSS(background);
    } else if (Color.isColorObject(background)) {
      style.backgroundColor = background.initialValue || Color.toRgbString(background);
    }
  }
}

// ../../library/src/render/utils/extractStyleFromProps.ts
function extractStyleFromProps(props, name, styleRef, into) {
  if (into === void 0) {
    into = name;
  }
  if (props[name] !== void 0) {
    styleRef[into] = props[name];
    return;
  }
}

// ../../library/src/render/presentation/Frame/getStyleForFrameProps.ts
function hasLeftAndRight(style) {
  if (!style)
    return false;
  return style.left !== void 0 && style.right !== void 0;
}
function hasTopAndBottom(style) {
  if (!style)
    return false;
  return style.top !== void 0 && style.bottom !== void 0;
}
function getStyleForFrameProps(props) {
  if (!props) {
    return {};
  }
  const style = {};
  if (props.preserve3d === true) {
    style.transformStyle = "preserve-3d";
  } else if (props.preserve3d === false) {
    style.transformStyle = "flat";
  }
  if (props.backfaceVisible === true) {
    style.backfaceVisibility = "visible";
  } else if (props.backfaceVisible === false) {
    style.backfaceVisibility = "hidden";
  }
  if (style.backfaceVisibility) {
    style.WebkitBackfaceVisibility = style.backfaceVisibility;
  }
  if (props.perspective !== void 0) {
    style.perspective = style.WebkitPerspective = props.perspective;
  }
  if (!props.__fromCanvasComponent) {
    if (props.center === true) {
      style.left = "50%";
      style.top = "50%";
    } else {
      if (props.center === "x") {
        style.left = "50%";
      } else if (props.center === "y") {
        style.top = "50%";
      }
    }
  }
  extractStyleFromProps(props, "size", style);
  extractStyleFromProps(props, "width", style);
  extractStyleFromProps(props, "height", style);
  extractStyleFromProps(props, "minWidth", style);
  extractStyleFromProps(props, "minHeight", style);
  extractStyleFromProps(props, "top", style);
  extractStyleFromProps(props, "right", style);
  extractStyleFromProps(props, "bottom", style);
  extractStyleFromProps(props, "left", style);
  extractStyleFromProps(props, "position", style);
  extractStyleFromProps(props, "overflow", style);
  extractStyleFromProps(props, "opacity", style);
  if (!props._border || !props._border.borderWidth)
    extractStyleFromProps(props, "border", style);
  extractStyleFromProps(props, "borderRadius", style);
  extractStyleFromProps(props, "radius", style, "borderRadius");
  extractStyleFromProps(props, "color", style);
  extractStyleFromProps(props, "shadow", style, "boxShadow");
  extractStyleFromProps(props, "x", style);
  extractStyleFromProps(props, "y", style);
  extractStyleFromProps(props, "z", style);
  extractStyleFromProps(props, "rotate", style);
  extractStyleFromProps(props, "rotateX", style);
  extractStyleFromProps(props, "rotateY", style);
  extractStyleFromProps(props, "rotateZ", style);
  extractStyleFromProps(props, "scale", style);
  extractStyleFromProps(props, "scaleX", style);
  extractStyleFromProps(props, "scaleY", style);
  extractStyleFromProps(props, "skew", style);
  extractStyleFromProps(props, "skewX", style);
  extractStyleFromProps(props, "skewY", style);
  extractStyleFromProps(props, "originX", style);
  extractStyleFromProps(props, "originY", style);
  extractStyleFromProps(props, "originZ", style);
  collectBackgroundFromProps(props, style);
  return style;
}

// ../../library/src/render/presentation/Frame/FrameWithMotion.tsx
function hasEvents(props) {
  for (const key7 in props) {
    if (key7 === "drag" || key7.startsWith("while") || typeof props[key7] === "function" && key7.startsWith("on") && !key7.includes("Animation")) {
      return true;
    }
  }
  return false;
}
var pointerEvents = [
  "onClick",
  "onDoubleClick",
  "onMouse",
  "onMouseDown",
  "onMouseUp",
  "onTapDown",
  "onTap",
  "onTapUp",
  "onPointer",
  "onPointerDown",
  "onPointerUp",
  "onTouch",
  "onTouchDown",
  "onTouchUp"
];
var pointerEventsSet = /* @__PURE__ */ new Set([
  ...pointerEvents,
  ...pointerEvents.map((event) => `${event}Capture`)
  // Add capture event variants
]);
function getCursorFromEvents(props) {
  if (props.drag) {
    return "grab";
  }
  for (const key7 in props) {
    if (pointerEventsSet.has(key7)) {
      return "pointer";
    }
  }
  return void 0;
}
var overflowKey = "overflow";
function hasScrollableContent(props) {
  if (hasScrollingOverflow(props))
    return true;
  if (!props.style)
    return false;
  if (hasScrollingOverflow(props.style))
    return true;
  return false;
}
function hasScrollingOverflow(props) {
  if (overflowKey in props && (props[overflowKey] === "scroll" || props[overflowKey] === "auto"))
    return true;
  return false;
}
function unwrapFrameProps(frameProps) {
  const {
    left,
    top,
    bottom,
    right,
    width,
    height,
    center,
    _constraints,
    size: size2,
    widthType,
    heightType,
    positionFixed,
    positionAbsolute
  } = frameProps;
  const minWidth = resolveMotionValue(frameProps.minWidth);
  const minHeight = resolveMotionValue(frameProps.minHeight);
  const maxWidth = resolveMotionValue(frameProps.maxWidth);
  const maxHeight = resolveMotionValue(frameProps.maxHeight);
  const constraintProps = {
    top: resolveMotionValue(top),
    left: resolveMotionValue(left),
    bottom: resolveMotionValue(bottom),
    right: resolveMotionValue(right),
    width: resolveMotionValue(width),
    height: resolveMotionValue(height),
    size: resolveMotionValue(size2),
    center,
    _constraints,
    widthType,
    heightType,
    positionFixed,
    positionAbsolute,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight
  };
  return constraintProps;
}
var defaultFrameRect = { x: 0, y: 0, width: 200, height: 200 };
function useStyleAndRect(props) {
  injectComponentCSSRules();
  const inCodeComponent = Boolean(useContext5(ComponentContainerContext));
  const { style, _initialStyle, __fromCanvasComponent, size: size2 } = props;
  const unwrappedProps = unwrapFrameProps(props);
  const constraintsRect = useConstraints(unwrappedProps);
  const defaultStyle = {
    display: "block",
    flexShrink: 0,
    userSelect: RenderTarget.current() !== "PREVIEW" /* preview */ ? "none" : void 0
  };
  if (!props.__fromCanvasComponent) {
    defaultStyle.backgroundColor = props.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0;
  }
  const shouldDisablePointerEvents = !hasEvents(props) && !props.__fromCanvasComponent && !hasScrollableContent(props);
  const safeToEditPointerEvents = props.style ? !("pointerEvents" in props.style) : true;
  if (shouldDisablePointerEvents && safeToEditPointerEvents) {
    defaultStyle.pointerEvents = "none";
  }
  const addTextCentering = React27.Children.count(props.children) > 0 && React27.Children.toArray(props.children).every((child) => {
    return typeof child === "string" || typeof child === "number";
  });
  const centerTextStyle = addTextCentering && {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  };
  const propsStyle = getStyleForFrameProps(props);
  if (size2 === void 0 && !__fromCanvasComponent) {
    if (!hasLeftAndRight(propsStyle)) {
      defaultStyle.width = defaultFrameRect.width;
    }
    if (!hasTopAndBottom(propsStyle)) {
      defaultStyle.height = defaultFrameRect.height;
    }
  }
  if (unwrappedProps.minWidth !== void 0) {
    defaultStyle.minWidth = unwrappedProps.minWidth;
  }
  if (unwrappedProps.minHeight !== void 0) {
    defaultStyle.minHeight = unwrappedProps.minHeight;
  }
  let constraintsStyle = {};
  if (constraintsEnabled(unwrappedProps)) {
    if (constraintsRect && !isAutoSized(props)) {
      constraintsStyle = {
        left: constraintsRect.x,
        top: constraintsRect.y,
        width: constraintsRect.width,
        height: constraintsRect.height,
        right: void 0,
        bottom: void 0
      };
    }
  }
  Object.assign(defaultStyle, centerTextStyle, _initialStyle, propsStyle, constraintsStyle, style);
  Layer.applyWillChange(props, defaultStyle, true);
  let resultStyle = defaultStyle;
  if (!defaultStyle.transform) {
    resultStyle = { x: 0, y: 0, ...defaultStyle };
  }
  const onCanvas = RenderTarget.current() === "CANVAS" /* canvas */;
  if (props.positionSticky) {
    if (!onCanvas || inCodeComponent) {
      resultStyle.position = "sticky";
      resultStyle.willChange = "transform";
      resultStyle.zIndex = 1;
      resultStyle.top = props.positionStickyTop;
      resultStyle.right = props.positionStickyRight;
      resultStyle.bottom = props.positionStickyBottom;
      resultStyle.left = props.positionStickyLeft;
    }
  } else if (onCanvas && (props.positionFixed || props.positionAbsolute)) {
    resultStyle.position = "absolute";
  }
  if ("rotate" in resultStyle && resultStyle.rotate === void 0) {
    delete resultStyle.rotate;
  }
  return [resultStyle, constraintsRect];
}
var filteredProps = /* @__PURE__ */ new Set([
  "width",
  "height",
  "opacity",
  "overflow",
  "radius",
  "background",
  "color",
  "x",
  "y",
  "z",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scaleX",
  "scaleY",
  "skew",
  "skewX",
  "skewY",
  "originX",
  "originY",
  "originZ"
]);
function getMotionProps(props) {
  const motionProps = {};
  for (const key7 in props) {
    const isValid = isValidMotionProp(key7) || isPropValid(key7);
    if (isValid && !filteredProps.has(key7)) {
      motionProps[key7] = props[key7];
    } else if (key7 === "positionTransition" || key7 === "layoutTransition") {
      motionProps["layout"] = true;
      if (typeof props[key7] !== "boolean" && !props.transition) {
        motionProps["transition"] = props[key7];
      }
    }
  }
  return motionProps;
}
function hasDataFramerName(props) {
  return "data-framer-name" in props;
}
var VisibleFrame = /* @__PURE__ */ forwardRef(function VisibleFrame2(props, forwardedRef) {
  var _a, _b;
  const { name, center, border, _border, __portal } = props;
  const { props: propsWithOverrides, children } = processOverrideForwarding(props);
  const motionProps = getMotionProps(propsWithOverrides);
  const layoutId = useLayoutId(props);
  const cursor = getCursorFromEvents(props);
  const fallbackRef = useRef4(null);
  const ref = forwardedRef != null ? forwardedRef : fallbackRef;
  const dataProps = {
    "data-framer-component-type": "Frame",
    "data-framer-cursor": cursor,
    "data-framer-highlight": cursor === "pointer" ? true : void 0,
    "data-layoutid": layoutId
  };
  if (!hasDataFramerName(props) && name) {
    dataProps["data-framer-name"] = name;
  }
  const [currentStyle, rect] = useStyleAndRect(propsWithOverrides);
  const unwrappedProps = unwrapFrameProps(propsWithOverrides);
  const autoSized = isAutoSized(unwrappedProps);
  if (center && !(rect && !autoSized && constraintsEnabled(unwrappedProps))) {
    if (!motionProps.transformTemplate)
      motionProps.transformTemplate = transformTemplate(center);
    Object.assign(dataProps, layoutHintDataPropsForCenter(center));
  } else if (!motionProps.transformTemplate) {
    motionProps.transformTemplate = void 0;
  }
  useMeasureLayout(props, ref);
  const backgroundImage = backgroundImageFromProps(props);
  const inCodeComponent = Boolean(useContext5(ComponentContainerContext));
  const parentSize = resolveParentSize(propsWithOverrides, unwrappedProps, rect, inCodeComponent);
  const wrappedContent = useProvideParentSize(
    /* @__PURE__ */ React27.createElement(React27.Fragment, null, backgroundImage ? /* @__PURE__ */ React27.createElement(
      BackgroundImageComponent,
      {
        alt: (_a = props.alt) != null ? _a : "",
        image: backgroundImage,
        containerSize: rect != null ? rect : void 0,
        nodeId: props.id && nodeIdFromString(props.id),
        layoutId
      }
    ) : null, children, /* @__PURE__ */ React27.createElement(Border, { ..._border, border, layoutId })),
    parentSize
  );
  const MotionComponent = motion[(_b = props.as) != null ? _b : "div"];
  return /* @__PURE__ */ React27.createElement(
    MotionComponent,
    {
      ...dataProps,
      ...motionProps,
      layoutId,
      style: currentStyle,
      ref,
      transformValues
    },
    wrappedContent,
    __portal
  );
});
var FrameWithMotion = /* @__PURE__ */ forwardRef(function FrameWithMotion2(props, ref) {
  if (import_process3.default.env.NODE_ENV !== "production" && safeWindow["perf"])
    safeWindow["perf"].nodeRender();
  const { visible = true } = props;
  if (!visible)
    return null;
  return /* @__PURE__ */ React27.createElement(VisibleFrame, { ...props, ref });
});
function resolveParentSize(props, unwrappedProps, rect, inCodeComponent) {
  if (inCodeComponent) {
    const parentSize = rect ? { width: rect.width, height: rect.height } : 1 /* Disabled */;
    return parentSize;
  }
  const { _usesDOMRect } = props;
  const {
    widthType = 0 /* FixedNumber */,
    heightType = 0 /* FixedNumber */,
    width,
    height
  } = unwrappedProps;
  if (rect && !_usesDOMRect) {
    return rect;
  }
  if (widthType === 0 /* FixedNumber */ && heightType === 0 /* FixedNumber */ && typeof width === "number" && typeof height === "number") {
    return { width, height };
  }
  if (_usesDOMRect || props.positionFixed || props.positionAbsolute) {
    return 2 /* DisabledForCurrentLevel */;
  }
  return 0 /* Unknown */;
}
function isAutoSized({
  width,
  height
}) {
  return width === "auto" || width === "min-content" || height === "auto" || height === "min-content";
}

// ../../library/src/components/EmptyState.tsx
function EmptyState({
  title = "",
  description = "Click and drag the connector to any frame on the canvas \u2192",
  children,
  size: size2,
  hide,
  insideUserCodeComponent = false
}) {
  const { target } = RenderEnvironment;
  const childCount = React28.Children.count(children);
  if (insideUserCodeComponent && childCount === 0) {
    return /* @__PURE__ */ React28.createElement(FrameWithMotion, { ...size2, "data-name": "placeholder" });
  }
  if (target !== "CANVAS" /* canvas */)
    return null;
  if (hide)
    return null;
  if (childCount !== 0)
    return null;
  return /* @__PURE__ */ React28.createElement(
    FrameWithMotion,
    {
      key: "empty-state",
      className: "framerInternalUI-canvasPlaceholder",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      style: { position: "absolute" }
    },
    /* @__PURE__ */ React28.createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          lineHeight: "1.4",
          height: "100%",
          width: "100%"
        }
      },
      /* @__PURE__ */ React28.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
            // Use a mask to fade out the right edge of the content as it gets cropped.
            WebkitMaskImage: `linear-gradient(90deg, black, black calc(100% - 12px * ${scaleFactor}), transparent)`
          }
        },
        /* @__PURE__ */ React28.createElement(Title, null, title),
        /* @__PURE__ */ React28.createElement(Description, null, description)
      )
    )
  );
}
var scaleFactor = "var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)";
function Title({ children }) {
  return /* @__PURE__ */ React28.createElement(
    "span",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        flexGrow: 1,
        flexShrink: 0,
        fontWeight: 600,
        marginBottom: "5px"
      }
    },
    children
  );
}
function Description({ children }) {
  return /* @__PURE__ */ React28.createElement(
    "span",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        flexGrow: 1,
        flexShrink: 0,
        fontWeight: 400,
        maxWidth: "200px"
      }
    },
    children
  );
}

// ../../library/src/components/hoc/WithNavigator.tsx
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs(), 1);
import React29 from "react";

// ../../library/src/render/types/NavigationLink.ts
var NavigateTo = /* @__PURE__ */ ((NavigateTo2) => {
  NavigateTo2["Previous"] = "@Previous";
  return NavigateTo2;
})(NavigateTo || {});
var NavigationTransitionType = /* @__PURE__ */ ((NavigationTransitionType2) => {
  NavigationTransitionType2["push"] = "push";
  NavigationTransitionType2["instant"] = "instant";
  NavigationTransitionType2["fade"] = "fade";
  NavigationTransitionType2["modal"] = "modal";
  NavigationTransitionType2["overlay"] = "overlay";
  NavigationTransitionType2["flip"] = "flip";
  NavigationTransitionType2["magicMotion"] = "magicMotion";
  return NavigationTransitionType2;
})(NavigationTransitionType || {});

// ../../library/src/components/NavigationContext.ts
import { createContext } from "react";

// ../../library/src/components/NavigatorMock.tsx
var NavigatorMock = class {
  constructor() {
    this.warning = () => {
      warnOnce("The Navigator API is only available inside of Framer: https://www.framer.com/");
    };
    this.goBack = () => this.warning();
    this.instant = () => this.warning();
    this.fade = () => this.warning();
    this.push = () => this.warning();
    this.modal = () => this.warning();
    this.overlay = () => this.warning();
    this.flip = () => this.warning();
    this.customTransition = () => this.warning();
    this.magicMotion = () => this.warning();
  }
};
var navigatorMock = new NavigatorMock();

// ../../library/src/components/NavigationContext.ts
var NavigationContext = createContext(navigatorMock);

// ../../library/src/components/hoc/WithNavigator.tsx
function WithNavigator(BaseComponent, navigationTransition, navigationTransitionDirection, NavigationTarget2, navigationTransitionOptions) {
  const InternalWithNavigator = class extends React29.Component {
    render() {
      return /* @__PURE__ */ React29.createElement(NavigationContext.Consumer, null, (navigation) => {
        const navigate = () => {
          if (navigationTransition === "goBack") {
            navigation.goBack();
            return;
          }
          if (!NavigationTarget2)
            return;
          const component = NavigationTarget2();
          const appearsFrom = transitionDirectionToSide(navigationTransitionDirection);
          switch (navigationTransition) {
            case "instant" /* instant */:
              navigation.instant(component);
              break;
            case "fade" /* fade */:
              navigation.fade(component);
              break;
            case "modal" /* modal */:
              navigation.modal(component, navigationTransitionOptions);
              break;
            case "push" /* push */:
              navigation.push(component, { appearsFrom });
              break;
            case "overlay" /* overlay */:
              navigation.overlay(component, {
                ...navigationTransitionOptions,
                appearsFrom
              });
              break;
            case "flip" /* flip */:
              navigation.flip(component, { appearsFrom });
              break;
            case "magicMotion" /* magicMotion */:
              navigation.magicMotion(component, {});
              break;
          }
        };
        const { onTap, ...props } = this.props;
        if (onTap) {
          props.onTap = (...args) => {
            onTap.apply(this, args);
            navigate.apply(this, args);
          };
        } else {
          props.onTap = navigate;
        }
        return /* @__PURE__ */ React29.createElement(BaseComponent, { ...props });
      });
    }
  };
  (0, import_hoist_non_react_statics.default)(InternalWithNavigator, BaseComponent);
  return InternalWithNavigator;
}
function transitionDirectionToSide(direction) {
  switch (direction) {
    case "left":
      return "right";
    case "right":
      return "left";
    case "up":
      return "bottom";
    case "down":
      return "top";
  }
}

// ../../library/src/components/AnimateLayout/AnimateSharedLayout.tsx
var AnimateSharedLayout = (props) => props.children;

// ../../library/src/render/presentation/Frame/index.tsx
import React35, { forwardRef as forwardRef2 } from "react";

// ../../library/src/components/hoc/WithEvents.tsx
var import_hoist_non_react_statics3 = __toESM(require_hoist_non_react_statics_cjs(), 1);
import React31 from "react";

// ../../library/src/utils/events.ts
function pointForEvent(event, customTarget = null) {
  let target;
  if (customTarget instanceof HTMLElement) {
    target = customTarget;
  }
  if (!target && event.target instanceof HTMLElement) {
    target = event.target;
  }
  if (!target) {
    return { x: event.pageX, y: event.pageY };
  }
  if ("webkitConvertPointFromPageToNode" in safeWindow) {
    let webkitPoint = new safeWindow.WebKitPoint(event.pageX, event.pageY);
    webkitPoint = safeWindow.webkitConvertPointFromPageToNode(target, webkitPoint);
    return { x: webkitPoint.x, y: webkitPoint.y };
  }
  const rect = target.getBoundingClientRect();
  const width = parseFloat(target.style.width);
  const height = parseFloat(target.style.height);
  const scale2 = {
    x: width ? width / rect.width : 1,
    y: height ? height / rect.height : 1
  };
  const point = {
    x: scale2.x * (event.pageX - rect.left - target.clientLeft + target.scrollLeft),
    y: scale2.y * (event.pageY - rect.top - target.clientTop + target.scrollTop)
  };
  return point;
}

// ../../library/src/events/FramerEvent.ts
var FramerEvent = class {
  /**
   * @internal
   */
  constructor(originalEvent, session) {
    this.originalEvent = originalEvent;
    this.session = session;
    /**
     * @internal
     */
    this.time = Date.now();
    /**
     * @internal
     */
    this.loopTime = MainLoop.time;
    const customTarget = session && session.startEvent && session.startEvent.target || originalEvent.target;
    const eventLike = FramerEvent.eventLikeFromOriginalEvent(originalEvent);
    this.point = pointForEvent(eventLike, customTarget);
    const deviceTarget = session && session.originElement ? session.originElement : document.body;
    this.devicePoint = pointForEvent(eventLike, deviceTarget);
    this.target = originalEvent.target || null;
    const lastEvent = session && session.lastEvent;
    if (originalEvent instanceof WheelEvent) {
      this.delta = { x: originalEvent.deltaX, y: originalEvent.deltaY };
    } else if (lastEvent && this.devicePoint && lastEvent.devicePoint) {
      this.delta = Point.subtract(this.devicePoint, lastEvent.devicePoint);
    } else {
      this.delta = { x: 0, y: 0 };
    }
  }
  static eventLikeFromOriginalEvent(originalEvent) {
    if ("touches" in originalEvent) {
      let touches = originalEvent.touches;
      if (!touches || !touches.length) {
        if (originalEvent.changedTouches && originalEvent.changedTouches.length) {
          touches = originalEvent.changedTouches;
        }
      }
      const firstTouch = touches[0];
      if (!touches || !firstTouch) {
        return { pageX: 0, pageY: 0, target: null };
      }
      const pageX = firstTouch.clientX || firstTouch.screenX || firstTouch.pageX;
      const pageY = firstTouch.clientY || firstTouch.screenY || firstTouch.pageY;
      return {
        pageX,
        pageY,
        target: originalEvent.target
      };
    }
    return originalEvent;
  }
  /**
   * @internal
   */
  velocity(t) {
    return this.session ? this.session.velocity(t) : { x: 0, y: 0 };
  }
  /**
   * @internal
   */
  get offset() {
    return this.session ? this.session.offset(this) : { x: 0, y: 0 };
  }
  /**
   * @internal
   */
  get isLeftMouseClick() {
    if (environment.isTouch()) {
      return void 0;
    }
    if ("button" in this.originalEvent && "buttons" in this.originalEvent && "ctrlKey" in this.originalEvent) {
      return (this.originalEvent.button === 0 || this.originalEvent.buttons === 1) && !this.originalEvent.ctrlKey;
    }
    return false;
  }
};

// ../../library/src/components/hoc/WithDragging.tsx
var import_hoist_non_react_statics2 = __toESM(require_hoist_non_react_statics_cjs(), 1);
import React30 from "react";

// ../../library/src/utils/math.ts
var clamp3 = (value, a, b) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  if (value < min) {
    value = min;
  }
  if (value > max) {
    value = max;
  }
  return value;
};

// ../../library/src/components/hoc/WithDragging.tsx
var DraggingContext = React30.createContext({ dragging: false });
function WithDragging(Component15) {
  const _WithDraggingHOC = class extends React30.Component {
    constructor(props, defaultProps) {
      super(props, defaultProps);
      this.state = {
        isDragging: false
      };
      this.x = Animatable(0);
      this.y = Animatable(0);
      this.onChangePosition = (change, transaction) => {
        if (change.value === change.oldValue) {
          return;
        }
        if (this.props.onMove) {
          this.props.onMove(this.point, this);
        }
      };
      this.isMoving = false;
      this.isAnimating = false;
      this.directionLockAxis = null;
      this._constraints = null;
      this.panStart = (event) => {
        if (!this.props.enabled) {
          return;
        }
        this.isMoving = this.isAnimating;
        this.stopAnimation();
        this.resetdirectionLock();
        this.layerStartPoint = this.point;
        this.correctedLayerStartPoint = this.point;
        if (this._constraints && this.props.bounce) {
          this.correctedLayerStartPoint = this.constrainPosition(
            this.correctedLayerStartPoint,
            this._constraints,
            1 / this.props.overdragScale
          );
        }
        this.previousPoint = this.correctedLayerStartPoint;
        if (!this.state.isDragging) {
          this.setState({ isDragging: true });
        }
        if (this.props.onDragSessionStart) {
          this.props.onDragSessionStart(event, this);
        }
      };
      this.pan = (event) => {
        const {
          enabled,
          speedX,
          speedY,
          directionLock,
          overdragScale,
          vertical,
          horizontal,
          pixelAlign,
          onDragStart,
          onDragWillMove,
          onDragDidMove,
          onDragSessionMove
        } = this.props;
        if (!enabled) {
          return;
        }
        let point = { ...this.previousPoint };
        point.x += event.delta.x * speedX;
        point.y += event.delta.y * speedY;
        this.previousPoint = { ...point };
        if (this._constraints) {
          point = this.constrainPosition(point, this._constraints, overdragScale);
        }
        if (directionLock) {
          if (this.directionLockAxis === null) {
            const offset = event.offset;
            offset.x = offset.x * speedX;
            offset.y = offset.y * speedY;
            this.updatedirectionLock(offset);
            return;
          } else {
            if (this.directionLockAxis === "y") {
              point.x = this.layerStartPoint.x;
            }
            if (this.directionLockAxis === "x") {
              point.y = this.layerStartPoint.y;
            }
          }
        }
        if (!this.state.isDragging) {
          this.setState({ isDragging: true });
          this.isMoving = true;
          if (onDragStart) {
            onDragStart(event, this);
          }
        }
        if (onDragWillMove) {
          onDragWillMove(event, this);
        }
        if (pixelAlign) {
          point.x = Math.round(point.x);
          point.y = Math.round(point.y);
        }
        if (!horizontal && !vertical) {
          return;
        }
        let axis = null;
        if (horizontal && !vertical) {
          axis = "x";
        } else if (vertical && !horizontal) {
          axis = "y";
        }
        this.setPoint(point, axis);
        if (onDragDidMove) {
          onDragDidMove(event, this);
        }
        if (onDragSessionMove) {
          onDragSessionMove(event, this);
        }
      };
      this.panEnd = (event) => {
        if (!this.props.enabled) {
          return;
        }
        this.startAnimation(event);
        const { onDragSessionEnd, onDragEnd } = this.props;
        if (this.state.isDragging) {
          if (onDragEnd) {
            onDragEnd(event, this);
          }
        }
        if (onDragSessionEnd) {
          onDragSessionEnd(event, this);
        }
        if (this.state.isDragging) {
          this.setState({ isDragging: false });
        }
        this.isMoving = this.isAnimating;
      };
      // Mouse Wheel
      this.mouseWheelStart = (event) => {
        this.correctedLayerStartPoint = this.point;
        this.previousPoint = this.correctedLayerStartPoint;
        this.stopAnimation();
      };
      this.mouseWheel = (event) => {
        const {
          enabled,
          speedX,
          speedY,
          vertical,
          horizontal,
          pixelAlign,
          onDragWillMove,
          onDragDidMove,
          mouseWheel
        } = this.props;
        if (!mouseWheel || !enabled) {
          return;
        }
        let point = { ...this.point };
        point.x -= event.delta.x * speedX;
        point.y -= event.delta.y * speedY;
        if (this._constraints) {
          point = this.constrainPosition(point, this._constraints, 0, false);
        }
        if (onDragWillMove) {
          onDragWillMove(event, this);
        }
        if (pixelAlign) {
          point.x = Math.round(point.x);
          point.y = Math.round(point.y);
        }
        if (!horizontal && !vertical) {
          return;
        }
        let axis = null;
        if (horizontal && !vertical) {
          axis = "x";
        } else if (vertical && !horizontal) {
          axis = "y";
        }
        this.setPoint(point, axis);
        if (onDragDidMove) {
          onDragDidMove(event, this);
        }
      };
      this.mouseWheelEnd = (event) => {
      };
      this.onAnimationStep = (axis, value) => {
        if (axis === "x" && this.props.horizontal === false) {
          return;
        }
        if (axis === "y" && this.props.vertical === false) {
          return;
        }
        let delta = 0;
        if (this.constraints) {
          if (this.props.bounce) {
            delta = value - this.getValue(axis);
          } else {
            const { minX, minY, maxX, maxY } = this.calculateConstraints(this._constraints);
            if (axis === "x") {
              delta = clamp3(value, minX, maxX) - this.getValue(axis);
            }
            if (axis === "y") {
              delta = clamp3(value, minY, maxY) - this.getValue(axis);
            }
          }
        } else {
          delta = value - this.getValue(axis);
        }
        const updatePoint = this.point;
        if (axis === "x") {
          updatePoint[axis] = updatePoint[axis] + delta;
        }
        if (axis === "y") {
          updatePoint[axis] = updatePoint[axis] + delta;
        }
        this.setPoint(updatePoint, axis);
      };
      this.onAnimationStop = (axis) => {
        if (axis === "x" && this.props.horizontal === false) {
          return;
        }
        if (axis === "y" && this.props.vertical === false) {
          return;
        }
        if (!this.animation) {
          return;
        }
        if (this.props.pixelAlign) {
          const point = this.point;
          point.x = Math.round(point.x);
          point.y = Math.round(point.y);
          this.setPoint(point, axis);
        }
        if (this.animation.x.isFinished() && this.animation.y.isFinished()) {
          return this.stopAnimation();
        }
      };
      this.stopAnimation = () => {
        this.isAnimating = false;
        this.isMoving = false;
        if (!this.animation) {
          return;
        }
        this.animation.x.cancel();
        this.animation.y.cancel();
        if (this.props.onDragAnimationEnd) {
          this.props.onDragAnimationEnd(this.animation, this);
        }
        this.animation = null;
      };
      const x = this.props.left;
      const y = this.props.top;
      if (!x) {
        this.x = Animatable(0);
      } else if (isAnimatable(x)) {
        this.x = x;
      } else {
        this.x = Animatable(x);
      }
      if (!y) {
        this.y = Animatable(0);
      } else if (isAnimatable(y)) {
        this.y = y;
      } else {
        this.y = Animatable(y);
      }
      this.x.onUpdate(this.onChangePosition);
      this.y.onUpdate(this.onChangePosition);
      const constraints = this.props.constraints;
      if (constraints) {
        this.constraints = constraints;
      }
    }
    UNSAFE_componentWillReceiveProps(props) {
      if (this.props.left !== props.left && isFiniteNumber(props.left)) {
        this.x.set(props.left);
      }
      if (this.props.top !== props.top && isFiniteNumber(props.top)) {
        this.y.set(props.top);
      }
      const constraints = props.constraints;
      if (constraints) {
        this.constraints = constraints;
      }
    }
    get point() {
      return { x: this.x.get(), y: this.y.get() };
    }
    setPoint(point, axis = null) {
      switch (axis) {
        case "x":
          this.x.set(point.x);
          break;
        case "y":
          this.y.set(point.y);
          break;
        case null:
          this.x.set(point.x);
          this.y.set(point.y);
          break;
      }
    }
    getValue(axis) {
      switch (axis) {
        case "x":
          return this.x.get();
        case "y":
          return this.y.get();
      }
    }
    get width() {
      const width = this.props.width;
      if (!width) {
        return 100;
      }
      if (isAnimatable(width)) {
        return width.get();
      }
      if (typeof width === "string") {
        return parseFloat(width);
      }
      return width;
    }
    get height() {
      const height = this.props.height;
      if (!height) {
        return 100;
      }
      if (isAnimatable(height)) {
        return height.get();
      }
      if (typeof height === "string") {
        return parseFloat(height);
      }
      return height;
    }
    get constraints() {
      return this._constraints;
    }
    set constraints(value) {
      if (value !== null && typeof value === "object") {
        this._constraints = {
          x: value.x || 0,
          y: value.y || 0,
          width: value.width || 0,
          height: value.height || 0
        };
      } else {
        this._constraints = null;
      }
      if (this._constraints) {
        this.updateAnimationConstraints(this._constraints);
      }
    }
    get constraintsOffset() {
      if (!this.constraints) {
        return { x: 0, y: 0 };
      }
      const { minX, minY, maxX, maxY } = this.calculateConstraints(this._constraints);
      const point = this.point;
      const constrainedPoint = { x: clamp3(point.x, minX, maxX), y: clamp3(point.y, minY, maxY) };
      const offset = { x: point.x - constrainedPoint.x, y: point.y - constrainedPoint.y };
      return offset;
    }
    get isBeyondConstraints() {
      const constraintsOffset = this.constraintsOffset;
      if (constraintsOffset.x !== 0) {
        return true;
      }
      if (constraintsOffset.y !== 0) {
        return true;
      }
      return false;
    }
    clampAndScale(value, min, max, scale2, scaleAllowed) {
      if (!scaleAllowed) {
        return clamp3(value, min, max);
      }
      if (value < min) {
        value = min + (value - min) * scale2;
      }
      if (value > max) {
        value = max + (value - max) * scale2;
      }
      return value;
    }
    calculateConstraints(bounds) {
      if (!bounds) {
        return { minX: Infinity, maxX: Infinity, minY: Infinity, maxY: Infinity };
      }
      if (bounds.width < this.width) {
        bounds.width = this.width;
      }
      if (bounds.height < this.height) {
        bounds.height = this.height;
      }
      const constraints = {
        minX: Rect.minX(bounds),
        maxX: Rect.maxX(bounds),
        minY: Rect.minY(bounds),
        maxY: Rect.maxY(bounds)
      };
      constraints.maxX -= this.width;
      constraints.maxY -= this.height;
      return constraints;
    }
    constrainPosition(proposedPoint, bounds, scale2, overdrag = this.props.overdrag) {
      const { maxX, maxY, minX, minY } = this.calculateConstraints(this._constraints);
      const point = {
        x: this.clampAndScale(proposedPoint.x, minX, maxX, scale2, overdrag),
        y: this.clampAndScale(proposedPoint.y, minY, maxY, scale2, overdrag)
      };
      if (this.props.speedX === 0 || this.props.horizontal === false) {
        point.x = proposedPoint.x;
      }
      if (this.props.speedY === 0 || this.props.vertical === false) {
        point.y = proposedPoint.y;
      }
      return point;
    }
    /* private */
    updatedirectionLock(correctedDelta) {
      if (Math.abs(correctedDelta.y) > this.props.directionLockThreshold.y) {
        this.directionLockAxis = "y";
      } else if (Math.abs(correctedDelta.x) > this.props.directionLockThreshold.x) {
        this.directionLockAxis = "x";
      }
      if (this.directionLockAxis !== null) {
        if (this.props.onDragDirectionLockStart) {
          this.props.onDragDirectionLockStart(this.directionLockAxis, this);
        }
      }
    }
    resetdirectionLock() {
      this.directionLockAxis = null;
    }
    // Inertial scroll animation
    setupAnimation() {
      if (this.animation) {
        return;
      }
      this.animation = { x: this.setupAnimationForAxis("x"), y: this.setupAnimationForAxis("y") };
      this.updateAnimationConstraints(this._constraints);
    }
    setupAnimationForAxis(axis) {
      const properties = {};
      properties[axis] = true;
      const animator = new InertialScrollAnimator({
        momentum: this.props.momentumOptions,
        bounce: this.props.bounceOptions
      });
      const updateCallback = (value) => {
        this.onAnimationStep(axis, value);
      };
      const doneCallback = () => {
        this.onAnimationStop(axis);
      };
      return new MainLoopAnimationDriver(animator, updateCallback, doneCallback);
    }
    updateAnimationConstraints(constraints) {
      if (!this.animation) {
        return;
      }
      if (constraints) {
        const { minX, minY, maxX, maxY } = this.calculateConstraints(constraints);
        this.animation.x.animator.setLimits(minX, maxX);
        this.animation.y.animator.setLimits(minY, maxY);
      } else {
        this.animation.x.animator.setLimits(-Infinity, Infinity);
        this.animation.y.animator.setLimits(-Infinity, Infinity);
      }
    }
    startAnimation(event) {
      const { momentum, bounce, momentumVelocityMultiplier, speedX, speedY, overdrag, onDragAnimationStart } = this.props;
      if (!(momentum || bounce)) {
        return;
      }
      if (this.isBeyondConstraints === false && momentum === false) {
        return;
      }
      if (this.isBeyondConstraints === false && this.state.isDragging === false) {
        return;
      }
      const { minX, minY, maxX, maxY } = this.calculateConstraints(this._constraints);
      const startAnimationX = overdrag === true || this.point.x > minX && this.point.x < maxX;
      const startAnimationY = overdrag === true || this.point.y > minY && this.point.y < maxY;
      if (startAnimationX === startAnimationY && startAnimationY === false) {
        return;
      }
      const velocity = event.velocity(0.1);
      let velocityX = velocity.x * momentumVelocityMultiplier * speedX;
      let velocityY = velocity.y * momentumVelocityMultiplier * speedY;
      if (this.directionLockAxis === "x") {
        velocityY = 0;
      }
      if (this.directionLockAxis === "y") {
        velocityX = 0;
      }
      this.setupAnimation();
      this.isAnimating = true;
      this.isMoving = true;
      if (!this.animation) {
        return;
      }
      this.animation.x.animator.setState({ x: this.point.x, v: velocityX });
      if (startAnimationX) {
        this.animation.x.play();
      }
      this.animation.y.animator.setState({ x: this.point.y, v: velocityY });
      if (startAnimationY) {
        this.animation.y.play();
      }
      if (onDragAnimationStart) {
        onDragAnimationStart(this.animation, this);
      }
    }
    wrapHandler(ownHandler, originalHandler) {
      if (!originalHandler) {
        return ownHandler;
      }
      return (event) => {
        ownHandler(event);
        originalHandler(event);
      };
    }
    render() {
      const { onPanStart, onPan, onPanEnd, onMouseWheelStart, onMouseWheel, onMouseWheelEnd, ...attributes } = this.props;
      const originalProps = { ...attributes };
      Object.keys(_WithDraggingHOC.draggingDefaultProps).forEach((key7) => {
        delete originalProps[key7];
      });
      originalProps.onPanStart = this.wrapHandler(this.panStart, onPanStart);
      originalProps.onPan = this.wrapHandler(this.pan, onPan);
      originalProps.onPanEnd = this.wrapHandler(this.panEnd, onPanEnd);
      originalProps.onMouseWheelStart = this.wrapHandler(this.mouseWheelStart, onMouseWheelStart);
      originalProps.onMouseWheel = this.wrapHandler(this.mouseWheel, onMouseWheel);
      originalProps.onMouseWheelEnd = this.wrapHandler(this.mouseWheelEnd, onMouseWheelEnd);
      originalProps.left = this.x;
      originalProps.top = this.y;
      return /* @__PURE__ */ React30.createElement(DraggingContext.Provider, { value: { dragging: this.state.isDragging } }, /* @__PURE__ */ React30.createElement(Component15, { ...originalProps }));
    }
  };
  let WithDraggingHOC = _WithDraggingHOC;
  WithDraggingHOC.draggingDefaultProps = {
    momentum: true,
    momentumOptions: { friction: 2.1, tolerance: 1 },
    momentumVelocityMultiplier: 800,
    speedX: 1,
    speedY: 1,
    bounce: true,
    bounceOptions: { friction: 40, tension: 200, tolerance: 1 },
    directionLock: false,
    directionLockThreshold: { x: 10, y: 10 },
    overdrag: true,
    overdragScale: 0.5,
    pixelAlign: true,
    velocityTimeout: 100,
    velocityScale: 890,
    horizontal: true,
    vertical: true,
    enabled: true,
    constraints: {},
    mouseWheel: false
  };
  WithDraggingHOC.defaultProps = Object.assign(
    {},
    Component15.defaultProps,
    _WithDraggingHOC.draggingDefaultProps
  );
  const withDragging = WithDraggingHOC;
  (0, import_hoist_non_react_statics2.default)(withDragging, Component15);
  return withDragging;
}

// ../../library/src/components/hoc/WithEvents.tsx
var hoverProps = {
  onMouseEnter: "mouseenter",
  onMouseLeave: "mouseleave"
};
var hoverEventKeys = Object.keys(hoverProps);
var eventHandlerMapping = {
  panstart: ["onPanStart"],
  pan: ["onPan"],
  panend: ["onPanEnd"],
  tapstart: ["onTapStart", "onMouseDown"],
  tap: ["onTap", "onClick"],
  tapend: ["onTapEnd", "onMouseUp"],
  mousewheelstart: ["onMouseWheelStart"],
  mousewheel: ["onMouseWheel"],
  mousewheelend: ["onMouseWheelEnd"]
};
var tapEventKeys = /* @__PURE__ */ new Set(["tapstart", "tap", "tapend"]);
function WithEvents(BaseComponent) {
  var _a;
  const withEvents = (_a = class extends React31.Component {
    constructor() {
      super(...arguments);
      // This local variable is used to track if we should ignore a tap after a drag
      // It's not in a state because we want to change it from the render function (so not cause a render)
      this.shouldCancelTap = false;
      this.activeEventListeners = /* @__PURE__ */ new Map();
      this.hasFramerEventListener = false;
      this.component = React31.createRef();
    }
    get element() {
      return this.component.current && this.component.current.element;
    }
    componentDidMount() {
      this.addEventListeners();
    }
    componentDidUpdate(prevProps) {
      this.addEventListeners(prevProps);
    }
    componentWillUnmount() {
      this.removeEventListeners();
    }
    addEventListeners(prevProps) {
      if (this.element && !this.hasFramerEventListener) {
        this.element.addEventListener("FramerEvent", ({ detail }) => {
          const type = detail.type;
          const framerEvent = detail.event;
          this.handleEvent(type, framerEvent);
        });
        hoverEventKeys.forEach((eventName) => this.addHoverEvent(eventName));
        this.hasFramerEventListener = true;
      } else if (this.element && prevProps) {
        hoverEventKeys.forEach((eventName) => this.checkHoverEvent(eventName, prevProps));
      } else if (!this.element) {
        this.hasFramerEventListener = false;
      }
    }
    removeEventListeners() {
      hoverEventKeys.forEach((eventName) => this.removeHoverEvent(eventName));
    }
    addHoverEvent(eventName) {
      const originalEventListener = this.props[eventName];
      if (this.element && originalEventListener) {
        const eventListener = (e) => {
          const framerEvent = new FramerEvent(e);
          originalEventListener(framerEvent);
        };
        this.activeEventListeners.set(eventName, eventListener);
        const domEventName = hoverProps[eventName];
        this.element.addEventListener(domEventName, eventListener);
      }
    }
    removeHoverEvent(eventName) {
      const eventListener = this.activeEventListeners.get(eventName);
      if (this.element && eventListener) {
        const domEventName = hoverProps[eventName];
        this.element.removeEventListener(domEventName, eventListener);
        this.activeEventListeners.delete(eventName);
      }
    }
    checkHoverEvent(eventName, prevProps) {
      if (prevProps[eventName] !== this.props[eventName]) {
        this.removeHoverEvent(eventName);
        this.addHoverEvent(eventName);
      }
    }
    handleEvent(type, framerEvent) {
      const eventListenerKeys = eventHandlerMapping[type];
      if (!eventListenerKeys)
        return;
      eventListenerKeys.forEach((eventKey) => {
        const eventListener = this.props[eventKey];
        const cancelEvent = this.shouldCancelTap && tapEventKeys.has(eventKey);
        if (eventListener && !cancelEvent) {
          eventListener(framerEvent);
        }
      });
    }
    render() {
      return /* @__PURE__ */ React31.createElement(DraggingContext.Consumer, null, (value) => {
        this.shouldCancelTap = value.dragging;
        return /* @__PURE__ */ React31.createElement(BaseComponent, { ...this.props, ref: this.component });
      });
    }
  }, _a.defaultProps = Object.assign({}, BaseComponent.defaultProps), _a);
  (0, import_hoist_non_react_statics3.default)(withEvents, BaseComponent);
  return withEvents;
}

// ../../library/src/render/presentation/Frame/DeprecatedFrame.tsx
var import_process4 = __toESM(require_browser(), 1);
import React34 from "react";

// ../../library/src/data/ObservableObject.ts
var hasOwnProperty = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
var ObservableObject = /* @__PURE__ */ (() => {
  function ObservableObject2(initial = {}, makeAnimatables = false, observeAnimatables = true) {
    const unproxiedState = {};
    unproxiedState[$private] = {
      makeAnimatables,
      observeAnimatables,
      observers: new Observers(),
      reset() {
        for (const key7 in state) {
          if (hasOwnProperty(state, key7)) {
            state[key7] = hasOwnProperty(initial, key7) ? initial[key7] : void 0;
          }
        }
      },
      transactions: /* @__PURE__ */ new Set()
    };
    const state = new Proxy(unproxiedState, sharedProxyHandler);
    Object.assign(state, initial);
    return state;
  }
  ObservableObject2.resetObject = (target) => {
    return target[$private].reset();
  };
  ObservableObject2.addObserver = (target, observer) => {
    return target[$private].observers.add(observer);
  };
  return ObservableObject2;
})();
var ObservableObjectProxyHandler = class {
  constructor() {
    this.set = (target, key7, value, receiver) => {
      if (key7 === $private) {
        return false;
      }
      const privateObject = target[$private];
      let animatable;
      let rawValue;
      if (isAnimatable(value)) {
        animatable = value;
        rawValue = animatable.get();
      } else {
        rawValue = value;
      }
      if (privateObject.makeAnimatables && typeof value !== "function" && typeof value !== "object" && !animatable) {
        animatable = Animatable(value);
      }
      if (privateObject.observeAnimatables && animatable) {
        const transactions = privateObject.transactions;
        animatable.onUpdate({
          update: (change, transaction) => {
            if (transaction) {
              transactions.add(transaction);
            }
            privateObject.observers.notify({ value: receiver }, transaction);
          },
          finish: (transaction) => {
            if (transactions.delete(transaction)) {
              privateObject.observers.finishTransaction(transaction);
            }
          }
        });
      }
      let result = false;
      let changed = true;
      if (target[key7] !== void 0) {
        if (isAnimatable(target[key7])) {
          changed = target[key7].get() !== rawValue;
          target[key7].set(rawValue);
        } else {
          changed = target[key7] !== rawValue;
          target[key7] = rawValue;
        }
        const rawValueIsObject = rawValue !== null && typeof rawValue === "object";
        if (Array.isArray(rawValue) || rawValueIsObject)
          changed = true;
        result = true;
      } else {
        if (animatable) {
          value = animatable;
        }
        result = Reflect.set(target, key7, value);
      }
      if (changed) {
        privateObject.observers.notify({ value: receiver });
      }
      return result;
    };
    this.get = (target, key7, receiver) => {
      if (key7 === $private) {
        return target[key7];
      }
      const value = Reflect.get(target, key7, receiver);
      return typeof value === "function" ? value.bind(receiver) : value;
    };
  }
  deleteProperty(target, key7) {
    const result = Reflect.deleteProperty(target, key7);
    target[$private].observers.notify({ value: target });
    return result;
  }
  ownKeys(target) {
    const keys3 = Reflect.ownKeys(target);
    const privateIndex = keys3.indexOf($private);
    if (privateIndex !== -1) {
      keys3.splice(privateIndex, 1);
    }
    return keys3;
  }
  getOwnPropertyDescriptor(target, key7) {
    if (key7 === $private) {
      return void 0;
    }
    return Reflect.getOwnPropertyDescriptor(target, key7);
  }
};
var sharedProxyHandler = /* @__PURE__ */ new ObservableObjectProxyHandler();
var $private = /* @__PURE__ */ Symbol("private");

// ../../library/src/render/traits/Blending.ts
function collectBlendingFromProps(node, style) {
  if (!node.blendingMode || node.blendingMode === "normal")
    return;
  style.mixBlendMode = node.blendingMode;
}

// ../../library/src/render/traits/Opacity.ts
var key3 = "opacity";
function withOpacity(target) {
  return key3 in target;
}
function collectOpacityFromProps(props, style) {
  if (!withOpacity(props))
    return;
  const opacity = Animatable.getNumber(props.opacity);
  if (opacity === 1)
    return;
  style.opacity = opacity;
}

// ../../library/src/render/traits/Overflow.ts
function collectOverflowFromProps(props, style) {
  if (props.overflow) {
    style.overflow = props.overflow;
  }
}

// ../../library/src/render/traits/Radius.ts
var key4 = "radius";
function hasRadius(props) {
  return key4 in props;
}
function getRadiusValue(value) {
  let num = Number(value);
  if (typeof value === "string" && isNaN(num)) {
    return value;
  } else if (isAnimatable(value)) {
    num = Animatable.getNumber(value);
  }
  return num ? `${num}px` : "0";
}
function hasRadiusValue(value) {
  return value && value !== "0";
}
function collectRadiusFromProps(props, style) {
  if (!hasRadius(props))
    return;
  const { radius } = props;
  if (typeof radius === "string" || isAnimatable(radius) || isFiniteNumber(radius)) {
    const radiusValue = getRadiusValue(radius);
    if (hasRadiusValue(radiusValue)) {
      style.borderTopLeftRadius = style.borderTopRightRadius = style.borderBottomRightRadius = style.borderBottomLeftRadius = radiusValue;
    }
  } else if (radius) {
    const topLeft = getRadiusValue(radius.topLeft);
    const topRight = getRadiusValue(radius.topRight);
    const bottomRight = getRadiusValue(radius.bottomRight);
    const bottomLeft = getRadiusValue(radius.bottomLeft);
    if (hasRadiusValue(topLeft) || hasRadiusValue(topRight) || hasRadiusValue(bottomRight) || hasRadiusValue(bottomLeft)) {
      style.borderTopLeftRadius = topLeft;
      style.borderTopRightRadius = topRight;
      style.borderBottomRightRadius = bottomRight;
      style.borderBottomLeftRadius = bottomLeft;
    }
  }
}

// ../../library/src/render/traits/TextColor.ts
function collectTextColorFromProps(props, style) {
  const { color: color2 } = props;
  if (typeof color2 === "string") {
    style.color = color2;
  } else if (Color.isColorObject(color2)) {
    style.color = color2.initialValue || Color.toRgbString(color2);
  }
}

// ../../../node_modules/popmotion/node_modules/tslib/tslib.es6.js
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

// ../../../node_modules/popmotion/dist/es/utils/clamp.mjs
var clamp4 = (min, max, v) => Math.min(Math.max(v, min), max);

// ../../../node_modules/popmotion/dist/es/animations/utils/find-spring.mjs
var safeMin = 1e-3;
var minDuration2 = 0.01;
var maxDuration2 = 10;
var minDamping2 = 0.05;
var maxDamping2 = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1 }) {
  let envelope;
  let derivative;
  warning(duration <= maxDuration2 * 1e3, "Spring duration must be 10 seconds or less");
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp4(minDamping2, maxDamping2, dampingRatio);
  duration = clamp4(minDuration2, maxDuration2, duration / 1e3);
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
  const undampedFreq = approximateRoot2(envelope, derivative, initialGuess);
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
function approximateRoot2(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

// ../../../node_modules/popmotion/dist/es/animations/generators/spring.mjs
var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys3) {
  return keys3.some((key7) => options[key7] !== void 0);
}
function getSpringOptions(options) {
  let springOptions = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, options);
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    const derived = findSpring(options);
    springOptions = Object.assign(Object.assign(Object.assign({}, springOptions), derived), { velocity: 0, mass: 1 });
    springOptions.isResolvedFromDuration = true;
  }
  return springOptions;
}
function spring2(_a) {
  var { from = 0, to = 1, restSpeed = 2, restDelta } = _a, options = __rest(_a, ["from", "to", "restSpeed", "restDelta"]);
  const state = { done: false, value: from };
  let { stiffness, damping, mass, velocity, duration, isResolvedFromDuration } = getSpringOptions(options);
  let resolveSpring = zero;
  let resolveVelocity = zero;
  function createSpring() {
    const initialVelocity = velocity ? -(velocity / 1e3) : 0;
    const initialDelta = to - from;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1e3;
    if (restDelta === void 0) {
      restDelta = Math.min(Math.abs(to - from) / 100, 0.4);
    }
    if (dampingRatio < 1) {
      const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
      resolveSpring = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
      };
      resolveVelocity = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq + initialDelta * Math.cos(angularFreq * t)) - envelope * (Math.cos(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq * initialDelta * Math.sin(angularFreq * t));
      };
    } else if (dampingRatio === 1) {
      resolveSpring = (t) => to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
    } else {
      const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
      resolveSpring = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        const freqForT = Math.min(dampedAngularFreq * t, 300);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
      };
    }
  }
  createSpring();
  return {
    next: (t) => {
      const current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        const currentVelocity = resolveVelocity(t) * 1e3;
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t >= duration;
      }
      state.value = state.done ? to : current;
      return state;
    },
    flipTarget: () => {
      velocity = -velocity;
      [from, to] = [to, from];
      createSpring();
    }
  };
}
spring2.needsInterpolation = (a, b) => typeof a === "string" || typeof b === "string";
var zero = (_t) => 0;

// ../../../node_modules/popmotion/dist/es/utils/progress.mjs
var progress = (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

// ../../../node_modules/popmotion/dist/es/utils/mix.mjs
var mix2 = (from, to, progress2) => -progress2 * from + progress2 * to + from;

// ../../../node_modules/popmotion/dist/es/utils/hsla-to-rgba.mjs
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

// ../../../node_modules/popmotion/dist/es/utils/mix-color.mjs
var mixLinearColor = (from, to, v) => {
  const fromExpo = from * from;
  const toExpo = to * to;
  return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
var colorTypes = [hex, rgba, hsla];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
var notAnimatable = (color2) => `'${color2}' is not an animatable color. Use the equivalent color code instead.`;
var mixColor = (from, to) => {
  let fromColorType = getColorType(from);
  let toColorType = getColorType(to);
  invariant(!!fromColorType, notAnimatable(from));
  invariant(!!toColorType, notAnimatable(to));
  let fromColor = fromColorType.parse(from);
  let toColor = toColorType.parse(to);
  if (fromColorType === hsla) {
    fromColor = hslaToRgba(fromColor);
    fromColorType = rgba;
  }
  if (toColorType === hsla) {
    toColor = hslaToRgba(toColor);
    toColorType = rgba;
  }
  const blended = Object.assign({}, fromColor);
  return (v) => {
    for (const key7 in blended) {
      if (key7 !== "alpha") {
        blended[key7] = mixLinearColor(fromColor[key7], toColor[key7], v);
      }
    }
    blended.alpha = mix2(fromColor.alpha, toColor.alpha, v);
    return fromColorType.transform(blended);
  };
};

// ../../../node_modules/popmotion/dist/es/utils/inc.mjs
var isNum = (v) => typeof v === "number";

// ../../../node_modules/popmotion/dist/es/utils/pipe.mjs
var combineFunctions = (a, b) => (v) => b(a(v));
var pipe2 = (...transformers) => transformers.reduce(combineFunctions);

// ../../../node_modules/popmotion/dist/es/utils/mix-complex.mjs
function getMixer(origin, target) {
  if (isNum(origin)) {
    return (v) => mix2(origin, target, v);
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
  const output = Object.assign(Object.assign({}, origin), target);
  const blendValue = {};
  for (const key7 in output) {
    if (origin[key7] !== void 0 && target[key7] !== void 0) {
      blendValue[key7] = getMixer(origin[key7], target[key7]);
    }
  }
  return (v) => {
    for (const key7 in blendValue) {
      output[key7] = blendValue[key7](v);
    }
    return output;
  };
};
function analyse2(value) {
  const parsed = complex.parse(value);
  const numValues = parsed.length;
  let numNumbers = 0;
  let numRGB = 0;
  let numHSL = 0;
  for (let i = 0; i < numValues; i++) {
    if (numNumbers || typeof parsed[i] === "number") {
      numNumbers++;
    } else {
      if (parsed[i].hue !== void 0) {
        numHSL++;
      } else {
        numRGB++;
      }
    }
  }
  return { parsed, numNumbers, numRGB, numHSL };
}
var mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyse2(origin);
  const targetStats = analyse2(target);
  const canInterpolate = originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers;
  if (canInterpolate) {
    return pipe2(mixArray(originStats.parsed, targetStats.parsed), template);
  } else {
    warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
    return (p) => `${p > 0 ? target : origin}`;
  }
};

// ../../../node_modules/popmotion/dist/es/utils/interpolate.mjs
var mixNumber = (from, to) => (p) => mix2(from, to, p);
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
}
function createMixers(output, ease, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || detectMixerFactory(output[0]);
  const numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);
    if (ease) {
      const easingFunction = Array.isArray(ease) ? ease[i] : ease;
      mixer = pipe2(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function fastInterpolate([from, to], [mixer]) {
  return (v) => mixer(progress(from, to, v));
}
function slowInterpolate(input, mixers) {
  const inputLength = input.length;
  const lastInputIndex = inputLength - 1;
  return (v) => {
    let mixerIndex = 0;
    let foundMixerIndex = false;
    if (v <= input[0]) {
      foundMixerIndex = true;
    } else if (v >= input[lastInputIndex]) {
      mixerIndex = lastInputIndex - 1;
      foundMixerIndex = true;
    }
    if (!foundMixerIndex) {
      let i = 1;
      for (; i < inputLength; i++) {
        if (input[i] > v || i === lastInputIndex) {
          break;
        }
      }
      mixerIndex = i - 1;
    }
    const progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
    return mixers[mixerIndex](progressInRange);
  };
}
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
  const inputLength = input.length;
  invariant(inputLength === output.length, "Both input and output ranges must be the same length");
  invariant(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.");
  if (input[0] > input[inputLength - 1]) {
    input = [].concat(input);
    output = [].concat(output);
    input.reverse();
    output.reverse();
  }
  const mixers = createMixers(output, ease, mixer);
  const interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
  return isClamp ? (v) => interpolator(clamp4(input[0], input[inputLength - 1], v)) : interpolator;
}

// ../../../node_modules/popmotion/dist/es/easing/utils.mjs
var reverseEasing = (easing) => (p) => 1 - easing(1 - p);
var mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
var createExpoIn = (power) => (p) => Math.pow(p, power);
var createBackIn = (power) => (p) => p * p * ((power + 1) * p - power);
var createAnticipate = (power) => {
  const backEasing = createBackIn(power);
  return (p) => (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
};

// ../../../node_modules/popmotion/dist/es/easing/index.mjs
var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var BOUNCE_FIRST_THRESHOLD = 4 / 11;
var BOUNCE_SECOND_THRESHOLD = 8 / 11;
var BOUNCE_THIRD_THRESHOLD = 9 / 10;
var easeIn2 = createExpoIn(2);
var easeOut2 = reverseEasing(easeIn2);
var easeInOut2 = mirrorEasing(easeIn2);
var circIn2 = (p) => 1 - Math.sin(Math.acos(p));
var circOut2 = reverseEasing(circIn2);
var circInOut2 = mirrorEasing(circOut2);
var backIn2 = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut2 = reverseEasing(backIn2);
var backInOut2 = mirrorEasing(backIn2);
var anticipate2 = createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
var ca = 4356 / 361;
var cb = 35442 / 1805;
var cc = 16061 / 1805;
var bounceOut = (p) => {
  if (p === 1 || p === 0)
    return p;
  const p2 = p * p;
  return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
};
var bounceIn = reverseEasing(bounceOut);

// ../../../node_modules/popmotion/dist/es/animations/generators/keyframes.mjs
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut2).splice(0, values.length - 1);
}
function defaultOffset(values) {
  const numValues = values.length;
  return values.map((_value, i) => i !== 0 ? i / (numValues - 1) : 0);
}
function convertOffsetToTimes(offset, duration) {
  return offset.map((o) => o * duration);
}
function keyframes({ from = 0, to = 1, ease, offset, duration = 300 }) {
  const state = { done: false, value: from };
  const values = Array.isArray(to) ? to : [from, to];
  const times = convertOffsetToTimes(offset && offset.length === values.length ? offset : defaultOffset(values), duration);
  function createInterpolator() {
    return interpolate(times, values, {
      ease: Array.isArray(ease) ? ease : defaultEasing(values, ease)
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
      values.reverse();
      interpolator = createInterpolator();
    }
  };
}

// ../../../node_modules/popmotion/dist/es/animations/generators/decay.mjs
function decay({ velocity = 0, from = 0, power = 0.8, timeConstant: timeConstant2 = 350, restDelta = 0.5, modifyTarget }) {
  const state = { done: false, value: from };
  let amplitude = power * velocity;
  const ideal = from + amplitude;
  const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  if (target !== ideal)
    amplitude = target - from;
  return {
    next: (t) => {
      const delta = -amplitude * Math.exp(-t / timeConstant2);
      state.done = !(delta > restDelta || delta < -restDelta);
      state.value = state.done ? target : target + delta;
      return state;
    },
    flipTarget: () => {
    }
  };
}

// ../../../node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.mjs
var types = { keyframes, spring: spring2, decay };
function detectAnimationFromOptions(config) {
  if (Array.isArray(config.to)) {
    return keyframes;
  } else if (types[config.type]) {
    return types[config.type];
  }
  const keys3 = new Set(Object.keys(config));
  if (keys3.has("ease") || keys3.has("duration") && !keys3.has("dampingRatio")) {
    return keyframes;
  } else if (keys3.has("dampingRatio") || keys3.has("stiffness") || keys3.has("mass") || keys3.has("damping") || keys3.has("restSpeed") || keys3.has("restDelta")) {
    return spring2;
  }
  return keyframes;
}

// ../../../node_modules/framesync/dist/es/on-next-frame.mjs
var defaultTimestep = 1 / 60 * 1e3;
var getCurrentTime = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
var onNextFrame = typeof window !== "undefined" ? (callback) => window.requestAnimationFrame(callback) : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);

// ../../../node_modules/framesync/dist/es/create-render-step.mjs
function createRenderStep(runNextFrame2) {
  let toRun = [];
  let toRunNextFrame = [];
  let numToRun = 0;
  let isProcessing2 = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  const step = {
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
    cancel: (callback) => {
      const index = toRunNextFrame.indexOf(callback);
      if (index !== -1)
        toRunNextFrame.splice(index, 1);
      toKeepAlive.delete(callback);
    },
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

// ../../../node_modules/framesync/dist/es/index.mjs
var maxElapsed = 40;
var useDefaultElapsed = true;
var runNextFrame = false;
var isProcessing = false;
var frame = {
  delta: 0,
  timestamp: 0
};
var stepsOrder = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
];
var steps = stepsOrder.reduce((acc, key7) => {
  acc[key7] = createRenderStep(() => runNextFrame = true);
  return acc;
}, {});
var sync2 = stepsOrder.reduce((acc, key7) => {
  const step = steps[key7];
  acc[key7] = (process13, keepAlive = false, immediate = false) => {
    if (!runNextFrame)
      startLoop();
    return step.schedule(process13, keepAlive, immediate);
  };
  return acc;
}, {});
var cancelSync = stepsOrder.reduce((acc, key7) => {
  acc[key7] = steps[key7].cancel;
  return acc;
}, {});
var flushSync = stepsOrder.reduce((acc, key7) => {
  acc[key7] = () => steps[key7].process(frame);
  return acc;
}, {});
var processStep = (stepId) => steps[stepId].process(frame);
var processFrame = (timestamp) => {
  runNextFrame = false;
  frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
  frame.timestamp = timestamp;
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
var getFrameData = () => frame;
var es_default = sync2;

// ../../../node_modules/popmotion/dist/es/animations/utils/elapsed.mjs
function loopElapsed(elapsed, duration, delay2 = 0) {
  return elapsed - duration - delay2;
}
function reverseElapsed(elapsed, duration, delay2 = 0, isForwardPlayback = true) {
  return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay2) : duration - (elapsed - duration) + delay2;
}
function hasRepeatDelayElapsed(elapsed, duration, delay2, isForwardPlayback) {
  return isForwardPlayback ? elapsed >= duration + delay2 : elapsed <= -delay2;
}

// ../../../node_modules/popmotion/dist/es/animations/index.mjs
var framesync = (update) => {
  const passTimestamp = ({ delta }) => update(delta);
  return {
    start: () => es_default.update(passTimestamp, true),
    stop: () => cancelSync.update(passTimestamp)
  };
};
function animate3(_a) {
  var _b, _c;
  var { from, autoplay = true, driver = framesync, elapsed = 0, repeat: repeatMax = 0, repeatType = "loop", repeatDelay = 0, onPlay, onStop, onComplete, onRepeat, onUpdate } = _a, options = __rest(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to } = options;
  let driverControls;
  let repeatCount = 0;
  let computedDuration = options.duration;
  let latest;
  let isComplete = false;
  let isForwardPlayback = true;
  let interpolateFromNumber;
  const animator = detectAnimationFromOptions(options);
  if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
    interpolateFromNumber = interpolate([0, 100], [from, to], {
      clamp: false
    });
    from = 0;
    to = 100;
  }
  const animation = animator(Object.assign(Object.assign({}, options), { from, to }));
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
    driverControls.stop();
    onComplete && onComplete();
  }
  function update(delta) {
    if (!isForwardPlayback)
      delta = -delta;
    elapsed += delta;
    if (!isComplete) {
      const state = animation.next(Math.max(0, elapsed));
      latest = state.value;
      if (interpolateFromNumber)
        latest = interpolateFromNumber(latest);
      isComplete = isForwardPlayback ? state.done : elapsed <= 0;
    }
    onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
    if (isComplete) {
      if (repeatCount === 0)
        computedDuration !== null && computedDuration !== void 0 ? computedDuration : computedDuration = elapsed;
      if (repeatCount < repeatMax) {
        hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
      } else {
        complete();
      }
    }
  }
  function play() {
    onPlay === null || onPlay === void 0 ? void 0 : onPlay();
    driverControls = driver(update);
    driverControls.start();
  }
  autoplay && play();
  return {
    stop: () => {
      onStop === null || onStop === void 0 ? void 0 : onStop();
      driverControls.stop();
    }
  };
}

// ../../../node_modules/popmotion/dist/es/utils/velocity-per-second.mjs
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}

// ../../../node_modules/popmotion/dist/es/animations/inertia.mjs
function inertia({ from = 0, velocity = 0, min, max, power = 0.8, timeConstant: timeConstant2 = 750, bounceStiffness = 500, bounceDamping = 10, restDelta = 1, modifyTarget, driver, onUpdate, onComplete, onStop }) {
  let currentAnimation;
  function isOutOfBounds(v) {
    return min !== void 0 && v < min || max !== void 0 && v > max;
  }
  function boundaryNearest(v) {
    if (min === void 0)
      return max;
    if (max === void 0)
      return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  }
  function startAnimation2(options) {
    currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
    currentAnimation = animate3(Object.assign(Object.assign({}, options), {
      driver,
      onUpdate: (v) => {
        var _a;
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
        (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
      },
      onComplete,
      onStop
    }));
  }
  function startSpring(options) {
    startAnimation2(Object.assign({ type: "spring", stiffness: bounceStiffness, damping: bounceDamping, restDelta }, options));
  }
  if (isOutOfBounds(from)) {
    startSpring({ from, velocity, to: boundaryNearest(from) });
  } else {
    let target = power * velocity + from;
    if (typeof modifyTarget !== "undefined")
      target = modifyTarget(target);
    const boundary = boundaryNearest(target);
    const heading = boundary === min ? -1 : 1;
    let prev;
    let current;
    const checkBoundary = (v) => {
      prev = current;
      current = v;
      velocity = velocityPerSecond(v - prev, getFrameData().delta);
      if (heading === 1 && v > boundary || heading === -1 && v < boundary) {
        startSpring({ from: v, to: boundary, velocity });
      }
    };
    startAnimation2({
      type: "decay",
      from,
      velocity,
      timeConstant: timeConstant2,
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

// ../../../node_modules/popmotion/dist/es/utils/is-point.mjs
var isPoint = (point) => point.hasOwnProperty("x") && point.hasOwnProperty("y");

// ../../../node_modules/popmotion/dist/es/utils/is-point-3d.mjs
var isPoint3D = (point) => isPoint(point) && point.hasOwnProperty("z");

// ../../../node_modules/popmotion/dist/es/utils/distance.mjs
var distance1D = (a, b) => Math.abs(a - b);
function distance2(a, b) {
  if (isNum(a) && isNum(b)) {
    return distance1D(a, b);
  } else if (isPoint(a) && isPoint(b)) {
    const xDelta = distance1D(a.x, b.x);
    const yDelta = distance1D(a.y, b.y);
    const zDelta = isPoint3D(a) && isPoint3D(b) ? distance1D(a.z, b.z) : 0;
    return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
  }
}

// ../../library/src/render/style/shadow.tsx
import React33 from "react";

// ../../library/src/render/presentation/CustomProperties.tsx
import React32, { PureComponent } from "react";
var VariableRegex = /var\(([^),]+)/;
var CustomPropertiesContext = /* @__PURE__ */ React32.createContext(() => null);
var CustomProperties = class extends PureComponent {
  constructor() {
    super(...arguments);
    this.lookup = (variable) => {
      const match = VariableRegex.exec(variable);
      const customProperty = (match == null ? void 0 : match[1]) ? match[1].trim() : "";
      return this.props.customProperties[customProperty] || null;
    };
  }
  render() {
    const { children, customProperties } = this.props;
    return /* @__PURE__ */ React32.createElement(CustomPropertiesContext.Provider, { value: this.lookup }, /* @__PURE__ */ React32.createElement("div", { style: customProperties }, children));
  }
};

// ../../library/src/render/types/Shadow.ts
var shadowKeys = ["color", "x", "y", "blur"];
var Shadow = {
  is: (shadow) => {
    return shadow && shadowKeys.every((key7) => key7 in shadow);
  }
};
var boxShadowKeys = ["x", "y", "color", "inset", "blur", "spread"];
var BoxShadow = {
  is: (shadow) => {
    return shadow && boxShadowKeys.every((key7) => key7 in shadow);
  },
  toCSS: (shadow) => {
    const inset = shadow.inset ? "inset " : "";
    return `${inset}${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`;
  }
};

// ../../library/src/render/style/shadow.tsx
function shadowsAsFilter(shadows) {
  const filters = [];
  if (shadows && shadows.length) {
    const dropShadows = shadows.map((shadowItem) => {
      return `drop-shadow(${shadowItem.x}px ${shadowItem.y}px ${shadowItem.blur}px ${shadowItem.color})`;
    });
    filters.push(...dropShadows);
  }
  return filters;
}
function collectTextShadowsForProps(props, style) {
  if (!props.shadows || props.shadows.length === 0)
    return;
  const textShadow = props.shadows.map((shadow) => {
    return `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.color}`;
  }).join(", ");
  if (!textShadow)
    return;
  style.textShadow = textShadow;
}
function collectBoxShadowsForProps(props, style) {
  if (!props.shadows || props.shadows.length === 0)
    return;
  const boxShadow = props.shadows.map((shadowItem) => BoxShadow.toCSS(shadowItem)).join(", ");
  if (!boxShadow)
    return;
  style.boxShadow = boxShadow;
}
function shadowForShape(boxShadows, rect, shapeId, fillAlpha, strokeAlpha, strokeWidth, strokeClipId, svgStrokeAttributes) {
  const definition = [];
  let outsetElement = null;
  let insetElement = null;
  const needsStrokeClip = false;
  const shadows = [];
  const insetShadows = [];
  const boxShadowsCount = boxShadows.length;
  const svgShadowClass = "svg-shadow";
  const svgShadowProps = RenderTarget.current() === "CANVAS" /* canvas */ ? { className: svgShadowClass } : {};
  for (const shadow of boxShadows) {
    shadow.inset ? insetShadows.push(shadow) : shadows.push(shadow);
  }
  if (shadows.length > 0) {
    shadows.reverse();
    const outsideShadowId = shapeId.add("_shadow_out");
    const normalizedFrame = Rect.atOrigin(rect);
    const shadowRects = [normalizedFrame];
    for (const shadow of shadows) {
      const shadowFrame = localShadowFrame(shadow, normalizedFrame, true);
      if (shadowFrame === null) {
        continue;
      }
      shadowRects.push(shadowFrame);
    }
    let maxBlur = 0;
    const filterElements = [];
    const mergeElements = [];
    for (let i = 0, il = shadows.length; i < il; i++) {
      const shadow = shadows[i];
      if (!shadow)
        continue;
      const shadowElements = outerShadowElements(shapeId, shadow, i);
      maxBlur = Math.max(maxBlur, shadow.blur);
      filterElements.push(shadowElements.filterElements);
      mergeElements.push(shadowElements.mergeElement);
    }
    let expandStrokeWidth = strokeWidth;
    if (!isFiniteNumber(expandStrokeWidth))
      expandStrokeWidth = 0;
    let miter = svgStrokeAttributes.strokeMiterlimit;
    if (!isFiniteNumber(miter))
      miter = 4;
    let shadowRect = Rect.merge(...shadowRects);
    shadowRect = Rect.inflate(shadowRect, (expandStrokeWidth * miter / 2 + maxBlur) * 1.1);
    const width = rect.width + (strokeWidth ? strokeWidth / 2 : 0.1);
    const height = rect.height + (strokeWidth ? strokeWidth / 2 : 0.1);
    const filterX = shadowRect.x / width * 100;
    const filterY = shadowRect.y / height * 100;
    const filterWidth = shadowRect.width / width * 100;
    const filterHeight = shadowRect.height / height * 100;
    definition.push(
      /* @__PURE__ */ React33.createElement(
        "filter",
        {
          key: outsideShadowId.id,
          id: outsideShadowId.id,
          x: `${filterX.toFixed(1)}%`,
          y: `${filterY.toFixed(1)}%`,
          width: `${filterWidth.toFixed(1)}%`,
          height: `${filterHeight.toFixed(1)}%`,
          filterUnits: "objectBoundingBox",
          ...svgShadowProps
        },
        filterElements,
        shadows.length > 1 ? /* @__PURE__ */ React33.createElement("feMerge", null, mergeElements) : null
      )
    );
    outsetElement = /* @__PURE__ */ React33.createElement("g", { filter: outsideShadowId.urlLink, ...svgShadowProps }, /* @__PURE__ */ React33.createElement(
      "use",
      {
        ...svgStrokeAttributes,
        fill: "black",
        fillOpacity: fillAlpha <= 0 ? 0 : 1,
        stroke: "black",
        strokeOpacity: strokeAlpha <= 0 ? 0 : 1,
        strokeWidth: strokeAlpha > 0 ? strokeWidth : 0,
        xlinkHref: shapeId.link,
        clipPath: strokeClipId.urlLink
      }
    ));
  }
  if (insetShadows.length) {
    insetShadows.reverse();
    const insideShadowId = shapeId.add("_shadow_inside");
    const normalizedFrame = Rect.atOrigin(rect);
    const shadowFrames = [normalizedFrame];
    for (const shadow of insetShadows) {
      const shadowFrame = localShadowFrame(shadow, normalizedFrame, true);
      if (shadowFrame === null) {
        continue;
      }
      shadowFrames.push(shadowFrame);
    }
    const shadowRect = Rect.merge(...shadowFrames);
    const width = rect.width + (strokeWidth ? strokeWidth / 2 : 0.1);
    const height = rect.height + (strokeWidth ? strokeWidth / 2 : 0.1);
    const filterX = shadowRect.x / width * 100;
    const filterY = shadowRect.y / height * 100;
    const filterWidth = shadowRect.width / width * 100;
    const filterHeight = shadowRect.height / height * 100;
    const filterElements = [];
    const mergeElements = [];
    for (let i = 0, il = insetShadows.length; i < il; i++) {
      const shadow = insetShadows[i];
      if (!shadow)
        continue;
      const shadowElements = innerShadowElements(shapeId, shadow, i);
      filterElements.push(shadowElements.filterElements);
      mergeElements.push(shadowElements.mergeElement);
    }
    definition.push(
      /* @__PURE__ */ React33.createElement(
        "filter",
        {
          key: insideShadowId.id,
          id: insideShadowId.id,
          x: `${filterX.toFixed(1)}%`,
          y: `${filterY.toFixed(1)}%`,
          width: `${filterWidth.toFixed(1)}%`,
          height: `${filterHeight.toFixed(1)}%`,
          filterUnits: "objectBoundingBox",
          ...svgShadowProps
        },
        filterElements,
        insetShadows.length > 1 ? /* @__PURE__ */ React33.createElement("feMerge", null, mergeElements) : null
      )
    );
    let clipPath;
    if (needsStrokeClip) {
      clipPath = strokeClipId.urlLink;
    }
    insetElement = /* @__PURE__ */ React33.createElement(
      "use",
      {
        fill: "black",
        fillOpacity: "1",
        filter: insideShadowId.urlLink,
        xlinkHref: shapeId.link,
        clipPath,
        ...svgShadowProps
      }
    );
  }
  return { definition, outsetElement, insetElement, needsStrokeClip };
}
function outerShadowElements(shapeID, shadow, index) {
  const shadowKey = shapeID.add("_outer_shadow" + index);
  const offsetResultId = shadowKey.add("offset").id;
  const blurResultId = shadowKey.add("blur").id;
  const matrixResultId = shadowKey.add("matrix").id;
  const filterElements = /* @__PURE__ */ React33.createElement(
    OuterShadowFilterElements,
    {
      key: shadowKey.id + "-filters",
      shadow,
      blurId: blurResultId,
      offsetId: offsetResultId,
      matrixId: matrixResultId
    }
  );
  const mergeElement = /* @__PURE__ */ React33.createElement("feMergeNode", { key: shadowKey.id + "-merge", in: matrixResultId });
  return { filterElements, mergeElement };
}
var OuterShadowFilterElements = (props) => {
  const lookup = React33.useContext(CustomPropertiesContext);
  const { shadow, blurId, offsetId, matrixId } = props;
  let color2 = shadow.color;
  const result = lookup(color2);
  if (result) {
    color2 = result;
  }
  const rgb = ConvertColor.toRgb(color2);
  const r = roundedNumberString(rgb.r / 255, 3);
  const g = roundedNumberString(rgb.g / 255, 3);
  const b = roundedNumberString(rgb.b / 255, 3);
  const matrixValues = `0 0 0 0 ${r}   0 0 0 0 ${g}   0 0 0 0 ${b}  0 0 0 ${rgb.a} 0`;
  return /* @__PURE__ */ React33.createElement(React33.Fragment, null, /* @__PURE__ */ React33.createElement("feOffset", { dx: shadow.x, dy: shadow.y, in: "SourceAlpha", result: offsetId }), /* @__PURE__ */ React33.createElement("feGaussianBlur", { stdDeviation: shadow.blur / 2, in: offsetId, result: blurId }), /* @__PURE__ */ React33.createElement(
    "feColorMatrix",
    {
      colorInterpolationFilters: "sRGB",
      values: matrixValues,
      type: "matrix",
      in: blurId,
      result: matrixId
    }
  ));
};
function innerShadowElements(shapeID, shadow, index) {
  const shadowKey = shapeID.add("_inside_shadow" + index);
  const blurId = shadowKey.add("blur").id;
  const offsetId = shadowKey.add("offset").id;
  const compositeId = shadowKey.add("composite").id;
  const matrixId = shadowKey.add("matrix").id;
  const filterElements = /* @__PURE__ */ React33.createElement(
    InnerShadowFilterElements,
    {
      key: shadowKey.id + "-filters",
      shadow,
      blurId,
      offsetId,
      compositeId,
      matrixId
    }
  );
  const mergeElement = /* @__PURE__ */ React33.createElement("feMergeNode", { key: shadowKey.id + "-merge", in: matrixId });
  return { filterElements, mergeElement };
}
var InnerShadowFilterElements = (props) => {
  const lookup = React33.useContext(CustomPropertiesContext);
  const { shadow, blurId, offsetId, compositeId, matrixId } = props;
  let color2 = shadow.color;
  const result = lookup(color2);
  if (result) {
    color2 = result;
  }
  const rgb = ConvertColor.toRgb(color2);
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  const matrixValues = `0 0 0 0 ${r}   0 0 0 0 ${g}   0 0 0 0 ${b}  0 0 0 ${rgb.a} 0`;
  return /* @__PURE__ */ React33.createElement(React33.Fragment, null, /* @__PURE__ */ React33.createElement("feGaussianBlur", { stdDeviation: shadow.blur / 2, in: "SourceAlpha", result: blurId }), /* @__PURE__ */ React33.createElement("feOffset", { dx: shadow.x, dy: shadow.y, in: blurId, result: offsetId }), /* @__PURE__ */ React33.createElement("feComposite", { in: offsetId, in2: "SourceAlpha", operator: "arithmetic", k2: "-1", k3: "1", result: compositeId }), /* @__PURE__ */ React33.createElement(
    "feColorMatrix",
    {
      colorInterpolationFilters: "sRGB",
      values: matrixValues,
      type: "matrix",
      in: compositeId,
      result: matrixId
    }
  ));
};
function calcMaxRealisticShadowBlur(distance3, focus) {
  return interpolate([0, 0.5, 1], [distance3 * 5, distance3, 0])(focus);
}
var maxSpread = 5;
function calcRealisticShadowSpread(diffusion) {
  return mix2(-maxSpread, 0, diffusion);
}
function localShadowFrame(shadow, frame2, isSVG2 = false) {
  if (!isSVG2 && shadow["inset"])
    return null;
  let growth = shadow.blur;
  let minX;
  let maxX;
  let minY;
  let maxY;
  if (isSVG2) {
    minX = -Math.abs(shadow.x) - growth;
    maxX = Math.abs(shadow.x) + frame2.width + growth;
    minY = -Math.abs(shadow.y) - growth;
    maxY = Math.abs(shadow.y) + frame2.height + growth;
  } else if (BoxShadow.is(shadow) && shadow.type === "realistic") {
    growth = calcMaxRealisticShadowBlur(distance2(shadow.x, shadow.y), shadow.focus) + calcRealisticShadowSpread(shadow.diffusion);
    if (shadow.x >= 0) {
      minX = 0 - growth;
      maxX = shadow.x + frame2.width + growth;
    } else {
      minX = shadow.x - growth;
      maxX = frame2.width + growth;
    }
    if (shadow.y >= 0) {
      minY = 0 - growth;
      maxY = shadow.y + frame2.height + growth;
    } else {
      minY = shadow.y - growth;
      maxY = frame2.height + growth;
    }
  } else {
    growth += shadow.spread;
    minX = shadow.x - growth;
    maxX = shadow.x + frame2.width + growth;
    minY = shadow.y - growth;
    maxY = shadow.y + frame2.height + growth;
  }
  if (maxX <= minX || maxY <= minY)
    return null;
  return { x: minX, y: minY, width: maxX - minX, height: maxY - minY };
}

// ../../library/src/render/utils/filtersForNode.ts
function collectLayerFilters(props, style) {
  const filters = [];
  if (isFiniteNumber(props.brightness)) {
    filters.push(`brightness(${props.brightness / 100})`);
  }
  if (isFiniteNumber(props.contrast)) {
    filters.push(`contrast(${props.contrast / 100})`);
  }
  if (isFiniteNumber(props.grayscale)) {
    filters.push(`grayscale(${props.grayscale / 100})`);
  }
  if (isFiniteNumber(props.hueRotate)) {
    filters.push(`hue-rotate(${props.hueRotate}deg)`);
  }
  if (isFiniteNumber(props.invert)) {
    filters.push(`invert(${props.invert / 100})`);
  }
  if (isFiniteNumber(props.saturate)) {
    filters.push(`saturate(${props.saturate / 100})`);
  }
  if (isFiniteNumber(props.sepia)) {
    filters.push(`sepia(${props.sepia / 100})`);
  }
  if (isFiniteNumber(props.blur)) {
    filters.push(`blur(${props.blur}px)`);
  }
  if (props.dropShadows) {
    filters.push(...shadowsAsFilter(props.dropShadows));
  }
  if (filters.length === 0)
    return;
  style.filter = style.WebkitFilter = filters.join(" ");
}
function collectBackgroundFilters(props, style) {
  if (isFiniteNumber(props.backgroundBlur)) {
    style.backdropFilter = style.WebkitBackdropFilter = `blur(${props.backgroundBlur}px)`;
  }
}
function collectFiltersFromProps(props, style) {
  collectBackgroundFilters(props, style);
  collectLayerFilters(props, style);
}

// ../../library/src/render/style/collectVisualStyleFromProps.ts
function collectVisualStyleFromProps(props, style, isTextNode = false) {
  collectBackgroundFromProps(props, style);
  collectRadiusFromProps(props, style);
  collectFiltersFromProps(props, style);
  collectBlendingFromProps(props, style);
  collectOverflowFromProps(props, style);
  collectOpacityFromProps(props, style);
  collectTextColorFromProps(props, style);
  if (isTextNode) {
    collectTextShadowsForProps(props, style);
  } else {
    collectBoxShadowsForProps(props, style);
  }
}

// ../../library/src/render/traits/Transform.ts
var { getNumber } = Animatable;
var transformDefaults = {
  z: 0,
  rotation: 0,
  rotationX: 0,
  rotationY: 0,
  rotationZ: 0,
  scale: 1,
  scaleX: 1,
  scaleY: 1,
  scaleZ: 1,
  skew: 0,
  skewX: 0,
  skewY: 0,
  originX: 0.5,
  originY: 0.5,
  originZ: 0
};
function getRotation(rotation, rotate) {
  if (typeof rotate === "string") {
    rotate = parseFloat(rotate);
  }
  return isFiniteNumber(rotate) ? rotate : getNumber(rotation);
}
function collectTransformFromProps(props, rect, style) {
  const motionStyle = style;
  const x = typeof rect.x === "number" ? `${rect.x}px` : rect.x;
  const y = typeof rect.y === "number" ? `${rect.y}px` : rect.y;
  const z = getNumber(props.z);
  const scaleZ = getNumber(props.scaleZ);
  const originZ = getNumber(props.originZ);
  const rotationZ = getRotation(props.rotationZ, resolveMotionValue(motionStyle.rotateZ));
  const rotationX = getRotation(props.rotationX, resolveMotionValue(motionStyle.rotateX));
  const rotationY = getRotation(props.rotationY, resolveMotionValue(motionStyle.rotateY));
  const scale2 = getNumber(props.scale);
  const scaleX = getNumber(props.scaleX);
  const scaleY = getNumber(props.scaleY);
  const skew = getNumber(props.skew);
  const skewX = getNumber(props.skewX);
  const skewY = getNumber(props.skewY);
  const rotation = getRotation(props.rotation, resolveMotionValue(motionStyle.rotate));
  const force3d = RenderEnvironment.target === "EXPORT" /* export */;
  if (force3d || z !== 0 || scaleZ !== 1 || originZ !== 0 || rotationZ !== 0 || rotationX !== 0 || rotationY !== 0) {
    style.transform = `
            ${`translate3d(${x}, ${y}, ${z}px)`}
            scale3d(${scaleX * scale2}, ${scaleY * scale2}, ${scaleZ})
            skew(${skew}deg,${skew}deg)
            skewX(${skewX}deg)
            skewY(${skewY}deg)
            translateZ(${originZ}px)
            rotateX(${rotationX}deg)
            rotateY(${rotationY}deg)
            rotateZ(${(rotation + rotationZ).toFixed(4)}deg)
            translateZ(${-originZ}px)`;
  } else {
    style.transform = `
            ${`translate(${x}, ${y})`}
            scale(${scaleX * scale2}, ${scaleY * scale2})
            skew(${skew}deg,${skew}deg)
            skewX(${skewX}deg)
            skewY(${skewY}deg)
            rotate(${rotation.toFixed(4)}deg)`;
  }
  const transformOrigin = `${getNumber(props.originX) * 100}% ${getNumber(props.originY) * 100}%`;
  style.transformOrigin = transformOrigin;
  style.WebkitTransformOrigin = transformOrigin;
}

// ../../library/src/render/presentation/Frame/DeprecatedFrame.tsx
function cssBackgroundSize(size2) {
  switch (size2) {
    case "fit":
      return "contain";
    case "stretch":
      return "100% 100%";
    default:
      return "cover";
  }
}
function collectBackgroundImageFromProps(props, style) {
  const image = backgroundImageFromProps(props);
  if (image) {
    style.backgroundImage = `url("${image.src}")`;
    style.backgroundSize = cssBackgroundSize(image.fit);
    style.backgroundRepeat = "no-repeat";
    style.backgroundPosition = "center";
  }
}
function toPixelString(value) {
  return isFiniteNumber(value) ? `${value}px` : value;
}
function applyLayoutProp(style, props, key7) {
  if (props[key7] !== void 0) {
    const value = Animatable.get(props[key7], void 0);
    style[key7] = toPixelString(value);
  }
}
var DeprecatedFrame = /* @__PURE__ */ (() => {
  const _DeprecatedFrameInner = class extends Layer {
    constructor() {
      super(...arguments);
      this.element = null;
      this.imageDidChange = false;
      this.state = {
        size: null
      };
      this.updateStyle = () => {
        if (!this.element) {
          return;
        }
        Object.assign(this.element.style, this.getStyle());
      };
      this.setElement = (element) => {
        this.element = element;
        this.setLayerElement(element);
      };
      this.onPropsChange = (props) => {
        const rect = _DeprecatedFrameInner.rect(Animatable.objectToValues(props.value));
        if (this.state.size && isAnimatable(this.state.size.width) && isAnimatable(props.value.width)) {
          this.state.size.width.set(rect.width);
        }
        if (this.state.size && isAnimatable(this.state.size.height) && isAnimatable(props.value.height)) {
          this.state.size.height.set(rect.height);
        }
        this.updateStyle();
      };
      this.onSizeChange = () => {
        this.updateStyle();
      };
    }
    static rect(props) {
      const constraintValues = ConstraintValues.fromProperties(props);
      const parentSizeInfo = props.parentSize ? { sizing: props.parentSize, positioning: props.parentSize } : null;
      return ConstraintValues.toRect(constraintValues, parentSizeInfo, null, true);
    }
    get rect() {
      return _DeprecatedFrameInner.rect(this.props);
    }
    static getDerivedStateFromProps(nextProps, prevState) {
      const size2 = _DeprecatedFrameInner.updatedSize(nextProps, prevState);
      const { target } = RenderEnvironment;
      const nextBackgroundImageSrc = nextProps.background && BackgroundImage.isImageObject(nextProps.background) ? nextProps.background.src : null;
      if (nextBackgroundImageSrc) {
        return {
          size: size2
        };
      }
      if (prevState.size) {
        if (target === "PREVIEW" /* preview */) {
          return null;
        }
        if (prevState.size.width === size2.width && prevState.size.height === size2.height) {
          return null;
        }
      }
      return {
        size: size2
      };
    }
    static updatedSize(props, state) {
      const rect = _DeprecatedFrameInner.rect(props);
      let size2 = state.size;
      const newSize = { width: rect.width, height: rect.height };
      const { target } = RenderEnvironment;
      if (!size2) {
        if (target === "PREVIEW" /* preview */) {
          size2 = ObservableObject(newSize, true);
        } else {
          size2 = newSize;
        }
      } else {
        if (isAnimatable(size2.width) && isAnimatable(size2.height)) {
          size2.width.set(newSize.width);
          size2.height.set(newSize.height);
        } else {
          size2 = newSize;
        }
      }
      return size2;
    }
    getStyle() {
      const rect = this.rect;
      const style = {
        display: "block",
        position: "absolute",
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        pointerEvents: void 0,
        // TODO: this should be "none" for non-event consuming instances, for performance.
        userSelect: "none"
      };
      let left = Animatable.get(this.props.left, void 0);
      let top = Animatable.get(this.props.top, void 0);
      Object.assign(style, this.props._initialStyle);
      const hasParentSize = this.context.parentSize !== 1 /* Disabled */;
      const perspective = Animatable.get(this.props.perspective, void 0);
      style.perspective = perspective;
      style.WebkitPerspective = perspective;
      let backfaceVisibility = void 0;
      const backfaceVisible = Animatable.get(this.props.backfaceVisible, void 0);
      if (backfaceVisible === true) {
        backfaceVisibility = "visible";
      } else if (backfaceVisible === false) {
        backfaceVisibility = "hidden";
      }
      style.backfaceVisibility = backfaceVisibility;
      style.WebkitBackfaceVisibility = backfaceVisibility;
      const preserve3d = Animatable.get(this.props.preserve3d, void 0);
      if (preserve3d === true) {
        style.transformStyle = "preserve-3d";
      } else if (preserve3d === false) {
        style.transformStyle = "flat";
      }
      if (!hasParentSize) {
        applyLayoutProp(style, this.props, "right");
        applyLayoutProp(style, this.props, "bottom");
        const width = Animatable.get(this.props.width, void 0);
        const stringWidth = toPixelString(width);
        const height = Animatable.get(this.props.height, void 0);
        const stringHeight = toPixelString(height);
        if (typeof left === "string" && left.endsWith("%") && this.props.right === null) {
          left = `calc(${left} - calc(${stringWidth}} / 2))`;
          style.width = stringWidth;
        }
        if (typeof top === "string" && top.endsWith("%") && this.props.bottom === null) {
          top = `calc(${top} - calc(${stringHeight} / 2))`;
          style.height = stringHeight;
        }
        if (top !== void 0 && style.bottom !== void 0) {
          style.height = void 0;
          top = toPixelString(Animatable.get(this.props.top, void 0));
        } else {
          style.height = stringHeight;
        }
        if (left !== void 0 && style.right !== void 0) {
          style.width = void 0;
          left = toPixelString(Animatable.get(this.props.left, void 0));
        } else {
          style.width = stringWidth;
        }
      }
      const transformRect = { ...rect };
      if (typeof left !== "undefined") {
        transformRect.x = left;
      }
      if (typeof top !== "undefined") {
        transformRect.y = top;
      }
      collectTransformFromProps(this.props, transformRect, style);
      collectVisualStyleFromProps(this.props, style);
      collectBackgroundImageFromProps(this.props, style);
      Layer.applyWillChange(this.props, style, false);
      if (this.props.style) {
        Object.assign(style, this.props.style);
      }
      return style;
    }
    componentDidMount() {
      const { target } = RenderEnvironment;
      if (target === "PREVIEW" /* preview */) {
        this.propsObserver = ObservableObject(this.props, true);
        this.propsObserverCancel = ObservableObject.addObserver(this.propsObserver, this.onPropsChange);
        if (this.props.parentSize && isAnimatable(this.props.parentSize.width) && isAnimatable(this.props.parentSize.height)) {
          this.sizeObserver = ObservableObject(this.props.parentSize, true);
          this.sizeObserverCancel = ObservableObject.addObserver(this.sizeObserver, this.onSizeChange);
        }
      }
    }
    componentDidUpdate() {
      const { target } = RenderEnvironment;
      this.propsObserverCancel && this.propsObserverCancel();
      this.sizeObserverCancel && this.sizeObserverCancel();
      if (target === "PREVIEW" /* preview */) {
        this.propsObserver = ObservableObject(this.props, true);
        this.propsObserverCancel = ObservableObject.addObserver(this.propsObserver, this.onPropsChange);
        if (this.props.parentSize && isAnimatable(this.props.parentSize.width) && isAnimatable(this.props.parentSize.height)) {
          this.sizeObserver = ObservableObject(this.props.parentSize, true);
          this.sizeObserverCancel = ObservableObject.addObserver(this.sizeObserver, this.onSizeChange);
        }
      }
    }
    componentWillUnmount() {
      this.propsObserverCancel && this.propsObserverCancel();
      this.propsObserverCancel = void 0;
      this.sizeObserverCancel && this.sizeObserverCancel();
      this.sizeObserverCancel = void 0;
    }
    render() {
      if (import_process4.default.env.NODE_ENV !== "production" && safeWindow["perf"])
        safeWindow["perf"].nodeRender();
      const { visible, id, className } = this.props;
      if (!visible) {
        return null;
      }
      const style = this.getStyle();
      const rect = this.rect;
      const parentSize = { width: rect.width, height: rect.height };
      return /* @__PURE__ */ React34.createElement("div", { id, style, ref: this.setElement, className }, /* @__PURE__ */ React34.createElement(ProvideParentSize, { parentSize }, this.layoutChildren()), /* @__PURE__ */ React34.createElement(Border, { ...this.props }));
    }
    layoutChildren() {
      let _forwardedOverrides = this.props._forwardedOverrides;
      const extractions = this.props._overrideForwardingDescription;
      if (extractions) {
        let added = false;
        _forwardedOverrides = {};
        for (const [key7, value] of Object.entries(extractions)) {
          added = true;
          _forwardedOverrides[key7] = this.props[value];
        }
        if (!added) {
          _forwardedOverrides = void 0;
        }
      }
      let children = React34.Children.map(this.props.children, (child) => {
        if (isConstraintSupportingChild(child)) {
          return React34.cloneElement(child, {
            parentSize: this.state.size,
            _forwardedOverrides
          });
        } else if (_forwardedOverrides && child) {
          return React34.cloneElement(child, { _forwardedOverrides });
        } else {
          return child;
        }
      });
      if (children && children.length === 1 && typeof children[0] === "string") {
        children = [/* @__PURE__ */ React34.createElement(Center, { key: "0" }, children)];
      }
      return children;
    }
  };
  let DeprecatedFrameInner = _DeprecatedFrameInner;
  DeprecatedFrameInner.supportsConstraints = true;
  DeprecatedFrameInner.defaultFrameSpecificProps = {
    ...constraintDefaults,
    ...transformDefaults,
    opacity: 1,
    background: Color("rgba(0, 170, 255, 0.3)"),
    visible: true,
    borderWidth: 0,
    borderColor: "#222",
    borderStyle: "solid"
  };
  DeprecatedFrameInner.defaultProps = {
    ...Layer.defaultProps,
    ..._DeprecatedFrameInner.defaultFrameSpecificProps
  };
  DeprecatedFrameInner.contextType = ConstraintsContext;
  return DeprecatedFrameInner;
})();
function Center(props) {
  const style = Object.assign(
    {},
    {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Helvetica"
    },
    props.style || {}
  );
  return /* @__PURE__ */ React34.createElement("div", { style }, props.children);
}

// ../../library/src/render/presentation/Frame/isDeprecatedFrameProps.ts
var frameWithMotionPropsFields = [
  "_border",
  "_constraints",
  "animate",
  "initial",
  "variants",
  "transition",
  "inherit",
  "center",
  "initial",
  "transformTemplate",
  "transformValues",
  "animate",
  "variants",
  "transition",
  "onUpdate",
  "onAnimationComplete",
  "onPanSessionStart",
  "onTapCancel",
  "whileTap",
  "whileHover",
  "onHoverStart",
  "onHoverEnd",
  "drag",
  "dragDirectionLock",
  "dragPropagation",
  "dragConstraints",
  "dragElastic",
  "dragMomentum",
  "dragTransition",
  "onDragStart",
  "onDragEnd",
  "onDrag",
  "onDirectionLock",
  "onDragTransitionEnd",
  "x",
  "y",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "position",
  "border",
  "borderRadius",
  "shadow",
  "size"
];
var deprecatedFramePropsFields = [
  "autoSize",
  "aspectRatio",
  "borderWidth",
  "borderStyle",
  "borderColor",
  "centerX",
  "centerY"
];
function isDeprecatedFrameProps(props) {
  let field;
  for (const propKey in props) {
    if (isAnimatable(props[propKey]))
      return true;
  }
  for (field of frameWithMotionPropsFields) {
    if (props.hasOwnProperty(field))
      return false;
  }
  for (field of deprecatedFramePropsFields) {
    if (props.hasOwnProperty(field))
      return true;
  }
  return false;
}

// ../../library/src/render/presentation/Frame/index.tsx
var DeprecatedFrameWithEvents = /* @__PURE__ */ WithEvents(DeprecatedFrame);
var Frame = /* @__PURE__ */ (() => {
  const FrameInner = forwardRef2(function FrameInner2(props, ref) {
    const parentSize = useParentSize();
    if (isDeprecatedFrameProps(props)) {
      const currentParentSize = props.parentSize || deprecatedParentSize(parentSize);
      return /* @__PURE__ */ React35.createElement(DeprecatedFrameWithEvents, { ...props, parentSize: currentParentSize });
    }
    return /* @__PURE__ */ React35.createElement(FrameWithMotion, { ...props, ref });
  });
  FrameInner["displayName"] = "Frame";
  return FrameInner;
})();

// ../../library/src/components/Draggable.ts
var Draggable = /* @__PURE__ */ WithDragging(DeprecatedFrameWithEvents);

// ../../library/src/components/Navigation.tsx
import React43, { Component as Component6 } from "react";

// ../../library/src/components/AnimateLayout/SharedLayoutRoot.tsx
import React36, { Component as Component4 } from "react";
var TREE_ROOT_ID = "__LAYOUT_TREE_ROOT";
var SharedLayoutContext = /* @__PURE__ */ React36.createContext({
  schedulePromoteTree: () => {
  },
  scheduleProjectionDidUpdate: () => {
  },
  initLead: () => {
  }
});
var SharedLayoutRoot = class extends Component4 {
  constructor() {
    super(...arguments);
    this.shouldAnimate = false;
    this.scheduledPromotion = false;
    this.scheduledDidUpdate = false;
    this.scheduleProjectionDidUpdate = () => {
      this.scheduledDidUpdate = true;
    };
    // schedule a promotion to run later in getSnapshotBeforeUpdate
    this.schedulePromoteTree = (tree, transition, shouldAnimate) => {
      this.follow = this.lead;
      this.shouldAnimate = shouldAnimate;
      this.lead = tree;
      this.transition = transition;
      this.scheduledPromotion = true;
    };
    this.initLead = (tree, shouldAnimate) => {
      this.follow = this.lead;
      this.lead = tree;
      if (this.follow && shouldAnimate) {
        this.follow.layoutMaybeMutated = true;
      }
    };
    this.sharedLayoutContext = {
      schedulePromoteTree: this.schedulePromoteTree,
      scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
      initLead: this.initLead
    };
  }
  // Runs after all descendent SharedLayoutTree finish taking snapshots in
  // their getSnapshotBeforeUpdate lifecycle method.
  getSnapshotBeforeUpdate() {
    var _a;
    if (!this.scheduledPromotion || !this.lead || !this.follow)
      return null;
    const needsReset = !!((_a = this.lead) == null ? void 0 : _a.layoutMaybeMutated) && !this.shouldAnimate;
    this.lead.projectionNodes.forEach((projectionNode) => {
      var _a2;
      projectionNode == null ? void 0 : projectionNode.promote({
        needsReset,
        transition: this.shouldAnimate ? this.transition : void 0,
        preserveFollowOpacity: projectionNode.options.layoutId === TREE_ROOT_ID && !((_a2 = this.follow) == null ? void 0 : _a2.isExiting)
      });
    });
    if (this.shouldAnimate) {
      this.follow.layoutMaybeMutated = true;
    } else {
      this.scheduleProjectionDidUpdate();
    }
    this.lead.layoutMaybeMutated = false;
    this.transition = void 0;
    this.scheduledPromotion = false;
    return null;
  }
  componentDidUpdate() {
    var _a, _b;
    if (!this.lead)
      return null;
    if (this.scheduledDidUpdate) {
      (_b = (_a = this.lead.rootProjectionNode) == null ? void 0 : _a.root) == null ? void 0 : _b.didUpdate();
      this.scheduledDidUpdate = false;
    }
  }
  render() {
    return /* @__PURE__ */ React36.createElement(SharedLayoutContext.Provider, { value: this.sharedLayoutContext }, this.props.children);
  }
};

// ../../library/src/components/MagicMotionCrossfadeRoot.tsx
import React37 from "react";
var rootStyles = {
  width: "100%",
  height: "100%",
  backgroundColor: "none"
};
function MagicMotionCrossfadeRoot(props) {
  return /* @__PURE__ */ React37.createElement(motion.div, { layoutId: TREE_ROOT_ID, style: rootStyles }, props.children);
}

// ../../library/src/components/NavigationContainer.tsx
import React42, { useContext as useContext8, useEffect as useEffect5, useRef as useRef6 } from "react";

// ../../library/src/modules/useAppearEffect.ts
import React38 from "react";
var _sharedIntersectionObserver, _callbacks2;
var SharedIntersectionObserver = class {
  constructor(options) {
    __privateAdd(this, _sharedIntersectionObserver, void 0);
    __privateAdd(this, _callbacks2, /* @__PURE__ */ new WeakMap());
    if (!document)
      return;
    __privateSet(this, _sharedIntersectionObserver, new IntersectionObserver(this.resizeObserverCallback.bind(this), options));
  }
  resizeObserverCallback(entries, observer) {
    for (const entry of entries) {
      const callbackForElement = __privateGet(this, _callbacks2).get(entry.target);
      if (callbackForElement)
        callbackForElement([entry], observer);
    }
  }
  observeElementWithCallback(element, callback) {
    if (!__privateGet(this, _sharedIntersectionObserver))
      return;
    __privateGet(this, _sharedIntersectionObserver).observe(element);
    __privateGet(this, _callbacks2).set(element, callback);
  }
  unobserve(element) {
    if (!__privateGet(this, _sharedIntersectionObserver))
      return;
    __privateGet(this, _sharedIntersectionObserver).unobserve(element);
    __privateGet(this, _callbacks2).delete(element);
  }
  get root() {
    var _a;
    return (_a = __privateGet(this, _sharedIntersectionObserver)) == null ? void 0 : _a.root;
  }
};
_sharedIntersectionObserver = new WeakMap();
_callbacks2 = new WeakMap();
var SharedIntersectionObserverContext = /* @__PURE__ */ React38.createContext(/* @__PURE__ */ new Map());
function useSharedIntersectionObserver(ref, callback, options) {
  const key7 = useConstant(() => `${options.rootMargin}`);
  const observers = React38.useContext(SharedIntersectionObserverContext);
  React38.useEffect(() => {
    var _a;
    if (typeof IntersectionObserver === "undefined")
      return;
    const element = ref.current;
    if (!element)
      return;
    let observer = observers.get(key7);
    if (!observer || observer.root !== ((_a = options.root) == null ? void 0 : _a.current)) {
      const { root, ...rest } = options;
      observer = new SharedIntersectionObserver({ ...rest, root: root == null ? void 0 : root.current });
      observers.set(key7, observer);
    }
    observer.observeElementWithCallback(element, callback);
    return () => observer == null ? void 0 : observer.unobserve(element);
  }, []);
}
var thresholds = /* @__PURE__ */ new Array(100).fill(void 0).map((_, i) => i * 0.01);
var ViewportContext = /* @__PURE__ */ React38.createContext(null);
function useAppearEffect(ref, options, appearCallback) {
  const internalState = React38.useRef({
    isInView: false,
    hasAnimatedOnce: false
  });
  const { animateOnce, threshold, rootMargin = `0px 0px 0px 0px` } = options;
  const callback = React38.useCallback(
    ([entry]) => {
      var _a;
      if (!entry)
        return;
      const { isInView, hasAnimatedOnce } = internalState.current;
      const isIntersecting = isIntersectingWithThreshold(entry, (_a = threshold == null ? void 0 : threshold.y) != null ? _a : 0);
      if (isIntersecting && !isInView) {
        if (animateOnce && hasAnimatedOnce)
          return;
        internalState.current.hasAnimatedOnce = true;
        internalState.current.isInView = true;
        appearCallback(true);
        return;
      }
      if (!isIntersecting && isInView) {
        internalState.current.isInView = false;
        if (animateOnce)
          return;
        appearCallback(false);
        return;
      }
    },
    [animateOnce, threshold == null ? void 0 : threshold.y, appearCallback]
  );
  useSharedIntersectionObserver(ref, callback, {
    threshold: thresholds,
    rootMargin
  });
}
function calculatedIntersection(intersectionRect, boundingClientRect) {
  if (boundingClientRect.height === 0)
    return 0;
  return intersectionRect.height / Math.min(boundingClientRect.height, safeWindow.innerHeight);
}
function isIntersectingWithThreshold({ boundingClientRect, intersectionRect, isIntersecting }, threshold) {
  if (boundingClientRect.height === 0)
    return isIntersecting;
  return isIntersecting && calculatedIntersection(intersectionRect, boundingClientRect) >= threshold;
}

// ../../library/src/components/AnimateLayout/SharedLayoutTree.tsx
import React39, { Component as Component5 } from "react";
var LayoutTree = class extends Component5 {
  constructor() {
    super(...arguments);
    /**
     * A list of projection nodes in the tree
     */
    this.projectionNodes = /* @__PURE__ */ new Map();
    this.shouldPreserveFollowOpacity = (child) => {
      return child.options.layoutId === TREE_ROOT_ID && !this.props.isExiting;
    };
    this.switchLayoutGroupContext = {
      register: (child) => this.addChild(child),
      deregister: (child) => this.removeChild(child),
      // Configs to use for the initial promotion on mount in Motion
      transition: this.props.isLead !== void 0 && this.props.animatesLayout ? this.props.transition : void 0,
      shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity
    };
  }
  componentDidMount() {
    if (this.props.isLead) {
      this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
    }
  }
  shouldComponentUpdate(nextProps) {
    const { isLead, isExiting, isOverlayed, animatesLayout, transition, sharedLayoutContext } = nextProps;
    this.isExiting = isExiting;
    if (isLead === void 0)
      return true;
    const hasBecomeLead = !this.props.isLead && !!isLead;
    const hasExitBeenCancelled = this.props.isExiting && !isExiting;
    const shouldPromote = hasBecomeLead || hasExitBeenCancelled;
    const shouldDemote = !!this.props.isLead && !isLead;
    const overlayChanged = this.props.isOverlayed !== isOverlayed;
    if (shouldPromote || shouldDemote) {
      this.projectionNodes.forEach((projection) => projection == null ? void 0 : projection.willUpdate());
    }
    if (shouldPromote) {
      sharedLayoutContext.schedulePromoteTree(this, transition, !!animatesLayout);
    } else if (overlayChanged) {
      sharedLayoutContext.scheduleProjectionDidUpdate();
    }
    return !!shouldPromote && !!animatesLayout;
  }
  addChild(child) {
    const layoutId = child.options.layoutId;
    if (layoutId) {
      this.projectionNodes.set(layoutId, child);
      this.setRootChild(child);
    }
  }
  /**
   * As children are added, make sure that `this.rootProjectionNode` is always the
   * child with the smallest depth.
   */
  setRootChild(child) {
    if (!this.rootProjectionNode)
      return this.rootProjectionNode = child;
    this.rootProjectionNode = this.rootProjectionNode.depth < child.depth ? this.rootProjectionNode : child;
  }
  removeChild(child) {
    const layoutId = child.options.layoutId;
    if (layoutId) {
      this.projectionNodes.delete(layoutId);
    }
  }
  render() {
    return /* @__PURE__ */ React39.createElement(SwitchLayoutGroupContext.Provider, { value: this.switchLayoutGroupContext }, this.props.children);
  }
};
var SharedLayoutTree = (props) => {
  const sharedLayoutContext = React39.useContext(SharedLayoutContext);
  return /* @__PURE__ */ React39.createElement(LayoutTree, { ...props, sharedLayoutContext });
};

// ../../library/src/components/NavigationContainerContext.tsx
import React40, { useContext as useContext6 } from "react";
var NavigationContainerContext = React40.createContext(true);
function useIsInCurrentNavigationTarget() {
  const isInCurrentNavigationTarget = useContext6(NavigationContainerContext);
  return isInCurrentNavigationTarget;
}

// ../../library/src/components/NavigationTargetContext.tsx
import React41, { createContext as createContext2, useCallback as useCallback2, useContext as useContext7, useEffect as useEffect4, useRef as useRef5 } from "react";

// ../../library/src/components/utils/useMap.ts
function newMap() {
  return /* @__PURE__ */ new Map();
}
function useMap() {
  return useConstant(newMap);
}

// ../../library/src/components/NavigationTargetContext.tsx
var NavigationTargetContext = /* @__PURE__ */ createContext2({ register: () => {
}, deregister: () => {
} });
var NavigationTargetWrapper = ({ isCurrent, isOverlayed, children }) => {
  const callbacks2 = useMap();
  const register = useCallback2(
    (fn) => {
      if (callbacks2.has(fn)) {
        console.warn("NavigationTargetWrapper: already registered");
        return;
      }
      callbacks2.set(fn, void 0);
    },
    [
      callbacks2
      /* constant, so should never change */
    ]
  );
  const deregister = useCallback2(
    (fn) => {
      const cleanup = callbacks2.get(fn);
      cleanup == null ? void 0 : cleanup();
      callbacks2.delete(fn);
    },
    [
      callbacks2
      /* constant, so should never change */
    ]
  );
  const value = useRef5({ register, deregister }).current;
  useEffect4(() => {
    callbacks2.forEach((_, cb2) => {
      const newCleanup = cb2(isCurrent, isOverlayed);
      callbacks2.set(cb2, isFunction(newCleanup) ? newCleanup : void 0);
    });
    return () => {
      callbacks2.forEach((cleanup, cb2) => {
        if (!cleanup)
          return;
        cleanup();
        callbacks2.set(cb2, void 0);
      });
    };
  }, [
    isCurrent,
    isOverlayed,
    callbacks2
    /* constant, so should never change */
  ]);
  return /* @__PURE__ */ React41.createElement(NavigationTargetContext.Provider, { value }, children);
};
function useOnCurrentTargetChange(callback, deps = []) {
  const { register, deregister } = useContext7(NavigationTargetContext);
  useEffect4(() => {
    if (!callback)
      return;
    register(callback);
    return () => deregister(callback);
  }, [register, deregister, ...deps]);
}

// ../../library/src/components/NavigationContainer.tsx
var NavigationContainer = /* @__PURE__ */ React42.memo(
  function NavigationContainer2({
    isLayeredContainer,
    isCurrent,
    isPrevious,
    isOverlayed = false,
    visible,
    transitionProps,
    children,
    backdropColor,
    onTapBackdrop,
    backfaceVisible,
    exitBackfaceVisible,
    animation,
    exitAnimation,
    instant,
    initialProps,
    exitProps,
    position = { top: 0, right: 0, bottom: 0, left: 0 },
    withMagicMotion,
    index,
    areMagicMotionLayersPresent,
    id,
    isInitial
  }) {
    const animate4 = useAnimation();
    const presence = useContext8(PresenceContext);
    const { persistLayoutIdCache } = useContext8(LayoutIdContext);
    const previousState = useRef6({
      wasCurrent: void 0,
      wasPrevious: false,
      wasBeingRemoved: false,
      wasReset: true,
      origins: getOriginProps({}, initialProps, transitionProps)
    });
    const viewportRef = useRef6(null);
    const isBeingRemoved = presence !== null && !presence.isPresent;
    if (isCurrent && previousState.current.wasCurrent === void 0)
      persistLayoutIdCache();
    useEffect5(() => {
      if (isLayeredContainer || !animate4)
        return;
      if (isBeingRemoved) {
        previousState.current = {
          ...previousState.current,
          wasBeingRemoved: isBeingRemoved
        };
        return;
      }
      const { wasPrevious, wasCurrent } = previousState.current;
      const shouldAnimateIn = isCurrent && !wasCurrent || // If the screen was being removed as a result of a "go back" transition, but that removal is interrupted,
      // resulting in this screen being restored to the current screen, we need to trigger an animation.
      !isBeingRemoved && previousState.current.wasBeingRemoved && isCurrent;
      const shouldAnimateOut = isPrevious && !wasPrevious;
      const origins = getOriginProps(previousState.current.origins, initialProps, transitionProps);
      let wasReset = previousState.current.wasReset;
      if (shouldAnimateIn || shouldAnimateOut) {
        animate4.stop();
        animate4.start({
          zIndex: index,
          ...origins,
          ...transitionProps
        });
        wasReset = false;
      } else if (wasReset === false) {
        animate4.stop();
        animate4.set({ zIndex: index, ...allAnimatableProperties, opacity: 0 });
        wasReset = true;
      }
      previousState.current = {
        wasCurrent: !!isCurrent,
        wasPrevious: !!isPrevious,
        wasBeingRemoved: false,
        wasReset,
        origins
      };
    }, [isCurrent, isPrevious, isBeingRemoved]);
    const transition = instant ? { type: false } : "velocity" in animation ? { ...animation, velocity: 0 } : animation;
    const exitTransition = instant ? { type: false } : exitAnimation || animation;
    const layout = { ...position };
    if (layout.left === void 0 || layout.right === void 0)
      layout.width = "auto";
    if (layout.top === void 0 || layout.bottom === void 0)
      layout.height = "auto";
    const needsPerspective = contains3Dprops(transitionProps) || contains3Dprops(initialProps);
    const perspective = needsPerspective && (isLayeredContainer || isCurrent || isPrevious) ? 1200 : void 0;
    const identity = { ...allAnimatableProperties, ...previousState.current.origins };
    const animations2 = isLayeredContainer ? {
      initial: { ...identity, ...initialProps },
      animate: { ...identity, ...transitionProps, transition },
      // Overlay animations are sometimes instant
      exit: { ...identity, ...exitProps, transition: animation }
      // Overlay exits are always animated
    } : {
      animate: animate4,
      exit: { ...identity, ...exitProps, transition: exitTransition }
    };
    const isPresent = isBeingRemoved || areMagicMotionLayersPresent === false ? false : true;
    const isCurrentTarget = !!isCurrent && isPresent;
    const forceOpacity = isCurrent && isInitial;
    return /* @__PURE__ */ React42.createElement(
      FrameWithMotion,
      {
        "data-framer-component-type": "NavigationContainerWrapper",
        width: "100%",
        height: "100%",
        style: {
          position: "absolute",
          transformStyle: "flat",
          backgroundColor: "transparent",
          overflow: "hidden",
          // Unlike Overlays, Screens set zIndex via animation controls to ensure it's set in parallel with the animation being played.
          // However, when a screen exits, it needs to preserve it's zIndex, which can't be applied through an `exit` animation,
          // and might be impacted by the layer created by `perspective`.
          zIndex: isLayeredContainer || isBeingRemoved || isCurrent && withMagicMotion ? index : void 0,
          pointerEvents: void 0,
          visibility: visible ? "visible" : "hidden",
          perspective
        }
      },
      isLayeredContainer && /* @__PURE__ */ React42.createElement(
        FrameWithMotion,
        {
          width: "100%",
          height: "100%",
          "data-framer-component-type": "NavigationContainerBackdrop",
          transition: animation,
          initial: { opacity: instant && visible ? 1 : 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          backgroundColor: backdropColor ? backdropColor : "transparent",
          onTap: !isBeingRemoved ? onTapBackdrop : void 0
        }
      ),
      /* @__PURE__ */ React42.createElement(
        FrameWithMotion,
        {
          ...layout,
          ...animations2,
          transition: {
            default: transition,
            originX: { type: false },
            originY: { type: false },
            originZ: { type: false }
          },
          backgroundColor: "transparent",
          backfaceVisible: !isBeingRemoved ? backfaceVisible : exitBackfaceVisible,
          "data-framer-component-type": "NavigationContainer",
          "data-framer-is-current-navigation-target": !!isCurrent,
          style: {
            pointerEvents: void 0,
            // When we mount a new screen that is going to be animated in with animation controls,
            // we need to ensure that the screen is hidden until the animation starts.
            opacity: forceOpacity || isLayeredContainer || isCurrent && withMagicMotion ? 1 : 0
          },
          "data-is-present": isPresent ? void 0 : false,
          ref: viewportRef
        },
        /* @__PURE__ */ React42.createElement(ViewportContext.Provider, { value: viewportRef }, /* @__PURE__ */ React42.createElement(NavigationContainerContext.Provider, { value: isCurrentTarget }, /* @__PURE__ */ React42.createElement(NavigationTargetWrapper, { isCurrent: isCurrentTarget, isOverlayed }, /* @__PURE__ */ React42.createElement(
          SharedLayoutTree,
          {
            isLead: isCurrent,
            animatesLayout: !!withMagicMotion,
            transition,
            isExiting: !isPresent,
            isOverlayed,
            id
          },
          children
        ))))
      )
    );
  },
  shouldUsePreviousValue
);
function shouldUsePreviousValue(prevProps, nextProps) {
  if (nextProps.isCurrent === void 0)
    return false;
  if (prevProps.isCurrent !== nextProps.isCurrent)
    return false;
  if (prevProps.isPrevious !== nextProps.isPrevious)
    return false;
  if (nextProps.isCurrent && prevProps.isOverlayed !== nextProps.isOverlayed)
    return false;
  return true;
}
function getOriginProps(currentOriginProps, initialProps, transitionProps) {
  const result = { ...currentOriginProps };
  if (initialProps) {
    if (isFiniteNumber(initialProps.originX))
      result.originX = initialProps.originX;
    if (isFiniteNumber(initialProps.originY))
      result.originY = initialProps.originY;
    if (isFiniteNumber(initialProps.originZ))
      result.originZ = initialProps.originZ;
  }
  if (transitionProps) {
    if (isFiniteNumber(transitionProps.originX))
      result.originX = transitionProps.originX;
    if (isFiniteNumber(transitionProps.originY))
      result.originY = transitionProps.originY;
    if (isFiniteNumber(transitionProps.originZ))
      result.originZ = transitionProps.originZ;
  }
  return result;
}
function contains3Dprops(containerProps) {
  var _a, _b, _c;
  if (!containerProps)
    return false;
  const containsProps = "rotateX" in containerProps || "rotateY" in containerProps || "z" in containerProps;
  if (!containsProps)
    return false;
  const toPropsContain3d = containerProps.rotateX !== 0 || containerProps.rotateY !== 0 || containerProps.z !== 0;
  const fromPropsContain3d = ((_a = containerProps == null ? void 0 : containerProps.transition) == null ? void 0 : _a.rotateX.from) !== 0 || ((_b = containerProps == null ? void 0 : containerProps.transition) == null ? void 0 : _b.rotateY.from) !== 0 || ((_c = containerProps == null ? void 0 : containerProps.transition) == null ? void 0 : _c.z.from) !== 0;
  return toPropsContain3d || fromPropsContain3d;
}
var allAnimatableProperties = {
  x: 0,
  y: 0,
  z: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  scale: 1,
  scaleX: 1,
  scaleY: 1,
  scaleZ: 1,
  skew: 0,
  skewX: 0,
  skewY: 0,
  originX: 0.5,
  originY: 0.5,
  originZ: 0,
  opacity: 1
};

// ../../library/src/components/NavigationTransitions.ts
var TransitionDefaults = {
  Fade: {
    exit: { opacity: 0 },
    enter: { opacity: 0 }
  },
  PushLeft: {
    exit: { x: "-30%" },
    enter: { x: "100%" }
  },
  PushRight: {
    exit: { x: "30%" },
    enter: { x: "-100%" }
  },
  PushUp: {
    exit: { y: "-30%" },
    enter: { y: "100%" }
  },
  PushDown: {
    exit: { y: "30%" },
    enter: { y: "-100%" }
  },
  Instant: {
    animation: { type: false },
    enter: { opacity: 0 }
  },
  Modal: {
    overCurrentContext: true,
    goBackOnTapOutside: true,
    position: { center: true },
    enter: { opacity: 0, scale: 1.2 }
  },
  OverlayLeft: {
    overCurrentContext: true,
    goBackOnTapOutside: true,
    position: { right: 0, top: 0, bottom: 0 },
    enter: { x: "100%" }
  },
  OverlayRight: {
    overCurrentContext: true,
    goBackOnTapOutside: true,
    position: { left: 0, top: 0, bottom: 0 },
    enter: { x: "-100%" }
  },
  OverlayUp: {
    overCurrentContext: true,
    goBackOnTapOutside: true,
    position: { bottom: 0, left: 0, right: 0 },
    enter: { y: "100%" }
  },
  OverlayDown: {
    overCurrentContext: true,
    goBackOnTapOutside: true,
    position: { top: 0, left: 0, right: 0 },
    enter: { y: "-100%" }
  },
  FlipLeft: {
    backfaceVisible: false,
    exit: { rotateY: -180 },
    enter: { rotateY: 180 }
  },
  FlipRight: {
    backfaceVisible: false,
    exit: { rotateY: 180 },
    enter: { rotateY: -180 }
  },
  FlipUp: {
    backfaceVisible: false,
    exit: { rotateX: 180 },
    enter: { rotateX: -180 }
  },
  FlipDown: {
    backfaceVisible: false,
    exit: { rotateX: -180 },
    enter: { rotateX: 180 }
  },
  MagicMotion: {
    withMagicMotion: true
  }
};
function pushTransition(options) {
  const side = options && options.appearsFrom ? options.appearsFrom : "right";
  switch (side) {
    case "right":
      return TransitionDefaults.PushLeft;
    case "left":
      return TransitionDefaults.PushRight;
    case "bottom":
      return TransitionDefaults.PushUp;
    case "top":
      return TransitionDefaults.PushDown;
  }
}
function overlayTransition(options) {
  const side = options && options.appearsFrom ? options.appearsFrom : "bottom";
  switch (side) {
    case "right":
      return TransitionDefaults.OverlayLeft;
    case "left":
      return TransitionDefaults.OverlayRight;
    case "bottom":
      return TransitionDefaults.OverlayUp;
    case "top":
      return TransitionDefaults.OverlayDown;
  }
}
function flipTransition(options) {
  const side = options && options.appearsFrom ? options.appearsFrom : "bottom";
  switch (side) {
    case "right":
      return TransitionDefaults.FlipLeft;
    case "left":
      return TransitionDefaults.FlipRight;
    case "bottom":
      return TransitionDefaults.FlipUp;
    case "top":
      return TransitionDefaults.FlipDown;
  }
}

// ../../library/src/components/reduceNavigationStateForAction.ts
var defaultState = () => ({
  current: -1,
  previous: -1,
  currentOverlay: -1,
  previousOverlay: -1,
  visualIndex: 0,
  overlayItemId: 0,
  historyItemId: 0,
  history: [],
  overlayStack: [],
  containers: {},
  containerIndex: {},
  containerVisualIndex: {},
  containerIsRemoved: {},
  transitionForContainer: {},
  previousTransition: null
});
function reduceNavigationStateForAction(state, action) {
  switch (action.type) {
    case "addOverlay":
      return addOverlay(state, action.transition, action.component);
    case "removeOverlay":
      return removeOverlay(state);
    case "add":
      return add(state, action.key, action.transition, action.component);
    case "remove":
      return remove(state);
    case "update":
      return updateComponent(state, action.key, action.component);
    case "back":
      return back(state);
    case "forward":
      return forward(state);
    default:
      return;
  }
}
function updateComponent(currentState, key7, component) {
  return {
    ...currentState,
    containers: {
      ...currentState.containers,
      [key7]: component
    }
  };
}
function addOverlay(currentState, transition, component) {
  const currentOverlay = currentState.overlayStack[currentState.currentOverlay];
  if (currentOverlay && currentOverlay.component === component)
    return;
  const overlayItemId = currentState.overlayItemId + 1;
  const overlayStack = [
    ...currentState.overlayStack,
    {
      key: `stack-${overlayItemId}`,
      component,
      transition
    }
  ];
  return {
    ...currentState,
    overlayStack,
    overlayItemId,
    currentOverlay: Math.max(0, Math.min(currentState.currentOverlay + 1, overlayStack.length - 1)),
    previousOverlay: currentState.currentOverlay
  };
}
function removeOverlay(currentState) {
  return {
    ...currentState,
    overlayStack: [],
    currentOverlay: -1,
    previousOverlay: currentState.currentOverlay
  };
}
function add(currentState, key7, transition, component) {
  if (!currentState.containers[key7])
    currentState.containers[key7] = component;
  currentState.history = currentState.history.slice(0, currentState.current + 1);
  currentState.visualIndex = Math.max(currentState.history.length, 0);
  const currentItem = currentState.history[currentState.history.length - 1];
  const isCurrentScreen = currentItem && currentItem.key === key7;
  currentState.overlayStack = [];
  if (isCurrentScreen && currentState.currentOverlay > -1) {
    return {
      ...currentState,
      currentOverlay: -1,
      previousOverlay: currentState.currentOverlay
    };
  }
  if (isCurrentScreen)
    return;
  const nextIndex = currentState.containerVisualIndex[key7];
  const removed = currentState.containerIsRemoved[key7];
  const shouldMoveForward = (currentItem == null ? void 0 : currentItem.key) && transition.withMagicMotion ? isNextTargetForward(key7, nextIndex, removed, currentState.history) : true;
  currentState.history.push({
    key: key7,
    transition,
    visualIndex: shouldMoveForward ? Math.max(currentState.visualIndex, 0) : currentState.containerVisualIndex[key7]
  });
  const current = currentState.current + 1;
  const previous = currentState.current;
  for (const containerKey in currentState.containerIndex) {
    if (currentState.containerIndex[containerKey] === current) {
      currentState.containerIndex[containerKey] = findLatestHistoryIndex(containerKey, currentState.history);
    }
  }
  currentState.containerIndex[key7] = current;
  const { containerVisualIndex, containerIsRemoved } = magicMotionPropsForAdd(currentState, key7, shouldMoveForward);
  const transitionForContainer = updateTransitions(
    current,
    previous,
    currentState.history,
    currentState.containerIndex,
    currentState.transitionForContainer
  );
  return {
    ...currentState,
    current,
    previous,
    containerVisualIndex,
    containerIsRemoved,
    transitionForContainer,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: currentState.historyItemId + 1,
    previousOverlay: currentState.currentOverlay
  };
}
function back(currentState) {
  const containers = { ...currentState.containers };
  const nextState = remove(currentState);
  if (!nextState)
    return;
  nextState.containers = containers;
  return nextState;
}
function forward(currentState) {
  const nextItem = currentState.history[currentState.current + 1];
  if (!nextItem)
    return;
  const { key: key7, transition, component } = nextItem;
  const history = [...currentState.history];
  const nextState = add(currentState, key7, transition, component);
  if (!nextState)
    return;
  nextState.history = history;
  return nextState;
}
function remove(currentState) {
  const history = [...currentState.history.slice(0, currentState.current + 1)];
  if (history.length === 1)
    return;
  const currentItem = history.pop();
  if (!currentItem)
    return;
  const target = history[history.length - 1];
  assert(target, "The navigation history must have at least one component");
  currentState.containerIndex[target.key] = history.length - 1;
  const shouldRemoveContainer = history.every((item) => item.key !== currentItem.key);
  if (shouldRemoveContainer) {
    delete currentState.containers[currentItem.key];
  }
  const current = currentState.current - 1;
  const previous = currentState.current;
  const { containerIsRemoved, containerVisualIndex, previousTransition, visualIndex } = magicMotionPropsForRemove(
    currentState,
    target,
    currentItem
  );
  const transitionForContainer = updateTransitions(
    current,
    previous,
    currentState.history,
    currentState.containerIndex,
    currentState.transitionForContainer
  );
  return {
    ...currentState,
    current,
    previous,
    containerIsRemoved,
    containerVisualIndex,
    previousTransition,
    visualIndex,
    transitionForContainer
  };
}
function magicMotionPropsForAdd(currentState, nextKey, shouldMoveForward) {
  const update = {
    containerVisualIndex: { ...currentState.containerVisualIndex },
    containerIsRemoved: { ...currentState.containerIsRemoved }
  };
  if (shouldMoveForward) {
    update.containerVisualIndex[nextKey] = currentState.history.length - 1;
    update.containerIsRemoved[nextKey] = false;
  } else {
    const nextVisualIndex = currentState.containerVisualIndex[nextKey];
    for (const [key7, visualIndex] of Object.entries(currentState.containerVisualIndex)) {
      if (nextVisualIndex !== void 0 && visualIndex > nextVisualIndex) {
        update.containerIsRemoved[key7] = true;
      }
    }
  }
  return update;
}
function magicMotionPropsForRemove(currentState, target, currentItem) {
  const validTargets = [target.key, currentItem.key];
  const nextValidTarget = currentState.history[currentState.history.length - 2];
  const previousTransition = currentState.previousTransition === null ? null : { ...currentState.previousTransition };
  const update = {
    containerIsRemoved: { ...currentState.containerIsRemoved },
    containerVisualIndex: { ...currentState.containerVisualIndex },
    previousTransition,
    visualIndex: currentState.visualIndex
  };
  if (nextValidTarget)
    validTargets.push(nextValidTarget.key);
  const targetVisualIndex = currentState.containerVisualIndex[target.key];
  const currentVisualIndex = currentState.containerVisualIndex[currentItem.key];
  const shouldRemoveLastKey = targetVisualIndex !== void 0 && currentVisualIndex !== void 0 && targetVisualIndex <= currentVisualIndex || target.visualIndex !== void 0 && target.visualIndex < currentState.history.length - 1;
  const nextIndex = target.visualIndex;
  if (shouldRemoveLastKey) {
    update.containerIsRemoved[currentItem.key] = true;
    update.containerVisualIndex[target.key] = nextIndex !== void 0 ? nextIndex : currentState.history.length - 1;
  } else {
    update.visualIndex = currentState.visualIndex + 1;
    update.containerVisualIndex[target.key] = currentState.visualIndex + 1;
  }
  if (currentItem.transition.withMagicMotion)
    update.previousTransition = currentItem.transition || null;
  currentState.containerIsRemoved[target.key] = false;
  return update;
}
function findLatestHistoryIndex(key7, history) {
  var _a;
  for (let index = history.length; index > history.length; index--) {
    if (((_a = history[index]) == null ? void 0 : _a.key) === key7)
      return index;
  }
  return -1;
}
function updateTransitions(current, previous, history, containerIndex, transitionForContainer) {
  const transitions = { ...transitionForContainer };
  for (const [key7, screenIndex] of Object.entries(containerIndex)) {
    const transition = transitionForScreen(screenIndex, { current, previous, history });
    if (transition) {
      transitions[key7] = transition;
    }
  }
  return transitions;
}
function isNextTargetForward(key7, index, removed, history) {
  if (removed || index === void 0)
    return true;
  if (index === 0)
    return false;
  const forwardHistory = history.slice(index, history.length);
  if (forwardHistory.findIndex((item) => item.key === key7) > -1)
    return true;
  const backwardsHistory = history.slice(0, index - 1);
  if (backwardsHistory.findIndex((item) => item.key === key7) > -1)
    return false;
  return true;
}
function transitionForScreen(screenIndex, stackState) {
  const { current, previous, history } = stackState;
  if (screenIndex !== current && screenIndex !== previous)
    return void 0;
  if (screenIndex === current && current > previous) {
    const item = history[screenIndex];
    return sequence("enter", item == null ? void 0 : item.transition.enter, item == null ? void 0 : item.transition.animation);
  }
  if (screenIndex === previous && current > previous) {
    const item = history[screenIndex + 1];
    return sequence("exit", item == null ? void 0 : item.transition.exit, item == null ? void 0 : item.transition.animation);
  }
  if (screenIndex === current && current < previous) {
    const item = history[screenIndex + 1];
    return sequence("enter", item == null ? void 0 : item.transition.exit, item == null ? void 0 : item.transition.animation);
  }
  if (screenIndex === previous && current < previous) {
    const item = history[screenIndex];
    return sequence("exit", item == null ? void 0 : item.transition.enter, item == null ? void 0 : item.transition.animation);
  }
}
var allAnimatableKeys = Object.keys(allAnimatableProperties);
function sequence(direction, transition, animation) {
  const value = {};
  const from = {};
  allAnimatableKeys.forEach((property) => {
    value[property] = allAnimatableProperties[property];
    from[property] = {
      ...animation,
      from: allAnimatableProperties[property]
    };
  });
  if (transition) {
    Object.keys(transition).forEach((property) => {
      if (transition[property] === void 0)
        return;
      const transitionTo = transition[property];
      const transitionFrom = typeof transition[property] === "string" ? `${allAnimatableProperties[property]}%` : allAnimatableProperties[property];
      value[property] = direction === "enter" ? transitionFrom : transitionTo;
      from[property] = {
        ...animation,
        from: direction === "enter" ? transitionTo : transitionFrom,
        velocity: 0
      };
    });
  }
  return {
    ...value,
    transition: {
      ...from
    }
  };
}

// ../../library/src/components/Navigation.tsx
var NavigationConsumer = NavigationContext.Consumer;
var NavigationCallbackContext = React43.createContext(void 0);
var NavigationCallbackProvider = NavigationCallbackContext.Provider;
var IsInitialNavigationContext = React43.createContext(void 0);
var Navigation = class extends Component6 {
  constructor(props) {
    var _a;
    super(props);
    this.lastEventTimeStamp = null;
    this.state = defaultState();
    this.navigationAction = (action) => {
      if (!this.props.enabled && this.state.history.length > 0)
        return;
      const newState = reduceNavigationStateForAction(this.state, action);
      if (!newState)
        return;
      const { skipLayoutAnimation } = this.props;
      const historyItem = newState.history[newState.current];
      const withMagicMotion = action.type === "add" && action.transition.withMagicMotion || action.type === "forward" && (historyItem == null ? void 0 : historyItem.transition.withMagicMotion) || action.type === "remove" && !!newState.previousTransition;
      const updateState = () => {
        var _a;
        this.setState(newState);
        if (historyItem == null ? void 0 : historyItem.key) {
          (_a = this.context) == null ? void 0 : _a.call(this, historyItem.key);
        }
      };
      if (skipLayoutAnimation && !withMagicMotion) {
        skipLayoutAnimation(updateState);
      } else {
        updateState();
      }
    };
    this.goBack = () => {
      var _a;
      if (this.isSameEventTransition())
        return;
      this.lastEventTimeStamp = ((_a = globalThis.event) == null ? void 0 : _a.timeStamp) || null;
      if (this.state.currentOverlay !== -1)
        return this.navigationAction({ type: "removeOverlay" });
      return this.navigationAction({ type: "remove" });
    };
    const component = this.props.children;
    if (!component || !isReactChild(component) || !isReactElement(component))
      return;
    const transition = { ...TransitionDefaults.Instant };
    const key7 = ((_a = component.key) == null ? void 0 : _a.toString()) || `stack-${this.state.historyItemId + 1}`;
    const action = { type: "add", key: key7, transition, component };
    const newState = reduceNavigationStateForAction(this.state, action);
    if (!newState)
      return;
    this.state = newState;
  }
  componentDidMount() {
    var _a;
    injectComponentCSSRules();
    const historyItem = this.state.history[this.state.current];
    if (!historyItem)
      return;
    (_a = this.context) == null ? void 0 : _a.call(this, historyItem.key);
  }
  UNSAFE_componentWillReceiveProps(props) {
    var _a;
    const component = props["children"];
    if (!isReactChild(component) || !isReactElement(component))
      return;
    const key7 = (_a = component.key) == null ? void 0 : _a.toString();
    if (!key7)
      return;
    if (this.state.history.length === 0) {
      this.transition(component, TransitionDefaults.Instant);
    } else {
      this.navigationAction({ type: "update", key: key7, component });
    }
  }
  componentWillUnmount() {
    var _a, _b;
    (_b = (_a = this.props).resetProjection) == null ? void 0 : _b.call(_a);
  }
  getStackState(options) {
    const { current, previous, currentOverlay, previousOverlay } = this.state;
    if (options.overCurrentContext) {
      return {
        current: currentOverlay,
        previous: previousOverlay,
        history: this.state.overlayStack
      };
    }
    return {
      current,
      previous,
      history: this.state.history
    };
  }
  /**
   * To prevent bubbling events from triggering multiple transitions,
   * we ensure that the current event has a different timestamp then the event that triggered the last transition.
   * We use Window.event to ensure that even transitions invoked by code components - and may not pass a reference to the event - are caught.
   * This works better than measuring the time of transition calls with performance.now()
   * because the time between calls can get longer and longer as more screens are added to the stack,
   * preventing a deterministic time between transitions to be used to determine if they were triggered at the same time or not.
   */
  isSameEventTransition() {
    if (!globalThis.event)
      return false;
    return this.lastEventTimeStamp === globalThis.event.timeStamp;
  }
  transition(component, transitionTraits, transitionOptions) {
    var _a, _b;
    if (this.isSameEventTransition())
      return;
    this.lastEventTimeStamp = ((_a = globalThis.event) == null ? void 0 : _a.timeStamp) || null;
    if (!component || !isReactChild(component) || !isReactElement(component))
      return;
    const transition = { ...transitionTraits, ...transitionOptions };
    const overCurrentContext = !!transition.overCurrentContext;
    if (overCurrentContext)
      return this.navigationAction({ type: "addOverlay", transition, component });
    const key7 = ((_b = component.key) == null ? void 0 : _b.toString()) || `stack-${this.state.historyItemId + 1}`;
    this.navigationAction({ type: "add", key: key7, transition, component });
  }
  instant(component) {
    this.transition(component, TransitionDefaults.Instant, void 0);
  }
  fade(component, options) {
    this.transition(component, TransitionDefaults.Fade, options);
  }
  push(component, options) {
    this.transition(component, pushTransition(options), options);
  }
  modal(component, options) {
    this.transition(component, TransitionDefaults.Modal, options);
  }
  overlay(component, options) {
    this.transition(component, overlayTransition(options), options);
  }
  flip(component, options) {
    this.transition(component, flipTransition(options), options);
  }
  magicMotion(component, options) {
    this.transition(component, TransitionDefaults.MagicMotion, options);
  }
  customTransition(component, transition) {
    this.transition(component, transition);
  }
  render() {
    var _a, _b, _c, _d, _e;
    const stackState = this.getStackState({ overCurrentContext: false });
    const overlayStackState = this.getStackState({ overCurrentContext: true });
    const activeOverlay = activeOverlayItem(overlayStackState);
    const isOverlayVisible = overlayStackState.current > -1;
    const isInitial = this.state.history.length === 1;
    const contentContainers = [];
    for (const [key7, component] of Object.entries(this.state.containers)) {
      const index = this.state.containerIndex[key7];
      assert(index !== void 0, "Container's index must be registered");
      const visualIndex = this.state.containerVisualIndex[key7];
      assert(visualIndex !== void 0, "Container's visual index must be registered");
      const removed = this.state.containerIsRemoved[key7];
      const historyItem = this.state.history[index];
      const transitionProps = this.state.transitionForContainer[key7];
      const isCurrent = index === this.state.current;
      const isPrevious = index === this.state.previous;
      const areMagicMotionLayersPresent = isCurrent ? false : removed;
      const withMagicMotion = ((_a = historyItem == null ? void 0 : historyItem.transition) == null ? void 0 : _a.withMagicMotion) || isCurrent && !!this.state.previousTransition;
      contentContainers.push(
        /* @__PURE__ */ React43.createElement(
          NavigationContainer,
          {
            key: key7,
            id: key7,
            index: visualIndex,
            isInitial,
            isCurrent,
            isPrevious,
            isOverlayed: isOverlayVisible,
            visible: isCurrent || isPrevious,
            position: (_b = historyItem == null ? void 0 : historyItem.transition) == null ? void 0 : _b.position,
            instant: isInstantContainerTransition(index, stackState),
            transitionProps,
            animation: animationPropsForContainer(index, stackState),
            backfaceVisible: getBackfaceVisibleForScreen(index, stackState),
            exitAnimation: (_c = historyItem == null ? void 0 : historyItem.transition) == null ? void 0 : _c.animation,
            exitBackfaceVisible: (_d = historyItem == null ? void 0 : historyItem.transition) == null ? void 0 : _d.backfaceVisible,
            exitProps: (_e = historyItem == null ? void 0 : historyItem.transition) == null ? void 0 : _e.enter,
            withMagicMotion,
            areMagicMotionLayersPresent: areMagicMotionLayersPresent ? false : void 0
          },
          /* @__PURE__ */ React43.createElement(MagicMotionCrossfadeRoot, null, containerContent({
            component,
            transition: historyItem == null ? void 0 : historyItem.transition
          }))
        )
      );
    }
    const overlayContainers = this.state.overlayStack.map((item, stackIndex) => {
      return /* @__PURE__ */ React43.createElement(
        NavigationContainer,
        {
          isLayeredContainer: true,
          key: item.key,
          isCurrent: stackIndex === this.state.currentOverlay,
          position: item.transition.position,
          initialProps: initialPropsForOverlay(stackIndex, overlayStackState),
          transitionProps: transitionPropsForOverlay(stackIndex, overlayStackState),
          instant: isInstantContainerTransition(stackIndex, overlayStackState, true),
          animation: animationPropsForContainer(stackIndex, overlayStackState),
          exitProps: item.transition.enter,
          visible: containerIsVisible(stackIndex, overlayStackState),
          backdropColor: backdropColorForTransition(item.transition),
          backfaceVisible: getBackfaceVisibleForOverlay(stackIndex, overlayStackState),
          onTapBackdrop: backdropTapAction(item.transition, this.goBack),
          index: this.state.current + 1 + stackIndex
        },
        containerContent({
          component: item.component,
          transition: item.transition
        })
      );
    });
    return /* @__PURE__ */ React43.createElement(
      FrameWithMotion,
      {
        "data-framer-component-type": "NavigationRoot",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "relative",
        style: { overflow: "hidden", backgroundColor: "unset", pointerEvents: void 0, ...this.props.style }
      },
      /* @__PURE__ */ React43.createElement(NavigationContext.Provider, { value: this }, /* @__PURE__ */ React43.createElement(IsInitialNavigationContext.Provider, { value: isInitial }, /* @__PURE__ */ React43.createElement(
        NavigationContainer,
        {
          isLayeredContainer: true,
          position: void 0,
          initialProps: {},
          instant: false,
          transitionProps: transitionPropsForStackWrapper(activeOverlay),
          animation: animationForStackWrapper(activeOverlay),
          backfaceVisible: backfaceVisibleForStackWrapper(activeOverlay),
          visible: true,
          backdropColor: void 0,
          onTapBackdrop: void 0,
          index: 0
        },
        /* @__PURE__ */ React43.createElement(LayoutIdProvider, null, /* @__PURE__ */ React43.createElement(SharedLayoutRoot, null, /* @__PURE__ */ React43.createElement(AnimatePresence, { presenceAffectsLayout: false }, contentContainers)))
      ), /* @__PURE__ */ React43.createElement(AnimatePresence, null, overlayContainers)))
    );
  }
};
Navigation.defaultProps = {
  enabled: true
};
Navigation.contextType = NavigationCallbackContext;
var animationDefault = {
  stiffness: 500,
  damping: 50,
  restDelta: 1,
  type: "spring"
};
function activeOverlayItem(overlayStack) {
  let currentOverlayItem;
  let previousOverlayItem;
  if (overlayStack.current !== -1) {
    currentOverlayItem = overlayStack.history[overlayStack.current];
  } else {
    previousOverlayItem = overlayStack.history[overlayStack.previous];
  }
  return { currentOverlayItem, previousOverlayItem };
}
function transitionPropsForStackWrapper({ currentOverlayItem }) {
  return currentOverlayItem && currentOverlayItem.transition.exit;
}
function animationForStackWrapper({ currentOverlayItem, previousOverlayItem }) {
  if (currentOverlayItem && currentOverlayItem.transition.animation) {
    return currentOverlayItem.transition.animation;
  }
  if (previousOverlayItem && previousOverlayItem.transition.animation) {
    return previousOverlayItem.transition.animation;
  }
  return animationDefault;
}
function backfaceVisibleForStackWrapper({ currentOverlayItem, previousOverlayItem }) {
  if (currentOverlayItem)
    return currentOverlayItem.transition.backfaceVisible;
  return previousOverlayItem && previousOverlayItem.transition.backfaceVisible;
}
function backdropColorForTransition(transition) {
  if (transition.backdropColor)
    return transition.backdropColor;
  if (transition.overCurrentContext)
    return "rgba(4,4,15,.4)";
  return void 0;
}
function getBackfaceVisibleForOverlay(containerIndex, stackState) {
  const { current, history } = stackState;
  if (containerIndex === current) {
    const navigationItem = history[containerIndex];
    if (navigationItem && navigationItem.transition) {
      return navigationItem.transition.backfaceVisible;
    }
    return true;
  } else if (containerIndex < current) {
    const navigationItem = history[containerIndex + 1];
    if (navigationItem && navigationItem.transition) {
      return navigationItem.transition.backfaceVisible;
    }
    return true;
  } else {
    const navigationItem = history[containerIndex];
    if (navigationItem && navigationItem.transition) {
      return navigationItem.transition.backfaceVisible;
    }
    return true;
  }
}
function initialPropsForOverlay(containerIndex, stackState) {
  const navigationItem = stackState.history[containerIndex];
  if (navigationItem)
    return navigationItem.transition.enter;
}
function getBackfaceVisibleForScreen(screenIndex, stackState) {
  var _a, _b, _c, _d;
  const { current, previous, history } = stackState;
  if (screenIndex === previous && current > previous || screenIndex === current && current < previous) {
    return (_b = (_a = history[screenIndex + 1]) == null ? void 0 : _a.transition) == null ? void 0 : _b.backfaceVisible;
  }
  return (_d = (_c = history[screenIndex]) == null ? void 0 : _c.transition) == null ? void 0 : _d.backfaceVisible;
}
function transitionPropsForOverlay(overlayIndex, stackState) {
  const { current, history } = stackState;
  if (overlayIndex === current) {
    return;
  } else if (overlayIndex < current) {
    const navigationItem = history[overlayIndex + 1];
    if (navigationItem && navigationItem.transition) {
      return navigationItem.transition.exit;
    }
  } else {
    const navigationItem = history[overlayIndex];
    if (navigationItem && navigationItem.transition) {
      return navigationItem.transition.enter;
    }
  }
}
function animationPropsForContainer(containerIndex, stackState) {
  const { current, previous, history } = stackState;
  const containerCurrent = previous > current ? previous : current;
  if (containerIndex < containerCurrent) {
    const navigationItem = history[containerIndex + 1];
    if (navigationItem && navigationItem.transition.animation) {
      return navigationItem.transition.animation;
    }
  } else if (containerIndex !== containerCurrent) {
    const navigationItem = history[containerIndex];
    if (navigationItem && navigationItem.transition.animation) {
      return navigationItem.transition.animation;
    }
  } else {
    const navigationItem = history[containerIndex];
    if (navigationItem == null ? void 0 : navigationItem.transition.animation) {
      return navigationItem.transition.animation;
    }
  }
  return animationDefault;
}
function isInstantContainerTransition(containerIndex, stackState, overCurrentContext) {
  const { current, previous, history } = stackState;
  if (overCurrentContext && history.length > 1)
    return true;
  if (containerIndex !== previous && containerIndex !== current)
    return true;
  if (current === previous)
    return true;
  return false;
}
function containerIsVisible(containerIndex, stackState) {
  const { current, previous } = stackState;
  if (containerIndex > current && containerIndex > previous)
    return false;
  if (containerIndex === current)
    return true;
  return false;
}
function containerContent(item) {
  const content = React43.Children.map(
    item.component,
    (child) => {
      var _a, _b;
      if (!isReactChild(child) || !isReactElement(child) || !child.props) {
        return child;
      }
      const props = {
        style: (_a = child.props.style) != null ? _a : {}
      };
      const position = (_b = item == null ? void 0 : item.transition) == null ? void 0 : _b.position;
      const shouldStretchWidth = !position || position.left !== void 0 && position.right !== void 0;
      const shouldStretchHeight = !position || position.top !== void 0 && position.bottom !== void 0;
      const canStretchStyle = "style" in child.props ? isObject2(child.props.style) : true;
      if (shouldStretchWidth) {
        const canStretchWidth = "width" in child.props;
        if (canStretchWidth)
          props.width = "100%";
        if (canStretchStyle)
          props.style.width = "100%";
      }
      if (shouldStretchHeight) {
        const canStretchHeight = "height" in child.props;
        if (canStretchHeight)
          props.height = "100%";
        if (canStretchStyle)
          props.style.height = "100%";
      }
      return React43.cloneElement(child, props);
    }
  );
  return content;
}
function backdropTapAction(transition, goBackAction) {
  if (transition.goBackOnTapOutside !== false)
    return goBackAction;
}
function NavigationWrapper(props) {
  const resetProjection = useResetProjection();
  const skipLayoutAnimation = useInstantLayoutTransition();
  return /* @__PURE__ */ React43.createElement(Navigation, { ...props, resetProjection, skipLayoutAnimation }, props.children);
}

// ../../library/src/components/Page/EmulatedPage.tsx
var import_process5 = __toESM(require_browser(), 1);
import React47 from "react";

// ../../library/src/components/Scroll/useWheelScroll.ts
import { useCallback as useCallback3, useRef as useRef7 } from "react";

// ../../library/src/render/utils/debounce.ts
function debounce(fn, time2) {
  let timeout;
  const debounced = (...args) => {
    safeWindow.clearTimeout(timeout);
    timeout = safeWindow.setTimeout(fn, time2, ...args);
  };
  const cancel = () => {
    safeWindow.clearTimeout(timeout);
  };
  debounced.cancel = cancel;
  return debounced;
}

// ../../library/src/components/Scroll/useWheelScroll.ts
function useWheelScroll(ref, {
  enabled,
  initial,
  prev,
  direction,
  constraints,
  offsetX,
  offsetY,
  onScrollStart,
  onScroll,
  onScrollEnd
}) {
  const isWheelScrollActive = useRef7(false);
  const getPointData = useCallback3(() => {
    const point = getPoint(offsetX, offsetY);
    const data2 = {
      point,
      velocity: { x: offsetX.getVelocity(), y: offsetY.getVelocity() },
      offset: { x: point.x - initial.x, y: point.y - initial.y },
      delta: { x: point.x - prev.x, y: point.y - prev.y }
    };
    prev.x = point.x;
    prev.y = point.y;
    return data2;
  }, []);
  let handler;
  if (enabled) {
    let clampX = function(v) {
      return constraints.current === null ? v : clamp3(v, constraints.current.left, constraints.current.right);
    }, clampY = function(v) {
      return constraints.current === null ? v : clamp3(v, constraints.current.top, constraints.current.bottom);
    }, updateX = function(delta) {
      offsetX.stop();
      offsetX.set(clampX(offsetX.get() - delta));
    }, updateY = function(delta) {
      offsetY.stop();
      offsetY.set(clampY(offsetY.get() - delta));
    };
    const debouncedOnScrollEnd = debounce(() => {
      onScrollEnd && onScrollEnd(getPointData());
      isWheelScrollActive.current = false;
    }, 200);
    handler = (e) => {
      e.preventDefault();
      if (!isWheelScrollActive.current) {
        const x = offsetX.get();
        const y = offsetY.get();
        initial.x = x;
        initial.y = y;
        prev.x = x;
        prev.y = y;
        onScrollStart && onScrollStart(getPointData());
        isWheelScrollActive.current = true;
      }
      switch (direction) {
        case "horizontal":
          updateX(e.deltaX);
          break;
        case "vertical":
          updateY(e.deltaY);
          break;
        default:
          updateX(e.deltaX);
          updateY(e.deltaY);
      }
      onScroll && onScroll(getPointData());
      debouncedOnScrollEnd();
    };
  }
  useDomEvent(ref, "wheel", handler, { passive: false });
}
function getPoint(x, y) {
  return { x: x.get(), y: y.get() };
}

// ../../library/src/components/utils/paddingFromProps.ts
function hasPaddingPerSide(props) {
  const { paddingPerSide, paddingTop, paddingBottom, paddingLeft, paddingRight } = props;
  return paddingPerSide !== false && (paddingTop !== void 0 || paddingBottom !== void 0 || paddingLeft !== void 0 || paddingRight !== void 0);
}
function paddingFromProps(props) {
  const { padding = 0, paddingTop, paddingBottom, paddingLeft, paddingRight } = props;
  if (hasPaddingPerSide(props)) {
    return {
      top: paddingTop !== void 0 ? paddingTop : padding,
      bottom: paddingBottom !== void 0 ? paddingBottom : padding,
      left: paddingLeft !== void 0 ? paddingLeft : padding,
      right: paddingRight !== void 0 ? paddingRight : padding
    };
  }
  return {
    top: padding,
    bottom: padding,
    left: padding,
    right: padding
  };
}
function makePaddingString({
  top,
  left,
  bottom,
  right
}) {
  return `${top}px ${right}px ${bottom}px ${left}px`;
}

// ../../library/src/components/Page/PageContainer.tsx
import React46 from "react";

// ../../library/src/components/Stack/Stack.tsx
import React45 from "react";

// ../../library/src/modules/useSafariGapFix.tsx
import React44 from "react";
function triggerStackReflow(element, display) {
  if (!element)
    return;
  element.style.display = "none";
  void element.offsetHeight;
  element.style.display = display;
}
var requiresPolyfill = Boolean(isSafari() && safariVersion() < 15.4);
function useSafariGapFix(gap, ref, display) {
  if (!requiresPolyfill)
    return void 0;
  const isInitialRender = React44.useRef(true);
  const hasTriggeredReflow = React44.useRef(false);
  const prevGapValue = React44.useRef(gap);
  hasTriggeredReflow.current = false;
  React44.useLayoutEffect(() => {
    prevGapValue.current = gap;
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    if (!hasTriggeredReflow.current) {
      triggerStackReflow(ref.current, display);
      hasTriggeredReflow.current = true;
    }
  }, [gap, ref, prevGapValue, display]);
  return React44.useCallback(() => {
    if (prevGapValue.current === gap)
      return;
    if (!hasTriggeredReflow.current)
      triggerStackReflow(ref.current, display);
    hasTriggeredReflow.current = true;
  }, [gap, ref]);
}

// ../../library/src/components/Stack/Stack.tsx
var Stack = /* @__PURE__ */ (() => {
  const StackInner = React45.memo(
    React45.forwardRef(function StackInner2(stackProps, forwardedRef) {
      var _a, _b;
      const {
        as = "div",
        direction = "vertical",
        distribution = "start",
        alignment = "center",
        gap = 10,
        wrap: wrap2 = false,
        useFlexboxGap: externalUseFlexboxGap = true,
        children,
        style: styleProp,
        className,
        willChangeTransform,
        __fromCodeComponentNode,
        parentSize,
        __contentWrapperStyle,
        ...containerProps
      } = stackProps;
      const useFlexboxGap = Boolean(externalUseFlexboxGap || wrap2);
      const stackRef = React45.useRef(null);
      const onBeforeLayoutMeasure = useSafariGapFix(gap, stackRef, "flex");
      const flexDirection = toFlexDirection(direction);
      const isReverse = isReverseDirection(flexDirection);
      const justifyContent = toJustifyOrAlignment(distribution);
      const padding = hasPaddingPerSide(containerProps) || containerProps.padding ? makePaddingString(paddingFromProps(containerProps)) : void 0;
      const style = { ...styleProp };
      Layer.applyWillChange({ willChangeTransform }, style, true);
      if (__fromCodeComponentNode && !constraintsEnabled(unwrapFrameProps(containerProps))) {
        containerProps.width = "100%";
        containerProps.height = "100%";
        containerProps._constraints = { enabled: true };
      }
      const layoutId = useLayoutId(stackProps);
      const { children: _children, props } = processOverrideForwarding(containerProps, children);
      const widthType = (_a = containerProps.widthType) != null ? _a : containerProps.width === "auto" ? 2 /* Auto */ : 0 /* FixedNumber */;
      const heightType = (_b = containerProps.heightType) != null ? _b : containerProps.height === "auto" ? 2 /* Auto */ : 0 /* FixedNumber */;
      const fractionChildren = handleFraction(_children, direction, widthType, heightType);
      const gapChildren = wrapInGapElementForLegacyGap(
        fractionChildren,
        gap,
        flexDirection,
        justifyContent,
        useFlexboxGap,
        wrap2
      );
      const content = useProvideParentSize(gapChildren, parentSize != null ? parentSize : 1 /* Disabled */);
      const attributes = {
        "data-framer-component-type": "Stack"
      };
      const fromCanvasComponent = containerProps.__fromCanvasComponent;
      if (fromCanvasComponent)
        attributes["data-framer-generated"] = true;
      const alignItems = toJustifyOrAlignment(alignment);
      const contentWrapperStyle = {
        display: "flex",
        flexDirection,
        flexWrap: wrap2 ? "wrap" : "nowrap",
        justifyContent,
        alignItems,
        alignContent: alignItems,
        padding,
        ...__contentWrapperStyle
      };
      const gapEnabled = isGapEnabled(gap, justifyContent, wrap2);
      if (useFlexboxGap && gapEnabled) {
        const gapSupportedInMainAxis = isGapSupportedInMainAxis(justifyContent);
        if (gapSupportedInMainAxis || direction !== "horizontal") {
          contentWrapperStyle["--stack-native-column-gap"] = `${gap}px`;
        }
        if (gapSupportedInMainAxis || direction !== "vertical") {
          contentWrapperStyle["--stack-native-row-gap"] = `${gap}px`;
        }
      }
      if (contentWrapperStyle.width === void 0) {
        contentWrapperStyle.width = widthType === 2 /* Auto */ ? "min-content" : "100%";
      }
      if (contentWrapperStyle.height === void 0) {
        contentWrapperStyle.height = heightType === 2 /* Auto */ ? "min-content" : "100%";
      }
      if (fromCanvasComponent) {
        if (styleProp == null ? void 0 : styleProp.width)
          contentWrapperStyle.width = styleProp == null ? void 0 : styleProp.width;
        if (styleProp == null ? void 0 : styleProp.height)
          contentWrapperStyle.height = styleProp == null ? void 0 : styleProp.height;
      }
      return /* @__PURE__ */ React45.createElement(
        FrameWithMotion,
        {
          as,
          background: fromCanvasComponent ? void 0 : "none",
          ...props,
          layoutId,
          ref: useForwardedRef(forwardedRef, stackRef),
          ...attributes,
          style,
          className,
          layoutScroll: true
        },
        /* @__PURE__ */ React45.createElement(
          motion.div,
          {
            "data-framer-stack-content-wrapper": true,
            "data-framer-stack-direction-reverse": isReverse,
            "data-framer-stack-gap-enabled": gapEnabled,
            style: contentWrapperStyle,
            onBeforeLayoutMeasure
          },
          content
        )
      );
    })
  );
  StackInner.displayName = "Stack";
  addPropertyControls(StackInner, {
    direction: {
      type: "segmentedenum" /* SegmentedEnum */,
      options: ["horizontal", "vertical"],
      title: "Direction",
      defaultValue: "vertical"
    },
    distribution: {
      type: "enum" /* Enum */,
      options: ["start", "center", "end", "space-between", "space-around", "space-evenly"],
      optionTitles: ["Start", "Center", "End", "Space Between", "Space Around", "Space Evenly"],
      title: "Distribute",
      defaultValue: "space-around"
    },
    alignment: {
      type: "segmentedenum" /* SegmentedEnum */,
      options: ["start", "center", "end"],
      title: "Align",
      defaultValue: "center"
    },
    gap: {
      type: "number" /* Number */,
      min: 0,
      title: "Gap",
      hidden: (props) => {
        return props.distribution !== void 0 && ["space-between", "space-around", "space-evenly"].includes(props.distribution);
      },
      defaultValue: 10
    },
    padding: {
      type: "fusednumber" /* FusedNumber */,
      toggleKey: "paddingPerSide",
      toggleTitles: ["Padding", "Padding per side"],
      valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
      valueLabels: ["t", "r", "b", "l"],
      min: 0,
      title: "Padding",
      defaultValue: 0
    }
  });
  return StackInner;
})();
function isFractionDimension(dimension) {
  return typeof dimension === "string" && dimension.endsWith("fr");
}
function fraction(dimension) {
  const value = parseFloat(dimension);
  return isFiniteNumber(value) ? value : 0;
}
function handleFraction(children, direction, widthType, heightType) {
  return React45.Children.map(children, (child) => {
    if (!isReactChild(child) || !isReactElement(child))
      return;
    const isVertical = direction === "vertical";
    const style = {};
    let hasFraction = false;
    const { style: propsStyle, size: size2 } = child.props;
    let { width, height } = child.props;
    if (size2 !== void 0) {
      if (width === void 0)
        width = size2;
      if (height === void 0)
        height = size2;
    }
    let newWidth = width;
    let newHeight = height;
    if (isFractionDimension(width)) {
      hasFraction = true;
      hasFraction = true;
      if (isVertical) {
        if (widthType === 2 /* Auto */) {
          style.alignSelf = "stretch";
          newWidth = "auto";
        } else {
          newWidth = `${fraction(width) * 100}%`;
        }
      } else {
        newWidth = 1;
        style.flexGrow = fraction(width);
        style.flexBasis = 0;
      }
      style.width = newWidth;
    }
    if (isFractionDimension(height)) {
      hasFraction = true;
      if (isVertical) {
        newHeight = 1;
        style.flexGrow = fraction(height);
        style.flexBasis = 0;
      } else {
        if (heightType === 2 /* Auto */) {
          style.alignSelf = "stretch";
          newHeight = "auto";
        } else {
          newHeight = `${fraction(height) * 100}%`;
        }
      }
      style.height = newHeight;
    }
    if (!hasFraction)
      return child;
    const nextStyle = { ...propsStyle, ...style };
    return React45.cloneElement(child, {
      width: newWidth,
      height: newHeight,
      style: nextStyle
    });
  });
}
function isGapSupportedInMainAxis(justifyContent) {
  if (!justifyContent)
    return false;
  return !["space-between", "space-around", "space-evenly", "stretch"].includes(justifyContent);
}
function isGapEnabled(gap, justifyContent, wrap2) {
  if (!gap) {
    return false;
  }
  if (!wrap2 && !isGapSupportedInMainAxis(justifyContent)) {
    return false;
  }
  return true;
}
function wrapInGapElementForLegacyGap(children, gap, direction, justifyContent, useFlexboxGap, wrap2) {
  const gapStyle = {
    // We need the wrapper to have `display: contents` to prevent the child
    // margins from collapsing when using the fallback gap solution.
    // https://codesandbox.io/s/dreamy-haslett-01ie5?file=/src/styles.css
    display: "contents"
  };
  const gapEnabled = isGapEnabled(gap, justifyContent, wrap2);
  if (gapEnabled) {
    const isVertical = isVerticalDirection(direction);
    gapStyle["--stack-gap-x"] = `${isVertical ? 0 : gap}px`;
    gapStyle["--stack-gap-y"] = `${isVertical ? gap : 0}px`;
  }
  return /* @__PURE__ */ React45.createElement(
    "div",
    {
      "data-framer-legacy-stack-gap-enabled": gapEnabled,
      "data-framer-stack-flexbox-gap": useFlexboxGap,
      style: gapStyle
    },
    children
  );
}
function toFlexDirection(direction) {
  switch (direction) {
    case "vertical":
      return "column";
    case "horizontal":
      return "row";
    default:
      return direction;
  }
}
function isVerticalDirection(direction) {
  return direction === "column" || direction === "column-reverse";
}
function isReverseDirection(direction) {
  switch (direction) {
    case "column-reverse":
    case "row-reverse":
      return true;
    default:
      return false;
  }
}
function toJustifyOrAlignment(distribution) {
  switch (distribution) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return distribution;
  }
}
function useForwardedRef(forwardedRef, innerRef) {
  return (element) => {
    innerRef.current = element;
    if (typeof forwardedRef === "function") {
      forwardedRef(element);
    } else if (forwardedRef) {
      forwardedRef.current = element;
    }
  };
}

// ../../library/src/components/Page/PageContainer.tsx
var pageContentWrapperType = "PageContentWrapper";
function PageContainer({
  children,
  effect,
  dragEnabled,
  direction,
  contentHeight,
  contentWidth,
  alignment,
  gap,
  isLastPage,
  contentOffsetRef,
  constraintsRef,
  directionLock,
  onDragStart,
  onDrag,
  onDragEnd,
  layoutId
}) {
  const isHorizontalDirection = direction === "horizontal";
  const dragAxis = isHorizontalDirection ? "x" : "y";
  const hasHorizontalGap = isHorizontalDirection && !isLastPage && gap;
  const hasVerticalGap = !isHorizontalDirection && !isLastPage && gap;
  const hasAutoWidth = contentWidth !== "stretch" && isHorizontalDirection;
  const hasAutoHeight = contentHeight !== "stretch" && !isHorizontalDirection;
  const wrapperWidth = hasAutoWidth ? "auto" : "100%";
  const wrapperHeight = hasAutoHeight ? "auto" : "100%";
  const containerWidth = hasHorizontalGap && wrapperWidth === "100%" ? `calc(100% + ${gap}px)` : wrapperWidth;
  const containerHeight = hasVerticalGap && wrapperHeight === "100%" ? `calc(100% + ${gap}px)` : wrapperHeight;
  return /* @__PURE__ */ React46.createElement(
    FrameWithMotion,
    {
      position: "relative",
      "data-framer-component-type": "PageContainer",
      width: containerWidth,
      height: containerHeight,
      layoutId: layoutId ? `${layoutId}-container` : void 0,
      backgroundColor: "transparent",
      drag: dragEnabled ? dragAxis : false,
      dragDirectionLock: directionLock,
      _dragX: contentOffsetRef.current.x,
      _dragY: contentOffsetRef.current.y,
      dragConstraints: constraintsRef.current,
      onDrag,
      onDragStart,
      onDragEnd,
      preserve3d: true,
      style: {
        pointerEvents: void 0,
        paddingRight: hasHorizontalGap ? gap : 0,
        paddingBottom: hasVerticalGap ? gap : 0
      }
    },
    /* @__PURE__ */ React46.createElement(
      FrameWithMotion,
      {
        position: "relative",
        "data-framer-component-type": pageContentWrapperType,
        width: wrapperWidth,
        height: wrapperHeight,
        preserve3d: false,
        backgroundColor: "transparent",
        key: effect ? Object.keys(effect).join("") : "",
        style: {
          ...effect,
          pointerEvents: void 0,
          display: "flex",
          flexDirection: isHorizontalDirection ? "row" : "column",
          alignItems: alignment && toJustifyOrAlignment(alignment)
        }
      },
      children
    )
  );
}

// ../../library/src/components/Page/EmulatedPage.tsx
var Page = /* @__PURE__ */ React47.forwardRef(function Page2(props, forwardedRef) {
  var _a;
  const {
    direction = "horizontal",
    contentWidth = "stretch",
    contentHeight = "stretch",
    alignment = "start",
    currentPage = 0,
    animateCurrentPageUpdate = true,
    gap: gapValue = 10,
    padding = 0,
    momentum = false,
    dragEnabled = true,
    defaultEffect = "none",
    background = "transparent",
    overflow = "hidden",
    __fromCodeComponentNode,
    effect,
    children,
    contentOffsetX,
    contentOffsetY,
    onChangePage,
    onScrollStart,
    onScroll,
    onDragStart,
    onDrag,
    onDragEnd,
    directionLock,
    onScrollEnd,
    onDirectionLock,
    onUpdate,
    wheelEnabled = false,
    layoutId: specificLayoutId,
    ...rest
  } = props;
  const layoutId = useLayoutId(props, { specificLayoutId, postfix: "page" });
  const containerProps = { ...rest, background };
  const hasMountedRef = React47.useRef(false);
  const hasFixedSize = RenderTarget.hasRestrictions() && props.__fromCodeComponentNode && isFiniteNumber(containerProps.width) && isFiniteNumber(containerProps.height);
  if (!hasFixedSize && __fromCodeComponentNode && !containerProps.__fromCanvasComponent) {
    containerProps.width = "100%";
    containerProps.height = "100%";
    containerProps._constraints = { enabled: true };
  }
  const { initial, prev } = React47.useRef({
    initial: { x: 0, y: 0 },
    prev: { x: 0, y: 0 }
  }).current;
  const isHorizontal = direction === "horizontal";
  let gap = gapValue;
  if (gap < 0) {
    warnOnce(`The 'gap' property of Page component can not be negative, but is ${gapValue}.`);
    gap = 0;
  }
  injectComponentCSSRules();
  const pageCount = React47.Children.count(children);
  const maxOffsetRef = React47.useRef(0);
  const constraints = React47.useRef({ top: 0, left: 0, right: 0, bottom: 0 });
  const fallbackContainerRef = React47.useRef(null);
  const containerRef = forwardedRef || fallbackContainerRef;
  const scrollableRef = React47.useRef(null);
  const pageEffectValuesRef = React47.useRef([]);
  const pageRectsRef = React47.useRef([]);
  const internalX = useMotionValue(isMotionValue2(contentOffsetX) ? 0 : contentOffsetX != null ? contentOffsetX : 0);
  const internalY = useMotionValue(isMotionValue2(contentOffsetY) ? 0 : contentOffsetY != null ? contentOffsetY : 0);
  const contentOffsetRef = React47.useRef({
    x: isMotionValue2(contentOffsetX) ? contentOffsetX : internalX,
    y: isMotionValue2(contentOffsetY) ? contentOffsetY : internalY
  });
  const currentContentPageRef = React47.useRef(currentPage);
  const propsBoundedCurrentPageRef = React47.useRef(currentPage);
  const latestPropsRef = React47.useRef(props);
  latestPropsRef.current = props;
  const lastDirectionRef = React47.useRef(props.direction);
  const snapToPage = useSnapToPage(currentContentPageRef, contentOffsetRef, isHorizontal);
  const [_, setForceUpdateCount] = React47.useState(0);
  const containerSizeRef = React47.useRef({ width: 200, height: 200 });
  if (hasFixedSize && isFiniteNumber(containerProps.width) && isFiniteNumber(containerProps.height)) {
    containerSizeRef.current.width = containerProps.width;
    containerSizeRef.current.height = containerProps.height;
  }
  const updateOnResize = React47.useCallback(() => {
    if (!hasFixedSize)
      setForceUpdateCount((v) => v + 1);
  }, [hasFixedSize]);
  React47.useEffect(() => {
    if (RenderTarget.current() !== "PREVIEW" /* preview */)
      return;
    globalThis.addEventListener("resize", updateOnResize);
    return () => {
      globalThis.removeEventListener("resize", updateOnResize);
    };
  }, [updateOnResize]);
  const applyEffects = () => {
    pageEffectValuesRef.current.forEach((effectDictionary, index) => {
      const values = effectValues(index, latestPropsRef, pageRectsRef, contentOffsetRef, maxOffsetRef);
      if (!effectDictionary || !values)
        return;
      for (const [key7, value] of Object.entries(values)) {
        const effectValue = effectDictionary[key7];
        if (isMotionValue2(effectValue)) {
          effectValue.set(value);
        }
      }
    });
  };
  const updateMaxOffsetFromPageContents = (containerSize) => {
    const newPageContentRects = getPageContentRects(containerRef, containerSize, direction, gap);
    if (newPageContentRects)
      pageRectsRef.current = newPageContentRects;
    const newMaxOffset = getMaxOffset(
      containerSizeRef.current,
      pageRectsRef.current,
      direction,
      latestPropsRef.current
    );
    if (newMaxOffset !== maxOffsetRef.current) {
      maxOffsetRef.current = newMaxOffset;
      constraints.current.top = -newMaxOffset;
      constraints.current.left = -newMaxOffset;
      if (RenderTarget.current() === "CANVAS" /* canvas */)
        setForceUpdateCount((v) => v + 1);
    }
  };
  const measureContainerSize = () => {
    const element = containerRef.current;
    if (!element)
      return null;
    const { offsetWidth, offsetHeight } = element;
    const currentSize = containerSizeRef.current;
    if (offsetWidth !== currentSize.width || offsetHeight !== currentSize.height) {
      containerSizeRef.current = {
        width: offsetWidth,
        height: offsetHeight
      };
      return containerSizeRef.current;
    }
    return null;
  };
  const updateAndSnapToPage = (newPage, mount = false) => {
    const newBoundedCurrentPage = getBoundedCurrentPage(newPage, pageCount);
    const boundedCurrentPageDidChange = newBoundedCurrentPage !== propsBoundedCurrentPageRef.current;
    if (boundedCurrentPageDidChange) {
      propsBoundedCurrentPageRef.current = newBoundedCurrentPage;
      updateCurrentPage(newBoundedCurrentPage, currentContentPageRef, !mount ? onChangePage : void 0);
    }
    const offset = offsetForPage(newBoundedCurrentPage, pageCount, pageRectsRef, isHorizontal, maxOffsetRef);
    const animated = animateCurrentPageUpdate && RenderTarget.current() !== "CANVAS" /* canvas */ && !mount;
    snapToPage(newBoundedCurrentPage, offset, { animated });
  };
  useIsomorphicLayoutEffect2(() => {
    if (hasMountedRef.current)
      return;
    requestAnimationFrame(() => {
      var _a2;
      currentContentPageRef.current = currentPage;
      const contentOffset = contentOffsetRef.current;
      contentOffset.x.onChange(applyEffects);
      contentOffset.y.onChange(applyEffects);
      applyEffects();
      hasMountedRef.current = true;
      const containerSize = (_a2 = measureContainerSize()) != null ? _a2 : containerSizeRef.current;
      updateMaxOffsetFromPageContents(containerSize);
      updateAndSnapToPage(currentContentPageRef.current, true);
    });
  }, []);
  React47.useEffect(() => {
    if (currentPage !== currentContentPageRef.current)
      updateAndSnapToPage(currentPage);
  }, [currentPage]);
  const handleMeasureLifecycle = () => {
    const newContainerSize = measureContainerSize();
    updateMaxOffsetFromPageContents(newContainerSize != null ? newContainerSize : containerSizeRef.current);
    updateAndSnapToPage(currentContentPageRef.current);
    if (newContainerSize || direction !== lastDirectionRef.current) {
      if (direction === "horizontal") {
        contentOffsetRef.current.y.set(0);
      } else {
        contentOffsetRef.current.x.set(0);
      }
      lastDirectionRef.current = direction;
    }
  };
  useIsomorphicLayoutEffect2(() => {
    if (RenderTarget.current() !== "CANVAS" /* canvas */)
      return;
    handleMeasureLifecycle();
  });
  const onDragStartHandler = (event, info) => {
    if (onScrollStart)
      onScrollStart(info);
    if (onDragStart)
      onDragStart(event, info);
    prev.x = initial.x = info.point.x;
    prev.y = initial.y = info.point.y;
  };
  const onDragHandler = (event, info) => {
    if (onScroll)
      onScroll(info);
    if (onDrag)
      onDrag(event, info);
    prev.x = info.point.x;
    prev.y = info.point.y;
  };
  const onDragTransitionEnd = () => {
    if (props.onDragTransitionEnd)
      props.onDragTransitionEnd();
    if (onScrollEnd) {
      const { x, y } = contentOffsetRef.current;
      const point = { x: x.get(), y: y.get() };
      onScrollEnd({
        point,
        velocity: { x: x.getVelocity(), y: y.getVelocity() },
        offset: { x: point.x - initial.x, y: point.y - initial.y },
        delta: { x: point.x - prev.x, y: point.y - prev.y }
      });
    }
  };
  const onDragEndHandler = async (event, info) => {
    const contentOffset = isHorizontal ? contentOffsetRef.current.x : contentOffsetRef.current.y;
    contentOffset.stop();
    const startPosition = contentOffset.get();
    const axis = isHorizontal ? "x" : "y";
    const velocity = info.velocity[axis];
    let index = nearestPageIndex(pageRectsRef.current, startPosition, startPosition, isHorizontal, momentum);
    if (velocity) {
      inertia({
        from: startPosition,
        velocity,
        modifyTarget: (endPosition) => {
          index = nearestPageIndex(pageRectsRef.current, startPosition, endPosition, isHorizontal, momentum);
          return endPosition;
        }
      }).stop();
    }
    updateCurrentPage(index, currentContentPageRef, onChangePage);
    const offset = offsetForPage(index, pageCount, pageRectsRef, isHorizontal, maxOffsetRef);
    if (onDragEnd)
      onDragEnd(event, info);
    const handler = contentOffsetRef.current[axis];
    animate(handler, offset, {
      type: "spring",
      from: startPosition,
      velocity,
      stiffness: 500,
      damping: 50,
      onComplete: onDragTransitionEnd
    });
  };
  pageEffectValuesRef.current = [];
  const childComponents = React47.Children.map(children, (child, index) => {
    var _a2;
    if (!isReactChild(child) || !isReactElement(child)) {
      return child;
    }
    const update = {
      right: void 0,
      bottom: void 0,
      top: void 0,
      left: void 0,
      _constraints: {
        enabled: false
      }
    };
    if (containerProps.__fromCanvasComponent) {
      update.style = (_a2 = child.props.style) != null ? _a2 : {};
      if (contentWidth === "stretch")
        update.style.width = "100%";
      if (contentHeight === "stretch")
        update.style.height = "100%";
    } else {
      if (contentWidth === "stretch")
        update.width = "100%";
      if (contentHeight === "stretch")
        update.height = "100%";
    }
    let effectDictionary;
    const values = effectValues(index, latestPropsRef, pageRectsRef, contentOffsetRef, maxOffsetRef);
    if (values) {
      effectDictionary = {};
      for (const key7 in values) {
        effectDictionary[key7] = motionValue(values[key7]);
      }
    }
    pageEffectValuesRef.current.push(effectDictionary);
    return /* @__PURE__ */ React47.createElement(
      PageContainer,
      {
        key: index,
        effect: effectDictionary,
        dragEnabled,
        direction,
        contentHeight,
        contentWidth,
        alignment,
        gap,
        isLastPage: index === pageCount - 1,
        contentOffsetRef,
        constraintsRef: constraints,
        directionLock,
        onDragStart: onDragStartHandler,
        onDrag: onDragHandler,
        onDragEnd: onDragEndHandler,
        layoutId: layoutId ? `${layoutId}-${index}` : void 0
      },
      React47.cloneElement(child, update)
    );
  });
  useWheelScroll(scrollableRef, {
    enabled: wheelEnabled,
    initial,
    prev,
    direction,
    constraints,
    offsetX: contentOffsetRef.current.x,
    offsetY: contentOffsetRef.current.y,
    onScrollStart,
    onScroll,
    onScrollEnd
  });
  return /* @__PURE__ */ React47.createElement(
    FrameWithMotion,
    {
      "data-framer-component-type": "PageWrapper",
      preserve3d: false,
      perspective: hasEffect(props) ? 1200 : void 0,
      ...containerProps,
      style: { pointerEvents: void 0, ...containerProps.style, overflow },
      layoutId,
      ref: containerRef,
      onLayoutMeasure: handleMeasureLifecycle
    },
    /* @__PURE__ */ React47.createElement(
      FrameWithMotion,
      {
        "data-framer-component-type": "Page",
        ref: scrollableRef,
        background: null,
        x: contentOffsetRef.current.x,
        y: contentOffsetRef.current.y,
        width: "100%",
        height: "100%",
        preserve3d: true,
        layout: true,
        layoutId: layoutId !== void 0 ? layoutId + "-page" : void 0,
        style: {
          padding: makePaddingString(paddingFromProps(props)),
          display: "flex",
          flexDirection: isHorizontal ? "row" : "column",
          pointerEvents: (_a = props.style) == null ? void 0 : _a.pointerEvents
        }
      },
      /* @__PURE__ */ React47.createElement(
        EmptyState,
        {
          title: "Page",
          description: "Click and drag the connector to any frame on the canvas \u2192",
          children,
          size: containerSizeRef.current,
          insideUserCodeComponent: !__fromCodeComponentNode
        }
      ),
      childComponents
    )
  );
});
function cubeEffect(info) {
  const { normalizedOffset, direction } = info;
  const isHorizontal = direction === "horizontal";
  return {
    originX: normalizedOffset < 0 ? 1 : 0,
    originY: normalizedOffset < 0 ? 1 : 0,
    rotateY: isHorizontal ? Math.min(Math.max(-90, normalizedOffset * 90), 90) : 0,
    rotateX: isHorizontal ? 0 : Math.min(Math.max(-90, normalizedOffset * -90), 90),
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden"
  };
}
function coverflowEffect(info) {
  const { normalizedOffset, direction, size: size2 } = info;
  const isHorizontal = direction === "horizontal";
  return {
    rotateY: isHorizontal ? Math.min(45, Math.max(-45, normalizedOffset * -45)) : 0,
    rotateX: isHorizontal ? 0 : Math.min(45, Math.max(-45, normalizedOffset * 45)),
    originX: isHorizontal ? normalizedOffset < 0 ? 0 : 1 : 0.5,
    originY: isHorizontal ? 0.5 : normalizedOffset < 0 ? 0 : 1,
    x: isHorizontal ? `${normalizedOffset * -25}%` : 0,
    y: isHorizontal ? 0 : `${normalizedOffset * -25}%`,
    z: -Math.abs(normalizedOffset),
    scale: 1 - Math.abs(normalizedOffset / 10)
  };
}
function calcPileAxisOffset(offset, length) {
  return offset * length - offset * 8;
}
function pileEffect(info) {
  const { normalizedOffset, direction, size: size2 } = info;
  const isHorizontal = direction === "horizontal";
  const absoluteOffset = Math.abs(normalizedOffset);
  return {
    x: normalizedOffset < 0 && isHorizontal ? calcPileAxisOffset(absoluteOffset, size2.width) : 0,
    y: normalizedOffset < 0 && !isHorizontal ? calcPileAxisOffset(absoluteOffset, size2.height) : 0,
    scale: normalizedOffset < 0 ? 1 - absoluteOffset / 50 : 1
  };
}
function wheelEffect(info) {
  const { normalizedOffset, direction, size: size2 } = info;
  const isHorizontal = direction === "horizontal";
  const originZ = (isHorizontal ? size2.width : size2.height) * 18 / (2 * Math.PI);
  const rotateX = isHorizontal ? 0 : normalizedOffset * -20;
  const rotateY = isHorizontal ? normalizedOffset * 20 : 0;
  const y = isHorizontal ? 0 : normalizedOffset * -size2.height;
  const x = isHorizontal ? normalizedOffset * -size2.width : 0;
  return {
    opacity: 1 - Math.abs(normalizedOffset) / 4,
    transform: `translate(${x}px, ${y}px) translateZ(-${originZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${originZ}px)`
  };
}
function getDefaultEffect(type) {
  switch (type) {
    case "cube":
      return cubeEffect;
    case "coverflow":
      return coverflowEffect;
    case "pile":
      return pileEffect;
    case "wheel":
      return wheelEffect;
    default:
      return null;
  }
}
function nearestPageIndex(pageRects, startPosition, endPosition, isHorizontalDirection, allowSkippingPages) {
  const distanceToStart = function(rect) {
    const rectPosition = isHorizontalDirection ? rect.x : rect.y;
    return Math.abs(rectPosition + startPosition);
  };
  const distanceToEnd = function(rect) {
    const rectPosition = isHorizontalDirection ? rect.x : rect.y;
    return Math.abs(rectPosition + endPosition);
  };
  if (allowSkippingPages) {
    const closestPages = [...pageRects].sort((a, b) => distanceToEnd(a) - distanceToEnd(b));
    if (!closestPages[0])
      return -1;
    return pageRects.indexOf(closestPages[0]);
  } else {
    const closestToStart = [...pageRects].sort((a, b) => distanceToStart(a) - distanceToStart(b));
    if (closestToStart.length === 1 && closestToStart[0])
      return pageRects.indexOf(closestToStart[0]);
    const pageA = closestToStart[0];
    const pageB = closestToStart[1];
    if (!pageA || !pageB)
      return -1;
    const closestPages = [pageA, pageB].sort((a, b) => distanceToEnd(a) - distanceToEnd(b));
    if (!closestPages[0])
      return -1;
    return pageRects.indexOf(closestPages[0]);
  }
}
function getPageContentRects(containerRef, containerSize, direction, gap) {
  var _a;
  const containerElement = containerRef.current;
  if (!containerElement)
    return;
  const contentWrappers = [];
  (_a = containerElement.firstChild) == null ? void 0 : _a.childNodes.forEach((node) => {
    const childNode = node.firstChild;
    if (!(childNode instanceof HTMLElement))
      return;
    const componentType = childNode.getAttribute("data-framer-component-type");
    if (componentType === pageContentWrapperType) {
      contentWrappers.push(childNode);
    }
  });
  const sizes = [];
  contentWrappers.forEach((contentWrapper) => {
    if (contentWrapper instanceof HTMLElement && contentWrapper.firstChild instanceof HTMLElement) {
      let width = contentWrapper.firstChild.offsetWidth;
      let height = contentWrapper.firstChild.offsetHeight;
      if (import_process5.default.env.NODE_ENV === "test") {
        width = 100;
        height = 100;
      }
      sizes.push({ width, height });
    } else {
      sizes.push(null);
    }
  });
  let maxX = 0;
  let maxY = 0;
  const isHorizontal = direction === "horizontal";
  return sizes.map((queriedSize) => {
    const size2 = queriedSize || containerSize;
    const x = maxX;
    const y = maxY;
    if (isHorizontal) {
      maxX += size2.width + gap;
    } else {
      maxY += size2.height + gap;
    }
    return { ...size2, x, y };
  });
}
function getMaxOffset(containerSize, pageContentRects, direction, paddingProps) {
  const lastPageRect = pageContentRects[pageContentRects.length - 1];
  if (!lastPageRect)
    return 0;
  const paddingSides = paddingFromProps(paddingProps);
  const isHorizontal = direction === "horizontal";
  const paddingStart = isHorizontal ? paddingSides.left : paddingSides.top;
  const paddingEnd = isHorizontal ? paddingSides.right : paddingSides.bottom;
  const pageWidth = isHorizontal ? lastPageRect.width : lastPageRect.height;
  const containerWidth = isHorizontal ? containerSize.width : containerSize.height;
  const freeSpace = containerWidth - paddingStart - paddingEnd - pageWidth;
  const target = isHorizontal ? lastPageRect.x : lastPageRect.y;
  if (freeSpace <= 0)
    return Math.max(target, 0);
  return Math.max(target - freeSpace, 0);
}
function offsetForPage(index, pageCount, pageRectsRef, isHorizontal, maxOffsetRef) {
  const pageIndex = Math.max(0, Math.min(pageCount - 1, index));
  const currentPageRect = pageRectsRef.current[pageIndex];
  if (!currentPageRect) {
    return 0;
  }
  if (isHorizontal) {
    return -Math.min(currentPageRect.x, maxOffsetRef.current);
  } else {
    return -Math.min(currentPageRect.y, maxOffsetRef.current);
  }
}
function useSnapToPage(currentContentPageRef, contentOffsetRef, isHorizontal) {
  return (pageIndex, offset, options) => {
    currentContentPageRef.current = pageIndex;
    const contentOffset = isHorizontal ? contentOffsetRef.current.x : contentOffsetRef.current.y;
    if (!options || !options.animated) {
      contentOffset.set(offset);
      return;
    }
    const axis = isHorizontal ? "x" : "y";
    animate(contentOffsetRef.current[axis], offset, {
      type: "spring",
      from: contentOffset.get(),
      velocity: contentOffset.getVelocity(),
      stiffness: 500,
      damping: 50
    });
  };
}
function getBoundedCurrentPage(pageIndex, pageCount) {
  return pageIndex >= 0 ? Math.min(pageIndex, pageCount - 1) : (pageIndex % pageCount + pageCount) % pageCount;
}
function effectValues(index, latestPropsRef, pageRectsRef, contentOffsetRef, maxOffsetRef) {
  const {
    direction: latestDirection = "horizontal",
    defaultEffect: latestDefaultEffect,
    effect: latestEffect,
    gap: latestGap = 0
  } = latestPropsRef.current;
  const latestIsHorizontal = latestDirection === "horizontal";
  const pageRect = pageRectsRef.current[index] || {
    x: latestIsHorizontal ? index * 200 + latestGap : 0,
    y: latestIsHorizontal ? 0 : index * 200 + latestGap,
    width: 200,
    height: 200
  };
  const effectFunction = latestEffect || getDefaultEffect(latestDefaultEffect);
  if (!effectFunction)
    return null;
  let offset;
  let normalizedOffset;
  const contentOffset = contentOffsetRef.current;
  const maxScrollOffset = maxOffsetRef.current;
  if (latestIsHorizontal) {
    offset = Math.min(pageRect.x, maxScrollOffset) + (contentOffset ? contentOffset.x.get() : 0);
    normalizedOffset = offset / (pageRect.width + latestGap);
  } else {
    offset = Math.min(pageRect.y, maxScrollOffset) + (contentOffset ? contentOffset.y.get() : 0);
    normalizedOffset = offset / (pageRect.height + latestGap);
  }
  const size2 = { width: pageRect.width, height: pageRect.height };
  return effectFunction({
    offset,
    normalizedOffset,
    size: size2,
    index,
    direction: latestDirection,
    gap: latestGap,
    pageCount: pageRectsRef.current.length
  });
}
function hasEffect(props) {
  return !!props.effect || !!getDefaultEffect(props.defaultEffect);
}
function updateCurrentPage(newPageIndex, currentContentPageRef, onChangePage) {
  if (currentContentPageRef.current === newPageIndex)
    return;
  if (onChangePage)
    onChangePage(newPageIndex, currentContentPageRef.current);
  currentContentPageRef.current = newPageIndex;
}

// ../../library/src/components/Page/Page.tsx
var Page3 = /* @__PURE__ */ (() => {
  const ContentDimension = {
    Auto: "auto",
    Stretch: "stretch"
  };
  const pageContentDimensionOptions = [ContentDimension.Auto, ContentDimension.Stretch];
  const pageContentDimensionTitles = /* @__PURE__ */ pageContentDimensionOptions.map((option) => {
    switch (option) {
      case ContentDimension.Auto:
        return "Auto";
      case ContentDimension.Stretch:
        return "Stretch";
    }
  });
  const pageEffectOptions = ["none", "cube", "coverflow", "wheel", "pile"];
  const pageEffectTitles = /* @__PURE__ */ pageEffectOptions.map((option) => {
    switch (option) {
      case "none":
        return "None";
      case "cube":
        return "Cube";
      case "coverflow":
        return "Cover Flow";
      case "wheel":
        return "Wheel";
      case "pile":
        return "Pile";
    }
  });
  const pageAlignmentOptions = ["start", "center", "end"];
  const genericAlignmentTitles = /* @__PURE__ */ pageAlignmentOptions.map((option) => {
    switch (option) {
      case "start":
        return "Start";
      case "center":
        return "Center";
      case "end":
        return "End";
    }
  });
  addPropertyControls(Page, {
    direction: {
      type: "enum" /* Enum */,
      options: ["horizontal", "vertical"],
      title: "Direction",
      defaultValue: "horizontal",
      displaySegmentedControl: true,
      optionIcons: ["direction-horizontal", "direction-vertical"]
    },
    directionLock: {
      type: "boolean" /* Boolean */,
      title: "Lock",
      enabledTitle: "1 Axis",
      disabledTitle: "Off",
      defaultValue: true
    },
    contentWidth: {
      type: "enum" /* Enum */,
      options: pageContentDimensionOptions,
      optionTitles: pageContentDimensionTitles,
      title: "Width",
      defaultValue: ContentDimension.Stretch,
      displaySegmentedControl: true
    },
    contentHeight: {
      type: "enum" /* Enum */,
      options: pageContentDimensionOptions,
      optionTitles: pageContentDimensionTitles,
      title: "Height",
      defaultValue: ContentDimension.Stretch,
      displaySegmentedControl: true
    },
    alignment: {
      type: "enum" /* Enum */,
      options: pageAlignmentOptions,
      optionTitles: genericAlignmentTitles,
      title: "Align",
      hidden(props) {
        const { direction, contentWidth, contentHeight } = props;
        const isHorizontalDirection = direction === "horizontal";
        const crossDimension = isHorizontalDirection ? contentHeight : contentWidth;
        return crossDimension === ContentDimension.Stretch;
      },
      defaultValue: "start",
      displaySegmentedControl: true,
      optionIcons: {
        direction: {
          horizontal: ["align-top", "align-middle", "align-bottom"],
          vertical: ["align-left", "align-center", "align-right"]
        }
      }
    },
    gap: {
      type: "number" /* Number */,
      min: 0,
      title: "Gap",
      defaultValue: 0
    },
    padding: {
      type: "fusednumber" /* FusedNumber */,
      toggleKey: "paddingPerSide",
      toggleTitles: ["Padding", "Padding per side"],
      valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
      valueLabels: ["T", "R", "B", "L"],
      min: 0,
      title: "Padding",
      defaultValue: 0
    },
    overflow: {
      type: "enum" /* Enum */,
      title: "Overflow",
      defaultValue: "hidden",
      options: ["visible", "hidden"],
      optionTitles: ["Visible", "Hidden"],
      displaySegmentedControl: true
    },
    currentPage: {
      type: "number" /* Number */,
      min: 0,
      title: "Current",
      displayStepper: true,
      defaultValue: 0
    },
    momentum: {
      type: "boolean" /* Boolean */,
      enabledTitle: "On",
      disabledTitle: "Off",
      title: "Momentum",
      defaultValue: false
    },
    dragEnabled: {
      type: "boolean" /* Boolean */,
      title: "Drag",
      enabledTitle: "On",
      disabledTitle: "Off",
      defaultValue: true
    },
    wheelEnabled: {
      type: "boolean" /* Boolean */,
      title: "Wheel",
      enabledTitle: "On",
      disabledTitle: "Off",
      defaultValue: false
    },
    defaultEffect: {
      type: "enum" /* Enum */,
      options: pageEffectOptions,
      optionTitles: pageEffectTitles,
      title: "Effect",
      defaultValue: "none"
    },
    children: {
      type: "array" /* Array */,
      title: "Content",
      control: { type: "componentinstance" /* ComponentInstance */, title: "Page" }
    }
  });
  Page.supportsConstraints = true;
  return Page;
})();

// ../../library/src/components/Screen.tsx
import React50, { Component as Component9 } from "react";

// ../../library/src/events/recognizer/GestureRecognizer.ts
function stateName(state) {
  switch (state) {
    case 2 /* Possible */:
      return "Possible";
    case 4 /* Began */:
      return "Began";
    case 8 /* Changed */:
      return "Changed";
    case 16 /* Ended */:
      return "Ended";
    case 32 /* Failed */:
      return "Failed";
    case 64 /* Cancelled */:
      return "Cancelled";
    case 128 /* Recognized */:
      return "Recognized";
    default:
      return "Unknown";
  }
}
function containsBitmask(value, bitmask) {
  return (value & bitmask) !== 0;
}
var GestureRecognizer = class {
  constructor() {
    this._state = 2 /* Possible */;
    this.preventers = [];
  }
  get state() {
    return this._state;
  }
  setState(state) {
    this._state = state;
  }
  get isPrevented() {
    let prevented = false;
    for (const recognizer of this.preventers) {
      if (recognizer.state & (4 /* Began */ | 8 /* Changed */ | 16 /* Ended */)) {
        prevented = true;
        break;
      }
    }
    return prevented;
  }
  canBePreventedBy(recognizer) {
    this.preventers.push(recognizer);
  }
  hasState(bitmask) {
    return containsBitmask(this.state, bitmask);
  }
  stateSwitch(newState) {
    let allowedStates;
    switch (this.state) {
      case 2 /* Possible */:
        allowedStates = 4 /* Began */ | 128 /* Recognized */ | 32 /* Failed */;
        break;
      case 4 /* Began */:
        allowedStates = 8 /* Changed */ | 64 /* Cancelled */ | 16 /* Ended */;
        break;
      case 8 /* Changed */:
        allowedStates = 8 /* Changed */ | 64 /* Cancelled */ | 16 /* Ended */;
        break;
      case 128 /* Recognized */:
      case 16 /* Ended */:
      case 64 /* Cancelled */:
      case 32 /* Failed */:
        allowedStates = 2 /* Possible */;
        break;
      default:
        allowedStates = 0;
    }
    if (!containsBitmask(newState, allowedStates)) {
      console.warn(`Unallowed state change from ${stateName(this.state)} to ${stateName(newState)}`);
      return;
    }
    this.setState(newState);
  }
  cancel() {
    if (this.hasState(4 /* Began */ | 8 /* Changed */)) {
      this.setState(64 /* Cancelled */);
    }
    this.reset();
  }
  reset() {
    if (!this.hasState(2 /* Possible */)) {
      this.stateSwitch(2 /* Possible */);
    }
  }
};

// ../../library/src/events/recognizer/MouseWheelGestureRecognizer.ts
var MouseWheelGestureRecognizer = class extends GestureRecognizer {
  constructor() {
    super(...arguments);
    this.eventType = "mousewheel";
    this.onMouseWheelEnd = debounce((event) => {
      if (this.handler && this.startEvent) {
        this.stateSwitch(16 /* Ended */);
        this.handler.gestureEnded(this.eventType, event, this.startEvent.target);
        this.startEvent = null;
        this.reset();
      }
    }, 300);
  }
  pointerSessionBegan(session, event) {
  }
  pointerSessionMoved(session, event) {
  }
  pointerSessionEnded(session, event) {
  }
  mouseWheel(session, event) {
    if (!this.handler)
      return;
    if (this.hasState(2 /* Possible */)) {
      this.startEvent = event;
      this.stateSwitch(4 /* Began */);
      this.handler.gestureBegan(this.eventType, event, this.startEvent.target);
      return;
    }
    if (this.hasState(4 /* Began */ | 8 /* Changed */) && this.startEvent) {
      this.stateSwitch(8 /* Changed */);
      this.handler.gestureChanged(this.eventType, event, this.startEvent.target);
    }
    this.onMouseWheelEnd(event);
  }
};

// ../../library/src/events/recognizer/PanGestureRecognizer.ts
var PanGestureRecognizer = class extends GestureRecognizer {
  constructor() {
    super(...arguments);
    this.eventType = "pan";
  }
  pointerSessionBegan(session, event) {
    this.recognize(session, event);
  }
  pointerSessionMoved(session, event) {
    this.recognize(session, event);
  }
  pointerSessionEnded(session, event) {
    this.panend(event);
  }
  recognize(session, event) {
    if (Math.abs(event.delta.x) > 0 || Math.abs(event.delta.y) > 0) {
      if (this.startEvent) {
        this.pan(event);
      } else {
        this.panstart(event);
      }
    }
  }
  reset() {
    this.startEvent = null;
    super.reset();
  }
  panstart(event) {
    if (!this.hasState(2 /* Possible */) || event.isLeftMouseClick !== void 0 && !event.isLeftMouseClick) {
      return;
    }
    this.stateSwitch(4 /* Began */);
    this.startEvent = event;
    if (this.handler && this.startEvent.target) {
      this.handler.gestureBegan(this.eventType, event, this.startEvent.target);
    }
  }
  pan(event) {
    if (!this.hasState(4 /* Began */ | 8 /* Changed */)) {
      return;
    }
    if (!this.startEvent) {
      return;
    }
    this.stateSwitch(8 /* Changed */);
    if (this.handler && this.startEvent.target) {
      this.handler.gestureChanged(this.eventType, event, this.startEvent.target);
    }
  }
  panend(event) {
    if (!this.hasState(4 /* Began */ | 8 /* Changed */)) {
      return;
    }
    if (!this.startEvent) {
      return;
    }
    this.stateSwitch(16 /* Ended */);
    if (this.handler && this.startEvent.target) {
      this.handler.gestureEnded(this.eventType, event, this.startEvent.target);
    }
  }
};

// ../../library/src/events/recognizer/TapGestureRecognizer.ts
var TapGestureRecognizer = class extends GestureRecognizer {
  constructor() {
    super(...arguments);
    this.eventType = "tap";
  }
  pointerSessionBegan(session, event) {
    if (this.handler && (event.isLeftMouseClick === void 0 || event.isLeftMouseClick)) {
      this.handler.gestureBegan(this.eventType, event, null);
    }
  }
  pointerSessionMoved(session, event) {
  }
  pointerSessionEnded(session, event) {
    if (this.isPrevented) {
      this.stateSwitch(32 /* Failed */);
    } else if (!session.startEvent || session.startEvent.target === event.target) {
      this.stateSwitch(128 /* Recognized */);
      if (this.handler) {
        this.handler.gestureChanged(this.eventType, event, null);
      }
    } else {
      this.stateSwitch(32 /* Failed */);
    }
    if (this.handler) {
      this.handler.gestureEnded(this.eventType, event, null);
    }
  }
};

// ../../library/src/events/FramerEventSession.ts
var FramerEventSession = class {
  constructor(dispatcher, customOrigin) {
    this.events = [];
    this.recognizers = [];
    this.mouseWheelRecognizer = new MouseWheelGestureRecognizer();
    this.dispatcher = dispatcher;
    if (customOrigin) {
      this.originElement = customOrigin;
    } else {
      this.originElement = document.body;
    }
    const pan = new PanGestureRecognizer();
    const tap = new TapGestureRecognizer();
    pan.handler = this;
    tap.handler = this;
    this.mouseWheelRecognizer.handler = this;
    this.recognizers = [tap, pan];
  }
  get isStarted() {
    return this.events.length !== 0;
  }
  get startEvent() {
    return this.isStarted ? this.events[0] : void 0;
  }
  get lastEvent() {
    return this.events[this.events.length - 1];
  }
  // Event handling
  processEvent(event) {
    this.events.push(event);
    return event;
  }
  pointerDown(event) {
    if (this.isStarted) {
      return;
    }
    this.processEvent(event);
    this.recognizers.map((r) => {
      r.cancel();
      r.pointerSessionBegan(this, event);
    });
  }
  pointerMove(event) {
    if (!this.isStarted) {
      return;
    }
    this.processEvent(event);
    this.recognizers.map((r) => {
      r.pointerSessionMoved(this, event);
    });
  }
  pointerUp(event) {
    if (!this.isStarted) {
      return;
    }
    this.processEvent(event);
    this.recognizers.map((r) => {
      r.pointerSessionEnded(this, event);
    });
    this.clearEvents();
    this.recognizers.map((r) => {
      r.reset();
    });
  }
  mouseWheel(event) {
    this.processEvent(event);
    this.mouseWheelRecognizer.mouseWheel(this, event);
    this.clearEvents();
  }
  clearEvents() {
    this.events = [];
  }
  dispatch(type, event, target = null) {
    const dispatchTarget = target || this.startEvent && this.startEvent.target || event.target;
    if (dispatchTarget) {
      this.dispatcher(type, event, dispatchTarget);
    }
  }
  // Gesture Handler
  gestureBegan(type, event, target) {
    this.dispatch(`${type}start`, event, target);
  }
  gestureChanged(type, event, target) {
    this.dispatch(type, event, target);
  }
  gestureEnded(type, event, target) {
    this.dispatch(`${type}end`, event, target);
  }
  // Calculatinos
  /**
   * Average velocity over last n seconds in pixels per second.
   * @param n - number of events to use for calculation
   */
  velocity(t = Loop.TimeStep * 2) {
    var _a;
    if (!this.isStarted || this.events.length < 2) {
      return { x: 0, y: 0 };
    }
    const events2 = this.events;
    let i = events2.length - 1;
    let event = null;
    while (i >= 0) {
      event = (_a = events2[i]) != null ? _a : null;
      if (!event || MainLoop.time - event.loopTime > t) {
        break;
      }
      i--;
    }
    if (!event) {
      return { x: 0, y: 0 };
    }
    const current = events2[events2.length - 1];
    if (!current) {
      return { x: 0, y: 0 };
    }
    const time2 = (MainLoop.time - event.loopTime) * 1e3;
    if (time2 === 0) {
      return { x: 0, y: 0 };
    }
    const velocity = {
      x: (current.devicePoint.x - event.devicePoint.x) / time2,
      y: (current.devicePoint.y - event.devicePoint.y) / time2
    };
    if (velocity.x === Infinity) {
      velocity.x = 0;
    }
    if (velocity.y === Infinity) {
      velocity.y = 0;
    }
    return velocity;
  }
  offset(event) {
    if (!this.startEvent) {
      return { x: 0, y: 0 };
    }
    const subtract = (pointA, pointB) => {
      return {
        x: pointA.x - pointB.x,
        y: pointA.y - pointB.y
      };
    };
    return subtract(event.devicePoint, this.startEvent.devicePoint);
  }
};

// ../../library/src/events/recognizer/MouseEventListener.ts
import { Component as Component7 } from "react";
var MouseEventListener = class extends Component7 {
  constructor() {
    super(...arguments);
    /**
     * @internal
     */
    this.domMouseDown = (originalEvent) => {
      safeWindow.addEventListener("mousemove", this.domMouseMove);
      safeWindow.addEventListener("mouseup", this.domMouseUp);
      const event = new FramerEvent(originalEvent, this.props.session);
      this.props.session.pointerDown(event);
    };
    /**
     * @internal
     */
    this.domMouseMove = (originalEvent) => {
      const leftMouseButtonOnlyDown = originalEvent.buttons === void 0 ? originalEvent.which === 1 : originalEvent.buttons === 1;
      if (!leftMouseButtonOnlyDown) {
        this.domMouseUp(originalEvent);
        return;
      }
      const event = new FramerEvent(originalEvent, this.props.session);
      this.props.session.pointerMove(event);
    };
    /**
     * @internal
     */
    this.domMouseUp = (originalEvent) => {
      safeWindow.removeEventListener("mousemove", this.domMouseMove);
      safeWindow.removeEventListener("mouseup", this.domMouseUp);
      const event = new FramerEvent(originalEvent, this.props.session);
      this.props.session.pointerUp(event);
    };
    /**
     * @internal
     */
    this.domMouseWheel = (originalEvent) => {
      const event = new FramerEvent(originalEvent, this.props.session);
      this.props.session.mouseWheel(event);
    };
  }
  /**
   * @internal
   */
  render() {
    return this.props.children;
  }
  /**
   * @internal
   */
  componentDidMount() {
    safeWindow.addEventListener("mousedown", this.domMouseDown);
    safeWindow.addEventListener("wheel", this.domMouseWheel);
  }
  /**
   * @internal
   */
  componentWillUnmount() {
    safeWindow.removeEventListener("mousemove", this.domMouseMove);
    safeWindow.removeEventListener("mousedown", this.domMouseDown);
    safeWindow.removeEventListener("mouseup", this.domMouseUp);
    safeWindow.removeEventListener("wheel", this.domMouseWheel);
  }
};

// ../../library/src/events/recognizer/TouchEventListener.ts
import { Component as Component8 } from "react";
var TouchEventListener = class extends Component8 {
  constructor() {
    super(...arguments);
    /**
     * @internal
     */
    this.domTouchStart = (originalEvent) => {
      safeWindow.addEventListener("touchmove", this.domTouchMove);
      safeWindow.addEventListener("touchend", this.domTouchEnd);
      const event = new FramerEvent(originalEvent, this.props.session);
      this.props.session.pointerDown(event);
    };
    /**
     * @internal
     */
    this.domTouchMove = (originalEvent) => {
      const event = new FramerEvent(originalEvent, this.props.session);
      this.props.session.pointerMove(event);
    };
    /**
     * @internal
     */
    this.domTouchEnd = (originalEvent) => {
      safeWindow.removeEventListener("touchmove", this.domTouchMove);
      safeWindow.removeEventListener("touchend", this.domTouchEnd);
      const event = new FramerEvent(originalEvent, this.props.session);
      this.props.session.pointerUp(event);
    };
  }
  /**
   * @internal
   */
  render() {
    return this.props.children;
  }
  /**
   * @internal
   */
  componentDidMount() {
    safeWindow.addEventListener("touchstart", this.domTouchStart);
  }
  /**
   * @internal
   */
  componentWillUnmount() {
    safeWindow.removeEventListener("touchstart", this.domTouchStart);
    safeWindow.removeEventListener("touchmove", this.domTouchMove);
    safeWindow.removeEventListener("touchend", this.domTouchEnd);
  }
};

// ../../library/src/events/FramerEventListener.ts
var FramerEventListener = /* @__PURE__ */ environment.isTouch() ? TouchEventListener : MouseEventListener;

// ../../library/src/components/Scroll/Scroll.tsx
import React54 from "react";

// ../../library/src/components/Scroll/EmulatedScroll.tsx
import React51, { useCallback as useCallback4, useMemo as useMemo3, useRef as useRef8 } from "react";
var directionMap = {
  horizontal: "x",
  vertical: "y",
  both: true
};
function convertScrollDirectionToDrag(scrollDirection) {
  return scrollDirection ? directionMap[scrollDirection] : scrollDirection;
}
var useUpdateChildSize = ({
  dragDirection,
  children,
  fromCanvasComponent
}) => {
  return useMemo3(() => {
    return React51.Children.map(children, (child) => {
      if (child === null || typeof child !== "object" || typeof child.type === "string") {
        return child;
      }
      const updatedSize = {};
      switch (dragDirection) {
        case "vertical":
          updatedSize.width = "100%";
          break;
        case "horizontal":
          updatedSize.height = "100%";
          break;
        default:
          return child;
      }
      const update = fromCanvasComponent ? { style: Object.assign({}, child.props.style, updatedSize) } : updatedSize;
      return React51.cloneElement(child, update);
    });
  }, [dragDirection, children]);
};
var numberFromOptionalMotionValue = (value) => {
  return typeof value === "number" ? value : value.get();
};
var EmulatedScroll = /* @__PURE__ */ React51.forwardRef(
  function EmulatedScroll2(props, forwardedRef) {
    const {
      direction = "vertical",
      directionLock = false,
      dragEnabled = true,
      dragElastic,
      dragMomentum,
      dragTransition,
      wheelEnabled = true,
      contentOffsetX = 0,
      contentOffsetY = 0,
      contentWidth,
      contentHeight,
      onScrollStart,
      onScroll,
      onScrollEnd,
      onDragStart,
      onDrag,
      onDragEnd,
      onUpdate,
      onDirectionLock,
      style,
      children,
      scrollAnimate,
      resetOffset,
      overdragEnabled = true,
      layoutId: specificLayoutId,
      native,
      ...containerProps
    } = props;
    const layoutId = useLayoutId(props, { specificLayoutId, postfix: "scroll" });
    const defaultX = useMotionValue(typeof contentOffsetX === "number" ? contentOffsetX : 0);
    const defaultY = useMotionValue(typeof contentOffsetY === "number" ? contentOffsetY : 0);
    const x = isMotionValue2(contentOffsetX) ? contentOffsetX : defaultX;
    const y = isMotionValue2(contentOffsetY) ? contentOffsetY : defaultY;
    const measuredConstraints = useRef8(null);
    const dragControls = useDragControls();
    const isInTarget = useIsInCurrentNavigationTarget();
    const wasInTargetRef = useRef8(true);
    injectComponentCSSRules();
    function setMeasureDragConstraints(constraints) {
      constraints = offsetToZero(constraints);
      if (contentWidth !== void 0)
        constraints.left = -contentWidth;
      if (contentHeight !== void 0)
        constraints.top = -contentHeight;
      return measuredConstraints.current = constraints;
    }
    const { initial, prev } = useRef8({
      initial: { x: 0, y: 0 },
      prev: { x: 0, y: 0 }
    }).current;
    const isPreview = RenderTarget.current() === "PREVIEW" /* preview */;
    const containerFallbackRef = useRef8(null);
    const containerRef = forwardedRef || containerFallbackRef;
    const contentRef = useRef8(null);
    const lastOffsetRef = useRef8(null);
    function shouldResetScroll(inTarget) {
      const hasEnteredTarget = inTarget && wasInTargetRef.current === false;
      return resetOffset && hasEnteredTarget;
    }
    function measureAndUpdateScrollOffset() {
      if (!contentRef.current || !containerRef.current)
        return;
      const mustReset = shouldResetScroll(isInTarget);
      wasInTargetRef.current = isInTarget;
      const previous = lastOffsetRef.current;
      if (previous === null && contentOffsetX === void 0 && contentOffsetY === void 0)
        return;
      const shouldUpdateOffset = previous === null || !isMotionValue2(contentOffsetX) && contentOffsetX !== previous.offsetX || !isMotionValue2(contentOffsetY) && contentOffsetY !== previous.offsetY;
      const currentMaxXOffset = contentRef.current.offsetWidth - containerRef.current.offsetWidth;
      const currentMaxYOffset = contentRef.current.offsetHeight - containerRef.current.offsetHeight;
      const hasSizeChanged = currentMaxXOffset !== (previous == null ? void 0 : previous.maxXOffset) || currentMaxYOffset !== (previous == null ? void 0 : previous.maxYOffset);
      const hasScrollOffsetChanged = (previous == null ? void 0 : previous.x) !== x.get() || (previous == null ? void 0 : previous.y) !== y.get();
      const shouldStayPinned = hasSizeChanged && !hasScrollOffsetChanged;
      if (mustReset || shouldUpdateOffset || shouldStayPinned) {
        const currentOffsetX = direction !== "vertical" ? numberFromOptionalMotionValue(contentOffsetX) : 0;
        const currentOffsetY = direction !== "horizontal" ? numberFromOptionalMotionValue(contentOffsetY) : 0;
        const nextXOffset = -Math.min(currentOffsetX, currentMaxXOffset);
        const nextYOffset = -Math.min(currentOffsetY, currentMaxYOffset);
        x.set(nextXOffset);
        y.set(nextYOffset);
        lastOffsetRef.current = {
          maxXOffset: currentMaxXOffset,
          maxYOffset: currentMaxYOffset,
          offsetX: currentOffsetX,
          offsetY: currentOffsetY,
          x: nextXOffset,
          y: nextYOffset
        };
      }
    }
    useIsomorphicLayoutEffect2(() => {
      if (RenderTarget.current() !== "CANVAS" /* canvas */)
        return;
      measureAndUpdateScrollOffset();
    });
    useIsomorphicLayoutEffect2(() => {
      if (RenderTarget.current() === "CANVAS" /* canvas */)
        return;
      measureAndUpdateScrollOffset();
    }, []);
    React51.useEffect(() => {
      if (shouldResetScroll(isInTarget))
        measureAndUpdateScrollOffset();
      if (isInTarget === false)
        wasInTargetRef.current = false;
    }, [isInTarget]);
    const getLatestPoint = () => ({ x: x.get(), y: y.get() });
    const resetInitialPoint = useCallback4(() => {
      const point = getLatestPoint();
      initial.x = point.x;
      initial.y = point.y;
      prev.x = point.x;
      prev.y = point.y;
    }, []);
    const getPointData = useCallback4(() => {
      const point = getLatestPoint();
      const data2 = {
        point,
        velocity: { x: x.getVelocity(), y: y.getVelocity() },
        offset: { x: point.x - initial.x, y: point.y - initial.y },
        delta: { x: point.x - prev.x, y: point.y - prev.y }
      };
      prev.x = point.x;
      prev.y = point.y;
      return data2;
    }, [x, y]);
    const updateScrollListeners = useCallback4(() => {
      onUpdate && onUpdate({ x: x.get(), y: y.get() });
      onScroll && onScroll(getPointData());
    }, [onScroll, onUpdate, getPointData, x, y]);
    const scheduleUpdateScrollListeners = useCallback4(() => {
      sync.update(updateScrollListeners, false, true);
    }, [updateScrollListeners]);
    const onMotionDragStart = (event, info) => {
      resetInitialPoint();
      onDragStart && onDragStart(event, info);
      onScrollStart && onScrollStart(info);
    };
    const onMotionDragTransitionEnd = () => onScrollEnd && onScrollEnd(getPointData());
    const onWheelScrollStart = (info) => {
      onScrollStart == null ? void 0 : onScrollStart(info);
    };
    useWheelScroll(containerRef, {
      enabled: wheelEnabled,
      initial,
      prev,
      direction,
      offsetX: x,
      offsetY: y,
      onScrollStart: onWheelScrollStart,
      onScroll,
      onScrollEnd,
      constraints: measuredConstraints
    });
    const overdragX = useMotionValue(0);
    const overdragY = useMotionValue(0);
    useIsomorphicLayoutEffect2(() => {
      const setScrollX = (xValue) => {
        const element = containerRef.current;
        if (!(element instanceof HTMLDivElement))
          return;
        element.scrollLeft = -xValue;
        const constraints = measuredConstraints.current;
        if (constraints && overdragEnabled) {
          let overdragXValue = 0;
          if (xValue > constraints.right)
            overdragXValue = xValue;
          if (xValue < constraints.left)
            overdragXValue = xValue - constraints.left;
          overdragX.set(overdragXValue);
        }
        scheduleUpdateScrollListeners();
      };
      const currentX = x.get();
      if (currentX !== 0)
        setScrollX(currentX);
      return x.onChange(setScrollX);
    }, [x, overdragX, scheduleUpdateScrollListeners, overdragEnabled]);
    useIsomorphicLayoutEffect2(() => {
      const setScrollY = (yValue) => {
        const element = containerRef.current;
        if (!(element instanceof HTMLDivElement))
          return;
        element.scrollTop = -yValue;
        const constraints = measuredConstraints.current;
        if (constraints && overdragEnabled) {
          let overdragYValue = 0;
          if (yValue > constraints.bottom)
            overdragYValue = yValue;
          if (yValue < constraints.top)
            overdragYValue = yValue - constraints.top;
          overdragY.set(overdragYValue);
        }
        scheduleUpdateScrollListeners();
      };
      const currentY = y.get();
      if (currentY !== 0)
        setScrollY(currentY);
      return y.onChange(setScrollY);
    }, [y, overdragY, scheduleUpdateScrollListeners, overdragEnabled]);
    const nativeOnScroll = React51.useCallback(() => {
      const element = containerRef.current;
      if (!(element instanceof HTMLDivElement))
        return;
      const xDelta = Math.abs(x.get() + element.scrollLeft);
      const yDelta = Math.abs(y.get() + element.scrollTop);
      if (xDelta > 1)
        x.set(-element.scrollLeft);
      if (yDelta > 1)
        y.set(-element.scrollTop);
    }, [x, y]);
    const isEmpty2 = React51.Children.count(children) === 0;
    const width = direction !== "vertical" && !isEmpty2 ? "auto" : "100%";
    const height = direction !== "horizontal" && !isEmpty2 ? "auto" : "100%";
    const size2 = !containerProps.__fromCanvasComponent ? {
      width: containerProps.__fromCodeComponentNode ? "100%" : containerProps.width,
      height: containerProps.__fromCodeComponentNode ? "100%" : containerProps.height
    } : {};
    return /* @__PURE__ */ React51.createElement(
      FrameWithMotion,
      {
        "data-framer-component-type": "Scroll",
        background: "none",
        ...containerProps,
        ...size2,
        style: {
          ...style,
          willChange: isPreview ? "transform" : void 0,
          // allows the scroll content to be hardware accelerated
          overflow: "hidden"
        },
        onScroll: nativeOnScroll,
        preserve3d: containerProps.preserve3d,
        ref: containerRef,
        layoutId,
        layoutScroll: true,
        onBeforeLayoutMeasure: measureAndUpdateScrollOffset
      },
      /* @__PURE__ */ React51.createElement(
        FrameWithMotion,
        {
          "data-framer-component-type": "ScrollContentWrapper",
          animate: scrollAnimate,
          drag: dragEnabled && convertScrollDirectionToDrag(direction),
          dragDirectionLock: directionLock,
          dragElastic,
          dragMomentum,
          dragTransition,
          dragConstraints: containerRef,
          dragControls,
          onDragStart: onMotionDragStart,
          onDrag,
          onDragEnd,
          onDragTransitionEnd: onMotionDragTransitionEnd,
          onDirectionLock,
          onMeasureDragConstraints: setMeasureDragConstraints,
          width,
          height,
          _dragX: x,
          _dragY: y,
          position: "relative",
          x: overdragEnabled ? overdragX : void 0,
          y: overdragEnabled ? overdragY : void 0,
          ref: contentRef,
          style: {
            display: isEmpty2 ? "block" : "inline-block",
            willChange: isPreview ? "transform" : void 0,
            // makes the scroll content hardware accelerated
            backgroundColor: "transparent",
            overflow: "visible",
            minWidth: "100%",
            minHeight: "100%"
          },
          preserve3d: containerProps.preserve3d
        },
        /* @__PURE__ */ React51.createElement(
          EmptyState,
          {
            children,
            size: {
              width: isFiniteNumber(containerProps.width) ? containerProps.width : "100%",
              height: isFiniteNumber(containerProps.height) ? containerProps.height : "100%"
            },
            insideUserCodeComponent: !containerProps.__fromCodeComponentNode,
            title: "Scroll",
            description: "Click and drag the connector to any frame on the canvas \u2192"
          }
        ),
        useUpdateChildSize({
          dragDirection: direction,
          children,
          fromCanvasComponent: containerProps.__fromCanvasComponent
        })
      )
    );
  }
);
function offsetToZero({ top, left, right, bottom }) {
  const width = right - left;
  const height = bottom - top;
  return {
    top: -height,
    left: -width,
    right: 0,
    bottom: 0
  };
}

// ../../library/src/components/Scroll/NativeScroll.tsx
import React53 from "react";

// ../../library/src/modules/cx.ts
function cx(...classNames) {
  return classNames.filter(Boolean).join(" ");
}

// ../../library/src/components/utils/useEmulatedTouchScroll.ts
import React52, { useEffect as useEffect6 } from "react";

// ../../library/src/components/utils/animatePointWithInertia.ts
function isRunningAnimation(...phases) {
  let runningAny = false;
  let cancelledAny = false;
  phases.forEach((phase) => {
    runningAny = runningAny || phase === 1 /* Running */;
    cancelledAny = cancelledAny || phase === 3 /* Cancelled */;
  });
  return runningAny && !cancelledAny;
}
function didFinishAnimations(...phases) {
  return phases.every((phase) => phase === 0 /* None */ || phase === 2 /* Completed */);
}
var timeConstant = 400;
function animatePointWithInertia({
  from,
  velocity,
  onUpdate,
  onComplete,
  onStop
}) {
  const latest = from;
  let animationPhaseX = 0 /* None */;
  let animationPhaseY = 0 /* None */;
  const animations2 = [];
  const updateHandler = () => {
    if (isRunningAnimation(animationPhaseX, animationPhaseY)) {
      onUpdate(latest);
    }
  };
  const completionHandler = () => {
    if (didFinishAnimations(animationPhaseX, animationPhaseY)) {
      onComplete();
    }
  };
  if (velocity.x) {
    animationPhaseX = 1 /* Running */;
    animations2.push(
      inertia({
        from: from.x,
        velocity: -velocity.x,
        timeConstant,
        onUpdate: (value) => {
          latest.x = value;
          sync.update(updateHandler, false, true);
        },
        onComplete: () => {
          if (animationPhaseX !== 1 /* Running */) {
            throw Error("animation x should be running when completing");
          }
          animationPhaseX = 2 /* Completed */;
          completionHandler();
        }
      })
    );
  }
  if (velocity.y) {
    animationPhaseY = 1 /* Running */;
    animations2.push(
      inertia({
        from: from.y,
        velocity: -velocity.y,
        timeConstant,
        onUpdate: (value) => {
          latest.y = value;
          sync.update(updateHandler, false, true);
        },
        onComplete: () => {
          if (animationPhaseY !== 1 /* Running */) {
            throw Error("animation y should be running when completing");
          }
          animationPhaseY = 2 /* Completed */;
          completionHandler();
        }
      })
    );
  }
  if (!isRunningAnimation(animationPhaseX, animationPhaseY)) {
    completionHandler();
  }
  return {
    stop: () => {
      if (!isRunningAnimation(animationPhaseX, animationPhaseY))
        return;
      animations2.forEach((animation) => animation.stop());
      animationPhaseX = animationPhaseX === 1 /* Running */ ? 3 /* Cancelled */ : animationPhaseX;
      animationPhaseY = animationPhaseY === 1 /* Running */ ? 3 /* Cancelled */ : animationPhaseY;
      onStop();
    }
  };
}

// ../../library/src/components/utils/useEmulatedTouchScroll.ts
var scrollThreshold = 3;
var isTouchDevice = /* @__PURE__ */ isTouch();
var isSafariBrowser = /* @__PURE__ */ isSafari();
function getTouchAction(element) {
  if (!(element instanceof HTMLElement))
    return null;
  return element.style.touchAction;
}
function canPanInDirection(element, direction) {
  switch (direction) {
    case "horizontal":
      return getTouchAction(element) === "pan-x";
    case "vertical":
      return getTouchAction(element) === "pan-y";
    default:
      return false;
  }
}
function isInteractiveElement(element) {
  const tag = element.tagName.toLowerCase();
  if (tag === "input")
    return true;
  if (tag === "text")
    return true;
  if (tag === "textarea")
    return true;
  return false;
}
function canStartScrollFromElement(element, direction) {
  if (!(element instanceof Element))
    return false;
  if (isInteractiveElement(element))
    return false;
  if (element.hasAttribute("draggable")) {
    if (!canPanInDirection(element, direction)) {
      return false;
    }
  }
  return true;
}
function getEventPoint(event) {
  return {
    x: event.pageX,
    y: event.pageY
  };
}
function setStyle(element, property, value) {
  if (element == null ? void 0 : element.style) {
    element.style[property] = value;
  }
}
function getStyle(element, property) {
  var _a;
  return (_a = element == null ? void 0 : element.style) == null ? void 0 : _a[property];
}
var emptyObject = {};
Object.freeze(emptyObject);
function useEmulateTouchScroll(ref, direction, enabled) {
  if (isTouchDevice)
    return emptyObject;
  if (RenderTarget.current() !== "PREVIEW" /* preview */)
    return emptyObject;
  const scrollAnimationControlsRef = React52.useRef(null);
  useEffect6(() => {
    if (!ref.current)
      return;
    const element = ref.current;
    let phase = 0 /* Idle */;
    let targets = null;
    let downPoint = null;
    let scrollOffsetStart = null;
    let mouseMoveEvents = [];
    function onMouseMove(event) {
      var _a;
      switch (phase) {
        case 0 /* Idle */:
        case 4 /* DragAnimation */:
        case 3 /* DragLocked */:
          return;
      }
      if (event.metaKey)
        return;
      const point = getEventPoint(event);
      if (!downPoint)
        return;
      const offset = Point.subtract(point, downPoint);
      if (phase === 1 /* TouchDown */ || phase === 5 /* Interrupted */) {
        const deltaX = Math.abs(offset.x);
        const deltaY = Math.abs(offset.y);
        if ((deltaX > scrollThreshold || deltaY > scrollThreshold) && deltaX !== deltaY) {
          const scrollDirection = deltaX > deltaY ? "horizontal" : "vertical";
          const shouldIgnoreBecauseOfDirectionLock = direction === "horizontal" && scrollDirection === "vertical" || direction === "vertical" && scrollDirection === "horizontal";
          if (shouldIgnoreBecauseOfDirectionLock) {
            phase = 3 /* DragLocked */;
            return;
          }
          phase = 2 /* Drag */;
          targets == null ? void 0 : targets.forEach(([target]) => setStyle(target, "pointerEvents", "none"));
        }
      }
      if (isSafariBrowser)
        event.preventDefault();
      if (phase !== 2 /* Drag */)
        return;
      (_a = safeWindow.getSelection()) == null ? void 0 : _a.empty();
      mouseMoveEvents = getRecentEvents([...mouseMoveEvents, event]);
      if (scrollOffsetStart) {
        if (direction !== "vertical")
          element.scrollLeft = scrollOffsetStart.x - offset.x;
        if (direction !== "horizontal")
          element.scrollTop = scrollOffsetStart.y - offset.y;
      }
    }
    function onMouseUp(event) {
      safeWindow.removeEventListener("mousemove", onMouseMove, false);
      safeWindow.removeEventListener("mouseup", onMouseUp);
      if (phase === 2 /* Drag */ && targets) {
        targets.forEach(
          ([target, originalPointerEventsValue]) => setStyle(target, "pointerEvents", originalPointerEventsValue || "auto")
        );
      }
      targets = null;
      const velocity = calculateVelocity({ mouseMoveEvents, mouseUpEvent: event });
      downPoint = null;
      if (phase === 2 /* Drag */) {
        const shouldAnimateY = direction !== "horizontal" && velocity.y !== 0;
        const shouldAnimateX = direction !== "vertical" && velocity.x !== 0;
        if (!shouldAnimateY && !shouldAnimateX) {
          phase = 0 /* Idle */;
          return;
        }
        phase = 4 /* DragAnimation */;
        scrollAnimationControlsRef.current = animatePointWithInertia({
          from: { x: element.scrollLeft, y: element.scrollTop },
          velocity: {
            x: shouldAnimateX ? velocity.x : 0,
            y: shouldAnimateY ? velocity.y : 0
          },
          onUpdate: (position) => {
            if (shouldAnimateX)
              element.scrollLeft = position.x;
            if (shouldAnimateY)
              element.scrollTop = position.y;
          },
          onStop: () => {
            if (phase !== 5 /* Interrupted */) {
              phase = 0 /* Idle */;
            }
            scrollAnimationControlsRef.current = null;
          },
          onComplete: () => {
            if (phase !== 4 /* DragAnimation */) {
              throw Error("On animation completion we should still be in the animation phase");
            }
            phase = 0 /* Idle */;
            scrollAnimationControlsRef.current = null;
          }
        });
      } else {
        phase = 0 /* Idle */;
      }
    }
    function onMouseWheel() {
      var _a;
      (_a = scrollAnimationControlsRef.current) == null ? void 0 : _a.stop();
    }
    function onMouseDown(event) {
      var _a;
      if (!enabled)
        return;
      if (event.metaKey)
        return;
      if (!canStartScrollFromElement(event.target, direction)) {
        if (phase === 4 /* DragAnimation */) {
          phase = 0 /* Idle */;
          (_a = scrollAnimationControlsRef.current) == null ? void 0 : _a.stop();
        }
        return;
      }
      const previousPhase = phase;
      phase = previousPhase === 4 /* DragAnimation */ ? 5 /* Interrupted */ : 1 /* TouchDown */;
      downPoint = getEventPoint(event);
      targets = document.elementsFromPoint(downPoint.x, downPoint.y).filter(
        (targetEl) => targetEl instanceof HTMLElement || targetEl instanceof SVGElement
      ).map((targetEl) => [targetEl, getStyle(targetEl, "pointerEvents")]);
      scrollOffsetStart = { x: element.scrollLeft, y: element.scrollTop };
      mouseMoveEvents = [];
      if (scrollAnimationControlsRef.current) {
        if (previousPhase !== 4 /* DragAnimation */) {
          throw Error("When stopping a drag animation we need to be animating");
        }
        scrollAnimationControlsRef.current.stop();
      }
      safeWindow.addEventListener("mousemove", onMouseMove);
      safeWindow.addEventListener("mouseup", onMouseUp);
      element.addEventListener("mousewheel", onMouseWheel);
    }
    element.addEventListener("mousedown", onMouseDown);
    return () => {
      var _a;
      element.removeEventListener("mousedown", onMouseDown);
      element.removeEventListener("mousewheel", onMouseWheel);
      safeWindow.removeEventListener("mousemove", onMouseMove);
      safeWindow.removeEventListener("mouseup", onMouseUp);
      phase = 5 /* Interrupted */;
      (_a = scrollAnimationControlsRef.current) == null ? void 0 : _a.stop();
    };
  }, [ref, direction, enabled]);
  return React52.useMemo(() => {
    return {
      cancelEmulatedTouchScrollAnimation: () => {
        var _a;
        (_a = scrollAnimationControlsRef.current) == null ? void 0 : _a.stop();
      }
    };
  }, []);
}
var timeDelta = 4 / 60 * 1e3;
function getRecentEvents(events2) {
  const currentTime = new CustomEvent("getTime").timeStamp;
  const maxAge = currentTime - timeDelta;
  return events2.filter((event) => event.timeStamp > maxAge);
}
var zeroPoint = { x: 0, y: 0 };
function calculateVelocity({
  mouseMoveEvents,
  mouseUpEvent
}) {
  const recentMouseMoveEvents = getRecentEvents(mouseMoveEvents);
  const oldestMouseMoveEvent = recentMouseMoveEvents[0];
  if (!oldestMouseMoveEvent)
    return zeroPoint;
  const deltaX = mouseUpEvent.clientX - oldestMouseMoveEvent.clientX;
  const deltaY = mouseUpEvent.clientY - oldestMouseMoveEvent.clientY;
  const time2 = mouseUpEvent.timeStamp - oldestMouseMoveEvent.timeStamp;
  if (time2 === 0)
    return zeroPoint;
  return {
    x: deltaX / time2 * 1e3,
    y: deltaY / time2 * 1e3
  };
}

// ../../library/src/components/utils/useUpdateScrollOffset.ts
function useUpdateScrollOffset(ref, side, offset, cancelEmulatedTouchScrollAnimation) {
  useIsomorphicLayoutEffect2(
    () => {
      if (isMotionValue2(offset)) {
        const updateScrollLeft = () => {
          cancelEmulatedTouchScrollAnimation == null ? void 0 : cancelEmulatedTouchScrollAnimation();
          const element = ref.current;
          if (element)
            element[side] = Math.abs(offset.get());
        };
        updateScrollLeft();
        return offset.onChange(updateScrollLeft);
      } else if (isFiniteNumber(offset)) {
        const element = ref.current;
        if (!element)
          return;
        cancelEmulatedTouchScrollAnimation == null ? void 0 : cancelEmulatedTouchScrollAnimation();
        element[side] = Math.abs(offset);
      }
    },
    // We only want to update on contentOffset changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [offset]
  );
}

// ../../library/src/components/Scroll/NativeScroll.tsx
var NativeScroll = /* @__PURE__ */ React53.forwardRef(function NativeScroll2(props, forwardedRef) {
  const {
    direction = "vertical",
    scrollBarVisible = false,
    dragEnabled = true,
    contentOffsetX = 0,
    contentOffsetY = 0,
    contentWidth,
    contentHeight,
    children,
    resetOffset,
    onScroll,
    className,
    // Not (yet) supported
    directionLock = false,
    wheelEnabled = true,
    scrollAnimate,
    dragTransition,
    dragMomentum,
    dragElastic,
    overdragEnabled = true,
    onScrollStart,
    onScrollEnd,
    onDragStart,
    onDrag,
    onDragEnd,
    onUpdate,
    onDirectionLock,
    layoutId: specificLayoutId,
    native,
    // Rest
    ...containerProps
  } = props;
  const layoutId = useLayoutId(props, { specificLayoutId, postfix: "scroll" });
  const fallbackRef = React53.useRef(null);
  const ref = forwardedRef || fallbackRef;
  const { cancelEmulatedTouchScrollAnimation } = useEmulateTouchScroll(ref, direction, dragEnabled);
  injectComponentCSSRules();
  const isInTarget = useIsInCurrentNavigationTarget();
  const previousIsInTargetRef = React53.useRef(isInTarget);
  const updateScrollOffsetHandler = () => {
    if (!resetOffset)
      return;
    const previousIsTarget = previousIsInTargetRef.current;
    previousIsInTargetRef.current = isInTarget;
    const shouldResetOffset = isInTarget && !previousIsTarget;
    if (!shouldResetOffset)
      return;
    const element = ref.current;
    if (!element)
      return;
    if (direction !== "vertical") {
      cancelEmulatedTouchScrollAnimation == null ? void 0 : cancelEmulatedTouchScrollAnimation();
      element.scrollLeft = Math.abs(isMotionValue2(contentOffsetX) ? contentOffsetX.get() : contentOffsetX);
    }
    if (direction !== "horizontal") {
      cancelEmulatedTouchScrollAnimation == null ? void 0 : cancelEmulatedTouchScrollAnimation();
      element.scrollTop = Math.abs(isMotionValue2(contentOffsetY) ? contentOffsetY.get() : contentOffsetY);
    }
  };
  useIsomorphicLayoutEffect2(updateScrollOffsetHandler, [isInTarget]);
  useUpdateScrollOffset(ref, "scrollLeft", contentOffsetX, cancelEmulatedTouchScrollAnimation);
  useUpdateScrollOffset(ref, "scrollTop", contentOffsetY, cancelEmulatedTouchScrollAnimation);
  const size2 = !containerProps.__fromCanvasComponent ? {
    width: containerProps.__fromCodeComponentNode ? "100%" : containerProps.width,
    height: containerProps.__fromCodeComponentNode ? "100%" : containerProps.height
  } : {};
  return /* @__PURE__ */ React53.createElement(
    FrameWithMotion,
    {
      ref,
      "data-framer-component-type": "NativeScroll",
      background: "none",
      ...containerProps,
      ...size2,
      onScroll,
      layoutId,
      onBeforeLayoutMeasure: updateScrollOffsetHandler,
      layoutScroll: true,
      className: cx(className, `direction-${direction}`, !scrollBarVisible && "scrollbar-hidden")
    },
    /* @__PURE__ */ React53.createElement(
      EmptyState,
      {
        children,
        size: {
          width: isFiniteNumber(containerProps.width) ? containerProps.width : "100%",
          height: isFiniteNumber(containerProps.height) ? containerProps.height : "100%"
        },
        insideUserCodeComponent: !containerProps.__fromCodeComponentNode,
        title: "Scroll",
        description: "Click and drag the connector to any frame on the canvas \u2192"
      }
    ),
    children
  );
});

// ../../library/src/components/Scroll/Scroll.tsx
var Scroll = /* @__PURE__ */ (() => {
  const ScrollInner = React54.forwardRef(function ScrollInner2(props, forwardedRef) {
    if (props.native) {
      return /* @__PURE__ */ React54.createElement(NativeScroll, { ref: forwardedRef, ...props });
    } else {
      return /* @__PURE__ */ React54.createElement(EmulatedScroll, { ref: forwardedRef, ...props });
    }
  });
  addPropertyControls(ScrollInner, {
    native: {
      type: "boolean" /* Boolean */,
      defaultValue: false
    },
    direction: {
      type: "segmentedenum" /* SegmentedEnum */,
      title: "Direction",
      options: ["vertical", "horizontal", "both"],
      defaultValue: "vertical"
    },
    contentOffsetX: {
      type: "number" /* Number */,
      title: "Offset X",
      defaultValue: 0,
      min: 0,
      step: 10,
      displayStepper: true,
      hidden: ({ direction }) => direction === "vertical"
    },
    contentOffsetY: {
      type: "number" /* Number */,
      title: "Offset Y",
      defaultValue: 0,
      min: 0,
      step: 10,
      displayStepper: true,
      hidden: ({ direction }) => direction === "horizontal"
    },
    directionLock: {
      type: "boolean" /* Boolean */,
      title: "Lock",
      enabledTitle: "1 Axis",
      disabledTitle: "Off",
      defaultValue: true,
      hidden: ({ native }) => native === true
    },
    dragEnabled: {
      type: "boolean" /* Boolean */,
      title: "Drag",
      enabledTitle: "On",
      disabledTitle: "Off",
      defaultValue: true
    },
    overdragEnabled: {
      type: "boolean" /* Boolean */,
      title: "Overdrag",
      enabledTitle: "On",
      disabledTitle: "Off",
      defaultValue: true,
      hidden: ({ native }) => native === true
    },
    wheelEnabled: {
      type: "boolean" /* Boolean */,
      title: "Wheel",
      enabledTitle: "On",
      disabledTitle: "Off",
      defaultValue: true,
      hidden: ({ native }) => native === true
    },
    scrollBarVisible: {
      type: "boolean" /* Boolean */,
      title: "Scroll Bar",
      enabledTitle: "Visible",
      disabledTitle: "Hidden",
      defaultValue: false,
      hidden: ({ native }) => native === false
    },
    resetOffset: {
      type: "boolean" /* Boolean */,
      title: "Reset",
      defaultValue: false
    }
  });
  ScrollInner.supportsConstraints = true;
  return ScrollInner;
})();

// ../../library/src/components/useNavigation.ts
import { useContext as useContext9 } from "react";
function useNavigation() {
  return useContext9(NavigationContext);
}

// ../../library/src/data/Data.ts
var data = /* @__PURE__ */ (() => {
  function Data2(initial = {}) {
    const _data = ObservableObject(initial, false, false);
    Data2.addData(_data);
    return _data;
  }
  Data2._stores = [];
  Data2.addData = (_data) => {
    Data2._stores.push(_data);
  };
  Data2.reset = () => {
    Data2._stores.forEach((target) => ObservableObject.resetObject(target));
  };
  Data2.addObserver = (target, observer) => {
    return ObservableObject.addObserver(target, observer);
  };
  return Data2;
})();
var Data = data;

// ../../library/src/data/PropertyStore.ts
var PropertyStore = /* @__PURE__ */ (() => {
  function PropertyStore2(initial = {}, makeAnimatables = false) {
    deprecationWarning("PropertyStore", "1.0.0", "Data() or ObservableObject()");
    return ObservableObject(initial, makeAnimatables);
  }
  PropertyStore2.addObserver = (target, observer) => {
    return ObservableObject.addObserver(target, observer);
  };
  return PropertyStore2;
})();

// ../../library/src/data/useData/index.ts
import { createContext as createContext3, useContext as useContext10, useEffect as useEffect7, useMemo as useMemo4, useState } from "react";

// ../../library/src/data/useData/store.ts
function bindActionsToStore(get, set, actions) {
  const boundActions = {};
  for (const key7 in actions) {
    const action = actions[key7];
    if (!action)
      continue;
    boundActions[key7] = (data2) => set(action(get(), data2));
  }
  return boundActions;
}
function createStore(initialState2, unboundActions) {
  let state = initialState2;
  let version2 = 0;
  const subscribers = /* @__PURE__ */ new Set();
  const notifySubscriber = (sub) => sub(version2);
  const get = () => state;
  const set = (latestState) => {
    version2++;
    state = latestState;
    subscribers.forEach(notifySubscriber);
  };
  const actions = unboundActions ? bindActionsToStore(get, set, unboundActions) : set;
  return {
    get,
    set,
    getVersion: () => version2,
    getActions: () => actions,
    subscribe: (sub) => {
      subscribers.add(sub);
      return () => subscribers.delete(sub);
    }
  };
}

// ../../library/src/data/useData/index.ts
var defaultId = /* @__PURE__ */ Symbol("default");
var DataContext = /* @__PURE__ */ createContext3(defaultId);
function createData(defaultState2, actions) {
  const stores = /* @__PURE__ */ new Map();
  const useData = (id, initialState2) => {
    const contextId = useContext10(DataContext);
    id = id || contextId;
    const store = useMemo4(() => {
      if (!stores.has(id)) {
        stores.set(id, createStore(initialState2 || defaultState2, actions));
      }
      return stores.get(id);
    }, [id]);
    const [, notifyUpdates] = useState(store.getVersion());
    const storeValueAtHookCallTime = useMemo4(() => store.get(), [store]);
    useEffect7(() => {
      const unsubscribe = store.subscribe(notifyUpdates);
      if (storeValueAtHookCallTime !== store.get())
        notifyUpdates(store.getVersion());
      return unsubscribe;
    }, [store, storeValueAtHookCallTime]);
    return [store.get(), store.getActions()];
  };
  return useData;
}

// ../../library/src/deprecated/DataObserver.tsx
import React55, { Component as Component10 } from "react";
var initialState = { update: 0 };
var DataObserverContext = /* @__PURE__ */ React55.createContext({ update: NaN });
function useObserveData() {
  const context = React55.useContext(DataObserverContext);
  return !isNaN(context.update);
}
var DataObserver = class extends Component10 {
  constructor() {
    super(...arguments);
    this.observers = [];
    this.state = initialState;
    this.taskAdded = false;
    this.frameTask = () => {
      this.setState({ update: this.state.update + 1 });
      this.taskAdded = false;
    };
    this.observer = () => {
      if (this.taskAdded)
        return;
      this.taskAdded = true;
      MainLoop.addFrameTask(this.frameTask);
    };
  }
  componentWillUnmount() {
    this.observers.map((cancel) => cancel());
    Data.reset();
  }
  render() {
    const { children } = this.props;
    this.observers.map((cancel) => cancel());
    this.observers = [];
    Data._stores.forEach((d) => {
      const observer = Data.addObserver(d, this.observer);
      this.observers.push(observer);
    });
    return /* @__PURE__ */ React55.createElement(DataObserverContext.Provider, { value: { ...this.state } }, children);
  }
};

// ../../library/src/modules/withFX.tsx
import React60 from "react";

// ../../library/src/modules/hocOptions.ts
var prefix = "__framer__";
var prefixLength = prefix.length;
function extractPrefixedProps(props, keys3) {
  const result = {};
  const rest = {};
  for (const key7 in props) {
    const strippedKey = stripPrefixFromPrefixedKey(key7);
    if (strippedKey && keys3.has(strippedKey)) {
      result[strippedKey] = props[key7];
      continue;
    }
    rest[key7] = props[key7];
  }
  return [result, rest];
}
function stripPrefixFromPrefixedKey(key7) {
  if (key7.startsWith(prefix)) {
    return key7.substr(prefixLength);
  }
  return void 0;
}

// ../../library/src/modules/useFXValues.ts
var effectValuesKeys = [
  "opacity",
  "x",
  "y",
  "scale",
  "rotate",
  "rotateX",
  "rotateY",
  "transformPerspective"
];
var makeFXValues = (defaults) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  return {
    x: motionValue((_a = defaults == null ? void 0 : defaults.x) != null ? _a : 0),
    y: motionValue((_b = defaults == null ? void 0 : defaults.y) != null ? _b : 0),
    opacity: motionValue((_c = defaults == null ? void 0 : defaults.opacity) != null ? _c : 1),
    scale: motionValue((_d = defaults == null ? void 0 : defaults.scale) != null ? _d : 1),
    rotate: motionValue((_e = defaults == null ? void 0 : defaults.rotate) != null ? _e : 0),
    rotateX: motionValue((_f = defaults == null ? void 0 : defaults.rotateX) != null ? _f : 0),
    rotateY: motionValue((_g = defaults == null ? void 0 : defaults.rotateY) != null ? _g : 0),
    transformPerspective: motionValue((_h = defaults == null ? void 0 : defaults.transformPerspective) != null ? _h : 0)
  };
};
var defaultFXValues = {
  x: 0,
  y: 0,
  scale: 1,
  opacity: 1,
  transformPerspective: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0
};

// ../../library/src/modules/useLoopEffect.ts
import React56, { useCallback as useCallback5, useEffect as useEffect8, useRef as useRef9 } from "react";
var loopOptionsKeys = /* @__PURE__ */ new Set([
  "loopEffectEnabled",
  "loopTransition",
  "loop",
  "loopRepeatType",
  "loopRepeatDelay"
]);
var useDelay = () => {
  const timeoutRef = useRef9();
  useEffect8(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  return async (d) => new Promise((resolve) => {
    timeoutRef.current = setTimeout(() => {
      resolve(true);
    }, d * 1e3);
  });
};
function useLoop({
  loopEffectEnabled,
  loopRepeatDelay,
  loopTransition,
  loopRepeatType,
  loop
}) {
  const shouldReduceMotion = useReducedMotionConfig();
  const values = useConstant(() => makeFXValues());
  const mirrorStateRef = React56.useRef(false);
  const delay2 = useDelay();
  const animateValues = async () => {
    if (!loop)
      return;
    const transition = loopTransition || void 0;
    const mirror = mirrorStateRef.current && loopRepeatType === "mirror";
    const to = mirror ? defaultFXValues : loop;
    const from = mirror ? loop : defaultFXValues;
    mirrorStateRef.current = !mirrorStateRef.current;
    return Promise.all(
      effectValuesKeys.map((key7) => {
        var _a;
        if (shouldReduceMotion && key7 !== "opacity")
          return;
        values[key7].set((_a = from[key7]) != null ? _a : defaultFXValues[key7]);
        return new Promise((resolve) => {
          var _a2;
          animate(values[key7], (_a2 = to[key7]) != null ? _a2 : from[key7], {
            ...transition,
            onComplete: () => resolve()
          });
        });
      })
    );
  };
  const run = async () => {
    if (!loopEffectEnabled)
      return;
    await animateValues();
    await delay2(loopRepeatDelay != null ? loopRepeatDelay : 0);
    await run();
  };
  const stopAnimations = useCallback5(() => {
    effectValuesKeys.forEach((key7) => {
      values[key7].stop();
    });
    effectValuesKeys.forEach((key7) => {
      values[key7].set(defaultFXValues[key7]);
    });
    mirrorStateRef.current = false;
  }, [values]);
  React56.useEffect(() => {
    if (loopEffectEnabled && loop) {
      run();
    } else {
      stopAnimations();
    }
    return () => stopAnimations();
  }, [loopEffectEnabled]);
  return { values };
}

// ../../library/src/modules/useParallax.ts
import React57 from "react";

// ../../library/src/modules/parallaxTransform.ts
function parallaxTransform(scrollY, originalPosition, speed, offset, adjustPosition) {
  const speedFactor = speed / 100 - 1;
  const initialPosition = adjustPosition ? (originalPosition - offset) * speedFactor : 0;
  const scrollOffset = -scrollY * speedFactor;
  return initialPosition + scrollOffset;
}

// ../../library/src/modules/useParallax.ts
var parallaxOptionsKeys = /* @__PURE__ */ new Set([
  "speed",
  "adjustPosition",
  "offset",
  "parallaxTransformEnabled"
]);
function useParallax(options, ref, visibilityStyle) {
  const { speed = 1, offset = 0, adjustPosition = false, parallaxTransformEnabled } = options;
  const originalPosition = React57.useRef(null);
  const shouldReduceMotion = useReducedMotionConfig();
  const transform2 = React57.useCallback(
    (yValue) => {
      if (originalPosition.current === null)
        return 0;
      if (speed === 1)
        return 0;
      return parallaxTransform(yValue, originalPosition.current, speed, offset, adjustPosition);
    },
    [originalPosition, speed, offset, adjustPosition]
  );
  React57.useLayoutEffect(() => {
    var _a, _b, _c;
    originalPosition.current = (_c = (_b = (_a = ref.current) == null ? void 0 : _a.getBoundingClientRect()) == null ? void 0 : _b.top) != null ? _c : 0;
    parallaxY.set(transform2(scrollY.get()));
    if (adjustPosition) {
      visibility.set(visibilityStyle != null ? visibilityStyle : "initial");
    }
  }, [ref, originalPosition, adjustPosition]);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, transform2);
  const visibility = useMotionValue(adjustPosition && originalPosition.current === null ? "hidden" : visibilityStyle);
  const defaultValue = useMotionValue(0);
  return {
    values: {
      y: shouldReduceMotion || !parallaxTransformEnabled ? defaultValue : parallaxY
    },
    style: {
      visibility
    }
  };
}

// ../../library/src/modules/useStyleAppearEffect.ts
import React58 from "react";

// ../../library/src/modules/calculateOffsetTop.ts
function calcOffsetTop(element, container) {
  let top = 0;
  let current = element;
  while (current && current !== container) {
    if (!(current instanceof HTMLElement))
      break;
    top += current.offsetTop;
    current = current.offsetParent;
  }
  return top;
}

// ../../library/src/modules/createTransformInputRange.ts
var scrollObserverOffset = 1;
function createTransformInputRange(transformTargets, threshold = 0, callback) {
  var _a, _b, _c;
  const starts = [];
  const inputRange = [];
  for (let index = transformTargets.length; index >= 0; index--) {
    const { ref: targetRef, offset } = (_a = transformTargets[index]) != null ? _a : {};
    if (!targetRef || !targetRef.current)
      continue;
    const offsetTop = calcOffsetTop(targetRef.current, document.documentElement);
    const top = offsetTop - scrollObserverOffset - (offset != null ? offset : 0) - threshold;
    const height = (_c = (_b = targetRef.current) == null ? void 0 : _b.clientHeight) != null ? _c : 0;
    const previousTop = starts[starts.length - 1];
    const end = Math.max(top + height, 0);
    starts.push(top);
    inputRange.unshift(
      Math.max(top, 0),
      previousTop === void 0 ? end : Math.min(end, Math.max(previousTop - 1, 0))
    );
    callback == null ? void 0 : callback(index);
  }
  return inputRange;
}

// ../../library/src/modules/useStyleAppearEffect.ts
var styleAppearOptionsKeys = /* @__PURE__ */ new Set([
  "threshold",
  "animateOnce",
  "opacity",
  "targetOpacity",
  "x",
  "y",
  "scale",
  "transition",
  "rotate",
  "rotateX",
  "rotateY",
  "perspective",
  "enter",
  "exit",
  "animate",
  "styleAppearEffectEnabled",
  "targets"
]);
var defaultOutputRange = ["animate", "animate"];
function createInputOutputRange(targets, threshold, hasExit) {
  const inputRange = createTransformInputRange(targets, threshold);
  const outputRange = [...defaultOutputRange];
  const firstRange = inputRange[0];
  assert(typeof firstRange === "number", `Invalid inputRange: ${inputRange}`);
  if (firstRange > 1) {
    inputRange.unshift(0, firstRange - 1);
    outputRange.unshift("initial", "initial");
  }
  if (hasExit) {
    const idx = inputRange.length - 1;
    const last = inputRange[idx];
    assert(typeof last === "number", `Invalid inputRange: ${inputRange}`);
    inputRange.push(last + 1);
    outputRange.push("exit");
  }
  return {
    inputRange,
    outputRange
  };
}
function makeStyle(defaults) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  return {
    x: (_a = defaults == null ? void 0 : defaults.x) != null ? _a : defaultFXValues.x,
    y: (_b = defaults == null ? void 0 : defaults.y) != null ? _b : defaultFXValues.y,
    scale: (_c = defaults == null ? void 0 : defaults.scale) != null ? _c : defaultFXValues.scale,
    opacity: (_d = defaults == null ? void 0 : defaults.opacity) != null ? _d : defaultFXValues.opacity,
    transformPerspective: (_e = defaults == null ? void 0 : defaults.transformPerspective) != null ? _e : defaultFXValues.transformPerspective,
    rotate: (_f = defaults == null ? void 0 : defaults.rotate) != null ? _f : defaultFXValues.rotate,
    rotateX: (_g = defaults == null ? void 0 : defaults.rotateX) != null ? _g : defaultFXValues.rotateX,
    rotateY: (_h = defaults == null ? void 0 : defaults.rotateY) != null ? _h : defaultFXValues.rotateY,
    transition: (_i = defaults == null ? void 0 : defaults.transition) != null ? _i : void 0
  };
}
function useAnimationVariants({
  opacity,
  targetOpacity,
  perspective: transformPerspective,
  enter,
  exit,
  animate: animateVariant,
  ...defaultStyles
}) {
  return React58.useMemo(
    () => {
      var _a;
      return {
        initial: enter != null ? enter : makeStyle({
          ...defaultStyles,
          opacity: (_a = opacity != null ? opacity : targetOpacity) != null ? _a : 1,
          transformPerspective
        }),
        animate: animateVariant != null ? animateVariant : makeStyle({
          opacity: targetOpacity
        }),
        exit: exit != null ? exit : makeStyle()
      };
    },
    [animateVariant, defaultStyles, enter, exit, opacity, targetOpacity, transformPerspective]
  );
}
function useStyleAppearEffect(options, ref) {
  const variants = useAnimationVariants(options);
  const values = useConstant(
    () => makeFXValues(options.styleAppearEffectEnabled ? variants.initial : variants.animate)
  );
  const playState = React58.useRef({
    isPlaying: false,
    scheduledAppearState: void 0,
    lastAppearState: !options.styleAppearEffectEnabled
  });
  const animation = React58.useRef();
  const runAnimation = React58.useCallback(
    async ({ transition, ...target }, fromInitial) => {
      var _a;
      const transitionWithFallback = (_a = transition != null ? transition : variants.animate.transition) != null ? _a : options.transition;
      await animation.current;
      animation.current = Promise.all(
        effectValuesKeys.map((key7) => {
          var _a2;
          if (fromInitial)
            values[key7].set((_a2 = variants.initial[key7]) != null ? _a2 : defaultFXValues[key7]);
          return new Promise((resolve) => {
            var _a3;
            animate(values[key7], (_a3 = target[key7]) != null ? _a3 : defaultFXValues[key7], {
              restDelta: key7 === "scale" ? 1e-3 : void 0,
              ...transitionWithFallback,
              onComplete: () => resolve()
            });
          });
        })
      );
    },
    // All dependencies are object values or stable.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const appearEffectOptions = {
    animateOnce: !!options.animateOnce,
    threshold: {
      y: options.threshold
    }
  };
  useAppearEffect(ref, appearEffectOptions, (appears) => {
    if (options.targets || !options.styleAppearEffectEnabled)
      return;
    const { isPlaying, lastAppearState } = playState.current;
    if (options.animateOnce && playState.current.lastAppearState === true)
      return;
    if (isPlaying) {
      playState.current.scheduledAppearState = appears;
      return;
    }
    playState.current.scheduledAppearState = void 0;
    playState.current.lastAppearState = appears;
    if (lastAppearState === appears)
      return;
    runAnimation(appears ? variants.animate : variants.exit, appears);
  });
  React58.useEffect(() => {
    if (!options.targets || !options.styleAppearEffectEnabled)
      return;
    const playedState = {};
    let lastVariant = "initial";
    return scroll(({ y: scrollY }) => {
      var _a;
      if (!options.targets)
        return;
      const { inputRange, outputRange } = createInputOutputRange(
        options.targets,
        ((_a = options.threshold) != null ? _a : 0) * scrollY.containerLength,
        !!options.exit
      );
      if (inputRange.length === 0)
        return;
      assert(
        inputRange.length === outputRange.length,
        `Style ranges must have the same number of entries. Input: ${inputRange}, Output: ${outputRange}`
      );
      const variant = transform(scrollY.current, inputRange, outputRange);
      if (options.animateOnce && playedState[variant])
        return;
      playedState[variant] = true;
      if (lastVariant === variant)
        return;
      lastVariant = variant;
      runAnimation(variants[variant]);
    });
  }, []);
  return {
    values
  };
}

// ../../library/src/modules/useStyleTransformEffect.tsx
import React59 from "react";
var styleTransformOptionsKeys = /* @__PURE__ */ new Set([
  "transformViewportThreshold",
  "styleTransformEffectEnabled",
  "transformTargets",
  "spring",
  "transformTrigger"
]);
var defaultValues = (transformTargets, shouldReduceMotion) => {
  var _a, _b;
  const initial = (_a = transformTargets == null ? void 0 : transformTargets[0]) == null ? void 0 : _a.target;
  return makeFXValues(shouldReduceMotion ? { opacity: (_b = initial == null ? void 0 : initial.opacity) != null ? _b : 1 } : initial);
};
var defaultRanges = () => ({
  opacity: [],
  x: [],
  y: [],
  scale: [],
  rotate: [],
  rotateX: [],
  rotateY: [],
  transformPerspective: []
});
function useAttachOptionalSpring(values, spring3) {
  const springs = React59.useRef({});
  React59.useEffect(() => {
    if (spring3 === void 0)
      return;
    for (const key7 in values) {
      const m2 = values[key7];
      m2.attach((v, set) => {
        const active = springs.current[key7];
        if (active)
          active.stop();
        springs.current[key7] = animate3({
          from: m2.get(),
          to: v,
          velocity: m2.getVelocity(),
          ...spring3,
          restDelta: 1e-3,
          onUpdate: set
        });
        return m2.get();
      });
    }
  }, [JSON.stringify(spring3)]);
}
function createInputOutputRanges(transformTargets, threshold) {
  const effectKeyOutputRange = defaultRanges();
  const inputRange = createTransformInputRange(transformTargets, threshold, (index) => {
    var _a, _b, _c, _d, _e;
    const previousTarget = (_a = transformTargets[index - 1]) == null ? void 0 : _a.target;
    const currentTarget = (_b = transformTargets[index]) == null ? void 0 : _b.target;
    for (const key7 of effectValuesKeys)
      (_e = effectKeyOutputRange[key7]) == null ? void 0 : _e.unshift((_c = previousTarget == null ? void 0 : previousTarget[key7]) != null ? _c : 0, (_d = currentTarget == null ? void 0 : currentTarget[key7]) != null ? _d : 0);
  });
  return { inputRange, effectKeyOutputRange };
}
function createPageOutputRange(transformTargets) {
  var _a;
  const keyOutputRange = defaultRanges();
  for (const { target } of transformTargets) {
    for (const key7 of effectValuesKeys)
      (_a = keyOutputRange[key7]) == null ? void 0 : _a.push(target[key7]);
  }
  return keyOutputRange;
}
var pageInputRange = [0, 1];
function useStyleTransform({
  transformTrigger,
  styleTransformEffectEnabled,
  transformTargets,
  spring: spring3,
  transformViewportThreshold = 0
}, ref) {
  const shouldReduceMotion = useReducedMotionConfig();
  const values = useConstant(() => defaultValues(transformTargets, shouldReduceMotion));
  React59.useLayoutEffect(() => {
    var _a;
    if (styleTransformEffectEnabled !== true || !transformTargets)
      return;
    if (transformTrigger !== "onScrollTarget") {
      const outputRange = createPageOutputRange(transformTargets);
      return scroll(
        ({ y: scrollY }) => {
          for (const key7 of effectValuesKeys) {
            if (shouldReduceMotion && key7 !== "opacity")
              continue;
            assert(
              pageInputRange.length === outputRange[key7].length,
              `Transform ranges must have the same number of entries. Input: ${pageInputRange}, Output: ${outputRange[key7]}`
            );
            values[key7].set(transform(scrollY.progress, pageInputRange, outputRange[key7]));
          }
        },
        transformTrigger === "onInView" ? {
          target: (_a = ref.current) != null ? _a : void 0,
          offset: [`start end`, `end end`]
        } : void 0
      );
    } else {
      return scroll(({ y: scrollY }) => {
        const { inputRange: scrollYInputRange, effectKeyOutputRange } = createInputOutputRanges(
          transformTargets,
          transformViewportThreshold * scrollY.containerLength
        );
        if (scrollYInputRange.length === 0)
          return;
        for (const key7 of effectValuesKeys) {
          if (shouldReduceMotion && key7 !== "opacity")
            continue;
          assert(
            scrollYInputRange.length === effectKeyOutputRange[key7].length,
            `Transform ranges must have the same number of entries. Input: ${scrollYInputRange}, Output: ${effectKeyOutputRange[key7]}`
          );
          values[key7].set(transform(scrollY.current, scrollYInputRange, effectKeyOutputRange[key7]));
        }
      });
    }
  }, [
    shouldReduceMotion,
    transformTrigger,
    ref,
    transformViewportThreshold,
    styleTransformEffectEnabled,
    values,
    transformTargets
  ]);
  useAttachOptionalSpring(values, spring3);
  return { values };
}

// ../../library/src/modules/withFX.tsx
var groups = {
  parallax: parallaxOptionsKeys,
  styleAppear: styleAppearOptionsKeys,
  styleTransform: styleTransformOptionsKeys,
  loop: loopOptionsKeys
};
var groupValues = /* @__PURE__ */ Object.keys(groups);
function backwardsCompatibleEnabledCheck(key7, object) {
  return !(key7 in object) || object[key7] === true;
}
function extractFXOptions(props) {
  const result = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    loop: {},
    forwardedProps: {}
  };
  for (const key7 in props) {
    const strippedKey = stripPrefixFromPrefixedKey(key7);
    if (strippedKey) {
      for (const group of groupValues) {
        const keys3 = groups[group];
        if (keys3.has(strippedKey)) {
          result[group][strippedKey] = props[key7];
          break;
        }
      }
    } else {
      result.forwardedProps[key7] = props[key7];
    }
  }
  result.parallax.parallaxTransformEnabled = backwardsCompatibleEnabledCheck(
    "parallaxTransformEnabled",
    result.parallax
  );
  result.styleAppear.styleAppearEffectEnabled = backwardsCompatibleEnabledCheck(
    "styleAppearEffectEnabled",
    result.styleAppear
  );
  return result;
}
var add2 = (values) => values.reduce((sum, value) => sum += value, 0);
var multiply = (values) => values.reduce((sum, value) => sum = sum * value, 1);
var withFX = (Component15) => React60.forwardRef((props, forwardedRef) => {
  var _a;
  if (props.__withFX)
    return /* @__PURE__ */ React60.createElement(Component15, { ...props, ref: forwardedRef });
  const fallbackRef = React60.useRef(null);
  const ref = forwardedRef != null ? forwardedRef : fallbackRef;
  const {
    parallax = {},
    styleAppear = {},
    styleTransform = {},
    loop = {},
    forwardedProps
  } = extractFXOptions(props);
  const values = useConstant(() => {
    var _a2;
    const defaults = {};
    if (!isObject2(forwardedProps.initial))
      return makeFXValues();
    for (const key7 in forwardedProps.initial) {
      let value = (_a2 = forwardedProps.initial) == null ? void 0 : _a2[key7];
      if (isMotionValue(value))
        value = value.get();
      if (!isNumber(value))
        continue;
      defaults[key7] = value;
    }
    return makeFXValues(defaults);
  });
  const targetOpacityValue = (_a = props.__targetOpacity) != null ? _a : 1;
  const targetOpacity = useMotionValue(targetOpacityValue);
  const { values: parallaxValues, style: parallaxStyle } = useParallax(parallax, ref);
  const { values: transformValues3 } = useStyleTransform(styleTransform, ref);
  const { values: appearEffectValues } = useStyleAppearEffect(styleAppear, ref);
  const { values: loopValues } = useLoop(loop);
  const fxValues = React60.useMemo(() => {
    return {
      scale: [values.scale, transformValues3.scale, appearEffectValues.scale, loopValues.scale],
      opacity: [
        values.opacity,
        // Ensure that the layers opacity is always represented.
        targetOpacity,
        transformValues3.opacity,
        appearEffectValues.opacity,
        loopValues.opacity
      ],
      x: [values.x, transformValues3.x, appearEffectValues.x, loopValues.x],
      y: [values.y, transformValues3.y, appearEffectValues.y, loopValues.y, parallaxValues.y],
      rotate: [values.rotate, transformValues3.rotate, appearEffectValues.rotate, loopValues.rotate],
      rotateX: [values.rotateX, transformValues3.rotateX, appearEffectValues.rotateX, loopValues.rotateX],
      rotateY: [values.rotateY, transformValues3.rotateY, appearEffectValues.rotateY, loopValues.rotateY],
      transformPerspective: [
        values.transformPerspective,
        transformValues3.transformPerspective,
        appearEffectValues.transformPerspective
        // We stopped animating transformPerspective with `withFX`
        // before introducing `useLoop`, so it does not have a value
        // here on purpose.
      ]
    };
  }, [targetOpacity, values, transformValues3, parallaxValues, appearEffectValues, loopValues]);
  const scale2 = useTransform(fxValues.scale, multiply);
  const opacity = useTransform(fxValues.opacity, multiply);
  const x = useTransform(fxValues.x, add2);
  const y = useTransform(fxValues.y, add2);
  const rotate = useTransform(fxValues.rotate, add2);
  const rotateX = useTransform(fxValues.rotateX, add2);
  const rotateY = useTransform(fxValues.rotateY, add2);
  const transformPerspective = useTransform(fxValues.transformPerspective, add2);
  const { drag, dragConstraints } = forwardedProps;
  useRerenderOnResize(
    drag && isObject2(dragConstraints) && `current` in dragConstraints ? dragConstraints : void 0
  );
  const motionValueStyle = {
    opacity,
    scale: scale2,
    x,
    y,
    rotate,
    rotateX,
    rotateY
  };
  if (isUndefined(props.__perspectiveFX)) {
    motionValueStyle.transformPerspective = transformPerspective;
  }
  return /* @__PURE__ */ React60.createElement(
    Component15,
    {
      ...forwardedProps,
      __withFX: true,
      style: {
        ...props.style,
        ...parallaxStyle,
        ...motionValueStyle
      },
      values,
      ref
    }
  );
});

// ../../library/src/deprecated/deprecatedEffects.ts
var withParallaxTransform = withFX;
var withStyleAppearEffect = withFX;

// ../../library/src/deprecated/WithOverride.tsx
var import_hoist_non_react_statics4 = __toESM(require_hoist_non_react_statics_cjs(), 1);
import React61, { useContext as useContext11 } from "react";

// ../../library/src/deprecated/convertColorProps.ts
function convertColorObject(prop) {
  if (typeof prop === "string" || isMotionValue2(prop)) {
    return prop;
  } else if (LinearGradient.isLinearGradient(prop)) {
    return LinearGradient.toCSS(prop);
  } else if (RadialGradient.isRadialGradient(prop)) {
    return RadialGradient.toCSS(prop);
  } else if (Color.isColorObject(prop)) {
    return Color.toRgbString(prop);
  }
  return prop;
}
function convertColorProps(props) {
  if (props.background || props.color) {
    const converted = Object.assign({}, props);
    if (props.background) {
      converted.background = convertColorObject(props.background);
    }
    if (props.color) {
      converted.color = convertColorObject(props.color);
    }
    return converted;
  }
  return props;
}

// ../../library/src/deprecated/WithOverride.tsx
function WithOverride(Component15, override) {
  const useOverride = typeof override === "function" ? (props) => override(convertColorProps(props)) : () => convertColorProps(override);
  const ComponentWithOverride = function(props) {
    useContext11(DataObserverContext);
    const overrideProps = useOverride(props);
    const { style, ...rest } = props;
    return /* @__PURE__ */ React61.createElement(Component15, { ...rest, ...overrideProps, _initialStyle: style });
  };
  (0, import_hoist_non_react_statics4.default)(ComponentWithOverride, Component15);
  ComponentWithOverride["displayName"] = `WithOverride(${Component15.displayName || Component15.name})`;
  return ComponentWithOverride;
}

// ../../library/src/modules/callEach.ts
var callEach = (...fns) => fns.forEach((fn) => fn && fn());

// ../../library/src/modules/Container.tsx
import React63 from "react";

// ../../library/src/render/utils/withGeneratedLayoutId.tsx
import React62 from "react";
var withGeneratedLayoutId = (Component15) => React62.forwardRef((props, ref) => {
  const layoutId = useLayoutId(props);
  return /* @__PURE__ */ React62.createElement(Component15, { layoutId, ...props, layoutIdKey: void 0, duplicatedFrom: void 0, ref });
});

// ../../library/src/modules/Container.tsx
var Providers = /* @__PURE__ */ React63.forwardRef(
  ({ children, layoutId, ...props }, ref) => {
    const outerLayoutId = useConstant(() => layoutId ? `${layoutId}-container` : void 0);
    return /* @__PURE__ */ React63.createElement(motion.div, { layoutId: outerLayoutId, ...props, ref }, /* @__PURE__ */ React63.createElement(ComponentContainerContext.Provider, { value: true }, /* @__PURE__ */ React63.createElement(AutomaticLayoutIds, { enabled: false }, /* @__PURE__ */ React63.createElement(LayoutGroup, { id: layoutId != null ? layoutId : "", inherit: "id" }, React63.Children.map(children, (child) => {
      return React63.isValidElement(child) ? React63.cloneElement(child, { layoutId }) : child;
    })))));
  }
);
var Container = /* @__PURE__ */ withGeneratedLayoutId(Providers);

// ../../library/src/modules/framerPageLink.ts
var elementKey = "element";
var collectionKey = "collection";
var collectionItemIdKey = "collectionItemId";
var pathVariablesKey = "pathVariables";
var mediaType = "framer/page-link,";
function isFramerPageLink(value) {
  return isString2(value) && value.startsWith(`data:${mediaType}`);
}
function createFramerPageLink(targetId = null, options = {}) {
  const target = targetId ? targetId : "none";
  const link = new URL(`data:${mediaType}${target}`);
  if (options.element) {
    link.searchParams.append(elementKey, options.element);
  }
  if (options.collectionItem) {
    link.searchParams.append(collectionKey, options.collectionItem.collection);
    link.searchParams.append(collectionItemIdKey, options.collectionItem.collectionItemId);
    link.searchParams.append(pathVariablesKey, new URLSearchParams(options.collectionItem.pathVariables).toString());
  }
  return link.href;
}
function parseFramerPageLink(link) {
  if (!isFramerPageLink(link))
    return;
  try {
    const url = new URL(link);
    const target = url.pathname.substring(mediaType.length);
    const searchParams = url.searchParams;
    const element = searchParams.has(elementKey) ? searchParams.get(elementKey) : void 0;
    let collectionItem;
    const collection = searchParams.get(collectionKey);
    const collectionItemId = searchParams.get(collectionItemIdKey);
    const pathVariablesValue = searchParams.get(pathVariablesKey);
    if (collection && collectionItemId && pathVariablesValue) {
      const pathVariables = Object.fromEntries(new URLSearchParams(pathVariablesValue).entries());
      collectionItem = {
        collection,
        collectionItemId,
        pathVariables
      };
    }
    return {
      target: target === "none" ? null : target,
      /**
       * For historical reason we used to set "element=none" into the
       * datalink, we no longer do that today, but we still keep this code
       * so we could parse legacy links correctly.
       */
      element: element === "none" ? void 0 : element,
      collectionItem
    };
  } catch {
    return;
  }
}
function shouldOpenLinkInNewTab(link) {
  return !isFramerPageLink(link);
}
function navigateFromAttributes(navigate, element, implicitPathVariables) {
  var _a, _b, _c;
  let routeId = element.getAttribute("data-framer-page-link-target" /* Page */);
  let elementId;
  let pathVariables;
  if (routeId) {
    elementId = (_a = element.getAttribute("data-framer-page-link-element" /* Element */)) != null ? _a : void 0;
    const pathVariablesRaw = element.getAttribute("data-framer-page-link-path-variables" /* PathVariables */);
    if (pathVariablesRaw) {
      pathVariables = Object.fromEntries(new URLSearchParams(pathVariablesRaw).entries());
    }
  } else {
    const href = element.getAttribute("href");
    if (!href)
      return false;
    const link = parseFramerPageLink(href);
    if (!link || !link.target)
      return false;
    routeId = link.target;
    elementId = (_b = link.element) != null ? _b : void 0;
    pathVariables = (_c = link.collectionItem) == null ? void 0 : _c.pathVariables;
  }
  const smoothScroll = elementId ? element.dataset.framerSmoothScroll !== void 0 : void 0;
  navigate(routeId, elementId, Object.assign({}, implicitPathVariables, pathVariables), smoothScroll);
  return true;
}

// ../../library/src/modules/GeneratedComponentContext.ts
import React64 from "react";
var GeneratedComponentContext = /* @__PURE__ */ React64.createContext(
  void 0
);

// ../../library/src/modules/Link.tsx
import React65 from "react";

// ../../library/src/render/utils/findAnchorElement.ts
function findAnchorElement(target, withinElement) {
  if (target instanceof HTMLAnchorElement) {
    return target;
  }
  if (target instanceof Element) {
    if (target === withinElement) {
      return null;
    }
    return findAnchorElement(target.parentElement, withinElement);
  }
  return null;
}

// ../../library/src/modules/Link.tsx
var linkKey = "webPageId";
function isLinkToWebPage(link) {
  return Boolean(link && typeof link === "object" && linkKey in link);
}
function createVariablesFromPageLinkCollectionItem(collectionItem) {
  if (!collectionItem)
    return void 0;
  const variables = {};
  for (const pathVariablesKey2 in collectionItem.pathVariables) {
    const value = collectionItem.pathVariables[pathVariablesKey2];
    if (value)
      variables[pathVariablesKey2] = value;
  }
  return variables;
}
function linkFromFramerPageLink(link) {
  if (!isFramerPageLink(link))
    return link;
  const parsed = parseFramerPageLink(link);
  if (!parsed)
    return void 0;
  const { target, element, collectionItem } = parsed;
  if (!target)
    return void 0;
  return {
    webPageId: target,
    hash: element != null ? element : void 0,
    pathVariables: createVariablesFromPageLinkCollectionItem(collectionItem)
  };
}
var pathVariablesRegExp2 = /:([a-zA-Z][a-zA-Z0-9_]*)/g;
var PathVariablesContext = React65.createContext(void 0);
function useImplicitPathVariables() {
  var _a;
  const contextPathVariables = React65.useContext(PathVariablesContext);
  const currentPathVariables = (_a = useCurrentRoute()) == null ? void 0 : _a.pathVariables;
  const pathVariables = contextPathVariables || currentPathVariables;
  return pathVariables;
}
function linkMatchesRoute(route, { webPageId, hash: hash2, pathVariables }, implicitPathVariables) {
  if (webPageId !== route.id)
    return false;
  if (hash2)
    return false;
  if (route.path && route.pathVariables) {
    const combinedPathVariable = Object.assign({}, implicitPathVariables, pathVariables);
    for (const [, key7] of route.path.matchAll(pathVariablesRegExp2)) {
      if (!key7)
        return false;
      if (route.pathVariables[key7] !== combinedPathVariable[key7]) {
        return false;
      }
    }
  }
  return true;
}
function useLinkMatchesRoute(link) {
  const route = useCurrentRoute();
  const contextPathVariables = React65.useContext(PathVariablesContext);
  if (!route)
    return false;
  const pageLink = isString2(link) ? linkFromFramerPageLink(link) : link;
  return isLinkToWebPage(pageLink) ? linkMatchesRoute(route, pageLink, contextPathVariables) : false;
}
function isInternalURL(href) {
  if (href === void 0)
    return false;
  if (href.startsWith("#") || href.startsWith("/") || href.startsWith("."))
    return true;
  return false;
}
function isValidURL(href, isInternal) {
  try {
    const url = new URL(href);
    return Boolean(url.protocol);
  } catch {
  }
  return isInternal;
}
var AnchorLinkTarget = /* @__PURE__ */ ((AnchorLinkTarget2) => {
  AnchorLinkTarget2["_blank"] = "_blank";
  AnchorLinkTarget2["_self"] = "_self";
  return AnchorLinkTarget2;
})(AnchorLinkTarget || {});
function getTargetAttrValue(openInNewTab, isInternal) {
  if (openInNewTab !== void 0) {
    return openInNewTab ? "_blank" /* _blank */ : void 0;
  }
  return isInternal ? void 0 : "_blank" /* _blank */;
}
function propsForLink(href, openInNewTab = void 0) {
  const isInternal = isInternalURL(href);
  const anchorTarget = getTargetAttrValue(openInNewTab, isInternal);
  return {
    href: isValidURL(href, isInternal) ? href : `https://${href}`,
    target: anchorTarget,
    rel: !isInternal ? "noreferrer noopener" : void 0
  };
}
function createOnClickLinkHandler(router, routeId, elementId, combinedPathVariables, smoothScroll) {
  return (event) => {
    var _a;
    if (event.metaKey)
      return;
    const anchorElement = findAnchorElement(event.target);
    if (!anchorElement || anchorElement.getAttribute("target") === "_blank" /* _blank */)
      return;
    event.preventDefault();
    (_a = router.navigate) == null ? void 0 : _a.call(router, routeId, elementId, combinedPathVariables, smoothScroll);
  };
}
function propsForRoutePath(href, openInNewTab, router, currentRoute, implicitPathVariables, smoothScroll) {
  const isInternal = isInternalURL(href);
  if (!router.routes || !router.getRoute || !currentRoute || !isInternal) {
    return propsForLink(href, openInNewTab);
  }
  try {
    const [pathname, hash2] = href.split("#", 2);
    assert(pathname !== void 0, "A href must have a defined pathname.");
    const { routeId, pathVariables } = inferInitialRouteFromPath(router.routes, pathname);
    const route = router.getRoute(routeId);
    if (route) {
      preloadComponent(route.page);
      const combinedPathVariables = Object.assign({}, implicitPathVariables, pathVariables);
      const path = getPathForRoute(route, {
        currentRoutePath: currentRoute.path,
        // The hash value is already fully resolved so we don't need to
        // provide any hashVariables.
        hash: hash2 || void 0,
        pathVariables: combinedPathVariables
      });
      const anchorTarget = getTargetAttrValue(openInNewTab, true);
      return {
        href: path,
        target: anchorTarget,
        onClick: createOnClickLinkHandler(
          router,
          routeId,
          hash2 || void 0,
          combinedPathVariables,
          smoothScroll
        )
      };
    }
  } catch {
  }
  return propsForLink(href, openInNewTab);
}
var Link = /* @__PURE__ */ React65.forwardRef(
  ({ children, href, openInNewTab, smoothScroll, ...restProps }, forwardedRef) => {
    const router = useRouter();
    const currentRoute = useCurrentRoute();
    const implicitPathVariables = useImplicitPathVariables();
    const props = React65.useMemo(() => {
      var _a;
      if (!href)
        return {};
      const pageLink = isLinkToWebPage(href) ? href : linkFromFramerPageLink(href);
      if (!pageLink)
        return {};
      if (isString2(pageLink)) {
        return propsForRoutePath(
          pageLink,
          openInNewTab,
          router,
          currentRoute,
          implicitPathVariables,
          smoothScroll
        );
      }
      const { webPageId, hash: hash2, pathVariables, hashVariables } = pageLink;
      const route = (_a = router.getRoute) == null ? void 0 : _a.call(router, webPageId);
      if (route)
        preloadComponent(route.page);
      const combinedPathVariable = Object.assign({}, implicitPathVariables, pathVariables);
      const combinedHashVariable = Object.assign({}, implicitPathVariables, hashVariables);
      const anchorTarget = getTargetAttrValue(openInNewTab, true);
      const resolvedHref = getPathForRoute(route, {
        currentRoutePath: currentRoute == null ? void 0 : currentRoute.path,
        hash: hash2,
        pathVariables: combinedPathVariable,
        hashVariables: combinedHashVariable
      });
      const resolvedHash = resolvedHref.split("#", 2)[1];
      return {
        href: resolvedHref,
        target: anchorTarget,
        onClick: createOnClickLinkHandler(router, webPageId, resolvedHash, combinedPathVariable, smoothScroll),
        "data-framer-page-link-current": currentRoute && linkMatchesRoute(currentRoute, pageLink, implicitPathVariables) || void 0
      };
    }, [currentRoute, href, openInNewTab, implicitPathVariables, router, smoothScroll]);
    if (!children)
      return null;
    const child = React65.Children.only(children);
    if (!React65.isValidElement(child))
      return null;
    return React65.cloneElement(child, { ...restProps, ...props, ref: forwardedRef != null ? forwardedRef : restProps.ref });
  }
);
function resolveLink(href, router, implicitPathVariables) {
  const pageLink = isLinkToWebPage(href) ? href : linkFromFramerPageLink(href);
  if (!isLinkToWebPage(pageLink))
    return isString2(href) ? propsForLink(href).href : void 0;
  if (!router.getRoute || !router.currentRouteId)
    return void 0;
  const currentRoute = router.getRoute(router.currentRouteId);
  const { webPageId, hash: hash2, pathVariables, hashVariables } = pageLink;
  const route = router.getRoute(webPageId);
  const combinedPathVariables = Object.assign({}, router.currentPathVariables, implicitPathVariables, pathVariables);
  const combinedHashVariables = Object.assign({}, router.currentPathVariables, implicitPathVariables, hashVariables);
  return getPathForRoute(route, {
    currentRoutePath: currentRoute == null ? void 0 : currentRoute.path,
    hash: hash2,
    pathVariables: combinedPathVariables,
    hashVariables: combinedHashVariables,
    relative: false
  });
}

// ../../library/src/modules/optimizeAppear.ts
var AnimationCollector = class {
  constructor() {
    this.entries = /* @__PURE__ */ new Map();
  }
  set(nodeId, prop, value, variantHash) {
    const nodeEntry = this.entries.get(nodeId);
    switch (prop) {
      case "transformTemplate": {
        assert(typeof value === "string", `transformTemplate must be a string, received: ${value}`);
        if (nodeEntry) {
          nodeEntry.transformTemplate = value;
        } else {
          this.entries.set(nodeId, { transformTemplate: value });
        }
        break;
      }
      case "initial":
      case "animate": {
        assert(typeof value === "object", `${prop} must be a valid object, received: ${value}`);
        if (nodeEntry) {
          nodeEntry[prop] = value;
          if (!nodeEntry.variantHash) {
            nodeEntry.variantHash = variantHash;
          }
        } else {
          this.entries.set(nodeId, { [prop]: value, variantHash });
        }
        break;
      }
      default:
        break;
    }
  }
  clear() {
    this.entries.clear();
  }
  toObject() {
    return Object.fromEntries(this.entries);
  }
};
var framerAppearEffects = /* @__PURE__ */ new AnimationCollector();
var optimizeAppear = (prop, id, animateTargetAndTransition, variantHash) => {
  if (!isBrowser2()) {
    framerAppearEffects.set(id, prop, animateTargetAndTransition, variantHash);
  }
  return animateTargetAndTransition;
};
var framerAppearTransformTemplateToken = "__Appear_Animation_Transform__";
var optimizeAppearTransformTemplate = (id, fn) => {
  if (!isBrowser2()) {
    const template = fn == null ? void 0 : fn({}, framerAppearTransformTemplateToken);
    if (template === void 0)
      return fn;
    framerAppearEffects.set(id, "transformTemplate", template);
  }
  return fn;
};
var framerAppearIdKey = "data-framer-appear-id";
var framerAppearAnimationScriptKey = "data-framer-appear-animation";

// ../../library/src/modules/PageRoot.tsx
import React66 from "react";
function PageRoot({
  RootComponent,
  isWebsite,
  routeId,
  pathVariables,
  routes,
  notFoundPage,
  isReducedMotion = false,
  includeDataObserver = false
}) {
  React66.useEffect(() => {
    if (isWebsite)
      return;
    MainLoop.start();
  }, []);
  if (isWebsite) {
    return /* @__PURE__ */ React66.createElement(MotionConfig, { reducedMotion: isReducedMotion ? "user" : "never" }, /* @__PURE__ */ React66.createElement(
      Router,
      {
        initialRoute: routeId,
        initialPathVariables: pathVariables,
        routes,
        notFoundPage,
        defaultPageStyle: { minHeight: "100%", width: "auto" }
      }
    ));
  } else {
    const Wrapper = includeDataObserver ? DataObserver : React66.Fragment;
    return /* @__PURE__ */ React66.createElement(Wrapper, null, /* @__PURE__ */ React66.createElement(RoutesProvider, { routes }, /* @__PURE__ */ React66.createElement(NavigationWrapper, null, /* @__PURE__ */ React66.createElement(RootComponent, { key: routeId }))));
  }
}

// ../../library/src/modules/PropertyOverrides.tsx
import React69 from "react";

// ../../library/src/modules/withCSS.tsx
import React68 from "react";

// ../../library/src/render/StyleSheetContext.ts
import React67 from "react";
var StyleSheetContext = /* @__PURE__ */ React67.createContext(void 0);

// ../../library/src/modules/withCSS.tsx
if (isBrowser2()) {
  for (const node of document.querySelectorAll("style[data-framer-css-ssr]")) {
    document.head.appendChild(node);
  }
}
var componentsWithServerRenderedStyles = /* @__PURE__ */ (() => {
  var _a;
  if (!isBrowser2())
    return /* @__PURE__ */ new Set();
  const componentsWithSSRStylesAttr = (_a = document.querySelector("style[data-framer-css-ssr-minified]")) == null ? void 0 : _a.getAttribute("data-framer-components");
  if (!componentsWithSSRStylesAttr)
    return /* @__PURE__ */ new Set();
  return new Set(componentsWithSSRStylesAttr.split(" "));
})();
var styleTagSSRMarker = { "data-framer-css-ssr": true };
var withCSS = (Component15, escapedCSS, componentSerializationId) => React68.forwardRef((props, ref) => {
  var _a;
  const { sheet, cache: cache3 } = (_a = React68.useContext(StyleSheetContext)) != null ? _a : {};
  if (!isBrowser2()) {
    const concatenatedCSS = Array.isArray(escapedCSS) ? escapedCSS.join("\n") : escapedCSS;
    return /* @__PURE__ */ React68.createElement(React68.Fragment, null, /* @__PURE__ */ React68.createElement(
      "style",
      {
        ...styleTagSSRMarker,
        "data-framer-component": componentSerializationId,
        dangerouslySetInnerHTML: { __html: concatenatedCSS }
      }
    ), /* @__PURE__ */ React68.createElement(Component15, { ...props, ref }));
  }
  const didInjectStyles = React68.useRef(
    componentSerializationId ? componentsWithServerRenderedStyles.has(componentSerializationId) : false
  );
  if (!didInjectStyles.current) {
    const css = Array.isArray(escapedCSS) ? escapedCSS : escapedCSS.split("\n");
    css.forEach((rule) => rule && injectCSSRule(rule, sheet, cache3));
    didInjectStyles.current = true;
  }
  return /* @__PURE__ */ React68.createElement(Component15, { ...props, ref });
});

// ../../library/src/modules/PropertyOverrides.tsx
var SSRParentVariantsContext = /* @__PURE__ */ React69.createContext(void 0);
var SSRVariantClassName = "ssr-variant";
function propsForClonedChild(child, props, ref) {
  var _a;
  if ("ref" in child)
    return { ...props, ref: (_a = child.ref) != null ? _a : ref };
  return { ...props, ref };
}
function childrenWithForwardedProps(children, props, ref) {
  return /* @__PURE__ */ React69.createElement(React69.Fragment, null, React69.Children.map(children, (child) => {
    if (!child || !isReactChild(child) || !isReactElement(child))
      return null;
    return React69.cloneElement(child, propsForClonedChild(child, props, ref));
  }));
}
function renderBranchedChildrenFromPropertyOverrides(overrides, children, props, ref, variantClassNames, primaryVariantId, parentVariants, type) {
  const childrenArray = React69.Children.toArray(children);
  const child = childrenArray[0];
  if (childrenArray.length !== 1 || !React69.isValidElement(child)) {
    console.warn(type + ": expected exactly one React element for a child", children);
    return childrenWithForwardedProps(children, props, ref);
  }
  const branches = [];
  const nonOverriddenVariants = [];
  for (const [variantId] of Object.entries(variantClassNames)) {
    if (variantId === primaryVariantId)
      continue;
    const propOverrides = overrides[variantId];
    if (!propOverrides || !arePropOverridesEffectivelyDifferent(child.props, propOverrides)) {
      nonOverriddenVariants.push(variantId);
      continue;
    }
    const effectiveVariants = intersection([variantId], parentVariants);
    if (effectiveVariants.length)
      branches.push({ variants: effectiveVariants, propOverrides });
  }
  if (branches.length === 0)
    return React69.cloneElement(child, { ...props, ref });
  const remainingVariants = [primaryVariantId, ...nonOverriddenVariants];
  const effectiveRemainingVariants = intersection(remainingVariants, parentVariants);
  if (effectiveRemainingVariants.length)
    branches.unshift({ variants: effectiveRemainingVariants });
  return /* @__PURE__ */ React69.createElement(React69.Fragment, null, !parentVariants && /* @__PURE__ */ React69.createElement("style", { ...styleTagSSRMarker }, `.${SSRVariantClassName} { display: contents }`), branches.map(({ variants, propOverrides }) => {
    const key7 = variants.join("+");
    let element = (
      // We could omit the SSRParentVariantsContext if variants is
      // the same as parentVariants, but that'd require comparing
      // arrays, so it might not really be an optimization. And
      // since it's just a context, it doesn't affect the size of
      // the generated HTML.
      /* @__PURE__ */ React69.createElement(SSRParentVariantsContext.Provider, { key: key7, value: new Set(variants) }, React69.cloneElement(child, { ...props, ...propOverrides, ref }))
    );
    const hiddenClassNames = generateHiddenClassNames(variants, parentVariants, variantClassNames);
    if (hiddenClassNames.length) {
      assert(branches.length > 1, "Must branch out when there are hiddenClassNames");
      element = /* @__PURE__ */ React69.createElement("div", { key: key7, className: `${SSRVariantClassName} ${hiddenClassNames.join(" ")}` }, element);
    } else {
      assert(branches.length === 1, "Cannot branch out when hiddenClassNames is empty");
    }
    return element;
  }));
}
var SSRVariants = /* @__PURE__ */ React69.forwardRef(
  function SSRVariants2({ id: nodeId, children, ...props }, ref) {
    if (isBrowser2()) {
      return childrenWithForwardedProps(children, props, ref);
    }
    const generatedComponentContext = React69.useContext(GeneratedComponentContext);
    if (!generatedComponentContext || !generatedComponentContext.variantProps) {
      console.warn("SSRVariants is missing GeneratedComponentContext");
      return childrenWithForwardedProps(children, props, ref);
    }
    const parentVariants = React69.useContext(SSRParentVariantsContext);
    const { primaryVariantId, variantClassNames, variantProps } = generatedComponentContext;
    const overrides = React69.useMemo(() => {
      const nextOverrides = {};
      for (const [variant, values] of Object.entries(variantProps)) {
        nextOverrides[variant] = values[nodeId];
      }
      return nextOverrides;
    }, [nodeId, variantProps]);
    return renderBranchedChildrenFromPropertyOverrides(
      overrides,
      children,
      props,
      ref,
      variantClassNames,
      primaryVariantId,
      parentVariants,
      "SSRVariants"
    );
  }
);
function generateHiddenClassNames(showOnlyInVariantIds, parentVariants, variantClassNames) {
  const classNames = [];
  for (const [variantId, variantClassName] of Object.entries(variantClassNames)) {
    const alreadyHiddenInParent = parentVariants && !parentVariants.has(variantId);
    if (showOnlyInVariantIds.includes(variantId) || alreadyHiddenInParent)
      continue;
    const variantHash = variantClassName.split("-")[2];
    classNames.push(`hidden-${variantHash}`);
  }
  return classNames;
}
function intersection(variants, parentVariants) {
  if (!parentVariants)
    return variants;
  return variants.filter((variant) => parentVariants.has(variant));
}
function propertyKeyDifferenceShouldBeIgnored(key7) {
  switch (key7) {
    case "transformTemplate":
      return false;
    default:
      return false;
  }
}
function arePropOverridesEffectivelyDifferent(props, propOverrides) {
  for (const key7 of Object.keys(propOverrides)) {
    if (propertyKeyDifferenceShouldBeIgnored(key7))
      continue;
    if (!isEqual(props[key7], propOverrides[key7], true)) {
      return true;
    }
  }
  return false;
}
function propsForBreakpoint(variant, props, overrides) {
  if (!overrides || !variant)
    return props;
  return { ...props, ...overrides[variant] };
}
var PropertyOverrides = /* @__PURE__ */ React69.forwardRef(
  function PropertyOverrides2({ breakpoint, overrides, children, ...props }, ref) {
    if (isBrowser2()) {
      return childrenWithForwardedProps(children, propsForBreakpoint(breakpoint, props, overrides), ref);
    }
    const generatedComponentContext = React69.useContext(GeneratedComponentContext);
    if (!generatedComponentContext) {
      console.warn("PropertyOverrides is missing GeneratedComponentContext");
      return childrenWithForwardedProps(children, props, ref);
    }
    const { primaryVariantId, variantClassNames } = generatedComponentContext;
    const parentVariants = React69.useContext(SSRParentVariantsContext);
    return renderBranchedChildrenFromPropertyOverrides(
      overrides,
      children,
      props,
      ref,
      variantClassNames,
      primaryVariantId,
      parentVariants,
      "PropertyOverrides"
    );
  }
);

// ../../library/src/modules/useActiveVariantCallback.ts
import React70 from "react";
function rejectPending(pendingTimers, pendingPromises) {
  pendingTimers.forEach((t) => clearTimeout(t));
  pendingTimers.clear();
  pendingPromises.forEach((reject) => reject && reject("Callback cancelled by variant change"));
  pendingPromises.clear();
}
function createSet() {
  return /* @__PURE__ */ new Set();
}
function useActiveVariantCallback(baseVariant) {
  const pendingPromises = useConstant(createSet);
  const pendingTimers = useConstant(createSet);
  useOnCurrentTargetChange(() => {
    return () => rejectPending(pendingTimers, pendingPromises);
  });
  React70.useEffect(() => {
    return () => rejectPending(pendingTimers, pendingPromises);
  }, [pendingPromises, pendingTimers]);
  React70.useEffect(() => {
    rejectPending(pendingTimers, pendingPromises);
  }, [baseVariant, pendingPromises, pendingTimers]);
  return React70.useRef({
    /**
     * Create a callback that can be cancelled if the base variant changes.
     */
    activeVariantCallback: (callback) => (...args) => {
      return new Promise((resolve, reject) => {
        pendingPromises.add(reject);
        return callback(...args).then(resolve);
      }).catch(() => {
      });
    },
    /**
     * Execute a callback after a defined period of time. The callback will not
     * be called if pending events are cancelled because the timeout will be
     * cancelled.
     */
    delay: async (callback, msDelay) => {
      await new Promise((resolve) => pendingTimers.add(globalThis.setTimeout(() => resolve(true), msDelay)));
      callback();
    }
  }).current;
}
function useActiveTargetCallback() {
  const value = useActiveVariantCallback(void 0);
  return React70.useRef({
    activeTargetCallback: value.activeVariantCallback,
    delay: value.delay
  }).current;
}

// ../../library/src/modules/useAddVariantProps.ts
import React71 from "react";
function useAddVariantProps(baseVariant, gestureVariant, variantProps) {
  return React71.useCallback(
    (id) => {
      var _a, _b, _c;
      if (!variantProps)
        return {};
      if (!baseVariant)
        return {};
      if (gestureVariant) {
        return Object.assign({}, (_a = variantProps[baseVariant]) == null ? void 0 : _a[id], (_b = variantProps[gestureVariant]) == null ? void 0 : _b[id]);
      }
      return ((_c = variantProps[baseVariant]) == null ? void 0 : _c[id]) || {};
    },
    [baseVariant, gestureVariant, variantProps]
  );
}

// ../../library/src/modules/useBreakpointVariants.ts
import { useCallback as useCallback6, useContext as useContext12, useEffect as useEffect9, useRef as useRef10 } from "react";
function createMediaQueriesFromBreakpoints(breakpoints) {
  const mediaQueries = {};
  for (const [variant, query] of Object.entries(breakpoints)) {
    const { min = 0, max } = query;
    const mediaQuery = [];
    if (min)
      mediaQuery.push(`(min-width: ${min}px)`);
    if (max)
      mediaQuery.push(`(max-width: ${max}px)`);
    if (mediaQuery.length)
      mediaQueries[variant] = mediaQuery.join(" and ");
  }
  return mediaQueries;
}
function activeMediaQueryFromWindow(mediaQueries) {
  for (const [variant, query] of Object.entries(mediaQueries)) {
    const mql = safeWindow.matchMedia(query);
    if (mql.matches)
      return variant;
  }
}
function useHydratedBreakpointVariants(initial, mediaQueries, hydratedWithInitial = true) {
  var _a;
  const isInitialNavigation = useContext12(IsInitialNavigationContext);
  const baseVariant = useRef10(isBrowser2() ? (_a = activeMediaQueryFromWindow(mediaQueries)) != null ? _a : initial : initial);
  const basePropsVariant = useRef10(hydratedWithInitial && isInitialNavigation ? initial : baseVariant.current);
  const forceUpdate = useForceUpdate3();
  const instantTransition = useInstantTransition();
  const setActiveVariantInstant = useCallback6(
    (variant) => {
      if (variant !== baseVariant.current || variant !== basePropsVariant.current)
        instantTransition(() => {
          baseVariant.current = basePropsVariant.current = variant;
          forceUpdate();
        });
    },
    [instantTransition, forceUpdate]
  );
  useIsomorphicLayoutEffect2(() => {
    if (!hydratedWithInitial || isInitialNavigation !== true)
      return;
    setActiveVariantInstant(baseVariant.current);
  }, []);
  useEffect9(() => {
    const callbacks2 = [];
    for (const [variant, query] of Object.entries(mediaQueries)) {
      const mql = safeWindow.matchMedia(query);
      const callback = (event) => {
        if (event.matches)
          setActiveVariantInstant(variant);
      };
      addMQLCallback(mql, callback);
      callbacks2.push([mql, callback]);
    }
    return () => callbacks2.forEach(([mql, callback]) => removeMQLCallback(mql, callback));
  }, [mediaQueries, setActiveVariantInstant]);
  return [baseVariant.current, basePropsVariant.current];
}
function addMQLCallback(mql, callback) {
  if (mql.addEventListener) {
    mql.addEventListener("change", callback);
  } else {
    mql.addListener(callback);
  }
}
function removeMQLCallback(mql, callback) {
  if (mql.removeEventListener) {
    mql.removeEventListener("change", callback);
  } else {
    mql.removeListener(callback);
  }
}
function useBreakpointVariants(initial, _width, breakpoints) {
  const mediaQueries = useConstant(() => createMediaQueriesFromBreakpoints(breakpoints));
  const [initialVariant] = useHydratedBreakpointVariants(initial, mediaQueries, true);
  return initialVariant;
}
function removeHiddenBreakpointLayers(initial, mediaQueries, variantClassNames) {
  var _a, _b, _c, _d, _e;
  const activeVariant = (_a = activeMediaQueryFromWindow(mediaQueries)) != null ? _a : initial;
  const activeVariantHash = (_b = variantClassNames[activeVariant]) == null ? void 0 : _b.split("-")[2];
  if (activeVariantHash) {
    for (const hiddenLayer of document.querySelectorAll(`.hidden-${activeVariantHash}`)) {
      (_c = hiddenLayer.parentNode) == null ? void 0 : _c.removeChild(hiddenLayer);
    }
  }
  for (const ssrVariant of document.querySelectorAll(`.${SSRVariantClassName}`)) {
    if (ssrVariant.childElementCount > 1) {
      console.warn("SSR variant was expected to have at most one child at this point", ssrVariant);
      continue;
    } else if (ssrVariant.childElementCount === 1) {
      (_d = ssrVariant.parentNode) == null ? void 0 : _d.replaceChild(ssrVariant.firstChild, ssrVariant);
    } else {
      (_e = ssrVariant.parentNode) == null ? void 0 : _e.removeChild(ssrVariant);
    }
  }
  for (const image of document.querySelectorAll("[data-framer-original-sizes]")) {
    const originalSizes = image.getAttribute("data-framer-original-sizes");
    if (originalSizes === "") {
      image.removeAttribute("sizes");
    } else {
      image.setAttribute("sizes", originalSizes);
    }
    image.removeAttribute("data-framer-original-sizes");
  }
}

// ../../library/src/modules/useDataRecord.ts
import { useMemo as useMemo5 } from "react";
function useDataRecord(collection, variables) {
  return useMemo5(() => {
    if (!Array.isArray(collection)) {
      return null;
    }
    if (!variables) {
      return null;
    }
    const pageRecord = collection.find((record) => {
      return Object.entries(variables).every(([key7, value]) => {
        const recordValue = record[key7];
        if (value === void 0 || recordValue === void 0 || isObject2(value) || isObject2(recordValue)) {
          return false;
        }
        return String(value) === String(recordValue);
      });
    });
    return pageRecord != null ? pageRecord : null;
  }, [collection, variables]);
}

// ../../library/src/modules/useDynamicRefs.ts
import React72, { createRef } from "react";
function useDynamicRefs() {
  const map = useConstant(() => /* @__PURE__ */ new Map());
  return React72.useCallback(
    (key7) => {
      const existing = map.get(key7);
      if (existing)
        return existing;
      const ref = createRef();
      map.set(key7, ref);
      return ref;
    },
    [map]
  );
}

// ../../library/src/modules/useGamepad.ts
import React73 from "react";
function isFramerGamepadKeydownData(value) {
  return isObject2(value) && value.mapping !== void 0;
}
function gamepadInputsHaveChanged(previous, current) {
  if (previous.length !== current.length)
    return true;
  if (!previous.every((item, i) => current[i] === item))
    return true;
  return false;
}
function createGamepadPoller() {
  const handlers = /* @__PURE__ */ new Set();
  let isConnected = false;
  let isPolling = null;
  let lastKeys = [];
  const startPolling = () => {
    const input = getGamepadInputs();
    if (!input)
      return;
    const { gamepad, inputs } = input;
    const { mapping, id } = gamepad;
    if (gamepadInputsHaveChanged(lastKeys, inputs))
      handlers.forEach((handler) => handler({ inputs, mapping, id }));
    lastKeys = inputs;
    isPolling = safeWindow.requestAnimationFrame(startPolling);
  };
  const handleConnection = () => {
    if (isConnected || isPolling)
      return;
    startPolling();
    isConnected = true;
  };
  const stopPolling = () => {
    if (!isPolling)
      return;
    safeWindow.cancelAnimationFrame(isPolling);
    isPolling = null;
  };
  const handleDisconnection = () => {
    if (!isConnected)
      return;
    stopPolling();
    isConnected = false;
  };
  const setupAndStartPolling = () => {
    if (isPolling)
      return;
    const gamepad = getGamepadInputs();
    if (!gamepad) {
      safeWindow.addEventListener("gamepadconnected", handleConnection);
      return;
    }
    safeWindow.addEventListener("gamepaddisconnected", handleDisconnection);
    isConnected = true;
    startPolling();
  };
  const cleanupAndStopPolling = () => {
    if (!isPolling)
      return;
    safeWindow.removeEventListener("gamepadconnected", handleConnection);
    safeWindow.removeEventListener("gamepaddisconnected", handleDisconnection);
    stopPolling();
  };
  return {
    register(callback) {
      if (handlers.size === 0)
        setupAndStartPolling();
      handlers.add(callback);
    },
    unregister(callback) {
      handlers.delete(callback);
      if (handlers.size === 0)
        cleanupAndStopPolling();
    }
  };
}
var gamepadPoller = /* @__PURE__ */ createGamepadPoller();
var GamepadContext = /* @__PURE__ */ React73.createContext(gamepadPoller);
function getGamepadInputs() {
  let firstConnectedGamepad = null;
  const gamepads = navigator.getGamepads();
  for (const gamepad of gamepads) {
    if (!gamepad)
      continue;
    if (!firstConnectedGamepad)
      firstConnectedGamepad = gamepad;
    const inputs = [...scanPressedAxis(gamepad), ...scanPressedButtons(gamepad)];
    if (inputs.length > 0)
      return { gamepad, inputs };
  }
  if (firstConnectedGamepad)
    return { gamepad: firstConnectedGamepad, inputs: [] };
  return null;
}
function scanPressedAxis(gamepad) {
  const axes = [];
  for (const [idx, axis] of gamepad.axes.entries()) {
    if (idx > 3)
      continue;
    if (axis <= -0.5)
      axes.push(`Axis ${idx}-`);
    if (axis > 0.5)
      axes.push(`Axis ${idx}+`);
  }
  return axes;
}
function scanPressedButtons(gamepad) {
  const buttons = [];
  for (const [idx, button] of gamepad.buttons.entries()) {
    if (isButtonPressed(button))
      buttons.push(`Button ${idx}`);
  }
  return buttons;
}
function isButtonPressed(button) {
  return button.pressed === true || button.value > 0;
}
function useGamepad(input, callback, { mapping, on } = {}) {
  const context = React73.useContext(GamepadContext);
  const settings = useConstant(() => ({
    mapping: mapping != null ? mapping : "standard",
    on: on != null ? on : "keydown"
  }));
  const stateRef = React73.useRef({
    pressed: false,
    handler: callback
  });
  const cb2 = React73.useCallback(
    (gamepad) => {
      const { pressed, handler } = stateRef.current;
      if (gamepad.inputs.includes(input) && settings.mapping === gamepad.mapping) {
        settings.on === "keydown" && handler();
        stateRef.current.pressed = true;
      } else if (pressed) {
        settings.on === "keyup" && handler();
        stateRef.current.pressed = false;
      }
    },
    [input, settings]
  );
  useOnCurrentTargetChange((isInTarget, isOverlayed) => {
    const isActive = isInTarget && !isOverlayed;
    if (isActive) {
      context.register(cb2);
    } else {
      context.unregister(cb2);
    }
    return () => context.unregister(cb2);
  }, []);
  React73.useEffect(() => {
    return () => context.unregister(cb2);
  }, [cb2, context]);
  React73.useEffect(() => {
    stateRef.current.handler = callback;
  }, [callback]);
}

// ../../library/src/modules/useHotkey.ts
import React74 from "react";
var modifierDefaults = {
  altKey: false,
  ctrlKey: false,
  metaKey: false,
  shiftKey: false
};
function createShortcutDefinition(shortcut) {
  const keys3 = shortcut.split("+");
  const key7 = keys3.pop();
  if (!key7)
    return void 0;
  const modifiers = {};
  for (const modifier of keys3) {
    modifiers[`${modifier}Key`] = true;
  }
  return {
    ...modifierDefaults,
    ...modifiers,
    key: key7
  };
}
function useHotkey(shortcut, callback) {
  const inTarget = React74.useRef(true);
  const shortcutDefinition = useConstant(() => createShortcutDefinition(shortcut));
  useOnCurrentTargetChange((isCurrentTarget, isOverlayed) => {
    inTarget.current = isCurrentTarget && !isOverlayed;
    return () => inTarget.current = false;
  });
  const eventHandler = React74.useCallback(
    (event) => {
      if (!shortcutDefinition)
        return;
      if (!inTarget.current)
        return;
      if (!Object.keys(shortcutDefinition).every((key7) => shortcutDefinition[key7] === event[key7]))
        return;
      event.preventDefault();
      callback();
    },
    [shortcutDefinition, callback]
  );
  React74.useEffect(() => {
    document.addEventListener("keydown", eventHandler);
    return () => document.removeEventListener("keydown", eventHandler);
  }, [eventHandler]);
}

// ../../library/src/modules/useIsOnFramerCanvas.ts
function useIsOnFramerCanvas() {
  return RenderTarget.current() === "CANVAS" /* canvas */;
}

// ../../library/src/modules/useNavigate.tsx
function useNavigate() {
  const { navigate } = useRouter();
  const onCanvas = useIsOnFramerCanvas();
  if (!navigate)
    return () => {
    };
  return (target) => {
    if (onCanvas)
      return;
    navigate(target);
    return false;
  };
}

// ../../library/src/modules/useOnVariantChange.ts
import React75 from "react";
function callbackForVariant(map, variant) {
  if (map[variant])
    return map[variant];
  if (variant in map)
    return void 0;
  return map.default;
}
function useOnVariantChange(variant, callbackMap) {
  const isOnFramerCanvas = useIsOnFramerCanvas();
  if (isOnFramerCanvas)
    return;
  const isActiveScreenRef = React75.useRef(true);
  const callbackMapRef = React75.useRef(callbackMap);
  useOnCurrentTargetChange((isCurrent, isOverlayed) => {
    const isActiveScreen = isCurrent && !isOverlayed;
    if (!isActiveScreenRef.current && isActiveScreen) {
      const callback = callbackForVariant(callbackMapRef.current, variant);
      if (callback)
        callback();
    }
    isActiveScreenRef.current = isActiveScreen;
  }, []);
  React75.useEffect(() => {
    if (isActiveScreenRef.current) {
      const callback = callbackForVariant(callbackMapRef.current, variant);
      if (callback)
        callback();
    }
  }, [variant]);
}
function useOnAppear(callback) {
  useOnVariantChange("default", { default: callback });
}

// ../../library/src/modules/useOverlayState.tsx
import React76 from "react";
function useOverlayState() {
  const [showOverlay, setShowOverlay] = React76.useState(false);
  const callback = React76.useCallback((show) => {
    if (show) {
      document.documentElement.style.setProperty("overflow", "hidden");
    } else {
      document.documentElement.style.removeProperty("overflow");
    }
    setShowOverlay(show);
  }, []);
  React76.useEffect(
    () => () => {
      document.documentElement.style.removeProperty("overflow");
    },
    []
  );
  return [showOverlay, callback];
}

// ../../library/src/modules/usePrototypeNavigate.tsx
import React77 from "react";
async function componentForRoute(route) {
  if (!isRoute(route))
    return;
  const { page: routeComponent } = route;
  if (!routeComponent)
    return;
  if (React77.isValidElement(routeComponent))
    return routeComponent;
  if (withPreload(routeComponent))
    await routeComponent.preload();
  return React77.createElement(routeComponent, { key: route.path });
}
var preloadKey2 = "preload";
function withPreload(component) {
  return !!component && isObject2(component) && preloadKey2 in component;
}
function usePrototypeNavigate({ preload } = {}) {
  const navigation = useNavigation();
  const { getRoute } = useRouter();
  const onCanvas = useIsOnFramerCanvas();
  React77.useEffect(() => {
    if (!navigation || onCanvas)
      return;
    preload == null ? void 0 : preload.forEach((componentOrRoute) => {
      let component;
      if (isString2(componentOrRoute)) {
        const route = getRoute == null ? void 0 : getRoute(componentOrRoute);
        if (isRoute(route)) {
          component = route.page;
        }
      } else {
        component = componentOrRoute;
      }
      if (component && withPreload(component))
        component.preload();
    });
  }, []);
  if (!navigation)
    return () => {
    };
  return async (target, options = {}) => {
    if (onCanvas)
      return;
    if (target === "previous") {
      navigation.goBack();
      return false;
    }
    const Component15 = React77.isValidElement(target) ? target : await componentForRoute(getRoute == null ? void 0 : getRoute(target)).catch(() => {
    });
    if (!Component15)
      return;
    const { appearsFrom, backdropColor, animation } = options;
    const transitionType = options.transition || "instant";
    switch (transitionType) {
      case "instant":
        navigation.instant(Component15);
        break;
      case "fade":
        navigation.fade(Component15, { animation });
        break;
      case "push":
        navigation.push(Component15, { appearsFrom, animation });
        break;
      case "flip":
        navigation.flip(Component15, { appearsFrom, animation });
        break;
      case "magicMotion":
        navigation.magicMotion(Component15, { animation });
        break;
      case "modal":
        navigation.modal(Component15, { backdropColor, animation });
        break;
      case "overlay":
        navigation.overlay(Component15, { appearsFrom, backdropColor, animation });
        break;
    }
    return false;
  };
}

// ../../library/src/modules/useQueryData.ts
import { useMemo as useMemo6, useRef as useRef11 } from "react";
function useQueryData(query) {
  const stableQuery = useRef11();
  if (!isEqual(stableQuery.current, query)) {
    stableQuery.current = query;
  }
  assert(stableQuery.current, "Unknown query");
  const { from, select, where, orderBy, limit, offset } = stableQuery.current;
  let result = useMemo6(
    () => from.data.map((item, index) => {
      return { ...item, index };
    }),
    [from]
  );
  result = useMemo6(() => {
    if (!where)
      return result;
    return result.filter((item) => {
      return evaluateExpression(where, {
        resolveIdentifier(identifier) {
          return item[identifier];
        }
      });
    });
  }, [result, select]);
  result = useMemo6(() => {
    if (!orderBy)
      return result;
    return [...result].sort((leftItem, rightItem) => {
      let result2 = 0;
      for (const expression of orderBy) {
        const leftValue = evaluateExpression(expression, {
          resolveIdentifier(identifier) {
            return leftItem[identifier];
          }
        });
        const rightValue = evaluateExpression(expression, {
          resolveIdentifier(identifier) {
            return rightItem[identifier];
          }
        });
        if (isNumber(leftValue) && isNumber(rightValue)) {
          result2 = leftValue - rightValue;
        }
        if (isString2(leftValue) && isString2(rightValue)) {
          result2 = leftValue.localeCompare(rightValue, "en");
        }
        if (result2 !== 0) {
          return expression.direction === "desc" /* Descending */ ? -result2 : result2;
        }
      }
      return leftItem.index - rightItem.index;
    });
  }, [result, orderBy]);
  result = useMemo6(() => {
    if (!offset)
      return result;
    const offsetValue = evaluateExpression(offset, {
      resolveIdentifier() {
        throw new Error("Can't resolve identifier");
      }
    });
    if (isNumber(offsetValue) && offsetValue > 0) {
      return result.slice(offsetValue);
    }
    return result;
  }, [result, offset]);
  result = useMemo6(() => {
    if (!limit)
      return result;
    const limitValue = evaluateExpression(limit, {
      resolveIdentifier() {
        throw new Error("Can't resolve identifier");
      }
    });
    if (isNumber(limitValue) && limitValue >= 0) {
      result = result.slice(0, limitValue);
    }
    return result;
  }, [result, limit]);
  return useMemo6(
    () => result.map((item) => {
      var _a;
      const selected = {};
      for (const expression of select) {
        const name = (_a = expression.alias) != null ? _a : stringifyExpression(expression);
        selected[name] = evaluateExpression(expression, {
          resolveIdentifier(identifier) {
            return item[identifier];
          }
        });
      }
      return selected;
    }),
    [result, select]
  );
}
function evaluateExpression(expression, context) {
  switch (expression.type) {
    case "Identifier":
      return context.resolveIdentifier(expression.name);
    case "LiteralValue":
      return expression.value;
    case "FunctionCall":
      return evaluateFunctionCall(expression, context);
    case "Case":
      return evaluateCase(expression, context);
    case "UnaryOperation":
      return evaluateUnaryOperation(expression, context);
    case "BinaryOperation":
      return evaluateBinaryOperation(expression, context);
    case "TypeCast":
      return evaluateTypeCast(expression, context);
    default:
      throw new Error(`Unsupported expression: ${JSON.stringify(expression)}`);
  }
}
function evaluateFunctionCall(expression, context) {
  function getArgument(index) {
    const argument = expression.arguments[index];
    if (argument) {
      return evaluateExpression(argument, context);
    }
  }
  switch (expression.functionName) {
    case "CONTAINS": {
      const value = getArgument(0);
      const search = getArgument(1);
      if (isString2(value) && isString2(search)) {
        return value.toLowerCase().includes(search.toLowerCase());
      }
      return false;
    }
    case "STARTS_WITH": {
      const value = getArgument(0);
      const search = getArgument(1);
      if (isString2(value) && isString2(search)) {
        return value.toLowerCase().startsWith(search.toLowerCase());
      }
      return false;
    }
    case "ENDS_WITH": {
      const value = getArgument(0);
      const search = getArgument(1);
      if (isString2(value) && isString2(search)) {
        return value.toLowerCase().endsWith(search.toLowerCase());
      }
      return false;
    }
    default: {
      throw new Error(`Unsupported function: ${expression.functionName}`);
    }
  }
}
function evaluateCase(expression, context) {
  const value = expression.value && evaluateExpression(expression.value, context);
  for (const condition of expression.conditions) {
    const when = evaluateExpression(condition.when, context);
    if (expression.value ? isLooseEqual(when, value) : when) {
      return evaluateExpression(condition.then, context);
    }
  }
  if (expression.else) {
    return evaluateExpression(expression.else, context);
  }
}
function evaluateUnaryOperation(expression, context) {
  const value = evaluateExpression(expression.value, context);
  switch (expression.operator) {
    case "not" /* Not */: {
      return !value;
    }
    default: {
      throw new Error(`Unsupported unary operation: ${expression.operator}`);
    }
  }
}
function evaluateBinaryOperation(expression, context) {
  const left = evaluateExpression(expression.left, context);
  const right = evaluateExpression(expression.right, context);
  switch (expression.operator) {
    case "and" /* And */: {
      return Boolean(left && right);
    }
    case "or" /* Or */: {
      return Boolean(left || right);
    }
    case "==" /* Equals */: {
      return isLooseEqual(left, right);
    }
    case "!=" /* NotEquals */: {
      return !isLooseEqual(left, right);
    }
    case "<" /* LessThan */: {
      if (isNumber(left) && isNumber(right)) {
        return left < right;
      }
      return false;
    }
    case "<=" /* LessThanOrEqual */: {
      if (isNumber(left) && isNumber(right)) {
        return left <= right;
      }
      return false;
    }
    case ">" /* GreaterThan */: {
      if (isNumber(left) && isNumber(right)) {
        return left > right;
      }
      return false;
    }
    case ">=" /* GreaterThanOrEqual */: {
      if (isNumber(left) && isNumber(right)) {
        return left >= right;
      }
      return false;
    }
    default: {
      throw new Error(`Unsupported binary operation: ${expression.operator}`);
    }
  }
}
function evaluateTypeCast(expression, context) {
  const value = evaluateExpression(expression.value, context);
  switch (expression.dataType) {
    case "BOOLEAN": {
      return Boolean(value);
    }
    case "NUMBER": {
      if (isNumber(value) && isFinite(value)) {
        return value;
      }
      if (isString2(value)) {
        const parsed = parseFloat(value);
        if (isFinite(parsed)) {
          return parsed;
        }
      }
      return 0;
    }
    case "STRING": {
      return String(value);
    }
    default: {
      throw new Error(`Unsupported type cast: ${expression.dataType}`);
    }
  }
}
function stringifyExpression(expression) {
  switch (expression.type) {
    case "Identifier": {
      return expression.name;
    }
    default: {
      throw new Error(`Can't stringify expression: ${JSON.stringify(expression)}`);
    }
  }
}
function isLooseEqual(left, right) {
  if (left == null && right == null) {
    return true;
  }
  if (isString2(left) && isString2(right)) {
    return left.toLowerCase() === right.toLowerCase();
  }
  return left === right;
}
function getWhereExpressionFromPathVariables(pathVariables) {
  const entries = Object.entries(pathVariables).filter(([, value]) => {
    if (isUndefined(value))
      return false;
    if (isObject2(value))
      return false;
    return true;
  });
  const expressions = entries.map(
    ([name, value]) => ({
      type: "BinaryOperation",
      operator: "==" /* Equals */,
      left: {
        type: "TypeCast",
        value: {
          type: "Identifier",
          name
        },
        dataType: "STRING"
      },
      right: {
        type: "LiteralValue",
        value: String(value)
      }
    })
  );
  if (expressions.length === 0) {
    return {
      type: "LiteralValue",
      value: false
    };
  }
  return expressions.reduce(
    (result, expression) => ({
      type: "BinaryOperation",
      operator: "and" /* And */,
      left: result,
      right: expression
    })
  );
}

// ../../library/src/modules/useVariantState.ts
import React78 from "react";
function createGestureVariant(variant, type) {
  return `${variant}-${type}`;
}
function nextVariant(allVariants, currentVariant) {
  const index = allVariants.indexOf(currentVariant);
  let nextIndex = index + 1;
  if (nextIndex >= allVariants.length) {
    nextIndex = 0;
  }
  const nextVariant2 = allVariants[nextIndex];
  assert(nextVariant2 !== void 0, "nextVariant should be defined");
  return nextVariant2;
}
function activeTransition(transitions, variant) {
  if (!transitions)
    return void 0;
  if (variant) {
    const variantTransition = transitions[variant];
    if (variantTransition)
      return variantTransition;
  }
  return transitions.default;
}
var VariantSelector = /* @__PURE__ */ ((VariantSelector2) => {
  VariantSelector2["Variant"] = "v";
  return VariantSelector2;
})(VariantSelector || {});
function getGesture(enabledGestures, isHovered, isPressed) {
  const { hover, pressed } = enabledGestures || {};
  if (pressed && isPressed)
    return "pressed";
  if (hover && isHovered)
    return "hover";
}
function createVariantClassName(baseVariant, variantClassNames) {
  const mappedClassName = variantClassNames[baseVariant];
  if (mappedClassName)
    return mappedClassName;
  return `framer-${"v" /* Variant */}-${baseVariant}`;
}
function safeBaseVariant(targetVariant, fallbackVariant, validBaseVariants) {
  if (!targetVariant)
    return fallbackVariant;
  if (validBaseVariants.has(targetVariant))
    return targetVariant;
  return fallbackVariant;
}
var CycleVariantState = /* @__PURE__ */ Symbol("cycle");
function useVariantState({
  variant,
  defaultVariant: externalDefaultVariant,
  transitions: externalTransitions,
  enabledGestures: externalEnabledGestures,
  cycleOrder: externalCycleOrder = [],
  variantProps = {},
  variantClassNames = {}
}) {
  const forceUpdate = useForceUpdate3();
  const validBaseVariants = useConstant(() => new Set(externalCycleOrder));
  const internalState = React78.useRef({
    isHovered: false,
    isPressed: false,
    baseVariant: safeBaseVariant(variant, externalDefaultVariant, validBaseVariants),
    lastVariant: variant,
    gestureVariant: void 0,
    // When used in generated components, these are static values defined
    // outside of the component function that also need to not result in
    // memoized values being recalculated, so we dump them into the ref.
    defaultVariant: externalDefaultVariant,
    enabledGestures: externalEnabledGestures,
    cycleOrder: externalCycleOrder,
    transitions: externalTransitions
  });
  const resolveNextVariant = React78.useCallback(
    (targetBaseVariant) => {
      const { isHovered: isHovered2, isPressed: isPressed2, enabledGestures: enabledGestures2, defaultVariant: defaultVariant2 } = internalState.current;
      const nextBaseVariant = safeBaseVariant(targetBaseVariant, defaultVariant2, validBaseVariants);
      const gesture = getGesture(enabledGestures2 == null ? void 0 : enabledGestures2[nextBaseVariant], isHovered2, isPressed2);
      const nextGestureVariant = gesture ? createGestureVariant(nextBaseVariant, gesture) : void 0;
      return [nextBaseVariant, nextGestureVariant];
    },
    [validBaseVariants]
  );
  const setGestureState = React78.useCallback(
    ({ isHovered: isHovered2, isPressed: isPressed2 }) => {
      if (isHovered2 !== void 0)
        internalState.current.isHovered = isHovered2;
      if (isPressed2 !== void 0)
        internalState.current.isPressed = isPressed2;
      const { baseVariant: baseVariant2, gestureVariant: gestureVariant2, defaultVariant: defaultVariant2 } = internalState.current;
      const [nextBase, nextGesture] = resolveNextVariant(baseVariant2);
      if (nextBase !== baseVariant2 || nextGesture !== gestureVariant2) {
        internalState.current.baseVariant = nextBase || defaultVariant2;
        internalState.current.gestureVariant = nextGesture;
        forceUpdate();
      }
    },
    [resolveNextVariant, forceUpdate]
  );
  const setVariant = React78.useCallback(
    (proposedVariant) => {
      const { defaultVariant: defaultVariant2, cycleOrder, baseVariant: baseVariant2, gestureVariant: gestureVariant2 } = internalState.current;
      const nextBaseVariant = proposedVariant === CycleVariantState ? nextVariant(cycleOrder || [], baseVariant2 || defaultVariant2) : proposedVariant;
      const [nextBase, nextGesture] = resolveNextVariant(nextBaseVariant);
      if (nextBase !== baseVariant2 || nextGesture !== gestureVariant2) {
        internalState.current.baseVariant = nextBase || defaultVariant2;
        internalState.current.gestureVariant = nextGesture;
        forceUpdate();
      }
    },
    [resolveNextVariant, forceUpdate]
  );
  if (variant !== internalState.current.lastVariant) {
    const [nextBase, nextGesture] = resolveNextVariant(variant);
    if (nextBase !== internalState.current.baseVariant || nextGesture !== internalState.current.gestureVariant) {
      internalState.current.baseVariant = nextBase;
      internalState.current.gestureVariant = nextGesture;
      internalState.current.lastVariant = variant;
    }
  }
  const { baseVariant, gestureVariant, defaultVariant, enabledGestures, isHovered, isPressed } = internalState.current;
  const addVariantProps = useAddVariantProps(
    internalState.current.baseVariant,
    internalState.current.gestureVariant,
    variantProps
  );
  return React78.useMemo(() => {
    const variants = [];
    if (baseVariant !== defaultVariant)
      variants.push(baseVariant);
    if (gestureVariant)
      variants.push(gestureVariant);
    return {
      variants,
      baseVariant,
      gestureVariant,
      transition: activeTransition(internalState.current.transitions, baseVariant),
      setVariant,
      setGestureState,
      addVariantProps,
      classNames: cx(
        createVariantClassName(baseVariant, variantClassNames),
        getGesture(enabledGestures == null ? void 0 : enabledGestures[baseVariant], isHovered, isPressed)
      )
    };
  }, [
    baseVariant,
    gestureVariant,
    isHovered,
    isPressed,
    addVariantProps,
    setVariant,
    defaultVariant,
    enabledGestures,
    setGestureState,
    variantClassNames
  ]);
}

// ../../library/src/modules/withVariantAppearEffect.tsx
import React79 from "react";
var keys = /* @__PURE__ */ new Set([
  "visibleVariantId",
  "obscuredVariantId",
  "threshold",
  "animateOnce",
  "variantAppearEffectEnabled",
  "targets",
  "exitTarget"
]);
function createInputOutputRanges2(transformTargets, threshold, exitTarget) {
  const outputRange = [];
  const inputRange = createTransformInputRange(
    transformTargets,
    threshold,
    (index) => outputRange.unshift(index, index)
  );
  if (exitTarget) {
    const lastInputRange = inputRange[inputRange.length - 1];
    assert(typeof lastInputRange === "number", `Invalid outputRange: ${lastInputRange}, ${inputRange}.`);
    inputRange.push(lastInputRange + 1);
    outputRange.push(-1);
  }
  const firstItem = inputRange[0];
  assert(typeof firstItem === "number", `Invalid inputRange: ${inputRange}`);
  if (firstItem <= 1)
    return { inputRange, outputRange };
  return { inputRange: [0, Math.max(firstItem - 1, 0), ...inputRange], outputRange: [-1, -1, ...outputRange] };
}
var withVariantAppearEffect = (Component15) => React79.forwardRef(
  (props, forwardedRef) => {
    var _a;
    const fallbackRef = React79.useRef(null);
    const ref = forwardedRef != null ? forwardedRef : fallbackRef;
    const [options, rest] = extractPrefixedProps(props, keys);
    const {
      visibleVariantId,
      obscuredVariantId,
      animateOnce,
      threshold,
      variantAppearEffectEnabled,
      targets,
      exitTarget
    } = options;
    const [activeVariant, setVariant] = React79.useState(
      obscuredVariantId || ((_a = props.variant) != null ? _a : void 0)
    );
    const animateState = React79.useRef(false);
    const appearEffectOptions = {
      animateOnce,
      threshold: {
        y: threshold
      }
    };
    useAppearEffect(ref, appearEffectOptions, (appears) => {
      if (options.targets)
        return;
      if (animateOnce && animateState.current === true)
        return;
      if (animateState.current === appears)
        return;
      animateState.current = appears;
      if (appears) {
        setVariant(visibleVariantId);
      } else {
        setVariant(obscuredVariantId);
      }
    });
    React79.useEffect(() => {
      if (!targets)
        return;
      const playedState = {};
      let currentVariant = props.variant;
      return scroll(({ y: scrollY }) => {
        var _a2, _b;
        const { inputRange, outputRange } = createInputOutputRanges2(
          targets,
          (threshold != null ? threshold : 0) * scrollY.containerLength,
          exitTarget
        );
        if (inputRange.length === 0)
          return;
        assert(
          inputRange.length === outputRange.length,
          `Variant ranges must have the same number of entries. Input: ${inputRange}, Output: ${outputRange}`
        );
        const index = Math.floor(transform(scrollY.current, inputRange, outputRange));
        if (animateOnce && playedState[index])
          return;
        playedState[index] = true;
        const variant = (_b = (_a2 = targets[index]) == null ? void 0 : _a2.target) != null ? _b : props.variant;
        if (variant === currentVariant)
          return;
        currentVariant = variant;
        setVariant(variant);
      });
    }, [animateOnce, threshold, targets, props.variant]);
    if (!("variantAppearEffectEnabled" in options) || variantAppearEffectEnabled === true) {
      return /* @__PURE__ */ React79.createElement(Component15, { ...rest, variant: activeVariant, ref });
    } else {
      return /* @__PURE__ */ React79.createElement(Component15, { ...rest });
    }
  }
);

// ../../library/src/render/assetResolver/serverURL.ts
function parseURL(url, base) {
  try {
    return typeof base === "undefined" ? new URL(url) : new URL(url, base);
  } catch (err) {
    return null;
  }
}
function joinPaths(paths) {
  let res = "";
  for (const path of paths) {
    if (!path)
      continue;
    if (res.length > 0 && !res.endsWith("/")) {
      res += "/";
    }
    if (Array.isArray(path)) {
      res += joinPaths(path);
    } else {
      res += encodeURIComponent(path).replace(/%2F/g, "/");
    }
  }
  return res;
}
function serverURL(...paths) {
  const notEmptyPaths = paths.flat().filter(Boolean);
  if (notEmptyPaths.length === 1 && notEmptyPaths[0] && parseURL(notEmptyPaths[0])) {
    return notEmptyPaths[0];
  }
  const path = joinPaths(paths);
  const resolvedAsset = runtime.assetResolver(path, {
    isFramerResourceURL: true,
    isExport: RenderTarget.current() === "EXPORT" /* export */
  });
  return resolvedAsset || "";
}

// ../../library/src/render/componentLoader/definition.ts
function isDesignDefinition(d) {
  return d.type === "master";
}
function isOverride(d) {
  return d.type === "override";
}
function isReactDefinition(d) {
  return d.type !== "master";
}

// ../../library/src/render/componentLoader/package.ts
var localPackageFallbackIdentifier = "|local|";

// ../../library/src/render/DesignComponentWrapper.tsx
import React90, { Component as Component14 } from "react";

// ../../library/src/render/presentation/DeprecatedComponentContainer.tsx
var import_process6 = __toESM(require_browser(), 1);
import React80 from "react";
var DeprecatedComponentContainer = /* @__PURE__ */ (() => {
  var _a;
  return _a = class extends Layer {
    constructor() {
      super(...arguments);
      this.state = {};
      this.setElement = (element) => {
        if (this.props.innerRef) {
          this.props.innerRef.current = element;
        }
        this.setLayerElement(element);
      };
    }
    componentDidCatch(error, info) {
      let stack = info.componentStack.split("\n").filter((line) => line.length !== 0);
      let currentIndex = 0;
      for (const line of stack) {
        if (line.startsWith(`    in ${this.constructor.name}`)) {
          break;
        }
        currentIndex++;
      }
      stack = stack.slice(0, currentIndex);
      this.setState({
        lastError: {
          children: this.props.children,
          name: error.name,
          message: error.message,
          componentStack: stack
        }
      });
    }
    renderErrorPlaceholder(file, error) {
      const { RenderPlaceholder } = runtime;
      return /* @__PURE__ */ React80.createElement(FrameWithMotion, { ...this.props, background: null }, /* @__PURE__ */ React80.createElement(RenderPlaceholder, { error: { error, file } }));
    }
    render() {
      var _a2, _b;
      if (import_process6.default.env.NODE_ENV !== "production" && safeWindow["perf"])
        safeWindow["perf"].nodeRender();
      let { children } = this.props;
      const { componentIdentifier } = this.props;
      const { lastError: error } = this.state;
      const noChildren = !children || Array.isArray(children) && children.filter((c) => c).length === 0;
      if (noChildren) {
        const errorComponent = runtime.componentLoader.errorForIdentifier(componentIdentifier);
        if (errorComponent) {
          return this.renderErrorPlaceholder(errorComponent.file, errorComponent.error);
        }
      }
      if (error && error.children === children) {
        const component = runtime.componentLoader.componentForIdentifier(componentIdentifier);
        const file = component ? component.file : "???";
        return this.renderErrorPlaceholder(file, error.message);
      }
      (_b = (_a2 = safeWindow)["__checkComponentBudget__"]) == null ? void 0 : _b.call(_a2);
      let frameProps = this.props;
      if (RenderTarget.current() !== "CANVAS" /* canvas */) {
        const {
          left,
          right,
          top,
          bottom,
          center,
          centerX,
          centerY,
          aspectRatio,
          parentSize,
          width,
          height,
          rotation,
          opacity,
          visible,
          _constraints,
          _initialStyle,
          name,
          positionSticky,
          positionStickyTop,
          positionStickyRight,
          positionStickyBottom,
          positionStickyLeft,
          // Remove the children and the componentIdentifier from the props passed into the component
          componentIdentifier: originalComponentIdentifier,
          children: originalChildren,
          style,
          duplicatedFrom,
          widthType,
          heightType,
          ...childProps
        } = frameProps;
        children = React80.Children.map(originalChildren, (child) => {
          if (!isReactChild(child) || !isReactElement(child)) {
            return child;
          }
          if (!isPageOrScroll(originalComponentIdentifier)) {
            return /* @__PURE__ */ React80.createElement(LayoutGroup, { inherit: false, id: this.props.__layoutId }, /* @__PURE__ */ React80.createElement(AutomaticLayoutIds, { enabled: false }, React80.cloneElement(child, childProps)));
          }
          return React80.cloneElement(child, childProps);
        });
        frameProps = {
          style,
          _constraints,
          _initialStyle,
          left,
          right,
          top,
          bottom,
          center,
          centerX,
          centerY,
          aspectRatio,
          parentSize,
          width,
          height,
          rotation,
          visible,
          name,
          duplicatedFrom,
          id: frameProps.id,
          layoutId: this.props.__layoutId,
          widthType,
          heightType,
          positionSticky,
          positionStickyTop,
          positionStickyRight,
          positionStickyBottom,
          positionStickyLeft
        };
      }
      return (
        /* The background should come before the frameProps. It looks like there never should be a background in frameProps,
         * but published design components can contain an old version of the presentation tree that expects the background
         * that is passed to be rendered here
         * See the stackBackgroundTest.tsx integration test for an example of such a case
         */
        /* @__PURE__ */ React80.createElement(ComponentContainerContext.Provider, { value: true }, /* @__PURE__ */ React80.createElement(
          FrameWithMotion,
          {
            "data-framer-component-container": true,
            background: null,
            overflow: "visible",
            ref: this.setElement,
            ...frameProps
          },
          children
        ))
      );
    }
  }, _a.supportsConstraints = true, _a.defaultComponentContainerProps = {
    style: {},
    visible: true,
    componentIdentifier: ""
  }, _a.defaultProps = {
    ...Layer.defaultProps,
    ..._a.defaultComponentContainerProps
  }, _a.contextType = ComponentContainerContext, _a;
})();
function isPageOrScroll(identifier) {
  if (!identifier)
    return false;
  if (identifier === "framer/Page")
    return true;
  if (identifier === "framer/Scroll")
    return true;
  return false;
}

// ../../library/src/render/presentation/SVG.tsx
var import_process7 = __toESM(require_browser(), 1);
import React83 from "react";

// ../../library/src/render/utils/elementPropertiesForGradient.ts
function elementPropertiesForLinearGradient(gradient, id) {
  return {
    id: `id${id}g${LinearGradient.hash(gradient)}`,
    angle: gradient.angle - 90,
    stops: gradientColorStops(gradient).map((stop) => ({
      color: stop.value,
      alpha: ConvertColor.getAlpha(stop.value) * gradient.alpha,
      position: stop.position
    }))
  };
}
function elementPropertiesForRadialGradient(gradient, id) {
  return {
    id: `id${id}g${RadialGradient.hash(gradient)}`,
    widthFactor: gradient.widthFactor,
    heightFactor: gradient.heightFactor,
    centerAnchorX: gradient.centerAnchorX,
    centerAnchorY: gradient.centerAnchorY,
    stops: gradientColorStops(gradient).map((stop) => ({
      color: stop.value,
      alpha: ConvertColor.getAlpha(stop.value) * gradient.alpha,
      position: stop.position
    }))
  };
}

// ../../library/src/render/utils/imagePatternPropsForFill.tsx
function imagePatternPropsForFill(fill, frame2, id) {
  var _a;
  fill = Animatable.get(fill, "#09F");
  if (!BackgroundImage.isImageObject(fill))
    return void 0;
  if (!fill.pixelWidth || !fill.pixelHeight)
    return void 0;
  const imageWidth = fill.pixelWidth;
  const imageHeight = fill.pixelHeight;
  let transform2;
  const { fit } = fill;
  if (fit === "fill" || fit === "fit" || !fit) {
    let scaleX = 1;
    let scaleY = 1;
    let offsetX = 0;
    let offsetY = 0;
    const imageRatio = imageWidth / imageHeight;
    const realWidth = frame2.height * imageRatio;
    const realHeight = frame2.width / imageRatio;
    const validScaleX = realWidth / frame2.width;
    const validScaleY = realHeight / frame2.height;
    if (fit === "fill" || !fit ? validScaleY > validScaleX : validScaleY < validScaleX) {
      scaleY = validScaleY;
      offsetY = (1 - validScaleY) / 2;
    } else {
      scaleX = validScaleX;
      offsetX = (1 - validScaleX) / 2;
    }
    transform2 = `translate(${offsetX}, ${offsetY}) scale(${scaleX}, ${scaleY})`;
  }
  const imageId = `id${id}g${"-fillImage"}`;
  return { id: imageId, path: (_a = fill.src) != null ? _a : "", transform: transform2 };
}

// ../../library/src/render/WindowContext.ts
import React81 from "react";
var WindowContext = /* @__PURE__ */ React81.createContext(
  void 0
);
var useProvidedWindow = () => React81.useContext(WindowContext);

// ../../library/src/render/presentation/ImagePatternElement.tsx
import React82, { Component as Component11 } from "react";

// ../../library/src/render/utils/imageUrlForAsset.ts
var mediaType2 = "framer/asset-reference,";
function isAssetReference(value) {
  return value.startsWith(`data:${mediaType2}`);
}
function imageUrlForAsset(asset, pixelSize) {
  var _a;
  if (/^\w+:/.test(asset) && !isAssetReference(asset))
    return asset;
  if (typeof pixelSize !== "number")
    pixelSize = void 0;
  else if (pixelSize <= 512)
    pixelSize = 512;
  else if (pixelSize <= 1024)
    pixelSize = 1024;
  else if (pixelSize <= 2048)
    pixelSize = 2048;
  else
    pixelSize = 4096;
  const isExport = RenderTarget.current() === "EXPORT" /* export */;
  return (_a = runtime.assetResolver(asset, { pixelSize, isExport })) != null ? _a : "";
}

// ../../library/src/render/presentation/ImagePatternElement.tsx
var ImagePatternElement = class extends Component11 {
  render() {
    const { id, path, transform: transform2 } = this.props;
    const xlinkHref = imageUrlForAsset(path);
    return /* @__PURE__ */ React82.createElement("pattern", { id, width: "100%", height: "100%", patternContentUnits: "objectBoundingBox" }, /* @__PURE__ */ React82.createElement(
      "image",
      {
        key: xlinkHref,
        width: 1,
        height: 1,
        xlinkHref,
        preserveAspectRatio: "none",
        transform: transform2
      }
    ));
  }
};

// ../../library/src/render/presentation/SharedSVGManager.ts
var useDOM = isBrowser2();
var SharedSVGEntry = class {
  constructor(id, svg, innerHTML, viewBox, count = 0) {
    this.id = id;
    this.svg = svg;
    this.innerHTML = innerHTML;
    this.viewBox = viewBox;
    this.count = count;
  }
};
var SharedSVGManager = class {
  constructor() {
    this.entries = /* @__PURE__ */ new Map();
  }
  debugGetEntries() {
    return this.entries;
  }
  /** Request to render a svg, this will ensure there is a global instance and will return a
   * template referencing the image. Must be balanced with `unsubscribe()` calls using the same
   * svg. If called multiple times while the shared SVG exists, the generateUniqueIds and
   * contentId parameters are ignored. */
  subscribe(svg, generateUniqueIds, contentId) {
    if (!svg || svg === "")
      return "";
    let entry = this.entries.get(svg);
    if (!entry) {
      if (!contentId) {
        contentId = "svg" + String(hash(svg)) + "_" + String(svg.length);
      }
      let uniqueSVG = svg;
      let svgSize;
      const svgDom = parseSVG(svg);
      if (svgDom) {
        if (generateUniqueIds) {
          prefixIdsInSVG(svgDom, contentId);
        }
        svgDom.id = contentId;
        svgSize = getSVGSize(svgDom);
        uniqueSVG = svgDom.outerHTML;
      }
      entry = this.createDOMElementFor(uniqueSVG, contentId, svgSize);
      this.entries.set(svg, entry);
    }
    entry.count += 1;
    return entry.innerHTML;
  }
  /** Returns the viewBox for the svg, or undefined if there is no viewBox. */
  getViewBox(svg) {
    if (!svg || svg === "")
      return;
    const entry = this.entries.get(svg);
    return entry == null ? void 0 : entry.viewBox;
  }
  /** When no longer rendering an svg it must be unsubscribed from so resources can be cleaned up.
   * Pass in the same svg as used with `subscribe()`. */
  unsubscribe(svg) {
    if (!svg || svg === "")
      return;
    const entry = this.entries.get(svg);
    if (!entry)
      return;
    entry.count -= 1;
    if (entry.count > 0)
      return;
    setTimeout(() => this.maybeRemoveEntry(svg), 5e3);
  }
  maybeRemoveEntry(svg) {
    const entry = this.entries.get(svg);
    if (!entry)
      return;
    if (entry.count > 0)
      return;
    this.entries.delete(svg);
    this.removeDOMElement(entry);
  }
  removeDOMElement(entry) {
    const containerId = "container_" + entry.id;
    if (useDOM) {
      const container = document == null ? void 0 : document.querySelector("#" + containerId);
      container == null ? void 0 : container.remove();
    }
  }
  createDOMElementFor(svg, id, size2) {
    const containerId = "container_" + id;
    if (useDOM) {
      let svgTemplates = document.querySelector("#svg-templates");
      if (!svgTemplates) {
        svgTemplates = document.createElement("div");
        svgTemplates.id = "svg-templates";
        svgTemplates.style.position = "absolute";
        svgTemplates.style.top = "0";
        svgTemplates.style.left = "0";
        svgTemplates.style.width = "0";
        svgTemplates.style.height = "0";
        svgTemplates.style.overflow = "hidden";
        document.body.appendChild(svgTemplates);
      }
      if (!document.querySelector("#" + containerId)) {
        const container = document.createElement("div");
        container.id = containerId;
        container.innerHTML = svg;
        if (container.firstElementChild) {
          container.firstElementChild.id = id;
        }
        svgTemplates.appendChild(container);
      }
    }
    const box = size2 ? `0 0 ${size2.width} ${size2.height}` : void 0;
    const viewBox = box ? ` viewBox="${box}"` : "";
    const innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 100%; height: 100%"${viewBox}><use href="#${id}"></use></svg>`;
    return new SharedSVGEntry(id, svg, innerHTML, box);
  }
  clear() {
    this.entries.clear();
  }
  /** Returns a string containing a div#svg-templates and all the current svg templates. Can be
   * used after running `ReactDOMServer.renderToString()` */
  generateTemplates() {
    const output = [];
    const style = "position: absolute; overflow: hidden; top: 0; left: 0; width: 0; height: 0";
    output.push(`<div id="svg-templates" style="${style}">`);
    for (const value of this.entries.values()) {
      const containerId = "container_" + value.id;
      output.push(`  <div id="${containerId}">`);
      output.push(`    ${value.svg}`);
      output.push("  </div>");
    }
    output.push("</div>");
    return output.join("\n");
  }
};
var sharedSVGManager = /* @__PURE__ */ new SharedSVGManager();
function parseSVG(svg) {
  if (typeof DOMParser === "undefined") {
    console.warn("unable to find DOMParser");
    return;
  }
  try {
    const domParser = new DOMParser();
    const doc = domParser.parseFromString(svg, "text/html");
    const node = doc.getElementsByTagName("svg")[0];
    if (!node)
      throw Error("no svg element found");
    return node;
  } catch {
    return;
  }
}
function prefixIdsInSVG(svg, prefix2) {
  const sanitizedPrefix = sanitizeString(prefix2);
  recursivelyPrefixId(svg, sanitizedPrefix);
}
function sanitizeString(str) {
  return str.replace(/[^a-z0-9\-_:.]|^[^a-z]+/gi, "");
}
function recursivelyPrefixId(el, prefix2) {
  prefixId(el, prefix2);
  const childNodes = Array.from(el.children);
  childNodes.forEach((node) => {
    recursivelyPrefixId(node, prefix2);
  });
}
function prefixId(el, prefix2) {
  const attributes = el.getAttributeNames();
  attributes.forEach((attr) => {
    const value = el.getAttribute(attr);
    if (!value)
      return;
    if (attr === "id") {
      el.setAttribute(attr, `${prefix2}_${value}`);
    }
    if (attr === "href" || attr === "xlink:href") {
      const [base, fragmentIdentifier] = value.split("#");
      if (base)
        return;
      el.setAttribute(attr, `#${prefix2}_${fragmentIdentifier}`);
      return;
    }
    const URL_REF = "url(#";
    if (value.includes(URL_REF)) {
      const prefixedValue = value.replace(URL_REF, `${URL_REF}${prefix2}_`);
      el.setAttribute(attr, prefixedValue);
    }
  });
}
var unitsToPixels = {
  cm: 96 / 2.54,
  mm: 96 / 2.54 / 10,
  Q: 96 / 2.54 / 40,
  in: 96,
  pc: 96 / 6,
  pt: 96 / 72,
  px: 1,
  // A few assumptions about relative units.
  em: 16,
  ex: 8,
  ch: 8,
  rem: 16
};
function parseLength(value) {
  var _a;
  if (!value)
    return;
  const m2 = /(-?[0-9.]+)([a-z%]*)/.exec(value);
  if ((m2 == null ? void 0 : m2[1]) === void 0 || (m2 == null ? void 0 : m2[2]) === void 0)
    return;
  if ((_a = m2[2]) == null ? void 0 : _a.startsWith("%"))
    return;
  return Math.round(parseFloat(m2[1]) * (unitsToPixels[m2[2]] || 1));
}
function getSVGSize(svg) {
  const width = parseLength(svg.getAttribute("width"));
  const height = parseLength(svg.getAttribute("height"));
  if (typeof width !== "number" || typeof height !== "number")
    return;
  if (width <= 0 || height <= 0)
    return;
  return { width, height };
}

// ../../library/src/render/presentation/SVG.tsx
function SVG(props) {
  const parentSize = useParentSize();
  const ariaId = "svg" + React83.useId();
  const layoutId = useLayoutId(props);
  const layoutRef = React83.useRef(null);
  const providedWindow = useProvidedWindow();
  useMeasureLayout(props, layoutRef);
  return /* @__PURE__ */ React83.createElement(
    SVGComponent,
    {
      ...props,
      innerRef: layoutRef,
      parentSize,
      ariaId,
      layoutId,
      providedWindow
    }
  );
}
var MAX_BACKGROUND_SVG_TEXT_LENGTH = 5e4;
function containsImageReference(svg) {
  return svg.indexOf("image") >= 0;
}
function hasBorderRadius(style) {
  return !!(style.borderRadius || style.borderBottomLeftRadius || style.borderBottomRightRadius || style.borderTopLeftRadius || style.borderTopRightRadius);
}
function sizeSVG(container, props) {
  var _a, _b, _c;
  const div = container.current;
  if (!div)
    return;
  const localWindow = (_a = props.providedWindow) != null ? _a : safeWindow;
  const svg = div.firstElementChild;
  if (!svg || !(svg instanceof localWindow.SVGSVGElement))
    return;
  if (!svg.getAttribute("viewBox")) {
    const viewBox = sharedSVGManager.getViewBox(props.svg);
    if (viewBox) {
      svg.setAttribute("viewBox", viewBox);
    }
  }
  const { withExternalLayout, parentSize } = props;
  const canUseCalculatedOnCanvasSize = !withExternalLayout && constraintsEnabled(props) && parentSize !== 1 /* Disabled */ && parentSize !== 2 /* DisabledForCurrentLevel */;
  if (canUseCalculatedOnCanvasSize)
    return;
  const { intrinsicWidth, intrinsicHeight, _constraints } = props;
  if (((_b = svg.viewBox.baseVal) == null ? void 0 : _b.width) === 0 && ((_c = svg.viewBox.baseVal) == null ? void 0 : _c.height) === 0 && isFiniteNumber(intrinsicWidth) && isFiniteNumber(intrinsicHeight)) {
    svg.setAttribute("viewBox", `0 0 ${intrinsicWidth} ${intrinsicHeight}`);
  }
  if (_constraints && _constraints.aspectRatio) {
    svg.setAttribute("preserveAspectRatio", "");
  } else {
    svg.setAttribute("preserveAspectRatio", "none");
  }
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
}
var SVGComponent = /* @__PURE__ */ (() => {
  var _a;
  return _a = class extends Layer {
    constructor() {
      super(...arguments);
      this.container = React83.createRef();
      this.svgElement = null;
      this.setSVGElement = (element) => {
        this.svgElement = element;
        this.setLayerElement(element);
      };
      this.previouslyRenderedSVG = "";
    }
    static frame(props) {
      return calculateRect(props, props.parentSize || 0 /* Unknown */);
    }
    get frame() {
      return calculateRect(this.props, this.props.parentSize || 0 /* Unknown */);
    }
    componentDidMount() {
      if (this.props.svgContentId)
        return;
      sizeSVG(this.container, this.props);
    }
    componentWillUnmount() {
      sharedSVGManager.unsubscribe(this.previouslyRenderedSVG);
      this.previouslyRenderedSVG = "";
    }
    componentDidUpdate(prevProps) {
      super.componentDidUpdate(prevProps);
      if (this.props.svgContentId)
        return;
      const { fill } = this.props;
      if (BackgroundImage.isImageObject(fill) && BackgroundImage.isImageObject(prevProps.fill) && fill.src !== prevProps.fill.src) {
        resetSetStyle(this.svgElement, "fill", null, false);
      }
      sizeSVG(this.container, this.props);
    }
    collectLayout(style, innerStyle) {
      if (this.props.withExternalLayout) {
        innerStyle.width = "100%";
        innerStyle.height = "100%";
        innerStyle.aspectRatio = "inherit";
        return;
      }
      const frame2 = this.frame;
      const { rotation, intrinsicWidth, intrinsicHeight, width, height } = this.props;
      const rotate = Animatable.getNumber(rotation);
      style.opacity = isFiniteNumber(this.props.opacity) ? this.props.opacity : 1;
      if (RenderTarget.hasRestrictions() && frame2) {
        Object.assign(style, {
          transform: `translate(${frame2.x}px, ${frame2.y}px) rotate(${rotate.toFixed(4)}deg)`,
          width: `${frame2.width}px`,
          height: `${frame2.height}px`
        });
        if (constraintsEnabled(this.props)) {
          style.position = "absolute";
        }
        const xFactor = frame2.width / (intrinsicWidth || 1);
        const yFactor = frame2.height / (intrinsicHeight || 1);
        innerStyle.transformOrigin = "top left";
        const { zoom, target } = RenderEnvironment;
        if (target === "EXPORT" /* export */) {
          const zoomFactor = zoom > 1 ? zoom : 1;
          innerStyle.transform = `scale(${xFactor * zoomFactor}, ${yFactor * zoomFactor})`;
          innerStyle.zoom = 1 / zoomFactor;
        } else {
          innerStyle.transform = `scale(${xFactor}, ${yFactor})`;
        }
        if (intrinsicWidth && intrinsicHeight) {
          innerStyle.width = intrinsicWidth;
          innerStyle.height = intrinsicHeight;
        }
      } else {
        const { left, right, top, bottom } = this.props;
        Object.assign(style, {
          left,
          right,
          top,
          bottom,
          width,
          height,
          rotate
        });
        Object.assign(innerStyle, {
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
          position: "absolute"
        });
      }
    }
    render() {
      var _a2, _b;
      if (import_process7.default.env.NODE_ENV !== "production" && safeWindow["perf"])
        safeWindow["perf"].nodeRender();
      const {
        id,
        visible,
        style,
        fill,
        svg,
        intrinsicHeight,
        intrinsicWidth,
        ariaId = "",
        title,
        description,
        layoutId,
        className,
        variants,
        transition,
        withExternalLayout,
        innerRef,
        svgContentId
      } = this.props;
      if (!withExternalLayout && (!visible || !id))
        return null;
      const identifier = (_a2 = id != null ? id : layoutId) != null ? _a2 : "svg";
      injectComponentCSSRules();
      const frame2 = this.frame;
      const size2 = frame2 || { width: intrinsicWidth || 100, height: intrinsicHeight || 100 };
      const outerStyle = { ...style, imageRendering: "pixelated", flexShrink: 0 };
      const innerStyle = {};
      this.collectLayout(outerStyle, innerStyle);
      collectOpacityFromProps(this.props, outerStyle);
      collectFiltersFromProps(this.props, outerStyle);
      Layer.applyWillChange(this.props, outerStyle, false);
      let fillElement = null;
      if (typeof fill === "string" || Color.isColorObject(fill)) {
        const fillColor = Color.isColorObject(fill) ? fill.initialValue || Color.toRgbString(fill) : fill;
        outerStyle.fill = fillColor;
        outerStyle.color = fillColor;
      } else if (LinearGradient.isLinearGradient(fill)) {
        const gradient = fill;
        const gradientId = `${encodeURI(id || "")}g${LinearGradient.hash(gradient)}`;
        outerStyle.fill = `url(#${gradientId})`;
        const elementProperties = elementPropertiesForLinearGradient(gradient, identifier);
        fillElement = /* @__PURE__ */ React83.createElement(
          "svg",
          {
            ref: this.setSVGElement,
            xmlns: "http://www.w3.org/2000/svg",
            width: "100%",
            height: "100%",
            style: { position: "absolute" }
          },
          /* @__PURE__ */ React83.createElement(
            "linearGradient",
            {
              id: gradientId,
              gradientTransform: `rotate(${elementProperties.angle}, 0.5, 0.5)`
            },
            elementProperties.stops.map((stop, idx) => {
              return /* @__PURE__ */ React83.createElement(
                "stop",
                {
                  key: idx,
                  offset: stop.position,
                  stopColor: stop.color,
                  stopOpacity: stop.alpha
                }
              );
            })
          )
        );
      } else if (RadialGradient.isRadialGradient(fill)) {
        const gradient = fill;
        const gradientId = `${encodeURI(id || "")}g${RadialGradient.hash(gradient)}`;
        outerStyle.fill = `url(#${gradientId})`;
        const elementProperties = elementPropertiesForRadialGradient(gradient, identifier);
        fillElement = /* @__PURE__ */ React83.createElement(
          "svg",
          {
            ref: this.setSVGElement,
            xmlns: "http://www.w3.org/2000/svg",
            width: "100%",
            height: "100%",
            style: { position: "absolute" }
          },
          /* @__PURE__ */ React83.createElement(
            "radialGradient",
            {
              id: gradientId,
              cy: gradient.centerAnchorY,
              cx: gradient.centerAnchorX,
              r: gradient.widthFactor
            },
            elementProperties.stops.map((stop, idx) => {
              return /* @__PURE__ */ React83.createElement(
                "stop",
                {
                  key: idx,
                  offset: stop.position,
                  stopColor: stop.color,
                  stopOpacity: stop.alpha
                }
              );
            })
          )
        );
      } else if (BackgroundImage.isImageObject(fill)) {
        const imagePattern = imagePatternPropsForFill(fill, size2, identifier);
        if (imagePattern) {
          outerStyle.fill = `url(#${imagePattern.id})`;
          fillElement = /* @__PURE__ */ React83.createElement(
            "svg",
            {
              ref: this.setSVGElement,
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              width: "100%",
              height: "100%",
              style: { position: "absolute" }
            },
            /* @__PURE__ */ React83.createElement("defs", null, /* @__PURE__ */ React83.createElement(ImagePatternElement, { ...imagePattern }))
          );
        }
      }
      const dataProps = {
        "data-framer-component-type": "SVG"
      };
      const hasTransformTemplate = !frame2;
      if (hasTransformTemplate) {
        Object.assign(dataProps, layoutHintDataPropsForCenter(this.props.center));
      }
      const svgAsBackgroundImage = !fillElement && !outerStyle.fill && !outerStyle.background && !outerStyle.backgroundImage && svg.length < MAX_BACKGROUND_SVG_TEXT_LENGTH && !containsImageReference(svg);
      let content = null;
      if (svgAsBackgroundImage) {
        outerStyle.backgroundSize = "100% 100%";
        outerStyle.backgroundImage = `url('data:image/svg+xml;utf8,${encodeURIComponent(svg)}')`;
        sharedSVGManager.unsubscribe(this.previouslyRenderedSVG);
        this.previouslyRenderedSVG = "";
      } else {
        const contentid = svgContentId ? "svg" + svgContentId : null;
        const __html = sharedSVGManager.subscribe(svg, !svgContentId, contentid);
        sharedSVGManager.unsubscribe(this.previouslyRenderedSVG);
        this.previouslyRenderedSVG = svg;
        if (hasBorderRadius(outerStyle)) {
          outerStyle.overflow = "hidden";
        }
        content = /* @__PURE__ */ React83.createElement(React83.Fragment, null, fillElement, /* @__PURE__ */ React83.createElement(
          "div",
          {
            key: BackgroundImage.isImageObject(fill) ? fill.src : "",
            className: "svgContainer",
            style: innerStyle,
            ref: this.container,
            dangerouslySetInnerHTML: { __html }
          }
        ));
      }
      const MotionComponent = motion[(_b = this.props.as) != null ? _b : "div"];
      const { href, target, rel, onClick } = this.props;
      const ariaDescriptionId = ariaId + "desc";
      return /* @__PURE__ */ React83.createElement(
        MotionComponent,
        {
          ...dataProps,
          layoutId,
          transformTemplate: hasTransformTemplate ? transformTemplate(this.props.center) : void 0,
          id,
          ref: innerRef,
          style: outerStyle,
          className,
          variants,
          transition,
          tabIndex: this.props.tabIndex,
          role: title || description ? "img" : void 0,
          "aria-label": title,
          "aria-describedby": description ? ariaDescriptionId : void 0,
          ...{ href, target, rel, onClick }
        },
        content,
        description && /* @__PURE__ */ React83.createElement("div", { style: VISUALLY_HIDDEN_STYLES, id: ariaDescriptionId }, description)
      );
    }
  }, _a.supportsConstraints = true, _a.defaultSVGProps = {
    left: void 0,
    right: void 0,
    top: void 0,
    bottom: void 0,
    style: void 0,
    _constraints: {
      enabled: true,
      aspectRatio: null
    },
    parentSize: 0 /* Unknown */,
    rotation: 0,
    visible: true,
    svg: "",
    shadows: []
  }, _a.defaultProps = {
    ...Layer.defaultProps,
    ..._a.defaultSVGProps
  }, _a;
})();
var VISUALLY_HIDDEN_STYLES = {
  clip: "rect(1px, 1px, 1px, 1px)",
  clipPath: "inset(50%)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute"
};

// ../../library/src/render/presentation/Text.tsx
var import_process9 = __toESM(require_browser(), 1);
import React85, { useEffect as useEffect10, useRef as useRef12 } from "react";

// ../../library/src/modules/replaceFramerPageLinks.ts
var htmlRegExp = /[&<>'"]/g;
var escapeHTML = (str) => str.replace(
  htmlRegExp,
  (tag) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  })[tag] || tag
);
var regex = /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi;
function replaceFramerPageLinks(rawHTML, getRoute, currentRoute, implicitPathVariables) {
  return rawHTML.replace(
    regex,
    (original, pre1, tag, pre2, value1, value2, post) => {
      var _a, _b, _c;
      if (tag.toLowerCase() !== "a")
        return original;
      const href = value1 || value2;
      const pageLink = parseFramerPageLink(href.replace(/&amp;/g, "&"));
      if (!pageLink || !pageLink.target)
        return original;
      const targetRoute = getRoute(pageLink.target);
      if (!isRoute(targetRoute) || !isRoute(currentRoute))
        return original;
      const targetPath = targetRoute.path;
      const currentPath = currentRoute.path;
      if (!targetPath || !currentPath)
        return original;
      let attributes = ` ${"data-framer-page-link-target" /* Page */}="${pageLink.target}"`;
      const elementId = getRouteElementId(targetRoute, (_a = pageLink.element) != null ? _a : void 0);
      if (elementId) {
        attributes += ` ${"data-framer-page-link-element" /* Element */}="${pageLink.element}"`;
      }
      const link = linkFromFramerPageLink(href);
      if (!link || isString2(link))
        return original;
      if (linkMatchesRoute(currentRoute, link, implicitPathVariables)) {
        attributes += ` ${"data-framer-page-link-current" /* Current */}`;
      }
      let relativePath = targetPath;
      const pathVariables = Object.assign({}, implicitPathVariables, (_b = pageLink.collectionItem) == null ? void 0 : _b.pathVariables);
      if (Object.keys(pathVariables).length > 0) {
        relativePath = relativePath.replace(pathVariablesRegExp2, (_, key7) => "" + pathVariables[key7]);
      }
      if ((_c = pageLink.collectionItem) == null ? void 0 : _c.pathVariables) {
        const params = new URLSearchParams(pageLink.collectionItem.pathVariables);
        attributes += ` ${"data-framer-page-link-path-variables" /* PathVariables */}="${params}"`;
      }
      relativePath = computeRelativePath(currentPath, relativePath);
      return pre1 + pre2 + `"${escapeHTML(relativePath + (elementId ? `#${elementId}` : ""))}"` + attributes + post;
    }
  );
}

// ../../library/src/render/fonts/fontStore.ts
var import_process8 = __toESM(require_browser(), 1);

// ../../library/src/render/fonts/types.ts
var TypefaceSourceNames = /* @__PURE__ */ ((TypefaceSourceNames2) => {
  TypefaceSourceNames2["Google"] = "google";
  TypefaceSourceNames2["Local"] = "local";
  TypefaceSourceNames2["Custom"] = "custom";
  return TypefaceSourceNames2;
})(TypefaceSourceNames || {});
var knownGoogleFontCategories = ["sans-serif", "serif", "monospace", "display", "handwriting"];

// ../../library/src/render/fonts/CustomFontSource.ts
var customFontSelectorPrefix = "CUSTOM;";
function getCustomFontName(fileName, properties) {
  if (!properties)
    return fileName.substring(0, fileName.lastIndexOf("."));
  const fontFamily = properties.font.preferredFamily === "" ? properties.font.fontFamily : properties.font.preferredFamily;
  const variant = properties.font.preferredSubFamily === "" ? properties.font.fontSubFamily : properties.font.preferredSubFamily;
  return `${fontFamily} ${variant}`;
}
var CustomFontSource = class {
  constructor() {
    this.name = "custom" /* Custom */;
    this.typefaces = [];
    this.byFamily = /* @__PURE__ */ new Map();
    this.assetsByFamily = /* @__PURE__ */ new Map();
  }
  importFonts(assets) {
    this.typefaces.length = 0;
    this.byFamily.clear();
    this.assetsByFamily.clear();
    const fonts = [];
    assets.forEach((asset) => {
      var _a;
      if (!this.isValidCustomFontAsset(asset)) {
        return;
      }
      const fontName = getCustomFontName(asset.name, asset.properties);
      const typeface = this.createTypeface(fontName);
      const font = {
        typeface,
        selector: `${customFontSelectorPrefix}${fontName}`,
        variant: this.inferVariantName(fontName),
        postscriptName: (_a = asset.properties) == null ? void 0 : _a.font.postscriptName,
        file: asset.url
      };
      typeface.fonts.push(font);
      typeface.owner = asset.ownerType === "team" ? "team" : "project";
      this.assetsByFamily.set(fontName, asset);
      fonts.push(...typeface.fonts);
    });
    return fonts;
  }
  isValidCustomFontAsset(asset) {
    var _a;
    if (!asset.mimeType.startsWith("font/"))
      return false;
    if (((_a = asset.properties) == null ? void 0 : _a.kind) !== "font")
      return false;
    if (!asset.properties.font)
      return false;
    return "fontFamily" in asset.properties.font;
  }
  inferVariantName(family) {
    const possibleValues = [
      "thin",
      "ultra light",
      "extra light",
      "light",
      "normal",
      "medium",
      "semi bold",
      "bold",
      "extra bold",
      "black"
    ];
    const possibleValuesWithItalics = [...possibleValues.map((value) => `${value} italic`), ...possibleValues];
    const lowerCaseFamily = family.toLowerCase();
    const tokens = [...lowerCaseFamily.split(" "), ...lowerCaseFamily.split("-"), ...lowerCaseFamily.split("_")];
    const foundToken = possibleValuesWithItalics.find(
      (value) => tokens.includes(value) || tokens.includes(value.replace(/\s+/g, ""))
    );
    if (foundToken)
      return foundToken.replace(/(^\w|\s\w)/g, (char) => char.toUpperCase());
    return "Regular";
  }
  createTypeface(family) {
    const existingTypeface = this.byFamily.get(family);
    if (existingTypeface)
      return existingTypeface;
    const typeface = {
      source: this.name,
      family,
      fonts: []
    };
    this.addTypeface(typeface);
    return typeface;
  }
  addTypeface(typeface) {
    this.typefaces.push(typeface);
    this.byFamily.set(typeface.family, typeface);
  }
  parseSelector(selector) {
    if (!selector.startsWith(customFontSelectorPrefix))
      return null;
    const tokens = selector.split(customFontSelectorPrefix);
    if (tokens[1] === void 0)
      return null;
    const locator = { source: "custom", family: tokens[1] };
    return locator;
  }
  getFontBySelector(selector, createFont = true) {
    const locator = this.parseSelector(selector);
    if (!locator)
      return;
    if (!createFont && !this.byFamily.get(locator.family))
      return;
    return this.getTypefaceByFamily(locator.family).fonts[0];
  }
  getTypefaceByFamily(family) {
    const foundTypeface = this.byFamily.get(family);
    if (foundTypeface)
      return foundTypeface;
    const typeface = {
      source: "custom",
      family,
      fonts: []
    };
    typeface.fonts.push({
      selector: `${customFontSelectorPrefix}${family}`,
      variant: this.inferVariantName(family),
      typeface
    });
    return typeface;
  }
};

// ../../library/src/render/fonts/utils.ts
function parseVariant(variant) {
  if (variant === "regular")
    return { style: "normal", weight: 400 };
  const res = /([0-9]*)([a-z]*)/.exec(variant);
  if (!res)
    return null;
  const weight = parseInt(res[1] || "400");
  const style = res[2] || "normal";
  return { weight, style };
}

// ../../library/src/render/fonts/GoogleFontSource.ts
var googleFontSelectorPrefix = "GF;";
var GoogleFontSource = class {
  constructor() {
    this.name = "google" /* Google */;
    this.typefaces = [];
    this.byFamily = /* @__PURE__ */ new Map();
  }
  getTypefaceByFamily(family) {
    var _a;
    return (_a = this.byFamily.get(family)) != null ? _a : null;
  }
  parseSelector(selector) {
    if (!selector.startsWith(googleFontSelectorPrefix))
      return null;
    const tokens = selector.split("-");
    if (tokens.length !== 2)
      return null;
    const [family, variant] = tokens;
    if (!family || !variant)
      return null;
    return { family: family.replace(googleFontSelectorPrefix, ""), variant, source: this.name };
  }
  // TODO: these are duplicated across implementations of FontSource
  // When adding a third source, we should abstract them
  createTypeface(family) {
    const typeface = { family, fonts: [], source: this.name };
    this.addTypeface(typeface);
    return typeface;
  }
  addTypeface(typeface) {
    this.typefaces.push(typeface);
    this.byFamily.set(typeface.family, typeface);
  }
  // end of duplication
  importFonts(webFonts) {
    this.typefaces.length = 0;
    this.byFamily.clear();
    const fonts = [];
    webFonts.forEach(
      (webFont) => webFont.variants.forEach((variant) => {
        var _a;
        const family = webFont.family;
        let typeface = this.getTypefaceByFamily(family);
        if (!typeface) {
          typeface = this.createTypeface(family);
        }
        const variantInfo = parseVariant(variant) || {};
        const { weight, style } = variantInfo;
        const selector = `GF;${family}-${variant}`;
        const font = {
          typeface,
          variant,
          selector,
          weight,
          style,
          category: ensureKnownCategory(webFont.category),
          file: (_a = webFont.files[variant]) == null ? void 0 : _a.replace("http://", "https://")
        };
        typeface.fonts.push(font);
        fonts.push(font);
      })
    );
    return fonts;
  }
};
function ensureKnownCategory(category) {
  if (knownGoogleFontCategories.includes(category))
    return category;
  return void 0;
}

// ../../library/src/render/fonts/loadFont.ts
var import_fontfaceobserver = __toESM(require_fontfaceobserver_standalone(), 1);
var FONT_LOADING_TIMEOUT = 5e3;
var MAX_RETRIES = 3;
var FontLoadingError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "FontLoadingError";
  }
};
var fontRequests = /* @__PURE__ */ new Map();
var fontReadyPromises = /* @__PURE__ */ new Map();
var loadFont = (data2, doc) => loadFontWithRetries(data2, doc);
async function loadFontWithRetries(data2, doc, attempt = 0) {
  const { family, url } = data2;
  const weight = data2.weight || 500;
  const style = data2.style || "normal";
  const requestId = `${family}-${style}-${weight}-${url}`;
  if (!fontRequests.has(requestId) || attempt > 0) {
    const fontFace = new FontFace(family, `url(${url})`, {
      weight: weight == null ? void 0 : weight.toString(),
      style
    });
    const readyPromise = fontFace.load().then(() => {
      doc.fonts.add(fontFace);
      return isFontReady(family, style, weight);
    }).catch((e) => {
      if (e.name !== "NetworkError") {
        throw e;
      }
      if (attempt < MAX_RETRIES) {
        return loadFontWithRetries(data2, doc, attempt + 1);
      }
      throw new FontLoadingError(
        `Font loading failed after ${attempt} retries due to network error: ${JSON.stringify({
          family,
          style,
          weight,
          url
        })}`
      );
    });
    fontRequests.set(requestId, readyPromise);
  }
  await fontRequests.get(requestId);
}
async function isFontReady(family, style, weight) {
  const readyPromiseId = `${family}-${style}-${weight}`;
  if (!fontReadyPromises.has(readyPromiseId)) {
    const observer = new import_fontfaceobserver.default(family, {
      style,
      weight
    });
    const readyPromise = observer.load(null, FONT_LOADING_TIMEOUT);
    fontReadyPromises.set(readyPromiseId, readyPromise);
  }
  try {
    await fontReadyPromises.get(readyPromiseId);
  } catch (e) {
    throw new FontLoadingError(
      `Failed to check if font is ready (${FONT_LOADING_TIMEOUT}ms timeout exceeded): ${JSON.stringify({
        family,
        style,
        weight
      })}`
    );
  }
}

// ../../library/src/render/fonts/fonts.ts
var safeFonts = {
  Arial: {
    Regular: { selector: "Arial", weight: void 0 },
    Black: { selector: "Arial-Black", weight: void 0 },
    Narrow: { selector: "Arial Narrow", weight: void 0 },
    "Rounded Bold": { selector: "Arial Rounded MT Bold", weight: void 0 }
  },
  Avenir: {
    Book: { selector: "Avenir", weight: void 0 },
    Light: { selector: "Avenir-Light", weight: void 0 },
    Medium: { selector: "Avenir-Medium", weight: void 0 },
    Heavy: { selector: "Avenir-Heavy", weight: void 0 },
    Black: { selector: "Avenir-Black", weight: void 0 }
  },
  "Avenir Next": {
    Regular: { selector: "Avenir Next", weight: void 0 },
    "Ultra Light": { selector: "AvenirNext-UltraLight", weight: void 0 },
    Medium: { selector: "AvenirNext-Medium", weight: void 0 },
    "Demi Bold": { selector: "AvenirNext-DemiBold", weight: void 0 },
    Heavy: { selector: "AvenirNext-Heavy", weight: void 0 }
  },
  "Avenir Next Condensed": {
    Regular: { selector: "Avenir Next Condensed", weight: void 0 },
    "Ultra Light": { selector: "AvenirNextCondensed-UltraLight", weight: void 0 },
    Medium: { selector: "AvenirNextCondensed-Medium", weight: void 0 },
    "Demi Bold": { selector: "AvenirNextCondensed-DemiBold", weight: void 0 },
    Heavy: { selector: "AvenirNextCondensed-Heavy", weight: void 0 }
  },
  Baskerville: {
    Regular: { selector: "Baskerville", weight: void 0 },
    "Semi Bold": { selector: "Baskerville-SemiBold", weight: void 0 }
  },
  "Bodoni 72": {
    Book: { selector: "Bodoni 72", weight: void 0 },
    Oldstyle: { selector: "Bodoni 72 Oldstyle", weight: void 0 },
    Smallcaps: { selector: "Bodoni 72 Smallcaps", weight: void 0 }
  },
  Courier: { Regular: { selector: "Courier", weight: void 0 } },
  "Courier New": { Regular: { selector: "Courier New", weight: void 0 } },
  Futura: {
    Medium: { selector: "Futura", weight: void 0 },
    Condensed: { selector: "Futura-CondensedMedium", weight: void 0 },
    "Condensed ExtraBold": { selector: "Futura-CondensedExtraBold", weight: void 0 }
  },
  Georgia: { Regular: { selector: "Georgia", weight: void 0 } },
  "Gill Sans": {
    Regular: { selector: "Gill Sans", weight: void 0 },
    Light: { selector: "GillSans-Light", weight: void 0 },
    SemiBold: { selector: "GillSans-SemiBold", weight: void 0 },
    UltraBold: { selector: "GillSans-UltraBold", weight: void 0 }
  },
  Helvetica: {
    Regular: { selector: "Helvetica", weight: void 0 },
    Light: { selector: "Helvetica-Light", weight: void 0 },
    Bold: { selector: "Helvetica-Bold", weight: void 0 },
    Oblique: { selector: "Helvetica-Oblique", weight: void 0 },
    "Light Oblique": { selector: "Helvetica-LightOblique", weight: void 0 },
    "Bold Oblique": { selector: "Helvetica-BoldOblique", weight: void 0 }
  },
  "Helvetica Neue": {
    Regular: { selector: "Helvetica Neue", weight: void 0 },
    UltraLight: { selector: "HelveticaNeue-UltraLight", weight: void 0 },
    Thin: { selector: "HelveticaNeue-Thin", weight: void 0 },
    Light: { selector: "HelveticaNeue-Light", weight: void 0 },
    Medium: { selector: "HelveticaNeue-Medium", weight: void 0 },
    Bold: { selector: "HelveticaNeue-Bold", weight: void 0 },
    Italic: { selector: "HelveticaNeue-Italic", weight: void 0 },
    "UltraLight Italic": { selector: "HelveticaNeue-UltraLightItalic", weight: void 0 },
    "Thin Italic": { selector: "HelveticaNeue-ThinItalic", weight: void 0 },
    "Light Italic": { selector: "HelveticaNeue-LightItalic", weight: void 0 },
    "Medium Italic": { selector: "HelveticaNeue-MediumItalic", weight: void 0 },
    "Bold Italic": { selector: "HelveticaNeue-BoldItalic", weight: void 0 },
    "Condensed Bold": { selector: "HelveticaNeue-CondensedBold", weight: void 0 },
    "Condensed Black": { selector: "HelveticaNeue-CondensedBlack", weight: void 0 }
  },
  "Hoefler Text": { Regular: { selector: "Hoefler Text", weight: void 0 } },
  Impact: { Regular: { selector: "Impact", weight: void 0 } },
  "Lucida Grande": { Regular: { selector: "Lucida Grande", weight: void 0 } },
  Menlo: { Regular: { selector: "Menlo", weight: void 0 } },
  Monaco: { Regular: { selector: "Monaco", weight: void 0 } },
  Optima: {
    Regular: { selector: "Optima", weight: void 0 },
    ExtraBlack: { selector: "Optima-ExtraBlack", weight: void 0 }
  },
  Palatino: { Regular: { selector: "Palatino", weight: void 0 } },
  "SF Pro Display": {
    Regular: { selector: "__SF-UI-Display-Regular__", weight: 400 },
    Ultralight: { selector: "__SF-UI-Display-Ultralight__", weight: 100 },
    Thin: { selector: "__SF-UI-Display-Thin__", weight: 200 },
    Light: { selector: "__SF-UI-Display-Light__", weight: 300 },
    Medium: { selector: "__SF-UI-Display-Medium__", weight: 500 },
    Semibold: { selector: "__SF-UI-Display-Semibold__", weight: 600 },
    Bold: { selector: "__SF-UI-Display-Bold__", weight: 700 },
    Heavy: { selector: "__SF-UI-Display-Heavy__", weight: 800 },
    Black: { selector: "__SF-UI-Display-Black__", weight: 900 },
    Italic: { selector: "__SF-UI-Display-Italic__", weight: 400 },
    "Ultralight Italic": { selector: "__SF-UI-Display-Ultralight-Italic__", weight: 100 },
    "Thin Italic": { selector: "__SF-UI-Display-Thin-Italic__", weight: 200 },
    "Light Italic": { selector: "__SF-UI-Display-Light-Italic__", weight: 300 },
    "Medium Italic": { selector: "__SF-UI-Display-Medium-Italic__", weight: 500 },
    "Semibold Italic": { selector: "__SF-UI-Display-Semibold-Italic__", weight: 600 },
    "Bold Italic": { selector: "__SF-UI-Display-Bold-Italic__", weight: 700 },
    "Heavy Italic": { selector: "__SF-UI-Display-Heavy-Italic__", weight: 800 },
    "Black Italic": { selector: "__SF-UI-Display-Black-Italic__", weight: 900 }
  },
  "SF Pro Display Condensed": {
    Regular: { selector: "__SF-UI-Display-Condensed-Regular__", weight: 400 },
    Ultralight: { selector: "__SF-UI-Display-Condensed-Ultralight__", weight: 100 },
    Thin: { selector: "__SF-UI-Display-Condensed-Thin__", weight: 200 },
    Light: { selector: "__SF-UI-Display-Condensed-Light__", weight: 300 },
    Medium: { selector: "__SF-UI-Display-Condensed-Medium__", weight: 500 },
    Semibold: { selector: "__SF-UI-Display-Condensed-Semibold__", weight: 600 },
    Bold: { selector: "__SF-UI-Display-Condensed-Bold__", weight: 700 },
    Heavy: { selector: "__SF-UI-Display-Condensed-Heavy__", weight: 800 },
    Black: { selector: "__SF-UI-Display-Condensed-Black__", weight: 900 }
  },
  "SF Pro Text": {
    Regular: { selector: "__SF-UI-Text-Regular__", weight: 400 },
    Light: { selector: "__SF-UI-Text-Light__", weight: 200 },
    Medium: { selector: "__SF-UI-Text-Medium__", weight: 500 },
    Semibold: { selector: "__SF-UI-Text-Semibold__", weight: 600 },
    Bold: { selector: "__SF-UI-Text-Bold__", weight: 700 },
    Heavy: { selector: "__SF-UI-Text-Heavy__", weight: 800 },
    Italic: { selector: "__SF-UI-Text-Italic__", weight: 400 },
    "Light Italic": { selector: "__SF-UI-Text-Light-Italic__", weight: 200 },
    "Medium Italic": { selector: "__SF-UI-Text-Medium-Italic__", weight: 500 },
    "Semibold Italic": { selector: "__SF-UI-Text-Semibold-Italic__", weight: 600 },
    "Bold Italic": { selector: "__SF-UI-Text-Bold-Italic__", weight: 700 },
    "Heavy Italic": { selector: "__SF-UI-Text-Heavy-Italic__", weight: 800 }
  },
  "SF Pro Text Condensed": {
    Regular: { selector: "__SF-UI-Text-Condensed-Regular__", weight: 400 },
    Light: { selector: "__SF-UI-Text-Condensed-Light__", weight: 200 },
    Medium: { selector: "__SF-UI-Text-Condensed-Medium__", weight: 500 },
    Semibold: { selector: "__SF-UI-Text-Condensed-Semibold__", weight: 600 },
    Bold: { selector: "__SF-UI-Text-Condensed-Bold__", weight: 700 },
    Heavy: { selector: "__SF-UI-Text-Condensed-Heavy__", weight: 800 }
  },
  Tahoma: { Regular: { selector: "Tahoma", weight: void 0 } },
  Times: { Regular: { selector: "Times", weight: void 0 } },
  "Times New Roman": { Regular: { selector: "Times New Roman", weight: void 0 } },
  Trebuchet: { Regular: { selector: "Trebuchet MS", weight: void 0 } },
  Verdana: { Regular: { selector: "Verdana", weight: void 0 } }
};
var typefaceAliases = {
  "__SF-Compact-Display-Regular__": "SFCompactDisplay-Regular|.SFCompactDisplay-Regular",
  "__SF-Compact-Display-Ultralight__": "SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight",
  "__SF-Compact-Display-Thin__": "SFCompactDisplay-Thin|.SFCompactDisplay-Thin",
  "__SF-Compact-Display-Light__": "SFCompactDisplay-Light|.SFCompactDisplay-Light",
  "__SF-Compact-Display-Medium__": "SFCompactDisplay-Medium|.SFCompactDisplay-Medium",
  "__SF-Compact-Display-Semibold__": "SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold",
  "__SF-Compact-Display-Heavy__": "SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy",
  "__SF-Compact-Display-Black__": "SFCompactDisplay-Black|.SFCompactDisplay-Black",
  "__SF-Compact-Display-Bold__": "SFCompactDisplay-Bold|.SFCompactDisplay-Bold",
  "__SF-UI-Text-Regular__": ".SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText",
  "__SF-UI-Text-Light__": ".SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light",
  "__SF-UI-Text-Medium__": ".SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium",
  "__SF-UI-Text-Semibold__": ".SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold",
  "__SF-UI-Text-Bold__": ".SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold",
  "__SF-UI-Text-Heavy__": ".SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy",
  "__SF-UI-Text-Italic__": ".SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic",
  "__SF-UI-Text-Light-Italic__": ".SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic",
  "__SF-UI-Text-Medium-Italic__": ".SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic",
  "__SF-UI-Text-Semibold-Italic__": ".SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic",
  "__SF-UI-Text-Bold-Italic__": ".SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic",
  "__SF-UI-Text-Heavy-Italic__": ".SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic",
  "__SF-Compact-Text-Regular__": "SFCompactText-Regular|.SFCompactText-Regular",
  "__SF-Compact-Text-Light__": "SFCompactText-Light|.SFCompactText-Light",
  "__SF-Compact-Text-Medium__": "SFCompactText-Medium|.SFCompactText-Medium",
  "__SF-Compact-Text-Semibold__": "SFCompactText-Semibold|.SFCompactText-Semibold",
  "__SF-Compact-Text-Bold__": "SFCompactText-Bold|.SFCompactText-Bold",
  "__SF-Compact-Text-Heavy__": "SFCompactText-Heavy|.SFCompactText-Heavy",
  "__SF-Compact-Text-Italic__": "SFCompactText-Italic|.SFCompactText-Italic",
  "__SF-Compact-Text-Light-Italic__": "SFCompactText-LightItalic|.SFCompactText-LightItalic",
  "__SF-Compact-Text-Medium-Italic__": "SFCompactText-MediumItalic|.SFCompactText-MediumItalic",
  "__SF-Compact-Text-Semibold-Italic__": "SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic",
  "__SF-Compact-Text-Bold-Italic__": "SFCompactText-BoldItalic|.SFCompactText-BoldItalic",
  "__SF-Compact-Text-Heavy-Italic__": "SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic",
  "__SF-UI-Display-Condensed-Regular__": ".SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular",
  "__SF-UI-Display-Condensed-Ultralight__": ".SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight",
  "__SF-UI-Display-Condensed-Thin__": ".SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin",
  "__SF-UI-Display-Condensed-Light__": ".SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light",
  "__SF-UI-Display-Condensed-Medium__": ".SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium",
  "__SF-UI-Display-Condensed-Semibold__": ".SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold",
  "__SF-UI-Display-Condensed-Bold__": ".SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold",
  "__SF-UI-Display-Condensed-Heavy__": ".SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy",
  "__SF-UI-Display-Condensed-Black__": ".SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black",
  "__SF-UI-Display-Regular__": ".SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay",
  "__SF-UI-Display-Ultralight__": ".SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight",
  "__SF-UI-Display-Thin__": ".SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin",
  "__SF-UI-Display-Light__": ".SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light",
  "__SF-UI-Display-Medium__": ".SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium",
  "__SF-UI-Display-Semibold__": ".SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold",
  "__SF-UI-Display-Bold__": ".SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold",
  "__SF-UI-Display-Heavy__": ".SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy",
  "__SF-UI-Display-Black__": ".SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black",
  "__SF-UI-Display-Italic__": ".SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic",
  "__SF-UI-Display-Ultralight-Italic__": ".SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic",
  "__SF-UI-Display-Thin-Italic__": ".SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic",
  "__SF-UI-Display-Light-Italic__": ".SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic",
  "__SF-UI-Display-Medium-Italic__": ".SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic",
  "__SF-UI-Display-Semibold-Italic__": ".SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic",
  "__SF-UI-Display-Bold-Italic__": ".SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic",
  "__SF-UI-Display-Heavy-Italic__": ".SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic",
  "__SF-UI-Display-Black-Italic__": ".SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic",
  "__SF-UI-Text-Condensed-Regular__": ".SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular",
  "__SF-UI-Text-Condensed-Light__": ".SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light",
  "__SF-UI-Text-Condensed-Medium__": ".SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium",
  "__SF-UI-Text-Condensed-Semibold__": ".SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold",
  "__SF-UI-Text-Condensed-Bold__": ".SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold",
  "__SF-UI-Text-Condensed-Heavy__": ".SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy",
  "__SF-Compact-Rounded-Regular__": "SFCompactRounded-Regular|.SFCompactRounded-Regular",
  "__SF-Compact-Rounded-Ultralight__": "SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight",
  "__SF-Compact-Rounded-Thin__": "SFCompactRounded-Thin|.SFCompactRounded-Thin",
  "__SF-Compact-Rounded-Light__": "SFCompactRounded-Light|.SFCompactRounded-Light",
  "__SF-Compact-Rounded-Medium__": "SFCompactRounded-Medium|.SFCompactRounded-Medium",
  "__SF-Compact-Rounded-Semibold__": "SFCompactRounded-Semibold|.SFCompactRounded-Semibold",
  "__SF-Compact-Rounded-Bold__": "SFCompactRounded-Bold|.SFCompactRounded-Bold",
  "__SF-Compact-Rounded-Heavy__": "SFCompactRounded-Heavy|.SFCompactRounded-Heavy",
  "__SF-Compact-Rounded-Black__": "SFCompactRounded-Black|.SFCompactRounded-Black"
};
var typefaces = safeFonts;

// ../../library/src/render/fonts/LocalFontSource.ts
var systemTypefaceName = "System Default";
var LocalFontSource = class {
  constructor() {
    this.name = "local" /* Local */;
    this.typefaces = [];
    this.byFamily = /* @__PURE__ */ new Map();
    this.typefaceAliasBySelector = /* @__PURE__ */ new Map();
    this.typefaceAliases = /* @__PURE__ */ new Map();
    this.interTypefaceSelectors = /* @__PURE__ */ new Set();
  }
  getTypefaceByFamily(family) {
    var _a;
    return (_a = this.byFamily.get(family)) != null ? _a : null;
  }
  // TODO: these are duplicated across implementations of FontSource
  // When adding a third source, we should abstract them
  createTypeface(family) {
    const typeface = { family, fonts: [], source: this.name };
    this.addTypeface(typeface);
    return typeface;
  }
  addTypeface(typeface) {
    this.typefaces.push(typeface);
    this.byFamily.set(typeface.family, typeface);
  }
  // end of duplication
  importFonts() {
    const fonts = [];
    for (const family of Object.keys(typefaces)) {
      const members = typefaces[family];
      if (!members)
        continue;
      const typeface = this.createTypeface(family);
      for (const variant of Object.keys(members)) {
        const member = members[variant];
        if (!member)
          continue;
        const { selector, weight } = member;
        const font = {
          variant,
          selector,
          weight,
          typeface,
          status: "loaded"
        };
        typeface.fonts.push(font);
      }
      fonts.push(...typeface.fonts);
    }
    for (const [key7, value] of Object.entries(typefaceAliases)) {
      this.addTypefaceAlias(key7, value);
    }
    const { typeface: systemTypeface, aliases } = this.getSystemTypeface();
    this.addTypeface(systemTypeface);
    for (const [key7, value] of aliases) {
      this.addTypefaceAlias(key7, value);
    }
    fonts.push(...systemTypeface.fonts);
    const interTypeface = this.importInterTypeface();
    fonts.push(...interTypeface.fonts);
    return fonts;
  }
  importInterTypeface() {
    const inter = [
      ["Regular", "Inter", 400],
      ["Thin", "Inter-Thin", 100],
      ["Extra Light", "Inter-ExtraLight", 200],
      ["Light", "Inter-Light", 300],
      ["Medium", "Inter-Medium", 500],
      ["Semibold", "Inter-SemiBold", 600],
      ["Bold", "Inter-Bold", 700],
      ["Extra Bold", "Inter-ExtraBold", 800],
      ["Black", "Inter-Black", 900],
      ["Thin Italic", "Inter-ThinItalic", 100],
      ["Extra Light Italic", "Inter-ExtraLightItalic", 200],
      ["Light Italic", "Inter-LightItalic", 300],
      ["Italic", "Inter-Italic", 400],
      ["Medium Italic", "Inter-MediumItalic", 500],
      ["Semibold Italic", "Inter-SemiBoldItalic", 600],
      ["Bold Italic", "Inter-BoldItalic", 700],
      ["Extra Bold Italic", "Inter-ExtraBoldItalic", 800],
      ["Black Italic", "Inter-BlackItalic", 900]
    ];
    const typeface = this.createTypeface("Inter");
    for (const entry of inter) {
      const [variant, selector, weight] = entry;
      const font = {
        variant,
        selector,
        weight,
        typeface,
        style: /italic/i.test(selector) ? "italic" : "normal"
      };
      typeface.fonts.push(font);
    }
    typeface.fonts.forEach((t) => this.interTypefaceSelectors.add(t.selector));
    return typeface;
  }
  addTypefaceAlias(key7, value) {
    this.typefaceAliases.set(key7, value);
    this.typefaceAliasBySelector.set(value, key7);
  }
  getSystemTypeface() {
    const fontFamilies = this.workaroundChrome81and82(
      // System fonts - Taken from https://furbo.org/stuff/systemfonts-new.html - "All Platforms" section
      "system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif"
    );
    const typeface = { family: systemTypefaceName, fonts: [], source: this.name };
    const aliases = /* @__PURE__ */ new Map();
    const weights = [400, 100, 200, 300, 500, 600, 700, 800, 900];
    const styles = ["normal", "italic"];
    for (const style of styles) {
      for (const weight of weights) {
        const variant = createVariantName(weight, style);
        const alias = `__SystemDefault-${weight}-${style}__`;
        const font = {
          variant,
          selector: alias,
          style,
          weight,
          typeface,
          status: "loaded"
        };
        typeface.fonts.push(font);
        aliases.set(alias, fontFamilies);
      }
    }
    return { typeface, aliases };
  }
  getTypefaceAliasBySelector(selector) {
    return this.typefaceAliasBySelector.get(selector) || null;
  }
  getTypefaceSelectorByAlias(alias) {
    return this.typefaceAliases.get(alias) || null;
  }
  /** Typeface aliases are in the format of `__Alias-Name__` */
  isTypefaceAlias(value) {
    if (value && value.match(/^__.*__$/))
      return true;
    return false;
  }
  /**
   * Use 'Inter' web font as System Default fonts on Mac with Chrome v81 v82
   * https://github.com/framer/company/issues/17277
   * https://bugs.chromium.org/p/chromium/issues/detail?id=1057654
   */
  workaroundChrome81and82(s) {
    if (safeNavigator) {
      const userAgent = safeNavigator.userAgent;
      if (!userAgent.includes("Mac OS X 10_15"))
        return s;
      if (!userAgent.includes("Chrome/81") && !userAgent.includes("Chrome/82"))
        return s;
    }
    return `Inter|${s}`;
  }
};
var fontWeightNames = {
  "100": "Thin",
  "200": "Extra Light",
  "300": "Light",
  "400": "Normal",
  "500": "Medium",
  "600": "Semi Bold",
  "700": "Bold",
  "800": "Extra Bold",
  "900": "Black"
};
function createVariantName(weight, style) {
  const friendlyStyle = style === "normal" ? "Regular" : "Italic";
  if (weight === 400) {
    return friendlyStyle;
  }
  if (style !== "normal") {
    return `${fontWeightNames[weight]} ${friendlyStyle}`;
  }
  return `${fontWeightNames[weight]}`;
}

// ../../library/src/render/fonts/fontStore.ts
var FontStore = class {
  constructor() {
    /**
     * Enabling the `FontStore` will make Text components automatically load
     * their fonts on render. Otherwise font loading is the responsibility of
     * the environment.
     */
    this.enabled = false;
    this.bySelector = /* @__PURE__ */ new Map();
    this.loadedSelectors = /* @__PURE__ */ new Set();
    this.local = new LocalFontSource();
    this.google = new GoogleFontSource();
    this.custom = new CustomFontSource();
    this.bySelector = /* @__PURE__ */ new Map();
    this.importLocalFonts();
    const defaultFont = this.getFontBySelector("Inter");
    assert(defaultFont, "Can\u2019t find Inter font");
    this.defaultFont = defaultFont;
  }
  addFont(font) {
    this.bySelector.set(font.selector, font);
  }
  getAvailableFonts() {
    return Array.from(this.bySelector.values());
  }
  importLocalFonts() {
    this.local.importFonts().forEach((font) => {
      this.addFont(font);
      if (!this.local.interTypefaceSelectors.has(font.selector)) {
        this.loadFont(font);
      }
    });
  }
  async importGoogleFonts() {
    if (!this.getGoogleFontsListPromise) {
      this.getGoogleFontsListPromise = runtime.fetchGoogleFontsList();
      const googleFonts = await this.getGoogleFontsListPromise;
      this.google.importFonts(googleFonts).forEach((font) => {
        this.addFont(font);
      });
    }
    return this.getGoogleFontsListPromise;
  }
  importCustomFonts(assets) {
    this.bySelector.forEach((_, key7) => {
      if (key7.startsWith(customFontSelectorPrefix)) {
        this.bySelector.delete(key7);
      }
    });
    this.custom.importFonts(assets).forEach((font) => this.addFont(font));
  }
  getTypeface(info) {
    const typeface = this[info.source].getTypefaceByFamily(info.family);
    return typeface;
  }
  getFontBySelector(selector, createFont = true) {
    if (selector.startsWith(customFontSelectorPrefix)) {
      return this.custom.getFontBySelector(selector, createFont);
    }
    return this.bySelector.get(selector);
  }
  // Function called by draft to get font properties for a selector, before the (google) font is available in the store
  // It replaces a previous function that created Font instances and added them to the store
  // on the fly while rendering drafts, which caused issues (overriding real google font info with fake instances with partial data).
  // Ideally this should not happen, but that's a fix for another day
  getDraftPropertiesBySelector(selector) {
    const font = this.getFontBySelector(selector);
    if (font) {
      return {
        style: font.style,
        weight: font.weight,
        variant: font.variant,
        family: font.typeface.family,
        source: font.typeface.source,
        category: font.category
      };
    }
    const locator = this.google.parseSelector(selector);
    if (locator) {
      const fontVariant = parseVariant(locator.variant);
      if (fontVariant) {
        return {
          style: fontVariant.style,
          weight: fontVariant.weight,
          variant: locator.variant,
          family: locator.family,
          source: "google" /* Google */,
          category: void 0
        };
      }
    }
    return null;
  }
  isSelectorLoaded(selector) {
    return this.loadedSelectors.has(selector);
  }
  /**
   * Load a single font
   * */
  async loadFont(font) {
    if (this.isSelectorLoaded(font.selector)) {
      return 0 /* AlreadyLoaded */;
    }
    if (font.typeface.source === "local" /* Local */) {
      if (this.local.interTypefaceSelectors.has(font.selector) && import_process8.default.env.NODE_ENV !== "test") {
        await isFontReady(font.typeface.family, font.style, font.weight);
      }
      this.loadedSelectors.add(font.selector);
      return 1 /* Loaded */;
    }
    if (!font.file) {
      return Promise.reject(`Unable to load font: ${font.selector}`);
    }
    await loadFont(
      {
        family: font.typeface.family,
        url: font.file,
        weight: font.weight,
        style: font.style
      },
      document
    );
    this.loadedSelectors.add(font.selector);
    return 1 /* Loaded */;
  }
  async loadWebFontsFromSelectors(selectors) {
    if (!this.enabled)
      return [];
    if (selectors.some((s) => s.startsWith(googleFontSelectorPrefix))) {
      await this.importGoogleFonts();
    }
    const fonts = selectors.map((s) => this.bySelector.get(s)).filter((f) => !!f);
    return Promise.allSettled(fonts.map((f) => this.loadFont(f)));
  }
  async loadMissingFonts(fontSelectors, fontsLoadedCallback) {
    const selectors = fontSelectors.filter((selector) => {
      return !fontStore.isSelectorLoaded(selector);
    });
    if (selectors.length === 0)
      return;
    await fontStore.loadWebFontsFromSelectors(selectors);
    const isEachFontLoaded = selectors.every((selector) => {
      return fontStore.isSelectorLoaded(selector);
    });
    if (isEachFontLoaded && fontsLoadedCallback)
      fontsLoadedCallback();
  }
};
var fontStore = /* @__PURE__ */ new FontStore();
Promise.allSettled = Promise.allSettled || ((promises) => Promise.all(
  promises.map(
    (p) => p.then((v) => ({ status: "fulfilled", value: v })).catch((e) => ({ status: "rejected", reason: e }))
  )
));

// ../../library/src/render/fonts/useFontLoadStatus.tsx
import React84 from "react";
function useFontLoadStatus(fontSelectors = [], timeout = 5e3) {
  const missingFontSelectors = fontSelectors.filter((s) => !fontStore.isSelectorLoaded(s));
  const [fontLoadStatus, setFontLoadStatus] = React84.useState(
    missingFontSelectors.length ? "loading" : "done"
  );
  React84.useEffect(() => {
    if (!missingFontSelectors.length)
      return;
    setFontLoadStatus("loading");
    const timer = setTimeout(() => {
      setFontLoadStatus("timeout");
    }, timeout);
    fontStore.loadWebFontsFromSelectors(missingFontSelectors).then(() => {
      clearTimeout(timer);
      setFontLoadStatus("done");
    });
  }, [fontSelectors.join(", "), missingFontSelectors.join(", ")]);
  return fontLoadStatus;
}

// ../../library/src/render/utils/isShallowEqualArray.ts
function isShallowEqualArray(a, b) {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

// ../../library/src/render/presentation/Text.tsx
var Text = /* @__PURE__ */ React85.forwardRef(function Text2(props, forwardedRef) {
  var _a, _b;
  const parentSize = useParentSize();
  const layoutId = useLayoutId(props);
  const fallbackLayoutRef = useRef12(null);
  const layoutRef = forwardedRef != null ? forwardedRef : fallbackLayoutRef;
  const { navigate, getRoute } = useRouter();
  const currentRoute = useCurrentRoute();
  useRoutePreloader((_a = props.preload) != null ? _a : []);
  const onCanvas = useIsOnFramerCanvas();
  const matchesCurrentRoute = useLinkMatchesRoute(props.__link);
  const fontLoadStatus = useFontLoadStatus(props.fonts);
  useMeasureLayout(props, layoutRef);
  const { fonts, __fromCanvasComponent } = props;
  const prevFontsRef = useRef12([]);
  const fontsDidChange = !isShallowEqualArray((_b = prevFontsRef.current) != null ? _b : [], fonts != null ? fonts : []);
  prevFontsRef.current = fonts;
  useEffect10(() => {
    if (!fontsDidChange || !fonts)
      return;
    fontStore.loadWebFontsFromSelectors(fonts).then((results) => {
      if (!__fromCanvasComponent || !layoutRef.current || RenderTarget.current() !== "CANVAS" /* canvas */)
        return;
      const didLoadNewFonts = results.some(
        (result) => result.status === "fulfilled" && result.value === 1 /* Loaded */
      );
      if (!didLoadNewFonts)
        return;
      measureClosestComponentContainer(layoutRef.current);
    });
  }, [fonts]);
  const implicitPathVariables = useImplicitPathVariables();
  const interceptPageLinks = React85.useCallback(
    (event) => {
      const anchorElement = findAnchorElement(event.target, layoutRef.current);
      if (event.metaKey || !navigate || !anchorElement)
        return;
      const didNavigate = navigateFromAttributes(navigate, anchorElement, implicitPathVariables);
      if (didNavigate) {
        event.preventDefault();
      }
    },
    [navigate, implicitPathVariables]
  );
  useEffect10(() => {
    var _a2;
    (_a2 = layoutRef.current) == null ? void 0 : _a2.addEventListener("click", interceptPageLinks);
    const ref = layoutRef.current;
    return () => ref == null ? void 0 : ref.removeEventListener("click", interceptPageLinks);
  }, [interceptPageLinks]);
  const rawHTML = React85.useMemo(() => {
    if (!props.rawHTML || onCanvas || !getRoute || !currentRoute)
      return props.rawHTML;
    return replaceFramerPageLinks(props.rawHTML, getRoute, currentRoute, implicitPathVariables);
  }, [props.rawHTML, getRoute, onCanvas, currentRoute, implicitPathVariables]);
  return /* @__PURE__ */ React85.createElement(
    TextComponent,
    {
      ...props,
      innerRef: layoutRef,
      layoutId,
      parentSize,
      fontLoadStatus,
      rawHTML,
      matchesCurrentRoute
    }
  );
});
var TextComponent = /* @__PURE__ */ (() => {
  var _a;
  return _a = class extends Layer {
    constructor() {
      super(...arguments);
      this.setElement = (element) => {
        if (this.props.innerRef) {
          this.props.innerRef.current = element;
        }
        this.setLayerElement(element);
      };
      /** Used by the ComponentContainerContext */
      this.renderMain = (inCodeComponent) => {
        if (import_process9.default.env.NODE_ENV !== "production" && safeWindow["perf"])
          safeWindow["perf"].nodeRender();
        const {
          font,
          visible,
          alignment,
          willChangeTransform,
          opacity,
          id,
          layoutId,
          className,
          transition,
          variants,
          name,
          __fromCanvasComponent,
          _initialStyle,
          widthType,
          heightType,
          _usesDOMRect,
          autoSize,
          style: styleProp,
          fontLoadStatus,
          matchesCurrentRoute,
          preload,
          tabIndex,
          ...rest
        } = this.props;
        if (!visible) {
          return null;
        }
        injectComponentCSSRules();
        const isHidden2 = this.props.isEditable && this.props.environment() === "CANVAS" /* canvas */;
        const justifyContent = convertVerticalAlignment(this.props.verticalAlignment);
        const style = {
          outline: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent,
          opacity: isHidden2 ? 0 : opacity,
          flexShrink: 0
        };
        if (_initialStyle) {
          for (const key7 in _initialStyle) {
            if (key7.startsWith("--framer")) {
              style[key7] = _initialStyle[key7];
            }
          }
        }
        const dataProps = {
          "data-framer-component-type": "Text",
          "data-framer-name": name
        };
        if (autoSize) {
          dataProps["data-framer-component-text-autosized"] = "true";
        }
        this.collectLayout(style, inCodeComponent);
        collectFiltersFromProps(this.props, style);
        collectTextShadowsForProps(this.props, style);
        if (style.opacity === 1 || style.opacity === void 0) {
          delete style.opacity;
        }
        if (willChangeTransform) {
          forceLayerBackingWithCSSProperties(style);
        }
        let rawHTML = this.props.rawHTML;
        const text = this.getOverrideText() || this.props.text;
        if (isString2(text)) {
          if (rawHTML) {
            rawHTML = replaceDraftHTMLWithText(rawHTML, text);
          } else {
            rawHTML = `<p style="font: ${font}">${text}</p>`;
          }
        }
        if (this.props.style) {
          Object.assign(style, this.props.style);
        }
        const centeringTransformTemplate = this.transformTemplate;
        if (centeringTransformTemplate)
          Object.assign(dataProps, layoutHintDataPropsForCenter(this.props.center));
        if (rawHTML) {
          style.lineHeight = "1px";
          style.fontSize = "0px";
          if (RenderTarget.current() === "CANVAS" /* canvas */ && fontLoadStatus === "loading") {
            style.visibility = "hidden";
          }
          if (RenderTarget.current() === "CANVAS" /* canvas */ && fontLoadStatus === "timeout") {
            style.backgroundColor = "rgba(255, 0, 0, 0.3)";
          }
          Object.assign(style, styleProp);
          if (alignment)
            style["--framer-text-alignment"] = alignment;
          const tabIndexProps = getTabIndexProps(tabIndex);
          return /* @__PURE__ */ React85.createElement(
            motion.div,
            {
              layoutId,
              id,
              ...tabIndexProps,
              ...dataProps,
              ...rest,
              style,
              transformTemplate: centeringTransformTemplate,
              dangerouslySetInnerHTML: { __html: rawHTML },
              "data-center": this.props.center,
              className: cx(className, matchesCurrentRoute && "isCurrent"),
              transition,
              variants,
              ref: this.setElement
            }
          );
        }
      };
    }
    get frame() {
      return calculateRect(this.props, this.props.parentSize || 0 /* Unknown */, false);
    }
    getOverrideText() {
      const { _forwardedOverrideId, _forwardedOverrides, id } = this.props;
      const forwardedOverrideId = _forwardedOverrideId != null ? _forwardedOverrideId : id;
      if (forwardedOverrideId && _forwardedOverrides) {
        const text = _forwardedOverrides[forwardedOverrideId];
        if (isString2(text)) {
          return text;
        }
      }
    }
    render() {
      return /* @__PURE__ */ React85.createElement(ComponentContainerContext.Consumer, null, this.renderMain);
    }
    collectLayout(style, inCodeComponent) {
      if (this.props.withExternalLayout)
        return;
      const frame2 = this.frame;
      const {
        rotation,
        autoSize,
        positionSticky,
        positionStickyTop,
        positionStickyRight,
        positionStickyBottom,
        positionStickyLeft,
        width: externalWidth,
        height: externalHeight,
        _usesDOMRect,
        positionFixed,
        positionAbsolute
      } = this.props;
      const rotate = Animatable.getNumber(rotation);
      const isDOMLayoutAutoSized = _usesDOMRect && (externalWidth === "auto" || externalHeight === "auto");
      if (frame2 && !isDOMLayoutAutoSized && RenderTarget.hasRestrictions()) {
        Object.assign(style, {
          transform: `translate(${frame2.x}px, ${frame2.y}px) rotate(${rotate.toFixed(4)}deg)`,
          // Using “auto” fixes wrapping problems where our size calculation does not work out well when zooming the
          // text (due to rendering differences).
          // TODO: When the `autoSize` prop is removed, it's safe to leave
          // this at `${frame.width}px`, because all auto cases will be
          // handled by DOM layout in the `else` side of the conditional
          width: autoSize ? "auto" : `${frame2.width}px`,
          minWidth: `${frame2.width}px`,
          height: `${frame2.height}px`
        });
      } else {
        const { left, right, top, bottom } = this.props;
        let width;
        let height;
        if (autoSize) {
          width = "auto";
          height = "auto";
        } else {
          if (!isFiniteNumber(left) || !isFiniteNumber(right)) {
            width = externalWidth;
          }
          if (!isFiniteNumber(top) || !isFiniteNumber(bottom)) {
            height = externalHeight;
          }
        }
        Object.assign(style, {
          left,
          right,
          top,
          bottom,
          width,
          height,
          rotate
        });
      }
      const onCanvas = RenderTarget.current() === "CANVAS" /* canvas */;
      if (positionSticky) {
        if (!onCanvas || inCodeComponent) {
          style.position = "sticky";
          style.willChange = "transform";
          style.zIndex = 1;
          style.top = positionStickyTop;
          style.right = positionStickyRight;
          style.bottom = positionStickyBottom;
          style.left = positionStickyLeft;
        }
      } else if (onCanvas && (positionFixed || positionAbsolute)) {
        style.position === "absolute";
      }
    }
    get transformTemplate() {
      const { _usesDOMRect, widthType, heightType, __fromCanvasComponent } = this.props;
      if (this.props.transformTemplate)
        return this.props.transformTemplate;
      const frame2 = this.frame;
      const isDOMLayoutAutoSized = _usesDOMRect && (widthType === 2 /* Auto */ || heightType === 2 /* Auto */);
      const hasTransformTemplate = !frame2 || !RenderTarget.hasRestrictions() || __fromCanvasComponent || isDOMLayoutAutoSized;
      if (hasTransformTemplate)
        return transformTemplate(this.props.center);
    }
  }, _a.supportsConstraints = true, _a.defaultTextProps = {
    opacity: void 0,
    left: void 0,
    right: void 0,
    top: void 0,
    bottom: void 0,
    _constraints: {
      enabled: true,
      aspectRatio: null
    },
    rotation: 0,
    visible: true,
    alignment: void 0,
    verticalAlignment: "top",
    shadows: [],
    font: "16px " + deviceFont()
  }, _a.defaultProps = {
    ...Layer.defaultProps,
    ..._a.defaultTextProps,
    isEditable: false,
    environment: RenderTarget.current,
    withExternalLayout: false,
    fontLoadStatus: "loading"
  }, _a;
})();
var linkTag = "(?:<a[^>]*>)?";
var linkClosingTag = "(?:</a>)?";
var outerTag = "<[^>]+>";
var outerClosingTag = "</[^>]+>";
var blockTag = "<(?:div|span)[^>]*>";
var blockClosingTag = "</(?:div|span)>";
var inlineTag = "<[^>]+>";
var inlineClosingTag = "</[^>]+>";
var textContentRegex = new RegExp(
  `^(${linkTag}${outerTag}${blockTag}${inlineTag}).*?(${inlineClosingTag}).*?(${blockClosingTag}${outerClosingTag}${linkClosingTag})$`,
  //                                              ^^^ this is the content we want to replace
  //                                                                      ^^^ this is the content we want to discard
  "s"
  // let the "." also match newlines
);
function replaceDraftHTMLWithText(rawHTML, text) {
  return rawHTML.replace(
    textContentRegex,
    (_, openingTags, inlineClosingTag2, closingTags) => openingTags + text + inlineClosingTag2 + "<br>" + closingTags
  );
}
function convertVerticalAlignment(verticalAlignment) {
  switch (verticalAlignment) {
    case "top":
      return "flex-start";
    case "center":
      return "center";
    case "bottom":
      return "flex-end";
  }
}
function getTabIndexProps(tabIndex) {
  if (tabIndex === void 0)
    return {};
  return { tabIndex };
}

// ../../library/src/render/presentation/Vector.tsx
var import_process10 = __toESM(require_browser(), 1);
import React88 from "react";

// ../../library/src/utils/internalId.ts
var keys2 = /* @__PURE__ */ new Map();
var InternalID = class {
  constructor(id) {
    this.id = id;
    this._link = null;
    this._urllink = null;
  }
  add(str) {
    return InternalID.forKey(this.id + str);
  }
  toString() {
    return this.id;
  }
  get link() {
    const res = this._link;
    if (res)
      return res;
    return this._link = "#" + this.id;
  }
  get urlLink() {
    const res = this._urllink;
    if (res)
      return res;
    return this._urllink = "url(#" + this.id + ")";
  }
  static forKey(key7) {
    let res = keys2.get(key7);
    if (res)
      return res;
    res = new InternalID("a" + (1e3 + keys2.size) + "z");
    keys2.set(key7, res);
    return res;
  }
};

// ../../library/src/render/types/PathSegment.ts
var PathSegment = class {
  constructor(value) {
    // #region withClassDiscriminator
    // NOTE: this implementation carefully copies the implementation of `withClassDiscriminator`
    // from Vekter. If making changes here, make sure to sync them to `withClassDiscriminator` as well.
    this.__class = "PathSegment";
    // #endregion
    this.x = 0;
    // The anchor point of the segment.
    this.y = 0;
    this.handleMirroring = "straight";
    this.handleOutX = 0;
    // Describes the out tangent of the segment.
    this.handleOutY = 0;
    this.handleInX = 0;
    // Describes the in tangent of the segment.
    this.handleInY = 0;
    this.radius = 0;
    if (value) {
      Object.assign(this, value);
    }
  }
  merge(value) {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this, value);
  }
};
PathSegment.displayName = "WithClassDiscriminatorMixin(PathSegment)";
PathSegment.prototype.__class = "PathSegment";
((PathSegment2) => {
  PathSegment2.point = (pathSegment) => {
    return { x: pathSegment.x, y: pathSegment.y };
  };
  PathSegment2.handleOut = (pathSegment) => {
    return { x: pathSegment.handleOutX, y: pathSegment.handleOutY };
  };
  PathSegment2.handleIn = (pathSegment) => {
    return { x: pathSegment.handleInX, y: pathSegment.handleInY };
  };
  PathSegment2.calculatedHandleOut = (pathSegment) => {
    switch (pathSegment.handleMirroring) {
      case "symmetric":
      case "disconnected":
      case "asymmetric":
        return Point.add((0, PathSegment2.point)(pathSegment), (0, PathSegment2.handleOut)(pathSegment));
      default:
        return { x: pathSegment.x, y: pathSegment.y };
    }
  };
  PathSegment2.calculatedHandleIn = (pathSegment) => {
    switch (pathSegment.handleMirroring) {
      case "symmetric":
        return Point.subtract((0, PathSegment2.point)(pathSegment), (0, PathSegment2.handleOut)(pathSegment));
      case "disconnected":
      case "asymmetric":
        return Point.add((0, PathSegment2.point)(pathSegment), (0, PathSegment2.handleIn)(pathSegment));
      default:
        return (0, PathSegment2.point)(pathSegment);
    }
  };
  PathSegment2.curveDefault = (points, index) => {
    if (points.length > 2) {
      let pointBefore;
      let pointAfter;
      if (index === 0) {
        pointBefore = points[points.length - 1];
      } else {
        pointBefore = points[index - 1];
      }
      if (index === points.length - 1) {
        pointAfter = points[0];
      } else {
        pointAfter = points[index + 1];
      }
      assert(pointBefore, "pointBefore should be defined");
      assert(pointAfter, "pointAfter should be defined");
      const delta = Point.subtract((0, PathSegment2.point)(pointAfter), (0, PathSegment2.point)(pointBefore));
      return { x: delta.x / 4, y: delta.y / 4 };
    }
    return { x: 10, y: 10 };
  };
})(PathSegment || (PathSegment = {}));

// ../../library/src/render/traits/Path.ts
var key5 = "pathSegments";
function withPath(target) {
  return key5 in target;
}
var pathDefaults = {
  pathSegments: [],
  pathClosed: false
};
function toSVGPath(withPaths, translate = { x: 0, y: 0 }, canvasMode = "CANVAS" /* canvas */) {
  let pathElements = [];
  let paths = [];
  if (Array.isArray(withPaths)) {
    paths = withPaths;
  } else {
    paths = [withPaths];
  }
  paths.forEach((path) => {
    const { pathClosed, pathSegments } = path;
    const segmentCount = pathSegments.length;
    if (segmentCount === 0)
      return "";
    for (let i = 0; i < segmentCount; i++) {
      const segment = pathSegments[i];
      assert(segment, "Path segment must be defined");
      let nextSegment;
      let prevSegment;
      const isFirstSegment = i === 0;
      const isLastSegment = i === segmentCount - 1;
      if (!isLastSegment) {
        nextSegment = pathSegments[i + 1];
      } else if (pathClosed) {
        nextSegment = pathSegments[0];
      }
      if (!isFirstSegment) {
        prevSegment = pathSegments[i - 1];
      } else if (pathClosed) {
        prevSegment = pathSegments[segmentCount - 1];
      }
      if (i === 0) {
        pathElements.push("M");
      } else if (prevSegment && isStraightCurve(prevSegment, segment)) {
        pathElements.push("L");
      }
      pathElements.push(segment.x + translate.x, segment.y + translate.y);
      if (nextSegment && !isStraightCurve(segment, nextSegment)) {
        const handleOut = PathSegment.calculatedHandleOut(segment);
        const handleIn = PathSegment.calculatedHandleIn(nextSegment);
        pathElements.push(
          "C",
          handleOut.x + translate.x,
          handleOut.y + translate.y,
          handleIn.x + translate.x,
          handleIn.y + translate.y
        );
      }
      if (isLastSegment && nextSegment) {
        if (isStraightCurve(segment, nextSegment)) {
          pathElements.push("Z");
        } else {
          pathElements.push(nextSegment.x + translate.x, nextSegment.y + translate.y, "Z");
        }
      }
    }
  });
  if (canvasMode === "EXPORT" /* export */ || canvasMode === "PREVIEW" /* preview */) {
    pathElements = pathElements.map((value) => isFiniteNumber(value) ? roundedNumberString(value, 3) : value);
  }
  return pathElements.join(" ");
}
function isStraightCurve(fromSegment, toSegment) {
  const fromStraight = fromSegment.handleMirroring === "straight" || fromSegment.handleOutX === 0 && fromSegment.handleOutY === 0;
  const toStraight = toSegment.handleMirroring === "straight" || toSegment.handleInX === 0 && toSegment.handleInY === 0;
  return fromStraight && toStraight;
}

// ../../library/src/render/types/svgElementAttributeDefaults.ts
var svgElementAttributeDefaults = {
  stroke: "none",
  strokeWidth: 1,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  strokeDasharray: "0",
  strokeDashoffset: 0,
  strokeOpacity: 1,
  fill: "black",
  fillRule: "nonzero",
  fillOpacity: 1
};

// ../../library/src/render/utils/createTransformValues.ts
function createTransformValues(baseTransform, mode) {
  let { x, y } = baseTransform;
  const { width, height, rotation } = baseTransform;
  if (mode === "resetXYKeepFraction") {
    x = x - Math.floor(x);
    y = y - Math.floor(y);
  } else if (mode === "resetXY") {
    x = 0;
    y = 0;
  }
  return { x, y, width, height, rotation };
}
function getTransformMode(isRootVectorNode, includeTransform) {
  if (includeTransform !== void 0) {
    if (includeTransform) {
      return "asIs";
    }
  } else {
    if (!isRootVectorNode) {
      return "asIs";
    }
  }
  if (isRootVectorNode) {
    return "resetXYKeepFraction";
  } else {
    return "resetXY";
  }
}
function transformValues2(rect, rotation, isRootVectorNode, includeTransform) {
  const transformMode = getTransformMode(isRootVectorNode, includeTransform);
  const baseTransform = { ...rect, rotation };
  const transform2 = createTransformValues(baseTransform, transformMode);
  return transform2;
}

// ../../library/src/render/utils/transformString.ts
function transformString(transform2) {
  if (transform2 === void 0) {
    return void 0;
  }
  const { x, y, rotation, width, height } = transform2;
  let result;
  if (x !== 0 || y !== 0) {
    result = `translate(${roundedNumberString(x, 3)} ${roundedNumberString(y, 3)})`;
  }
  if (rotation !== 0) {
    const roundedRotation = roundedNumberString(rotation, 4);
    const roundedWidth = roundedNumberString(width / 2, 3);
    const roundedHeight = roundedNumberString(height / 2, 3);
    const rotationString = `rotate(${roundedRotation} ${roundedWidth} ${roundedHeight})`;
    result = result ? `${result} ${rotationString}` : rotationString;
  }
  return result;
}

// ../../library/src/render/presentation/GradientElement.tsx
import React86, { Component as Component12 } from "react";
var LinearGradientElement = class extends Component12 {
  render() {
    const { id, angle, stops } = this.props;
    return /* @__PURE__ */ React86.createElement("linearGradient", { id, gradientTransform: `rotate(${angle}, 0.5, 0.5)` }, stops.map((stop, idx) => {
      return /* @__PURE__ */ React86.createElement("stop", { key: idx, offset: stop.position, stopColor: stop.color, stopOpacity: stop.alpha });
    }));
  }
};
var RadialGradientElement = class extends Component12 {
  render() {
    const { centerAnchorX, centerAnchorY, id, widthFactor, heightFactor, stops } = this.props;
    return /* @__PURE__ */ React86.createElement(
      "radialGradient",
      {
        id,
        cy: centerAnchorY,
        cx: centerAnchorX,
        r: widthFactor,
        gradientTransform: `translate(${centerAnchorX}, ${centerAnchorY}) scale(1 ${heightFactor / widthFactor}) translate(-${centerAnchorX}, -${centerAnchorY})`
      },
      stops.map((stop, idx) => {
        return /* @__PURE__ */ React86.createElement("stop", { key: idx, offset: stop.position, stopColor: stop.color, stopOpacity: stop.alpha });
      })
    );
  }
};

// ../../library/src/render/presentation/SVGRoot.tsx
import React87, { Component as Component13 } from "react";
var SVGRoot = class extends Component13 {
  render() {
    const { children, frame: frame2, innerRef } = this.props;
    const { width, height } = frame2;
    const fx = Math.floor(frame2.x);
    const fy = Math.floor(frame2.y);
    const svgStyle = {
      position: "absolute",
      width: Math.ceil(width),
      height: Math.ceil(height),
      overflow: "visible",
      display: "block",
      transform: `translate(${fx}px, ${fy}px)`
    };
    Layer.applyWillChange(this.props, svgStyle, false);
    return /* @__PURE__ */ React87.createElement(
      "svg",
      {
        width: "100%",
        height: "100%",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        style: svgStyle,
        ref: innerRef
      },
      children
    );
  }
};

// ../../library/src/render/presentation/Vector.tsx
var Vector = /* @__PURE__ */ (() => {
  var _a;
  return _a = class extends Layer {
    render() {
      var _a2, _b;
      if (import_process10.default.env.NODE_ENV !== "production" && safeWindow["perf"])
        safeWindow["perf"].nodeRender();
      const {
        opacity,
        calculatedPath,
        d,
        insideStroke,
        shapeId,
        strokeEnabled,
        strokeClipId,
        strokeWidth,
        idAttribute,
        rect,
        shadows,
        strokeAlpha,
        name,
        includeTransform,
        isRootVectorNode,
        rotation,
        id,
        lineCap,
        lineJoin,
        strokeColor,
        strokeMiterLimit,
        strokeDashArray,
        strokeDashOffset,
        fill,
        variants,
        transition
      } = this.props;
      if (!id || !shapeId || !strokeClipId)
        return null;
      const rotate = (_b = (_a2 = this.props.rotate) != null ? _a2 : rotation) != null ? _b : 0;
      const { target } = RenderEnvironment;
      const transform2 = transformValues2(rect, rotate, isRootVectorNode, includeTransform);
      let vectorFill;
      let fillAlpha = 0;
      let imagePattern;
      let linearGradient;
      let radialGradient;
      if (typeof fill === "string" || Color.isColorObject(fill)) {
        const fillColor = Color.isColorObject(fill) ? fill.initialValue || Color.toRgbString(fill) : fill;
        if (fillColor !== "transparent") {
          vectorFill = fillColor;
          fillAlpha = ConvertColor.getAlpha(vectorFill);
        }
      } else if (LinearGradient.isLinearGradient(fill)) {
        linearGradient = elementPropertiesForLinearGradient(fill, id);
        vectorFill = `url(#${linearGradient.id})`;
        fillAlpha = 1;
      } else if (RadialGradient.isRadialGradient(fill)) {
        radialGradient = elementPropertiesForRadialGradient(fill, id);
        vectorFill = `url(#${radialGradient.id})`;
        fillAlpha = 1;
      } else if (BackgroundImage.isImageObject(fill)) {
        imagePattern = imagePatternPropsForFill(fill, transform2, id);
        if (imagePattern) {
          vectorFill = `url(#${imagePattern.id})`;
          fillAlpha = 1;
        }
      }
      if (vectorFill === svgElementAttributeDefaults.fill) {
        vectorFill = void 0;
      }
      if (vectorFill === void 0) {
        vectorFill = "transparent";
      }
      const fillEnabled = vectorFill !== void 0 && vectorFill !== "transparent" && fillAlpha !== 0;
      if (!fillEnabled && !strokeEnabled) {
        fillAlpha = 1;
      }
      let mainElement;
      let strokeClipPath = null;
      let shapeReference = null;
      let strokeElement = null;
      let pathTranslate;
      let elementTransform;
      const translatePaths = target === "EXPORT" /* export */;
      if (transform2.rotation === 0 && translatePaths) {
        pathTranslate = transform2;
      } else {
        pathTranslate = { x: 0, y: 0 };
        elementTransform = transformString(transform2);
      }
      const pathAttributes = {
        d: d != null ? d : toSVGPath(calculatedPath, pathTranslate, target),
        transform: elementTransform
      };
      const svgStrokeAttributes = {};
      if (strokeEnabled && strokeWidth !== 0) {
        svgStrokeAttributes.strokeWidth = strokeWidth;
        svgStrokeAttributes.stroke = strokeColor;
        svgStrokeAttributes.strokeLinecap = lineCap;
        svgStrokeAttributes.strokeLinejoin = lineJoin;
        if (lineJoin === "miter") {
          svgStrokeAttributes.strokeMiterlimit = strokeMiterLimit;
        }
        svgStrokeAttributes.strokeDasharray = strokeDashArray;
        if (strokeDashOffset !== 0) {
          svgStrokeAttributes.strokeDashoffset = strokeDashOffset;
        }
      }
      for (const key7 in svgElementAttributeDefaults) {
        if (svgStrokeAttributes[key7] === svgElementAttributeDefaults[key7]) {
          svgStrokeAttributes[key7] = void 0;
        }
      }
      const internalShapeId = InternalID.forKey(shapeId);
      const internalStrokeClipId = InternalID.forKey(strokeClipId);
      const shadow = shadowForShape(
        shadows,
        rect,
        internalShapeId,
        fillAlpha,
        strokeAlpha,
        strokeWidth,
        internalStrokeClipId,
        svgStrokeAttributes
      );
      const currentName = target === "PREVIEW" /* preview */ ? name || void 0 : void 0;
      if (shadow.insetElement !== null || shadow.outsetElement !== null || insideStroke) {
        pathAttributes.id = internalShapeId.id;
        shapeReference = /* @__PURE__ */ React88.createElement(motion.path, { ...{ ...pathAttributes }, variants, transition });
        if (shadow.needsStrokeClip || insideStroke) {
          strokeClipPath = /* @__PURE__ */ React88.createElement("clipPath", { id: internalStrokeClipId.id }, /* @__PURE__ */ React88.createElement("use", { xlinkHref: internalShapeId.link }));
        }
        if (shadow.insetElement !== null && strokeEnabled && strokeWidth && strokeWidth > 0) {
          mainElement = /* @__PURE__ */ React88.createElement("use", { xlinkHref: internalShapeId.link, fill: vectorFill, strokeOpacity: "0", name: currentName });
          strokeElement = /* @__PURE__ */ React88.createElement(
            "use",
            {
              xlinkHref: internalShapeId.link,
              clipPath: internalStrokeClipId.urlLink,
              fill: "transparent",
              ...svgStrokeAttributes,
              strokeWidth
            }
          );
        } else {
          mainElement = /* @__PURE__ */ React88.createElement(
            "use",
            {
              xlinkHref: internalShapeId.link,
              fill: vectorFill,
              clipPath: internalStrokeClipId.urlLink,
              ...svgStrokeAttributes,
              strokeWidth,
              name: currentName
            }
          );
        }
      } else {
        pathAttributes.id = idAttribute;
        mainElement = /* @__PURE__ */ React88.createElement(
          motion.path,
          {
            ...{
              ...pathAttributes,
              fill: vectorFill,
              ...svgStrokeAttributes
            },
            name: currentName,
            variants,
            transition
          }
        );
      }
      const imagePatternElement = imagePattern ? /* @__PURE__ */ React88.createElement(ImagePatternElement, { ...imagePattern }) : void 0;
      let gradient;
      if (linearGradient) {
        gradient = /* @__PURE__ */ React88.createElement(LinearGradientElement, { ...linearGradient });
      } else if (radialGradient) {
        gradient = /* @__PURE__ */ React88.createElement(RadialGradientElement, { ...radialGradient });
      }
      let defs = null;
      if (shapeReference || strokeClipPath || shadow.definition && shadow.definition.length || gradient || imagePatternElement) {
        defs = /* @__PURE__ */ React88.createElement("defs", null, shapeReference, strokeClipPath, shadow.definition, gradient, imagePatternElement);
      }
      const opacityValue = opacity != null ? opacity : variants ? 1 : void 0;
      if (defs === null && shadow.outsetElement === null && shadow.insetElement === null && strokeElement === null) {
        mainElement = /* @__PURE__ */ React88.createElement(
          motion.path,
          {
            ...{
              ...pathAttributes,
              fill: vectorFill,
              ...svgStrokeAttributes
            },
            opacity: opacityValue,
            variants,
            transition,
            name: currentName
          }
        );
        return this.renderElement(mainElement);
      } else {
        return this.renderElement(
          /* @__PURE__ */ React88.createElement(motion.g, { opacity: opacityValue, variants, transition }, defs, shadow.outsetElement, mainElement, shadow.insetElement, strokeElement)
        );
      }
    }
    renderElement(element) {
      var _a2, _b;
      const { isRootVectorNode, width, height, rect, willChangeTransform, includeTransform } = this.props;
      const frame2 = (_b = (_a2 = this.props.frame) != null ? _a2 : rect) != null ? _b : { x: 0, y: 0, width: 100, height: 100 };
      if (!isRootVectorNode)
        return element;
      if (includeTransform)
        return element;
      return /* @__PURE__ */ React88.createElement(
        SVGRoot,
        {
          frame: frame2,
          width,
          height,
          willChangeTransform,
          innerRef: this.setLayerElement
        },
        element
      );
    }
  }, _a.defaultVectorProps = {
    isRootVectorNode: false,
    name: null,
    includeTransform: void 0,
    defaultFillColor: void 0,
    defaultStrokeColor: void 0,
    defaultStrokeWidth: void 0,
    defaultStrokeAlignment: "center",
    width: 100,
    height: 100,
    rotation: 0,
    rotate: void 0,
    frame: void 0,
    opacity: void 0,
    calculatedPath: [],
    d: void 0,
    shapeId: void 0,
    insideStroke: false,
    strokeEnabled: true,
    strokeClipId: void 0,
    strokeWidth: void 0,
    idAttribute: void 0,
    transition: void 0,
    shadows: [],
    strokeAlpha: 1,
    rect: { x: 0, y: 0, width: 0, height: 0 },
    lineCap: "butt",
    strokeColor: "#0AF",
    lineJoin: "miter",
    strokeMiterLimit: 4,
    strokeDashArray: "0",
    strokeDashOffset: 0,
    fill: "rgba(0,170,255,0.5)"
  }, _a.defaultProps = {
    ...Layer.defaultProps,
    ..._a.defaultVectorProps
  }, _a;
})();

// ../../library/src/render/presentation/VectorGroup.tsx
var import_process11 = __toESM(require_browser(), 1);
import React89 from "react";
var VectorGroup = /* @__PURE__ */ (() => {
  var _a;
  return _a = class extends Layer {
    render() {
      if (import_process11.default.env.NODE_ENV !== "production" && safeWindow["perf"])
        safeWindow["perf"].nodeRender();
      const {
        id,
        name: nameProp,
        opacity,
        visible,
        targetName,
        defaultName,
        children,
        includeTransform,
        x,
        y,
        width,
        height,
        rotation,
        isRootVectorNode
      } = this.props;
      if (!visible)
        return null;
      const { target } = RenderEnvironment;
      const rect = { x, y, width, height };
      const transform2 = transformValues2(rect, rotation, isRootVectorNode, includeTransform);
      const addNames = target === "PREVIEW" /* preview */;
      let name = void 0;
      if (addNames) {
        if (targetName) {
          name = targetName;
        } else if (nameProp) {
          name = nameProp;
        } else {
          name = defaultName;
        }
      }
      return this.renderElement(
        /* @__PURE__ */ React89.createElement("g", { transform: transformString(transform2), ...{ id, name, opacity } }, children)
      );
    }
    renderElement(element) {
      const { isRootVectorNode, width, height, frame: frame2, willChangeTransform, includeTransform } = this.props;
      if (!isRootVectorNode)
        return element;
      if (includeTransform)
        return element;
      return /* @__PURE__ */ React89.createElement(
        SVGRoot,
        {
          frame: frame2,
          width,
          height,
          willChangeTransform,
          innerRef: this.setLayerElement
        },
        element
      );
    }
  }, _a.defaultVectorGroupProps = {
    name: void 0,
    opacity: void 0,
    visible: true,
    x: 0,
    y: 0,
    rotation: 0,
    width: 100,
    height: 100,
    targetName: void 0,
    defaultName: "",
    isRootVectorNode: false,
    includeTransform: void 0,
    frame: { x: 0, y: 0, width: 100, height: 100 }
  }, _a.defaultProps = {
    ...Layer.defaultProps,
    ..._a.defaultVectorGroupProps
  }, _a;
})();

// ../../library/src/render/DesignComponentWrapper.tsx
var _CanvasStore = class {
  constructor() {
    this.canvas = { children: [] };
    this.listeners = [];
    this.ids = [];
  }
  static shared(data2) {
    if (data2) {
      const store = new _CanvasStore();
      store.setCanvas(data2);
      return store;
    }
    if (!_CanvasStore.__shared) {
      _CanvasStore.__shared = new _CanvasStore();
    }
    return _CanvasStore.__shared;
  }
  updateNode(presentationNode) {
    const id = presentationNode.props.id;
    let children = this.canvas.children;
    if (!children) {
      this.canvas.children = children = [];
    }
    let found = false;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if ((child == null ? void 0 : child.props.id) === id) {
        found = true;
        children[i] = presentationNode;
        break;
      }
    }
    if (!found) {
      children.push(presentationNode);
    }
    this.setCanvas(this.canvas);
  }
  setCanvas(canvas) {
    if (!canvas.children)
      return;
    this.canvas = canvas;
    this.listeners.forEach((l, at) => {
      const id = this.ids[at];
      if (!id)
        return;
      const data2 = findNodeFor(canvas, id);
      l.setState({ data: data2 });
    });
  }
  registerListener(listener, idOrName) {
    this.listeners.push(listener);
    this.ids.push(idOrName);
    return findNodeFor(this.canvas, idOrName);
  }
  removeListener(listener) {
    const at = this.listeners.indexOf(listener);
    if (at === -1)
      return;
    this.listeners.splice(at, 1);
    this.ids.splice(at, 1);
  }
};
var CanvasStore = _CanvasStore;
CanvasStore.__shared = null;
var builtInComponents = { Frame, Vector, Stack, VectorGroup, SVG, Text, DeprecatedComponentContainer };
var DesignComponent = class extends Component14 {
  _typeForName(name) {
    const builtIn = builtInComponents[name];
    if (builtIn)
      return builtIn;
    const codeComponent = runtime.componentLoader.componentForIdentifier(name);
    if (codeComponent && isReactDefinition(codeComponent)) {
      return codeComponent.class;
    }
    return Frame;
  }
  _renderData(presentation, componentProps, topLevelProps) {
    safeWindow["__checkBudget__"]();
    const { componentClass, name } = presentation;
    let { props, children } = presentation;
    props = { ...props, _constraints: { enabled: false } };
    const type = this._typeForName(componentClass);
    if (!type)
      return null;
    if (topLevelProps) {
      const { style, ...rest } = props;
      props = { ...rest, ...topLevelProps, _initialStyle: style };
    }
    if (!props.size && props._sizeOfMasterOnCanvas) {
      if (!props.width) {
        props.width = props._sizeOfMasterOnCanvas.width;
      }
      if (!props.height) {
        props.height = props._sizeOfMasterOnCanvas.height;
      }
    }
    if (name && componentProps.hasOwnProperty(name)) {
      if (componentClass === "Text") {
        const text = componentProps[name];
        if (text) {
          props = { ...props, text: componentProps[name] };
        }
      } else {
        const orig = props.background;
        const background = { src: componentProps[name], fit: orig.fit };
        props = { ...props, background };
      }
    }
    const c = children && children.map((child) => this._renderData(child, componentProps, void 0));
    children = children ? c : [];
    return React90.createElement(type, props, children);
  }
  render() {
    safeWindow["__checkBudget__"]();
    const data2 = this.state.data;
    if (!data2) {
      throw new Error("Unable to connect to canvas data store.");
    }
    return this._renderData(this.state.data, this.props, this.props);
  }
};
function isNode(id, presentation) {
  const { name, props } = presentation;
  return props && props.id === id || name === id;
}
function findNodeFor(presentation, id) {
  if (!presentation)
    return null;
  if (isNode(id, presentation)) {
    return presentation;
  }
  const { children } = presentation;
  if (!children || !isArray(children))
    return null;
  for (const child of children) {
    if (isNode(id, child)) {
      return child;
    }
  }
  for (const child of children) {
    const result = findNodeFor(child, id);
    if (result)
      return result;
  }
  return null;
}
function createDesignComponent(canvasStore, id, propertyControls, width = 200, height = 200) {
  var _a;
  return _a = class extends DesignComponent {
    static rect(props) {
      const constraintValues = ConstraintValues.fromProperties(props);
      const parentSizeInfo = props.parentSize ? { sizing: props.parentSize, positioning: props.parentSize } : null;
      return ConstraintValues.toRect(constraintValues, parentSizeInfo, null);
    }
    static size(props, parentSize, freeSpace) {
      const constraintValues = ConstraintValues.fromProperties(props);
      return ConstraintValues.toSize(constraintValues, parentSize || null, null, freeSpace);
    }
    constructor(props, context) {
      super(props, context);
      const data2 = canvasStore.registerListener(this, id);
      this.state = { data: data2 };
    }
    render() {
      const maybeRenderWithProvider = (renderNode) => {
        const nodeId = nodeIdFromString(id);
        if (!this.state.data && renderNode) {
          safeWindow["__checkBudget__"]();
          const el = renderNode(nodeId);
          if (el && React90.isValidElement(el) && typeof el.type !== "string") {
            return React90.createElement(WithOverride(el.type, this.props), el.props);
          }
        }
        return super.render();
      };
      return /* @__PURE__ */ React90.createElement(RenderNodeContext.Consumer, null, maybeRenderWithProvider);
    }
    componentWillUnmount() {
      canvasStore.removeListener(this);
    }
  }, _a.displayName = `DesignComponent(${id})`, _a.propertyControls = propertyControls, _a.supportsConstraints = true, _a.defaultProps = {
    _sizeOfMasterOnCanvas: {
      width,
      height
    }
  }, _a;
}
var RenderNodeContext = React90.createContext(null);
var RenderNodeProvider = RenderNodeContext.Provider;

// ../../library/src/render/presentation/Image.tsx
import React91 from "react";
var Image2 = /* @__PURE__ */ React91.forwardRef(function Image3(props, ref) {
  var _a;
  const { background, children, alt, ...rest } = props;
  const style = { ...rest.style };
  if (background) {
    delete style.background;
  }
  const MotionComponent = motion[(_a = props.as) != null ? _a : "div"];
  return /* @__PURE__ */ React91.createElement(MotionComponent, { ...rest, style, ref }, background && /* @__PURE__ */ React91.createElement(BackgroundImageComponent, { image: background, alt }), children);
});

// ../../library/src/render/presentation/PresentationTree.ts
function convertPresentationTree(node, converter, componentDefinitionProvider, getCachedNode, skipCodeComponentPropsCache = false) {
  const cachedNode = getCachedNode && getCachedNode(node);
  if (cachedNode)
    return cachedNode;
  let children;
  if (isCodeComponentContainerPresentation(node)) {
    children = convertCodeComponentContainer(
      componentDefinitionProvider,
      node,
      converter,
      getCachedNode,
      skipCodeComponentPropsCache
    );
  } else if (node.children) {
    children = node.children.map(
      (n) => convertPresentationTree(
        n,
        converter,
        componentDefinitionProvider,
        getCachedNode,
        skipCodeComponentPropsCache
      )
    );
  }
  return converter(node, children);
}
function isCodeComponentContainerPresentation(value) {
  return !!value.codeComponentIdentifier;
}
function convertCodeComponentContainer(componentDefinitionProvider, node, converter, getCachedNode, skipCodeComponentPropsCache = false) {
  var _a;
  const codeComponentChildren = node.getComponentChildren ? node.getComponentChildren(componentDefinitionProvider) : [];
  const codeComponentSlots = node.getComponentSlotChildren ? node.getComponentSlotChildren(componentDefinitionProvider) : {};
  let codeComponentPresentation;
  const props = node.getCodeComponentProps ? node.getCodeComponentProps(componentDefinitionProvider, { skipCache: skipCodeComponentPropsCache }) : void 0;
  if (node.cache.codeComponentPresentation) {
    codeComponentPresentation = node.cache.codeComponentPresentation;
    if (!isShallowEqualArray(codeComponentPresentation.children, codeComponentChildren)) {
      codeComponentPresentation.cache.reactElement = null;
      codeComponentPresentation.children = codeComponentChildren;
    }
    if (!isEqual(codeComponentPresentation.props, props)) {
      codeComponentPresentation.cache.reactElement = null;
      codeComponentPresentation.cache.props = null;
      codeComponentPresentation.props = props;
    }
  } else {
    const { id: containerId, codeComponentIdentifier: identifier, codeComponentPackageVersion } = node;
    node.cache.codeComponentPresentation = codeComponentPresentation = new CodeComponentPresentation(
      containerId + identifier,
      identifier,
      codeComponentPackageVersion,
      props,
      codeComponentChildren
    );
  }
  codeComponentPresentation.props.placeholders = node.cache.placeholders;
  const slotKeys = Object.keys(codeComponentSlots);
  if (slotKeys.length) {
    codeComponentPresentation.props = { ...codeComponentPresentation.props };
    codeComponentPresentation.props.__slotKeys = slotKeys;
    for (const slotKey of slotKeys) {
      const slotChildren = (_a = codeComponentSlots[slotKey]) == null ? void 0 : _a.map(
        (child) => convertPresentationTree(
          child,
          converter,
          componentDefinitionProvider,
          getCachedNode,
          skipCodeComponentPropsCache
        )
      );
      codeComponentPresentation.props[slotKey] = slotChildren;
    }
  }
  return [
    converter(
      codeComponentPresentation,
      codeComponentPresentation.children.map(
        (child) => convertPresentationTree(
          child,
          converter,
          componentDefinitionProvider,
          getCachedNode,
          skipCodeComponentPropsCache
        )
      )
    )
  ];
}
var CodeComponentPresentation = class {
  constructor(id, componentIdentifier, packageVersion, props, children, codeOverrideIdentifier) {
    this.id = id;
    this.componentIdentifier = componentIdentifier;
    this.packageVersion = packageVersion;
    this.props = props;
    this.children = children;
    this.codeOverrideIdentifier = codeOverrideIdentifier;
    this.cache = {};
  }
  getProps() {
    return {
      ...this.props,
      id: this.id,
      key: this.id
    };
  }
  rect(_parentSizeInfo) {
    return { x: 0, y: 0, width: 0, height: 0 };
  }
};

// ../../library/src/render/presentation/RichText.tsx
import React93, { Children, cloneElement, forwardRef as forwardRef4, isValidElement, useContext as useContext14, useRef as useRef14 } from "react";

// ../../library/src/render/presentation/DeprecatedRichText.tsx
import * as React92 from "react";
import { useRef as useRef13 } from "react";
var htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var reUnescapedHtml = /[&<>"']/g;
var reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
function escapeHTML2(str) {
  return str && reHasUnescapedHtml.test(str) ? str.replace(reUnescapedHtml, (chr) => htmlEscapes[chr]) : str || "";
}
var deprecatedRichTextPlaceholder = "{{ text-placeholder }}";
var richTextWrapperClassName = "rich-text-wrapper";
var DeprecatedRichText = /* @__PURE__ */ React92.forwardRef(
  function Text3(props, forwardedRef) {
    var _a, _b;
    const {
      id,
      name,
      html,
      htmlFromDesign,
      text,
      textFromDesign,
      fonts = [],
      width,
      height,
      left,
      right,
      top,
      bottom,
      center,
      className,
      stylesPresetsClassName,
      visible = true,
      opacity,
      rotation = 0,
      verticalAlignment = "top",
      isEditable = false,
      willChangeTransform,
      environment: environment2 = RenderTarget.current,
      withExternalLayout = false,
      positionSticky,
      positionStickyTop,
      positionStickyRight,
      positionStickyBottom,
      positionStickyLeft,
      __htmlStructure,
      __fromCanvasComponent = false,
      _forwardedOverrideId,
      _forwardedOverrides,
      _usesDOMRect,
      children,
      ...rest
    } = props;
    const parentSize = useParentSize();
    const layoutId = useLayoutId(props);
    const fallbackLayoutRef = useRef13(null);
    const layoutRef = forwardedRef != null ? forwardedRef : fallbackLayoutRef;
    const { navigate, getRoute } = useRouter();
    const currentRoute = useCurrentRoute();
    useRoutePreloader((_a = props.preload) != null ? _a : []);
    useMeasureLayout(props, layoutRef);
    const inCodeComponent = React92.useContext(ComponentContainerContext);
    const isOnCanvas = useIsOnFramerCanvas();
    let textOrOverride = text;
    const forwardedOverrideId = _forwardedOverrideId != null ? _forwardedOverrideId : id;
    if (forwardedOverrideId && _forwardedOverrides) {
      const override = _forwardedOverrides[forwardedOverrideId];
      if (typeof override === "string") {
        textOrOverride = override;
      }
    }
    let innerHTML = "";
    if (textOrOverride) {
      const escapedText = escapeHTML2(textOrOverride);
      innerHTML = __htmlStructure ? __htmlStructure.replace(deprecatedRichTextPlaceholder, escapedText) : `<p>${escapedText}</p>`;
    } else if (html) {
      innerHTML = html;
    } else if (textFromDesign) {
      const escapedText = escapeHTML2(textFromDesign);
      innerHTML = __htmlStructure ? __htmlStructure.replace(deprecatedRichTextPlaceholder, escapedText) : `<p>${escapedText}</p>`;
    } else if (htmlFromDesign) {
      innerHTML = htmlFromDesign;
    }
    const implicitPathVariables = useImplicitPathVariables();
    const innerHTMLWithReplacedFramerPageLinks = React92.useMemo(() => {
      if (isOnCanvas || !getRoute || !currentRoute)
        return innerHTML;
      return replaceFramerPageLinks(innerHTML, getRoute, currentRoute, implicitPathVariables);
    }, [isOnCanvas, innerHTML, getRoute, currentRoute, implicitPathVariables]);
    React92.useEffect(() => {
      const container = layoutRef.current;
      if (container === null)
        return;
      function interceptPageLinks(event) {
        const anchorElement = findAnchorElement(event.target, layoutRef.current);
        if (event.metaKey || !navigate || !anchorElement || anchorElement.getAttribute("target") === "_blank" /* _blank */)
          return;
        const didNavigate = navigateFromAttributes(navigate, anchorElement, implicitPathVariables);
        if (didNavigate) {
          event.preventDefault();
        }
      }
      container.addEventListener("click", interceptPageLinks);
      return () => {
        container.removeEventListener("click", interceptPageLinks);
      };
    }, [navigate, implicitPathVariables]);
    useLoadFonts(fonts, __fromCanvasComponent, layoutRef);
    if (!visible)
      return null;
    injectComponentCSSRules();
    const isHidden2 = isEditable && environment2() === "CANVAS" /* canvas */;
    const style = {
      outline: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: convertVerticalAlignment2(verticalAlignment),
      opacity: isHidden2 ? 0 : opacity,
      flexShrink: 0
    };
    const restrictedRenderTarget = RenderTarget.hasRestrictions();
    const frame2 = calculateRect(props, parentSize || 0 /* Unknown */, false);
    const isAutoSized2 = _usesDOMRect && (width === "auto" || height === "auto");
    const hasTransformTemplate = !!props.transformTemplate || !frame2 || !restrictedRenderTarget || __fromCanvasComponent || isAutoSized2;
    const template = hasTransformTemplate ? (_b = props.transformTemplate) != null ? _b : transformTemplate(center) : void 0;
    if (!withExternalLayout) {
      if (frame2 && restrictedRenderTarget && !isAutoSized2) {
        const rotate = Animatable.getNumber(rotation).toFixed(4);
        style.transform = `translate(${frame2.x}px, ${frame2.y}px) rotate(${rotate}deg)`;
        style.width = frame2.width;
        style.minWidth = frame2.width;
        style.height = frame2.height;
      } else {
        style.left = left;
        style.right = right;
        style.top = top;
        style.bottom = bottom;
        style.width = width;
        style.height = height;
        style.rotate = rotation;
      }
      if (positionSticky) {
        if (!isOnCanvas || inCodeComponent) {
          style.position = "sticky";
          style.willChange = "transform";
          style.zIndex = 1;
          style.top = positionStickyTop;
          style.right = positionStickyRight;
          style.bottom = positionStickyBottom;
          style.left = positionStickyLeft;
        }
      } else if (isOnCanvas && (props.positionFixed || props.positionAbsolute)) {
        style.position = "absolute";
      }
    }
    collectFiltersFromProps(props, style);
    collectTextShadowsForProps(props, style);
    if (willChangeTransform) {
      forceLayerBackingWithCSSProperties(style);
    }
    Object.assign(style, props.style);
    return /* @__PURE__ */ React92.createElement(
      motion.div,
      {
        id,
        ref: layoutRef,
        ...rest,
        style,
        layoutId,
        "data-framer-name": name,
        "data-framer-component-type": "DeprecatedRichText",
        "data-center": center,
        className: cx(className, stylesPresetsClassName, richTextWrapperClassName),
        transformTemplate: template,
        dangerouslySetInnerHTML: { __html: innerHTMLWithReplacedFramerPageLinks }
      }
    );
  }
);
function convertVerticalAlignment2(verticalAlignment) {
  switch (verticalAlignment) {
    case "top":
      return "flex-start";
    case "center":
      return "center";
    case "bottom":
      return "flex-end";
  }
}
function useLoadFonts(fonts, fromCanvasComponent, containerRef) {
  const prevFontsRef = useRef13([]);
  if (!isShallowEqualArray(prevFontsRef.current, fonts)) {
    prevFontsRef.current = fonts;
    fontStore.loadWebFontsFromSelectors(fonts).then((results) => {
      if (!fromCanvasComponent || !containerRef.current || RenderTarget.current() !== "CANVAS" /* canvas */)
        return;
      const didLoadNewFonts = results.some(
        (result) => result.status === "fulfilled" && result.value === 1 /* Loaded */
      );
      if (didLoadNewFonts) {
        measureClosestComponentContainer(containerRef.current);
      }
    });
  }
}

// ../../library/src/render/presentation/RichText.tsx
var RichTextContainer = /* @__PURE__ */ forwardRef4(
  (props, ref) => {
    var _a;
    const {
      __fromCanvasComponent = false,
      _forwardedOverrideId,
      _forwardedOverrides,
      _usesDOMRect,
      bottom,
      center,
      children,
      environment: environment2 = RenderTarget.current,
      fonts = [],
      height,
      isEditable = false,
      left,
      name,
      opacity,
      positionSticky,
      positionStickyBottom,
      positionStickyLeft,
      positionStickyRight,
      positionStickyTop,
      right,
      rotation = 0,
      style,
      stylesPresetsClassNames,
      text: plainText,
      top,
      verticalAlignment = "top",
      visible = true,
      width,
      willChangeTransform,
      withExternalLayout = false,
      ...rest
    } = props;
    const parentSize = useParentSize();
    const isOnCanvas = useIsOnFramerCanvas();
    const inCodeComponent = useContext14(ComponentContainerContext);
    const layoutId = useLayoutId(props);
    const fallbackRef = useRef14(null);
    const containerRef = ref != null ? ref : fallbackRef;
    useMeasureLayout(props, containerRef);
    useLoadFonts(fonts, __fromCanvasComponent, containerRef);
    if (!visible)
      return null;
    injectComponentCSSRules();
    const isHidden2 = isEditable && environment2() === "CANVAS" /* canvas */;
    const containerStyle = {
      outline: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: convertVerticalAlignment2(verticalAlignment),
      opacity: isHidden2 ? 0 : opacity,
      flexShrink: 0
    };
    const restrictedRenderTarget = RenderTarget.hasRestrictions();
    const frame2 = calculateRect(props, parentSize || 0 /* Unknown */, false);
    const isAutoSized2 = _usesDOMRect && (width === "auto" || height === "auto");
    const hasTransformTemplate = !!props.transformTemplate || !frame2 || !restrictedRenderTarget || __fromCanvasComponent || isAutoSized2;
    const template = hasTransformTemplate ? (_a = props.transformTemplate) != null ? _a : transformTemplate(center) : void 0;
    if (!withExternalLayout) {
      if (frame2 && restrictedRenderTarget && !isAutoSized2) {
        const rotate = Animatable.getNumber(rotation).toFixed(4);
        containerStyle.transform = `translate(${frame2.x}px, ${frame2.y}px) rotate(${rotate}deg)`;
        containerStyle.width = frame2.width;
        containerStyle.minWidth = frame2.width;
        containerStyle.height = frame2.height;
      } else {
        containerStyle.left = left;
        containerStyle.right = right;
        containerStyle.top = top;
        containerStyle.bottom = bottom;
        containerStyle.width = width;
        containerStyle.height = height;
        containerStyle.rotate = rotation;
      }
      if (positionSticky) {
        if (!isOnCanvas || inCodeComponent) {
          containerStyle.position = "sticky";
          containerStyle.willChange = "transform";
          containerStyle.zIndex = 1;
          containerStyle.top = positionStickyTop;
          containerStyle.right = positionStickyRight;
          containerStyle.bottom = positionStickyBottom;
          containerStyle.left = positionStickyLeft;
        }
      } else if (isOnCanvas && (props.positionFixed || props.positionAbsolute)) {
        containerStyle.position = "absolute";
      }
    }
    collectFiltersFromProps(props, containerStyle);
    collectTextShadowsForProps(props, containerStyle);
    if (willChangeTransform) {
      forceLayerBackingWithCSSProperties(containerStyle);
    }
    Object.assign(containerStyle, style);
    if (layoutId) {
      rest.layout = "preserve-aspect";
    }
    return /* @__PURE__ */ React93.createElement(
      motion.div,
      {
        ...rest,
        ref: containerRef,
        style: containerStyle,
        layoutId,
        transformTemplate: template,
        "data-framer-name": name,
        "data-framer-component-type": "RichTextContainer"
      },
      children && styleRichTextChildren(children, stylesPresetsClassNames, plainText)
    );
  }
);
function styleRichTextChildren(element, stylesPresetsClassNames, plainText) {
  let children = Children.toArray(element.props.children);
  if (isString2(plainText)) {
    children = children.slice(0, 1);
  }
  children = children.map((child) => {
    if (isValidElement(child)) {
      return styleRichTextChildren(child, stylesPresetsClassNames, plainText);
    }
    if (isString2(plainText)) {
      return plainText;
    }
    return child;
  });
  const { ["data-preset-tag"]: dataPresetTag, ...props } = element.props;
  if (isString2(element.type) || isMotionComponent(element.type)) {
    const tag = dataPresetTag || unwrapMotionComponent(element.type) || element.type;
    const stylesPresetClassName = isString2(tag) ? stylesPresetsClassNames == null ? void 0 : stylesPresetsClassNames[tag] : void 0;
    props.className = cx("framer-text", props.className, stylesPresetClassName);
  }
  return cloneElement(element, props, ...children);
}
var RichText = /* @__PURE__ */ forwardRef4(
  ({ children, html, htmlFromDesign, ...props }, ref) => {
    const content = html || children || htmlFromDesign;
    if (isString2(content)) {
      if (!props.stylesPresetsClassName && isObject2(props.stylesPresetsClassNames)) {
        props.stylesPresetsClassName = Object.values(props.stylesPresetsClassNames).join(" ");
      }
      const contentProp = {
        // We need to use the original prop name.
        [isString2(html) ? "html" : "htmlFromDesign"]: content
      };
      return /* @__PURE__ */ React93.createElement(DeprecatedRichText, { ...props, ...contentProp, ref });
    }
    if (isValidElement(content)) {
      if (!props.stylesPresetsClassNames && isString2(props.stylesPresetsClassName)) {
        const [h1, h2, h3, p, a] = props.stylesPresetsClassName.split(" ");
        if (h1 === void 0 || h2 === void 0 || h3 === void 0 || p === void 0 || a === void 0) {
          console.warn(`Encountered invalid stylesPresetsClassNames: ${props.stylesPresetsClassNames}`);
        } else {
          props.stylesPresetsClassNames = { h1, h2, h3, p, a };
        }
      }
      return /* @__PURE__ */ React93.createElement(RichTextContainer, { ...props, ref }, content);
    }
    return null;
  }
);

// ../../library/src/render/traits/Shape.ts
var key6 = "calculatedPaths";
function withShape(target) {
  return key6 in target;
}

// ../../library/src/render/types/Line.ts
var Line = /* @__PURE__ */ (() => {
  function Line2(a, b) {
    return { a, b };
  }
  Line2.intersection = (lineA, lineB) => {
    const x1 = lineA.a.x;
    const y1 = lineA.a.y;
    const x2 = lineA.b.x;
    const y2 = lineA.b.y;
    const x3 = lineB.a.x;
    const y3 = lineB.a.y;
    const x4 = lineB.b.x;
    const y4 = lineB.b.y;
    const d = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (d === 0) {
      return null;
    }
    const xi = ((x3 - x4) * (x1 * y2 - y1 * x2) - (x1 - x2) * (x3 * y4 - y3 * x4)) / d;
    const yi = ((y3 - y4) * (x1 * y2 - y1 * x2) - (y1 - y2) * (x3 * y4 - y3 * x4)) / d;
    return { x: xi, y: yi };
  };
  Line2.isOrthogonal = (line) => {
    return line.a.x === line.b.x || line.a.y === line.b.y;
  };
  Line2.perpendicular = (line, pointOnLine) => {
    const deltaX = line.a.x - line.b.x;
    const deltaY = line.a.y - line.b.y;
    const pointB = Point(pointOnLine.x - deltaY, pointOnLine.y + deltaX);
    return Line2(pointB, pointOnLine);
  };
  Line2.projectPoint = (line, point) => {
    const perp = Line2.perpendicular(line, point);
    return Line2.intersection(line, perp);
  };
  return Line2;
})();

// ../../library/src/render/types/Size.ts
var Size = /* @__PURE__ */ (() => {
  function Size2(width, height) {
    return { width, height };
  }
  Size2.equals = (sizeA, sizeB) => {
    if (sizeA === sizeB)
      return true;
    if (!sizeA || !sizeB)
      return false;
    return sizeA.width === sizeB.width && sizeA.height === sizeB.height;
  };
  Size2.update = (fromSize, toSize, keepAspectRatio = false) => {
    let { width, height } = fromSize;
    const sizeRatio = width / height;
    width = toSize.width !== void 0 ? toSize.width : width;
    height = toSize.height !== void 0 ? toSize.height : height;
    if (keepAspectRatio) {
      if (toSize.width === void 0 && toSize.height !== void 0) {
        width = toSize.height * sizeRatio;
      }
      if (toSize.width !== void 0 && toSize.height === void 0 && sizeRatio !== 0) {
        height = toSize.width / sizeRatio;
      }
    }
    return { width, height };
  };
  Size2.subtract = (sizeA, sizeB) => {
    return {
      width: Math.max(0, sizeA.width - sizeB.width),
      height: Math.max(0, sizeA.height - sizeB.height)
    };
  };
  Size2.zero = Size2(0, 0);
  Size2.isZero = function(size2) {
    return size2 === Size2.zero || size2.width === 0 && size2.height === 0;
  };
  Size2.defaultIfZero = function(width, height, size2) {
    if (Size2.isZero(size2)) {
      return Size2(width, height);
    }
    return size2;
  };
  return Size2;
})();

// ../../library/src/render/utils/annotateTypeOnStringify.ts
function annotateTypeOnStringify(ctor, typeName) {
  const existingToJSON = ctor.prototype.toJSON;
  ctor.prototype.toJSON = function() {
    const base = existingToJSON ? existingToJSON.apply(this) : this;
    return Object.assign({}, base, { __type__: typeName });
  };
  return ctor;
}
function isOfAnnotatedType(object, typeName) {
  return object && object.__type__ && object.__type__ === typeName;
}

// ../../library/src/render/utils/dom.ts
var frameFromElement = (element) => {
  const frame2 = Rect.fromRect(element.getBoundingClientRect());
  frame2.x = frame2.x + safeWindow.scrollX;
  frame2.y = frame2.y + safeWindow.scrollY;
  return frame2;
};
var frameFromElements = (elements) => {
  return Rect.merge(...elements.map(frameFromElement));
};
var convertToPageFrame = (frame2, element) => {
  const point = convertToPagePoint(frame2, element);
  return {
    x: point.x,
    y: point.y,
    width: frame2.width,
    height: frame2.height
  };
};
var convertFromPageFrame = (frame2, element) => {
  const point = convertFromPagePoint(frame2, element);
  return {
    x: point.x,
    y: point.y,
    width: frame2.width,
    height: frame2.height
  };
};
var getPageFrame = (element) => {
  const rect = element.getBoundingClientRect();
  return {
    x: rect.left + safeWindow.scrollX,
    y: rect.top + safeWindow.scrollY,
    width: rect.width,
    height: rect.height
  };
};
var fromEventForPage = (event) => {
  return {
    x: event.pageX,
    y: event.pageY
  };
};
var fromEventForClient = (event) => {
  return {
    x: event.clientX,
    y: event.clientY
  };
};
var convertToPagePoint = (point, element) => {
  const frame2 = getPageFrame(element);
  return {
    x: point.x + frame2.x,
    y: point.y + frame2.y
  };
};
var convertFromPagePoint = (point, element) => {
  const frame2 = getPageFrame(element);
  return {
    x: point.x - frame2.x,
    y: point.y - frame2.y
  };
};
var dispatchKeyDownEvent = (keyCode, options = {}) => {
  const keyboardEvent = new KeyboardEvent("keydown", {
    bubbles: true,
    keyCode,
    ...options
  });
  const activeElement = document.activeElement;
  if (activeElement) {
    activeElement.dispatchEvent(keyboardEvent);
  }
};
var DOM = {
  frameFromElement,
  frameFromElements,
  convertToPageFrame,
  convertFromPageFrame,
  getPageFrame,
  fromEventForPage,
  fromEventForClient,
  convertToPagePoint,
  convertFromPagePoint
};

// ../../library/src/render/utils/getConfigFromURL.ts
function getConfigFromPreviewURL(windowURLString = safeWindow.location.href) {
  if (!windowURLString) {
    throw new Error(
      `getConfigFromURL() called without url argument (location.href = "${safeWindow.location.href}")`
    );
  }
  const params = new URL(windowURLString).searchParams;
  const imageBaseURL = params.get("imageBaseURL") || "";
  const projectURL = params.get("projectURL") || "";
  const showConsole = params.get("console") === "1";
  const disableDevice = params.get("device") === "0";
  return { imageBaseURL, projectURL, showConsole, disableDevice };
}
function getConfigFromVekterURL(windowURLString = safeWindow.location.href) {
  if (!windowURLString) {
    throw new Error(
      `getConfigFromURL() called without url argument (location.href = "${safeWindow.location.href}")`
    );
  }
  const hash2 = decodeURIComponent(new URL(windowURLString).hash.slice(1));
  const [documentURL, imageBaseURL, projectURL] = hash2.split("#&#");
  return { documentURL, imageBaseURL, projectURL };
}

// ../../library/src/render/utils/gradientForShape.tsx
function gradientForShape(nodeId, node) {
  if (LinearGradient.isLinearGradient(node.fill)) {
    return elementPropertiesForLinearGradient(node.fill, nodeId);
  }
  if (RadialGradient.isRadialGradient(node.fill)) {
    return elementPropertiesForRadialGradient(node.fill, nodeId);
  }
  return void 0;
}

// ../../library/src/render/utils/throttle.ts
function throttle(fn, time2) {
  let previous = 0;
  let timeout;
  const later = (...args) => {
    previous = Date.now();
    timeout = void 0;
    fn(...args);
  };
  return (...args) => {
    const now = Date.now();
    const remaining = time2 - (now - previous);
    if (remaining <= 0 || remaining > time2) {
      if (timeout) {
        safeWindow.clearTimeout(timeout);
        timeout = void 0;
      }
      previous = now;
      fn(...args);
    } else if (!timeout) {
      timeout = safeWindow.setTimeout(later, remaining, ...args);
    }
  };
}

// ../../library/src/utils/addActionControls.ts
function addActionControls(action, title, controls) {
  runtime.addActionControls(action, title, controls);
}

// ../../library/src/utils/addFonts.ts
function addFonts(component, fonts) {
  Object.assign(component, { fonts });
}
function getFonts(component) {
  const fonts = component.fonts;
  return fonts || [];
}

// ../../library/src/utils/network.ts
function loadJSON(url) {
  return fetch(url, { mode: "cors" }).then((res) => res.json());
}

// ../../library/src/utils/inspectObjectType.ts
function inspectObjectType(item) {
  let className;
  if ((item.constructor !== null ? item.constructor.name : void 0) !== null && (item.constructor !== null ? item.constructor.name : void 0) !== "Object") {
    return item.constructor.name;
  }
  const extract = function(str) {
    if (!str) {
      return null;
    }
    const regex2 = /\[object (\w+)\]/;
    const match = regex2.exec(str);
    if (match) {
      return match[1];
    }
    return null;
  };
  if (item.toString) {
    className = extract(item.toString());
    if (className) {
      return className;
    }
  }
  if (item.constructor !== null ? item.constructor.toString : void 0) {
    className = extract(item.constructor !== null ? item.constructor.toString() : void 0);
    if (className) {
      return className.replace("Constructor", "");
    }
  }
  return "Object";
}

// ../../library/src/utils/inspect.ts
function inspect(item, max, l) {
  if (max === void 0) {
    max = 5;
  }
  if (l === void 0) {
    l = 0;
  }
  if (item === null) {
    return "null";
  }
  if (item === void 0) {
    return "undefined";
  }
  if (isFunction(item.toInspect)) {
    return item.toInspect();
  }
  if (isString2(item)) {
    return `"${item}"`;
  }
  if (isNumber(item)) {
    return `${item}`;
  }
  if (isFunction(item)) {
    let code = item.toString().slice("function ".length).replace(/\n/g, "").replace(/\s+/g, " ");
    const limit = 50;
    if (code.length > limit && l > 0) {
      code = `${code.slice(0, +limit + 1 || void 0).trim()}\u2026 }`;
    }
    return `<Function ${code}>`;
  }
  if (isArray(item)) {
    if (l > max) {
      return "[...]";
    }
    return `[${item.map((i) => inspect(i, max, (l || 0) + 1)).join(", ")}]`;
  }
  if (isObject2(item)) {
    let objectInfo;
    const objectType = inspectObjectType(item);
    if (/HTML\w+?Element/.test(objectType)) {
      return `<${objectType}>`;
    }
    if (l > max) {
      objectInfo = "{...}";
    } else {
      const itemKeys = Object.keys(item);
      objectInfo = `{${itemKeys.map((k) => `${k}:${inspect(item[k], max, (l || 0) + 1)}`).join(", ")}}`;
    }
    if (objectType === "Object") {
      return objectInfo;
    }
    return `<${objectType} ${objectInfo}>`;
  }
  return `${item}`;
}

// ../../library/src/utils/print.ts
function print(...args) {
  const line = args.map((arg) => {
    return inspect(arg);
  }).join(", ");
  console.log(line);
}

// ../../library/src/utils/useInitialRouteComponent.ts
import { useEffect as useEffect12, useState as useState2 } from "react";
function initialRoutComponent(component) {
  if (!component)
    return null;
  if (withPreload(component))
    return null;
  return component;
}
function useInitialRouteComponent(routes, homeNodeId) {
  var _a;
  const InitialRouteComponent = (_a = routes[homeNodeId]) == null ? void 0 : _a.page;
  const [RouteComponent2, setRouteComponent] = useState2(
    initialRoutComponent(InitialRouteComponent)
  );
  useEffect12(() => {
    if (withPreload(InitialRouteComponent)) {
      InitialRouteComponent.preload().then(setRouteComponent);
    }
  }, []);
  return RouteComponent2;
}

// ../../library/package.json
var package_default = {
  name: "framer",
  version: "2.3.0",
  main: "build/index.js",
  type: "module",
  exports: {
    ".": "./build/index.js",
    "./package.json": "./package.json",
    "./*": "./build/*"
  },
  files: [
    "build",
    "CHANGELOG.md",
    "README.md",
    "LICENSE.md",
    "postinstall.cjs"
  ],
  types: "./build/index.d.ts",
  author: "Framer",
  license: "MIT",
  scripts: {
    prepublishOnly: "make build",
    coverage: "yarn :jest --coverage",
    lint: "yarn :eslint ./src --ext .ts,.tsx --format codeframe --quiet",
    "lint:fix": "yarn lint --fix",
    test: "yarn :jest",
    watch: "yarn :jest --watch",
    postinstall: "node postinstall.cjs"
  },
  dependencies: {
    "@juggle/resize-observer": "^3.3.1",
    eventemitter3: "^3.1.0",
    fontfaceobserver: "^2.1.0",
    "hoist-non-react-statics": "^3.3.2",
    hsluv: "^0.0.3"
  },
  devDependencies: {
    "@framerjs/router": "workspace:src/router",
    "@testing-library/dom": "^8.19.1",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^14.4.3",
    "@types/google.fonts": "1.0.3",
    "@types/hsluv": "https://github.com/framer/typed_hsluv#bump",
    "@types/node": "^18.11.18",
    "@types/react": "^18.0.26",
    "@types/react-dom": "^18.0.10",
    "@types/yargs": "^17.0.19",
    "@typescript-eslint/eslint-plugin": "^5.48.0",
    "@typescript-eslint/parser": "^5.48.0",
    chalk: "^4.1.2",
    eslint: "^8.31.0",
    immutable: "^3.8.2",
    "jest-diff": "^29.3.1",
    "jest-junit": "^15.0.0",
    react: "^18.2.0",
    "react-dom": "^18.2.0",
    rollup: "^3.17.2",
    "rollup-plugin-dts": "^5.1.0",
    semver: "^7.3.8",
    "style-value-types": "^5.1.2",
    typescript: "^4.9.5",
    yargs: "^17.6.2"
  },
  peerDependencies: {
    "framer-motion": "^7.6.12",
    react: "^18.2.0",
    "react-dom": "^18.2.0"
  },
  tsdoc: {
    tsdocFlavor: "AEDoc"
  },
  framer: {
    components: [
      {
        name: "Scroll",
        children: true,
        properties: [
          {
            key: "direction",
            title: "Direction",
            kind: "enum",
            options: [
              "horizontal",
              "vertical",
              "both"
            ]
          }
        ]
      },
      {
        name: "Page"
      }
    ]
  }
};

// ../../library/src/version.ts
var { version } = package_default;

// ../../library/src/animation/Motion/addChildHack.ts
MotionValue.prototype.addChild = function({ transformer = (v) => v }) {
  const child = motionValue(transformer(this.get()));
  this.onChange((v) => child.set(transformer(v)));
  return child;
};

// ../../library/src/indexInternal.ts
if (false) {
  MainLoop.start();
}
export {
  AnchorLinkTarget,
  Animatable,
  AnimatePresence,
  AnimateSharedLayout,
  AnimationType,
  AnyInterpolation,
  AutomaticLayoutIds,
  BackgroundImage,
  BezierAnimator,
  BoxShadow,
  CanvasStore,
  Color,
  ColorFormat,
  ColorMixModelType,
  ComponentContainerContext,
  ConstraintMask,
  ConstraintValues,
  Container,
  ControlType,
  ConvertColor,
  CustomProperties,
  CustomPropertiesContext,
  CycleVariantState,
  DOM,
  Data,
  DataContext,
  DataObserver,
  DataObserverContext,
  DeprecatedComponentContainer,
  DeprecatedFrameWithEvents,
  DeprecatedLayoutGroupContext,
  Device,
  DeviceCodeComponent,
  DimensionType,
  DragControls,
  Draggable,
  EmptyState,
  ErrorPlaceholder,
  FlatTree,
  Frame,
  FrameWithMotion,
  FramerAnimation,
  FramerEvent,
  FramerEventListener,
  FramerEventSession,
  GamepadContext,
  GeneratedComponentContext,
  Image2 as Image,
  InternalID,
  Layer,
  LayoutGroup,
  DeprecatedLayoutGroupContext as LayoutGroupContext,
  LayoutIdContext,
  LazyMotion,
  Line,
  LinearGradient,
  Link,
  MainLoop,
  MotionConfig,
  MotionConfigContext,
  MotionContext,
  MotionSetup,
  MotionValue,
  NavigateTo,
  NavigationWrapper as Navigation,
  NavigationCallbackProvider,
  NavigationConsumer,
  NavigationTransitionType,
  NotFoundError,
  ObservableObject,
  Page3 as Page,
  PageRoot,
  ParentSizeState,
  PathSegment,
  PathVariablesContext,
  Point,
  PresenceContext,
  PropertyOverrides,
  PropertyStore,
  RadialGradient,
  Rect,
  RenderNodeProvider,
  RenderTarget,
  Reorder,
  RichText,
  SSRVariants,
  SVG,
  Scroll,
  Shadow,
  Size,
  SpringAnimator,
  Stack,
  StyleSheetContext,
  SwitchLayoutGroupContext,
  Text,
  TypefaceSourceNames,
  ValueInterpolation,
  VariantSelector,
  Vector,
  VectorGroup,
  VisualElement,
  WindowContext,
  WithNavigator,
  WithOverride,
  _injectRuntime,
  addActionControls,
  addFonts,
  addPointerEvent,
  addPointerInfo,
  addPropertyControls,
  addScaleCorrector,
  animate2 as animate,
  animateVisualElement,
  animationControls,
  animations,
  annotateTypeOnStringify,
  anticipate,
  backIn,
  backInOut,
  backOut,
  backgroundImageFromProps,
  buildTransform,
  calcLength,
  calculateRect,
  callEach,
  checkTargetForNewValues,
  circIn,
  circInOut,
  circOut,
  clamp,
  collectVisualStyleFromProps,
  combinedCSSRulesForPreview,
  constraintsEnabled,
  convertPresentationTree,
  convertPropsToDeviceOptions,
  createBox,
  createData,
  createDesignComponent,
  createDomMotionComponent,
  createFramerPageLink,
  createMotionComponent,
  cssBackgroundSize,
  cubicBezier,
  cx,
  debounce,
  defaultDeviceProps,
  delay,
  devicePresets,
  dispatchKeyDownEvent,
  distance,
  distance2D,
  domAnimation,
  domMax,
  easeIn,
  easeInOut,
  easeOut,
  environment,
  executeInRenderEnvironment,
  filterProps,
  finiteNumber,
  fontStore,
  forceLayerBackingWithCSSProperties,
  fraction,
  frameData,
  frameFromElement,
  frameFromElements,
  framerAppearAnimationScriptKey,
  framerAppearEffects,
  framerAppearIdKey,
  framerAppearTransformTemplateToken,
  getComponentSize,
  getConfigFromPreviewURL,
  getConfigFromPreviewURL as getConfigFromURL,
  getConfigFromVekterURL,
  getDevicePreset,
  getFonts,
  getMeasurableCodeComponentChildren,
  getMergedConstraintsProps,
  getPropertyControls,
  getWhereExpressionFromPathVariables,
  gradientForShape,
  imagePatternPropsForFill,
  imageUrlForAsset,
  inferInitialRouteFromPath,
  injectComponentCSSRules,
  installFlexboxGapWorkaroundIfNeeded,
  isAnimatable,
  isBrowser,
  isDesignDefinition,
  isDragActive,
  isEqual,
  isFiniteNumber,
  isFractionDimension,
  isFramerGamepadKeydownData,
  isFramerPageLink,
  isGapEnabled,
  isMotionComponent,
  isMotionValue2 as isMotionValue,
  isOfAnnotatedType,
  isOverride,
  isReactDefinition,
  isShallowEqualArray,
  isStraightCurve,
  isValidMotionProp,
  lazy,
  loadFont,
  loadJSON,
  localPackageFallbackIdentifier,
  localShadowFrame,
  m,
  makePaddingString,
  makeUseVisualState,
  memoize2 as memoize,
  mix,
  modulate,
  motion,
  motionValue,
  optimizeAppear,
  optimizeAppearTransformTemplate,
  optimizedAppearDataAttribute,
  paddingFromProps,
  parseFramerPageLink,
  parseVariant,
  pathDefaults,
  pipe,
  print,
  propsForLink,
  removeHiddenBreakpointLayers,
  resolveLink,
  resolveMotionValue,
  roundWithOffset,
  roundedNumber,
  roundedNumberString,
  serverURL,
  setGlobalRenderEnvironment,
  sharedSVGManager,
  shouldOpenLinkInNewTab,
  spring,
  startAnimation,
  startOptimizedAppearAnimation,
  sync,
  systemTypefaceName,
  throttle,
  toFlexDirection,
  toJustifyOrAlignment,
  toSVGPath,
  transform,
  transformString,
  transformTemplate,
  unwrapMotionComponent,
  useActiveTargetCallback,
  useActiveVariantCallback,
  useAddVariantProps,
  useAnimatedState,
  useAnimation,
  useAnimationControls,
  useAnimationFrame,
  useBreakpointVariants,
  useCurrentPathVariables,
  useCurrentRouteId,
  useCycle,
  useDataRecord,
  useAnimatedState as useDeprecatedAnimatedState,
  useInvertedScale as useDeprecatedInvertedScale,
  useDomEvent,
  useDragControls,
  useDynamicRefs,
  useElementScroll,
  useForceUpdate,
  useGamepad,
  useHotkey,
  useHydratedBreakpointVariants,
  useInView,
  useInitialRouteComponent,
  useInstantLayoutTransition,
  useInstantTransition,
  useInvertedScale,
  useIsInCurrentNavigationTarget,
  useIsOnFramerCanvas,
  useIsPresent,
  useIsomorphicLayoutEffect,
  useMeasureLayout,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useNavigate,
  useNavigation,
  useObserveData,
  useOnAppear,
  useOnCurrentTargetChange,
  useOnVariantChange,
  useOverlayState,
  usePresence,
  usePrototypeNavigate,
  useProvidedWindow,
  useQueryData,
  useReducedMotion,
  useReducedMotionConfig,
  useRenderEnvironment,
  useResetProjection,
  useRoute,
  useRouteAnchor,
  useRouteElementId,
  useRouteHandler,
  useRouter,
  useScroll,
  useSpring,
  useTime,
  useTransform,
  useUnmountEffect,
  useVariantState,
  useVelocity,
  useViewportScroll,
  useVisualElementContext,
  useWillChange,
  valueToDimensionType,
  version,
  withCSS,
  withFX,
  withGeneratedLayoutId,
  withMeasuredSize,
  withOpacity,
  withParallaxTransform,
  withPath,
  withShape,
  withStyleAppearEffect,
  withVariantAppearEffect,
  wrap
};
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=framer.KJMZRBCT.js.map
