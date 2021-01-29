<template>
  <div
    class="description-container"
    :style="{
      gridRow: `${project.row} / span 4`,
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
      <p v-html="$t(`projects.descriptions.${project.title}`)"></p>
    </div>

    <div class="links">
      <a :href="project.links[0]" class="link" target="_blank">
        <img src="../assets/icons/github-icon.svg" alt="Github Icon" />
        <p>{{ $t('projects.links.github') }}</p>
        <img
          v-if="!this.$root.isMobile"
          class="go-icon"
          src="../assets/icons/go-arrow.svg"
          alt="Arrow Right Icon"
        />
      </a>
      <a :href="project.links[1]" class="link" target="_blank">
        <img src="../assets/icons/web-icon.svg" alt="Web Icon" />
        <p>{{ $t('projects.links.live') }}</p>
        <img
          v-if="!this.$root.isMobile"
          class="go-icon"
          src="../assets/icons/go-arrow.svg"
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
  justify-content: center;

  @media screen and (max-width: $mobile-cutoff) {
    margin: 0 1.5rem 0 -1rem;
    grid-column: 2 / span 3;
  }

  h2 {
    font-family: 'Kanit', sans-serif;
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 114%;
    margin-bottom: 1.5rem;

    @media screen and (max-width: $mobile-cutoff) {
      font-size: 2.2rem;
      letter-spacing: -0.2px;
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
    margin-top: 1.5rem;

    .link {
      align-items: center;
      display: flex;
      margin-top: 0.5rem;
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
