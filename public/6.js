(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Login.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Login.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {},
  created: function created() {},
  data: function data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      errors: []
    };
  },
  computed: {
    loginLoadStatus: function loginLoadStatus() {
      return this.$store.getters.getLoginLoadStatus;
    },
    loginResponse: function loginResponse() {
      return this.$store.getters.getLoginResponse;
    }
  },
  watch: {
    loginLoadStatus: function loginLoadStatus(val) {
      if (val === 1) {
        this.errors.splice(0, this.errors.length);
      } else if (val === 2) {
        this.$store.commit('setBearerToken', this.loginResponse.data.token);
        _bus__WEBPACK_IMPORTED_MODULE_0__["Bus"].$emit('reloadApp');
        this.$router.push({
          name: 'home'
        });
      } else if (val === 3) {
        if (this.loginResponse.message) {
          console.log(this.loginResponse);
          this.errors.push("Username/Password mismatch");
        } else {
          this.errors.push("...an unknown error was encountered.");
        }
      }
    }
  },
  methods: {
    checkForm: function checkForm() {
      this.errors = [];

      if (!this.credentials.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.credentials.email)) {
        this.errors.push('Valid email required.');
      }

      if (!this.credentials.password) {
        this.errors.push("Password required.");
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
    login: function login(credentials) {
      var validForm = this.checkForm();

      if (validForm && this.loginLoadStatus !== 1) {
        this.$store.dispatch('login', credentials);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("form", { staticClass: "mt-7" }, [
    _c("h1", { staticClass: "text-center text-lg text-gray-800 m-5" }, [
      _vm._v("Login")
    ]),
    _vm._v(" "),
    _vm.errors.length
      ? _c(
          "div",
          {
            staticClass:
              "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4",
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
              value: _vm.credentials.email,
              expression: "credentials.email"
            }
          ],
          staticClass:
            "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500",
          attrs: {
            id: "inline-full-name",
            type: "email",
            placeholder: "user@example.com"
          },
          domProps: { value: _vm.credentials.email },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.credentials, "email", $event.target.value)
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
              value: _vm.credentials.password,
              expression: "credentials.password"
            }
          ],
          staticClass:
            "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500",
          attrs: {
            id: "inline-username",
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
      _c("div", { staticClass: "md:w-1/3" }),
      _vm._v(" "),
      _c(
        "label",
        { staticClass: "md:w-2/3 block text-gray-500 font-bold" },
        [
          _c(
            "router-link",
            {
              staticClass: "text-sm underline",
              attrs: { to: "/auth/forgot-password" }
            },
            [_vm._v("\n\t\t\t\ti forgot my password?\n\t\t\t")]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "md:flex md:items-center" },
      [
        _c("div", { staticClass: "md:w-1/3" }),
        _vm._v(" "),
        _vm.loginLoadStatus !== 1
          ? _c("div", { staticClass: "md:w-2/3" }, [
              _c(
                "button",
                {
                  staticClass:
                    "shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.login(_vm.credentials)
                    }
                  }
                },
                [_vm._v("\n\t\t\t\tLogin\n\t\t\t")]
              ),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "text-sm text-gray-500" },
                [
                  _vm._v("\n\t\t\t\tNot registered yet? \n\t\t\t\t"),
                  _c(
                    "router-link",
                    {
                      staticClass: "text-teal-500",
                      attrs: { to: "/auth/register" }
                    },
                    [_vm._v("\n\t\t\t\t\tClick here\n\t\t\t\t")]
                  )
                ],
                1
              )
            ])
          : _c("clip-loader", {
              attrs: { loading: true, color: "#38b2ac", size: "20px" }
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
          attrs: { for: "inline-username" }
        },
        [_vm._v("\n\t\t\t\tPassword\n\t\t\t")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/auth/Login.vue":
/*!************************************************!*\
  !*** ./resources/js/components/auth/Login.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=4221c3ad& */ "./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/Login.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/auth/Login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=4221c3ad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);