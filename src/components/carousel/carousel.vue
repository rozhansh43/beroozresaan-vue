<template>
    <carousel :perPageCustom="[[0, 1], [768, 2], [1024,4]]" :paginationEnabled="false">
      <slide v-for="suggestedProduct in suggestedProducts" :key="suggestedProduct.id">
        carousel
        <product :suggestedProducts="suggestedProducts"/>
      </slide>
    </carousel>
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
      suggestedProducts: [
        { 
          name: 'پنیر پیتزای پروسس دو رنگ ناژوان 1000 گرمی',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/315x315/filters:format(webp)/files/shop/product/7c1059a92a234e37bf48d97004d65b9b.jpg'
        },
        { 
          name: 'سبزی آش خرد شده دکتر بیژن  400 گرمی',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/315x315/filters:format(webp)/files/shop/product/9589d96bf1be42db9121ae288cdcd372.jpg'
        },
        { 
          name: 'روغن کلزا پیور 500 سی سی',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/315x315/filters:format(webp)/files/shop/product/42622c9445cb4185a449fdc5f5310867.jpg'
        },
        { 
          name: 'گوشت خورشتی گوساله ممتاز روناک پروتئین 800 گرمی',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/315x315/filters:format(webp)/files/shop/product/b2bc64448d054775b6a2e2c02af57137.jpg'
        },
        { 
          name: 'پنیر پیتزای پروسس دو رنگ ناژوان 1000 گرمی',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/315x315/filters:format(webp)/files/shop/product/7c1059a92a234e37bf48d97004d65b9b.jpg'
        },
        { 
          name: 'سبزی آش خرد شده دکتر بیژن  400 گرمی',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/315x315/filters:format(webp)/files/shop/product/9589d96bf1be42db9121ae288cdcd372.jpg'
        },
        { 
          name: 'روغن کلزا پیور 500 سی سی',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/315x315/filters:format(webp)/files/shop/product/42622c9445cb4185a449fdc5f5310867.jpg'
        },
        { 
          name: 'گوشت خورشتی گوساله ممتاز روناک پروتئین 800 گرمی',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/315x315/filters:format(webp)/files/shop/product/b2bc64448d054775b6a2e2c02af57137.jpg'
        }
      ]
    }
  }

}
</script>