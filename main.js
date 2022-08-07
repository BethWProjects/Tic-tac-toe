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
  var boxId;
  game.playersTurn()
  game.updateBoxes(boxId)
  game.checkWinner()
  if (game.turn === 1) {
    tiles.innerHTML += `<td class="square-1">${player1.token}</td>`
    // player.updateBoxes(game.turn, data)
  } else if (game.turn === 2) {
    tiles.innerHTML += `<td class="square-1">${player2.token}</td>`
    // player.updateBoxes(game.turn, data)
  }
  console.log("update tiles");
}
// function to update the dom using using innerHTML
function playGame(){
  console.log("playGame on click")
}
