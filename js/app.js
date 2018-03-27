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

let openCard = function(){
    if(animated) return;
    this.classList.toggle('open');
    this.classList.toggle('show');
    openCards.push(this);
    let cardCount = openCards.length;
    if (cardCount === 2) {
        //movesCounter();
        if (openCards[0].firstElementChild.className === openCards[1].firstElementChild.className){
          matchList++;
            for (let i=0; i < 2; i++){
                openCards[i].classList.add('match');
                openCards[i].classList.remove('show', 'open');
            }
            openCards = [];
        } else {
            noMatch();
        }
    }
    //finished();
}

function noMatch(){
    animated =true;
    for (let i=0; i < 2; i++){
    openCards[i].classList.add('unmatched');
    }
    setTimeout(function(){
        animated = false;
        for (let i=0; i < openCards.length; i++){
            openCards[i].classList.remove('show', 'open', 'unmatched');
        }
        openCards = [];
    }, 1500);
}

function movesCounter(){
    moves ++;
    count.innerHTML = moves;
    if (moves < 25 && moves > 15){
        starCount[2].style.visibility = 'collapse';
    } else if (moves > 25){
        starCount[1].style.visibility = 'collapse';
    }
}

function gameTime(){
    timePassed = setInterval(function(){
        timer.innerHTML = hour + ' hours ' + minute + ' mins ' + second + ' secs';
        second ++;
        if (second == 60){
            minute ++;
            second =0;
        }
        if (minute == 60){
            hour++;
            minute = 0;
        }
    }, 1000);
}

for (let i=0; i <cardArray.length; i++){
    cardStack= cardArray[i];
    cardStack.addEventListener('click', openCard);
  }
