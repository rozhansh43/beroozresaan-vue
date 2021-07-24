<template>
  <b-link  :to="`product/${product.id}`">
    <b-card
      :img-src="product.src"
      :img-alt="product.name"
      img-top
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
            {{ product.afterdiscount }} تومان
          </div>
        </div>
      </div>
    </b-card>
  </b-link>
</template>

<script>
export default {
  name: 'carousel',
  props: {
    product: { type: Object, required }
  }
} 
</script>
