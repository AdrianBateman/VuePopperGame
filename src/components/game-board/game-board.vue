<template>
  <section
    v-if="store.poppers.length"
    class="game-board"
    :style="gameBoardStyle"
  >
    <popper-button
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
import PopperButton from '../popper-button/popper-button.vue';

export default {
  name: 'GameBoard',
  components: {
    PopperButton,
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
  computed: {
    gameBoardStyle() {
      return {
        gridTemplateColumns: `repeat(${Math.sqrt(this.store.game.numberPoppers)},max-content)`,
      };
    }
  }
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