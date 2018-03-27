 //create selectors
const cardDeck = document.querySelector('.deck');
let cardStack = document.querySelectorAll('.card');
let cardArray = [...cardStack];
 //starting moves
let moves = 0;
let count = document.querySelector('.moves');
 //stars
const starCount = document.querySelectorAll('.fa-star');
let matchList = 0;
let openCards = [];
 //timer
let animated = true;
 //end stats
document.body.onload = defaultCards;

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

function defaultCards(){
  cardArray = shuffle(cardArray);
  let tempHolder = [];
  for (let i=0;i< cardArray.length;i++){
    cardDeck.innerHtml = '';
    tempHolder.forEach.call(cardArray, function(item){
    cardDeck.appendChild(item);
    });
    cardArray[i].className = 'card';
  }
  moves = 0;
  matchList = 0;
  count.innerHTML = 0;
  for (let i=0;i< starCount.length;i++){
    starCount[i].style.visibility = 'visible';
  }
  openCards = [];
  animated = false;
}
