<template>
  <button
    role="button"
    :id="id"
    :disabled="isPopped"
    class="popper"
    @click="handleClickEvent"
  >
    BUTTON
  </button>
</template>

<script>
export default {
  name: 'Popper',
  props: {
    id: {
      type: String,
      default: undefined,
    },
    isPopped: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    handleClickEvent() {
      this.$emit('popperclick', this.id);
    },
  },
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
