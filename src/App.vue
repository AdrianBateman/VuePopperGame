<template>
  <div>
    <div class="title">
      <h1 class="title-text">{{ state.title }}</h1>
    </div>
    <div v-if="!state.game.winner">
      <score-board
        :number-poppers="state.game.numberPoppers"
        :remaining-poppers="state.game.remainingPoppers"
        :current-player="state.game.currentPlayer"
        :turns-left="getTurnsLeft"
      />
      <nav>
        <button class="end-turn-button" @click.prevent="handleEndTurnButton">
          End turn
        </button>
      </nav>
    </div>
    <div v-else>
      <h2>{{ state.game.winner }} Wins!</h2>
      <button
        @click.prevent="handleNewGameClick"
      >New Game</button>
    </div>
    <game-board />
  </div>
</template>

<script>
import { store } from './state/store';
import ScoreBoard from './components/score-board/score-board.vue';
import GameBoard from './components/game-board/game-board.vue';

export default {
  name: 'App',
  components: {
    ScoreBoard,
    GameBoard,
  },
  created() {
    store.startNewGame(25);
  },
  data() {
    return {
      state: store.state,
      newGameLightbox: true,
    };
  },
  methods: {
    handleEndTurnButton() {
      store.setPlayerTurn({
        playerId: this.state.game.currentPlayer,
        turns: 5,
      });

      store.startChangePlayer();
    },
    handleNewGameClick() {
      store.startNewGame(9);
    },
  },
  computed: {
    getTurnsLeft() {
      return this.state.players[this.state.game.currentPlayer].remainingTurns;
    },
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
