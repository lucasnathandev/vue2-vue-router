<template>
  <h3 class="font-weight-light">Contact details {{ id }}</h3>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  watch: {
    $route(to, from) {
      from;
      this.id = to.params.id;
    },
  },
};
</script>