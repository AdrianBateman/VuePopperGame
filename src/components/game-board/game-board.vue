<template>
  <section
    v-if="store.poppers.length"
    class="game-board"
    :style="gameBoardStyle"
  >
    <popper-button
      v-for="(index, key) in store.poppers"
      :key="key"
      :id="key"
      :isPopped="index.isPopped"
      @popperclick="handelPopperClick"
    />
    <LightBox
      :is-open="showPlayerLightBox"
      @closelightbox="handleCloseLightBox"
    >
      <h1 class="turn-over__title">
        Turn over!
      </h1>
      <p class="turn-over__message">
        <em>{{ store.getCurrentPlayer }}</em>,<br>it's your turn!
      </p>
    </LightBox>
  </section>
</template>

<script>
import useStore from '../../state/store';
import PopperButton from '../popper-button/popper-button.vue';
import LightBox from '../light-box/light-box.vue';

export default {
  name: 'GameBoard',
  components: {
    PopperButton,
    LightBox,
  },
  setup() {
    const store = useStore();

    const handelPopperClick = (id) => {
      store.decreaseRemainingPoppers();
      store.decrecePlayerTurn();
      store.setPopperIsPopped(id);
    };

    const handleCloseLightBox = () => {
      store.setLightBoxNextPlayer(false);
    };

    return {
      store,
      handelPopperClick,
      handleCloseLightBox,
    };
  },
  computed: {
    gameBoardStyle() {
      return {
        width: `${this.store.getGridColumns * (66)}px`,
      };
    },
    showPlayerLightBox() {
      return this.store.getLightBoxNextPlayer;
    },
  },
};
</script>

<style scoped lang="scss">
.game-board {
  display: flex;
  flex-wrap: wrap;
  max-width: calc(100vw - 2rem);
  margin: 2rem auto 0;
  justify-content: space-between;
}

.turn-over {
  &__title {
    margin: 0;
    text-align: center;
  }

  &__message {
    margin: 0 0 1rem;
    text-align: center;
    line-height: 1.5;

    em {
      font-weight: 900;
      font-size: 2rem;
    }
  }
}
</style>
