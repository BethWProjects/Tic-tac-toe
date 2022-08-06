class Game {
  constructor(){
    this.player1 = new Player(one, img)
    this.player2 = new Player(one, img)
    this.turn = 0
    this.score
  }
  playersTurn(){
    //use the modulo operator to say if player divides by 2 then it's player 2's turn, else it's player 1's turn
  }
  tileSelected(){
    //if the player clicks a box, update the turn
  }
  checkWinner(){
    //check winning numbers
  }
  checkDefault(){
    //check default scenario players selection !== winningNumbers option
  }
  resetFunction(){
    //reset 
  }
}

//data model
// var playerMoves = []  move player moves/clicks into this array (THIS NEEDS TO BE DONE BEFORE UPDATING THE DOM)

var winningNumbers = [
 [1, 2, 3],
 [4, 5, 6],
]

// A Game should include:
// Two Player instances  // every time a new game is instantiated, two new players will be instantiated
// ---
// A way to keep track of the data for the game board
// A way to keep track of which player’s turn it currently is this.turn = player1 this.turn = player1 || random number generator
// A way to check the Game’s board data for win conditions  this.player = false
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
