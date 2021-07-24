<template>
  <b-container class="product-gallery">
        <b-row>
            <b-col md="8" cols="6" v-for="similarImage in firstgallery.similarImages" :key="similarImage.index">
                <b-col md="6">
                    <b-img rounded :class="[ isEven(index) ? 'rounded img-fluid w-100' : 'rounded img-fluid mb-3 w-100']" :src="similarImage" alt="image" >
                    </b-img>
                </b-col>
            </b-col>

            <b-col md="4" class="d-none d-md-block">
                <b-img rounded class="rounded img-fluid w-100" :src="firstgallery.differentImage" alt="image" >
                </b-img>
            </b-col>
       </b-row>
  </b-container>
</template>

<script>
export default {
    name: 'productGallery',
    data () {
        return  {
            firstgallery: {
                similarImages: [
                    'https://img.beroozresaan.com/unsafe/fit-in/720x720/filters:format(webp):quality(100)/files/widget/item/012e426f9cc4473cac9b51026b4cc589.jpg',
                    'https://img.beroozresaan.com/unsafe/fit-in/720x720/filters:format(webp):quality(100)/files/widget/item/ba36b7bf04ec484381546b02bf0fb307.jpg',
                    'https://img.beroozresaan.com/unsafe/fit-in/720x720/filters:format(webp):quality(100)/files/widget/item/f745c4f6a04d4c78905b03b5977b08f6.jpg',
                    'https://img.beroozresaan.com/unsafe/fit-in/720x720/filters:format(webp):quality(100)/files/widget/item/6b8f4f804c3e4502a9c0a2594a3d1cd0.jpg'
                ],
                differentImage: 'https://img.beroozresaan.com/unsafe/fit-in/720x720/filters:format(webp):quality(100)/files/widget/item/e8cb41f91df643b6bb8be3053bf9df6f.jpg'  
            }
        }
        
    },
    methods: {
        getCol (index) {
            switch (index) {
                case 0,1,2,3:
                    return 6
                break
                case 4:
                    return 6
                break
            }
        },
        isEven (i) {
            return i % 2 === 0;
        }
    }
}
</script>

<style>

</style>