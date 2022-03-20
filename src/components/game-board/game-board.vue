<template>
  <section
    class="game-board"
    :style="gameBoardStyle"
  >
    <Popper
      v-for="(index, key) in state.poppers"
      :key="key"
      :id="key"
      :isPopped="index.isPopped"
      @popperclick="handelPopperClick"
    />
  </section>
</template>

<script>
import { store } from '../../state/store';
import Popper from '../popper/popper.vue';

export default {
  name: 'GameBoard',
  components: {
    Popper,
  },
  data() {
    return {
      state: store.state,
    };
  },
  methods: {
    handelPopperClick(id) {
      store.decreaseRemainingPoppers();
      store.startDecrecePlayerTurn(this.state.game.currentPlayer);
      store.setPopperIsPopped({id, isPoppedValue: true});
    },
  },
  computed: {
    gameBoardStyle() {
      return {
        gridTemplateColumns: `repeat(${Math.sqrt(this.state.game.numberPoppers)},max-content)`,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.game-board {
  display: grid;
  width: fit-content;
  margin: 0 auto;
  grid-gap: 25px;
  padding: 25px;
  border: 2px solid black;
}
</style>