"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_presets_Presets_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/presets/Presets.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/presets/Presets.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _db_DataTable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db/DataTable.vue */ "./resources/js/components/db/DataTable.vue");
/* harmony import */ var _strings_constants_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../strings_constants/strings */ "./resources/js/components/strings_constants/strings.js");
/* harmony import */ var _api_rest_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/rest_api */ "./resources/js/api/rest_api.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DataTable: _db_DataTable_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      presets: {
        presetsCaption: _strings_constants_strings__WEBPACK_IMPORTED_MODULE_1__["default"].PRESETS,
        api: {
          get: '',
          insert: '',
          update: '',
          "delete": '',
          patch: ''
        },
        presetsFields: [{
          fieldName: 'Image',
          fieldCaption: '',
          type: String,
          isImage: false,
          isVirtualImage: true,
          VirtualImage: 'fa-solid fa-gear fa-2x',
          isEditable: false,
          isSortable: false,
          isHighLight: true,
          columnsCount: 1
        }, {
          fieldName: 'id',
          fieldCaption: 'ID',
          type: Number,
          isImage: false,
          isEditable: false,
          isSortable: true,
          isHighLight: true,
          columnsCount: 1
        }, {
          fieldName: 'preset_key',
          fieldCaption: 'Key',
          type: String,
          isImage: false,
          isEditable: true,
          isSortable: true,
          isHighLight: false,
          columnsCount: 3
        }, {
          fieldName: 'preset_value',
          fieldCaption: 'Value',
          type: String,
          isImage: false,
          isEditable: true,
          isSortable: true,
          isHighLight: true,
          columnsCount: 3
        }, {
          fieldName: 'preset_description',
          fieldCaption: 'Description',
          type: String,
          isImage: false,
          isText: true,
          isEditable: true,
          isSortable: true,
          isHighLight: false,
          columnsCount: 2
        }]
      }
    };
  },
  created: function created() {
    var presetApi = this.presets.api;
    presetApi.get = _api_rest_api__WEBPACK_IMPORTED_MODULE_2__["default"].api_presets_read_page;
    presetApi.insert = _api_rest_api__WEBPACK_IMPORTED_MODULE_2__["default"].api_preset_create;
    presetApi.update = _api_rest_api__WEBPACK_IMPORTED_MODULE_2__["default"].api_preset_update;
    presetApi.patch = _api_rest_api__WEBPACK_IMPORTED_MODULE_2__["default"].api_preset_patch;
    presetApi["delete"] = _api_rest_api__WEBPACK_IMPORTED_MODULE_2__["default"].api_preset_delete;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/presets/Presets.vue?vue&type=template&id=e2245884":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/presets/Presets.vue?vue&type=template&id=e2245884 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  style: {
    "margin-top": "5.5rem"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ pageCaption }} ")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_data_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("data-table");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_data_table, {
    api: $data.presets.api,
    dataFields: $data.presets.presetsFields,
    pageCaption: $data.presets.presetsCaption
  }, null, 8 /* PROPS */, ["api", "dataFields", "pageCaption"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/components/presets/Presets.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/presets/Presets.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Presets_vue_vue_type_template_id_e2245884__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Presets.vue?vue&type=template&id=e2245884 */ "./resources/js/components/presets/Presets.vue?vue&type=template&id=e2245884");
/* harmony import */ var _Presets_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Presets.vue?vue&type=script&lang=js */ "./resources/js/components/presets/Presets.vue?vue&type=script&lang=js");
/* harmony import */ var C_projects_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_projects_iotman_lav_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Presets_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Presets_vue_vue_type_template_id_e2245884__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/presets/Presets.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/presets/Presets.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/presets/Presets.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Presets_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Presets_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Presets.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/presets/Presets.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/presets/Presets.vue?vue&type=template&id=e2245884":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/presets/Presets.vue?vue&type=template&id=e2245884 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Presets_vue_vue_type_template_id_e2245884__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Presets_vue_vue_type_template_id_e2245884__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Presets.vue?vue&type=template&id=e2245884 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/presets/Presets.vue?vue&type=template&id=e2245884");


/***/ })

}]);