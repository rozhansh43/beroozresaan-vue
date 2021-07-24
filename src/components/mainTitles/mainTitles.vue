<template>
  <div>
    <b-container>
      <div class="d-flex justify-content-between align-items-center pt-3">
        <a href="#">
          <h4 class="text-right font-weight-bolder">
            {{ title }}
          </h4>   
        </a>

        <a href="#" class="text-left">
          <span class="d-flex justify-content-center align-items-center">
            مشاهده همه 
            <i class="fas fa-chevron-left mr-2"/>
          </span>  
        </a>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
    }
  }
}
</script>