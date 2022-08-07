class Game {
  constructor(player1, player2){
    var player1 = new Player(1, "🦄")
    this.player1 = player1
    var player2 = new Player(2, "🌈")
    this.player2 = player2
    this.turn = 0
    this.score = []
  }
  playersTurn(){
    //instantiating 2 new players to access the player properties and method
    if (this.turn === 1){
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
          player1.boxes.push(boxId)
        } else if (this.turn === 2) {
          player2.boxes.push(boxId)
        }

  }

  checkWinner(){
    // checking the id of each player against the data of winningNumbers and the players boxes array
    // console.log('player boxes', player1.boxes, player2.boxes);

    // for (var i = 0; i < winningNumbers.length; i++) {
    //   var str1 = winningNumbers[i]
    //   var ply1= player1.boxes
    //   var ply2= player2.boxes
    //
    //   console.log("player1won?" , str1.includes(ply1))
    //
    player1.boxes.length > 3
    if (player1.boxes === ['1', '2', '3']) {
      player1.wins += 1
      console.log('player1 wins')
    } else if (player2.boxes === '1,2,3'){
      player2.wins += 1
      console.log('player2 wins')
    } else {
      console.log("draw")
    }
  // }
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
 '1,2,3',
 '4,5,6',
 '7, 8, 9',
 ['1', '2', '3'],
 ['1', '5', '9'],
 ['3', '5', '7'],
 ['1', '4', '7'],
 ['2', '5', '8'],
 ['3', '6', '9']
]

// A Game should include:
// Two Player instances  // every time a new game is instantiated, two new players will be instantiated
// ---
// A way to keep track of the data for the game board
// A way to keep track of which player’s turn it currently is this.turn = player1 this.turn = player1 || random number generator
// A way to check the Game’s board data for win conditions  this.player = false
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
