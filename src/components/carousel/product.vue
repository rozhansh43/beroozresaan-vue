<template>
  <b-card
    :img-src="suggestedProduct.src"
    img-alt="suggestedProduct.name"
    img-top
    tag="article"
    style="max-width: 20rem;"
  >
    <b-card-text class="text-right">
      {{ suggestedProduct.name }} {{ name }} prod
    </b-card-text>
    
    {{ name }}
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
</template>

<script>
export default {
  props: ['name']
}
</script>

<style>

</style>