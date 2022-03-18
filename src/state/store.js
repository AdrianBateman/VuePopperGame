import { reactive } from 'vue'
import state from './state'
import {
    setTitle,
    setNumberPoppers,
    setRemainingPoppers,
    decreaseRemainingPoppers,
    setCurrentPlayer,
    addPlayer,
} from './mutations';
import {
    startCreatePlayers,
} from './actions'

export const store = reactive({
    state,
    setTitle,
    setNumberPoppers,
    setRemainingPoppers,
    decreaseRemainingPoppers,
    setCurrentPlayer,
    addPlayer,
    startCreatePlayers,
});

if (process.env.NODE_ENV === 'development') {
    window.STORE = store;
}
