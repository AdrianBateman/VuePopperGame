<script>
export default {
  name: "ScoreBoard",
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
    <h2 class="score-board__title">{{ props.currentPlayer }}</h2>
    <p class="score-board__turns">Turns: {{ props.turnsLeft }}</p>
  </aside>
</template>

<style scoped lang="scss">
@import "../../scss/mixins/fonts";
.score-board {
  position: absolute;
  top: 2rem;
  left: 2rem;

  &__title {
    margin: 0;
  }

  &__turns {
    margin: 0;
  }
}
</style>
