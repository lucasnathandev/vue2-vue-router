<template>
  <div>
    <h3 class="font-weight-light">
      Edit contact with id: {{ $route.params.id }}
    </h3>
    <button @click="$router.back()" class="btn btn-secondary my-4">Back</button>
  </div>
</template>
