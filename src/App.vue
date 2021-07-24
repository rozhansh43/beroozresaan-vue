<template>
  <div id="app">
    <homepage />
    <router-view />
  </div>
</template>

<script>
import homepage from "@/components/homepage.vue";

export default {
  components: {
    homepage,
  },
};
</script>


