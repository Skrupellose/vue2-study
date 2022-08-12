const products = [{
    id: 1, name: 'apple', price: 9, num: 20
},
{
    id: 2, name: 'banana', price: 5, num: 18
},
{
    id: 3, name: 'peach', price: 20, num: 3
}]

export default {
    getAllProducts(cb) {
        setTimeout(() => {
            cb(products)
        }, 500);
    },
    buyProducts(products, success, fail) {
        setTimeout(() => {
            Math.random() > 0.5 ? success() : fail()
        }, 1000);
    }
}