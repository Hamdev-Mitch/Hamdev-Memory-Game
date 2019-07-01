
let selectedCard;
let moves = 0;
let clockOff = true;
let timer = 0;
let cardsFlipped = 0;
const maxNumFlips = 2;
var numMatches = 0;

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
    }
  });
})

// If one card is clicked, start timer

// Every time a move is made add a move to the move counter


//---------- MATCH CARDS----------//]
const firstEmoji = document.querySelectorAll('li.memory-card.selected')[0].innerHTML
const secondEmoji = document.querySelectorAll('li.memory-card.selected')[1].innerHTML;

function checkMatch() {
  //click two cards
  // if Card 1 equals Card 2 add match class
  if (firstEmoji == secondEmoji) {
    this.classList.add("match")
    this.classList.remove("selected")
    // Add one to the number of matches for win-condition
    numMatches++;
  }
  // if Card 1 does not equal Card 2 remove match class
  // else (firstEmoji != secondEmoji) {
    this.classList.remove("selected")
  }

checkMatch();

querySelector('li.memory-card.selected')[0]

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

// Win Condition
function winGame(){
  if (numMatches == 8)
  {showModal(dialog);}
else {
  return; }
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
// Source: https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
// }



//---------- RESET----------//
// Create a variable for the Reset Button
// const reset = document.querySelector(".fa-repeat");

// Make it so that when .fa-repeat is clicked in initiates the resetGame function

// function resetGame() {
//     open = [];
//     matched = 0;
//     moves = 0;
//     resetTimer();
//     $(".card").attr("class", "card");
//     updateCards();
//     resetStars();
//   };


  // Reset moves
  //
  // movesContainer.innerHTML = moves;

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
