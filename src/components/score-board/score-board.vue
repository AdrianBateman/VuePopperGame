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
    <p class="score-board__table-cell">{{ props.currentPlayer }}</p>
    <p class="score-board__table-cell">{{ props.turnsLeft }}</p>
  </aside>
</template>

<style scoped lang="scss">
@import "../../scss/mixins/fonts";
.score-board {
  &__summary {
    @include titleLabel;
  }

  &__table {
    margin-top: 0.5rem;
  }

  &__table-header {
    text-align: left;
  }

  &__table-cell {
    padding: 0 0.5rem 0.5rem 0;
  }
}
</style>
