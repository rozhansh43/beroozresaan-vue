<template>
  <div>
    <b-container>
      <div class="d-flex justify-content-between align-items-center pt-3">
        <a href="#">
          <h4 class="text-right">
            {{ title }}
          </h4>   
        </a>

        <a href="#" class="text-left">
          <span>
            مشاهده همه 
            <i class="fas fa-chevron-left">
            </i>
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