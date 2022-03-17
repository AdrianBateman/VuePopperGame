<template>
  <section
    class="game-board"
  >
    <Popper
      v-for="index in state.game.numberPoppers"
      :key="index"
      :id="`popper-${index}`"
      @popperclick="handelPopperClick"
    />
  </section>
</template>

<script>
import { store } from '../../state/store';
import Popper from "../popper/popper.vue";

export default {
  name: "GameBoard",
  components: {
    Popper,
  },
  data() {
    return {
      state: store.state,
    };
  },
  methods: {
    handelPopperClick() {
      store.decreaseRemainingPoppers();
    },
  },
};
</script>
