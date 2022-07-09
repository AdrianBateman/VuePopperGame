<template>
  <aside class="how-to" title="How to play">
    <button
      class="how-to__summary"
      :class="{'how-to__summary--active': isOpen}"
      @click="isOpen = !isOpen"
    >how to play?</button>

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
import { useStore } from "../../state/store";
import { settingsStore } from "../../state/settings-store";

export default {
  name: "HowTo",
  components: {
    GameSettings,
  },
  setup() {
    const isOpen = ref(0);
    const store = useStore();
    const settings = settingsStore();

    const addPlayers = () => {
      store.addPlayer({ name: "Player One", remainingTurns: 5 });
      store.addPlayer({ name: "Player Two", remainingTurns: 5 });
    };

    const handleChangeBoardSize = () => {
      store.$reset();
      store.setGameBoardSize(settings.getBoardSize);
      store.setPoppers();
      addPlayers();
      store.setGameIsActive(true);
    };

    return {
      isOpen,
      store,
      handleChangeBoardSize,
    };
  },
};
</script>

<style scoped lang="scss">
@use "../../scss/mixins/fonts";
@use "../../scss/mixins/buttons";
@use "../../scss/variables/colors";

.how-to {
  padding-bottom: 1rem;
  border-bottom: 1px solid colors.$borderSubtlePink;
  display: flex;

  &__summary {
    @include fonts.titleLabel;
    @include buttons.defaultButton;

    display: flex;
    align-items: center;
    padding: .5ch 1rem;
    margin-right: 2rem;


    &::before {
      content: "";
      display: inline-block;
      width: 30px;
      height: 30px;
      background-image: url("/dist/how-to.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      margin: 0 1ch 0 0;
      transition: transform .25s linear;
    }

    &--active::before {
      background-image: url("/dist/how-to-active.svg");
    }
  }
}

.how-to-list {
  margin-top: 3rem;
  position: absolute;
  background-color: white;
  padding: 1rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  box-shadow: 2px 2px 2px hsl(0, 0%, 90%);
  z-index: 10;
  transform-origin: top;

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
  transition: transform 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  transform: scaleY(0);
}
</style>
