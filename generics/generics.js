"use strict";
//Let's say you want to create a function that returns the value you pass to it. Without generics, you would have to specify the type:
Object.defineProperty(exports, "__esModule", { value: true });
function echoString(value) {
    return value;
}
function echoNumber(value) {
    return value;
}
// With generics, you can create a single function that works with any type:
function echo(value) {
    return value;
}
var result1 = echo("Hello Generics"); // result1 is of type string
var result2 = echo(295); // result2 is of type number
// TypeScript automatically infers the type based on the argument you pass:
var result3 = echo("Hello Generics"); // Typescript infers result3 as string
var result4 = echo(295); // Typescript infers result4 as number
console.log(typeof result1); // string
console.log(typeof result2); // string
console.log(typeof result3); // string
console.log(typeof result4); // string
