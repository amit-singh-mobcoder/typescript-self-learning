function printLength(value: number | string) {

    if(typeof value === 'string') {
        // Narrowing : Typescript now knows 'value' is a string
        console.log(`string length : ${value.length}`);
    } else {
        // Narrowing : Typescript now know 'value' is a number
        console.log(`Number value : ${value}`);
    }
}

printLength("hello");
printLength(295);

// in operator

interface User {
    name : string,
    email: string
}

interface Admin extends User {
    isAdmin : boolean;
}

function isAdminAccount(account : User | Admin) {

    if("isAdmin" in account) {
        return account.isAdmin;
    }
}