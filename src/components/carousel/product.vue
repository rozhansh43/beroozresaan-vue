<template>
  <b-card
    :img-src="product.src"
    img-alt="product.name"
    img-top
    tag="article"
    style="max-width: 20rem;"
  >
    <b-card-text class="text-right">
      {{ product.name }} 
    </b-card-text>

    <div class="mb-2 text-left px-3">
      <div class="text-muted">
        <span class="discount-value position-relative px-2">
          {{ product.price }}
        </span>

        <b-badge pill variant="danger" class="p-2">
          {{ product.discount }}
        </b-badge>

        
        <div class="font-weight-bold text-left px-3">
          {{ product.afterdiscount }}
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'carousel',
  props: {
    product: {
      type: Array,
      default: () => []
    }
  }
} 
</script>

<style>

</style>