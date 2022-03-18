export function setTitle(newString) {
    this.state.title = newString;
}

export function setNumberPoppers(newInt) {
    this.state.game.numberPoppers = newInt;
}

export function setRemainingPoppers(newInt) {
    this.state.game.remainingPoppers = newInt;
}

export function decreaseRemainingPoppers() {
    this.state.game.remainingPoppers--;
}

export function setWinner(newString) {
    this.state.game.winner = newString;
}

export function setCurrentPlayer(newInt) {
    this.state.game.currentPlayer = newInt;
}

export function addPlayer(playerData) {
    this.state.players.push(playerData);
}

export function setPlayerTurn({playerId, turns}) {
    this.state.players[playerId].remainingTurns = turns;
}

export function decreasePlayerTurn(playerId) {
    this.state.players[playerId].remainingTurns--;
}
