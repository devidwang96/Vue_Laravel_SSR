webpackJsonp([5],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(16)(
  /* script */
  null,
  /* template */
  __webpack_require__(159),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/rinzler/Desktop/sites/smartlab.test/resources/assets/js/main/components/Pages/Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61f9d3d2", Component.options)
  } else {
    hotAPI.reload("data-v-61f9d3d2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('svg', {
    attrs: {
      "viewBox": "0 0 300 80",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('clipPath', {
    attrs: {
      "id": "myClip"
    }
  }, [_c('text', {
    staticClass: "heavy",
    staticStyle: {
      "font-weight": "bold",
      "font-size": "200px"
    },
    attrs: {
      "x": "0",
      "y": "300"
    }
  }, [_vm._v("TEST")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-home"
  }, [_c('div', {
    staticClass: "section-intro"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "block block-large smartlab"
  }, [_c('div', {
    staticClass: "block__mask"
  }, [_c('img', {
    staticClass: "mouse-move-animate",
    attrs: {
      "data-sensivity": "30",
      "src": "/images/maskbg1.png",
      "alt": ""
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "block block-small project"
  }, [_c('div', {
    staticClass: "block__mask"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "block block-small count"
  })])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-61f9d3d2", module.exports)
  }
}

/***/ })

});