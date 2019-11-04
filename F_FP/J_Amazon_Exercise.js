const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}
let amazonHistory = [];
const compose = (f, g) => (...args) => f(g(...args));

function purchaseItem(...fns) {
    return fns.reduce(compose);
} 

function addItemToCart(user, item){
    amazonHistory.push(user);
    const updateCart = user.cart.concat([item]);
    return Object.assign({}, user, { cart: updateCart });
}

function applyTaxToItems(user) {
    amazonHistory.push(user);
    const { cart } = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item =>{
        return {
            name: item.name,
            price: item.price*taxRate
        }
    })
    return Object.assign({}, user, { cart:updatedCart });
}

function buyItem(user) {
    amazonHistory.push(user);
    return Object.assign({}, user, { purchases:user.cart});
}

function emptyCart(user) {
    amazonHistory.push(user);
    return Object.assign({}, user, { cart:[]});
}

function getUserState() {
    console.log(amazonHistory);
}

console.log(
    purchaseItem(
        emptyCart,
        buyItem,
        applyTaxToItems,
        addItemToCart
    )(user, {name: 'laptop', price: 344})
);
getUserState();