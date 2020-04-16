<template>
    <div class="col-lg-4 col-md-12">
        <div class="woocommerce-sidebar-area">
            <div class="collapse-widget filter-list-widget">
                <h3 v-b-toggle.collapse-1 class="collapse-widget-title">
                    Current Selection
                    <i class="fas fa-angle-up"></i>
                </h3>

                <b-collapse visible id="collapse-1" class="selected-filters-wrap-list">
                    <ul>
                        <li><a href="#">44</a></li>
                        <li><a href="#">XI</a></li>
                        <li><a href="#">Clothing</a></li>
                        <li><a href="#">Shoes</a></li>
                        <li><a href="#">Accessories</a></li>
                    </ul>

                    <div class="delete-selected-filters">
                        <a href="#"><i class="far fa-trash-alt"></i> <span>Clear All</span></a>
                    </div>
                </b-collapse>
            </div>

            <div class="collapse-widget collections-list-widget">
                <h3 v-b-toggle.collapse-2 class="collapse-widget-title">
                    Collections

                    <i class="fas fa-angle-up"></i>
                </h3>
                <b-collapse visible id="collapse-2">
                    <ul class="collections-list-row">
                        <li class="active"><a href="#">Women’s</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Clothing</a></li>
                        <li><a href="#">Shoes</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Uncategorized</a></li>
                    </ul>
                </b-collapse>
            </div>

            <div class="collapse-widget brands-list-widget">
                <h3 v-b-toggle.collapse-3 class="collapse-widget-title">
                    Brands

                    <i class="fas fa-angle-up"></i>
                </h3>

                <b-collapse visible id="collapse-3">
                    <ul class="brands-list-row">
                        <li class="active"><a href="#">Adidas</a></li>
                        <li><a href="#">Nike</a></li>
                        <li><a href="#">Reebok</a></li>
                        <li><a href="#">Shoes</a></li>
                        <li><a href="#">Ralph Lauren</a></li>
                        <li><a href="#">Delpozo</a></li>
                    </ul>
                </b-collapse>
            </div>

            <div class="collapse-widget size-list-widget">
                <h3 v-b-toggle.collapse-4 class="collapse-widget-title">
                    Size

                    <i class="fas fa-angle-up"></i>
                </h3>

                <b-collapse visible id="collapse-4">
                    <ul class="size-list-row">
                        <li><a href="#">20</a></li>
                        <li><a href="#">24</a></li>
                        <li><a href="#">36</a></li>
                        <li><a href="#">30</a></li>
                        <li class="active"><a href="#">XS</a></li>
                        <li><a href="#">S</a></li>
                        <li><a href="#">M</a></li>
                        <li><a href="#">L</a></li>
                        <li><a href="#">L</a></li>
                        <li><a href="#">XL</a></li>
                    </ul>
                </b-collapse>
            </div>

            <div class="collapse-widget price-list-widget">
                <h3 v-b-toggle.collapse-5 class="collapse-widget-title">
                    Price

                    <i class="fas fa-angle-up"></i>
                </h3>

                <b-collapse visible id="collapse-5">
                    <ul class="price-list-row">
                        <li><a href="#">$10 - $100</a></li>
                        <li class="active"><a href="#">$100 - $200</a></li>
                        <li><a href="#">$200 - $300</a></li>
                        <li><a href="#">$300 - $400</a></li>
                        <li><a href="#">$400 - $500</a></li>
                        <li><a href="#">$500 - $600</a></li>
                    </ul>
                </b-collapse>
            </div>

            <div class="collapse-widget color-list-widget">
                <h3 v-b-toggle.collapse-6 class="collapse-widget-title">
                    Color

                    <i class="fas fa-angle-up"></i>
                </h3>

                <b-collapse visible id="collapse-6">
                    <ul class="color-list-row">
                        <li><a href="#" title="Black" class="color-black"></a></li>
                        <li><a href="#" title="Red" class="color-red"></a></li>
                        <li><a href="#" title="Yellow" class="color-yellow"></a></li>
                        <li><a href="#" title="White" class="color-white"></a></li>
                        <li><a href="#" title="Blue" class="color-blue"></a></li>
                        <li><a href="#" title="Green" class="color-green"></a></li>
                        <li><a href="#" title="Yellow Green" class="color-yellowgreen"></a></li>
                        <li><a href="#" title="Pink" class="color-pink"></a></li>
                        <li><a href="#" title="Violet" class="color-violet"></a></li>
                        <li><a href="#" title="Blue Violet" class="color-blueviolet"></a></li>
                        <li><a href="#" title="Lime" class="color-lime"></a></li>
                        <li><a href="#" title="Plum" class="color-plum"></a></li>
                        <li><a href="#" title="Teal" class="color-teal"></a></li>
                    </ul>
                </b-collapse>
            </div>

            <div class="collapse-widget tag-list-widget">
                <h3 v-b-toggle.collapse-7 class="collapse-widget-title">
                    Popular Tags

                    <i class="fas fa-angle-up"></i>
                </h3>
                <b-collapse visible id="collapse-7">
                    <ul class="tags-list-row">
                        <li><a href="#">Vintage</a></li>
                        <li><a href="#">Black</a></li>
                        <li class="active"><a href="#">Discount</a></li>
                        <li><a href="#">Good</a></li>
                        <li><a href="#">Jeans</a></li>
                        <li><a href="#">Summer</a></li>
                        <li><a href="#">Winter</a></li>
                    </ul>
                </b-collapse>
            </div>

            <div class="collapse-widget aside-products-widget">
                <h3 class="aside-widget-title">
                    Popular Products
                </h3>

                <div class="aside-single-products">
                    <div class="products-image">
                        <a href="#">
                            <img src="../../assets/img/img2.jpg" alt="image">
                        </a>
                    </div>

                    <div class="products-content">
                        <span><a href="#">Men's</a></span>
                        <h3><a href="#">Belted chino trousers polo</a></h3>

                        <div class="product-price">
                            <span class="new-price">$191.00</span>
                            <span class="old-price">$291.00</span>
                        </div>
                    </div>
                </div>

                <div class="aside-single-products">
                    <div class="products-image">
                        <a href="#">
                            <img src="../../assets/img/img3.jpg" alt="image">
                        </a>
                    </div>

                    <div class="products-content">
                        <span><a href="#">Men's</a></span>
                        <h3><a href="#">Belted chino trousers polo</a></h3>

                        <div class="product-price">
                            <span class="new-price">$191.00</span>
                            <span class="old-price">$291.00</span>
                        </div>
                    </div>
                </div>

                <div class="aside-single-products">
                    <div class="products-image">
                        <a href="#">
                            <img src="../../assets/img/img4.jpg" alt="image">
                        </a>
                    </div>

                    <div class="products-content">
                        <span><a href="#">Men's</a></span>
                        <h3><a href="#">Belted chino trousers polo</a></h3>

                        <div class="product-price">
                            <span class="new-price">$191.00</span>
                            <span class="old-price">$291.00</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="collapse-widget aside-trending-widget">
                <div class="aside-trending-products">
                    <img src="../../assets/img/bestseller-hover-img1.jpg" alt="image">

                    <div class="category">
                        <h4>Top Trending</h4>
                        <span>Spring/Summer 2018 Collection</span>
                    </div>

                    <a href="#"></a>
                </div>
            </div>
        </div>
    </div>
</template>