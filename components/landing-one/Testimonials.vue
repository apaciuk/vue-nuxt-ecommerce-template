<template>
    <client-only>
        <!-- Start Testimonials Area -->
        <section class="testimonials-area ptb-60 jarallax" data-jarallax='{"speed": 0.3}'>
            <div class="container">
                <div class="testimonials-slides owl-carousel owl-theme">
                    <carousel
                        :autoplay = true
                        :autoplayTimeout = 1000
                        :perPageCustom = "[[0, 1], [768, 1], [1024, 1]]"
                    >
                        <slide v-for="item in items" :key="item.id">
                            <div class="single-testimonials">
                                <div class="client-image">
                                    <img :src="item.image" :alt="item.name">
                                </div>

                                <p>{{item.feedback}}</p>

                                <div class="client-info">
                                    <h4>{{item.name}}</h4>
                                    <span>{{item.position}}</span>
                                </div>
                            </div>
                        </slide>
                    </carousel>
                    
                </div>
            </div>
        </section>
        <!-- End Testimonials Area -->
    </client-only>
</template>

<script>
export default {
    data(){
        return {
            items: [
                {
                    id: 1,
                    name: 'Jason Statham',
                    position: 'Actor at Crank',
                    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
                    image: require('../../assets/img/client1.jpg')

                },
                {
                    id: 2,
                    name: 'Jason Statham',
                    position: 'CEO at Assmble',
                    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
                    image: require('../../assets/img/client1.jpg')

                },
                {
                    id: 3,
                    name: 'Jason Statham',
                    position: 'Founder at Kramble',
                    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
                    image: require('../../assets/img/client1.jpg')

                },
            ]
        }
    }
}
</script>