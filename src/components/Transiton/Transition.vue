<template>
  <transition name="bounce">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'Transiton',
}
</script>

<style lang="less" scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>