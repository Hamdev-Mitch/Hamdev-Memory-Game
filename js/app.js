let selectedCard;
let moves = 0;
let clockOff = true;
let timer = 0;
let cardsFlipped = 0;
const maxNumFlips = 2;
var numMatches = 0;
const movesTxt = document.querySelector('.moves-text');
const movesCount = document.querySelector('.moves');
const deck = document.querySelector(".deck");
const cardTemplate = (emoji) => `<li class="memory-card"><span class="card-emoji">${emoji}</span></li>`;
const emojis = ["😂", "😄", "😊", "😉", "😋", "😍", "😘", "😝"];
const starsContainer = document.querySelectorAll('.stars');
const star =

  //---------- MAIN GAME LOGIC----------//

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
    // Make sure that only two cards can be flipped at once
    if (cardsFlipped >= maxNumFlips) {
      checkMatch();
      cardsFlipped = 0;
    } else {
      // Check if one is already selected
      // remove this and add once
      if (this.classList.contains("selected")) return null;
      // If not give it the selected class
      this.classList.add("selected")
      cardsFlipped++;
    }
  });
})

// Every time a move is made add a move to the move counter

//---------- MATCH CARDS----------//
function checkMatch() {
  addMoves();
  const firstEmoji = document.querySelectorAll('li.memory-card.selected .card-emoji')[0].innerHTML;
  const secondEmoji = document.querySelectorAll('li.memory-card.selected .card-emoji')[1].innerHTML;
  const firstMemoryCard = document.querySelectorAll('li.memory-card.selected')[0];
  const secondMemoryCard = document.querySelectorAll('li.memory-card.selected')[1];
  console.log(firstEmoji == secondEmoji);
  // Target cards and add a class to them
  if (firstEmoji == secondEmoji) {
    firstMemoryCard.classList.add("match")
    firstMemoryCard.classList.remove("selected")
    secondMemoryCard.classList.add("match")
    secondMemoryCard.classList.remove("selected")
    // Add one to the number of matches for win-condition
    numMatches++;
    checkWinCondition();
    // rating();
    console.log(numMatches);
  }
  // if Card 1 does not equal Card 2 remove match class
  else if (firstEmoji != secondEmoji) {
    firstMemoryCard.classList.remove("selected")
    secondMemoryCard.classList.remove("selected")
  }
}
//---------- SHUFFLE ----------//
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

// ---------- Win Condition ---------- //
function winGame() {
  const modalBox = document.querySelector('.congrats');
  if (numMatches >= 8) {
    myStopFunction();
    stopCount();
    modalBox.style.display="block";
    giveModalResults();
  }
}

function checkWinCondition() {
  if (numMatches >= 8) {
    winGame();
  }
}

function myStopFunction() {

}

function stopCount() {
  clearInterval(moves);
}

function restartGame() {
  // reset all emojis
  querySelectorAll("memory-card").classList.remove("selected");
  shuffle(emojis);
  shuffle(emojis);

  // close the modal
  closeModal();

  // reset the score
  resetScore();

  // reset the deck
  resetDeck();
}



//----------STARS----------//
// Create a variable for the Stars
function rating() {
  const starList = document.querySelectorAll('.stars');
  // 4 stars = 20 moves
  const star = document.querySelector('.stars fa-star');
  if (moves <= 20) {
    starList.removeChild[4];
    // 3 stars = 25
  } else if (moves >= 25 && moves <= 30) {
    starList.removeChild[3];
    // 2 stars = 30 moves
  } else if (moves >= 30 && moves <= 35) {
    starList.removeChild[2];
    // 1 star = 35 or more
  } else if (moves >= 35 && moves <= 40) {
    starList.removeChild[1];
  } else {
    starList.removeChild[0];
  }
}

//----------TIMER----------//

// Timer
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
}

//---------- MOVES----------//
function addMoves() {
  moves++;
  movesCount.textContent = moves;
}


//---------- END GAME----------//



//---------- MODAL ---------//
// function endGame () {}

// Show Modal Box on Completion
function giveModalResults() {
  const timeResult = document.querySelector('#time-results');
  const movesResult = document.querySelector('#moves-results');
  const gradeResult = document.querySelector('#grade-results');
  timeResult.innerHTML = `${totalSeconds} seconds`;
  movesResult.innerHTML = `${moves}`;
  gradeResult.innerHTML = `${starList}`;
}

function closeModal() {
  modal.style.display = 'none';
}


// When the user clicks on the button, close the modal
var modalCloseBtn = document.getElementById("modalCloseButton");
modalCloseBtn.onclick = function() {
  modal.style.display = "none";
  modal.style.visibility = "hidden";
};
