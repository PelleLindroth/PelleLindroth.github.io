<template>
  <div class="home-view-wrapper">
    <div class="title">
      <em>{{ $t('home.title') }}</em>
    </div>
    <h2>Brewdog Punk Wiki</h2>
    <p class="project-description" v-html="$t('home.project-description')"></p>
    <div class="links">
      <a
        href="https://github.com/PelleLindroth/brewdog-punk-wiki"
        class="link"
        target="_blank"
      >
        <img src="../assets/icons/github-icon.svg" alt="Github Icon" />
        <p>{{ $t('projects.links.github') }}</p>
        <img src="../assets/icons/go-arrow.svg" alt="Arrow Right Icon" />
      </a>
      <a
        href="https://pellelindroth.github.io/brewdog-punk-wiki/"
        class="link"
        target="_blank"
      >
        <img src="../assets/icons/web-icon.svg" alt="Web Icon" />
        <p>{{ $t('projects.links.live') }}</p>
        <img src="../assets/icons/go-arrow.svg" alt="Arrow Right Icon" />
      </a>
    </div>
    <div class="hero-container">
      <img src="../assets/macbook-vector-small.png" alt="MacBook Pro" />
      <video ref="video" loop muted playsinline>
        <source src="../assets/brewdog-demo.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    document.title = 'Pelle Lindroth'
  },
  name: 'Home',
  mounted() {
    this.$refs.video.play()
  },
}
</script>

<style lang="scss" scoped>
$mobile-cutoff: 750px;

.home-view-wrapper {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(auto-fill, 64px);
  margin: 4rem auto 0;
  max-width: 120rem;
  min-height: 100vh;

  @media screen and (max-width: $mobile-cutoff) {
    gap: 1rem;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(auto-fill, 1.6rem);
    margin: auto;
    padding: 0 1rem;
    width: 100vw;
    min-height: 100vh;
  }

  .image-modal {
    align-items: center;
    background-color: rgba(20, 20, 20, 0.7);
    height: 100vh;
    display: flex;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

    @media screen and (max-width: $mobile-cutoff) {
      background-color: rgba(20, 20, 20, 0.9);
    }

    .close-icon {
      cursor: pointer;
      position: fixed;
      right: 3rem;
      top: 3rem;
      width: 7rem;

      @media screen and (max-width: $mobile-cutoff) {
        width: 5rem;
      }
    }

    img {
      margin: auto;
      width: 80%;

      @media screen and (max-width: $mobile-cutoff) {
        width: 100%;
      }
    }
  }

  .title {
    display: flex;
    font-size: 2.4rem;
    font-weight: 300;
    grid-column: 1 / span 2;
    grid-row: 1;

    @media screen and (max-width: $mobile-cutoff) {
      grid-column: 1 / span 3;
      grid-row: 2;
      font-size: 1.4rem;
    }
  }

  h2 {
    color: #3298af;
    font-family: 'Kanit', sans-serif;
    grid-column: 1 / span 3;
    grid-row: 2;
    font-size: 4.8rem;
    line-height: 114%;

    @media screen and (max-width: $mobile-cutoff) {
      font-size: 2.6rem;
      grid-column: 1 / span 4;
      grid-row: 3 / span 2;
      letter-spacing: -0.5px;
      max-width: 16rem;
    }
  }

  .project-description {
    font-size: 1.8rem;
    font-weight: 300;
    grid-column: 1 / span 3;
    grid-row: 4 / span 2;

    @media screen and (max-width: $mobile-cutoff) {
      font-size: 1rem;
      grid-column: 4 / span 5;
      grid-row: 3 / span 3;
      margin-top: 0.5rem;
    }

    & /deep/ .api-link {
      color: #ececec;
      text-decoration: none;
      font-weight: 500;
    }
  }

  .hero-container {
    grid-column: 4 / span 7;
    grid-row: 2 / span 6;
    overflow: hidden;
    margin-top: -1rem;
    min-width: 69rem;
    position: relative;

    @media screen and (max-width: $mobile-cutoff) {
      grid-column: 1 / span 8;
      grid-row: 6 / span 9;
      margin-top: 1rem;
      min-width: 80%;
      object-fit: contain;
    }

    video {
      max-width: 70%;
      position: absolute;
      outline: none;
      top: 9%;
      left: 15.5%;
    }

    img {
      max-width: 100%;
      object-fit: contain;
    }
  }

  .links {
    grid-column: 1 / span 3;
    grid-row: 6;

    @media screen and (max-width: $mobile-cutoff) {
      grid-column: 1 / span 4;
      grid-row: 15 / span 2;
    }

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
        margin-right: 1.5rem;

        @media screen and (max-width: $mobile-cutoff) {
          font-size: 1rem;
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>
