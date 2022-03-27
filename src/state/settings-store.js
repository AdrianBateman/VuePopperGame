import { defineStore } from 'pinia'

export const settingsStore = defineStore('settings', {
  state: () => {
    return {
      boardSize: 25,
    }
  },

  getters: {
    getBoardSize(state) {
      return state.boardSize;
    }
  },

  actions: {
    setBoardSize(newSize) {
      this.boardSize = newSize;
    },
  },
});
