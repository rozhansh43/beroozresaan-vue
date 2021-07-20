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
import suggestionCarousel from '@/components/suggestionCarousel.vue'

export default {
  name: "home",
  components : {
    siteheader,
    productSlider,
    suggestionCarousel
  },
  props: {
    msg: String,
  },
};
</script>

