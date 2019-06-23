// initGAME();

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// Create a list that holds all of your cards

const cardTemplate = (emoji) =>  `<li class="memory-card"><span class="card-emoji">${emoji}</span></li>
`;

// ARRAY OF CARD ICONS - Two of Each, to be matched.
// Store cards in array
const emojis = [ "😂", "😄", "😊", "😉", "😋", "😍", "😘", "😝", "😂", "😄", "😊", "😉", "😋", "😍", "😘", "😝",];

//call cards with map, pass in each card, turn it into html string
const emojiHTML = emojis.map((emoji) => cardTemplate(emoji)).join("");

const deck = document.querySelector(".deck");

//add the html back in programmatically use innerHTML Property.
deck.innerHTML = emojiHTML;


// card.forEach(card => card addEventListener ('click', flipCard));

// Declare Flipcard Function
function flipCard() {

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

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */





// add score board
gradeSpan.innerText = grade

// add number of moves board
moveText.innerText = moves;
// moves = 0;
// update moves moves += 1;
// store move counter element in a variable
// make move counter inner text = moves

// set timer to display time
timeText.innerText = watch.getTimeString();



// Boolean to know if the game is over

let isGameOver = false;
let didGameStart = false;

let matches = [];
let lastFlipped = null
let pause = false;
