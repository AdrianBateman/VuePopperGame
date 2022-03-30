<template>
  <div class="title">
    <h1 class="title__text">{{ store.title }}</h1>
  </div>

  <how-to />

  <main v-if="store.game.isActive"  title="Play game">
    <score-board
      v-if="store.poppers.length"
      :number-poppers="store.game.numberPoppers"
      :remaining-poppers="store.game.remainingPoppers"
      :current-player="store.getCurrentPlayer"
      :turns-left="store.getTurnsLeft"
    />

    <nav>
      <button @click.prevent="handleNewGameClick">New Game</button>

      <button
        v-if="store.poppers.length"
        class="end-turn-button"
        @click.prevent="handleEndTurnButton"
      >
        End turn
      </button>
    </nav>

    <game-settings @changeboardsize="handleChangeBoardSize" />

    <game-board />
  </main>

  <main v-else title="Play game">
    <h2 v-if="store.game.winner">{{ store.game.winner }} Wins!</h2>

    <button class="button" @click.prevent="handleNewGameClick">New Game</button>
  </main>

  <light-box
    :isOpen="store.lightBoxOpenState"
    @closelightbox="handleCloseLightbox"
  >
    <h1>
      {{ store.getCurrentPlayer }},<br />
      it's your turn!
    </h1>
  </light-box>
</template>

<script>
import { useStore } from "./state/store";
import { settingsStore } from "./state/settings-store";

import HowTo from "./components/how-to/how-to.vue";
import ScoreBoard from "./components/score-board/score-board.vue";
import GameSettings from "./components/game-settings/game-settings.vue";
import GameBoard from "./components/game-board/game-board.vue";
import LightBox from "./components/light-box/light-box.vue";

export default {
  name: "App",
  components: {
    HowTo,
    ScoreBoard,
    GameBoard,
    GameSettings,
    LightBox,
  },
  setup() {
    const store = useStore();
    const settings = settingsStore();

    const openLightBox = () => {
      store.setLightBoxOpenState(true);
    };

    const handleEndTurnButton = () => {
      store.startChangePlayer();
      openLightBox();
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
      openLightBox();
    };

    const handleChangeBoardSize = () => {
      store.$reset();
      store.setGameBoardSize(settings.getBoardSize);
      store.setPoppers();
      addPlayers();
      store.setGameIsActive(true);
      openLightBox();
    };

    const handleCloseLightbox = () => {
      store.setLightBoxOpenState(false);
    };

    addPlayers();
    store.setPoppers();

    return {
      store,
      handleEndTurnButton,
      handleNewGameClick,
      handleChangeBoardSize,
      handleCloseLightbox,
    };
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
* + * {
  margin-top: 1.5rem;
}

body {
  font-size: 16px;
  background-color: hsl(315, 100%, 98%);
  color: hsl(0, 0%, 5%);
}

#app {
  width: calc(100vw - 2rem);
  margin: 0 auto;
  overflow-x: hidden;
}

.title {
  &__text {
    text-align: center;
  }
}

.button {
  padding: 1rem 2rem;
  border-radius: 2rem;
  min-width: 200px;
  background-color: hsl(310, 100%, 56%);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 1.1rem;
  border: none;
}
</style>
