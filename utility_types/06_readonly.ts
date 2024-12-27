// Readonly utility types allow you to create a new type from an existing type set as readonly, which means we cannot modify any property after the initialization.

export interface User {
    name: string;
    age: number;
}

export type ReadonlyUser = Readonly<User>;

export const user1 : ReadonlyUser = {
    name: 'Zack',
    age: 20
}

// Cannot assign to 'name' because it is a read-only property.
// user1.name = 'Zack1'