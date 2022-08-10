import { focus, demo } from "@/utils/directive/directive"

const directives = {
    focus,
    demo
}

export default {
    install(Vue) {
        Object.keys(directives).forEach((k) => {
            Vue.directive(k, directives[k])
        })
    }
}