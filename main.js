 //file that contains all DOM related JavaScript
//instantiated classes
var game = new Game(player1, player2)
var player1 = new Player(1, "🦄")
var player2 = new Player(2, "🌈")
var playerTurnTitle = document.querySelector('#player-turn')
var playerOneTitle = document.querySelector('#player-one')
var playerTwoTitle = document.querySelector("#player-two")
var gameBoard = document.querySelector('.game-grid')
var gameSpaces = document.querySelectorAll('td')

//query selectors with matched event listeners
/* -created a query Selector for the entire table body(parent node)
to use event delegation to access the individual table squares
- created event listener and handler called getTarget function
to access each square and "set it to cell" */
var tbody = document.querySelector('#tiles');
tbody.addEventListener('click', getTarget);


//functions

function getTarget(e){
  //invoking game functions to sync data model
  if (event.target.textContent.includes('🦄') || event.target.textContent.includes('🌈')){
    return 'alert'
  }
  game.playersTurn()

  /* getTarget function uses event delegation to target the individual cells
  in the table, calling on the parent node.  When invoked in the event listener
  the innerHTML and innerText will update on click. */
  var cell = e.target.closest('td');
  if (!cell) {return;} // Quit, not clicked on a cell
  // const row = cell.parentElement;
  // var player1Row = [0, 0, 0]
  // var player1Column = ["", "", ""]

// adding the players token to the cell that was clicked
if (game.turn === 1) {
    cell.innerHTML += `<td class="square-1">${player1.token}</td>`
    // var x = row.rowIndex
    // player1.boxes[x]+=1
    // player1Column[cell.cellIndex]+=1
    playerTurnTitle.innerText = `It's ${player2.token} 's turn`
    // player.updateBoxes(game.turn, data)
  } else if (game.turn === 2) {
    cell.innerHTML += `<td class="square-1">${player2.token}</td>`
    playerTurnTitle.innerText = `It's ${player1.token} 's turn`
    // player.updateBoxes(game.turn, data)
  }
  /* grab the cell.id (id from the 'td' element) and create a variable to
  use as a parameter in updateBoxes, to push the id number into the boxes array
  for the player who's turn it is. */
  var boxId = cell.id  //Maybe I need to change to divs?
  console.log('cell index', cell.id);
  game.updateBoxes(boxId)

  // var boxId = cell.cellIndex  //Maybe I need to change to divs?
  // console.log('cell index', cell.cellIndex);
  // game.updateBoxes(boxId)

  // Need to check winner after the player's "boxes" is updated
  game.checkWinner()
  playerWon()
  updateTitle()
}

function playerWon(){
  game.updateDraw()
  if (game.winner){
    hideBoard()
  }
}

function updateTitle(){
  if (game.winner === "Player 1 Wins") {
    playerTurnTitle.innerText = `${player1.token}  Won!`
  }
  if (game.winner === "Player 2 Wins") {
    playerTurnTitle.innerText = `${player2.token}  Won!`
  }
  if (game.winner === "tie") {
    playerTurnTitle.innerText = `This Game is a Draw`
  }
  if (player1.wins > 0) {
    playerOneTitle.innerText = `${player1.wins} Win`
  }
  if (player2.wins > 0) {
    playerTwoTitle.innerText = `${player2.wins} Win`
  }
}

function hideBoard(){
  gameBoard.classList.add('hidden')
  setTimeout(newGame, 2500)
}

function newGame(){
  gameBoard.classList.remove('hidden')
  game.resetGame()
  for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].innerText = ""
  }
  
}
//
// function clearBoard(){
//   if (tbody.innerText === `${player1.token}` || tbody.innerText === `${player2.token}`){
//     return false;
//   }
//   return true;
// }
// clearBoard()
