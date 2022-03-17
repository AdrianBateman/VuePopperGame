<template>
  <section class="score-board">
    <h2>Score</h2>
    <p>Number of Poppers: {{ numberPoppers }}</p>
    <p>Remaining Poppers: {{ remainingPoppers }}</p>
  </section>
</template>

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
      }
  }
};
</script>

<style scoped lang="scss">
</style>