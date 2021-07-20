<template>
  <div>
    <siteheader/>
    
    <productSlider/>

    <suggestioncarousel/>
  </div>
</template>

<script>
import siteheader from '@/components/header/siteheader.vue'
import productSlider from '@/components/productSlider.vue'
import suggestioncarousel from '@/components/suggestions/suggestionCarousel.vue'

export default {
  name: "home",
  components : {
    siteheader,
    productSlider,
    suggestioncarousel
  },
  props: {
    msg: String,
  },
};
</script>

