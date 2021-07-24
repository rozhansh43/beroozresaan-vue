<template>
  <div id="app">
    <font-awesome-icon :icon="['fas', 'fa-bars']" />

    <siteheader/>
    
    <product-slider/>

    <suggestioncarousel :items="suggestedProducts"/>

    <b-container>
        <div class="d-flex justify-content-between align-items-center">
          <a href="#">
            <h4 class="text-right">
            جدیدترین جشنواره های فروش  
            </h4>   
          </a>

          <a href="#" class="text-left">
            <span>
              مشاهده همه />
            </span>  
          </a>
        </div>
    </b-container>

    <category :categories="categories"/>

    <metro-gallery/>

    <mainTitles/>

    <b-container>
      <b-row class="carousel">
        <product-carousel :items="firstcarousel"/>
      </b-row>
    </b-container>

    <product-gallery/>

    <b-container>
      <div class="d-flex justify-content-between align-items-center pt-3">
        <a href="#">
          <h4 class="text-right">
          جدیدترین ها
          </h4>   
        </a>

        <a href="#" class="text-left">
          <span>
            مشاهده همه />
          </span>  
        </a>
      </div>
    </b-container>

    <b-container>
      <b-row class="carousel">
        <product-carousel :items="secondcarousel"/>
      </b-row>
    </b-container>

    <second-product-gallery/>

    

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

