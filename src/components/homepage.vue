<template>
  <div id="app">
    <font-awesome-icon :icon="['fas', 'fa-bars']" />

    <siteheader/>
    
    <product-slider/>

    <suggestioncarousel :items="suggestedProducts"/>

    <category :categories="categories"/>

    <metro-gallery/>

    <mainTitles :title="titles.latest"/>

    <b-container>
      <b-row class="carousel">
        <product-carousel :items="firstcarousel"/>
      </b-row>
    </b-container>

    <product-gallery/>

    <mainTitles :title="titles.mainProducts"/>

    <b-container>
      <b-row class="carousel">
        <product-carousel :items="secondcarousel"/>
      </b-row>
    </b-container>

    <second-product-gallery/>

    <mainTitles :title="titles.redMeet"/>

    <b-container>
      <b-row class="carousel">
        <product-carousel :items="thirdcarousel"/>
      </b-row>
    </b-container>

    <sitefooter :icons="icons"/>

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
import secondProductGallery from '@/components/productGallery/secondProductGallery'
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
    secondProductGallery,
    mainTitles,
    category,
    metroGallery,
    productGallery,
    sitefooter
  }
};
</script>

