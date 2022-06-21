import Vue from "vue";

export default new Vue({
  data: {
    authenticated: false,
  },
  created() {
    this.$on("authenticate", (auth) => {
      this.authenticated = auth;
    });
  },
});
