<template>
  <div
    class="description-container"
    :style="{
      gridRow: `${project.row[0]} / span ${project.row[1]}`,
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
      <p>{{ project.description }}</p>
    </div>

    <div class="links">
      <a
        href="https://github.com/PelleLindroth/brewdog-punk-wiki"
        class="link"
        target="_blank"
      >
        <img src="../assets/github-icon.svg" alt="Github Icon" />
        <p>Se kod på GitHub</p>
      </a>
      <a
        href="https://pellelindroth.github.io/brewdog-punk-wiki/"
        class="link"
        target="_blank"
      >
        <img src="../assets/web-icon.svg" alt="Web Icon" />
        <p>Se sidan live</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
}
</script>

<style lang="scss" scoped>
$mobile-cutoff: 650px;

.description-container {
  display: flex;
  flex-direction: column;
  grid-column: 1 / span 3;
  justify-content: space-between;
  max-height: 30rem;

  h2 {
    font-family: 'Righteous', cursive;
    font-size: 3.6rem;
    margin-bottom: 1rem;

    @media screen and (max-width: $mobile-cutoff) {
      font-size: 2.2rem;
    }
  }

  p {
    font-size: 1.8rem;
    font-weight: 300;

    @media screen and (max-width: $mobile-cutoff) {
      font-size: 1rem;
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
          width: 1.2rem;
        }
      }
      p {
        color: #ececec;
        font-size: 1.4rem;
        font-weight: 500;

        @media screen and (max-width: $mobile-cutoff) {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
