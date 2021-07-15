exports.ids = [13];
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

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/products-details/_id.vue?vue&type=template&id=b066a12c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"page-title-area\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" <li>"+_vm._ssrEscape(_vm._s(_vm.product.name))+"</li>")],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"products-details-area ptb-60\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_c('ProductImages'),_vm._ssrNode(" "),_c('Details',{attrs:{"id":_vm.product.id,"name":_vm.product.name,"price":_vm.product.price,"image":_vm.product.image}}),_vm._ssrNode(" "),_c('DetailsInfo'),_vm._ssrNode(" "),_c('RelatedProducts',{attrs:{"id":_vm.product.id}})],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/products-details/_id.vue?vue&type=template&id=b066a12c&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/products/ProductImages.vue?vue&type=template&id=16cf8e57&
var ProductImagesvue_type_template_id_16cf8e57_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('div',{staticClass:"col-lg-6 col-md-6"},[_c('div',{staticClass:"products-page-gallery"},[_c('div',{staticClass:"product-page-gallery-main"},[_c('vueper-slides',{attrs:{"bullets":false}},_vm._l((_vm.images),function(img,i){return _c('vueper-slide',{key:i,attrs:{"image":img.image}})}),1)],1)])])])}
var ProductImagesvue_type_template_id_16cf8e57_staticRenderFns = []


// CONCATENATED MODULE: ./components/products/ProductImages.vue?vue&type=template&id=16cf8e57&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/products/ProductImages.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ProductImagesvue_type_script_lang_js_ = ({
  data() {
    return {
      images: [{
        id: 1,
        image: __webpack_require__(29)
      }, {
        id: 2,
        image: __webpack_require__(26)
      }, {
        id: 3,
        image: __webpack_require__(27)
      }, {
        id: 4,
        image: __webpack_require__(22)
      }, {
        id: 5,
        image: __webpack_require__(30)
      }, {
        id: 7,
        image: __webpack_require__(31)
      }, {
        id: 8,
        image: __webpack_require__(32)
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/products/ProductImages.vue?vue&type=script&lang=js&
 /* harmony default export */ var products_ProductImagesvue_type_script_lang_js_ = (ProductImagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/products/ProductImages.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  products_ProductImagesvue_type_script_lang_js_,
  ProductImagesvue_type_template_id_16cf8e57_render,
  ProductImagesvue_type_template_id_16cf8e57_staticRenderFns,
  false,
  null,
  null,
  "68e4ab42"
  
)

/* harmony default export */ var ProductImages = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/products/Details.vue?vue&type=template&id=6c95c6b6&
var Detailsvue_type_template_id_6c95c6b6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-lg-6 col-md-6"},[_vm._ssrNode("<div class=\"product-details-content\"><h3>"+_vm._ssrEscape(_vm._s(_vm.name))+"</h3> <div class=\"price\"><span class=\"new-price\">"+_vm._ssrEscape("$"+_vm._s(_vm.price))+"</span></div> <div class=\"product-review\"><div class=\"rating\"><i class=\"fas fa-star\"></i> <i class=\"fas fa-star\"></i> <i class=\"fas fa-star\"></i> <i class=\"fas fa-star\"></i> <i class=\"fas fa-star-half-alt\"></i></div> <a href=\"#\" class=\"rating-count\">3 reviews</a></div> <ul class=\"product-info\"><li><span>Vendor:</span> <a href=\"#\">Lereve</a></li> <li><span>Availability:</span> <a href=\"#\">In stock (7 items)</a></li> <li><span>Product Type:</span> <a href=\"#\">T-Shirt</a></li></ul> <div class=\"product-color-switch\"><h4>Color:</h4> <ul><li><a href=\"#\" title=\"Black\" class=\"color-black\"></a></li> <li><a href=\"#\" title=\"White\" class=\"color-white\"></a></li> <li class=\"active\"><a href=\"#\" title=\"Green\" class=\"color-green\"></a></li> <li><a href=\"#\" title=\"Yellow Green\" class=\"color-yellowgreen\"></a></li> <li><a href=\"#\" title=\"Teal\" class=\"color-teal\"></a></li></ul></div> <div class=\"product-size-wrapper\"><h4>Size:</h4> <ul><li><a href=\"#\">XS</a></li> <li class=\"active\"><a href=\"#\">S</a></li> <li><a href=\"#\">M</a></li> <li><a href=\"#\">XL</a></li> <li><a href=\"#\">XXL</a></li></ul></div> <div class=\"product-add-to-cart\"><div class=\"input-counter\"><span class=\"minus-btn\"><i class=\"fas fa-minus\"></i></span>"+_vm._ssrEscape("\n                "+_vm._s(_vm.quantity)+"\n                ")+"<span class=\"plus-btn\"><i class=\"fas fa-plus\"></i></span></div> "+((_vm.getExistPId)?("<button type=\"submit\" class=\"btn btn-danger\"><i class=\"fas fa-cart-plus\"></i> Already Added \n            </button>"):("<button type=\"submit\" class=\"btn btn-primary\"><i class=\"fas fa-cart-plus\"></i> Add to Cart\n            </button>"))+"</div> <div class=\"wishlist-compare-btn\"><a href=\"#\" class=\"btn btn-light\"><i class=\"far fa-heart\"></i> Add to Wishlist</a> <a href=\"#\" class=\"btn btn-light\"><i class=\"fas fa-balance-scale\"></i> Add to Compare</a></div> <div class=\"buy-checkbox-btn\"><div class=\"item\"><input id=\"cbx\" type=\"checkbox\" class=\"inp-cbx\"> <label for=\"cbx\" class=\"cbx\"><span><svg width=\"12px\" height=\"10px\" viewbox=\"0 0 12 10\"><polyline points=\"1.5 6 4.5 9 10.5 1\"></polyline></svg></span> <span>I agree with the terms and conditions</span></label></div> <div class=\"item\"><a href=\"#\" class=\"btn btn-primary\">Buy it now!</a></div></div></div>")])}
var Detailsvue_type_template_id_6c95c6b6_staticRenderFns = []


// CONCATENATED MODULE: ./components/products/Details.vue?vue&type=template&id=6c95c6b6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/products/Details.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Detailsvue_type_script_lang_js_ = ({
  data() {
    return {
      getExistPId: false,
      quantity: 1
    };
  },

  props: ['id', 'name', 'price', 'image'],
  computed: {
    cart() {
      return this.$store.getters.cart;
    }

  },
  methods: {
    addToCart() {
      const product = [{
        id: this.id,
        name: this.name,
        price: this.price,
        image: this.image,
        quantity: this.quantity
      }];

      if (this.cart.length > 0) {
        let id = this.id;
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
          this.getExistPId = true;
          this.$toast.info("Already added to the cart");
        }
      } else {
        this.$store.dispatch('addToCart', product);
        this.$toast("Added to cart", {
          icon: 'fas fa-cart-plus'
        });
      }
    },

    increaseQuantity() {
      if (this.quantity > 9) {
        this.$toast("Can't add more than 10", {
          icon: 'fas fa-cart-plus'
        });
      } else {
        this.quantity++;
      }
    },

    decreaseQuantity() {
      if (this.quantity < 2) {
        this.$toast("Can't add less than 1", {
          icon: 'fas fa-cart-plus'
        });
      } else {
        this.quantity--;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/products/Details.vue?vue&type=script&lang=js&
 /* harmony default export */ var products_Detailsvue_type_script_lang_js_ = (Detailsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/products/Details.vue





/* normalize component */

var Details_component = Object(componentNormalizer["a" /* default */])(
  products_Detailsvue_type_script_lang_js_,
  Detailsvue_type_template_id_6c95c6b6_render,
  Detailsvue_type_template_id_6c95c6b6_staticRenderFns,
  false,
  null,
  null,
  "44d1fc06"
  
)

/* harmony default export */ var Details = (Details_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/products/DetailsInfo.vue?vue&type=template&id=6fed9cf8&
var DetailsInfovue_type_template_id_6fed9cf8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-lg-12 col-md-12"},[_vm._ssrNode("<div class=\"tab products-details-tab\"><div class=\"row\"><div class=\"col-lg-12 col-md-12\"><ul class=\"tabs\"><li><a href=\"#\"><div class=\"dot\"></div> Description\n                    </a></li></ul></div> <div class=\"col-lg-12 col-md-12\"><div class=\"tab_content\"><div class=\"tabs_item\"><div class=\"products-details-tab-content\"><p>Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum.  Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nulla libero. Vivamus pharetra posuere sapien.</p> <div class=\"row\"><div class=\"col-lg-6 col-md-6\"><ul><li>Fabric 1: 100% Polyester</li> <li>Fabric 2: 100% Polyester,Lining: 100% Polyester</li> <li>Fabric 3: 75% Polyester, 20% Viscose, 5% Elastane</li></ul></div> <div class=\"col-lg-6 col-md-6\"><ol><li>Fabric 1: 75% Polyester, 20% Viscose, 5% Elastane</li> <li>Fabric 2: 100% Polyester,Lining: 100% Polyester</li> <li>Fabric 3: 100% Polyester</li></ol></div></div></div></div></div></div></div></div>")])}
var DetailsInfovue_type_template_id_6fed9cf8_staticRenderFns = []


// CONCATENATED MODULE: ./components/products/DetailsInfo.vue?vue&type=template&id=6fed9cf8&

// CONCATENATED MODULE: ./components/products/DetailsInfo.vue

var script = {}


/* normalize component */

var DetailsInfo_component = Object(componentNormalizer["a" /* default */])(
  script,
  DetailsInfovue_type_template_id_6fed9cf8_render,
  DetailsInfovue_type_template_id_6fed9cf8_staticRenderFns,
  false,
  null,
  null,
  "ea96ed6a"
  
)

/* harmony default export */ var DetailsInfo = (DetailsInfo_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/products/RelatedProducts.vue?vue&type=template&id=88164f20&
var RelatedProductsvue_type_template_id_88164f20_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"related-products-area\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"section-title\"><h2><span class=\"dot\"></span> Related Products</h2></div> "),_vm._ssrNode("<div class=\"row\">","</div>",_vm._l((_vm.relatedProducts),function(product){return _c('ProductItem',{key:product.id,attrs:{"product":product,"className":"col-lg-3 col-md-6 col-6"},on:{"clicked":_vm.toggle}})}),1)],2)]),_vm._ssrNode(" "),_c('QuckView')],2)}
var RelatedProductsvue_type_template_id_88164f20_staticRenderFns = []


// CONCATENATED MODULE: ./components/products/RelatedProducts.vue?vue&type=template&id=88164f20&

// EXTERNAL MODULE: ./components/landing-one/ProductItem.vue + 9 modules
var ProductItem = __webpack_require__(134);

// EXTERNAL MODULE: ./utils/sidebar-util.js
var sidebar_util = __webpack_require__(5);

// EXTERNAL MODULE: ./components/modals/QuckView.vue + 4 modules
var QuckView = __webpack_require__(135);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/products/RelatedProducts.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var RelatedProductsvue_type_script_lang_js_ = ({
  components: {
    ProductItem: ProductItem["a" /* default */],
    QuckView: QuckView["a" /* default */]
  },
  props: ['id'],
  methods: {
    toggle() {
      sidebar_util["a" /* mutations */].toggleQuickView();
    }

  },
  computed: {
    relatedProducts() {
      return this.$store.state.products.all.filter(product => product.id !== parseInt(this.id)).slice(0, 4);
    }

  }
});
// CONCATENATED MODULE: ./components/products/RelatedProducts.vue?vue&type=script&lang=js&
 /* harmony default export */ var products_RelatedProductsvue_type_script_lang_js_ = (RelatedProductsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/products/RelatedProducts.vue





/* normalize component */

var RelatedProducts_component = Object(componentNormalizer["a" /* default */])(
  products_RelatedProductsvue_type_script_lang_js_,
  RelatedProductsvue_type_template_id_88164f20_render,
  RelatedProductsvue_type_template_id_88164f20_staticRenderFns,
  false,
  null,
  null,
  "9c9c962c"
  
)

/* harmony default export */ var RelatedProducts = (RelatedProducts_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products-details/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  components: {
    ProductImages: ProductImages,
    Details: Details,
    DetailsInfo: DetailsInfo,
    RelatedProducts: RelatedProducts
  },

  data() {
    return {
      id: this.$route.params.id
    };
  },

  computed: {
    product() {
      return this.$store.state.products.all.find(product => product.id === parseInt(this.id));
    }

  }
});
// CONCATENATED MODULE: ./pages/products-details/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var products_details_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/products-details/_id.vue





/* normalize component */

var _id_component = Object(componentNormalizer["a" /* default */])(
  products_details_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "27b75a52"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (_id_component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map