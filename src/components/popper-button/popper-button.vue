<template>
  <button
    role="button"
    :id="props.id"
    :disabled="props.isPopped"
    class="popper-button"
    @click="$emit('popperclick', props.id)"
  >
    BUTTON
  </button>
</template>

<script>
export default {
  name: 'PopperButton',
  props: {
    id: {
      type: Number,
      default: undefined,
    },
    isPopped: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    return {
      props,
    };
  }
};
</script>

<style scoped lang="scss">
.popper-button {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  font-size: 0px;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
}
</style>
