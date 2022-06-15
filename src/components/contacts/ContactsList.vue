<template>
  <div class="container">
    <h3 class="font-weight light">Contacts</h3>
    <ul class="list-group" v-if="contacts.length">
      <contacts-lista-item
        class="list-group-item"
        v-for="contact in contacts"
        :key="contact.id"
        :contactProp="contact"
      />
    </ul>
    <p v-else>No contacts found</p>
    <button class="btn btn-secondary my-4" @click="back">Back</button>
  </div>
</template>

<script>
import ContactsListaItem from "./ContactsListItem.vue";

export default {
  components: {
    ContactsListaItem,
  },
  data() {
    return {
      contacts: [
        { id: 1, name: "Isaac Newton", email: "newton@email.com" },
        { id: 2, name: "Jackie Chan", email: "jackie@email.com" },
        { id: 3, name: "Lucas Nathan", email: "lucas@email.com" },
      ],
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>