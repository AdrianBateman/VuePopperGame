<template>
  <div>
    <div class="title">
      <h1 class="title-text">{{ state.title }}</h1>
    </div>
    <score-board
      :number-poppers="state.game.numberPoppers"
      :remaining-poppers="state.game.remainingPoppers"
    />
    <game-board />
  </div>
</template>

<script>
import { store } from "./state/store";
import ScoreBoard from "./components/score-board/score-board.vue";
import GameBoard from "./components/game-board/game-board.vue";

export default {
  name: "App",
  components: {
    ScoreBoard,
    GameBoard,
  },
  created() {
    store.startCreatePlayers();
  },
  data() {
    return {
      state: store.state,
    };
  },
};
</script>

<style scoped lang="scss">
.title {
  padding: 2rem;

  &-text {
    font-size: 1.2rem;
    margin: 0;
  }
}
</style>