"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printBook(book) {
    console.log("The ".concat(book.title, " is written by ").concat(book.author, " and price is $").concat(book.price));
}
printBook({ title: "Avatar", author: "james cameron", price: 250 });
