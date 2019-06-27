// ---------- START GAME ---------- //

let moves = 0;
let clockOff = true;
let time = 0;
let clockId;

//---------- CARDS----------//
// Create a list that holds all of your cards
const cardTemplate = (emoji) =>  `<li class="memory-card"><span class="card-emoji">${emoji}</span></li>`;

// Store cards in array
const emojis = [ "😂", "😄", "😊", "😉", "😋", "😍", "😘", "😝"];

//---------- CREATE + FILL DECK----------//

// Create a deck to store the cards in
const deck = document.querySelector(".deck");

// Shuffle array once
shuffle(emojis);

//call cards with map, pass in each card, turn it into html string
var emojiHTML = emojis.map((emoji) => cardTemplate(emoji)).join("");
console.log(emojiHTML);

// Shuffle array a second time
shuffle(emojis);

// Pass in the array of emojis again
emojiHTML = emojiHTML+emojis.map((emoji) => cardTemplate(emoji)).join("");
console.log(emojiHTML);

//add the html back in programmatically use innerHTML Property.
deck.innerHTML = emojiHTML;
const cards = document.querySelectorAll('.memory-card');
// Add event listener to each card
cards.forEach((card) => {
  card.addEventListener("click",function(){
    // Check if one is already selected
    if (this.classList.contains("selected")) return;
    // If not give it the selected class
    this.classList.add("selected")
  });
})


// Check for match
function checkForMatch() {
  let isMatch = firstCard.emojis === secondCard.emojis;

  isMatch ? disableCards() : unflipCards();
}


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


//---------- STARS----------//
// Create a variable for the Stars
const stars = document.querySelector("ul.stars li");


//---------- RESET----------//
// Create a variable for the Reset Button
const reset = document.querySelector(".fa-repeat");


//---------- MOVES----------//
function addMoves() {
    moves++;
    const movesText = document.querySelector('.moves');
    movesText.innerHTML = moves;
}

//---------- END GAME----------//
// function endGame () {}


// Show Modal Box on Completion
// if (gameEnd) {
//     var message =
//     $('#alertModal').find('.modal-body p').text(message);
//     $('#alertModal').modal('show')
