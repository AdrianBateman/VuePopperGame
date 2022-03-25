<template>
  <div class="title">
    <h1 class="title-text">{{ store.title }}</h1>
  </div>
  <section class="how-to">
    <h2 class="how-to__title">How to play</h2>
    <ul class="how-to__description">
      <li>Each player gets to pop upto five times.</li>
      <li>Players take it in turn to pop all the poppers.</li>
      <li>The player who pops the last popper wins.</li>
    </ul>
  </section>

  <!-- <div v-if="!store.game.winner"> -->
  <score-board
    v-if="store.poppers.length"
    :number-poppers="store.game.numberPoppers"
    :remaining-poppers="store.game.remainingPoppers"
    :current-player="store.getCurrentPlayer"
    :turns-left="store.getTurnsLeft"
  />
  <nav>
    <button
      v-if="store.poppers.length"
      class="end-turn-button"
      @click.prevent="handleEndTurnButton"
    >
      End turn
    </button>
  </nav>
  <!-- </div> -->
  <!-- <div v-else>
    <h2>{{ store.game.winner }} Wins!</h2>
    <button @click.prevent="handleNewGameClick">New Game</button>
  </div> -->
  <game-board/>
</template>

<script>
import { useStore } from "./state/store";
import ScoreBoard from "./components/score-board/score-board.vue";
import GameBoard from "./components/game-board/game-board.vue";

export default {
  name: "App",
  components: {
    ScoreBoard,
    GameBoard,
  },
  setup() {
    const store = useStore();

    store.setPoppers();

    const handleEndTurnButton = () => {
      store.startChangePlayer();
    };

    return {
      store,
      handleEndTurnButton,
    };
  },
  // created() {
  //   store.startCreatePlayers();
  // },
  // data() {
  //   return {
  //     store: store.store,
  //     newGameLightbox: true,
  //   };
  // },
  // methods: {
    //   handleEndTurnButton() {
    //     store.setPlayerTurn({
    //       playerId: this.store.game.currentPlayer,
    //       turns: 5,
    //     });

    //     store.startChangePlayer();
    //   },

  // },
  // computed: {
  //   getPoppersLength() {
  //     return this.store.poppers.length;
  //   },
  //   getTurnsLeft() {
  //     return this.store.players[this.store.game.currentPlayer].remainingTurns;
  //   },
  //   getCurrentPlayer() {
  //     return this.store.players[this.store.game.currentPlayer].name;
  //   },
  // },
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
