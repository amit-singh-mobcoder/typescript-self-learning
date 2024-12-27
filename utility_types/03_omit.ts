// You can use the Omit utility type to create a new type from an existing type, however, with some properties removed.

export interface USER {
    name: string;
    age: number;
    email: string;
}

export type UserWithoutEmail = Omit<USER, 'email'>

export const user1 : UserWithoutEmail = {
    name: 'Zam',
    age: 89
}

// We can also remove multiple properties by passing an union
export type UserWithoutAgeAndEmail = Omit<USER, 'age' | 'email'>

export const user2 : UserWithoutAgeAndEmail = {
    name: 'Alexa'
}