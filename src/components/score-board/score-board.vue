<script>
export default {
  name: 'ScoreBoard',
  props: {
    numberPoppers: {
      type: Number,
      default: undefined,
    },
    remainingPoppers: {
      type: Number,
      default: undefined,
    },
    currentPlayer: {
      type: String,
      default: undefined,
    },
    turnsLeft: {
      type: Number,
      default: undefined,
    },
  },
  setup(props) {
    return { props };
  },
};
</script>

<template>
  <aside class="score-board">
    <h2 ref="currentplayer" class="score-board__title">{{ props.currentPlayer }}</h2>
    <p class="score-board__turns">Turns: {{ props.turnsLeft }}</p>
  </aside>
</template>

<style scoped lang="scss">
@import "../../scss/mixins/fonts";
.score-board {
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;

  &__title {
    margin: 0;
  }

  &__turns {
    margin: 0;
  }
}
</style>
