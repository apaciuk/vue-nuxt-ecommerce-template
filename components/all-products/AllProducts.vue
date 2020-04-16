<template>
    <div class="col-lg-8 col-md-12">
        <div class="products-filter-options">
            <div class="row align-items-center">
                <div class="col d-flex">
                    <p>Showing 22 of 102 results</p>
                </div>

                <div class="col d-flex">
                    <span>Show:</span>

                    <div class="show-products-number">
                        <select>
                            <option value="1">22</option>
                            <option value="2">32</option>
                            <option value="3">42</option>
                            <option value="4">52</option>
                            <option value="5">62</option>
                        </select>
                    </div>

                    <span>Sort:</span>

                    <div class="products-ordering-list">
                        <select>
                            <option value="1">Featured</option>
                            <option value="2">Best Selling</option>
                            <option value="3">Price Ascending</option>
                            <option value="4">Price Descending</option>
                            <option value="5">Date Ascending</option>
                            <option value="6">Date Descending</option>
                            <option value="7">Name Ascending</option>
                            <option value="8">Name Descending</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div id="products-filter" class="products-collections-listing row">
            <ProductItem
                v-for="(product, index) in products"
                :product="product"
                :key="index"
                @clicked="toggle"
                :className="`col-lg-6 col-md-6 products-col-item`"
            ></ProductItem>
            
        </div>

        <nav class="woocommerce-pagination">
            <ul>
                <li><a href="#" class="page-numbers">1</a></li>
                <li><span class="page-numbers current">2</span></li>
                <li><a href="#" class="page-numbers">3</a></li>
                <li><a href="#" class="page-numbers">4</a></li>
                <li><span class="page-numbers dots">…</span></li>
                <li><a href="#" class="page-numbers">11</a></li>
                <li><a href="#" class="page-numbers">12</a></li>
                <li><a href="#" class="next page-numbers"><i class="fas fa-chevron-right"></i></a></li>
            </ul>
        </nav>

        <QuckView />
    </div>
</template>

<script>
import QuckView from '../modals/QuckView';
import { mutations } from '../../utils/sidebar-util';
import ProductItem from '../landing-one/ProductItem';
export default {
    components: {
        QuckView,
        ProductItem
    },
    methods: {
        toggle() {
            mutations.toggleQuickView();
        }
    },
    computed: {
        products(){
            return this.$store.state.products.all
        }
    },
}
</script>