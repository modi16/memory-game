document.addEventListener('DOMContentLoaded', ()=>{
const cardArray=[
    {
        name:"anemone",
        img: "images/anemone.jpg" 
    },
    {
        name:"anemone",
        img: "images/anemone.jpg" 
    },
    {
        name:"dahlia",
        img: "images/dahlia.jpg" 
    },
    {
        name:"dahlia",
        img: "images/dahlia.jpg" 
    },
    {
        name:"redflower",
        img: "images/redflower.jpg" 
    },
    {
        name:"redflower",
        img: "images/redflower.jpg" 
    },
    {
        name:"rose",
        img: "images/rose.jpg" 
    },
    {
        name:"rose",
        img: "images/rose.jpg" 
    },
    {
        name:"tulip",
        img:"images/tulip.jpg" 
    },
    {
        name:"tulip",
        img:"images/tulip.jpg" 
    },
    {
        name:"yellow",
        img: "images/yellow.jpg" 
    },
    {
        name:"yellow",
        img: "images/yellow.jpg" 
    }
]

cardArray.sort(()=> 0.5- Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')

var cardsChosen=[]
var cardsChosenId=[]
var cardsWon=[]

function checkforMatch(){
    var cards=document.querySelectorAll('img')
    const optionOneId= cardsChosenId[0]
    const optionTwoId= cardsChosenId[1]
    
    if (cardsChosen[0]===cardsChosen[1]){
        alert ("You found a match")
        cards[optionOneId].setAttribute('src', 'images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'images/white.jpg')
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert("Sorry, try again")
    }
    cardsChosenId=[]
    cardsChosen=[]
    resultDisplay.textContent=cardsWon.length
    if (cardsWon.length===cardArray.length/2){
        resultDisplay.textContent="Congratulations! You found them all"
    }
}

function createBoard(){
    for (var i=0; i<cardArray.length; i++){
        var card=document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

function flipCard(){
    var cardId= this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length===2){
        setTimeout(checkforMatch,500)
    }
}

createBoard();
})