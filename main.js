 //file that contains all DOM related JavaScript
//instantiated classes
var game = new Game(player1, player2)
var player = new Player()

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
  game.playersTurn()

  /* getTarget function uses event delegation to target the individual cells
  in the table, calling on the parent node.  When invoked in the event listener
  the innerHTML and innerText will update on click. */
  var playerTurnTitle = document.querySelector('#player-turn')
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

}
//
// function clearBoard(){
//   if (tbody.innerText === `${player1.token}` || tbody.innerText === `${player2.token}`){
//     return false;
//   }
//   return true;
// }
// clearBoard()
