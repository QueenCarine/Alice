
const team = {
    _players: [
      { firstName: 'Pete', lastName: 'Wheeler', age: 54 },
      { firstName: 'John', lastName: 'Smith', age: 32 },
      { firstName: 'Michael', lastName: 'Johnson', age: 28 }
    ],
    _games: [
      { opponent: 'Celtics', teamPoints: 102, opponentPoints: 95 },
      { opponent: 'Lakers', teamPoints: 88, opponentPoints: 94 },
      { opponent: 'Bulls', teamPoints: 105, opponentPoints: 101 }
    ],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      const player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this._players.push(player);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(game);
    }
  };
  
  // Add a new player
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  
  // Add a new game
  team.addGame('Titans', 100, 98);
  console.log(team.games);