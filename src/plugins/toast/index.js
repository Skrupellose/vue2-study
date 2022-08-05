let Toast = {}
Toast.install = function (Vue, option) {
    let defaultOption = {
        defaultType: "bottom",
        duration: "2000"
    }
    for (let prop in option) {
        defaultOption[prop] = option[prop]
    }

    Vue.prototype.$toast = (tip, type) => {
        if (type) {
            defaultOption.defaultType = type
        }
        if (document.getElementsByClassName("vue-toast").length) {
            return
        }
        // let toastTpl = Vue.extend({
        //     template: `<div class="vue-toast toast-${type}"> + ${tip} + </div>`
        // })
        let toastTpl = Vue.extend({
            data() {
                return {
                    tip: tip
                }
            },
            render(h) {
                return h(
                    'div',
                    {
                        class: ["vue-toast", `toast-${type}`],
                        domProps: {
                            innerHTML: this.tip
                        }
                    }
                )
            }
        })
        let tpl = new toastTpl().$mount().$el
        document.body.appendChild(tpl)
        setTimeout(() => {
            document.body.removeChild(tpl)
        }, defaultOption.duration)
    }

    ['bottom', 'center', 'top'].forEach((type) => {
        Vue.prototype.$toast[type] = (tips) => {
            return Vue.prototype.$toast(tips, type)
        }
    })
}
export default Toast
