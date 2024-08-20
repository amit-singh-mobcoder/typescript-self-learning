// A type 'alias' is exactly that -a name for any file.

type ID = number | string;

function printID(ID) {

    if(typeof ID === 'string') {
        // In this branch id is string
        console.log(ID.toUpperCase());
    } else {
        // Here ID is number
        console.log(ID)
    }
}

printID(25);
printID('ghfgh');

// another example
type Point = {
    x : number;
    y : number;
}

function printCoordinates(Point) {
    console.log("The coordinate x is : ", Point.x);
    console.log("The coordinate y is : ", Point.y);
}

printCoordinates({x : 25, y : 85});


// another example
type Book = {
    title : string;
    author : string;
    price : number;
}

function createBook(book : Book ) {
    console.log("The Book title is : ", book.title);
    console.log("The Book written by : ", book.author);
    console.log("The Book price is : $"+book.price);
}

createBook({title: "Avatar", author : "James Cameron", price : 324});



export {}