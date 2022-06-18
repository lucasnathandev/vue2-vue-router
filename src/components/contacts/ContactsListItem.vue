<template>
  <li>
    <span>{{ contactProp.name }}</span>
    <router-link
      :to="{ path: `/contacts/${contactProp.id}` }"
      class="btn btn-info btn-sm float-right"
      >Details</router-link
    >
    <!-- <button @click="showDetails" class="btn btn-info btn-sm float-right">
      Details
    </button> -->
  </li>
</template>

<script>
export default {
  props: {
    contactProp: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showDetails() {
      // this.$router.push(`/contacts/${this.contactProp.id}`);
      // this.$router.push({ path: `/contacts/${this.contactProp.id}` });
      // this.$router.push({
      //   path: `/contacts`,
      //   params: { id: this.contactProp.id },
      // });
      this.$router.replace({
        name: "contactDetails",
        params: { id: this.contactProp.id },
      });
    },
  },
};
</script>