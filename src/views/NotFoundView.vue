<template>
  <div>
    <div class="alert alert-danger">
      <h3 class="font-weight-light">Error 404!</h3>
      <p class="text-center">Page not found.</p>
    </div>
    <button class="btn btn-secondary my-4" @click="$router.back()">Back</button>
  </div>
</template>