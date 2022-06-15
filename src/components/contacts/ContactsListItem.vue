<template>
  <li>
    <span>{{ contactProp.name }}</span>
    <router-link
      :to="`/contacts/${contactProp.id}`"
      class="btn btn-info btn-sm float-right"
      >Details</router-link
    >
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
};
</script>