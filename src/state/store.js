import { reactive } from 'vue'
import state from './state'

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
} from './mutations';

import {
    startCreatePlayers,
    startDecrecePlayerTurn,
    startChangePlayer,
} from './actions'

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

    // Actions
    startCreatePlayers,
    startDecrecePlayerTurn,
    startChangePlayer,
});

if (process.env.NODE_ENV === 'development') {
    window.STORE = store;
}
