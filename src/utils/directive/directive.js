export const focus = (Vue) => {
    Vue.directive("focus", {
        inserted: function (el) {
            el.focus()
        }
    })
}