export default {
  actions: {
    setPoppers() {
      for(let i = 0; i < this.game.numberPoppers; i += 1) {
        this.poppers.push({});
      }
    },

    decreaseRemainingPoppers() {
      this.game.remainingPoppers--;
    },

    resetCurrentPlayerTurns() {
      this.players[this.game.currentPlayer].remainingTurns = 5;
    },

    startChangePlayer() {
      this.resetCurrentPlayerTurns();

      this.game.currentPlayer = (
        this.game.currentPlayer === (this.players.length - 1)
      )
        ? 0
        : this.game.currentPlayer + 1;
    },

    decrecePlayerTurn() {
      if (this.getTurnsLeft > 1) {
        this.players[this.game.currentPlayer].remainingTurns--;
      } else {
        this.startChangePlayer();
      }
    },

    setPopperIsPopped(id) {
      this.poppers[id].isPopped = true;
    },
  },
};