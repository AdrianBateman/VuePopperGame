<template>
  <div v-if="isOpen" class="lightbox" :id="id">
    <div class="lightbox-content">
      <button
        class="ligthbox-content__close-button"
        @click.prevent="handleCloseButtonClick"
      >Close</button>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Lightbox",
  props: {
    id: {
      type: String,
      default: undefined,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleCloseButtonClick() {
      this.$emit('closelightbox', this.id);
    },
  },
};
</script>

<style scoped lang="scss">
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
}

.lightbox-content {
  background-color: #fff;
  padding: 30px;
}
</style>