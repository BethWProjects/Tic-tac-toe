class Game {
  constructor(player1, player2){
    this.player1 = player1
    this.player2 = player2
    this.turn = 0
    this.counter = 0
    this.winner = null
    //this.score = []
  }
  playersTurn(){
    //instantiating 2 new players to access the player properties and method
    this.counter++
    if (this.turn === 1) {
      this.turn = player2.id
    } else {
      this.turn = player1.id
    }
  }
  //invoke updateBoard in main.js to grab data from player interaction
  updateBoxes(boxId){
      // this.score.push(data)
      // for (var i = 0; i < this.score.length; i++) {
        if (this.turn === 1) {
          player1.boxes.push(parseInt(boxId))
        } if (this.turn === 2) {
          player2.boxes.push(parseInt(boxId))
        }
  }

  checkWinner(){
    // checking the id of each player against the data of winningNumbers and the players boxes array
    // console.log('player boxes', player1.boxes, player2.boxes);
    var winningNumbers = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6]
    ]
    for (var i = 0; i < winningNumbers.length; i++) {

    if ((player1.boxes.includes(winningNumbers[i][0]))
    && (player1.boxes.includes(winningNumbers[i][1]))
    && (player1.boxes.includes(winningNumbers[i][2]))) {
      player1.wins += 1
      this.winner = "Player 1 Wins"
      console.log('player1 wins', this.winner)
    } if ((player2.boxes.includes(winningNumbers[i][0]))
    && (player2.boxes.includes(winningNumbers[i][1]))
    && (player2.boxes.includes(winningNumbers[i][2]))) {
      player2.wins += 1
      this.winner = "Player 2 Wins"
      console.log('player2 wins', this.winner)
    }
  }
}
  updateDraw(){
    if (this.counter >= 8 && this.winner !== true) {
      this.winner = "tie"
      console.log('draw')
      return "This game is a DRAW"
    }
  }
  resetGame(){
    //invoke this in newGame
    player1.boxes = []
    player2.boxes = []
    this.counter = 0
    this.winner = null
    if (this.winner === "Player 1 Wins"){
      this.turn = 2
    } else if (this.winner === "Player 2 Wins") {
      this.turn = 1
    }
  }
}

  // checkDefault(){
  //   //check default scenario players selection !== winningNumbers option
  // }
  // resetFunction(){
  //   //reset game if these conditions are met
  // }
// }

//data model
// var playerMoves = []  move player moves/clicks into this array (THIS NEEDS TO BE DONE BEFORE UPDATING THE DOM)

//index number position
// [0, 1, 2]
// [3, 4, 5]
// [6, 7, 8]



// A Game should include:
// Two Player instances  // every time a new game is instantiated, two new players will be instantiated
// ---
// A way to keep track of the data for the game board
// A way to keep track of which player’s turn it currently is this.turn = player1 this.turn = player1 || random number generator
// A way to check the Game’s board data for win conditions  this.player = false
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
