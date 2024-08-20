
// tuple

let response : [number, string, boolean]
response = [200, "User created successfully", true];

// another example
let rgb : [number, number, number] = [255, 255, 125]


// enum

const enum Role {
    USER = 'user',
    ADMIN = 'admin',
    TEACHER = 'teacher'
}

const alex = Role.USER;
const carla = Role.ADMIN;
const james = Role.TEACHER;

console.log(alex) 
console.log(carla) 
console.log(james) 


export {}
