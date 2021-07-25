<template>
  <b-link  :to="`${item.id}`">
    <b-card
      :img-src="item.src"
      :img-alt="item.name"
      img-top
    >
      <b-card-text class="text-right">
        {{ item.name }} 
      </b-card-text>

      <div class="mb-2 text-left px-3">
        <div class="text-muted">
          <span class="discount-value position-relative px-2">
            {{ item.price }}
          </span>

          <b-badge pill variant="danger" class="p-2">
            {{ item.discount }}
          </b-badge>
          
          <div class="font-weight-bold text-left px-0 px-md-3">
            <span class="float-left pr-1">
              تومان
            </span>

            <span>
             {{ item.afterdiscount}}  
            </span>
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
    item: { type: Object }
  }
} 
</script>
