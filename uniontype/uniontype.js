// union types : A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.
function printId(id) {
    if (typeof id === 'string') {
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
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log("Welcome " + x.join(' and '));
    }
    else {
        console.log("welcome lone traveler ", x);
    }
}
welcomePeople(['Alex', "carla", 'simpson']);
welcomePeople('shaktimaan');
// another example
var data = ["1", "2", 3, true];
console.log(data);
