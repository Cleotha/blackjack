let player = {
    name: "Per" ,
    chips: 200
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")
let playerEL = document.getElementById("player-el")
playerEL.textContent = player.name + ": $" + player.chips

function renderGame() {
    if (sum <= 19) {
        message = "Do you want to draw a new card?"
    } else if(sum === 20) {
        message = "yayy, congrats! you've got Blackjack."
        hasBlackJack = true
    } else {
        message = "oops! you're out of the game."
        isAlive = false
    }
    messageEL.textContent = message
    sumEL.textContent = "Sum :" + sum
    cardsEL.textContent = "Cards :" 
    for (i = 0; i < cards.length; i ++) {
        cardsEL.textContent += cards[i] + "  "
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function newCard() {
    console.log = ("Wait a minute, Drawing a new card...")
    
    if (isAlive===true && hasBlackJack===false) {
        let thirdCard = getRandomCard()
    cards.push(thirdCard)
    sum += thirdCard
    }
    renderGame()
}
function getRandomCard() {
    randomNumber = Math.floor(Math.random() * 13 ) + 1

    if (randomNumber > 10){ 
        return 10
    }  else if (randomNumber ===1 ){
            return 11
    }   else {
        return randomNumber 
    }
}