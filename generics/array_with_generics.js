var nums = [1, 2, 3, 4, 5];
var heroes = ["superman", "batman", "spiderman"];
function getFirstElement(arr) {
    return arr[0];
}
function getSecondElement(arr) {
    return arr[1];
}
var firstNumber = getFirstElement(nums);
var firstString = getFirstElement(heroes);
console.log(firstNumber); // 1
console.log(firstString); // superman
// Arrow function with generics
var numbers = [1, 2, 3, 4, 5];
// syntax
var reverseArray = function (arr) {
    return arr.reverse();
};
// another way
var reverseArray2 = function (arr) {
    return arr.reverse();
};
// Combining Arrays and Arrow Functions with Generics:
var filterArray = function (arr, condition) {
    return arr.filter(condition);
};
var newArr = filterArray(numbers, function (nums) { return nums % 2 === 0; }); // filter even no's from array
