import Vue from "vue";

export default new Vue({
  data: {
    authenticated: false,
    contacts: [
      { id: 1, name: "Isaac Newton", email: "newton@email.com" },
      { id: 2, name: "Jackie Chan", email: "jackie@email.com" },
      { id: 3, name: "Lucas Nathan", email: "lucas@email.com" },
    ],
  },
  created() {
    this.$on("authenticate", (auth) => {
      this.authenticated = auth;
    });
  },
  methods: {
    searchContact(id) {
      return Object.assign(
        {},
        this.contacts.find((contact) => contact.id === id)
      );
    },
    editContact(contact) {
      const index = this.contacts.findIndex((c) => c.id === contact.id);
      this.contacts.splice(index, 1, contact);
    },
  },
});
