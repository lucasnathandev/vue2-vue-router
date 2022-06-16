<template>
  <div id="app">
    <div class="jumbotron">
      <h1 class="display-4">Vue Router</h1>
      <p class="lead">Adding routes to the SPA in Vue.</p>
    </div>
    <div class="container">
      <router-link to="/" class="btn btn-info mb-4 mr-2" exact
        >Home</router-link
      >
      <router-link to="/about" class="btn btn-info mb-4 mr-2"
        >About</router-link
      >
      <router-link to="/contacts" class="btn btn-info mb-4 mr-2"
        >Contacts</router-link
      >
      <router-view />
    </div>

    <!-- This tag is where the components from each router-link will be rendered-->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
