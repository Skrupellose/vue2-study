<template>
  <div>
    <my-product-list></my-product-list>
    <my-cart></my-cart>
  </div>
</template>

<script>
import MyCart from '@/components/MyCart/index.vue'
import MyProductList from '@/components/MyProductList/index.vue'
export default {
  components: {
    MyCart,
    MyProductList,
  },
}
</script>

<style lang="less" scoped>
</style>