<template>
    <b-container>
        <b-row>
            <div>
                <carousel :perPageCustom="[[0, 2], [768, 2], [1024,6]]" :paginationEnabled="false" class="category">
                    <slide v-for="category in categories" :key="category.index">
                        <a href="#">
                            <b-img :src="category.src" fluid/>
                        </a>
                    </slide>
                </carousel>
            </div>
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
