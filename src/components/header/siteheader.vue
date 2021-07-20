<template>
  <div class="sticky-top">
    <topheader />
    <navbar/>
  </div>
</template>

<script>
import topheader from '@/components/header/topheader'
import navbar from '@/components/header/navbar'

export default {
  name: 'header',
  components: {
    topheader,
    navbar
  }
}
</script>