import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      title: 'Wizzy Popper Game',
      game: {
        numberPoppers: 10,
        remainingPoppers: 10,
        winner: undefined,
        currentPlayer: 0,
      },
      poppers: [],
      players: [
        {
          name: 'Player One',
          remainingTurns: 5,
        },
        {
          name: 'Player Two',
          remainingTurns: 5,
        },
      ],
      lightboxes: [],
    }
  },
  // TODO: export this to seperate file
  getters: {
    getCurrentPlayer(state) {
      return state.players[state.game.currentPlayer].name;
    },

    getTurnsLeft(state) {
      return state.players[state.game.currentPlayer].remainingTurns;
    },
  },
  // TODO: export this to seperate file
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
});
