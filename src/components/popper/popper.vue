<template>
  <button
    role="button"
    :id="props.id"
    :disabled="props.isPopped"
    class="popper"
    @click="$emit('popperclick', props.id)"
  >
    BUTTON
  </button>
</template>

<script>
export default {
  name: 'Popper',
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
.popper {
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
