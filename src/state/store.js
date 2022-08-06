import { defineStore } from 'pinia';

const useStore = defineStore('main', {
  state: () => ({
    title: 'Wizzy Popper Game',
    game: {
      numberPoppers: 25,
      remainingPoppers: 25,
      winner: undefined,
      currentPlayer: 0,
      isActive: false,
    },
    poppers: [],
    players: [],
    settingsIsOpen: false,
    howToIsOpen: false,
    lightBoxNextPlayer: false,
  }),
  // TODO: export this to seperate file
  getters: {
    getCurrentPlayer(state) {
      return state.players[state.game.currentPlayer].name;
    },

    getTurnsLeft(state) {
      return state.players[state.game.currentPlayer].remainingTurns;
    },

    getGridColumns(state) {
      return Math.sqrt(state.game.numberPoppers);
    },

    getSettingsIsOpen(state) {
      return state.settingsIsOpen;
    },

    getHowToIsOpen(state) {
      return state.howToIsOpen;
    },

    getLightBoxNextPlayer(state) {
      return state.lightBoxNextPlayer;
    }
  },
  // TODO: export this to seperate file
  actions: {
    setPoppers() {
      for (let i = 0; i < this.game.numberPoppers; i += 1) {
        this.poppers.push({});
      }
    },

    decreaseRemainingPoppers() {
      if (this.game.remainingPoppers > 1) {
        this.game.remainingPoppers -= 1;
      } else {
        this.game.winner = this.getCurrentPlayer;
        this.game.remainingPoppers -= 1;
        this.game.isActive = false;
      }
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

      this.setLightBoxNextPlayer(true);
    },

    decrecePlayerTurn() {
      if (this.getTurnsLeft > 1) {
        this.players[this.game.currentPlayer].remainingTurns -= 1;
      } else {
        this.startChangePlayer();
      }
    },

    setPopperIsPopped(id) {
      this.poppers[id].isPopped = true;
    },

    addPlayer(data) {
      this.players.push(data);
    },

    setGameBoardSize(size) {
      this.game.numberPoppers = size;
      this.game.remainingPoppers = size;
    },

    setGameIsActive(newValue) {
      this.game.isActive = newValue;
    },

    setSettingsIsOpen(newVale) {
      this.settingsIsOpen = newVale;
    },

    setHowToIsOpen(newVale) {
      this.howToIsOpen = newVale;
    },

    setLightBoxNextPlayer(newValue) {
      this.lightBoxNextPlayer = newValue;
    }
  },
});

export default useStore;
