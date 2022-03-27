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
        v-if="store.poppers.length"
        class="end-turn-button"
        @click.prevent="handleEndTurnButton"
      >
        End turn
      </button>
    </nav>

    <game-settings
      @changeboardsize="handleChangeBoardSize"
    />

    <game-board/>
  </section>

  <section v-else>
    <h2>{{ store.game.winner }} Wins!</h2>

    <button @click.prevent="handleNewGameClick">New Game</button>
  </section>
</template>

<script>
import { useStore } from "./state/store";
import { settingsStore } from "./state/settings-store";
import ScoreBoard from "./components/score-board/score-board.vue";
import GameBoard from "./components/game-board/game-board.vue";
import GameSettings from "./components/game-settings/game-settings.vue";

export default {
  name: "App",
  components: {
    ScoreBoard,
    GameBoard,
    GameSettings,
  },
  setup() {
    const store = useStore();
    const settings = settingsStore();

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
      store.setGameBoardSize(settings.getBoardSize);
      store.setPoppers();
    }

    const handleChangeBoardSize = () => {
      store.$reset();
      store.setGameBoardSize(settings.getBoardSize);
      store.setPoppers();
      addPlayers();
    }

    addPlayers();
    store.setPoppers();

    return {
      store,
      handleEndTurnButton,
      handleNewGameClick,
      handleChangeBoardSize,
    };
  },
};
</script>

<style scoped lang="scss">
</style>
