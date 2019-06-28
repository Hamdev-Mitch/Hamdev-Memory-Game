let selectedCard;

let moves = 0;
let clockOff = true;
let timer = 0;
let cardsFlipped = 0;
const maxNumFlips = 2;

//---------- CARDS----------//
// Create a list that holds all of your cards
const cardTemplate = (emoji) => `<li class="memory-card"><span class="card-emoji">${emoji}</span></li>`;

// Store cards in array
const emojis = ["😂", "😄", "😊", "😉", "😋", "😍", "😘", "😝"];

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
emojiHTML = emojiHTML + emojis.map((emoji) => cardTemplate(emoji)).join("");
console.log(emojiHTML);

//add the html back in programmatically use innerHTML Property.
deck.innerHTML = emojiHTML;
const cards = document.querySelectorAll('.memory-card');
// Add event listener to each card
cards.forEach((card) => {
  card.addEventListener("click", function() {

    if (cardsFlipped >= maxNumFlips) {

    } else {
      // Check if one is already selected
      // remove this and add once
      if (this.classList.contains("selected")) return;
      // If not give it the selected class
      this.classList.add("selected")
      cardsFlipped++;
      console.log(cardsFlipped);
    }
    console.log(cardsFlipped);
  });
})

//---------- MATCH CARDS----------//

// Check for match - Idea 1
// function checkMatch(){
//   var length = emojis.length;
//     if(length === 2){
//         if(emojis[0].emoji === emojis[1].emoji){
//             matched();
//         } else {
//             unmatched();
//         }
//     }
// }

// Check for match - Idea 2
function checkMatch() {
  this.classList.add("selected");
  if (selectedCard) {

    // remove selected if they don't match

    const won = isMatch(selectedCard, this);
    // should I add an else if statement here for if it doesnt match
    if (won) {
      alert("You won the game");
      showModal(wonDialog);
      return won;
    }
  }

  return null;
}

function isMatch(firstCard, secondCard) {
  if (!firstCard || !secondCard) {}
  const firstEmoji = firstCard.querySelector(".emojiHTML").innerHTML;
  const secondEmoji = secondCard.querySelector(".emojiHTML").innerHTML;
  return firstEmoji === secondEmoji;
}

cards.forEach((card) => {
  card.addEventListener("click", checkMatch, {
    once: true
  });
});

//for when cards match
function matched() {
  emojis[0].classList.add("match");
  emojis[1].classList.add("match");
  emojis[0].classList.remove("selected");
  emojis[1].classList.remove("selected");
}

// when cards don't match - Idea 1
function unmatched() {
  disable();
  setTimeout(function() {
    emojis[0].classList.remove("selected");
    emojis[1].classList.remove("selected");
    enable();
  }, 1000);
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

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

function rating() {
  const starList = document.querySelectorAll('.stars');
  // 4 stars = 20 moves
  if (moves < 20) {
    starsContainer.innerHTML = star + star + star + star + star;
    // 3 stars = 25
  } else if (moves < 25) {
    starsContainer.innerHTML = star + star + star + star;
    // 2 stars = 30 moves
  } else if (moves < 30) {
    starsContainer.innerHTML = star + star + star;
    // 1 star = 35 or more
  } else if (moves < 35) {
    starsContainer.innerHTML = star + star;
  } else {
    starsContainer.innerHTML = star;
  }
}


// CLOCK
const gameTimer = document.querySelector(".timer");
let liveTimer,
  seconds = 0;
gameTimer.innerHTML = seconds + " Seconds";


function startTimer() {
  liveTimer = setInterval(function() {
    seconds++;
    gameTimer.innerHTML = seconds + 's';
  }, 1000);
}


//---------- RESET----------//
// Create a variable for the Reset Button
const reset = document.querySelector(".fa-repeat");

// Make it so that when .fa-repeat is clicked in initiates the resetGame function

function resetGame() {
  // Reset the cards in the deck


  // Reset moves
  moves = 0;
  movesContainer.innerHTML = moves;

  // Reset star rating


}


//---------- MOVES----------//
function addMoves() {
  moves++;
  const movesText = document.querySelector('.moves');
  movesText.innerHTML = moves;
}

//---------- END GAME----------//
// function endGame () {}

// Show Modal Box on Completion
function showModal(dialog) {
  // add the open attribute
  dialog.setAttribute("open", true);
  return dialog.showModal();
}

function giveModalResults() {
  const timeResult = document.querySelector('.time-results');
  const movesResult = document.querySelector('.moves-results');
  const gradeResult = document.querySelector('grade-results');

  timeResult.innerHTML = `Time = ${clockTime}`;
  movesResult.innerHTML = `Moves = ${moves}`;
  gradeResult.innerHTML = `Stars = ${stars}`;
}
