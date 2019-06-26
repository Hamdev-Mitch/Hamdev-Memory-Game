// initGAME();


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// Create a list that holds all of your cards

const cardTemplate = (emoji) =>  `<li class="memory-card"><span class="card-emoji">${emoji}</span></li>`;

// ARRAY OF CARD ICONS - Two of Each, to be matched.
// Store cards in array
const emojis = [ "😂", "😄", "😊", "😉", "😋", "😍", "😘", "😝"];

const deck = document.querySelector(".deck");

shuffle(emojis);
console.log(emojis);

//call cards with map, pass in each card, turn it into html string
var emojiHTML = emojis.map((emoji) => cardTemplate(emoji)).join("");
console.log(emojiHTML);

shuffle(emojis);
console.log(emojis);

// Pass in the array of emojis again
emojiHTML = emojiHTML+emojis.map((emoji) => cardTemplate(emoji)).join("");
console.log(emojiHTML);

//add the html back in programmatically use innerHTML Property.
deck.innerHTML = emojiHTML;
const cards = document.querySelectorAll('.memory-card');
cards.forEach((card) => {
  card.addEventListener("click",function(){
    if (this.classList.contains("selected")) return;
    this.classList.add("selected")
  });
})

// Hide the emoji


// Replace the emoji with an ICON


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

}

// Shuffle Emoji Array again

// Append the Emoji list to the deck






// When the user clicks assign it to the selected cards

// Check if one is already selected

// Reveal the card

// Flip Second Card

// Check when a card is clicked
  // .cards.a

// add event addEventListener




// Check for match
function checkForMatch() {
  let isMatch = firstCard.emojis === secondCard.emojis;

  isMatch ? disableCards() : unflipCards();
}






// Show Modal Box on Completion
// if (gameEnd) {
//     var message =
//     $('#alertModal').find('.modal-body p').text(message);
//     $('#alertModal').modal('show')
