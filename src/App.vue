<template>
  <div class="title">
    <h1 class="title__text">{{ store.title }}</h1>
  </div>

  <how-to />

  <main v-if="store.game.isActive" class="game-area" title="Play game">
    <score-board
      v-if="store.poppers.length"
      :number-poppers="store.game.numberPoppers"
      :remaining-poppers="store.game.remainingPoppers"
      :current-player="store.getCurrentPlayer"
      :turns-left="store.getTurnsLeft"
    />

    <game-board />

    <player-controls
      @newgameclick="handleNewGameClick"
      @endturnclick="handleEndTurnClick"
    />
  </main>

  <main v-else title="Play game">
    <h2 v-if="store.game.winner">{{ store.game.winner }} Wins!</h2>

    <button class="button new-game-button" @click.prevent="handleNewGameClick">New Game</button>
  </main>
</template>

<script>
import { nextTick } from "vue";
import { useStore } from "./state/store";
import { settingsStore } from "./state/settings-store";

import HowTo from "./components/how-to/how-to.vue";
import ScoreBoard from "./components/score-board/score-board.vue";
import GameBoard from "./components/game-board/game-board.vue";
import PlayerControls from "./components/player-controls/player-controls.vue"
import buttonClickAnimation from "./functions/button-click-animation/button-click-animation";

export default {
  name: "App",
  components: {
    HowTo,
    ScoreBoard,
    GameBoard,
    PlayerControls,
  },
  setup() {
    const store = useStore();
    const settings = settingsStore();

    const addPlayers = () => {
      store.addPlayer({ name: "Player One", remainingTurns: 5 });
      store.addPlayer({ name: "Player Two", remainingTurns: 5 });
    };

    const handleNewGameClick = async () => {
      store.$reset();
      addPlayers();
      store.setGameBoardSize(settings.getBoardSize);
      store.setPoppers();
      store.setGameIsActive(true);

      await nextTick();

      window.scrollTo(
        0,
        document.querySelector(".game-area").getBoundingClientRect().top
      );
    };

    const handleEndTurnClick = () => {
      store.startChangePlayer();
    };

    addPlayers();
    store.setPoppers();

    return {
      store,
      handleEndTurnClick,
      handleNewGameClick,
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

html {
  scroll-behavior: smooth;
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

.game-info {
  display: flex;
  position: absolute;
  top: 2rem;
  left: 2rem;
}

.game-settings {
  margin-top: 0;
}

.game-area {
  min-height: 100vh;
}

.new-game-button {
  margin: calc(100vh / 4) auto 0;
}
</style>
