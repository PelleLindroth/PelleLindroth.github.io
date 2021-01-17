<template>
  <div
    class="image-container"
    :style="{
      gridRow: `${project.row} / span 4`,
    }"
  >
    <img
      v-for="(image, index) of project.images"
      :key="image.url"
      :src="getImgUrl(image)"
      :alt="image"
      @click="showModal"
      :style="{
        maxHeight: '100%',
        display: index > 0 && isMobile ? 'none' : 'block',
        zIndex: 10 - index,
      }"
    />
  </div>
</template>

<script>
export default {
  computed: {
    getHeight() {
      if (this.project.images.length > 3) {
        return '50%'
      }
      return '100%'
    },
    isMobile() {
      return this.$root.isMobile
    },
  },
  props: {
    project: Object,
  },
  methods: {
    getImgUrl(image) {
      return require(`../assets/phone-sceenshots/${image}`)
    },
    showModal(e) {
      let index = this.project.images.findIndex(image => image == e.target.alt)

      this.$emit('openModal', this.project.images, index)
    },
  },
}
</script>

<style lang="scss" scoped>
$mobile-cutoff: 750px;

.image-container {
  display: flex;
  flex-wrap: wrap;
  grid-column: 4 / span 8;
  min-height: 34rem;

  @media screen and (max-width: $mobile-cutoff) {
    grid-column: 4 / span 5;
    justify-content: center;
    min-height: 30rem;
    z-index: 1;
  }

  img {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 2rem;
    box-shadow: 0rem 0rem 4rem rgba(255, 255, 255, 0.25),
      -10rem 2px 20rem rgba(255, 255, 255, 0.25);
    object-fit: contain;
    margin-right: 1rem;
    min-height: 100%;

    @media screen and (max-width: $mobile-cutoff) {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
