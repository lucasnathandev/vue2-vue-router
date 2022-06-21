<template>
  <contacts-list :searchProp="found" />
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