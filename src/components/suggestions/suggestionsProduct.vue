<template>
  <b-col md="9" cols="6" class="pr-0">
    <carousel :perPageCustom="[[0, 1], [768, 2], [1024,4]]" :paginationEnabled="false" class="red-border-top">
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
              <b-badge pill variant="danger" class="p-2">
                {{ suggestedProduct.discount }}
              </b-badge>

              <span class="discount-value position-relative px-2">
                {{ suggestedProduct.price }}
              </span>

              <div class="font-weight-bold text-left p-2 h6">
                  تومان {{ suggestedProduct.afterdiscount }} 
              </div>
            </div>
          </div>
        </b-card>
      </slide>
    </carousel>
  </b-col>
</template>


<script>
export default {
  props: {
    suggestedProducts: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      
    }
  }

}
</script>