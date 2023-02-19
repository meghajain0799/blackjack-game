
// randomNum = Math.floor(Math.random()*11);
// function numBetweenTwoToEleven(){
//     var randomNum = Math.floor(Math.random()*11);
//     if(randomNum==0 || randomNum==1)
//     {
//     var randomNum = Math.floor(Math.random()*11);

//     }

// }
let player = {
    name: "Perl",
    chips: 125
}
 
let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
console.log(sum);
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el")


function displayPlayer(){
playerEl.textContent = player.name + ": $" + player.chips
}




function startGame(){
    if(player.chips>=10)
    {
    isAlive = true
    hasBlackJack = false;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    displayPlayer();
    renderGame();
    }
    else{
        message = "Sorry! you're out of money. Please add coins to continue.";
        messageEl.textContent = message;
    }

}

function getRandomCard(){
     var randomCard = Math.floor(Math.random()*13) + 1;
     if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
     return randomCard;
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: "+sum;
    if(sum<21)
    {
        message = "Would you like to draw another card?";
    }
    else if(sum===21){
        message = "Woohoo! You are the BlackJack!!";
        player.chips += 10;
        displayPlayer();
        hasBlackJack = true;
    }

    else{
        message = "Ohoo.. you're out! Better luck next time!";
        player.chips -= 10;
        displayPlayer();
        isAlive = false;
        //setTimeout is used so that my DOM updates first and then alert is called
        setTimeout(function() {
            alert("Start a new game.");
        }, 0);
        
    }
    messageEl.textContent = message;
}

function newCard(){
    if(isAlive===true && hasBlackJack === false)
    {
    let nextCard = getRandomCard();
    sum += nextCard;
    //sumEl.textContent = "Sum: "+sum;
    cards.push(nextCard);
    renderGame();
    console.log(nextCard);
    }
}


