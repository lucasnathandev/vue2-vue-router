<template>
  <div>
    <router-view></router-view>
    <contacts-list />
  </div>
</template>

<script>
import ContactsList from "../../components/contacts/ContactsList.vue";
export default {
  components: {
    ContactsList,
  },
};
</script>