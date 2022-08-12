<template>
  <div>
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <ProductList />
    <hr>
    <ShoppingCart />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList/index.vue'
import ShoppingCart from '@/components/ShoppingCart/index.vue'

export default {
  components: { ProductList, ShoppingCart },
}
</script>