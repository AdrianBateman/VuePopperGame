import { reactive } from 'vue';
import state from './state';

import {
  setTitle,
  setNumberPoppers,
  setRemainingPoppers,
  decreaseRemainingPoppers,
  setCurrentPlayer,
  addPlayer,
  decreasePlayerTurn,
  setPlayerTurn,
  setWinner,
  addPopper,
  setPopperIsPopped,
} from './mutations';

import {
  startCreatePlayers,
  startDecrecePlayerTurn,
  startChangePlayer,
  startNewGame,
} from './actions';

export const store = reactive({
  state,

  // Mutations
  setTitle,
  setNumberPoppers,
  setRemainingPoppers,
  decreaseRemainingPoppers,
  setCurrentPlayer,
  addPlayer,
  decreasePlayerTurn,
  setPlayerTurn,
  setWinner,
  addPopper,
  setPopperIsPopped,

  // Actions
  startCreatePlayers,
  startDecrecePlayerTurn,
  startChangePlayer,
  startNewGame,
});

if (process.env.NODE_ENV === 'development') {
  window.STORE = store;
}
