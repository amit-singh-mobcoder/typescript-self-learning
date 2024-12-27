// You can also create a Mutable type helper that allows you to convert all readonly types to mutable type.

export interface User {
    readonly name: string;
    readonly age: number;
}

// The syntax for Mutable is as follows:
export type Mutable<T> = {
    -readonly [P in keyof T] : T[P]
}

export type MutableUser = Mutable<User>;

export const user1 : MutableUser = {
    name: 'Zack',
    age: 20
}

// now we can modifies
user1.age = 21;