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
  <section class="score-board">
    <h2>Info</h2>
    <table>
      <caption>
        Current Player and remaining pops this turn.
      </caption>
      <tr>
        <th scope="row">Current Player</th>
        <td>{{ props.currentPlayer }}</td>
      </tr>

      <tr>
        <th scope="row">Turns left</th>
        <td>{{ props.turnsLeft }}</td>
      </tr>
    </table>
  </section>
</template>

<style scoped lang="scss">
</style>
