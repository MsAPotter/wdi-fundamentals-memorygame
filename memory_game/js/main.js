console.log("Up and running!");

var cards = ["queen", "queen","king","king"];

var cardsInPlay = [];

//create a variable to represent the first card that the user flipped
var cardOne = cards[0];
//add this first card to the cardsInPlay array.
cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

//create a variable to represent the second card that the user flipped
var cardTwo = cards[2];
//add this second card to the cardsInPlay array
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo);

console.log(cardsInPlay);

//checks if 2 cards are flipped AND if they match or not
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	}
}