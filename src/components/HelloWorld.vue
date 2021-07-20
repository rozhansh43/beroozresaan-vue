<template>
  <div>
    <siteheader/>
    <font-awesome-icon icon="user-secret" />
  </div>
</template>

<script>
import siteheader from '@/components/header/siteheader.vue'
export default {
  name: "home",
  components : {
    siteheader
  },
  props: {
    msg: String,
  },
};
</script>

