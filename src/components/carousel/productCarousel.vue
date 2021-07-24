<template>
  <div>
    <carousel :perPageCustom="[[0, 2], [768, 2], [1024,5]]" :paginationEnabled="false" class="my-3 orange-border-top">
          <slide v-for="item in items" :key="item.id">
            <product :item="item" :name="item.name"/>
          </slide>
    </carousel>
  </div>
</template>

<script>
import product from '@/components/carousel/product'

export default {
  components: {
    product,
  },
  props: ['items']
}
</script>