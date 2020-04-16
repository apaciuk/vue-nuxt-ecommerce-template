<template>
    <div>
        <!-- Start Trending Products Area -->
        <section class="trending-products-area pb-60">
            <div class="container">
                <div class="section-title">
                    <h2><span class="dot"></span> Trending Products</h2>
                </div>

                <div class="row">
                    <ProductItem
                        v-for="product in products"
                        :product="product"
                        :key="product.id"
                        @clicked="toggle"
                        :className="`col-lg-3 col-md-6 col-sm-6`"
                    ></ProductItem>
                </div>
            </div>
        </section>
        <!-- End Trending Products Area -->
        <QuckView />
    </div>
</template>

<script>
import QuckView from '../modals/QuckView';
import { mutations } from '../../utils/sidebar-util';
import ProductItem from './ProductItem';
export default {
    components: {
        QuckView,
        ProductItem
    },

    methods: {
        toggle() {
            mutations.toggleQuickView()
        }
    },
    
    computed: {
        products(){
            return this.$store.state.products.all.filter(product => product.trending === true)
        }
    }
}
</script>