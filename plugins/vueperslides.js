import Vue from "vue";
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

Vue.component('VueperSlides', VueperSlides);
Vue.component('VueperSlide', VueperSlide);
Vue.use(VueperSlides);
Vue.use(VueperSlide);