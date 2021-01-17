<template>
  <div ref="modal" class="image-modal">
    <img
      class="close-icon"
      @click="closeModal"
      :src="require('../assets/icons/clear-icon.svg')"
      alt="Close Icon"
    />
    <img
      @click="previousImage"
      class="arrow"
      :src="require('../assets/icons/arrow-left.svg')"
      alt="Left arrow"
    />
    <img
      class="screenshot"
      ref="screenshot"
      :src="getImgUrl(currentImage)"
      :alt="currentImage"
    />
    <img
      @click="nextImage"
      class="arrow"
      :src="require('../assets/icons/arrow-right.svg')"
      alt="Right arrow"
    />
  </div>
</template>

<script>
export default {
  computed: {
    currentImage() {
      if (this.index < 0 && this.index % this.images.length != 0) {
        return this.images[
          this.images.length +
            ((this.index % this.images.length) % this.images.length)
        ]
      } else {
        return this.images[this.index % this.images.length]
      }
    },
  },
  data() {
    return {
      index: this.imageIndex,
    }
  },
  methods: {
    closeModal(e) {
      this.$emit('closeModal', e)
    },
    getImgUrl(image) {
      return require(`../assets/phone-sceenshots/${image}`)
    },
    nextImage() {
      this.index++
    },
    previousImage() {
      this.index--
    },
  },
  props: {
    images: Array,
    imageIndex: Number,
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
  justify-content: space-around;
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
    max-width: 5rem;
  }

  .arrow {
    cursor: pointer;
    max-width: 2rem;
  }

  .screenshot {
    height: 80vh;
    @media screen and (max-width: $mobile-cutoff) {
      height: auto;
      width: 70vw;
    }
  }
}
</style>
