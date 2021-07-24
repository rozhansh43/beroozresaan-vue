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
ddd
    <b-container>
      <b-row class="carousel">
        <products-carousel :items="firstcarousel"/>
        <products-carousel :items="sdfsd"/>
        <carousel :perPageCustom="[[0, 2], [768, 2], [1024,6]]" :paginationEnabled="false" class="my-3 orange-border-top">
          <slide v-for="product in items" :key="product.id">
            <product :product="product" :name="product.name"/>
          </slide>
        </carousel>
      </b-row>
    </b-container>
ffff
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
        <carousel :perPageCustom="[[0, 2], [768, 2], [1024,5]]" :paginationEnabled="false" class="my-3 orange-border-top">
          <slide v-for="product in secondcarousel" :key="product.id">
            <product :product="product" :name="product.name"/>
          </slide>
        </carousel>
      </b-row>
    </b-container>

    <second-product-gallery/>

    <b-container>
      <div class="d-flex justify-content-between align-items-center pt-3">
        <a href="#">
          <h4 class="text-right">
            کالاهای اساسی
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
        <carousel :perPageCustom="[[0, 2], [768, 2], [1024,5]]" :paginationEnabled="false" class="my-3 orange-border-top">
          <slide v-for="product in thirdcarousel" :key="product.id">
            <product :product="product" :name="product.name"/>
          </slide>
        </carousel>
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
import product from '@/components/carousel/product'
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
    suggestioncarousel,
    secondProductGallery,
    category,
    product,
    metroGallery,
    productGallery,
    sitefooter
  }
};
</script>

