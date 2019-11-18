(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/NavComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/NavComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  created: function created() {
    this.$store.dispatch('loadAuthUser');
  },
  mounted: function mounted() {},
  data: function data() {
    return {};
  },
  computed: {
    logoutLoadStatus: function logoutLoadStatus() {
      return this.$store.getters.getLogoutLoadStatus;
    },
    logoutResponse: function logoutResponse() {
      return this.$store.getters.getLogoutResponse;
    }
  },
  watch: {
    logoutLoadStatus: function logoutLoadStatus(val) {
      if (val === 2 || val === 3) {
        this.$store.commit('setBearerToken', '');
        _bus__WEBPACK_IMPORTED_MODULE_0__["Bus"].$emit('reloadApp');
      }
    }
  },
  methods: {
    logout: function logout() {
      this.$store.dispatch('logout');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/NavComponent.vue?vue&type=template&id=7bb0f12b&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/NavComponent.vue?vue&type=template&id=7bb0f12b& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "nav",
    {
      staticClass:
        "flex bg-white border-b border-gray-200 z-50000 fixed top-0 inset-x-0 h-16 items-center"
    },
    [
      _c(
        "div",
        { staticClass: "w-full max-w-screen-xl relative mx-auto px-12" },
        [
          _c("div", { staticClass: "flex items-center" }, [
            _c("div", { staticClass: "lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8" }, [
              _c(
                "div",
                { staticClass: "flex items-center" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass:
                        "block lg:mr-4 text-gray-500 hover:text-gray-800 font-medium",
                      attrs: { to: "/" }
                    },
                    [_vm._v("\n\t\t\t\t\t\tU D E M E\n\t\t\t\t\t")]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex flex-grow lg:w-1/4 xl:w-4/5" }, [
              _c("div", { staticClass: "w-full lg:px-3 xl:w-3/4 xl:px-6" }, [
                _c("div", { staticClass: "relative" }, [
                  _c("input", {
                    staticClass:
                      "transition focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal",
                    attrs: { type: "text", placeholder: "Search the projects" }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center"
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass:
                            "fill-current pointer-events-none text-gray-600 w-4 h-4",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                            }
                          })
                        ]
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "flex px-6 items-center lg:hidden text-gray-500 focus:outline-none focus:text-gray-700",
                  attrs: { type: "button", id: "sidebar-open" }
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "fill-current w-4 h-4",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                        }
                      })
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "hidden flex px-6 items-center lg:hidden text-gray-500 focus:outline-none focus:text-gray-700",
                  attrs: { type: "button", id: "sidebar-close" }
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "fill-current w-4 h-4",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
                        }
                      })
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "hidden lg:flex lg:items-center lg:justify-between xl:w-3/4 px-6"
                },
                [
                  _c("div", { staticClass: "relative mr-4" }, [
                    _c("ul", { staticClass: "flex" }, [
                      _c(
                        "li",
                        { staticClass: "mr-6" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "text-gray-500 hover:text-gray-800",
                              attrs: { to: "/blog" }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\tBlog\n\t\t\t\t\t\t\t\t"
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        { staticClass: "mr-6" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "text-gray-500 hover:text-gray-800",
                              attrs: { to: "/project" }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\tProjects\n\t\t\t\t\t\t\t\t"
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.bearerToken
                        ? _c(
                            "li",
                            { staticClass: "mr-6" },
                            [
                              _vm.logoutLoadStatus !== 1
                                ? _c(
                                    "a",
                                    {
                                      staticClass:
                                        "text-gray-500 hover:text-gray-800 cursor-pointer",
                                      on: { click: _vm.logout }
                                    },
                                    [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\tLogout\n\t\t\t\t\t\t\t\t"
                                      )
                                    ]
                                  )
                                : _c("clip-loader", {
                                    attrs: {
                                      loading: true,
                                      color: "#38b2ac",
                                      size: "20px"
                                    }
                                  })
                            ],
                            1
                          )
                        : _c(
                            "li",
                            { staticClass: "mr-6" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass:
                                    "text-gray-500 hover:text-gray-800",
                                  attrs: { to: "/auth/login" }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\tLogin\n\t\t\t\t\t\t\t\t"
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                      _vm._v(" "),
                      _vm._m(0)
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex justify-start items-center text-gray-500"
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass:
                            "block flex items-center hover:text-gray-700 mr-5",
                          attrs: { href: "#" }
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass: "fill-current w-5 h-5",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20"
                              }
                            },
                            [
                              _c("title", [_vm._v("GitHub")]),
                              _c("path", {
                                attrs: {
                                  d:
                                    "M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"
                                }
                              })
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass:
                            "block flex items-center hover:text-gray-700 mr-5",
                          attrs: { href: "#" }
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass: "fill-current w-5 h-5",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20"
                              }
                            },
                            [
                              _c("title", [_vm._v("Twitter")]),
                              _c("path", {
                                attrs: {
                                  d:
                                    "M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"
                                }
                              })
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass:
                            "block flex items-center hover:text-gray-700",
                          attrs: { href: "/discord" }
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass: "fill-current w-5 h-5",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 146 146"
                              }
                            },
                            [
                              _c("title", [_vm._v("Discord")]),
                              _c("path", {
                                attrs: {
                                  d:
                                    "M107.75 125.001s-4.5-5.375-8.25-10.125c16.375-4.625 22.625-14.875 22.625-14.875-5.125 3.375-10 5.75-14.375 7.375-6.25 2.625-12.25 4.375-18.125 5.375-12 2.25-23 1.625-32.375-.125-7.125-1.375-13.25-3.375-18.375-5.375-2.875-1.125-6-2.5-9.125-4.25-.375-.25-.75-.375-1.125-.625-.25-.125-.375-.25-.5-.375-2.25-1.25-3.5-2.125-3.5-2.125s6 10 21.875 14.75c-3.75 4.75-8.375 10.375-8.375 10.375-27.625-.875-38.125-19-38.125-19 0-40.25 18-72.875 18-72.875 18-13.5 35.125-13.125 35.125-13.125l1.25 1.5c-22.5 6.5-32.875 16.375-32.875 16.375s2.75-1.5 7.375-3.625c13.375-5.875 24-7.5 28.375-7.875.75-.125 1.375-.25 2.125-.25 7.625-1 16.25-1.25 25.25-.25 11.875 1.375 24.625 4.875 37.625 12 0 0-9.875-9.375-31.125-15.875l1.75-2S110 19.626 128 33.126c0 0 18 32.625 18 72.875 0 0-10.625 18.125-38.25 19zM49.625 66.626c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875.125-7.625-5.625-13.875-12.75-13.875zm45.625 0c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875s-5.625-13.875-12.75-13.875z",
                                  "fill-rule": "nonzero"
                                }
                              })
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "mr-6" }, [
      _c(
        "a",
        {
          staticClass:
            "rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-teal-500 hover:bg-teal-600 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md",
          attrs: { href: "/docs/installation" }
        },
        [_vm._v("\n\t\t\t\t\t\t\t\t\tDonate\n\t\t\t\t\t\t\t\t")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/global/NavComponent.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/global/NavComponent.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavComponent_vue_vue_type_template_id_7bb0f12b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavComponent.vue?vue&type=template&id=7bb0f12b& */ "./resources/js/components/global/NavComponent.vue?vue&type=template&id=7bb0f12b&");
/* harmony import */ var _NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/global/NavComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavComponent_vue_vue_type_template_id_7bb0f12b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavComponent_vue_vue_type_template_id_7bb0f12b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/NavComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/NavComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/global/NavComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/NavComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/NavComponent.vue?vue&type=template&id=7bb0f12b&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/global/NavComponent.vue?vue&type=template&id=7bb0f12b& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_template_id_7bb0f12b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavComponent.vue?vue&type=template&id=7bb0f12b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/NavComponent.vue?vue&type=template&id=7bb0f12b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_template_id_7bb0f12b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_template_id_7bb0f12b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);