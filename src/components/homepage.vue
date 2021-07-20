<template>
  <div>
    <siteheader/>
    
    <productSlider/>

    <suggestioncarousel/>

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

    <sellingfestival/>
  </div>
</template>

<script>
import siteheader from '@/components/header/siteheader.vue'
import productSlider from '@/components/productSlider.vue'
import suggestioncarousel from '@/components/suggestions/suggestionCarousel.vue'
import sellingfestival from '@/components/sellingFestival/sellingFestival.vue'

export default {
  name: "home",
  components : {
    siteheader,
    productSlider,
    suggestioncarousel,
    sellingfestival
  },
  props: {
    msg: String,
  },
  data () {
    return {
      sections: [
        'جدیدترین جشنواره های فروش'
      ]
    }
  }
};
</script>

