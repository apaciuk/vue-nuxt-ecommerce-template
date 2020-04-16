<template>
    <client-only>
        <!-- Start News Area -->
        <section class="news-area ptb-60">
            <div class="container">
                <div class="section-title">
                    <h2><span class="dot"></span> Bolster News</h2>
                </div>

                <div class="news-slides owl-carousel owl-theme">
                    <carousel
                        :autoplay = true
                        :autoplayTimeout = 1000
                        :perPageCustom = "[[0, 1], [768, 2], [1024, 3], [1200, 3]]"
                    >
                        <slide v-for="post in posts" :key="post.id">
                            <div class="single-news-post">
                                <div class="news-image">
                                    <nuxt-link :to="post.link">
                                        <img :src="post.image" :alt="post.title">
                                    </nuxt-link>
                                </div>

                                <div class="news-content">
                                    <h3>
                                        <nuxt-link :to="post.link">{{post.title}}</nuxt-link>
                                    </h3>
                                    <span class="author">By <a href="#">{{post.author}}</a></span>
                                    <p>{{post.post}}</p>
                                    <a href="#" class="btn btn-light">Read More</a>
                                </div>
                            </div>
                        </slide>
                    </carousel>
                </div>
            </div>
        </section>
        <!-- End News Area -->
    </client-only>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: 'Styling White Jeans after Labor Day',
                    link: 'blog-details',
                    author: 'Admin',
                    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    image: require('../../assets/img/blog-img1.jpg')
                },
                {
                    id: 2,
                    title: 'he Best Ecommerce Platform for Growing Sales',
                    link: 'blog-details',
                    author: 'Admin',
                    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    image: require('../../assets/img/blog-img2.jpg')
                },
                {
                    id: 3,
                    title: 'The Evolution of the B2B Buying Process',
                    link: 'blog-details',
                    author: 'Admin',
                    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    image: require('../../assets/img/blog-img3.jpg')
                },
                {
                    id: 4,
                    title: 'The Best eCommerce Blogs for Online Retailers',
                    link: 'blog-details',
                    author: 'Admin',
                    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    image: require('../../assets/img/blog-img4.jpg')
                },
                {
                    id: 5,
                    title: 'How to Do Social Media Customer Service',
                    link: 'blog-details',
                    author: 'Admin',
                    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    image: require('../../assets/img/blog-img5.jpg')
                },
            ]
        }
    }
}
</script>