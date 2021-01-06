<template>
  <div
    class="description-container"
    :style="{
      gridRow: `${project.row - (isMobile ? project.id : 0)} / span 4`,
    }"
  >
    <div>
      <h2
        :style="{
          color: project.color,
        }"
      >
        {{ project.title }}
      </h2>
      <p v-html="project.description"></p>
    </div>

    <div class="links">
      <a :href="project.links[0]" class="link" target="_blank">
        <img src="../assets/github-icon.svg" alt="Github Icon" />
        <p>Se kod på GitHub</p>
        <img
          class="go-icon"
          src="../assets/go-arrow.svg"
          alt="Arrow Right Icon"
        />
      </a>
      <a :href="project.links[1]" class="link" target="_blank">
        <img src="../assets/web-icon.svg" alt="Web Icon" />
        <p>Se sidan live</p>
        <img
          class="go-icon"
          src="../assets/go-arrow.svg"
          alt="Arrow Right Icon"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isMobile() {
      return this.$root.isMobile
    },
  },
  props: {
    project: Object,
  },
}
</script>

<style lang="scss" scoped>
$mobile-cutoff: 750px;

.description-container {
  display: flex;
  flex-direction: column;
  grid-column: 1 / span 3;
  justify-content: space-between;
  max-height: 30rem;

  @media screen and (max-width: $mobile-cutoff) {
    max-height: 21.6rem;
  }

  h2 {
    font-family: 'Kanit', sans-serif;
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 114%;
    margin-bottom: 1rem;

    @media screen and (max-width: $mobile-cutoff) {
      font-size: 2.2rem;
      letter-spacing: -0.2px;
      min-width: 30rem;
    }
  }

  p {
    font-size: 1.8rem;
    font-weight: 300;

    @media screen and (max-width: $mobile-cutoff) {
      font-size: 1.1rem;
    }
  }

  .links {
    .link {
      align-items: center;
      display: flex;
      margin-top: 5px;
      text-decoration: none;

      img {
        margin-right: 1rem;
        width: 2rem;

        @media screen and (max-width: $mobile-cutoff) {
          margin-right: 0.5rem;
          width: 1.2rem;
        }
      }

      p {
        color: #ececec;
        font-size: 1.4rem;
        font-weight: 500;
        margin-right: 1rem;

        @media screen and (max-width: $mobile-cutoff) {
          font-size: 1rem;
          margin-right: 0.5rem;
        }
      }
    }
  }
}
</style>
