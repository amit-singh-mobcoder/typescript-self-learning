// We can even use multiple utility types together. For example:

export interface IUSER {
    id: string;
    name: string;
    age: number;
    email: string;
}

export type PartialPick = Partial<Pick<IUSER, 'name' | 'email'>>;

export const user1 : PartialPick = {
    name: 'Sniper'
}

// same as: 
// interface User {
//   name?: string
//   email?: string;
// }