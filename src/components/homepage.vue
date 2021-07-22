<template>
  <div>
    <font-awesome-icon :icon="['fas', 'fa-bars']" />

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

    <category/>

    <b-container>
      <carousel :perPageCustom="[[0, 2], [768, 2], [1024,5]]" :paginationEnabled="false" class="my-3 orange-border-top">
        <slide v-for="product in firstcarousel" :key="product.id">
          <product :product="product" :name="product.name"/>
        </slide>
      </carousel>
    </b-container>

    <firstProductGallery/>

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

    <b-container>
      <carousel :perPageCustom="[[0, 2], [768, 2], [1024,5]]" :paginationEnabled="false" class="my-3 orange-border-top">
        <slide v-for="product in secondcarousel" :key="product.id">
          <product :product="product" :name="product.name"/>
        </slide>
      </carousel>
    </b-container>

    <productGallery/>

    <b-container>
      <carousel :perPageCustom="[[0, 2], [768, 2], [1024,5]]" :paginationEnabled="false" class="my-3 orange-border-top">
        <slide v-for="product in thirdcarousel" :key="product.id">
          <product :product="product" :name="product.name"/>
        </slide>
      </carousel>
    </b-container>

    <sitefooter/>
  </div>
</template>

<script>
import siteheader from '@/components/header/siteheader.vue'
import productSlider from '@/components/productSlider.vue'
import suggestioncarousel from '@/components/suggestions/suggestionCarousel.vue'
import category from '@/components/category/category.vue'
import product from '@/components/carousel/product.vue'
import firstProductGallery from '@/components/productGallery/firstProductGallery.vue'
import productGallery from '@/components/productGallery/productGallery.vue'
import sitefooter from '@/components/footer/sitefooter.vue'

export default {
  name: "home",
  components : {
    siteheader,
    productSlider,
    suggestioncarousel,
    category,
    product,
    firstProductGallery,
    productGallery,
    sitefooter
  },
  data () {
    return {
      firstcarousel: [
        { 
          id: String(Math.floor(Math.random() * 999999999)),
          name: 'سبزی آش خرد شده دکتر بیژن  400 گرمی',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/315x315/filters:format(webp)/files/shop/product/9589d96bf1be42db9121ae288cdcd372.jpg'
        },
        { 
          id: String(Math.floor(Math.random() * 999999999)),
          name: 'روغن کلزا پیور 500 سی سی',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/315x315/filters:format(webp)/files/shop/product/42622c9445cb4185a449fdc5f5310867.jpg'
        },
        { 
          id: String(Math.floor(Math.random() * 999999999)),
          name: 'گوشت خورشتی گوساله ممتاز روناک پروتئین 800 گرمی',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/315x315/filters:format(webp)/files/shop/product/b2bc64448d054775b6a2e2c02af57137.jpg'
        },
        { 
          id: String(Math.floor(Math.random() * 999999999)),
          name: 'پنیر پیتزای پروسس دو رنگ ناژوان 1000 گرمی',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/315x315/filters:format(webp)/files/shop/product/7c1059a92a234e37bf48d97004d65b9b.jpg'
        },
        { 
          id: String(Math.floor(Math.random() * 999999999)),
          name: 'سبزی آش خرد شده دکتر بیژن  400 گرمی',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/315x315/filters:format(webp)/files/shop/product/9589d96bf1be42db9121ae288cdcd372.jpg'
        }
      ],
      secondcarousel: [
       { 
         id: String(Math.floor(Math.random() * 999999999)),
          name: 'دستمال جذب روغن غذا برند کاتوس',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/270x270/filters:format(webp)/files/shop/product/bc68a45a851f4ce292cbf4fda9672cc0.jpg'
        },
       { 
         id: String(Math.floor(Math.random() * 999999999)),
          name: 'لیف حمام ابریشمی بلند برند کاتوس',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/270x270/filters:format(webp)/files/shop/product/7eb3e61e9f9647ecab706b52363b3a66.jpg'
        },
       { 
         id: String(Math.floor(Math.random() * 999999999)),
          name: 'لیف حمام کلاسیک برند کاتوس',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/270x270/filters:format(webp)/files/shop/product/57cd68c117ee4f51a6c9c5f9ea67feed.jpg'
        },
       { 
         id: String(Math.floor(Math.random() * 999999999)),
          name: 'روکش بهداشتی توالت فرنگی رد شونده برند کاتوس',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/270x270/filters:format(webp)/files/shop/product/08403593a01a4891ae55fc8d66a0ca82.jpg'
        },
        { 
          id: String(Math.floor(Math.random() * 999999999)),
          name: 'دستمال پاورکلین برند کاتوس 4 عددی',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/270x270/filters:format(webp)/files/shop/product/5f36d80d29154fdb8b4eac18e2c43d40.jpg'
        },
        { 
          id: String(Math.floor(Math.random() * 999999999)),
          name: 'دستمال پاورکلین برند کاتوس 4 عددی',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/270x270/filters:format(webp)/files/shop/product/5f36d80d29154fdb8b4eac18e2c43d40.jpg'
        },
        { 
          id: String(Math.floor(Math.random() * 999999999)),
          name: 'دستمال پاورکلین برند کاتوس 4 عددی',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/270x270/filters:format(webp)/files/shop/product/5f36d80d29154fdb8b4eac18e2c43d40.jpg'
        }
      ],
      thirdcarousel: [
       { 
         id: String(Math.floor(Math.random() * 999999999)),
          name: 'ران گوسفند کشتار داخلی مهیا پروتئین 2 کیلوگرمی',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/270x270/filters:format(webp)/files/shop/product/f9d7da976e524c7cae05f9d573c668c2.jpg'
        },
       { 
         id: String(Math.floor(Math.random() * 999999999)),
          name: 'ران گوسفندی وارداتی رزا 2 کیلوگرمی',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/270x270/filters:format(webp)/files/shop/product/013f1e29ad0f48a38480416e17d66d86.jpg'
        },
       { 
         id: String(Math.floor(Math.random() * 999999999)),
          name: 'راسته گوسفند بی استخوان کشتار داخلی مهیا پروتئین 1 کیلوگرمی',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/270x270/filters:format(webp)/files/shop/product/82e36a214ed84cb6a01c563a2f7b7fad.jpg'
        },
       { 
         id: String(Math.floor(Math.random() * 999999999)),
          name: 'ماهیچه گوسفندی آریا بهار پروتئین 1 کیلوگرمی',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/270x270/filters:format(webp)/files/shop/product/958bae714d454772adf48e9f153fcdf3.jpg'
        },
        { 
          id: String(Math.floor(Math.random() * 999999999)),
          name: 'گوشت ران گوسفند آریا بهار پروتئین 1 کیلوگرمی ',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/270x270/filters:format(webp)/files/shop/product/f9d7da976e524c7cae05f9d573c668c2.jpg'
        },
        { 
          id: String(Math.floor(Math.random() * 999999999)),
          name: 'ماهیچه گوسفندی آریا بهار پروتئین 1 کیلوگرمی',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/270x270/filters:format(webp)/files/shop/product/958bae714d454772adf48e9f153fcdf3.jpg'
        },
        { 
          id: String(Math.floor(Math.random() * 999999999)),
          name: 'گوشت ران گوسفند آریا بهار پروتئین 1 کیلوگرمی ',
          price: 27000,
          discount: '30%',
          afterdiscount: 18000,
          src: 'https://img.beroozresaan.com/unsafe/270x270/filters:format(webp)/files/shop/product/f9d7da976e524c7cae05f9d573c668c2.jpg'
        }
      ]
    }
  }
};
</script>

