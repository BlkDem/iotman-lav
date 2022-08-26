"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Devices_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Devices.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Devices.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'page',
  components: {
    ConfirmDelete: ConfirmDelete
  },
  data: function data() {
    return {
      devices: [],
      show: false,
      deleteMsg: '',
      visible: false
    };
  },
  created: function created() {
    this.getDevices();
    this.itemIndex = 0;
  },
  methods: {
    getDevices: function getDevices(api_url) {
      var _this = this;

      api_url = api_url || '/api/devices/read';
      fetch(api_url).then(function (response) {
        return response.json();
      }).then(function (response) {
        _this.devices = response.data;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    ShowHide: function ShowHide(isVisible) {
      this.visible = isVisible;
    },
    getVisible: function getVisible() {
      return this.visible;
    },
    confirmDelete: function confirmDelete() {
      this.show = true;
      this.deleteMsg = 'Are you sure you want to delete this person?';
    },
    deleteDevice: function deleteDevice(key, id) {
      var _this2 = this;

      console.log(key, id); //this.$refs['my-modal'].show();

      if (confirm("Do you really want to delete?")) {
        axios["delete"]('/api/devices/delete/' + id).then(function (resp) {
          _this2.devices.splice(key, 1);

          console.log(key, " - deleted");
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Devices.vue?vue&type=template&id=7c921fc2":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Devices.vue?vue&type=template&id=7c921fc2 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Registered Devices", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = ["id"];
var _hoisted_5 = {
  "class": "card border-light"
};
var _hoisted_6 = {
  "class": "card-header"
};
var _hoisted_7 = {
  "class": "text-info"
};
var _hoisted_8 = {
  "class": "card-body"
};
var _hoisted_9 = {
  "class": "card-title text-info"
};
var _hoisted_10 = {
  "class": "card-subtitle text-muted"
};
var _hoisted_11 = ["src"];
var _hoisted_12 = {
  "class": "card-body"
};
var _hoisted_13 = {
  "class": "card-text"
};
var _hoisted_14 = {
  "class": "list-group list-group-flush"
};
var _hoisted_15 = {
  "class": "list-group-item"
};
var _hoisted_16 = {
  "class": "card-body"
};
var _hoisted_17 = {
  "class": "page"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "glyphicon glyphicon-trash"
}, null, -1
/* HOISTED */
);

var _hoisted_19 = [_hoisted_18];
var _hoisted_20 = ["onClick"];
var _hoisted_21 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_confirm_delete = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("confirm-delete");

  return $data.visible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.devices, function (device, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "col-sm-4 col-xs-4 col-lg-4 p-2",
      key: key,
      id: device.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(device.device_name) + " ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, "(" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(device.id) + ")", 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(device.device_type_name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(device.device_desc), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: device.device_type_image
    }, null, 8
    /* PROPS */
    , _hoisted_11), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(device.device_desc), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_15, "Hardware Address HWID: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(device.device_hwid), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [$data.show ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_confirm_delete, {
      key: 0,
      msg: $data.deleteMsg
    }, null, 8
    /* PROPS */
    , ["msg"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" person details "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: _cache[0] || (_cache[0] = function () {
        return $options.confirmDelete && $options.confirmDelete.apply($options, arguments);
      })
    }, _hoisted_19)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "#",
      "class": "card-link",
      onClick: function onClick($event) {
        return $options.deleteDevice(key, device.id);
      }
    }, "Delete", 8
    /* PROPS */
    , _hoisted_20), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "#",
      "class": "card-link",
      onClick: function onClick($event) {
        return $options.confirmDelete(key, device.id);
      }
    }, "Delete", 8
    /* PROPS */
    , _hoisted_21)])])], 8
    /* PROPS */
    , _hoisted_4);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./resources/js/components/Devices.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Devices.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Devices_vue_vue_type_template_id_7c921fc2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Devices.vue?vue&type=template&id=7c921fc2 */ "./resources/js/components/Devices.vue?vue&type=template&id=7c921fc2");
/* harmony import */ var _Devices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Devices.vue?vue&type=script&lang=js */ "./resources/js/components/Devices.vue?vue&type=script&lang=js");
/* harmony import */ var _home_maxim_projects_iotman_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_maxim_projects_iotman_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Devices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Devices_vue_vue_type_template_id_7c921fc2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Devices.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Devices.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Devices.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Devices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Devices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Devices.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Devices.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Devices.vue?vue&type=template&id=7c921fc2":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Devices.vue?vue&type=template&id=7c921fc2 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Devices_vue_vue_type_template_id_7c921fc2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Devices_vue_vue_type_template_id_7c921fc2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Devices.vue?vue&type=template&id=7c921fc2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Devices.vue?vue&type=template&id=7c921fc2");


/***/ })

}]);