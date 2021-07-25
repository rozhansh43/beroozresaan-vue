<template>
    <b-container>
        <b-row>
            <div>
                <carousel :perPageCustom="[[0, 2], [768, 2], [1024,6]]" :paginationEnabled="false" class="category">
                    <slide v-for="item in items" :key="item.index">
                        <a href="#">
                            <b-img :src="item.src" fluid/>
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
        items: { type: Array, default: () => [] }
    }
}
</script>
