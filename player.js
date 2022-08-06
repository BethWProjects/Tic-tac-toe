class Player {
  constructor(id, img){
    this.id = id
    this.token = img
    this.wins = 0
  }
  increaseWins(){
    console.log('win')
  }
}
var player1 = new Player(1, "🦄")
var player2 = new Player(2, "🌈")
console.log(player1);
console.log(player2);
// Player methods must include, but are not limited to:
// constructor - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: 0)
// increaseWins - increases the count of the player’s wins
