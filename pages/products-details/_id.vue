<template>
    <div>
        <!-- Start Page Title Area -->
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li>{{product.name}}</li>
                </ul>
            </div>
        </div>
        <!-- End Page Title Area -->

        <!-- Start Products Details Area -->
        <section class="products-details-area ptb-60">
            <div class="container">
                <div class="row">
                    <ProductImages />
                    <Details 
                        :id = "product.id"
                        :name = "product.name" 
                        :price = "product.price"
                        :image = "product.image"
                    />
                    <DetailsInfo />
                    <RelatedProducts :id = "product.id" />
                </div>
            </div>
        </section>
    </div>
</template>



<script>
import ProductImages from '../../components/products/ProductImages';
import Details from '../../components/products/Details';
import DetailsInfo from '../../components/products/DetailsInfo';
import RelatedProducts from '../../components/products/RelatedProducts';
export default {
    components: {
        ProductImages, Details, DetailsInfo, RelatedProducts
    },
    data(){
        return {
            id: this.$route.params.id
        }
    },
    computed: {
        product(){
            return this.$store.state.products.all.find(product => product.id === parseInt(this.id));
        }
    }
}
</script>