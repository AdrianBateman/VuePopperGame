<template>
  <section
    v-if="store.poppers.length"
    class="game-board"
  >
    <Popper
      v-for="(index, key) in store.poppers"
      :key="key"
      :id="key"
      :isPopped="index.isPopped"
      @popperclick="handelPopperClick"
    />
  </section>
</template>

<script>
import { useStore } from "../../state/store";
import Popper from '../popper/popper.vue';

export default {
  name: 'GameBoard',
  components: {
    Popper,
  },
  setup() {
    const store = useStore();

    const handelPopperClick = (id) => {
      store.decreaseRemainingPoppers();
      store.decrecePlayerTurn();
      store.setPopperIsPopped(id);
    };

    return {
      store,
      handelPopperClick,
    };
  },
  // TODO: implement computed style
  // computed: {
  //   gameBoardStyle() {
  //     return {
  //       gridTemplateColumns: `repeat(${Math.sqrt(this.state.game.numberPoppers)},max-content)`,
  //     };
  //   },
  // },
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
  grid-template-columns: repeat(5, auto);
}
</style>