import { reactive } from 'vue'
import state from './state'
import {
    setTitle,
    setNumberPoppers,
    decreaseRemainingPoppers,
} from './mutations';

export const store = reactive({
    state,
    setTitle,
    setNumberPoppers,
    decreaseRemainingPoppers,
});

if (process.env.NODE_ENV === 'development') {
    window.STORE = store;
}
