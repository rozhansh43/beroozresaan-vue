<template>
  <div class="my-3 suggested-carousel">
    <b-container>
      <b-row class="carousel">
        <b-col md="3" cols="6" class="bg-danger d-flex justify-content-center align-items-center  ">
          <div>
            <h3 class="text-center text-white mb-4">
             پیشنهاد ویژه 
            </h3>

            <b-img rounded src="https://img.beroozresaan.com/unsafe/200x200/filters:format(webp)/files/widget/promotion/dfd79b386db744159d98fcf2e7725aed.jpg" class="suggested-img">
            </b-img>

            <div class="d-flex justify-content-center align-items-center pt-5">
              <b-button variant="outline-light">
              مشاهده همه
              </b-button>
            </div>

          </div>
        </b-col>

        <suggestionsproduct :items="items"/>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import suggestionsproduct from '@/components/suggestions/suggestionsProduct.vue'

export default {
  name: 'suggestionscarousel',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  components: {
    suggestionsproduct
  }
}
</script>