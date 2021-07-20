<template>
  <div class="home">
    <homepage />
  </div>
</template>

<script>
// @ is an alias to /src
import homepage from "@/components/homepage.vue";

export default {
  name: "Home",
  components: {
    homepage,
  },
};
</script>
