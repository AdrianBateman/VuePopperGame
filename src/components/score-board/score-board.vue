<template>
  <section class="score-board">
    <h2>Score</h2>
    <table>
      <tr>
        <td>Number of Poppers</td>
        <td>{{ numberPoppers }}</td>
      </tr>
      <tr>
        <td>Remaining Poppers</td>
        <td>{{ remainingPoppers }}</td>
      </tr>
      <tr>
        <td>Current Player</td>
        <td>{{ currentPlayer }}</td>
      </tr>
      <tr>
        <td>Turns left</td>
        <td>{{ turnsLeft }}</td>
      </tr>
    </table>
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
    },
    currentPlayer: {
      type: Number,
      default: undefined,
    },
    turnsLeft: {
      type: Number,
      default: undefined,
    },
  },
};
</script>

<style scoped lang="scss">
</style>
