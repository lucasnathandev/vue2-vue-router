<template>
  <div>
    <router-view></router-view>
    <router-view name="contactDetailsRV"></router-view>
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