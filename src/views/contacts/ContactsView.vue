<template>
  <div>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view name="contactDetailsRV"></router-view>
  </div>
</template>


<style scoped>
.slide-enter,
.slide-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
</style>