<template>
  <h1>Settings</h1>
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
</template>

<script>
import { settingsStore } from '../../state/settings-store';

export default {
  name: "GameSettings",
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
</style>
