<template>
  <div>
    <h3 class="font-weight-light">Contact details: {{ id }}</h3>
    <router-link :to="`/contacts/${id}/edit`" class="btn btn-primary"
      >Edit</router-link
    >
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
  created(to, from) {
    from;
    console.log(this.$props);
  },
};
</script>