<template>
  <aside class="how-to" title="How to play">
    <button class="how-to__summary" @click="isOpen = !isOpen">Rules</button>

    <Transition>
      <ul v-if="isOpen" class="how-to-list how-to__list">
        <li class="how-to-list__item">
          Each player gets to pop upto five times.
        </li>
        <li class="how-to-list__item">
          Players take it in turn to pop all the poppers.
        </li>
        <li class="how-to-list__item">
          The player who pops the last popper wins.
        </li>
      </ul>
    </Transition>

     <game-settings @changeboardsize="handleChangeBoardSize" />
  </aside>
</template>

<script>
import { ref } from "vue";
import GameSettings from "../game-settings/game-settings.vue";

export default {
  name: "HowTo",
  components: {
    GameSettings,
  },
  setup() {
    const isOpen = ref(0);

    return {
      isOpen,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../scss/mixins/fonts";
@import "../../scss/variables/colors";

.how-to {
  padding-bottom: 1rem;
  border-bottom: 1px solid $borderSubtlePink;

  &__summary {
    @include titleLabel;
  }
}

.how-to-list {
  margin-top: 0.5rem;
  position: absolute;
  background-color: white;
  padding: 1rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  box-shadow: 2px 2px 2px hsl(0, 0%, 90%);
  z-index: 10;

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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
