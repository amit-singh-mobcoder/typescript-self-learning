// string
let firstName : string = 'Alex';
console.log(firstName)

// number
let val : number = 10;
console.log(val);

// boolean
let isLoading : boolean = true;
if(isLoading) {
    console.log("we are loading data....");
}

// Array
let heroes : string[] = ['ironman', 'superman', 'batman', 'spiderman'];
let nums : number[] = [1, 2, 3, 4, 5];

// Functions
function isPrime(val : number) : boolean {
    for(let i=2; i<val; i++) {
        if(val%i === 0) {
            return true;
        }
    }
    return false;
}
console.log(isPrime(5));

// Arrow Function
let printArray = (nums : number[]) : void => {
    for(let i=0; i<nums.length; i++) {
        console.log(nums[i]);
    }
}

// Object type
function printCoordinates(obj : {x : number, y: number}) : void {
    console.log("The coordinate x value is : ", obj.x);
    console.log("The coordinate y value is : ", obj.y);
}

// Optional properties
function printName(user : {firstName: string, lastName? : string}) : void {
    console.log(`your name is : ${user.firstName} ${user.lastName}`);
}

printName({firstName: "alex"});
printName({firstName: "carla", lastName: "jonas"});


// union types : A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.

function printId(id : number | string) {
    if(typeof id === 'string') {
        // In this branch, id is of type 'string'
        console.log(id.toLocaleUpperCase());
    }
    else {
        // Here, id is of type 'number'  
        console.log(id);
    }
}
printId(25);
printId("hmcihs");


// another example
function welcomePeople(x : string[] | string) {
    
    if(Array.isArray(x)) {
        console.log("Welcome " + x.join(' and '));
    } else {
        console.log("welcome lone traveler ", x);
    }
}

welcomePeople(['Alex',"carla",'simpson'])
welcomePeople('shaktimaan')

export {}