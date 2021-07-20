<template>
  <carousel :perPageCustom="[[0, 1], [768, 2], [1024,5]]" :paginationEnabled="false">
    <slide>
        Slide 1 Content
    </slide>

    <slide>
        Slide 2 Content
    </slide>

    <slide>
        Slide 2 Content
    </slide>

    <slide>
        <b-img src="https://img.beroozresaan.com/unsafe/270x270/filters:format(webp)/files/widget/item/29d783e415f54c2cac123aed5828e57f.png">
        </b-img>
    </slide>

    <slide>
        <b-img src="https://img.beroozresaan.com/unsafe/270x270/filters:format(webp)/files/widget/item/1b97d97d73e240b282bef4bd724e9920.png">
        </b-img>
    </slide>
</carousel>
</template>

<script>
export default {

}
</script>

<style>

</style>