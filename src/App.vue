<template>
  <div id="app">
    <!-- <Blog />

    <Todo /> -->

    <!-- <input v-focus>
    <p>{{msg | capitalize}}</p>
    <div v-demo:prop.a.b="msg"
         style="width:500px"></div> -->

    <!-- <Vuex /> -->
    <!-- 
    <shop></shop> -->
    <my-shop></my-shop>
  </div>
</template>


<script>
import Todo from '@/components/Todo/index.vue'
import Blog from '@/components/Blog/index.vue'
import Shop from '@/components/Shop/index.vue'
import MyShop from '@/components/MyShop/index.vue'
export default {
  data() {
    return {
      msg: 'i am div',
    }
  },
  name: 'App',
  components: {
    Todo,
    Blog,
    Shop,
    MyShop,
  },
  mounted() {
    // this.$toast('center 1', 'center')
    // this.$toast.center('123')
  },
}
</script>
<style lang="less">
</style>