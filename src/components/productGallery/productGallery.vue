<template>
  <b-container class="product-gallery">
        <b-row>
            <b-col md="4" cols="6">
                <div>
                    <b-img rounded class="rounded img-fluid mb-3 w-100" :src="items.first" alt="image"/>
                </div>

                <div>
                    <b-img rounded class="rounded w-100 img-fluid w-100" :src="items.second" alt="image"/>
                </div>
            </b-col>

            <b-col md="4" cols="6">
                <div>
                    <b-img rounded class="rounded img-fluid mb-3 w-100" :src="items.third" alt="image"/>
                </div>

                <div>
                    <b-img rounded class="rounded img-fluid w-100" :src="items.forth" alt="image"/>
                </div>
            </b-col>

            <b-col md="4" class="d-none d-md-block">
                <b-img rounded class="rounded img-fluid w-100" :src="items.fifth" alt="image"/>
            </b-col>
       </b-row>
  </b-container>
</template>

<script>
export default {
    name: 'productGallery',
    props: {
        items: { type: Object }
    }
}
</script>

<style>

</style>