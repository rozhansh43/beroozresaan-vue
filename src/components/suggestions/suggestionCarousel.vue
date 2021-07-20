<template>
  <div class="my-3">
    <b-container>
      <b-row>
        <b-col md="3" class="bg-danger d-flex justify-content-center align-items-center">
          <b-img src="https://img.beroozresaan.com/unsafe/200x200/filters:format(webp)/files/widget/promotion/dfd79b386db744159d98fcf2e7725aed.jpg">
          </b-img>
        </b-col>

        <suggestionsproduct/>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import suggestionsproduct from '@/components/suggestions/suggestionsProduct.vue'

export default {
  name: 'suggestionscarousel',
  components: {
    suggestionsproduct
  }
}
</script>