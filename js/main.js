
var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

/*This is codefrom section 7*/
var cardOne = cards[0];
var cardTwo = cards[1];

cardsInPlay.push(cardOne);

console.log("User flipped " + cardsInPlay)

cardsInPlay.push(cardTwo);

console.log("User flipped " + cardsInPlay)

if (cardsInPlay.length === 2) {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
	}else {
	   alert("Sorry try again");
	}
	
}
