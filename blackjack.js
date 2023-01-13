let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard + secondCard
let cards = [firstCard, secondCard]
let hasBlackJack = false
let isAlive = true
let message = " "
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")
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

    renderGame()
}
function newCard() {
    console.log = ("Wait a minute, Drawing a new card...")
    let thirdCard = getRandomCard()
    cards.push(thirdCard)
    sum += thirdCard
    renderGame()
}
function getRandomCard() {
    return Math.floor(Math.random()*13) + 1
    
}