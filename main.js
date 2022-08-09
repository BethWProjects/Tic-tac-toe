//instantiated classes
var game = new Game(player1, player2)
var player1 = new Player(1, "🦄")
var player2 = new Player(2, "🌈")

//query selectors
var playerTurnTitle = document.querySelector('#player-turn')
var playerOneTitle = document.querySelector('#player-one')
var playerTwoTitle = document.querySelector("#player-two")
var gameBoard = document.querySelector('.game-grid')
var gameSpaces = document.querySelectorAll('td')
var tbody = document.querySelector('#tiles');
var winner = document.querySelector('.winner')

//event listeners
tbody.addEventListener('click', getTarget);

//functions
function getTarget(e) {
  if (event.target.textContent.includes('🦄') || event.target.textContent.includes('🌈')) {
    return 'alert'
  }

  game.playersTurn()
  var cell = e.target.closest('td');
  if (!cell) {
    return;
  }

  if (game.turn === 1) {
    cell.innerHTML += `<td class="square-1">${player1.token}</td>`
    playerTurnTitle.innerText = `It's ${player2.token} 's turn`
  } else if (game.turn === 2) {
    cell.innerHTML += `<td class="square-1">${player2.token}</td>`
    playerTurnTitle.innerText = `It's ${player1.token} 's turn`
  }

  var boxId = cell.id
  game.updateBoxes(boxId)

  game.checkWinner()
  playerWon()
  updateTitle()
}

function playerWon() {
  game.updateDraw()
  if (game.winner) {
    hideBoard()
  }
}

function updateTitle() {
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

function hideBoard() {
  gameBoard.classList.add('hidden')
  winner.src = `assets/glitter-stars.gif`
  setTimeout(newGame, 2000)
}

function newGame() {
  gameBoard.classList.remove('hidden')
  winner.src = ``
  game.resetGame()
  for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].innerText = ""
  }
  if (game.turn === 1) {
    playerTurnTitle.innerText = `It's ${player2.token} 's turn`
  } else if (game.turn === 2) {
    playerTurnTitle.innerText = `It's ${player1.token} 's turn`
  }
}
