<template>
  <div class="player-controls">
    <button
      class="button player-controls__button"
      @click.prevent="playerControlsGameClick"
    >
      New Game
    </button>

    <button
      v-if="store.poppers.length"
      class="button player-controls__button"
      @click.prevent="playerControlsTurnClick"
    >
      End turn
    </button>
  </div>
</template>

<script>
import { useStore } from "../../state/store";

export default {
  name: "PlayerControls",
  emits: ["newgameclick", "endturnclick"],
  setup(_, context) {
    const store = useStore();

    const playerControlsGameClick = () => {
      context.emit("newgameclick");
    };

    const playerControlsTurnClick = () => {
      context.emit("endturnclick");
    };

    return {
      store,
      playerControlsGameClick,
      playerControlsTurnClick,
    };
  },
};
</script>

<style scoped lang="scss">
.player-controls {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 4rem 0;

  &__button {
    margin: 0;
    padding: 1rem 1.5rem;
  }
}
</style>