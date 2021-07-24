<template>
  <div>
    <b-container>
      <div class="d-flex justify-content-between align-items-center pt-3">
        <a href="#">
          <h4 class="text-right">
            {{ titles }}
          </h4>   
        </a>

        <a href="#" class="text-left">
          <span>
            مشاهده همه />
          </span>  
        </a>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      titles: ['hh']
    }
  }
}
</script>