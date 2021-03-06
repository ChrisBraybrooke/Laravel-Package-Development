webpackJsonp([13],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"@babel/preset-env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"]},\"forceAllTransforms\":true}]],\"plugins\":[\"@babel/plugin-proposal-object-rest-spread\",[\"@babel/plugin-transform-runtime\",{\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin-spa/pages/reports/ImportExport.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_services_api_service__ = __webpack_require__("./resources/assets/admin-spa/services/api-service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var throttle = __webpack_require__("./node_modules/lodash.throttle/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ImportExport',
  components: {
    Errors: function Errors() {
      return __webpack_require__.e/* import() */(31/* duplicate */).then(__webpack_require__.bind(null, "./resources/assets/admin-spa/components/Errors.vue"));
    },
    FilePickerModal: function FilePickerModal() {
      return __webpack_require__.e/* import() */(33/* duplicate */).then(__webpack_require__.bind(null, "./resources/assets/admin-spa/components/FilePickerModal.vue"));
    }
  },
  props: {},
  data: function data() {
    return {
      loading: false,
      ImportExportErrors: {},
      exportForm: {},
      currentTab: 'import',
      importForm: {},
      imports: [],
      dateRangeOptions: {
        shortcuts: [{
          text: 'Last week',
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: 'Last month',
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: 'Last 3 months',
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      }
    };
  },
  computed: {},
  watch: {},
  mounted: function mounted() {
    console.log('ImportExport.vue Mounted.');
    this.getImports();
  },
  methods: {
    handleFilesChosen: function handleFilesChosen(data) {
      this.$set(this.importForm, data.id, data.files);
    },
    tableRowClassName: function tableRowClassName(_ref) {
      var row = _ref.row,
          rowIndex = _ref.rowIndex;

      if (row.status === 'Failed') {
        return 'danger-row';
      } else if (row.status === 'Pending') {
        return 'warning-row';
      }

      return '';
    },
    handleFilesUnChosen: function handleFilesUnChosen(data) {
      this.$set(this.importForm, data.id, data.files);
    },
    getImports: throttle(function () {
      this.loading = true;
      __WEBPACK_IMPORTED_MODULE_0_services_api_service__["a" /* default */].get({
        path: 'imports'
      }).then(function (data) {
        this.loading = false;
        this.imports = data.data;
      }.bind(this))["catch"](function (error) {
        this.loading = false;
        this.ImportExportErrors = error;
      }.bind(this));
    }),
    submitForm: function submitForm(ref, path) {
      var _this = this;

      this.$refs[ref].validate(function (valid) {
        if (valid) {
          _this.loading = true;
          _this.ImportExportErrors = {};
          __WEBPACK_IMPORTED_MODULE_0_services_api_service__["a" /* default */].persist('post', {
            path: path,
            object: _this[ref]
          }).then(function (data) {
            this.loading = false;
            this.imports.unshift(data.data);
            this.importForm = {};

            if (ref === 'exportForm') {
              this.$alert('Click below to download the file.', 'Export Completed', {
                confirmButtonText: 'Download',
                callback: function callback(action) {
                  window.location.replace(data.data.url);
                }
              });
            }
          }.bind(_this))["catch"](function (error) {
            this.loading = false;
            this.ImportExportErrors = error;
          }.bind(_this));
        } else {}
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0abbb9be\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin-spa/pages/reports/ImportExport.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Colors\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Background\n-------------------------- */\n/* Border\n-------------------------- */\n/* Box-shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Font\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* Message Box\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Custom */\n/* Menu\n-------------------------- */\n.danger-row, .danger-row td {\n  background: #fde2e2 !important;\n}\n.warning-row, .warning-row td {\n  background: #faecd8 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0abbb9be\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin-spa/pages/reports/ImportExport.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "loading",
          rawName: "v-loading",
          value: _vm.loading,
          expression: "loading"
        }
      ]
    },
    [
      _c(
        "el-row",
        { attrs: { align: "middle", type: "flex" } },
        [
          _c("el-col", { attrs: { span: 12 } }, [
            _c("h1", { staticClass: "page_title" }, [_vm._v("Import / Export")])
          ])
        ],
        1
      ),
      _vm._v(" "),
      Object.keys(_vm.ImportExportErrors).length > 0
        ? _c("errors", { attrs: { errors: _vm.ImportExportErrors } })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "el-tabs",
        {
          model: {
            value: _vm.currentTab,
            callback: function($$v) {
              _vm.currentTab = $$v
            },
            expression: "currentTab"
          }
        },
        [
          _c(
            "el-tab-pane",
            { attrs: { label: "Import", name: "import" } },
            [
              _c(
                "el-row",
                [
                  _c(
                    "el-col",
                    { attrs: { lg: 24 } },
                    [
                      _c(
                        "el-button",
                        {
                          attrs: { type: "info", size: "small", plain: "" },
                          on: { click: _vm.getImports }
                        },
                        [_c("i", { staticClass: "el-icon-refresh" })]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-row",
                [
                  _c(
                    "el-col",
                    { attrs: { lg: 12 } },
                    [
                      _c(
                        "el-table",
                        {
                          staticStyle: { "margin-bottom": "50px" },
                          attrs: {
                            data: _vm.imports,
                            "row-class-name": _vm.tableRowClassName,
                            stripe: true,
                            size: "mini"
                          }
                        },
                        [
                          _c("el-table-column", {
                            attrs: { prop: "id", label: "ID" }
                          }),
                          _vm._v(" "),
                          _c("el-table-column", {
                            attrs: { prop: "import_to", label: "Import To" }
                          }),
                          _vm._v(" "),
                          _c("el-table-column", {
                            attrs: { prop: "status", label: "Status" }
                          }),
                          _vm._v(" "),
                          _c("el-table-column", {
                            attrs: { prop: "rows_added", label: "Rows Added" }
                          }),
                          _vm._v(" "),
                          _c("el-table-column", {
                            attrs: {
                              prop: "created_at.human",
                              label: "Created At"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form",
                {
                  ref: "importForm",
                  attrs: {
                    model: _vm.importForm,
                    "label-position": "left",
                    "label-width": "120px"
                  }
                },
                [
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        rules: [
                          {
                            required: true,
                            message: "Import into field is required",
                            trigger: "blur"
                          }
                        ],
                        label: "Import Into",
                        prop: "import_into"
                      }
                    },
                    [
                      _c(
                        "el-select",
                        {
                          staticClass: "config_select",
                          attrs: { placeholder: "Select", size: "small" },
                          model: {
                            value: _vm.importForm.import_into,
                            callback: function($$v) {
                              _vm.$set(_vm.importForm, "import_into", $$v)
                            },
                            expression: "importForm.import_into"
                          }
                        },
                        [
                          _c("el-option", {
                            attrs: { label: "Products", value: "Product" }
                          }),
                          _vm._v(" "),
                          _c("el-option", {
                            attrs: {
                              label: "CollectionTypes",
                              value: "CollectionType"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        rules: [
                          {
                            required: true,
                            message: "Import file is required",
                            trigger: "blur"
                          }
                        ],
                        label: "Choose File",
                        prop: "import_files"
                      }
                    },
                    [
                      _c("file-picker-modal", {
                        ref: "websiteWatermarkPicker",
                        attrs: {
                          "current-files": undefined,
                          "show-btn": true,
                          selectable: 1,
                          name: "File to Import",
                          "picker-id": "import_files"
                        },
                        on: {
                          filesChosen: _vm.handleFilesChosen,
                          filesUnChosen: _vm.handleFilesUnChosen
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      attrs: {
                        loading: _vm.loading,
                        plain: "",
                        type: "success"
                      },
                      on: {
                        click: function($event) {
                          return _vm.submitForm("importForm", "imports")
                        }
                      }
                    },
                    [_vm._v("Import")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tab-pane",
            { attrs: { label: "Export", name: "export" } },
            [
              _c(
                "el-form",
                {
                  ref: "exportForm",
                  attrs: {
                    model: _vm.exportForm,
                    "label-position": "left",
                    "label-width": "120px"
                  }
                },
                [
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        rules: [
                          {
                            required: true,
                            message: "Export type field is required",
                            trigger: "blur"
                          }
                        ],
                        label: "Export Type",
                        prop: "export_type"
                      }
                    },
                    [
                      _c(
                        "el-select",
                        {
                          staticClass: "config_select",
                          attrs: { placeholder: "Select", size: "small" },
                          model: {
                            value: _vm.exportForm.export_type,
                            callback: function($$v) {
                              _vm.$set(_vm.exportForm, "export_type", $$v)
                            },
                            expression: "exportForm.export_type"
                          }
                        },
                        [
                          _c("el-option", {
                            attrs: { label: "Orders", value: "Order" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        rules: [
                          {
                            required: true,
                            message: "Export date range field is required",
                            trigger: "blur"
                          }
                        ],
                        label: "Export Date Range",
                        prop: "export_date_range",
                        size: "small"
                      }
                    },
                    [
                      _c("el-date-picker", {
                        attrs: {
                          "picker-options": _vm.dateRangeOptions,
                          type: "daterange",
                          align: "right",
                          "unlink-panels": "",
                          "range-separator": "To",
                          "start-placeholder": "Start date",
                          "end-placeholder": "End date",
                          format: "dd/MM/yyyy",
                          "value-format": "dd-MM-yyyy",
                          placeholder: "dd/MM/yyyy"
                        },
                        model: {
                          value: _vm.exportForm.export_date_range,
                          callback: function($$v) {
                            _vm.$set(_vm.exportForm, "export_date_range", $$v)
                          },
                          expression: "exportForm.export_date_range"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      attrs: {
                        loading: _vm.loading,
                        plain: "",
                        type: "success"
                      },
                      on: {
                        click: function($event) {
                          return _vm.submitForm("exportForm", "exports")
                        }
                      }
                    },
                    [_vm._v("Export")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0abbb9be", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0abbb9be\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin-spa/pages/reports/ImportExport.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0abbb9be\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin-spa/pages/reports/ImportExport.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("20880444", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0abbb9be\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ImportExport.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0abbb9be\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ImportExport.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/admin-spa/pages/reports/ImportExport.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0abbb9be\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin-spa/pages/reports/ImportExport.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"@babel/preset-env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"]},\"forceAllTransforms\":true}]],\"plugins\":[\"@babel/plugin-proposal-object-rest-spread\",[\"@babel/plugin-transform-runtime\",{\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin-spa/pages/reports/ImportExport.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0abbb9be\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin-spa/pages/reports/ImportExport.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/admin-spa/pages/reports/ImportExport.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0abbb9be", Component.options)
  } else {
    hotAPI.reload("data-v-0abbb9be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});