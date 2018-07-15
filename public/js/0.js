webpackJsonp([0],{

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(146),
  /* template */
  __webpack_require__(149),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/rinzler/Desktop/sites/vue_laravel_cms/resources/assets/js/main/components/Pages/Index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c27f7e46", Component.options)
  } else {
    hotAPI.reload("data-v-c27f7e46", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 146:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },
    mounted: function mounted() {},

    methods: {
        // Router transition

        // beforePageEnter(){
        //
        // }
    }
    // computed: {
    //     backend_data(){
    //         return this.state.backend_data[this.$route.name]
    //     }
    // },
    // Server XHR
    // backend_created(router, store, Component){
    //     return store.state.ServerXHR
    //         .open('get', Laravel.getLocalizedUrl('https://jsonplaceholder.typicode.com/posts/1'))
    //         .then(
    //             response => {
    //                 store.state.backend_data[router.currentRoute.name] = JSON.parse(response.responseText);
    //             }
    //         );
    // },
    // created(){
    //     // Client XHR
    //     if(process.BROWSER) {
    //         this.$http.get(
    //             this.Laravel.getLocalizedUrl('https://jsonplaceholder.typicode.com/posts/1')
    //         )
    //             .then(
    //                 response => {
    //                     this.change_backend_data({route_name: this.$route.name, backend_data: response.body});
    //                 }
    //             );
    //     }
    // }
});

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "main-content"
  }, [_c('router-view')], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c27f7e46", module.exports)
  }
}

/***/ })

});