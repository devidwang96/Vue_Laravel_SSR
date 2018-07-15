webpackJsonp([2],{

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(16)(
  /* script */
  null,
  /* template */
  __webpack_require__(147),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/rinzler/Desktop/sites/vue_laravel_cms/resources/assets/js/main/components/Pages/404.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] 404.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0665a723", Component.options)
  } else {
    hotAPI.reload("data-v-0665a723", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-404"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "round"
  }, [_c('div', {
    staticClass: "round__body text-center"
  }, [_c('h2', [_vm._v("\n                    404\n                ")]), _vm._v(" "), _c('p', [_vm._v("Произошла ошибка! "), _c('br'), _vm._v("\n                    Такой страницы не существует :( ")]), _vm._v(" "), _c('p', [_c('button', {
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Вернуться на страницу")])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0665a723", module.exports)
  }
}

/***/ })

});