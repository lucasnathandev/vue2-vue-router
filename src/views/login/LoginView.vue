<template>
  <form action="" class="form-signin" @submit.prevent="login">
    <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
    <label for="email" class="sr-only">E-mail</label>
    <input
      class="form-control"
      id="email"
      type="email"
      placeholder="E-mail"
      required
      autofocus
      v-model="user.email"
    />
    <label for="password" class="sr-only">Password</label>
    <input
      class="form-control"
      id="password"
      type="password"
      placeholder="Password"
      required
      v-model="user.password"
    />
    <button class="btn btn-lg btn-primary btn-block" type="submit">
      Enter
    </button>
    <div class="alert mt-3 alert-danger" v-if="message">{{ message }}</div>
  </form>
</template>
<script>
import EventBus from "../../event-bus";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      message: "",
    };
  },
  methods: {
    login() {
      if (
        this.user.email === "plinio@email.com" &&
        this.user.password === "1234"
      ) {
        EventBus.$emit("authenticate", true);
        const target = this.$route.query.redirect || "/contacts";
        this.$router.push(target);
        return;
      }
      this.message = "Invalid data";
      setTimeout(() => (this.message = ""), 3000);
    },
  },
};
</script>

<style scoped>
.form-signin {
  witdth: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>