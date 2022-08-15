<template>
  <div id="app">
    <!-- <Blog />

    <Todo /> -->

    <!-- <input v-focus>
    <p>{{msg | capitalize}}</p>
    <div v-demo:prop.a.b="msg"
         style="width:500px"></div> -->

    <!-- 
    <shop></shop> -->
    <!-- <my-shop></my-shop> -->
    <router-link to="/shop">Go to Shop</router-link>
    <router-link to="/myshop">Go to MyShop</router-link>
    <router-link :to="{name: 'user', params:{ username: 'zhangsan'}}">Go to User</router-link>
    <button @click="$router.push({name: 'user', params:{ username: 'lisi'}})">Go to User</button>
    <button @click="$router.push({path: `/user/wangwu`, })">Go to User</button>
    <router-view></router-view>
  </div>
</template>


<script>
import Todo from '@/components/Todo/index.vue'
import Blog from '@/components/Blog/index.vue'
import Shop from '@/components/Shop/index.vue'
import MyShop from '@/components/MyShop/index.vue'
// import User from '@components/User/index.vue'
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
    // console.log(this.$route.params)
  },
}
</script>
<style lang="less">
</style>