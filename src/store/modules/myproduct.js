import shop from '@/api/myshop'

const state = () => ({
    productList: []
})

const getters = {}

const mutations = {
    initProducts(state, products) {
        state.productList = products
    },
    decrementProductsNum(state, { id }) {
        const product = state.productList.find(item => item.id === id)
        product.num--
    },
    incrementProductsNum(state, { id }) {
        const product = state.productList.find(item => item.id === id)
        product.num++
    }
}

const actions = {
    getAllProducts({ commit }) {
        shop.getAllProducts((products) => { commit('initProducts', products) })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}