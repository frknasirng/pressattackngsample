(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../bus */ "./resources/js/bus.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {},
  mounted: function mounted() {},
  data: function data() {
    return {
      usr: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      errors: []
    };
  },
  computed: {
    registerLoadStatus: function registerLoadStatus() {
      return this.$store.getters.getRegisterLoadStatus;
    },
    registerResponse: function registerResponse() {
      return this.$store.getters.getRegisterResponse;
    }
  },
  watch: {
    registerLoadStatus: function registerLoadStatus(val) {
      if (val === 1) {
        this.errors.splice(0, this.errors.length);
      } else if (val === 2) {
        this.$store.commit('setBearerToken', this.registerResponse.data.token);
        _bus__WEBPACK_IMPORTED_MODULE_0__["Bus"].$emit('reloadApp');
        this.$router.push({
          name: 'home'
        });
      } else if (val === 3) {
        if (this.registerResponse.message) {
          this.errors.push(this.registerResponse.message);
        } else {
          this.errors.push("...an unknown error was encountered.");
        }
      }
    }
  },
  methods: {
    checkForm: function checkForm() {
      this.errors = [];

      if (!this.usr.name) {
        this.errors.push("Name required.");
      }

      if (!this.usr.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.usr.email)) {
        this.errors.push('Valid email required.');
      }

      if (!this.usr.password) {
        this.errors.push("Password required.");
      }

      if (!this.usr.password_confirmation) {
        this.errors.push("Password confirmation required.");
      }

      if (this.usr.password !== this.usr.password_confirmation) {
        this.errors.push("Passwords do not match");
      }

      if (!this.errors.length) {
        return true;
      } else {
        return false;
      }
    },
    validEmail: function validEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    register: function register(usr) {
      var validForm = this.checkForm();

      if (validForm) {
        this.$store.dispatch('register', usr);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Register.vue?vue&type=template&id=d4f9cbe2&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Register.vue?vue&type=template&id=d4f9cbe2& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("form", { ref: "register_form", staticClass: "mt-7" }, [
    _c("h1", { staticClass: "text-center text-lg text-gray-800 m-5" }, [
      _vm._v("Register")
    ]),
    _vm._v(" "),
    _vm.errors.length
      ? _c(
          "div",
          {
            staticClass:
              "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4",
            attrs: { role: "alert" }
          },
          [
            _c("strong", { staticClass: "font-bold" }, [
              _vm._v("The following error(s) were encountered:")
            ]),
            _vm._v(" "),
            _c(
              "ul",
              _vm._l(_vm.errors, function(error, index) {
                return _c("li", { key: index }, [_vm._v(_vm._s(error))])
              }),
              0
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "md:flex md:items-center mb-6" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "md:w-2/3" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.usr.name,
              expression: "usr.name"
            }
          ],
          staticClass:
            "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500",
          attrs: { id: "inline-full-name", type: "text", value: "Faruk Nasir" },
          domProps: { value: _vm.usr.name },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.usr, "name", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "md:flex md:items-center mb-6" }, [
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "md:w-2/3" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.usr.email,
              expression: "usr.email"
            }
          ],
          staticClass:
            "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500",
          attrs: {
            id: "inline-email",
            type: "email",
            placeholder: "usrname@example.com"
          },
          domProps: { value: _vm.usr.email },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.usr, "email", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "md:flex md:items-center mb-6" }, [
      _vm._m(2),
      _vm._v(" "),
      _c("div", { staticClass: "md:w-2/3" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.usr.password,
              expression: "usr.password"
            }
          ],
          staticClass:
            "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500",
          attrs: {
            id: "inline-password",
            type: "password",
            placeholder: "******************"
          },
          domProps: { value: _vm.usr.password },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.usr, "password", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "md:flex md:items-center mb-6" }, [
      _vm._m(3),
      _vm._v(" "),
      _c("div", { staticClass: "md:w-2/3" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.usr.password_confirmation,
              expression: "usr.password_confirmation"
            }
          ],
          staticClass:
            "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500",
          attrs: {
            id: "inline-confirm-password",
            type: "password",
            placeholder: "******************"
          },
          domProps: { value: _vm.usr.password_confirmation },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.usr, "password_confirmation", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "md:flex md:items-center" },
      [
        _c("div", { staticClass: "md:w-1/3" }),
        _vm._v(" "),
        _vm.registerLoadStatus !== 1
          ? _c("div", { staticClass: "md:w-2/3" }, [
              _c(
                "button",
                {
                  staticClass:
                    "shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.register(_vm.usr)
                    }
                  }
                },
                [_vm._v("\n\t\t\t\tRegister\n\t\t\t")]
              )
            ])
          : _c("clip-loader", {
              attrs: { loading: _vm.loading, color: "#38b2ac", size: "20px" }
            })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "md:w-1/3" }, [
      _c(
        "label",
        {
          staticClass:
            "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",
          attrs: { for: "inline-full-name" }
        },
        [_vm._v("\n\t\t\t\tFull Name\n\t\t\t")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "md:w-1/3" }, [
      _c(
        "label",
        {
          staticClass:
            "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",
          attrs: { for: "inline-email" }
        },
        [_vm._v("\n\t\t\t\tEmail\n\t\t\t")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "md:w-1/3" }, [
      _c(
        "label",
        {
          staticClass:
            "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",
          attrs: { for: "inline-password" }
        },
        [_vm._v("\n\t\t\t\tPassword\n\t\t\t")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "md:w-1/3" }, [
      _c(
        "label",
        {
          staticClass:
            "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",
          attrs: { for: "inline-confirm-password" }
        },
        [_vm._v("\n\t\t\t\tConfirm Password\n\t\t\t")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/auth/Register.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/auth/Register.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_d4f9cbe2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=d4f9cbe2& */ "./resources/js/components/auth/Register.vue?vue&type=template&id=d4f9cbe2&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_d4f9cbe2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_d4f9cbe2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/Register.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/auth/Register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/Register.vue?vue&type=template&id=d4f9cbe2&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/auth/Register.vue?vue&type=template&id=d4f9cbe2& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_d4f9cbe2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=d4f9cbe2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Register.vue?vue&type=template&id=d4f9cbe2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_d4f9cbe2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_d4f9cbe2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);