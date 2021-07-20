<template>
    <carousel :perPageCustom="[[0, 1], [768, 2], [1024,4]]" :paginationEnabled="false">
      <slide v-for="suggestedProduct in suggestedProducts" :key="suggestedProduct.id">
        <b-card
          :img-src="suggestedProduct.src"
          img-alt="suggestedProduct.name"
          img-top
          tag="article"
          style="max-width: 20rem;"
        >
          <b-card-text class="text-right">
            {{ suggestedProduct.name }}
          </b-card-text>
          

          <div class="mb-2 text-left px-3">
            <div class="text-muted">
              <span class="discount-value position-relative px-2">
                {{ suggestedProduct.price }}
              </span>

              <b-badge pill variant="danger" class="p-2">
                {{ suggestedProduct.discount }}
              </b-badge>

              
              <div class="font-weight-bold text-left px-3">
                {{ suggestedProduct.afterdiscount }}
              </div>
            </div>
          </div>
        </b-card>
      </slide>
    </carousel>
</template>


<script>
export default {
  data () {
    return {
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