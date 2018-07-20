webpackJsonp([39],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin-spa/components/AddressForm.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {

    name: 'AddressForm',

    components: {},

    props: {
        form: {
            type: Object,
            required: true
        },
        type: {
            type: String,
            required: false,
            default: function _default() {
                return '';
            }
        },
        span: {
            type: Number,
            required: false,
            default: function _default() {
                return 8;
            }
        },
        offset: {
            type: Number,
            required: false,
            default: function _default() {
                return 4;
            }
        },
        required: {
            type: Boolean,
            required: false,
            default: function _default() {
                return true;
            }
        },
        prop: {
            type: String,
            required: false,
            default: function _default() {
                return '';
            }
        },
        prefixProp: {
            type: Boolean,
            required: false,
            default: function _default() {
                return false;
            }
        }
    },

    data: function data() {
        return {
            loading: false
        };
    },


    computed: {},

    watch: {},

    mounted: function mounted() {
        console.log('AddressForm.vue Mounted');
    },


    methods: {

        /**
         * Format the input label name based on the type of address
         *
         * @param String name
         * @return String
         */
        getFormatedLabel: function getFormatedLabel(name) {
            var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (this.type) {
                if (prop) {
                    return this.type + '_' + name;
                }
                return this.capitalize(this.type) + ' ' + name;
            } else {
                return name;
            }
        }
    }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b78b468\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin-spa/components/AddressForm.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1b78b468\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin-spa/components/AddressForm.vue":
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
        { attrs: { gutter: 20 } },
        [
          _c(
            "el-col",
            { attrs: { md: { span: _vm.span, offset: _vm.offset } } },
            [
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: _vm.getFormatedLabel("Address Line 1"),
                    size: "small",
                    prop: _vm.prop ? _vm.prop + ".line_1" : "line_1",
                    rules: {
                      required: _vm.required,
                      message: "Line 1 is required",
                      trigger: "blur"
                    }
                  }
                },
                [
                  _vm.prop && _vm.prefixProp
                    ? _c("el-input", {
                        attrs: { autofocus: true, "auto-complete": "off" },
                        model: {
                          value: _vm.form[_vm.prop].line_1,
                          callback: function($$v) {
                            _vm.$set(_vm.form[_vm.prop], "line_1", $$v)
                          },
                          expression: "form[prop].line_1"
                        }
                      })
                    : _c("el-input", {
                        attrs: { autofocus: true, "auto-complete": "off" },
                        model: {
                          value: _vm.form[_vm.getFormatedLabel("line_1", true)],
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              _vm.getFormatedLabel("line_1", true),
                              $$v
                            )
                          },
                          expression: "form[getFormatedLabel('line_1', true)]"
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
            "el-col",
            { attrs: { md: _vm.span } },
            [
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: _vm.getFormatedLabel("Address Line 2"),
                    size: "small",
                    prop: _vm.prop ? _vm.prop + ".line_2" : "line_2"
                  }
                },
                [
                  _vm.prop && _vm.prefixProp
                    ? _c("el-input", {
                        attrs: { autofocus: true, "auto-complete": "off" },
                        model: {
                          value: _vm.form[_vm.prop].line_2,
                          callback: function($$v) {
                            _vm.$set(_vm.form[_vm.prop], "line_2", $$v)
                          },
                          expression: "form[prop].line_2"
                        }
                      })
                    : _c("el-input", {
                        attrs: { autofocus: true, "auto-complete": "off" },
                        model: {
                          value: _vm.form[_vm.getFormatedLabel("line_2", true)],
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              _vm.getFormatedLabel("line_2", true),
                              $$v
                            )
                          },
                          expression: "form[getFormatedLabel('line_2', true)]"
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
        "el-row",
        { attrs: { gutter: 20 } },
        [
          _c(
            "el-col",
            { attrs: { md: { span: _vm.span, offset: _vm.offset } } },
            [
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: _vm.getFormatedLabel("Address Town"),
                    size: "small",
                    prop: _vm.prop ? _vm.prop + ".town" : "town",
                    rules: {
                      required: _vm.required,
                      message: "Town is required",
                      trigger: "blur"
                    }
                  }
                },
                [
                  _vm.prop && _vm.prefixProp
                    ? _c("el-input", {
                        attrs: { autofocus: true, "auto-complete": "off" },
                        model: {
                          value: _vm.form[_vm.prop].town,
                          callback: function($$v) {
                            _vm.$set(_vm.form[_vm.prop], "town", $$v)
                          },
                          expression: "form[prop].town"
                        }
                      })
                    : _c("el-input", {
                        attrs: { autofocus: true, "auto-complete": "off" },
                        model: {
                          value: _vm.form[_vm.getFormatedLabel("town", true)],
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              _vm.getFormatedLabel("town", true),
                              $$v
                            )
                          },
                          expression: "form[getFormatedLabel('town', true)]"
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
            "el-col",
            { attrs: { md: _vm.span } },
            [
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: _vm.getFormatedLabel("Address County"),
                    size: "small",
                    prop: _vm.prop ? _vm.prop + ".county" : "county",
                    rules: {
                      required: _vm.required,
                      message: "County is required",
                      trigger: "blur"
                    }
                  }
                },
                [
                  _vm.prop && _vm.prefixProp
                    ? _c("el-input", {
                        attrs: { autofocus: true, "auto-complete": "off" },
                        model: {
                          value: _vm.form[_vm.prop].county,
                          callback: function($$v) {
                            _vm.$set(_vm.form[_vm.prop], "county", $$v)
                          },
                          expression: "form[prop].county"
                        }
                      })
                    : _c("el-input", {
                        attrs: { autofocus: true, "auto-complete": "off" },
                        model: {
                          value: _vm.form[_vm.getFormatedLabel("county", true)],
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              _vm.getFormatedLabel("county", true),
                              $$v
                            )
                          },
                          expression: "form[getFormatedLabel('county', true)]"
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
        "el-row",
        { attrs: { gutter: 20 } },
        [
          _c(
            "el-col",
            { attrs: { md: { span: _vm.span, offset: _vm.offset } } },
            [
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: _vm.getFormatedLabel("Address Postcode"),
                    size: "small",
                    prop: _vm.prop ? _vm.prop + ".postcode" : "postcode",
                    rules: {
                      required: _vm.required,
                      message: "Postcode is required",
                      trigger: "blur"
                    }
                  }
                },
                [
                  _vm.prop && _vm.prefixProp
                    ? _c("el-input", {
                        attrs: { autofocus: true, "auto-complete": "off" },
                        model: {
                          value: _vm.form[_vm.prop].postcode,
                          callback: function($$v) {
                            _vm.$set(_vm.form[_vm.prop], "postcode", $$v)
                          },
                          expression: "form[prop].postcode"
                        }
                      })
                    : _c("el-input", {
                        attrs: { autofocus: true, "auto-complete": "off" },
                        model: {
                          value:
                            _vm.form[_vm.getFormatedLabel("postcode", true)],
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              _vm.getFormatedLabel("postcode", true),
                              $$v
                            )
                          },
                          expression: "form[getFormatedLabel('postcode', true)]"
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
            "el-col",
            { attrs: { md: _vm.span } },
            [
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: _vm.getFormatedLabel("Address Country"),
                    size: "small",
                    prop: _vm.prop ? _vm.prop + ".country" : "country",
                    rules: {
                      required: _vm.required,
                      message: "Country is required",
                      trigger: "blur"
                    }
                  }
                },
                [
                  _vm.prop && _vm.prefixProp
                    ? _c("el-input", {
                        attrs: { autofocus: true, "auto-complete": "off" },
                        model: {
                          value: _vm.form[_vm.prop].country,
                          callback: function($$v) {
                            _vm.$set(_vm.form[_vm.prop], "country", $$v)
                          },
                          expression: "form[prop].country"
                        }
                      })
                    : _c("el-input", {
                        attrs: { autofocus: true, "auto-complete": "off" },
                        model: {
                          value:
                            _vm.form[_vm.getFormatedLabel("country", true)],
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              _vm.getFormatedLabel("country", true),
                              $$v
                            )
                          },
                          expression: "form[getFormatedLabel('country', true)]"
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
    require("vue-hot-reload-api")      .rerender("data-v-1b78b468", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b78b468\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin-spa/components/AddressForm.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b78b468\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin-spa/components/AddressForm.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("d47d6040", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b78b468\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddressForm.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b78b468\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddressForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/admin-spa/components/AddressForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b78b468\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin-spa/components/AddressForm.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin-spa/components/AddressForm.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1b78b468\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin-spa/components/AddressForm.vue")
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
Component.options.__file = "resources/assets/admin-spa/components/AddressForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b78b468", Component.options)
  } else {
    hotAPI.reload("data-v-1b78b468", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});