<template>
  <div
    class="image-container"
    :style="{
      gridRow: `${project.row - (isMobile ? project.id : 0)} / span 4`,
    }"
  >
    <img
      v-for="(image, index) of project.images"
      :key="image.url"
      :src="getImgUrl(image)"
      :alt="image"
      @click="showImage"
      :style="{
        maxHeight: getHeight,
        display: index > 1 && isMobile ? 'none' : 'block',
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
      return require(`../assets/${image}`)
    },
    showImage(e) {
      let url = e.target.getAttribute('alt')
      this.$emit('openModal', url)
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
  margin-top: 1rem;
  max-height: 30rem;

  @media screen and (max-width: $mobile-cutoff) {
    grid-column: 4 / span 5;
    justify-content: flex-end;
    margin-top: 4.2rem;
    max-height: 17.5rem;
    z-index: 1;
  }

  img {
    cursor: pointer;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    margin-right: 1rem !important;
    max-width: 100%;
    object-fit: cover;

    @media screen and (max-width: $mobile-cutoff) {
      margin-bottom: 0.5rem;
      margin-right: 0.5rem !important;
    }
  }
}
</style>
