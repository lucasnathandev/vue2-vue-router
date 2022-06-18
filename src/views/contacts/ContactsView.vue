<template>
  <div>
    <router-view></router-view>
    <router-view name="contactDetailsRV"></router-view>
    <contacts-list :searchProp="found" />
  </div>
</template>

<script>
import ContactsList from "../../components/contacts/ContactsList.vue";
export default {
  name: "ContactsView",
  components: {
    ContactsList,
  },
  props: ["found"],
};
</script>