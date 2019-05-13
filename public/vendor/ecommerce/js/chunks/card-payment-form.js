webpackJsonp([53],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"@babel/preset-env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"]},\"forceAllTransforms\":true}]],\"plugins\":[\"@babel/plugin-proposal-object-rest-spread\",[\"@babel/plugin-transform-runtime\",{\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin-spa/components/CardPaymentForm.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
var stripe = window.Stripe(window.ecommerceConfig.stripe_public_key);
var elements = stripe.elements();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CardPaymentForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    onTokenCreation: {
      type: Function,
      required: false,
      "default": function _default() {
        return function (hasError, tokenObject, errorObject) {};
      }
    },
    onFormSubmit: {
      type: Function,
      required: false,
      "default": function _default() {
        return function () {};
      }
    },
    size: {
      type: String,
      required: false,
      "default": function _default() {
        return '';
      }
    }
  },
  data: function data() {
    return {
      cardErrors: {
        number: null,
        date: null,
        cvc: null
      },
      loading: false,
      cardNumberElement: undefined,
      cardExpiryElement: undefined,
      cardCvcElement: undefined
    };
  },
  computed: {},
  watch: {},
  mounted: function mounted() {
    console.log('CardPaymentForm.vue Mounted');
    this.setupStripe();
  },
  destroyed: function destroyed() {
    this.clearForm(true);
  },
  methods: {
    /**
         * Setup the stripe element on the page.
         *
         * @return void
         */
    setupStripe: function setupStripe() {
      var isMini = this.size.includes('mini');
      var isSmall = this.size.includes('small');
      var isMedium = this.size.includes('medium');
      var color = '#606266';
      var placeholderColor = '#c0c4cc';
      var style = {
        base: {
          fontSize: isMini ? '12px' : isSmall ? '13px' : isMedium ? '14px' : '14px',
          color: color,
          fontSmoothing: 'antialiased',
          fontFamily: 'Helvetica Neue',
          '::placeholder': {
            color: placeholderColor
          }
        },
        'invalid': {
          'color': color
        } // Create the card number element.

      };
      this.cardNumberElement = elements.create('cardNumber', {
        style: style
      });
      this.cardNumberElement.mount(this.$refs.cardNumber); // Create the expiry date element.

      this.cardExpiryElement = elements.create('cardExpiry', {
        style: style
      });
      this.cardExpiryElement.mount(this.$refs.cardExpiry); // Create the cvc element.

      this.cardCvcElement = elements.create('cardCvc', {
        style: style
      });
      this.cardCvcElement.mount(this.$refs.cardCvc);
      this.listenForEvents();
    },

    /**
         * Listen for stripe events.
         *
         * @return void
         */
    listenForEvents: function listenForEvents() {
      // Card number change event.
      this.cardNumberElement.on('change', function (event, value) {
        // Switch brand logo.
        if (event.brand) {
          this.setBrandIcon(event.brand);
        } // Focus on next element.


        if (event.complete) {
          this.cardExpiryElement.focus();
        }

        this.setOutcome(event, 'number_change');
      }.bind(this)); // Card expiry change event.

      this.cardExpiryElement.on('change', function (event) {
        // Focus on next element.
        if (event.complete) {
          this.cardCvcElement.focus();
        }

        this.setOutcome(event, 'expiry_change');
      }.bind(this)); // Card cvc change event.

      this.cardCvcElement.on('change', function (event) {
        // Focus on next element.
        if (event.complete) {// $payment_submit.focus();
        }

        this.setOutcome(event, 'cvc_change');
      }.bind(this));
    },

    /**
         * Set the card brand icon.
         *
         * @var string brand
         * @return void
         */
    setBrandIcon: function setBrandIcon(brand) {
      console.log(brand);
    },

    /**
         * Determine what happens on events.
         *
         * @var Object result
         * @var Mixed type
         * @return void
         */
    setOutcome: function setOutcome(result) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // Hide card number error elements.
      if (type === 'number_change') {
        this.cardErrors.number = null;
      } // Hide card expiry error elements.


      if (type === 'expiry_change') {
        this.cardErrors.date = null;
      } // Hide card cvc error elements.


      if (type === 'cvc_change') {
        this.cardErrors.cvc = null;
      }

      if (result.token) {
        // Tell the parent that a token has been created.
        this.onTokenCreation(false, result.token, {});
        this.$set(this.model, 'payment_token', result.token.id);
        this.clearForm(); // Submit the form:

        this.loading = false;
      } else if (result.error) {
        // Tell the parent that a token hasn't been created.
        this.onTokenCreation(true, {}, result.error); // Re-enable the submit button.

        this.loading = false; // Display error

        this.handleError(result.error);
      }
    },

    /**
         * Determine what happens on error.
         *
         * @var Object error
         * @return void
         */
    handleError: function handleError(error) {
      // The error was a validation_error
      if (error.type === 'validation_error' && error.code) {
        var code = error.code; // Card Number error has occured.

        if (~code.indexOf('number')) {
          this.cardErrors.number = error.message;
        } // Expiry error has occured.


        if (~code.indexOf('expiry')) {
          this.cardErrors.date = error.message;
        } // CVC error has occured.


        if (~code.indexOf('cvc')) {
          this.cardErrors.cvc = error.message;
        }
      } else {// Another type of error occured.
      }
    },
    clearForm: function clearForm() {
      var destroy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var method = 'clear';

      if (destroy) {
        method = 'destroy';
      }

      this.cardNumberElement[method](this.$refs.cardNumber);
      this.cardExpiryElement[method](this.$refs.cardExpiry);
      this.cardCvcElement[method](this.$refs.cardCvc);
    },
    createToken: function createToken() {
      this.onFormSubmit();
      this.loading = true;
      stripe.createToken(this.cardNumberElement, {
        name: this.model.cardholder_name
      }).then(this.setOutcome);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62bd92a4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin-spa/components/CardPaymentForm.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Colors\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Background\n-------------------------- */\n/* Border\n-------------------------- */\n/* Box-shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Font\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* Message Box\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Custom */\n/* Menu\n-------------------------- */\n.stripe_input[data-v-62bd92a4] {\n  -webkit-appearance: none;\n  background-color: #fff;\n  background-image: none;\n  border-radius: 4px;\n  border: 1px solid #dcdfe6;\n  border-color: #dcdfe6;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: inherit;\n  font-size: 14px;\n  line-height: 1;\n  outline: none;\n  padding: 12px 15px;\n  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  width: 100%;\n  height: 40px;\n}\n.stripe_input[data-v-62bd92a4]:hover {\n  cursor: text;\n  border: 1px solid #dcdfe6;\n  border-color: #c0c4cc;\n}\n.stripe_input.StripeElement--focus[data-v-62bd92a4] {\n  border: 1px solid #dcdfe6;\n  border-color: #2294ad;\n}\n.stripe_input.StripeElement--invalid[data-v-62bd92a4] {\n  border: 1px solid #dcdfe6;\n  border-color: #f56c6c;\n}\n.stripe_input.StripeElement--complete[data-v-62bd92a4] {\n  border: 1px solid #dcdfe6;\n  border-color: #67c23a;\n}\n.stripe_input.medium[data-v-62bd92a4] {\n  font-size: 14px;\n  height: 36px;\n  padding: 10px 15px;\n}\n.stripe_input.small[data-v-62bd92a4] {\n  font-size: 13px;\n  height: 32px;\n  padding: 8.5px 15px;\n}\n.stripe_input.mini[data-v-62bd92a4] {\n  font-size: 12px;\n  height: 28px;\n  padding: 7px 15px;\n}\n.el-card.secure_payment_form[data-v-62bd92a4] {\n  margin: 20px 0px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-62bd92a4\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin-spa/components/CardPaymentForm.vue":
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
      ],
      staticClass: "card_payment_form"
    },
    [
      _vm._t("before_form", null, { model: _vm.model }),
      _vm._v(" "),
      _c(
        "el-row",
        { attrs: { gutter: 20 } },
        [
          _c(
            "el-col",
            { attrs: { md: { span: 16, offset: 4 } } },
            [
              _c(
                "el-card",
                { staticClass: "secure_payment_form box-card" },
                [
                  _c(
                    "div",
                    {
                      staticClass: "clearfix",
                      attrs: { slot: "header" },
                      slot: "header"
                    },
                    [_c("span", [_vm._v("Secure Payment Form")])]
                  ),
                  _vm._v(" "),
                  _vm._t(
                    "form",
                    [
                      _c(
                        "el-row",
                        { attrs: { gutter: 20 } },
                        [
                          _c(
                            "el-col",
                            { attrs: { md: { span: 12 } } },
                            [
                              _c(
                                "el-form-item",
                                {
                                  attrs: {
                                    rules: [
                                      {
                                        required: true,
                                        message: "Cardholder name is required."
                                      }
                                    ],
                                    label: "Cardholder Name",
                                    size: "small",
                                    prop: "cardholder_name"
                                  }
                                },
                                [
                                  _c("el-input", {
                                    attrs: { placeholder: "" },
                                    model: {
                                      value: _vm.model.cardholder_name,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model,
                                          "cardholder_name",
                                          $$v
                                        )
                                      },
                                      expression: "model.cardholder_name"
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
                            { attrs: { md: 12 } },
                            [
                              _c(
                                "el-form-item",
                                {
                                  attrs: {
                                    label: "Card Number",
                                    size: "small",
                                    prop: "card_number"
                                  }
                                },
                                [
                                  _c("div", {
                                    ref: "cardNumber",
                                    staticClass: "stripe_input small"
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "transition",
                                    { attrs: { name: "el-zoom-in-top" } },
                                    [
                                      _vm.cardErrors.number
                                        ? _c(
                                            "div",
                                            {
                                              staticClass: "el-form-item__error"
                                            },
                                            [
                                              _vm._v(
                                                "\n                    " +
                                                  _vm._s(
                                                    _vm.cardErrors.number
                                                  ) +
                                                  "\n                  "
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  )
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
                            { attrs: { md: { span: 12 } } },
                            [
                              _c(
                                "el-form-item",
                                {
                                  attrs: {
                                    label: "Card Expiry",
                                    size: "small",
                                    prop: "cardholder_expiry"
                                  }
                                },
                                [
                                  _c("div", {
                                    ref: "cardExpiry",
                                    staticClass: "stripe_input small"
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "transition",
                                    { attrs: { name: "el-zoom-in-top" } },
                                    [
                                      _vm.cardErrors.date
                                        ? _c(
                                            "div",
                                            {
                                              staticClass: "el-form-item__error"
                                            },
                                            [
                                              _vm._v(
                                                "\n                    " +
                                                  _vm._s(_vm.cardErrors.date) +
                                                  "\n                  "
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "el-col",
                            { attrs: { md: 12 } },
                            [
                              _c(
                                "el-form-item",
                                {
                                  attrs: {
                                    label: "Card CVC",
                                    size: "small",
                                    prop: "cardholder_cvc"
                                  }
                                },
                                [
                                  _c("div", {
                                    ref: "cardCvc",
                                    staticClass: "stripe_input small"
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "transition",
                                    { attrs: { name: "el-zoom-in-top" } },
                                    [
                                      _vm.cardErrors.cvc
                                        ? _c(
                                            "div",
                                            {
                                              staticClass: "el-form-item__error"
                                            },
                                            [
                                              _vm._v(
                                                "\n                    " +
                                                  _vm._s(_vm.cardErrors.cvc) +
                                                  "\n                  "
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
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
                    { model: _vm.model, cardErrors: _vm.cardErrors }
                  )
                ],
                2
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm._t("after_form", null, { model: _vm.model }),
      _vm._v(" "),
      _c(
        "el-row",
        { attrs: { gutter: 20 } },
        [
          _c(
            "el-col",
            { attrs: { md: { span: 16, offset: 4 } } },
            [
              _vm._t(
                "submit_button",
                [
                  _c(
                    "el-button",
                    {
                      attrs: { loading: _vm.loading, type: "success" },
                      on: { click: _vm.createToken }
                    },
                    [_vm._v("Process Payment")]
                  )
                ],
                { createToken: _vm.createToken }
              )
            ],
            2
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-62bd92a4", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62bd92a4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin-spa/components/CardPaymentForm.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62bd92a4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin-spa/components/CardPaymentForm.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("2f8ae74c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62bd92a4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CardPaymentForm.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62bd92a4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CardPaymentForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/admin-spa/components/CardPaymentForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62bd92a4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin-spa/components/CardPaymentForm.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"@babel/preset-env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"]},\"forceAllTransforms\":true}]],\"plugins\":[\"@babel/plugin-proposal-object-rest-spread\",[\"@babel/plugin-transform-runtime\",{\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin-spa/components/CardPaymentForm.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-62bd92a4\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin-spa/components/CardPaymentForm.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-62bd92a4"
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
Component.options.__file = "resources/assets/admin-spa/components/CardPaymentForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62bd92a4", Component.options)
  } else {
    hotAPI.reload("data-v-62bd92a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});