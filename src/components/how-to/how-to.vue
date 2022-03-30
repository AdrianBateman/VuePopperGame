<template>
  <aside class="how-to" title="How to play">
    <h2 class="how-to__summary">How to play</h2>
    <details class="how-to__details" open>
      <summary>Pop bubbles to win</summary>

      <ul class="how-to-list how-to__list">
        <li class="how-to-list__item">Each player gets to pop upto five times.</li>
        <li class="how-to-list__item">Players take it in turn to pop all the poppers.</li>
        <li class="how-to-list__item">The player who pops the last popper wins.</li>
      </ul>
    </details>
  </aside>
</template>

<script>
export default {
  name: "HowTo",
  setup() {
    return {

    };
  },
};
</script>

<style scoped lang="scss">
.how-to {
  padding-bottom: 1rem;
  border-bottom: 1px solid black;


  &__summary {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;

    &::first-letter {
      font-size: 1.4rem;
    }
  }
}

.how-to-list {
  margin-top: .5rem;

  &__item {
    margin: 1rem;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>
