<template>
  <div
    class="game-settings"
  >
    <button
      class="button game-settings__summary"
      :class="{'game-settings__summary--rotate': isOpen}"
      @click.stop="handleButtonClick"
    >
      Settings
    </button>
    <Transition>
      <div
        v-if="isOpen"
        class="game-settings__details"
      >
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
import { useStore } from "../../state/store";
import { settingsStore } from "../../state/settings-store";

export default {
  name: "GameSettings",
  emits: ["changeboardsize"],
  setup(_, context) {
    const store = useStore();
    const settings = settingsStore();

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
      settings.setBoardSize(parseInt(target.value));
      context.emit("changeboardsize");
    };

    const handlePopperColorChange = ({ target }) => {
      settings.setButtonColor(target.value);
    };

    const handleButtonClick = () => {
      store.setSettingsIsOpen(!store.getSettingsIsOpen);
    };

    return {
      store,
      boardSizes,
      popperColors,
      handleBoardSizeChange,
      handlePopperColorChange,
      handleButtonClick,
    };
  },
  computed: {
    isOpen() {
      return this.store.getSettingsIsOpen;
    },
  }
};
</script>

<style scoped lang="scss">
@use "../../scss/mixins/fonts";
@use "../../scss/mixins/buttons";
@use "../../scss/variables/colors";

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
    transform-origin: top;
    left: calc(-50vw - 2rem);
    width: calc(100vw - 1rem);
  }

  &__summary {
    display: flex;
    align-items: center;

    &::before {
      content: "";
      display: inline-block;
      width: 30px;
      height: 30px;
      background-image: url("/dist/cog.svg");
      background-repeat: no-repeat;
      background-size: cover;
      margin: 0 1ch 0 0;
      transition: transform .25s linear;
    }

    &--rotate::before {
      transform: rotate(90deg);
    }
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
    background-color: colors.$borderSubtlePink;
    border-radius: 0.25rem;
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
