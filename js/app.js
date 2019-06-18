/*
 * Create a list that holds all of your cards
 */

 // function initGame() {
 //
 // write set interval function
 //clear timeout clear interval
 // }
 //
 // initGAME();


// Dynamically Generate Cards
// ARRAY OF CARD ICONS - Two of Each, to be matched.
// Store cards in array
const icons = [
  "fa fa-twitter-square", "fa fa-twitter-square",
  "fa fa-facebook-square", "fa fa-facebook-square",
  "fa fa-instagram", "fa fa-instagram",
  "fa fa-tumblr-square", "fa fa-tumblr-square",
  "fa fa-linkedin", "fa fa-linkedin",
  "fa fa-youtube-square", "fa fa-youtube-square",
  "fa fa-leaf", "fa fa-leaf",
  "fa fa-bicycle", "fa fa-bicycle",
  "fa fa-diamond", "fa fa-diamond",
  "fa fa-bomb", "fa fa-bomb",
  "fa fa-leaf", "fa fa-leaf",
]
//add function generate Cards
  //add attribute data-card="${card}"

//create function that gives HTML for each cards
//call cards with map, pass in each card, turn it into html string
//add the html back in programmatically use innerHTML Property.

//Create Card template



//EVENT LISTENER TO CARD CLASS (To Allow Cards to Flip)

  //GRAB ALL Cards
  //loop through
  //add click event LISTENER
    //pass event listener into it
    //check it works with console.log
    //add class to the card when clicked (open, show)

// Stop more than 2 cards showing at once
  // create open card ARRAY
  // push current card into that ARRAY
  // if the open cards length is greater than two then hide the cards
  // else open the car up

  // hide cards after a period of time (setTimeout) delay 900
  // card cardlist remove (open, show)

  // disable clicking on the same card, using a boolean.

//match Cards
  //USE javascript get data attribute MDN Docs
  // if they match add classlist.add('match');

  // If they don't match, hide

//MEMORY GAME LOGIC

//MOVE COUNTER

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

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

// add score board
// moves = 0;
// update moves moves += 1;
// store move counter element in a variable
// make move counter inner text = moves


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
