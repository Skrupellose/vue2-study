<template>
  <div>
    <h3 v-show="!filterProducts.length">去挑选你喜欢的水果</h3>
    <h1>cart</h1>
    <li v-for="product in filterProducts"
        :key="product.id">
      {{product.name}} - {{product.price}} ---- x {{product.num}}
      <button :disabled="!product.num"
              @click="removeProduct(product)">remove</button>
    </li>
    <p>总计：{{price}}</p>
    <button :disabled="!filterProducts.length"
            @click="checkout(filterProducts)">结账</button>
    <p>{{checkoutStatus}}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  name: 'MyCart',
  computed: {
    ...mapState('mycart', {
      checkoutStatus: (state) => state.checkoutStatus,
    }),
    ...mapGetters('mycart', {
      price: 'cartPrice',
      filterProducts: 'filterProducts',
    }),
  },
  methods: {
    ...mapActions('mycart', {
      removeProduct: 'removeProductFromCart',
      checkout: 'checkout',
    }),
  },
}
</script>

<style lang="less" scoped>
</style>