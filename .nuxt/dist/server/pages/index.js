exports.ids = [10];
exports.modules = {

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(141);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1bb9d95f", content, true, context)
};

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/landing-one/ProductItem.vue?vue&type=template&id=b6194de2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className},[_vm._ssrNode("<div class=\"single-product-box\">","</div>",[_vm._ssrNode("<div class=\"product-image\">","</div>",[_c('nuxt-link',{attrs:{"to":("/products-details/" + (_vm.product.id))}},[_c('img',{attrs:{"src":_vm.product.image,"alt":_vm.product.name}}),_vm._v(" "),_c('img',{attrs:{"src":_vm.product.imageHover,"alt":_vm.product.name}})]),_vm._ssrNode(" "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('a',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{"hover":true}}],attrs:{"href":"javascript:void(0)","title":"Quick View"},on:{"click":function($event){$event.preventDefault();return _vm.quickView.apply(null, arguments)}}},[_vm._ssrNode("<i class=\"far fa-eye\"></i>")])]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('a',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{"hover":true}}],attrs:{"href":"#","title":"Add to Wishlist"}},[_vm._ssrNode("<i class=\"far fa-heart\"></i>")])]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('a',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{"hover":true}}],attrs:{"href":"#","title":"Add to Compare"}},[_vm._ssrNode("<i class=\"fas fa-sync\"></i>")])])],2),_vm._ssrNode(" "),(_vm.product.timePeriod)?_c('Timer',{attrs:{"dateTime":_vm.product.dateTime}}):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"product-content\">","</div>",[_vm._ssrNode("<h3>","</h3>",[_c('nuxt-link',{attrs:{"to":("/products-details/" + (_vm.product.id))}},[_vm._v(_vm._s(_vm.product.name))])],1),_vm._ssrNode(" <div class=\"product-price\">"+((_vm.product.offer)?("<span class=\"old-price\">"+_vm._ssrEscape("\n                    $"+_vm._s(_vm.product.price - _vm.product.offerPrice)+"\n                ")+"</span>"):"<!---->")+" <span class=\"new-price\">"+_vm._ssrEscape("$"+_vm._s(_vm.product.price))+"</span></div> <div class=\"rating\"><i class=\"fas fa-star\"></i> <i class=\"fas fa-star\"></i> <i class=\"fas fa-star\"></i> <i class=\"fas fa-star\"></i> <i class=\"far fa-star\"></i></div> "+((_vm.getExistPId === _vm.product.id)?("<a href=\"javascript:void(0)\" class=\"btn btn-light added-btn\">\n                Added Already!\n            </a>"):("<a href=\"javascript:void(0)\" class=\"btn btn-light\">\n                Add to Cart\n            </a>")))],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/landing-one/ProductItem.vue?vue&type=template&id=b6194de2&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/landing-one/Timer.vue?vue&type=template&id=706ac0e8&
var Timervue_type_template_id_706ac0e8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"timer"},[_vm._ssrNode("<div class=\"days\">"+_vm._ssrEscape(_vm._s(_vm.days))+"</div> <div class=\"hours\">"+_vm._ssrEscape(_vm._s(_vm.hours))+"</div> <div class=\"minutes\">"+_vm._ssrEscape(_vm._s(_vm.minutes))+"</div> <div class=\"seconds\">"+_vm._ssrEscape(_vm._s(_vm.seconds))+"</div>")])}
var Timervue_type_template_id_706ac0e8_staticRenderFns = []


// CONCATENATED MODULE: ./components/landing-one/Timer.vue?vue&type=template&id=706ac0e8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing-one/Timer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Timervue_type_script_lang_js_ = ({
  data() {
    return {
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
      timeDate: this.dateTime
    };
  },

  props: ['dateTime'],

  created() {
    // Turn data into viewable values
    this.interval = setInterval(() => this.timing(this.timeDate), 1000);
  },

  methods: {
    timing(dateTime) {
      let endTime = new Date(dateTime);
      let endTimeParse = Date.parse(endTime) / 1000;
      let now = new Date();
      let nowParse = Date.parse(now) / 1000;
      let timeLeft = endTimeParse - nowParse;
      let days = Math.floor(timeLeft / 86400);
      let hours = Math.floor((timeLeft - days * 86400) / 3600);
      let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      let seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

      if (hours < "10") {
        hours = "0" + hours;
      }

      if (minutes < "10") {
        minutes = "0" + minutes;
      }

      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      this.days = days;
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
    }

  }
});
// CONCATENATED MODULE: ./components/landing-one/Timer.vue?vue&type=script&lang=js&
 /* harmony default export */ var landing_one_Timervue_type_script_lang_js_ = (Timervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/landing-one/Timer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_one_Timervue_type_script_lang_js_,
  Timervue_type_template_id_706ac0e8_render,
  Timervue_type_template_id_706ac0e8_staticRenderFns,
  false,
  null,
  null,
  "a17c1e20"
  
)

/* harmony default export */ var Timer = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing-one/ProductItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ProductItemvue_type_script_lang_js_ = ({
  name: 'ProductItem',
  components: {
    Timer: Timer
  },

  data() {
    return {
      getExistPId: null
    };
  },

  props: ['product', 'className'],
  computed: {
    cart() {
      return this.$store.getters.cart;
    }

  },
  methods: {
    quickView(e) {
      this.$emit('clicked');
    },

    addToCart(item) {
      const product = [{
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1
      }];

      if (this.cart.length > 0) {
        let id = item.id;
        this.getExistPId = id;
        let cartIndex = this.cart.findIndex(cart => {
          return cart.id == id;
        });

        if (cartIndex == -1) {
          this.$store.dispatch('addToCart', product);
          this.$toast("Added to cart", {
            icon: 'fas fa-cart-plus'
          });
        } else {
          this.$store.dispatch('updateCart', {
            id,
            unit: 1,
            cart: this.cart
          });
          this.$toast.info("Already added to the cart and update with one");
        }
      } else {
        this.$store.dispatch('addToCart', product);
        this.$toast("Added to cart", {
          icon: 'fas fa-cart-plus'
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./components/landing-one/ProductItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var landing_one_ProductItemvue_type_script_lang_js_ = (ProductItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/landing-one/ProductItem.vue





/* normalize component */

var ProductItem_component = Object(componentNormalizer["a" /* default */])(
  landing_one_ProductItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "632be58d"
  
)

/* harmony default export */ var ProductItem = __webpack_exports__["a"] = (ProductItem_component.exports);

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/QuckView.vue?vue&type=template&id=fe16ca3a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode(((_vm.isQuickViewOpen)?("<div class=\"modal-backdrop\" data-v-fe16ca3a></div>"):"<!---->")+" "),_c('transition',{attrs:{"name":"slide-fade"}},[(_vm.isQuickViewOpen)?_c('div',{staticClass:"modal fade productQuickView",attrs:{"id":"productQuickView","tabindex":"-1","role":"dialog","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog modal-dialog-centered",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content"},[_c('button',{staticClass:"close",attrs:{"type":"button"},on:{"click":_vm.closeQuickView}},[_c('span',{attrs:{"aria-hidden":"true"}},[_c('i',{staticClass:"fas fa-times"})])]),_vm._v(" "),_c('div',{staticClass:"row align-items-center"},[_c('div',{staticClass:"col-lg-6 col-md-6"},[_c('div',{staticClass:"productQuickView-image"},[_c('img',{attrs:{"src":__webpack_require__(139),"alt":"image"}})])]),_vm._v(" "),_c('div',{staticClass:"col-lg-6 col-md-6"},[_c('div',{staticClass:"product-content"},[_c('h3',[_c('a',{attrs:{"href":"#"}},[_vm._v("Neck empire sleeve t-shirts")])]),_vm._v(" "),_c('div',{staticClass:"price"},[_c('span',{staticClass:"new-price"},[_vm._v("$191.00")])]),_vm._v(" "),_c('div',{staticClass:"product-review"},[_c('div',{staticClass:"rating"},[_c('i',{staticClass:"fas fa-star"}),_vm._v(" "),_c('i',{staticClass:"fas fa-star"}),_vm._v(" "),_c('i',{staticClass:"fas fa-star"}),_vm._v(" "),_c('i',{staticClass:"fas fa-star"}),_vm._v(" "),_c('i',{staticClass:"fas fa-star-half-alt"})]),_vm._v(" "),_c('a',{staticClass:"rating-count",attrs:{"href":"#"}},[_vm._v("3 reviews")])]),_vm._v(" "),_c('ul',{staticClass:"product-info"},[_c('li',[_c('span',[_vm._v("Vendor:")]),_vm._v(" "),_c('a',{attrs:{"href":"#"}},[_vm._v("Lereve")])]),_vm._v(" "),_c('li',[_c('span',[_vm._v("Availability:")]),_vm._v(" "),_c('a',{attrs:{"href":"#"}},[_vm._v("In stock (7 items)")])]),_vm._v(" "),_c('li',[_c('span',[_vm._v("Product Type:")]),_vm._v(" "),_c('a',{attrs:{"href":"#"}},[_vm._v("T-Shirt")])])]),_vm._v(" "),_c('div',{staticClass:"product-color-switch"},[_c('h4',[_vm._v("Color:")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{staticClass:"color-black",attrs:{"href":"#","title":"Black"}})]),_vm._v(" "),_c('li',[_c('a',{staticClass:"color-white",attrs:{"href":"#","title":"White"}})]),_vm._v(" "),_c('li',{staticClass:"active"},[_c('a',{staticClass:"color-green",attrs:{"href":"#","title":"Green"}})]),_vm._v(" "),_c('li',[_c('a',{staticClass:"color-yellowgreen",attrs:{"href":"#","title":"Yellow Green"}})]),_vm._v(" "),_c('li',[_c('a',{staticClass:"color-teal",attrs:{"href":"#","title":"Teal"}})])])]),_vm._v(" "),_c('div',{staticClass:"product-size-wrapper"},[_c('h4',[_vm._v("Size:")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("XS")])]),_vm._v(" "),_c('li',{staticClass:"active"},[_c('a',{attrs:{"href":"#"}},[_vm._v("S")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("M")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("XL")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("XXL")])])])]),_vm._v(" "),_c('div',{staticClass:"product-add-to-cart"},[_c('div',{staticClass:"input-counter"},[_c('span',{staticClass:"minus-btn",on:{"click":function($event){return _vm.decreaseQuantity()}}},[_c('i',{staticClass:"fas fa-minus"})]),_vm._v("\n                                            "+_vm._s(_vm.quantity)+"\n                                        "),_c('span',{staticClass:"plus-btn",on:{"click":function($event){return _vm.increaseQuantity()}}},[_c('i',{staticClass:"fas fa-plus"})])]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"type":"submit"},on:{"click":function($event){return _vm.addToCart(_vm.item)}}},[_c('i',{staticClass:"fas fa-cart-plus"}),_vm._v(" Add to Cart\n                                    ")])]),_vm._v(" "),_c('a',{staticClass:"view-full-info",attrs:{"href":"#"}},[_vm._v("View full info")])])])])])])]):_vm._e()])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/modals/QuckView.vue?vue&type=template&id=fe16ca3a&scoped=true&

// EXTERNAL MODULE: ./utils/sidebar-util.js
var sidebar_util = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/QuckView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var QuckViewvue_type_script_lang_js_ = ({
  name: 'QuckView',

  data() {
    return {
      quantity: 1,
      item: {
        id: 4,
        name: 'Criss-cross V neck bodycon',
        price: 200.00,
        offer: false,
        offerPrice: 7,
        latest: true,
        bestSellers: false,
        trending: false,
        image: __webpack_require__(22),
        imageHover: __webpack_require__(23),
        timePeriod: false,
        dateTime: new Date("December 19, 2020 17:00:00 PDT")
      }
    };
  },

  methods: {
    closeQuickView: sidebar_util["a" /* mutations */].toggleQuickView,

    addToCart(item) {
      const product = [{
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: this.quantity
      }];

      if (this.cart.length > 0) {
        let id = item.id;
        this.getExistPId = id;
        let cartIndex = this.cart.findIndex(cart => {
          return cart.id == id;
        });

        if (cartIndex == -1) {
          this.$store.dispatch('addToCart', product);
          this.$toast("Added to cart", {
            icon: 'fas fa-cart-plus'
          });
        } else {
          this.$store.dispatch('updateCart', {
            id,
            unit: 1,
            cart: this.cart
          });
          this.$toast.info("Already added to the cart and update with one");
        }
      } else {
        this.$store.dispatch('addToCart', product);
        this.$toast("Added to cart", {
          icon: 'fas fa-cart-plus'
        });
      }

      this.closeQuickView();
    },

    increaseQuantity() {
      if (this.quantity > 9) {
        this.$toast.error("Can't add more than 10", {
          icon: 'fas fa-cart-plus'
        });
      } else {
        this.quantity++;
      }
    },

    decreaseQuantity() {
      if (this.quantity < 2) {
        this.$toast.error("Can't add less than 1", {
          icon: 'fas fa-cart-plus'
        });
      } else {
        this.quantity--;
      }
    }

  },
  computed: {
    isQuickViewOpen() {
      return sidebar_util["b" /* store */].isQuickViewOpen;
    },

    cart() {
      return this.$store.getters.cart;
    }

  }
});
// CONCATENATED MODULE: ./components/modals/QuckView.vue?vue&type=script&lang=js&
 /* harmony default export */ var modals_QuckViewvue_type_script_lang_js_ = (QuckViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/modals/QuckView.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(140)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modals_QuckViewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fe16ca3a",
  "563cb864"
  
)

/* harmony default export */ var QuckView = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/instagram5.7b94012.jpg";

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/instagram9.7b94012.jpg";

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(132);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);

 // Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyAwbwjqlGCx8YyAm0Dv6v56gopQeGUIZRw",
  authDomain: "denzilla-2db3f.firebaseapp.com",
  databaseURL: "https://denzilla-2db3f.firebaseio.com",
  projectId: "denzilla-2db3f",
  storageBucket: "denzilla-2db3f.appspot.com",
  messagingSenderId: "24988187613",
  appId: "1:24988187613:web:1f188bdfdac0fba2fc9434",
  measurementId: "G-X600KCW188"
}; // Initialize Firebase

/* harmony default export */ __webpack_exports__["a"] = (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length ? firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig) : firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app()); // db = firebase.firestore();
// export const dbOrderRef = db.collection('order');
// export const orderData = db.collection('order').get()

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/quick-view-img.da87aca.jpg";

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuckView_vue_vue_type_style_index_0_id_fe16ca3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuckView_vue_vue_type_style_index_0_id_fe16ca3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuckView_vue_vue_type_style_index_0_id_fe16ca3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuckView_vue_vue_type_style_index_0_id_fe16ca3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuckView_vue_vue_type_style_index_0_id_fe16ca3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slide-fade-enter-active[data-v-fe16ca3a]{transition:all .3s ease}.slide-fade-leave-active[data-v-fe16ca3a]{transition:all .8s cubic-bezier(1,.5,.8,1)}.slide-fade-enter[data-v-fe16ca3a],.slide-fade-leave-to[data-v-fe16ca3a]{transform:translateX(10px);opacity:0}.modal-backdrop[data-v-fe16ca3a]{background-color:rgba(0,0,0,.5);width:100vw;height:100vh;position:fixed;top:0;left:0;cursor:pointer;z-index:9}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/partner1.aff6321.png";

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/partner2.aff6321.png";

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/partner3.c2161ab.png";

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/partner4.c2161ab.png";

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/partner5.c2161ab.png";

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/partner6.c2161ab.png";

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/instagram1.7b94012.jpg";

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/instagram2.7b94012.jpg";

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/instagram3.7b94012.jpg";

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/instagram7.7b94012.jpg";

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/instagram4.7b94012.jpg";

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/instagram6.7b94012.jpg";

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/instagram8.7b94012.jpg";

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/common/Subscribe.vue?vue&type=template&id=a30bc63e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"subscribe-area ptb-60"},[_vm._ssrNode("<div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-lg-6\"><div class=\"newsletter-content\"><h3>Subscribe to our newsletter</h3> <p>A short sentence describing what someone will receive by subscribing</p></div></div> <div class=\"col-lg-6\"><form class=\"newsletter-form\"><input type=\"email\" placeholder=\"Enter your email address\" id=\"email\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.subscriptions.email)))+" class=\"form-control\"> <button type=\"submit\">Subscribe!</button></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/Subscribe.vue?vue&type=template&id=a30bc63e&

// EXTERNAL MODULE: ./plugins/firebase.js
var firebase = __webpack_require__(138);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/Subscribe.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Subscribevue_type_script_lang_js_ = ({
  data() {
    return {
      subscriptions: {
        email: '',
        createdAt: new Date()
      }
    };
  },

  methods: {
    subscribe() {
      if (this.subscriptions.email != '' && this.validateEmail(this.subscriptions.email)) {
        const db = firebase["a" /* default */].firestore();
        const dbOrderRef = db.collection('subscriptions');
        dbOrderRef.add(this.subscriptions);
        this.$toast.success(`Thanks for your subscriptions`, {
          icon: 'fas fa-user-check'
        });
        this.subscriptions.email = '';
      } else {
        this.$toast.error(`Please fillup with a valid email`, {
          icon: 'fas fa-times'
        });
      }
    },

    validateEmail(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
      } else {
        return false;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/common/Subscribe.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_Subscribevue_type_script_lang_js_ = (Subscribevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/common/Subscribe.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_Subscribevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "75f31fe8"
  
)

/* harmony default export */ var Subscribe = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/common/InstagramPhotos.vue?vue&type=template&id=7f530385&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('div',{staticClass:"instagram-area"},[_c('div',{staticClass:"instagram-slides owl-carousel owl-theme"},[_c('carousel',{attrs:{"loop":true,"autoplay":true,"autoplayTimeout":5000,"perPageCustom":[[0, 2], [768, 6], [1200, 9]],"paginationEnabled":false}},_vm._l((_vm.photos),function(photo){return _c('slide',{key:photo.id},[_c('div',{staticClass:"instagram-box"},[_c('img',{attrs:{"src":photo.photo,"alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"icon"},[_c('i',{staticClass:"fab fa-instagram"})]),_vm._v(" "),_c('a',{attrs:{"href":photo.url,"target":"_blank"}})])])}),1)],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/InstagramPhotos.vue?vue&type=template&id=7f530385&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/InstagramPhotos.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var InstagramPhotosvue_type_script_lang_js_ = ({
  data() {
    return {
      photos: [{
        id: 1,
        photo: __webpack_require__(149),
        url: 'https://www.instagram.com/'
      }, {
        id: 2,
        photo: __webpack_require__(150),
        url: 'https://www.instagram.com/'
      }, {
        id: 3,
        photo: __webpack_require__(151),
        url: 'https://www.instagram.com/'
      }, {
        id: 9,
        photo: __webpack_require__(152),
        url: 'https://www.instagram.com/'
      }, {
        id: 6,
        photo: __webpack_require__(136),
        url: 'https://www.instagram.com/'
      }, {
        id: 4,
        photo: __webpack_require__(153),
        url: 'https://www.instagram.com/'
      }, {
        id: 5,
        photo: __webpack_require__(136),
        url: 'https://www.instagram.com/'
      }, {
        id: 11,
        photo: __webpack_require__(137),
        url: 'https://www.instagram.com/'
      }, {
        id: 8,
        photo: __webpack_require__(154),
        url: 'https://www.instagram.com/'
      }, {
        id: 7,
        photo: __webpack_require__(136),
        url: 'https://www.instagram.com/'
      }, {
        id: 12,
        photo: __webpack_require__(137),
        url: 'https://www.instagram.com/'
      }, {
        id: 10,
        photo: __webpack_require__(155),
        url: 'https://www.instagram.com/'
      }, {
        id: 13,
        photo: __webpack_require__(137),
        url: 'https://www.instagram.com/'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/common/InstagramPhotos.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_InstagramPhotosvue_type_script_lang_js_ = (InstagramPhotosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/common/InstagramPhotos.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_InstagramPhotosvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "615de4d6"
  
)

/* harmony default export */ var InstagramPhotos = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/common/Partner.vue?vue&type=template&id=29917c16&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('div',{staticClass:"partner-area"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"partner-slides owl-carousel owl-theme"},[_c('carousel',{attrs:{"loop":true,"autoplay":true,"autoplayTimeout":1000,"paginationEnabled":false,"perPageCustom":[[0, 2], [768, 4], [1200, 6]],"speed":5000}},[_c('slide',[_c('div',{staticClass:"partner-item"},[_c('a',{attrs:{"href":"#","target":"_blank"}},[_c('img',{attrs:{"src":__webpack_require__(143),"alt":"image"}})])])]),_vm._v(" "),_c('slide',[_c('div',{staticClass:"partner-item"},[_c('a',{attrs:{"href":"#","target":"_blank"}},[_c('img',{attrs:{"src":__webpack_require__(144),"alt":"image"}})])])]),_vm._v(" "),_c('slide',[_c('div',{staticClass:"partner-item"},[_c('a',{attrs:{"href":"#","target":"_blank"}},[_c('img',{attrs:{"src":__webpack_require__(145),"alt":"image"}})])])]),_vm._v(" "),_c('slide',[_c('div',{staticClass:"partner-item"},[_c('a',{attrs:{"href":"#","target":"_blank"}},[_c('img',{attrs:{"src":__webpack_require__(146),"alt":"image"}})])])]),_vm._v(" "),_c('slide',[_c('div',{staticClass:"partner-item"},[_c('a',{attrs:{"href":"#","target":"_blank"}},[_c('img',{attrs:{"src":__webpack_require__(147),"alt":"image"}})])])]),_vm._v(" "),_c('slide',[_c('div',{staticClass:"partner-item"},[_c('a',{attrs:{"href":"#","target":"_blank"}},[_c('img',{attrs:{"src":__webpack_require__(148),"alt":"image"}})])])])],1)],1)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/Partner.vue?vue&type=template&id=29917c16&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/common/Partner.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "64c2c30a"
  
)

/* harmony default export */ var Partner = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAA/AD8BAREA/8QAGgABAAIDAQAAAAAAAAAAAAAAAAMHBAUGCP/EACEQAAEFAAMBAQEBAQAAAAAAAAIAAQMEBQYREgcTFCMi/9oACAEBAAA/APUCIiIiIiIiIiIiIiIiKkOIfaeWc31ZIcCfjTjpBqBkULtO/Vf3WMgiJ7rsUFp38+pYohY4mLrsvLusrK+9jgQ7xfSQf+TD1gzZdanjz0QjY6zSxnNTnkOxGByeoY5G9jKbj56Z2dY3Ifu+xByg8qhDRwYc6pl2b9bdzbUsrHbJ3eKaxVIoaDCDCzSy/oJSE4t0wO79Jnc65pU+rVeC8mjyHrala9artWo2of5xhMPxFrcxflckOMnI44gF4vL99szE9lIiKt5PhPGJjKGXe5A+dCV6XNz47ccMWXNb9/tLXOOMZmL/AFl8+5DEGN2FmbpmjufA+K7pzycy3Nzkv98kZ6I6MkAhfGKIwrxyhBFGPiJ5ZJAYWH/QvZeiEXaa/wDEMXThetd5ZySWK5Qq5u0JT13fbgruX5taJ4fXp2MhIonjIhfonfputjlfLMzM5FU35+R72lHlz27OXQvWI5K+fLY9NKUbtG0p/wDJyCLSyGwCbsLM3XXaoiIiIiIiIiIiIiIiIv/Z"

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/landing-one/LatestProducts.vue?vue&type=template&id=148d472f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"all-products-area pb-60\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"section-title\"><h2><span class=\"dot\"></span> Latest Products</h2></div> "),_vm._ssrNode("<div class=\"row\">","</div>",_vm._l((_vm.products),function(product,index){return _c('ProductItem',{key:index,attrs:{"product":product,"className":"col-lg-3 col-md-6 col-sm-6"},on:{"clicked":_vm.toggle}})}),1)],2)]),_vm._ssrNode(" "),_c('QuckView')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/landing-one/LatestProducts.vue?vue&type=template&id=148d472f&

// EXTERNAL MODULE: ./components/modals/QuckView.vue + 4 modules
var QuckView = __webpack_require__(135);

// EXTERNAL MODULE: ./utils/sidebar-util.js
var sidebar_util = __webpack_require__(5);

// EXTERNAL MODULE: ./components/landing-one/ProductItem.vue + 9 modules
var ProductItem = __webpack_require__(134);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing-one/LatestProducts.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var LatestProductsvue_type_script_lang_js_ = ({
  components: {
    QuckView: QuckView["a" /* default */],
    ProductItem: ProductItem["a" /* default */]
  },
  methods: {
    toggle() {
      sidebar_util["a" /* mutations */].toggleQuickView();
    }

  },
  computed: {
    products() {
      return this.$store.state.products.all.filter(product => product.latest === true);
    }

  }
});
// CONCATENATED MODULE: ./components/landing-one/LatestProducts.vue?vue&type=script&lang=js&
 /* harmony default export */ var landing_one_LatestProductsvue_type_script_lang_js_ = (LatestProductsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/landing-one/LatestProducts.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_one_LatestProductsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9d189220"
  
)

/* harmony default export */ var LatestProducts = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/category-products-img1.47f9053.jpg";

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/category-products-img2.387f858.jpg";

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/category-products-img3.387f858.jpg";

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/category-products-img4.0c5f9f1.jpg";

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/blog-img1.483bbb6.jpg";

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/blog-img2.483bbb6.jpg";

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/blog-img3.483bbb6.jpg";

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/blog-img4.483bbb6.jpg";

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/blog-img5.483bbb6.jpg";

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=d484cdb4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Banner'),_vm._ssrNode(" "),_c('Offer'),_vm._ssrNode(" "),_c('LatestProducts'),_vm._ssrNode(" "),_c('ProductCategory'),_vm._ssrNode(" "),_c('TrendingProducts'),_vm._ssrNode(" "),_c('BestSellers'),_vm._ssrNode(" "),_c('Facility'),_vm._ssrNode(" "),_c('Testimonials'),_vm._ssrNode(" "),_c('News'),_vm._ssrNode(" "),_c('Subscribe'),_vm._ssrNode(" "),_c('Partner'),_vm._ssrNode(" "),_c('InstagramPhotos')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=d484cdb4&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/landing-one/Banner.vue?vue&type=template&id=792bf1fe&
var Bannervue_type_template_id_792bf1fe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-banner item-bg1"},[_vm._ssrNode("<div class=\"d-table\">","</div>",[_vm._ssrNode("<div class=\"d-table-cell\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"main-banner-content\">","</div>",[_vm._ssrNode("<span style=\"color:whitesmoke;\">New Inspiration 2020</span> <h1 style=\"color:lightgray;\">Watches made for you!</h1> <p style=\"color:gray;\">Trending from men and women style collection</p> "),_c('nuxt-link',{staticClass:"btn btn-success",attrs:{"to":"/products"}},[_vm._v("Shop Women's")]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"btn btn-primary",attrs:{"to":"/products"}},[_vm._v("Shop Men's")])],2)])])])])}
var Bannervue_type_template_id_792bf1fe_staticRenderFns = []


// CONCATENATED MODULE: ./components/landing-one/Banner.vue?vue&type=template&id=792bf1fe&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing-one/Banner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Bannervue_type_script_lang_js_ = ({
  name: 'Banner'
});
// CONCATENATED MODULE: ./components/landing-one/Banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var landing_one_Bannervue_type_script_lang_js_ = (Bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/landing-one/Banner.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_one_Bannervue_type_script_lang_js_,
  Bannervue_type_template_id_792bf1fe_render,
  Bannervue_type_template_id_792bf1fe_staticRenderFns,
  false,
  null,
  null,
  "c9d2e6de"
  
)

/* harmony default export */ var Banner = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/landing-one/Offer.vue?vue&type=template&id=143ee4a1&
var Offervue_type_template_id_143ee4a1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"offer-area ptb-60"},[_vm._ssrNode("<div class=\"container\"><div class=\"row\"><div class=\"col-lg-4 col-md-6\"><div class=\"offer-box\"><img src=\"https://picsum.photos/359/400\" alt=\"image\"> <div class=\"category\"><h4>Women's</h4></div> <div class=\"box-inner\"><div class=\"inner-content\"><h3>Women's</h3> <ul><li><a href=\"#\">Woman Accessories</a></li> <li><a href=\"#\">Man Accessories</a></li> <li><a href=\"#\">Sunglasses</a></li> <li><a href=\"#\">Belts</a></li> <li><a href=\"#\">Hats</a></li> <li><a href=\"#\">Scrafs</a></li></ul></div></div></div></div> <div class=\"col-lg-4 col-md-6\"><div class=\"offer-box\"><img src=\"https://picsum.photos/359/400\" alt=\"image\"> <div class=\"category\"><h4>Accessories</h4></div> <div class=\"box-inner\"><div class=\"inner-content\"><h3>Accessories</h3> <ul><li><a href=\"#\">Woman Accessories</a></li> <li><a href=\"#\">Man Accessories</a></li> <li><a href=\"#\">Sunglasses</a></li> <li><a href=\"#\">Belts</a></li> <li><a href=\"#\">Hats</a></li> <li><a href=\"#\">Scrafs</a></li></ul></div></div></div></div> <div class=\"col-lg-4 col-md-6 offset-lg-0 offset-md-3\"><div class=\"offer-box\"><img src=\"https://picsum.photos/359/400\" alt=\"image\"> <div class=\"category\"><h4>Men's</h4></div> <div class=\"box-inner\"><div class=\"inner-content\"><h3>Men's</h3> <ul><li><a href=\"#\">Woman Accessories</a></li> <li><a href=\"#\">Man Accessories</a></li> <li><a href=\"#\">Sunglasses</a></li> <li><a href=\"#\">Belts</a></li> <li><a href=\"#\">Hats</a></li> <li><a href=\"#\">Scrafs</a></li></ul></div></div></div></div></div></div>")])}
var Offervue_type_template_id_143ee4a1_staticRenderFns = []


// CONCATENATED MODULE: ./components/landing-one/Offer.vue?vue&type=template&id=143ee4a1&

// CONCATENATED MODULE: ./components/landing-one/Offer.vue

var script = {}


/* normalize component */

var Offer_component = Object(componentNormalizer["a" /* default */])(
  script,
  Offervue_type_template_id_143ee4a1_render,
  Offervue_type_template_id_143ee4a1_staticRenderFns,
  false,
  null,
  null,
  "1ffca087"
  
)

/* harmony default export */ var Offer = (Offer_component.exports);
// EXTERNAL MODULE: ./components/landing-one/LatestProducts.vue + 4 modules
var LatestProducts = __webpack_require__(161);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/landing-one/ProductCategory.vue?vue&type=template&id=1b284bbc&
var ProductCategoryvue_type_template_id_1b284bbc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"category-products-area pb-60"},[_vm._ssrNode("<div class=\"container\"><div class=\"row\"><div class=\"col-lg-4 col-md-12\"><div class=\"single-category-box\"><img"+(_vm._ssrAttr("src",__webpack_require__(192)))+" alt=\"image\"> <div class=\"category-content\"><h3>Our Popular Products</h3> <a href=\"#\" class=\"btn btn-light\">View More</a></div> <a href=\"#\" class=\"link-btn\"></a></div></div> <div class=\"col-lg-8 col-md-12\"><div class=\"row\"><div class=\"col-lg-6 col-md-6\"><div class=\"single-category-box\"><img"+(_vm._ssrAttr("src",__webpack_require__(193)))+" alt=\"image\"> <div class=\"category-content\"><h3>Winter Collections</h3></div> <a href=\"#\" class=\"link-btn\"></a></div></div> <div class=\"col-lg-6 col-md-6\"><div class=\"single-category-box\"><img"+(_vm._ssrAttr("src",__webpack_require__(194)))+" alt=\"image\"> <div class=\"category-content\"><h3>Summer Collections</h3></div> <a href=\"#\" class=\"link-btn\"></a></div></div> <div class=\"col-lg-12 col-md-12\"><div class=\"single-category-box\"><img"+(_vm._ssrAttr("src",__webpack_require__(195)))+" alt=\"image\"> <div class=\"category-content\"><h3>Up to 75% OFF Spring Sale!</h3></div> <a href=\"#\" class=\"link-btn\"></a></div></div></div></div></div></div>")])}
var ProductCategoryvue_type_template_id_1b284bbc_staticRenderFns = []


// CONCATENATED MODULE: ./components/landing-one/ProductCategory.vue?vue&type=template&id=1b284bbc&

// CONCATENATED MODULE: ./components/landing-one/ProductCategory.vue

var ProductCategory_script = {}


/* normalize component */

var ProductCategory_component = Object(componentNormalizer["a" /* default */])(
  ProductCategory_script,
  ProductCategoryvue_type_template_id_1b284bbc_render,
  ProductCategoryvue_type_template_id_1b284bbc_staticRenderFns,
  false,
  null,
  null,
  "d3368e10"
  
)

/* harmony default export */ var ProductCategory = (ProductCategory_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/landing-one/TrendingProducts.vue?vue&type=template&id=fd022c76&
var TrendingProductsvue_type_template_id_fd022c76_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"trending-products-area pb-60\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"section-title\"><h2><span class=\"dot\"></span> Trending Products</h2></div> "),_vm._ssrNode("<div class=\"row\">","</div>",_vm._l((_vm.products),function(product){return _c('ProductItem',{key:product.id,attrs:{"product":product,"className":"col-lg-3 col-md-6 col-sm-6"},on:{"clicked":_vm.toggle}})}),1)],2)]),_vm._ssrNode(" "),_c('QuckView')],2)}
var TrendingProductsvue_type_template_id_fd022c76_staticRenderFns = []


// CONCATENATED MODULE: ./components/landing-one/TrendingProducts.vue?vue&type=template&id=fd022c76&

// EXTERNAL MODULE: ./components/modals/QuckView.vue + 4 modules
var QuckView = __webpack_require__(135);

// EXTERNAL MODULE: ./utils/sidebar-util.js
var sidebar_util = __webpack_require__(5);

// EXTERNAL MODULE: ./components/landing-one/ProductItem.vue + 9 modules
var ProductItem = __webpack_require__(134);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing-one/TrendingProducts.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var TrendingProductsvue_type_script_lang_js_ = ({
  components: {
    QuckView: QuckView["a" /* default */],
    ProductItem: ProductItem["a" /* default */]
  },
  methods: {
    toggle() {
      sidebar_util["a" /* mutations */].toggleQuickView();
    }

  },
  computed: {
    products() {
      return this.$store.state.products.all.filter(product => product.trending === true);
    }

  }
});
// CONCATENATED MODULE: ./components/landing-one/TrendingProducts.vue?vue&type=script&lang=js&
 /* harmony default export */ var landing_one_TrendingProductsvue_type_script_lang_js_ = (TrendingProductsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/landing-one/TrendingProducts.vue





/* normalize component */

var TrendingProducts_component = Object(componentNormalizer["a" /* default */])(
  landing_one_TrendingProductsvue_type_script_lang_js_,
  TrendingProductsvue_type_template_id_fd022c76_render,
  TrendingProductsvue_type_template_id_fd022c76_staticRenderFns,
  false,
  null,
  null,
  "1fc1404e"
  
)

/* harmony default export */ var TrendingProducts = (TrendingProducts_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/landing-one/BestSellers.vue?vue&type=template&id=2da72d69&
var BestSellersvue_type_template_id_2da72d69_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"best-sellers-area pb-60\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"section-title\"><h2><span class=\"dot\"></span> Best Sellers</h2></div> "),_vm._ssrNode("<div class=\"row\">","</div>",_vm._l((_vm.products),function(product){return _c('ProductItem',{key:product.id,attrs:{"product":product,"className":"col-lg-3 col-md-6 col-sm-6"},on:{"clicked":_vm.toggle}})}),1)],2)]),_vm._ssrNode(" "),_c('QuckView')],2)}
var BestSellersvue_type_template_id_2da72d69_staticRenderFns = []


// CONCATENATED MODULE: ./components/landing-one/BestSellers.vue?vue&type=template&id=2da72d69&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing-one/BestSellers.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var BestSellersvue_type_script_lang_js_ = ({
  components: {
    QuckView: QuckView["a" /* default */],
    ProductItem: ProductItem["a" /* default */]
  },
  methods: {
    toggle() {
      sidebar_util["a" /* mutations */].toggleQuickView();
    }

  },
  computed: {
    products() {
      return this.$store.state.products.all.filter(product => product.bestSellers === true);
    }

  }
});
// CONCATENATED MODULE: ./components/landing-one/BestSellers.vue?vue&type=script&lang=js&
 /* harmony default export */ var landing_one_BestSellersvue_type_script_lang_js_ = (BestSellersvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/landing-one/BestSellers.vue





/* normalize component */

var BestSellers_component = Object(componentNormalizer["a" /* default */])(
  landing_one_BestSellersvue_type_script_lang_js_,
  BestSellersvue_type_template_id_2da72d69_render,
  BestSellersvue_type_template_id_2da72d69_staticRenderFns,
  false,
  null,
  null,
  "3223a78a"
  
)

/* harmony default export */ var BestSellers = (BestSellers_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/landing-one/Facility.vue?vue&type=template&id=3076dea6&
var Facilityvue_type_template_id_3076dea6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"facility-area"},[_vm._ssrNode("<div class=\"container\"><div class=\"row\"><div class=\"col-lg-3 col-md-6 col-sm-6\"><div class=\"facility-box\"><div class=\"icon\"><i class=\"fas fa-plane\"></i></div> <h3>Free Shipping World Wide</h3></div></div> <div class=\"col-lg-3 col-md-6 col-sm-6\"><div class=\"facility-box\"><div class=\"icon\"><i class=\"fas fa-money-check-alt\"></i></div> <h3>100% money back guarantee</h3></div></div> <div class=\"col-lg-3 col-md-6 col-sm-6\"><div class=\"facility-box\"><div class=\"icon\"><i class=\"far fa-credit-card\"></i></div> <h3>Many payment gatways</h3></div></div> <div class=\"col-lg-3 col-md-6 col-sm-6\"><div class=\"facility-box\"><div class=\"icon\"><i class=\"fas fa-headset\"></i></div> <h3>24/7 online support</h3></div></div></div></div>")])}
var Facilityvue_type_template_id_3076dea6_staticRenderFns = []


// CONCATENATED MODULE: ./components/landing-one/Facility.vue?vue&type=template&id=3076dea6&

// CONCATENATED MODULE: ./components/landing-one/Facility.vue

var Facility_script = {}


/* normalize component */

var Facility_component = Object(componentNormalizer["a" /* default */])(
  Facility_script,
  Facilityvue_type_template_id_3076dea6_render,
  Facilityvue_type_template_id_3076dea6_staticRenderFns,
  false,
  null,
  null,
  "5c7be948"
  
)

/* harmony default export */ var Facility = (Facility_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/landing-one/Testimonials.vue?vue&type=template&id=76029178&
var Testimonialsvue_type_template_id_76029178_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('section',{staticClass:"testimonials-area ptb-60 jarallax",attrs:{"data-jarallax":"{\"speed\": 0.3}"}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"testimonials-slides owl-carousel owl-theme"},[_c('carousel',{attrs:{"autoplay":true,"autoplayTimeout":1000,"perPageCustom":[[0, 1], [768, 1], [1024, 1]]}},_vm._l((_vm.items),function(item){return _c('slide',{key:item.id},[_c('div',{staticClass:"single-testimonials"},[_c('div',{staticClass:"client-image"},[_c('img',{attrs:{"src":item.image,"alt":item.name}})]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.feedback))]),_vm._v(" "),_c('div',{staticClass:"client-info"},[_c('h4',[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.position))])])])])}),1)],1)])])])}
var Testimonialsvue_type_template_id_76029178_staticRenderFns = []


// CONCATENATED MODULE: ./components/landing-one/Testimonials.vue?vue&type=template&id=76029178&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing-one/Testimonials.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Testimonialsvue_type_script_lang_js_ = ({
  data() {
    return {
      items: [{
        id: 1,
        name: 'Jason Statham',
        position: 'Actor at Crank',
        feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
        image: __webpack_require__(159)
      }, {
        id: 2,
        name: 'Jason Statham',
        position: 'CEO at Assmble',
        feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
        image: __webpack_require__(159)
      }, {
        id: 3,
        name: 'Jason Statham',
        position: 'Founder at Kramble',
        feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
        image: __webpack_require__(159)
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/landing-one/Testimonials.vue?vue&type=script&lang=js&
 /* harmony default export */ var landing_one_Testimonialsvue_type_script_lang_js_ = (Testimonialsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/landing-one/Testimonials.vue





/* normalize component */

var Testimonials_component = Object(componentNormalizer["a" /* default */])(
  landing_one_Testimonialsvue_type_script_lang_js_,
  Testimonialsvue_type_template_id_76029178_render,
  Testimonialsvue_type_template_id_76029178_staticRenderFns,
  false,
  null,
  null,
  "3cdc6b59"
  
)

/* harmony default export */ var Testimonials = (Testimonials_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/landing-one/News.vue?vue&type=template&id=6df20994&
var Newsvue_type_template_id_6df20994_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('section',{staticClass:"news-area ptb-60"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"section-title"},[_c('h2',[_c('span',{staticClass:"dot"}),_vm._v(" Bolster News")])]),_vm._v(" "),_c('div',{staticClass:"news-slides owl-carousel owl-theme"},[_c('carousel',{attrs:{"autoplay":true,"autoplayTimeout":1000,"perPageCustom":[[0, 1], [768, 2], [1024, 3], [1200, 3]]}},_vm._l((_vm.posts),function(post){return _c('slide',{key:post.id},[_c('div',{staticClass:"single-news-post"},[_c('div',{staticClass:"news-image"},[_c('nuxt-link',{attrs:{"to":post.link}},[_c('img',{attrs:{"src":post.image,"alt":post.title}})])],1),_vm._v(" "),_c('div',{staticClass:"news-content"},[_c('h3',[_c('nuxt-link',{attrs:{"to":post.link}},[_vm._v(_vm._s(post.title))])],1),_vm._v(" "),_c('span',{staticClass:"author"},[_vm._v("By "),_c('a',{attrs:{"href":"#"}},[_vm._v(_vm._s(post.author))])]),_vm._v(" "),_c('p',[_vm._v(_vm._s(post.post))]),_vm._v(" "),_c('a',{staticClass:"btn btn-light",attrs:{"href":"#"}},[_vm._v("Read More")])])])])}),1)],1)])])])}
var Newsvue_type_template_id_6df20994_staticRenderFns = []


// CONCATENATED MODULE: ./components/landing-one/News.vue?vue&type=template&id=6df20994&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing-one/News.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Newsvue_type_script_lang_js_ = ({
  data() {
    return {
      posts: [{
        id: 1,
        title: 'Styling White Jeans after Labor Day',
        link: 'blog-details',
        author: 'Admin',
        post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: __webpack_require__(196)
      }, {
        id: 2,
        title: 'he Best Ecommerce Platform for Growing Sales',
        link: 'blog-details',
        author: 'Admin',
        post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: __webpack_require__(197)
      }, {
        id: 3,
        title: 'The Evolution of the B2B Buying Process',
        link: 'blog-details',
        author: 'Admin',
        post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: __webpack_require__(198)
      }, {
        id: 4,
        title: 'The Best eCommerce Blogs for Online Retailers',
        link: 'blog-details',
        author: 'Admin',
        post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: __webpack_require__(199)
      }, {
        id: 5,
        title: 'How to Do Social Media Customer Service',
        link: 'blog-details',
        author: 'Admin',
        post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: __webpack_require__(200)
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/landing-one/News.vue?vue&type=script&lang=js&
 /* harmony default export */ var landing_one_Newsvue_type_script_lang_js_ = (Newsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/landing-one/News.vue





/* normalize component */

var News_component = Object(componentNormalizer["a" /* default */])(
  landing_one_Newsvue_type_script_lang_js_,
  Newsvue_type_template_id_6df20994_render,
  Newsvue_type_template_id_6df20994_staticRenderFns,
  false,
  null,
  null,
  "58a03bf8"
  
)

/* harmony default export */ var News = (News_component.exports);
// EXTERNAL MODULE: ./components/common/Subscribe.vue + 4 modules
var Subscribe = __webpack_require__(156);

// EXTERNAL MODULE: ./components/common/Partner.vue + 2 modules
var Partner = __webpack_require__(158);

// EXTERNAL MODULE: ./components/common/InstagramPhotos.vue + 4 modules
var InstagramPhotos = __webpack_require__(157);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    Banner: Banner,
    Offer: Offer,
    LatestProducts: LatestProducts["a" /* default */],
    ProductCategory: ProductCategory,
    TrendingProducts: TrendingProducts,
    BestSellers: BestSellers,
    Facility: Facility,
    Testimonials: Testimonials,
    News: News,
    Subscribe: Subscribe["a" /* default */],
    Partner: Partner["a" /* default */],
    InstagramPhotos: InstagramPhotos["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "37a9b0f4"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map