<template>
  <div class="title">
    <h1 class="title-text">{{ store.title }}</h1>
  </div>

  <how-to/>

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

  <light-box
    :isOpen="store.lightBoxOpenState"
    @closelightbox="handleCloseLightbox"
  >
    <h1>
      {{ store.getCurrentPlayer }},<br>
      it's your turn!
    </h1>
  </light-box>
</template>

<script>
import { ref } from 'vue';
import { useStore } from "./state/store";
import { settingsStore } from "./state/settings-store";

import HowTo from "./components/how-to/how-to.vue";
import ScoreBoard from "./components/score-board/score-board.vue";
import GameSettings from "./components/game-settings/game-settings.vue";
import GameBoard from "./components/game-board/game-board.vue";
import LightBox from "./components/light-box/light-box.vue"

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
    }

    const handleEndTurnButton = () => {
      store.startChangePlayer();
      openLightBox();
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
      openLightBox();
    }

    const handleChangeBoardSize = () => {
      store.$reset();
      store.setGameBoardSize(settings.getBoardSize);
      store.setPoppers();
      addPlayers();
      openLightBox();
    }

    const handleCloseLightbox = () => {

      store.setLightBoxOpenState(false);
    }

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

<style scoped lang="scss">
</style>
