type User = {
    readonly _id : string;
    name : string;
    email : string;
    isActive : boolean;
    creditCardDetails? : string;
}

let myUser : User = {
    _id : "12345",
    name : "alex",
    email: "alex@gmail.com",
    isActive: false
}

myUser.name = 'carla';
/*
GIVE ERROR : Cannot assign to '_id' because it is a read-only property.

myUser._id = '2125'
*/



// another example
type cardNumber = {
    card_number : string;
}

type cardDate = {
    card_exp_date : string
}

type cardDetails = cardNumber & cardDate & {cvv : number};


let myCard : cardDetails = {
    card_number : "5554-5454-4545",
    card_exp_date : "2025/08",
    cvv : 45621
}

function printCardDetails(myCard) {
    console.log('CARD NUMBER : ', myCard.card_number);
    console.log('CARD EXP DATE : ', myCard.card_exp_date);
    console.log('CARD CVV : ', myCard.cvv);
}

printCardDetails(myCard)