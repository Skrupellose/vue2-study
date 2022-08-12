<template>
  <div>
    <h1>Product list</h1>
    <li v-for="product in products"
        :key="product.id">
      {{product.name}} ---- price: {{product.price }} ---- remain: {{product.num}}
      <button @click="addToCart(product)"
              :disabled="!product.num">add to cart</button>
    </li>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'MyProductList',
  computed: {
    ...mapState({
      products: (state) => state.myproduct.productList,
    }),
  },
  methods: {
    ...mapActions({
      addToCart: 'mycart/addProductToCart',
    }),
  },
  created() {
    this.$store.dispatch('myproduct/getAllProducts')
  },
}
</script>

<style lang="less" scoped>
li {
  list-style: none;
}
</style>