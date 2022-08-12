import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/product'
import mycart from './modules/mycart'
import myproduct from './modules/myproduct'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    products,
    mycart,
    myproduct
  }
})
