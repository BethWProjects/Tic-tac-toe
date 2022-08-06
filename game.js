class Game {
  constructor(){
    this.player1 = new Player(1, "🦄")
    this.player2 = new Player(2, "🌈")
    this.turn = 0
    this.score = []
  }
  playersTurn(){
    //use the modulo operator to say if player divides by 2 then it's player 2's turn, else it's player 1's turn
    if (this.turn === 0) {
      this.turn = 1
    } else if (this.turn === 1){
      this.turn = 2
    } else {
      this.turn = 1
    }
    console.log("player turn")
  }
  tileSelected(){
    //if the player clicks a box, invoke checkWinner
    checkWinner()
    if

  }
  checkWinner(){
    if (this.turn === 1 && winningNumbers.contains(this.score)) {
      this.player1.wins += 1
    } else if (this.turn === 2 && winningNumbers.contains(this.score)){
      this.player2.wins += 1
    }
  }
  checkDefault(){
    //check default scenario players selection !== winningNumbers option
  }
  resetFunction(){
    //reset game if these conditions are met
  }
}

//data model
// var playerMoves = []  move player moves/clicks into this array (THIS NEEDS TO BE DONE BEFORE UPDATING THE DOM)

var winningNumbers = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9],
 [1, 5, 9],
 [3, 5, 7],
 [1, 4, 7],
 [2, 5, 8],
 [3, 6, 9]
]

// A Game should include:
// Two Player instances  // every time a new game is instantiated, two new players will be instantiated
// ---
// A way to keep track of the data for the game board
// A way to keep track of which player’s turn it currently is this.turn = player1 this.turn = player1 || random number generator
// A way to check the Game’s board data for win conditions  this.player = false
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
