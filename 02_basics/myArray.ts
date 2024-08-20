let heroes : string[] = []

heroes.push('spiderman')

// both ways are correct
let nums : Array<number> = [1, 2, 3, 4, 5]
let nums2 : number[] = [1, 2, 3, 4, 5]

// another example
type User = {
    name : string;
    age : number;
}

let allUsers : User[] = [];

allUsers.push({name : 'alex', age : 25});
allUsers.push({name : 'carla', age : 16});

console.log(allUsers);


export {}

