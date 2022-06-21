<template>
  <div>
    <h3 class="font-weight-light">Edit contact with id: {{ id }}</h3>
    <button @click="$router.back()" class="btn btn-secondary my-4">Back</button>
  </div>
</template>
<script>
export default {
  name: "ContactEditView",
  props: ["id"],
  data() {
    return {
      test: "Lucas",
    };
  },
  // beforeRouteEnter guard is ran before view creation, then, no instance, no data nor methods from the SFC can be
  // ran because it's not created.
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    // console.log("beforeRouteEnter", to.path, from.path, this.test); //this.test will break the application,
    // because data was not created.
    /*if (to.query.authenticated === "true")
      // Into next function you can use an callback with this SFC instance as argument and then access all data from it.
      return next((vm) => {
        console.log("test:", vm.test);
      });*/
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    const confirm = window.confirm("Do you really want to exit this page?");
    next(confirm);
  },
};
</script>