class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.turn = 0
    this.counter = 0
    this.winner = null
  }

  playersTurn() {
    this.counter++
    if (this.turn === 1) {
      this.turn = player2.id
    } else {
      this.turn = player1.id
    }
  }

  updateBoxes(boxId) {
    if (this.turn === 1) {
      player1.boxes.push(parseInt(boxId))
    }
    if (this.turn === 2) {
      player2.boxes.push(parseInt(boxId))
    }
  }

  checkWinner() {
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

      if ((player1.boxes.includes(winningNumbers[i][0])) &&
        (player1.boxes.includes(winningNumbers[i][1])) &&
        (player1.boxes.includes(winningNumbers[i][2]))) {
        player1.wins += 1
        this.winner = "Player 1 Wins"
      }
      if ((player2.boxes.includes(winningNumbers[i][0])) &&
        (player2.boxes.includes(winningNumbers[i][1])) &&
        (player2.boxes.includes(winningNumbers[i][2]))) {
        player2.wins += 1
        this.winner = "Player 2 Wins"
      }
    }
  }

  updateDraw() {
    if (this.counter === 9 && this.winner) {
      return
    }
    if (this.counter >= 9 && this.winner !== true) {
      this.winner = "tie"
      return "This game is a DRAW"
    }
  }

  resetGame() {
    player1.boxes = []
    player2.boxes = []
    this.counter = 0
    this.winner = null
    if (this.winner === "Player 1 Wins") {
      this.turn = 2
    } else if (this.winner === "Player 2 Wins") {
      this.turn = 1
    }
  }
}
