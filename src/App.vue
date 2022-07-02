<template>
  <div class="title">
    <h1 class="title__text">{{ store.title }}</h1>
  </div>

  <how-to />

  <aside v-if="store.game.isActive" class="game-info">
    <score-board
      v-if="store.poppers.length"
      :number-poppers="store.game.numberPoppers"
      :remaining-poppers="store.game.remainingPoppers"
      :current-player="store.getCurrentPlayer"
      :turns-left="store.getTurnsLeft"
    />
  </aside>

  <main v-if="store.game.isActive" class="game-area" title="Play game">
    <nav class="navigation">
      <button
        class="button button--small navigation__new-game"
        @click.prevent="handleNewGameClick"
      >
        New Game
      </button>

      <button
        v-if="store.poppers.length"
        class="button button--small navigation__new-game"
        @click.prevent="handleEndTurnButton"
      >
        End turn
      </button>
    </nav>

    <game-board />
  </main>

  <main v-else title="Play game">
    <h2 v-if="store.game.winner">{{ store.game.winner }} Wins!</h2>

    <button class="button" @click.prevent="handleNewGameClick">New Game</button>
  </main>
</template>

<script>
import { useStore } from "./state/store";
import { settingsStore } from "./state/settings-store";

import HowTo from "./components/how-to/how-to.vue";
import ScoreBoard from "./components/score-board/score-board.vue";
import GameBoard from "./components/game-board/game-board.vue";

export default {
  name: "App",
  components: {
    HowTo,
    ScoreBoard,
    GameBoard,
  },
  setup() {
    const store = useStore();
    const settings = settingsStore();

    const handleEndTurnButton = () => {
      store.startChangePlayer();
    };

    const addPlayers = () => {
      store.addPlayer({ name: "Player One", remainingTurns: 5 });
      store.addPlayer({ name: "Player Two", remainingTurns: 5 });
    };

    const handleNewGameClick = () => {
      store.$reset();
      addPlayers();
      store.setGameBoardSize(settings.getBoardSize);
      store.setPoppers();
      store.setGameIsActive(true);
    };

    const handleChangeBoardSize = () => {
      store.$reset();
      store.setGameBoardSize(settings.getBoardSize);
      store.setPoppers();
      addPlayers();
      store.setGameIsActive(true);
    };

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

<style lang="scss">
@import "./scss/variables/colors";
@import "./scss/base/button.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
* + * {
  margin-top: 1.5rem;
}

body {
  font-size: 16px;
  background-color: $backgroundPink;
  color: $textColorDark;
}

#app {
  width: calc(100vw - 2rem);
  margin: 0 auto;
  overflow-x: hidden;
  min-height: 90vh;
}

.title {
  &__text {
    text-align: center;
  }
}

.navigation {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 1rem;
  width: 100%;

  button {
    margin: 0 2rem
  }
}

.game-info {
  display: flex;
}

.score-board,
.game-settings {
  width: 50%;
}

.game-settings {
  margin-top: 0;
}

.game-area {
  display: grid;
  min-height: 100vh;
  place-items: center;
  position: relative;
}
</style>
