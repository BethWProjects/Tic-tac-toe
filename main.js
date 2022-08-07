 //file that contains all DOM related JavaScript
//instantiated classes
var game = new Game()
var player = new Player()

//query selectors
/*  create a query Selector for the entire table body(parent node)
to use event delegation to access the individual table squares
*/
var tbody = document.querySelector('#tiles');
/*  created event listener and handler called getTarget function
to access each square and "set it to cell" */
tbody.addEventListener('click', getTarget);

//event listeners
//event listener for playGame function on click
tiles.addEventListener('click', playGame);
tiles.addEventListener('click', updateTurn);

//functions
function getTarget(e){
  /* this function uses event delegation to target the individual cells
  in the table, calling on the parent node */
  var cell = e.target.closest('td');
  if (!cell) {return;} // Quit, not clicked on a cell
  var row = cell.parentElement;
  console.log(cell.innerHTML, row.rowIndex, cell.cellIndex);
// adding the players token to the cell that was clicked
  if (game.turn === 0) {
    cell.innerHTML += ''
  } else if (game.turn === 1) {
    cell.innerHTML += `<td class="square-1">${player1.token}</td>`
    // player.updateBoxes(game.turn, data)
  } else if (game.turn === 2) {
    cell.innerHTML += `<td class="square-1">${player2.token}</td>`
    // player.updateBoxes(game.turn, data)
  }

}


function updateTurn(){
  var boxId;
  game.playersTurn()
  game.updateBoxes(boxId)
  game.checkWinner()
} if (game.turn === 1) {
  cell.innerHTML += `<td class="square-1">${player1.token}</td>`
  // player.updateBoxes(game.turn, data)
} else if (game.turn === 2) {
  cell.innerHTML += `<td class="square-1">${player2.token}</td>`
  // player.updateBoxes(game.turn, data)
}

}
// function to update the dom using using innerHTML
function playGame(){
  console.log("playGame on click")
}
