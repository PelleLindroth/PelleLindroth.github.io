<template>
  <div
    class="image-container"
    :style="{
      gridRow: `${project.row[0]} / span ${project.row[1]}`,
    }"
  >
    <img
      v-for="image of project.images"
      :key="image.url"
      :src="getImgUrl(image)"
      :alt="image"
      :style="{ maxHeight: getHeight }"
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
  },
  props: {
    project: Object,
  },
  methods: {
    getImgUrl(image) {
      return require(`../assets/${image}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.image-container {
  display: flex;
  flex-wrap: wrap;
  grid-column: 4 / span 8;
  margin-top: 1rem;
  max-height: 30rem;

  img {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
}
</style>
