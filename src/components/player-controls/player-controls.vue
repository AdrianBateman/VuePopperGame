<template>
  <div class="player-controls">
    <button
      class="button player-controls__button"
      @click.prevent="handleNewGameClick"
    >
      New Game
    </button>

    <button
      v-if="store.poppers.length"
      class="button player-controls__button"
      @click.prevent="handleEndTurnClick"
    >
      End turn
    </button>
  </div>
</template>

<script>
export default {
  name: "PlayerControls",
  emits: ["newgameclick", "endturnclick"],
  setup(_, context) {
    const handleNewGameClick = () => {
      context.emit("newgameclick");
    };

    const handleEndTurnClick = () => {
      context.emit("endturnclick");
    };

    return {
      handleNewGameClick,
      handleEndTurnClick,
    };
  },
};
</script>

<style scoped lang="scss">
.player-controls {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>