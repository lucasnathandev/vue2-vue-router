<template>
  <div>
    <h3 class="font-weight-light">Contact details: {{ id }}</h3>
    <p>{{ $route.hash }}</p>
    <router-link :to="`/contacts/${id}/edit`" class="btn btn-primary"
      >Edit</router-link
    >
    <div style="height: 900px"></div>
  </div>
</template>
<script>
export default {
  name: "ContactDetailsView",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      params: this.$route.params,
    };
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");
    this.params = to.params;
    next();
  },
};
</script>