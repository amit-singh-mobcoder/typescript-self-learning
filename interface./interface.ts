type Point = {
    x : number;
    y : number;
}
/*
type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.


type Point = {
    z : number;
}
*/

interface Book {
    title : string;
    author : string;
}
// interface can be reopened to add new properties
interface Book {
    price : number;
}

function printBook(book : Book) {
    console.log(`The ${book.title} is written by ${book.author} and price is $${book.price}`);
}

printBook({title: "Avatar", author : "james cameron", price : 250});




export {}