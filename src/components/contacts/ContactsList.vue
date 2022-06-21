<template>
  <div class="container">
    <h3 id="contacts" class="font-weight light">Contacts</h3>
    <div class="form-group">
      <input
        type="search"
        name=""
        class="form-control"
        placeholder="Search Contacts"
        @keyup.enter.exact="search"
        :value="searchProp"
      />
    </div>
    <hr />
    <ul class="list-group" v-if="filteredContacts.length">
      <contacts-list-item
        class="list-group-item"
        v-for="contact in filteredContacts"
        :key="contact.id"
        :contactProp="contact"
      />
    </ul>
    <p v-else>No contacts found</p>
    <button class="btn btn-secondary my-4" @click="back">Back</button>
  </div>
</template>

<script>
import ContactsListItem from "./ContactsListItem.vue";
import EventBus from "../../event-bus";

export default {
  name: "ContactsList",
  components: {
    ContactsListItem,
  },
  props: ["searchProp"],
  data() {
    return {
      contacts: [],
    };
  },
  computed: {
    filteredContacts() {
      const search = this.searchProp;
      return search
        ? this.contacts.filter((contact) =>
            contact.name.toLowerCase().includes(search.toLowerCase())
          )
        : this.contacts;
    },
  },
  created() {
    this.contacts = EventBus.contacts;
  },
  methods: {
    search({ target }) {
      this.$router.push({
        path: "/contacts",
        query: { search: target.value },
      });
    },
    back() {
      this.$router.back();
    },
  },
};
</script>