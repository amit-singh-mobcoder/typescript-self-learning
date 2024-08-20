//Let's say you want to create a function that returns the value you pass to it. Without generics, you would have to specify the type:

function echoString(value: string) : string {
    return value;
}

function echoNumber(value: number) : number {
    return value;
}

// With generics, you can create a single function that works with any type:
function echo<Type>(value: Type) : Type {
    return value;
}

const result1 = echo<string>("Hello Generics");  // result1 is of type string
const result2 = echo<number>(295);  // result2 is of type number

// TypeScript automatically infers the type based on the argument you pass:

const result3 = echo("Hello Generics");  // Typescript infers result3 as string
const result4 = echo(295)  // Typescript infers result4 as number


console.log(typeof result1); // string
console.log(typeof result2); // number
console.log(typeof result3); // string
console.log(typeof result4); // number



















export {}