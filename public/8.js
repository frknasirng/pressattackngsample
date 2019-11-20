(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/ResetPassword.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/ResetPassword.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {},
  created: function created() {
    this.$store.commit('setResetPasswordResponse', {});
  },
  data: function data() {
    return {
      credentials: {
        email: this.$route.params.email,
        token: this.$route.params.token,
        password: '',
        password_confirmation: ''
      },
      errors: []
    };
  },
  computed: {
    resetPasswordLoadStatus: function resetPasswordLoadStatus() {
      return this.$store.getters.getResetPasswordLoadStatus;
    },
    resetPasswordResponse: function resetPasswordResponse() {
      return this.$store.getters.getResetPasswordResponse;
    }
  },
  watch: {
    resetPasswordLoadStatus: function resetPasswordLoadStatus(val) {
      if (val === 1) {
        this.errors.splice(0, this.errors.length);
      } else if (val === 2) {
        this.$store.commit('setBearerToken', this.resetPasswordResponse.data.token);
      } else if (val === 3) {
        if (this.resetPasswordResponse.message) {
          this.errors.push(this.resetPasswordResponse.message);
        } else {
          this.errors.push("...an unknown error was encountered.");
        }
      }
    }
  },
  methods: {
    checkForm: function checkForm() {
      this.errors = [];

      if (!this.credentials.password) {
        this.errors.push("Password required.");
      }

      if (!this.credentials.password_confirmation) {
        this.errors.push("Password confirmation required.");
      }

      if (this.credentials.password !== this.credentials.password_confirmation) {
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
    resetPassword: function resetPassword(credentials) {
      var validForm = this.checkForm();

      if (validForm && this.resetPasswordLoadStatus !== 1) {
        this.$store.dispatch('resetPassword', credentials);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/ResetPassword.vue?vue&type=template&id=41baacce&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/ResetPassword.vue?vue&type=template&id=41baacce& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm.resetPasswordResponse.status === 200
      ? _c(
          "div",
          {
            staticClass:
              "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4",
            attrs: { role: "alert" }
          },
          [
            _c("strong", { staticClass: "font-bold" }, [_vm._v("Success")]),
            _vm._v("\n\t\tPassword Changed Successfully.\n\t\t")
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    !(_vm.resetPasswordResponse.status === 200)
      ? _c("form", { staticClass: "mt-7" }, [
          _c("h1", { staticClass: "text-center text-lg text-gray-800 m-5" }, [
            _vm._v("Reset Password")
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
                    value: _vm.credentials.password,
                    expression: "credentials.password"
                  }
                ],
                staticClass:
                  "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500",
                attrs: {
                  id: "inline-password",
                  type: "password",
                  placeholder: "******************"
                },
                domProps: { value: _vm.credentials.password },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.credentials, "password", $event.target.value)
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
                    value: _vm.credentials.password_confirmation,
                    expression: "credentials.password_confirmation"
                  }
                ],
                staticClass:
                  "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500",
                attrs: {
                  id: "inline-confirm-password",
                  type: "password",
                  placeholder: "******************"
                },
                domProps: { value: _vm.credentials.password_confirmation },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.credentials,
                      "password_confirmation",
                      $event.target.value
                    )
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
              _vm.resetPasswordLoadStatus !== 1
                ? _c("div", { staticClass: "md:w-2/3" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.resetPassword(_vm.credentials)
                          }
                        }
                      },
                      [_vm._v("\n\t\t\t\t\tChange Password\n\t\t\t\t")]
                    )
                  ])
                : _c("clip-loader", {
                    attrs: { loading: true, color: "#38b2ac", size: "20px" }
                  })
            ],
            1
          )
        ])
      : _vm._e()
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
          attrs: { for: "inline-password" }
        },
        [_vm._v("\n\t\t\t\t\tPassword\n\t\t\t\t")]
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
        [_vm._v("\n\t\t\t\t\tConfirm Password\n\t\t\t\t")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/auth/ResetPassword.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/auth/ResetPassword.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResetPassword_vue_vue_type_template_id_41baacce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=template&id=41baacce& */ "./resources/js/components/auth/ResetPassword.vue?vue&type=template&id=41baacce&");
/* harmony import */ var _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/ResetPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetPassword_vue_vue_type_template_id_41baacce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResetPassword_vue_vue_type_template_id_41baacce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/ResetPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/ResetPassword.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/auth/ResetPassword.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/ResetPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/ResetPassword.vue?vue&type=template&id=41baacce&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/auth/ResetPassword.vue?vue&type=template&id=41baacce& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_41baacce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPassword.vue?vue&type=template&id=41baacce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/ResetPassword.vue?vue&type=template&id=41baacce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_41baacce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_41baacce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);