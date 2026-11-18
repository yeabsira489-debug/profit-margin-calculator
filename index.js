"use strict";
const products = [
    { name: "oil", price: 12, cost: 230, quantity: 4 },
    { name: "oil", price: 1000, cost: 700, quantity: 20 },
    { name: "Rice", price: 200, cost: 150, quantity: 10 },
    { name: "Soap", price: 67, cost: 50, quantity: 80 },
];
const n = products.length;
function print(products) {
    for (let i = 0; i < n; i++) {
        console.log(products[i].name, products[i].price, products[i].cost, products[i].quantity);
    }
}
print(products);
