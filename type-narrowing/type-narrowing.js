function printLength(value) {
    if (typeof value === 'string') {
        // Narrowing : Typescript now knows 'value' is a string
        console.log("string length : ".concat(value.length));
    }
    else {
        // Narrowing : Typescript now know 'value' is a number
        console.log("Number value : ".concat(value));
    }
}
printLength("hello");
printLength(295);
