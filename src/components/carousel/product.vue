<template>
  <b-card
    :img-src="firstcarousel.src"
    img-alt="firstcarousel.name"
    img-top
    tag="article"
    style="max-width: 20rem;"
  >
    <b-card-text class="text-right">
      {{ firstcarousel.name }}
    </b-card-text>

    <div class="mb-2 text-left px-3">
      <div class="text-muted">
        <span class="discount-value position-relative px-2">
          {{ firstcarousel.price }}
        </span>

        <b-badge pill variant="danger" class="p-2">
          {{ firstcarousel.discount }}
        </b-badge>

        
        <div class="font-weight-bold text-left px-3">
          {{ firstcarousel.afterdiscount }}
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  props: ['firstcarousel']
}
</script>

<style>

</style>