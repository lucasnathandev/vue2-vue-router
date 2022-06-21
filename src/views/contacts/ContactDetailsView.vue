<template>
  <div v-if="contact">
    <h3 class="font-weight-light">Contact name: {{ contact.name }}</h3>
    <p>Contact e-mail: {{ contact.email }}</p>
    <button class="mr-2 btn btn-secondary" @click="$router.back()">Back</button>
    <router-link :to="`/contacts/${id}/edit`" class="btn btn-primary"
      >Edit</router-link
    >
  </div>
</template>
<script>
import EventBus from "../../event-bus";

export default {
  name: "ContactDetailsView",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      contact: undefined,
    };
  },
  // created() {
  //   this.contact = EventBus.searchContact(this.id);
  // },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // vm.contact = EventBus.searchContact(vm.id);
      vm.contact = EventBus.searchContact(+to.params.id);
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.contact = EventBus.searchContact(+to.params.id);
    next();
  },
};
</script>