<template>
  <div class="game-settings">
    <button
      class="button game-settings__button"
      :class="{
        'game-settings__button--rotate': isOpen,
      }"
      @click.stop="handleButtonClick"
    >
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
              :checked="settings.getBoardSize === size.value"
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
            {{ color }}
            <input
              class="game-settings__radio"
              type="radio"
              name="popper-color"
              :value="color"
              :checked="settings.getButtonColor === color"
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
import buttonClickAnimation from "../../functions/button-click-animation/button-click-animation";

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
        label: "mobile",
        value: 16,
      },
      {
        label: "normal",
        value: 25,
      },
      {
        label: "large",
        value: 36,
      },
    ];

    const popperColors = ["pink", "blue", "green", "red", "orange"];

    const handleBoardSizeChange = ({ target }) => {
      settings.setBoardSize(parseInt(target.value));
      context.emit("changeboardsize");
    };

    const handlePopperColorChange = ({ target }) => {
      settings.setButtonColor(target.value);
    };

    const handleButtonClick = ({ target }) => {
      store.setSettingsIsOpen(!store.getSettingsIsOpen);

      buttonClickAnimation(target);
    };

    return {
      store,
      settings,
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
  },
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
    top: calc(100% + 0.5rem);
    right: 0;
    width: calc(100vw - 2rem);
    max-width: calc(500px - 1rem);
    margin: 0;
    padding: 1rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background-color: white;
    box-shadow: 2px 2px 2px hsl(0, 0%, 90%);
    z-index: 10;
    transform-origin: top;
  }

  &__button {
    display: flex;
    align-items: center;
    padding-left: calc(1.5rem + 40px);
    animation-duration: 100ms;

    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      width: 30px;
      height: 30px;
      left: 1.5rem;
      background-image: url("/dist/cog.svg");
      background-repeat: no-repeat;
      background-size: cover;
      margin: 0 1ch 0 0;
      transition: transform 0.25s linear;
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
