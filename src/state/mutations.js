export default {
  getters: {
    getCurrentPlayer(state) {
      return state.players[state.game.currentPlayer].name;
    },
    getTurnsLeft(state) {
      return state.players[state.game.currentPlayer].remainingTurns;
    },
  },
};