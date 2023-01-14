let cards = []
let player = {
    name: "Per" ,
    chips: 200
}
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = " "
let cardsEL=document.getElementById("cards-el")
let sumEL=document.getElementById("sum-el")
let messageEL=document.getElementById("message-el")
let playerEL=document.getElementById("player-el")
playerEL.textContent = player.name + ": $" + player.chips

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Congrats, you've got blackjack!"
        hasBlackJack = true
    } else{
        message = "oops, you lost!"
        isAlive = false
    }
    messageEL.textContent = message
    sumEL.textContent = "Sum :" + sum
    cardsEL.textContent = "Cards :" 
    for (let i = 0; i < cards.length; i ++) {
        cardsEL.textContent += cards[i] + "  "
    }
}
function newCard() {
    if (hasBlackJack === false && isAlive === true) {
    let thirdCard = getRandomCard()
    sum += thirdCard
    cards.push(thirdCard)
    sumEL.textContent = "Sum: " + sum
    renderGame()
    }
}
function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function getRandomCard() {
    randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 11
    } else if (randomNumber === 1) {
        return 10
    } else {
        return randomNumber
    }
}
function endGame() {
    sumEL.textContent = "Sum :" + 0
    cardsEL.textContent = "Cards :" + 0
}