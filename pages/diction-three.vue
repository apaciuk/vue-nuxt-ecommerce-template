<template>
    <div>
        <Banner />
        <Facility />
        <Category />
        <LatestProducts />
        <Offer />
        <News />
        <Partner />
        <Subscribe />
        <InstagramPhotos />
    </div>
</template>

<script>
import Banner from '../components/diction-three/Banner';
import Facility from '../components/diction-two/Facility';
import Category from '../components/diction-three/Category';
import LatestProducts from '../components/landing-one/LatestProducts';
import Offer from '../components/diction-three/Offer';
import News from '../components/diction-two/News';
import Partner from '../components/common/Partner';
import Subscribe from '../components/common/Subscribe';
import InstagramPhotos from '../components/common/InstagramPhotos';
export default {
    components: {
        Banner, Facility, Category, LatestProducts, Offer, News,
        Partner, Subscribe, InstagramPhotos
    }
}
</script>