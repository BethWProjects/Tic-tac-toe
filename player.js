class Player {
  constructor(one, img){
    this.id = one
    this.token = img
    this.wins = 0
  }
  increaseWins(){
    console.log('win')
  }
}

// Player methods must include, but are not limited to:
// constructor - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: 0)
// increaseWins - increases the count of the player’s wins
