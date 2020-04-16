<template>
    <div class="col-lg-6 col-md-6">
        <div class="product-details-content">
            <h3>{{name}}</h3>

            <div class="price">
                <span class="new-price">${{price}}</span>
            </div>

            <div class="product-review">
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <a href="#" class="rating-count">3 reviews</a>
            </div>

            <ul class="product-info">
                <li><span>Vendor:</span> <a href="#">Lereve</a></li>
                <li><span>Availability:</span> <a href="#">In stock (7 items)</a></li>
                <li><span>Product Type:</span> <a href="#">T-Shirt</a></li>
            </ul>

            <div class="product-color-switch">
                <h4>Color:</h4>

                <ul>
                    <li><a href="#" title="Black" class="color-black"></a></li>
                    <li><a href="#" title="White" class="color-white"></a></li>
                    <li class="active"><a href="#" title="Green" class="color-green"></a></li>
                    <li><a href="#" title="Yellow Green" class="color-yellowgreen"></a></li>
                    <li><a href="#" title="Teal" class="color-teal"></a></li>
                </ul>
            </div>

            <div class="product-size-wrapper">
                <h4>Size:</h4>

                <ul>
                    <li><a href="#">XS</a></li>
                    <li class="active"><a href="#">S</a></li>
                    <li><a href="#">M</a></li>
                    <li><a href="#">XL</a></li>
                    <li><a href="#">XXL</a></li>
                </ul>
            </div>

            <div class="product-add-to-cart">
                <div class="input-counter">
                    <span @click="decreaseQuantity()" class="minus-btn"><i class="fas fa-minus"></i></span>
                    {{quantity}}
                    <span @click="increaseQuantity()" class="plus-btn"><i class="fas fa-plus"></i></span>
                </div>

                <button v-if="getExistPId" type="submit" class="btn btn-danger" @click="addToCart()">
                    <i class="fas fa-cart-plus"></i> Already Added 
                </button>

                <button v-else type="submit" class="btn btn-primary" @click="addToCart()">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>

            <div class="wishlist-compare-btn">
                <a href="#" class="btn btn-light"><i class="far fa-heart"></i> Add to Wishlist</a>
                <a href="#" class="btn btn-light"><i class="fas fa-balance-scale"></i> Add to Compare</a>
            </div>

            <div class="buy-checkbox-btn">
                <div class="item">
                    <input class="inp-cbx" id="cbx" type="checkbox">
                    <label class="cbx" for="cbx">
                        <span>
                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                            </svg>
                        </span>
                        <span>I agree with the terms and conditions</span>
                    </label>
                </div>

                <div class="item">
                    <a href="#" class="btn btn-primary">Buy it now!</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            getExistPId: false,
            quantity: 1
        }
    },
    props: ['id', 'name', 'price', 'image' ],
    computed: {
        cart(){
            return this.$store.getters.cart
        }
    },
    methods: {
        addToCart(){
            const product = [{
                id: this.id,
                name: this.name,
                price: this.price,
                image: this.image,
                quantity: this.quantity
            }]

            if(this.cart.length > 0){
                let id = this.id 
                let cartIndex = this.cart.findIndex(cart => {
                    return cart.id == id
                })

                if(cartIndex == -1){
                    this.$store.dispatch('addToCart', product);
                    this.$toast("Added to cart", {
                        icon: 'fas fa-cart-plus'
                    });
                } else {
                    this.$store.dispatch('updateCart', {
                        id, unit: 1, cart: this.cart
                    });
                    this.getExistPId = true
                    this.$toast.info("Already added to the cart");
                }
            } else {
                this.$store.dispatch('addToCart', product)
                this.$toast("Added to cart",{
                    icon: 'fas fa-cart-plus'
                });
            }
        },
        increaseQuantity(){
            if(this.quantity > 9){
                this.$toast("Can't add more than 10",{
                    icon: 'fas fa-cart-plus'
                });
            } else {
                this.quantity++
            }
        },
        decreaseQuantity() {
            if(this.quantity < 2){
                this.$toast("Can't add less than 1",{
                    icon: 'fas fa-cart-plus'
                });
            } else {
                this.quantity--;
            }
        },
    }
}
</script>