const nums : Array<number> = [1, 2, 3, 4, 5];
const heroes : string[] = ["superman", "batman", "spiderman"];

function getFirstElement<T>(arr : T[]) : T {
    return arr[0];
}

function getSecondElement<T>(arr : Array<T>) : T {
    return arr[1];
}

const firstNumber = getFirstElement(nums);
const firstString = getFirstElement(heroes);

console.log(firstNumber); // 1
console.log(firstString); // superman


// Arrow function with generics
const numbers : Array<number> = [1,2,3,4,5];

// syntax
const reverseArray = <T>(arr : T[]) : T[] => {
    return arr.reverse();
}

// another way
const reverseArray2 = <T>(arr : Array<T>) : Array<T> => {
    return arr.reverse();
}

// Combining Arrays and Arrow Functions with Generics:

const filterArray = <T>(arr: T[], condition : (item : T) => boolean) : T[] => {
    return arr.filter(condition);
}

const newArr = filterArray(numbers, nums => nums % 2 === 0); // filter even no's from array