<template>
  <div id="app">
    <Blog />
    <Todo />
    <input v-focus>
  </div>
</template>


<script>
import Todo from '@/components/Todo/index.vue'
import Blog from '@/components/Blog/index.vue'
export default {
  name: 'App',
  components: {
    Todo,
    Blog,
  },
}
</script>
<style lang="less">
</style>