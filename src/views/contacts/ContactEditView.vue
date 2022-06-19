<template>
  <div>
    <h3 class="font-weight-light">Edit contact with id: {{ id }}</h3>
    <button @click="$router.back()" class="btn btn-secondary my-4">Back</button>
  </div>
</template>
<script>
export default {
  props: ["id"],
  created() {
    console.log("Parameter:", this.$route.params);
  },
};
</script>