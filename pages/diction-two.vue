<template>
    <div>
        <Banner />
        <Facility />
        <TrendingProducts />
        <BestSellers />
        <Offer />
        <News />
        <Subscribe />
        <Partner />
        <InstagramPhotos />
    </div>
</template>

<script>
import Banner from '../components/diction-two/Banner';
import Facility from '../components/diction-two/Facility';
import TrendingProducts from '../components/diction-two/TrendingProducts';
import BestSellers from '../components/diction-two/BestSellers';
import Offer from '../components/diction-two/Offer';
import News from '../components/diction-two/News';
import Subscribe from '../components/common/Subscribe';
import Partner from '../components/common/Partner';
import InstagramPhotos from '../components/common/InstagramPhotos';
export default {
    components: {
        Banner,
        Facility, 
        TrendingProducts,
        BestSellers,
        Offer,
        News,
        Subscribe,
        Partner,
        InstagramPhotos
    }
}
</script>