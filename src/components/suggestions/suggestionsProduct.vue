<template>
  <b-col md="9" cols="6" class="p-0">
    <carousel :perPageCustom="[[0, 1], [768, 2], [1024,4]]" :paginationEnabled="false" class="red-border-top">
      <slide v-for="item in items" :key="item.index">
        <b-card
          :img-src="item.src"
          img-alt="item.name"
          img-top
        >
          <b-card-text class="text-right">
            {{ item.name }}
          </b-card-text>

          <div class="mb-2 text-left">
            <div class="text-muted">
              <b-badge pill variant="danger" class="p-2">
                {{ item.discount }}
              </b-badge>

              <span class="discount-value position-relative px-2">
                {{ item.price }}
              </span>

              <div class="font-weight-bold text-left p-2 h6">
                <span>
                  {{ item.afterdiscount }} 
                </span>

                <span class="float-left mr-2">
                  تومان 
                </span>
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
  name: 'suggestionproducts',
  props: {
    items: {
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