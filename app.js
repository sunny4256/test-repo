const cardArray = [


 
  {
    name : 'fries',
    img : 'images/fries.png'
  },

  
  {
    name : 'cheeseburger',
    img : 'images/cheeseburger.png'
  },
  {
    name : 'hotdog',
    img : 'images/hotdog.png'
  },

  {
    name : 'ice-cream',
    img : 'images/ice-cream.png'
  },

  {
    name : 'milkshake',
    img : 'images/milkshake.png'
  },

  {
    name : 'pizza',
    img : 'images/pizza.png'
  },
  
  {
    name : 'fries',
    img : 'images/fries.png'
  },

  
  {
    name : 'cheeseburger',
    img : 'images/cheeseburger.png'
  },
  {
    name : 'hotdog',
    img : 'images/hotdog.png'
  },

  {
    name : 'ice-cream',
    img : 'images/ice-cream.png'
  },

  {
    name : 'milkshake',
    img : 'images/milkshake.png'
  },

  {
    name : 'pizza',
    img : 'images/pizza.png'
  },



]

cardArray.sort( () => 0.5 - Math.random())

const gridDispplay = document.querySelector('#grid')
const cardsChosen = []

function createBoard() {
  for(let i = 0 ; i < cardArray.length ; i++){
    const card = document.createElement('img')
    card.setAttribute('src' , 'images/blank.png')
    card.setAttribute('data-id'  ,i)
    gridDispplay.appendChild(card)
    card.addEventListener('click',flipCard)
  }
}

createBoard()


function flipCard() {
  const cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  this.setAttribute('src' , cardArray[cardId].img)
  

}








//