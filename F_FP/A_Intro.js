/** Seperating data & function 
 * 
 * reusble functions by:
 *  A) Pure Function.
 *  B) Immutable.
 *  
*/

// Immutable;
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

const itemA = {
    name: 'Rme Babyface pro',
    price: 750
}

function addItemToCart(user, item) {
    user.cart.push(item.name);
    console.log(user);
}

function addTax(item) {
    item.price = item.price * 1.03; 
    console.log(item);
}

function purchaseCart(user) {
    user.purchases.push(...user.cart);
    console.log(user);
}

function emptyCart(user) {
    user.cart = [];
    console.log(user);
}



addItemToCart(user, itemA);
addTax(itemA);
purchaseCart(user);
emptyCart(user)