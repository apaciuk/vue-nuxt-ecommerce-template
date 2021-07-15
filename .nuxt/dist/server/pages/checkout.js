exports.ids = [5];
exports.modules = {

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

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout.vue?vue&type=template&id=2f33a1ca&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CheckoutItem')}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/checkout.vue?vue&type=template&id=2f33a1ca&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/cart/CheckoutItem.vue?vue&type=template&id=904713e6&
var CheckoutItemvue_type_template_id_904713e6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"page-title-area\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" <li>Cart</li>")],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"checkout-area ptb-60\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12 col-md-12\">","</div>",[_vm._ssrNode("<div class=\"user-actions\">","</div>",[_vm._ssrNode("<i class=\"fas fa-sign-in-alt\"></i> "),_vm._ssrNode("<span>","</span>",[_vm._ssrNode("Returning customer? "),_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Click here to login")])],2)],2)])]),_vm._ssrNode(" <form><div class=\"row\"><div class=\"col-lg-6 col-md-12\"><div class=\"billing-details\"><h3 class=\"title\">Billing Details</h3> <div class=\"row\"><div class=\"col-lg-12 col-md-6\"><div class=\"form-group\"><label>Full Name <span class=\"required\">*</span></label> <input type=\"text\" id=\"fullName\""+(_vm._ssrAttr("value",(_vm.personDetails.fullName)))+" class=\"form-control\"></div></div> <div class=\"col-lg-12 col-md-6\"><div class=\"form-group\"><label>Address <span class=\"required\">*</span></label> <input type=\"text\" id=\"address\""+(_vm._ssrAttr("value",(_vm.personDetails.address)))+" class=\"form-control\"></div></div> <div class=\"col-lg-12 col-md-6\"><div class=\"form-group\"><label>Town / City <span class=\"required\">*</span></label> <input type=\"text\" id=\"city\""+(_vm._ssrAttr("value",(_vm.personDetails.city)))+" class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6\"><div class=\"form-group\"><label>Email Address <span class=\"required\">*</span></label> <input type=\"email\" id=\"email\""+(_vm._ssrAttr("value",(_vm.personDetails.email)))+" class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6\"><div class=\"form-group\"><label>Phone <span class=\"required\">*</span></label> <input type=\"text\" id=\"phone\""+(_vm._ssrAttr("value",(_vm.personDetails.phone)))+" class=\"form-control\"></div></div></div></div></div> <div class=\"col-lg-6 col-md-12\"><div class=\"order-details\"><h3 class=\"title\">Your Order</h3> <div class=\"order-table table-responsive\"><table class=\"table table-bordered\"><thead><tr><th scope=\"col\">Product Name</th> <th scope=\"col\">Total</th></tr></thead> <tbody>"+(_vm._ssrList((_vm.cart),function(cart,i){return ("<tr><td class=\"product-name\"><a href=\"#\">"+_vm._ssrEscape(_vm._s(cart.name))+"</a></td> <td class=\"product-total\"><span class=\"subtotal-amount\">"+_vm._ssrEscape("$"+_vm._s(cart.price * cart.quantity))+"</span></td></tr>")}))+" <tr><td class=\"order-subtotal\"><span>Cart Subtotal</span></td> <td class=\"order-subtotal-price\"><span class=\"order-subtotal-amount\">"+_vm._ssrEscape("$"+_vm._s(_vm.cartTotal))+"</span></td></tr> <tr><td class=\"order-shipping\"><span>Shipping</span></td> <td class=\"shipping-price\"><span>$10.00</span></td></tr> <tr><td class=\"total-price\"><span>Order Total</span></td> <td class=\"product-subtotal\"><span class=\"subtotal-amount\">"+_vm._ssrEscape("$"+_vm._s(parseFloat(_vm.cartTotal + 10).toFixed(2)))+"</span></td></tr></tbody></table></div> <div class=\"payment-method\"><p><input type=\"radio\" id=\"direct-bank-transfer\" name=\"radio-group\" checked=\"checked\"> <label for=\"direct-bank-transfer\">Direct Bank Transfer</label>\n\n                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.\n                                    </p> <p><input type=\"radio\" id=\"paypal\" name=\"radio-group\"> <label for=\"paypal\">PayPal</label></p> <p><input type=\"radio\" id=\"cash-on-delivery\" name=\"radio-group\"> <label for=\"cash-on-delivery\">Cash on Delivery</label></p></div> <a href=\"javascript:void(0)\" class=\"btn btn-primary order-btn\">Place Order</a></div></div></div></form>")],2)])],2)}
var CheckoutItemvue_type_template_id_904713e6_staticRenderFns = []


// CONCATENATED MODULE: ./components/cart/CheckoutItem.vue?vue&type=template&id=904713e6&

// EXTERNAL MODULE: ./plugins/firebase.js
var firebase = __webpack_require__(138);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/cart/CheckoutItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CheckoutItemvue_type_script_lang_js_ = ({
  data() {
    return {
      personDetails: {
        fullName: 'John Doe',
        address: 'Town hall, av 02',
        city: 'New York',
        email: 'john@gmail.com',
        phone: '+990198378372',
        createdAt: new Date()
      }
    };
  },

  computed: {
    cart() {
      return this.$store.getters.cart;
    },

    cartTotal() {
      return this.$store.getters.totalAmount;
    }

  },
  methods: {
    add() {
      const cartData = {
        details: this.personDetails,
        items: this.cart
      };
      const db = firebase["a" /* default */].firestore();
      const dbOrderRef = db.collection('orders');
      dbOrderRef.add(cartData);
      this.$toast.success(`Thanks for the order`, {
        icon: 'fas fa-cart-plus'
      });
      this.$store.dispatch('cartEmpty');
      this.$router.push("/");
    }

  }
});
// CONCATENATED MODULE: ./components/cart/CheckoutItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var cart_CheckoutItemvue_type_script_lang_js_ = (CheckoutItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/cart/CheckoutItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cart_CheckoutItemvue_type_script_lang_js_,
  CheckoutItemvue_type_template_id_904713e6_render,
  CheckoutItemvue_type_template_id_904713e6_staticRenderFns,
  false,
  null,
  null,
  "a777f3dc"
  
)

/* harmony default export */ var CheckoutItem = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var checkoutvue_type_script_lang_js_ = ({
  components: {
    CheckoutItem: CheckoutItem
  }
});
// CONCATENATED MODULE: ./pages/checkout.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_checkoutvue_type_script_lang_js_ = (checkoutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/checkout.vue





/* normalize component */

var checkout_component = Object(componentNormalizer["a" /* default */])(
  pages_checkoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5ae54bd8"
  
)

/* harmony default export */ var checkout = __webpack_exports__["default"] = (checkout_component.exports);

/***/ })

};;
//# sourceMappingURL=checkout.js.map