(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_device_types_DeviceTypes_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/ConfirmDialogue.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/ConfirmDialogue.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
      }
      // Once we set our config, we tell the popup modal to open 
      this.$refs.popup.open();
      // Return promise so the caller can get results
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
      this.resolvePromise(false);
      // Or you can throw an error
      // this.rejectPromise(new Error('User cancelled the dialogue'))
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Imager.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Imager.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_PopupModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/common/PopupModal.vue */ "./resources/js/components/common/PopupModal.vue");
/* harmony import */ var _strings_constants_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../strings_constants/strings */ "./resources/js/components/strings_constants/strings.js");
/* harmony import */ var vue_cropperjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-cropperjs */ "./node_modules/vue-cropperjs/dist/VueCropper.js");
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cropperjs/dist/cropper.css */ "./node_modules/cropperjs/dist/cropper.css");
// import Cropper from 'cropperjs';




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    PopupModal: _components_common_PopupModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    VueCropper: vue_cropperjs__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      image: "images/d_200.png",
      resolvePromise: undefined,
      rejectPromise: undefined,
      imageEdit: "imageEdit",
      okButton: "Save",
      // Text for confirm button; leave it empty because we don't know what we're using it for
      cancelButton: _strings_constants_strings__WEBPACK_IMPORTED_MODULE_1__["default"].CANCEL_STRING // text for cancel button
    };
  },
  created: function created() {
    console.log('loaded');
    //createImager()
  },

  methods: {
    createImager: function createImager() {
      var _this = this;
      var optsAdd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.$refs.popup.open(1);
      return new Promise(function (resolve, reject) {
        _this.resolvePromise = resolve;
        _this.rejectPromise = reject;
      });
    },
    _ok: function _ok() {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Paginator.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Paginator.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Paginator',
  // props: [
  //     "items",
  //     "pageCount",
  //     "currentPage",
  //     "nextPage",
  //     "prevPage"
  // ],
  data: function data() {
    return {
      pagesCount: 0,
      currentPage: 0,
      itemsPerPage: 0,
      recordsCount: 0,
      pageLink: "",
      nextPage: "",
      prevPage: ""
    };
  },
  created: function created() {},
  mounted: function mounted() {
    //console.log()
    //this.$parent.$emit('test', [1, '1'])
    //this.$parent.test(1, 2)
  },
  methods: {
    setPaginator: function setPaginator() {
      var optsAdd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.pagesCount = optsAdd.pagesCount;
      this.currentPage = optsAdd.currentPage;
      this.itemsPerPage = optsAdd.itemsPerPage;
      this.recordsCount = optsAdd.recordsCount;
      //console.log(this.pages, this.currentPage)
      // this.pages = optsAdd.itemsCount
    },
    setPage: function setPage(_currentPage, _itemsPerPage) {
      this.$parent.getData(_currentPage, _itemsPerPage);
    }
  },
  computed: {},
  watch: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/PopupModal.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/PopupModal.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PopupModal',
  data: function data() {
    return {
      isVisible: false,
      dialogSize: 0 //0 - 50%, 1 - 75%, 2 - 100%
    };
  },

  methods: {
    open: function open() {
      var $dialogSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.isVisible = true;
      this.dialogSize = $dialogSize;
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_PopupModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/common/PopupModal.vue */ "./resources/js/components/common/PopupModal.vue");
/* harmony import */ var _strings_constants_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../strings_constants/strings */ "./resources/js/components/strings_constants/strings.js");
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
      // console.log(this);
      // Once we set our config, we tell the popup modal to open

      this.$refs.popup.open();
      //console.log('gdti: ', this.$refs.types.getDeviceTypeID());

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
      this.resolvePromise(false);
      // Or you can throw an error
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_ConfirmDialogue_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/common/ConfirmDialogue.vue */ "./resources/js/components/common/ConfirmDialogue.vue");
/* harmony import */ var _AddDeviceType_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddDeviceType.vue */ "./resources/js/components/device_types/AddDeviceType.vue");
/* harmony import */ var _components_common_Paginator_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/common/Paginator.vue */ "./resources/js/components/common/Paginator.vue");
/* harmony import */ var _strings_constants_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../strings_constants/strings */ "./resources/js/components/strings_constants/strings.js");
/* harmony import */ var _rest_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rest_api.js */ "./resources/js/rest_api.js");
/* harmony import */ var _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/strings_constants/device_types/index */ "./resources/js/components/strings_constants/device_types/index.js");
/* harmony import */ var _components_common_js_Sorting_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/common/js/Sorting.js */ "./resources/js/components/common/js/Sorting.js");
/* harmony import */ var _common_js_ParsingErrors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/js/ParsingErrors.js */ "./resources/js/components/common/js/ParsingErrors.js");
/* harmony import */ var _components_common_Imager_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/common/Imager.vue */ "./resources/js/components/common/Imager.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ConfirmDialogue: _components_common_ConfirmDialogue_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    AddDeviceType: _AddDeviceType_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Paginator: _components_common_Paginator_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Imager: _components_common_Imager_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      device_types: [],
      deviceTypesVisible: false,
      compactView: true,
      filteredDeviceTypes: [],
      //filtered array of devices
      dataDescription: "",
      //table data description label
      device_type_filter: "",
      //filtering string
      sortOrderStrings: [_strings_constants_strings__WEBPACK_IMPORTED_MODULE_3__["default"].SORT_ASC, _strings_constants_strings__WEBPACK_IMPORTED_MODULE_3__["default"].SORT_DESC],
      sortOrder: _strings_constants_strings__WEBPACK_IMPORTED_MODULE_3__["default"].SORT_ASC,
      sortDirection: false,
      sortColumn: "device_type_name",
      sortRules: [{
        key: "device_type_name",
        title: _strings_constants_strings__WEBPACK_IMPORTED_MODULE_3__["default"].SORT_BY_NAME
      }, {
        key: "id",
        title: _strings_constants_strings__WEBPACK_IMPORTED_MODULE_3__["default"].SORT_BY_ID
      }]
    };
  },
  created: function created() {
    this.page_description = _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_5__["default"].DEVICE_TYPE_PAGE_DESCRIPTION;
    if (localStorage.DeviceTypeCompactView == null) {
      localStorage.DeviceTypeCompactView = this.compactView;
    }
    this.dataDescription = _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_5__["default"].DEVICE_TYPE_DATA_DESCRIPTION; //device dataset description

    this.getData();
  },
  mounted: function mounted() {
    if (localStorage.getItem('CompactView')) {
      this.compactView = localStorage.getItem('CompactView') === 'true';
    }
  },
  watch: {
    device_type_filter: function device_type_filter() {
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
      return _strings_constants_strings__WEBPACK_IMPORTED_MODULE_3__["default"].SortingCaption(this.sortColumn, this.sortDirection);
    } // getCompactView() {
    //     return this.compactView;
    // },
  },
  methods: {
    openImager: function openImager() {
      this.$refs.imager.createImager();
    },
    doSort: function doSort($column) {
      _components_common_js_Sorting_js__WEBPACK_IMPORTED_MODULE_6__["default"].doSort(this.filteredDeviceTypes, $column, this.sortDirection);
      this.sortColumn = $column;
    },
    doFilter: function doFilter() {
      var _this = this;
      this.filteredDeviceTypes = this.device_types;
      var res = this.filteredDeviceTypes.filter(function (device_type) {
        if (_this.device_type_filter === "") return true;else return device_type.device_type_name.toLowerCase().indexOf(_this.device_type_filter.toLowerCase()) > -1;
      });
      if (this.device_types.length > res.length) {
        this.filteredDeviceTypes = res;
        console.log(res);
        this.doSort();
      }
      // return res;
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
              fetch(_rest_api_js__WEBPACK_IMPORTED_MODULE_4__["default"].api_devices_types_read_page + _currentPage + "/" + _itemsPerPage).then(function (response) {
                return response.json();
              }).then(function (response) {
                _this2.device_types = response.data;
                _this2.filteredDeviceTypes = response.data;
                // this.processStrings();
                //MessagesConstants.processDeviceTypeStrings(this.filteredDeviceTypes)

                _this2.$refs.paginatorDeviceTypes.setPaginator({
                  pagesCount: response.paginator.PagesCount,
                  currentPage: response.paginator.CurrentPage,
                  itemsPerPage: response.paginator.ItemsPerPage,
                  recordsCount: response.paginator.RecordsCount
                });
                _this2.device_types = _this2.filteredDeviceTypes;
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
    doDeleteType: function doDeleteType(key, id) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var confirmDelete;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this3.$refs.confirmDialogue.showDialogue({
                title: _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_5__["default"].DEVICE_TYPE_DELETING_CAPTION,
                message: _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_5__["default"].DEVICE_TYPE_DELETING_MESSAGE + '"' + _this3.filteredDeviceTypes[key].device_type_name + '"?',
                okButton: _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_5__["default"].DEVICE_TYPE_DELETING_CAPTION
              });
            case 2:
              confirmDelete = _context2.sent;
              if (confirmDelete) {
                axios["delete"](_rest_api_js__WEBPACK_IMPORTED_MODULE_4__["default"].api_device_type_delete + id).then(function (resp) {
                  _this3.filteredDeviceTypes.splice(key, 1);
                  _this3.device_types = _this3.filteredDeviceTypes;
                  // console.log(key, id, " - deleted");
                  _this3.$root.$refs.toaster.showMessage(_strings_constants_strings__WEBPACK_IMPORTED_MODULE_3__["default"].DELETED_MESSAGE, _strings_constants_strings__WEBPACK_IMPORTED_MODULE_3__["default"].PROCESS_SUCCESSFULLY);
                })["catch"](function (error) {
                  console.log(error);
                });
              } else {
                console.log(_strings_constants_strings__WEBPACK_IMPORTED_MODULE_3__["default"].DELETING_CANCELLED);
              }
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    setDeviceType: function setDeviceType() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _add;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this4.$refs.addDeviceType.showDialogue({
                edit_mode: false,
                title: _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_5__["default"].DEVICE_TYPE_ADDING_TITLE,
                message: _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_5__["default"].DEVICE_TYPE_ADDING_MESSAGE,
                device_type_name: "",
                device_type_desc: "",
                device_type_image: "",
                okButton: _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_5__["default"].DEVICE_TYPE_ADDBUTTON_CAPTION
              });
            case 2:
              _add = _context3.sent;
              if (_add) {
                axios.post(_rest_api_js__WEBPACK_IMPORTED_MODULE_4__["default"].api_device_type_create, {
                  device_type_name: _this4.$refs.addDeviceType.device_type_name,
                  device_type_image: _this4.$refs.addDeviceType.device_type_image,
                  device_type_desc: _this4.$refs.addDeviceType.device_type_desc
                }).then(function (resp) {
                  // console.log(resp['data']);
                  var newDevice = {
                    device_type_name: resp['data'].device_type_name,
                    device_type_desc: resp['data'].device_type_desc,
                    device_type_image: resp['data'].device_type_image,
                    id: resp['data'].id
                  };
                  _this4.device_types.push(newDevice);
                  _this4.$root.$refs.toaster.showMessage(_strings_constants_strings__WEBPACK_IMPORTED_MODULE_3__["default"].ADDED_MESSAGE, _strings_constants_strings__WEBPACK_IMPORTED_MODULE_3__["default"].PROCESS_SUCCESSFULLY);
                })["catch"](function (error) {
                  //
                  //const Toaster = app.component('toaster')
                  _this4.$root.$refs.toaster.showMessage(_strings_constants_strings__WEBPACK_IMPORTED_MODULE_3__["default"].INSERTING_ERROR, _common_js_ParsingErrors_js__WEBPACK_IMPORTED_MODULE_7__["default"].getError(error), _common_js_ParsingErrors_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERROR_LEVEL_ERROR);
                });
              } else {
                console.log(_strings_constants_strings__WEBPACK_IMPORTED_MODULE_3__["default"].INSERTING_CANCELLED);
              }
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    doEditType: function doEditType(key, id) {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _edit, editDeviceTypePost;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this5.$refs.addDeviceType.showDialogue({
                edit_mode: true,
                title: _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_5__["default"].DEVICE_TYPE_EDITING_TITLE,
                message: _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_5__["default"].DEVICE_TYPE_EDITING_MESSAGE,
                device_type_name: _this5.device_types[key].device_type_name,
                device_type_desc: _this5.device_types[key].device_type_desc,
                device_type_image: _this5.device_types[key].device_type_image,
                okButton: _components_strings_constants_device_types_index__WEBPACK_IMPORTED_MODULE_5__["default"].DEVICE_TYPE_EDITBUTTON_CAPTION
              });
            case 2:
              _edit = _context4.sent;
              if (_edit) {
                editDeviceTypePost = {
                  device_type_name: _this5.$refs.addDeviceType.device_type_name,
                  device_type_image: _this5.$refs.addDeviceType.device_type_image,
                  device_type_desc: _this5.$refs.addDeviceType.device_type_desc
                }; //console.log(editDeviceTypePost);
                axios.put(_rest_api_js__WEBPACK_IMPORTED_MODULE_4__["default"].api_device_type_update + id, editDeviceTypePost).then(function (resp) {
                  // console.log(resp['data']);
                  _this5.device_types[key].device_type_name = resp['data'].device_type_name;
                  _this5.device_types[key].device_type_desc = resp['data'].device_type_desc;
                  _this5.device_types[key].device_type_image = resp['data'].device_type_image;
                  _this5.$root.$refs.toaster.showMessage(_strings_constants_strings__WEBPACK_IMPORTED_MODULE_3__["default"].EDITED_MESSAGE, _strings_constants_strings__WEBPACK_IMPORTED_MODULE_3__["default"].PROCESS_SUCCESSFULLY);
                }).then(function (resp) {
                  _this5.$root.$refs.DeviceRef.getData();
                })["catch"](function (error) {
                  _this5.$root.$refs.toaster.showMessage(_strings_constants_strings__WEBPACK_IMPORTED_MODULE_3__["default"].EDITING_ERROR, _common_js_ParsingErrors_js__WEBPACK_IMPORTED_MODULE_7__["default"].getError(error), _common_js_ParsingErrors_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERROR_LEVEL_ERROR);
                });
              } else {
                console.log(_strings_constants_strings__WEBPACK_IMPORTED_MODULE_3__["default"].EDITING_CANCELLED);
              }
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    ShowHide: function ShowHide(isVisible) {
      this.deviceTypesVisible = isVisible;
    },
    getVisible: function getVisible() {
      return this.deviceTypesVisible;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/ConfirmDialogue.vue?vue&type=template&id=d83c0302":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/ConfirmDialogue.vue?vue&type=template&id=d83c0302 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.message), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "btn btn-danger w-25 mx-1",
        onClick: _cache[0] || (_cache[0] = function () {
          return $options._confirm && $options._confirm.apply($options, arguments);
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.okButton), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary w-25 mx-1",
        onClick: _cache[1] || (_cache[1] = function () {
          return $options._cancel && $options._cancel.apply($options, arguments);
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.cancelButton), 1 /* TEXT */)])];
    }),

    _: 1 /* STABLE */
  }, 512 /* NEED_PATCH */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Imager.vue?vue&type=template&id=b6ba0500&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Imager.vue?vue&type=template&id=b6ba0500&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-b6ba0500"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* HOISTED */);
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cropper = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vue-cropper");
  var _component_PopupModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PopupModal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Wrap the image or canvas element with a block element (container) "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PopupModal, {
    ref: "popup"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vue_cropper, {
        ref: "cropper",
        src: $data.image,
        style: {
          "height": "100%",
          "width": "100%"
        }
      }, null, 8 /* PROPS */, ["src"]), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-danger mx-1 btn-width-40",
        onClick: _cache[0] || (_cache[0] = function () {
          return $options._ok && $options._ok.apply($options, arguments);
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.okButton), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-secondary mx-1 btn-width-40",
        onClick: _cache[1] || (_cache[1] = function () {
          return $options._cancel && $options._cancel.apply($options, arguments);
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.cancelButton), 1 /* TEXT */)])])];
    }),

    _: 1 /* STABLE */
  }, 512 /* NEED_PATCH */)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Paginator.vue?vue&type=template&id=3dbf4898":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Paginator.vue?vue&type=template&id=3dbf4898 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mb-4"
}, null, -1 /* HOISTED */);
var _hoisted_2 = {
  "class": "flex-right rounded-2 pt-2"
};
var _hoisted_3 = {
  "class": "pagination text-center"
};
var _hoisted_4 = {
  "class": "page-item"
};
var _hoisted_5 = {
  "class": "page-link",
  disabled: ""
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "px-2"
}, null, -1 /* HOISTED */);
var _hoisted_7 = {
  "class": "pagination text-center"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "px-2"
}, null, -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "pagination text-center mx-3"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "page-link"
}, "«", -1 /* HOISTED */);
var _hoisted_11 = [_hoisted_10];
var _hoisted_12 = ["page"];
var _hoisted_13 = ["onClick"];
var _hoisted_14 = {
  "class": "page-item"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_5, "Total records: [ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.recordsCount) + " ] ", 1 /* TEXT */)])]), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
      'disabled': $data.itemsPerPage == 2
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "page-link",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.setPage(1, 2);
    })
  }, "2")], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
      'disabled': $data.itemsPerPage == 5
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "page-link",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.setPage(1, 5);
    })
  }, "5")], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
      'disabled': $data.itemsPerPage == 10
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "page-link",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.setPage(1, 10);
    })
  }, "10")], 2 /* CLASS */)]), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
      'disabled': $data.currentPage == 1
    }]),
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.setPage(1, $data.itemsPerPage);
    })
  }, _hoisted_11, 2 /* CLASS */), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.pagesCount, function (page, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
        'disabled': page == $data.currentPage
      }]),
      key: key,
      page: page
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "page-link",
      onClick: function onClick($event) {
        return $options.setPage(page, $data.itemsPerPage);
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(page), 9 /* TEXT, PROPS */, _hoisted_13)], 10 /* CLASS, PROPS */, _hoisted_12);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-link", {
      'disabled': $data.pagesCount == $data.currentPage
    }]),
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.setPage($data.pagesCount, $data.itemsPerPage);
    })
  }, "»", 2 /* CLASS */)])])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/PopupModal.vue?vue&type=template&id=9cfc8a2c&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/PopupModal.vue?vue&type=template&id=9cfc8a2c&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade",
    duration: {
      enter: 1000,
      leave: 200
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.isVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["window modal-dialog modal-content bg-light text-dark", {
          'w-50': $data.dialogSize == 0,
          'w-75 h-75': $data.dialogSize == 1,
          'w-100 h-100': $data.dialogSize == 2
        }])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)], 2 /* CLASS */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 3 /* FORWARDED */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/AddDeviceType.vue?vue&type=template&id=20b1311d":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/AddDeviceType.vue?vue&type=template&id=20b1311d ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
}, "Device Type Name", -1 /* HOISTED */);
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "px-2"
}, "Device Type Desc", -1 /* HOISTED */);
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "px-2"
}, "Device Type Image", -1 /* HOISTED */);
var _hoisted_7 = {
  "class": "btns"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PopupModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PopupModal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PopupModal, {
    ref: "popup"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.title), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.device_type_name = $event;
        }),
        "class": "form-control p-2 mb-4",
        placeholder: "Input Device Type Name"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.device_type_name]]), _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
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
      }, "\n\n            ", 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.device_type_desc]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input v-model=\"device_type_desc\" class=\"form-control p-2 mb-4\" placeholder=\"Input Device Type Desc\"/> "), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.device_type_image = $event;
        }),
        "class": "form-control p-2 mb-4",
        placeholder: "Input Device Type Image"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.device_type_image]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-danger mx-1 btn-width-40",
        onClick: _cache[3] || (_cache[3] = function () {
          return $options._confirm && $options._confirm.apply($options, arguments);
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.okButton), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-secondary mx-1 btn-width-40",
        onClick: _cache[4] || (_cache[4] = function () {
          return $options._cancel && $options._cancel.apply($options, arguments);
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.cancelButton), 1 /* TEXT */)])];
    }),

    _: 1 /* STABLE */
  }, 512 /* NEED_PATCH */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/DeviceTypes.vue?vue&type=template&id=c6c572a2":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/DeviceTypes.vue?vue&type=template&id=c6c572a2 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
}, " Device Types ", -1 /* HOISTED */);
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
  "class": "text-info"
};
var _hoisted_23 = {
  "class": "card-body"
};
var _hoisted_24 = {
  "class": "card-subtitle text-muted"
};
var _hoisted_25 = ["src"];
var _hoisted_26 = {
  "class": "card-body"
};
var _hoisted_27 = ["onClick"];
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-edit",
  "aria-hidden": "true"
}, null, -1 /* HOISTED */);
var _hoisted_29 = ["onClick"];
var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-trash",
  "aria-hidden": "true"
}, null, -1 /* HOISTED */);
var _hoisted_31 = {
  "class": "my-2"
};
var _hoisted_32 = ["id"];
var _hoisted_33 = {
  "class": "mx-2 my-2"
};
var _hoisted_34 = {
  "class": "row vertical-center"
};
var _hoisted_35 = {
  "class": "col-sm-1 col-xs-1 col-lg-1"
};
var _hoisted_36 = ["src"];
var _hoisted_37 = {
  "class": "col-sm-1 col-xs-1 col-lg-1 align-left"
};
var _hoisted_38 = {
  "class": "text-info"
};
var _hoisted_39 = {
  "class": "col-sm-7 col-xs-7 col-lg-7 align-left"
};
var _hoisted_40 = {
  "class": "col-sm-3 col-xs-3 col-lg-3 edit-buttons"
};
var _hoisted_41 = ["onClick"];
var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-edit",
  "aria-hidden": "true"
}, null, -1 /* HOISTED */);
var _hoisted_43 = [_hoisted_42];
var _hoisted_44 = ["onClick"];
var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-trash",
  "aria-hidden": "true"
}, null, -1 /* HOISTED */);
var _hoisted_46 = [_hoisted_45];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_AddDeviceType = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AddDeviceType");
  var _component_ConfirmDialogue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ConfirmDialogue");
  var _component_Paginator = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Paginator");
  var _component_Imager = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Imager");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AddDeviceType, {
    ref: "addDeviceType"
  }, null, 512 /* NEED_PATCH */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ConfirmDialogue, {
    ref: "confirmDialogue"
  }, null, 512 /* NEED_PATCH */), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control me-sm-2",
    type: "text",
    placeholder: "Search",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.device_type_filter = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.device_type_filter]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.openImager();
    })
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.SortName), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.sortRules, function (rule) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      "class": "dropdown-item",
      href: "#",
      key: rule.key,
      value: rule.key,
      onClick: function onClick($event) {
        return $options.doSort(rule.key);
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rule.title), 9 /* TEXT, PROPS */, _hoisted_10);
  }), 128 /* KEYED_FRAGMENT */)), _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-item",
    href: "#",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      $data.sortDirection = !$data.sortDirection;
      $options.doSort($data.sortColumn);
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.sortDirection ? $data.sortOrderStrings[0] : $data.sortOrderStrings[1]), 1 /* TEXT */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn btn-primary", {
      'disabled': $data.compactView
    }]),
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $data.compactView = true;
    })
  }, _hoisted_14, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn btn-primary mx-2", {
      'disabled': !$data.compactView
    }]),
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $data.compactView = false;
    })
  }, _hoisted_16, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-primary",
    onClick: _cache[5] || (_cache[5] = function () {
      return $options.setDeviceType && $options.setDeviceType.apply($options, arguments);
    })
  }, " Add Device Type ")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.dataDescription), 1 /* TEXT */)]), !$data.compactView ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.filteredDeviceTypes, function (device_type, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "col-sm-4 col-xs-4 col-lg-4 p-2 fade-in",
      key: key,
      id: device_type.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(device_type.device_type_name) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_22, "(" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(device_type.id) + ")", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(device_type.device_type_desc), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: device_type.device_type_image
    }, null, 8 /* PROPS */, _hoisted_25), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-info btn-width-40 mx-1",
      onClick: function onClick($event) {
        return $options.doEditType(key, device_type.id);
      }
    }, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Edit ")], 8 /* PROPS */, _hoisted_27), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-warning btn-width-40 mx-1",
      onClick: function onClick($event) {
        return $options.doDeleteType(key, device_type.id);
      }
    }, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Delete ")], 8 /* PROPS */, _hoisted_29)])])], 8 /* PROPS */, _hoisted_19);
  }), 128 /* KEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" compact view "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.filteredDeviceTypes, function (device_type, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "card border-primary mb-1 w-100 fade-in",
      key: key,
      id: device_type.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: device_type.device_type_image,
      "class": "device-image"
    }, null, 8 /* PROPS */, _hoisted_36)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(device_type.id), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(device_type.device_type_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-info mx-2",
      onClick: function onClick($event) {
        return $options.doEditType(key, device_type.id);
      }
    }, _hoisted_43, 8 /* PROPS */, _hoisted_41), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-secondary",
      onClick: function onClick($event) {
        return $options.doDeleteType(key, device_type.id);
      }
    }, _hoisted_46, 8 /* PROPS */, _hoisted_44)])])])], 8 /* PROPS */, _hoisted_32);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.compactView]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Paginator, {
    ref: "paginatorDeviceTypes"
  }, null, 512 /* NEED_PATCH */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Imager, {
    ref: "imager"
  }, null, 512 /* NEED_PATCH */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <MyMqtt></MyMqtt> ")], 512 /* NEED_PATCH */)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.deviceTypesVisible]]);
}

/***/ }),

/***/ "./resources/js/components/common/js/ParsingErrors.js":
/*!************************************************************!*\
  !*** ./resources/js/components/common/js/ParsingErrors.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ERROR_LEVEL_INFO: 0,
  ERROR_LEVEL_WARNING: 1,
  ERROR_LEVEL_ERROR: 2,
  getError: function getError($errorObject) {
    var ValidResponse = $errorObject.response.data !== "" ? $errorObject.response.data : $errorObject;
    var _msg = "";
    for (var key in ValidResponse) {
      _msg += key + ": " + ValidResponse[key][0] + "\n\r";
    }
    return _msg.slice(0, -1);
  }
});

/***/ }),

/***/ "./resources/js/components/common/js/Sorting.js":
/*!******************************************************!*\
  !*** ./resources/js/components/common/js/Sorting.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  doSort: function doSort($items, $column, $direction) {
    //console.log(this)
    var column = $column;
    var order = $direction;
    $items.sort(function (a, b) {
      if (column === "id") {
        var nameA = a[column];
        var nameB = b[column];
      } else {
        var nameA = a[column] + "".toUpperCase();
        var nameB = b[column] + "".toUpperCase();
      }
      if (order && nameA > nameB) {
        return -1;
      }
      if (order && nameA < nameB) {
        return 1;
      }
      if (!order && nameA < nameB) {
        return -1;
      }
      if (!order && nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
});

/***/ }),

/***/ "./resources/js/components/strings_constants/device_types/index.js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/strings_constants/device_types/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  DEVICE_TYPE_DELETING_CAPTION: "Delete",
  DEVICE_TYPE_DELETING_MESSAGE: "Are you sure you want to delete this device type ",
  DEVICE_TYPE_DATA_DESCRIPTION: "All producing devices types",
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

/***/ "./node_modules/cropperjs/dist/cropper.js":
/*!************************************************!*\
  !*** ./node_modules/cropperjs/dist/cropper.js ***!
  \************************************************/
/***/ (function(module) {

/*!
 * Cropper.js v1.5.13
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2022-11-20T05:30:46.114Z
 */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  var WINDOW = IS_BROWSER ? window : {};
  var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? 'ontouchstart' in WINDOW.document.documentElement : false;
  var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
  var NAMESPACE = 'cropper';

  // Actions
  var ACTION_ALL = 'all';
  var ACTION_CROP = 'crop';
  var ACTION_MOVE = 'move';
  var ACTION_ZOOM = 'zoom';
  var ACTION_EAST = 'e';
  var ACTION_WEST = 'w';
  var ACTION_SOUTH = 's';
  var ACTION_NORTH = 'n';
  var ACTION_NORTH_EAST = 'ne';
  var ACTION_NORTH_WEST = 'nw';
  var ACTION_SOUTH_EAST = 'se';
  var ACTION_SOUTH_WEST = 'sw';

  // Classes
  var CLASS_CROP = "".concat(NAMESPACE, "-crop");
  var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
  var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
  var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
  var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
  var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
  var CLASS_MOVE = "".concat(NAMESPACE, "-move");

  // Data keys
  var DATA_ACTION = "".concat(NAMESPACE, "Action");
  var DATA_PREVIEW = "".concat(NAMESPACE, "Preview");

  // Drag modes
  var DRAG_MODE_CROP = 'crop';
  var DRAG_MODE_MOVE = 'move';
  var DRAG_MODE_NONE = 'none';

  // Events
  var EVENT_CROP = 'crop';
  var EVENT_CROP_END = 'cropend';
  var EVENT_CROP_MOVE = 'cropmove';
  var EVENT_CROP_START = 'cropstart';
  var EVENT_DBLCLICK = 'dblclick';
  var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
  var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
  var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
  var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
  var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
  var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
  var EVENT_READY = 'ready';
  var EVENT_RESIZE = 'resize';
  var EVENT_WHEEL = 'wheel';
  var EVENT_ZOOM = 'zoom';

  // Mime types
  var MIME_TYPE_JPEG = 'image/jpeg';

  // RegExps
  var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
  var REGEXP_DATA_URL = /^data:/;
  var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
  var REGEXP_TAG_NAME = /^img|canvas$/i;

  // Misc
  // Inspired by the default width and height of a canvas element.
  var MIN_CONTAINER_WIDTH = 200;
  var MIN_CONTAINER_HEIGHT = 100;

  var DEFAULTS = {
    // Define the view mode of the cropper
    viewMode: 0,
    // 0, 1, 2, 3

    // Define the dragging mode of the cropper
    dragMode: DRAG_MODE_CROP,
    // 'crop', 'move' or 'none'

    // Define the initial aspect ratio of the crop box
    initialAspectRatio: NaN,
    // Define the aspect ratio of the crop box
    aspectRatio: NaN,
    // An object with the previous cropping result data
    data: null,
    // A selector for adding extra containers to preview
    preview: '',
    // Re-render the cropper when resize the window
    responsive: true,
    // Restore the cropped area after resize the window
    restore: true,
    // Check if the current image is a cross-origin image
    checkCrossOrigin: true,
    // Check the current image's Exif Orientation information
    checkOrientation: true,
    // Show the black modal
    modal: true,
    // Show the dashed lines for guiding
    guides: true,
    // Show the center indicator for guiding
    center: true,
    // Show the white modal to highlight the crop box
    highlight: true,
    // Show the grid background
    background: true,
    // Enable to crop the image automatically when initialize
    autoCrop: true,
    // Define the percentage of automatic cropping area when initializes
    autoCropArea: 0.8,
    // Enable to move the image
    movable: true,
    // Enable to rotate the image
    rotatable: true,
    // Enable to scale the image
    scalable: true,
    // Enable to zoom the image
    zoomable: true,
    // Enable to zoom the image by dragging touch
    zoomOnTouch: true,
    // Enable to zoom the image by wheeling mouse
    zoomOnWheel: true,
    // Define zoom ratio when zoom the image by wheeling mouse
    wheelZoomRatio: 0.1,
    // Enable to move the crop box
    cropBoxMovable: true,
    // Enable to resize the crop box
    cropBoxResizable: true,
    // Toggle drag mode between "crop" and "move" when click twice on the cropper
    toggleDragModeOnDblclick: true,
    // Size limitation
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: MIN_CONTAINER_WIDTH,
    minContainerHeight: MIN_CONTAINER_HEIGHT,
    // Shortcuts of events
    ready: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null
  };

  var TEMPLATE = '<div class="cropper-container" touch-action="none">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-cropper-action="e"></span>' + '<span class="cropper-line line-n" data-cropper-action="n"></span>' + '<span class="cropper-line line-w" data-cropper-action="w"></span>' + '<span class="cropper-line line-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-e" data-cropper-action="e"></span>' + '<span class="cropper-point point-n" data-cropper-action="n"></span>' + '<span class="cropper-point point-w" data-cropper-action="w"></span>' + '<span class="cropper-point point-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>' + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>' + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>' + '<span class="cropper-point point-se" data-cropper-action="se"></span>' + '</div>' + '</div>';

  /**
   * Check if the given value is not a number.
   */
  var isNaN = Number.isNaN || WINDOW.isNaN;

  /**
   * Check if the given value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a number, else `false`.
   */
  function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }

  /**
   * Check if the given value is a positive number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
   */
  var isPositiveNumber = function isPositiveNumber(value) {
    return value > 0 && value < Infinity;
  };

  /**
   * Check if the given value is undefined.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
   */
  function isUndefined(value) {
    return typeof value === 'undefined';
  }

  /**
   * Check if the given value is an object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is an object, else `false`.
   */
  function isObject(value) {
    return _typeof(value) === 'object' && value !== null;
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  /**
   * Check if the given value is a plain object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
   */
  function isPlainObject(value) {
    if (!isObject(value)) {
      return false;
    }
    try {
      var _constructor = value.constructor;
      var prototype = _constructor.prototype;
      return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
    } catch (error) {
      return false;
    }
  }

  /**
   * Check if the given value is a function.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a function, else `false`.
   */
  function isFunction(value) {
    return typeof value === 'function';
  }
  var slice = Array.prototype.slice;

  /**
   * Convert array-like or iterable object to an array.
   * @param {*} value - The value to convert.
   * @returns {Array} Returns a new array.
   */
  function toArray(value) {
    return Array.from ? Array.from(value) : slice.call(value);
  }

  /**
   * Iterate the given data.
   * @param {*} data - The data to iterate.
   * @param {Function} callback - The process function for each element.
   * @returns {*} The original data.
   */
  function forEach(data, callback) {
    if (data && isFunction(callback)) {
      if (Array.isArray(data) || isNumber(data.length) /* array-like */) {
        toArray(data).forEach(function (value, key) {
          callback.call(data, value, key, data);
        });
      } else if (isObject(data)) {
        Object.keys(data).forEach(function (key) {
          callback.call(data, data[key], key, data);
        });
      }
    }
    return data;
  }

  /**
   * Extend the given object.
   * @param {*} target - The target object to extend.
   * @param {*} args - The rest objects for merging to the target object.
   * @returns {Object} The extended object.
   */
  var assign = Object.assign || function assign(target) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (isObject(target) && args.length > 0) {
      args.forEach(function (arg) {
        if (isObject(arg)) {
          Object.keys(arg).forEach(function (key) {
            target[key] = arg[key];
          });
        }
      });
    }
    return target;
  };
  var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;

  /**
   * Normalize decimal number.
   * Check out {@link https://0.30000000000000004.com/}
   * @param {number} value - The value to normalize.
   * @param {number} [times=100000000000] - The times for normalizing.
   * @returns {number} Returns the normalized number.
   */
  function normalizeDecimalNumber(value) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
    return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
  }
  var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;

  /**
   * Apply styles to the given element.
   * @param {Element} element - The target element.
   * @param {Object} styles - The styles for applying.
   */
  function setStyle(element, styles) {
    var style = element.style;
    forEach(styles, function (value, property) {
      if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
        value = "".concat(value, "px");
      }
      style[property] = value;
    });
  }

  /**
   * Check if the given element has a special class.
   * @param {Element} element - The element to check.
   * @param {string} value - The class to search.
   * @returns {boolean} Returns `true` if the special class was found.
   */
  function hasClass(element, value) {
    return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
  }

  /**
   * Add classes to the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be added.
   */
  function addClass(element, value) {
    if (!value) {
      return;
    }
    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        addClass(elem, value);
      });
      return;
    }
    if (element.classList) {
      element.classList.add(value);
      return;
    }
    var className = element.className.trim();
    if (!className) {
      element.className = value;
    } else if (className.indexOf(value) < 0) {
      element.className = "".concat(className, " ").concat(value);
    }
  }

  /**
   * Remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be removed.
   */
  function removeClass(element, value) {
    if (!value) {
      return;
    }
    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        removeClass(elem, value);
      });
      return;
    }
    if (element.classList) {
      element.classList.remove(value);
      return;
    }
    if (element.className.indexOf(value) >= 0) {
      element.className = element.className.replace(value, '');
    }
  }

  /**
   * Add or remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be toggled.
   * @param {boolean} added - Add only.
   */
  function toggleClass(element, value, added) {
    if (!value) {
      return;
    }
    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        toggleClass(elem, value, added);
      });
      return;
    }

    // IE10-11 doesn't support the second parameter of `classList.toggle`
    if (added) {
      addClass(element, value);
    } else {
      removeClass(element, value);
    }
  }
  var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;

  /**
   * Transform the given string from camelCase to kebab-case
   * @param {string} value - The value to transform.
   * @returns {string} The transformed value.
   */
  function toParamCase(value) {
    return value.replace(REGEXP_CAMEL_CASE, '$1-$2').toLowerCase();
  }

  /**
   * Get data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to get.
   * @returns {string} The data value.
   */
  function getData(element, name) {
    if (isObject(element[name])) {
      return element[name];
    }
    if (element.dataset) {
      return element.dataset[name];
    }
    return element.getAttribute("data-".concat(toParamCase(name)));
  }

  /**
   * Set data to the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to set.
   * @param {string} data - The data value.
   */
  function setData(element, name, data) {
    if (isObject(data)) {
      element[name] = data;
    } else if (element.dataset) {
      element.dataset[name] = data;
    } else {
      element.setAttribute("data-".concat(toParamCase(name)), data);
    }
  }

  /**
   * Remove data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to remove.
   */
  function removeData(element, name) {
    if (isObject(element[name])) {
      try {
        delete element[name];
      } catch (error) {
        element[name] = undefined;
      }
    } else if (element.dataset) {
      // #128 Safari not allows to delete dataset property
      try {
        delete element.dataset[name];
      } catch (error) {
        element.dataset[name] = undefined;
      }
    } else {
      element.removeAttribute("data-".concat(toParamCase(name)));
    }
  }
  var REGEXP_SPACES = /\s\s*/;
  var onceSupported = function () {
    var supported = false;
    if (IS_BROWSER) {
      var once = false;
      var listener = function listener() {};
      var options = Object.defineProperty({}, 'once', {
        get: function get() {
          supported = true;
          return once;
        },
        /**
         * This setter can fix a `TypeError` in strict mode
         * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
         * @param {boolean} value - The value to set
         */
        set: function set(value) {
          once = value;
        }
      });
      WINDOW.addEventListener('test', listener, options);
      WINDOW.removeEventListener('test', listener, options);
    }
    return supported;
  }();

  /**
   * Remove event listener from the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */
  function removeListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (!onceSupported) {
        var listeners = element.listeners;
        if (listeners && listeners[event] && listeners[event][listener]) {
          handler = listeners[event][listener];
          delete listeners[event][listener];
          if (Object.keys(listeners[event]).length === 0) {
            delete listeners[event];
          }
          if (Object.keys(listeners).length === 0) {
            delete element.listeners;
          }
        }
      }
      element.removeEventListener(event, handler, options);
    });
  }

  /**
   * Add event listener to the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */
  function addListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var _handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (options.once && !onceSupported) {
        var _element$listeners = element.listeners,
          listeners = _element$listeners === void 0 ? {} : _element$listeners;
        _handler = function handler() {
          delete listeners[event][listener];
          element.removeEventListener(event, _handler, options);
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          listener.apply(element, args);
        };
        if (!listeners[event]) {
          listeners[event] = {};
        }
        if (listeners[event][listener]) {
          element.removeEventListener(event, listeners[event][listener], options);
        }
        listeners[event][listener] = _handler;
        element.listeners = listeners;
      }
      element.addEventListener(event, _handler, options);
    });
  }

  /**
   * Dispatch event on the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Object} data - The additional event data.
   * @returns {boolean} Indicate if the event is default prevented or not.
   */
  function dispatchEvent(element, type, data) {
    var event;

    // Event and CustomEvent on IE9-11 are global objects, not constructors
    if (isFunction(Event) && isFunction(CustomEvent)) {
      event = new CustomEvent(type, {
        detail: data,
        bubbles: true,
        cancelable: true
      });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, data);
    }
    return element.dispatchEvent(event);
  }

  /**
   * Get the offset base on the document.
   * @param {Element} element - The target element.
   * @returns {Object} The offset data.
   */
  function getOffset(element) {
    var box = element.getBoundingClientRect();
    return {
      left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: box.top + (window.pageYOffset - document.documentElement.clientTop)
    };
  }
  var location = WINDOW.location;
  var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;

  /**
   * Check if the given URL is a cross origin URL.
   * @param {string} url - The target URL.
   * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
   */
  function isCrossOriginURL(url) {
    var parts = url.match(REGEXP_ORIGINS);
    return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
  }

  /**
   * Add timestamp to the given URL.
   * @param {string} url - The target URL.
   * @returns {string} The result URL.
   */
  function addTimestamp(url) {
    var timestamp = "timestamp=".concat(new Date().getTime());
    return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
  }

  /**
   * Get transforms base on the given object.
   * @param {Object} obj - The target object.
   * @returns {string} A string contains transform values.
   */
  function getTransforms(_ref) {
    var rotate = _ref.rotate,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      translateX = _ref.translateX,
      translateY = _ref.translateY;
    var values = [];
    if (isNumber(translateX) && translateX !== 0) {
      values.push("translateX(".concat(translateX, "px)"));
    }
    if (isNumber(translateY) && translateY !== 0) {
      values.push("translateY(".concat(translateY, "px)"));
    }

    // Rotate should come first before scale to match orientation transform
    if (isNumber(rotate) && rotate !== 0) {
      values.push("rotate(".concat(rotate, "deg)"));
    }
    if (isNumber(scaleX) && scaleX !== 1) {
      values.push("scaleX(".concat(scaleX, ")"));
    }
    if (isNumber(scaleY) && scaleY !== 1) {
      values.push("scaleY(".concat(scaleY, ")"));
    }
    var transform = values.length ? values.join(' ') : 'none';
    return {
      WebkitTransform: transform,
      msTransform: transform,
      transform: transform
    };
  }

  /**
   * Get the max ratio of a group of pointers.
   * @param {string} pointers - The target pointers.
   * @returns {number} The result ratio.
   */
  function getMaxZoomRatio(pointers) {
    var pointers2 = _objectSpread2({}, pointers);
    var maxRatio = 0;
    forEach(pointers, function (pointer, pointerId) {
      delete pointers2[pointerId];
      forEach(pointers2, function (pointer2) {
        var x1 = Math.abs(pointer.startX - pointer2.startX);
        var y1 = Math.abs(pointer.startY - pointer2.startY);
        var x2 = Math.abs(pointer.endX - pointer2.endX);
        var y2 = Math.abs(pointer.endY - pointer2.endY);
        var z1 = Math.sqrt(x1 * x1 + y1 * y1);
        var z2 = Math.sqrt(x2 * x2 + y2 * y2);
        var ratio = (z2 - z1) / z1;
        if (Math.abs(ratio) > Math.abs(maxRatio)) {
          maxRatio = ratio;
        }
      });
    });
    return maxRatio;
  }

  /**
   * Get a pointer from an event object.
   * @param {Object} event - The target event object.
   * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
   * @returns {Object} The result pointer contains start and/or end point coordinates.
   */
  function getPointer(_ref2, endOnly) {
    var pageX = _ref2.pageX,
      pageY = _ref2.pageY;
    var end = {
      endX: pageX,
      endY: pageY
    };
    return endOnly ? end : _objectSpread2({
      startX: pageX,
      startY: pageY
    }, end);
  }

  /**
   * Get the center point coordinate of a group of pointers.
   * @param {Object} pointers - The target pointers.
   * @returns {Object} The center point coordinate.
   */
  function getPointersCenter(pointers) {
    var pageX = 0;
    var pageY = 0;
    var count = 0;
    forEach(pointers, function (_ref3) {
      var startX = _ref3.startX,
        startY = _ref3.startY;
      pageX += startX;
      pageY += startY;
      count += 1;
    });
    pageX /= count;
    pageY /= count;
    return {
      pageX: pageX,
      pageY: pageY
    };
  }

  /**
   * Get the max sizes in a rectangle under the given aspect ratio.
   * @param {Object} data - The original sizes.
   * @param {string} [type='contain'] - The adjust type.
   * @returns {Object} The result sizes.
   */
  function getAdjustedSizes(_ref4) {
    var aspectRatio = _ref4.aspectRatio,
      height = _ref4.height,
      width = _ref4.width;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';
    var isValidWidth = isPositiveNumber(width);
    var isValidHeight = isPositiveNumber(height);
    if (isValidWidth && isValidHeight) {
      var adjustedWidth = height * aspectRatio;
      if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
        height = width / aspectRatio;
      } else {
        width = height * aspectRatio;
      }
    } else if (isValidWidth) {
      height = width / aspectRatio;
    } else if (isValidHeight) {
      width = height * aspectRatio;
    }
    return {
      width: width,
      height: height
    };
  }

  /**
   * Get the new sizes of a rectangle after rotated.
   * @param {Object} data - The original sizes.
   * @returns {Object} The result sizes.
   */
  function getRotatedSizes(_ref5) {
    var width = _ref5.width,
      height = _ref5.height,
      degree = _ref5.degree;
    degree = Math.abs(degree) % 180;
    if (degree === 90) {
      return {
        width: height,
        height: width
      };
    }
    var arc = degree % 90 * Math.PI / 180;
    var sinArc = Math.sin(arc);
    var cosArc = Math.cos(arc);
    var newWidth = width * cosArc + height * sinArc;
    var newHeight = width * sinArc + height * cosArc;
    return degree > 90 ? {
      width: newHeight,
      height: newWidth
    } : {
      width: newWidth,
      height: newHeight
    };
  }

  /**
   * Get a canvas which drew the given image.
   * @param {HTMLImageElement} image - The image for drawing.
   * @param {Object} imageData - The image data.
   * @param {Object} canvasData - The canvas data.
   * @param {Object} options - The options.
   * @returns {HTMLCanvasElement} The result canvas.
   */
  function getSourceCanvas(image, _ref6, _ref7, _ref8) {
    var imageAspectRatio = _ref6.aspectRatio,
      imageNaturalWidth = _ref6.naturalWidth,
      imageNaturalHeight = _ref6.naturalHeight,
      _ref6$rotate = _ref6.rotate,
      rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate,
      _ref6$scaleX = _ref6.scaleX,
      scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX,
      _ref6$scaleY = _ref6.scaleY,
      scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
    var aspectRatio = _ref7.aspectRatio,
      naturalWidth = _ref7.naturalWidth,
      naturalHeight = _ref7.naturalHeight;
    var _ref8$fillColor = _ref8.fillColor,
      fillColor = _ref8$fillColor === void 0 ? 'transparent' : _ref8$fillColor,
      _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled,
      imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE,
      _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality,
      imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? 'low' : _ref8$imageSmoothingQ,
      _ref8$maxWidth = _ref8.maxWidth,
      maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth,
      _ref8$maxHeight = _ref8.maxHeight,
      maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight,
      _ref8$minWidth = _ref8.minWidth,
      minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth,
      _ref8$minHeight = _ref8.minHeight,
      minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var maxSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var minSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
    var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight));

    // Note: should always use image's natural sizes for drawing as
    // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90
    var destMaxSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var destMinSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
    var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
    var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
    canvas.width = normalizeDecimalNumber(width);
    canvas.height = normalizeDecimalNumber(height);
    context.fillStyle = fillColor;
    context.fillRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);
    context.rotate(rotate * Math.PI / 180);
    context.scale(scaleX, scaleY);
    context.imageSmoothingEnabled = imageSmoothingEnabled;
    context.imageSmoothingQuality = imageSmoothingQuality;
    context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function (param) {
      return Math.floor(normalizeDecimalNumber(param));
    }))));
    context.restore();
    return canvas;
  }
  var fromCharCode = String.fromCharCode;

  /**
   * Get string from char code in data view.
   * @param {DataView} dataView - The data view for read.
   * @param {number} start - The start index.
   * @param {number} length - The read length.
   * @returns {string} The read result.
   */
  function getStringFromCharCode(dataView, start, length) {
    var str = '';
    length += start;
    for (var i = start; i < length; i += 1) {
      str += fromCharCode(dataView.getUint8(i));
    }
    return str;
  }
  var REGEXP_DATA_URL_HEAD = /^data:.*,/;

  /**
   * Transform Data URL to array buffer.
   * @param {string} dataURL - The Data URL to transform.
   * @returns {ArrayBuffer} The result array buffer.
   */
  function dataURLToArrayBuffer(dataURL) {
    var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
    var binary = atob(base64);
    var arrayBuffer = new ArrayBuffer(binary.length);
    var uint8 = new Uint8Array(arrayBuffer);
    forEach(uint8, function (value, i) {
      uint8[i] = binary.charCodeAt(i);
    });
    return arrayBuffer;
  }

  /**
   * Transform array buffer to Data URL.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
   * @param {string} mimeType - The mime type of the Data URL.
   * @returns {string} The result Data URL.
   */
  function arrayBufferToDataURL(arrayBuffer, mimeType) {
    var chunks = [];

    // Chunk Typed Array for better performance (#435)
    var chunkSize = 8192;
    var uint8 = new Uint8Array(arrayBuffer);
    while (uint8.length > 0) {
      // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
      // eslint-disable-next-line prefer-spread
      chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
      uint8 = uint8.subarray(chunkSize);
    }
    return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
  }

  /**
   * Get orientation value from given array buffer.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
   * @returns {number} The read orientation value.
   */
  function resetAndGetOrientation(arrayBuffer) {
    var dataView = new DataView(arrayBuffer);
    var orientation;

    // Ignores range error when the image does not have correct Exif information
    try {
      var littleEndian;
      var app1Start;
      var ifdStart;

      // Only handle JPEG image (start by 0xFFD8)
      if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
        var length = dataView.byteLength;
        var offset = 2;
        while (offset + 1 < length) {
          if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
            app1Start = offset;
            break;
          }
          offset += 1;
        }
      }
      if (app1Start) {
        var exifIDCode = app1Start + 4;
        var tiffOffset = app1Start + 10;
        if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
          var endianness = dataView.getUint16(tiffOffset);
          littleEndian = endianness === 0x4949;
          if (littleEndian || endianness === 0x4D4D /* bigEndian */) {
            if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
              var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
              if (firstIFDOffset >= 0x00000008) {
                ifdStart = tiffOffset + firstIFDOffset;
              }
            }
          }
        }
      }
      if (ifdStart) {
        var _length = dataView.getUint16(ifdStart, littleEndian);
        var _offset;
        var i;
        for (i = 0; i < _length; i += 1) {
          _offset = ifdStart + i * 12 + 2;
          if (dataView.getUint16(_offset, littleEndian) === 0x0112 /* Orientation */) {
            // 8 is the offset of the current tag's value
            _offset += 8;

            // Get the original orientation value
            orientation = dataView.getUint16(_offset, littleEndian);

            // Override the orientation with its default value
            dataView.setUint16(_offset, 1, littleEndian);
            break;
          }
        }
      }
    } catch (error) {
      orientation = 1;
    }
    return orientation;
  }

  /**
   * Parse Exif Orientation value.
   * @param {number} orientation - The orientation to parse.
   * @returns {Object} The parsed result.
   */
  function parseOrientation(orientation) {
    var rotate = 0;
    var scaleX = 1;
    var scaleY = 1;
    switch (orientation) {
      // Flip horizontal
      case 2:
        scaleX = -1;
        break;

      // Rotate left 180°
      case 3:
        rotate = -180;
        break;

      // Flip vertical
      case 4:
        scaleY = -1;
        break;

      // Flip vertical and rotate right 90°
      case 5:
        rotate = 90;
        scaleY = -1;
        break;

      // Rotate right 90°
      case 6:
        rotate = 90;
        break;

      // Flip horizontal and rotate right 90°
      case 7:
        rotate = 90;
        scaleX = -1;
        break;

      // Rotate left 90°
      case 8:
        rotate = -90;
        break;
    }
    return {
      rotate: rotate,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var render = {
    render: function render() {
      this.initContainer();
      this.initCanvas();
      this.initCropBox();
      this.renderCanvas();
      if (this.cropped) {
        this.renderCropBox();
      }
    },
    initContainer: function initContainer() {
      var element = this.element,
        options = this.options,
        container = this.container,
        cropper = this.cropper;
      var minWidth = Number(options.minContainerWidth);
      var minHeight = Number(options.minContainerHeight);
      addClass(cropper, CLASS_HIDDEN);
      removeClass(element, CLASS_HIDDEN);
      var containerData = {
        width: Math.max(container.offsetWidth, minWidth >= 0 ? minWidth : MIN_CONTAINER_WIDTH),
        height: Math.max(container.offsetHeight, minHeight >= 0 ? minHeight : MIN_CONTAINER_HEIGHT)
      };
      this.containerData = containerData;
      setStyle(cropper, {
        width: containerData.width,
        height: containerData.height
      });
      addClass(element, CLASS_HIDDEN);
      removeClass(cropper, CLASS_HIDDEN);
    },
    // Canvas (image wrapper)
    initCanvas: function initCanvas() {
      var containerData = this.containerData,
        imageData = this.imageData;
      var viewMode = this.options.viewMode;
      var rotated = Math.abs(imageData.rotate) % 180 === 90;
      var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
      var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
      var aspectRatio = naturalWidth / naturalHeight;
      var canvasWidth = containerData.width;
      var canvasHeight = containerData.height;
      if (containerData.height * aspectRatio > containerData.width) {
        if (viewMode === 3) {
          canvasWidth = containerData.height * aspectRatio;
        } else {
          canvasHeight = containerData.width / aspectRatio;
        }
      } else if (viewMode === 3) {
        canvasHeight = containerData.width / aspectRatio;
      } else {
        canvasWidth = containerData.height * aspectRatio;
      }
      var canvasData = {
        aspectRatio: aspectRatio,
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight,
        width: canvasWidth,
        height: canvasHeight
      };
      this.canvasData = canvasData;
      this.limited = viewMode === 1 || viewMode === 2;
      this.limitCanvas(true, true);
      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      canvasData.left = (containerData.width - canvasData.width) / 2;
      canvasData.top = (containerData.height - canvasData.height) / 2;
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      this.initialCanvasData = assign({}, canvasData);
    },
    limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
      var options = this.options,
        containerData = this.containerData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData;
      var viewMode = options.viewMode;
      var aspectRatio = canvasData.aspectRatio;
      var cropped = this.cropped && cropBoxData;
      if (sizeLimited) {
        var minCanvasWidth = Number(options.minCanvasWidth) || 0;
        var minCanvasHeight = Number(options.minCanvasHeight) || 0;
        if (viewMode > 1) {
          minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
          minCanvasHeight = Math.max(minCanvasHeight, containerData.height);
          if (viewMode === 3) {
            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        } else if (viewMode > 0) {
          if (minCanvasWidth) {
            minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
          } else if (minCanvasHeight) {
            minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
          } else if (cropped) {
            minCanvasWidth = cropBoxData.width;
            minCanvasHeight = cropBoxData.height;
            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        }
        var _getAdjustedSizes = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: minCanvasWidth,
          height: minCanvasHeight
        });
        minCanvasWidth = _getAdjustedSizes.width;
        minCanvasHeight = _getAdjustedSizes.height;
        canvasData.minWidth = minCanvasWidth;
        canvasData.minHeight = minCanvasHeight;
        canvasData.maxWidth = Infinity;
        canvasData.maxHeight = Infinity;
      }
      if (positionLimited) {
        if (viewMode > (cropped ? 0 : 1)) {
          var newCanvasLeft = containerData.width - canvasData.width;
          var newCanvasTop = containerData.height - canvasData.height;
          canvasData.minLeft = Math.min(0, newCanvasLeft);
          canvasData.minTop = Math.min(0, newCanvasTop);
          canvasData.maxLeft = Math.max(0, newCanvasLeft);
          canvasData.maxTop = Math.max(0, newCanvasTop);
          if (cropped && this.limited) {
            canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
            canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
            canvasData.maxLeft = cropBoxData.left;
            canvasData.maxTop = cropBoxData.top;
            if (viewMode === 2) {
              if (canvasData.width >= containerData.width) {
                canvasData.minLeft = Math.min(0, newCanvasLeft);
                canvasData.maxLeft = Math.max(0, newCanvasLeft);
              }
              if (canvasData.height >= containerData.height) {
                canvasData.minTop = Math.min(0, newCanvasTop);
                canvasData.maxTop = Math.max(0, newCanvasTop);
              }
            }
          }
        } else {
          canvasData.minLeft = -canvasData.width;
          canvasData.minTop = -canvasData.height;
          canvasData.maxLeft = containerData.width;
          canvasData.maxTop = containerData.height;
        }
      }
    },
    renderCanvas: function renderCanvas(changed, transformed) {
      var canvasData = this.canvasData,
        imageData = this.imageData;
      if (transformed) {
        var _getRotatedSizes = getRotatedSizes({
            width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
            height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
            degree: imageData.rotate || 0
          }),
          naturalWidth = _getRotatedSizes.width,
          naturalHeight = _getRotatedSizes.height;
        var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
        var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
        canvasData.left -= (width - canvasData.width) / 2;
        canvasData.top -= (height - canvasData.height) / 2;
        canvasData.width = width;
        canvasData.height = height;
        canvasData.aspectRatio = naturalWidth / naturalHeight;
        canvasData.naturalWidth = naturalWidth;
        canvasData.naturalHeight = naturalHeight;
        this.limitCanvas(true, false);
      }
      if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
        canvasData.left = canvasData.oldLeft;
      }
      if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
        canvasData.top = canvasData.oldTop;
      }
      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      this.limitCanvas(false, true);
      canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
      canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      setStyle(this.canvas, assign({
        width: canvasData.width,
        height: canvasData.height
      }, getTransforms({
        translateX: canvasData.left,
        translateY: canvasData.top
      })));
      this.renderImage(changed);
      if (this.cropped && this.limited) {
        this.limitCropBox(true, true);
      }
    },
    renderImage: function renderImage(changed) {
      var canvasData = this.canvasData,
        imageData = this.imageData;
      var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
      var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
      assign(imageData, {
        width: width,
        height: height,
        left: (canvasData.width - width) / 2,
        top: (canvasData.height - height) / 2
      });
      setStyle(this.image, assign({
        width: imageData.width,
        height: imageData.height
      }, getTransforms(assign({
        translateX: imageData.left,
        translateY: imageData.top
      }, imageData))));
      if (changed) {
        this.output();
      }
    },
    initCropBox: function initCropBox() {
      var options = this.options,
        canvasData = this.canvasData;
      var aspectRatio = options.aspectRatio || options.initialAspectRatio;
      var autoCropArea = Number(options.autoCropArea) || 0.8;
      var cropBoxData = {
        width: canvasData.width,
        height: canvasData.height
      };
      if (aspectRatio) {
        if (canvasData.height * aspectRatio > canvasData.width) {
          cropBoxData.height = cropBoxData.width / aspectRatio;
        } else {
          cropBoxData.width = cropBoxData.height * aspectRatio;
        }
      }
      this.cropBoxData = cropBoxData;
      this.limitCropBox(true, true);

      // Initialize auto crop area
      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);

      // The width/height of auto crop area must large than "minWidth/Height"
      cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
      cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
      cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
      cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;
      this.initialCropBoxData = assign({}, cropBoxData);
    },
    limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
      var options = this.options,
        containerData = this.containerData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData,
        limited = this.limited;
      var aspectRatio = options.aspectRatio;
      if (sizeLimited) {
        var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
        var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
        var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
        var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height;

        // The min/maxCropBoxWidth/Height must be less than container's width/height
        minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
        minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);
        if (aspectRatio) {
          if (minCropBoxWidth && minCropBoxHeight) {
            if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
              minCropBoxHeight = minCropBoxWidth / aspectRatio;
            } else {
              minCropBoxWidth = minCropBoxHeight * aspectRatio;
            }
          } else if (minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else if (minCropBoxHeight) {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }
          if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
            maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
          } else {
            maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
          }
        }

        // The minWidth/Height must be less than maxWidth/Height
        cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
        cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
        cropBoxData.maxWidth = maxCropBoxWidth;
        cropBoxData.maxHeight = maxCropBoxHeight;
      }
      if (positionLimited) {
        if (limited) {
          cropBoxData.minLeft = Math.max(0, canvasData.left);
          cropBoxData.minTop = Math.max(0, canvasData.top);
          cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
          cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
        } else {
          cropBoxData.minLeft = 0;
          cropBoxData.minTop = 0;
          cropBoxData.maxLeft = containerData.width - cropBoxData.width;
          cropBoxData.maxTop = containerData.height - cropBoxData.height;
        }
      }
    },
    renderCropBox: function renderCropBox() {
      var options = this.options,
        containerData = this.containerData,
        cropBoxData = this.cropBoxData;
      if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
        cropBoxData.left = cropBoxData.oldLeft;
      }
      if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
        cropBoxData.top = cropBoxData.oldTop;
      }
      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
      this.limitCropBox(false, true);
      cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
      cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;
      if (options.movable && options.cropBoxMovable) {
        // Turn to move the canvas when the crop box is equal to the container
        setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
      }
      setStyle(this.cropBox, assign({
        width: cropBoxData.width,
        height: cropBoxData.height
      }, getTransforms({
        translateX: cropBoxData.left,
        translateY: cropBoxData.top
      })));
      if (this.cropped && this.limited) {
        this.limitCanvas(true, true);
      }
      if (!this.disabled) {
        this.output();
      }
    },
    output: function output() {
      this.preview();
      dispatchEvent(this.element, EVENT_CROP, this.getData());
    }
  };

  var preview = {
    initPreview: function initPreview() {
      var element = this.element,
        crossOrigin = this.crossOrigin;
      var preview = this.options.preview;
      var url = crossOrigin ? this.crossOriginUrl : this.url;
      var alt = element.alt || 'The image to preview';
      var image = document.createElement('img');
      if (crossOrigin) {
        image.crossOrigin = crossOrigin;
      }
      image.src = url;
      image.alt = alt;
      this.viewBox.appendChild(image);
      this.viewBoxImage = image;
      if (!preview) {
        return;
      }
      var previews = preview;
      if (typeof preview === 'string') {
        previews = element.ownerDocument.querySelectorAll(preview);
      } else if (preview.querySelector) {
        previews = [preview];
      }
      this.previews = previews;
      forEach(previews, function (el) {
        var img = document.createElement('img');

        // Save the original size for recover
        setData(el, DATA_PREVIEW, {
          width: el.offsetWidth,
          height: el.offsetHeight,
          html: el.innerHTML
        });
        if (crossOrigin) {
          img.crossOrigin = crossOrigin;
        }
        img.src = url;
        img.alt = alt;

        /**
         * Override img element styles
         * Add `display:block` to avoid margin top issue
         * Add `height:auto` to override `height` attribute on IE8
         * (Occur only when margin-top <= -height)
         */
        img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';
        el.innerHTML = '';
        el.appendChild(img);
      });
    },
    resetPreview: function resetPreview() {
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        setStyle(element, {
          width: data.width,
          height: data.height
        });
        element.innerHTML = data.html;
        removeData(element, DATA_PREVIEW);
      });
    },
    preview: function preview() {
      var imageData = this.imageData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData;
      var cropBoxWidth = cropBoxData.width,
        cropBoxHeight = cropBoxData.height;
      var width = imageData.width,
        height = imageData.height;
      var left = cropBoxData.left - canvasData.left - imageData.left;
      var top = cropBoxData.top - canvasData.top - imageData.top;
      if (!this.cropped || this.disabled) {
        return;
      }
      setStyle(this.viewBoxImage, assign({
        width: width,
        height: height
      }, getTransforms(assign({
        translateX: -left,
        translateY: -top
      }, imageData))));
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        var originalWidth = data.width;
        var originalHeight = data.height;
        var newWidth = originalWidth;
        var newHeight = originalHeight;
        var ratio = 1;
        if (cropBoxWidth) {
          ratio = originalWidth / cropBoxWidth;
          newHeight = cropBoxHeight * ratio;
        }
        if (cropBoxHeight && newHeight > originalHeight) {
          ratio = originalHeight / cropBoxHeight;
          newWidth = cropBoxWidth * ratio;
          newHeight = originalHeight;
        }
        setStyle(element, {
          width: newWidth,
          height: newHeight
        });
        setStyle(element.getElementsByTagName('img')[0], assign({
          width: width * ratio,
          height: height * ratio
        }, getTransforms(assign({
          translateX: -left * ratio,
          translateY: -top * ratio
        }, imageData))));
      });
    }
  };

  var events = {
    bind: function bind() {
      var element = this.element,
        options = this.options,
        cropper = this.cropper;
      if (isFunction(options.cropstart)) {
        addListener(element, EVENT_CROP_START, options.cropstart);
      }
      if (isFunction(options.cropmove)) {
        addListener(element, EVENT_CROP_MOVE, options.cropmove);
      }
      if (isFunction(options.cropend)) {
        addListener(element, EVENT_CROP_END, options.cropend);
      }
      if (isFunction(options.crop)) {
        addListener(element, EVENT_CROP, options.crop);
      }
      if (isFunction(options.zoom)) {
        addListener(element, EVENT_ZOOM, options.zoom);
      }
      addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));
      if (options.zoomable && options.zoomOnWheel) {
        addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
          passive: false,
          capture: true
        });
      }
      if (options.toggleDragModeOnDblclick) {
        addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
      }
      addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
      addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));
      if (options.responsive) {
        addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
      }
    },
    unbind: function unbind() {
      var element = this.element,
        options = this.options,
        cropper = this.cropper;
      if (isFunction(options.cropstart)) {
        removeListener(element, EVENT_CROP_START, options.cropstart);
      }
      if (isFunction(options.cropmove)) {
        removeListener(element, EVENT_CROP_MOVE, options.cropmove);
      }
      if (isFunction(options.cropend)) {
        removeListener(element, EVENT_CROP_END, options.cropend);
      }
      if (isFunction(options.crop)) {
        removeListener(element, EVENT_CROP, options.crop);
      }
      if (isFunction(options.zoom)) {
        removeListener(element, EVENT_ZOOM, options.zoom);
      }
      removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);
      if (options.zoomable && options.zoomOnWheel) {
        removeListener(cropper, EVENT_WHEEL, this.onWheel, {
          passive: false,
          capture: true
        });
      }
      if (options.toggleDragModeOnDblclick) {
        removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
      }
      removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
      removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);
      if (options.responsive) {
        removeListener(window, EVENT_RESIZE, this.onResize);
      }
    }
  };

  var handlers = {
    resize: function resize() {
      if (this.disabled) {
        return;
      }
      var options = this.options,
        container = this.container,
        containerData = this.containerData;
      var ratioX = container.offsetWidth / containerData.width;
      var ratioY = container.offsetHeight / containerData.height;
      var ratio = Math.abs(ratioX - 1) > Math.abs(ratioY - 1) ? ratioX : ratioY;

      // Resize when width changed or height changed
      if (ratio !== 1) {
        var canvasData;
        var cropBoxData;
        if (options.restore) {
          canvasData = this.getCanvasData();
          cropBoxData = this.getCropBoxData();
        }
        this.render();
        if (options.restore) {
          this.setCanvasData(forEach(canvasData, function (n, i) {
            canvasData[i] = n * ratio;
          }));
          this.setCropBoxData(forEach(cropBoxData, function (n, i) {
            cropBoxData[i] = n * ratio;
          }));
        }
      }
    },
    dblclick: function dblclick() {
      if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
        return;
      }
      this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
    },
    wheel: function wheel(event) {
      var _this = this;
      var ratio = Number(this.options.wheelZoomRatio) || 0.1;
      var delta = 1;
      if (this.disabled) {
        return;
      }
      event.preventDefault();

      // Limit wheel speed to prevent zoom too fast (#21)
      if (this.wheeling) {
        return;
      }
      this.wheeling = true;
      setTimeout(function () {
        _this.wheeling = false;
      }, 50);
      if (event.deltaY) {
        delta = event.deltaY > 0 ? 1 : -1;
      } else if (event.wheelDelta) {
        delta = -event.wheelDelta / 120;
      } else if (event.detail) {
        delta = event.detail > 0 ? 1 : -1;
      }
      this.zoom(-delta * ratio, event);
    },
    cropStart: function cropStart(event) {
      var buttons = event.buttons,
        button = event.button;
      if (this.disabled

      // Handle mouse event and pointer event and ignore touch event
      || (event.type === 'mousedown' || event.type === 'pointerdown' && event.pointerType === 'mouse') && (
      // No primary button (Usually the left button)
      isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0

      // Open context menu
      || event.ctrlKey)) {
        return;
      }
      var options = this.options,
        pointers = this.pointers;
      var action;
      if (event.changedTouches) {
        // Handle touch event
        forEach(event.changedTouches, function (touch) {
          pointers[touch.identifier] = getPointer(touch);
        });
      } else {
        // Handle mouse event and pointer event
        pointers[event.pointerId || 0] = getPointer(event);
      }
      if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
        action = ACTION_ZOOM;
      } else {
        action = getData(event.target, DATA_ACTION);
      }
      if (!REGEXP_ACTIONS.test(action)) {
        return;
      }
      if (dispatchEvent(this.element, EVENT_CROP_START, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      }

      // This line is required for preventing page zooming in iOS browsers
      event.preventDefault();
      this.action = action;
      this.cropping = false;
      if (action === ACTION_CROP) {
        this.cropping = true;
        addClass(this.dragBox, CLASS_MODAL);
      }
    },
    cropMove: function cropMove(event) {
      var action = this.action;
      if (this.disabled || !action) {
        return;
      }
      var pointers = this.pointers;
      event.preventDefault();
      if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      }
      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          // The first parameter should not be undefined (#432)
          assign(pointers[touch.identifier] || {}, getPointer(touch, true));
        });
      } else {
        assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
      }
      this.change(event);
    },
    cropEnd: function cropEnd(event) {
      if (this.disabled) {
        return;
      }
      var action = this.action,
        pointers = this.pointers;
      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          delete pointers[touch.identifier];
        });
      } else {
        delete pointers[event.pointerId || 0];
      }
      if (!action) {
        return;
      }
      event.preventDefault();
      if (!Object.keys(pointers).length) {
        this.action = '';
      }
      if (this.cropping) {
        this.cropping = false;
        toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
      }
      dispatchEvent(this.element, EVENT_CROP_END, {
        originalEvent: event,
        action: action
      });
    }
  };

  var change = {
    change: function change(event) {
      var options = this.options,
        canvasData = this.canvasData,
        containerData = this.containerData,
        cropBoxData = this.cropBoxData,
        pointers = this.pointers;
      var action = this.action;
      var aspectRatio = options.aspectRatio;
      var left = cropBoxData.left,
        top = cropBoxData.top,
        width = cropBoxData.width,
        height = cropBoxData.height;
      var right = left + width;
      var bottom = top + height;
      var minLeft = 0;
      var minTop = 0;
      var maxWidth = containerData.width;
      var maxHeight = containerData.height;
      var renderable = true;
      var offset;

      // Locking aspect ratio in "free mode" by holding shift key
      if (!aspectRatio && event.shiftKey) {
        aspectRatio = width && height ? width / height : 1;
      }
      if (this.limited) {
        minLeft = cropBoxData.minLeft;
        minTop = cropBoxData.minTop;
        maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
        maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
      }
      var pointer = pointers[Object.keys(pointers)[0]];
      var range = {
        x: pointer.endX - pointer.startX,
        y: pointer.endY - pointer.startY
      };
      var check = function check(side) {
        switch (side) {
          case ACTION_EAST:
            if (right + range.x > maxWidth) {
              range.x = maxWidth - right;
            }
            break;
          case ACTION_WEST:
            if (left + range.x < minLeft) {
              range.x = minLeft - left;
            }
            break;
          case ACTION_NORTH:
            if (top + range.y < minTop) {
              range.y = minTop - top;
            }
            break;
          case ACTION_SOUTH:
            if (bottom + range.y > maxHeight) {
              range.y = maxHeight - bottom;
            }
            break;
        }
      };
      switch (action) {
        // Move crop box
        case ACTION_ALL:
          left += range.x;
          top += range.y;
          break;

        // Resize crop box
        case ACTION_EAST:
          if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }
          check(ACTION_EAST);
          width += range.x;
          if (width < 0) {
            action = ACTION_WEST;
            width = -width;
            left -= width;
          }
          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }
          break;
        case ACTION_NORTH:
          if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }
          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;
          if (height < 0) {
            action = ACTION_SOUTH;
            height = -height;
            top -= height;
          }
          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }
          break;
        case ACTION_WEST:
          if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }
          check(ACTION_WEST);
          width -= range.x;
          left += range.x;
          if (width < 0) {
            action = ACTION_EAST;
            width = -width;
            left -= width;
          }
          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }
          break;
        case ACTION_SOUTH:
          if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }
          check(ACTION_SOUTH);
          height += range.y;
          if (height < 0) {
            action = ACTION_NORTH;
            height = -height;
            top -= height;
          }
          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }
          break;
        case ACTION_NORTH_EAST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
              renderable = false;
              break;
            }
            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
          } else {
            check(ACTION_NORTH);
            check(ACTION_EAST);
            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width += range.x;
            }
            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }
          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            top -= height;
          }
          break;
        case ACTION_NORTH_WEST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
              renderable = false;
              break;
            }
            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
            left += cropBoxData.width - width;
          } else {
            check(ACTION_NORTH);
            check(ACTION_WEST);
            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }
            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }
          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            top -= height;
          }
          break;
        case ACTION_SOUTH_WEST:
          if (aspectRatio) {
            if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
              renderable = false;
              break;
            }
            check(ACTION_WEST);
            width -= range.x;
            left += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_WEST);
            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }
            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }
          if (width < 0 && height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            top -= height;
          }
          break;
        case ACTION_SOUTH_EAST:
          if (aspectRatio) {
            if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
              renderable = false;
              break;
            }
            check(ACTION_EAST);
            width += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_EAST);
            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width += range.x;
            }
            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }
          if (width < 0 && height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            top -= height;
          }
          break;

        // Move canvas
        case ACTION_MOVE:
          this.move(range.x, range.y);
          renderable = false;
          break;

        // Zoom canvas
        case ACTION_ZOOM:
          this.zoom(getMaxZoomRatio(pointers), event);
          renderable = false;
          break;

        // Create crop box
        case ACTION_CROP:
          if (!range.x || !range.y) {
            renderable = false;
            break;
          }
          offset = getOffset(this.cropper);
          left = pointer.startX - offset.left;
          top = pointer.startY - offset.top;
          width = cropBoxData.minWidth;
          height = cropBoxData.minHeight;
          if (range.x > 0) {
            action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
          } else if (range.x < 0) {
            left -= width;
            action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
          }
          if (range.y < 0) {
            top -= height;
          }

          // Show the crop box if is hidden
          if (!this.cropped) {
            removeClass(this.cropBox, CLASS_HIDDEN);
            this.cropped = true;
            if (this.limited) {
              this.limitCropBox(true, true);
            }
          }
          break;
      }
      if (renderable) {
        cropBoxData.width = width;
        cropBoxData.height = height;
        cropBoxData.left = left;
        cropBoxData.top = top;
        this.action = action;
        this.renderCropBox();
      }

      // Override
      forEach(pointers, function (p) {
        p.startX = p.endX;
        p.startY = p.endY;
      });
    }
  };

  var methods = {
    // Show the crop box manually
    crop: function crop() {
      if (this.ready && !this.cropped && !this.disabled) {
        this.cropped = true;
        this.limitCropBox(true, true);
        if (this.options.modal) {
          addClass(this.dragBox, CLASS_MODAL);
        }
        removeClass(this.cropBox, CLASS_HIDDEN);
        this.setCropBoxData(this.initialCropBoxData);
      }
      return this;
    },
    // Reset the image and crop box to their initial states
    reset: function reset() {
      if (this.ready && !this.disabled) {
        this.imageData = assign({}, this.initialImageData);
        this.canvasData = assign({}, this.initialCanvasData);
        this.cropBoxData = assign({}, this.initialCropBoxData);
        this.renderCanvas();
        if (this.cropped) {
          this.renderCropBox();
        }
      }
      return this;
    },
    // Clear the crop box
    clear: function clear() {
      if (this.cropped && !this.disabled) {
        assign(this.cropBoxData, {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        });
        this.cropped = false;
        this.renderCropBox();
        this.limitCanvas(true, true);

        // Render canvas after crop box rendered
        this.renderCanvas();
        removeClass(this.dragBox, CLASS_MODAL);
        addClass(this.cropBox, CLASS_HIDDEN);
      }
      return this;
    },
    /**
     * Replace the image's src and rebuild the cropper
     * @param {string} url - The new URL.
     * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
     * @returns {Cropper} this
     */
    replace: function replace(url) {
      var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!this.disabled && url) {
        if (this.isImg) {
          this.element.src = url;
        }
        if (hasSameSize) {
          this.url = url;
          this.image.src = url;
          if (this.ready) {
            this.viewBoxImage.src = url;
            forEach(this.previews, function (element) {
              element.getElementsByTagName('img')[0].src = url;
            });
          }
        } else {
          if (this.isImg) {
            this.replaced = true;
          }
          this.options.data = null;
          this.uncreate();
          this.load(url);
        }
      }
      return this;
    },
    // Enable (unfreeze) the cropper
    enable: function enable() {
      if (this.ready && this.disabled) {
        this.disabled = false;
        removeClass(this.cropper, CLASS_DISABLED);
      }
      return this;
    },
    // Disable (freeze) the cropper
    disable: function disable() {
      if (this.ready && !this.disabled) {
        this.disabled = true;
        addClass(this.cropper, CLASS_DISABLED);
      }
      return this;
    },
    /**
     * Destroy the cropper and remove the instance from the image
     * @returns {Cropper} this
     */
    destroy: function destroy() {
      var element = this.element;
      if (!element[NAMESPACE]) {
        return this;
      }
      element[NAMESPACE] = undefined;
      if (this.isImg && this.replaced) {
        element.src = this.originalUrl;
      }
      this.uncreate();
      return this;
    },
    /**
     * Move the canvas with relative offsets
     * @param {number} offsetX - The relative offset distance on the x-axis.
     * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
     * @returns {Cropper} this
     */
    move: function move(offsetX) {
      var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
      var _this$canvasData = this.canvasData,
        left = _this$canvasData.left,
        top = _this$canvasData.top;
      return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
    },
    /**
     * Move the canvas to an absolute point
     * @param {number} x - The x-axis coordinate.
     * @param {number} [y=x] - The y-axis coordinate.
     * @returns {Cropper} this
     */
    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var canvasData = this.canvasData;
      var changed = false;
      x = Number(x);
      y = Number(y);
      if (this.ready && !this.disabled && this.options.movable) {
        if (isNumber(x)) {
          canvasData.left = x;
          changed = true;
        }
        if (isNumber(y)) {
          canvasData.top = y;
          changed = true;
        }
        if (changed) {
          this.renderCanvas(true);
        }
      }
      return this;
    },
    /**
     * Zoom the canvas with a relative ratio
     * @param {number} ratio - The target ratio.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoom: function zoom(ratio, _originalEvent) {
      var canvasData = this.canvasData;
      ratio = Number(ratio);
      if (ratio < 0) {
        ratio = 1 / (1 - ratio);
      } else {
        ratio = 1 + ratio;
      }
      return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
    },
    /**
     * Zoom the canvas to an absolute ratio
     * @param {number} ratio - The target ratio.
     * @param {Object} pivot - The zoom pivot point coordinate.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
      var options = this.options,
        canvasData = this.canvasData;
      var width = canvasData.width,
        height = canvasData.height,
        naturalWidth = canvasData.naturalWidth,
        naturalHeight = canvasData.naturalHeight;
      ratio = Number(ratio);
      if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
        var newWidth = naturalWidth * ratio;
        var newHeight = naturalHeight * ratio;
        if (dispatchEvent(this.element, EVENT_ZOOM, {
          ratio: ratio,
          oldRatio: width / naturalWidth,
          originalEvent: _originalEvent
        }) === false) {
          return this;
        }
        if (_originalEvent) {
          var pointers = this.pointers;
          var offset = getOffset(this.cropper);
          var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
            pageX: _originalEvent.pageX,
            pageY: _originalEvent.pageY
          };

          // Zoom from the triggering point of the event
          canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
        } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
          canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
        } else {
          // Zoom from the center of the canvas
          canvasData.left -= (newWidth - width) / 2;
          canvasData.top -= (newHeight - height) / 2;
        }
        canvasData.width = newWidth;
        canvasData.height = newHeight;
        this.renderCanvas(true);
      }
      return this;
    },
    /**
     * Rotate the canvas with a relative degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotate: function rotate(degree) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
    },
    /**
     * Rotate the canvas to an absolute degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotateTo: function rotateTo(degree) {
      degree = Number(degree);
      if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
        this.imageData.rotate = degree % 360;
        this.renderCanvas(true, true);
      }
      return this;
    },
    /**
     * Scale the image on the x-axis.
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @returns {Cropper} this
     */
    scaleX: function scaleX(_scaleX) {
      var scaleY = this.imageData.scaleY;
      return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
    },
    /**
     * Scale the image on the y-axis.
     * @param {number} scaleY - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scaleY: function scaleY(_scaleY) {
      var scaleX = this.imageData.scaleX;
      return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
    },
    /**
     * Scale the image
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
      var imageData = this.imageData;
      var transformed = false;
      scaleX = Number(scaleX);
      scaleY = Number(scaleY);
      if (this.ready && !this.disabled && this.options.scalable) {
        if (isNumber(scaleX)) {
          imageData.scaleX = scaleX;
          transformed = true;
        }
        if (isNumber(scaleY)) {
          imageData.scaleY = scaleY;
          transformed = true;
        }
        if (transformed) {
          this.renderCanvas(true, true);
        }
      }
      return this;
    },
    /**
     * Get the cropped area position and size data (base on the original image)
     * @param {boolean} [rounded=false] - Indicate if round the data values or not.
     * @returns {Object} The result cropped data.
     */
    getData: function getData() {
      var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = this.options,
        imageData = this.imageData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData;
      var data;
      if (this.ready && this.cropped) {
        data = {
          x: cropBoxData.left - canvasData.left,
          y: cropBoxData.top - canvasData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
        var ratio = imageData.width / imageData.naturalWidth;
        forEach(data, function (n, i) {
          data[i] = n / ratio;
        });
        if (rounded) {
          // In case rounding off leads to extra 1px in right or bottom border
          // we should round the top-left corner and the dimension (#343).
          var bottom = Math.round(data.y + data.height);
          var right = Math.round(data.x + data.width);
          data.x = Math.round(data.x);
          data.y = Math.round(data.y);
          data.width = right - data.x;
          data.height = bottom - data.y;
        }
      } else {
        data = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      if (options.rotatable) {
        data.rotate = imageData.rotate || 0;
      }
      if (options.scalable) {
        data.scaleX = imageData.scaleX || 1;
        data.scaleY = imageData.scaleY || 1;
      }
      return data;
    },
    /**
     * Set the cropped area position and size with new data
     * @param {Object} data - The new data.
     * @returns {Cropper} this
     */
    setData: function setData(data) {
      var options = this.options,
        imageData = this.imageData,
        canvasData = this.canvasData;
      var cropBoxData = {};
      if (this.ready && !this.disabled && isPlainObject(data)) {
        var transformed = false;
        if (options.rotatable) {
          if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
            imageData.rotate = data.rotate;
            transformed = true;
          }
        }
        if (options.scalable) {
          if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
            imageData.scaleX = data.scaleX;
            transformed = true;
          }
          if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
            imageData.scaleY = data.scaleY;
            transformed = true;
          }
        }
        if (transformed) {
          this.renderCanvas(true, true);
        }
        var ratio = imageData.width / imageData.naturalWidth;
        if (isNumber(data.x)) {
          cropBoxData.left = data.x * ratio + canvasData.left;
        }
        if (isNumber(data.y)) {
          cropBoxData.top = data.y * ratio + canvasData.top;
        }
        if (isNumber(data.width)) {
          cropBoxData.width = data.width * ratio;
        }
        if (isNumber(data.height)) {
          cropBoxData.height = data.height * ratio;
        }
        this.setCropBoxData(cropBoxData);
      }
      return this;
    },
    /**
     * Get the container size data.
     * @returns {Object} The result container data.
     */
    getContainerData: function getContainerData() {
      return this.ready ? assign({}, this.containerData) : {};
    },
    /**
     * Get the image position and size data.
     * @returns {Object} The result image data.
     */
    getImageData: function getImageData() {
      return this.sized ? assign({}, this.imageData) : {};
    },
    /**
     * Get the canvas position and size data.
     * @returns {Object} The result canvas data.
     */
    getCanvasData: function getCanvasData() {
      var canvasData = this.canvasData;
      var data = {};
      if (this.ready) {
        forEach(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (n) {
          data[n] = canvasData[n];
        });
      }
      return data;
    },
    /**
     * Set the canvas position and size with new data.
     * @param {Object} data - The new canvas data.
     * @returns {Cropper} this
     */
    setCanvasData: function setCanvasData(data) {
      var canvasData = this.canvasData;
      var aspectRatio = canvasData.aspectRatio;
      if (this.ready && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          canvasData.left = data.left;
        }
        if (isNumber(data.top)) {
          canvasData.top = data.top;
        }
        if (isNumber(data.width)) {
          canvasData.width = data.width;
          canvasData.height = data.width / aspectRatio;
        } else if (isNumber(data.height)) {
          canvasData.height = data.height;
          canvasData.width = data.height * aspectRatio;
        }
        this.renderCanvas(true);
      }
      return this;
    },
    /**
     * Get the crop box position and size data.
     * @returns {Object} The result crop box data.
     */
    getCropBoxData: function getCropBoxData() {
      var cropBoxData = this.cropBoxData;
      var data;
      if (this.ready && this.cropped) {
        data = {
          left: cropBoxData.left,
          top: cropBoxData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
      }
      return data || {};
    },
    /**
     * Set the crop box position and size with new data.
     * @param {Object} data - The new crop box data.
     * @returns {Cropper} this
     */
    setCropBoxData: function setCropBoxData(data) {
      var cropBoxData = this.cropBoxData;
      var aspectRatio = this.options.aspectRatio;
      var widthChanged;
      var heightChanged;
      if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          cropBoxData.left = data.left;
        }
        if (isNumber(data.top)) {
          cropBoxData.top = data.top;
        }
        if (isNumber(data.width) && data.width !== cropBoxData.width) {
          widthChanged = true;
          cropBoxData.width = data.width;
        }
        if (isNumber(data.height) && data.height !== cropBoxData.height) {
          heightChanged = true;
          cropBoxData.height = data.height;
        }
        if (aspectRatio) {
          if (widthChanged) {
            cropBoxData.height = cropBoxData.width / aspectRatio;
          } else if (heightChanged) {
            cropBoxData.width = cropBoxData.height * aspectRatio;
          }
        }
        this.renderCropBox();
      }
      return this;
    },
    /**
     * Get a canvas drawn the cropped image.
     * @param {Object} [options={}] - The config options.
     * @returns {HTMLCanvasElement} - The result canvas.
     */
    getCroppedCanvas: function getCroppedCanvas() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!this.ready || !window.HTMLCanvasElement) {
        return null;
      }
      var canvasData = this.canvasData;
      var source = getSourceCanvas(this.image, this.imageData, canvasData, options);

      // Returns the source canvas if it is not cropped.
      if (!this.cropped) {
        return source;
      }
      var _this$getData = this.getData(),
        initialX = _this$getData.x,
        initialY = _this$getData.y,
        initialWidth = _this$getData.width,
        initialHeight = _this$getData.height;
      var ratio = source.width / Math.floor(canvasData.naturalWidth);
      if (ratio !== 1) {
        initialX *= ratio;
        initialY *= ratio;
        initialWidth *= ratio;
        initialHeight *= ratio;
      }
      var aspectRatio = initialWidth / initialHeight;
      var maxSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.maxWidth || Infinity,
        height: options.maxHeight || Infinity
      });
      var minSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.minWidth || 0,
        height: options.minHeight || 0
      }, 'cover');
      var _getAdjustedSizes = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: options.width || (ratio !== 1 ? source.width : initialWidth),
          height: options.height || (ratio !== 1 ? source.height : initialHeight)
        }),
        width = _getAdjustedSizes.width,
        height = _getAdjustedSizes.height;
      width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
      height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = normalizeDecimalNumber(width);
      canvas.height = normalizeDecimalNumber(height);
      context.fillStyle = options.fillColor || 'transparent';
      context.fillRect(0, 0, width, height);
      var _options$imageSmoothi = options.imageSmoothingEnabled,
        imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi,
        imageSmoothingQuality = options.imageSmoothingQuality;
      context.imageSmoothingEnabled = imageSmoothingEnabled;
      if (imageSmoothingQuality) {
        context.imageSmoothingQuality = imageSmoothingQuality;
      }

      // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage
      var sourceWidth = source.width;
      var sourceHeight = source.height;

      // Source canvas parameters
      var srcX = initialX;
      var srcY = initialY;
      var srcWidth;
      var srcHeight;

      // Destination canvas parameters
      var dstX;
      var dstY;
      var dstWidth;
      var dstHeight;
      if (srcX <= -initialWidth || srcX > sourceWidth) {
        srcX = 0;
        srcWidth = 0;
        dstX = 0;
        dstWidth = 0;
      } else if (srcX <= 0) {
        dstX = -srcX;
        srcX = 0;
        srcWidth = Math.min(sourceWidth, initialWidth + srcX);
        dstWidth = srcWidth;
      } else if (srcX <= sourceWidth) {
        dstX = 0;
        srcWidth = Math.min(initialWidth, sourceWidth - srcX);
        dstWidth = srcWidth;
      }
      if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
        srcY = 0;
        srcHeight = 0;
        dstY = 0;
        dstHeight = 0;
      } else if (srcY <= 0) {
        dstY = -srcY;
        srcY = 0;
        srcHeight = Math.min(sourceHeight, initialHeight + srcY);
        dstHeight = srcHeight;
      } else if (srcY <= sourceHeight) {
        dstY = 0;
        srcHeight = Math.min(initialHeight, sourceHeight - srcY);
        dstHeight = srcHeight;
      }
      var params = [srcX, srcY, srcWidth, srcHeight];

      // Avoid "IndexSizeError"
      if (dstWidth > 0 && dstHeight > 0) {
        var scale = width / initialWidth;
        params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
      }

      // All the numerical parameters should be integer for `drawImage`
      // https://github.com/fengyuanchen/cropper/issues/476
      context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function (param) {
        return Math.floor(normalizeDecimalNumber(param));
      }))));
      return canvas;
    },
    /**
     * Change the aspect ratio of the crop box.
     * @param {number} aspectRatio - The new aspect ratio.
     * @returns {Cropper} this
     */
    setAspectRatio: function setAspectRatio(aspectRatio) {
      var options = this.options;
      if (!this.disabled && !isUndefined(aspectRatio)) {
        // 0 -> NaN
        options.aspectRatio = Math.max(0, aspectRatio) || NaN;
        if (this.ready) {
          this.initCropBox();
          if (this.cropped) {
            this.renderCropBox();
          }
        }
      }
      return this;
    },
    /**
     * Change the drag mode.
     * @param {string} mode - The new drag mode.
     * @returns {Cropper} this
     */
    setDragMode: function setDragMode(mode) {
      var options = this.options,
        dragBox = this.dragBox,
        face = this.face;
      if (this.ready && !this.disabled) {
        var croppable = mode === DRAG_MODE_CROP;
        var movable = options.movable && mode === DRAG_MODE_MOVE;
        mode = croppable || movable ? mode : DRAG_MODE_NONE;
        options.dragMode = mode;
        setData(dragBox, DATA_ACTION, mode);
        toggleClass(dragBox, CLASS_CROP, croppable);
        toggleClass(dragBox, CLASS_MOVE, movable);
        if (!options.cropBoxMovable) {
          // Sync drag mode to crop box when it is not movable
          setData(face, DATA_ACTION, mode);
          toggleClass(face, CLASS_CROP, croppable);
          toggleClass(face, CLASS_MOVE, movable);
        }
      }
      return this;
    }
  };

  var AnotherCropper = WINDOW.Cropper;
  var Cropper = /*#__PURE__*/function () {
    /**
     * Create a new Cropper.
     * @param {Element} element - The target element for cropping.
     * @param {Object} [options={}] - The configuration options.
     */
    function Cropper(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, Cropper);
      if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
        throw new Error('The first argument is required and must be an <img> or <canvas> element.');
      }
      this.element = element;
      this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
      this.cropped = false;
      this.disabled = false;
      this.pointers = {};
      this.ready = false;
      this.reloading = false;
      this.replaced = false;
      this.sized = false;
      this.sizing = false;
      this.init();
    }
    _createClass(Cropper, [{
      key: "init",
      value: function init() {
        var element = this.element;
        var tagName = element.tagName.toLowerCase();
        var url;
        if (element[NAMESPACE]) {
          return;
        }
        element[NAMESPACE] = this;
        if (tagName === 'img') {
          this.isImg = true;

          // e.g.: "img/picture.jpg"
          url = element.getAttribute('src') || '';
          this.originalUrl = url;

          // Stop when it's a blank image
          if (!url) {
            return;
          }

          // e.g.: "https://example.com/img/picture.jpg"
          url = element.src;
        } else if (tagName === 'canvas' && window.HTMLCanvasElement) {
          url = element.toDataURL();
        }
        this.load(url);
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this = this;
        if (!url) {
          return;
        }
        this.url = url;
        this.imageData = {};
        var element = this.element,
          options = this.options;
        if (!options.rotatable && !options.scalable) {
          options.checkOrientation = false;
        }

        // Only IE10+ supports Typed Arrays
        if (!options.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }

        // Detect the mime type of the image directly if it is a Data URL
        if (REGEXP_DATA_URL.test(url)) {
          // Read ArrayBuffer from Data URL of JPEG images directly for better performance
          if (REGEXP_DATA_URL_JPEG.test(url)) {
            this.read(dataURLToArrayBuffer(url));
          } else {
            // Only a JPEG image may contains Exif Orientation information,
            // the rest types of Data URLs are not necessary to check orientation at all.
            this.clone();
          }
          return;
        }

        // 1. Detect the mime type of the image by a XMLHttpRequest.
        // 2. Load the image as ArrayBuffer for reading orientation if its a JPEG image.
        var xhr = new XMLHttpRequest();
        var clone = this.clone.bind(this);
        this.reloading = true;
        this.xhr = xhr;

        // 1. Cross origin requests are only supported for protocol schemes:
        // http, https, data, chrome, chrome-extension.
        // 2. Access to XMLHttpRequest from a Data URL will be blocked by CORS policy
        // in some browsers as IE11 and Safari.
        xhr.onabort = clone;
        xhr.onerror = clone;
        xhr.ontimeout = clone;
        xhr.onprogress = function () {
          // Abort the request directly if it not a JPEG image for better performance
          if (xhr.getResponseHeader('content-type') !== MIME_TYPE_JPEG) {
            xhr.abort();
          }
        };
        xhr.onload = function () {
          _this.read(xhr.response);
        };
        xhr.onloadend = function () {
          _this.reloading = false;
          _this.xhr = null;
        };

        // Bust cache when there is a "crossOrigin" property to avoid browser cache error
        if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
          url = addTimestamp(url);
        }

        // The third parameter is required for avoiding side-effect (#682)
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.withCredentials = element.crossOrigin === 'use-credentials';
        xhr.send();
      }
    }, {
      key: "read",
      value: function read(arrayBuffer) {
        var options = this.options,
          imageData = this.imageData;

        // Reset the orientation value to its default value 1
        // as some iOS browsers will render image with its orientation
        var orientation = resetAndGetOrientation(arrayBuffer);
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;
        if (orientation > 1) {
          // Generate a new URL which has the default orientation value
          this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);
          var _parseOrientation = parseOrientation(orientation);
          rotate = _parseOrientation.rotate;
          scaleX = _parseOrientation.scaleX;
          scaleY = _parseOrientation.scaleY;
        }
        if (options.rotatable) {
          imageData.rotate = rotate;
        }
        if (options.scalable) {
          imageData.scaleX = scaleX;
          imageData.scaleY = scaleY;
        }
        this.clone();
      }
    }, {
      key: "clone",
      value: function clone() {
        var element = this.element,
          url = this.url;
        var crossOrigin = element.crossOrigin;
        var crossOriginUrl = url;
        if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
          if (!crossOrigin) {
            crossOrigin = 'anonymous';
          }

          // Bust cache when there is not a "crossOrigin" property (#519)
          crossOriginUrl = addTimestamp(url);
        }
        this.crossOrigin = crossOrigin;
        this.crossOriginUrl = crossOriginUrl;
        var image = document.createElement('img');
        if (crossOrigin) {
          image.crossOrigin = crossOrigin;
        }
        image.src = crossOriginUrl || url;
        image.alt = element.alt || 'The image to crop';
        this.image = image;
        image.onload = this.start.bind(this);
        image.onerror = this.stop.bind(this);
        addClass(image, CLASS_HIDE);
        element.parentNode.insertBefore(image, element.nextSibling);
      }
    }, {
      key: "start",
      value: function start() {
        var _this2 = this;
        var image = this.image;
        image.onload = null;
        image.onerror = null;
        this.sizing = true;

        // Match all browsers that use WebKit as the layout engine in iOS devices,
        // such as Safari for iOS, Chrome for iOS, and in-app browsers.
        var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);
        var done = function done(naturalWidth, naturalHeight) {
          assign(_this2.imageData, {
            naturalWidth: naturalWidth,
            naturalHeight: naturalHeight,
            aspectRatio: naturalWidth / naturalHeight
          });
          _this2.initialImageData = assign({}, _this2.imageData);
          _this2.sizing = false;
          _this2.sized = true;
          _this2.build();
        };

        // Most modern browsers (excepts iOS WebKit)
        if (image.naturalWidth && !isIOSWebKit) {
          done(image.naturalWidth, image.naturalHeight);
          return;
        }
        var sizingImage = document.createElement('img');
        var body = document.body || document.documentElement;
        this.sizingImage = sizingImage;
        sizingImage.onload = function () {
          done(sizingImage.width, sizingImage.height);
          if (!isIOSWebKit) {
            body.removeChild(sizingImage);
          }
        };
        sizingImage.src = image.src;

        // iOS WebKit will convert the image automatically
        // with its orientation once append it into DOM (#279)
        if (!isIOSWebKit) {
          sizingImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
          body.appendChild(sizingImage);
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        var image = this.image;
        image.onload = null;
        image.onerror = null;
        image.parentNode.removeChild(image);
        this.image = null;
      }
    }, {
      key: "build",
      value: function build() {
        if (!this.sized || this.ready) {
          return;
        }
        var element = this.element,
          options = this.options,
          image = this.image;

        // Create cropper elements
        var container = element.parentNode;
        var template = document.createElement('div');
        template.innerHTML = TEMPLATE;
        var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
        var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
        var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
        var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
        var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
        this.container = container;
        this.cropper = cropper;
        this.canvas = canvas;
        this.dragBox = dragBox;
        this.cropBox = cropBox;
        this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
        this.face = face;
        canvas.appendChild(image);

        // Hide the original image
        addClass(element, CLASS_HIDDEN);

        // Inserts the cropper after to the current image
        container.insertBefore(cropper, element.nextSibling);

        // Show the hidden image
        removeClass(image, CLASS_HIDE);
        this.initPreview();
        this.bind();
        options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
        options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
        options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
        addClass(cropBox, CLASS_HIDDEN);
        if (!options.guides) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
        }
        if (!options.center) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
        }
        if (options.background) {
          addClass(cropper, "".concat(NAMESPACE, "-bg"));
        }
        if (!options.highlight) {
          addClass(face, CLASS_INVISIBLE);
        }
        if (options.cropBoxMovable) {
          addClass(face, CLASS_MOVE);
          setData(face, DATA_ACTION, ACTION_ALL);
        }
        if (!options.cropBoxResizable) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
        }
        this.render();
        this.ready = true;
        this.setDragMode(options.dragMode);
        if (options.autoCrop) {
          this.crop();
        }
        this.setData(options.data);
        if (isFunction(options.ready)) {
          addListener(element, EVENT_READY, options.ready, {
            once: true
          });
        }
        dispatchEvent(element, EVENT_READY);
      }
    }, {
      key: "unbuild",
      value: function unbuild() {
        if (!this.ready) {
          return;
        }
        this.ready = false;
        this.unbind();
        this.resetPreview();
        var parentNode = this.cropper.parentNode;
        if (parentNode) {
          parentNode.removeChild(this.cropper);
        }
        removeClass(this.element, CLASS_HIDDEN);
      }
    }, {
      key: "uncreate",
      value: function uncreate() {
        if (this.ready) {
          this.unbuild();
          this.ready = false;
          this.cropped = false;
        } else if (this.sizing) {
          this.sizingImage.onload = null;
          this.sizing = false;
          this.sized = false;
        } else if (this.reloading) {
          this.xhr.onabort = null;
          this.xhr.abort();
        } else if (this.image) {
          this.stop();
        }
      }

      /**
       * Get the no conflict cropper class.
       * @returns {Cropper} The cropper class.
       */
    }], [{
      key: "noConflict",
      value: function noConflict() {
        window.Cropper = AnotherCropper;
        return Cropper;
      }

      /**
       * Change the default options.
       * @param {Object} options - The new default options.
       */
    }, {
      key: "setDefaults",
      value: function setDefaults(options) {
        assign(DEFAULTS, isPlainObject(options) && options);
      }
    }]);
    return Cropper;
  }();
  assign(Cropper.prototype, render, preview, events, handlers, change, methods);

  return Cropper;

}));


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/PopupModal.vue?vue&type=style&index=0&id=9cfc8a2c&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/PopupModal.vue?vue&type=style&index=0&id=9cfc8a2c&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/*!\n * Bootstrap  v5.2.3 (https://getbootstrap.com/)\n * Copyright 2011-2022 The Bootstrap Authors\n * Copyright 2011-2022 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n[data-v-9cfc8a2c]:root {\n  --bs-blue: #007bff;\n  --bs-indigo: #6610f2;\n  --bs-purple: #593196;\n  --bs-pink: #e83e8c;\n  --bs-red: #fc3939;\n  --bs-orange: #fd7e14;\n  --bs-yellow: #efa31d;\n  --bs-green: #13b955;\n  --bs-teal: #20c997;\n  --bs-cyan: #009cdc;\n  --bs-black: #000;\n  --bs-white: #fff;\n  --bs-gray: #868e96;\n  --bs-gray-dark: #343a40;\n  --bs-gray-100: #fafafa;\n  --bs-gray-200: #f9f8fc;\n  --bs-gray-300: #ededed;\n  --bs-gray-400: #cbc8d0;\n  --bs-gray-500: #adb5bd;\n  --bs-gray-600: #868e96;\n  --bs-gray-700: #444;\n  --bs-gray-800: #343a40;\n  --bs-gray-900: #17141f;\n  --bs-primary: #593196;\n  --bs-secondary: #a991d4;\n  --bs-success: #13b955;\n  --bs-info: #009cdc;\n  --bs-warning: #efa31d;\n  --bs-danger: #fc3939;\n  --bs-light: #f9f8fc;\n  --bs-dark: #17141f;\n  --bs-primary-rgb: 89, 49, 150;\n  --bs-secondary-rgb: 169, 145, 212;\n  --bs-success-rgb: 19, 185, 85;\n  --bs-info-rgb: 0, 156, 220;\n  --bs-warning-rgb: 239, 163, 29;\n  --bs-danger-rgb: 252, 57, 57;\n  --bs-light-rgb: 249, 248, 252;\n  --bs-dark-rgb: 23, 20, 31;\n  --bs-white-rgb: 255, 255, 255;\n  --bs-black-rgb: 0, 0, 0;\n  --bs-body-color-rgb: 68, 68, 68;\n  --bs-body-bg-rgb: 255, 255, 255;\n  --bs-font-sans-serif: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));\n  --bs-body-font-family: var(--bs-font-sans-serif);\n  --bs-body-font-size: 1rem;\n  --bs-body-font-weight: 400;\n  --bs-body-line-height: 1.5;\n  --bs-body-color: #444;\n  --bs-body-bg: #fff;\n  --bs-border-width: 1px;\n  --bs-border-style: solid;\n  --bs-border-color: #ededed;\n  --bs-border-color-translucent: rgba(0, 0, 0, 0.175);\n  --bs-border-radius: 0.375rem;\n  --bs-border-radius-sm: 0.25rem;\n  --bs-border-radius-lg: 0.5rem;\n  --bs-border-radius-xl: 1rem;\n  --bs-border-radius-2xl: 2rem;\n  --bs-border-radius-pill: 50rem;\n  --bs-link-color: #593196;\n  --bs-link-hover-color: #593196;\n  --bs-code-color: #e83e8c;\n  --bs-highlight-bg: #fcedd2;\n}\n*[data-v-9cfc8a2c],\n*[data-v-9cfc8a2c]::before,\n*[data-v-9cfc8a2c]::after {\n  box-sizing: border-box;\n}\n@media (prefers-reduced-motion: no-preference) {\n[data-v-9cfc8a2c]:root {\n    scroll-behavior: smooth;\n}\n}\nbody[data-v-9cfc8a2c] {\n  margin: 0;\n  font-family: var(--bs-body-font-family);\n  font-size: var(--bs-body-font-size);\n  font-weight: var(--bs-body-font-weight);\n  line-height: var(--bs-body-line-height);\n  color: var(--bs-body-color);\n  text-align: var(--bs-body-text-align);\n  background-color: var(--bs-body-bg);\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nhr[data-v-9cfc8a2c] {\n  margin: 1rem 0;\n  color: inherit;\n  border: 0;\n  border-top: 1px solid;\n  opacity: 0.25;\n}\nh6[data-v-9cfc8a2c], .h6[data-v-9cfc8a2c], h5[data-v-9cfc8a2c], .h5[data-v-9cfc8a2c], h4[data-v-9cfc8a2c], .h4[data-v-9cfc8a2c], h3[data-v-9cfc8a2c], .h3[data-v-9cfc8a2c], h2[data-v-9cfc8a2c], .h2[data-v-9cfc8a2c], h1[data-v-9cfc8a2c], .h1[data-v-9cfc8a2c] {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2;\n}\nh1[data-v-9cfc8a2c], .h1[data-v-9cfc8a2c] {\n  font-size: calc(1.375rem + 1.5vw);\n}\n@media (min-width: 1200px) {\nh1[data-v-9cfc8a2c], .h1[data-v-9cfc8a2c] {\n    font-size: 2.5rem;\n}\n}\nh2[data-v-9cfc8a2c], .h2[data-v-9cfc8a2c] {\n  font-size: calc(1.325rem + 0.9vw);\n}\n@media (min-width: 1200px) {\nh2[data-v-9cfc8a2c], .h2[data-v-9cfc8a2c] {\n    font-size: 2rem;\n}\n}\nh3[data-v-9cfc8a2c], .h3[data-v-9cfc8a2c] {\n  font-size: calc(1.3rem + 0.6vw);\n}\n@media (min-width: 1200px) {\nh3[data-v-9cfc8a2c], .h3[data-v-9cfc8a2c] {\n    font-size: 1.75rem;\n}\n}\nh4[data-v-9cfc8a2c], .h4[data-v-9cfc8a2c] {\n  font-size: calc(1.275rem + 0.3vw);\n}\n@media (min-width: 1200px) {\nh4[data-v-9cfc8a2c], .h4[data-v-9cfc8a2c] {\n    font-size: 1.5rem;\n}\n}\nh5[data-v-9cfc8a2c], .h5[data-v-9cfc8a2c] {\n  font-size: 1.25rem;\n}\nh6[data-v-9cfc8a2c], .h6[data-v-9cfc8a2c] {\n  font-size: 1rem;\n}\np[data-v-9cfc8a2c] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nabbr[title][data-v-9cfc8a2c] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  cursor: help;\n  -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none;\n}\naddress[data-v-9cfc8a2c] {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\nol[data-v-9cfc8a2c],\nul[data-v-9cfc8a2c] {\n  padding-left: 2rem;\n}\nol[data-v-9cfc8a2c],\nul[data-v-9cfc8a2c],\ndl[data-v-9cfc8a2c] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nol ol[data-v-9cfc8a2c],\nul ul[data-v-9cfc8a2c],\nol ul[data-v-9cfc8a2c],\nul ol[data-v-9cfc8a2c] {\n  margin-bottom: 0;\n}\ndt[data-v-9cfc8a2c] {\n  font-weight: 700;\n}\ndd[data-v-9cfc8a2c] {\n  margin-bottom: 0.5rem;\n  margin-left: 0;\n}\nblockquote[data-v-9cfc8a2c] {\n  margin: 0 0 1rem;\n}\nb[data-v-9cfc8a2c],\nstrong[data-v-9cfc8a2c] {\n  font-weight: bolder;\n}\nsmall[data-v-9cfc8a2c], .small[data-v-9cfc8a2c] {\n  font-size: 0.875em;\n}\nmark[data-v-9cfc8a2c], .mark[data-v-9cfc8a2c] {\n  padding: 0.1875em;\n  background-color: var(--bs-highlight-bg);\n}\nsub[data-v-9cfc8a2c],\nsup[data-v-9cfc8a2c] {\n  position: relative;\n  font-size: 0.75em;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsub[data-v-9cfc8a2c] {\n  bottom: -0.25em;\n}\nsup[data-v-9cfc8a2c] {\n  top: -0.5em;\n}\na[data-v-9cfc8a2c] {\n  color: var(--bs-link-color);\n  text-decoration: underline;\n}\na[data-v-9cfc8a2c]:hover {\n  color: var(--bs-link-hover-color);\n}\na[data-v-9cfc8a2c]:not([href]):not([class]), a[data-v-9cfc8a2c]:not([href]):not([class]):hover {\n  color: inherit;\n  text-decoration: none;\n}\npre[data-v-9cfc8a2c],\ncode[data-v-9cfc8a2c],\nkbd[data-v-9cfc8a2c],\nsamp[data-v-9cfc8a2c] {\n  font-family: var(--bs-font-monospace);\n  font-size: 1em;\n}\npre[data-v-9cfc8a2c] {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  font-size: 0.875em;\n}\npre code[data-v-9cfc8a2c] {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\ncode[data-v-9cfc8a2c] {\n  font-size: 0.875em;\n  color: var(--bs-code-color);\n  word-wrap: break-word;\n}\na > code[data-v-9cfc8a2c] {\n  color: inherit;\n}\nkbd[data-v-9cfc8a2c] {\n  padding: 0.1875rem 0.375rem;\n  font-size: 0.875em;\n  color: var(--bs-body-bg);\n  background-color: var(--bs-body-color);\n}\nkbd kbd[data-v-9cfc8a2c] {\n  padding: 0;\n  font-size: 1em;\n}\nfigure[data-v-9cfc8a2c] {\n  margin: 0 0 1rem;\n}\nimg[data-v-9cfc8a2c],\nsvg[data-v-9cfc8a2c] {\n  vertical-align: middle;\n}\ntable[data-v-9cfc8a2c] {\n  caption-side: bottom;\n  border-collapse: collapse;\n}\ncaption[data-v-9cfc8a2c] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: #868e96;\n  text-align: left;\n}\nth[data-v-9cfc8a2c] {\n  text-align: inherit;\n  text-align: -webkit-match-parent;\n}\nthead[data-v-9cfc8a2c],\ntbody[data-v-9cfc8a2c],\ntfoot[data-v-9cfc8a2c],\ntr[data-v-9cfc8a2c],\ntd[data-v-9cfc8a2c],\nth[data-v-9cfc8a2c] {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n}\nlabel[data-v-9cfc8a2c] {\n  display: inline-block;\n}\nbutton[data-v-9cfc8a2c] {\n  border-radius: 0;\n}\nbutton[data-v-9cfc8a2c]:focus:not(:focus-visible) {\n  outline: 0;\n}\ninput[data-v-9cfc8a2c],\nbutton[data-v-9cfc8a2c],\nselect[data-v-9cfc8a2c],\noptgroup[data-v-9cfc8a2c],\ntextarea[data-v-9cfc8a2c] {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\nbutton[data-v-9cfc8a2c],\nselect[data-v-9cfc8a2c] {\n  text-transform: none;\n}\n[role=button][data-v-9cfc8a2c] {\n  cursor: pointer;\n}\nselect[data-v-9cfc8a2c] {\n  word-wrap: normal;\n}\nselect[data-v-9cfc8a2c]:disabled {\n  opacity: 1;\n}\n[list][data-v-9cfc8a2c]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator {\n  display: none !important;\n}\nbutton[data-v-9cfc8a2c],\n[type=button][data-v-9cfc8a2c],\n[type=reset][data-v-9cfc8a2c],\n[type=submit][data-v-9cfc8a2c] {\n  -webkit-appearance: button;\n}\nbutton[data-v-9cfc8a2c]:not(:disabled),\n[type=button][data-v-9cfc8a2c]:not(:disabled),\n[type=reset][data-v-9cfc8a2c]:not(:disabled),\n[type=submit][data-v-9cfc8a2c]:not(:disabled) {\n  cursor: pointer;\n}\n[data-v-9cfc8a2c]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\ntextarea[data-v-9cfc8a2c] {\n  resize: vertical;\n}\nfieldset[data-v-9cfc8a2c] {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend[data-v-9cfc8a2c] {\n  float: left;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 0.5rem;\n  font-size: calc(1.275rem + 0.3vw);\n  line-height: inherit;\n}\n@media (min-width: 1200px) {\nlegend[data-v-9cfc8a2c] {\n    font-size: 1.5rem;\n}\n}\nlegend + *[data-v-9cfc8a2c] {\n  clear: left;\n}\n[data-v-9cfc8a2c]::-webkit-datetime-edit-fields-wrapper,[data-v-9cfc8a2c]::-webkit-datetime-edit-text,[data-v-9cfc8a2c]::-webkit-datetime-edit-minute,[data-v-9cfc8a2c]::-webkit-datetime-edit-hour-field,[data-v-9cfc8a2c]::-webkit-datetime-edit-day-field,[data-v-9cfc8a2c]::-webkit-datetime-edit-month-field,[data-v-9cfc8a2c]::-webkit-datetime-edit-year-field {\n  padding: 0;\n}\n[data-v-9cfc8a2c]::-webkit-inner-spin-button {\n  height: auto;\n}\n[type=search][data-v-9cfc8a2c] {\n  outline-offset: -2px;\n  -webkit-appearance: textfield;\n}\n\n/* rtl:raw:\n[type=\"tel\"],\n[type=\"url\"],\n[type=\"email\"],\n[type=\"number\"] {\n  direction: ltr;\n}\n*/\n[data-v-9cfc8a2c]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n[data-v-9cfc8a2c]::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n[data-v-9cfc8a2c]::file-selector-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\noutput[data-v-9cfc8a2c] {\n  display: inline-block;\n}\niframe[data-v-9cfc8a2c] {\n  border: 0;\n}\nsummary[data-v-9cfc8a2c] {\n  display: list-item;\n  cursor: pointer;\n}\nprogress[data-v-9cfc8a2c] {\n  vertical-align: baseline;\n}\n[hidden][data-v-9cfc8a2c] {\n  display: none !important;\n}\n.lead[data-v-9cfc8a2c] {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n.display-1[data-v-9cfc8a2c] {\n  font-size: calc(1.625rem + 4.5vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n.display-1[data-v-9cfc8a2c] {\n    font-size: 5rem;\n}\n}\n.display-2[data-v-9cfc8a2c] {\n  font-size: calc(1.575rem + 3.9vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n.display-2[data-v-9cfc8a2c] {\n    font-size: 4.5rem;\n}\n}\n.display-3[data-v-9cfc8a2c] {\n  font-size: calc(1.525rem + 3.3vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n.display-3[data-v-9cfc8a2c] {\n    font-size: 4rem;\n}\n}\n.display-4[data-v-9cfc8a2c] {\n  font-size: calc(1.475rem + 2.7vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n.display-4[data-v-9cfc8a2c] {\n    font-size: 3.5rem;\n}\n}\n.display-5[data-v-9cfc8a2c] {\n  font-size: calc(1.425rem + 2.1vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n.display-5[data-v-9cfc8a2c] {\n    font-size: 3rem;\n}\n}\n.display-6[data-v-9cfc8a2c] {\n  font-size: calc(1.375rem + 1.5vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n.display-6[data-v-9cfc8a2c] {\n    font-size: 2.5rem;\n}\n}\n.list-unstyled[data-v-9cfc8a2c] {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline[data-v-9cfc8a2c] {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline-item[data-v-9cfc8a2c] {\n  display: inline-block;\n}\n.list-inline-item[data-v-9cfc8a2c]:not(:last-child) {\n  margin-right: 0.5rem;\n}\n.initialism[data-v-9cfc8a2c] {\n  font-size: 0.875em;\n  text-transform: uppercase;\n}\n.blockquote[data-v-9cfc8a2c] {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n.blockquote[data-v-9cfc8a2c] > :last-child {\n  margin-bottom: 0;\n}\n.blockquote-footer[data-v-9cfc8a2c] {\n  margin-top: -1rem;\n  margin-bottom: 1rem;\n  font-size: 0.875em;\n  color: #868e96;\n}\n.blockquote-footer[data-v-9cfc8a2c]::before {\n  content: \"— \";\n}\n.img-fluid[data-v-9cfc8a2c] {\n  max-width: 100%;\n  height: auto;\n}\n.img-thumbnail[data-v-9cfc8a2c] {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid var(--bs-border-color);\n  max-width: 100%;\n  height: auto;\n}\n.figure[data-v-9cfc8a2c] {\n  display: inline-block;\n}\n.figure-img[data-v-9cfc8a2c] {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n.figure-caption[data-v-9cfc8a2c] {\n  font-size: 0.875em;\n  color: #868e96;\n}\n.container[data-v-9cfc8a2c],\n.container-fluid[data-v-9cfc8a2c],\n.container-xxl[data-v-9cfc8a2c],\n.container-xl[data-v-9cfc8a2c],\n.container-lg[data-v-9cfc8a2c],\n.container-md[data-v-9cfc8a2c],\n.container-sm[data-v-9cfc8a2c] {\n  --bs-gutter-x: 1.5rem;\n  --bs-gutter-y: 0;\n  width: 100%;\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 576px) {\n.container-sm[data-v-9cfc8a2c], .container[data-v-9cfc8a2c] {\n    max-width: 540px;\n}\n}\n@media (min-width: 768px) {\n.container-md[data-v-9cfc8a2c], .container-sm[data-v-9cfc8a2c], .container[data-v-9cfc8a2c] {\n    max-width: 720px;\n}\n}\n@media (min-width: 992px) {\n.container-lg[data-v-9cfc8a2c], .container-md[data-v-9cfc8a2c], .container-sm[data-v-9cfc8a2c], .container[data-v-9cfc8a2c] {\n    max-width: 960px;\n}\n}\n@media (min-width: 1200px) {\n.container-xl[data-v-9cfc8a2c], .container-lg[data-v-9cfc8a2c], .container-md[data-v-9cfc8a2c], .container-sm[data-v-9cfc8a2c], .container[data-v-9cfc8a2c] {\n    max-width: 1140px;\n}\n}\n@media (min-width: 1400px) {\n.container-xxl[data-v-9cfc8a2c], .container-xl[data-v-9cfc8a2c], .container-lg[data-v-9cfc8a2c], .container-md[data-v-9cfc8a2c], .container-sm[data-v-9cfc8a2c], .container[data-v-9cfc8a2c] {\n    max-width: 1320px;\n}\n}\n.row[data-v-9cfc8a2c] {\n  --bs-gutter-x: 1.5rem;\n  --bs-gutter-y: 0;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: calc(-1 * var(--bs-gutter-y));\n  margin-right: calc(-0.5 * var(--bs-gutter-x));\n  margin-left: calc(-0.5 * var(--bs-gutter-x));\n}\n.row > *[data-v-9cfc8a2c] {\n  flex-shrink: 0;\n  width: 100%;\n  max-width: 100%;\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n  margin-top: var(--bs-gutter-y);\n}\n.col[data-v-9cfc8a2c] {\n  flex: 1 0 0%;\n}\n.row-cols-auto > *[data-v-9cfc8a2c] {\n  flex: 0 0 auto;\n  width: auto;\n}\n.row-cols-1 > *[data-v-9cfc8a2c] {\n  flex: 0 0 auto;\n  width: 100%;\n}\n.row-cols-2 > *[data-v-9cfc8a2c] {\n  flex: 0 0 auto;\n  width: 50%;\n}\n.row-cols-3 > *[data-v-9cfc8a2c] {\n  flex: 0 0 auto;\n  width: 33.3333333333%;\n}\n.row-cols-4 > *[data-v-9cfc8a2c] {\n  flex: 0 0 auto;\n  width: 25%;\n}\n.row-cols-5 > *[data-v-9cfc8a2c] {\n  flex: 0 0 auto;\n  width: 20%;\n}\n.row-cols-6 > *[data-v-9cfc8a2c] {\n  flex: 0 0 auto;\n  width: 16.6666666667%;\n}\n.col-auto[data-v-9cfc8a2c] {\n  flex: 0 0 auto;\n  width: auto;\n}\n.col-1[data-v-9cfc8a2c] {\n  flex: 0 0 auto;\n  width: 8.33333333%;\n}\n.col-2[data-v-9cfc8a2c] {\n  flex: 0 0 auto;\n  width: 16.66666667%;\n}\n.col-3[data-v-9cfc8a2c] {\n  flex: 0 0 auto;\n  width: 25%;\n}\n.col-4[data-v-9cfc8a2c] {\n  flex: 0 0 auto;\n  width: 33.33333333%;\n}\n.col-5[data-v-9cfc8a2c] {\n  flex: 0 0 auto;\n  width: 41.66666667%;\n}\n.col-6[data-v-9cfc8a2c] {\n  flex: 0 0 auto;\n  width: 50%;\n}\n.col-7[data-v-9cfc8a2c] {\n  flex: 0 0 auto;\n  width: 58.33333333%;\n}\n.col-8[data-v-9cfc8a2c] {\n  flex: 0 0 auto;\n  width: 66.66666667%;\n}\n.col-9[data-v-9cfc8a2c] {\n  flex: 0 0 auto;\n  width: 75%;\n}\n.col-10[data-v-9cfc8a2c] {\n  flex: 0 0 auto;\n  width: 83.33333333%;\n}\n.col-11[data-v-9cfc8a2c] {\n  flex: 0 0 auto;\n  width: 91.66666667%;\n}\n.col-12[data-v-9cfc8a2c] {\n  flex: 0 0 auto;\n  width: 100%;\n}\n.offset-1[data-v-9cfc8a2c] {\n  margin-left: 8.33333333%;\n}\n.offset-2[data-v-9cfc8a2c] {\n  margin-left: 16.66666667%;\n}\n.offset-3[data-v-9cfc8a2c] {\n  margin-left: 25%;\n}\n.offset-4[data-v-9cfc8a2c] {\n  margin-left: 33.33333333%;\n}\n.offset-5[data-v-9cfc8a2c] {\n  margin-left: 41.66666667%;\n}\n.offset-6[data-v-9cfc8a2c] {\n  margin-left: 50%;\n}\n.offset-7[data-v-9cfc8a2c] {\n  margin-left: 58.33333333%;\n}\n.offset-8[data-v-9cfc8a2c] {\n  margin-left: 66.66666667%;\n}\n.offset-9[data-v-9cfc8a2c] {\n  margin-left: 75%;\n}\n.offset-10[data-v-9cfc8a2c] {\n  margin-left: 83.33333333%;\n}\n.offset-11[data-v-9cfc8a2c] {\n  margin-left: 91.66666667%;\n}\n.g-0[data-v-9cfc8a2c],\n.gx-0[data-v-9cfc8a2c] {\n  --bs-gutter-x: 0;\n}\n.g-0[data-v-9cfc8a2c],\n.gy-0[data-v-9cfc8a2c] {\n  --bs-gutter-y: 0;\n}\n.g-1[data-v-9cfc8a2c],\n.gx-1[data-v-9cfc8a2c] {\n  --bs-gutter-x: 0.25rem;\n}\n.g-1[data-v-9cfc8a2c],\n.gy-1[data-v-9cfc8a2c] {\n  --bs-gutter-y: 0.25rem;\n}\n.g-2[data-v-9cfc8a2c],\n.gx-2[data-v-9cfc8a2c] {\n  --bs-gutter-x: 0.5rem;\n}\n.g-2[data-v-9cfc8a2c],\n.gy-2[data-v-9cfc8a2c] {\n  --bs-gutter-y: 0.5rem;\n}\n.g-3[data-v-9cfc8a2c],\n.gx-3[data-v-9cfc8a2c] {\n  --bs-gutter-x: 1rem;\n}\n.g-3[data-v-9cfc8a2c],\n.gy-3[data-v-9cfc8a2c] {\n  --bs-gutter-y: 1rem;\n}\n.g-4[data-v-9cfc8a2c],\n.gx-4[data-v-9cfc8a2c] {\n  --bs-gutter-x: 1.5rem;\n}\n.g-4[data-v-9cfc8a2c],\n.gy-4[data-v-9cfc8a2c] {\n  --bs-gutter-y: 1.5rem;\n}\n.g-5[data-v-9cfc8a2c],\n.gx-5[data-v-9cfc8a2c] {\n  --bs-gutter-x: 3rem;\n}\n.g-5[data-v-9cfc8a2c],\n.gy-5[data-v-9cfc8a2c] {\n  --bs-gutter-y: 3rem;\n}\n@media (min-width: 576px) {\n.col-sm[data-v-9cfc8a2c] {\n    flex: 1 0 0%;\n}\n.row-cols-sm-auto > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: auto;\n}\n.row-cols-sm-1 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 100%;\n}\n.row-cols-sm-2 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 50%;\n}\n.row-cols-sm-3 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n}\n.row-cols-sm-4 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 25%;\n}\n.row-cols-sm-5 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 20%;\n}\n.row-cols-sm-6 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n}\n.col-sm-auto[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: auto;\n}\n.col-sm-1[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n}\n.col-sm-2[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n}\n.col-sm-3[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 25%;\n}\n.col-sm-4[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n}\n.col-sm-5[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n}\n.col-sm-6[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 50%;\n}\n.col-sm-7[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n}\n.col-sm-8[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n}\n.col-sm-9[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 75%;\n}\n.col-sm-10[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n}\n.col-sm-11[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n}\n.col-sm-12[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 100%;\n}\n.offset-sm-0[data-v-9cfc8a2c] {\n    margin-left: 0;\n}\n.offset-sm-1[data-v-9cfc8a2c] {\n    margin-left: 8.33333333%;\n}\n.offset-sm-2[data-v-9cfc8a2c] {\n    margin-left: 16.66666667%;\n}\n.offset-sm-3[data-v-9cfc8a2c] {\n    margin-left: 25%;\n}\n.offset-sm-4[data-v-9cfc8a2c] {\n    margin-left: 33.33333333%;\n}\n.offset-sm-5[data-v-9cfc8a2c] {\n    margin-left: 41.66666667%;\n}\n.offset-sm-6[data-v-9cfc8a2c] {\n    margin-left: 50%;\n}\n.offset-sm-7[data-v-9cfc8a2c] {\n    margin-left: 58.33333333%;\n}\n.offset-sm-8[data-v-9cfc8a2c] {\n    margin-left: 66.66666667%;\n}\n.offset-sm-9[data-v-9cfc8a2c] {\n    margin-left: 75%;\n}\n.offset-sm-10[data-v-9cfc8a2c] {\n    margin-left: 83.33333333%;\n}\n.offset-sm-11[data-v-9cfc8a2c] {\n    margin-left: 91.66666667%;\n}\n.g-sm-0[data-v-9cfc8a2c],\n  .gx-sm-0[data-v-9cfc8a2c] {\n    --bs-gutter-x: 0;\n}\n.g-sm-0[data-v-9cfc8a2c],\n  .gy-sm-0[data-v-9cfc8a2c] {\n    --bs-gutter-y: 0;\n}\n.g-sm-1[data-v-9cfc8a2c],\n  .gx-sm-1[data-v-9cfc8a2c] {\n    --bs-gutter-x: 0.25rem;\n}\n.g-sm-1[data-v-9cfc8a2c],\n  .gy-sm-1[data-v-9cfc8a2c] {\n    --bs-gutter-y: 0.25rem;\n}\n.g-sm-2[data-v-9cfc8a2c],\n  .gx-sm-2[data-v-9cfc8a2c] {\n    --bs-gutter-x: 0.5rem;\n}\n.g-sm-2[data-v-9cfc8a2c],\n  .gy-sm-2[data-v-9cfc8a2c] {\n    --bs-gutter-y: 0.5rem;\n}\n.g-sm-3[data-v-9cfc8a2c],\n  .gx-sm-3[data-v-9cfc8a2c] {\n    --bs-gutter-x: 1rem;\n}\n.g-sm-3[data-v-9cfc8a2c],\n  .gy-sm-3[data-v-9cfc8a2c] {\n    --bs-gutter-y: 1rem;\n}\n.g-sm-4[data-v-9cfc8a2c],\n  .gx-sm-4[data-v-9cfc8a2c] {\n    --bs-gutter-x: 1.5rem;\n}\n.g-sm-4[data-v-9cfc8a2c],\n  .gy-sm-4[data-v-9cfc8a2c] {\n    --bs-gutter-y: 1.5rem;\n}\n.g-sm-5[data-v-9cfc8a2c],\n  .gx-sm-5[data-v-9cfc8a2c] {\n    --bs-gutter-x: 3rem;\n}\n.g-sm-5[data-v-9cfc8a2c],\n  .gy-sm-5[data-v-9cfc8a2c] {\n    --bs-gutter-y: 3rem;\n}\n}\n@media (min-width: 768px) {\n.col-md[data-v-9cfc8a2c] {\n    flex: 1 0 0%;\n}\n.row-cols-md-auto > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: auto;\n}\n.row-cols-md-1 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 100%;\n}\n.row-cols-md-2 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 50%;\n}\n.row-cols-md-3 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n}\n.row-cols-md-4 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 25%;\n}\n.row-cols-md-5 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 20%;\n}\n.row-cols-md-6 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n}\n.col-md-auto[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: auto;\n}\n.col-md-1[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n}\n.col-md-2[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n}\n.col-md-3[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 25%;\n}\n.col-md-4[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n}\n.col-md-5[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n}\n.col-md-6[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 50%;\n}\n.col-md-7[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n}\n.col-md-8[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n}\n.col-md-9[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 75%;\n}\n.col-md-10[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n}\n.col-md-11[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n}\n.col-md-12[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 100%;\n}\n.offset-md-0[data-v-9cfc8a2c] {\n    margin-left: 0;\n}\n.offset-md-1[data-v-9cfc8a2c] {\n    margin-left: 8.33333333%;\n}\n.offset-md-2[data-v-9cfc8a2c] {\n    margin-left: 16.66666667%;\n}\n.offset-md-3[data-v-9cfc8a2c] {\n    margin-left: 25%;\n}\n.offset-md-4[data-v-9cfc8a2c] {\n    margin-left: 33.33333333%;\n}\n.offset-md-5[data-v-9cfc8a2c] {\n    margin-left: 41.66666667%;\n}\n.offset-md-6[data-v-9cfc8a2c] {\n    margin-left: 50%;\n}\n.offset-md-7[data-v-9cfc8a2c] {\n    margin-left: 58.33333333%;\n}\n.offset-md-8[data-v-9cfc8a2c] {\n    margin-left: 66.66666667%;\n}\n.offset-md-9[data-v-9cfc8a2c] {\n    margin-left: 75%;\n}\n.offset-md-10[data-v-9cfc8a2c] {\n    margin-left: 83.33333333%;\n}\n.offset-md-11[data-v-9cfc8a2c] {\n    margin-left: 91.66666667%;\n}\n.g-md-0[data-v-9cfc8a2c],\n  .gx-md-0[data-v-9cfc8a2c] {\n    --bs-gutter-x: 0;\n}\n.g-md-0[data-v-9cfc8a2c],\n  .gy-md-0[data-v-9cfc8a2c] {\n    --bs-gutter-y: 0;\n}\n.g-md-1[data-v-9cfc8a2c],\n  .gx-md-1[data-v-9cfc8a2c] {\n    --bs-gutter-x: 0.25rem;\n}\n.g-md-1[data-v-9cfc8a2c],\n  .gy-md-1[data-v-9cfc8a2c] {\n    --bs-gutter-y: 0.25rem;\n}\n.g-md-2[data-v-9cfc8a2c],\n  .gx-md-2[data-v-9cfc8a2c] {\n    --bs-gutter-x: 0.5rem;\n}\n.g-md-2[data-v-9cfc8a2c],\n  .gy-md-2[data-v-9cfc8a2c] {\n    --bs-gutter-y: 0.5rem;\n}\n.g-md-3[data-v-9cfc8a2c],\n  .gx-md-3[data-v-9cfc8a2c] {\n    --bs-gutter-x: 1rem;\n}\n.g-md-3[data-v-9cfc8a2c],\n  .gy-md-3[data-v-9cfc8a2c] {\n    --bs-gutter-y: 1rem;\n}\n.g-md-4[data-v-9cfc8a2c],\n  .gx-md-4[data-v-9cfc8a2c] {\n    --bs-gutter-x: 1.5rem;\n}\n.g-md-4[data-v-9cfc8a2c],\n  .gy-md-4[data-v-9cfc8a2c] {\n    --bs-gutter-y: 1.5rem;\n}\n.g-md-5[data-v-9cfc8a2c],\n  .gx-md-5[data-v-9cfc8a2c] {\n    --bs-gutter-x: 3rem;\n}\n.g-md-5[data-v-9cfc8a2c],\n  .gy-md-5[data-v-9cfc8a2c] {\n    --bs-gutter-y: 3rem;\n}\n}\n@media (min-width: 992px) {\n.col-lg[data-v-9cfc8a2c] {\n    flex: 1 0 0%;\n}\n.row-cols-lg-auto > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: auto;\n}\n.row-cols-lg-1 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 100%;\n}\n.row-cols-lg-2 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 50%;\n}\n.row-cols-lg-3 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n}\n.row-cols-lg-4 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 25%;\n}\n.row-cols-lg-5 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 20%;\n}\n.row-cols-lg-6 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n}\n.col-lg-auto[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: auto;\n}\n.col-lg-1[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n}\n.col-lg-2[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n}\n.col-lg-3[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 25%;\n}\n.col-lg-4[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n}\n.col-lg-5[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n}\n.col-lg-6[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 50%;\n}\n.col-lg-7[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n}\n.col-lg-8[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n}\n.col-lg-9[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 75%;\n}\n.col-lg-10[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n}\n.col-lg-11[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n}\n.col-lg-12[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 100%;\n}\n.offset-lg-0[data-v-9cfc8a2c] {\n    margin-left: 0;\n}\n.offset-lg-1[data-v-9cfc8a2c] {\n    margin-left: 8.33333333%;\n}\n.offset-lg-2[data-v-9cfc8a2c] {\n    margin-left: 16.66666667%;\n}\n.offset-lg-3[data-v-9cfc8a2c] {\n    margin-left: 25%;\n}\n.offset-lg-4[data-v-9cfc8a2c] {\n    margin-left: 33.33333333%;\n}\n.offset-lg-5[data-v-9cfc8a2c] {\n    margin-left: 41.66666667%;\n}\n.offset-lg-6[data-v-9cfc8a2c] {\n    margin-left: 50%;\n}\n.offset-lg-7[data-v-9cfc8a2c] {\n    margin-left: 58.33333333%;\n}\n.offset-lg-8[data-v-9cfc8a2c] {\n    margin-left: 66.66666667%;\n}\n.offset-lg-9[data-v-9cfc8a2c] {\n    margin-left: 75%;\n}\n.offset-lg-10[data-v-9cfc8a2c] {\n    margin-left: 83.33333333%;\n}\n.offset-lg-11[data-v-9cfc8a2c] {\n    margin-left: 91.66666667%;\n}\n.g-lg-0[data-v-9cfc8a2c],\n  .gx-lg-0[data-v-9cfc8a2c] {\n    --bs-gutter-x: 0;\n}\n.g-lg-0[data-v-9cfc8a2c],\n  .gy-lg-0[data-v-9cfc8a2c] {\n    --bs-gutter-y: 0;\n}\n.g-lg-1[data-v-9cfc8a2c],\n  .gx-lg-1[data-v-9cfc8a2c] {\n    --bs-gutter-x: 0.25rem;\n}\n.g-lg-1[data-v-9cfc8a2c],\n  .gy-lg-1[data-v-9cfc8a2c] {\n    --bs-gutter-y: 0.25rem;\n}\n.g-lg-2[data-v-9cfc8a2c],\n  .gx-lg-2[data-v-9cfc8a2c] {\n    --bs-gutter-x: 0.5rem;\n}\n.g-lg-2[data-v-9cfc8a2c],\n  .gy-lg-2[data-v-9cfc8a2c] {\n    --bs-gutter-y: 0.5rem;\n}\n.g-lg-3[data-v-9cfc8a2c],\n  .gx-lg-3[data-v-9cfc8a2c] {\n    --bs-gutter-x: 1rem;\n}\n.g-lg-3[data-v-9cfc8a2c],\n  .gy-lg-3[data-v-9cfc8a2c] {\n    --bs-gutter-y: 1rem;\n}\n.g-lg-4[data-v-9cfc8a2c],\n  .gx-lg-4[data-v-9cfc8a2c] {\n    --bs-gutter-x: 1.5rem;\n}\n.g-lg-4[data-v-9cfc8a2c],\n  .gy-lg-4[data-v-9cfc8a2c] {\n    --bs-gutter-y: 1.5rem;\n}\n.g-lg-5[data-v-9cfc8a2c],\n  .gx-lg-5[data-v-9cfc8a2c] {\n    --bs-gutter-x: 3rem;\n}\n.g-lg-5[data-v-9cfc8a2c],\n  .gy-lg-5[data-v-9cfc8a2c] {\n    --bs-gutter-y: 3rem;\n}\n}\n@media (min-width: 1200px) {\n.col-xl[data-v-9cfc8a2c] {\n    flex: 1 0 0%;\n}\n.row-cols-xl-auto > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: auto;\n}\n.row-cols-xl-1 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 100%;\n}\n.row-cols-xl-2 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 50%;\n}\n.row-cols-xl-3 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n}\n.row-cols-xl-4 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 25%;\n}\n.row-cols-xl-5 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 20%;\n}\n.row-cols-xl-6 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n}\n.col-xl-auto[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: auto;\n}\n.col-xl-1[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n}\n.col-xl-2[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n}\n.col-xl-3[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 25%;\n}\n.col-xl-4[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n}\n.col-xl-5[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n}\n.col-xl-6[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 50%;\n}\n.col-xl-7[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n}\n.col-xl-8[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n}\n.col-xl-9[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 75%;\n}\n.col-xl-10[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n}\n.col-xl-11[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n}\n.col-xl-12[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 100%;\n}\n.offset-xl-0[data-v-9cfc8a2c] {\n    margin-left: 0;\n}\n.offset-xl-1[data-v-9cfc8a2c] {\n    margin-left: 8.33333333%;\n}\n.offset-xl-2[data-v-9cfc8a2c] {\n    margin-left: 16.66666667%;\n}\n.offset-xl-3[data-v-9cfc8a2c] {\n    margin-left: 25%;\n}\n.offset-xl-4[data-v-9cfc8a2c] {\n    margin-left: 33.33333333%;\n}\n.offset-xl-5[data-v-9cfc8a2c] {\n    margin-left: 41.66666667%;\n}\n.offset-xl-6[data-v-9cfc8a2c] {\n    margin-left: 50%;\n}\n.offset-xl-7[data-v-9cfc8a2c] {\n    margin-left: 58.33333333%;\n}\n.offset-xl-8[data-v-9cfc8a2c] {\n    margin-left: 66.66666667%;\n}\n.offset-xl-9[data-v-9cfc8a2c] {\n    margin-left: 75%;\n}\n.offset-xl-10[data-v-9cfc8a2c] {\n    margin-left: 83.33333333%;\n}\n.offset-xl-11[data-v-9cfc8a2c] {\n    margin-left: 91.66666667%;\n}\n.g-xl-0[data-v-9cfc8a2c],\n  .gx-xl-0[data-v-9cfc8a2c] {\n    --bs-gutter-x: 0;\n}\n.g-xl-0[data-v-9cfc8a2c],\n  .gy-xl-0[data-v-9cfc8a2c] {\n    --bs-gutter-y: 0;\n}\n.g-xl-1[data-v-9cfc8a2c],\n  .gx-xl-1[data-v-9cfc8a2c] {\n    --bs-gutter-x: 0.25rem;\n}\n.g-xl-1[data-v-9cfc8a2c],\n  .gy-xl-1[data-v-9cfc8a2c] {\n    --bs-gutter-y: 0.25rem;\n}\n.g-xl-2[data-v-9cfc8a2c],\n  .gx-xl-2[data-v-9cfc8a2c] {\n    --bs-gutter-x: 0.5rem;\n}\n.g-xl-2[data-v-9cfc8a2c],\n  .gy-xl-2[data-v-9cfc8a2c] {\n    --bs-gutter-y: 0.5rem;\n}\n.g-xl-3[data-v-9cfc8a2c],\n  .gx-xl-3[data-v-9cfc8a2c] {\n    --bs-gutter-x: 1rem;\n}\n.g-xl-3[data-v-9cfc8a2c],\n  .gy-xl-3[data-v-9cfc8a2c] {\n    --bs-gutter-y: 1rem;\n}\n.g-xl-4[data-v-9cfc8a2c],\n  .gx-xl-4[data-v-9cfc8a2c] {\n    --bs-gutter-x: 1.5rem;\n}\n.g-xl-4[data-v-9cfc8a2c],\n  .gy-xl-4[data-v-9cfc8a2c] {\n    --bs-gutter-y: 1.5rem;\n}\n.g-xl-5[data-v-9cfc8a2c],\n  .gx-xl-5[data-v-9cfc8a2c] {\n    --bs-gutter-x: 3rem;\n}\n.g-xl-5[data-v-9cfc8a2c],\n  .gy-xl-5[data-v-9cfc8a2c] {\n    --bs-gutter-y: 3rem;\n}\n}\n@media (min-width: 1400px) {\n.col-xxl[data-v-9cfc8a2c] {\n    flex: 1 0 0%;\n}\n.row-cols-xxl-auto > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: auto;\n}\n.row-cols-xxl-1 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 100%;\n}\n.row-cols-xxl-2 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 50%;\n}\n.row-cols-xxl-3 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n}\n.row-cols-xxl-4 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 25%;\n}\n.row-cols-xxl-5 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 20%;\n}\n.row-cols-xxl-6 > *[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n}\n.col-xxl-auto[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: auto;\n}\n.col-xxl-1[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n}\n.col-xxl-2[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n}\n.col-xxl-3[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 25%;\n}\n.col-xxl-4[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n}\n.col-xxl-5[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n}\n.col-xxl-6[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 50%;\n}\n.col-xxl-7[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n}\n.col-xxl-8[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n}\n.col-xxl-9[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 75%;\n}\n.col-xxl-10[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n}\n.col-xxl-11[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n}\n.col-xxl-12[data-v-9cfc8a2c] {\n    flex: 0 0 auto;\n    width: 100%;\n}\n.offset-xxl-0[data-v-9cfc8a2c] {\n    margin-left: 0;\n}\n.offset-xxl-1[data-v-9cfc8a2c] {\n    margin-left: 8.33333333%;\n}\n.offset-xxl-2[data-v-9cfc8a2c] {\n    margin-left: 16.66666667%;\n}\n.offset-xxl-3[data-v-9cfc8a2c] {\n    margin-left: 25%;\n}\n.offset-xxl-4[data-v-9cfc8a2c] {\n    margin-left: 33.33333333%;\n}\n.offset-xxl-5[data-v-9cfc8a2c] {\n    margin-left: 41.66666667%;\n}\n.offset-xxl-6[data-v-9cfc8a2c] {\n    margin-left: 50%;\n}\n.offset-xxl-7[data-v-9cfc8a2c] {\n    margin-left: 58.33333333%;\n}\n.offset-xxl-8[data-v-9cfc8a2c] {\n    margin-left: 66.66666667%;\n}\n.offset-xxl-9[data-v-9cfc8a2c] {\n    margin-left: 75%;\n}\n.offset-xxl-10[data-v-9cfc8a2c] {\n    margin-left: 83.33333333%;\n}\n.offset-xxl-11[data-v-9cfc8a2c] {\n    margin-left: 91.66666667%;\n}\n.g-xxl-0[data-v-9cfc8a2c],\n  .gx-xxl-0[data-v-9cfc8a2c] {\n    --bs-gutter-x: 0;\n}\n.g-xxl-0[data-v-9cfc8a2c],\n  .gy-xxl-0[data-v-9cfc8a2c] {\n    --bs-gutter-y: 0;\n}\n.g-xxl-1[data-v-9cfc8a2c],\n  .gx-xxl-1[data-v-9cfc8a2c] {\n    --bs-gutter-x: 0.25rem;\n}\n.g-xxl-1[data-v-9cfc8a2c],\n  .gy-xxl-1[data-v-9cfc8a2c] {\n    --bs-gutter-y: 0.25rem;\n}\n.g-xxl-2[data-v-9cfc8a2c],\n  .gx-xxl-2[data-v-9cfc8a2c] {\n    --bs-gutter-x: 0.5rem;\n}\n.g-xxl-2[data-v-9cfc8a2c],\n  .gy-xxl-2[data-v-9cfc8a2c] {\n    --bs-gutter-y: 0.5rem;\n}\n.g-xxl-3[data-v-9cfc8a2c],\n  .gx-xxl-3[data-v-9cfc8a2c] {\n    --bs-gutter-x: 1rem;\n}\n.g-xxl-3[data-v-9cfc8a2c],\n  .gy-xxl-3[data-v-9cfc8a2c] {\n    --bs-gutter-y: 1rem;\n}\n.g-xxl-4[data-v-9cfc8a2c],\n  .gx-xxl-4[data-v-9cfc8a2c] {\n    --bs-gutter-x: 1.5rem;\n}\n.g-xxl-4[data-v-9cfc8a2c],\n  .gy-xxl-4[data-v-9cfc8a2c] {\n    --bs-gutter-y: 1.5rem;\n}\n.g-xxl-5[data-v-9cfc8a2c],\n  .gx-xxl-5[data-v-9cfc8a2c] {\n    --bs-gutter-x: 3rem;\n}\n.g-xxl-5[data-v-9cfc8a2c],\n  .gy-xxl-5[data-v-9cfc8a2c] {\n    --bs-gutter-y: 3rem;\n}\n}\n.table[data-v-9cfc8a2c] {\n  --bs-table-color: var(--bs-body-color);\n  --bs-table-bg: transparent;\n  --bs-table-border-color: rgba(0, 0, 0, 0.05);\n  --bs-table-accent-bg: transparent;\n  --bs-table-striped-color: var(--bs-body-color);\n  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);\n  --bs-table-active-color: var(--bs-body-color);\n  --bs-table-active-bg: rgba(0, 0, 0, 0.1);\n  --bs-table-hover-color: var(--bs-body-color);\n  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);\n  width: 100%;\n  margin-bottom: 1rem;\n  color: var(--bs-table-color);\n  vertical-align: top;\n  border-color: var(--bs-table-border-color);\n}\n.table > :not(caption) > * > *[data-v-9cfc8a2c] {\n  padding: 0.5rem 0.5rem;\n  background-color: var(--bs-table-bg);\n  border-bottom-width: 1px;\n  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);\n}\n.table > tbody[data-v-9cfc8a2c] {\n  vertical-align: inherit;\n}\n.table > thead[data-v-9cfc8a2c] {\n  vertical-align: bottom;\n}\n.table-group-divider[data-v-9cfc8a2c] {\n  border-top: 2px solid currentcolor;\n}\n.caption-top[data-v-9cfc8a2c] {\n  caption-side: top;\n}\n.table-sm > :not(caption) > * > *[data-v-9cfc8a2c] {\n  padding: 0.25rem 0.25rem;\n}\n.table-bordered > :not(caption) > *[data-v-9cfc8a2c] {\n  border-width: 1px 0;\n}\n.table-bordered > :not(caption) > * > *[data-v-9cfc8a2c] {\n  border-width: 0 1px;\n}\n.table-borderless > :not(caption) > * > *[data-v-9cfc8a2c] {\n  border-bottom-width: 0;\n}\n.table-borderless[data-v-9cfc8a2c] > :not(:first-child) {\n  border-top-width: 0;\n}\n.table-striped > tbody > tr:nth-of-type(odd) > *[data-v-9cfc8a2c] {\n  --bs-table-accent-bg: var(--bs-table-striped-bg);\n  color: var(--bs-table-striped-color);\n}\n.table-striped-columns > :not(caption) > tr[data-v-9cfc8a2c] > :nth-child(even) {\n  --bs-table-accent-bg: var(--bs-table-striped-bg);\n  color: var(--bs-table-striped-color);\n}\n.table-active[data-v-9cfc8a2c] {\n  --bs-table-accent-bg: var(--bs-table-active-bg);\n  color: var(--bs-table-active-color);\n}\n.table-hover > tbody > tr:hover > *[data-v-9cfc8a2c] {\n  --bs-table-accent-bg: var(--bs-table-hover-bg);\n  color: var(--bs-table-hover-color);\n}\n.table-primary[data-v-9cfc8a2c] {\n  --bs-table-color: #000;\n  --bs-table-bg: #ded6ea;\n  --bs-table-border-color: #c8c1d3;\n  --bs-table-striped-bg: #d3cbde;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #c8c1d3;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #cdc6d8;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-secondary[data-v-9cfc8a2c] {\n  --bs-table-color: #000;\n  --bs-table-bg: #eee9f6;\n  --bs-table-border-color: #d6d2dd;\n  --bs-table-striped-bg: #e2ddea;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #d6d2dd;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #dcd8e4;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-success[data-v-9cfc8a2c] {\n  --bs-table-color: #000;\n  --bs-table-bg: #d0f1dd;\n  --bs-table-border-color: #bbd9c7;\n  --bs-table-striped-bg: #c6e5d2;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #bbd9c7;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #c0dfcc;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-info[data-v-9cfc8a2c] {\n  --bs-table-color: #000;\n  --bs-table-bg: #ccebf8;\n  --bs-table-border-color: #b8d4df;\n  --bs-table-striped-bg: #c2dfec;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #b8d4df;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #bdd9e5;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-warning[data-v-9cfc8a2c] {\n  --bs-table-color: #000;\n  --bs-table-bg: #fcedd2;\n  --bs-table-border-color: #e3d5bd;\n  --bs-table-striped-bg: #efe1c8;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #e3d5bd;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #e9dbc2;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-danger[data-v-9cfc8a2c] {\n  --bs-table-color: #000;\n  --bs-table-bg: #fed7d7;\n  --bs-table-border-color: #e5c2c2;\n  --bs-table-striped-bg: #f1cccc;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #e5c2c2;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #ebc7c7;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-light[data-v-9cfc8a2c] {\n  --bs-table-color: #000;\n  --bs-table-bg: #f9f8fc;\n  --bs-table-border-color: #e0dfe3;\n  --bs-table-striped-bg: #edecef;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #e0dfe3;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #e6e5e9;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-dark[data-v-9cfc8a2c] {\n  --bs-table-color: #fff;\n  --bs-table-bg: #17141f;\n  --bs-table-border-color: #2e2c35;\n  --bs-table-striped-bg: #23202a;\n  --bs-table-striped-color: #fff;\n  --bs-table-active-bg: #2e2c35;\n  --bs-table-active-color: #fff;\n  --bs-table-hover-bg: #282630;\n  --bs-table-hover-color: #fff;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-responsive[data-v-9cfc8a2c] {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n@media (max-width: 575.98px) {\n.table-responsive-sm[data-v-9cfc8a2c] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n}\n}\n@media (max-width: 767.98px) {\n.table-responsive-md[data-v-9cfc8a2c] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n}\n}\n@media (max-width: 991.98px) {\n.table-responsive-lg[data-v-9cfc8a2c] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n}\n}\n@media (max-width: 1199.98px) {\n.table-responsive-xl[data-v-9cfc8a2c] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n}\n}\n@media (max-width: 1399.98px) {\n.table-responsive-xxl[data-v-9cfc8a2c] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n}\n}\n.form-label[data-v-9cfc8a2c] {\n  margin-bottom: 0.5rem;\n}\n.col-form-label[data-v-9cfc8a2c] {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n.col-form-label-lg[data-v-9cfc8a2c] {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n}\n.col-form-label-sm[data-v-9cfc8a2c] {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n}\n.form-text[data-v-9cfc8a2c] {\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #868e96;\n}\n.form-control[data-v-9cfc8a2c] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #444;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #cbc8d0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.form-control[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n.form-control[type=file][data-v-9cfc8a2c] {\n  overflow: hidden;\n}\n.form-control[type=file][data-v-9cfc8a2c]:not(:disabled):not([readonly]) {\n  cursor: pointer;\n}\n.form-control[data-v-9cfc8a2c]:focus {\n  color: #444;\n  background-color: #fff;\n  border-color: #593196;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(89, 49, 150, 0.25);\n}\n.form-control[data-v-9cfc8a2c]::-webkit-date-and-time-value {\n  height: 1.5em;\n}\n.form-control[data-v-9cfc8a2c]::-moz-placeholder {\n  color: #868e96;\n  opacity: 1;\n}\n.form-control[data-v-9cfc8a2c]::placeholder {\n  color: #868e96;\n  opacity: 1;\n}\n.form-control[data-v-9cfc8a2c]:disabled {\n  background-color: #f9f8fc;\n  opacity: 1;\n}\n.form-control[data-v-9cfc8a2c]::file-selector-button {\n  padding: 0.375rem 0.75rem;\n  margin: -0.375rem -0.75rem;\n  -webkit-margin-end: 0.75rem;\n          margin-inline-end: 0.75rem;\n  color: #444;\n  background-color: #f9f8fc;\n  pointer-events: none;\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n  border-inline-end-width: 1px;\n  border-radius: 0;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.form-control[data-v-9cfc8a2c]::file-selector-button {\n    transition: none;\n}\n}\n.form-control[data-v-9cfc8a2c]:hover:not(:disabled):not([readonly])::file-selector-button {\n  background-color: #edecef;\n}\n.form-control-plaintext[data-v-9cfc8a2c] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0;\n  margin-bottom: 0;\n  line-height: 1.5;\n  color: #444;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n.form-control-plaintext[data-v-9cfc8a2c]:focus {\n  outline: 0;\n}\n.form-control-plaintext.form-control-sm[data-v-9cfc8a2c], .form-control-plaintext.form-control-lg[data-v-9cfc8a2c] {\n  padding-right: 0;\n  padding-left: 0;\n}\n.form-control-sm[data-v-9cfc8a2c] {\n  min-height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n}\n.form-control-sm[data-v-9cfc8a2c]::file-selector-button {\n  padding: 0.25rem 0.5rem;\n  margin: -0.25rem -0.5rem;\n  -webkit-margin-end: 0.5rem;\n          margin-inline-end: 0.5rem;\n}\n.form-control-lg[data-v-9cfc8a2c] {\n  min-height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n}\n.form-control-lg[data-v-9cfc8a2c]::file-selector-button {\n  padding: 0.5rem 1rem;\n  margin: -0.5rem -1rem;\n  -webkit-margin-end: 1rem;\n          margin-inline-end: 1rem;\n}\ntextarea.form-control[data-v-9cfc8a2c] {\n  min-height: calc(1.5em + 0.75rem + 2px);\n}\ntextarea.form-control-sm[data-v-9cfc8a2c] {\n  min-height: calc(1.5em + 0.5rem + 2px);\n}\ntextarea.form-control-lg[data-v-9cfc8a2c] {\n  min-height: calc(1.5em + 1rem + 2px);\n}\n.form-control-color[data-v-9cfc8a2c] {\n  width: 3rem;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem;\n}\n.form-control-color[data-v-9cfc8a2c]:not(:disabled):not([readonly]) {\n  cursor: pointer;\n}\n.form-control-color[data-v-9cfc8a2c]::-moz-color-swatch {\n  border: 0 !important;\n}\n.form-control-color.form-control-sm[data-v-9cfc8a2c] {\n  height: calc(1.5em + 0.5rem + 2px);\n}\n.form-control-color.form-control-lg[data-v-9cfc8a2c] {\n  height: calc(1.5em + 1rem + 2px);\n}\n.form-select[data-v-9cfc8a2c] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 2.25rem 0.375rem 0.75rem;\n  -moz-padding-start: calc(0.75rem - 3px);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #444;\n  background-color: #fff;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right 0.75rem center;\n  background-size: 16px 12px;\n  border: 1px solid #cbc8d0;\n  border-radius: 0;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n.form-select[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n.form-select[data-v-9cfc8a2c]:focus {\n  border-color: #593196;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(89, 49, 150, 0.25);\n}\n.form-select[multiple][data-v-9cfc8a2c], .form-select[size][data-v-9cfc8a2c]:not([size=\"1\"]) {\n  padding-right: 0.75rem;\n  background-image: none;\n}\n.form-select[data-v-9cfc8a2c]:disabled {\n  background-color: #f9f8fc;\n}\n.form-select[data-v-9cfc8a2c]:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #444;\n}\n.form-select-sm[data-v-9cfc8a2c] {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 0.875rem;\n}\n.form-select-lg[data-v-9cfc8a2c] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  font-size: 1.25rem;\n}\n.form-check[data-v-9cfc8a2c] {\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5em;\n  margin-bottom: 0.125rem;\n}\n.form-check .form-check-input[data-v-9cfc8a2c] {\n  float: left;\n  margin-left: -1.5em;\n}\n.form-check-reverse[data-v-9cfc8a2c] {\n  padding-right: 1.5em;\n  padding-left: 0;\n  text-align: right;\n}\n.form-check-reverse .form-check-input[data-v-9cfc8a2c] {\n  float: right;\n  margin-right: -1.5em;\n  margin-left: 0;\n}\n.form-check-input[data-v-9cfc8a2c] {\n  width: 1em;\n  height: 1em;\n  margin-top: 0.25em;\n  vertical-align: top;\n  background-color: #fff;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  -webkit-print-color-adjust: exact;\n          print-color-adjust: exact;\n}\n.form-check-input[type=radio][data-v-9cfc8a2c] {\n  border-radius: 50%;\n}\n.form-check-input[data-v-9cfc8a2c]:active {\n  filter: brightness(90%);\n}\n.form-check-input[data-v-9cfc8a2c]:focus {\n  border-color: #593196;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(89, 49, 150, 0.25);\n}\n.form-check-input[data-v-9cfc8a2c]:checked {\n  background-color: #593196;\n  border-color: #593196;\n}\n.form-check-input:checked[type=checkbox][data-v-9cfc8a2c] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\");\n}\n.form-check-input:checked[type=radio][data-v-9cfc8a2c] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\");\n}\n.form-check-input[type=checkbox][data-v-9cfc8a2c]:indeterminate {\n  background-color: #593196;\n  border-color: #593196;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\");\n}\n.form-check-input[data-v-9cfc8a2c]:disabled {\n  pointer-events: none;\n  filter: none;\n  opacity: 0.5;\n}\n.form-check-input[disabled] ~ .form-check-label[data-v-9cfc8a2c], .form-check-input:disabled ~ .form-check-label[data-v-9cfc8a2c] {\n  cursor: default;\n  opacity: 0.5;\n}\n.form-switch[data-v-9cfc8a2c] {\n  padding-left: 2.5em;\n}\n.form-switch .form-check-input[data-v-9cfc8a2c] {\n  width: 2em;\n  margin-left: -2.5em;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\");\n  background-position: left center;\n  transition: background-position 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.form-switch .form-check-input[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n.form-switch .form-check-input[data-v-9cfc8a2c]:focus {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23593196'/%3e%3c/svg%3e\");\n}\n.form-switch .form-check-input[data-v-9cfc8a2c]:checked {\n  background-position: right center;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\");\n}\n.form-switch.form-check-reverse[data-v-9cfc8a2c] {\n  padding-right: 2.5em;\n  padding-left: 0;\n}\n.form-switch.form-check-reverse .form-check-input[data-v-9cfc8a2c] {\n  margin-right: -2.5em;\n  margin-left: 0;\n}\n.form-check-inline[data-v-9cfc8a2c] {\n  display: inline-block;\n  margin-right: 1rem;\n}\n.btn-check[data-v-9cfc8a2c] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.btn-check[disabled] + .btn[data-v-9cfc8a2c], .btn-check:disabled + .btn[data-v-9cfc8a2c] {\n  pointer-events: none;\n  filter: none;\n  opacity: 0.65;\n}\n.form-range[data-v-9cfc8a2c] {\n  width: 100%;\n  height: 1.5rem;\n  padding: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.form-range[data-v-9cfc8a2c]:focus {\n  outline: 0;\n}\n.form-range[data-v-9cfc8a2c]:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(89, 49, 150, 0.25);\n}\n.form-range[data-v-9cfc8a2c]:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(89, 49, 150, 0.25);\n}\n.form-range[data-v-9cfc8a2c]::-moz-focus-outer {\n  border: 0;\n}\n.form-range[data-v-9cfc8a2c]::-webkit-slider-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.25rem;\n  background-color: #593196;\n  border: 0;\n  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -webkit-appearance: none;\n          appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n.form-range[data-v-9cfc8a2c]::-webkit-slider-thumb {\n    -webkit-transition: none;\n    transition: none;\n}\n}\n.form-range[data-v-9cfc8a2c]::-webkit-slider-thumb:active {\n  background-color: #cdc1e0;\n}\n.form-range[data-v-9cfc8a2c]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #ededed;\n  border-color: transparent;\n}\n.form-range[data-v-9cfc8a2c]::-moz-range-thumb {\n  width: 1rem;\n  height: 1rem;\n  background-color: #593196;\n  border: 0;\n  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -moz-appearance: none;\n       appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n.form-range[data-v-9cfc8a2c]::-moz-range-thumb {\n    -moz-transition: none;\n    transition: none;\n}\n}\n.form-range[data-v-9cfc8a2c]::-moz-range-thumb:active {\n  background-color: #cdc1e0;\n}\n.form-range[data-v-9cfc8a2c]::-moz-range-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #ededed;\n  border-color: transparent;\n}\n.form-range[data-v-9cfc8a2c]:disabled {\n  pointer-events: none;\n}\n.form-range[data-v-9cfc8a2c]:disabled::-webkit-slider-thumb {\n  background-color: #adb5bd;\n}\n.form-range[data-v-9cfc8a2c]:disabled::-moz-range-thumb {\n  background-color: #adb5bd;\n}\n.form-floating[data-v-9cfc8a2c] {\n  position: relative;\n}\n.form-floating > .form-control[data-v-9cfc8a2c],\n.form-floating > .form-control-plaintext[data-v-9cfc8a2c],\n.form-floating > .form-select[data-v-9cfc8a2c] {\n  height: calc(3.5rem + 2px);\n  line-height: 1.25;\n}\n.form-floating > label[data-v-9cfc8a2c] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: 1rem 0.75rem;\n  overflow: hidden;\n  text-align: start;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  pointer-events: none;\n  border: 1px solid transparent;\n  transform-origin: 0 0;\n  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.form-floating > label[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n.form-floating > .form-control[data-v-9cfc8a2c],\n.form-floating > .form-control-plaintext[data-v-9cfc8a2c] {\n  padding: 1rem 0.75rem;\n}\n.form-floating > .form-control[data-v-9cfc8a2c]::-moz-placeholder, .form-floating > .form-control-plaintext[data-v-9cfc8a2c]::-moz-placeholder {\n  color: transparent;\n}\n.form-floating > .form-control[data-v-9cfc8a2c]::placeholder,\n.form-floating > .form-control-plaintext[data-v-9cfc8a2c]::placeholder {\n  color: transparent;\n}\n.form-floating > .form-control[data-v-9cfc8a2c]:not(:-moz-placeholder-shown), .form-floating > .form-control-plaintext[data-v-9cfc8a2c]:not(:-moz-placeholder-shown) {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control[data-v-9cfc8a2c]:focus, .form-floating > .form-control[data-v-9cfc8a2c]:not(:placeholder-shown),\n.form-floating > .form-control-plaintext[data-v-9cfc8a2c]:focus,\n.form-floating > .form-control-plaintext[data-v-9cfc8a2c]:not(:placeholder-shown) {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control[data-v-9cfc8a2c]:-webkit-autofill,\n.form-floating > .form-control-plaintext[data-v-9cfc8a2c]:-webkit-autofill {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-select[data-v-9cfc8a2c] {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control:not(:-moz-placeholder-shown) ~ label[data-v-9cfc8a2c] {\n  opacity: 0.65;\n  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n.form-floating > .form-control:focus ~ label[data-v-9cfc8a2c],\n.form-floating > .form-control:not(:placeholder-shown) ~ label[data-v-9cfc8a2c],\n.form-floating > .form-control-plaintext ~ label[data-v-9cfc8a2c],\n.form-floating > .form-select ~ label[data-v-9cfc8a2c] {\n  opacity: 0.65;\n  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n.form-floating > .form-control:-webkit-autofill ~ label[data-v-9cfc8a2c] {\n  opacity: 0.65;\n  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n.form-floating > .form-control-plaintext ~ label[data-v-9cfc8a2c] {\n  border-width: 1px 0;\n}\n.input-group[data-v-9cfc8a2c] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n}\n.input-group > .form-control[data-v-9cfc8a2c],\n.input-group > .form-select[data-v-9cfc8a2c],\n.input-group > .form-floating[data-v-9cfc8a2c] {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  min-width: 0;\n}\n.input-group > .form-control[data-v-9cfc8a2c]:focus,\n.input-group > .form-select[data-v-9cfc8a2c]:focus,\n.input-group > .form-floating[data-v-9cfc8a2c]:focus-within {\n  z-index: 5;\n}\n.input-group .btn[data-v-9cfc8a2c] {\n  position: relative;\n  z-index: 2;\n}\n.input-group .btn[data-v-9cfc8a2c]:focus {\n  z-index: 5;\n}\n.input-group-text[data-v-9cfc8a2c] {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #444;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #f9f8fc;\n  border: 1px solid #cbc8d0;\n}\n.input-group-lg > .form-control[data-v-9cfc8a2c],\n.input-group-lg > .form-select[data-v-9cfc8a2c],\n.input-group-lg > .input-group-text[data-v-9cfc8a2c],\n.input-group-lg > .btn[data-v-9cfc8a2c] {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n}\n.input-group-sm > .form-control[data-v-9cfc8a2c],\n.input-group-sm > .form-select[data-v-9cfc8a2c],\n.input-group-sm > .input-group-text[data-v-9cfc8a2c],\n.input-group-sm > .btn[data-v-9cfc8a2c] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n}\n.input-group-lg > .form-select[data-v-9cfc8a2c],\n.input-group-sm > .form-select[data-v-9cfc8a2c] {\n  padding-right: 3rem;\n}\n.input-group[data-v-9cfc8a2c] > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {\n  margin-left: -1px;\n}\n.valid-feedback[data-v-9cfc8a2c] {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #13b955;\n}\n.valid-tooltip[data-v-9cfc8a2c] {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  color: #fff;\n  background-color: rgba(19, 185, 85, 0.9);\n}\n.was-validated :valid ~ .valid-feedback[data-v-9cfc8a2c],\n.was-validated :valid ~ .valid-tooltip[data-v-9cfc8a2c],\n.is-valid ~ .valid-feedback[data-v-9cfc8a2c],\n.is-valid ~ .valid-tooltip[data-v-9cfc8a2c] {\n  display: block;\n}\n.was-validated .form-control[data-v-9cfc8a2c]:valid, .form-control.is-valid[data-v-9cfc8a2c] {\n  border-color: #13b955;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2313b955' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-control[data-v-9cfc8a2c]:valid:focus, .form-control.is-valid[data-v-9cfc8a2c]:focus {\n  border-color: #13b955;\n  box-shadow: 0 0 0 0.25rem rgba(19, 185, 85, 0.25);\n}\n.was-validated textarea.form-control[data-v-9cfc8a2c]:valid, textarea.form-control.is-valid[data-v-9cfc8a2c] {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n.was-validated .form-select[data-v-9cfc8a2c]:valid, .form-select.is-valid[data-v-9cfc8a2c] {\n  border-color: #13b955;\n}\n.was-validated .form-select[data-v-9cfc8a2c]:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size=\"1\"][data-v-9cfc8a2c], .form-select.is-valid[data-v-9cfc8a2c]:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size=\"1\"][data-v-9cfc8a2c] {\n  padding-right: 4.125rem;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2313b955' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-position: right 0.75rem center, center right 2.25rem;\n  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-select[data-v-9cfc8a2c]:valid:focus, .form-select.is-valid[data-v-9cfc8a2c]:focus {\n  border-color: #13b955;\n  box-shadow: 0 0 0 0.25rem rgba(19, 185, 85, 0.25);\n}\n.was-validated .form-control-color[data-v-9cfc8a2c]:valid, .form-control-color.is-valid[data-v-9cfc8a2c] {\n  width: calc(3rem + calc(1.5em + 0.75rem));\n}\n.was-validated .form-check-input[data-v-9cfc8a2c]:valid, .form-check-input.is-valid[data-v-9cfc8a2c] {\n  border-color: #13b955;\n}\n.was-validated .form-check-input[data-v-9cfc8a2c]:valid:checked, .form-check-input.is-valid[data-v-9cfc8a2c]:checked {\n  background-color: #13b955;\n}\n.was-validated .form-check-input[data-v-9cfc8a2c]:valid:focus, .form-check-input.is-valid[data-v-9cfc8a2c]:focus {\n  box-shadow: 0 0 0 0.25rem rgba(19, 185, 85, 0.25);\n}\n.was-validated .form-check-input:valid ~ .form-check-label[data-v-9cfc8a2c], .form-check-input.is-valid ~ .form-check-label[data-v-9cfc8a2c] {\n  color: #13b955;\n}\n.form-check-inline .form-check-input ~ .valid-feedback[data-v-9cfc8a2c] {\n  margin-left: 0.5em;\n}\n.was-validated .input-group > .form-control[data-v-9cfc8a2c]:not(:focus):valid, .input-group > .form-control:not(:focus).is-valid[data-v-9cfc8a2c],\n.was-validated .input-group > .form-select[data-v-9cfc8a2c]:not(:focus):valid,\n.input-group > .form-select:not(:focus).is-valid[data-v-9cfc8a2c],\n.was-validated .input-group > .form-floating[data-v-9cfc8a2c]:not(:focus-within):valid,\n.input-group > .form-floating:not(:focus-within).is-valid[data-v-9cfc8a2c] {\n  z-index: 3;\n}\n.invalid-feedback[data-v-9cfc8a2c] {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #fc3939;\n}\n.invalid-tooltip[data-v-9cfc8a2c] {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  color: #fff;\n  background-color: rgba(252, 57, 57, 0.9);\n}\n.was-validated :invalid ~ .invalid-feedback[data-v-9cfc8a2c],\n.was-validated :invalid ~ .invalid-tooltip[data-v-9cfc8a2c],\n.is-invalid ~ .invalid-feedback[data-v-9cfc8a2c],\n.is-invalid ~ .invalid-tooltip[data-v-9cfc8a2c] {\n  display: block;\n}\n.was-validated .form-control[data-v-9cfc8a2c]:invalid, .form-control.is-invalid[data-v-9cfc8a2c] {\n  border-color: #fc3939;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23fc3939'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23fc3939' stroke='none'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-control[data-v-9cfc8a2c]:invalid:focus, .form-control.is-invalid[data-v-9cfc8a2c]:focus {\n  border-color: #fc3939;\n  box-shadow: 0 0 0 0.25rem rgba(252, 57, 57, 0.25);\n}\n.was-validated textarea.form-control[data-v-9cfc8a2c]:invalid, textarea.form-control.is-invalid[data-v-9cfc8a2c] {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n.was-validated .form-select[data-v-9cfc8a2c]:invalid, .form-select.is-invalid[data-v-9cfc8a2c] {\n  border-color: #fc3939;\n}\n.was-validated .form-select[data-v-9cfc8a2c]:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size=\"1\"][data-v-9cfc8a2c], .form-select.is-invalid[data-v-9cfc8a2c]:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size=\"1\"][data-v-9cfc8a2c] {\n  padding-right: 4.125rem;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23fc3939'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23fc3939' stroke='none'/%3e%3c/svg%3e\");\n  background-position: right 0.75rem center, center right 2.25rem;\n  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-select[data-v-9cfc8a2c]:invalid:focus, .form-select.is-invalid[data-v-9cfc8a2c]:focus {\n  border-color: #fc3939;\n  box-shadow: 0 0 0 0.25rem rgba(252, 57, 57, 0.25);\n}\n.was-validated .form-control-color[data-v-9cfc8a2c]:invalid, .form-control-color.is-invalid[data-v-9cfc8a2c] {\n  width: calc(3rem + calc(1.5em + 0.75rem));\n}\n.was-validated .form-check-input[data-v-9cfc8a2c]:invalid, .form-check-input.is-invalid[data-v-9cfc8a2c] {\n  border-color: #fc3939;\n}\n.was-validated .form-check-input[data-v-9cfc8a2c]:invalid:checked, .form-check-input.is-invalid[data-v-9cfc8a2c]:checked {\n  background-color: #fc3939;\n}\n.was-validated .form-check-input[data-v-9cfc8a2c]:invalid:focus, .form-check-input.is-invalid[data-v-9cfc8a2c]:focus {\n  box-shadow: 0 0 0 0.25rem rgba(252, 57, 57, 0.25);\n}\n.was-validated .form-check-input:invalid ~ .form-check-label[data-v-9cfc8a2c], .form-check-input.is-invalid ~ .form-check-label[data-v-9cfc8a2c] {\n  color: #fc3939;\n}\n.form-check-inline .form-check-input ~ .invalid-feedback[data-v-9cfc8a2c] {\n  margin-left: 0.5em;\n}\n.was-validated .input-group > .form-control[data-v-9cfc8a2c]:not(:focus):invalid, .input-group > .form-control:not(:focus).is-invalid[data-v-9cfc8a2c],\n.was-validated .input-group > .form-select[data-v-9cfc8a2c]:not(:focus):invalid,\n.input-group > .form-select:not(:focus).is-invalid[data-v-9cfc8a2c],\n.was-validated .input-group > .form-floating[data-v-9cfc8a2c]:not(:focus-within):invalid,\n.input-group > .form-floating:not(:focus-within).is-invalid[data-v-9cfc8a2c] {\n  z-index: 4;\n}\n.btn[data-v-9cfc8a2c] {\n  --bs-btn-padding-x: 0.75rem;\n  --bs-btn-padding-y: 0.375rem;\n  --bs-btn-font-family: ;\n  --bs-btn-font-size: 1rem;\n  --bs-btn-font-weight: 400;\n  --bs-btn-line-height: 1.5;\n  --bs-btn-color: #444;\n  --bs-btn-bg: transparent;\n  --bs-btn-border-width: 1px;\n  --bs-btn-border-color: transparent;\n  --bs-btn-border-radius: 0.375rem;\n  --bs-btn-hover-border-color: transparent;\n  --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);\n  --bs-btn-disabled-opacity: 0.65;\n  --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);\n  display: inline-block;\n  padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);\n  font-family: var(--bs-btn-font-family);\n  font-size: var(--bs-btn-font-size);\n  font-weight: var(--bs-btn-font-weight);\n  line-height: var(--bs-btn-line-height);\n  color: var(--bs-btn-color);\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);\n  background-color: var(--bs-btn-bg);\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.btn[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n.btn[data-v-9cfc8a2c]:hover {\n  color: var(--bs-btn-hover-color);\n  background-color: var(--bs-btn-hover-bg);\n  border-color: var(--bs-btn-hover-border-color);\n}\n.btn-check + .btn[data-v-9cfc8a2c]:hover {\n  color: var(--bs-btn-color);\n  background-color: var(--bs-btn-bg);\n  border-color: var(--bs-btn-border-color);\n}\n.btn[data-v-9cfc8a2c]:focus-visible {\n  color: var(--bs-btn-hover-color);\n  background-color: var(--bs-btn-hover-bg);\n  border-color: var(--bs-btn-hover-border-color);\n  outline: 0;\n  box-shadow: var(--bs-btn-focus-box-shadow);\n}\n.btn-check:focus-visible + .btn[data-v-9cfc8a2c] {\n  border-color: var(--bs-btn-hover-border-color);\n  outline: 0;\n  box-shadow: var(--bs-btn-focus-box-shadow);\n}\n.btn-check:checked + .btn[data-v-9cfc8a2c], :not(.btn-check) + .btn[data-v-9cfc8a2c]:active, .btn[data-v-9cfc8a2c]:first-child:active, .btn.active[data-v-9cfc8a2c], .btn.show[data-v-9cfc8a2c] {\n  color: var(--bs-btn-active-color);\n  background-color: var(--bs-btn-active-bg);\n  border-color: var(--bs-btn-active-border-color);\n}\n.btn-check:checked + .btn[data-v-9cfc8a2c]:focus-visible, :not(.btn-check) + .btn[data-v-9cfc8a2c]:active:focus-visible, .btn[data-v-9cfc8a2c]:first-child:active:focus-visible, .btn.active[data-v-9cfc8a2c]:focus-visible, .btn.show[data-v-9cfc8a2c]:focus-visible {\n  box-shadow: var(--bs-btn-focus-box-shadow);\n}\n.btn[data-v-9cfc8a2c]:disabled, .btn.disabled[data-v-9cfc8a2c], fieldset:disabled .btn[data-v-9cfc8a2c] {\n  color: var(--bs-btn-disabled-color);\n  pointer-events: none;\n  background-color: var(--bs-btn-disabled-bg);\n  border-color: var(--bs-btn-disabled-border-color);\n  opacity: var(--bs-btn-disabled-opacity);\n}\n.btn-primary[data-v-9cfc8a2c] {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #593196;\n  --bs-btn-border-color: #593196;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #4c2a80;\n  --bs-btn-hover-border-color: #472778;\n  --bs-btn-focus-shadow-rgb: 114, 80, 166;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #472778;\n  --bs-btn-active-border-color: #432571;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #593196;\n  --bs-btn-disabled-border-color: #593196;\n}\n.btn-secondary[data-v-9cfc8a2c] {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #a991d4;\n  --bs-btn-border-color: #a991d4;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #907bb4;\n  --bs-btn-hover-border-color: #8774aa;\n  --bs-btn-focus-shadow-rgb: 182, 162, 218;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #8774aa;\n  --bs-btn-active-border-color: #7f6d9f;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #a991d4;\n  --bs-btn-disabled-border-color: #a991d4;\n}\n.btn-success[data-v-9cfc8a2c] {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #13b955;\n  --bs-btn-border-color: #13b955;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #109d48;\n  --bs-btn-hover-border-color: #0f9444;\n  --bs-btn-focus-shadow-rgb: 54, 196, 111;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #0f9444;\n  --bs-btn-active-border-color: #0e8b40;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #13b955;\n  --bs-btn-disabled-border-color: #13b955;\n}\n.btn-info[data-v-9cfc8a2c] {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #009cdc;\n  --bs-btn-border-color: #009cdc;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #0085bb;\n  --bs-btn-hover-border-color: #007db0;\n  --bs-btn-focus-shadow-rgb: 38, 171, 225;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #007db0;\n  --bs-btn-active-border-color: #0075a5;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #009cdc;\n  --bs-btn-disabled-border-color: #009cdc;\n}\n.btn-warning[data-v-9cfc8a2c] {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #efa31d;\n  --bs-btn-border-color: #efa31d;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #cb8b19;\n  --bs-btn-hover-border-color: #bf8217;\n  --bs-btn-focus-shadow-rgb: 241, 177, 63;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #bf8217;\n  --bs-btn-active-border-color: #b37a16;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #efa31d;\n  --bs-btn-disabled-border-color: #efa31d;\n}\n.btn-danger[data-v-9cfc8a2c] {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #fc3939;\n  --bs-btn-border-color: #fc3939;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #d63030;\n  --bs-btn-hover-border-color: #ca2e2e;\n  --bs-btn-focus-shadow-rgb: 252, 87, 87;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #ca2e2e;\n  --bs-btn-active-border-color: #bd2b2b;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #fc3939;\n  --bs-btn-disabled-border-color: #fc3939;\n}\n.btn-light[data-v-9cfc8a2c] {\n  --bs-btn-color: #000;\n  --bs-btn-bg: #f9f8fc;\n  --bs-btn-border-color: #f9f8fc;\n  --bs-btn-hover-color: #000;\n  --bs-btn-hover-bg: #d4d3d6;\n  --bs-btn-hover-border-color: #c7c6ca;\n  --bs-btn-focus-shadow-rgb: 212, 211, 214;\n  --bs-btn-active-color: #000;\n  --bs-btn-active-bg: #c7c6ca;\n  --bs-btn-active-border-color: #bbbabd;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #000;\n  --bs-btn-disabled-bg: #f9f8fc;\n  --bs-btn-disabled-border-color: #f9f8fc;\n}\n.btn-dark[data-v-9cfc8a2c] {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #17141f;\n  --bs-btn-border-color: #17141f;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #3a3741;\n  --bs-btn-hover-border-color: #2e2c35;\n  --bs-btn-focus-shadow-rgb: 58, 55, 65;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #45434c;\n  --bs-btn-active-border-color: #2e2c35;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #17141f;\n  --bs-btn-disabled-border-color: #17141f;\n}\n.btn-outline-primary[data-v-9cfc8a2c] {\n  --bs-btn-color: #593196;\n  --bs-btn-border-color: #593196;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #593196;\n  --bs-btn-hover-border-color: #593196;\n  --bs-btn-focus-shadow-rgb: 89, 49, 150;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #593196;\n  --bs-btn-active-border-color: #593196;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #593196;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #593196;\n  --bs-gradient: none;\n}\n.btn-outline-secondary[data-v-9cfc8a2c] {\n  --bs-btn-color: #a991d4;\n  --bs-btn-border-color: #a991d4;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #a991d4;\n  --bs-btn-hover-border-color: #a991d4;\n  --bs-btn-focus-shadow-rgb: 169, 145, 212;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #a991d4;\n  --bs-btn-active-border-color: #a991d4;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #a991d4;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #a991d4;\n  --bs-gradient: none;\n}\n.btn-outline-success[data-v-9cfc8a2c] {\n  --bs-btn-color: #13b955;\n  --bs-btn-border-color: #13b955;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #13b955;\n  --bs-btn-hover-border-color: #13b955;\n  --bs-btn-focus-shadow-rgb: 19, 185, 85;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #13b955;\n  --bs-btn-active-border-color: #13b955;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #13b955;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #13b955;\n  --bs-gradient: none;\n}\n.btn-outline-info[data-v-9cfc8a2c] {\n  --bs-btn-color: #009cdc;\n  --bs-btn-border-color: #009cdc;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #009cdc;\n  --bs-btn-hover-border-color: #009cdc;\n  --bs-btn-focus-shadow-rgb: 0, 156, 220;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #009cdc;\n  --bs-btn-active-border-color: #009cdc;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #009cdc;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #009cdc;\n  --bs-gradient: none;\n}\n.btn-outline-warning[data-v-9cfc8a2c] {\n  --bs-btn-color: #efa31d;\n  --bs-btn-border-color: #efa31d;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #efa31d;\n  --bs-btn-hover-border-color: #efa31d;\n  --bs-btn-focus-shadow-rgb: 239, 163, 29;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #efa31d;\n  --bs-btn-active-border-color: #efa31d;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #efa31d;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #efa31d;\n  --bs-gradient: none;\n}\n.btn-outline-danger[data-v-9cfc8a2c] {\n  --bs-btn-color: #fc3939;\n  --bs-btn-border-color: #fc3939;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #fc3939;\n  --bs-btn-hover-border-color: #fc3939;\n  --bs-btn-focus-shadow-rgb: 252, 57, 57;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #fc3939;\n  --bs-btn-active-border-color: #fc3939;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fc3939;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #fc3939;\n  --bs-gradient: none;\n}\n.btn-outline-light[data-v-9cfc8a2c] {\n  --bs-btn-color: #f9f8fc;\n  --bs-btn-border-color: #f9f8fc;\n  --bs-btn-hover-color: #000;\n  --bs-btn-hover-bg: #f9f8fc;\n  --bs-btn-hover-border-color: #f9f8fc;\n  --bs-btn-focus-shadow-rgb: 249, 248, 252;\n  --bs-btn-active-color: #000;\n  --bs-btn-active-bg: #f9f8fc;\n  --bs-btn-active-border-color: #f9f8fc;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #f9f8fc;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #f9f8fc;\n  --bs-gradient: none;\n}\n.btn-outline-dark[data-v-9cfc8a2c] {\n  --bs-btn-color: #17141f;\n  --bs-btn-border-color: #17141f;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #17141f;\n  --bs-btn-hover-border-color: #17141f;\n  --bs-btn-focus-shadow-rgb: 23, 20, 31;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #17141f;\n  --bs-btn-active-border-color: #17141f;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #17141f;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #17141f;\n  --bs-gradient: none;\n}\n.btn-link[data-v-9cfc8a2c] {\n  --bs-btn-font-weight: 400;\n  --bs-btn-color: var(--bs-link-color);\n  --bs-btn-bg: transparent;\n  --bs-btn-border-color: transparent;\n  --bs-btn-hover-color: var(--bs-link-hover-color);\n  --bs-btn-hover-border-color: transparent;\n  --bs-btn-active-color: var(--bs-link-hover-color);\n  --bs-btn-active-border-color: transparent;\n  --bs-btn-disabled-color: #868e96;\n  --bs-btn-disabled-border-color: transparent;\n  --bs-btn-box-shadow: none;\n  --bs-btn-focus-shadow-rgb: 114, 80, 166;\n  text-decoration: underline;\n}\n.btn-link[data-v-9cfc8a2c]:focus-visible {\n  color: var(--bs-btn-color);\n}\n.btn-link[data-v-9cfc8a2c]:hover {\n  color: var(--bs-btn-hover-color);\n}\n.btn-lg[data-v-9cfc8a2c], .btn-group-lg > .btn[data-v-9cfc8a2c] {\n  --bs-btn-padding-y: 0.5rem;\n  --bs-btn-padding-x: 1rem;\n  --bs-btn-font-size: 1.25rem;\n  --bs-btn-border-radius: 0.5rem;\n}\n.btn-sm[data-v-9cfc8a2c], .btn-group-sm > .btn[data-v-9cfc8a2c] {\n  --bs-btn-padding-y: 0.25rem;\n  --bs-btn-padding-x: 0.5rem;\n  --bs-btn-font-size: 0.875rem;\n  --bs-btn-border-radius: 0.25rem;\n}\n.fade[data-v-9cfc8a2c] {\n  transition: opacity 0.15s linear;\n}\n@media (prefers-reduced-motion: reduce) {\n.fade[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n.fade[data-v-9cfc8a2c]:not(.show) {\n  opacity: 0;\n}\n.collapse[data-v-9cfc8a2c]:not(.show) {\n  display: none;\n}\n.collapsing[data-v-9cfc8a2c] {\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n.collapsing[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n.collapsing.collapse-horizontal[data-v-9cfc8a2c] {\n  width: 0;\n  height: auto;\n  transition: width 0.35s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n.collapsing.collapse-horizontal[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n.dropup[data-v-9cfc8a2c],\n.dropend[data-v-9cfc8a2c],\n.dropdown[data-v-9cfc8a2c],\n.dropstart[data-v-9cfc8a2c],\n.dropup-center[data-v-9cfc8a2c],\n.dropdown-center[data-v-9cfc8a2c] {\n  position: relative;\n}\n.dropdown-toggle[data-v-9cfc8a2c] {\n  white-space: nowrap;\n}\n.dropdown-toggle[data-v-9cfc8a2c]::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n.dropdown-toggle[data-v-9cfc8a2c]:empty::after {\n  margin-left: 0;\n}\n.dropdown-menu[data-v-9cfc8a2c] {\n  --bs-dropdown-zindex: 1000;\n  --bs-dropdown-min-width: 10rem;\n  --bs-dropdown-padding-x: 0;\n  --bs-dropdown-padding-y: 0.5rem;\n  --bs-dropdown-spacer: 0.125rem;\n  --bs-dropdown-font-size: 1rem;\n  --bs-dropdown-color: #444;\n  --bs-dropdown-bg: #fff;\n  --bs-dropdown-border-color: var(--bs-border-color-translucent);\n  --bs-dropdown-border-radius: 0.375rem;\n  --bs-dropdown-border-width: 1px;\n  --bs-dropdown-inner-border-radius: calc(0.375rem - 1px);\n  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);\n  --bs-dropdown-divider-margin-y: 0.5rem;\n  --bs-dropdown-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  --bs-dropdown-link-color: #444;\n  --bs-dropdown-link-hover-color: #fff;\n  --bs-dropdown-link-hover-bg: #593196;\n  --bs-dropdown-link-active-color: #fff;\n  --bs-dropdown-link-active-bg: #593196;\n  --bs-dropdown-link-disabled-color: #adb5bd;\n  --bs-dropdown-item-padding-x: 1rem;\n  --bs-dropdown-item-padding-y: 0.25rem;\n  --bs-dropdown-header-color: #868e96;\n  --bs-dropdown-header-padding-x: 1rem;\n  --bs-dropdown-header-padding-y: 0.5rem;\n  position: absolute;\n  z-index: var(--bs-dropdown-zindex);\n  display: none;\n  min-width: var(--bs-dropdown-min-width);\n  padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);\n  margin: 0;\n  font-size: var(--bs-dropdown-font-size);\n  color: var(--bs-dropdown-color);\n  text-align: left;\n  list-style: none;\n  background-color: var(--bs-dropdown-bg);\n  background-clip: padding-box;\n  border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);\n}\n.dropdown-menu[data-bs-popper][data-v-9cfc8a2c] {\n  top: 100%;\n  left: 0;\n  margin-top: var(--bs-dropdown-spacer);\n}\n.dropdown-menu-start[data-v-9cfc8a2c] {\n  --bs-position: start;\n}\n.dropdown-menu-start[data-bs-popper][data-v-9cfc8a2c] {\n  right: auto;\n  left: 0;\n}\n.dropdown-menu-end[data-v-9cfc8a2c] {\n  --bs-position: end;\n}\n.dropdown-menu-end[data-bs-popper][data-v-9cfc8a2c] {\n  right: 0;\n  left: auto;\n}\n@media (min-width: 576px) {\n.dropdown-menu-sm-start[data-v-9cfc8a2c] {\n    --bs-position: start;\n}\n.dropdown-menu-sm-start[data-bs-popper][data-v-9cfc8a2c] {\n    right: auto;\n    left: 0;\n}\n.dropdown-menu-sm-end[data-v-9cfc8a2c] {\n    --bs-position: end;\n}\n.dropdown-menu-sm-end[data-bs-popper][data-v-9cfc8a2c] {\n    right: 0;\n    left: auto;\n}\n}\n@media (min-width: 768px) {\n.dropdown-menu-md-start[data-v-9cfc8a2c] {\n    --bs-position: start;\n}\n.dropdown-menu-md-start[data-bs-popper][data-v-9cfc8a2c] {\n    right: auto;\n    left: 0;\n}\n.dropdown-menu-md-end[data-v-9cfc8a2c] {\n    --bs-position: end;\n}\n.dropdown-menu-md-end[data-bs-popper][data-v-9cfc8a2c] {\n    right: 0;\n    left: auto;\n}\n}\n@media (min-width: 992px) {\n.dropdown-menu-lg-start[data-v-9cfc8a2c] {\n    --bs-position: start;\n}\n.dropdown-menu-lg-start[data-bs-popper][data-v-9cfc8a2c] {\n    right: auto;\n    left: 0;\n}\n.dropdown-menu-lg-end[data-v-9cfc8a2c] {\n    --bs-position: end;\n}\n.dropdown-menu-lg-end[data-bs-popper][data-v-9cfc8a2c] {\n    right: 0;\n    left: auto;\n}\n}\n@media (min-width: 1200px) {\n.dropdown-menu-xl-start[data-v-9cfc8a2c] {\n    --bs-position: start;\n}\n.dropdown-menu-xl-start[data-bs-popper][data-v-9cfc8a2c] {\n    right: auto;\n    left: 0;\n}\n.dropdown-menu-xl-end[data-v-9cfc8a2c] {\n    --bs-position: end;\n}\n.dropdown-menu-xl-end[data-bs-popper][data-v-9cfc8a2c] {\n    right: 0;\n    left: auto;\n}\n}\n@media (min-width: 1400px) {\n.dropdown-menu-xxl-start[data-v-9cfc8a2c] {\n    --bs-position: start;\n}\n.dropdown-menu-xxl-start[data-bs-popper][data-v-9cfc8a2c] {\n    right: auto;\n    left: 0;\n}\n.dropdown-menu-xxl-end[data-v-9cfc8a2c] {\n    --bs-position: end;\n}\n.dropdown-menu-xxl-end[data-bs-popper][data-v-9cfc8a2c] {\n    right: 0;\n    left: auto;\n}\n}\n.dropup .dropdown-menu[data-bs-popper][data-v-9cfc8a2c] {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: var(--bs-dropdown-spacer);\n}\n.dropup .dropdown-toggle[data-v-9cfc8a2c]::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n.dropup .dropdown-toggle[data-v-9cfc8a2c]:empty::after {\n  margin-left: 0;\n}\n.dropend .dropdown-menu[data-bs-popper][data-v-9cfc8a2c] {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: var(--bs-dropdown-spacer);\n}\n.dropend .dropdown-toggle[data-v-9cfc8a2c]::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid;\n}\n.dropend .dropdown-toggle[data-v-9cfc8a2c]:empty::after {\n  margin-left: 0;\n}\n.dropend .dropdown-toggle[data-v-9cfc8a2c]::after {\n  vertical-align: 0;\n}\n.dropstart .dropdown-menu[data-bs-popper][data-v-9cfc8a2c] {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: var(--bs-dropdown-spacer);\n}\n.dropstart .dropdown-toggle[data-v-9cfc8a2c]::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n}\n.dropstart .dropdown-toggle[data-v-9cfc8a2c]::after {\n  display: none;\n}\n.dropstart .dropdown-toggle[data-v-9cfc8a2c]::before {\n  display: inline-block;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent;\n}\n.dropstart .dropdown-toggle[data-v-9cfc8a2c]:empty::after {\n  margin-left: 0;\n}\n.dropstart .dropdown-toggle[data-v-9cfc8a2c]::before {\n  vertical-align: 0;\n}\n.dropdown-divider[data-v-9cfc8a2c] {\n  height: 0;\n  margin: var(--bs-dropdown-divider-margin-y) 0;\n  overflow: hidden;\n  border-top: 1px solid var(--bs-dropdown-divider-bg);\n  opacity: 1;\n}\n.dropdown-item[data-v-9cfc8a2c] {\n  display: block;\n  width: 100%;\n  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);\n  clear: both;\n  font-weight: 400;\n  color: var(--bs-dropdown-link-color);\n  text-align: inherit;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n.dropdown-item[data-v-9cfc8a2c]:hover, .dropdown-item[data-v-9cfc8a2c]:focus {\n  color: var(--bs-dropdown-link-hover-color);\n  background-color: var(--bs-dropdown-link-hover-bg);\n}\n.dropdown-item.active[data-v-9cfc8a2c], .dropdown-item[data-v-9cfc8a2c]:active {\n  color: var(--bs-dropdown-link-active-color);\n  text-decoration: none;\n  background-color: var(--bs-dropdown-link-active-bg);\n}\n.dropdown-item.disabled[data-v-9cfc8a2c], .dropdown-item[data-v-9cfc8a2c]:disabled {\n  color: var(--bs-dropdown-link-disabled-color);\n  pointer-events: none;\n  background-color: transparent;\n}\n.dropdown-menu.show[data-v-9cfc8a2c] {\n  display: block;\n}\n.dropdown-header[data-v-9cfc8a2c] {\n  display: block;\n  padding: var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: var(--bs-dropdown-header-color);\n  white-space: nowrap;\n}\n.dropdown-item-text[data-v-9cfc8a2c] {\n  display: block;\n  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);\n  color: var(--bs-dropdown-link-color);\n}\n.dropdown-menu-dark[data-v-9cfc8a2c] {\n  --bs-dropdown-color: #ededed;\n  --bs-dropdown-bg: #343a40;\n  --bs-dropdown-border-color: var(--bs-border-color-translucent);\n  --bs-dropdown-box-shadow: ;\n  --bs-dropdown-link-color: #ededed;\n  --bs-dropdown-link-hover-color: #fff;\n  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);\n  --bs-dropdown-link-hover-bg: rgba(255, 255, 255, 0.15);\n  --bs-dropdown-link-active-color: #fff;\n  --bs-dropdown-link-active-bg: #593196;\n  --bs-dropdown-link-disabled-color: #adb5bd;\n  --bs-dropdown-header-color: #adb5bd;\n}\n.btn-group[data-v-9cfc8a2c],\n.btn-group-vertical[data-v-9cfc8a2c] {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.btn-group > .btn[data-v-9cfc8a2c],\n.btn-group-vertical > .btn[data-v-9cfc8a2c] {\n  position: relative;\n  flex: 1 1 auto;\n}\n.btn-group > .btn-check:checked + .btn[data-v-9cfc8a2c],\n.btn-group > .btn-check:focus + .btn[data-v-9cfc8a2c],\n.btn-group > .btn[data-v-9cfc8a2c]:hover,\n.btn-group > .btn[data-v-9cfc8a2c]:focus,\n.btn-group > .btn[data-v-9cfc8a2c]:active,\n.btn-group > .btn.active[data-v-9cfc8a2c],\n.btn-group-vertical > .btn-check:checked + .btn[data-v-9cfc8a2c],\n.btn-group-vertical > .btn-check:focus + .btn[data-v-9cfc8a2c],\n.btn-group-vertical > .btn[data-v-9cfc8a2c]:hover,\n.btn-group-vertical > .btn[data-v-9cfc8a2c]:focus,\n.btn-group-vertical > .btn[data-v-9cfc8a2c]:active,\n.btn-group-vertical > .btn.active[data-v-9cfc8a2c] {\n  z-index: 1;\n}\n.btn-toolbar[data-v-9cfc8a2c] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.btn-toolbar .input-group[data-v-9cfc8a2c] {\n  width: auto;\n}\n.btn-group > :not(.btn-check:first-child) + .btn[data-v-9cfc8a2c],\n.btn-group > .btn-group[data-v-9cfc8a2c]:not(:first-child) {\n  margin-left: -1px;\n}\n.dropdown-toggle-split[data-v-9cfc8a2c] {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem;\n}\n.dropdown-toggle-split[data-v-9cfc8a2c]::after, .dropup .dropdown-toggle-split[data-v-9cfc8a2c]::after, .dropend .dropdown-toggle-split[data-v-9cfc8a2c]::after {\n  margin-left: 0;\n}\n.dropstart .dropdown-toggle-split[data-v-9cfc8a2c]::before {\n  margin-right: 0;\n}\n.btn-sm + .dropdown-toggle-split[data-v-9cfc8a2c], .btn-group-sm > .btn + .dropdown-toggle-split[data-v-9cfc8a2c] {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n}\n.btn-lg + .dropdown-toggle-split[data-v-9cfc8a2c], .btn-group-lg > .btn + .dropdown-toggle-split[data-v-9cfc8a2c] {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n.btn-group-vertical[data-v-9cfc8a2c] {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n.btn-group-vertical > .btn[data-v-9cfc8a2c],\n.btn-group-vertical > .btn-group[data-v-9cfc8a2c] {\n  width: 100%;\n}\n.btn-group-vertical > .btn[data-v-9cfc8a2c]:not(:first-child),\n.btn-group-vertical > .btn-group[data-v-9cfc8a2c]:not(:first-child) {\n  margin-top: -1px;\n}\n.nav[data-v-9cfc8a2c] {\n  --bs-nav-link-padding-x: 1rem;\n  --bs-nav-link-padding-y: 0.5rem;\n  --bs-nav-link-font-weight: ;\n  --bs-nav-link-color: var(--bs-link-color);\n  --bs-nav-link-hover-color: var(--bs-link-hover-color);\n  --bs-nav-link-disabled-color: #868e96;\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.nav-link[data-v-9cfc8a2c] {\n  display: block;\n  padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);\n  font-size: var(--bs-nav-link-font-size);\n  font-weight: var(--bs-nav-link-font-weight);\n  color: var(--bs-nav-link-color);\n  text-decoration: none;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.nav-link[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n.nav-link[data-v-9cfc8a2c]:hover, .nav-link[data-v-9cfc8a2c]:focus {\n  color: var(--bs-nav-link-hover-color);\n}\n.nav-link.disabled[data-v-9cfc8a2c] {\n  color: var(--bs-nav-link-disabled-color);\n  pointer-events: none;\n  cursor: default;\n}\n.nav-tabs[data-v-9cfc8a2c] {\n  --bs-nav-tabs-border-width: 1px;\n  --bs-nav-tabs-border-color: #ededed;\n  --bs-nav-tabs-border-radius: 0.375rem;\n  --bs-nav-tabs-link-hover-border-color: #593196;\n  --bs-nav-tabs-link-active-color: #444;\n  --bs-nav-tabs-link-active-bg: #fff;\n  --bs-nav-tabs-link-active-border-color: #ededed #ededed #fff;\n  border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color);\n}\n.nav-tabs .nav-link[data-v-9cfc8a2c] {\n  margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width));\n  background: none;\n  border: var(--bs-nav-tabs-border-width) solid transparent;\n}\n.nav-tabs .nav-link[data-v-9cfc8a2c]:hover, .nav-tabs .nav-link[data-v-9cfc8a2c]:focus {\n  isolation: isolate;\n  border-color: var(--bs-nav-tabs-link-hover-border-color);\n}\n.nav-tabs .nav-link.disabled[data-v-9cfc8a2c], .nav-tabs .nav-link[data-v-9cfc8a2c]:disabled {\n  color: var(--bs-nav-link-disabled-color);\n  background-color: transparent;\n  border-color: transparent;\n}\n.nav-tabs .nav-link.active[data-v-9cfc8a2c],\n.nav-tabs .nav-item.show .nav-link[data-v-9cfc8a2c] {\n  color: var(--bs-nav-tabs-link-active-color);\n  background-color: var(--bs-nav-tabs-link-active-bg);\n  border-color: var(--bs-nav-tabs-link-active-border-color);\n}\n.nav-tabs .dropdown-menu[data-v-9cfc8a2c] {\n  margin-top: calc(-1 * var(--bs-nav-tabs-border-width));\n}\n.nav-pills[data-v-9cfc8a2c] {\n  --bs-nav-pills-border-radius: 0.375rem;\n  --bs-nav-pills-link-active-color: #fff;\n  --bs-nav-pills-link-active-bg: #593196;\n}\n.nav-pills .nav-link[data-v-9cfc8a2c] {\n  background: none;\n  border: 0;\n}\n.nav-pills .nav-link[data-v-9cfc8a2c]:disabled {\n  color: var(--bs-nav-link-disabled-color);\n  background-color: transparent;\n  border-color: transparent;\n}\n.nav-pills .nav-link.active[data-v-9cfc8a2c],\n.nav-pills .show > .nav-link[data-v-9cfc8a2c] {\n  color: var(--bs-nav-pills-link-active-color);\n  background-color: var(--bs-nav-pills-link-active-bg);\n}\n.nav-fill > .nav-link[data-v-9cfc8a2c],\n.nav-fill .nav-item[data-v-9cfc8a2c] {\n  flex: 1 1 auto;\n  text-align: center;\n}\n.nav-justified > .nav-link[data-v-9cfc8a2c],\n.nav-justified .nav-item[data-v-9cfc8a2c] {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center;\n}\n.nav-fill .nav-item .nav-link[data-v-9cfc8a2c],\n.nav-justified .nav-item .nav-link[data-v-9cfc8a2c] {\n  width: 100%;\n}\n.tab-content > .tab-pane[data-v-9cfc8a2c] {\n  display: none;\n}\n.tab-content > .active[data-v-9cfc8a2c] {\n  display: block;\n}\n.navbar[data-v-9cfc8a2c] {\n  --bs-navbar-padding-x: 0;\n  --bs-navbar-padding-y: 1.2rem;\n  --bs-navbar-color: rgba(0, 0, 0, 0.4);\n  --bs-navbar-hover-color: rgba(0, 0, 0, 0.7);\n  --bs-navbar-disabled-color: rgba(0, 0, 0, 0.2);\n  --bs-navbar-active-color: rgba(0, 0, 0, 0.7);\n  --bs-navbar-brand-padding-y: 0.3125rem;\n  --bs-navbar-brand-margin-end: 1rem;\n  --bs-navbar-brand-font-size: 1.25rem;\n  --bs-navbar-brand-color: rgba(0, 0, 0, 0.7);\n  --bs-navbar-brand-hover-color: rgba(0, 0, 0, 0.7);\n  --bs-navbar-nav-link-padding-x: 0.5rem;\n  --bs-navbar-toggler-padding-y: 0.25rem;\n  --bs-navbar-toggler-padding-x: 0.75rem;\n  --bs-navbar-toggler-font-size: 1.25rem;\n  --bs-navbar-toggler-icon-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.4%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n  --bs-navbar-toggler-border-color: rgba(0, 0, 0, 0.1);\n  --bs-navbar-toggler-border-radius: 0.375rem;\n  --bs-navbar-toggler-focus-width: 0.25rem;\n  --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);\n}\n.navbar > .container[data-v-9cfc8a2c],\n.navbar > .container-fluid[data-v-9cfc8a2c],\n.navbar > .container-sm[data-v-9cfc8a2c],\n.navbar > .container-md[data-v-9cfc8a2c],\n.navbar > .container-lg[data-v-9cfc8a2c],\n.navbar > .container-xl[data-v-9cfc8a2c],\n.navbar > .container-xxl[data-v-9cfc8a2c] {\n  display: flex;\n  flex-wrap: inherit;\n  align-items: center;\n  justify-content: space-between;\n}\n.navbar-brand[data-v-9cfc8a2c] {\n  padding-top: var(--bs-navbar-brand-padding-y);\n  padding-bottom: var(--bs-navbar-brand-padding-y);\n  margin-right: var(--bs-navbar-brand-margin-end);\n  font-size: var(--bs-navbar-brand-font-size);\n  color: var(--bs-navbar-brand-color);\n  text-decoration: none;\n  white-space: nowrap;\n}\n.navbar-brand[data-v-9cfc8a2c]:hover, .navbar-brand[data-v-9cfc8a2c]:focus {\n  color: var(--bs-navbar-brand-hover-color);\n}\n.navbar-nav[data-v-9cfc8a2c] {\n  --bs-nav-link-padding-x: 0;\n  --bs-nav-link-padding-y: 0.5rem;\n  --bs-nav-link-font-weight: ;\n  --bs-nav-link-color: var(--bs-navbar-color);\n  --bs-nav-link-hover-color: var(--bs-navbar-hover-color);\n  --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.navbar-nav .show > .nav-link[data-v-9cfc8a2c],\n.navbar-nav .nav-link.active[data-v-9cfc8a2c] {\n  color: var(--bs-navbar-active-color);\n}\n.navbar-nav .dropdown-menu[data-v-9cfc8a2c] {\n  position: static;\n}\n.navbar-text[data-v-9cfc8a2c] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: var(--bs-navbar-color);\n}\n.navbar-text a[data-v-9cfc8a2c],\n.navbar-text a[data-v-9cfc8a2c]:hover,\n.navbar-text a[data-v-9cfc8a2c]:focus {\n  color: var(--bs-navbar-active-color);\n}\n.navbar-collapse[data-v-9cfc8a2c] {\n  flex-basis: 100%;\n  flex-grow: 1;\n  align-items: center;\n}\n.navbar-toggler[data-v-9cfc8a2c] {\n  padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);\n  font-size: var(--bs-navbar-toggler-font-size);\n  line-height: 1;\n  color: var(--bs-navbar-color);\n  background-color: transparent;\n  border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);\n  transition: var(--bs-navbar-toggler-transition);\n}\n@media (prefers-reduced-motion: reduce) {\n.navbar-toggler[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n.navbar-toggler[data-v-9cfc8a2c]:hover {\n  text-decoration: none;\n}\n.navbar-toggler[data-v-9cfc8a2c]:focus {\n  text-decoration: none;\n  outline: 0;\n  box-shadow: 0 0 0 var(--bs-navbar-toggler-focus-width);\n}\n.navbar-toggler-icon[data-v-9cfc8a2c] {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  background-image: var(--bs-navbar-toggler-icon-bg);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n}\n.navbar-nav-scroll[data-v-9cfc8a2c] {\n  max-height: var(--bs-scroll-height, 75vh);\n  overflow-y: auto;\n}\n@media (min-width: 576px) {\n.navbar-expand-sm[data-v-9cfc8a2c] {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n}\n.navbar-expand-sm .navbar-nav[data-v-9cfc8a2c] {\n    flex-direction: row;\n}\n.navbar-expand-sm .navbar-nav .dropdown-menu[data-v-9cfc8a2c] {\n    position: absolute;\n}\n.navbar-expand-sm .navbar-nav .nav-link[data-v-9cfc8a2c] {\n    padding-right: var(--bs-navbar-nav-link-padding-x);\n    padding-left: var(--bs-navbar-nav-link-padding-x);\n}\n.navbar-expand-sm .navbar-nav-scroll[data-v-9cfc8a2c] {\n    overflow: visible;\n}\n.navbar-expand-sm .navbar-collapse[data-v-9cfc8a2c] {\n    display: flex !important;\n    flex-basis: auto;\n}\n.navbar-expand-sm .navbar-toggler[data-v-9cfc8a2c] {\n    display: none;\n}\n.navbar-expand-sm .offcanvas[data-v-9cfc8a2c] {\n    position: static;\n    z-index: auto;\n    flex-grow: 1;\n    width: auto !important;\n    height: auto !important;\n    visibility: visible !important;\n    background-color: transparent !important;\n    border: 0 !important;\n    transform: none !important;\n    transition: none;\n}\n.navbar-expand-sm .offcanvas .offcanvas-header[data-v-9cfc8a2c] {\n    display: none;\n}\n.navbar-expand-sm .offcanvas .offcanvas-body[data-v-9cfc8a2c] {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n}\n}\n@media (min-width: 768px) {\n.navbar-expand-md[data-v-9cfc8a2c] {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n}\n.navbar-expand-md .navbar-nav[data-v-9cfc8a2c] {\n    flex-direction: row;\n}\n.navbar-expand-md .navbar-nav .dropdown-menu[data-v-9cfc8a2c] {\n    position: absolute;\n}\n.navbar-expand-md .navbar-nav .nav-link[data-v-9cfc8a2c] {\n    padding-right: var(--bs-navbar-nav-link-padding-x);\n    padding-left: var(--bs-navbar-nav-link-padding-x);\n}\n.navbar-expand-md .navbar-nav-scroll[data-v-9cfc8a2c] {\n    overflow: visible;\n}\n.navbar-expand-md .navbar-collapse[data-v-9cfc8a2c] {\n    display: flex !important;\n    flex-basis: auto;\n}\n.navbar-expand-md .navbar-toggler[data-v-9cfc8a2c] {\n    display: none;\n}\n.navbar-expand-md .offcanvas[data-v-9cfc8a2c] {\n    position: static;\n    z-index: auto;\n    flex-grow: 1;\n    width: auto !important;\n    height: auto !important;\n    visibility: visible !important;\n    background-color: transparent !important;\n    border: 0 !important;\n    transform: none !important;\n    transition: none;\n}\n.navbar-expand-md .offcanvas .offcanvas-header[data-v-9cfc8a2c] {\n    display: none;\n}\n.navbar-expand-md .offcanvas .offcanvas-body[data-v-9cfc8a2c] {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n}\n}\n@media (min-width: 992px) {\n.navbar-expand-lg[data-v-9cfc8a2c] {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n}\n.navbar-expand-lg .navbar-nav[data-v-9cfc8a2c] {\n    flex-direction: row;\n}\n.navbar-expand-lg .navbar-nav .dropdown-menu[data-v-9cfc8a2c] {\n    position: absolute;\n}\n.navbar-expand-lg .navbar-nav .nav-link[data-v-9cfc8a2c] {\n    padding-right: var(--bs-navbar-nav-link-padding-x);\n    padding-left: var(--bs-navbar-nav-link-padding-x);\n}\n.navbar-expand-lg .navbar-nav-scroll[data-v-9cfc8a2c] {\n    overflow: visible;\n}\n.navbar-expand-lg .navbar-collapse[data-v-9cfc8a2c] {\n    display: flex !important;\n    flex-basis: auto;\n}\n.navbar-expand-lg .navbar-toggler[data-v-9cfc8a2c] {\n    display: none;\n}\n.navbar-expand-lg .offcanvas[data-v-9cfc8a2c] {\n    position: static;\n    z-index: auto;\n    flex-grow: 1;\n    width: auto !important;\n    height: auto !important;\n    visibility: visible !important;\n    background-color: transparent !important;\n    border: 0 !important;\n    transform: none !important;\n    transition: none;\n}\n.navbar-expand-lg .offcanvas .offcanvas-header[data-v-9cfc8a2c] {\n    display: none;\n}\n.navbar-expand-lg .offcanvas .offcanvas-body[data-v-9cfc8a2c] {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n}\n}\n@media (min-width: 1200px) {\n.navbar-expand-xl[data-v-9cfc8a2c] {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n}\n.navbar-expand-xl .navbar-nav[data-v-9cfc8a2c] {\n    flex-direction: row;\n}\n.navbar-expand-xl .navbar-nav .dropdown-menu[data-v-9cfc8a2c] {\n    position: absolute;\n}\n.navbar-expand-xl .navbar-nav .nav-link[data-v-9cfc8a2c] {\n    padding-right: var(--bs-navbar-nav-link-padding-x);\n    padding-left: var(--bs-navbar-nav-link-padding-x);\n}\n.navbar-expand-xl .navbar-nav-scroll[data-v-9cfc8a2c] {\n    overflow: visible;\n}\n.navbar-expand-xl .navbar-collapse[data-v-9cfc8a2c] {\n    display: flex !important;\n    flex-basis: auto;\n}\n.navbar-expand-xl .navbar-toggler[data-v-9cfc8a2c] {\n    display: none;\n}\n.navbar-expand-xl .offcanvas[data-v-9cfc8a2c] {\n    position: static;\n    z-index: auto;\n    flex-grow: 1;\n    width: auto !important;\n    height: auto !important;\n    visibility: visible !important;\n    background-color: transparent !important;\n    border: 0 !important;\n    transform: none !important;\n    transition: none;\n}\n.navbar-expand-xl .offcanvas .offcanvas-header[data-v-9cfc8a2c] {\n    display: none;\n}\n.navbar-expand-xl .offcanvas .offcanvas-body[data-v-9cfc8a2c] {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n}\n}\n@media (min-width: 1400px) {\n.navbar-expand-xxl[data-v-9cfc8a2c] {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n}\n.navbar-expand-xxl .navbar-nav[data-v-9cfc8a2c] {\n    flex-direction: row;\n}\n.navbar-expand-xxl .navbar-nav .dropdown-menu[data-v-9cfc8a2c] {\n    position: absolute;\n}\n.navbar-expand-xxl .navbar-nav .nav-link[data-v-9cfc8a2c] {\n    padding-right: var(--bs-navbar-nav-link-padding-x);\n    padding-left: var(--bs-navbar-nav-link-padding-x);\n}\n.navbar-expand-xxl .navbar-nav-scroll[data-v-9cfc8a2c] {\n    overflow: visible;\n}\n.navbar-expand-xxl .navbar-collapse[data-v-9cfc8a2c] {\n    display: flex !important;\n    flex-basis: auto;\n}\n.navbar-expand-xxl .navbar-toggler[data-v-9cfc8a2c] {\n    display: none;\n}\n.navbar-expand-xxl .offcanvas[data-v-9cfc8a2c] {\n    position: static;\n    z-index: auto;\n    flex-grow: 1;\n    width: auto !important;\n    height: auto !important;\n    visibility: visible !important;\n    background-color: transparent !important;\n    border: 0 !important;\n    transform: none !important;\n    transition: none;\n}\n.navbar-expand-xxl .offcanvas .offcanvas-header[data-v-9cfc8a2c] {\n    display: none;\n}\n.navbar-expand-xxl .offcanvas .offcanvas-body[data-v-9cfc8a2c] {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n}\n}\n.navbar-expand[data-v-9cfc8a2c] {\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n}\n.navbar-expand .navbar-nav[data-v-9cfc8a2c] {\n  flex-direction: row;\n}\n.navbar-expand .navbar-nav .dropdown-menu[data-v-9cfc8a2c] {\n  position: absolute;\n}\n.navbar-expand .navbar-nav .nav-link[data-v-9cfc8a2c] {\n  padding-right: var(--bs-navbar-nav-link-padding-x);\n  padding-left: var(--bs-navbar-nav-link-padding-x);\n}\n.navbar-expand .navbar-nav-scroll[data-v-9cfc8a2c] {\n  overflow: visible;\n}\n.navbar-expand .navbar-collapse[data-v-9cfc8a2c] {\n  display: flex !important;\n  flex-basis: auto;\n}\n.navbar-expand .navbar-toggler[data-v-9cfc8a2c] {\n  display: none;\n}\n.navbar-expand .offcanvas[data-v-9cfc8a2c] {\n  position: static;\n  z-index: auto;\n  flex-grow: 1;\n  width: auto !important;\n  height: auto !important;\n  visibility: visible !important;\n  background-color: transparent !important;\n  border: 0 !important;\n  transform: none !important;\n  transition: none;\n}\n.navbar-expand .offcanvas .offcanvas-header[data-v-9cfc8a2c] {\n  display: none;\n}\n.navbar-expand .offcanvas .offcanvas-body[data-v-9cfc8a2c] {\n  display: flex;\n  flex-grow: 0;\n  padding: 0;\n  overflow-y: visible;\n}\n.navbar-dark[data-v-9cfc8a2c] {\n  --bs-navbar-color: rgba(255, 255, 255, 0.55);\n  --bs-navbar-hover-color: rgba(255, 255, 255, 0.9);\n  --bs-navbar-disabled-color: rgba(255, 255, 255, 0.25);\n  --bs-navbar-active-color: rgba(255, 255, 255, 0.9);\n  --bs-navbar-brand-color: rgba(255, 255, 255, 0.9);\n  --bs-navbar-brand-hover-color: rgba(255, 255, 255, 0.9);\n  --bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1);\n  --bs-navbar-toggler-icon-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n.card[data-v-9cfc8a2c] {\n  --bs-card-spacer-y: 1rem;\n  --bs-card-spacer-x: 1rem;\n  --bs-card-title-spacer-y: 0.5rem;\n  --bs-card-border-width: 1px;\n  --bs-card-border-color: var(--bs-border-color-translucent);\n  --bs-card-border-radius: 0.375rem;\n  --bs-card-box-shadow: ;\n  --bs-card-inner-border-radius: calc(0.375rem - 1px);\n  --bs-card-cap-padding-y: 0.5rem;\n  --bs-card-cap-padding-x: 1rem;\n  --bs-card-cap-bg: rgba(0, 0, 0, 0.03);\n  --bs-card-cap-color: ;\n  --bs-card-height: ;\n  --bs-card-color: ;\n  --bs-card-bg: #fff;\n  --bs-card-img-overlay-padding: 1rem;\n  --bs-card-group-margin: 0.75rem;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  height: var(--bs-card-height);\n  word-wrap: break-word;\n  background-color: var(--bs-card-bg);\n  background-clip: border-box;\n  border: var(--bs-card-border-width) solid var(--bs-card-border-color);\n}\n.card > hr[data-v-9cfc8a2c] {\n  margin-right: 0;\n  margin-left: 0;\n}\n.card > .list-group[data-v-9cfc8a2c] {\n  border-top: inherit;\n  border-bottom: inherit;\n}\n.card > .list-group[data-v-9cfc8a2c]:first-child {\n  border-top-width: 0;\n}\n.card > .list-group[data-v-9cfc8a2c]:last-child {\n  border-bottom-width: 0;\n}\n.card > .card-header + .list-group[data-v-9cfc8a2c],\n.card > .list-group + .card-footer[data-v-9cfc8a2c] {\n  border-top: 0;\n}\n.card-body[data-v-9cfc8a2c] {\n  flex: 1 1 auto;\n  padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);\n  color: var(--bs-card-color);\n}\n.card-title[data-v-9cfc8a2c] {\n  margin-bottom: var(--bs-card-title-spacer-y);\n}\n.card-subtitle[data-v-9cfc8a2c] {\n  margin-top: calc(-0.5 * var(--bs-card-title-spacer-y));\n  margin-bottom: 0;\n}\n.card-text[data-v-9cfc8a2c]:last-child {\n  margin-bottom: 0;\n}\n.card-link + .card-link[data-v-9cfc8a2c] {\n  margin-left: var(--bs-card-spacer-x);\n}\n.card-header[data-v-9cfc8a2c] {\n  padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);\n  margin-bottom: 0;\n  color: var(--bs-card-cap-color);\n  background-color: var(--bs-card-cap-bg);\n  border-bottom: var(--bs-card-border-width) solid var(--bs-card-border-color);\n}\n.card-footer[data-v-9cfc8a2c] {\n  padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);\n  color: var(--bs-card-cap-color);\n  background-color: var(--bs-card-cap-bg);\n  border-top: var(--bs-card-border-width) solid var(--bs-card-border-color);\n}\n.card-header-tabs[data-v-9cfc8a2c] {\n  margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));\n  margin-bottom: calc(-1 * var(--bs-card-cap-padding-y));\n  margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));\n  border-bottom: 0;\n}\n.card-header-tabs .nav-link.active[data-v-9cfc8a2c] {\n  background-color: var(--bs-card-bg);\n  border-bottom-color: var(--bs-card-bg);\n}\n.card-header-pills[data-v-9cfc8a2c] {\n  margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));\n  margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));\n}\n.card-img-overlay[data-v-9cfc8a2c] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: var(--bs-card-img-overlay-padding);\n}\n.card-img[data-v-9cfc8a2c],\n.card-img-top[data-v-9cfc8a2c],\n.card-img-bottom[data-v-9cfc8a2c] {\n  width: 100%;\n}\n.card-group > .card[data-v-9cfc8a2c] {\n  margin-bottom: var(--bs-card-group-margin);\n}\n@media (min-width: 576px) {\n.card-group[data-v-9cfc8a2c] {\n    display: flex;\n    flex-flow: row wrap;\n}\n.card-group > .card[data-v-9cfc8a2c] {\n    flex: 1 0 0%;\n    margin-bottom: 0;\n}\n.card-group > .card + .card[data-v-9cfc8a2c] {\n    margin-left: 0;\n    border-left: 0;\n}\n}\n.accordion[data-v-9cfc8a2c] {\n  --bs-accordion-color: #444;\n  --bs-accordion-bg: #fff;\n  --bs-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;\n  --bs-accordion-border-color: var(--bs-border-color);\n  --bs-accordion-border-width: 1px;\n  --bs-accordion-border-radius: 0.375rem;\n  --bs-accordion-inner-border-radius: calc(0.375rem - 1px);\n  --bs-accordion-btn-padding-x: 1.25rem;\n  --bs-accordion-btn-padding-y: 1rem;\n  --bs-accordion-btn-color: #444;\n  --bs-accordion-btn-bg: var(--bs-accordion-bg);\n  --bs-accordion-btn-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23444'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n  --bs-accordion-btn-icon-width: 1.25rem;\n  --bs-accordion-btn-icon-transform: rotate(-180deg);\n  --bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;\n  --bs-accordion-btn-active-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23502c87'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n  --bs-accordion-btn-focus-border-color: #593196;\n  --bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(89, 49, 150, 0.25);\n  --bs-accordion-body-padding-x: 1.25rem;\n  --bs-accordion-body-padding-y: 1rem;\n  --bs-accordion-active-color: #502c87;\n  --bs-accordion-active-bg: #eeeaf5;\n}\n.accordion-button[data-v-9cfc8a2c] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);\n  font-size: 1rem;\n  color: var(--bs-accordion-btn-color);\n  text-align: left;\n  background-color: var(--bs-accordion-btn-bg);\n  border: 0;\n  overflow-anchor: none;\n  transition: var(--bs-accordion-transition);\n}\n@media (prefers-reduced-motion: reduce) {\n.accordion-button[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n.accordion-button[data-v-9cfc8a2c]:not(.collapsed) {\n  color: var(--bs-accordion-active-color);\n  background-color: var(--bs-accordion-active-bg);\n  box-shadow: inset 0 calc(-1 * var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color);\n}\n.accordion-button[data-v-9cfc8a2c]:not(.collapsed)::after {\n  background-image: var(--bs-accordion-btn-active-icon);\n  transform: var(--bs-accordion-btn-icon-transform);\n}\n.accordion-button[data-v-9cfc8a2c]::after {\n  flex-shrink: 0;\n  width: var(--bs-accordion-btn-icon-width);\n  height: var(--bs-accordion-btn-icon-width);\n  margin-left: auto;\n  content: \"\";\n  background-image: var(--bs-accordion-btn-icon);\n  background-repeat: no-repeat;\n  background-size: var(--bs-accordion-btn-icon-width);\n  transition: var(--bs-accordion-btn-icon-transition);\n}\n@media (prefers-reduced-motion: reduce) {\n.accordion-button[data-v-9cfc8a2c]::after {\n    transition: none;\n}\n}\n.accordion-button[data-v-9cfc8a2c]:hover {\n  z-index: 2;\n}\n.accordion-button[data-v-9cfc8a2c]:focus {\n  z-index: 3;\n  border-color: var(--bs-accordion-btn-focus-border-color);\n  outline: 0;\n  box-shadow: var(--bs-accordion-btn-focus-box-shadow);\n}\n.accordion-header[data-v-9cfc8a2c] {\n  margin-bottom: 0;\n}\n.accordion-item[data-v-9cfc8a2c] {\n  color: var(--bs-accordion-color);\n  background-color: var(--bs-accordion-bg);\n  border: var(--bs-accordion-border-width) solid var(--bs-accordion-border-color);\n}\n.accordion-item[data-v-9cfc8a2c]:not(:first-of-type) {\n  border-top: 0;\n}\n.accordion-body[data-v-9cfc8a2c] {\n  padding: var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x);\n}\n.accordion-flush .accordion-collapse[data-v-9cfc8a2c] {\n  border-width: 0;\n}\n.accordion-flush .accordion-item[data-v-9cfc8a2c] {\n  border-right: 0;\n  border-left: 0;\n}\n.accordion-flush .accordion-item[data-v-9cfc8a2c]:first-child {\n  border-top: 0;\n}\n.accordion-flush .accordion-item[data-v-9cfc8a2c]:last-child {\n  border-bottom: 0;\n}\n.breadcrumb[data-v-9cfc8a2c] {\n  --bs-breadcrumb-padding-x: 0;\n  --bs-breadcrumb-padding-y: 0;\n  --bs-breadcrumb-margin-bottom: 1rem;\n  --bs-breadcrumb-bg: ;\n  --bs-breadcrumb-border-radius: ;\n  --bs-breadcrumb-divider-color: #868e96;\n  --bs-breadcrumb-item-padding-x: 0.5rem;\n  --bs-breadcrumb-item-active-color: #868e96;\n  display: flex;\n  flex-wrap: wrap;\n  padding: var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);\n  margin-bottom: var(--bs-breadcrumb-margin-bottom);\n  font-size: var(--bs-breadcrumb-font-size);\n  list-style: none;\n  background-color: var(--bs-breadcrumb-bg);\n}\n.breadcrumb-item + .breadcrumb-item[data-v-9cfc8a2c] {\n  padding-left: var(--bs-breadcrumb-item-padding-x);\n}\n.breadcrumb-item + .breadcrumb-item[data-v-9cfc8a2c]::before {\n  float: left;\n  padding-right: var(--bs-breadcrumb-item-padding-x);\n  color: var(--bs-breadcrumb-divider-color);\n  content: var(--bs-breadcrumb-divider, \"/\") /* rtl: var(--bs-breadcrumb-divider, \"/\") */;\n}\n.breadcrumb-item.active[data-v-9cfc8a2c] {\n  color: var(--bs-breadcrumb-item-active-color);\n}\n.pagination[data-v-9cfc8a2c] {\n  --bs-pagination-padding-x: 0.75rem;\n  --bs-pagination-padding-y: 0.375rem;\n  --bs-pagination-font-size: 1rem;\n  --bs-pagination-color: var(--bs-link-color);\n  --bs-pagination-bg: #fff;\n  --bs-pagination-border-width: 1px;\n  --bs-pagination-border-color: #ededed;\n  --bs-pagination-border-radius: 0.375rem;\n  --bs-pagination-hover-color: var(--bs-link-hover-color);\n  --bs-pagination-hover-bg: #f9f8fc;\n  --bs-pagination-hover-border-color: #ededed;\n  --bs-pagination-focus-color: var(--bs-link-hover-color);\n  --bs-pagination-focus-bg: #f9f8fc;\n  --bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(89, 49, 150, 0.25);\n  --bs-pagination-active-color: #fff;\n  --bs-pagination-active-bg: #593196;\n  --bs-pagination-active-border-color: #593196;\n  --bs-pagination-disabled-color: #868e96;\n  --bs-pagination-disabled-bg: #fff;\n  --bs-pagination-disabled-border-color: #ededed;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n}\n.page-link[data-v-9cfc8a2c] {\n  position: relative;\n  display: block;\n  padding: var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);\n  font-size: var(--bs-pagination-font-size);\n  color: var(--bs-pagination-color);\n  text-decoration: none;\n  background-color: var(--bs-pagination-bg);\n  border: var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.page-link[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n.page-link[data-v-9cfc8a2c]:hover {\n  z-index: 2;\n  color: var(--bs-pagination-hover-color);\n  background-color: var(--bs-pagination-hover-bg);\n  border-color: var(--bs-pagination-hover-border-color);\n}\n.page-link[data-v-9cfc8a2c]:focus {\n  z-index: 3;\n  color: var(--bs-pagination-focus-color);\n  background-color: var(--bs-pagination-focus-bg);\n  outline: 0;\n  box-shadow: var(--bs-pagination-focus-box-shadow);\n}\n.page-link.active[data-v-9cfc8a2c], .active > .page-link[data-v-9cfc8a2c] {\n  z-index: 3;\n  color: var(--bs-pagination-active-color);\n  background-color: var(--bs-pagination-active-bg);\n  border-color: var(--bs-pagination-active-border-color);\n}\n.page-link.disabled[data-v-9cfc8a2c], .disabled > .page-link[data-v-9cfc8a2c] {\n  color: var(--bs-pagination-disabled-color);\n  pointer-events: none;\n  background-color: var(--bs-pagination-disabled-bg);\n  border-color: var(--bs-pagination-disabled-border-color);\n}\n.page-item:not(:first-child) .page-link[data-v-9cfc8a2c] {\n  margin-left: -1px;\n}\n.pagination-lg[data-v-9cfc8a2c] {\n  --bs-pagination-padding-x: 1.5rem;\n  --bs-pagination-padding-y: 0.75rem;\n  --bs-pagination-font-size: 1.25rem;\n  --bs-pagination-border-radius: 0.5rem;\n}\n.pagination-sm[data-v-9cfc8a2c] {\n  --bs-pagination-padding-x: 0.5rem;\n  --bs-pagination-padding-y: 0.25rem;\n  --bs-pagination-font-size: 0.875rem;\n  --bs-pagination-border-radius: 0.25rem;\n}\n.badge[data-v-9cfc8a2c] {\n  --bs-badge-padding-x: 0.65em;\n  --bs-badge-padding-y: 0.35em;\n  --bs-badge-font-size: 0.75em;\n  --bs-badge-font-weight: 700;\n  --bs-badge-color: #fff;\n  --bs-badge-border-radius: 0.375rem;\n  display: inline-block;\n  padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);\n  font-size: var(--bs-badge-font-size);\n  font-weight: var(--bs-badge-font-weight);\n  line-height: 1;\n  color: var(--bs-badge-color);\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n}\n.badge[data-v-9cfc8a2c]:empty {\n  display: none;\n}\n.btn .badge[data-v-9cfc8a2c] {\n  position: relative;\n  top: -1px;\n}\n.alert[data-v-9cfc8a2c] {\n  --bs-alert-bg: transparent;\n  --bs-alert-padding-x: 1rem;\n  --bs-alert-padding-y: 1rem;\n  --bs-alert-margin-bottom: 1rem;\n  --bs-alert-color: inherit;\n  --bs-alert-border-color: transparent;\n  --bs-alert-border: 1px solid var(--bs-alert-border-color);\n  --bs-alert-border-radius: 0.375rem;\n  position: relative;\n  padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x);\n  margin-bottom: var(--bs-alert-margin-bottom);\n  color: var(--bs-alert-color);\n  background-color: var(--bs-alert-bg);\n  border: var(--bs-alert-border);\n}\n.alert-heading[data-v-9cfc8a2c] {\n  color: inherit;\n}\n.alert-link[data-v-9cfc8a2c] {\n  font-weight: 700;\n}\n.alert-dismissible[data-v-9cfc8a2c] {\n  padding-right: 3rem;\n}\n.alert-dismissible .btn-close[data-v-9cfc8a2c] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  padding: 1.25rem 1rem;\n}\n.alert-primary[data-v-9cfc8a2c] {\n  --bs-alert-color: #351d5a;\n  --bs-alert-bg: #ded6ea;\n  --bs-alert-border-color: #cdc1e0;\n}\n.alert-primary .alert-link[data-v-9cfc8a2c] {\n  color: #2a1748;\n}\n.alert-secondary[data-v-9cfc8a2c] {\n  --bs-alert-color: #65577f;\n  --bs-alert-bg: #eee9f6;\n  --bs-alert-border-color: #e5def2;\n}\n.alert-secondary .alert-link[data-v-9cfc8a2c] {\n  color: #514666;\n}\n.alert-success[data-v-9cfc8a2c] {\n  --bs-alert-color: #0b6f33;\n  --bs-alert-bg: #d0f1dd;\n  --bs-alert-border-color: #b8eacc;\n}\n.alert-success .alert-link[data-v-9cfc8a2c] {\n  color: #095929;\n}\n.alert-info[data-v-9cfc8a2c] {\n  --bs-alert-color: #005e84;\n  --bs-alert-bg: #ccebf8;\n  --bs-alert-border-color: #b3e1f5;\n}\n.alert-info .alert-link[data-v-9cfc8a2c] {\n  color: #004b6a;\n}\n.alert-warning[data-v-9cfc8a2c] {\n  --bs-alert-color: #8f6211;\n  --bs-alert-bg: #fcedd2;\n  --bs-alert-border-color: #fae3bb;\n}\n.alert-warning .alert-link[data-v-9cfc8a2c] {\n  color: #724e0e;\n}\n.alert-danger[data-v-9cfc8a2c] {\n  --bs-alert-color: #972222;\n  --bs-alert-bg: #fed7d7;\n  --bs-alert-border-color: #fec4c4;\n}\n.alert-danger .alert-link[data-v-9cfc8a2c] {\n  color: #791b1b;\n}\n.alert-light[data-v-9cfc8a2c] {\n  --bs-alert-color: #959597;\n  --bs-alert-bg: #fefefe;\n  --bs-alert-border-color: #fdfdfe;\n}\n.alert-light .alert-link[data-v-9cfc8a2c] {\n  color: #777779;\n}\n.alert-dark[data-v-9cfc8a2c] {\n  --bs-alert-color: #0e0c13;\n  --bs-alert-bg: #d1d0d2;\n  --bs-alert-border-color: #b9b9bc;\n}\n.alert-dark .alert-link[data-v-9cfc8a2c] {\n  color: #0b0a0f;\n}\n@keyframes progress-bar-stripes-9cfc8a2c {\n0% {\n    background-position-x: 1rem;\n}\n}\n.progress[data-v-9cfc8a2c] {\n  --bs-progress-height: 1rem;\n  --bs-progress-font-size: 0.75rem;\n  --bs-progress-bg: #ededed;\n  --bs-progress-border-radius: 0.375rem;\n  --bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);\n  --bs-progress-bar-color: #fff;\n  --bs-progress-bar-bg: #593196;\n  --bs-progress-bar-transition: width 0.6s ease;\n  display: flex;\n  height: var(--bs-progress-height);\n  overflow: hidden;\n  font-size: var(--bs-progress-font-size);\n  background-color: var(--bs-progress-bg);\n}\n.progress-bar[data-v-9cfc8a2c] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: var(--bs-progress-bar-color);\n  text-align: center;\n  white-space: nowrap;\n  background-color: var(--bs-progress-bar-bg);\n  transition: var(--bs-progress-bar-transition);\n}\n@media (prefers-reduced-motion: reduce) {\n.progress-bar[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n.progress-bar-striped[data-v-9cfc8a2c] {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: var(--bs-progress-height) var(--bs-progress-height);\n}\n.progress-bar-animated[data-v-9cfc8a2c] {\n  animation: 1s linear infinite progress-bar-stripes-9cfc8a2c;\n}\n@media (prefers-reduced-motion: reduce) {\n.progress-bar-animated[data-v-9cfc8a2c] {\n    animation: none;\n}\n}\n.list-group[data-v-9cfc8a2c] {\n  --bs-list-group-color: #17141f;\n  --bs-list-group-bg: #17141f;\n  --bs-list-group-border-color: transparent;\n  --bs-list-group-border-width: 1px;\n  --bs-list-group-border-radius: 0.375rem;\n  --bs-list-group-item-padding-x: 1rem;\n  --bs-list-group-item-padding-y: 0.5rem;\n  --bs-list-group-action-color: #444;\n  --bs-list-group-action-hover-color: #444;\n  --bs-list-group-action-hover-bg: #2e283e;\n  --bs-list-group-action-active-color: #444;\n  --bs-list-group-action-active-bg: #f9f8fc;\n  --bs-list-group-disabled-color: #5c507c;\n  --bs-list-group-disabled-bg: #17141f;\n  --bs-list-group-active-color: #fff;\n  --bs-list-group-active-bg: #17141f;\n  --bs-list-group-active-border-color: #17141f;\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n.list-group-numbered[data-v-9cfc8a2c] {\n  list-style-type: none;\n  counter-reset: section;\n}\n.list-group-numbered > .list-group-item[data-v-9cfc8a2c]::before {\n  content: counters(section, \".\") \". \";\n  counter-increment: section;\n}\n.list-group-item-action[data-v-9cfc8a2c] {\n  width: 100%;\n  color: var(--bs-list-group-action-color);\n  text-align: inherit;\n}\n.list-group-item-action[data-v-9cfc8a2c]:hover, .list-group-item-action[data-v-9cfc8a2c]:focus {\n  z-index: 1;\n  color: var(--bs-list-group-action-hover-color);\n  text-decoration: none;\n  background-color: var(--bs-list-group-action-hover-bg);\n}\n.list-group-item-action[data-v-9cfc8a2c]:active {\n  color: var(--bs-list-group-action-active-color);\n  background-color: var(--bs-list-group-action-active-bg);\n}\n.list-group-item[data-v-9cfc8a2c] {\n  position: relative;\n  display: block;\n  padding: var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);\n  color: var(--bs-list-group-color);\n  text-decoration: none;\n  background-color: var(--bs-list-group-bg);\n  border: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color);\n}\n.list-group-item.disabled[data-v-9cfc8a2c], .list-group-item[data-v-9cfc8a2c]:disabled {\n  color: var(--bs-list-group-disabled-color);\n  pointer-events: none;\n  background-color: var(--bs-list-group-disabled-bg);\n}\n.list-group-item.active[data-v-9cfc8a2c] {\n  z-index: 2;\n  color: var(--bs-list-group-active-color);\n  background-color: var(--bs-list-group-active-bg);\n  border-color: var(--bs-list-group-active-border-color);\n}\n.list-group-item + .list-group-item[data-v-9cfc8a2c] {\n  border-top-width: 0;\n}\n.list-group-item + .list-group-item.active[data-v-9cfc8a2c] {\n  margin-top: calc(-1 * var(--bs-list-group-border-width));\n  border-top-width: var(--bs-list-group-border-width);\n}\n.list-group-horizontal[data-v-9cfc8a2c] {\n  flex-direction: row;\n}\n.list-group-horizontal > .list-group-item.active[data-v-9cfc8a2c] {\n  margin-top: 0;\n}\n.list-group-horizontal > .list-group-item + .list-group-item[data-v-9cfc8a2c] {\n  border-top-width: var(--bs-list-group-border-width);\n  border-left-width: 0;\n}\n.list-group-horizontal > .list-group-item + .list-group-item.active[data-v-9cfc8a2c] {\n  margin-left: calc(-1 * var(--bs-list-group-border-width));\n  border-left-width: var(--bs-list-group-border-width);\n}\n@media (min-width: 576px) {\n.list-group-horizontal-sm[data-v-9cfc8a2c] {\n    flex-direction: row;\n}\n.list-group-horizontal-sm > .list-group-item.active[data-v-9cfc8a2c] {\n    margin-top: 0;\n}\n.list-group-horizontal-sm > .list-group-item + .list-group-item[data-v-9cfc8a2c] {\n    border-top-width: var(--bs-list-group-border-width);\n    border-left-width: 0;\n}\n.list-group-horizontal-sm > .list-group-item + .list-group-item.active[data-v-9cfc8a2c] {\n    margin-left: calc(-1 * var(--bs-list-group-border-width));\n    border-left-width: var(--bs-list-group-border-width);\n}\n}\n@media (min-width: 768px) {\n.list-group-horizontal-md[data-v-9cfc8a2c] {\n    flex-direction: row;\n}\n.list-group-horizontal-md > .list-group-item.active[data-v-9cfc8a2c] {\n    margin-top: 0;\n}\n.list-group-horizontal-md > .list-group-item + .list-group-item[data-v-9cfc8a2c] {\n    border-top-width: var(--bs-list-group-border-width);\n    border-left-width: 0;\n}\n.list-group-horizontal-md > .list-group-item + .list-group-item.active[data-v-9cfc8a2c] {\n    margin-left: calc(-1 * var(--bs-list-group-border-width));\n    border-left-width: var(--bs-list-group-border-width);\n}\n}\n@media (min-width: 992px) {\n.list-group-horizontal-lg[data-v-9cfc8a2c] {\n    flex-direction: row;\n}\n.list-group-horizontal-lg > .list-group-item.active[data-v-9cfc8a2c] {\n    margin-top: 0;\n}\n.list-group-horizontal-lg > .list-group-item + .list-group-item[data-v-9cfc8a2c] {\n    border-top-width: var(--bs-list-group-border-width);\n    border-left-width: 0;\n}\n.list-group-horizontal-lg > .list-group-item + .list-group-item.active[data-v-9cfc8a2c] {\n    margin-left: calc(-1 * var(--bs-list-group-border-width));\n    border-left-width: var(--bs-list-group-border-width);\n}\n}\n@media (min-width: 1200px) {\n.list-group-horizontal-xl[data-v-9cfc8a2c] {\n    flex-direction: row;\n}\n.list-group-horizontal-xl > .list-group-item.active[data-v-9cfc8a2c] {\n    margin-top: 0;\n}\n.list-group-horizontal-xl > .list-group-item + .list-group-item[data-v-9cfc8a2c] {\n    border-top-width: var(--bs-list-group-border-width);\n    border-left-width: 0;\n}\n.list-group-horizontal-xl > .list-group-item + .list-group-item.active[data-v-9cfc8a2c] {\n    margin-left: calc(-1 * var(--bs-list-group-border-width));\n    border-left-width: var(--bs-list-group-border-width);\n}\n}\n@media (min-width: 1400px) {\n.list-group-horizontal-xxl[data-v-9cfc8a2c] {\n    flex-direction: row;\n}\n.list-group-horizontal-xxl > .list-group-item.active[data-v-9cfc8a2c] {\n    margin-top: 0;\n}\n.list-group-horizontal-xxl > .list-group-item + .list-group-item[data-v-9cfc8a2c] {\n    border-top-width: var(--bs-list-group-border-width);\n    border-left-width: 0;\n}\n.list-group-horizontal-xxl > .list-group-item + .list-group-item.active[data-v-9cfc8a2c] {\n    margin-left: calc(-1 * var(--bs-list-group-border-width));\n    border-left-width: var(--bs-list-group-border-width);\n}\n}\n.list-group-flush > .list-group-item[data-v-9cfc8a2c] {\n  border-width: 0 0 var(--bs-list-group-border-width);\n}\n.list-group-flush > .list-group-item[data-v-9cfc8a2c]:last-child {\n  border-bottom-width: 0;\n}\n.list-group-item-primary[data-v-9cfc8a2c] {\n  color: #351d5a;\n  background-color: #ded6ea;\n}\n.list-group-item-primary.list-group-item-action[data-v-9cfc8a2c]:hover, .list-group-item-primary.list-group-item-action[data-v-9cfc8a2c]:focus {\n  color: #351d5a;\n  background-color: #c8c1d3;\n}\n.list-group-item-primary.list-group-item-action.active[data-v-9cfc8a2c] {\n  color: #fff;\n  background-color: #351d5a;\n  border-color: #351d5a;\n}\n.list-group-item-secondary[data-v-9cfc8a2c] {\n  color: #65577f;\n  background-color: #eee9f6;\n}\n.list-group-item-secondary.list-group-item-action[data-v-9cfc8a2c]:hover, .list-group-item-secondary.list-group-item-action[data-v-9cfc8a2c]:focus {\n  color: #65577f;\n  background-color: #d6d2dd;\n}\n.list-group-item-secondary.list-group-item-action.active[data-v-9cfc8a2c] {\n  color: #fff;\n  background-color: #65577f;\n  border-color: #65577f;\n}\n.list-group-item-success[data-v-9cfc8a2c] {\n  color: #0b6f33;\n  background-color: #d0f1dd;\n}\n.list-group-item-success.list-group-item-action[data-v-9cfc8a2c]:hover, .list-group-item-success.list-group-item-action[data-v-9cfc8a2c]:focus {\n  color: #0b6f33;\n  background-color: #bbd9c7;\n}\n.list-group-item-success.list-group-item-action.active[data-v-9cfc8a2c] {\n  color: #fff;\n  background-color: #0b6f33;\n  border-color: #0b6f33;\n}\n.list-group-item-info[data-v-9cfc8a2c] {\n  color: #005e84;\n  background-color: #ccebf8;\n}\n.list-group-item-info.list-group-item-action[data-v-9cfc8a2c]:hover, .list-group-item-info.list-group-item-action[data-v-9cfc8a2c]:focus {\n  color: #005e84;\n  background-color: #b8d4df;\n}\n.list-group-item-info.list-group-item-action.active[data-v-9cfc8a2c] {\n  color: #fff;\n  background-color: #005e84;\n  border-color: #005e84;\n}\n.list-group-item-warning[data-v-9cfc8a2c] {\n  color: #8f6211;\n  background-color: #fcedd2;\n}\n.list-group-item-warning.list-group-item-action[data-v-9cfc8a2c]:hover, .list-group-item-warning.list-group-item-action[data-v-9cfc8a2c]:focus {\n  color: #8f6211;\n  background-color: #e3d5bd;\n}\n.list-group-item-warning.list-group-item-action.active[data-v-9cfc8a2c] {\n  color: #fff;\n  background-color: #8f6211;\n  border-color: #8f6211;\n}\n.list-group-item-danger[data-v-9cfc8a2c] {\n  color: #972222;\n  background-color: #fed7d7;\n}\n.list-group-item-danger.list-group-item-action[data-v-9cfc8a2c]:hover, .list-group-item-danger.list-group-item-action[data-v-9cfc8a2c]:focus {\n  color: #972222;\n  background-color: #e5c2c2;\n}\n.list-group-item-danger.list-group-item-action.active[data-v-9cfc8a2c] {\n  color: #fff;\n  background-color: #972222;\n  border-color: #972222;\n}\n.list-group-item-light[data-v-9cfc8a2c] {\n  color: #959597;\n  background-color: #fefefe;\n}\n.list-group-item-light.list-group-item-action[data-v-9cfc8a2c]:hover, .list-group-item-light.list-group-item-action[data-v-9cfc8a2c]:focus {\n  color: #959597;\n  background-color: #e5e5e5;\n}\n.list-group-item-light.list-group-item-action.active[data-v-9cfc8a2c] {\n  color: #fff;\n  background-color: #959597;\n  border-color: #959597;\n}\n.list-group-item-dark[data-v-9cfc8a2c] {\n  color: #0e0c13;\n  background-color: #d1d0d2;\n}\n.list-group-item-dark.list-group-item-action[data-v-9cfc8a2c]:hover, .list-group-item-dark.list-group-item-action[data-v-9cfc8a2c]:focus {\n  color: #0e0c13;\n  background-color: #bcbbbd;\n}\n.list-group-item-dark.list-group-item-action.active[data-v-9cfc8a2c] {\n  color: #fff;\n  background-color: #0e0c13;\n  border-color: #0e0c13;\n}\n.btn-close[data-v-9cfc8a2c] {\n  box-sizing: content-box;\n  width: 1em;\n  height: 1em;\n  padding: 0.25em 0.25em;\n  color: #000;\n  background: transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat;\n  border: 0;\n  opacity: 0.5;\n}\n.btn-close[data-v-9cfc8a2c]:hover {\n  color: #000;\n  text-decoration: none;\n  opacity: 0.75;\n}\n.btn-close[data-v-9cfc8a2c]:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(89, 49, 150, 0.25);\n  opacity: 1;\n}\n.btn-close[data-v-9cfc8a2c]:disabled, .btn-close.disabled[data-v-9cfc8a2c] {\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  opacity: 0.25;\n}\n.btn-close-white[data-v-9cfc8a2c] {\n  filter: invert(1) grayscale(100%) brightness(200%);\n}\n.toast[data-v-9cfc8a2c] {\n  --bs-toast-zindex: 1090;\n  --bs-toast-padding-x: 0.75rem;\n  --bs-toast-padding-y: 0.5rem;\n  --bs-toast-spacing: 1.5rem;\n  --bs-toast-max-width: 350px;\n  --bs-toast-font-size: 0.875rem;\n  --bs-toast-color: ;\n  --bs-toast-bg: rgba(255, 255, 255, 0.85);\n  --bs-toast-border-width: 1px;\n  --bs-toast-border-color: var(--bs-border-color-translucent);\n  --bs-toast-border-radius: 0.375rem;\n  --bs-toast-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  --bs-toast-header-color: #868e96;\n  --bs-toast-header-bg: rgba(255, 255, 255, 0.85);\n  --bs-toast-header-border-color: rgba(0, 0, 0, 0.05);\n  width: var(--bs-toast-max-width);\n  max-width: 100%;\n  font-size: var(--bs-toast-font-size);\n  color: var(--bs-toast-color);\n  pointer-events: auto;\n  background-color: var(--bs-toast-bg);\n  background-clip: padding-box;\n  border: var(--bs-toast-border-width) solid var(--bs-toast-border-color);\n  box-shadow: var(--bs-toast-box-shadow);\n}\n.toast.showing[data-v-9cfc8a2c] {\n  opacity: 0;\n}\n.toast[data-v-9cfc8a2c]:not(.show) {\n  display: none;\n}\n.toast-container[data-v-9cfc8a2c] {\n  --bs-toast-zindex: 1090;\n  position: absolute;\n  z-index: var(--bs-toast-zindex);\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 100%;\n  pointer-events: none;\n}\n.toast-container[data-v-9cfc8a2c] > :not(:last-child) {\n  margin-bottom: var(--bs-toast-spacing);\n}\n.toast-header[data-v-9cfc8a2c] {\n  display: flex;\n  align-items: center;\n  padding: var(--bs-toast-padding-y) var(--bs-toast-padding-x);\n  color: var(--bs-toast-header-color);\n  background-color: var(--bs-toast-header-bg);\n  background-clip: padding-box;\n  border-bottom: var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);\n}\n.toast-header .btn-close[data-v-9cfc8a2c] {\n  margin-right: calc(-0.5 * var(--bs-toast-padding-x));\n  margin-left: var(--bs-toast-padding-x);\n}\n.toast-body[data-v-9cfc8a2c] {\n  padding: var(--bs-toast-padding-x);\n  word-wrap: break-word;\n}\n.modal[data-v-9cfc8a2c] {\n  --bs-modal-zindex: 1055;\n  --bs-modal-width: 500px;\n  --bs-modal-padding: 1rem;\n  --bs-modal-margin: 0.5rem;\n  --bs-modal-color: ;\n  --bs-modal-bg: #fff;\n  --bs-modal-border-color: var(--bs-border-color-translucent);\n  --bs-modal-border-width: 1px;\n  --bs-modal-border-radius: 0.5rem;\n  --bs-modal-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n  --bs-modal-inner-border-radius: calc(0.5rem - 1px);\n  --bs-modal-header-padding-x: 1rem;\n  --bs-modal-header-padding-y: 1rem;\n  --bs-modal-header-padding: 1rem 1rem;\n  --bs-modal-header-border-color: var(--bs-border-color);\n  --bs-modal-header-border-width: 1px;\n  --bs-modal-title-line-height: 1.5;\n  --bs-modal-footer-gap: 0.5rem;\n  --bs-modal-footer-bg: ;\n  --bs-modal-footer-border-color: var(--bs-border-color);\n  --bs-modal-footer-border-width: 1px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: var(--bs-modal-zindex);\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  outline: 0;\n}\n.modal-dialog[data-v-9cfc8a2c] {\n  position: relative;\n  width: auto;\n  margin: var(--bs-modal-margin);\n  pointer-events: none;\n}\n.modal.fade .modal-dialog[data-v-9cfc8a2c] {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -50px);\n}\n@media (prefers-reduced-motion: reduce) {\n.modal.fade .modal-dialog[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n.modal.show .modal-dialog[data-v-9cfc8a2c] {\n  transform: none;\n}\n.modal.modal-static .modal-dialog[data-v-9cfc8a2c] {\n  transform: scale(1.02);\n}\n.modal-dialog-scrollable[data-v-9cfc8a2c] {\n  height: calc(100% - var(--bs-modal-margin) * 2);\n}\n.modal-dialog-scrollable .modal-content[data-v-9cfc8a2c] {\n  max-height: 100%;\n  overflow: hidden;\n}\n.modal-dialog-scrollable .modal-body[data-v-9cfc8a2c] {\n  overflow-y: auto;\n}\n.modal-dialog-centered[data-v-9cfc8a2c] {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - var(--bs-modal-margin) * 2);\n}\n.modal-content[data-v-9cfc8a2c] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  color: var(--bs-modal-color);\n  pointer-events: auto;\n  background-color: var(--bs-modal-bg);\n  background-clip: padding-box;\n  border: var(--bs-modal-border-width) solid var(--bs-modal-border-color);\n  outline: 0;\n}\n.modal-backdrop[data-v-9cfc8a2c] {\n  --bs-backdrop-zindex: 1050;\n  --bs-backdrop-bg: #000;\n  --bs-backdrop-opacity: 0.5;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: var(--bs-backdrop-zindex);\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--bs-backdrop-bg);\n}\n.modal-backdrop.fade[data-v-9cfc8a2c] {\n  opacity: 0;\n}\n.modal-backdrop.show[data-v-9cfc8a2c] {\n  opacity: var(--bs-backdrop-opacity);\n}\n.modal-header[data-v-9cfc8a2c] {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--bs-modal-header-padding);\n  border-bottom: var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);\n}\n.modal-header .btn-close[data-v-9cfc8a2c] {\n  padding: calc(var(--bs-modal-header-padding-y) * 0.5) calc(var(--bs-modal-header-padding-x) * 0.5);\n  margin: calc(-0.5 * var(--bs-modal-header-padding-y)) calc(-0.5 * var(--bs-modal-header-padding-x)) calc(-0.5 * var(--bs-modal-header-padding-y)) auto;\n}\n.modal-title[data-v-9cfc8a2c] {\n  margin-bottom: 0;\n  line-height: var(--bs-modal-title-line-height);\n}\n.modal-body[data-v-9cfc8a2c] {\n  position: relative;\n  flex: 1 1 auto;\n  padding: var(--bs-modal-padding);\n}\n.modal-footer[data-v-9cfc8a2c] {\n  display: flex;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * 0.5);\n  background-color: var(--bs-modal-footer-bg);\n  border-top: var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);\n}\n.modal-footer > *[data-v-9cfc8a2c] {\n  margin: calc(var(--bs-modal-footer-gap) * 0.5);\n}\n@media (min-width: 576px) {\n.modal[data-v-9cfc8a2c] {\n    --bs-modal-margin: 1.75rem;\n    --bs-modal-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n.modal-dialog[data-v-9cfc8a2c] {\n    max-width: var(--bs-modal-width);\n    margin-right: auto;\n    margin-left: auto;\n}\n.modal-sm[data-v-9cfc8a2c] {\n    --bs-modal-width: 300px;\n}\n}\n@media (min-width: 992px) {\n.modal-lg[data-v-9cfc8a2c],\n  .modal-xl[data-v-9cfc8a2c] {\n    --bs-modal-width: 800px;\n}\n}\n@media (min-width: 1200px) {\n.modal-xl[data-v-9cfc8a2c] {\n    --bs-modal-width: 1140px;\n}\n}\n.modal-fullscreen[data-v-9cfc8a2c] {\n  width: 100vw;\n  max-width: none;\n  height: 100%;\n  margin: 0;\n}\n.modal-fullscreen .modal-content[data-v-9cfc8a2c] {\n  height: 100%;\n  border: 0;\n}\n.modal-fullscreen .modal-body[data-v-9cfc8a2c] {\n  overflow-y: auto;\n}\n@media (max-width: 575.98px) {\n.modal-fullscreen-sm-down[data-v-9cfc8a2c] {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n}\n.modal-fullscreen-sm-down .modal-content[data-v-9cfc8a2c] {\n    height: 100%;\n    border: 0;\n}\n.modal-fullscreen-sm-down .modal-body[data-v-9cfc8a2c] {\n    overflow-y: auto;\n}\n}\n@media (max-width: 767.98px) {\n.modal-fullscreen-md-down[data-v-9cfc8a2c] {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n}\n.modal-fullscreen-md-down .modal-content[data-v-9cfc8a2c] {\n    height: 100%;\n    border: 0;\n}\n.modal-fullscreen-md-down .modal-body[data-v-9cfc8a2c] {\n    overflow-y: auto;\n}\n}\n@media (max-width: 991.98px) {\n.modal-fullscreen-lg-down[data-v-9cfc8a2c] {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n}\n.modal-fullscreen-lg-down .modal-content[data-v-9cfc8a2c] {\n    height: 100%;\n    border: 0;\n}\n.modal-fullscreen-lg-down .modal-body[data-v-9cfc8a2c] {\n    overflow-y: auto;\n}\n}\n@media (max-width: 1199.98px) {\n.modal-fullscreen-xl-down[data-v-9cfc8a2c] {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n}\n.modal-fullscreen-xl-down .modal-content[data-v-9cfc8a2c] {\n    height: 100%;\n    border: 0;\n}\n.modal-fullscreen-xl-down .modal-body[data-v-9cfc8a2c] {\n    overflow-y: auto;\n}\n}\n@media (max-width: 1399.98px) {\n.modal-fullscreen-xxl-down[data-v-9cfc8a2c] {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n}\n.modal-fullscreen-xxl-down .modal-content[data-v-9cfc8a2c] {\n    height: 100%;\n    border: 0;\n}\n.modal-fullscreen-xxl-down .modal-body[data-v-9cfc8a2c] {\n    overflow-y: auto;\n}\n}\n.tooltip[data-v-9cfc8a2c] {\n  --bs-tooltip-zindex: 1080;\n  --bs-tooltip-max-width: 200px;\n  --bs-tooltip-padding-x: 0.5rem;\n  --bs-tooltip-padding-y: 0.25rem;\n  --bs-tooltip-margin: ;\n  --bs-tooltip-font-size: 0.875rem;\n  --bs-tooltip-color: #fff;\n  --bs-tooltip-bg: #000;\n  --bs-tooltip-border-radius: 0.375rem;\n  --bs-tooltip-opacity: 0.9;\n  --bs-tooltip-arrow-width: 0.8rem;\n  --bs-tooltip-arrow-height: 0.4rem;\n  z-index: var(--bs-tooltip-zindex);\n  display: block;\n  padding: var(--bs-tooltip-arrow-height);\n  margin: var(--bs-tooltip-margin);\n  font-family: var(--bs-font-sans-serif);\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  white-space: normal;\n  word-spacing: normal;\n  line-break: auto;\n  font-size: var(--bs-tooltip-font-size);\n  word-wrap: break-word;\n  opacity: 0;\n}\n.tooltip.show[data-v-9cfc8a2c] {\n  opacity: var(--bs-tooltip-opacity);\n}\n.tooltip .tooltip-arrow[data-v-9cfc8a2c] {\n  display: block;\n  width: var(--bs-tooltip-arrow-width);\n  height: var(--bs-tooltip-arrow-height);\n}\n.tooltip .tooltip-arrow[data-v-9cfc8a2c]::before {\n  position: absolute;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n.bs-tooltip-top .tooltip-arrow[data-v-9cfc8a2c], .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow[data-v-9cfc8a2c] {\n  bottom: 0;\n}\n.bs-tooltip-top .tooltip-arrow[data-v-9cfc8a2c]::before, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow[data-v-9cfc8a2c]::before {\n  top: -1px;\n  border-width: var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0;\n  border-top-color: var(--bs-tooltip-bg);\n}\n\n/* rtl:begin:ignore */\n.bs-tooltip-end .tooltip-arrow[data-v-9cfc8a2c], .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow[data-v-9cfc8a2c] {\n  left: 0;\n  width: var(--bs-tooltip-arrow-height);\n  height: var(--bs-tooltip-arrow-width);\n}\n.bs-tooltip-end .tooltip-arrow[data-v-9cfc8a2c]::before, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow[data-v-9cfc8a2c]::before {\n  right: -1px;\n  border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0;\n  border-right-color: var(--bs-tooltip-bg);\n}\n\n/* rtl:end:ignore */\n.bs-tooltip-bottom .tooltip-arrow[data-v-9cfc8a2c], .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow[data-v-9cfc8a2c] {\n  top: 0;\n}\n.bs-tooltip-bottom .tooltip-arrow[data-v-9cfc8a2c]::before, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow[data-v-9cfc8a2c]::before {\n  bottom: -1px;\n  border-width: 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height);\n  border-bottom-color: var(--bs-tooltip-bg);\n}\n\n/* rtl:begin:ignore */\n.bs-tooltip-start .tooltip-arrow[data-v-9cfc8a2c], .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow[data-v-9cfc8a2c] {\n  right: 0;\n  width: var(--bs-tooltip-arrow-height);\n  height: var(--bs-tooltip-arrow-width);\n}\n.bs-tooltip-start .tooltip-arrow[data-v-9cfc8a2c]::before, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow[data-v-9cfc8a2c]::before {\n  left: -1px;\n  border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height);\n  border-left-color: var(--bs-tooltip-bg);\n}\n\n/* rtl:end:ignore */\n.tooltip-inner[data-v-9cfc8a2c] {\n  max-width: var(--bs-tooltip-max-width);\n  padding: var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);\n  color: var(--bs-tooltip-color);\n  text-align: center;\n  background-color: var(--bs-tooltip-bg);\n}\n.popover[data-v-9cfc8a2c] {\n  --bs-popover-zindex: 1070;\n  --bs-popover-max-width: 276px;\n  --bs-popover-font-size: 0.875rem;\n  --bs-popover-bg: #fff;\n  --bs-popover-border-width: 1px;\n  --bs-popover-border-color: var(--bs-border-color-translucent);\n  --bs-popover-border-radius: 0.5rem;\n  --bs-popover-inner-border-radius: calc(0.5rem - 1px);\n  --bs-popover-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  --bs-popover-header-padding-x: 1rem;\n  --bs-popover-header-padding-y: 0.5rem;\n  --bs-popover-header-font-size: 1rem;\n  --bs-popover-header-color: ;\n  --bs-popover-header-bg: #f0f0f0;\n  --bs-popover-body-padding-x: 1rem;\n  --bs-popover-body-padding-y: 1rem;\n  --bs-popover-body-color: #444;\n  --bs-popover-arrow-width: 1rem;\n  --bs-popover-arrow-height: 0.5rem;\n  --bs-popover-arrow-border: var(--bs-popover-border-color);\n  z-index: var(--bs-popover-zindex);\n  display: block;\n  max-width: var(--bs-popover-max-width);\n  font-family: var(--bs-font-sans-serif);\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  white-space: normal;\n  word-spacing: normal;\n  line-break: auto;\n  font-size: var(--bs-popover-font-size);\n  word-wrap: break-word;\n  background-color: var(--bs-popover-bg);\n  background-clip: padding-box;\n  border: var(--bs-popover-border-width) solid var(--bs-popover-border-color);\n}\n.popover .popover-arrow[data-v-9cfc8a2c] {\n  display: block;\n  width: var(--bs-popover-arrow-width);\n  height: var(--bs-popover-arrow-height);\n}\n.popover .popover-arrow[data-v-9cfc8a2c]::before, .popover .popover-arrow[data-v-9cfc8a2c]::after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n  border-width: 0;\n}\n.bs-popover-top > .popover-arrow[data-v-9cfc8a2c], .bs-popover-auto[data-popper-placement^=top] > .popover-arrow[data-v-9cfc8a2c] {\n  bottom: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));\n}\n.bs-popover-top > .popover-arrow[data-v-9cfc8a2c]::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow[data-v-9cfc8a2c]::before, .bs-popover-top > .popover-arrow[data-v-9cfc8a2c]::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow[data-v-9cfc8a2c]::after {\n  border-width: var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0;\n}\n.bs-popover-top > .popover-arrow[data-v-9cfc8a2c]::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow[data-v-9cfc8a2c]::before {\n  bottom: 0;\n  border-top-color: var(--bs-popover-arrow-border);\n}\n.bs-popover-top > .popover-arrow[data-v-9cfc8a2c]::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow[data-v-9cfc8a2c]::after {\n  bottom: var(--bs-popover-border-width);\n  border-top-color: var(--bs-popover-bg);\n}\n\n/* rtl:begin:ignore */\n.bs-popover-end > .popover-arrow[data-v-9cfc8a2c], .bs-popover-auto[data-popper-placement^=right] > .popover-arrow[data-v-9cfc8a2c] {\n  left: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));\n  width: var(--bs-popover-arrow-height);\n  height: var(--bs-popover-arrow-width);\n}\n.bs-popover-end > .popover-arrow[data-v-9cfc8a2c]::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow[data-v-9cfc8a2c]::before, .bs-popover-end > .popover-arrow[data-v-9cfc8a2c]::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow[data-v-9cfc8a2c]::after {\n  border-width: calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0;\n}\n.bs-popover-end > .popover-arrow[data-v-9cfc8a2c]::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow[data-v-9cfc8a2c]::before {\n  left: 0;\n  border-right-color: var(--bs-popover-arrow-border);\n}\n.bs-popover-end > .popover-arrow[data-v-9cfc8a2c]::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow[data-v-9cfc8a2c]::after {\n  left: var(--bs-popover-border-width);\n  border-right-color: var(--bs-popover-bg);\n}\n\n/* rtl:end:ignore */\n.bs-popover-bottom > .popover-arrow[data-v-9cfc8a2c], .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow[data-v-9cfc8a2c] {\n  top: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));\n}\n.bs-popover-bottom > .popover-arrow[data-v-9cfc8a2c]::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow[data-v-9cfc8a2c]::before, .bs-popover-bottom > .popover-arrow[data-v-9cfc8a2c]::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow[data-v-9cfc8a2c]::after {\n  border-width: 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height);\n}\n.bs-popover-bottom > .popover-arrow[data-v-9cfc8a2c]::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow[data-v-9cfc8a2c]::before {\n  top: 0;\n  border-bottom-color: var(--bs-popover-arrow-border);\n}\n.bs-popover-bottom > .popover-arrow[data-v-9cfc8a2c]::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow[data-v-9cfc8a2c]::after {\n  top: var(--bs-popover-border-width);\n  border-bottom-color: var(--bs-popover-bg);\n}\n.bs-popover-bottom .popover-header[data-v-9cfc8a2c]::before, .bs-popover-auto[data-popper-placement^=bottom] .popover-header[data-v-9cfc8a2c]::before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  display: block;\n  width: var(--bs-popover-arrow-width);\n  margin-left: calc(-0.5 * var(--bs-popover-arrow-width));\n  content: \"\";\n  border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-header-bg);\n}\n\n/* rtl:begin:ignore */\n.bs-popover-start > .popover-arrow[data-v-9cfc8a2c], .bs-popover-auto[data-popper-placement^=left] > .popover-arrow[data-v-9cfc8a2c] {\n  right: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));\n  width: var(--bs-popover-arrow-height);\n  height: var(--bs-popover-arrow-width);\n}\n.bs-popover-start > .popover-arrow[data-v-9cfc8a2c]::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow[data-v-9cfc8a2c]::before, .bs-popover-start > .popover-arrow[data-v-9cfc8a2c]::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow[data-v-9cfc8a2c]::after {\n  border-width: calc(var(--bs-popover-arrow-width) * 0.5) 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height);\n}\n.bs-popover-start > .popover-arrow[data-v-9cfc8a2c]::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow[data-v-9cfc8a2c]::before {\n  right: 0;\n  border-left-color: var(--bs-popover-arrow-border);\n}\n.bs-popover-start > .popover-arrow[data-v-9cfc8a2c]::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow[data-v-9cfc8a2c]::after {\n  right: var(--bs-popover-border-width);\n  border-left-color: var(--bs-popover-bg);\n}\n\n/* rtl:end:ignore */\n.popover-header[data-v-9cfc8a2c] {\n  padding: var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x);\n  margin-bottom: 0;\n  font-size: var(--bs-popover-header-font-size);\n  color: var(--bs-popover-header-color);\n  background-color: var(--bs-popover-header-bg);\n  border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-border-color);\n}\n.popover-header[data-v-9cfc8a2c]:empty {\n  display: none;\n}\n.popover-body[data-v-9cfc8a2c] {\n  padding: var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x);\n  color: var(--bs-popover-body-color);\n}\n.carousel[data-v-9cfc8a2c] {\n  position: relative;\n}\n.carousel.pointer-event[data-v-9cfc8a2c] {\n  touch-action: pan-y;\n}\n.carousel-inner[data-v-9cfc8a2c] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner[data-v-9cfc8a2c]::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n.carousel-item[data-v-9cfc8a2c] {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: transform 0.6s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.carousel-item[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n.carousel-item.active[data-v-9cfc8a2c],\n.carousel-item-next[data-v-9cfc8a2c],\n.carousel-item-prev[data-v-9cfc8a2c] {\n  display: block;\n}\n.carousel-item-next[data-v-9cfc8a2c]:not(.carousel-item-start),\n.active.carousel-item-end[data-v-9cfc8a2c] {\n  transform: translateX(100%);\n}\n.carousel-item-prev[data-v-9cfc8a2c]:not(.carousel-item-end),\n.active.carousel-item-start[data-v-9cfc8a2c] {\n  transform: translateX(-100%);\n}\n.carousel-fade .carousel-item[data-v-9cfc8a2c] {\n  opacity: 0;\n  transition-property: opacity;\n  transform: none;\n}\n.carousel-fade .carousel-item.active[data-v-9cfc8a2c],\n.carousel-fade .carousel-item-next.carousel-item-start[data-v-9cfc8a2c],\n.carousel-fade .carousel-item-prev.carousel-item-end[data-v-9cfc8a2c] {\n  z-index: 1;\n  opacity: 1;\n}\n.carousel-fade .active.carousel-item-start[data-v-9cfc8a2c],\n.carousel-fade .active.carousel-item-end[data-v-9cfc8a2c] {\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 0s 0.6s;\n}\n@media (prefers-reduced-motion: reduce) {\n.carousel-fade .active.carousel-item-start[data-v-9cfc8a2c],\n  .carousel-fade .active.carousel-item-end[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n.carousel-control-prev[data-v-9cfc8a2c],\n.carousel-control-next[data-v-9cfc8a2c] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  padding: 0;\n  color: #fff;\n  text-align: center;\n  background: none;\n  border: 0;\n  opacity: 0.5;\n  transition: opacity 0.15s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n.carousel-control-prev[data-v-9cfc8a2c],\n  .carousel-control-next[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n.carousel-control-prev[data-v-9cfc8a2c]:hover, .carousel-control-prev[data-v-9cfc8a2c]:focus,\n.carousel-control-next[data-v-9cfc8a2c]:hover,\n.carousel-control-next[data-v-9cfc8a2c]:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: 0.9;\n}\n.carousel-control-prev[data-v-9cfc8a2c] {\n  left: 0;\n}\n.carousel-control-next[data-v-9cfc8a2c] {\n  right: 0;\n}\n.carousel-control-prev-icon[data-v-9cfc8a2c],\n.carousel-control-next-icon[data-v-9cfc8a2c] {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 100% 100%;\n}\n\n/* rtl:options: {\n  \"autoRename\": true,\n  \"stringMap\":[ {\n    \"name\"    : \"prev-next\",\n    \"search\"  : \"prev\",\n    \"replace\" : \"next\"\n  } ]\n} */\n.carousel-control-prev-icon[data-v-9cfc8a2c] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\");\n}\n.carousel-control-next-icon[data-v-9cfc8a2c] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n}\n.carousel-indicators[data-v-9cfc8a2c] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  margin-right: 15%;\n  margin-bottom: 1rem;\n  margin-left: 15%;\n  list-style: none;\n}\n.carousel-indicators [data-bs-target][data-v-9cfc8a2c] {\n  box-sizing: content-box;\n  flex: 0 1 auto;\n  width: 30px;\n  height: 3px;\n  padding: 0;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 0;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  opacity: 0.5;\n  transition: opacity 0.6s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n.carousel-indicators [data-bs-target][data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n.carousel-indicators .active[data-v-9cfc8a2c] {\n  opacity: 1;\n}\n.carousel-caption[data-v-9cfc8a2c] {\n  position: absolute;\n  right: 15%;\n  bottom: 1.25rem;\n  left: 15%;\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  color: #fff;\n  text-align: center;\n}\n.carousel-dark .carousel-control-prev-icon[data-v-9cfc8a2c],\n.carousel-dark .carousel-control-next-icon[data-v-9cfc8a2c] {\n  filter: invert(1) grayscale(100);\n}\n.carousel-dark .carousel-indicators [data-bs-target][data-v-9cfc8a2c] {\n  background-color: #000;\n}\n.carousel-dark .carousel-caption[data-v-9cfc8a2c] {\n  color: #000;\n}\n.spinner-grow[data-v-9cfc8a2c],\n.spinner-border[data-v-9cfc8a2c] {\n  display: inline-block;\n  width: var(--bs-spinner-width);\n  height: var(--bs-spinner-height);\n  vertical-align: var(--bs-spinner-vertical-align);\n  border-radius: 50%;\n  animation: var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name);\n}\n@keyframes spinner-border-9cfc8a2c {\nto {\n    transform: rotate(360deg) /* rtl:ignore */;\n}\n}\n.spinner-border[data-v-9cfc8a2c] {\n  --bs-spinner-width: 2rem;\n  --bs-spinner-height: 2rem;\n  --bs-spinner-vertical-align: -0.125em;\n  --bs-spinner-border-width: 0.25em;\n  --bs-spinner-animation-speed: 0.75s;\n  --bs-spinner-animation-name: spinner-border;\n  border: var(--bs-spinner-border-width) solid currentcolor;\n  border-right-color: transparent;\n}\n.spinner-border-sm[data-v-9cfc8a2c] {\n  --bs-spinner-width: 1rem;\n  --bs-spinner-height: 1rem;\n  --bs-spinner-border-width: 0.2em;\n}\n@keyframes spinner-grow-9cfc8a2c {\n0% {\n    transform: scale(0);\n}\n50% {\n    opacity: 1;\n    transform: none;\n}\n}\n.spinner-grow[data-v-9cfc8a2c] {\n  --bs-spinner-width: 2rem;\n  --bs-spinner-height: 2rem;\n  --bs-spinner-vertical-align: -0.125em;\n  --bs-spinner-animation-speed: 0.75s;\n  --bs-spinner-animation-name: spinner-grow;\n  background-color: currentcolor;\n  opacity: 0;\n}\n.spinner-grow-sm[data-v-9cfc8a2c] {\n  --bs-spinner-width: 1rem;\n  --bs-spinner-height: 1rem;\n}\n@media (prefers-reduced-motion: reduce) {\n.spinner-border[data-v-9cfc8a2c],\n  .spinner-grow[data-v-9cfc8a2c] {\n    --bs-spinner-animation-speed: 1.5s;\n}\n}\n.offcanvas[data-v-9cfc8a2c], .offcanvas-xxl[data-v-9cfc8a2c], .offcanvas-xl[data-v-9cfc8a2c], .offcanvas-lg[data-v-9cfc8a2c], .offcanvas-md[data-v-9cfc8a2c], .offcanvas-sm[data-v-9cfc8a2c] {\n  --bs-offcanvas-zindex: 1045;\n  --bs-offcanvas-width: 400px;\n  --bs-offcanvas-height: 30vh;\n  --bs-offcanvas-padding-x: 1rem;\n  --bs-offcanvas-padding-y: 1rem;\n  --bs-offcanvas-color: ;\n  --bs-offcanvas-bg: #fff;\n  --bs-offcanvas-border-width: 1px;\n  --bs-offcanvas-border-color: var(--bs-border-color-translucent);\n  --bs-offcanvas-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n@media (max-width: 575.98px) {\n.offcanvas-sm[data-v-9cfc8a2c] {\n    position: fixed;\n    bottom: 0;\n    z-index: var(--bs-offcanvas-zindex);\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n    color: var(--bs-offcanvas-color);\n    visibility: hidden;\n    background-color: var(--bs-offcanvas-bg);\n    background-clip: padding-box;\n    outline: 0;\n    transition: transform 0.3s ease-in-out;\n}\n}\n@media (max-width: 575.98px) and (prefers-reduced-motion: reduce) {\n.offcanvas-sm[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n@media (max-width: 575.98px) {\n.offcanvas-sm.offcanvas-start[data-v-9cfc8a2c] {\n    top: 0;\n    left: 0;\n    width: var(--bs-offcanvas-width);\n    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(-100%);\n}\n}\n@media (max-width: 575.98px) {\n.offcanvas-sm.offcanvas-end[data-v-9cfc8a2c] {\n    top: 0;\n    right: 0;\n    width: var(--bs-offcanvas-width);\n    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(100%);\n}\n}\n@media (max-width: 575.98px) {\n.offcanvas-sm.offcanvas-top[data-v-9cfc8a2c] {\n    top: 0;\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(-100%);\n}\n}\n@media (max-width: 575.98px) {\n.offcanvas-sm.offcanvas-bottom[data-v-9cfc8a2c] {\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(100%);\n}\n}\n@media (max-width: 575.98px) {\n.offcanvas-sm.showing[data-v-9cfc8a2c], .offcanvas-sm.show[data-v-9cfc8a2c]:not(.hiding) {\n    transform: none;\n}\n}\n@media (max-width: 575.98px) {\n.offcanvas-sm.showing[data-v-9cfc8a2c], .offcanvas-sm.hiding[data-v-9cfc8a2c], .offcanvas-sm.show[data-v-9cfc8a2c] {\n    visibility: visible;\n}\n}\n@media (min-width: 576px) {\n.offcanvas-sm[data-v-9cfc8a2c] {\n    --bs-offcanvas-height: auto;\n    --bs-offcanvas-border-width: 0;\n    background-color: transparent !important;\n}\n.offcanvas-sm .offcanvas-header[data-v-9cfc8a2c] {\n    display: none;\n}\n.offcanvas-sm .offcanvas-body[data-v-9cfc8a2c] {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n    background-color: transparent !important;\n}\n}\n@media (max-width: 767.98px) {\n.offcanvas-md[data-v-9cfc8a2c] {\n    position: fixed;\n    bottom: 0;\n    z-index: var(--bs-offcanvas-zindex);\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n    color: var(--bs-offcanvas-color);\n    visibility: hidden;\n    background-color: var(--bs-offcanvas-bg);\n    background-clip: padding-box;\n    outline: 0;\n    transition: transform 0.3s ease-in-out;\n}\n}\n@media (max-width: 767.98px) and (prefers-reduced-motion: reduce) {\n.offcanvas-md[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n@media (max-width: 767.98px) {\n.offcanvas-md.offcanvas-start[data-v-9cfc8a2c] {\n    top: 0;\n    left: 0;\n    width: var(--bs-offcanvas-width);\n    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(-100%);\n}\n}\n@media (max-width: 767.98px) {\n.offcanvas-md.offcanvas-end[data-v-9cfc8a2c] {\n    top: 0;\n    right: 0;\n    width: var(--bs-offcanvas-width);\n    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(100%);\n}\n}\n@media (max-width: 767.98px) {\n.offcanvas-md.offcanvas-top[data-v-9cfc8a2c] {\n    top: 0;\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(-100%);\n}\n}\n@media (max-width: 767.98px) {\n.offcanvas-md.offcanvas-bottom[data-v-9cfc8a2c] {\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(100%);\n}\n}\n@media (max-width: 767.98px) {\n.offcanvas-md.showing[data-v-9cfc8a2c], .offcanvas-md.show[data-v-9cfc8a2c]:not(.hiding) {\n    transform: none;\n}\n}\n@media (max-width: 767.98px) {\n.offcanvas-md.showing[data-v-9cfc8a2c], .offcanvas-md.hiding[data-v-9cfc8a2c], .offcanvas-md.show[data-v-9cfc8a2c] {\n    visibility: visible;\n}\n}\n@media (min-width: 768px) {\n.offcanvas-md[data-v-9cfc8a2c] {\n    --bs-offcanvas-height: auto;\n    --bs-offcanvas-border-width: 0;\n    background-color: transparent !important;\n}\n.offcanvas-md .offcanvas-header[data-v-9cfc8a2c] {\n    display: none;\n}\n.offcanvas-md .offcanvas-body[data-v-9cfc8a2c] {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n    background-color: transparent !important;\n}\n}\n@media (max-width: 991.98px) {\n.offcanvas-lg[data-v-9cfc8a2c] {\n    position: fixed;\n    bottom: 0;\n    z-index: var(--bs-offcanvas-zindex);\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n    color: var(--bs-offcanvas-color);\n    visibility: hidden;\n    background-color: var(--bs-offcanvas-bg);\n    background-clip: padding-box;\n    outline: 0;\n    transition: transform 0.3s ease-in-out;\n}\n}\n@media (max-width: 991.98px) and (prefers-reduced-motion: reduce) {\n.offcanvas-lg[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n@media (max-width: 991.98px) {\n.offcanvas-lg.offcanvas-start[data-v-9cfc8a2c] {\n    top: 0;\n    left: 0;\n    width: var(--bs-offcanvas-width);\n    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(-100%);\n}\n}\n@media (max-width: 991.98px) {\n.offcanvas-lg.offcanvas-end[data-v-9cfc8a2c] {\n    top: 0;\n    right: 0;\n    width: var(--bs-offcanvas-width);\n    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(100%);\n}\n}\n@media (max-width: 991.98px) {\n.offcanvas-lg.offcanvas-top[data-v-9cfc8a2c] {\n    top: 0;\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(-100%);\n}\n}\n@media (max-width: 991.98px) {\n.offcanvas-lg.offcanvas-bottom[data-v-9cfc8a2c] {\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(100%);\n}\n}\n@media (max-width: 991.98px) {\n.offcanvas-lg.showing[data-v-9cfc8a2c], .offcanvas-lg.show[data-v-9cfc8a2c]:not(.hiding) {\n    transform: none;\n}\n}\n@media (max-width: 991.98px) {\n.offcanvas-lg.showing[data-v-9cfc8a2c], .offcanvas-lg.hiding[data-v-9cfc8a2c], .offcanvas-lg.show[data-v-9cfc8a2c] {\n    visibility: visible;\n}\n}\n@media (min-width: 992px) {\n.offcanvas-lg[data-v-9cfc8a2c] {\n    --bs-offcanvas-height: auto;\n    --bs-offcanvas-border-width: 0;\n    background-color: transparent !important;\n}\n.offcanvas-lg .offcanvas-header[data-v-9cfc8a2c] {\n    display: none;\n}\n.offcanvas-lg .offcanvas-body[data-v-9cfc8a2c] {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n    background-color: transparent !important;\n}\n}\n@media (max-width: 1199.98px) {\n.offcanvas-xl[data-v-9cfc8a2c] {\n    position: fixed;\n    bottom: 0;\n    z-index: var(--bs-offcanvas-zindex);\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n    color: var(--bs-offcanvas-color);\n    visibility: hidden;\n    background-color: var(--bs-offcanvas-bg);\n    background-clip: padding-box;\n    outline: 0;\n    transition: transform 0.3s ease-in-out;\n}\n}\n@media (max-width: 1199.98px) and (prefers-reduced-motion: reduce) {\n.offcanvas-xl[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n@media (max-width: 1199.98px) {\n.offcanvas-xl.offcanvas-start[data-v-9cfc8a2c] {\n    top: 0;\n    left: 0;\n    width: var(--bs-offcanvas-width);\n    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(-100%);\n}\n}\n@media (max-width: 1199.98px) {\n.offcanvas-xl.offcanvas-end[data-v-9cfc8a2c] {\n    top: 0;\n    right: 0;\n    width: var(--bs-offcanvas-width);\n    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(100%);\n}\n}\n@media (max-width: 1199.98px) {\n.offcanvas-xl.offcanvas-top[data-v-9cfc8a2c] {\n    top: 0;\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(-100%);\n}\n}\n@media (max-width: 1199.98px) {\n.offcanvas-xl.offcanvas-bottom[data-v-9cfc8a2c] {\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(100%);\n}\n}\n@media (max-width: 1199.98px) {\n.offcanvas-xl.showing[data-v-9cfc8a2c], .offcanvas-xl.show[data-v-9cfc8a2c]:not(.hiding) {\n    transform: none;\n}\n}\n@media (max-width: 1199.98px) {\n.offcanvas-xl.showing[data-v-9cfc8a2c], .offcanvas-xl.hiding[data-v-9cfc8a2c], .offcanvas-xl.show[data-v-9cfc8a2c] {\n    visibility: visible;\n}\n}\n@media (min-width: 1200px) {\n.offcanvas-xl[data-v-9cfc8a2c] {\n    --bs-offcanvas-height: auto;\n    --bs-offcanvas-border-width: 0;\n    background-color: transparent !important;\n}\n.offcanvas-xl .offcanvas-header[data-v-9cfc8a2c] {\n    display: none;\n}\n.offcanvas-xl .offcanvas-body[data-v-9cfc8a2c] {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n    background-color: transparent !important;\n}\n}\n@media (max-width: 1399.98px) {\n.offcanvas-xxl[data-v-9cfc8a2c] {\n    position: fixed;\n    bottom: 0;\n    z-index: var(--bs-offcanvas-zindex);\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n    color: var(--bs-offcanvas-color);\n    visibility: hidden;\n    background-color: var(--bs-offcanvas-bg);\n    background-clip: padding-box;\n    outline: 0;\n    transition: transform 0.3s ease-in-out;\n}\n}\n@media (max-width: 1399.98px) and (prefers-reduced-motion: reduce) {\n.offcanvas-xxl[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n@media (max-width: 1399.98px) {\n.offcanvas-xxl.offcanvas-start[data-v-9cfc8a2c] {\n    top: 0;\n    left: 0;\n    width: var(--bs-offcanvas-width);\n    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(-100%);\n}\n}\n@media (max-width: 1399.98px) {\n.offcanvas-xxl.offcanvas-end[data-v-9cfc8a2c] {\n    top: 0;\n    right: 0;\n    width: var(--bs-offcanvas-width);\n    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(100%);\n}\n}\n@media (max-width: 1399.98px) {\n.offcanvas-xxl.offcanvas-top[data-v-9cfc8a2c] {\n    top: 0;\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(-100%);\n}\n}\n@media (max-width: 1399.98px) {\n.offcanvas-xxl.offcanvas-bottom[data-v-9cfc8a2c] {\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(100%);\n}\n}\n@media (max-width: 1399.98px) {\n.offcanvas-xxl.showing[data-v-9cfc8a2c], .offcanvas-xxl.show[data-v-9cfc8a2c]:not(.hiding) {\n    transform: none;\n}\n}\n@media (max-width: 1399.98px) {\n.offcanvas-xxl.showing[data-v-9cfc8a2c], .offcanvas-xxl.hiding[data-v-9cfc8a2c], .offcanvas-xxl.show[data-v-9cfc8a2c] {\n    visibility: visible;\n}\n}\n@media (min-width: 1400px) {\n.offcanvas-xxl[data-v-9cfc8a2c] {\n    --bs-offcanvas-height: auto;\n    --bs-offcanvas-border-width: 0;\n    background-color: transparent !important;\n}\n.offcanvas-xxl .offcanvas-header[data-v-9cfc8a2c] {\n    display: none;\n}\n.offcanvas-xxl .offcanvas-body[data-v-9cfc8a2c] {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n    background-color: transparent !important;\n}\n}\n.offcanvas[data-v-9cfc8a2c] {\n  position: fixed;\n  bottom: 0;\n  z-index: var(--bs-offcanvas-zindex);\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n  color: var(--bs-offcanvas-color);\n  visibility: hidden;\n  background-color: var(--bs-offcanvas-bg);\n  background-clip: padding-box;\n  outline: 0;\n  transition: transform 0.3s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.offcanvas[data-v-9cfc8a2c] {\n    transition: none;\n}\n}\n.offcanvas.offcanvas-start[data-v-9cfc8a2c] {\n  top: 0;\n  left: 0;\n  width: var(--bs-offcanvas-width);\n  border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n  transform: translateX(-100%);\n}\n.offcanvas.offcanvas-end[data-v-9cfc8a2c] {\n  top: 0;\n  right: 0;\n  width: var(--bs-offcanvas-width);\n  border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n  transform: translateX(100%);\n}\n.offcanvas.offcanvas-top[data-v-9cfc8a2c] {\n  top: 0;\n  right: 0;\n  left: 0;\n  height: var(--bs-offcanvas-height);\n  max-height: 100%;\n  border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n  transform: translateY(-100%);\n}\n.offcanvas.offcanvas-bottom[data-v-9cfc8a2c] {\n  right: 0;\n  left: 0;\n  height: var(--bs-offcanvas-height);\n  max-height: 100%;\n  border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n  transform: translateY(100%);\n}\n.offcanvas.showing[data-v-9cfc8a2c], .offcanvas.show[data-v-9cfc8a2c]:not(.hiding) {\n  transform: none;\n}\n.offcanvas.showing[data-v-9cfc8a2c], .offcanvas.hiding[data-v-9cfc8a2c], .offcanvas.show[data-v-9cfc8a2c] {\n  visibility: visible;\n}\n.offcanvas-backdrop[data-v-9cfc8a2c] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n}\n.offcanvas-backdrop.fade[data-v-9cfc8a2c] {\n  opacity: 0;\n}\n.offcanvas-backdrop.show[data-v-9cfc8a2c] {\n  opacity: 0.5;\n}\n.offcanvas-header[data-v-9cfc8a2c] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);\n}\n.offcanvas-header .btn-close[data-v-9cfc8a2c] {\n  padding: calc(var(--bs-offcanvas-padding-y) * 0.5) calc(var(--bs-offcanvas-padding-x) * 0.5);\n  margin-top: calc(-0.5 * var(--bs-offcanvas-padding-y));\n  margin-right: calc(-0.5 * var(--bs-offcanvas-padding-x));\n  margin-bottom: calc(-0.5 * var(--bs-offcanvas-padding-y));\n}\n.offcanvas-title[data-v-9cfc8a2c] {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n.offcanvas-body[data-v-9cfc8a2c] {\n  flex-grow: 1;\n  padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);\n  overflow-y: auto;\n}\n.placeholder[data-v-9cfc8a2c] {\n  display: inline-block;\n  min-height: 1em;\n  vertical-align: middle;\n  cursor: wait;\n  background-color: currentcolor;\n  opacity: 0.5;\n}\n.placeholder.btn[data-v-9cfc8a2c]::before {\n  display: inline-block;\n  content: \"\";\n}\n.placeholder-xs[data-v-9cfc8a2c] {\n  min-height: 0.6em;\n}\n.placeholder-sm[data-v-9cfc8a2c] {\n  min-height: 0.8em;\n}\n.placeholder-lg[data-v-9cfc8a2c] {\n  min-height: 1.2em;\n}\n.placeholder-glow .placeholder[data-v-9cfc8a2c] {\n  animation: placeholder-glow-9cfc8a2c 2s ease-in-out infinite;\n}\n@keyframes placeholder-glow-9cfc8a2c {\n50% {\n    opacity: 0.2;\n}\n}\n.placeholder-wave[data-v-9cfc8a2c] {\n  -webkit-mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);\n          mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);\n  -webkit-mask-size: 200% 100%;\n          mask-size: 200% 100%;\n  animation: placeholder-wave-9cfc8a2c 2s linear infinite;\n}\n@keyframes placeholder-wave-9cfc8a2c {\n100% {\n    -webkit-mask-position: -200% 0%;\n            mask-position: -200% 0%;\n}\n}\n.clearfix[data-v-9cfc8a2c]::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n.text-bg-primary[data-v-9cfc8a2c] {\n  color: #fff !important;\n  background-color: RGBA(89, 49, 150, var(--bs-bg-opacity, 1)) !important;\n}\n.text-bg-secondary[data-v-9cfc8a2c] {\n  color: #fff !important;\n  background-color: RGBA(169, 145, 212, var(--bs-bg-opacity, 1)) !important;\n}\n.text-bg-success[data-v-9cfc8a2c] {\n  color: #fff !important;\n  background-color: RGBA(19, 185, 85, var(--bs-bg-opacity, 1)) !important;\n}\n.text-bg-info[data-v-9cfc8a2c] {\n  color: #fff !important;\n  background-color: RGBA(0, 156, 220, var(--bs-bg-opacity, 1)) !important;\n}\n.text-bg-warning[data-v-9cfc8a2c] {\n  color: #fff !important;\n  background-color: RGBA(239, 163, 29, var(--bs-bg-opacity, 1)) !important;\n}\n.text-bg-danger[data-v-9cfc8a2c] {\n  color: #fff !important;\n  background-color: RGBA(252, 57, 57, var(--bs-bg-opacity, 1)) !important;\n}\n.text-bg-light[data-v-9cfc8a2c] {\n  color: #000 !important;\n  background-color: RGBA(249, 248, 252, var(--bs-bg-opacity, 1)) !important;\n}\n.text-bg-dark[data-v-9cfc8a2c] {\n  color: #fff !important;\n  background-color: RGBA(23, 20, 31, var(--bs-bg-opacity, 1)) !important;\n}\n.link-primary[data-v-9cfc8a2c] {\n  color: #593196 !important;\n}\n.link-primary[data-v-9cfc8a2c]:hover, .link-primary[data-v-9cfc8a2c]:focus {\n  color: #472778 !important;\n}\n.link-secondary[data-v-9cfc8a2c] {\n  color: #a991d4 !important;\n}\n.link-secondary[data-v-9cfc8a2c]:hover, .link-secondary[data-v-9cfc8a2c]:focus {\n  color: #8774aa !important;\n}\n.link-success[data-v-9cfc8a2c] {\n  color: #13b955 !important;\n}\n.link-success[data-v-9cfc8a2c]:hover, .link-success[data-v-9cfc8a2c]:focus {\n  color: #0f9444 !important;\n}\n.link-info[data-v-9cfc8a2c] {\n  color: #009cdc !important;\n}\n.link-info[data-v-9cfc8a2c]:hover, .link-info[data-v-9cfc8a2c]:focus {\n  color: #007db0 !important;\n}\n.link-warning[data-v-9cfc8a2c] {\n  color: #efa31d !important;\n}\n.link-warning[data-v-9cfc8a2c]:hover, .link-warning[data-v-9cfc8a2c]:focus {\n  color: #bf8217 !important;\n}\n.link-danger[data-v-9cfc8a2c] {\n  color: #fc3939 !important;\n}\n.link-danger[data-v-9cfc8a2c]:hover, .link-danger[data-v-9cfc8a2c]:focus {\n  color: #ca2e2e !important;\n}\n.link-light[data-v-9cfc8a2c] {\n  color: #f9f8fc !important;\n}\n.link-light[data-v-9cfc8a2c]:hover, .link-light[data-v-9cfc8a2c]:focus {\n  color: #faf9fd !important;\n}\n.link-dark[data-v-9cfc8a2c] {\n  color: #17141f !important;\n}\n.link-dark[data-v-9cfc8a2c]:hover, .link-dark[data-v-9cfc8a2c]:focus {\n  color: #121019 !important;\n}\n.ratio[data-v-9cfc8a2c] {\n  position: relative;\n  width: 100%;\n}\n.ratio[data-v-9cfc8a2c]::before {\n  display: block;\n  padding-top: var(--bs-aspect-ratio);\n  content: \"\";\n}\n.ratio > *[data-v-9cfc8a2c] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.ratio-1x1[data-v-9cfc8a2c] {\n  --bs-aspect-ratio: 100%;\n}\n.ratio-4x3[data-v-9cfc8a2c] {\n  --bs-aspect-ratio: 75%;\n}\n.ratio-16x9[data-v-9cfc8a2c] {\n  --bs-aspect-ratio: 56.25%;\n}\n.ratio-21x9[data-v-9cfc8a2c] {\n  --bs-aspect-ratio: 42.8571428571%;\n}\n.fixed-top[data-v-9cfc8a2c] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n.fixed-bottom[data-v-9cfc8a2c] {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030;\n}\n.sticky-top[data-v-9cfc8a2c] {\n  position: sticky;\n  top: 0;\n  z-index: 1020;\n}\n.sticky-bottom[data-v-9cfc8a2c] {\n  position: sticky;\n  bottom: 0;\n  z-index: 1020;\n}\n@media (min-width: 576px) {\n.sticky-sm-top[data-v-9cfc8a2c] {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n}\n.sticky-sm-bottom[data-v-9cfc8a2c] {\n    position: sticky;\n    bottom: 0;\n    z-index: 1020;\n}\n}\n@media (min-width: 768px) {\n.sticky-md-top[data-v-9cfc8a2c] {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n}\n.sticky-md-bottom[data-v-9cfc8a2c] {\n    position: sticky;\n    bottom: 0;\n    z-index: 1020;\n}\n}\n@media (min-width: 992px) {\n.sticky-lg-top[data-v-9cfc8a2c] {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n}\n.sticky-lg-bottom[data-v-9cfc8a2c] {\n    position: sticky;\n    bottom: 0;\n    z-index: 1020;\n}\n}\n@media (min-width: 1200px) {\n.sticky-xl-top[data-v-9cfc8a2c] {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n}\n.sticky-xl-bottom[data-v-9cfc8a2c] {\n    position: sticky;\n    bottom: 0;\n    z-index: 1020;\n}\n}\n@media (min-width: 1400px) {\n.sticky-xxl-top[data-v-9cfc8a2c] {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n}\n.sticky-xxl-bottom[data-v-9cfc8a2c] {\n    position: sticky;\n    bottom: 0;\n    z-index: 1020;\n}\n}\n.hstack[data-v-9cfc8a2c] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-self: stretch;\n}\n.vstack[data-v-9cfc8a2c] {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  align-self: stretch;\n}\n.visually-hidden[data-v-9cfc8a2c],\n.visually-hidden-focusable[data-v-9cfc8a2c]:not(:focus):not(:focus-within) {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important;\n}\n.stretched-link[data-v-9cfc8a2c]::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  content: \"\";\n}\n.text-truncate[data-v-9cfc8a2c] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.vr[data-v-9cfc8a2c] {\n  display: inline-block;\n  align-self: stretch;\n  width: 1px;\n  min-height: 1em;\n  background-color: currentcolor;\n  opacity: 0.25;\n}\n.align-baseline[data-v-9cfc8a2c] {\n  vertical-align: baseline !important;\n}\n.align-top[data-v-9cfc8a2c] {\n  vertical-align: top !important;\n}\n.align-middle[data-v-9cfc8a2c] {\n  vertical-align: middle !important;\n}\n.align-bottom[data-v-9cfc8a2c] {\n  vertical-align: bottom !important;\n}\n.align-text-bottom[data-v-9cfc8a2c] {\n  vertical-align: text-bottom !important;\n}\n.align-text-top[data-v-9cfc8a2c] {\n  vertical-align: text-top !important;\n}\n.float-start[data-v-9cfc8a2c] {\n  float: left !important;\n}\n.float-end[data-v-9cfc8a2c] {\n  float: right !important;\n}\n.float-none[data-v-9cfc8a2c] {\n  float: none !important;\n}\n.opacity-0[data-v-9cfc8a2c] {\n  opacity: 0 !important;\n}\n.opacity-25[data-v-9cfc8a2c] {\n  opacity: 0.25 !important;\n}\n.opacity-50[data-v-9cfc8a2c] {\n  opacity: 0.5 !important;\n}\n.opacity-75[data-v-9cfc8a2c] {\n  opacity: 0.75 !important;\n}\n.opacity-100[data-v-9cfc8a2c] {\n  opacity: 1 !important;\n}\n.overflow-auto[data-v-9cfc8a2c] {\n  overflow: auto !important;\n}\n.overflow-hidden[data-v-9cfc8a2c] {\n  overflow: hidden !important;\n}\n.overflow-visible[data-v-9cfc8a2c] {\n  overflow: visible !important;\n}\n.overflow-scroll[data-v-9cfc8a2c] {\n  overflow: scroll !important;\n}\n.d-inline[data-v-9cfc8a2c] {\n  display: inline !important;\n}\n.d-inline-block[data-v-9cfc8a2c] {\n  display: inline-block !important;\n}\n.d-block[data-v-9cfc8a2c] {\n  display: block !important;\n}\n.d-grid[data-v-9cfc8a2c] {\n  display: grid !important;\n}\n.d-table[data-v-9cfc8a2c] {\n  display: table !important;\n}\n.d-table-row[data-v-9cfc8a2c] {\n  display: table-row !important;\n}\n.d-table-cell[data-v-9cfc8a2c] {\n  display: table-cell !important;\n}\n.d-flex[data-v-9cfc8a2c] {\n  display: flex !important;\n}\n.d-inline-flex[data-v-9cfc8a2c] {\n  display: inline-flex !important;\n}\n.d-none[data-v-9cfc8a2c] {\n  display: none !important;\n}\n.shadow[data-v-9cfc8a2c] {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.shadow-sm[data-v-9cfc8a2c] {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n.shadow-lg[data-v-9cfc8a2c] {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n}\n.shadow-none[data-v-9cfc8a2c] {\n  box-shadow: none !important;\n}\n.position-static[data-v-9cfc8a2c] {\n  position: static !important;\n}\n.position-relative[data-v-9cfc8a2c] {\n  position: relative !important;\n}\n.position-absolute[data-v-9cfc8a2c] {\n  position: absolute !important;\n}\n.position-fixed[data-v-9cfc8a2c] {\n  position: fixed !important;\n}\n.position-sticky[data-v-9cfc8a2c] {\n  position: sticky !important;\n}\n.top-0[data-v-9cfc8a2c] {\n  top: 0 !important;\n}\n.top-50[data-v-9cfc8a2c] {\n  top: 50% !important;\n}\n.top-100[data-v-9cfc8a2c] {\n  top: 100% !important;\n}\n.bottom-0[data-v-9cfc8a2c] {\n  bottom: 0 !important;\n}\n.bottom-50[data-v-9cfc8a2c] {\n  bottom: 50% !important;\n}\n.bottom-100[data-v-9cfc8a2c] {\n  bottom: 100% !important;\n}\n.start-0[data-v-9cfc8a2c] {\n  left: 0 !important;\n}\n.start-50[data-v-9cfc8a2c] {\n  left: 50% !important;\n}\n.start-100[data-v-9cfc8a2c] {\n  left: 100% !important;\n}\n.end-0[data-v-9cfc8a2c] {\n  right: 0 !important;\n}\n.end-50[data-v-9cfc8a2c] {\n  right: 50% !important;\n}\n.end-100[data-v-9cfc8a2c] {\n  right: 100% !important;\n}\n.translate-middle[data-v-9cfc8a2c] {\n  transform: translate(-50%, -50%) !important;\n}\n.translate-middle-x[data-v-9cfc8a2c] {\n  transform: translateX(-50%) !important;\n}\n.translate-middle-y[data-v-9cfc8a2c] {\n  transform: translateY(-50%) !important;\n}\n.border[data-v-9cfc8a2c] {\n  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;\n}\n.border-0[data-v-9cfc8a2c] {\n  border: 0 !important;\n}\n.border-top[data-v-9cfc8a2c] {\n  border-top: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;\n}\n.border-top-0[data-v-9cfc8a2c] {\n  border-top: 0 !important;\n}\n.border-end[data-v-9cfc8a2c] {\n  border-right: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;\n}\n.border-end-0[data-v-9cfc8a2c] {\n  border-right: 0 !important;\n}\n.border-bottom[data-v-9cfc8a2c] {\n  border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;\n}\n.border-bottom-0[data-v-9cfc8a2c] {\n  border-bottom: 0 !important;\n}\n.border-start[data-v-9cfc8a2c] {\n  border-left: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;\n}\n.border-start-0[data-v-9cfc8a2c] {\n  border-left: 0 !important;\n}\n.border-primary[data-v-9cfc8a2c] {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-primary-rgb), var(--bs-border-opacity)) !important;\n}\n.border-secondary[data-v-9cfc8a2c] {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-secondary-rgb), var(--bs-border-opacity)) !important;\n}\n.border-success[data-v-9cfc8a2c] {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important;\n}\n.border-info[data-v-9cfc8a2c] {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-info-rgb), var(--bs-border-opacity)) !important;\n}\n.border-warning[data-v-9cfc8a2c] {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-warning-rgb), var(--bs-border-opacity)) !important;\n}\n.border-danger[data-v-9cfc8a2c] {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-danger-rgb), var(--bs-border-opacity)) !important;\n}\n.border-light[data-v-9cfc8a2c] {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-light-rgb), var(--bs-border-opacity)) !important;\n}\n.border-dark[data-v-9cfc8a2c] {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-dark-rgb), var(--bs-border-opacity)) !important;\n}\n.border-white[data-v-9cfc8a2c] {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-white-rgb), var(--bs-border-opacity)) !important;\n}\n.border-1[data-v-9cfc8a2c] {\n  --bs-border-width: 1px;\n}\n.border-2[data-v-9cfc8a2c] {\n  --bs-border-width: 2px;\n}\n.border-3[data-v-9cfc8a2c] {\n  --bs-border-width: 3px;\n}\n.border-4[data-v-9cfc8a2c] {\n  --bs-border-width: 4px;\n}\n.border-5[data-v-9cfc8a2c] {\n  --bs-border-width: 5px;\n}\n.border-opacity-10[data-v-9cfc8a2c] {\n  --bs-border-opacity: 0.1;\n}\n.border-opacity-25[data-v-9cfc8a2c] {\n  --bs-border-opacity: 0.25;\n}\n.border-opacity-50[data-v-9cfc8a2c] {\n  --bs-border-opacity: 0.5;\n}\n.border-opacity-75[data-v-9cfc8a2c] {\n  --bs-border-opacity: 0.75;\n}\n.border-opacity-100[data-v-9cfc8a2c] {\n  --bs-border-opacity: 1;\n}\n.w-25[data-v-9cfc8a2c] {\n  width: 25% !important;\n}\n.w-50[data-v-9cfc8a2c] {\n  width: 50% !important;\n}\n.w-75[data-v-9cfc8a2c] {\n  width: 75% !important;\n}\n.w-100[data-v-9cfc8a2c] {\n  width: 100% !important;\n}\n.w-auto[data-v-9cfc8a2c] {\n  width: auto !important;\n}\n.mw-100[data-v-9cfc8a2c] {\n  max-width: 100% !important;\n}\n.vw-100[data-v-9cfc8a2c] {\n  width: 100vw !important;\n}\n.min-vw-100[data-v-9cfc8a2c] {\n  min-width: 100vw !important;\n}\n.h-25[data-v-9cfc8a2c] {\n  height: 25% !important;\n}\n.h-50[data-v-9cfc8a2c] {\n  height: 50% !important;\n}\n.h-75[data-v-9cfc8a2c] {\n  height: 75% !important;\n}\n.h-100[data-v-9cfc8a2c] {\n  height: 100% !important;\n}\n.h-auto[data-v-9cfc8a2c] {\n  height: auto !important;\n}\n.mh-100[data-v-9cfc8a2c] {\n  max-height: 100% !important;\n}\n.vh-100[data-v-9cfc8a2c] {\n  height: 100vh !important;\n}\n.min-vh-100[data-v-9cfc8a2c] {\n  min-height: 100vh !important;\n}\n.flex-fill[data-v-9cfc8a2c] {\n  flex: 1 1 auto !important;\n}\n.flex-row[data-v-9cfc8a2c] {\n  flex-direction: row !important;\n}\n.flex-column[data-v-9cfc8a2c] {\n  flex-direction: column !important;\n}\n.flex-row-reverse[data-v-9cfc8a2c] {\n  flex-direction: row-reverse !important;\n}\n.flex-column-reverse[data-v-9cfc8a2c] {\n  flex-direction: column-reverse !important;\n}\n.flex-grow-0[data-v-9cfc8a2c] {\n  flex-grow: 0 !important;\n}\n.flex-grow-1[data-v-9cfc8a2c] {\n  flex-grow: 1 !important;\n}\n.flex-shrink-0[data-v-9cfc8a2c] {\n  flex-shrink: 0 !important;\n}\n.flex-shrink-1[data-v-9cfc8a2c] {\n  flex-shrink: 1 !important;\n}\n.flex-wrap[data-v-9cfc8a2c] {\n  flex-wrap: wrap !important;\n}\n.flex-nowrap[data-v-9cfc8a2c] {\n  flex-wrap: nowrap !important;\n}\n.flex-wrap-reverse[data-v-9cfc8a2c] {\n  flex-wrap: wrap-reverse !important;\n}\n.justify-content-start[data-v-9cfc8a2c] {\n  justify-content: flex-start !important;\n}\n.justify-content-end[data-v-9cfc8a2c] {\n  justify-content: flex-end !important;\n}\n.justify-content-center[data-v-9cfc8a2c] {\n  justify-content: center !important;\n}\n.justify-content-between[data-v-9cfc8a2c] {\n  justify-content: space-between !important;\n}\n.justify-content-around[data-v-9cfc8a2c] {\n  justify-content: space-around !important;\n}\n.justify-content-evenly[data-v-9cfc8a2c] {\n  justify-content: space-evenly !important;\n}\n.align-items-start[data-v-9cfc8a2c] {\n  align-items: flex-start !important;\n}\n.align-items-end[data-v-9cfc8a2c] {\n  align-items: flex-end !important;\n}\n.align-items-center[data-v-9cfc8a2c] {\n  align-items: center !important;\n}\n.align-items-baseline[data-v-9cfc8a2c] {\n  align-items: baseline !important;\n}\n.align-items-stretch[data-v-9cfc8a2c] {\n  align-items: stretch !important;\n}\n.align-content-start[data-v-9cfc8a2c] {\n  align-content: flex-start !important;\n}\n.align-content-end[data-v-9cfc8a2c] {\n  align-content: flex-end !important;\n}\n.align-content-center[data-v-9cfc8a2c] {\n  align-content: center !important;\n}\n.align-content-between[data-v-9cfc8a2c] {\n  align-content: space-between !important;\n}\n.align-content-around[data-v-9cfc8a2c] {\n  align-content: space-around !important;\n}\n.align-content-stretch[data-v-9cfc8a2c] {\n  align-content: stretch !important;\n}\n.align-self-auto[data-v-9cfc8a2c] {\n  align-self: auto !important;\n}\n.align-self-start[data-v-9cfc8a2c] {\n  align-self: flex-start !important;\n}\n.align-self-end[data-v-9cfc8a2c] {\n  align-self: flex-end !important;\n}\n.align-self-center[data-v-9cfc8a2c] {\n  align-self: center !important;\n}\n.align-self-baseline[data-v-9cfc8a2c] {\n  align-self: baseline !important;\n}\n.align-self-stretch[data-v-9cfc8a2c] {\n  align-self: stretch !important;\n}\n.order-first[data-v-9cfc8a2c] {\n  order: -1 !important;\n}\n.order-0[data-v-9cfc8a2c] {\n  order: 0 !important;\n}\n.order-1[data-v-9cfc8a2c] {\n  order: 1 !important;\n}\n.order-2[data-v-9cfc8a2c] {\n  order: 2 !important;\n}\n.order-3[data-v-9cfc8a2c] {\n  order: 3 !important;\n}\n.order-4[data-v-9cfc8a2c] {\n  order: 4 !important;\n}\n.order-5[data-v-9cfc8a2c] {\n  order: 5 !important;\n}\n.order-last[data-v-9cfc8a2c] {\n  order: 6 !important;\n}\n.m-0[data-v-9cfc8a2c] {\n  margin: 0 !important;\n}\n.m-1[data-v-9cfc8a2c] {\n  margin: 0.25rem !important;\n}\n.m-2[data-v-9cfc8a2c] {\n  margin: 0.5rem !important;\n}\n.m-3[data-v-9cfc8a2c] {\n  margin: 1rem !important;\n}\n.m-4[data-v-9cfc8a2c] {\n  margin: 1.5rem !important;\n}\n.m-5[data-v-9cfc8a2c] {\n  margin: 3rem !important;\n}\n.m-auto[data-v-9cfc8a2c] {\n  margin: auto !important;\n}\n.mx-0[data-v-9cfc8a2c] {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n.mx-1[data-v-9cfc8a2c] {\n  margin-right: 0.25rem !important;\n  margin-left: 0.25rem !important;\n}\n.mx-2[data-v-9cfc8a2c] {\n  margin-right: 0.5rem !important;\n  margin-left: 0.5rem !important;\n}\n.mx-3[data-v-9cfc8a2c] {\n  margin-right: 1rem !important;\n  margin-left: 1rem !important;\n}\n.mx-4[data-v-9cfc8a2c] {\n  margin-right: 1.5rem !important;\n  margin-left: 1.5rem !important;\n}\n.mx-5[data-v-9cfc8a2c] {\n  margin-right: 3rem !important;\n  margin-left: 3rem !important;\n}\n.mx-auto[data-v-9cfc8a2c] {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n.my-0[data-v-9cfc8a2c] {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n.my-1[data-v-9cfc8a2c] {\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important;\n}\n.my-2[data-v-9cfc8a2c] {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n.my-3[data-v-9cfc8a2c] {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n.my-4[data-v-9cfc8a2c] {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n}\n.my-5[data-v-9cfc8a2c] {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important;\n}\n.my-auto[data-v-9cfc8a2c] {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n.mt-0[data-v-9cfc8a2c] {\n  margin-top: 0 !important;\n}\n.mt-1[data-v-9cfc8a2c] {\n  margin-top: 0.25rem !important;\n}\n.mt-2[data-v-9cfc8a2c] {\n  margin-top: 0.5rem !important;\n}\n.mt-3[data-v-9cfc8a2c] {\n  margin-top: 1rem !important;\n}\n.mt-4[data-v-9cfc8a2c] {\n  margin-top: 1.5rem !important;\n}\n.mt-5[data-v-9cfc8a2c] {\n  margin-top: 3rem !important;\n}\n.mt-auto[data-v-9cfc8a2c] {\n  margin-top: auto !important;\n}\n.me-0[data-v-9cfc8a2c] {\n  margin-right: 0 !important;\n}\n.me-1[data-v-9cfc8a2c] {\n  margin-right: 0.25rem !important;\n}\n.me-2[data-v-9cfc8a2c] {\n  margin-right: 0.5rem !important;\n}\n.me-3[data-v-9cfc8a2c] {\n  margin-right: 1rem !important;\n}\n.me-4[data-v-9cfc8a2c] {\n  margin-right: 1.5rem !important;\n}\n.me-5[data-v-9cfc8a2c] {\n  margin-right: 3rem !important;\n}\n.me-auto[data-v-9cfc8a2c] {\n  margin-right: auto !important;\n}\n.mb-0[data-v-9cfc8a2c] {\n  margin-bottom: 0 !important;\n}\n.mb-1[data-v-9cfc8a2c] {\n  margin-bottom: 0.25rem !important;\n}\n.mb-2[data-v-9cfc8a2c] {\n  margin-bottom: 0.5rem !important;\n}\n.mb-3[data-v-9cfc8a2c] {\n  margin-bottom: 1rem !important;\n}\n.mb-4[data-v-9cfc8a2c] {\n  margin-bottom: 1.5rem !important;\n}\n.mb-5[data-v-9cfc8a2c] {\n  margin-bottom: 3rem !important;\n}\n.mb-auto[data-v-9cfc8a2c] {\n  margin-bottom: auto !important;\n}\n.ms-0[data-v-9cfc8a2c] {\n  margin-left: 0 !important;\n}\n.ms-1[data-v-9cfc8a2c] {\n  margin-left: 0.25rem !important;\n}\n.ms-2[data-v-9cfc8a2c] {\n  margin-left: 0.5rem !important;\n}\n.ms-3[data-v-9cfc8a2c] {\n  margin-left: 1rem !important;\n}\n.ms-4[data-v-9cfc8a2c] {\n  margin-left: 1.5rem !important;\n}\n.ms-5[data-v-9cfc8a2c] {\n  margin-left: 3rem !important;\n}\n.ms-auto[data-v-9cfc8a2c] {\n  margin-left: auto !important;\n}\n.p-0[data-v-9cfc8a2c] {\n  padding: 0 !important;\n}\n.p-1[data-v-9cfc8a2c] {\n  padding: 0.25rem !important;\n}\n.p-2[data-v-9cfc8a2c] {\n  padding: 0.5rem !important;\n}\n.p-3[data-v-9cfc8a2c] {\n  padding: 1rem !important;\n}\n.p-4[data-v-9cfc8a2c] {\n  padding: 1.5rem !important;\n}\n.p-5[data-v-9cfc8a2c] {\n  padding: 3rem !important;\n}\n.px-0[data-v-9cfc8a2c] {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n.px-1[data-v-9cfc8a2c] {\n  padding-right: 0.25rem !important;\n  padding-left: 0.25rem !important;\n}\n.px-2[data-v-9cfc8a2c] {\n  padding-right: 0.5rem !important;\n  padding-left: 0.5rem !important;\n}\n.px-3[data-v-9cfc8a2c] {\n  padding-right: 1rem !important;\n  padding-left: 1rem !important;\n}\n.px-4[data-v-9cfc8a2c] {\n  padding-right: 1.5rem !important;\n  padding-left: 1.5rem !important;\n}\n.px-5[data-v-9cfc8a2c] {\n  padding-right: 3rem !important;\n  padding-left: 3rem !important;\n}\n.py-0[data-v-9cfc8a2c] {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n.py-1[data-v-9cfc8a2c] {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important;\n}\n.py-2[data-v-9cfc8a2c] {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n.py-3[data-v-9cfc8a2c] {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n.py-4[data-v-9cfc8a2c] {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n.py-5[data-v-9cfc8a2c] {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n}\n.pt-0[data-v-9cfc8a2c] {\n  padding-top: 0 !important;\n}\n.pt-1[data-v-9cfc8a2c] {\n  padding-top: 0.25rem !important;\n}\n.pt-2[data-v-9cfc8a2c] {\n  padding-top: 0.5rem !important;\n}\n.pt-3[data-v-9cfc8a2c] {\n  padding-top: 1rem !important;\n}\n.pt-4[data-v-9cfc8a2c] {\n  padding-top: 1.5rem !important;\n}\n.pt-5[data-v-9cfc8a2c] {\n  padding-top: 3rem !important;\n}\n.pe-0[data-v-9cfc8a2c] {\n  padding-right: 0 !important;\n}\n.pe-1[data-v-9cfc8a2c] {\n  padding-right: 0.25rem !important;\n}\n.pe-2[data-v-9cfc8a2c] {\n  padding-right: 0.5rem !important;\n}\n.pe-3[data-v-9cfc8a2c] {\n  padding-right: 1rem !important;\n}\n.pe-4[data-v-9cfc8a2c] {\n  padding-right: 1.5rem !important;\n}\n.pe-5[data-v-9cfc8a2c] {\n  padding-right: 3rem !important;\n}\n.pb-0[data-v-9cfc8a2c] {\n  padding-bottom: 0 !important;\n}\n.pb-1[data-v-9cfc8a2c] {\n  padding-bottom: 0.25rem !important;\n}\n.pb-2[data-v-9cfc8a2c] {\n  padding-bottom: 0.5rem !important;\n}\n.pb-3[data-v-9cfc8a2c] {\n  padding-bottom: 1rem !important;\n}\n.pb-4[data-v-9cfc8a2c] {\n  padding-bottom: 1.5rem !important;\n}\n.pb-5[data-v-9cfc8a2c] {\n  padding-bottom: 3rem !important;\n}\n.ps-0[data-v-9cfc8a2c] {\n  padding-left: 0 !important;\n}\n.ps-1[data-v-9cfc8a2c] {\n  padding-left: 0.25rem !important;\n}\n.ps-2[data-v-9cfc8a2c] {\n  padding-left: 0.5rem !important;\n}\n.ps-3[data-v-9cfc8a2c] {\n  padding-left: 1rem !important;\n}\n.ps-4[data-v-9cfc8a2c] {\n  padding-left: 1.5rem !important;\n}\n.ps-5[data-v-9cfc8a2c] {\n  padding-left: 3rem !important;\n}\n.gap-0[data-v-9cfc8a2c] {\n  gap: 0 !important;\n}\n.gap-1[data-v-9cfc8a2c] {\n  gap: 0.25rem !important;\n}\n.gap-2[data-v-9cfc8a2c] {\n  gap: 0.5rem !important;\n}\n.gap-3[data-v-9cfc8a2c] {\n  gap: 1rem !important;\n}\n.gap-4[data-v-9cfc8a2c] {\n  gap: 1.5rem !important;\n}\n.gap-5[data-v-9cfc8a2c] {\n  gap: 3rem !important;\n}\n.font-monospace[data-v-9cfc8a2c] {\n  font-family: var(--bs-font-monospace) !important;\n}\n.fs-1[data-v-9cfc8a2c] {\n  font-size: calc(1.375rem + 1.5vw) !important;\n}\n.fs-2[data-v-9cfc8a2c] {\n  font-size: calc(1.325rem + 0.9vw) !important;\n}\n.fs-3[data-v-9cfc8a2c] {\n  font-size: calc(1.3rem + 0.6vw) !important;\n}\n.fs-4[data-v-9cfc8a2c] {\n  font-size: calc(1.275rem + 0.3vw) !important;\n}\n.fs-5[data-v-9cfc8a2c] {\n  font-size: 1.25rem !important;\n}\n.fs-6[data-v-9cfc8a2c] {\n  font-size: 1rem !important;\n}\n.fst-italic[data-v-9cfc8a2c] {\n  font-style: italic !important;\n}\n.fst-normal[data-v-9cfc8a2c] {\n  font-style: normal !important;\n}\n.fw-light[data-v-9cfc8a2c] {\n  font-weight: 300 !important;\n}\n.fw-lighter[data-v-9cfc8a2c] {\n  font-weight: lighter !important;\n}\n.fw-normal[data-v-9cfc8a2c] {\n  font-weight: 400 !important;\n}\n.fw-bold[data-v-9cfc8a2c] {\n  font-weight: 700 !important;\n}\n.fw-semibold[data-v-9cfc8a2c] {\n  font-weight: 600 !important;\n}\n.fw-bolder[data-v-9cfc8a2c] {\n  font-weight: bolder !important;\n}\n.lh-1[data-v-9cfc8a2c] {\n  line-height: 1 !important;\n}\n.lh-sm[data-v-9cfc8a2c] {\n  line-height: 1.25 !important;\n}\n.lh-base[data-v-9cfc8a2c] {\n  line-height: 1.5 !important;\n}\n.lh-lg[data-v-9cfc8a2c] {\n  line-height: 2 !important;\n}\n.text-start[data-v-9cfc8a2c] {\n  text-align: left !important;\n}\n.text-end[data-v-9cfc8a2c] {\n  text-align: right !important;\n}\n.text-center[data-v-9cfc8a2c] {\n  text-align: center !important;\n}\n.text-decoration-none[data-v-9cfc8a2c] {\n  text-decoration: none !important;\n}\n.text-decoration-underline[data-v-9cfc8a2c] {\n  text-decoration: underline !important;\n}\n.text-decoration-line-through[data-v-9cfc8a2c] {\n  text-decoration: line-through !important;\n}\n.text-lowercase[data-v-9cfc8a2c] {\n  text-transform: lowercase !important;\n}\n.text-uppercase[data-v-9cfc8a2c] {\n  text-transform: uppercase !important;\n}\n.text-capitalize[data-v-9cfc8a2c] {\n  text-transform: capitalize !important;\n}\n.text-wrap[data-v-9cfc8a2c] {\n  white-space: normal !important;\n}\n.text-nowrap[data-v-9cfc8a2c] {\n  white-space: nowrap !important;\n}\n\n/* rtl:begin:remove */\n.text-break[data-v-9cfc8a2c] {\n  word-wrap: break-word !important;\n  word-break: break-word !important;\n}\n\n/* rtl:end:remove */\n.text-primary[data-v-9cfc8a2c] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;\n}\n.text-secondary[data-v-9cfc8a2c] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;\n}\n.text-success[data-v-9cfc8a2c] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;\n}\n.text-info[data-v-9cfc8a2c] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important;\n}\n.text-warning[data-v-9cfc8a2c] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important;\n}\n.text-danger[data-v-9cfc8a2c] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;\n}\n.text-light[data-v-9cfc8a2c] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;\n}\n.text-dark[data-v-9cfc8a2c] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;\n}\n.text-black[data-v-9cfc8a2c] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important;\n}\n.text-white[data-v-9cfc8a2c] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;\n}\n.text-body[data-v-9cfc8a2c] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important;\n}\n.text-muted[data-v-9cfc8a2c] {\n  --bs-text-opacity: 1;\n  color: #868e96 !important;\n}\n.text-black-50[data-v-9cfc8a2c] {\n  --bs-text-opacity: 1;\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50[data-v-9cfc8a2c] {\n  --bs-text-opacity: 1;\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-reset[data-v-9cfc8a2c] {\n  --bs-text-opacity: 1;\n  color: inherit !important;\n}\n.text-opacity-25[data-v-9cfc8a2c] {\n  --bs-text-opacity: 0.25;\n}\n.text-opacity-50[data-v-9cfc8a2c] {\n  --bs-text-opacity: 0.5;\n}\n.text-opacity-75[data-v-9cfc8a2c] {\n  --bs-text-opacity: 0.75;\n}\n.text-opacity-100[data-v-9cfc8a2c] {\n  --bs-text-opacity: 1;\n}\n.bg-primary[data-v-9cfc8a2c] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-secondary[data-v-9cfc8a2c] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-success[data-v-9cfc8a2c] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-info[data-v-9cfc8a2c] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-warning[data-v-9cfc8a2c] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-danger[data-v-9cfc8a2c] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-light[data-v-9cfc8a2c] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-dark[data-v-9cfc8a2c] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-black[data-v-9cfc8a2c] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-white[data-v-9cfc8a2c] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-body[data-v-9cfc8a2c] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-transparent[data-v-9cfc8a2c] {\n  --bs-bg-opacity: 1;\n  background-color: transparent !important;\n}\n.bg-opacity-10[data-v-9cfc8a2c] {\n  --bs-bg-opacity: 0.1;\n}\n.bg-opacity-25[data-v-9cfc8a2c] {\n  --bs-bg-opacity: 0.25;\n}\n.bg-opacity-50[data-v-9cfc8a2c] {\n  --bs-bg-opacity: 0.5;\n}\n.bg-opacity-75[data-v-9cfc8a2c] {\n  --bs-bg-opacity: 0.75;\n}\n.bg-opacity-100[data-v-9cfc8a2c] {\n  --bs-bg-opacity: 1;\n}\n.bg-gradient[data-v-9cfc8a2c] {\n  background-image: var(--bs-gradient) !important;\n}\n.user-select-all[data-v-9cfc8a2c] {\n  -webkit-user-select: all !important;\n     -moz-user-select: all !important;\n          user-select: all !important;\n}\n.user-select-auto[data-v-9cfc8a2c] {\n  -webkit-user-select: auto !important;\n     -moz-user-select: auto !important;\n          user-select: auto !important;\n}\n.user-select-none[data-v-9cfc8a2c] {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n          user-select: none !important;\n}\n.pe-none[data-v-9cfc8a2c] {\n  pointer-events: none !important;\n}\n.pe-auto[data-v-9cfc8a2c] {\n  pointer-events: auto !important;\n}\n.rounded[data-v-9cfc8a2c] {\n  border-radius: var(--bs-border-radius) !important;\n}\n.rounded-0[data-v-9cfc8a2c] {\n  border-radius: 0 !important;\n}\n.rounded-1[data-v-9cfc8a2c] {\n  border-radius: var(--bs-border-radius-sm) !important;\n}\n.rounded-2[data-v-9cfc8a2c] {\n  border-radius: var(--bs-border-radius) !important;\n}\n.rounded-3[data-v-9cfc8a2c] {\n  border-radius: var(--bs-border-radius-lg) !important;\n}\n.rounded-4[data-v-9cfc8a2c] {\n  border-radius: var(--bs-border-radius-xl) !important;\n}\n.rounded-5[data-v-9cfc8a2c] {\n  border-radius: var(--bs-border-radius-2xl) !important;\n}\n.rounded-circle[data-v-9cfc8a2c] {\n  border-radius: 50% !important;\n}\n.rounded-pill[data-v-9cfc8a2c] {\n  border-radius: var(--bs-border-radius-pill) !important;\n}\n.rounded-top[data-v-9cfc8a2c] {\n  border-top-left-radius: var(--bs-border-radius) !important;\n  border-top-right-radius: var(--bs-border-radius) !important;\n}\n.rounded-end[data-v-9cfc8a2c] {\n  border-top-right-radius: var(--bs-border-radius) !important;\n  border-bottom-right-radius: var(--bs-border-radius) !important;\n}\n.rounded-bottom[data-v-9cfc8a2c] {\n  border-bottom-right-radius: var(--bs-border-radius) !important;\n  border-bottom-left-radius: var(--bs-border-radius) !important;\n}\n.rounded-start[data-v-9cfc8a2c] {\n  border-bottom-left-radius: var(--bs-border-radius) !important;\n  border-top-left-radius: var(--bs-border-radius) !important;\n}\n.visible[data-v-9cfc8a2c] {\n  visibility: visible !important;\n}\n.invisible[data-v-9cfc8a2c] {\n  visibility: hidden !important;\n}\n@media (min-width: 576px) {\n.float-sm-start[data-v-9cfc8a2c] {\n    float: left !important;\n}\n.float-sm-end[data-v-9cfc8a2c] {\n    float: right !important;\n}\n.float-sm-none[data-v-9cfc8a2c] {\n    float: none !important;\n}\n.d-sm-inline[data-v-9cfc8a2c] {\n    display: inline !important;\n}\n.d-sm-inline-block[data-v-9cfc8a2c] {\n    display: inline-block !important;\n}\n.d-sm-block[data-v-9cfc8a2c] {\n    display: block !important;\n}\n.d-sm-grid[data-v-9cfc8a2c] {\n    display: grid !important;\n}\n.d-sm-table[data-v-9cfc8a2c] {\n    display: table !important;\n}\n.d-sm-table-row[data-v-9cfc8a2c] {\n    display: table-row !important;\n}\n.d-sm-table-cell[data-v-9cfc8a2c] {\n    display: table-cell !important;\n}\n.d-sm-flex[data-v-9cfc8a2c] {\n    display: flex !important;\n}\n.d-sm-inline-flex[data-v-9cfc8a2c] {\n    display: inline-flex !important;\n}\n.d-sm-none[data-v-9cfc8a2c] {\n    display: none !important;\n}\n.flex-sm-fill[data-v-9cfc8a2c] {\n    flex: 1 1 auto !important;\n}\n.flex-sm-row[data-v-9cfc8a2c] {\n    flex-direction: row !important;\n}\n.flex-sm-column[data-v-9cfc8a2c] {\n    flex-direction: column !important;\n}\n.flex-sm-row-reverse[data-v-9cfc8a2c] {\n    flex-direction: row-reverse !important;\n}\n.flex-sm-column-reverse[data-v-9cfc8a2c] {\n    flex-direction: column-reverse !important;\n}\n.flex-sm-grow-0[data-v-9cfc8a2c] {\n    flex-grow: 0 !important;\n}\n.flex-sm-grow-1[data-v-9cfc8a2c] {\n    flex-grow: 1 !important;\n}\n.flex-sm-shrink-0[data-v-9cfc8a2c] {\n    flex-shrink: 0 !important;\n}\n.flex-sm-shrink-1[data-v-9cfc8a2c] {\n    flex-shrink: 1 !important;\n}\n.flex-sm-wrap[data-v-9cfc8a2c] {\n    flex-wrap: wrap !important;\n}\n.flex-sm-nowrap[data-v-9cfc8a2c] {\n    flex-wrap: nowrap !important;\n}\n.flex-sm-wrap-reverse[data-v-9cfc8a2c] {\n    flex-wrap: wrap-reverse !important;\n}\n.justify-content-sm-start[data-v-9cfc8a2c] {\n    justify-content: flex-start !important;\n}\n.justify-content-sm-end[data-v-9cfc8a2c] {\n    justify-content: flex-end !important;\n}\n.justify-content-sm-center[data-v-9cfc8a2c] {\n    justify-content: center !important;\n}\n.justify-content-sm-between[data-v-9cfc8a2c] {\n    justify-content: space-between !important;\n}\n.justify-content-sm-around[data-v-9cfc8a2c] {\n    justify-content: space-around !important;\n}\n.justify-content-sm-evenly[data-v-9cfc8a2c] {\n    justify-content: space-evenly !important;\n}\n.align-items-sm-start[data-v-9cfc8a2c] {\n    align-items: flex-start !important;\n}\n.align-items-sm-end[data-v-9cfc8a2c] {\n    align-items: flex-end !important;\n}\n.align-items-sm-center[data-v-9cfc8a2c] {\n    align-items: center !important;\n}\n.align-items-sm-baseline[data-v-9cfc8a2c] {\n    align-items: baseline !important;\n}\n.align-items-sm-stretch[data-v-9cfc8a2c] {\n    align-items: stretch !important;\n}\n.align-content-sm-start[data-v-9cfc8a2c] {\n    align-content: flex-start !important;\n}\n.align-content-sm-end[data-v-9cfc8a2c] {\n    align-content: flex-end !important;\n}\n.align-content-sm-center[data-v-9cfc8a2c] {\n    align-content: center !important;\n}\n.align-content-sm-between[data-v-9cfc8a2c] {\n    align-content: space-between !important;\n}\n.align-content-sm-around[data-v-9cfc8a2c] {\n    align-content: space-around !important;\n}\n.align-content-sm-stretch[data-v-9cfc8a2c] {\n    align-content: stretch !important;\n}\n.align-self-sm-auto[data-v-9cfc8a2c] {\n    align-self: auto !important;\n}\n.align-self-sm-start[data-v-9cfc8a2c] {\n    align-self: flex-start !important;\n}\n.align-self-sm-end[data-v-9cfc8a2c] {\n    align-self: flex-end !important;\n}\n.align-self-sm-center[data-v-9cfc8a2c] {\n    align-self: center !important;\n}\n.align-self-sm-baseline[data-v-9cfc8a2c] {\n    align-self: baseline !important;\n}\n.align-self-sm-stretch[data-v-9cfc8a2c] {\n    align-self: stretch !important;\n}\n.order-sm-first[data-v-9cfc8a2c] {\n    order: -1 !important;\n}\n.order-sm-0[data-v-9cfc8a2c] {\n    order: 0 !important;\n}\n.order-sm-1[data-v-9cfc8a2c] {\n    order: 1 !important;\n}\n.order-sm-2[data-v-9cfc8a2c] {\n    order: 2 !important;\n}\n.order-sm-3[data-v-9cfc8a2c] {\n    order: 3 !important;\n}\n.order-sm-4[data-v-9cfc8a2c] {\n    order: 4 !important;\n}\n.order-sm-5[data-v-9cfc8a2c] {\n    order: 5 !important;\n}\n.order-sm-last[data-v-9cfc8a2c] {\n    order: 6 !important;\n}\n.m-sm-0[data-v-9cfc8a2c] {\n    margin: 0 !important;\n}\n.m-sm-1[data-v-9cfc8a2c] {\n    margin: 0.25rem !important;\n}\n.m-sm-2[data-v-9cfc8a2c] {\n    margin: 0.5rem !important;\n}\n.m-sm-3[data-v-9cfc8a2c] {\n    margin: 1rem !important;\n}\n.m-sm-4[data-v-9cfc8a2c] {\n    margin: 1.5rem !important;\n}\n.m-sm-5[data-v-9cfc8a2c] {\n    margin: 3rem !important;\n}\n.m-sm-auto[data-v-9cfc8a2c] {\n    margin: auto !important;\n}\n.mx-sm-0[data-v-9cfc8a2c] {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n}\n.mx-sm-1[data-v-9cfc8a2c] {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n}\n.mx-sm-2[data-v-9cfc8a2c] {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n}\n.mx-sm-3[data-v-9cfc8a2c] {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n}\n.mx-sm-4[data-v-9cfc8a2c] {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n}\n.mx-sm-5[data-v-9cfc8a2c] {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n}\n.mx-sm-auto[data-v-9cfc8a2c] {\n    margin-right: auto !important;\n    margin-left: auto !important;\n}\n.my-sm-0[data-v-9cfc8a2c] {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n}\n.my-sm-1[data-v-9cfc8a2c] {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n}\n.my-sm-2[data-v-9cfc8a2c] {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n}\n.my-sm-3[data-v-9cfc8a2c] {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n}\n.my-sm-4[data-v-9cfc8a2c] {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n}\n.my-sm-5[data-v-9cfc8a2c] {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n}\n.my-sm-auto[data-v-9cfc8a2c] {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n}\n.mt-sm-0[data-v-9cfc8a2c] {\n    margin-top: 0 !important;\n}\n.mt-sm-1[data-v-9cfc8a2c] {\n    margin-top: 0.25rem !important;\n}\n.mt-sm-2[data-v-9cfc8a2c] {\n    margin-top: 0.5rem !important;\n}\n.mt-sm-3[data-v-9cfc8a2c] {\n    margin-top: 1rem !important;\n}\n.mt-sm-4[data-v-9cfc8a2c] {\n    margin-top: 1.5rem !important;\n}\n.mt-sm-5[data-v-9cfc8a2c] {\n    margin-top: 3rem !important;\n}\n.mt-sm-auto[data-v-9cfc8a2c] {\n    margin-top: auto !important;\n}\n.me-sm-0[data-v-9cfc8a2c] {\n    margin-right: 0 !important;\n}\n.me-sm-1[data-v-9cfc8a2c] {\n    margin-right: 0.25rem !important;\n}\n.me-sm-2[data-v-9cfc8a2c] {\n    margin-right: 0.5rem !important;\n}\n.me-sm-3[data-v-9cfc8a2c] {\n    margin-right: 1rem !important;\n}\n.me-sm-4[data-v-9cfc8a2c] {\n    margin-right: 1.5rem !important;\n}\n.me-sm-5[data-v-9cfc8a2c] {\n    margin-right: 3rem !important;\n}\n.me-sm-auto[data-v-9cfc8a2c] {\n    margin-right: auto !important;\n}\n.mb-sm-0[data-v-9cfc8a2c] {\n    margin-bottom: 0 !important;\n}\n.mb-sm-1[data-v-9cfc8a2c] {\n    margin-bottom: 0.25rem !important;\n}\n.mb-sm-2[data-v-9cfc8a2c] {\n    margin-bottom: 0.5rem !important;\n}\n.mb-sm-3[data-v-9cfc8a2c] {\n    margin-bottom: 1rem !important;\n}\n.mb-sm-4[data-v-9cfc8a2c] {\n    margin-bottom: 1.5rem !important;\n}\n.mb-sm-5[data-v-9cfc8a2c] {\n    margin-bottom: 3rem !important;\n}\n.mb-sm-auto[data-v-9cfc8a2c] {\n    margin-bottom: auto !important;\n}\n.ms-sm-0[data-v-9cfc8a2c] {\n    margin-left: 0 !important;\n}\n.ms-sm-1[data-v-9cfc8a2c] {\n    margin-left: 0.25rem !important;\n}\n.ms-sm-2[data-v-9cfc8a2c] {\n    margin-left: 0.5rem !important;\n}\n.ms-sm-3[data-v-9cfc8a2c] {\n    margin-left: 1rem !important;\n}\n.ms-sm-4[data-v-9cfc8a2c] {\n    margin-left: 1.5rem !important;\n}\n.ms-sm-5[data-v-9cfc8a2c] {\n    margin-left: 3rem !important;\n}\n.ms-sm-auto[data-v-9cfc8a2c] {\n    margin-left: auto !important;\n}\n.p-sm-0[data-v-9cfc8a2c] {\n    padding: 0 !important;\n}\n.p-sm-1[data-v-9cfc8a2c] {\n    padding: 0.25rem !important;\n}\n.p-sm-2[data-v-9cfc8a2c] {\n    padding: 0.5rem !important;\n}\n.p-sm-3[data-v-9cfc8a2c] {\n    padding: 1rem !important;\n}\n.p-sm-4[data-v-9cfc8a2c] {\n    padding: 1.5rem !important;\n}\n.p-sm-5[data-v-9cfc8a2c] {\n    padding: 3rem !important;\n}\n.px-sm-0[data-v-9cfc8a2c] {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n}\n.px-sm-1[data-v-9cfc8a2c] {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n}\n.px-sm-2[data-v-9cfc8a2c] {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n}\n.px-sm-3[data-v-9cfc8a2c] {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n}\n.px-sm-4[data-v-9cfc8a2c] {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n}\n.px-sm-5[data-v-9cfc8a2c] {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n}\n.py-sm-0[data-v-9cfc8a2c] {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n}\n.py-sm-1[data-v-9cfc8a2c] {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n}\n.py-sm-2[data-v-9cfc8a2c] {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n}\n.py-sm-3[data-v-9cfc8a2c] {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n}\n.py-sm-4[data-v-9cfc8a2c] {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n}\n.py-sm-5[data-v-9cfc8a2c] {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n}\n.pt-sm-0[data-v-9cfc8a2c] {\n    padding-top: 0 !important;\n}\n.pt-sm-1[data-v-9cfc8a2c] {\n    padding-top: 0.25rem !important;\n}\n.pt-sm-2[data-v-9cfc8a2c] {\n    padding-top: 0.5rem !important;\n}\n.pt-sm-3[data-v-9cfc8a2c] {\n    padding-top: 1rem !important;\n}\n.pt-sm-4[data-v-9cfc8a2c] {\n    padding-top: 1.5rem !important;\n}\n.pt-sm-5[data-v-9cfc8a2c] {\n    padding-top: 3rem !important;\n}\n.pe-sm-0[data-v-9cfc8a2c] {\n    padding-right: 0 !important;\n}\n.pe-sm-1[data-v-9cfc8a2c] {\n    padding-right: 0.25rem !important;\n}\n.pe-sm-2[data-v-9cfc8a2c] {\n    padding-right: 0.5rem !important;\n}\n.pe-sm-3[data-v-9cfc8a2c] {\n    padding-right: 1rem !important;\n}\n.pe-sm-4[data-v-9cfc8a2c] {\n    padding-right: 1.5rem !important;\n}\n.pe-sm-5[data-v-9cfc8a2c] {\n    padding-right: 3rem !important;\n}\n.pb-sm-0[data-v-9cfc8a2c] {\n    padding-bottom: 0 !important;\n}\n.pb-sm-1[data-v-9cfc8a2c] {\n    padding-bottom: 0.25rem !important;\n}\n.pb-sm-2[data-v-9cfc8a2c] {\n    padding-bottom: 0.5rem !important;\n}\n.pb-sm-3[data-v-9cfc8a2c] {\n    padding-bottom: 1rem !important;\n}\n.pb-sm-4[data-v-9cfc8a2c] {\n    padding-bottom: 1.5rem !important;\n}\n.pb-sm-5[data-v-9cfc8a2c] {\n    padding-bottom: 3rem !important;\n}\n.ps-sm-0[data-v-9cfc8a2c] {\n    padding-left: 0 !important;\n}\n.ps-sm-1[data-v-9cfc8a2c] {\n    padding-left: 0.25rem !important;\n}\n.ps-sm-2[data-v-9cfc8a2c] {\n    padding-left: 0.5rem !important;\n}\n.ps-sm-3[data-v-9cfc8a2c] {\n    padding-left: 1rem !important;\n}\n.ps-sm-4[data-v-9cfc8a2c] {\n    padding-left: 1.5rem !important;\n}\n.ps-sm-5[data-v-9cfc8a2c] {\n    padding-left: 3rem !important;\n}\n.gap-sm-0[data-v-9cfc8a2c] {\n    gap: 0 !important;\n}\n.gap-sm-1[data-v-9cfc8a2c] {\n    gap: 0.25rem !important;\n}\n.gap-sm-2[data-v-9cfc8a2c] {\n    gap: 0.5rem !important;\n}\n.gap-sm-3[data-v-9cfc8a2c] {\n    gap: 1rem !important;\n}\n.gap-sm-4[data-v-9cfc8a2c] {\n    gap: 1.5rem !important;\n}\n.gap-sm-5[data-v-9cfc8a2c] {\n    gap: 3rem !important;\n}\n.text-sm-start[data-v-9cfc8a2c] {\n    text-align: left !important;\n}\n.text-sm-end[data-v-9cfc8a2c] {\n    text-align: right !important;\n}\n.text-sm-center[data-v-9cfc8a2c] {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.float-md-start[data-v-9cfc8a2c] {\n    float: left !important;\n}\n.float-md-end[data-v-9cfc8a2c] {\n    float: right !important;\n}\n.float-md-none[data-v-9cfc8a2c] {\n    float: none !important;\n}\n.d-md-inline[data-v-9cfc8a2c] {\n    display: inline !important;\n}\n.d-md-inline-block[data-v-9cfc8a2c] {\n    display: inline-block !important;\n}\n.d-md-block[data-v-9cfc8a2c] {\n    display: block !important;\n}\n.d-md-grid[data-v-9cfc8a2c] {\n    display: grid !important;\n}\n.d-md-table[data-v-9cfc8a2c] {\n    display: table !important;\n}\n.d-md-table-row[data-v-9cfc8a2c] {\n    display: table-row !important;\n}\n.d-md-table-cell[data-v-9cfc8a2c] {\n    display: table-cell !important;\n}\n.d-md-flex[data-v-9cfc8a2c] {\n    display: flex !important;\n}\n.d-md-inline-flex[data-v-9cfc8a2c] {\n    display: inline-flex !important;\n}\n.d-md-none[data-v-9cfc8a2c] {\n    display: none !important;\n}\n.flex-md-fill[data-v-9cfc8a2c] {\n    flex: 1 1 auto !important;\n}\n.flex-md-row[data-v-9cfc8a2c] {\n    flex-direction: row !important;\n}\n.flex-md-column[data-v-9cfc8a2c] {\n    flex-direction: column !important;\n}\n.flex-md-row-reverse[data-v-9cfc8a2c] {\n    flex-direction: row-reverse !important;\n}\n.flex-md-column-reverse[data-v-9cfc8a2c] {\n    flex-direction: column-reverse !important;\n}\n.flex-md-grow-0[data-v-9cfc8a2c] {\n    flex-grow: 0 !important;\n}\n.flex-md-grow-1[data-v-9cfc8a2c] {\n    flex-grow: 1 !important;\n}\n.flex-md-shrink-0[data-v-9cfc8a2c] {\n    flex-shrink: 0 !important;\n}\n.flex-md-shrink-1[data-v-9cfc8a2c] {\n    flex-shrink: 1 !important;\n}\n.flex-md-wrap[data-v-9cfc8a2c] {\n    flex-wrap: wrap !important;\n}\n.flex-md-nowrap[data-v-9cfc8a2c] {\n    flex-wrap: nowrap !important;\n}\n.flex-md-wrap-reverse[data-v-9cfc8a2c] {\n    flex-wrap: wrap-reverse !important;\n}\n.justify-content-md-start[data-v-9cfc8a2c] {\n    justify-content: flex-start !important;\n}\n.justify-content-md-end[data-v-9cfc8a2c] {\n    justify-content: flex-end !important;\n}\n.justify-content-md-center[data-v-9cfc8a2c] {\n    justify-content: center !important;\n}\n.justify-content-md-between[data-v-9cfc8a2c] {\n    justify-content: space-between !important;\n}\n.justify-content-md-around[data-v-9cfc8a2c] {\n    justify-content: space-around !important;\n}\n.justify-content-md-evenly[data-v-9cfc8a2c] {\n    justify-content: space-evenly !important;\n}\n.align-items-md-start[data-v-9cfc8a2c] {\n    align-items: flex-start !important;\n}\n.align-items-md-end[data-v-9cfc8a2c] {\n    align-items: flex-end !important;\n}\n.align-items-md-center[data-v-9cfc8a2c] {\n    align-items: center !important;\n}\n.align-items-md-baseline[data-v-9cfc8a2c] {\n    align-items: baseline !important;\n}\n.align-items-md-stretch[data-v-9cfc8a2c] {\n    align-items: stretch !important;\n}\n.align-content-md-start[data-v-9cfc8a2c] {\n    align-content: flex-start !important;\n}\n.align-content-md-end[data-v-9cfc8a2c] {\n    align-content: flex-end !important;\n}\n.align-content-md-center[data-v-9cfc8a2c] {\n    align-content: center !important;\n}\n.align-content-md-between[data-v-9cfc8a2c] {\n    align-content: space-between !important;\n}\n.align-content-md-around[data-v-9cfc8a2c] {\n    align-content: space-around !important;\n}\n.align-content-md-stretch[data-v-9cfc8a2c] {\n    align-content: stretch !important;\n}\n.align-self-md-auto[data-v-9cfc8a2c] {\n    align-self: auto !important;\n}\n.align-self-md-start[data-v-9cfc8a2c] {\n    align-self: flex-start !important;\n}\n.align-self-md-end[data-v-9cfc8a2c] {\n    align-self: flex-end !important;\n}\n.align-self-md-center[data-v-9cfc8a2c] {\n    align-self: center !important;\n}\n.align-self-md-baseline[data-v-9cfc8a2c] {\n    align-self: baseline !important;\n}\n.align-self-md-stretch[data-v-9cfc8a2c] {\n    align-self: stretch !important;\n}\n.order-md-first[data-v-9cfc8a2c] {\n    order: -1 !important;\n}\n.order-md-0[data-v-9cfc8a2c] {\n    order: 0 !important;\n}\n.order-md-1[data-v-9cfc8a2c] {\n    order: 1 !important;\n}\n.order-md-2[data-v-9cfc8a2c] {\n    order: 2 !important;\n}\n.order-md-3[data-v-9cfc8a2c] {\n    order: 3 !important;\n}\n.order-md-4[data-v-9cfc8a2c] {\n    order: 4 !important;\n}\n.order-md-5[data-v-9cfc8a2c] {\n    order: 5 !important;\n}\n.order-md-last[data-v-9cfc8a2c] {\n    order: 6 !important;\n}\n.m-md-0[data-v-9cfc8a2c] {\n    margin: 0 !important;\n}\n.m-md-1[data-v-9cfc8a2c] {\n    margin: 0.25rem !important;\n}\n.m-md-2[data-v-9cfc8a2c] {\n    margin: 0.5rem !important;\n}\n.m-md-3[data-v-9cfc8a2c] {\n    margin: 1rem !important;\n}\n.m-md-4[data-v-9cfc8a2c] {\n    margin: 1.5rem !important;\n}\n.m-md-5[data-v-9cfc8a2c] {\n    margin: 3rem !important;\n}\n.m-md-auto[data-v-9cfc8a2c] {\n    margin: auto !important;\n}\n.mx-md-0[data-v-9cfc8a2c] {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n}\n.mx-md-1[data-v-9cfc8a2c] {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n}\n.mx-md-2[data-v-9cfc8a2c] {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n}\n.mx-md-3[data-v-9cfc8a2c] {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n}\n.mx-md-4[data-v-9cfc8a2c] {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n}\n.mx-md-5[data-v-9cfc8a2c] {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n}\n.mx-md-auto[data-v-9cfc8a2c] {\n    margin-right: auto !important;\n    margin-left: auto !important;\n}\n.my-md-0[data-v-9cfc8a2c] {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n}\n.my-md-1[data-v-9cfc8a2c] {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n}\n.my-md-2[data-v-9cfc8a2c] {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n}\n.my-md-3[data-v-9cfc8a2c] {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n}\n.my-md-4[data-v-9cfc8a2c] {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n}\n.my-md-5[data-v-9cfc8a2c] {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n}\n.my-md-auto[data-v-9cfc8a2c] {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n}\n.mt-md-0[data-v-9cfc8a2c] {\n    margin-top: 0 !important;\n}\n.mt-md-1[data-v-9cfc8a2c] {\n    margin-top: 0.25rem !important;\n}\n.mt-md-2[data-v-9cfc8a2c] {\n    margin-top: 0.5rem !important;\n}\n.mt-md-3[data-v-9cfc8a2c] {\n    margin-top: 1rem !important;\n}\n.mt-md-4[data-v-9cfc8a2c] {\n    margin-top: 1.5rem !important;\n}\n.mt-md-5[data-v-9cfc8a2c] {\n    margin-top: 3rem !important;\n}\n.mt-md-auto[data-v-9cfc8a2c] {\n    margin-top: auto !important;\n}\n.me-md-0[data-v-9cfc8a2c] {\n    margin-right: 0 !important;\n}\n.me-md-1[data-v-9cfc8a2c] {\n    margin-right: 0.25rem !important;\n}\n.me-md-2[data-v-9cfc8a2c] {\n    margin-right: 0.5rem !important;\n}\n.me-md-3[data-v-9cfc8a2c] {\n    margin-right: 1rem !important;\n}\n.me-md-4[data-v-9cfc8a2c] {\n    margin-right: 1.5rem !important;\n}\n.me-md-5[data-v-9cfc8a2c] {\n    margin-right: 3rem !important;\n}\n.me-md-auto[data-v-9cfc8a2c] {\n    margin-right: auto !important;\n}\n.mb-md-0[data-v-9cfc8a2c] {\n    margin-bottom: 0 !important;\n}\n.mb-md-1[data-v-9cfc8a2c] {\n    margin-bottom: 0.25rem !important;\n}\n.mb-md-2[data-v-9cfc8a2c] {\n    margin-bottom: 0.5rem !important;\n}\n.mb-md-3[data-v-9cfc8a2c] {\n    margin-bottom: 1rem !important;\n}\n.mb-md-4[data-v-9cfc8a2c] {\n    margin-bottom: 1.5rem !important;\n}\n.mb-md-5[data-v-9cfc8a2c] {\n    margin-bottom: 3rem !important;\n}\n.mb-md-auto[data-v-9cfc8a2c] {\n    margin-bottom: auto !important;\n}\n.ms-md-0[data-v-9cfc8a2c] {\n    margin-left: 0 !important;\n}\n.ms-md-1[data-v-9cfc8a2c] {\n    margin-left: 0.25rem !important;\n}\n.ms-md-2[data-v-9cfc8a2c] {\n    margin-left: 0.5rem !important;\n}\n.ms-md-3[data-v-9cfc8a2c] {\n    margin-left: 1rem !important;\n}\n.ms-md-4[data-v-9cfc8a2c] {\n    margin-left: 1.5rem !important;\n}\n.ms-md-5[data-v-9cfc8a2c] {\n    margin-left: 3rem !important;\n}\n.ms-md-auto[data-v-9cfc8a2c] {\n    margin-left: auto !important;\n}\n.p-md-0[data-v-9cfc8a2c] {\n    padding: 0 !important;\n}\n.p-md-1[data-v-9cfc8a2c] {\n    padding: 0.25rem !important;\n}\n.p-md-2[data-v-9cfc8a2c] {\n    padding: 0.5rem !important;\n}\n.p-md-3[data-v-9cfc8a2c] {\n    padding: 1rem !important;\n}\n.p-md-4[data-v-9cfc8a2c] {\n    padding: 1.5rem !important;\n}\n.p-md-5[data-v-9cfc8a2c] {\n    padding: 3rem !important;\n}\n.px-md-0[data-v-9cfc8a2c] {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n}\n.px-md-1[data-v-9cfc8a2c] {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n}\n.px-md-2[data-v-9cfc8a2c] {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n}\n.px-md-3[data-v-9cfc8a2c] {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n}\n.px-md-4[data-v-9cfc8a2c] {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n}\n.px-md-5[data-v-9cfc8a2c] {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n}\n.py-md-0[data-v-9cfc8a2c] {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n}\n.py-md-1[data-v-9cfc8a2c] {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n}\n.py-md-2[data-v-9cfc8a2c] {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n}\n.py-md-3[data-v-9cfc8a2c] {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n}\n.py-md-4[data-v-9cfc8a2c] {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n}\n.py-md-5[data-v-9cfc8a2c] {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n}\n.pt-md-0[data-v-9cfc8a2c] {\n    padding-top: 0 !important;\n}\n.pt-md-1[data-v-9cfc8a2c] {\n    padding-top: 0.25rem !important;\n}\n.pt-md-2[data-v-9cfc8a2c] {\n    padding-top: 0.5rem !important;\n}\n.pt-md-3[data-v-9cfc8a2c] {\n    padding-top: 1rem !important;\n}\n.pt-md-4[data-v-9cfc8a2c] {\n    padding-top: 1.5rem !important;\n}\n.pt-md-5[data-v-9cfc8a2c] {\n    padding-top: 3rem !important;\n}\n.pe-md-0[data-v-9cfc8a2c] {\n    padding-right: 0 !important;\n}\n.pe-md-1[data-v-9cfc8a2c] {\n    padding-right: 0.25rem !important;\n}\n.pe-md-2[data-v-9cfc8a2c] {\n    padding-right: 0.5rem !important;\n}\n.pe-md-3[data-v-9cfc8a2c] {\n    padding-right: 1rem !important;\n}\n.pe-md-4[data-v-9cfc8a2c] {\n    padding-right: 1.5rem !important;\n}\n.pe-md-5[data-v-9cfc8a2c] {\n    padding-right: 3rem !important;\n}\n.pb-md-0[data-v-9cfc8a2c] {\n    padding-bottom: 0 !important;\n}\n.pb-md-1[data-v-9cfc8a2c] {\n    padding-bottom: 0.25rem !important;\n}\n.pb-md-2[data-v-9cfc8a2c] {\n    padding-bottom: 0.5rem !important;\n}\n.pb-md-3[data-v-9cfc8a2c] {\n    padding-bottom: 1rem !important;\n}\n.pb-md-4[data-v-9cfc8a2c] {\n    padding-bottom: 1.5rem !important;\n}\n.pb-md-5[data-v-9cfc8a2c] {\n    padding-bottom: 3rem !important;\n}\n.ps-md-0[data-v-9cfc8a2c] {\n    padding-left: 0 !important;\n}\n.ps-md-1[data-v-9cfc8a2c] {\n    padding-left: 0.25rem !important;\n}\n.ps-md-2[data-v-9cfc8a2c] {\n    padding-left: 0.5rem !important;\n}\n.ps-md-3[data-v-9cfc8a2c] {\n    padding-left: 1rem !important;\n}\n.ps-md-4[data-v-9cfc8a2c] {\n    padding-left: 1.5rem !important;\n}\n.ps-md-5[data-v-9cfc8a2c] {\n    padding-left: 3rem !important;\n}\n.gap-md-0[data-v-9cfc8a2c] {\n    gap: 0 !important;\n}\n.gap-md-1[data-v-9cfc8a2c] {\n    gap: 0.25rem !important;\n}\n.gap-md-2[data-v-9cfc8a2c] {\n    gap: 0.5rem !important;\n}\n.gap-md-3[data-v-9cfc8a2c] {\n    gap: 1rem !important;\n}\n.gap-md-4[data-v-9cfc8a2c] {\n    gap: 1.5rem !important;\n}\n.gap-md-5[data-v-9cfc8a2c] {\n    gap: 3rem !important;\n}\n.text-md-start[data-v-9cfc8a2c] {\n    text-align: left !important;\n}\n.text-md-end[data-v-9cfc8a2c] {\n    text-align: right !important;\n}\n.text-md-center[data-v-9cfc8a2c] {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.float-lg-start[data-v-9cfc8a2c] {\n    float: left !important;\n}\n.float-lg-end[data-v-9cfc8a2c] {\n    float: right !important;\n}\n.float-lg-none[data-v-9cfc8a2c] {\n    float: none !important;\n}\n.d-lg-inline[data-v-9cfc8a2c] {\n    display: inline !important;\n}\n.d-lg-inline-block[data-v-9cfc8a2c] {\n    display: inline-block !important;\n}\n.d-lg-block[data-v-9cfc8a2c] {\n    display: block !important;\n}\n.d-lg-grid[data-v-9cfc8a2c] {\n    display: grid !important;\n}\n.d-lg-table[data-v-9cfc8a2c] {\n    display: table !important;\n}\n.d-lg-table-row[data-v-9cfc8a2c] {\n    display: table-row !important;\n}\n.d-lg-table-cell[data-v-9cfc8a2c] {\n    display: table-cell !important;\n}\n.d-lg-flex[data-v-9cfc8a2c] {\n    display: flex !important;\n}\n.d-lg-inline-flex[data-v-9cfc8a2c] {\n    display: inline-flex !important;\n}\n.d-lg-none[data-v-9cfc8a2c] {\n    display: none !important;\n}\n.flex-lg-fill[data-v-9cfc8a2c] {\n    flex: 1 1 auto !important;\n}\n.flex-lg-row[data-v-9cfc8a2c] {\n    flex-direction: row !important;\n}\n.flex-lg-column[data-v-9cfc8a2c] {\n    flex-direction: column !important;\n}\n.flex-lg-row-reverse[data-v-9cfc8a2c] {\n    flex-direction: row-reverse !important;\n}\n.flex-lg-column-reverse[data-v-9cfc8a2c] {\n    flex-direction: column-reverse !important;\n}\n.flex-lg-grow-0[data-v-9cfc8a2c] {\n    flex-grow: 0 !important;\n}\n.flex-lg-grow-1[data-v-9cfc8a2c] {\n    flex-grow: 1 !important;\n}\n.flex-lg-shrink-0[data-v-9cfc8a2c] {\n    flex-shrink: 0 !important;\n}\n.flex-lg-shrink-1[data-v-9cfc8a2c] {\n    flex-shrink: 1 !important;\n}\n.flex-lg-wrap[data-v-9cfc8a2c] {\n    flex-wrap: wrap !important;\n}\n.flex-lg-nowrap[data-v-9cfc8a2c] {\n    flex-wrap: nowrap !important;\n}\n.flex-lg-wrap-reverse[data-v-9cfc8a2c] {\n    flex-wrap: wrap-reverse !important;\n}\n.justify-content-lg-start[data-v-9cfc8a2c] {\n    justify-content: flex-start !important;\n}\n.justify-content-lg-end[data-v-9cfc8a2c] {\n    justify-content: flex-end !important;\n}\n.justify-content-lg-center[data-v-9cfc8a2c] {\n    justify-content: center !important;\n}\n.justify-content-lg-between[data-v-9cfc8a2c] {\n    justify-content: space-between !important;\n}\n.justify-content-lg-around[data-v-9cfc8a2c] {\n    justify-content: space-around !important;\n}\n.justify-content-lg-evenly[data-v-9cfc8a2c] {\n    justify-content: space-evenly !important;\n}\n.align-items-lg-start[data-v-9cfc8a2c] {\n    align-items: flex-start !important;\n}\n.align-items-lg-end[data-v-9cfc8a2c] {\n    align-items: flex-end !important;\n}\n.align-items-lg-center[data-v-9cfc8a2c] {\n    align-items: center !important;\n}\n.align-items-lg-baseline[data-v-9cfc8a2c] {\n    align-items: baseline !important;\n}\n.align-items-lg-stretch[data-v-9cfc8a2c] {\n    align-items: stretch !important;\n}\n.align-content-lg-start[data-v-9cfc8a2c] {\n    align-content: flex-start !important;\n}\n.align-content-lg-end[data-v-9cfc8a2c] {\n    align-content: flex-end !important;\n}\n.align-content-lg-center[data-v-9cfc8a2c] {\n    align-content: center !important;\n}\n.align-content-lg-between[data-v-9cfc8a2c] {\n    align-content: space-between !important;\n}\n.align-content-lg-around[data-v-9cfc8a2c] {\n    align-content: space-around !important;\n}\n.align-content-lg-stretch[data-v-9cfc8a2c] {\n    align-content: stretch !important;\n}\n.align-self-lg-auto[data-v-9cfc8a2c] {\n    align-self: auto !important;\n}\n.align-self-lg-start[data-v-9cfc8a2c] {\n    align-self: flex-start !important;\n}\n.align-self-lg-end[data-v-9cfc8a2c] {\n    align-self: flex-end !important;\n}\n.align-self-lg-center[data-v-9cfc8a2c] {\n    align-self: center !important;\n}\n.align-self-lg-baseline[data-v-9cfc8a2c] {\n    align-self: baseline !important;\n}\n.align-self-lg-stretch[data-v-9cfc8a2c] {\n    align-self: stretch !important;\n}\n.order-lg-first[data-v-9cfc8a2c] {\n    order: -1 !important;\n}\n.order-lg-0[data-v-9cfc8a2c] {\n    order: 0 !important;\n}\n.order-lg-1[data-v-9cfc8a2c] {\n    order: 1 !important;\n}\n.order-lg-2[data-v-9cfc8a2c] {\n    order: 2 !important;\n}\n.order-lg-3[data-v-9cfc8a2c] {\n    order: 3 !important;\n}\n.order-lg-4[data-v-9cfc8a2c] {\n    order: 4 !important;\n}\n.order-lg-5[data-v-9cfc8a2c] {\n    order: 5 !important;\n}\n.order-lg-last[data-v-9cfc8a2c] {\n    order: 6 !important;\n}\n.m-lg-0[data-v-9cfc8a2c] {\n    margin: 0 !important;\n}\n.m-lg-1[data-v-9cfc8a2c] {\n    margin: 0.25rem !important;\n}\n.m-lg-2[data-v-9cfc8a2c] {\n    margin: 0.5rem !important;\n}\n.m-lg-3[data-v-9cfc8a2c] {\n    margin: 1rem !important;\n}\n.m-lg-4[data-v-9cfc8a2c] {\n    margin: 1.5rem !important;\n}\n.m-lg-5[data-v-9cfc8a2c] {\n    margin: 3rem !important;\n}\n.m-lg-auto[data-v-9cfc8a2c] {\n    margin: auto !important;\n}\n.mx-lg-0[data-v-9cfc8a2c] {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n}\n.mx-lg-1[data-v-9cfc8a2c] {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n}\n.mx-lg-2[data-v-9cfc8a2c] {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n}\n.mx-lg-3[data-v-9cfc8a2c] {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n}\n.mx-lg-4[data-v-9cfc8a2c] {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n}\n.mx-lg-5[data-v-9cfc8a2c] {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n}\n.mx-lg-auto[data-v-9cfc8a2c] {\n    margin-right: auto !important;\n    margin-left: auto !important;\n}\n.my-lg-0[data-v-9cfc8a2c] {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n}\n.my-lg-1[data-v-9cfc8a2c] {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n}\n.my-lg-2[data-v-9cfc8a2c] {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n}\n.my-lg-3[data-v-9cfc8a2c] {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n}\n.my-lg-4[data-v-9cfc8a2c] {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n}\n.my-lg-5[data-v-9cfc8a2c] {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n}\n.my-lg-auto[data-v-9cfc8a2c] {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n}\n.mt-lg-0[data-v-9cfc8a2c] {\n    margin-top: 0 !important;\n}\n.mt-lg-1[data-v-9cfc8a2c] {\n    margin-top: 0.25rem !important;\n}\n.mt-lg-2[data-v-9cfc8a2c] {\n    margin-top: 0.5rem !important;\n}\n.mt-lg-3[data-v-9cfc8a2c] {\n    margin-top: 1rem !important;\n}\n.mt-lg-4[data-v-9cfc8a2c] {\n    margin-top: 1.5rem !important;\n}\n.mt-lg-5[data-v-9cfc8a2c] {\n    margin-top: 3rem !important;\n}\n.mt-lg-auto[data-v-9cfc8a2c] {\n    margin-top: auto !important;\n}\n.me-lg-0[data-v-9cfc8a2c] {\n    margin-right: 0 !important;\n}\n.me-lg-1[data-v-9cfc8a2c] {\n    margin-right: 0.25rem !important;\n}\n.me-lg-2[data-v-9cfc8a2c] {\n    margin-right: 0.5rem !important;\n}\n.me-lg-3[data-v-9cfc8a2c] {\n    margin-right: 1rem !important;\n}\n.me-lg-4[data-v-9cfc8a2c] {\n    margin-right: 1.5rem !important;\n}\n.me-lg-5[data-v-9cfc8a2c] {\n    margin-right: 3rem !important;\n}\n.me-lg-auto[data-v-9cfc8a2c] {\n    margin-right: auto !important;\n}\n.mb-lg-0[data-v-9cfc8a2c] {\n    margin-bottom: 0 !important;\n}\n.mb-lg-1[data-v-9cfc8a2c] {\n    margin-bottom: 0.25rem !important;\n}\n.mb-lg-2[data-v-9cfc8a2c] {\n    margin-bottom: 0.5rem !important;\n}\n.mb-lg-3[data-v-9cfc8a2c] {\n    margin-bottom: 1rem !important;\n}\n.mb-lg-4[data-v-9cfc8a2c] {\n    margin-bottom: 1.5rem !important;\n}\n.mb-lg-5[data-v-9cfc8a2c] {\n    margin-bottom: 3rem !important;\n}\n.mb-lg-auto[data-v-9cfc8a2c] {\n    margin-bottom: auto !important;\n}\n.ms-lg-0[data-v-9cfc8a2c] {\n    margin-left: 0 !important;\n}\n.ms-lg-1[data-v-9cfc8a2c] {\n    margin-left: 0.25rem !important;\n}\n.ms-lg-2[data-v-9cfc8a2c] {\n    margin-left: 0.5rem !important;\n}\n.ms-lg-3[data-v-9cfc8a2c] {\n    margin-left: 1rem !important;\n}\n.ms-lg-4[data-v-9cfc8a2c] {\n    margin-left: 1.5rem !important;\n}\n.ms-lg-5[data-v-9cfc8a2c] {\n    margin-left: 3rem !important;\n}\n.ms-lg-auto[data-v-9cfc8a2c] {\n    margin-left: auto !important;\n}\n.p-lg-0[data-v-9cfc8a2c] {\n    padding: 0 !important;\n}\n.p-lg-1[data-v-9cfc8a2c] {\n    padding: 0.25rem !important;\n}\n.p-lg-2[data-v-9cfc8a2c] {\n    padding: 0.5rem !important;\n}\n.p-lg-3[data-v-9cfc8a2c] {\n    padding: 1rem !important;\n}\n.p-lg-4[data-v-9cfc8a2c] {\n    padding: 1.5rem !important;\n}\n.p-lg-5[data-v-9cfc8a2c] {\n    padding: 3rem !important;\n}\n.px-lg-0[data-v-9cfc8a2c] {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n}\n.px-lg-1[data-v-9cfc8a2c] {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n}\n.px-lg-2[data-v-9cfc8a2c] {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n}\n.px-lg-3[data-v-9cfc8a2c] {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n}\n.px-lg-4[data-v-9cfc8a2c] {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n}\n.px-lg-5[data-v-9cfc8a2c] {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n}\n.py-lg-0[data-v-9cfc8a2c] {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n}\n.py-lg-1[data-v-9cfc8a2c] {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n}\n.py-lg-2[data-v-9cfc8a2c] {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n}\n.py-lg-3[data-v-9cfc8a2c] {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n}\n.py-lg-4[data-v-9cfc8a2c] {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n}\n.py-lg-5[data-v-9cfc8a2c] {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n}\n.pt-lg-0[data-v-9cfc8a2c] {\n    padding-top: 0 !important;\n}\n.pt-lg-1[data-v-9cfc8a2c] {\n    padding-top: 0.25rem !important;\n}\n.pt-lg-2[data-v-9cfc8a2c] {\n    padding-top: 0.5rem !important;\n}\n.pt-lg-3[data-v-9cfc8a2c] {\n    padding-top: 1rem !important;\n}\n.pt-lg-4[data-v-9cfc8a2c] {\n    padding-top: 1.5rem !important;\n}\n.pt-lg-5[data-v-9cfc8a2c] {\n    padding-top: 3rem !important;\n}\n.pe-lg-0[data-v-9cfc8a2c] {\n    padding-right: 0 !important;\n}\n.pe-lg-1[data-v-9cfc8a2c] {\n    padding-right: 0.25rem !important;\n}\n.pe-lg-2[data-v-9cfc8a2c] {\n    padding-right: 0.5rem !important;\n}\n.pe-lg-3[data-v-9cfc8a2c] {\n    padding-right: 1rem !important;\n}\n.pe-lg-4[data-v-9cfc8a2c] {\n    padding-right: 1.5rem !important;\n}\n.pe-lg-5[data-v-9cfc8a2c] {\n    padding-right: 3rem !important;\n}\n.pb-lg-0[data-v-9cfc8a2c] {\n    padding-bottom: 0 !important;\n}\n.pb-lg-1[data-v-9cfc8a2c] {\n    padding-bottom: 0.25rem !important;\n}\n.pb-lg-2[data-v-9cfc8a2c] {\n    padding-bottom: 0.5rem !important;\n}\n.pb-lg-3[data-v-9cfc8a2c] {\n    padding-bottom: 1rem !important;\n}\n.pb-lg-4[data-v-9cfc8a2c] {\n    padding-bottom: 1.5rem !important;\n}\n.pb-lg-5[data-v-9cfc8a2c] {\n    padding-bottom: 3rem !important;\n}\n.ps-lg-0[data-v-9cfc8a2c] {\n    padding-left: 0 !important;\n}\n.ps-lg-1[data-v-9cfc8a2c] {\n    padding-left: 0.25rem !important;\n}\n.ps-lg-2[data-v-9cfc8a2c] {\n    padding-left: 0.5rem !important;\n}\n.ps-lg-3[data-v-9cfc8a2c] {\n    padding-left: 1rem !important;\n}\n.ps-lg-4[data-v-9cfc8a2c] {\n    padding-left: 1.5rem !important;\n}\n.ps-lg-5[data-v-9cfc8a2c] {\n    padding-left: 3rem !important;\n}\n.gap-lg-0[data-v-9cfc8a2c] {\n    gap: 0 !important;\n}\n.gap-lg-1[data-v-9cfc8a2c] {\n    gap: 0.25rem !important;\n}\n.gap-lg-2[data-v-9cfc8a2c] {\n    gap: 0.5rem !important;\n}\n.gap-lg-3[data-v-9cfc8a2c] {\n    gap: 1rem !important;\n}\n.gap-lg-4[data-v-9cfc8a2c] {\n    gap: 1.5rem !important;\n}\n.gap-lg-5[data-v-9cfc8a2c] {\n    gap: 3rem !important;\n}\n.text-lg-start[data-v-9cfc8a2c] {\n    text-align: left !important;\n}\n.text-lg-end[data-v-9cfc8a2c] {\n    text-align: right !important;\n}\n.text-lg-center[data-v-9cfc8a2c] {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.float-xl-start[data-v-9cfc8a2c] {\n    float: left !important;\n}\n.float-xl-end[data-v-9cfc8a2c] {\n    float: right !important;\n}\n.float-xl-none[data-v-9cfc8a2c] {\n    float: none !important;\n}\n.d-xl-inline[data-v-9cfc8a2c] {\n    display: inline !important;\n}\n.d-xl-inline-block[data-v-9cfc8a2c] {\n    display: inline-block !important;\n}\n.d-xl-block[data-v-9cfc8a2c] {\n    display: block !important;\n}\n.d-xl-grid[data-v-9cfc8a2c] {\n    display: grid !important;\n}\n.d-xl-table[data-v-9cfc8a2c] {\n    display: table !important;\n}\n.d-xl-table-row[data-v-9cfc8a2c] {\n    display: table-row !important;\n}\n.d-xl-table-cell[data-v-9cfc8a2c] {\n    display: table-cell !important;\n}\n.d-xl-flex[data-v-9cfc8a2c] {\n    display: flex !important;\n}\n.d-xl-inline-flex[data-v-9cfc8a2c] {\n    display: inline-flex !important;\n}\n.d-xl-none[data-v-9cfc8a2c] {\n    display: none !important;\n}\n.flex-xl-fill[data-v-9cfc8a2c] {\n    flex: 1 1 auto !important;\n}\n.flex-xl-row[data-v-9cfc8a2c] {\n    flex-direction: row !important;\n}\n.flex-xl-column[data-v-9cfc8a2c] {\n    flex-direction: column !important;\n}\n.flex-xl-row-reverse[data-v-9cfc8a2c] {\n    flex-direction: row-reverse !important;\n}\n.flex-xl-column-reverse[data-v-9cfc8a2c] {\n    flex-direction: column-reverse !important;\n}\n.flex-xl-grow-0[data-v-9cfc8a2c] {\n    flex-grow: 0 !important;\n}\n.flex-xl-grow-1[data-v-9cfc8a2c] {\n    flex-grow: 1 !important;\n}\n.flex-xl-shrink-0[data-v-9cfc8a2c] {\n    flex-shrink: 0 !important;\n}\n.flex-xl-shrink-1[data-v-9cfc8a2c] {\n    flex-shrink: 1 !important;\n}\n.flex-xl-wrap[data-v-9cfc8a2c] {\n    flex-wrap: wrap !important;\n}\n.flex-xl-nowrap[data-v-9cfc8a2c] {\n    flex-wrap: nowrap !important;\n}\n.flex-xl-wrap-reverse[data-v-9cfc8a2c] {\n    flex-wrap: wrap-reverse !important;\n}\n.justify-content-xl-start[data-v-9cfc8a2c] {\n    justify-content: flex-start !important;\n}\n.justify-content-xl-end[data-v-9cfc8a2c] {\n    justify-content: flex-end !important;\n}\n.justify-content-xl-center[data-v-9cfc8a2c] {\n    justify-content: center !important;\n}\n.justify-content-xl-between[data-v-9cfc8a2c] {\n    justify-content: space-between !important;\n}\n.justify-content-xl-around[data-v-9cfc8a2c] {\n    justify-content: space-around !important;\n}\n.justify-content-xl-evenly[data-v-9cfc8a2c] {\n    justify-content: space-evenly !important;\n}\n.align-items-xl-start[data-v-9cfc8a2c] {\n    align-items: flex-start !important;\n}\n.align-items-xl-end[data-v-9cfc8a2c] {\n    align-items: flex-end !important;\n}\n.align-items-xl-center[data-v-9cfc8a2c] {\n    align-items: center !important;\n}\n.align-items-xl-baseline[data-v-9cfc8a2c] {\n    align-items: baseline !important;\n}\n.align-items-xl-stretch[data-v-9cfc8a2c] {\n    align-items: stretch !important;\n}\n.align-content-xl-start[data-v-9cfc8a2c] {\n    align-content: flex-start !important;\n}\n.align-content-xl-end[data-v-9cfc8a2c] {\n    align-content: flex-end !important;\n}\n.align-content-xl-center[data-v-9cfc8a2c] {\n    align-content: center !important;\n}\n.align-content-xl-between[data-v-9cfc8a2c] {\n    align-content: space-between !important;\n}\n.align-content-xl-around[data-v-9cfc8a2c] {\n    align-content: space-around !important;\n}\n.align-content-xl-stretch[data-v-9cfc8a2c] {\n    align-content: stretch !important;\n}\n.align-self-xl-auto[data-v-9cfc8a2c] {\n    align-self: auto !important;\n}\n.align-self-xl-start[data-v-9cfc8a2c] {\n    align-self: flex-start !important;\n}\n.align-self-xl-end[data-v-9cfc8a2c] {\n    align-self: flex-end !important;\n}\n.align-self-xl-center[data-v-9cfc8a2c] {\n    align-self: center !important;\n}\n.align-self-xl-baseline[data-v-9cfc8a2c] {\n    align-self: baseline !important;\n}\n.align-self-xl-stretch[data-v-9cfc8a2c] {\n    align-self: stretch !important;\n}\n.order-xl-first[data-v-9cfc8a2c] {\n    order: -1 !important;\n}\n.order-xl-0[data-v-9cfc8a2c] {\n    order: 0 !important;\n}\n.order-xl-1[data-v-9cfc8a2c] {\n    order: 1 !important;\n}\n.order-xl-2[data-v-9cfc8a2c] {\n    order: 2 !important;\n}\n.order-xl-3[data-v-9cfc8a2c] {\n    order: 3 !important;\n}\n.order-xl-4[data-v-9cfc8a2c] {\n    order: 4 !important;\n}\n.order-xl-5[data-v-9cfc8a2c] {\n    order: 5 !important;\n}\n.order-xl-last[data-v-9cfc8a2c] {\n    order: 6 !important;\n}\n.m-xl-0[data-v-9cfc8a2c] {\n    margin: 0 !important;\n}\n.m-xl-1[data-v-9cfc8a2c] {\n    margin: 0.25rem !important;\n}\n.m-xl-2[data-v-9cfc8a2c] {\n    margin: 0.5rem !important;\n}\n.m-xl-3[data-v-9cfc8a2c] {\n    margin: 1rem !important;\n}\n.m-xl-4[data-v-9cfc8a2c] {\n    margin: 1.5rem !important;\n}\n.m-xl-5[data-v-9cfc8a2c] {\n    margin: 3rem !important;\n}\n.m-xl-auto[data-v-9cfc8a2c] {\n    margin: auto !important;\n}\n.mx-xl-0[data-v-9cfc8a2c] {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n}\n.mx-xl-1[data-v-9cfc8a2c] {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n}\n.mx-xl-2[data-v-9cfc8a2c] {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n}\n.mx-xl-3[data-v-9cfc8a2c] {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n}\n.mx-xl-4[data-v-9cfc8a2c] {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n}\n.mx-xl-5[data-v-9cfc8a2c] {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n}\n.mx-xl-auto[data-v-9cfc8a2c] {\n    margin-right: auto !important;\n    margin-left: auto !important;\n}\n.my-xl-0[data-v-9cfc8a2c] {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n}\n.my-xl-1[data-v-9cfc8a2c] {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n}\n.my-xl-2[data-v-9cfc8a2c] {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n}\n.my-xl-3[data-v-9cfc8a2c] {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n}\n.my-xl-4[data-v-9cfc8a2c] {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n}\n.my-xl-5[data-v-9cfc8a2c] {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n}\n.my-xl-auto[data-v-9cfc8a2c] {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n}\n.mt-xl-0[data-v-9cfc8a2c] {\n    margin-top: 0 !important;\n}\n.mt-xl-1[data-v-9cfc8a2c] {\n    margin-top: 0.25rem !important;\n}\n.mt-xl-2[data-v-9cfc8a2c] {\n    margin-top: 0.5rem !important;\n}\n.mt-xl-3[data-v-9cfc8a2c] {\n    margin-top: 1rem !important;\n}\n.mt-xl-4[data-v-9cfc8a2c] {\n    margin-top: 1.5rem !important;\n}\n.mt-xl-5[data-v-9cfc8a2c] {\n    margin-top: 3rem !important;\n}\n.mt-xl-auto[data-v-9cfc8a2c] {\n    margin-top: auto !important;\n}\n.me-xl-0[data-v-9cfc8a2c] {\n    margin-right: 0 !important;\n}\n.me-xl-1[data-v-9cfc8a2c] {\n    margin-right: 0.25rem !important;\n}\n.me-xl-2[data-v-9cfc8a2c] {\n    margin-right: 0.5rem !important;\n}\n.me-xl-3[data-v-9cfc8a2c] {\n    margin-right: 1rem !important;\n}\n.me-xl-4[data-v-9cfc8a2c] {\n    margin-right: 1.5rem !important;\n}\n.me-xl-5[data-v-9cfc8a2c] {\n    margin-right: 3rem !important;\n}\n.me-xl-auto[data-v-9cfc8a2c] {\n    margin-right: auto !important;\n}\n.mb-xl-0[data-v-9cfc8a2c] {\n    margin-bottom: 0 !important;\n}\n.mb-xl-1[data-v-9cfc8a2c] {\n    margin-bottom: 0.25rem !important;\n}\n.mb-xl-2[data-v-9cfc8a2c] {\n    margin-bottom: 0.5rem !important;\n}\n.mb-xl-3[data-v-9cfc8a2c] {\n    margin-bottom: 1rem !important;\n}\n.mb-xl-4[data-v-9cfc8a2c] {\n    margin-bottom: 1.5rem !important;\n}\n.mb-xl-5[data-v-9cfc8a2c] {\n    margin-bottom: 3rem !important;\n}\n.mb-xl-auto[data-v-9cfc8a2c] {\n    margin-bottom: auto !important;\n}\n.ms-xl-0[data-v-9cfc8a2c] {\n    margin-left: 0 !important;\n}\n.ms-xl-1[data-v-9cfc8a2c] {\n    margin-left: 0.25rem !important;\n}\n.ms-xl-2[data-v-9cfc8a2c] {\n    margin-left: 0.5rem !important;\n}\n.ms-xl-3[data-v-9cfc8a2c] {\n    margin-left: 1rem !important;\n}\n.ms-xl-4[data-v-9cfc8a2c] {\n    margin-left: 1.5rem !important;\n}\n.ms-xl-5[data-v-9cfc8a2c] {\n    margin-left: 3rem !important;\n}\n.ms-xl-auto[data-v-9cfc8a2c] {\n    margin-left: auto !important;\n}\n.p-xl-0[data-v-9cfc8a2c] {\n    padding: 0 !important;\n}\n.p-xl-1[data-v-9cfc8a2c] {\n    padding: 0.25rem !important;\n}\n.p-xl-2[data-v-9cfc8a2c] {\n    padding: 0.5rem !important;\n}\n.p-xl-3[data-v-9cfc8a2c] {\n    padding: 1rem !important;\n}\n.p-xl-4[data-v-9cfc8a2c] {\n    padding: 1.5rem !important;\n}\n.p-xl-5[data-v-9cfc8a2c] {\n    padding: 3rem !important;\n}\n.px-xl-0[data-v-9cfc8a2c] {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n}\n.px-xl-1[data-v-9cfc8a2c] {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n}\n.px-xl-2[data-v-9cfc8a2c] {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n}\n.px-xl-3[data-v-9cfc8a2c] {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n}\n.px-xl-4[data-v-9cfc8a2c] {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n}\n.px-xl-5[data-v-9cfc8a2c] {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n}\n.py-xl-0[data-v-9cfc8a2c] {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n}\n.py-xl-1[data-v-9cfc8a2c] {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n}\n.py-xl-2[data-v-9cfc8a2c] {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n}\n.py-xl-3[data-v-9cfc8a2c] {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n}\n.py-xl-4[data-v-9cfc8a2c] {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n}\n.py-xl-5[data-v-9cfc8a2c] {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n}\n.pt-xl-0[data-v-9cfc8a2c] {\n    padding-top: 0 !important;\n}\n.pt-xl-1[data-v-9cfc8a2c] {\n    padding-top: 0.25rem !important;\n}\n.pt-xl-2[data-v-9cfc8a2c] {\n    padding-top: 0.5rem !important;\n}\n.pt-xl-3[data-v-9cfc8a2c] {\n    padding-top: 1rem !important;\n}\n.pt-xl-4[data-v-9cfc8a2c] {\n    padding-top: 1.5rem !important;\n}\n.pt-xl-5[data-v-9cfc8a2c] {\n    padding-top: 3rem !important;\n}\n.pe-xl-0[data-v-9cfc8a2c] {\n    padding-right: 0 !important;\n}\n.pe-xl-1[data-v-9cfc8a2c] {\n    padding-right: 0.25rem !important;\n}\n.pe-xl-2[data-v-9cfc8a2c] {\n    padding-right: 0.5rem !important;\n}\n.pe-xl-3[data-v-9cfc8a2c] {\n    padding-right: 1rem !important;\n}\n.pe-xl-4[data-v-9cfc8a2c] {\n    padding-right: 1.5rem !important;\n}\n.pe-xl-5[data-v-9cfc8a2c] {\n    padding-right: 3rem !important;\n}\n.pb-xl-0[data-v-9cfc8a2c] {\n    padding-bottom: 0 !important;\n}\n.pb-xl-1[data-v-9cfc8a2c] {\n    padding-bottom: 0.25rem !important;\n}\n.pb-xl-2[data-v-9cfc8a2c] {\n    padding-bottom: 0.5rem !important;\n}\n.pb-xl-3[data-v-9cfc8a2c] {\n    padding-bottom: 1rem !important;\n}\n.pb-xl-4[data-v-9cfc8a2c] {\n    padding-bottom: 1.5rem !important;\n}\n.pb-xl-5[data-v-9cfc8a2c] {\n    padding-bottom: 3rem !important;\n}\n.ps-xl-0[data-v-9cfc8a2c] {\n    padding-left: 0 !important;\n}\n.ps-xl-1[data-v-9cfc8a2c] {\n    padding-left: 0.25rem !important;\n}\n.ps-xl-2[data-v-9cfc8a2c] {\n    padding-left: 0.5rem !important;\n}\n.ps-xl-3[data-v-9cfc8a2c] {\n    padding-left: 1rem !important;\n}\n.ps-xl-4[data-v-9cfc8a2c] {\n    padding-left: 1.5rem !important;\n}\n.ps-xl-5[data-v-9cfc8a2c] {\n    padding-left: 3rem !important;\n}\n.gap-xl-0[data-v-9cfc8a2c] {\n    gap: 0 !important;\n}\n.gap-xl-1[data-v-9cfc8a2c] {\n    gap: 0.25rem !important;\n}\n.gap-xl-2[data-v-9cfc8a2c] {\n    gap: 0.5rem !important;\n}\n.gap-xl-3[data-v-9cfc8a2c] {\n    gap: 1rem !important;\n}\n.gap-xl-4[data-v-9cfc8a2c] {\n    gap: 1.5rem !important;\n}\n.gap-xl-5[data-v-9cfc8a2c] {\n    gap: 3rem !important;\n}\n.text-xl-start[data-v-9cfc8a2c] {\n    text-align: left !important;\n}\n.text-xl-end[data-v-9cfc8a2c] {\n    text-align: right !important;\n}\n.text-xl-center[data-v-9cfc8a2c] {\n    text-align: center !important;\n}\n}\n@media (min-width: 1400px) {\n.float-xxl-start[data-v-9cfc8a2c] {\n    float: left !important;\n}\n.float-xxl-end[data-v-9cfc8a2c] {\n    float: right !important;\n}\n.float-xxl-none[data-v-9cfc8a2c] {\n    float: none !important;\n}\n.d-xxl-inline[data-v-9cfc8a2c] {\n    display: inline !important;\n}\n.d-xxl-inline-block[data-v-9cfc8a2c] {\n    display: inline-block !important;\n}\n.d-xxl-block[data-v-9cfc8a2c] {\n    display: block !important;\n}\n.d-xxl-grid[data-v-9cfc8a2c] {\n    display: grid !important;\n}\n.d-xxl-table[data-v-9cfc8a2c] {\n    display: table !important;\n}\n.d-xxl-table-row[data-v-9cfc8a2c] {\n    display: table-row !important;\n}\n.d-xxl-table-cell[data-v-9cfc8a2c] {\n    display: table-cell !important;\n}\n.d-xxl-flex[data-v-9cfc8a2c] {\n    display: flex !important;\n}\n.d-xxl-inline-flex[data-v-9cfc8a2c] {\n    display: inline-flex !important;\n}\n.d-xxl-none[data-v-9cfc8a2c] {\n    display: none !important;\n}\n.flex-xxl-fill[data-v-9cfc8a2c] {\n    flex: 1 1 auto !important;\n}\n.flex-xxl-row[data-v-9cfc8a2c] {\n    flex-direction: row !important;\n}\n.flex-xxl-column[data-v-9cfc8a2c] {\n    flex-direction: column !important;\n}\n.flex-xxl-row-reverse[data-v-9cfc8a2c] {\n    flex-direction: row-reverse !important;\n}\n.flex-xxl-column-reverse[data-v-9cfc8a2c] {\n    flex-direction: column-reverse !important;\n}\n.flex-xxl-grow-0[data-v-9cfc8a2c] {\n    flex-grow: 0 !important;\n}\n.flex-xxl-grow-1[data-v-9cfc8a2c] {\n    flex-grow: 1 !important;\n}\n.flex-xxl-shrink-0[data-v-9cfc8a2c] {\n    flex-shrink: 0 !important;\n}\n.flex-xxl-shrink-1[data-v-9cfc8a2c] {\n    flex-shrink: 1 !important;\n}\n.flex-xxl-wrap[data-v-9cfc8a2c] {\n    flex-wrap: wrap !important;\n}\n.flex-xxl-nowrap[data-v-9cfc8a2c] {\n    flex-wrap: nowrap !important;\n}\n.flex-xxl-wrap-reverse[data-v-9cfc8a2c] {\n    flex-wrap: wrap-reverse !important;\n}\n.justify-content-xxl-start[data-v-9cfc8a2c] {\n    justify-content: flex-start !important;\n}\n.justify-content-xxl-end[data-v-9cfc8a2c] {\n    justify-content: flex-end !important;\n}\n.justify-content-xxl-center[data-v-9cfc8a2c] {\n    justify-content: center !important;\n}\n.justify-content-xxl-between[data-v-9cfc8a2c] {\n    justify-content: space-between !important;\n}\n.justify-content-xxl-around[data-v-9cfc8a2c] {\n    justify-content: space-around !important;\n}\n.justify-content-xxl-evenly[data-v-9cfc8a2c] {\n    justify-content: space-evenly !important;\n}\n.align-items-xxl-start[data-v-9cfc8a2c] {\n    align-items: flex-start !important;\n}\n.align-items-xxl-end[data-v-9cfc8a2c] {\n    align-items: flex-end !important;\n}\n.align-items-xxl-center[data-v-9cfc8a2c] {\n    align-items: center !important;\n}\n.align-items-xxl-baseline[data-v-9cfc8a2c] {\n    align-items: baseline !important;\n}\n.align-items-xxl-stretch[data-v-9cfc8a2c] {\n    align-items: stretch !important;\n}\n.align-content-xxl-start[data-v-9cfc8a2c] {\n    align-content: flex-start !important;\n}\n.align-content-xxl-end[data-v-9cfc8a2c] {\n    align-content: flex-end !important;\n}\n.align-content-xxl-center[data-v-9cfc8a2c] {\n    align-content: center !important;\n}\n.align-content-xxl-between[data-v-9cfc8a2c] {\n    align-content: space-between !important;\n}\n.align-content-xxl-around[data-v-9cfc8a2c] {\n    align-content: space-around !important;\n}\n.align-content-xxl-stretch[data-v-9cfc8a2c] {\n    align-content: stretch !important;\n}\n.align-self-xxl-auto[data-v-9cfc8a2c] {\n    align-self: auto !important;\n}\n.align-self-xxl-start[data-v-9cfc8a2c] {\n    align-self: flex-start !important;\n}\n.align-self-xxl-end[data-v-9cfc8a2c] {\n    align-self: flex-end !important;\n}\n.align-self-xxl-center[data-v-9cfc8a2c] {\n    align-self: center !important;\n}\n.align-self-xxl-baseline[data-v-9cfc8a2c] {\n    align-self: baseline !important;\n}\n.align-self-xxl-stretch[data-v-9cfc8a2c] {\n    align-self: stretch !important;\n}\n.order-xxl-first[data-v-9cfc8a2c] {\n    order: -1 !important;\n}\n.order-xxl-0[data-v-9cfc8a2c] {\n    order: 0 !important;\n}\n.order-xxl-1[data-v-9cfc8a2c] {\n    order: 1 !important;\n}\n.order-xxl-2[data-v-9cfc8a2c] {\n    order: 2 !important;\n}\n.order-xxl-3[data-v-9cfc8a2c] {\n    order: 3 !important;\n}\n.order-xxl-4[data-v-9cfc8a2c] {\n    order: 4 !important;\n}\n.order-xxl-5[data-v-9cfc8a2c] {\n    order: 5 !important;\n}\n.order-xxl-last[data-v-9cfc8a2c] {\n    order: 6 !important;\n}\n.m-xxl-0[data-v-9cfc8a2c] {\n    margin: 0 !important;\n}\n.m-xxl-1[data-v-9cfc8a2c] {\n    margin: 0.25rem !important;\n}\n.m-xxl-2[data-v-9cfc8a2c] {\n    margin: 0.5rem !important;\n}\n.m-xxl-3[data-v-9cfc8a2c] {\n    margin: 1rem !important;\n}\n.m-xxl-4[data-v-9cfc8a2c] {\n    margin: 1.5rem !important;\n}\n.m-xxl-5[data-v-9cfc8a2c] {\n    margin: 3rem !important;\n}\n.m-xxl-auto[data-v-9cfc8a2c] {\n    margin: auto !important;\n}\n.mx-xxl-0[data-v-9cfc8a2c] {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n}\n.mx-xxl-1[data-v-9cfc8a2c] {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n}\n.mx-xxl-2[data-v-9cfc8a2c] {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n}\n.mx-xxl-3[data-v-9cfc8a2c] {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n}\n.mx-xxl-4[data-v-9cfc8a2c] {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n}\n.mx-xxl-5[data-v-9cfc8a2c] {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n}\n.mx-xxl-auto[data-v-9cfc8a2c] {\n    margin-right: auto !important;\n    margin-left: auto !important;\n}\n.my-xxl-0[data-v-9cfc8a2c] {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n}\n.my-xxl-1[data-v-9cfc8a2c] {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n}\n.my-xxl-2[data-v-9cfc8a2c] {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n}\n.my-xxl-3[data-v-9cfc8a2c] {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n}\n.my-xxl-4[data-v-9cfc8a2c] {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n}\n.my-xxl-5[data-v-9cfc8a2c] {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n}\n.my-xxl-auto[data-v-9cfc8a2c] {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n}\n.mt-xxl-0[data-v-9cfc8a2c] {\n    margin-top: 0 !important;\n}\n.mt-xxl-1[data-v-9cfc8a2c] {\n    margin-top: 0.25rem !important;\n}\n.mt-xxl-2[data-v-9cfc8a2c] {\n    margin-top: 0.5rem !important;\n}\n.mt-xxl-3[data-v-9cfc8a2c] {\n    margin-top: 1rem !important;\n}\n.mt-xxl-4[data-v-9cfc8a2c] {\n    margin-top: 1.5rem !important;\n}\n.mt-xxl-5[data-v-9cfc8a2c] {\n    margin-top: 3rem !important;\n}\n.mt-xxl-auto[data-v-9cfc8a2c] {\n    margin-top: auto !important;\n}\n.me-xxl-0[data-v-9cfc8a2c] {\n    margin-right: 0 !important;\n}\n.me-xxl-1[data-v-9cfc8a2c] {\n    margin-right: 0.25rem !important;\n}\n.me-xxl-2[data-v-9cfc8a2c] {\n    margin-right: 0.5rem !important;\n}\n.me-xxl-3[data-v-9cfc8a2c] {\n    margin-right: 1rem !important;\n}\n.me-xxl-4[data-v-9cfc8a2c] {\n    margin-right: 1.5rem !important;\n}\n.me-xxl-5[data-v-9cfc8a2c] {\n    margin-right: 3rem !important;\n}\n.me-xxl-auto[data-v-9cfc8a2c] {\n    margin-right: auto !important;\n}\n.mb-xxl-0[data-v-9cfc8a2c] {\n    margin-bottom: 0 !important;\n}\n.mb-xxl-1[data-v-9cfc8a2c] {\n    margin-bottom: 0.25rem !important;\n}\n.mb-xxl-2[data-v-9cfc8a2c] {\n    margin-bottom: 0.5rem !important;\n}\n.mb-xxl-3[data-v-9cfc8a2c] {\n    margin-bottom: 1rem !important;\n}\n.mb-xxl-4[data-v-9cfc8a2c] {\n    margin-bottom: 1.5rem !important;\n}\n.mb-xxl-5[data-v-9cfc8a2c] {\n    margin-bottom: 3rem !important;\n}\n.mb-xxl-auto[data-v-9cfc8a2c] {\n    margin-bottom: auto !important;\n}\n.ms-xxl-0[data-v-9cfc8a2c] {\n    margin-left: 0 !important;\n}\n.ms-xxl-1[data-v-9cfc8a2c] {\n    margin-left: 0.25rem !important;\n}\n.ms-xxl-2[data-v-9cfc8a2c] {\n    margin-left: 0.5rem !important;\n}\n.ms-xxl-3[data-v-9cfc8a2c] {\n    margin-left: 1rem !important;\n}\n.ms-xxl-4[data-v-9cfc8a2c] {\n    margin-left: 1.5rem !important;\n}\n.ms-xxl-5[data-v-9cfc8a2c] {\n    margin-left: 3rem !important;\n}\n.ms-xxl-auto[data-v-9cfc8a2c] {\n    margin-left: auto !important;\n}\n.p-xxl-0[data-v-9cfc8a2c] {\n    padding: 0 !important;\n}\n.p-xxl-1[data-v-9cfc8a2c] {\n    padding: 0.25rem !important;\n}\n.p-xxl-2[data-v-9cfc8a2c] {\n    padding: 0.5rem !important;\n}\n.p-xxl-3[data-v-9cfc8a2c] {\n    padding: 1rem !important;\n}\n.p-xxl-4[data-v-9cfc8a2c] {\n    padding: 1.5rem !important;\n}\n.p-xxl-5[data-v-9cfc8a2c] {\n    padding: 3rem !important;\n}\n.px-xxl-0[data-v-9cfc8a2c] {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n}\n.px-xxl-1[data-v-9cfc8a2c] {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n}\n.px-xxl-2[data-v-9cfc8a2c] {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n}\n.px-xxl-3[data-v-9cfc8a2c] {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n}\n.px-xxl-4[data-v-9cfc8a2c] {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n}\n.px-xxl-5[data-v-9cfc8a2c] {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n}\n.py-xxl-0[data-v-9cfc8a2c] {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n}\n.py-xxl-1[data-v-9cfc8a2c] {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n}\n.py-xxl-2[data-v-9cfc8a2c] {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n}\n.py-xxl-3[data-v-9cfc8a2c] {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n}\n.py-xxl-4[data-v-9cfc8a2c] {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n}\n.py-xxl-5[data-v-9cfc8a2c] {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n}\n.pt-xxl-0[data-v-9cfc8a2c] {\n    padding-top: 0 !important;\n}\n.pt-xxl-1[data-v-9cfc8a2c] {\n    padding-top: 0.25rem !important;\n}\n.pt-xxl-2[data-v-9cfc8a2c] {\n    padding-top: 0.5rem !important;\n}\n.pt-xxl-3[data-v-9cfc8a2c] {\n    padding-top: 1rem !important;\n}\n.pt-xxl-4[data-v-9cfc8a2c] {\n    padding-top: 1.5rem !important;\n}\n.pt-xxl-5[data-v-9cfc8a2c] {\n    padding-top: 3rem !important;\n}\n.pe-xxl-0[data-v-9cfc8a2c] {\n    padding-right: 0 !important;\n}\n.pe-xxl-1[data-v-9cfc8a2c] {\n    padding-right: 0.25rem !important;\n}\n.pe-xxl-2[data-v-9cfc8a2c] {\n    padding-right: 0.5rem !important;\n}\n.pe-xxl-3[data-v-9cfc8a2c] {\n    padding-right: 1rem !important;\n}\n.pe-xxl-4[data-v-9cfc8a2c] {\n    padding-right: 1.5rem !important;\n}\n.pe-xxl-5[data-v-9cfc8a2c] {\n    padding-right: 3rem !important;\n}\n.pb-xxl-0[data-v-9cfc8a2c] {\n    padding-bottom: 0 !important;\n}\n.pb-xxl-1[data-v-9cfc8a2c] {\n    padding-bottom: 0.25rem !important;\n}\n.pb-xxl-2[data-v-9cfc8a2c] {\n    padding-bottom: 0.5rem !important;\n}\n.pb-xxl-3[data-v-9cfc8a2c] {\n    padding-bottom: 1rem !important;\n}\n.pb-xxl-4[data-v-9cfc8a2c] {\n    padding-bottom: 1.5rem !important;\n}\n.pb-xxl-5[data-v-9cfc8a2c] {\n    padding-bottom: 3rem !important;\n}\n.ps-xxl-0[data-v-9cfc8a2c] {\n    padding-left: 0 !important;\n}\n.ps-xxl-1[data-v-9cfc8a2c] {\n    padding-left: 0.25rem !important;\n}\n.ps-xxl-2[data-v-9cfc8a2c] {\n    padding-left: 0.5rem !important;\n}\n.ps-xxl-3[data-v-9cfc8a2c] {\n    padding-left: 1rem !important;\n}\n.ps-xxl-4[data-v-9cfc8a2c] {\n    padding-left: 1.5rem !important;\n}\n.ps-xxl-5[data-v-9cfc8a2c] {\n    padding-left: 3rem !important;\n}\n.gap-xxl-0[data-v-9cfc8a2c] {\n    gap: 0 !important;\n}\n.gap-xxl-1[data-v-9cfc8a2c] {\n    gap: 0.25rem !important;\n}\n.gap-xxl-2[data-v-9cfc8a2c] {\n    gap: 0.5rem !important;\n}\n.gap-xxl-3[data-v-9cfc8a2c] {\n    gap: 1rem !important;\n}\n.gap-xxl-4[data-v-9cfc8a2c] {\n    gap: 1.5rem !important;\n}\n.gap-xxl-5[data-v-9cfc8a2c] {\n    gap: 3rem !important;\n}\n.text-xxl-start[data-v-9cfc8a2c] {\n    text-align: left !important;\n}\n.text-xxl-end[data-v-9cfc8a2c] {\n    text-align: right !important;\n}\n.text-xxl-center[data-v-9cfc8a2c] {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.fs-1[data-v-9cfc8a2c] {\n    font-size: 2.5rem !important;\n}\n.fs-2[data-v-9cfc8a2c] {\n    font-size: 2rem !important;\n}\n.fs-3[data-v-9cfc8a2c] {\n    font-size: 1.75rem !important;\n}\n.fs-4[data-v-9cfc8a2c] {\n    font-size: 1.5rem !important;\n}\n}\n@media print {\n.d-print-inline[data-v-9cfc8a2c] {\n    display: inline !important;\n}\n.d-print-inline-block[data-v-9cfc8a2c] {\n    display: inline-block !important;\n}\n.d-print-block[data-v-9cfc8a2c] {\n    display: block !important;\n}\n.d-print-grid[data-v-9cfc8a2c] {\n    display: grid !important;\n}\n.d-print-table[data-v-9cfc8a2c] {\n    display: table !important;\n}\n.d-print-table-row[data-v-9cfc8a2c] {\n    display: table-row !important;\n}\n.d-print-table-cell[data-v-9cfc8a2c] {\n    display: table-cell !important;\n}\n.d-print-flex[data-v-9cfc8a2c] {\n    display: flex !important;\n}\n.d-print-inline-flex[data-v-9cfc8a2c] {\n    display: inline-flex !important;\n}\n.d-print-none[data-v-9cfc8a2c] {\n    display: none !important;\n}\n}\n[data-v-9cfc8a2c]:root {\n  color-scheme: light;\n}\n.btn[data-v-9cfc8a2c]:focus, .btn[data-v-9cfc8a2c]:active, .btn[data-v-9cfc8a2c]:active:focus, .btn.active[data-v-9cfc8a2c]:focus {\n  outline: none;\n}\n.btn-secondary[data-v-9cfc8a2c] {\n  color: #17141f;\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-secondary[data-v-9cfc8a2c]:hover {\n  color: #17141f;\n  background-color: #ededed;\n  border-color: #adb5bd;\n}\n.btn-secondary.disabled[data-v-9cfc8a2c] {\n  color: #23202a;\n  background-color: #fff;\n  border-color: #cfcfcf;\n}\n.btn-warning[data-v-9cfc8a2c] {\n  color: #fff;\n}\n.btn-primary[data-v-9cfc8a2c]:focus {\n  box-shadow: 0 0 5px #6a46a1;\n}\n.btn-secondary[data-v-9cfc8a2c]:focus {\n  box-shadow: 0 0 5px #cbc8d0;\n}\n.btn-success[data-v-9cfc8a2c]:focus {\n  box-shadow: 0 0 5px #2bc066;\n}\n.btn-info[data-v-9cfc8a2c]:focus {\n  box-shadow: 0 0 5px #1aa6e0;\n}\n.btn-warning[data-v-9cfc8a2c]:focus {\n  box-shadow: 0 0 5px #f1ac34;\n}\n.btn-danger[data-v-9cfc8a2c]:focus {\n  box-shadow: 0 0 5px #fc4d4d;\n}\n.btn.disabled[data-v-9cfc8a2c]:focus {\n  box-shadow: none;\n}\n.table .thead-dark th[data-v-9cfc8a2c] {\n  background-color: #a991d4;\n  border-color: rgba(0, 0, 0, 0.05);\n}\n.form-control[data-v-9cfc8a2c]:focus {\n  box-shadow: 0 0 5px rgba(100, 65, 164, 0.4);\n}\n.nav-tabs .nav-link[data-v-9cfc8a2c],\n.nav-tabs .nav-link.active[data-v-9cfc8a2c] {\n  border-width: 0 0 1px;\n}\n.nav-tabs .nav-link[data-v-9cfc8a2c]:hover,\n.nav-tabs .nav-link.active[data-v-9cfc8a2c],\n.nav-tabs .nav-link.active[data-v-9cfc8a2c]:hover,\n.nav-tabs .nav-link.active[data-v-9cfc8a2c]:focus {\n  border-bottom: 1px solid #593196;\n}\n.nav-tabs .nav-item + .nav-item[data-v-9cfc8a2c] {\n  margin-left: 0;\n}\n.breadcrumb-item.active[data-v-9cfc8a2c] {\n  color: #444;\n}\n.badge.bg-light[data-v-9cfc8a2c] {\n  color: #17141f;\n}\n.progress[data-v-9cfc8a2c] {\n  height: 8px;\n}\n.list-group-item[data-v-9cfc8a2c] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.list-group-item.active[data-v-9cfc8a2c], .list-group-item[data-v-9cfc8a2c]:hover, .list-group-item[data-v-9cfc8a2c]:focus {\n  color: #fff;\n}\n.list-group-item.active[data-v-9cfc8a2c] {\n  font-weight: 700;\n}\n.list-group-item.active[data-v-9cfc8a2c]:hover {\n  background-color: #2e283e;\n}\n.list-group-item.disabled[data-v-9cfc8a2c]:hover {\n  color: #5c507c;\n}\n.fade-enter-active[data-v-9cfc8a2c],\n.fade-leave-active[data-v-9cfc8a2c] {\n  transition: opacity 0.3s;\n}\n.fade-enter[data-v-9cfc8a2c],\n.fade-leave-to[data-v-9cfc8a2c] {\n  opacity: 0;\n}\n.popup-modal[data-v-9cfc8a2c] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  z-index: 1031;\n}\n.window[data-v-9cfc8a2c] {\n  background-color: #593196;\n  border: 1px solid #a991d4;\n  border-radius: 10px;\n  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);\n  margin-left: auto;\n  margin-right: auto;\n  padding: 1.6rem;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/cropperjs/dist/cropper.css":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/cropperjs/dist/cropper.css ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Cropper.js v1.5.13\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2022-11-20T05:30:43.444Z\n */\n\n.cropper-container {\n  direction: ltr;\n  font-size: 0;\n  line-height: 0;\n  position: relative;\n  touch-action: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.cropper-container img {\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    display: block;\n    height: 100%;\n    image-orientation: 0deg;\n    max-height: none !important;\n    max-width: none !important;\n    min-height: 0 !important;\n    min-width: 0 !important;\n    width: 100%;\n  }\n\n.cropper-wrap-box,\n.cropper-canvas,\n.cropper-drag-box,\n.cropper-crop-box,\n.cropper-modal {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.cropper-wrap-box,\n.cropper-canvas {\n  overflow: hidden;\n}\n\n.cropper-drag-box {\n  background-color: #fff;\n  opacity: 0;\n}\n\n.cropper-modal {\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.cropper-view-box {\n  display: block;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 75%);\n  overflow: hidden;\n  width: 100%;\n}\n\n.cropper-dashed {\n  border: 0 dashed #eee;\n  display: block;\n  opacity: 0.5;\n  position: absolute;\n}\n\n.cropper-dashed.dashed-h {\n    border-bottom-width: 1px;\n    border-top-width: 1px;\n    height: calc(100% / 3);\n    left: 0;\n    top: calc(100% / 3);\n    width: 100%;\n  }\n\n.cropper-dashed.dashed-v {\n    border-left-width: 1px;\n    border-right-width: 1px;\n    height: 100%;\n    left: calc(100% / 3);\n    top: 0;\n    width: calc(100% / 3);\n  }\n\n.cropper-center {\n  display: block;\n  height: 0;\n  left: 50%;\n  opacity: 0.75;\n  position: absolute;\n  top: 50%;\n  width: 0;\n}\n\n.cropper-center::before,\n  .cropper-center::after {\n    background-color: #eee;\n    content: \" \";\n    display: block;\n    position: absolute;\n  }\n\n.cropper-center::before {\n    height: 1px;\n    left: -3px;\n    top: 0;\n    width: 7px;\n  }\n\n.cropper-center::after {\n    height: 7px;\n    left: 0;\n    top: -3px;\n    width: 1px;\n  }\n\n.cropper-face,\n.cropper-line,\n.cropper-point {\n  display: block;\n  height: 100%;\n  opacity: 0.1;\n  position: absolute;\n  width: 100%;\n}\n\n.cropper-face {\n  background-color: #fff;\n  left: 0;\n  top: 0;\n}\n\n.cropper-line {\n  background-color: #39f;\n}\n\n.cropper-line.line-e {\n    cursor: ew-resize;\n    right: -3px;\n    top: 0;\n    width: 5px;\n  }\n\n.cropper-line.line-n {\n    cursor: ns-resize;\n    height: 5px;\n    left: 0;\n    top: -3px;\n  }\n\n.cropper-line.line-w {\n    cursor: ew-resize;\n    left: -3px;\n    top: 0;\n    width: 5px;\n  }\n\n.cropper-line.line-s {\n    bottom: -3px;\n    cursor: ns-resize;\n    height: 5px;\n    left: 0;\n  }\n\n.cropper-point {\n  background-color: #39f;\n  height: 5px;\n  opacity: 0.75;\n  width: 5px;\n}\n\n.cropper-point.point-e {\n    cursor: ew-resize;\n    margin-top: -3px;\n    right: -3px;\n    top: 50%;\n  }\n\n.cropper-point.point-n {\n    cursor: ns-resize;\n    left: 50%;\n    margin-left: -3px;\n    top: -3px;\n  }\n\n.cropper-point.point-w {\n    cursor: ew-resize;\n    left: -3px;\n    margin-top: -3px;\n    top: 50%;\n  }\n\n.cropper-point.point-s {\n    bottom: -3px;\n    cursor: s-resize;\n    left: 50%;\n    margin-left: -3px;\n  }\n\n.cropper-point.point-ne {\n    cursor: nesw-resize;\n    right: -3px;\n    top: -3px;\n  }\n\n.cropper-point.point-nw {\n    cursor: nwse-resize;\n    left: -3px;\n    top: -3px;\n  }\n\n.cropper-point.point-sw {\n    bottom: -3px;\n    cursor: nesw-resize;\n    left: -3px;\n  }\n\n.cropper-point.point-se {\n    bottom: -3px;\n    cursor: nwse-resize;\n    height: 20px;\n    opacity: 1;\n    right: -3px;\n    width: 20px;\n  }\n\n@media (min-width: 768px) {\n\n.cropper-point.point-se {\n      height: 15px;\n      width: 15px;\n  }\n    }\n\n@media (min-width: 992px) {\n\n.cropper-point.point-se {\n      height: 10px;\n      width: 10px;\n  }\n    }\n\n@media (min-width: 1200px) {\n\n.cropper-point.point-se {\n      height: 5px;\n      opacity: 0.75;\n      width: 5px;\n  }\n    }\n\n.cropper-point.point-se::before {\n    background-color: #39f;\n    bottom: -50%;\n    content: \" \";\n    display: block;\n    height: 200%;\n    opacity: 0;\n    position: absolute;\n    right: -50%;\n    width: 200%;\n  }\n\n.cropper-invisible {\n  opacity: 0;\n}\n\n.cropper-bg {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC\");\n}\n\n.cropper-hide {\n  display: block;\n  height: 0;\n  position: absolute;\n  width: 0;\n}\n\n.cropper-hidden {\n  display: none !important;\n}\n\n.cropper-move {\n  cursor: move;\n}\n\n.cropper-crop {\n  cursor: crosshair;\n}\n\n.cropper-disabled .cropper-drag-box,\n.cropper-disabled .cropper-face,\n.cropper-disabled .cropper-line,\n.cropper-disabled .cropper-point {\n  cursor: not-allowed;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Imager.vue?vue&type=style&index=0&id=b6ba0500&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Imager.vue?vue&type=style&index=0&id=b6ba0500&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nimg[data-v-b6ba0500] {\n  display: block;\n\n  /* This rule is very important, please don't ignore this */\n  max-width: 100%;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Paginator.vue?vue&type=style&index=0&id=3dbf4898&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Paginator.vue?vue&type=style&index=0&id=3dbf4898&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.flex-right {\n    display: flex;\n    justify-content: flex-end;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/PopupModal.vue?vue&type=style&index=0&id=9cfc8a2c&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/PopupModal.vue?vue&type=style&index=0&id=9cfc8a2c&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/cropperjs/dist/cropper.css":
/*!*************************************************!*\
  !*** ./node_modules/cropperjs/dist/cropper.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_cropper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./cropper.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/cropperjs/dist/cropper.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_cropper_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_cropper_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Imager.vue?vue&type=style&index=0&id=b6ba0500&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Imager.vue?vue&type=style&index=0&id=b6ba0500&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Imager_vue_vue_type_style_index_0_id_b6ba0500_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Imager.vue?vue&type=style&index=0&id=b6ba0500&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Imager.vue?vue&type=style&index=0&id=b6ba0500&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Imager_vue_vue_type_style_index_0_id_b6ba0500_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Imager_vue_vue_type_style_index_0_id_b6ba0500_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Paginator.vue?vue&type=style&index=0&id=3dbf4898&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Paginator.vue?vue&type=style&index=0&id=3dbf4898&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Paginator_vue_vue_type_style_index_0_id_3dbf4898_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Paginator.vue?vue&type=style&index=0&id=3dbf4898&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Paginator.vue?vue&type=style&index=0&id=3dbf4898&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Paginator_vue_vue_type_style_index_0_id_3dbf4898_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Paginator_vue_vue_type_style_index_0_id_3dbf4898_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-cropperjs/dist/VueCropper.js":
/*!*******************************************************!*\
  !*** ./node_modules/vue-cropperjs/dist/VueCropper.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _cropperjs = __webpack_require__(/*! cropperjs */ "./node_modules/cropperjs/dist/cropper.js");

var _cropperjs2 = _interopRequireDefault(_cropperjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var previewPropType = typeof window === 'undefined' ? [String, Array] : [String, Array, Element, NodeList];

exports["default"] = {
  render: function render() {
    var crossorigin = this.crossorigin || undefined;

    return (0, _vue.h)('div', { style: this.containerStyle }, [(0, _vue.h)('img', {
      ref: 'img',
      src: this.src,
      alt: this.alt || 'image',
      style: [{ 'max-width': '100%' }, this.imgStyle],
      crossorigin: crossorigin
    })]);
  },

  props: {
    containerStyle: Object,
    src: {
      type: String,
      default: ''
    },
    alt: String,
    imgStyle: Object,

    viewMode: Number,
    dragMode: String,
    initialAspectRatio: Number,
    aspectRatio: Number,
    data: Object,
    preview: previewPropType,
    responsive: {
      type: Boolean,
      default: true
    },
    restore: {
      type: Boolean,
      default: true
    },
    checkCrossOrigin: {
      type: Boolean,
      default: true
    },
    checkOrientation: {
      type: Boolean,
      default: true
    },
    crossorigin: {
      type: String
    },
    modal: {
      type: Boolean,
      default: true
    },
    guides: {
      type: Boolean,
      default: true
    },
    center: {
      type: Boolean,
      default: true
    },
    highlight: {
      type: Boolean,
      default: true
    },
    background: {
      type: Boolean,
      default: true
    },
    autoCrop: {
      type: Boolean,
      default: true
    },
    autoCropArea: Number,
    movable: {
      type: Boolean,
      default: true
    },
    rotatable: {
      type: Boolean,
      default: true
    },
    scalable: {
      type: Boolean,
      default: true
    },
    zoomable: {
      type: Boolean,
      default: true
    },
    zoomOnTouch: {
      type: Boolean,
      default: true
    },
    zoomOnWheel: {
      type: Boolean,
      default: true
    },
    wheelZoomRatio: Number,
    cropBoxMovable: {
      type: Boolean,
      default: true
    },
    cropBoxResizable: {
      type: Boolean,
      default: true
    },
    toggleDragModeOnDblclick: {
      type: Boolean,
      default: true
    },

    minCanvasWidth: Number,
    minCanvasHeight: Number,
    minCropBoxWidth: Number,
    minCropBoxHeight: Number,
    minContainerWidth: Number,
    minContainerHeight: Number,

    ready: Function,
    cropstart: Function,
    cropmove: Function,
    cropend: Function,
    crop: Function,
    zoom: Function
  },
  mounted: function mounted() {
    var _$options$props = this.$options.props,
        containerStyle = _$options$props.containerStyle,
        src = _$options$props.src,
        alt = _$options$props.alt,
        imgStyle = _$options$props.imgStyle,
        data = _objectWithoutProperties(_$options$props, ['containerStyle', 'src', 'alt', 'imgStyle']);

    var props = {};

    for (var key in data) {
      if (this[key] !== undefined) {
        props[key] = this[key];
      }
    }

    this.cropper = new _cropperjs2.default(this.$refs.img, props);
  },

  methods: {
    reset: function reset() {
      return this.cropper.reset();
    },
    clear: function clear() {
      return this.cropper.clear();
    },
    initCrop: function initCrop() {
      return this.cropper.crop();
    },
    replace: function replace(url) {
      var onlyColorChanged = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return this.cropper.replace(url, onlyColorChanged);
    },
    enable: function enable() {
      return this.cropper.enable();
    },
    disable: function disable() {
      return this.cropper.disable();
    },
    destroy: function destroy() {
      return this.cropper.destroy();
    },
    move: function move(offsetX, offsetY) {
      return this.cropper.move(offsetX, offsetY);
    },
    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

      return this.cropper.moveTo(x, y);
    },
    relativeZoom: function relativeZoom(ratio, _originalEvent) {
      return this.cropper.zoom(ratio, _originalEvent);
    },
    zoomTo: function zoomTo(ratio, _originalEvent) {
      return this.cropper.zoomTo(ratio, _originalEvent);
    },
    rotate: function rotate(degree) {
      return this.cropper.rotate(degree);
    },
    rotateTo: function rotateTo(degree) {
      return this.cropper.rotateTo(degree);
    },
    scaleX: function scaleX(_scaleX) {
      return this.cropper.scaleX(_scaleX);
    },
    scaleY: function scaleY(_scaleY) {
      return this.cropper.scaleY(_scaleY);
    },
    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;

      return this.cropper.scale(scaleX, scaleY);
    },
    getData: function getData() {
      var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      return this.cropper.getData(rounded);
    },
    setData: function setData(data) {
      return this.cropper.setData(data);
    },
    getContainerData: function getContainerData() {
      return this.cropper.getContainerData();
    },
    getImageData: function getImageData() {
      return this.cropper.getImageData();
    },
    getCanvasData: function getCanvasData() {
      return this.cropper.getCanvasData();
    },
    setCanvasData: function setCanvasData(data) {
      return this.cropper.setCanvasData(data);
    },
    getCropBoxData: function getCropBoxData() {
      return this.cropper.getCropBoxData();
    },
    setCropBoxData: function setCropBoxData(data) {
      return this.cropper.setCropBoxData(data);
    },
    getCroppedCanvas: function getCroppedCanvas() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.cropper.getCroppedCanvas(options);
    },
    setAspectRatio: function setAspectRatio(aspectRatio) {
      return this.cropper.setAspectRatio(aspectRatio);
    },
    setDragMode: function setDragMode(mode) {
      return this.cropper.setDragMode(mode);
    }
  }
};

/***/ }),

/***/ "./resources/js/components/common/ConfirmDialogue.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/common/ConfirmDialogue.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConfirmDialogue_vue_vue_type_template_id_d83c0302__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfirmDialogue.vue?vue&type=template&id=d83c0302 */ "./resources/js/components/common/ConfirmDialogue.vue?vue&type=template&id=d83c0302");
/* harmony import */ var _ConfirmDialogue_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmDialogue.vue?vue&type=script&lang=js */ "./resources/js/components/common/ConfirmDialogue.vue?vue&type=script&lang=js");
/* harmony import */ var C_projects_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_projects_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ConfirmDialogue_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ConfirmDialogue_vue_vue_type_template_id_d83c0302__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/common/ConfirmDialogue.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/common/Imager.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/common/Imager.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Imager_vue_vue_type_template_id_b6ba0500_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Imager.vue?vue&type=template&id=b6ba0500&scoped=true */ "./resources/js/components/common/Imager.vue?vue&type=template&id=b6ba0500&scoped=true");
/* harmony import */ var _Imager_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Imager.vue?vue&type=script&lang=js */ "./resources/js/components/common/Imager.vue?vue&type=script&lang=js");
/* harmony import */ var _Imager_vue_vue_type_style_index_0_id_b6ba0500_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Imager.vue?vue&type=style&index=0&id=b6ba0500&scoped=true&lang=css */ "./resources/js/components/common/Imager.vue?vue&type=style&index=0&id=b6ba0500&scoped=true&lang=css");
/* harmony import */ var C_projects_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_projects_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Imager_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Imager_vue_vue_type_template_id_b6ba0500_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-b6ba0500"],['__file',"resources/js/components/common/Imager.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/common/Paginator.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/common/Paginator.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Paginator_vue_vue_type_template_id_3dbf4898__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paginator.vue?vue&type=template&id=3dbf4898 */ "./resources/js/components/common/Paginator.vue?vue&type=template&id=3dbf4898");
/* harmony import */ var _Paginator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paginator.vue?vue&type=script&lang=js */ "./resources/js/components/common/Paginator.vue?vue&type=script&lang=js");
/* harmony import */ var _Paginator_vue_vue_type_style_index_0_id_3dbf4898_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Paginator.vue?vue&type=style&index=0&id=3dbf4898&lang=css */ "./resources/js/components/common/Paginator.vue?vue&type=style&index=0&id=3dbf4898&lang=css");
/* harmony import */ var C_projects_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_projects_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Paginator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Paginator_vue_vue_type_template_id_3dbf4898__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/common/Paginator.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/common/PopupModal.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/common/PopupModal.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PopupModal_vue_vue_type_template_id_9cfc8a2c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopupModal.vue?vue&type=template&id=9cfc8a2c&scoped=true */ "./resources/js/components/common/PopupModal.vue?vue&type=template&id=9cfc8a2c&scoped=true");
/* harmony import */ var _PopupModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopupModal.vue?vue&type=script&lang=js */ "./resources/js/components/common/PopupModal.vue?vue&type=script&lang=js");
/* harmony import */ var _PopupModal_vue_vue_type_style_index_0_id_9cfc8a2c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopupModal.vue?vue&type=style&index=0&id=9cfc8a2c&lang=scss&scoped=true */ "./resources/js/components/common/PopupModal.vue?vue&type=style&index=0&id=9cfc8a2c&lang=scss&scoped=true");
/* harmony import */ var C_projects_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_projects_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PopupModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PopupModal_vue_vue_type_template_id_9cfc8a2c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-9cfc8a2c"],['__file',"resources/js/components/common/PopupModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/device_types/AddDeviceType.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/device_types/AddDeviceType.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddDeviceType_vue_vue_type_template_id_20b1311d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddDeviceType.vue?vue&type=template&id=20b1311d */ "./resources/js/components/device_types/AddDeviceType.vue?vue&type=template&id=20b1311d");
/* harmony import */ var _AddDeviceType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddDeviceType.vue?vue&type=script&lang=js */ "./resources/js/components/device_types/AddDeviceType.vue?vue&type=script&lang=js");
/* harmony import */ var C_projects_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_projects_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AddDeviceType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AddDeviceType_vue_vue_type_template_id_20b1311d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/device_types/AddDeviceType.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/device_types/DeviceTypes.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/device_types/DeviceTypes.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeviceTypes_vue_vue_type_template_id_c6c572a2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeviceTypes.vue?vue&type=template&id=c6c572a2 */ "./resources/js/components/device_types/DeviceTypes.vue?vue&type=template&id=c6c572a2");
/* harmony import */ var _DeviceTypes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeviceTypes.vue?vue&type=script&lang=js */ "./resources/js/components/device_types/DeviceTypes.vue?vue&type=script&lang=js");
/* harmony import */ var C_projects_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_projects_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DeviceTypes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DeviceTypes_vue_vue_type_template_id_c6c572a2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/device_types/DeviceTypes.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/common/ConfirmDialogue.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/common/ConfirmDialogue.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConfirmDialogue_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConfirmDialogue_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ConfirmDialogue.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/ConfirmDialogue.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/common/Imager.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/common/Imager.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Imager_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Imager_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Imager.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Imager.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/common/Paginator.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/common/Paginator.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConfirmDialogue_vue_vue_type_template_id_d83c0302__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConfirmDialogue_vue_vue_type_template_id_d83c0302__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ConfirmDialogue.vue?vue&type=template&id=d83c0302 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/ConfirmDialogue.vue?vue&type=template&id=d83c0302");


/***/ }),

/***/ "./resources/js/components/common/Imager.vue?vue&type=template&id=b6ba0500&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/common/Imager.vue?vue&type=template&id=b6ba0500&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Imager_vue_vue_type_template_id_b6ba0500_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Imager_vue_vue_type_template_id_b6ba0500_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Imager.vue?vue&type=template&id=b6ba0500&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Imager.vue?vue&type=template&id=b6ba0500&scoped=true");


/***/ }),

/***/ "./resources/js/components/common/Paginator.vue?vue&type=template&id=3dbf4898":
/*!************************************************************************************!*\
  !*** ./resources/js/components/common/Paginator.vue?vue&type=template&id=3dbf4898 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddDeviceType_vue_vue_type_template_id_20b1311d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddDeviceType_vue_vue_type_template_id_20b1311d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddDeviceType.vue?vue&type=template&id=20b1311d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/AddDeviceType.vue?vue&type=template&id=20b1311d");


/***/ }),

/***/ "./resources/js/components/device_types/DeviceTypes.vue?vue&type=template&id=c6c572a2":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/device_types/DeviceTypes.vue?vue&type=template&id=c6c572a2 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeviceTypes_vue_vue_type_template_id_c6c572a2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeviceTypes_vue_vue_type_template_id_c6c572a2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeviceTypes.vue?vue&type=template&id=c6c572a2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/device_types/DeviceTypes.vue?vue&type=template&id=c6c572a2");


/***/ }),

/***/ "./resources/js/components/common/PopupModal.vue?vue&type=style&index=0&id=9cfc8a2c&lang=scss&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/common/PopupModal.vue?vue&type=style&index=0&id=9cfc8a2c&lang=scss&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopupModal_vue_vue_type_style_index_0_id_9cfc8a2c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PopupModal.vue?vue&type=style&index=0&id=9cfc8a2c&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/PopupModal.vue?vue&type=style&index=0&id=9cfc8a2c&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/common/Imager.vue?vue&type=style&index=0&id=b6ba0500&scoped=true&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/common/Imager.vue?vue&type=style&index=0&id=b6ba0500&scoped=true&lang=css ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Imager_vue_vue_type_style_index_0_id_b6ba0500_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Imager.vue?vue&type=style&index=0&id=b6ba0500&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Imager.vue?vue&type=style&index=0&id=b6ba0500&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/common/Paginator.vue?vue&type=style&index=0&id=3dbf4898&lang=css":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/common/Paginator.vue?vue&type=style&index=0&id=3dbf4898&lang=css ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Paginator_vue_vue_type_style_index_0_id_3dbf4898_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Paginator.vue?vue&type=style&index=0&id=3dbf4898&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/Paginator.vue?vue&type=style&index=0&id=3dbf4898&lang=css");


/***/ })

}]);