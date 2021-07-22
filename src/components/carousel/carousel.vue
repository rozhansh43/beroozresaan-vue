<template>
  <b-container>
    <carousel :perPageCustom="[[0, 1], [768, 2], [1024,5]]" :paginationEnabled="false" class="my-3 orange-border-top">
      <slide v-for="product in firstcarousel" :key="product.name">
        <product :firstcarousel="firstcarousel"/>
      </slide>
    </carousel>
  </b-container>
</template>


<script>
import product from './product.vue'

export default {
  components: {
    product
  },
  data () {
    return {
      name: 'product',
      firstcarousel: { 
        name: 'پنیر پیتزای پروسس دو رنگ ناژوان 1000 گرمی',
        price: 27000,
        discount: '30%',
        afterdiscount: 18000,
        src: 'https://img.beroozresaan.com/unsafe/315x315/filters:format(webp)/files/shop/product/7c1059a92a234e37bf48d97004d65b9b.jpg'
      },
    }
  }
}
</script>