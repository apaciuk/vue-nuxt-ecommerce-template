exports.ids = [12];
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

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/products.vue?vue&type=template&id=6e23cd87&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"page-title-area\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" <li>All Products</li>")],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"products-collections-area ptb-60\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"section-title\"><h2><span class=\"dot\"></span> Products</h2></div> "),_vm._ssrNode("<div class=\"row\">","</div>",[_c('Sidebar'),_vm._ssrNode(" "),_c('AllProducts')],2)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/products.vue?vue&type=template&id=6e23cd87&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/all-products/Sidebar.vue?vue&type=template&id=07598ae4&
var Sidebarvue_type_template_id_07598ae4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-lg-4 col-md-12"},[_vm._ssrNode("<div class=\"woocommerce-sidebar-area\">","</div>",[_vm._ssrNode("<div class=\"collapse-widget filter-list-widget\">","</div>",[_c('h3',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":true}}],staticClass:"collapse-widget-title"},[_vm._ssrNode("\n                Current Selection\n                <i class=\"fas fa-angle-up\"></i>")]),_vm._ssrNode(" "),_c('b-collapse',{staticClass:"selected-filters-wrap-list",attrs:{"visible":"","id":"collapse-1"}},[_c('ul',[_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("44")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("XI")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("Clothing")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("Shoes")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("Accessories")])])]),_vm._v(" "),_c('div',{staticClass:"delete-selected-filters"},[_c('a',{attrs:{"href":"#"}},[_c('i',{staticClass:"far fa-trash-alt"}),_vm._v(" "),_c('span',[_vm._v("Clear All")])])])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"collapse-widget collections-list-widget\">","</div>",[_c('h3',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-2",modifiers:{"collapse-2":true}}],staticClass:"collapse-widget-title"},[_vm._ssrNode("\n                Collections\n\n                <i class=\"fas fa-angle-up\"></i>")]),_vm._ssrNode(" "),_c('b-collapse',{attrs:{"visible":"","id":"collapse-2"}},[_c('ul',{staticClass:"collections-list-row"},[_c('li',{staticClass:"active"},[_c('a',{attrs:{"href":"#"}},[_vm._v("Women’s")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("Men")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("Clothing")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("Shoes")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("Accessories")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("Uncategorized")])])])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"collapse-widget brands-list-widget\">","</div>",[_c('h3',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-3",modifiers:{"collapse-3":true}}],staticClass:"collapse-widget-title"},[_vm._ssrNode("\n                Brands\n\n                <i class=\"fas fa-angle-up\"></i>")]),_vm._ssrNode(" "),_c('b-collapse',{attrs:{"visible":"","id":"collapse-3"}},[_c('ul',{staticClass:"brands-list-row"},[_c('li',{staticClass:"active"},[_c('a',{attrs:{"href":"#"}},[_vm._v("Adidas")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("Nike")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("Reebok")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("Shoes")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("Ralph Lauren")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("Delpozo")])])])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"collapse-widget size-list-widget\">","</div>",[_c('h3',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-4",modifiers:{"collapse-4":true}}],staticClass:"collapse-widget-title"},[_vm._ssrNode("\n                Size\n\n                <i class=\"fas fa-angle-up\"></i>")]),_vm._ssrNode(" "),_c('b-collapse',{attrs:{"visible":"","id":"collapse-4"}},[_c('ul',{staticClass:"size-list-row"},[_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("20")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("24")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("36")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("30")])]),_vm._v(" "),_c('li',{staticClass:"active"},[_c('a',{attrs:{"href":"#"}},[_vm._v("XS")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("S")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("M")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("L")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("L")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("XL")])])])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"collapse-widget price-list-widget\">","</div>",[_c('h3',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-5",modifiers:{"collapse-5":true}}],staticClass:"collapse-widget-title"},[_vm._ssrNode("\n                Price\n\n                <i class=\"fas fa-angle-up\"></i>")]),_vm._ssrNode(" "),_c('b-collapse',{attrs:{"visible":"","id":"collapse-5"}},[_c('ul',{staticClass:"price-list-row"},[_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("$10 - $100")])]),_vm._v(" "),_c('li',{staticClass:"active"},[_c('a',{attrs:{"href":"#"}},[_vm._v("$100 - $200")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("$200 - $300")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("$300 - $400")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("$400 - $500")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("$500 - $600")])])])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"collapse-widget color-list-widget\">","</div>",[_c('h3',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-6",modifiers:{"collapse-6":true}}],staticClass:"collapse-widget-title"},[_vm._ssrNode("\n                Color\n\n                <i class=\"fas fa-angle-up\"></i>")]),_vm._ssrNode(" "),_c('b-collapse',{attrs:{"visible":"","id":"collapse-6"}},[_c('ul',{staticClass:"color-list-row"},[_c('li',[_c('a',{staticClass:"color-black",attrs:{"href":"#","title":"Black"}})]),_vm._v(" "),_c('li',[_c('a',{staticClass:"color-red",attrs:{"href":"#","title":"Red"}})]),_vm._v(" "),_c('li',[_c('a',{staticClass:"color-yellow",attrs:{"href":"#","title":"Yellow"}})]),_vm._v(" "),_c('li',[_c('a',{staticClass:"color-white",attrs:{"href":"#","title":"White"}})]),_vm._v(" "),_c('li',[_c('a',{staticClass:"color-blue",attrs:{"href":"#","title":"Blue"}})]),_vm._v(" "),_c('li',[_c('a',{staticClass:"color-green",attrs:{"href":"#","title":"Green"}})]),_vm._v(" "),_c('li',[_c('a',{staticClass:"color-yellowgreen",attrs:{"href":"#","title":"Yellow Green"}})]),_vm._v(" "),_c('li',[_c('a',{staticClass:"color-pink",attrs:{"href":"#","title":"Pink"}})]),_vm._v(" "),_c('li',[_c('a',{staticClass:"color-violet",attrs:{"href":"#","title":"Violet"}})]),_vm._v(" "),_c('li',[_c('a',{staticClass:"color-blueviolet",attrs:{"href":"#","title":"Blue Violet"}})]),_vm._v(" "),_c('li',[_c('a',{staticClass:"color-lime",attrs:{"href":"#","title":"Lime"}})]),_vm._v(" "),_c('li',[_c('a',{staticClass:"color-plum",attrs:{"href":"#","title":"Plum"}})]),_vm._v(" "),_c('li',[_c('a',{staticClass:"color-teal",attrs:{"href":"#","title":"Teal"}})])])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"collapse-widget tag-list-widget\">","</div>",[_c('h3',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-7",modifiers:{"collapse-7":true}}],staticClass:"collapse-widget-title"},[_vm._ssrNode("\n                Popular Tags\n\n                <i class=\"fas fa-angle-up\"></i>")]),_vm._ssrNode(" "),_c('b-collapse',{attrs:{"visible":"","id":"collapse-7"}},[_c('ul',{staticClass:"tags-list-row"},[_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("Vintage")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("Black")])]),_vm._v(" "),_c('li',{staticClass:"active"},[_c('a',{attrs:{"href":"#"}},[_vm._v("Discount")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("Good")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("Jeans")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("Summer")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#"}},[_vm._v("Winter")])])])])],2),_vm._ssrNode(" <div class=\"collapse-widget aside-products-widget\"><h3 class=\"aside-widget-title\">\n                Popular Products\n            </h3> <div class=\"aside-single-products\"><div class=\"products-image\"><a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(26)))+" alt=\"image\"></a></div> <div class=\"products-content\"><span><a href=\"#\">Men's</a></span> <h3><a href=\"#\">Belted chino trousers polo</a></h3> <div class=\"product-price\"><span class=\"new-price\">$191.00</span> <span class=\"old-price\">$291.00</span></div></div></div> <div class=\"aside-single-products\"><div class=\"products-image\"><a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(27)))+" alt=\"image\"></a></div> <div class=\"products-content\"><span><a href=\"#\">Men's</a></span> <h3><a href=\"#\">Belted chino trousers polo</a></h3> <div class=\"product-price\"><span class=\"new-price\">$191.00</span> <span class=\"old-price\">$291.00</span></div></div></div> <div class=\"aside-single-products\"><div class=\"products-image\"><a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(22)))+" alt=\"image\"></a></div> <div class=\"products-content\"><span><a href=\"#\">Men's</a></span> <h3><a href=\"#\">Belted chino trousers polo</a></h3> <div class=\"product-price\"><span class=\"new-price\">$191.00</span> <span class=\"old-price\">$291.00</span></div></div></div></div> <div class=\"collapse-widget aside-trending-widget\"><div class=\"aside-trending-products\"><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt=\"image\"> <div class=\"category\"><h4>Top Trending</h4> <span>Spring/Summer 2018 Collection</span></div> <a href=\"#\"></a></div></div>")],2)])}
var Sidebarvue_type_template_id_07598ae4_staticRenderFns = []


// CONCATENATED MODULE: ./components/all-products/Sidebar.vue?vue&type=template&id=07598ae4&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/all-products/Sidebar.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  Sidebarvue_type_template_id_07598ae4_render,
  Sidebarvue_type_template_id_07598ae4_staticRenderFns,
  false,
  null,
  null,
  "d78a787a"
  
)

/* harmony default export */ var Sidebar = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/all-products/AllProducts.vue?vue&type=template&id=32c859a4&
var AllProductsvue_type_template_id_32c859a4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-lg-8 col-md-12"},[_vm._ssrNode("<div class=\"products-filter-options\"><div class=\"row align-items-center\"><div class=\"col d-flex\"><p>Showing 22 of 102 results</p></div> <div class=\"col d-flex\"><span>Show:</span> <div class=\"show-products-number\"><select><option value=\"1\">22</option> <option value=\"2\">32</option> <option value=\"3\">42</option> <option value=\"4\">52</option> <option value=\"5\">62</option></select></div> <span>Sort:</span> <div class=\"products-ordering-list\"><select><option value=\"1\">Featured</option> <option value=\"2\">Best Selling</option> <option value=\"3\">Price Ascending</option> <option value=\"4\">Price Descending</option> <option value=\"5\">Date Ascending</option> <option value=\"6\">Date Descending</option> <option value=\"7\">Name Ascending</option> <option value=\"8\">Name Descending</option></select></div></div></div></div> "),_vm._ssrNode("<div id=\"products-filter\" class=\"products-collections-listing row\">","</div>",_vm._l((_vm.products),function(product,index){return _c('ProductItem',{key:index,attrs:{"product":product,"className":"col-lg-6 col-md-6 products-col-item"},on:{"clicked":_vm.toggle}})}),1),_vm._ssrNode(" <nav class=\"woocommerce-pagination\"><ul><li><a href=\"#\" class=\"page-numbers\">1</a></li> <li><span class=\"page-numbers current\">2</span></li> <li><a href=\"#\" class=\"page-numbers\">3</a></li> <li><a href=\"#\" class=\"page-numbers\">4</a></li> <li><span class=\"page-numbers dots\">…</span></li> <li><a href=\"#\" class=\"page-numbers\">11</a></li> <li><a href=\"#\" class=\"page-numbers\">12</a></li> <li><a href=\"#\" class=\"next page-numbers\"><i class=\"fas fa-chevron-right\"></i></a></li></ul></nav> "),_c('QuckView')],2)}
var AllProductsvue_type_template_id_32c859a4_staticRenderFns = []


// CONCATENATED MODULE: ./components/all-products/AllProducts.vue?vue&type=template&id=32c859a4&

// EXTERNAL MODULE: ./components/modals/QuckView.vue + 4 modules
var QuckView = __webpack_require__(135);

// EXTERNAL MODULE: ./utils/sidebar-util.js
var sidebar_util = __webpack_require__(5);

// EXTERNAL MODULE: ./components/landing-one/ProductItem.vue + 9 modules
var ProductItem = __webpack_require__(134);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/all-products/AllProducts.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var AllProductsvue_type_script_lang_js_ = ({
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
      return this.$store.state.products.all;
    }

  }
});
// CONCATENATED MODULE: ./components/all-products/AllProducts.vue?vue&type=script&lang=js&
 /* harmony default export */ var all_products_AllProductsvue_type_script_lang_js_ = (AllProductsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/all-products/AllProducts.vue





/* normalize component */

var AllProducts_component = Object(componentNormalizer["a" /* default */])(
  all_products_AllProductsvue_type_script_lang_js_,
  AllProductsvue_type_template_id_32c859a4_render,
  AllProductsvue_type_template_id_32c859a4_staticRenderFns,
  false,
  null,
  null,
  "44a42a8c"
  
)

/* harmony default export */ var AllProducts = (AllProducts_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var productsvue_type_script_lang_js_ = ({
  components: {
    Sidebar: Sidebar,
    AllProducts: AllProducts
  }
});
// CONCATENATED MODULE: ./pages/products.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_productsvue_type_script_lang_js_ = (productsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/products.vue





/* normalize component */

var products_component = Object(componentNormalizer["a" /* default */])(
  pages_productsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8e3ac19c"
  
)

/* harmony default export */ var products = __webpack_exports__["default"] = (products_component.exports);

/***/ })

};;
//# sourceMappingURL=products.js.map