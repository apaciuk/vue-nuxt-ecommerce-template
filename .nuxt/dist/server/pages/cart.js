exports.ids = [4];
exports.modules = {

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart.vue?vue&type=template&id=6fd4f157&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"page-title-area\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" <li>Cart</li>")],2)])]),_vm._ssrNode(" "),_c('CartItems')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/cart.vue?vue&type=template&id=6fd4f157&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/cart/CartItems.vue?vue&type=template&id=ced1b1c6&
var CartItemsvue_type_template_id_ced1b1c6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"cart-area ptb-60"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12 col-md-12\">","</div>",[_vm._ssrNode("<form>","</form>",[_vm._ssrNode("<div class=\"cart-table table-responsive\">","</div>",[_vm._ssrNode("<table class=\"table table-bordered\">","</table>",[_vm._ssrNode("<thead><tr><th scope=\"col\">Product</th> <th scope=\"col\">Name</th> <th scope=\"col\">Unit Price</th> <th scope=\"col\">Quantity</th> <th scope=\"col\">Total</th></tr></thead> "),(_vm.cart.length > 0)?_vm._ssrNode("<tbody>","</tbody>",_vm._l((_vm.cart),function(cart,i){return _vm._ssrNode("<tr>","</tr>",[_vm._ssrNode("<td class=\"product-thumbnail\"><a href=\"#\"><img"+(_vm._ssrAttr("src",cart.image))+(_vm._ssrAttr("alt",cart.name))+"></a></td> "),_vm._ssrNode("<td class=\"product-name\">","</td>",[_c('nuxt-link',{attrs:{"to":("/products-details/" + (cart.id))}},[_vm._v("\n                                                    "+_vm._s(cart.name)+"\n                                                ")]),_vm._ssrNode(" <ul><li>Color: <strong>Light Blue</strong></li> <li>Size: <strong>XL</strong></li> <li>Material: <strong>Cotton</strong></li></ul>")],2),_vm._ssrNode(" <td class=\"product-price\"><span class=\"unit-amount\">"+_vm._ssrEscape("$"+_vm._s(cart.price))+"</span></td> <td class=\"product-quantity\"><div class=\"input-counter\"><span class=\"minus-btn\"><i class=\"fas fa-minus\"></i></span>"+_vm._ssrEscape("\n                                                    "+_vm._s(cart.quantity)+"\n                                                    ")+"<span class=\"plus-btn\"><i class=\"fas fa-plus\"></i></span></div></td> <td class=\"product-subtotal\"><span class=\"subtotal-amount\">"+_vm._ssrEscape("$"+_vm._s(cart.price * cart.quantity))+"</span> <a href=\"javascript:void(0)\" class=\"remove\"><i class=\"far fa-trash-alt\"></i></a></td>")],2)}),0):_vm._e()],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"cart-buttons\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-7 col-md-7\">","</div>",[_vm._ssrNode("<div class=\"continue-shopping-box\">","</div>",[_c('nuxt-link',{staticClass:"btn btn-light",attrs:{"to":"/products"}},[_vm._v("Continue Shopping")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-5 col-md-5 text-right\">","</div>",[_vm._ssrNode("<div class=\"cart-totals\">","</div>",[_vm._ssrNode("<h3>Cart Totals</h3> <ul><li>Subtotal <span>"+_vm._ssrEscape("$"+_vm._s(_vm.cartTotal))+"</span></li> <li>Shipping <span>$10.00</span></li> <li>Total <span><b>"+_vm._ssrEscape("$"+_vm._s(parseFloat(_vm.cartTotal + 10).toFixed(2)))+"</b></span></li></ul> "),_c('nuxt-link',{staticClass:"btn btn-light",attrs:{"to":"/checkout"}},[_vm._v("Proceed to Checkout")])],2)])],2)])],2)])])])])}
var CartItemsvue_type_template_id_ced1b1c6_staticRenderFns = []


// CONCATENATED MODULE: ./components/cart/CartItems.vue?vue&type=template&id=ced1b1c6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/cart/CartItems.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CartItemsvue_type_script_lang_js_ = ({
  computed: {
    cart() {
      return this.$store.getters.cart;
    },

    cartTotal() {
      return this.$store.getters.totalAmount;
    }

  },
  methods: {
    removeItemFromCart(id) {
      this.$store.dispatch('deleteCart', id);
    },

    onIncrement(id) {
      this.$store.dispatch('updateCart', {
        id,
        unit: 1,
        cart: this.cart
      });
    },

    onDecrement(id, quantity) {
      if (quantity > 1) {
        this.$store.dispatch('updateCart', {
          id,
          unit: -1,
          cart: this.cart
        });
      } else {
        this.removeItemFromCart(id);
        this.$toast.warning("Item deleted!");
      }
    }

  }
});
// CONCATENATED MODULE: ./components/cart/CartItems.vue?vue&type=script&lang=js&
 /* harmony default export */ var cart_CartItemsvue_type_script_lang_js_ = (CartItemsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/cart/CartItems.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cart_CartItemsvue_type_script_lang_js_,
  CartItemsvue_type_template_id_ced1b1c6_render,
  CartItemsvue_type_template_id_ced1b1c6_staticRenderFns,
  false,
  null,
  null,
  "2c09cc37"
  
)

/* harmony default export */ var CartItems = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var cartvue_type_script_lang_js_ = ({
  components: {
    CartItems: CartItems
  }
});
// CONCATENATED MODULE: ./pages/cart.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_cartvue_type_script_lang_js_ = (cartvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/cart.vue





/* normalize component */

var cart_component = Object(componentNormalizer["a" /* default */])(
  pages_cartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "66c515ee"
  
)

/* harmony default export */ var cart = __webpack_exports__["default"] = (cart_component.exports);

/***/ })

};;
//# sourceMappingURL=cart.js.map