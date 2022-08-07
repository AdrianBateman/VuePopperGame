<template>
  <section
    v-if="isOpen"
    class="light-box"
    @click.prevent="handleCloseButtonClick"
  >
    <div class="light-box-content">
      <slot />
      <button
        class="button ligth-box-content__close-button"
        @click.prevent="handleCloseButtonClick"
      >Close</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LightBox',
  emits: ['closelightbox'],
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const handleCloseButtonClick = () => {
      emit('closelightbox');
    };

    return { props, handleCloseButtonClick };
  },
};
</script>

<style scoped lang="scss">
.light-box {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
}

.light-box-content {
  position: relative;
  padding: 2rem 4rem 5rem;
  background-color: #fff;
}

.ligth-box-content__close-button {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
}

</style>
