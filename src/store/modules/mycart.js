import shop from "@/api/myshop"

const state = () => ({
    checkoutStatus: null,
    cartItems: []
})


const getters = {
    cartProducts(state, getters, rootState) {
        return state.cartItems.map(({ id, num }) => {
            const product = rootState.myproduct.productList.find(item => item.id === id)
            return {
                id: product.id,
                name: product.name,
                price: product.price,
                num
            }
        })
    },
    cartPrice(state, getters) {
        return getters.cartProducts.reduce((total, product) => {
            total += product.price * product.num
            return total
        }, 0)
    },

    filterProducts(state, getters) {
        return getters.cartProducts.filter((item) => item.num > 0)
    }
}

const mutations = {
    setCheckoutStatus(state, status) {
        state.checkoutStatus = status
    },

    setCartItem(state, { items }) {
        state.cartItems = items
    },

    setCheckoutStatus(state, status) {
        state.checkoutStatus = status
    },
    incrementItemNum(state, { id }) {
        const cartItem = state.cartItems.find(item => item.id === id)
        cartItem.num++
    },

    decrementItemNum(state, { id }) {
        const cartItem = state.cartItems.find(item => item.id === id)
        cartItem.num--
    },
    pushProductToCart(state, { id }) {
        state.cartItems.push({
            id,
            num: 1
        })
    }
}



const actions = {
    addProductToCart({ commit, state }, product) {
        commit('setCheckoutStatus', null)
        if (product.num > 0) {
            const cartItem = state.cartItems.find((item) => product.id === item.id)
            if (cartItem) {
                commit('incrementItemNum', cartItem)
            } else {
                commit('pushProductToCart', { id: product.id })
            }
            commit('myproduct/decrementProductsNum', { id: product.id }, { root: true })
        }
    },
    removeProductFromCart({ commit, state }, product) {
        if (product.num > 0) {
            const cartItem = state.cartItems.find((item) => product.id === item.id)
            if (cartItem.num > 0) {
                commit('decrementItemNum', cartItem)
            }
            commit('myproduct/incrementProductsNum', { id: product.id }, { root: true })
        }
    },

    checkout({ commit, state }, products) {
        const savedCartItems = [...state.cartItems]
        commit('setCartItem', { items: [] })
        commit('setCheckoutStatus', null)
        shop.buyProducts(
            products,
            () => commit('setCheckoutStatus', 'successful'),
            () => {
                commit('setCheckoutStatus', 'fail')
                commit('setCartItem', { items: savedCartItems })
            }
        )
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}