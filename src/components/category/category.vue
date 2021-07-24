<template>
    <b-container>
        <b-row>
            <carousel :perPageCustom="[[0, 1], [768, 2], [1024,6]]" :paginationEnabled="false">
                <slide v-for="category in categories" :key="category">
                    <b-img rounded class="w-100" :src="category"/>
                </slide>
            </carousel>
        </b-row>
    </b-container>
  
</template>

<script>
export default {
    name: 'Category',
    props: {
        categories: { type: Array, default: () => [] }
    }
}
</script>
