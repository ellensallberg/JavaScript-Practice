// Assignment 2

let price = prompt("price in $ ex. $50");
let priceNumber = price.slice(1);
let discount = (0.9);
let discoundedPrice = (priceNumber * discount);
let discoundedPrice$ = ("$" + discoundedPrice);

console.log(`Your discounted price is ${discoundedPrice$}`);