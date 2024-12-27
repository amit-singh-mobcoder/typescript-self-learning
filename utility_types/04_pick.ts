// The opposite of Omit is the Pick utility type that allows you to create a new type that contains only a subset of properties from an existing type.

export interface USER {
    id: string;
    name: string;
    age: number;
    email: string;
}

export type UserWithOnlyNameAndAge = Pick<USER, 'name' | 'age'>

export const user1 : UserWithOnlyNameAndAge = {
    name: 'Broad',
    age: 50
}

// same as: 
// interface USER {
//   name: string;
//   age: number;
// }