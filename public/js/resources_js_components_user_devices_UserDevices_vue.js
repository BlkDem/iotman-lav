"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_user_devices_UserDevices_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/devices/DevicesCombo.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/devices/DevicesCombo.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rest_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rest_api */ "./resources/js/rest_api.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DeviceCombo',
  props: ["id"],
  data: function data() {
    return {
      items: [],
      device_id: ""
    };
  },
  created: function created() {
    this.getDevices();
    this.device_id = this.id;
  },
  methods: {
    getDevices: function getDevices() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(_rest_api__WEBPACK_IMPORTED_MODULE_0__["default"].api_devices_read).then(function (response) {
                return response.json();
              }).then(function (response) {
                _this.items = response.data;
              })["catch"](function (err) {
                return console.log(err);
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getDeviceID: function getDeviceID() {
      return this.device_id;
    },
    setDeviceID: function setDeviceID($id) {
      console.log($id);
      this.device_id = $id;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/AddUserDevice.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/AddUserDevice.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_PopupModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/common/PopupModal.vue */ "./resources/js/components/common/PopupModal.vue");
/* harmony import */ var _strings_constants_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../strings_constants/strings */ "./resources/js/components/strings_constants/strings.js");
/* harmony import */ var _components_devices_DevicesCombo_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/devices/DevicesCombo.vue */ "./resources/js/components/devices/DevicesCombo.vue");
/* harmony import */ var _components_user_devices_UsersCombo_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/user_devices/UsersCombo.vue */ "./resources/js/components/user_devices/UsersCombo.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AddUserDevice',
  components: {
    PopupModal: _components_common_PopupModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    DeviceCombo: _components_devices_DevicesCombo_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    UserCombo: _components_user_devices_UsersCombo_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      // Parameters that change depending on the type of dialogue
      edit_mode: false,
      title: undefined,
      message: undefined,
      // Main text content
      user_device_name: undefined,
      user_device_pass: undefined,
      device_desc: undefined,
      device_hwid: undefined,
      device_id: undefined,
      user_id: undefined,
      okButton: undefined,
      // Text for confirm button; leave it empty because we don't know what we're using it for
      cancelButton: _strings_constants_strings__WEBPACK_IMPORTED_MODULE_1__["default"].CANCEL_STRING,
      // text for cancel button

      // Private variables
      resolvePromise: undefined,
      rejectPromise: undefined
    };
  },
  methods: {
    showDialogue: function showDialogue() {
      var _this = this;
      var optsAdd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      //console.log(optsAdd)
      this.edit_mode = optsAdd.edit_mode;
      this.title = optsAdd.title;
      this.message = optsAdd.message;
      this.user_device_name = optsAdd.user_device_name;
      this.device_desc = optsAdd.device_desc;
      this.device_hwid = optsAdd.device_hwid;
      this.user_device_pass = optsAdd.user_device_pass;
      this.device_id = optsAdd.device_id;
      this.user_id = optsAdd.user_id;
      this.okButton = optsAdd.okButton;
      if (optsAdd.cancelButton) {
        this.cancelButton = optsAdd.cancelButton;
      }
      this.$refs.popup.open();

      // Return promise so the caller can get results
      return new Promise(function (resolve, reject) {
        _this.resolvePromise = resolve;
        _this.rejectPromise = reject;
      });
    },
    _confirm: function _confirm() {
      this.user_id = this.$refs.users_combo.getUserID();
      this.device_id = this.$refs.devices_combo.getDeviceID();
      this.$refs.popup.close();
      this.resolvePromise(true, this);
    },
    _cancel: function _cancel() {
      this.$refs.popup.close();
      this.resolvePromise(false);
      // Or you can throw an error
      // this.rejectPromise(new Error('User cancelled the dialogue'))
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/UserDevices.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/UserDevices.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_ConfirmDialogue_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/common/ConfirmDialogue.vue */ "./resources/js/components/common/ConfirmDialogue.vue");
/* harmony import */ var _AddUserDevice_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddUserDevice.vue */ "./resources/js/components/user_devices/AddUserDevice.vue");
/* harmony import */ var _components_common_Paginator_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/common/Paginator.vue */ "./resources/js/components/common/Paginator.vue");
/* harmony import */ var _components_strings_constants_user_devices_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/strings_constants/user_devices/index */ "./resources/js/components/strings_constants/user_devices/index.js");
/* harmony import */ var _strings_constants_strings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../strings_constants/strings.js */ "./resources/js/components/strings_constants/strings.js");
/* harmony import */ var _rest_api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../rest_api.js */ "./resources/js/rest_api.js");
/* harmony import */ var _common_js_Sorting_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/js/Sorting.js */ "./resources/js/components/common/js/Sorting.js");
/* harmony import */ var _common_js_ParsingErrors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/js/ParsingErrors.js */ "./resources/js/components/common/js/ParsingErrors.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ConfirmDialogue: _components_common_ConfirmDialogue_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    AddUserDevice: _AddUserDevice_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Paginator: _components_common_Paginator_vue__WEBPACK_IMPORTED_MODULE_2__["default"] /*MyMqtt*/
  },
  data: function data() {
    var _ref;
    return _ref = {
      userDeviceVisible: true,
      userDevice_filter: "",
      user_devices: [],
      filteredUserDevices: [],
      //filtered array of devices
      dataDescription: "",
      //table data description label
      compactView: true
    }, _defineProperty(_ref, "userDevice_filter", ""), _defineProperty(_ref, "sortOrderStrings", [_strings_constants_strings_js__WEBPACK_IMPORTED_MODULE_4__["default"].SORT_ASC, _strings_constants_strings_js__WEBPACK_IMPORTED_MODULE_4__["default"].SORT_DESC]), _defineProperty(_ref, "sortOrder", _strings_constants_strings_js__WEBPACK_IMPORTED_MODULE_4__["default"].SORT_ASC), _defineProperty(_ref, "sortDirection", false), _defineProperty(_ref, "userDeviceVisible", false), _defineProperty(_ref, "sortColumn", "user_device_name"), _defineProperty(_ref, "sortRules", [{
      key: "user_device_name",
      title: _strings_constants_strings_js__WEBPACK_IMPORTED_MODULE_4__["default"].SORT_BY_NAME
    }, {
      key: "id",
      title: _strings_constants_strings_js__WEBPACK_IMPORTED_MODULE_4__["default"].SORT_BY_ID
    }]), _ref;
  },
  created: function created() {
    if (localStorage.UserDeviceCompactView == null) {
      localStorage.UserDeviceCompactView = this.compactView;
    }
    this.dataDescription = _components_strings_constants_user_devices_index__WEBPACK_IMPORTED_MODULE_3__["default"].USER_DEVICE_DATA_DESCRIPTION; //device dataset description
    this.getData();
  },
  mounted: function mounted() {
    if (localStorage.getItem('CompactView')) {
      this.compactView = localStorage.getItem('CompactView') === 'true';
    }
  },
  watch: {
    userDevice_filter: function userDevice_filter() {
      handler: this.doFilter();
    },
    selectSort: function selectSort() {
      handler: this.doSort();
    },
    compactView: function compactView() {
      localStorage.CompactView = this.compactView;
    }
  },
  computed: {
    SortName: function SortName() {
      return _strings_constants_strings_js__WEBPACK_IMPORTED_MODULE_4__["default"].SortingCaption(this.sortColumn, this.sortDirection);
    }
  },
  methods: {
    doSort: function doSort($column) {
      _common_js_Sorting_js__WEBPACK_IMPORTED_MODULE_6__["default"].doSort(this.filteredUserDevices, $column, this.sortDirection);
      this.sortColumn = $column;
    },
    doFilter: function doFilter() {
      var _this = this;
      if (this.filteredUserDevices != this.user_devices) {
        this.filteredUserDevices = this.user_devices;
      }
      var res = this.filteredUserDevices.filter(function (user_device) {
        if (_this.userDevice_filter === "") return true;else return user_device.user_device_name.toLowerCase().indexOf(_this.userDevice_filter.toLowerCase()) > -1;
      });
      if (this.user_devices.length > res.length) {
        this.filteredUserDevices = res;
        this.doSort();
      }
    },
    getData: function getData() {
      var _arguments = arguments,
        _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _currentPage, _itemsPerPage;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _currentPage = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
              _itemsPerPage = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 5;
              fetch(_rest_api_js__WEBPACK_IMPORTED_MODULE_5__["default"].api_user_devices_read_page + _currentPage + "/" + _itemsPerPage).then(function (response) {
                return response.json();
              }).then(function (response) {
                _this2.filteredUserDevices = response.data;
                //MessagesConstants.processDeviceStrings(this.filteredUserDevices);
                _this2.$refs.paginatorUserDevices.setPaginator({
                  pagesCount: response.paginator.PagesCount,
                  currentPage: response.paginator.CurrentPage,
                  itemsPerPage: response.paginator.ItemsPerPage,
                  recordsCount: response.paginator.RecordsCount
                });
                console.log(_this2.filteredUserDevices);
                _this2.filteredUserDevices = _this2.filteredUserDevices.map(function (item) {
                  item.device_desc = item.device_desc == null ? _strings_constants_strings_js__WEBPACK_IMPORTED_MODULE_4__["default"].NO_DESCRIPTION : item.device_desc;
                  return item;
                });
                _this2.user_devices = _this2.filteredUserDevices;
                _this2.doSort(_this2.sortColumn);
              })["catch"](function (err) {
                return console.log(err);
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    doUserDeviceDelete: function doUserDeviceDelete(key, id) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var confirmDelete;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this3.$refs.confirmDialogue.showDialogue({
                title: _components_strings_constants_user_devices_index__WEBPACK_IMPORTED_MODULE_3__["default"].USER_DEVICE_DELETING_CAPTION,
                message: _components_strings_constants_user_devices_index__WEBPACK_IMPORTED_MODULE_3__["default"].USER_DEVICE_DELETING_MESSAGE + '"' + _this3.filteredUserDevices[key].user_device_name + '"?',
                okButton: _components_strings_constants_user_devices_index__WEBPACK_IMPORTED_MODULE_3__["default"].USER_DEVICE_DELETING_CAPTION
              });
            case 2:
              confirmDelete = _context2.sent;
              if (confirmDelete) {
                axios["delete"](_rest_api_js__WEBPACK_IMPORTED_MODULE_5__["default"].api_user_device_delete + id).then(function (resp) {
                  _this3.filteredUserDevices.splice(key, 1);
                  _this3.user_devices = _this3.filteredUserDevices;
                  // console.log(key, id, " - deleted");
                  _this3.$root.$refs.toaster.showMessage(_strings_constants_strings_js__WEBPACK_IMPORTED_MODULE_4__["default"].DELETED_MESSAGE, _strings_constants_strings_js__WEBPACK_IMPORTED_MODULE_4__["default"].PROCESS_SUCCESSFULLY);
                })["catch"](function (error) {
                  console.log(error);
                });
              } else {
                console.log(_strings_constants_strings_js__WEBPACK_IMPORTED_MODULE_4__["default"].DELETING_CANCELLED);
              }
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    getNewUserDeviceView: function getNewUserDeviceView($user_device_id, $key) {
      var _this4 = this;
      //attach device type name and image to device
      axios.get(_rest_api_js__WEBPACK_IMPORTED_MODULE_5__["default"].api_user_devices_read + $user_device_id).then(function (resp_user_devices) {
        //console.log(resp_user_devices.data.data, this.filteredUserDevices[$key])
        _this4.filteredUserDevices[$key].device_type_image = resp_user_devices["data"].data.device_type_image;
        _this4.filteredUserDevices[$key].device_name = resp_user_devices["data"].data.device_name;
        _this4.filteredUserDevices[$key].device_hwid = resp_user_devices["data"].data.device_hwid;
      });
    },
    setUserDevice: function setUserDevice() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _add;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this5.$refs.addUserDevice.showDialogue({
                edit_mode: false,
                title: _components_strings_constants_user_devices_index__WEBPACK_IMPORTED_MODULE_3__["default"].USER_DEVICE_ADDING_TITLE,
                message: _components_strings_constants_user_devices_index__WEBPACK_IMPORTED_MODULE_3__["default"].USER_DEVICE_ADDING_MESSAGE,
                user_device_name: "",
                user_device_pass: "",
                device_desc: "",
                device_id: "",
                user_id: "",
                okButton: _components_strings_constants_user_devices_index__WEBPACK_IMPORTED_MODULE_3__["default"].USER_DEVICE_ADDBUTTON_CAPTION
              });
            case 2:
              _add = _context3.sent;
              if (_add) {
                axios.post(_rest_api_js__WEBPACK_IMPORTED_MODULE_5__["default"].api_user_device_create, {
                  user_device_name: _this5.$refs.addUserDevice.user_device_name,
                  user_device_pass: _this5.$refs.addUserDevice.user_device_pass,
                  device_id: _this5.$refs.addUserDevice.device_id,
                  user_id: _this5.$refs.addUserDevice.user_id
                }).then(function (resp) {
                  //console.log(resp.data);
                  var newUserDevice = {
                    user_device_name: resp['data'].user_device_name,
                    user_device_pass: resp['data'].user_device_pass,
                    device_id: resp['data'].device_id,
                    user_id: resp['data'].user_id,
                    device_type_image: "",
                    device_name: "",
                    device_hwid: "",
                    device_desc: "",
                    id: resp['data'].id
                  };
                  //console.log("newUserDevice", newUserDevice)
                  _this5.filteredUserDevices.push(newUserDevice);
                  _this5.user_devices = _this5.filteredUserDevices;
                  _this5.getNewUserDeviceView(_this5.filteredUserDevices.at(-1).id, _this5.filteredUserDevices.length - 1);
                  _this5.$root.$refs.toaster.showMessage(_strings_constants_strings_js__WEBPACK_IMPORTED_MODULE_4__["default"].ADDED_MESSAGE, _strings_constants_strings_js__WEBPACK_IMPORTED_MODULE_4__["default"].PROCESS_SUCCESSFULLY);
                })["catch"](function (error) {
                  //
                  //const Toaster = app.component('toaster')
                  _this5.$root.$refs.toaster.showMessage(_strings_constants_strings_js__WEBPACK_IMPORTED_MODULE_4__["default"].INSERTING_ERROR, _common_js_ParsingErrors_js__WEBPACK_IMPORTED_MODULE_7__["default"].getError(error), _common_js_ParsingErrors_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERROR_LEVEL_ERROR);
                });
              } else {
                console.log(_strings_constants_strings_js__WEBPACK_IMPORTED_MODULE_4__["default"].INSERTING_CANCELLED);
              }
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    doUserDeviceEdit: function doUserDeviceEdit(key, id) {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _edit, editUserDevicePost;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this6.$refs.addUserDevice.showDialogue({
                edit_mode: true,
                title: _components_strings_constants_user_devices_index__WEBPACK_IMPORTED_MODULE_3__["default"].USER_DEVICE_EDITING_TITLE,
                message: _components_strings_constants_user_devices_index__WEBPACK_IMPORTED_MODULE_3__["default"].USER_DEVICE_EDITING_MESSAGE,
                user_device_name: _this6.filteredUserDevices[key].user_device_name,
                user_device_pass: _this6.filteredUserDevices[key].user_device_pass,
                device_desc: _this6.filteredUserDevices[key].device_desc,
                device_id: _this6.filteredUserDevices[key].device_id,
                user_id: _this6.filteredUserDevices[key].user_id,
                okButton: _components_strings_constants_user_devices_index__WEBPACK_IMPORTED_MODULE_3__["default"].USER_DEVICE_EDITBUTTON_CAPTION
              });
            case 2:
              _edit = _context4.sent;
              if (_edit) {
                editUserDevicePost = {
                  user_device_name: _this6.$refs.addUserDevice.user_device_name,
                  user_device_pass: _this6.$refs.addUserDevice.user_device_pass,
                  device_id: _this6.$refs.addUserDevice.device_id,
                  user_id: _this6.$refs.addUserDevice.user_id
                };
                console.log(editUserDevicePost);
                axios.put(_rest_api_js__WEBPACK_IMPORTED_MODULE_5__["default"].api_user_device_update + id, editUserDevicePost).then(function (resp) {
                  // console.log(resp['data']);
                  _this6.filteredUserDevices[key].user_device_name = resp['data'].user_device_name;
                  _this6.filteredUserDevices[key].user_device_pass = resp['data'].user_device_pass;
                  _this6.filteredUserDevices[key].device_id = resp['data'].device_id;
                  _this6.filteredUserDevices[key].user_id = resp['data'].user_id;
                  _this6.getNewUserDeviceView(_this6.filteredUserDevices[key].id, key);
                  _this6.$root.$refs.toaster.showMessage(_strings_constants_strings_js__WEBPACK_IMPORTED_MODULE_4__["default"].EDITED_MESSAGE, _strings_constants_strings_js__WEBPACK_IMPORTED_MODULE_4__["default"].PROCESS_SUCCESSFULLY);
                }).then(function (resp) {
                  // this.$root.$refs.DeviceRef.getDevices();
                })["catch"](function (error) {
                  _this6.$root.$refs.toaster.showMessage(_strings_constants_strings_js__WEBPACK_IMPORTED_MODULE_4__["default"].EDITING_ERROR, _common_js_ParsingErrors_js__WEBPACK_IMPORTED_MODULE_7__["default"].getError(error), _common_js_ParsingErrors_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERROR_LEVEL_ERROR);
                });
              } else {
                console.log(_strings_constants_strings_js__WEBPACK_IMPORTED_MODULE_4__["default"].EDITING_CANCELLED);
              }
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    ShowHide: function ShowHide(isVisible) {
      this.userDeviceVisible = isVisible;
    } // getVisible() {
    //     return this.visible;
    // }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/UsersCombo.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/UsersCombo.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rest_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rest_api */ "./resources/js/rest_api.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UserCombo',
  data: function data() {
    return {
      items: [],
      user_id: ""
    };
  },
  props: {
    id: {
      required: true
    }
  },
  created: function created(props) {
    this.getUsers();
    this.user_id = this.id;
  },
  methods: {
    getUsers: function getUsers() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(_rest_api__WEBPACK_IMPORTED_MODULE_0__["default"].api_users_read).then(function (response) {
                return response.json();
              }).then(function (response) {
                _this.items = response.data;
              })["catch"](function (err) {
                return console.log(err);
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getUserID: function getUserID() {
      return this.user_id;
    },
    setUserID: function setUserID($id) {
      console.log($id);
      this.user_id = $id;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/devices/DevicesCombo.vue?vue&type=template&id=7f36b20e":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/devices/DevicesCombo.vue?vue&type=template&id=7f36b20e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["value"];
var _hoisted_2 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("select", {
    value: $props.id,
    "class": "form-select p-2",
    onChange: _cache[0] || (_cache[0] = function ($event) {
      return $options.setDeviceID($event.target.value);
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.items, function (item, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: key,
      value: item.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.device_name), 9 /* TEXT, PROPS */, _hoisted_2);
  }), 128 /* KEYED_FRAGMENT */))], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/AddUserDevice.vue?vue&type=template&id=206cca72":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/AddUserDevice.vue?vue&type=template&id=206cca72 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "modal-header"
};
var _hoisted_2 = {
  "class": "align-center w-100 pb-2"
};
var _hoisted_3 = {
  "class": "modal-body align-left"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "px-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "User Device Name")], -1 /* HOISTED */);
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "px-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Device Password")], -1 /* HOISTED */);
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "px-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Select Device")], -1 /* HOISTED */);
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "px-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Select User")], -1 /* HOISTED */);
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DeviceCombo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DeviceCombo");
  var _component_UserCombo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("UserCombo");
  var _component_PopupModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PopupModal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PopupModal, {
    ref: "popup"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.title), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.user_device_name = $event;
        }),
        "class": "form-control p-2 mb-2",
        placeholder: "Input Device Name"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user_device_name]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <label class=\"px-2\"><strong>Device Description</strong></label>\n            <input v-model=\"device_desc\" class=\"form-control p-2 mb-2 disabled\"/> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <label class=\"px-2\"><strong>Device Hardware Address</strong></label>\n            <input v-model=\"user_device_hwid\" class=\"form-control p-2 mb-2 disabled\"/> "), _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.user_device_pass = $event;
        }),
        "class": "form-control p-2 mb-2",
        placeholder: "Input User Device Password"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user_device_pass]]), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <DeviceTypesCombo ref=\"types\" v-bind:id=\"device_type_id\"></DeviceTypesCombo> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DeviceCombo, {
        ref: "devices_combo",
        id: $data.device_id
      }, null, 8 /* PROPS */, ["id"]), _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_UserCombo, {
        ref: "users_combo",
        id: $data.user_id
      }, null, 8 /* PROPS */, ["id"])]), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-danger mx-1 btn-width-40",
        onClick: _cache[2] || (_cache[2] = function () {
          return $options._confirm && $options._confirm.apply($options, arguments);
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.okButton), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-secondary mx-1 btn-width-40",
        onClick: _cache[3] || (_cache[3] = function () {
          return $options._cancel && $options._cancel.apply($options, arguments);
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.cancelButton), 1 /* TEXT */)])];
    }),

    _: 1 /* STABLE */
  }, 512 /* NEED_PATCH */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/UserDevices.vue?vue&type=template&id=cd2c91d2":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/UserDevices.vue?vue&type=template&id=cd2c91d2 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "align-left px-4 pb-3",
  style: {
    "margin-top": "5.5rem"
  }
}, " User Devices ", -1 /* HOISTED */);
var _hoisted_2 = {
  "class": "navbar navbar-expand-lg navbar-dark bg-dark rounded"
};
var _hoisted_3 = {
  "class": "container-fluid"
};
var _hoisted_4 = {
  "class": "navbar-collapse",
  id: "navbarColor02"
};
var _hoisted_5 = {
  "class": "navbar-nav me-auto d-flex"
};
var _hoisted_6 = {
  "class": "nav-item d-flex py-1"
};
var _hoisted_7 = {
  "class": "nav-item dropdown me-auto vertical-center"
};
var _hoisted_8 = {
  "class": "nav-link dropdown-toggle mx-2",
  "data-bs-toggle": "dropdown",
  href: "#",
  role: "button",
  "aria-haspopup": "true",
  "aria-expanded": "false"
};
var _hoisted_9 = {
  "class": "dropdown-menu w-100"
};
var _hoisted_10 = ["value", "onClick"];
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-divider"
}, null, -1 /* HOISTED */);
var _hoisted_12 = {
  "class": "d-flex"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-list"
}, null, -1 /* HOISTED */);
var _hoisted_14 = [_hoisted_13];
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-th-large"
}, null, -1 /* HOISTED */);
var _hoisted_16 = [_hoisted_15];
var _hoisted_17 = {
  "class": "text-primary my-2"
};
var _hoisted_18 = {
  key: 0,
  "class": "row my-2"
};
var _hoisted_19 = ["id"];
var _hoisted_20 = {
  "class": "card border-light"
};
var _hoisted_21 = {
  "class": "card-header"
};
var _hoisted_22 = {
  "class": "card-body"
};
var _hoisted_23 = {
  "class": "card-title text-info"
};
var _hoisted_24 = {
  "class": "card-subtitle text-muted"
};
var _hoisted_25 = ["src"];
var _hoisted_26 = {
  "class": "card-body"
};
var _hoisted_27 = {
  "class": "card-text"
};
var _hoisted_28 = {
  "class": "list-group list-group-flush"
};
var _hoisted_29 = {
  "class": "list-group-item"
};
var _hoisted_30 = {
  "class": "list-group-item"
};
var _hoisted_31 = {
  "class": "card-body"
};
var _hoisted_32 = {
  "class": "list-group-item"
};
var _hoisted_33 = {
  "class": "card-footer text-muted"
};
var _hoisted_34 = ["onClick"];
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-edit",
  "aria-hidden": "true"
}, null, -1 /* HOISTED */);
var _hoisted_36 = ["onClick"];
var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-trash",
  "aria-hidden": "true"
}, null, -1 /* HOISTED */);
var _hoisted_38 = {
  key: 0,
  "class": "my-2"
};
var _hoisted_39 = ["id"];
var _hoisted_40 = {
  "class": "mx-2 my-2"
};
var _hoisted_41 = {
  "class": "row vertical-center"
};
var _hoisted_42 = {
  "class": "col-sm-1 col-xs-1 col-lg-1"
};
var _hoisted_43 = ["src"];
var _hoisted_44 = {
  "class": "col-sm-1 col-xs-1 col-lg-1 align-left"
};
var _hoisted_45 = {
  "class": "text-info"
};
var _hoisted_46 = {
  "class": "col-sm-2 col-xs-2 col-lg-2 align-left"
};
var _hoisted_47 = {
  "class": "col-sm-2 col-xs-2 col-lg-2 align-left"
};
var _hoisted_48 = {
  "class": "col-sm- col-xs-2 col-lg-2 align-left"
};
var _hoisted_49 = {
  "class": "text-info"
};
var _hoisted_50 = {
  "class": "col-sm-2 col-xs-2 col-lg-2 align-left"
};
var _hoisted_51 = {
  "class": "col-sm-2 col-xs-2 col-lg-2 edit-buttons"
};
var _hoisted_52 = ["onClick"];
var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-edit",
  "aria-hidden": "true"
}, null, -1 /* HOISTED */);
var _hoisted_54 = [_hoisted_53];
var _hoisted_55 = ["onClick"];
var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-trash",
  "aria-hidden": "true"
}, null, -1 /* HOISTED */);
var _hoisted_57 = [_hoisted_56];
function render(_ctx, _cache) {
  var _component_AddUserDevice = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AddUserDevice");
  var _component_ConfirmDialogue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ConfirmDialogue");
  var _component_Paginator = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Paginator");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AddUserDevice, {
    ref: "addUserDevice"
  }, null, 512 /* NEED_PATCH */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ConfirmDialogue, {
    ref: "confirmDialogue"
  }, null, 512 /* NEED_PATCH */), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control me-sm-2",
    type: "text",
    placeholder: "Search",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.userDevice_filter = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.userDevice_filter]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.SortName), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.sortRules, function (rule) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      "class": "dropdown-item",
      href: "#",
      key: rule.key,
      value: rule.key,
      onClick: function onClick($event) {
        return _ctx.doSort(rule.key);
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rule.title), 9 /* TEXT, PROPS */, _hoisted_10);
  }), 128 /* KEYED_FRAGMENT */)), _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-item",
    href: "#",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      _ctx.sortDirection = !_ctx.sortDirection;
      _ctx.doSort(_ctx.sortColumn);
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.sortDirection ? _ctx.sortOrderStrings[0] : _ctx.sortOrderStrings[1]), 1 /* TEXT */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn btn-primary", {
      'disabled': _ctx.compactView
    }]),
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.compactView = true;
    })
  }, _hoisted_14, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn btn-primary mx-2", {
      'disabled': !_ctx.compactView
    }]),
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.compactView = false;
    })
  }, _hoisted_16, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-primary",
    onClick: _cache[4] || (_cache[4] = function () {
      return _ctx.setUserDevice && _ctx.setUserDevice.apply(_ctx, arguments);
    })
  }, " Add Device ")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.dataDescription), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <h1>User Devices</h1> "), !_ctx.compactView ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.filteredUserDevices, function (user_device, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "p-2 col-sm-4 col-xs-4 col-lg-4 fade-in",
      key: key,
      id: user_device.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user_device.user_device_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user_device.device_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user_device.device_desc), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: user_device.device_type_image
    }, null, 8 /* PROPS */, _hoisted_25), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user_device.device_type_desc), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_29, "HWID: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user_device.device_hwid), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_30, "User Device ID: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user_device.id), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_32, "User: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user_device.user_name) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user_device.user_id) + ")", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-info btn-width-40 mx-1",
      onClick: function onClick($event) {
        return _ctx.doUserDeviceEdit(key, user_device.id);
      }
    }, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Edit ")], 8 /* PROPS */, _hoisted_34), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-warning btn-width-40 mx-1",
      onClick: function onClick($event) {
        return _ctx.doUserDeviceDelete(key, user_device.id);
      }
    }, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Delete ")], 8 /* PROPS */, _hoisted_36)])])], 8 /* PROPS */, _hoisted_19);
  }), 128 /* KEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" compact view "), _ctx.compactView ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_38, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.filteredUserDevices, function (user_device, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "card border-primary mb-1 w-100 fade-in",
      key: key,
      id: user_device.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: user_device.device_type_image,
      "class": "device-image"
    }, null, 8 /* PROPS */, _hoisted_43)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user_device.id), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user_device.user_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user_device.user_device_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user_device.device_name), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user_device.device_hwid), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-info mx-2",
      onClick: function onClick($event) {
        return _ctx.doUserDeviceEdit(key, user_device.id);
      }
    }, _hoisted_54, 8 /* PROPS */, _hoisted_52), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-secondary",
      onClick: function onClick($event) {
        return _ctx.doUserDeviceDelete(key, user_device.id);
      }
    }, _hoisted_57, 8 /* PROPS */, _hoisted_55)])])])], 8 /* PROPS */, _hoisted_39);
  }), 128 /* KEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Paginator, {
    ref: "paginatorUserDevices"
  }, null, 512 /* NEED_PATCH */)], 512 /* NEED_PATCH */)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.userDeviceVisible]]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/UsersCombo.vue?vue&type=template&id=e8c9b11e":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/UsersCombo.vue?vue&type=template&id=e8c9b11e ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["value"];
var _hoisted_2 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("select", {
    value: $props.id,
    "class": "form-select p-2",
    onChange: _cache[0] || (_cache[0] = function ($event) {
      return $options.setUserID($event.target.value);
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.items, function (item, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: key,
      value: item.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 9 /* TEXT, PROPS */, _hoisted_2);
  }), 128 /* KEYED_FRAGMENT */))], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1);
}

/***/ }),

/***/ "./resources/js/components/strings_constants/user_devices/index.js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/strings_constants/user_devices/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  USER_DEVICE_DELETING_CAPTION: "Delete",
  USER_DEVICE_DELETING_MESSAGE: "Are you sure you want to delete this user device?",
  USER_DEVICE_DATA_DESCRIPTION: "User devices ready for use",
  USER_DEVICE_ADDING_TITLE: 'Adding User Device',
  USER_DEVICE_ADDING_MESSAGE: 'Adding User Device',
  USER_DEVICE_EDITING_TITLE: 'Editing User Device',
  USER_DEVICE_EDITING_MESSAGE: 'Editing User Device',
  USER_DEVICE_NAME_PLACEHOLDER: 'New User Device',
  USER_DEVICE_DESC_PLACEHOLDER: 'User Device Desc',
  USER_DEVICE_IMAGE_PLACEHOLDER: 'Device Type Image',
  USER_DEVICE_ADDBUTTON_CAPTION: 'Add User Device',
  USER_DEVICE_EDITBUTTON_CAPTION: 'Edit User Device',
  NO_HWID: "no hardware address",
  NO_PASS: "no password"
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/AddUserDevice.vue?vue&type=style&index=0&id=206cca72&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/AddUserDevice.vue?vue&type=style&index=0&id=206cca72&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".align-left {\n  text-align: left !important;\n}\n.align-right {\n  text-align: right !important;\n}\n.align-center {\n  text-align: center !important;\n}\n.btn-width-40 {\n  width: 40% !important;\n}\n.edit-buttons {\n  display: flex;\n  justify-content: flex-end;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/AddUserDevice.vue?vue&type=style&index=0&id=206cca72&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/AddUserDevice.vue?vue&type=style&index=0&id=206cca72&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddUserDevice_vue_vue_type_style_index_0_id_206cca72_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddUserDevice.vue?vue&type=style&index=0&id=206cca72&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/AddUserDevice.vue?vue&type=style&index=0&id=206cca72&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddUserDevice_vue_vue_type_style_index_0_id_206cca72_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddUserDevice_vue_vue_type_style_index_0_id_206cca72_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/devices/DevicesCombo.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/devices/DevicesCombo.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DevicesCombo_vue_vue_type_template_id_7f36b20e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DevicesCombo.vue?vue&type=template&id=7f36b20e */ "./resources/js/components/devices/DevicesCombo.vue?vue&type=template&id=7f36b20e");
/* harmony import */ var _DevicesCombo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DevicesCombo.vue?vue&type=script&lang=js */ "./resources/js/components/devices/DevicesCombo.vue?vue&type=script&lang=js");
/* harmony import */ var C_projects_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_projects_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DevicesCombo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DevicesCombo_vue_vue_type_template_id_7f36b20e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/devices/DevicesCombo.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/user_devices/AddUserDevice.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/user_devices/AddUserDevice.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddUserDevice_vue_vue_type_template_id_206cca72__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddUserDevice.vue?vue&type=template&id=206cca72 */ "./resources/js/components/user_devices/AddUserDevice.vue?vue&type=template&id=206cca72");
/* harmony import */ var _AddUserDevice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddUserDevice.vue?vue&type=script&lang=js */ "./resources/js/components/user_devices/AddUserDevice.vue?vue&type=script&lang=js");
/* harmony import */ var _AddUserDevice_vue_vue_type_style_index_0_id_206cca72_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddUserDevice.vue?vue&type=style&index=0&id=206cca72&lang=scss */ "./resources/js/components/user_devices/AddUserDevice.vue?vue&type=style&index=0&id=206cca72&lang=scss");
/* harmony import */ var C_projects_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_projects_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AddUserDevice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AddUserDevice_vue_vue_type_template_id_206cca72__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/user_devices/AddUserDevice.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/user_devices/UserDevices.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/user_devices/UserDevices.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserDevices_vue_vue_type_template_id_cd2c91d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserDevices.vue?vue&type=template&id=cd2c91d2 */ "./resources/js/components/user_devices/UserDevices.vue?vue&type=template&id=cd2c91d2");
/* harmony import */ var _UserDevices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserDevices.vue?vue&type=script&lang=js */ "./resources/js/components/user_devices/UserDevices.vue?vue&type=script&lang=js");
/* harmony import */ var C_projects_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_projects_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_UserDevices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UserDevices_vue_vue_type_template_id_cd2c91d2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/user_devices/UserDevices.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/user_devices/UsersCombo.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/user_devices/UsersCombo.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UsersCombo_vue_vue_type_template_id_e8c9b11e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersCombo.vue?vue&type=template&id=e8c9b11e */ "./resources/js/components/user_devices/UsersCombo.vue?vue&type=template&id=e8c9b11e");
/* harmony import */ var _UsersCombo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersCombo.vue?vue&type=script&lang=js */ "./resources/js/components/user_devices/UsersCombo.vue?vue&type=script&lang=js");
/* harmony import */ var C_projects_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_projects_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_UsersCombo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UsersCombo_vue_vue_type_template_id_e8c9b11e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/user_devices/UsersCombo.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/devices/DevicesCombo.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/devices/DevicesCombo.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DevicesCombo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DevicesCombo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DevicesCombo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/devices/DevicesCombo.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/user_devices/AddUserDevice.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/user_devices/AddUserDevice.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddUserDevice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddUserDevice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddUserDevice.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/AddUserDevice.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/user_devices/UserDevices.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/user_devices/UserDevices.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserDevices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserDevices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserDevices.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/UserDevices.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/user_devices/UsersCombo.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/user_devices/UsersCombo.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UsersCombo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UsersCombo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UsersCombo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/UsersCombo.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/devices/DevicesCombo.vue?vue&type=template&id=7f36b20e":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/devices/DevicesCombo.vue?vue&type=template&id=7f36b20e ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DevicesCombo_vue_vue_type_template_id_7f36b20e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DevicesCombo_vue_vue_type_template_id_7f36b20e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DevicesCombo.vue?vue&type=template&id=7f36b20e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/devices/DevicesCombo.vue?vue&type=template&id=7f36b20e");


/***/ }),

/***/ "./resources/js/components/user_devices/AddUserDevice.vue?vue&type=template&id=206cca72":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/user_devices/AddUserDevice.vue?vue&type=template&id=206cca72 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddUserDevice_vue_vue_type_template_id_206cca72__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddUserDevice_vue_vue_type_template_id_206cca72__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddUserDevice.vue?vue&type=template&id=206cca72 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/AddUserDevice.vue?vue&type=template&id=206cca72");


/***/ }),

/***/ "./resources/js/components/user_devices/UserDevices.vue?vue&type=template&id=cd2c91d2":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/user_devices/UserDevices.vue?vue&type=template&id=cd2c91d2 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserDevices_vue_vue_type_template_id_cd2c91d2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserDevices_vue_vue_type_template_id_cd2c91d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserDevices.vue?vue&type=template&id=cd2c91d2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/UserDevices.vue?vue&type=template&id=cd2c91d2");


/***/ }),

/***/ "./resources/js/components/user_devices/UsersCombo.vue?vue&type=template&id=e8c9b11e":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/user_devices/UsersCombo.vue?vue&type=template&id=e8c9b11e ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UsersCombo_vue_vue_type_template_id_e8c9b11e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UsersCombo_vue_vue_type_template_id_e8c9b11e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UsersCombo.vue?vue&type=template&id=e8c9b11e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/UsersCombo.vue?vue&type=template&id=e8c9b11e");


/***/ }),

/***/ "./resources/js/components/user_devices/AddUserDevice.vue?vue&type=style&index=0&id=206cca72&lang=scss":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/user_devices/AddUserDevice.vue?vue&type=style&index=0&id=206cca72&lang=scss ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddUserDevice_vue_vue_type_style_index_0_id_206cca72_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddUserDevice.vue?vue&type=style&index=0&id=206cca72&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user_devices/AddUserDevice.vue?vue&type=style&index=0&id=206cca72&lang=scss");


/***/ })

}]);