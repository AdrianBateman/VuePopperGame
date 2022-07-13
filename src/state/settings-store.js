import { defineStore } from 'pinia'

export const settingsStore = defineStore('settings', {
  state: () => {
    return {
      boardSize: (window.innerWidth < 400)
        ? 16
        : 25,
      buttonColor: 'pink',
    }
  },

  getters: {
    getBoardSize(state) {
      return state.boardSize;
    },
    getButtonColor(state) {
      return state.buttonColor;
    },
  },

  actions: {
    setBoardSize(newSize) {
      this.boardSize = newSize;
    },
    setButtonColor(newColor) {
      this.buttonColor = newColor;
    }
  },
});
