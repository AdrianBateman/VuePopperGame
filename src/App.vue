<template>
  <div class="title">
    <h1 class="title-text">{{ store.title }}</h1>
  </div>

  <section class="how-to">
    <details>
      <summary class="how-to__title">
        How to play
      </summary>

      <ul class="how-to__description">
        <li>Each player gets to pop upto five times.</li>
        <li>Players take it in turn to pop all the poppers.</li>
        <li>The player who pops the last popper wins.</li>
      </ul>
    </details>
  </section>

  <section v-if="!store.game.winner">
    <score-board
      v-if="store.poppers.length"
      :number-poppers="store.game.numberPoppers"
      :remaining-poppers="store.game.remainingPoppers"
      :current-player="store.getCurrentPlayer"
      :turns-left="store.getTurnsLeft"
    />

    <nav>
      <button
        @click.prevent="handleNewGameClick"
      >New Game</button>

      <button
        @click="changeBoardSize(3)"
      >3 x 3</button>
      <button
        @click="changeBoardSize(4)"
      >4 x 4</button>
      <button
        @click="changeBoardSize(5)"
      >5 x 5</button>
      <button
        @click="changeBoardSize(6)"
      >6 x 6</button>
      <button
        @click="changeBoardSize(7)"
      >7 x 7</button>

      <button
        v-if="store.poppers.length"
        class="end-turn-button"
        @click.prevent="handleEndTurnButton"
      >
        End turn
      </button>
    </nav>

    <game-board/>
  </section>

  <section v-else>
    <h2>{{ store.game.winner }} Wins!</h2>

    <button @click.prevent="handleNewGameClick">New Game</button>
  </section>
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

    const handleEndTurnButton = () => {
      store.startChangePlayer();
    };

    const addPlayers = () => {
      store.addPlayer({name: 'Player One', remainingTurns: 5});
      store.addPlayer({name: 'Player Two', remainingTurns: 5});
    }

    const handleNewGameClick = () => {
      store.$reset();
      addPlayers();
      store.setPoppers();
    }

    const changeBoardSize = (size) => {
      store.$reset();
      store.setGameBoardSize(size * size);
      addPlayers();
      store.setPoppers();
    }

    addPlayers();
    store.setPoppers();

    return {
      store,
      handleEndTurnButton,
      handleNewGameClick,
      changeBoardSize,
    };
  },
};
</script>

<style scoped lang="scss">
</style>
