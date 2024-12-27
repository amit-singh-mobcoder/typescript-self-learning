// The opposite to Partial is Required utility type, which makes everything required.

export interface USER {
    name?: string;
    age?: number;
}

// you need to define both properties name and age , even in the USER interface it is marked optional
const user1 : Required<USER> = {
    name: 'James',
    age: 20
}
console.log('user1==>',user1)




// using export because
/*
partial.ts and required.ts declare a type or interface with the same name (USER), and when they are in the same folder and part of the same project, the TypeScript compiler considers them part of the same scope. As a result, it treats the USER type or interface as being declared twice, which is not allowed.
*/

// or simple we can do this at the end the of any file
export {}