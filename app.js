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

function createBoard(){
    for (let i=0; i<cardArray.length; i++){
        var card=document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

function flipCard(){
    let cardId= this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardArray[cardId])
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length===2){
        setTimeout(checkforMatch,500)
    }
}

createBoard();
})