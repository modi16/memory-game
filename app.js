document.addEventListener('DOMContentLoaded', ()=>{
const cardArray=[
    {
        name:"anemone",
        image: "images/anemone.jpg" 
    },
    {
        name:"anemone",
        image: "images/anemone.jpg" 
    },
    {
        name:"dahlia",
        image: "images/dahlia.jpg" 
    },
    {
        name:"dahlia",
        image: "images/dahlia.jpg" 
    },
    {
        name:"redflower",
        image: "images/redflower.jpg" 
    },
    {
        name:"redflower",
        image: "images/redflower.jpg" 
    },
    {
        name:"rose",
        image: "images/rose.jpg" 
    },
    {
        name:"rose",
        image: "images/rose.jpg" 
    },
    {
        name:"tulip",
        image:"images/tulip.jpg" 
    },
    {
        name:"tulip",
        image:"images/tulip.jpg" 
    },
    {
        name:"yellow",
        image: "images/yellow.jpg" 
    },
    {
        name:"yellow",
        image: "images/yellow.jpg" 
    }
]

const grid = document.querySelector('.grid')
var cardsChosen=[]
var cardsChosenId=[]
var cardsWon=[]

function checkforMatch(){
    var cards=document.querySelectorAll('image')
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
    cardsChosenId.push(cardArray[cardId])
    this.setAttribute('src', cardArray[cardId].image)
    if(cardsChosen.length===2){
        setTimeout(checkforMatch,500)
    }
}

createBoard();
})