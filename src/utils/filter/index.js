import { capitalize, currency } from "./filter";

const filters = {
    capitalize,
    currency
}

export default {
    install(Vue) {
        Object.keys(filters).forEach((k) => {
            Vue.filter(k, filters[k])
        })
    }
}