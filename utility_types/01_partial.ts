// makes everything optional or partial.

export type USER = {
    name: string;
    age: number;
}
export type PartialUser = Partial<USER>

const user1: USER = {
    name: 'Alex',
    age: 18
}
console.log('user1==>',user1);



// partial make all properties optional
const user2: Partial<USER>  = {
    name: 'Carla'
}
console.log("user2==>",user2)

const user3: PartialUser = {
    age: 18
}
console.log('user3==>',user3)

// same as
interface IUSER {
    name?: string;
    age?: number;
}

const user4: IUSER = {
    name: 'Zack'
}
console.log('user4==>',user4)