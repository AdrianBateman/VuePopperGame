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
@import '../../scss/variables/colors';

.popper-button {
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: .5rem;
  border-radius: 25px;
  font-size: 0px;
  border-width: 0;
  background: radial-gradient(
      circle,
      rgba(255,179,242,1) 50%,
      rgba(255,26,217,1) 80%
      );;
  cursor: pointer;
  outline-style: solid;
  outline-width: 0;
  outline-color: $brightPinkAction;

  &:disabled {
    cursor: default;
    background: radial-gradient(
      circle,
      rgba(255,26,217,1) 50%,
      rgba(255,179,242,1) 80%
      );
    animation-name: button-pop;
    animation-duration: 50ms;
  }
}

@keyframes button-pop {
  from {
    outline-width: 0;
  }

  50% {
    outline-width: 2px;
  }

  to {
    outline-width: 0;
  }
}
</style>
