<template>
  <div class="game-settings">
    <button class="game-settings__summary" @click="isOpen = !isOpen">
      Settings
    </button>
    <Transition>
      <div v-if="isOpen" class="game-settings__details">
        <h2>Popper Board size</h2>

        <div class="game-settings__fieldset">
          <label v-for="size in boardSizes" class="game-settings__radio-label">
            {{ size.label }}

            <input
              class="game-settings__radio"
              type="radio"
              name="board-size"
              :value="size.value"
              :checked="size.selected"
              @change="handleBoardSizeChange"
            />
          </label>
        </div>

        <h2>Popper colour</h2>

        <div class="game-settings__fieldset">
          <label
            v-for="color in popperColors"
            class="game-settings__radio-label"
            :key="color"
          >
            {{ color.value }}
            <input
              class="game-settings__radio"
              type="radio"
              name="popper-color"
              :value="color.value"
              :checked="color.selected"
              @change="handlePopperColorChange"
            />
          </label>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import { ref } from "vue";
import { settingsStore } from "../../state/settings-store";

export default {
  name: "GameSettings",
  emits: ["changeboardsize"],
  setup(_, context) {
    const isOpen = ref(0);
    const store = settingsStore();

    const boardSizes = [
      {
        label: "tiny",
        value: 9,
      },
      {
        label: "small",
        value: 16,
      },
      {
        label: "normal",
        value: 25,
        selected: true,
      },
      {
        label: "large",
        value: 36,
      },
    ];

    const popperColors = [
      {
        value: "pink",
        selected: true,
      },
      {
        value: "blue",
      },
      {
        value: "green",
      },
      {
        value: "red",
      },
      {
        value: "orange",
      },
    ];

    const handleBoardSizeChange = ({ target }) => {
      store.setBoardSize(parseInt(target.value));
      context.emit("changeboardsize");
    };

    const handlePopperColorChange = ({ target }) => {
      store.setButtonColor(target.value);
    };

    return {
      isOpen,
      boardSizes,
      popperColors,
      handleBoardSizeChange,
      handlePopperColorChange,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../scss/mixins/fonts";
@import "../../scss/variables/colors";

.game-settings {
  position: relative;

  &__details {
    position: absolute;
    min-width: 50vw;
    margin-top: .5rem;
    padding: 1rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background-color: white;
    box-shadow: 2px 2px 2px hsl(0, 0%, 90%);
    z-index: 10;
  }

  &__summary {
    @include titleLabel;
  }

  &__legend {
    font-size: 1.2rem;
    padding: 0.5rem;
  }

  &__fieldset {
    padding: 0.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 1rem;
  }

  &__radio-label {
    margin: 0;
    padding: 0.25rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    text-align: center;
    background-color: $borderSubtlePink;
    border-radius: 0.25rem;
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
