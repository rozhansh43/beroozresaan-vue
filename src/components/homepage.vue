<template>
  <div id="app">
    <font-awesome-icon :icon="['fas', 'fa-bars']" />

    <siteheader/>
    
    <product-slider/>

    <suggestioncarousel :items="suggestedProducts"/>

    <category :items="categories"/>

    <metro-gallery/>

    <main-titles :title="titles.latest"/>

    <b-container>
      <b-row class="carousel">
        <product-carousel :items="latestCarousel"/>
      </b-row>
    </b-container>

    <product-gallery :items="greenGallery"/>

    <main-titles :title="titles.mainProducts"/>

    <b-container>
      <b-row class="carousel">
        <product-carousel :items="mainProductCarousel"/>
      </b-row>
    </b-container>

    <product-gallery :items="orangeGallery"/>

    <main-titles :title="titles.redMeet"/>

    <b-container>
      <b-row class="carousel">
        <product-carousel :items="meetCarousel"/>
      </b-row>
    </b-container>

    <sitefooter :icons="icons" :namads="namads" />

  </div>
</template>

<script>
import siteheader from '@/components/header/siteheader'
import productSlider from '@/components/productSlider'
import suggestioncarousel from '@/components/suggestions/suggestionCarousel'
import category from '@/components/category/category'
import productCarousel from '@/components/carousel/productCarousel'
import mainTitles from '@/components/mainTitles/mainTitles'
import metroGallery from '@/components/productGallery/metroGallery'
import productGallery from '@/components/productGallery/productGallery'
import sitefooter from '@/components/footer/sitefooter'
import mixin from '@/mixins/mixin'

export default {
  mixins: [mixin],
  name: "Homepage",
  components : {
    siteheader,
    productSlider,
    productCarousel,
    suggestioncarousel,
    mainTitles,
    category,
    metroGallery,
    productGallery,
    sitefooter
  }
};
</script>

