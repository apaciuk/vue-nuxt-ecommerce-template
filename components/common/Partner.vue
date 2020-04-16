<template>
    <client-only>
        <!-- Start Partner Area -->
        <div class="partner-area">
            <div class="container">
                <div class="partner-slides owl-carousel owl-theme">
                    <carousel
                        :loop = true
                        :autoplay = true
                        :autoplayTimeout = 1000
                        :paginationEnabled = false
                        :perPageCustom = "[[0, 2], [768, 4], [1200, 6]]"
                        :speed = 5000
                    >
                        <slide>
                            <div class="partner-item">
                                <a href="#" target="_blank"><img src="../../assets/img/partner1.png" alt="image"></a>
                            </div>
                        </slide>

                        <slide>
                            <div class="partner-item">
                                <a href="#" target="_blank"><img src="../../assets/img/partner2.png" alt="image"></a>
                            </div>
                        </slide>

                        <slide>
                            <div class="partner-item">
                                <a href="#" target="_blank"><img src="../../assets/img/partner3.png" alt="image"></a>
                            </div>
                        </slide>

                        <slide>
                            <div class="partner-item">
                                <a href="#" target="_blank"><img src="../../assets/img/partner4.png" alt="image"></a>
                            </div>
                        </slide>

                        <slide>
                            <div class="partner-item">
                                <a href="#" target="_blank"><img src="../../assets/img/partner5.png" alt="image"></a>
                            </div>
                        </slide>
                        
                        <slide>
                            <div class="partner-item">
                                <a href="#" target="_blank"><img src="../../assets/img/partner6.png" alt="image"></a>
                            </div>
                        </slide>
                    </carousel>
                </div>
            </div>
        </div>
        <!-- End Partner Area -->
    </client-only>
</template>