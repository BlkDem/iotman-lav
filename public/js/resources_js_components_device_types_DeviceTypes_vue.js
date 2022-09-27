"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_device_types_DeviceTypes_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/ConfirmDialogue.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/ConfirmDialogue.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PopupModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopupModal.vue */ "./resources/js/components/common/PopupModal.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ConfirmDialogue',
  components: {
    PopupModal: _PopupModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      // Parameters that change depending on the type of dialogue
      title: undefined,
      message: undefined,
      // Main text content
      okButton: undefined,
      // Text for confirm button; leave it empty because we don't know what we're using it for
      cancelButton: 'Cancel',
      // text for cancel button
      // Private variables
      resolvePromise: undefined,
      rejectPromise: undefined
    };
  },
  setup: function setup() {
    var popup = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    return {
      popup: popup
    };
  },
  methods: {
    showDialogue: function showDialogue() {
      var _this = this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.title = opts.title;
      this.message = opts.message;
      this.okButton = opts.okButton;

      if (opts.cancelButton) {
        this.cancelButton = opts.cancelButton;
      } // Once we set our config, we tell the popup modal to open 


      this.$refs.popup.open(); // Return promise so the caller can get results

      return new Promise(function (resolve, reject) {
        _this.resolvePromise = resolve;
        _this.rejectPromise = reject;
      });
    },
    _confirm: function _confirm() {
      this.$refs.popup.close();
      this.resolvePromise(true);
    },
    _cancel: function _cancel() {
      this.$refs.popup.close();
      this.resolvePromise(false); // Or you can throw an error
      // this.rejectPromise(new Error('User cancelled the dialogue'))
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Paginator.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Paginator.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Paginator'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/PopupModal.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/PopupModal.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PopupModal',
  data: function data() {
    return {
      isVisible: false
    };
  },
  methods: {
    open: function open() {
      this.isVisible = true;
    },
    close: function close() {
      this.isVisible = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/AddDeviceType.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/AddDeviceType.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_PopupModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/common/PopupModal.vue */ "./resources/js/components/common/PopupModal.vue");
/* harmony import */ var _components_strings_constants_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/strings_constants/messages */ "./resources/js/components/strings_constants/messages.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AddDeviceType',
  components: {
    PopupModal: _components_common_PopupModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      // Parameters that change depending on the type of dialogue
      edit_mode: false,
      title: undefined,
      message: undefined,
      // Main text content
      device_type_name: undefined,
      device_type_desc: undefined,
      device_type_image: undefined,
      okButton: undefined,
      // Text for confirm button; leave it empty because we don't know what we're using it for
      cancelButton: _components_strings_constants_messages__WEBPACK_IMPORTED_MODULE_1__["default"].CANCEL_STRING,
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
      this.edit_mode = optsAdd.edit_mode;
      this.title = optsAdd.title;
      this.message = optsAdd.message;
      this.device_type_name = optsAdd.device_type_name;
      this.device_type_desc = optsAdd.device_type_desc;
      this.device_type_image = optsAdd.device_type_image;
      this.okButton = optsAdd.okButton;

      if (optsAdd.cancelButton) {
        this.cancelButton = optsAdd.cancelButton;
      }

      console.log(this); // Once we set our config, we tell the popup modal to open 

      this.$refs.popup.open(); //console.log('gdti: ', this.$refs.types.getDeviceTypeID());
      // if (this.edit_mode) {
      //     console.log(this.$refs.popup);
      // }
      // Return promise so the caller can get results

      return new Promise(function (resolve, reject) {
        _this.resolvePromise = resolve;
        _this.rejectPromise = reject;
      });
    },
    _confirm: function _confirm() {
      this.$refs.popup.close();
      this.resolvePromise(true, this);
    },
    _cancel: function _cancel() {
      this.$refs.popup.close();
      this.resolvePromise(false); // Or you can throw an error
      // this.rejectPromise(new Error('User cancelled the dialogue'))
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/DeviceTypes.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/DeviceTypes.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_ConfirmDialogue_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/common/ConfirmDialogue.vue */ "./resources/js/components/common/ConfirmDialogue.vue");
/* harmony import */ var _AddDeviceType_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddDeviceType.vue */ "./resources/js/components/device_types/AddDeviceType.vue");
/* harmony import */ var _components_common_Paginator_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/common/Paginator.vue */ "./resources/js/components/common/Paginator.vue");
/* harmony import */ var _components_strings_constants_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/strings_constants/messages */ "./resources/js/components/strings_constants/messages.js");
/* harmony import */ var _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/strings_constants/device_types/index */ "./resources/js/components/strings_constants/device_types/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ConfirmDialogue: _components_common_ConfirmDialogue_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    AddDeviceType: _AddDeviceType_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Paginator: _components_common_Paginator_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      device_types: [],
      visible: false,
      compactView: true
    };
  },
  created: function created() {
    this.page_description = _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_4__["default"].DEVICE_TYPE_PAGE_DESCRIPTION;
    this.getDeviceTypes();
  },
  methods: {
    getDeviceTypes: function getDeviceTypes(api_url) {
      var _this = this;

      api_url = api_url || '/api/device_types/read/';
      fetch(api_url).then(function (response) {
        return response.json();
      }).then(function (response) {
        _this.device_types = response.data;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    doDeleteType: function doDeleteType(key, id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var ok;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.$refs.confirmDialogue.showDialogue({
                  title: _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_4__["default"].DEVICE_TYPE_DELETING_CAPTION,
                  message: _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_4__["default"].DEVICE_TYPE_DELETING_MESSAGE + '"' + _this2.device_types[key].device_type_name + '"?',
                  okButton: _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_4__["default"].DEVICE_TYPE_DELETING_CAPTION
                });

              case 2:
                ok = _context.sent;

                if (ok) {
                  axios["delete"]('/api/device_types/delete/' + id).then(function (resp) {
                    _this2.device_types.splice(key, 1);

                    console.log(key, id, " - deleted");

                    _this2.$root.$refs.toaster.setMessage(_components_strings_constants_messages__WEBPACK_IMPORTED_MODULE_3__["default"].DELETED_MESSAGE, _components_strings_constants_messages__WEBPACK_IMPORTED_MODULE_3__["default"].PROCESS_SUCCESSFULLY);
                  })["catch"](function (error) {
                    console.log(error);
                  });
                } else {
                  console.log(_components_strings_constants_messages__WEBPACK_IMPORTED_MODULE_3__["default"].DELETING_CANCELLED);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    setDeviceType: function setDeviceType() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _add;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this3.$refs.addDeviceType.showDialogue({
                  edit_mode: false,
                  title: _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_4__["default"].DEVICE_TYPE_ADDING_TITLE,
                  message: _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_4__["default"].DEVICE_TYPE_ADDING_MESSAGE,
                  device_type_name: _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_4__["default"].DEVICE_TYPE_NAME_PLACEHOLDER,
                  device_type_desc: _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_4__["default"].DEVICE_TYPE_DESC_PLACEHOLDER,
                  device_type_image: _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_4__["default"].DEVICE_TYPE_IMAGE_PLACEHOLDER,
                  okButton: _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_4__["default"].DEVICE_TYPE_ADDBUTTON_CAPTION
                });

              case 2:
                _add = _context2.sent;

                if (_add) {
                  axios.post('/api/device_types/create/?device_type_name=' + _this3.$refs.addDeviceType.device_type_name + '&device_type_image=' + _this3.$refs.addDeviceType.device_type_image + '&device_type_desc=' + _this3.$refs.addDeviceType.device_type_desc).then(function (resp) {
                    console.log(resp['data']);
                    var newDevice = {
                      device_type_name: resp['data'].device_type_name,
                      device_type_desc: resp['data'].device_type_desc,
                      device_type_image: resp['data'].device_type_image,
                      id: resp['data'].id
                    };

                    _this3.device_types.push(newDevice);

                    _this3.$root.$refs.toaster.setMessage(_components_strings_constants_messages__WEBPACK_IMPORTED_MODULE_3__["default"].ADDED_MESSAGE, _components_strings_constants_messages__WEBPACK_IMPORTED_MODULE_3__["default"].PROCESS_SUCCESSFULLY);
                  })["catch"](function (error) {
                    console.log(error);
                  });
                } else {
                  console.log(_components_strings_constants_messages__WEBPACK_IMPORTED_MODULE_3__["default"].INSERTING_CANCELLED);
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    doEditType: function doEditType(key, id) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _edit, editDeviceTypePost;

        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this4.$refs.addDeviceType.showDialogue({
                  edit_mode: true,
                  title: _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_4__["default"].DEVICE_TYPE_EDITING_TITLE,
                  message: _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_4__["default"].DEVICE_TYPE_EDITING_MESSAGE,
                  device_type_name: _this4.device_types[key].device_type_name,
                  device_type_desc: _this4.device_types[key].device_type_desc,
                  device_type_image: _this4.device_types[key].device_type_image,
                  okButton: _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_4__["default"].DEVICE_TYPE_EDITBUTTON_CAPTION
                });

              case 2:
                _edit = _context3.sent;

                if (_edit) {
                  editDeviceTypePost = '/api/device_types/update/' + id + '/?device_type_name=' + _this4.$refs.addDeviceType.device_type_name + '&device_type_image=' + _this4.$refs.addDeviceType.device_type_image + '&device_type_desc=' + _this4.$refs.addDeviceType.device_type_desc;
                  console.log(editDeviceTypePost);
                  axios.put(editDeviceTypePost).then(function (resp) {
                    console.log(resp['data']);
                    _this4.device_types[key].device_type_name = resp['data'].device_type_name;
                    _this4.device_types[key].device_type_desc = resp['data'].device_type_desc;
                    _this4.device_types[key].device_type_image = resp['data'].device_type_image;

                    _this4.$root.$refs.toaster.setMessage(_components_strings_constants_messages__WEBPACK_IMPORTED_MODULE_3__["default"].EDITED_MESSAGE, _components_strings_constants_messages__WEBPACK_IMPORTED_MODULE_3__["default"].PROCESS_SUCCESSFULLY);
                  }).then(function (resp) {
                    _this4.$root.$refs.DeviceRef.getDevices();
                  })["catch"](function (error) {
                    console.log(error);
                  });
                } else {
                  console.log(_components_strings_constants_messages__WEBPACK_IMPORTED_MODULE_3__["default"].EDITING_CANCELLED);
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    ShowHide: function ShowHide(isVisible) {
      this.visible = isVisible;
    },
    getVisible: function getVisible() {
      return this.visible;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/ConfirmDialogue.vue?vue&type=template&id=d83c0302":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/ConfirmDialogue.vue?vue&type=template&id=d83c0302 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  style: {
    "margin-top": "0"
  }
};
var _hoisted_2 = {
  "class": "btns"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PopupModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PopupModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PopupModal, {
    ref: "popup"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.title), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.message), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "btn btn-danger",
        onClick: _cache[0] || (_cache[0] = function () {
          return $options._confirm && $options._confirm.apply($options, arguments);
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.okButton), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary",
        onClick: _cache[1] || (_cache[1] = function () {
          return $options._cancel && $options._cancel.apply($options, arguments);
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.cancelButton), 1
      /* TEXT */
      )])];
    }),
    _: 1
    /* STABLE */

  }, 512
  /* NEED_PATCH */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Paginator.vue?vue&type=template&id=3dbf4898":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Paginator.vue?vue&type=template&id=3dbf4898 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<ul class=\"pagination text-center\"><li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">«</a></li><li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">5</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">»</a></li></ul>", 1);

var _hoisted_2 = [_hoisted_1];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, _hoisted_2);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/PopupModal.vue?vue&type=template&id=9cfc8a2c&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/PopupModal.vue?vue&type=template&id=9cfc8a2c&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-9cfc8a2c"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  key: 0,
  "class": "popup-modal"
};
var _hoisted_2 = {
  "class": "window modal-dialog modal-content"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.isVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 3
    /* FORWARDED */

  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/AddDeviceType.vue?vue&type=template&id=20b1311d":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/AddDeviceType.vue?vue&type=template&id=20b1311d ***!
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
  "class": "w-100 text-center"
};
var _hoisted_3 = {
  "class": "modal-body align-left"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "px-2"
}, "Device Type Name", -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "px-2"
}, "Device Type Desc", -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "px-2"
}, "Device Type Image", -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "btns my-2 d-grid gap-2 px-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PopupModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PopupModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PopupModal, {
    ref: "popup"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.title), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.device_type_name = $event;
        }),
        "class": "form-control p-2 mb-4",
        placeholder: "Input Device Type Name"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.device_type_name]]), _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.device_type_desc = $event;
        }),
        "class": "form-control p-2 mb-4",
        style: {
          "min-height": "100px",
          "max-height": "200px"
        },
        placeholder: "Input Device Type Desc",
        cols: "40",
        rows: "3"
      }, "\n            \n            ", 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.device_type_desc]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input v-model=\"device_type_desc\" class=\"form-control p-2 mb-4\" placeholder=\"Input Device Type Desc\"/> "), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.device_type_image = $event;
        }),
        "class": "form-control p-2 mb-4",
        placeholder: "Input Device Type Image"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.device_type_image]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-danger",
        onClick: _cache[3] || (_cache[3] = function () {
          return $options._confirm && $options._confirm.apply($options, arguments);
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.okButton), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-secondary",
        onClick: _cache[4] || (_cache[4] = function () {
          return $options._cancel && $options._cancel.apply($options, arguments);
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.cancelButton), 1
      /* TEXT */
      )])];
    }),
    _: 1
    /* STABLE */

  }, 512
  /* NEED_PATCH */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/DeviceTypes.vue?vue&type=template&id=c6c572a2&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/DeviceTypes.vue?vue&type=template&id=c6c572a2&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-c6c572a2"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  "class": "row"
};

var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-sm-6 col-xs-6 col-lg-6 p-2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "align-left px-4 pb-3",
    style: {
      "margin-top": "5rem"
    }
  }, "Device Types")], -1
  /* HOISTED */
  );
});

var _hoisted_4 = {
  "class": "col-sm-6 col-xs-6 col-lg-6 p-2",
  style: {
    "text-align": "right !important"
  }
};

var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-list"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_6 = [_hoisted_5];

var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-th-large"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_8 = [_hoisted_7];
var _hoisted_9 = {
  "class": "text-primary"
};
var _hoisted_10 = {
  key: 0,
  "class": "row"
};
var _hoisted_11 = ["id"];
var _hoisted_12 = {
  "class": "card border-light"
};
var _hoisted_13 = {
  "class": "card-header"
};
var _hoisted_14 = {
  "class": "text-info"
};
var _hoisted_15 = {
  "class": "card-body"
};
var _hoisted_16 = {
  "class": "card-title text-info"
};
var _hoisted_17 = {
  "class": "card-subtitle text-muted"
};
var _hoisted_18 = ["src"];
var _hoisted_19 = {
  "class": "card-body"
};
var _hoisted_20 = ["onClick"];

var _hoisted_21 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-edit",
    "aria-hidden": "true"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Edit ");

var _hoisted_23 = [_hoisted_21, _hoisted_22];
var _hoisted_24 = ["onClick"];

var _hoisted_25 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-trash",
    "aria-hidden": "true"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Delete ");

var _hoisted_27 = [_hoisted_25, _hoisted_26];
var _hoisted_28 = {
  key: 1
};
var _hoisted_29 = ["id"];
var _hoisted_30 = {
  "class": "card-header"
};
var _hoisted_31 = {
  "class": "row"
};
var _hoisted_32 = {
  "class": "col-sm-1 col-xs-1 col-lg-1"
};
var _hoisted_33 = ["src"];
var _hoisted_34 = {
  "class": "col-sm-3 col-xs-3 col-lg-3 align-left"
};
var _hoisted_35 = {
  "class": "text-info"
};
var _hoisted_36 = {
  "class": "col-sm-6 col-xs-4 col-lg-6 align-left"
};
var _hoisted_37 = {
  "class": "col-sm-2 col-xs-2 col-lg-2 align-right"
};
var _hoisted_38 = ["onClick"];

var _hoisted_39 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-edit",
    "aria-hidden": "true"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_40 = [_hoisted_39];
var _hoisted_41 = ["onClick"];

var _hoisted_42 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-trash",
    "aria-hidden": "true"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_43 = [_hoisted_42];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_AddDeviceType = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AddDeviceType");

  var _component_ConfirmDialogue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ConfirmDialogue");

  var _component_Paginator = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Paginator");

  return $data.visible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AddDeviceType, {
    ref: "addDeviceType"
  }, null, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ConfirmDialogue, {
    ref: "confirmDialogue"
  }, null, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-primary",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.compactView = true;
    })
  }, _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-primary m-2",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.compactView = false;
    })
  }, _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-primary",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.setDeviceType && $options.setDeviceType.apply($options, arguments);
    })
  }, " Add Type ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.page_description), 1
  /* TEXT */
  )]), !$data.compactView ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.device_types, function (device_type, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "col-sm-4 col-xs-4 col-lg-4 p-2",
      key: key,
      id: device_type.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(device_type.device_type_name) + " ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_14, "(" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(device_type.id) + ")", 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(device_type.device_type_name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(device_type.device_type_desc === "undefined" ? _ctx.MessagesConstants.NO_DESCRIPTION : device_type.device_type_desc), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: device_type.device_type_image
    }, null, 8
    /* PROPS */
    , _hoisted_18), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-info",
      onClick: function onClick($event) {
        return $options.doEditType(key, device_type.id);
      }
    }, _hoisted_23, 8
    /* PROPS */
    , _hoisted_20), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-secondary",
      onClick: function onClick($event) {
        return $options.doDeleteType(key, device_type.id);
      }
    }, _hoisted_27, 8
    /* PROPS */
    , _hoisted_24)])])], 8
    /* PROPS */
    , _hoisted_11);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" compact view "), $data.compactView ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_28, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.device_types, function (device_type, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "card border-primary mb-4 w-100",
      key: key,
      id: device_type.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: device_type.device_type_image,
      "class": "device-image"
    }, null, 8
    /* PROPS */
    , _hoisted_33)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(device_type.device_type_name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_35, " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(device_type.id) + ") ", 1
    /* TEXT */
    )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(device_type.device_type_desc), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-info mx-2",
      onClick: function onClick($event) {
        return $options.doEditType(key, device_type.id);
      }
    }, _hoisted_40, 8
    /* PROPS */
    , _hoisted_38), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-secondary",
      onClick: function onClick($event) {
        return $options.doDeleteType(key, device_type.id);
      }
    }, _hoisted_43, 8
    /* PROPS */
    , _hoisted_41)])])])], 8
    /* PROPS */
    , _hoisted_29);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Paginator, {
    ref: "paginatorDevices"
  }, null, 512
  /* NEED_PATCH */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./resources/js/components/strings_constants/device_types/index.js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/strings_constants/device_types/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  DEVICE_TYPE_DELETING_CAPTION: "Delete",
  DEVICE_TYPE_DELETING_MESSAGE: "Are you sure you want to delete this device type ",
  DEVICE_TYPE_PAGE_DESCRIPTION: "Device Types - produced by Umolab",
  DEVICE_TYPE_ADDING_TITLE: 'Adding Device Type',
  DEVICE_TYPE_ADDING_MESSAGE: 'Adding Device Type',
  DEVICE_TYPE_EDITING_TITLE: 'Editing Device Type',
  DEVICE_TYPE_EDITING_MESSAGE: 'Editing Device Type',
  DEVICE_TYPE_NAME_PLACEHOLDER: 'New Device Type',
  DEVICE_TYPE_DESC_PLACEHOLDER: 'Device Type Desc',
  DEVICE_TYPE_IMAGE_PLACEHOLDER: 'Device Type Image',
  DEVICE_TYPE_ADDBUTTON_CAPTION: 'Add Device Type',
  DEVICE_TYPE_EDITBUTTON_CAPTION: 'Edit Device Type'
});

/***/ }),

/***/ "./resources/js/components/strings_constants/messages.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/strings_constants/messages.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  CANCEL_STRING: "Cancel",
  EDITED_MESSAGE: "Edited",
  ADDED_MESSAGE: "Added",
  DELETED_MESSAGE: "Deleted",
  PROCESS_SUCCESSFULLY: "Successfully",
  INSERTING_CANCELLED: "Inserting Cancelled",
  EDITING_CANCELLED: "Editing Cancelled",
  DELETING_CANCELLED: "Deleting Cancelled",
  NO_DESCRIPTION: " no description ",
  SORT_BY_NAME: "By Name",
  SORT_BY_ID: "By ID",
  SORT_NAME: "Sort",
  SORT_ASC: "ASC",
  SORT_DESC: "DESC"
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/PopupModal.vue?vue&type=style&index=0&id=9cfc8a2c&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/PopupModal.vue?vue&type=style&index=0&id=9cfc8a2c&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".align-left[data-v-9cfc8a2c] {\n  text-align: left !important;\n}\n.align-right[data-v-9cfc8a2c] {\n  text-align: right !important;\n}\n.align-center[data-v-9cfc8a2c] {\n  text-align: center !important;\n}\n.fade-enter-active[data-v-9cfc8a2c],\n.fade-leave-active[data-v-9cfc8a2c] {\n  transition: opacity 0.3s;\n}\n.fade-enter[data-v-9cfc8a2c],\n.fade-leave-to[data-v-9cfc8a2c] {\n  opacity: 0;\n}\n.popup-modal[data-v-9cfc8a2c] {\n  color: #44d9e8;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  z-index: 1;\n}\n.window[data-v-9cfc8a2c] {\n  background: #6f42c1;\n  border-radius: 5px;\n  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);\n  max-width: 480px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 1.6rem;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/DeviceTypes.vue?vue&type=style&index=0&id=c6c572a2&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/DeviceTypes.vue?vue&type=style&index=0&id=c6c572a2&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".row-shadow[data-v-c6c572a2] {\n  box-shadow: #6f42c1 0px 0px 10px;\n  margin: 0px;\n}\n.device-image[data-v-c6c572a2] {\n  width: 70px;\n  margin-top: -50px;\n  margin-bottom: -60px;\n  margin-left: -10px;\n  border-radius: 10px;\n  box-shadow: #6f42c1 0px 0px 10px;\n}\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n.device-image[data-v-c6c572a2] {\n    width: 50px;\n    margin-top: -55px;\n    margin-bottom: -29px;\n    margin-left: -249px;\n    border-radius: 10px;\n    box-shadow: #6f42c1 0px 0px 10px;\n}\n}\n.align-left[data-v-c6c572a2] {\n  text-align: left !important;\n}\n.align-right[data-v-c6c572a2] {\n  text-align: right !important;\n}\n.align-center[data-v-c6c572a2] {\n  text-align: center !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/PopupModal.vue?vue&type=style&index=0&id=9cfc8a2c&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/PopupModal.vue?vue&type=style&index=0&id=9cfc8a2c&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopupModal_vue_vue_type_style_index_0_id_9cfc8a2c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PopupModal.vue?vue&type=style&index=0&id=9cfc8a2c&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/PopupModal.vue?vue&type=style&index=0&id=9cfc8a2c&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopupModal_vue_vue_type_style_index_0_id_9cfc8a2c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopupModal_vue_vue_type_style_index_0_id_9cfc8a2c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/DeviceTypes.vue?vue&type=style&index=0&id=c6c572a2&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/DeviceTypes.vue?vue&type=style&index=0&id=c6c572a2&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeviceTypes_vue_vue_type_style_index_0_id_c6c572a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeviceTypes.vue?vue&type=style&index=0&id=c6c572a2&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/DeviceTypes.vue?vue&type=style&index=0&id=c6c572a2&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeviceTypes_vue_vue_type_style_index_0_id_c6c572a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeviceTypes_vue_vue_type_style_index_0_id_c6c572a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/common/ConfirmDialogue.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/common/ConfirmDialogue.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConfirmDialogue_vue_vue_type_template_id_d83c0302__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfirmDialogue.vue?vue&type=template&id=d83c0302 */ "./resources/js/components/common/ConfirmDialogue.vue?vue&type=template&id=d83c0302");
/* harmony import */ var _ConfirmDialogue_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmDialogue.vue?vue&type=script&lang=js */ "./resources/js/components/common/ConfirmDialogue.vue?vue&type=script&lang=js");
/* harmony import */ var _home_maxim_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_maxim_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ConfirmDialogue_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ConfirmDialogue_vue_vue_type_template_id_d83c0302__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/common/ConfirmDialogue.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/common/Paginator.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/common/Paginator.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Paginator_vue_vue_type_template_id_3dbf4898__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paginator.vue?vue&type=template&id=3dbf4898 */ "./resources/js/components/common/Paginator.vue?vue&type=template&id=3dbf4898");
/* harmony import */ var _Paginator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paginator.vue?vue&type=script&lang=js */ "./resources/js/components/common/Paginator.vue?vue&type=script&lang=js");
/* harmony import */ var _home_maxim_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_maxim_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Paginator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Paginator_vue_vue_type_template_id_3dbf4898__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/common/Paginator.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/common/PopupModal.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/common/PopupModal.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PopupModal_vue_vue_type_template_id_9cfc8a2c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopupModal.vue?vue&type=template&id=9cfc8a2c&scoped=true */ "./resources/js/components/common/PopupModal.vue?vue&type=template&id=9cfc8a2c&scoped=true");
/* harmony import */ var _PopupModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopupModal.vue?vue&type=script&lang=js */ "./resources/js/components/common/PopupModal.vue?vue&type=script&lang=js");
/* harmony import */ var _PopupModal_vue_vue_type_style_index_0_id_9cfc8a2c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopupModal.vue?vue&type=style&index=0&id=9cfc8a2c&lang=scss&scoped=true */ "./resources/js/components/common/PopupModal.vue?vue&type=style&index=0&id=9cfc8a2c&lang=scss&scoped=true");
/* harmony import */ var _home_maxim_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_maxim_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PopupModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PopupModal_vue_vue_type_template_id_9cfc8a2c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-9cfc8a2c"],['__file',"resources/js/components/common/PopupModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/device_types/AddDeviceType.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/device_types/AddDeviceType.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddDeviceType_vue_vue_type_template_id_20b1311d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddDeviceType.vue?vue&type=template&id=20b1311d */ "./resources/js/components/device_types/AddDeviceType.vue?vue&type=template&id=20b1311d");
/* harmony import */ var _AddDeviceType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddDeviceType.vue?vue&type=script&lang=js */ "./resources/js/components/device_types/AddDeviceType.vue?vue&type=script&lang=js");
/* harmony import */ var _home_maxim_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_maxim_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AddDeviceType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AddDeviceType_vue_vue_type_template_id_20b1311d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/device_types/AddDeviceType.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/device_types/DeviceTypes.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/device_types/DeviceTypes.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeviceTypes_vue_vue_type_template_id_c6c572a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeviceTypes.vue?vue&type=template&id=c6c572a2&scoped=true */ "./resources/js/components/device_types/DeviceTypes.vue?vue&type=template&id=c6c572a2&scoped=true");
/* harmony import */ var _DeviceTypes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeviceTypes.vue?vue&type=script&lang=js */ "./resources/js/components/device_types/DeviceTypes.vue?vue&type=script&lang=js");
/* harmony import */ var _DeviceTypes_vue_vue_type_style_index_0_id_c6c572a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeviceTypes.vue?vue&type=style&index=0&id=c6c572a2&lang=scss&scoped=true */ "./resources/js/components/device_types/DeviceTypes.vue?vue&type=style&index=0&id=c6c572a2&lang=scss&scoped=true");
/* harmony import */ var _home_maxim_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_maxim_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_DeviceTypes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DeviceTypes_vue_vue_type_template_id_c6c572a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-c6c572a2"],['__file',"resources/js/components/device_types/DeviceTypes.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/common/ConfirmDialogue.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/common/ConfirmDialogue.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConfirmDialogue_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConfirmDialogue_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ConfirmDialogue.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/ConfirmDialogue.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/common/Paginator.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/common/Paginator.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Paginator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Paginator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Paginator.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Paginator.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/common/PopupModal.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/common/PopupModal.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopupModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopupModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PopupModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/PopupModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/device_types/AddDeviceType.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/device_types/AddDeviceType.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddDeviceType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddDeviceType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddDeviceType.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/AddDeviceType.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/device_types/DeviceTypes.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/device_types/DeviceTypes.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeviceTypes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeviceTypes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeviceTypes.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/DeviceTypes.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/common/ConfirmDialogue.vue?vue&type=template&id=d83c0302":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/common/ConfirmDialogue.vue?vue&type=template&id=d83c0302 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConfirmDialogue_vue_vue_type_template_id_d83c0302__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConfirmDialogue_vue_vue_type_template_id_d83c0302__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ConfirmDialogue.vue?vue&type=template&id=d83c0302 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/ConfirmDialogue.vue?vue&type=template&id=d83c0302");


/***/ }),

/***/ "./resources/js/components/common/Paginator.vue?vue&type=template&id=3dbf4898":
/*!************************************************************************************!*\
  !*** ./resources/js/components/common/Paginator.vue?vue&type=template&id=3dbf4898 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Paginator_vue_vue_type_template_id_3dbf4898__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Paginator_vue_vue_type_template_id_3dbf4898__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Paginator.vue?vue&type=template&id=3dbf4898 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Paginator.vue?vue&type=template&id=3dbf4898");


/***/ }),

/***/ "./resources/js/components/common/PopupModal.vue?vue&type=template&id=9cfc8a2c&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/common/PopupModal.vue?vue&type=template&id=9cfc8a2c&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopupModal_vue_vue_type_template_id_9cfc8a2c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopupModal_vue_vue_type_template_id_9cfc8a2c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PopupModal.vue?vue&type=template&id=9cfc8a2c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/PopupModal.vue?vue&type=template&id=9cfc8a2c&scoped=true");


/***/ }),

/***/ "./resources/js/components/device_types/AddDeviceType.vue?vue&type=template&id=20b1311d":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/device_types/AddDeviceType.vue?vue&type=template&id=20b1311d ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddDeviceType_vue_vue_type_template_id_20b1311d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddDeviceType_vue_vue_type_template_id_20b1311d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddDeviceType.vue?vue&type=template&id=20b1311d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/AddDeviceType.vue?vue&type=template&id=20b1311d");


/***/ }),

/***/ "./resources/js/components/device_types/DeviceTypes.vue?vue&type=template&id=c6c572a2&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/device_types/DeviceTypes.vue?vue&type=template&id=c6c572a2&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeviceTypes_vue_vue_type_template_id_c6c572a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeviceTypes_vue_vue_type_template_id_c6c572a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeviceTypes.vue?vue&type=template&id=c6c572a2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/DeviceTypes.vue?vue&type=template&id=c6c572a2&scoped=true");


/***/ }),

/***/ "./resources/js/components/common/PopupModal.vue?vue&type=style&index=0&id=9cfc8a2c&lang=scss&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/common/PopupModal.vue?vue&type=style&index=0&id=9cfc8a2c&lang=scss&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopupModal_vue_vue_type_style_index_0_id_9cfc8a2c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PopupModal.vue?vue&type=style&index=0&id=9cfc8a2c&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/PopupModal.vue?vue&type=style&index=0&id=9cfc8a2c&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/device_types/DeviceTypes.vue?vue&type=style&index=0&id=c6c572a2&lang=scss&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/device_types/DeviceTypes.vue?vue&type=style&index=0&id=c6c572a2&lang=scss&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeviceTypes_vue_vue_type_style_index_0_id_c6c572a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeviceTypes.vue?vue&type=style&index=0&id=c6c572a2&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/DeviceTypes.vue?vue&type=style&index=0&id=c6c572a2&lang=scss&scoped=true");


/***/ })

}]);