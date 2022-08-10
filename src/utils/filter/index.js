import { capitalize } from "./filter";

const filters = {
    capitalize
}

export default {
    install(Vue) {
        Object.keys(filters).forEach((k) => {
            Vue.filter(k, filters[k])
        })
    }
}