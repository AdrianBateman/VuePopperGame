<template>
  <aside class="how-to" title="How to play">
    <button
      class="button how-to__summary"
      :class="{'how-to__summary--active': isOpen}"
      @click="handleButtonClick"
    >Rules</button>

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
import GameSettings from "../game-settings/game-settings.vue";
import { useStore } from "../../state/store";
import { settingsStore } from "../../state/settings-store";

export default {
  name: "HowTo",
  components: {
    GameSettings,
  },
  setup() {
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

    const handleButtonClick = () => {
      store.setHowToIsOpen(!store.getHowToIsOpen);
    }

    return {
      store,
      handleChangeBoardSize,
      handleButtonClick,
    };
  },
  computed: {
    isOpen() {
      return this.store.getHowToIsOpen;
    },
  }
};
</script>

<style scoped lang="scss">
@use "../../scss/mixins/fonts";
@use "../../scss/variables/colors";

.how-to {
  display: flex;
  position: relative;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid colors.$borderSubtlePink;

  &__summary {
    display: flex;
    align-items: center;
    padding-left: calc(1.5rem + 30px);

    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 20px;
      height: 30px;
      left: 1.5rem;
      background-image: url("/dist/how-to.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      transition: transform .25s linear;
    }

    &--active::before {
      background-image: url("/dist/how-to-active.svg");
    }
  }
}

.how-to-list {
  position: absolute;
  max-width: calc(100vw - 2rem);
  top: calc(100% - .5rem);
  margin: 0;
  padding: 1rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  box-shadow: 2px 2px 2px hsl(0, 0%, 90%);
  background-color: white;
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
