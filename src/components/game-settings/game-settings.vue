<template>
  <div class="game-settings">
    <details class="game-settings__details">
      <summary class="game-settings__summary">Settings</summary>
      <label>
        Board Size
        <select
          name="board-size"
          @change="handleBoardSizeChange"
        >
          <option value="9">Tiny</option>
          <option value="16">Small</option>
          <option value="25" selected>Normal</option>
          <option value="36">Large</option>
        </select>
      </label>
    </details>
  </div>
</template>

<script>
import { settingsStore } from '../../state/settings-store';

export default {
  name: "GameSettings",
  emits: ['changeboardsize'],
  setup(props, context) {
    const store = settingsStore();

    const handleBoardSizeChange = ({target}) => {
      store.setBoardSize(parseInt(target.value));
      context.emit('changeboardsize')
    }

    return {
      handleBoardSizeChange,
    };
  },
};
</script>

<style scoped lang="scss">
@import '../../scss/mixins/fonts';

.game-settings {
  &__summary {
    @include titleLabel;
  }
}
</style>
