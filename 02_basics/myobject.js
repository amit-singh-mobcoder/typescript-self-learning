var myUser = {
    _id: "12345",
    name: "alex",
    email: "alex@gmail.com",
    isActive: false
};
myUser.name = 'carla';
var myCard = {
    card_number: "5554-5454-4545",
    card_exp_date: "2025/08",
    cvv: 45621
};
function printCardDetails(myCard) {
    console.log('CARD NUMBER : ', myCard.card_number);
    console.log('CARD EXP DATE : ', myCard.card_exp_date);
    console.log('CARD CVV : ', myCard.cvv);
}
printCardDetails(myCard);
