 //file that contains all DOM related JavaScript
//instantiated classes
var game = new Game()
var player = new Player()

//query selectors
var tiles = document.getElementById('tiles')

//data

//event listeners
//event listener for playGame function on click
tiles.addEventListener('click', playGame);
tiles.addEventListener('click', updateTurn);
//functions
// function playGame(){
//   console.log('hello')
//
// }
function updateTurn(){
  game.playersTurn()
  if (game.turn === 1) {
    tiles.innerHTML += `<td class="square-1">${player1.token}</td>`
  } else if (game.turn === 2) {
    tiles.innerHTML += `<td class="square-1">${player2.token}</td>`
  }
  console.log("update tiles");
}
// function to update the dom using using innerHTML
function playGame(){
  console.log("playGame on click")
}
