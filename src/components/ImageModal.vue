<template>
  <div ref="modal" class="image-modal">
    <img
      class="close-icon"
      @click="closeModal"
      :src="require('../assets/icons/clear-icon.svg')"
      alt="Close Icon"
    />
    <img :src="getImgUrl(image)" :alt="image" />
  </div>
</template>

<script>
export default {
  methods: {
    closeModal(e) {
      this.$emit('closeModal', e)
    },
    getImgUrl(image) {
      return require(`../assets/phone-sceenshots/${image}`)
    },
  },
  props: {
    image: String,
  },
}
</script>

<style lang="scss" scoped>
$mobile-cutoff: 750px;

.image-modal {
  align-items: center;
  background-color: rgba(20, 20, 20, 0.9);
  min-height: 100vh;
  display: flex;
  min-width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  @media screen and (max-width: $mobile-cutoff) {
    background-color: rgba(20, 20, 20, 0.9);
  }

  .close-icon {
    cursor: pointer;
    position: fixed;
    right: 3rem;
    top: 3rem;
    max-height: 5rem;

    @media screen and (max-width: $mobile-cutoff) {
      max-width: 5rem;
    }
  }

  img {
    margin: auto;
    height: 80vh;

    @media screen and (max-width: $mobile-cutoff) {
      height: 75vh;
    }
  }
}
</style>
