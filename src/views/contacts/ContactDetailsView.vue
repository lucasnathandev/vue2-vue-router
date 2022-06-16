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
  // watch: {
  //   $route(to, from) {
  //     from;
  //     this.id = to.params.id;
  //   },
  // },
  // Para fazer o mesmo que o watcher acima nas rotas é só utilizar o hook beforeRouteUpdate
  beforeRouteUpdate(to, from, next) {
    this.id = to.params.id;
    next();
  },
  created(to, from) {
    from;
    console.log(this.$route.params);
  },
};
</script>