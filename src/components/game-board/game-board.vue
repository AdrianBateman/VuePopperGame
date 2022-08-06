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
      Turn over!<br>
      {{ store.getCurrentPlayer }}, it's your turn!
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
    }
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
</style>
