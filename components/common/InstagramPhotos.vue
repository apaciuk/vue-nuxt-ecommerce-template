<template>
    <client-only>
        <!-- Start Instagram Area -->
        <div class="instagram-area">
            <div class="instagram-slides owl-carousel owl-theme">
                <carousel
                    :loop = true
                    :autoplay = true
                    :autoplayTimeout = 5000
                    :perPageCustom = "[[0, 2], [768, 6], [1200, 9]]"
                    :paginationEnabled = false
                >
                    <slide v-for="photo in photos" :key="photo.id">
                        <div class="instagram-box">
                            <img :src="photo.photo" alt="image">

                            <div class="icon">
                                <i class="fab fa-instagram"></i>
                            </div>

                            <a :href="photo.url" target="_blank"></a>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
        <!-- End Instagram Area -->
    </client-only>
</template>

<script>
export default {
    data(){
        return {
            photos: [
                {id: 1, photo: require('../../assets/img/instagram1.jpg'), url: 'https://www.instagram.com/'},
                {id: 2, photo: require('../../assets/img/instagram2.jpg'), url: 'https://www.instagram.com/'},
                {id: 3, photo: require('../../assets/img/instagram3.jpg'), url: 'https://www.instagram.com/'},
                {id: 9, photo: require('../../assets/img/instagram7.jpg'), url: 'https://www.instagram.com/'},
                {id: 6, photo: require('../../assets/img/instagram5.jpg'), url: 'https://www.instagram.com/'},
                {id: 4, photo: require('../../assets/img/instagram4.jpg'), url: 'https://www.instagram.com/'},
                {id: 5, photo: require('../../assets/img/instagram5.jpg'), url: 'https://www.instagram.com/'},
                {id: 11, photo: require('../../assets/img/instagram9.jpg'), url: 'https://www.instagram.com/'},
                {id: 8, photo: require('../../assets/img/instagram6.jpg'), url: 'https://www.instagram.com/'},
                {id: 7, photo: require('../../assets/img/instagram5.jpg'), url: 'https://www.instagram.com/'},
                {id: 12, photo: require('../../assets/img/instagram9.jpg'), url: 'https://www.instagram.com/'},
                {id: 10, photo: require('../../assets/img/instagram8.jpg'), url: 'https://www.instagram.com/'},
                {id: 13, photo: require('../../assets/img/instagram9.jpg'), url: 'https://www.instagram.com/'},
            ]
        }
    }
}
</script>