document.addEventListener('DOMContentLoaded', () => {

    //card options

    const cardArray = [

        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        }

    ]

    cardArray.sort( () => 0.5 - Math.random()  ) 

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const messageDisplay = document.querySelector('#message')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    var count = 0
    //console.log("Hai!")
    // Create the board
    function createBoard() {
        //alert(cardArray.length)
        for (let i = 0; i < cardArray.length; i++) {

            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            //card.setAttribute('src', cardArray[i].img)
            
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)  
            grid.appendChild(card)

        }
    }
    
    //Check For Matches
    function checkForMatch(){

        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0] === cardsChosen[1]){
            //alert('You Found a match!')
            messageDisplay.textContent = 'You Found a match!'
            cards[optionOneId].setAttribute('src','images/white.png')
            cards[optionTwoId].setAttribute('src','images/white.png')
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            //alert('Sorry! try again!')
            messageDisplay.textContent = 'Sorry! Try Again!'
            
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = count / 2

        if(cardsWon.length === cardArray.length/2 ){

            messageDisplay.textContent = 'Congrats! They have all been found!'
        }
    }

    //flip your card
    function flipCard(){

        var cardId = this.getAttribute('data-id')
        count++
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosenId.length === 2){
            setTimeout(checkForMatch, 100)
        }
    }

    createBoard()

})