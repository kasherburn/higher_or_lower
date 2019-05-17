let deck = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], //hearts
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], //clubs
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], //diamonds
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] //spades
]

let cardImages = [
    ["../images/card_images/AH.jpg", "../images/card_images/2H.jpg", "../images/card_images/3H.jpg", "../images/card_images/4H.jpg", "../images/card_images/5H.jpg", "../images/card_images/6H.jpg", "../images/card_images/7H.jpg", "../images/card_images/8H.jpg", "../images/card_images/9H.jpg", "../images/card_images/10H.jpg", "../images/card_images/JH.jpg", "../images/card_images/QH.jpg", "../images/card_images/KH.jpg"],
    ["../images/card_images/AC.jpg", "../images/card_images/2C.jpg", "../images/card_images/3C.jpg", "../images/card_images/4C.jpg", "../images/card_images/5C.jpg", "../images/card_images/6C.jpg", "../images/card_images/7C.jpg", "../images/card_images/8C.jpg", "../images/card_images/9C.jpg", "../images/card_images/10C.jpg", "../images/card_images/JC.jpg", "../images/card_images/QC.jpg", "../images/card_images/KC.jpg"],
    ["../images/card_images/AD.jpg", "../images/card_images/2D.jpg", "../images/card_images/3D.jpg", "../images/card_images/4D.jpg", "../images/card_images/5D.jpg", "../images/card_images/6D.jpg", "../images/card_images/7D.jpg", "../images/card_images/8D.jpg", "../images/card_images/9D.jpg", "../images/card_images/10D.jpg", "../images/card_images/JD.jpg", "../images/card_images/QD.jpg", "../images/card_images/KD.jpg"],
    ["../images/card_images/AS.jpg", "../images/card_images/2S.jpg", "../images/card_images/3S.jpg", "../images/card_images/4S.jpg", "../images/card_images/5S.jpg", "../images/card_images/6S.jpg", "../images/card_images/7S.jpg", "../images/card_images/8S.jpg", "../images/card_images/9S.jpg", "../images/card_images/10S.jpg", "../images/card_images/JS.jpg", "../images/card_images/QS.jpg", "../images/card_images/KS.jpg"]
]


let start = document.getElementById("start")
start.addEventListener("click", showCard)
let higher = document.getElementById("higher")
higher.addEventListener("click", higherSelected)
let lower = document.getElementById("lower")
lower.addEventListener("click", lowerSelected)
let reset = document.getElementById("reset")

let cardImage = document.getElementById("cardImage");
let currentCard;
let previousCard;
let functionCounter = 0;
let winOrLose = document.getElementById("winOrLose")

function showCard() {
    let suitNumber = Math.floor(Math.random() * deck.length);
    let suitValue = deck[suitNumber];
    let cardNumber = Math.floor(Math.random() * suitValue.length);
    currentCard = suitValue[cardNumber];
    console.log(currentCard)
    deck[suitNumber].splice(cardNumber, 1) //then removes it from the deck
    let myCardImage = cardImages[suitNumber][cardNumber] //show card and now also display image
    cardImage.src = myCardImage;
    cardImages[suitNumber].splice(cardNumber, 1)
    winOrLose.innerHTML = `Higher or lower?`; //display higher or lower
}

function higherSelected() { //run this when user clicks higher
    functionCounter++
    previousCard = currentCard;
    start.removeEventListener("click", showCard)
    showCard()
    if (currentCard.valueOf() > previousCard.valueOf()) {
        winOrLose.innerHTML = `Congratulations you guessed correctly!`;
        if (functionCounter == 10) {
            winOrLose.innerHTML = `You Win!`;
        }

    } else {
        winOrLose.innerHTML = `You Lose!`;
        higher.removeEventListener("click", higherSelected)
        lower.removeEventListener("click", lowerSelected)
        return;
    }

}

function lowerSelected() { //run this when user clicks lower
    functionCounter++
    previousCard = currentCard;
    start.removeEventListener("click", showCard)
    showCard()
    if (currentCard.valueOf() < previousCard.valueOf()) {
        winOrLose.innerHTML = `Congratulations you guessed correctly!`;
        if (functionCounter == 10) {
            winOrLose.innerHTML = `You Win!`;
        }
    } else {
        winOrLose.innerHTML = `You Lose!`;
        higher.removeEventListener("click", higherSelected)
        lower.removeEventListener("click", lowerSelected)
        return;
    }
}

reset.addEventListener("click", function () { //run this when user clicks reset
    location.reload();
})


//document.innerhtml = ""