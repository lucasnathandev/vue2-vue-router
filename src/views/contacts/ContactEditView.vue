<template>
  <div v-if="contact">
    <h3 class="font-weight-light">Contact name: {{ contact.name }}</h3>
    <form @submit.prevent="save">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          class="form-control"
          placeholder="Insert new name."
          v-model="contact.name"
        />
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input
          type="e-mail"
          id="email"
          class="form-control"
          placeholder="Insert new e-mail."
          v-model="contact.email"
        />
      </div>
      <button
        type="button"
        class="my-4 mr-2 btn btn-secondary"
        @click="$router.back()"
      >
        Back
      </button>
      <button type="submit" class="btn btn-success">Save</button>
    </form>
  </div>
</template>
<script>
import EventBus from "../../event-bus";

export default {
  name: "ContactEditView",
  props: ["id"],
  data() {
    return {
      contact: undefined,
      isCancelling: true,
    };
  },
  // beforeRouteEnter guard is ran before view creation, then, no instance, no data nor methods from the SFC can be
  // ran because it's not created.
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.contact = EventBus.searchContact(+to.params.id);
    });
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    this.isCancelling
      ? next(window.confirm("Do you really want to exit this page?"))
      : next();
  },
  methods: {
    save() {
      EventBus.editContact(this.contact);
      this.isCancelling = false;
      this.$router.push("/contacts");
    },
  },
};
</script>